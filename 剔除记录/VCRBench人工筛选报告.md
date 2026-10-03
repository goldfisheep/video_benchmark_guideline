# VCRBench：人工核查与整源剔除记录

2026-10-03。余金洋已查看三条正式包片段；按当前JEV输入/输出条件，本轮移出整个VCRBench候选目录。

## 剔除理由

这里对应pritamqu/VCRBench，不是其他同名VCR-Bench。已取得固定版本data.json共365题，ground_truth均为片段索引排列，片段数3—7；官方加载代码把索引加1，输出Correct order形式的片段编号顺序。不是只有所选三题才采用此格式。

当前Choice针对给定选项输出概率/置信度，Noul输出是非概率，Score针对有序等级输出分布；不能直接表示一个完整排列。Score不能因答案是数字就被当作片段编号或计数。

可以枚举排列改编成选择题，但这会改变原始任务；7段有5040种排列，也不适合本轮直接接入。当前不改题、不扩展输出，因此剔除。

## 三条人工证据

| 样例ID | 任务 | 官方片段顺序 | 人工观看 | 本轮结论 |
| --- | --- | --- | --- | --- |
| 175 | Clip Ordering / Add Oil to Your Car | Correct order: 3, 1, 2 | 已看正式包；片段排序 | 本轮剔除：序列输出不适配 |
| 11 | Clip Ordering / Make Banana Ice Cream | Correct order: 3, 1, 2 | 已看正式包；视频理解排序 | 本轮剔除：序列输出不适配 |
| 90 | Clip Ordering / Make Jello Shots | Correct order: 2, 3, 1 | 已看正式包；视频理解排序 | 本轮剔除：序列输出不适配 |

声音/字幕不是这里的主要障碍，三段正式文件没有音轨，动作可以视觉判断。第90题为含酒精食品制作，作为所选内容特征保留，不是整源剔除原因。

三条原填写保存在同目录VCRBench人工记录.json的submitted_review中；没有改动作者原题和答案。

## 仓库处理与恢复条件

删除数据源样例/VCRBench全部文件，并从catalog、网页数据和候选表移除；此报告及人工记录在剔除记录中保留。Git历史可恢复；本地批量预审中的视频和清单保留作证据。

增加片段序列输出，以及排列/顺序核分后，可重新加入。若仅改编成Choice题，必须标明组内派生任务，不能报告原VCRBench榜单分数。

来源：[官方项目](https://github.com/pritamqu/VCRBench)、[固定HF版本](https://huggingface.co/datasets/pritamqu/VCRBench/tree/bd4f33495e8181c1a9bd8258e96cacdcaddb3674)、[作者加载代码](https://github.com/pritamqu/VCRBench/blob/5d616a391f20a2ad7df94a1a90e1b7f6be454343/data/dataset.py)。
