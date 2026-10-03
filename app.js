'use strict';
const data = window.BENCHMARK_DATA;
const main = document.getElementById('main');
const list = document.getElementById('dataset-list');
let selected = null;
const esc = value => String(value ?? '待填写').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const plain = value => String(value || '待填写').replace(/\*\*/g,'').replace(/`/g,'');
const safeURL = url => /^https?:\/\//i.test(url || '') ? url : '';
const reportURL = d => 'https://github.com/goldfisheep/video_benchmark_guideline/blob/main/' + d.report_path.split('/').map(encodeURIComponent).join('/');
function navigation(){
  const term = document.getElementById('search').value.toLowerCase();
  list.innerHTML = '';
  data.datasets.filter(d => (d.name + d.category + d.priority).toLowerCase().includes(term)).forEach(d => {
    const button = document.createElement('button');
    button.className = 'dataset' + (selected === d.name ? ' active' : '');
    button.innerHTML = esc(d.name) + '<small>' + esc(d.priority) + ' · ' + d.samples.length + ' 条标注</small>';
    button.onclick = () => {location.hash = encodeURIComponent(d.name);};
    list.append(button);
  });
}
function overview(){
  selected=null; navigation();
  const sampleCount=data.datasets.reduce((n,d)=>n+d.samples.length,0);
  const reviewed=data.datasets.reduce((n,d)=>n+d.samples.filter(s=>s.review['是否看过正式片段']==='是').length,0);
  main.innerHTML='<h2>整体数据源选择</h2><div class="stats"><div class="stat"><strong>'+data.datasets.length+'</strong><span>待筛候选数据源</span></div><div class="stat"><strong>'+sampleCount+'</strong><span>已录入样例标注</span></div><div class="stat"><strong>'+reviewed+'</strong><span>记录为已看正式片段</span></div></div><div class="notice">正式采用数量仍待核查。当前目录规划预算合计 '+data.datasets.reduce((n,d)=>n+(Number(d.planned_questions)||0),0)+' 题；预算不代表已确认可用题量。整源移出与暂缓原因见<a href="https://github.com/goldfisheep/video_benchmark_guideline/blob/main/%E6%95%B0%E6%8D%AE%E6%BA%90%E5%89%94%E9%99%A4%E4%B8%8E%E6%9A%82%E7%BC%93%E8%AE%B0%E5%BD%95.md" target="_blank" rel="noopener">目录清理记录</a>。</div><section class="card"><h3>候选与决策进度</h3><div class="table-wrap"><table><thead><tr><th>数据源</th><th>计划角色</th><th>计划题数</th><th>最终选择</th><th>依据／范围</th></tr></thead><tbody>'+data.datasets.map((d,i)=>'<tr><td><button class="text-link" data-index="'+i+'">'+esc(d.name)+'</button></td><td>'+esc(d.priority)+'</td><td>'+(d.planned_questions || '待填写')+'</td><td class="pending">'+esc(d.final_decision)+'</td><td>'+esc(d.decision_reason)+'<br>'+esc(d.selected_scope)+'</td></tr>').join('')+'</tbody></table></div></section><section class="card"><h3>怎样核查</h3><p>选一个数据源，先看 3–6 条不同任务的样例，入选后扩到约 15–20 条。核对正式视频、输入依赖、答案与输出适配；将证据写入样例记录，再形成数据源结论。</p><p>时间定位、时空定位、开放答案和身份未确认的候选移出本轮；完整原因见整体报告。流式候选保留为扩展备用。Score 等级和实际动作决策仍需专门数据。</p></section>';
  main.querySelectorAll('[data-index]').forEach(b=>b.onclick=()=>{location.hash=encodeURIComponent(data.datasets[Number(b.dataset.index)].name);});
}
function dataset(d){
  selected=d.name; navigation();
  const links=d.sources.map(s=>'<a href="'+esc(safeURL(s.url))+'" target="_blank" rel="noopener">'+esc(s.label)+' ↗</a>').join('');
  main.innerHTML='<h2>'+esc(d.name)+'</h2><p><span class="badge">'+esc(d.priority)+'</span><span class="badge">最终结论：'+esc(d.final_decision)+'</span></p><section class="card"><h3>数据源与筛选报告</h3><dl><dt>类别与能力</dt><dd>'+esc(d.category)+'</dd><dt>版本／设置</dt><dd>'+esc(plain(d.version))+'</dd><dt>初步输出映射</dt><dd>'+esc(plain(d.known_output))+'</dd><dt>视频获取建议</dt><dd>'+esc(plain(d.viewing_guidance))+'</dd><dt>最终判断依据</dt><dd>'+esc(d.decision_reason)+'</dd><dt>最终采用范围</dt><dd>'+esc(d.selected_scope)+'</dd></dl><div class="links">'+links+'<a href="'+reportURL(d)+'" target="_blank" rel="noopener">人工筛选报告 ↗</a></div></section><section class="card"><h3>样例视频与问答</h3><div id="samples"></div></section>';
  const holder=document.getElementById('samples');
  if(!d.samples.length){holder.innerHTML='<div class="empty">样例 ID、视频、题目、答案及核查结果：待填写。<br>先取得一条真实标注，新增到本数据源的样例清单，再更新网页数据。</div>';return;}
  holder.innerHTML='<label for="sample-select">选择样例</label><select id="sample-select">'+d.samples.map((s,i)=>'<option value="'+i+'">'+esc(s.sample_id)+' · '+esc(s.subtask)+'</option>').join('')+'</select><div id="sample"></div>';
  const render=()=>sample(d,d.samples[Number(document.getElementById('sample-select').value)]);
  document.getElementById('sample-select').onchange=render;render();
}
function sample(d,s){
  const holder=document.getElementById('sample');
  const external=safeURL(s.video_url);
  const local=s.video_path && !/^\/|(^|\/)\.\.(\/|$)|:/i.test(s.video_path) ? s.video_path : '';
  const video=external || local;
  holder.innerHTML=(video ? '<video controls preload="metadata" playsinline src="'+esc(video)+'"></video><p id="video-error" class="muted" hidden>视频加载失败，请检查路径、访问条件或浏览器支持的编码。</p>' : '<div class="empty">本页尚无可播放的视频入口；可能仅保存在本地，或公开展示条件待确认。获取状态请查看视频来源和样例记录。</div>')+'<p class="muted">视频来源：'+esc(s.video_source)+'</p><p class="question">'+esc(s.question_zh || s.question)+'</p><p class="muted">原题：'+esc(s.question)+'</p>'+(s.options.length ? '<ol class="options" type="A">'+s.options.map(o=>'<li>'+esc(o)+'</li>').join('')+'</ol>':(s.content_access==='local_only'?'<p>原题选项仅在本地核查文件中提供。</p>':'<p>选项：待填写或原题无选项。</p>'))+'<details><summary>显示官方参考答案</summary><p>'+esc(s.reference_answer)+'</p><p class="muted">'+(s.answer_index!==null?'原始答案下标：'+esc(s.answer_index)+'（页面展示统一从 0 编号）。':'答案编号规则：待填写。')+'</p>'+(safeURL(s.annotation_source)?'<a href="'+esc(s.annotation_source)+'" target="_blank" rel="noopener">查看标注来源 ↗</a>':'')+'</details><details open><summary>人工核查记录与判断依据</summary><dl>'+Object.entries(s.review).map(([k,v])=>'<dt>'+esc(k)+'</dt><dd>'+esc(v)+'</dd>').join('')+'</dl></details>';
  const player=holder.querySelector('video');if(player)player.addEventListener('error',()=>{document.getElementById('video-error').hidden=false;});
}
function route(){let name='';try{name=decodeURIComponent(location.hash.slice(1));}catch{}const d=data.datasets.find(d=>d.name===name);if(d)dataset(d);else overview();}
document.getElementById('search').oninput=navigation;
document.getElementById('overview').onclick=()=>{location.hash='';overview();};
window.addEventListener('hashchange',route);route();
