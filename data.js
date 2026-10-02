window.BENCHMARK_DATA = {
  "updated": "2026-10-02",
  "datasets": [
    {
      "name": "TOMATO",
      "category": "通用感知；运动计数、方向、旋转、轨迹等",
      "version": "TOMATO；官方标注核对提交 fe2025f4b9e1ce339618e0eecfd10f09caf67142（2026-10-02）；镜像视频版本一致性待核验",
      "sources": [
        {
          "label": "官方 HF 数据",
          "url": "https://huggingface.co/datasets/yale-nlp/TOMATO"
        },
        {
          "label": "代码与下载说明",
          "url": "https://github.com/yale-nlp/TOMATO"
        },
        {
          "label": "评测框架镜像（第三方）",
          "url": "https://huggingface.co/datasets/lmms-eval/TOMATO"
        }
      ],
      "source_notes": "**公开**。[官方 HF 数据](https://huggingface.co/datasets/yale-nlp/TOMATO)；[代码与下载说明](https://github.com/yale-nlp/TOMATO)。视频和问答数据可获取。",
      "priority": "第一版推荐",
      "planned_questions": 200,
      "final_decision": "建议采纳子集（初筛；证据待补）",
      "decision_reason": "已核查6题／6个视频ID。五条human记录与官方答案一致，三条具体时间证据待补。0731-00无音频，且现有视觉证据不能支持发声顺序答案，当前不采纳。",
      "selected_scope": "第一版优先纯视觉Choice：计数、方向、旋转、轨迹形状、速度；排除真实音频依赖题。200题为预算，最终题量待定。",
      "known_output": "初筛：Choice：原生选择题；计数不作为 Score。",
      "viewing_guidance": "六条样例视频均已上传仓库；按样例播放器查看。来自lmms-eval/TOMATO镜像ZIP的单文件提取。0731-00据核查人补充没有音频，现有视觉证据不足，当前不采纳；原素材许可和镜像与作者原包一致性仍待核验。",
      "report_path": "数据源样例/TOMATO/人工筛选报告.md",
      "samples_path": "数据源样例/TOMATO/样例清单.json",
      "samples": [
        {
          "sample_id": "0209-03",
          "video_id": "0209-03",
          "subtask": "count / human",
          "question": "How many trapezoid(s) does the person draw in the air throughout the entire video?",
          "question_zh": "人物在整个视频中用手在空中画了多少次梯形？",
          "options": [
            "2",
            "1",
            "3",
            "4",
            "5",
            "0"
          ],
          "reference_answer": "3 次（选项下标 2，从 0 编号）",
          "answer_index": 2,
          "annotation_source": "https://huggingface.co/datasets/yale-nlp/TOMATO/viewer/default/count?row=0",
          "video_path": "数据源样例/TOMATO/videos/0209-03.mp4",
          "video_url": "",
          "video_source": "已从 lmms-eval/TOMATO 镜像 part_002.zip 提取 videos/human/0209-03.mp4；文件已上传仓库。",
          "video_status": "已上传，已检查",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是；需要观察完整动作序列，单帧难以确定重复次数",
            "答案是否清楚": "是；人工数得 3 次，与官方答案一致",
            "证据时刻": "00:01-00:04,00:04-00:08,00:08-00:11分别画出梯形",
            "结论": "该条建议采纳",
            "待解决问题": "本条主要验证动作计数；尚未核查形状识别、方向、旋转等其他子任务，不能据此判断整个 TOMATO",
            "查看方式": "从镜像 ZIP 提取 0209-03.mp4，本地完整播放",
            "核查人": "余金洋",
            "核查日期": "2026-10-02"
          }
        },
        {
          "sample_id": "0231-04",
          "video_id": "0231-04",
          "subtask": "direction / human",
          "question": "In which direction(s) did the person's hand move?",
          "question_zh": "人物的手向哪些方向移动？",
          "options": [
            "Not moving at all",
            "Left.",
            "Right.",
            "First to the right then to the left.",
            "First to the left then to the right."
          ],
          "reference_answer": "Right.（官方答案；选项下标 2，从 0 编号）",
          "answer_index": 2,
          "annotation_source": "https://raw.githubusercontent.com/yale-nlp/TOMATO/main/data/direction.json",
          "video_path": "数据源样例/TOMATO/videos/0231-04.mp4",
          "video_url": "",
          "video_source": "已定位 lmms-eval/TOMATO 镜像 part_001.zip 中 videos/human/0231-04.mp4；下载入口：https://huggingface.co/datasets/lmms-eval/TOMATO/resolve/main/part_001.zip",
          "video_status": "已上传，已检查",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是；需要观察完整动作序列，单帧难以确定完整动作",
            "答案是否清楚": "是；人工确认手向右移动",
            "证据时刻": "00:00-00:02手向右移动",
            "结论": "该条建议采纳",
            "待解决问题": "本条主要验证动作方向",
            "查看方式": "从镜像 ZIP 提取 0231-04.mp4，本地完整播放",
            "核查人": "余金洋",
            "核查日期": "2026-10-02"
          }
        },
        {
          "sample_id": "0215-06",
          "video_id": "0215-06",
          "subtask": "rotation / human",
          "question": "Which direction(s) does the person's hand rotate in?",
          "question_zh": "人物的手沿哪些方向旋转？",
          "options": [
            "No rotation.",
            "Clockwise then counter-clockwise.",
            "Counter-clockwise then clockwise.",
            "Clockwise throughout.",
            "Counter-clockwise throughout."
          ],
          "reference_answer": "Clockwise throughout.（官方答案；选项下标 3，从 0 编号）",
          "answer_index": 3,
          "annotation_source": "https://raw.githubusercontent.com/yale-nlp/TOMATO/main/data/rotation.json",
          "video_path": "数据源样例/TOMATO/videos/0215-06.mp4",
          "video_url": "",
          "video_source": "已定位 lmms-eval/TOMATO 镜像 part_002.zip 中 videos/human/0215-06.mp4；下载入口：https://huggingface.co/datasets/lmms-eval/TOMATO/resolve/main/part_002.zip",
          "video_status": "已上传，已检查",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是；需要观察完整动作序列，单帧难以确定完整动作",
            "答案是否清楚": "是；人工确认手沿顺时针转动",
            "证据时刻": "通过视频判断",
            "结论": "此条建议采纳",
            "待解决问题": "本条主要验证动作旋转方向",
            "查看方式": "从镜像 ZIP 提取 0215-06.mp4，本地完整播放",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "复核备注": "待填写：支持全程顺时针旋转的具体时间段，并注明按观看画面的方向判断。"
          }
        },
        {
          "sample_id": "0209-04",
          "video_id": "0209-04",
          "subtask": "shape&trend / human",
          "question": "What is the shape of the object that the person drew in the air?",
          "question_zh": "人物用手在空中画出的形状是什么？",
          "options": [
            "Trapezoid.",
            "Diamond.",
            "Square/rectangle.",
            "Circle.",
            "Triangle.",
            "Not drawing at all."
          ],
          "reference_answer": "Trapezoid.（官方答案；选项下标 0，从 0 编号）",
          "answer_index": 0,
          "annotation_source": "https://raw.githubusercontent.com/yale-nlp/TOMATO/main/data/shape%26trend.json",
          "video_path": "数据源样例/TOMATO/videos/0209-04.mp4",
          "video_url": "",
          "video_source": "已定位 lmms-eval/TOMATO 镜像 part_001.zip 中 videos/human/0209-04.mp4；下载入口：https://huggingface.co/datasets/lmms-eval/TOMATO/resolve/main/part_001.zip",
          "video_status": "已下载、已核验",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是；需要观察完整动作序列，单帧难以确定完整图形",
            "答案是否清楚": "是；人工确认画出图形是梯形",
            "证据时刻": "通过视频判断",
            "结论": "此条建议采纳",
            "待解决问题": "本条主要验证动作所画整体图形",
            "查看方式": "从镜像 ZIP 提取 0209-04.mp4，本地完整播放",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "复核备注": "待填写：完整画出梯形的时间段，以及能辨认该轨迹的画面依据。"
          }
        },
        {
          "sample_id": "0215-08",
          "video_id": "0215-08",
          "subtask": "velocity&frequency / human",
          "question": "What is the pattern of the person's hand's rotation speed?",
          "question_zh": "人物的手旋转速度呈现什么变化模式？",
          "options": [
            "Decelerating.",
            "Constant speed.",
            "Accelerating.",
            "Not moving at all."
          ],
          "reference_answer": "Accelerating.（官方答案；选项下标 2，从 0 编号）",
          "answer_index": 2,
          "annotation_source": "https://raw.githubusercontent.com/yale-nlp/TOMATO/main/data/velocity%26frequency.json",
          "video_path": "数据源样例/TOMATO/videos/0215-08.mp4",
          "video_url": "",
          "video_source": "已定位 lmms-eval/TOMATO 镜像 part_001.zip 中 videos/human/0215-08.mp4；下载入口：https://huggingface.co/datasets/lmms-eval/TOMATO/resolve/main/part_001.zip",
          "video_status": "已下载、已检查",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是；需要观察完整动作序列，单帧难以确定整体速度",
            "答案是否清楚": "是；人工确认速度加快",
            "证据时刻": "通过视频判断",
            "结论": "此条建议采纳",
            "待解决问题": "本条主要验证动作速度",
            "查看方式": "从镜像 ZIP 提取 0215-08.mp4，本地完整播放",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "复核备注": "待填写：用于比较前段与后段旋转速度的时间段。"
          }
        },
        {
          "sample_id": "0731-00",
          "video_id": "0731-00",
          "subtask": "visual_cues / object",
          "question": "Which musical instrument sounds last?",
          "question_zh": "哪一种乐器最后发声？",
          "options": [
            "Cello.",
            "None of them produces any sound.",
            "Flute.",
            "Violin.",
            "All instruments sound at the same time."
          ],
          "reference_answer": "Flute.（官方答案；选项下标 2，从 0 编号）",
          "answer_index": 2,
          "annotation_source": "https://raw.githubusercontent.com/yale-nlp/TOMATO/main/data/visual_cues.json",
          "video_path": "数据源样例/TOMATO/videos/0731-00.mp4",
          "video_url": "",
          "video_source": "已定位 lmms-eval/TOMATO 镜像 part_003.zip 中 videos/object/0731-00.mp4；下载入口：https://huggingface.co/datasets/lmms-eval/TOMATO/resolve/main/part_003.zip",
          "video_status": "已上传、已查看；核查人确认当前文件没有音频；当前样例不采纳。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "当前画面证据不足以核实发声顺序；本样例需要音频或明确的视觉发声依据，但核查人确认当前文件没有音频。",
            "是否需要字幕": "无字幕；字幕不能代替当前缺失的发声顺序证据。",
            "适合的JEV输出": "题型形式为 Choice，但当前样例不纳入 JEV 纯视觉评测。",
            "视频是否必要": "需要时序信息；当前无音频视频不足以可靠核实哪个乐器最后发声。",
            "答案是否清楚": "否；官方答案为长笛，但当前无音频文件及已有画面证据不能独立支持该答案。",
            "证据时刻": "原观察：00:05大提琴进入。这里只记录画面动作，不能据此证明发声时间，也不能支持长笛最后发声；可靠答案证据缺失。",
            "结论": "当前样例不采纳（无音频，且视觉证据不足以核实发声顺序）。",
            "待解决问题": "若后续能提供清晰的视觉发声线索，可另行复核；若必须依赖音频，则需在 JEV 支持音频后考虑。原素材归属与许可仍待确认。",
            "查看方式": "从镜像 ZIP 提取 0731-00.mp4，本地完整播放",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "复核备注": "2026-10-02 根据核查人补充“当前视频没有音频”修正。排除当前样例，不代表排除整个 visual_cues 子任务或 TOMATO。"
          }
        }
      ]
    },
    {
      "name": "MotionBench",
      "category": "通用感知；细粒度运动理解",
      "version": "MotionBench；数据版本／修订号待填写",
      "sources": [
        {
          "label": "官方 HF 数据",
          "url": "https://huggingface.co/datasets/zai-org/MotionBench"
        },
        {
          "label": "官方说明",
          "url": "https://github.com/zai-org/MotionBench"
        }
      ],
      "source_notes": "**部分公开**。[官方 HF 数据](https://huggingface.co/datasets/zai-org/MotionBench)；[官方说明](https://github.com/zai-org/MotionBench)。自采数据有下载入口；部分视频来自既有数据集，需另从原数据集取得。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：选择题，待核实本条选项及答案。",
      "viewing_guidance": "按官方 README 找自采视频下载入口；其他来源按原数据集取得。先查看文件是否提供独立视频，再按选定 ID 获取少量片段；在线预览能力待填写。",
      "report_path": "数据源样例/MotionBench/人工筛选报告.md",
      "samples_path": "数据源样例/MotionBench/样例清单.json",
      "samples": []
    },
    {
      "name": "TVBench",
      "category": "通用感知；时间顺序、动作与变化理解",
      "version": "TVBench；数据版本／修订号待填写",
      "sources": [
        {
          "label": "官方 HF 数据",
          "url": "https://huggingface.co/datasets/FunAILab/TVBench"
        },
        {
          "label": "代码",
          "url": "https://github.com/daniel-cores/tvbench"
        }
      ],
      "source_notes": "**公开，部分视频需按说明获取**。[官方 HF 数据](https://huggingface.co/datasets/FunAILab/TVBench)；[代码](https://github.com/daniel-cores/tvbench)。部分来源视频依赖 NTU RGB+D 等原数据源。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：选择题，待核实本条选项及答案。",
      "viewing_guidance": "先在 HF／官方代码查看标注并选视频 ID，再按官方说明去对应源数据集取片段；部分源涉及 NTU RGB+D，访问条件待填写。",
      "report_path": "数据源样例/TVBench/人工筛选报告.md",
      "samples_path": "数据源样例/TVBench/样例清单.json",
      "samples": []
    },
    {
      "name": "MVBench",
      "category": "通用感知；多类别视频感知与理解",
      "version": "MVBench；HF提交 230a2d4fac8900333c61754641c7a13e069ac9c6（2026-10-02）",
      "sources": [
        {
          "label": "官方 HF 数据",
          "url": "https://huggingface.co/datasets/OpenGVLab/MVBench"
        },
        {
          "label": "官方项目代码",
          "url": "https://github.com/OpenGVLab/Ask-Anything/tree/main/video_chat2"
        }
      ],
      "source_notes": "**公开**。[官方 HF 数据](https://huggingface.co/datasets/OpenGVLab/MVBench)；[官方项目代码](https://github.com/OpenGVLab/Ask-Anything/tree/main/video_chat2)。",
      "priority": "第一版推荐",
      "planned_questions": 200,
      "final_decision": "建议采纳子集（本轮初筛完成）",
      "decision_reason": "六条均记录视频必要、答案清楚、无音频字幕依赖并建议采纳；三个模拟文件FFmpeg完整解码通过，部分播放器不兼容。实际JEV解码和公开展示条件待确认。",
      "selected_scope": "优先本批六类纯视觉Choice；其他14类未核查，200题为预算。",
      "known_output": "初筛：Choice：有选项子任务。",
      "viewing_guidance": "本批六题均使用全片。三个真实场景视频可在网页播放；三个模拟视频已下载本地，因原项目再分发条件待确认暂不上传。逐条看后填写review；全片证据可写“全片”。",
      "report_path": "数据源样例/MVBench/人工筛选报告.md",
      "samples_path": "数据源样例/MVBench/样例清单.json",
      "samples": [
        {
          "sample_id": "action_count__video_6480",
          "video_id": "video_6480",
          "subtask": "action_count / Perception Test（真实场景）",
          "question": "How many times did the person launch objects on the table?",
          "question_zh": "人物在桌上发射物体多少次？",
          "options": [
            "3",
            "2",
            "4"
          ],
          "reference_answer": "3（官方答案；展示下标 0，从0编号）",
          "answer_index": 0,
          "annotation_source": "https://huggingface.co/datasets/OpenGVLab/MVBench/resolve/230a2d4fac8900333c61754641c7a13e069ac9c6/json/action_count.json",
          "video_path": "数据源样例/MVBench/videos/video_6480.mp4",
          "video_url": "",
          "video_source": "官方 HF perception.zip 内 perception/videos/video_6480.mp4；原视频来自 Perception Test",
          "video_status": "已上传完整视频",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "00:02-00:03,00:06-00:08,00:11-00:12各有一次发射",
            "结论": "该条建议采纳",
            "待解决问题": "当前人工记录未发现影响该条采用的问题；正式选题注意原视频去重。",
            "查看方式": "下载本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "运动次数",
            "复核说明": "根据成员记录整理，未独立复核视觉答案；全片证据可接受。"
          },
          "annotation_row_index": 0,
          "answer_index_note": "MVBench 原标注答案为选项文本；此处下标由原选项顺序转换，从0编号。",
          "source_dataset": "Perception Test",
          "video_license": "CC BY 4.0；来源 Google DeepMind Perception Test 官方 README。",
          "input_scope": "全片；官方配置该子任务不使用 start/end 裁剪。",
          "video_sha256": "82531c576080b7f69bdc9d111428272759d0fabc3c8d09e6bb28de1169d5e705",
          "video_size_bytes": 3298407,
          "local_video_filename": "videos/video_6480.mp4"
        },
        {
          "sample_id": "object_shuffle__video_7110",
          "video_id": "video_7110",
          "subtask": "object_shuffle / Perception Test（真实场景）",
          "question": "The person uses multiple similar objects to play an occlusion game. Where is the hidden object at the end of the game from the person's point of view?",
          "question_zh": "人物用多个相似物体玩遮挡游戏。从人物的视角看，游戏结束时隐藏物体在哪里？",
          "options": [
            "Under the first object from the left.",
            "Under the second object from the left.",
            "Under the third object from the left."
          ],
          "reference_answer": "Under the first object from the left.（官方答案；展示下标 0，从0编号）",
          "answer_index": 0,
          "annotation_source": "https://huggingface.co/datasets/OpenGVLab/MVBench/resolve/230a2d4fac8900333c61754641c7a13e069ac9c6/json/object_shuffle.json",
          "video_path": "数据源样例/MVBench/videos/video_7110.mp4",
          "video_url": "",
          "video_source": "官方 HF perception.zip 内 perception/videos/video_7110.mp4；原视频来自 Perception Test",
          "video_status": "已上传完整视频",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "00:06-00:07和00:18-00:19各有一次展示",
            "结论": "该条建议采纳",
            "待解决问题": "当前人工记录未发现影响该条采用的问题；正式选题注意原视频去重。",
            "查看方式": "下载本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "物品位置",
            "复核说明": "根据成员记录整理，未独立复核视觉答案；全片证据可接受。"
          },
          "annotation_row_index": 4,
          "answer_index_note": "MVBench 原标注答案为选项文本；此处下标由原选项顺序转换，从0编号。",
          "source_dataset": "Perception Test",
          "video_license": "CC BY 4.0；来源 Google DeepMind Perception Test 官方 README。",
          "input_scope": "全片；官方配置该子任务不使用 start/end 裁剪。",
          "video_sha256": "d3d1921de3de652e592eccc3c92e595663646f2a2cc0827f936fc64274c028e1",
          "video_size_bytes": 5490059,
          "local_video_filename": "videos/video_7110.mp4"
        },
        {
          "sample_id": "moving_direction__video_14366",
          "video_id": "video_14366",
          "subtask": "moving_direction / CLEVRER（模拟场景）",
          "question": "What direction is the gray cylinder moving in within the video?",
          "question_zh": "视频中的灰色圆柱向哪个方向移动？",
          "options": [
            "Up and to the right.",
            "Up and to the left.",
            "The object is stationary.",
            "Down and to the right."
          ],
          "reference_answer": "Down and to the right.（官方答案；展示下标 3，从0编号）",
          "answer_index": 3,
          "annotation_source": "https://huggingface.co/datasets/OpenGVLab/MVBench/resolve/230a2d4fac8900333c61754641c7a13e069ac9c6/json/moving_direction.json",
          "video_path": "",
          "video_url": "",
          "video_source": "官方 HF clevrer.zip 内 clevrer/video_validation/video_14366.mp4；原视频来自 CLEVRER",
          "video_status": "已下载至本地；原视频再分发许可未在原项目直接确认，暂不公开上传。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "全片",
            "结论": "该条建议采纳",
            "待解决问题": "部分播放器不兼容；FFmpeg完整解码通过。实际JEV解码后端与原视频公开再分发条件待确认。",
            "查看方式": "已下载；核查人补充通过哔哩哔哩播放，具体应用／入口待填写。",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "物品运动方向",
            "复核说明": "根据成员记录整理，未独立复核视觉答案；全片证据可接受。"
          },
          "annotation_row_index": 1,
          "answer_index_note": "MVBench 原标注答案为选项文本；此处下标由原选项顺序转换，从0编号。",
          "source_dataset": "CLEVRER",
          "video_license": "待确认：原项目视频再分发声明；不将 MVBench 的 MIT 标签直接用于视频。",
          "input_scope": "全片；官方配置该子任务不使用 start/end 裁剪。",
          "video_sha256": "d48417cb23e88a370bdc98b182aad945368680afceb3d7e1f899ed9e2452c88c",
          "video_size_bytes": 825260,
          "local_video_filename": "videos/video_14366.mp4",
          "decode_check": {
            "decoder": "FFmpeg",
            "full_decode": "通过，无报错",
            "codec": "H.264 High 4:4:4 Predictive",
            "pixel_format": "yuv420p",
            "duration_seconds": 5.12,
            "fps": 25,
            "date": "2026-10-02",
            "jev_backend": "待确认"
          }
        },
        {
          "sample_id": "moving_count__video_11123",
          "video_id": "video_11123",
          "subtask": "moving_count / CLEVRER（模拟场景）",
          "question": "How many red objects are moving?",
          "question_zh": "有多少个红色物体在移动？",
          "options": [
            "3",
            "5",
            "4",
            "2"
          ],
          "reference_answer": "2（官方答案；展示下标 3，从0编号）",
          "answer_index": 3,
          "annotation_source": "https://huggingface.co/datasets/OpenGVLab/MVBench/resolve/230a2d4fac8900333c61754641c7a13e069ac9c6/json/moving_count.json",
          "video_path": "",
          "video_url": "",
          "video_source": "官方 HF clevrer.zip 内 clevrer/video_validation/video_11123.mp4；原视频来自 CLEVRER",
          "video_status": "已下载至本地；原视频再分发许可未在原项目直接确认，暂不公开上传。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "全片",
            "结论": "该条建议采纳",
            "待解决问题": "部分播放器不兼容；FFmpeg完整解码通过。实际JEV解码后端与原视频公开再分发条件待确认。",
            "查看方式": "已下载；核查人补充通过哔哩哔哩播放，具体应用／入口待填写。",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "物品计数",
            "复核说明": "根据成员记录整理，未独立复核视觉答案；全片证据可接受。"
          },
          "annotation_row_index": 0,
          "answer_index_note": "MVBench 原标注答案为选项文本；此处下标由原选项顺序转换，从0编号。",
          "source_dataset": "CLEVRER",
          "video_license": "待确认：原项目视频再分发声明；不将 MVBench 的 MIT 标签直接用于视频。",
          "input_scope": "全片；官方配置该子任务不使用 start/end 裁剪。",
          "video_sha256": "3ce0da3ca7292995408ae92506983c7b8c2b775f3e80cd8005fcc005a949565f",
          "video_size_bytes": 1511898,
          "local_video_filename": "videos/video_11123.mp4",
          "decode_check": {
            "decoder": "FFmpeg",
            "full_decode": "通过，无报错",
            "codec": "H.264 High 4:4:4 Predictive",
            "pixel_format": "yuv420p",
            "duration_seconds": 5.12,
            "fps": 25,
            "date": "2026-10-02",
            "jev_backend": "待确认"
          }
        },
        {
          "sample_id": "counterfactual_inference__video_11363",
          "video_id": "video_11363",
          "subtask": "counterfactual_inference / CLEVRER（模拟场景）",
          "question": "Which of the following will happen if the cylinder is removed?",
          "question_zh": "如果移除圆柱，以下哪件事会发生？",
          "options": [
            "The cyan rubber object and the blue cube collide",
            "The brown cube collides with the metal cube",
            "The cyan rubber object and the metal cube collide",
            "The cyan rubber cube collides with the sphere"
          ],
          "reference_answer": "The cyan rubber cube collides with the sphere（官方答案；展示下标 3，从0编号）",
          "answer_index": 3,
          "annotation_source": "https://huggingface.co/datasets/OpenGVLab/MVBench/resolve/230a2d4fac8900333c61754641c7a13e069ac9c6/json/counterfactual_inference.json",
          "video_path": "",
          "video_url": "",
          "video_source": "官方 HF clevrer.zip 内 clevrer/video_validation/video_11363.mp4；原视频来自 CLEVRER",
          "video_status": "已下载至本地；原视频再分发许可未在原项目直接确认，暂不公开上传。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "全片",
            "结论": "该条建议采纳",
            "待解决问题": "部分播放器不兼容；FFmpeg完整解码通过。实际JEV解码后端与原视频公开再分发条件待确认。",
            "查看方式": "已下载；核查人补充通过哔哩哔哩播放，具体应用／入口待填写。",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "运动推断",
            "复核说明": "根据成员记录整理，未独立复核视觉答案；全片证据可接受。"
          },
          "annotation_row_index": 0,
          "answer_index_note": "MVBench 原标注答案为选项文本；此处下标由原选项顺序转换，从0编号。",
          "source_dataset": "CLEVRER",
          "video_license": "待确认：原项目视频再分发声明；不将 MVBench 的 MIT 标签直接用于视频。",
          "input_scope": "全片；官方配置该子任务不使用 start/end 裁剪。",
          "video_sha256": "e5d1808b970f67cd72bd829da1d4d4324251ae7923bf6f3a6a714f9f0813607e",
          "video_size_bytes": 1330620,
          "local_video_filename": "videos/video_11363.mp4",
          "decode_check": {
            "decoder": "FFmpeg",
            "full_decode": "通过，无报错",
            "codec": "H.264 High 4:4:4 Predictive",
            "pixel_format": "yuv420p",
            "duration_seconds": 5.12,
            "fps": 25,
            "date": "2026-10-02",
            "jev_backend": "待确认"
          }
        },
        {
          "sample_id": "state_change__video_5690",
          "video_id": "video_5690",
          "subtask": "state_change / Perception Test（真实场景）",
          "question": "The person interacts with a lighting device among other objects. Is the lighting device on at any point?",
          "question_zh": "人物与其他物体中的一个照明设备互动。这个照明设备是否曾经开启？",
          "options": [
            "no",
            "yes",
            "I don't know"
          ],
          "reference_answer": "no（官方答案；展示下标 0，从0编号）",
          "answer_index": 0,
          "annotation_source": "https://huggingface.co/datasets/OpenGVLab/MVBench/resolve/230a2d4fac8900333c61754641c7a13e069ac9c6/json/state_change.json",
          "video_path": "数据源样例/MVBench/videos/video_5690.mp4",
          "video_url": "",
          "video_source": "官方 HF perception.zip 内 perception/videos/video_5690.mp4；原视频来自 Perception Test",
          "video_status": "已上传完整视频",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "全片",
            "结论": "该条建议采纳",
            "待解决问题": "当前人工记录未发现影响该条采用的问题；正式选题注意原视频去重。",
            "查看方式": "下载本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "事件发生情况",
            "复核说明": "根据成员记录整理，未独立复核视觉答案；全片证据可接受。"
          },
          "annotation_row_index": 7,
          "answer_index_note": "MVBench 原标注答案为选项文本；此处下标由原选项顺序转换，从0编号。",
          "source_dataset": "Perception Test",
          "video_license": "CC BY 4.0；来源 Google DeepMind Perception Test 官方 README。",
          "input_scope": "全片；官方配置该子任务不使用 start/end 裁剪。",
          "video_sha256": "969d73c1181c594d3d93ae0467c3af1a0bb659cb1980441515d0ed7c977653f6",
          "video_size_bytes": 3350006,
          "local_video_filename": "videos/video_5690.mp4"
        }
      ]
    },
    {
      "name": "TempCompass",
      "category": "通用感知；时间理解，多种问答形式",
      "version": "官方标注提交 e1b463166400633e6061962d890a9ae85db29f70；HF视频提交 c8a67d88a3bc6fd4b2f9ae2f9e112668fbe05722",
      "sources": [
        {
          "label": "官方代码及视频下载说明",
          "url": "https://github.com/llyx97/TempCompass"
        }
      ],
      "source_notes": "**公开**。[官方代码及视频下载说明](https://github.com/llyx97/TempCompass)，包含题目，处理后视频可从其列出的网盘或 HF 获取。",
      "priority": "第一版推荐",
      "planned_questions": 200,
      "final_decision": "建议采纳时序子集（本轮初筛完成）",
      "decision_reason": "已核查6题／5视频。方向对照、速度、顺序、亮度变化5题建议作为核心时序候选；动作题被成员判断单帧可答，保留为图片／视频对照。",
      "selected_scope": "4条时序Choice＋1条是非题候选Noul；另保留1条单帧可答Choice对照。200题为预算，Noul编码与原素材再分发条件待确认。",
      "known_output": "初筛：Choice：选择题；Noul：是非题；描述生成需另定输出。",
      "viewing_guidance": "五个完整视频已本地下载并通过FFmpeg解码；原Shutterstock素材再分发条件未确认，暂不公开上传。看全片，证据可写全片。",
      "report_path": "数据源样例/TempCompass/人工筛选报告.md",
      "samples_path": "数据源样例/TempCompass/样例清单.json",
      "samples": [
        {
          "sample_id": "multi-choice__1034419625__action__0",
          "video_id": "1034419625",
          "subtask": "action / multi-choice",
          "question": "What is the man doing in the video?",
          "question_zh": "男子在视频中做什么？",
          "options": [
            "dunking a basketball",
            "dribbling a basketball",
            "passing a basketball"
          ],
          "reference_answer": "A. dunking a basketball（官方答案）",
          "answer_index": 0,
          "annotation_source": "https://raw.githubusercontent.com/llyx97/TempCompass/e1b463166400633e6061962d890a9ae85db29f70/questions/multi-choice.json",
          "video_path": "",
          "video_url": "",
          "video_source": "作者README链接的HF视频包内 videos/1034419625.mp4；原素材下载脚本访问Shutterstock预览；完整处理后视频已本地取得。",
          "video_status": "本地已取得完整视频，ZIP CRC与FFmpeg解码通过。原素材再分发条件未确认，暂不公开上传。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "否",
            "答案是否清楚": "是",
            "证据时刻": "可以通过视频截屏判断动作行为",
            "结论": "可以采用",
            "待解决问题": "原素材公开再分发条件待确认；采用时需区分单帧可答对照题与核心时序题。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "行为判断",
            "采纳范围": "图片／视频对照题；核查人认为单帧可答，不计入核心时序能力题。",
            "整理说明": "保留核查人原始视频必要性、证据及采纳判断；总结不改变官方答案。"
          },
          "annotation_location": "1034419625 / action / index 0",
          "original_question": "What is the man doing in the video?\nA. dunking a basketball\nB. dribbling a basketball\nC. passing a basketball",
          "local_video_filename": "videos/1034419625.mp4",
          "video_sha256": "d5aedd51e157010341b7dab70d5b7267597ec96e6bbe2ca8504affae180b2297",
          "video_size_bytes": 455957,
          "input_scope": "全片；作者提供的处理后视频，未自行裁剪或倒放。",
          "video_license": "项目LICENSE为CC BY-NC 4.0；原Shutterstock素材的公开再分发范围尚未确认。",
          "original_source_url": "https://ak.picdn.net/shutterstock/videos/1034419625/preview/1034419625.mp4"
        },
        {
          "sample_id": "multi-choice__1034419625__direction__0",
          "video_id": "1034419625",
          "subtask": "direction / multi-choice",
          "question": "What is the direction of the man?",
          "question_zh": "男子向哪个方向移动？",
          "options": [
            "moving towards the camera",
            "moving from left to right",
            "moving away from the camera"
          ],
          "reference_answer": "B. moving from left to right（官方答案）",
          "answer_index": 1,
          "annotation_source": "https://raw.githubusercontent.com/llyx97/TempCompass/e1b463166400633e6061962d890a9ae85db29f70/questions/multi-choice.json",
          "video_path": "",
          "video_url": "",
          "video_source": "作者README链接的HF视频包内 videos/1034419625.mp4；原素材下载脚本访问Shutterstock预览；完整处理后视频已本地取得。",
          "video_status": "本地已取得完整视频，ZIP CRC与FFmpeg解码通过。原素材再分发条件未确认，暂不公开上传。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "00:02-00:04",
            "结论": "建议采用",
            "待解决问题": "原素材公开再分发条件待确认；采用时需区分单帧可答对照题与核心时序题。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "动作方向",
            "采纳范围": "核心时序候选；根据成员记录建议采纳，未独立实测单帧或乱序条件。",
            "整理说明": "保留核查人原始视频必要性、证据及采纳判断；总结不改变官方答案。"
          },
          "annotation_location": "1034419625 / direction / index 0",
          "original_question": "What is the direction of the man?\nA. moving towards the camera\nB. moving from left to right\nC. moving away from the camera",
          "local_video_filename": "videos/1034419625.mp4",
          "video_sha256": "d5aedd51e157010341b7dab70d5b7267597ec96e6bbe2ca8504affae180b2297",
          "video_size_bytes": 455957,
          "input_scope": "全片；作者提供的处理后视频，未自行裁剪或倒放。",
          "video_license": "项目LICENSE为CC BY-NC 4.0；原Shutterstock素材的公开再分发范围尚未确认。",
          "original_source_url": "https://ak.picdn.net/shutterstock/videos/1034419625/preview/1034419625.mp4"
        },
        {
          "sample_id": "multi-choice__1034419625_reverse__direction__0",
          "video_id": "1034419625_reverse",
          "subtask": "direction / multi-choice",
          "question": "What is the direction of the man?",
          "question_zh": "男子向哪个方向移动？",
          "options": [
            "moving towards the camera",
            "moving from right to left",
            "moving away from the camera",
            "moving from left to right"
          ],
          "reference_answer": "B. moving from right to left（官方答案）",
          "answer_index": 1,
          "annotation_source": "https://raw.githubusercontent.com/llyx97/TempCompass/e1b463166400633e6061962d890a9ae85db29f70/questions/multi-choice.json",
          "video_path": "",
          "video_url": "",
          "video_source": "作者README链接的HF视频包内 videos/1034419625_reverse.mp4；原素材下载脚本访问Shutterstock预览；完整处理后视频已本地取得。",
          "video_status": "本地已取得完整视频，ZIP CRC与FFmpeg解码通过。原素材再分发条件未确认，暂不公开上传。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "00:02-00:04",
            "结论": "建议采用",
            "待解决问题": "原素材公开再分发条件待确认；采用时需区分单帧可答对照题与核心时序题。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "动作方向",
            "采纳范围": "核心时序候选；根据成员记录建议采纳，未独立实测单帧或乱序条件。",
            "整理说明": "保留核查人原始视频必要性、证据及采纳判断；总结不改变官方答案。"
          },
          "annotation_location": "1034419625_reverse / direction / index 0",
          "original_question": "What is the direction of the man?\nA. moving towards the camera\nB. moving from right to left\nC. moving away from the camera\nD. moving from left to right",
          "local_video_filename": "videos/1034419625_reverse.mp4",
          "video_sha256": "dff2d1817471aa0481d4050a83e0874faeea89541f72e0b025a47e3cbac1f333",
          "video_size_bytes": 168004,
          "input_scope": "全片；作者提供的处理后视频，未自行裁剪或倒放。",
          "video_license": "项目LICENSE为CC BY-NC 4.0；原Shutterstock素材的公开再分发范围尚未确认。",
          "original_source_url": "https://ak.picdn.net/shutterstock/videos/1034419625/preview/1034419625.mp4"
        },
        {
          "sample_id": "multi-choice__1098982673__speed__0",
          "video_id": "1098982673",
          "subtask": "speed / multi-choice",
          "question": "What is the speed of the video?",
          "question_zh": "视频以什么速度播放？",
          "options": [
            "normal speed",
            "slow motion",
            "fast forward",
            "reverse"
          ],
          "reference_answer": "A. normal speed（官方答案）",
          "answer_index": 0,
          "annotation_source": "https://raw.githubusercontent.com/llyx97/TempCompass/e1b463166400633e6061962d890a9ae85db29f70/questions/multi-choice.json",
          "video_path": "",
          "video_url": "",
          "video_source": "作者README链接的HF视频包内 videos/1098982673.mp4；原素材下载脚本访问Shutterstock预览；完整处理后视频已本地取得。",
          "video_status": "本地已取得完整视频，ZIP CRC与FFmpeg解码通过。原素材再分发条件未确认，暂不公开上传。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "全片",
            "结论": "建议采用",
            "待解决问题": "原素材公开再分发条件待确认；采用时需区分单帧可答对照题与核心时序题。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "动作速度",
            "采纳范围": "核心时序候选；根据成员记录建议采纳，未独立实测单帧或乱序条件。",
            "整理说明": "保留核查人原始视频必要性、证据及采纳判断；总结不改变官方答案。"
          },
          "annotation_location": "1098982673 / speed / index 0",
          "original_question": "What is the speed of the video?\nA. normal speed\nB. slow motion\nC. fast forward\nD. reverse",
          "local_video_filename": "videos/1098982673.mp4",
          "video_sha256": "be6f94c27b04843e99361fa0149dc6c993b2391b0d80088cd238bd0865b61c88",
          "video_size_bytes": 2037146,
          "input_scope": "全片；作者提供的处理后视频，未自行裁剪或倒放。",
          "video_license": "项目LICENSE为CC BY-NC 4.0；原Shutterstock素材的公开再分发范围尚未确认。",
          "original_source_url": "https://ak.picdn.net/shutterstock/videos/1098982673/preview/1098982673.mp4"
        },
        {
          "sample_id": "multi-choice__1077507593__order__0",
          "video_id": "1077507593",
          "subtask": "order / multi-choice",
          "question": "Which event happens first to the skillet?",
          "question_zh": "煎锅先发生哪一件事？",
          "options": [
            "Burning in fire",
            "None of both",
            "Smoking"
          ],
          "reference_answer": "C. Smoking（官方答案）",
          "answer_index": 2,
          "annotation_source": "https://raw.githubusercontent.com/llyx97/TempCompass/e1b463166400633e6061962d890a9ae85db29f70/questions/multi-choice.json",
          "video_path": "",
          "video_url": "",
          "video_source": "作者README链接的HF视频包内 videos/1077507593.mp4；原素材下载脚本访问Shutterstock预览；完整处理后视频已本地取得。",
          "video_status": "本地已取得完整视频，ZIP CRC与FFmpeg解码通过。原素材再分发条件未确认，暂不公开上传。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "视频开始",
            "结论": "建议采用",
            "待解决问题": "原素材公开再分发条件待确认；采用时需区分单帧可答对照题与核心时序题。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "状态顺序",
            "采纳范围": "核心时序候选；根据成员记录建议采纳，未独立实测单帧或乱序条件。",
            "整理说明": "保留核查人原始视频必要性、证据及采纳判断；总结不改变官方答案。"
          },
          "annotation_location": "1077507593 / order / index 0",
          "original_question": "Which event happens first to the skillet?\nA. Burning in fire\nB. None of both\nC. Smoking",
          "local_video_filename": "videos/1077507593.mp4",
          "video_sha256": "6b35b96a694dd1b952c572c7c3fa18404b180316c202d76bf219b6bc492780e2",
          "video_size_bytes": 1587694,
          "input_scope": "全片；作者提供的处理后视频，未自行裁剪或倒放。",
          "video_license": "项目LICENSE为CC BY-NC 4.0；原Shutterstock素材的公开再分发范围尚未确认。",
          "original_source_url": "https://ak.picdn.net/shutterstock/videos/1077507593/preview/1077507593.mp4"
        },
        {
          "sample_id": "yes_no__1059718130__attribute_change__0",
          "video_id": "1059718130",
          "subtask": "attribute_change / yes_no",
          "question": "Is the video's brightness turning brighter?",
          "question_zh": "视频的亮度是否在变亮？",
          "options": [],
          "reference_answer": "yes（官方答案）",
          "answer_index": null,
          "annotation_source": "https://raw.githubusercontent.com/llyx97/TempCompass/e1b463166400633e6061962d890a9ae85db29f70/questions/yes_no.json",
          "video_path": "",
          "video_url": "",
          "video_source": "作者README链接的HF视频包内 videos/1059718130.mp4；原素材下载脚本访问Shutterstock预览；完整处理后视频已本地取得。",
          "video_status": "本地已取得完整视频，ZIP CRC与FFmpeg解码通过。原素材再分发条件未确认，暂不公开上传。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Noul",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "全片",
            "结论": "建议采用",
            "待解决问题": "原素材公开再分发条件待确认；采用时需区分单帧可答对照题与核心时序题。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "核查能力": "状态变换",
            "采纳范围": "核心时序候选；根据成员记录建议采纳，未独立实测单帧或乱序条件。",
            "整理说明": "保留核查人原始视频必要性、证据及采纳判断；总结不改变官方答案。"
          },
          "annotation_location": "1059718130 / attribute_change / index 0",
          "original_question": "Is the video's brightness turning brighter?",
          "local_video_filename": "videos/1059718130.mp4",
          "video_sha256": "ff019314665073693dcca84bb1718582eb87a9d5f712c9beee14dc02431a62ca",
          "video_size_bytes": 835175,
          "input_scope": "全片；作者提供的处理后视频，未自行裁剪或倒放。",
          "video_license": "项目LICENSE为CC BY-NC 4.0；原Shutterstock素材的公开再分发范围尚未确认。",
          "original_source_url": "https://ak.picdn.net/shutterstock/videos/1059718130/preview/1059718130.mp4"
        }
      ]
    },
    {
      "name": "PercTest",
      "category": "通用感知；感知问答、跟踪等多任务",
      "version": "暂按 Perception Test 对应；需确认截图简称及数据版本",
      "sources": [
        {
          "label": "官方数据与下载说明",
          "url": "https://github.com/google-deepmind/perception_test"
        }
      ],
      "source_notes": "**公开，名称疑为简称**。按 **Perception Test** 核对：[官方数据与下载说明](https://github.com/google-deepmind/perception_test)。截图中的 PercTest 未见独立同名基准，建议回查原表。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：选择题子任务；跟踪／定位需坐标等额外输出。",
      "viewing_guidance": "按 Perception Test 官方下载说明选择视频和标注子任务；先确认所需文件和下载粒度，不必先取得全部任务的数据。",
      "report_path": "数据源样例/PercTest/人工筛选报告.md",
      "samples_path": "数据源样例/PercTest/样例清单.json",
      "samples": []
    },
    {
      "name": "VideoMME",
      "category": "综合；综合视频理解，不同长度",
      "version": "VideoMME v1；HF提交 ead1408f75b618502df9a1d8e0950166bf0a2a0b",
      "sources": [
        {
          "label": "数据及视频",
          "url": "https://huggingface.co/datasets/lmms-eval/Video-MME"
        },
        {
          "label": "官方说明",
          "url": "https://github.com/MME-Benchmarks/Video-MME"
        }
      ],
      "source_notes": "官方限制学术研究用途，未经批准不能再发布全部或部分原数据；完整问答与视频仅本地保存。",
      "priority": "扩展备用",
      "planned_questions": 0,
      "final_decision": "暂不纳入第一版核心；保留带字幕综合理解扩展",
      "decision_reason": "当前JEV未规划音频输入。若字幕足以替代发言，技术上可使用文本＋视频，但仅凭字幕可答的题不能单独证明视频能力。长片增加人工核查与输入成本，实际JEV时长限制待确认。 核查人反馈未统计全量比例。",
      "selected_scope": "纯视觉必要的题可单独重新筛选；仅字幕可答作为字幕理解扩展；真正声音依赖题当前不采纳。",
      "known_output": "初筛：Choice：原生选择题。",
      "viewing_guidance": "本地核查6题／3片；30.88秒、6分25.85秒、34分44.41秒。逐题记录待填写，数据源反馈已记录。",
      "report_path": "数据源样例/VideoMME/人工筛选报告.md",
      "samples_path": "数据源样例/VideoMME/样例清单.json",
      "samples": [
        {
          "sample_id": "028-1",
          "video_id": "TVkck1ACKDQ",
          "subtask": "short / Object Recognition",
          "question": "原题仅保存在本地学术核查文件；未获公开再发布批准，不在此复制。",
          "question_zh": "原题、选项与答案请在本地核查文件查看。",
          "options": [],
          "reference_answer": "仅本地提供，公开发布需作者批准。",
          "answer_index": null,
          "annotation_source": "https://huggingface.co/datasets/lmms-eval/Video-MME/viewer/videomme/test?row=81",
          "video_path": "",
          "video_url": "",
          "video_source": "原视频入口：https://www.youtube.com/watch?v=TVkck1ACKDQ；完整视频与字幕已本地取得，未公开上传。",
          "video_status": "仅本地保存",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "否",
            "是否需要字幕": "否",
            "适合的JEV输出": "Choice",
            "视频是否必要": "是",
            "答案是否清楚": "是",
            "证据时刻": "00:06-00:09",
            "结论": "建议采纳",
            "待解决问题": "动作识别；未经作者批准不可公开再发布原数据。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "数据源层面建议": "暂缓第一版核心；逐题结论待填写",
            "核查重点": "重点确认器官识别是否仅靠画面可答，是否单帧足够。"
          },
          "content_access": "local_only",
          "video_duration": "00:00:30.88",
          "duration_seconds": 30.88
        },
        {
          "sample_id": "028-2",
          "video_id": "TVkck1ACKDQ",
          "subtask": "short / Information Synopsis",
          "question": "原题仅保存在本地学术核查文件；未获公开再发布批准，不在此复制。",
          "question_zh": "原题、选项与答案请在本地核查文件查看。",
          "options": [],
          "reference_answer": "仅本地提供，公开发布需作者批准。",
          "answer_index": null,
          "annotation_source": "https://huggingface.co/datasets/lmms-eval/Video-MME/viewer/videomme/test?row=82",
          "video_path": "",
          "video_url": "",
          "video_source": "原视频入口：https://www.youtube.com/watch?v=TVkck1ACKDQ；完整视频与字幕已本地取得，未公开上传。",
          "video_status": "仅本地保存",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "条件需要",
            "是否需要字幕": "条件需要，字幕或者音频来做判断",
            "适合的JEV输出": "Choice",
            "视频是否必要": "否，可以只凭借字幕或音频判断",
            "答案是否清楚": "是",
            "证据时刻": "人物发言内容",
            "结论": "可作为长文本理解题或对照题，不计入核心视频理解题",
            "待解决问题": "依赖发言内容；完整准确的字幕与音频二选一即可。纯静音画面不足以作答；未经作者批准不可公开再发布原数据。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "数据源层面建议": "暂缓第一版核心；逐题结论待填写",
            "核查重点": "重点确认概括是否依赖发言；字幕单独能否回答。"
          },
          "content_access": "local_only",
          "video_duration": "00:00:30.88",
          "duration_seconds": 30.88
        },
        {
          "sample_id": "310-1",
          "video_id": "A9fQPzZ1-hg",
          "subtask": "medium / Counting Problem",
          "question": "原题仅保存在本地学术核查文件；未获公开再发布批准，不在此复制。",
          "question_zh": "原题、选项与答案请在本地核查文件查看。",
          "options": [],
          "reference_answer": "仅本地提供，公开发布需作者批准。",
          "answer_index": null,
          "annotation_source": "https://huggingface.co/datasets/lmms-eval/Video-MME/viewer/videomme/test?row=927",
          "video_path": "",
          "video_url": "",
          "video_source": "原视频入口：https://www.youtube.com/watch?v=A9fQPzZ1-hg；完整视频与字幕已本地取得，未公开上传。",
          "video_status": "仅本地保存",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "可替代输入；音频提供答题信息，完整字幕可替代音频。",
            "是否需要字幕": "可替代输入；字幕包含答题信息，采用纯画面设置时不提供。",
            "适合的JEV输出": "Choice",
            "视频是否必要": "条件必要；完整视频中需要检索关键画面，定位后单帧即可回答。完整字幕已包含答案，视频不是必需。",
            "答案是否清楚": "是",
            "证据时刻": "03:36画面所示，或者03:30-03:36字幕或音频判断",
            "结论": "建议采纳",
            "待解决问题": "画面理解识别以及音频或字幕理解；未经作者批准不可公开再发布原数据。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "数据源层面建议": "暂缓第一版核心；逐题结论待填写",
            "核查重点": "重点确认计数是数画面还是数讲解中的信息。"
          },
          "content_access": "local_only",
          "video_duration": "00:06:25.85",
          "duration_seconds": 385.85
        },
        {
          "sample_id": "310-2",
          "video_id": "A9fQPzZ1-hg",
          "subtask": "medium / Temporal Reasoning",
          "question": "原题仅保存在本地学术核查文件；未获公开再发布批准，不在此复制。",
          "question_zh": "原题、选项与答案请在本地核查文件查看。",
          "options": [],
          "reference_answer": "仅本地提供，公开发布需作者批准。",
          "answer_index": null,
          "annotation_source": "https://huggingface.co/datasets/lmms-eval/Video-MME/viewer/videomme/test?row=928",
          "video_path": "",
          "video_url": "",
          "video_source": "原视频入口：https://www.youtube.com/watch?v=A9fQPzZ1-hg；完整视频与字幕已本地取得，未公开上传。",
          "video_status": "仅本地保存",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "条件需要",
            "是否需要字幕": "条件需要，字幕或者音频来做判断",
            "适合的JEV输出": "Choice",
            "视频是否必要": "否，可以只凭借字幕或音频判断",
            "答案是否清楚": "是",
            "证据时刻": "全片的字幕或音频内容",
            "结论": "可作为长文本理解题或对照题，不计入核心视频理解题",
            "待解决问题": "依赖发言内容；完整准确的字幕与音频二选一即可。纯静音画面不足以作答；未经作者批准不可公开再发布原数据。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "数据源层面建议": "暂缓第一版核心；逐题结论待填写",
            "核查重点": "重点确认历史判断是否依赖讲解或外部知识。"
          },
          "content_access": "local_only",
          "video_duration": "00:06:25.85",
          "duration_seconds": 385.85
        },
        {
          "sample_id": "625-1",
          "video_id": "iCQmfRMwHfA",
          "subtask": "long / Information Synopsis",
          "question": "原题仅保存在本地学术核查文件；未获公开再发布批准，不在此复制。",
          "question_zh": "原题、选项与答案请在本地核查文件查看。",
          "options": [],
          "reference_answer": "仅本地提供，公开发布需作者批准。",
          "answer_index": null,
          "annotation_source": "https://huggingface.co/datasets/lmms-eval/Video-MME/viewer/videomme/test?row=1872",
          "video_path": "",
          "video_url": "",
          "video_source": "原视频入口：https://www.youtube.com/watch?v=iCQmfRMwHfA；完整视频与字幕已本地取得，未公开上传。",
          "video_status": "仅本地保存，人工核查待填写。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "条件需要",
            "是否需要字幕": "条件需要，字幕或者音频能够用来判断",
            "适合的JEV输出": "Choice",
            "视频是否必要": "条件必要；完整字幕已包含答案，视频不是必需。",
            "答案是否清楚": "是",
            "证据时刻": "全片字幕或音频判断",
            "结论": "可作为长文本理解题或对照题，不计入核心视频理解题",
            "待解决问题": "文本理解；未经作者批准不可公开再发布原数据。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "数据源层面建议": "暂缓第一版核心；逐题结论待填写",
            "核查重点": "重点确认全片主题是否仅凭字幕可答；长片输入成本另记。"
          },
          "content_access": "local_only",
          "video_duration": "00:34:44.41",
          "duration_seconds": 2084.41
        },
        {
          "sample_id": "625-2",
          "video_id": "iCQmfRMwHfA",
          "subtask": "long / Object Reasoning",
          "question": "原题仅保存在本地学术核查文件；未获公开再发布批准，不在此复制。",
          "question_zh": "原题、选项与答案请在本地核查文件查看。",
          "options": [],
          "reference_answer": "仅本地提供，公开发布需作者批准。",
          "answer_index": null,
          "annotation_source": "https://huggingface.co/datasets/lmms-eval/Video-MME/viewer/videomme/test?row=1873",
          "video_path": "",
          "video_url": "",
          "video_source": "原视频入口：https://www.youtube.com/watch?v=iCQmfRMwHfA；完整视频与字幕已本地取得，未公开上传。",
          "video_status": "仅本地保存，人工核查待填写。",
          "review": {
            "是否看过正式片段": "是",
            "是否需要音频": "条件需要",
            "是否需要字幕": "条件需要，字幕或者音频能够用来判断",
            "适合的JEV输出": "Choice",
            "视频是否必要": "条件必要；完整字幕已包含答案，视频不是必需。",
            "答案是否清楚": "是",
            "证据时刻": "根据字幕或音频内容判断",
            "结论": "可作为长文本理解题或对照题，不计入核心视频理解题",
            "待解决问题": "文本理解；未经作者批准不可公开再发布原数据。",
            "查看方式": "已下载，本地查看",
            "核查人": "余金洋",
            "核查日期": "2026-10-02",
            "数据源层面建议": "暂缓第一版核心；逐题结论待填写",
            "核查重点": "重点确认观点来自发言还是可观察画面；字幕替代是否完整。"
          },
          "content_access": "local_only",
          "video_duration": "00:34:44.41",
          "duration_seconds": 2084.41
        }
      ]
    },
    {
      "name": "VideoMME v2",
      "category": "综合；新版本综合理解",
      "version": "Video-MME v2；数据修订号待填写",
      "sources": [
        {
          "label": "官方 HF 数据",
          "url": "https://huggingface.co/datasets/MME-Benchmarks/Video-MME-v2"
        },
        {
          "label": "官方代码",
          "url": "https://github.com/MME-Benchmarks/Video-MME-v2"
        }
      ],
      "source_notes": "**公开**。[官方 HF 数据](https://huggingface.co/datasets/MME-Benchmarks/Video-MME-v2)；[官方代码](https://github.com/MME-Benchmarks/Video-MME-v2)。与上一行是不同版本。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：待填写具体题型；有选项部分可接 Choice。",
      "viewing_guidance": "按 v2 官方 HF／代码查看题目和视频准备说明；使用 v2 自己的标识匹配视频，不沿用上一版 ID。逐条预览／下载能力待填写。",
      "report_path": "数据源样例/VideoMME v2/人工筛选报告.md",
      "samples_path": "数据源样例/VideoMME v2/样例清单.json",
      "samples": []
    },
    {
      "name": "CGBench",
      "category": "综合；长视频理解与证据定位",
      "version": "CGBench；数据版本／修订号待填写",
      "sources": [
        {
          "label": "官方 HF 数据",
          "url": "https://huggingface.co/datasets/CG-Bench/CG-Bench"
        },
        {
          "label": "官方代码",
          "url": "https://github.com/CG-Bench/CG-Bench"
        }
      ],
      "source_notes": "**需同意访问条件**。对应 **CG-Bench**：[官方 HF 数据](https://huggingface.co/datasets/CG-Bench/CG-Bench)；[官方代码](https://github.com/CG-Bench/CG-Bench)。页面公开，但文件需登录并接受条件。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：选择题部分；证据定位需时间区间输出。",
      "viewing_guidance": "先登录 HF 接受访问条件，再查看标注与文件组织；按选定视频 ID 请求少量片段，不能将公开页面当成已获得文件访问权。",
      "report_path": "数据源样例/CGBench/人工筛选报告.md",
      "samples_path": "数据源样例/CGBench/样例清单.json",
      "samples": []
    },
    {
      "name": "VideoZeroBench",
      "category": "综合；挑战性视频理解",
      "version": "VideoZeroBench；数据版本／修订号待填写",
      "sources": [
        {
          "label": "作者 HF 数据",
          "url": "https://huggingface.co/datasets/marinero4972/VideoZeroBench"
        },
        {
          "label": "官方代码",
          "url": "https://github.com/marinero4972/VideoZeroBench"
        }
      ],
      "source_notes": "**公开**。[作者 HF 数据](https://huggingface.co/datasets/marinero4972/VideoZeroBench)；[官方代码](https://github.com/marinero4972/VideoZeroBench)。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：待填写题型；有选项可接 Choice，是非命题可接 Noul。",
      "viewing_guidance": "从作者 HF 与代码核查文件组织和标注；先选择样例 ID，再确认单视频入口或分包方式。在线示例和下载粒度待填写。",
      "report_path": "数据源样例/VideoZeroBench/人工筛选报告.md",
      "samples_path": "数据源样例/VideoZeroBench/样例清单.json",
      "samples": []
    },
    {
      "name": "MLVU-dev",
      "category": "长视频；长视频多任务理解",
      "version": "MLVU Dev 开发集；数据修订号待填写",
      "sources": [
        {
          "label": "项目 HF 数据",
          "url": "https://huggingface.co/datasets/MLVU/MVLU"
        },
        {
          "label": "官方代码",
          "url": "https://github.com/JUNJIE99/MLVU"
        }
      ],
      "source_notes": "**公开开发集**。[项目 HF 数据](https://huggingface.co/datasets/MLVU/MVLU)；[官方代码](https://github.com/JUNJIE99/MLVU)。HF 仓库名是 `MVLU`，但内容为 MLVU；注意选 Dev 集。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：有选项子任务；其他生成任务另处理。",
      "viewing_guidance": "先在官方 HF／代码选择 Dev 的题型和标注；按视频文件名定位相应视频包。能否取单条片段待填写。",
      "report_path": "数据源样例/MLVU-dev/人工筛选报告.md",
      "samples_path": "数据源样例/MLVU-dev/样例清单.json",
      "samples": []
    },
    {
      "name": "LVBench",
      "category": "长视频；长视频综合理解",
      "version": "LVBench；数据版本／修订号待填写",
      "sources": [
        {
          "label": "官方标注与视频 ID",
          "url": "https://huggingface.co/datasets/zai-org/LVBench"
        },
        {
          "label": "下载脚本",
          "url": "https://github.com/zai-org/LVBench"
        }
      ],
      "source_notes": "**部分公开**。[官方标注与视频 ID](https://huggingface.co/datasets/zai-org/LVBench)；[下载脚本](https://github.com/zai-org/LVBench)。原视频需按 YouTube ID 获取，可能有失效链接。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：选择题部分。",
      "viewing_guidance": "标注给出视频 ID；按官方脚本／YouTube 来源获取选定视频。记录链接是否失效、视频时长以及是否为完整评测素材。",
      "report_path": "数据源样例/LVBench/人工筛选报告.md",
      "samples_path": "数据源样例/LVBench/样例清单.json",
      "samples": []
    },
    {
      "name": "LongVideoBench",
      "category": "长视频；长视频中的信息检索与理解",
      "version": "LongVideoBench；数据版本／修订号待填写",
      "sources": [
        {
          "label": "官方 HF 数据",
          "url": "https://huggingface.co/datasets/longvideobench/LongVideoBench"
        },
        {
          "label": "官方代码",
          "url": "https://github.com/longvideobench/LongVideoBench"
        }
      ],
      "source_notes": "**公开**。[官方 HF 数据](https://huggingface.co/datasets/longvideobench/LongVideoBench)；[官方代码](https://github.com/longvideobench/LongVideoBench)。部分网络视频需要根据链接获取。",
      "priority": "第一版推荐",
      "planned_questions": 100,
      "final_decision": "待人工核查；正式数据待取得",
      "decision_reason": "已准备作者网页跨时间画面比较展示例1题；不代表正式验证集抽样。用户已完成HF条件确认。",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：选择题。",
      "viewing_guidance": "先看原站播放器中的背包变化示例；本地展示视频已获取。正式样例ID、验证集标注与字幕待核对。",
      "report_path": "数据源样例/LongVideoBench/人工筛选报告.md",
      "samples_path": "数据源样例/LongVideoBench/样例清单.json",
      "samples": [
        {
          "sample_id": "official-web-backpack-change",
          "video_id": "banner_video",
          "subtask": "作者网页展示例／跨时间画面比较；正式子任务待核对",
          "question": "At the beginning of the video (0:19 - 0:22), a woman with a headband tied to her head, wearing a red top, carrying a black backpack, when the woman comes down from a hill with tall rocks (3:34 - 3:40), what changes occur to her backpack?",
          "question_zh": "比较开头戴头带、穿红色上衣女子的黑色背包，与她从高大岩石山坡下来时的背包：发生了什么变化？",
          "options": [
            "There is a dark red jacket hanging on her black backpack",
            "Nothing changed",
            "There is a white jacket hanging on her black backpack",
            "There is a dark blue jacket hanging on her black backpack"
          ],
          "reference_answer": "D. There is a dark blue jacket hanging on her black backpack（作者网页展示答案；人工核验待填写）",
          "answer_index": 3,
          "annotation_source": "https://longvideobench.github.io/",
          "video_path": "",
          "video_url": "https://longvideobench.github.io/static/videos/banner_video.mp4",
          "video_source": "作者项目网页公开展示视频；链接原站播放，不向本仓库再上传视频。",
          "video_status": "作者展示视频已本地获取、首帧解码通过；不是已确认的正式验证集样例。",
          "review": {
            "是否看过正式片段": "待填写",
            "是否需要音频": "待填写",
            "是否需要字幕": "待填写",
            "适合的JEV输出": "初筛 Choice；人工确认待填写",
            "视频是否必要": "待填写",
            "答案是否清楚": "待填写",
            "证据时刻": "待填写",
            "结论": "待填写",
            "待解决问题": "正式样例ID、划分及字幕配套待核对；先确认前后画面是否必要。",
            "查看方式": "网页原站视频或本地 videos/banner_video.mp4；先静音作答，再核对官方展示答案。",
            "核查人": "待填写",
            "核查日期": "待填写"
          },
          "sample_origin": "author_public_demo",
          "formal_sample_id": "待填写",
          "split": "待填写",
          "video_duration": "00:03:58.91",
          "author_referenced_times": [
            "00:19–00:22",
            "03:34–03:40"
          ]
        }
      ]
    },
    {
      "name": "EgoSchema",
      "category": "长视频；第一视角长视频理解",
      "version": "EgoSchema；数据版本／修订号待填写",
      "sources": [
        {
          "label": "官方获取说明",
          "url": "https://github.com/egoschema/EgoSchema"
        },
        {
          "label": "项目页",
          "url": "https://egoschema.github.io/"
        }
      ],
      "source_notes": "**公开但需接受平台规则**。[官方获取说明](https://github.com/egoschema/EgoSchema)；[项目页](https://egoschema.github.io/)。推荐从 Kaggle 竞赛页接受规则后下载；视频源于 Ego4D，应遵守其许可。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：选择题；需可获得标准答案或官方评测。",
      "viewing_guidance": "按官方说明进入数据平台并接受规则；先选择公开答案子集，再取得对应视频。是否有可用在线示例／单视频入口待填写。",
      "report_path": "数据源样例/EgoSchema/人工筛选报告.md",
      "samples_path": "数据源样例/EgoSchema/样例清单.json",
      "samples": []
    },
    {
      "name": "Video-Holmes",
      "category": "视频推理；视频中的多步推理",
      "version": "Video-Holmes；数据版本／修订号待填写",
      "sources": [
        {
          "label": "官方 HF 数据及视频",
          "url": "https://huggingface.co/datasets/TencentARC/Video-Holmes"
        },
        {
          "label": "代码",
          "url": "https://github.com/TencentARC/Video-Holmes"
        }
      ],
      "source_notes": "**公开**。[官方 HF 数据及视频](https://huggingface.co/datasets/TencentARC/Video-Holmes)；[代码](https://github.com/TencentARC/Video-Holmes)。",
      "priority": "第一版推荐",
      "planned_questions": 100,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：待填写本条题型；有选项子集可接 Choice。",
      "viewing_guidance": "在官方 HF 查看标注与视频文件组织，按选定 ID 找片段；独立视频预览或按条获取能力待填写。",
      "report_path": "数据源样例/Video-Holmes/人工筛选报告.md",
      "samples_path": "数据源样例/Video-Holmes/样例清单.json",
      "samples": []
    },
    {
      "name": "Minerva",
      "category": "视频推理；复杂视频推理",
      "version": "Minerva；数据版本／修订号待填写；将 Minerva w/sub. 合并为有字幕设置，不新增独立数据集。",
      "sources": [
        {
          "label": "Google DeepMind 官方数据说明",
          "url": "https://github.com/google-deepmind/neptune#minerva"
        }
      ],
      "source_notes": "**标注公开，视频按链接获取**。[Google DeepMind 官方数据说明](https://github.com/google-deepmind/neptune#minerva)。提供问答及推理标注 JSON、YouTube 视频链接，未见统一的视频包。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：选择题配置；推理文本不作为答案输入。",
      "viewing_guidance": "先在官方 neptune 仓库读问答 JSON，再使用其中 YouTube 链接查看选定素材；核对所需时间范围和源链接可用性。",
      "report_path": "数据源样例/Minerva/人工筛选报告.md",
      "samples_path": "数据源样例/Minerva/样例清单.json",
      "samples": []
    },
    {
      "name": "VRBench",
      "category": "视频推理；长叙事视频多步推理",
      "version": "OpenGVLab VRBench 长叙事推理项目；数据版本待填写",
      "sources": [
        {
          "label": "官方 HF 数据",
          "url": "https://huggingface.co/datasets/OpenGVLab/VRBench"
        },
        {
          "label": "项目页",
          "url": "https://vrbench.github.io/"
        }
      ],
      "source_notes": "**公开**。对应长叙事视频多步推理基准：[官方 HF 数据](https://huggingface.co/datasets/OpenGVLab/VRBench)；[项目页](https://vrbench.github.io/)。另有同名迷宫视频 VR-Bench，此处按截图类别选前者。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：最终答案选择部分；推理过程另评。",
      "viewing_guidance": "可先查看官方项目页了解例子，再在 HF 找相应标注和视频；项目例子是否可播放、是否对应公开样例 ID 待填写。",
      "report_path": "数据源样例/VRBench/人工筛选报告.md",
      "samples_path": "数据源样例/VRBench/样例清单.json",
      "samples": []
    },
    {
      "name": "VCRBench",
      "category": "视频推理；长视频因果推理",
      "version": "pritamqu VCRBench 长视频因果推理项目；需确认原表所指项目及版本",
      "sources": [
        {
          "label": "作者 HF 数据",
          "url": "https://huggingface.co/datasets/pritamqu/VCRBench"
        },
        {
          "label": "代码",
          "url": "https://github.com/pritamqu/VCRBench"
        }
      ],
      "source_notes": "**公开**。对应长视频因果推理基准：[作者 HF 数据](https://huggingface.co/datasets/pritamqu/VCRBench)；[代码](https://github.com/pritamqu/VCRBench)。部分视频来自 CrossTask，需遵守原许可。不要与 `VCR-Bench` 视频思维链基准混淆。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：先确认项目与本条题型；若有原生选项可接 Choice。",
      "viewing_guidance": "先确认使用 pritamqu 的这个项目，再按代码／HF 的标注和 CrossTask 等来源定位视频；具体片段获取方式待填写。",
      "report_path": "数据源样例/VCRBench/人工筛选报告.md",
      "samples_path": "数据源样例/VCRBench/样例清单.json",
      "samples": []
    },
    {
      "name": "LongVideoReason",
      "category": "视频推理；长视频推理",
      "version": "LongVideo-Reason；测试划分和版本待填写",
      "sources": [
        {
          "label": "HF 数据",
          "url": "https://huggingface.co/datasets/LongVideo-Reason/longvideo-reason"
        },
        {
          "label": "项目代码",
          "url": "https://github.com/NVlabs/Long-RL/tree/main/longvideo-reason"
        }
      ],
      "source_notes": "**公开**。对应 **LongVideo-Reason**：[HF 数据](https://huggingface.co/datasets/LongVideo-Reason/longvideo-reason)；[项目代码](https://github.com/NVlabs/Long-RL/tree/main/longvideo-reason)。它还包含训练数据，评测时需选对应测试划分。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：待填写测试题型；有选项测试题可接 Choice。",
      "viewing_guidance": "先在 HF／代码确认测试划分和标注，按测试样例定位视频；不要从训练集随意选题冒充测试。按条获取方式待填写。",
      "report_path": "数据源样例/LongVideoReason/人工筛选报告.md",
      "samples_path": "数据源样例/LongVideoReason/样例清单.json",
      "samples": []
    },
    {
      "name": "VideoMMMU",
      "category": "视频知识；跨学科视频知识与理解",
      "version": "VideoMMMU；数据版本／修订号待填写",
      "sources": [
        {
          "label": "项目 HF 数据",
          "url": "https://huggingface.co/datasets/lmms-lab/VideoMMMU"
        },
        {
          "label": "官方代码",
          "url": "https://github.com/EvolvingLMMs-Lab/VideoMMMU"
        }
      ],
      "source_notes": "**需同意访问条件**。[项目 HF 数据](https://huggingface.co/datasets/lmms-lab/VideoMMMU)；[官方代码](https://github.com/EvolvingLMMs-Lab/VideoMMMU)。公开页面可见，下载需登录并接受条件。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：选择题部分；其他题型另核查。",
      "viewing_guidance": "先接受 HF 访问条件，再从官方数据准备说明定位视频；可先看项目例子了解任务，但正式片段和 ID 对应关系需要核查。",
      "report_path": "数据源样例/VideoMMMU/人工筛选报告.md",
      "samples_path": "数据源样例/VideoMMMU/样例清单.json",
      "samples": []
    },
    {
      "name": "MMVU-all",
      "category": "视频知识；专业知识，多种问答形式",
      "version": "MMVU；优先公开验证集，all 为全任务配置的暂定理解",
      "sources": [
        {
          "label": "官方 HF 验证集",
          "url": "https://huggingface.co/datasets/yale-nlp/MMVU"
        },
        {
          "label": "官方代码",
          "url": "https://github.com/yale-nlp/MMVU"
        }
      ],
      "source_notes": "**部分公开**。按 **MMVU** 全任务理解：[官方 HF 验证集](https://huggingface.co/datasets/yale-nlp/MMVU)；[官方代码](https://github.com/yale-nlp/MMVU)。官方测试集隐藏；`all` 更像评测配置名。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：Choice：公开验证集选择题部分；自由答案另处理。",
      "viewing_guidance": "先选官方公开验证集记录，再按视频标识和数据说明取得对应片段；隐藏测试集不作为本地有答案样例。",
      "report_path": "数据源样例/MMVU-all/人工筛选报告.md",
      "samples_path": "数据源样例/MMVU-all/样例清单.json",
      "samples": []
    },
    {
      "name": "VideoMathQA",
      "category": "视频知识；视频数学理解与推理",
      "version": "VideoMathQA；数据版本／修订号待填写",
      "sources": [
        {
          "label": "官方 HF 数据",
          "url": "https://huggingface.co/datasets/MBZUAI/VideoMathQA"
        },
        {
          "label": "代码",
          "url": "https://github.com/mbzuai-oryx/VideoMathQA"
        }
      ],
      "source_notes": "**公开**。[官方 HF 数据](https://huggingface.co/datasets/MBZUAI/VideoMathQA)；[代码](https://github.com/mbzuai-oryx/VideoMathQA)。",
      "priority": "替补候选",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：待填写本条题型；有选项可接 Choice，自由数学答案需另定输出。",
      "viewing_guidance": "在官方 HF／代码查看题目与视频组织；先定位指定样例，再确认独立视频、字幕、音轨的获取方式。",
      "report_path": "数据源样例/VideoMathQA/人工筛选报告.md",
      "samples_path": "数据源样例/VideoMathQA/样例清单.json",
      "samples": []
    },
    {
      "name": "OVOBench",
      "category": "流式视频；持续视频中的在线理解／响应",
      "version": "OVO-Bench；数据修订号待填写",
      "sources": [
        {
          "label": "官方 HF 数据与视频包",
          "url": "https://huggingface.co/datasets/JoeLeelyf/OVO-Bench"
        },
        {
          "label": "代码和下载说明",
          "url": "https://github.com/JoeLeelyf/OVO-Bench"
        }
      ],
      "source_notes": "**公开**。对应 **OVO-Bench**：[官方 HF 数据与视频包](https://huggingface.co/datasets/JoeLeelyf/OVO-Bench)；[代码和下载说明](https://github.com/JoeLeelyf/OVO-Bench)。数据采用 CC BY-NC-SA 4.0，视频还受来源许可约束。",
      "priority": "扩展备用",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：按子任务核查 Choice／Noul 等映射；主动响应时机需要额外输出与指标。",
      "viewing_guidance": "从官方 HF／README 选择在线任务样例和视频包；按提问／响应时刻观看此前内容。只看完整视频不能验证无未来信息的在线条件。",
      "report_path": "数据源样例/OVOBench/人工筛选报告.md",
      "samples_path": "数据源样例/OVOBench/样例清单.json",
      "samples": []
    },
    {
      "name": "OVBench",
      "category": "流式视频；随时间到达的视频问答",
      "version": "OVBench；数据版本／修订号待填写",
      "sources": [
        {
          "label": "官方 HF 数据与视频包",
          "url": "https://huggingface.co/datasets/MCG-NJU/OVBench"
        },
        {
          "label": "官方项目与评测代码",
          "url": "https://github.com/MCG-NJU/VideoChat-Online"
        }
      ],
      "source_notes": "**公开**。[官方 HF 数据与视频包](https://huggingface.co/datasets/MCG-NJU/OVBench)；[官方项目与评测代码](https://github.com/MCG-NJU/VideoChat-Online)。视频包含序列帧和片段，下载时需按官方数据准备说明组织。",
      "priority": "扩展备用",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：待填写每个在线问答子任务的答案类型；不能只凭流式类别判定 Choice。",
      "viewing_guidance": "按官方数据准备说明读取序列帧或片段；对照问题时刻检查已见历史。在线视频入口与最小下载单位待填写。",
      "report_path": "数据源样例/OVBench/人工筛选报告.md",
      "samples_path": "数据源样例/OVBench/样例清单.json",
      "samples": []
    },
    {
      "name": "ODVBench",
      "category": "流式视频；流式驾驶场景理解",
      "version": "ODV-Bench；数据修订号待填写",
      "sources": [
        {
          "label": "作者 HF 数据（视频、标注）",
          "url": "https://huggingface.co/datasets/MCG-NJU/ODV-Bench"
        },
        {
          "label": "项目代码",
          "url": "https://github.com/MCG-NJU/StreamForest"
        }
      ],
      "source_notes": "**公开**。对应 **ODV-Bench**：[作者 HF 数据（视频、标注）](https://huggingface.co/datasets/MCG-NJU/ODV-Bench)；[项目代码](https://github.com/MCG-NJU/StreamForest)。",
      "priority": "扩展备用",
      "planned_questions": 0,
      "final_decision": "待填写",
      "decision_reason": "待填写",
      "selected_scope": "待填写",
      "known_output": "初筛：待填写具体驾驶问答题型；有选项可接 Choice，开放答案另处理。",
      "viewing_guidance": "从官方 HF／StreamForest 的数据说明定位驾驶视频与时间标注；以问题发生时刻为界观看，不能将后续画面用于回答。",
      "report_path": "数据源样例/ODVBench/人工筛选报告.md",
      "samples_path": "数据源样例/ODVBench/样例清单.json",
      "samples": []
    }
  ]
};
