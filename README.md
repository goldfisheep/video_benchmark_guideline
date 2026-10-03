# 视频Benchmark筛选与样例浏览

这里记录 JEV 视频评测数据的选择、样例与人工判断。当前有 25 个候选目录，其中 6 项为第一版推荐、3 项为流式扩展备用；所有最终决定待填写。已有 TOMATO 0209-03 的官方标注，尚未放入实际视频。

**在线浏览：[视频样例与筛选判断](https://goldfisheep.github.io/video_benchmark_guideline/)**。成员可直接访问，无需下载仓库。

## 成员从哪里看

1. [整体数据源选择](./整体数据源选择.md)：整体结论及证据入口。
2. [样例浏览页](./index.html)：选择数据源、视频样例，阅读题目并展开答案及核查记录。
3. 数据源样例下的人工筛选报告：各数据源的抽样覆盖和最终判断。

## 本地预览

双击 index.html 可直接浏览；页面不依赖外部网站脚本。播放仍需要实际的视频文件或可访问视频地址。也可以在此目录运行 `python -m http.server 8000`，浏览器打开 http://localhost:8000。

## 添加和维护样例

- 在相应数据源的样例清单.json 中，将 sample_template 复制到 samples，填写实际信息；占位模板不算正式样例。
- 视频放入对应 videos 文件夹；video_path 填相对本仓库根目录的路径，video_url 用于外部直达视频地址。未取得视频时两者均为空。
- review 中需要人工判断的字段统一为“待填写”；查看后写实际证据。
- 数据源结论写入人工筛选报告.md 和整体数据源选择.md，同时同步 catalog.json 的最终状态、范围及理由。
- 修改 JSON 后在仓库根目录执行 `python build_preview.py`，生成 data.js，再将修改文件一起提交。网页读取 data.js；人工报告 Markdown 是可独立阅读的证据记录。

## 发布到 GitHub Pages

1. 在 GitHub 创建空的公开仓库，例如 video-benchmark-review。
2. 上传本目录中的文件与数据源样例子目录，确保 index.html 在仓库根目录。
3. 仓库 Settings → Pages → Deploy from a branch，选择 main 分支和 / (root)，保存。
4. 部署成功后，从 Pages 的 Visit site 获取真实网站地址，再填入下方访问地址。

仓库地址：https://github.com/goldfisheep/video_benchmark_guideline

网站地址：https://goldfisheep.github.io/video_benchmark_guideline/ 。2026-10-02 已验证网站可访问，数据源切换、搜索、答案展开及手机布局正常；实际视频尚待加入。

公开仓库内容和 Pages 页面可被他人访问；视频是否允许再分发需逐来源核查，受限素材可仅记录来源。不要将整个原始视频数据集放入本样例库。

## 文件组织

整体数据源选择.md 与数据源样例文件夹平行。每个数据源目录含人工筛选报告.md、样例清单.json 和 videos。参考资料保留原来源汇总；原 8 项移出原因及 Minerva 字幕合并说明见整体选择文件。


## MINERVA核查设置

本轮显示为Minerva w/sub.，目录为数据源样例/Minerva-w-sub；同一MINERVA问答采用带字幕输入。五份YouTube字幕在本地取得，一题缺字幕；字幕不是官方reasoning，不能省略带字幕设置。历史本地路径保留Minerva本地核查。
