# 视频Benchmark整理汇总
这里的“公开”指研究者能找到数据或标注的获取入口，不等于视频可自由转载、商用，也不等于代码和数据都采用开源许可证。下载前请查看项目页的许可及原始视频版权。Hugging Face（下称 HF）是常见的数据托管平台；“需申请”通常指登录后同意数据集条件。

## 1. 整理目标与判断标准

目标是开发支持**文本、图片、视频输入的新 JEV 模型**。这里按组内 [Jev 数据格式](./jev数据格式.md) 的三种输出评估接入方式：Choice（各候选项的概率与置信度）、Noul（是／否命题的概率）、Score（有序等级与概率分布）。视频输入能力本身属于开发目标，不能用现有文本接口的限制否定视频基准。

视频问答能检查模型是否正确理解观察内容；动作选择、风险评分等任务才能进一步检查它是否作出合适的业务决策。因此第一版可以先用公开视频理解基准建立能力基线，再补 JEV 的具体应用场景。不能把视频问答高分直接解释成决策能力已经验证。

| 判断标准 | 判断依据 | 模型建议 |
| --- | --- | --- |
| 输入匹配 | 答题需要视频、文字、字幕，还是必须听音频？ | 当前明确目标不含音频；字幕可以作为文本输入，但需单列设置。 |
| 输出匹配 | 有选项、是非答案、等级三种标签 | 选择题最容易接入 Choice；坐标与时间区间需要另定输出结构，不能当作 Score 等级。 |
| 视频确实有用 | 仅凭题目、单帧或字幕是否就能作答？ | 优先动作、时序、计数等依赖视频的题。文字输入和单帧输入可作为对照实验。 |
| 可获取、可核分 | 视频、题目和正确答案能否对应？答案是否公开？ | 隐藏测试答案需要官方评测；失效源链接、申请条件都要记录。 |
| 标注与划分可信 | 答案是否明确？同一原视频的不同变体是否跨训练／测试？ | 避免答案泄漏；自行划分时按原视频分组，保留官方测试用途。 |
| 成本与覆盖 | 视频时长、分辨率、帧数、字幕和任务类别是否可承受？ | 建议先覆盖基础感知、综合理解，再加入长视频和推理。 |
| 评测可比较 | 是否保留原题、选项顺序、输入设置和评分方法？ | 改成是非题或添加候选项属于派生任务，不能直接与原榜单成绩比较。 |

本文件的适合度是根据公开任务说明作出的**初筛建议**，尚未逐条检查视频、执行模型评测或确认全部下载链接可用。下面合并列出公开来源与接入建议，并总结第一版清单及后续扩展方向。

## 2. 公开数据来源与初筛建议（34 项）

“第一批”表示优先抽样核查；“第二批”表示适合扩大覆盖；“条件接入”表示先解决题型、输入或下载问题；“暂缓”表示当前输出设计或数据身份尚不匹配。优先级是本项目的判断，不是作者给出的评价。

| 类别 | Benchmark（按截图） | 来源与获取情况 | 主要检验内容 | JEV 接入建议 | 原因／接入前检查 |
| --- | --- | --- | --- | --- | --- |
| 通用感知 | TOMATO | **公开**。[官方 HF 数据](https://huggingface.co/datasets/yale-nlp/TOMATO)；[代码与下载说明](https://github.com/yale-nlp/TOMATO)。视频和问答数据可获取。 | 运动计数、方向、旋转、轨迹等 | **第一批：Choice** | 原生有选项和答案，适合测视频时序感知；不是业务动作决策数据。视频需另取压缩包。 |
| 通用感知 | MotionBench | **部分公开**。[官方 HF 数据](https://huggingface.co/datasets/zai-org/MotionBench)；[官方说明](https://github.com/zai-org/MotionBench)。自采数据有下载入口；部分视频来自既有数据集，需另从原数据集取得。 | 细粒度运动理解 | **第一批候选：Choice** | 与视频能力匹配；先核实来源视频能否完整获取。 |
| 通用感知 | TVBench | **公开，部分视频需按说明获取**。[官方 HF 数据](https://huggingface.co/datasets/FunAILab/TVBench)；[代码](https://github.com/daniel-cores/tvbench)。部分来源视频依赖 NTU RGB+D 等原数据源。 | 时间顺序、动作与变化理解 | **第一批候选：Choice** | 适合检查模型是否使用时间信息；部分视频需从原数据源获取。 |
| 通用感知 | MVBench | **公开**。[官方 HF 数据](https://huggingface.co/datasets/OpenGVLab/MVBench)；[官方项目代码](https://github.com/OpenGVLab/Ask-Anything/tree/main/video_chat2)。 | 多类别视频感知与理解 | **第一批：Choice** | 可建立通用能力基线；分任务统计，避免总分掩盖运动类缺陷。 |
| 通用感知 | TempCompass | **公开**。[官方代码及视频下载说明](https://github.com/llyx97/TempCompass)，包含题目，处理后视频可从其列出的网盘或 HF 获取。 | 时间理解，多种问答形式 | **第一批：选择题／是非题子集** | 分别映射 Choice／Noul；描述生成等任务另行评估，不能混成同一输出。 |
| 通用感知 | PercTest | **公开，名称疑为简称**。按 **Perception Test** 核对：[官方数据与下载说明](https://github.com/google-deepmind/perception_test)。截图中的 PercTest 未见独立同名基准，建议回查原表。 | 感知问答、跟踪等多任务 | **条件接入：问答子任务** | 先确认指 Perception Test；选择题适合，跟踪坐标等输出需单独定义。 |
| 综合 | VideoMME | **公开，研究用途限制**。[数据及视频](https://huggingface.co/datasets/lmms-eval/Video-MME)；[官方说明](https://github.com/MME-Benchmarks/Video-MME)。官方写明仅学术研究、禁止商用及未经许可再分发。 | 综合视频理解，不同长度 | **第一批：Choice** | 适合作为综合基线；区分字幕设置，检查题目是否依赖声音及许可。 |
| 综合 | VideoMME v2 | **公开**。[官方 HF 数据](https://huggingface.co/datasets/MME-Benchmarks/Video-MME-v2)；[官方代码](https://github.com/MME-Benchmarks/Video-MME-v2)。与上一行是不同版本。 | 新版本综合理解 | **第二批：确认版本与设置** | 可增加覆盖；第一版可先选一个版本，两个版本成绩不能混合。 |
| 综合 | CGBench | **需同意访问条件**。对应 **CG-Bench**：[官方 HF 数据](https://huggingface.co/datasets/CG-Bench/CG-Bench)；[官方代码](https://github.com/CG-Bench/CG-Bench)。页面公开，但文件需登录并接受条件。 | 长视频理解与证据定位 | **条件接入：选择题部分** | 需接受访问条件；答案选择可用，证据时间定位需另外的输出和指标。 |
| 综合 | VideoZeroBench | **公开**。[作者 HF 数据](https://huggingface.co/datasets/marinero4972/VideoZeroBench)；[官方代码](https://github.com/marinero4972/VideoZeroBench)。 | 挑战性视频理解 | **第二批：逐题核查后选子集** | 优先确认最终答案结构与视觉证据要求，不预设所有任务都能直接转 Choice。 |
| 长视频 | MLVU-dev | **公开开发集**。[项目 HF 数据](https://huggingface.co/datasets/MLVU/MVLU)；[官方代码](https://github.com/JUNJIE99/MLVU)。HF 仓库名是 `MVLU`，但内容为 MLVU；注意选 Dev 集。 | 长视频多任务理解 | **第二批，或第一版的长视频补充** | 先接有选项子任务；Dev 是开发集，调参后不能宣称是独立隐藏测试成绩。 |
| 长视频 | LVBench | **部分公开**。[官方标注与视频 ID](https://huggingface.co/datasets/zai-org/LVBench)；[下载脚本](https://github.com/zai-org/LVBench)。原视频需按 YouTube ID 获取，可能有失效链接。 | 长视频综合理解 | **第二批：Choice** | 主要约束是长视频处理成本与原视频链接可用性。 |
| 长视频 | LongVideoBench | **公开**。[官方 HF 数据](https://huggingface.co/datasets/longvideobench/LongVideoBench)；[官方代码](https://github.com/longvideobench/LongVideoBench)。部分网络视频需要根据链接获取。 | 长视频中的信息检索与理解 | **第二批，或第一版的长视频补充：Choice** | 适合检查跨时间信息；明确字幕输入和抽帧策略。 |
| 长视频 | VideoEval-Pro | **公开**。[官方 HF 数据与视频包](https://huggingface.co/datasets/TIGER-Lab/VideoEval-Pro)；[代码](https://github.com/TIGER-AI-Lab/VideoEval-Pro)。题目改编自 Video-MME、MLVU、LVBench、LongVideoBench。 | 改编的短答案视频问答 | **条件接入／暂缓直接接入** | 自由短答案不直接对应三类输出；添加候选项会改变任务，不能沿用原榜单比较。 |
| 长视频 | EgoSchema | **公开但需接受平台规则**。[官方获取说明](https://github.com/egoschema/EgoSchema)；[项目页](https://egoschema.github.io/)。推荐从 Kaggle 竞赛页接受规则后下载；视频源于 Ego4D，应遵守其许可。 | 第一视角长视频理解 | **第二批：Choice** | 与真实行为观察相关；先用可获得答案的部分，全量隐藏答案走官方评测。 |
| 视频推理 | Video-Holmes | **公开**。[官方 HF 数据及视频](https://huggingface.co/datasets/TencentARC/Video-Holmes)；[代码](https://github.com/TencentARC/Video-Holmes)。 | 视频中的多步推理 | **第二批：按题型选子集** | 适合提高推理难度；核实选项、音频依赖和输入配置。 |
| 视频推理 | Minerva | **标注公开，视频按链接获取**。[Google DeepMind 官方数据说明](https://github.com/google-deepmind/neptune#minerva)。提供问答及推理标注 JSON、YouTube 视频链接，未见统一的视频包。 | 复杂视频推理 | **第二批：选择题配置** | 有公开标注，但原视频需按链接获得；推理文字不能当作输入泄漏答案。 |
| 视频推理 | Minerva w/sub.（本轮采用） | **同一数据的字幕评测设置**。[Minerva 官方数据](https://github.com/google-deepmind/neptune#minerva)。未查到独立的“w/sub.”数据集；它通常表示评测时额外提供字幕，字幕是否齐全需对视频逐一核实。 | 同一任务加字幕 | **第二批：独立输入设置** | 不重复算成新的数据集；用于比较字幕是否帮助视频推理。 |
| 视频推理 | VRBench | **公开**。对应长叙事视频多步推理基准：[官方 HF 数据](https://huggingface.co/datasets/OpenGVLab/VRBench)；[项目页](https://vrbench.github.io/)。另有同名迷宫视频 VR-Bench，此处按截图类别选前者。 | 长叙事视频多步推理 | **第二批：最终答案选择部分** | 适合最终判断；原有推理过程评价不等于 JEV 的选项概率评价。 |
| 视频推理 | VCRBench | **公开**。对应长视频因果推理基准：[作者 HF 数据](https://huggingface.co/datasets/pritamqu/VCRBench)；[代码](https://github.com/pritamqu/VCRBench)。部分视频来自 CrossTask，需遵守原许可。不要与 `VCR-Bench` 视频思维链基准混淆。 | 长视频因果推理 | **条件接入** | 先确认截图指向的具体项目与最终题型，再决定 Choice 映射；注意同名项目。 |
| 视频推理 | VideoReasonBench | **公开**。[官方 HF 数据](https://huggingface.co/datasets/lyx97/reasoning_videos)；[代码](https://github.com/llyx97/video_reason_bench)。 | 观察、隐状态推断与预测 | **适合能力研究，暂缓直接按原题接入** | 原题含状态、坐标、序列等开放答案；可设计派生 Choice／Noul，但需独立命名、检查候选答案。 |
| 视频推理 | LongVideoReason | **公开**。对应 **LongVideo-Reason**：[HF 数据](https://huggingface.co/datasets/LongVideo-Reason/longvideo-reason)；[项目代码](https://github.com/NVlabs/Long-RL/tree/main/longvideo-reason)。它还包含训练数据，评测时需选对应测试划分。 | 长视频推理 | **第二批：测试集匹配题型** | 包含训练数据；先确认对应测试题的输出和视频获取方式，不混用训练划分。 |
| 视频知识 | VideoMMMU | **需同意访问条件**。[项目 HF 数据](https://huggingface.co/datasets/lmms-lab/VideoMMMU)；[官方代码](https://github.com/EvolvingLMMs-Lab/VideoMMMU)。公开页面可见，下载需登录并接受条件。 | 跨学科视频知识与理解 | **第二批：选择题部分** | 增加知识覆盖；需接受访问条件，核实是否必须听音频或读取字幕。 |
| 视频知识 | MMVU-all | **部分公开**。按 **MMVU** 全任务理解：[官方 HF 验证集](https://huggingface.co/datasets/yale-nlp/MMVU)；[官方代码](https://github.com/yale-nlp/MMVU)。官方测试集隐藏；`all` 更像评测配置名。 | 专业知识，多种问答形式 | **第二批：公开验证集选择题部分** | `all` 不代表全任务都直接匹配；开放答案另处理，隐藏测试答案不能本地核分。 |
| 视频知识 | SciVideo | **未找到可确认的同名评测集**。[Seed2.0 基准展示](https://seed.bytedance.com/zh/seed2/)出现 SciVideo，但未找到其官方评测数据下载入口。[另一个同名数据](https://huggingface.co/datasets/MCG-NJU/VideoChat3-LV116k)是 VideoChat3 的 SciVideo 训练素材，不能直接视为截图中的评测集。 | 身份尚未确认 | **暂缓** | 尚未找到截图对应的公开评测数据；不能用同名训练数据代替。 |
| 视频知识 | VideoMathQA | **公开**。[官方 HF 数据](https://huggingface.co/datasets/MBZUAI/VideoMathQA)；[代码](https://github.com/mbzuai-oryx/VideoMathQA)。 | 视频数学理解与推理 | **条件接入** | 抽样核查选项结构、声音／字幕依赖；用于专项数学能力，不作为基础视频感知的替代。 |
| 时间定位 | Charades-TL | **公开**。截图缩写对应 **Charades-TimeLens**：[TimeLens-Bench 官方数据](https://huggingface.co/datasets/TencentARC/TimeLens-Bench)；[下载说明](https://github.com/TencentARC/TimeLens)。这是对 Charades-STA 的人工修订版本。 | 根据文字定位动作时间段 | **暂缓原任务** | 原答案是时间区间；若构造“哪个候选片段正确”，属于新的 Choice 任务。 |
| 时间定位 | ActivityNet-TL | **公开**。对应 **ActivityNet-TimeLens**：[同一官方数据仓库](https://huggingface.co/datasets/TencentARC/TimeLens-Bench)；[说明](https://github.com/TencentARC/TimeLens)。源于 ActivityNet Captions。 | 事件时间定位 | **暂缓原任务** | 同上，需时间区间输出及对应定位指标。 |
| 时间定位 | QVHighlight-TL | **公开**。对应 **QVHighlights-TimeLens**：[同一官方数据仓库](https://huggingface.co/datasets/TencentARC/TimeLens-Bench)；[说明](https://github.com/TencentARC/TimeLens)。截图少写了 `s`。 | 时刻检索／相关片段定位 | **暂缓原任务** | 原定位输出与当前三种结构不直接对应；不能把秒数称为有序等级。 |
| 时空定位 | STVG | **名称不唯一，需确认具体集**。STVG 是 *Spatio-Temporal Video Grounding*（按文本同时定位视频中的时间段和目标区域）的任务简称，常见公开集有 [VidSTG](https://github.com/Guaranteer/VidSTG-Dataset) 和 [HC-STVG](https://github.com/tzhhhh123/HC-STVG)。截图未指定其中哪一个。 | 时间段与空间区域定位 | **暂缓** | 先锁定数据集；随后需要时间区间和框坐标输出。 |
| 时间检索 | VUE-TR V2 | **标注公开，视频需自行获取**。[字节跳动官方代码与标注](https://github.com/bytedance/vidi/tree/main/VUE_TR_V2)。提供视频 ID、标注和评测脚本；原视频按 YouTube ID 下载。 | 视频时间检索 | **暂缓原任务** | 时间定位输出需扩展；还需核实原视频可获取性。 |
| 流式视频 | OVOBench | **公开**。对应 **OVO-Bench**：[官方 HF 数据与视频包](https://huggingface.co/datasets/JoeLeelyf/OVO-Bench)；[代码和下载说明](https://github.com/JoeLeelyf/OVO-Bench)。数据采用 CC BY-NC-SA 4.0，视频还受来源许可约束。 | 持续视频中的在线理解／响应 | **第二阶段：流式接口具备后** | 各子任务单独核查；主动响应时机不能只靠 Choice 正确率表示。 |
| 流式视频 | OVBench | **公开**。[官方 HF 数据与视频包](https://huggingface.co/datasets/MCG-NJU/OVBench)；[官方项目与评测代码](https://github.com/MCG-NJU/VideoChat-Online)。视频包含序列帧和片段，下载时需按官方数据准备说明组织。 | 随时间到达的视频问答 | **第二阶段：匹配题型子集** | 需按问题时刻提供视频历史，禁止看到未来帧；先确认答案格式。 |
| 流式视频 | ODVBench | **公开**。对应 **ODV-Bench**：[作者 HF 数据（视频、标注）](https://huggingface.co/datasets/MCG-NJU/ODV-Bench)；[项目代码](https://github.com/MCG-NJU/StreamForest)。 | 流式驾驶场景理解 | **第二阶段：专项场景** | 适合未来的驾驶判断研究；先实现时间输入约束，视频问答标签不自动等于最佳驾驶动作。 |

### 使用前需要确认的几项

- `PercTest`、`MMVU-all`、`Minerva w/sub.` 和三个 `-TL` 名称像表格中的评测简称；上表给出最可能对应的官方数据及依据。
- `STVG` 无法从截图唯一定位。若原表有论文、评测脚本或任务配置，应以那个来源重新锁定数据集。
- `SciVideo` 暂无可确认的公开评测数据；不要用同名训练素材代替。
- 对有门槛、隐藏测试答案、原视频需单独下载的条目，表中“公开”不代表可直接完整复现实验。

## 3. 采纳清单与后续扩展总结

### 3.1 第一版建议采纳：三项核心数据加一项时序补充

第一版建议采用 **TOMATO + MVBench + VideoMME + TempCompass 的匹配子任务**，先覆盖运动感知、通用视频理解、综合理解，以及 Choice／Noul 两类判断。这里是建议清单，完整采纳前仍需抽样确认视频、题目、答案能够对应，且输入设置与许可满足项目要求。

| 数据 | 第一版采用范围 | 在评测中的作用 |
| --- | --- | --- |
| TOMATO | 原生选择题，保留任务分类与选项顺序 | 检查计数、方向、旋转等运动理解，发现模型对连续视频信息的依赖。 |
| MVBench | 可获取视频和答案的选择题子任务 | 建立多类别视频理解基线，按子任务发现能力短板。 |
| VideoMME | 与当前输入能力匹配的选择题；字幕设置单列 | 观察综合理解表现及不同视频长度的影响；不能把必须依赖声音的题混入纯视觉成绩。 |
| TempCompass | 选择题与是非题子集 | 补充时序判断，分别检查 Choice 和 Noul；描述生成等任务暂不合并计分。 |

如果时间或算力有限，先跑前三项的小规模、覆盖不同任务的样本，再加入 TempCompass；如果更强调严格的时间理解，也可以用 **TVBench 替换或补充 TempCompass**，前提是来源视频能取得。抽样结果应标为试跑，不作为全量官方成绩。

这套清单可以回答“JEV 能否依据视频作出正确选择或是非判断”，但还没有覆盖可靠的风险等级评分和真实业务动作选择。当前候选主要用于视频能力评测，不能仅凭格式能转成 Choice 就认为业务决策能力已得到验证。

### 3.2 可以适当补充：扩大覆盖，沿用现有输出

下列数据可以在基础流程跑通后补入，优先选择原生答案能够映射到现有输出的部分；长视频会增加输入与推理成本，但不必因此修改 Choice／Noul 的输出定义。

| 想补的能力 | 建议数据 | 采用方式与顺序 |
| --- | --- | --- |
| 更细的运动理解 | MotionBench、TVBench | 先确认源视频完整性，再补有选项子任务；用于分析 TOMATO／MVBench 未覆盖的细节。 |
| 长视频记忆与检索 | MLVU-dev、LongVideoBench；之后考虑 LVBench、EgoSchema | 第一轮从前两者选一个，接选择题部分；再按成本和可用答案增加其他数据。开发集调参结果与独立测试结果分开。 |
| 多步、因果及叙事推理 | Video-Holmes、Minerva、VRBench、LongVideoReason | 从最终答案结构匹配的子任务开始；VCRBench 先锁定具体项目与题型。 |
| 专业知识与数学 | VideoMMMU、MMVU 的公开验证集、VideoMathQA | 检查访问条件、选项结构和声音依赖后加入；数学题作为专项结果报告。 |
| 更广的综合理解 | VideoMME v2、CGBench 的选择题部分、VideoZeroBench | 核实版本、题型和访问条件；不同版本与子任务分别计分。 |
| 字幕提供的帮助 | Minerva w/sub.，以及其他基准允许的字幕设置 | 将字幕作为文本输入，比较有／无字幕结果；这属于评测设置，不算新增独立数据集。 |

优先补充与当前短板对应的数据，不必第一版把全部候选都跑完。例如计数差就加强运动类，长视频下降明显就增加长视频数据，最终选择正确但概率过于自信就改进概率评测。

### 3.3 增添功能后可以加入哪些数据

| 需要增添的功能 | 扩展后可加入的数据 | 为什么现在不直接完整采用 |
| --- | --- | --- |
| 时间区间输出与定位评分 | Charades-TL、ActivityNet-TL、QVHighlight-TL、VUE-TR V2，以及 CGBench 的证据定位部分 | 原答案是起止时间等定位结果，需要定义相应结构和区间重叠等指标；Score 的有序等级不能直接替代时间坐标。 |
| 空间框与时间段的联合输出 | STVG 对应的 VidSTG 或 HC-STVG；Perception Test 的部分定位／跟踪任务 | 先明确数据集与具体任务，再增加框坐标、轨迹或时间区间结构及对应评分。 |
| 流式视频处理 | OVOBench、OVBench、ODVBench | 流式指视频随时间逐步到达；需要维护已见历史、按提问时刻截断输入，并在相关子任务中评价响应时机，防止使用未来帧。 |
| 自由文本、状态或序列答案及相应核分 | VideoEval-Pro、VideoReasonBench，以及其他基准的开放答案子任务 | 原题不能全部映射到 Choice／Noul／Score；需要扩大输出形式并按任务增加答案评分方法。 |
| 音频输入与多模态同步 | 上表中抽样确认必须听声音的题目／子任务 | 当前明确目标是文本、图片、视频；只有决定扩展音频后才完整评价这部分，并与无音频设置分开。 |

如果暂时不扩展输出，也可以从 VideoReasonBench 等数据构造 Choice／Noul 派生题，但需要人工检查选项和正确答案，标明“组内改编”，单独报告；不能与原 benchmark 榜单直接比较。

### 3.4 还需要补齐的 JEV 场景与评测内容

- **实际决策数据：** 根据 JEV 的具体应用场景，补“观察视频后选择动作／工具”的 Choice 任务、“是否需要介入”的 Noul 任务，以及“风险／优先级等级”的 Score 任务。现有视频问答答案不能自动作为最佳动作或风险等级标签，这部分需要明确判断规则并人工核查。
- **概率质量：** 同时报告准确率和概率指标，例如 Brier 分数（预测概率与真实标签的平方误差）或对数损失（更重地惩罚错误且过于自信的预测）。唯一正确选项可用于计算指标，但不等于已经获得专家标注的“真实置信度”。
- **输入对照：** 在可比设置下比较文本、单帧、多帧／视频输入，以及有／无字幕输入，确认成绩提升确实来自模型使用了视频信息。
- **暂缓项：** SciVideo 等身份或获取入口尚未确认的候选先保留记录，补齐官方来源后再采纳；隐藏测试答案采用官方评测方式，不用同名训练数据替代。

总体建议是：**第一版先建立可复现的视频理解与判断基线，随后按能力短板补长视频、推理和知识数据；时间定位、空间定位、流式交互及开放答案任务，等对应功能与评分方法具备后再加入。** 实际业务决策与 Score 等级任务应作为独立补充方向规划。

## 4. 你负责的整理工作与交付内容

你的工作是把候选的来源、任务、可用性和适合度说明清楚，让负责 pipeline 的同学决定怎么接入。Evaluation pipeline 指从“读取数据 → 处理视频 → 构造输入 → 调用模型 → 解析输出 → 对答案评分 → 汇总结果”的整套评测流程。

每个候选至少记录：

- 官方来源与准确版本／子任务，视频、题目、答案分别在哪里。
- 2–5 条人工浏览样例的 ID、题型和输入需求；无法看视频时明确写“仅查标注”。
- 能否接 Choice／Noul／Score；需要改题时说明修改点。
- 下载门槛、答案是否隐藏、许可、预计处理成本与失效链接。
- 推荐第一批／第二批／暂缓的理由，以及仍需确认的问题。

交接后由 pipeline 负责人完成视频解码、输入格式适配、模型调用和评分；你们一起确认第一版任务清单。正式汇总时保留原题、字幕设置、帧数／采样规则和评测划分，避免同名基准实际测的是不同任务。


## 本轮MINERVA设置修正（2026-10-03）

本轮目标为Minerva w/sub.：视频＋带时间信息的字幕／ASR文本。底层MINERVA问答共用，不重复算独立数据源，但必须保留字幕输入要求。已取得五条YouTube现有英文字幕，一题未取得；它们不是论文作者ASR，不能宣称与原表设置完全等价。详见[带字幕核查报告](../数据源样例/Minerva-w-sub/人工筛选报告.md)。
