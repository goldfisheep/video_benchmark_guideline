"""更新 JSON 后运行：python build_preview.py。仅更新网页数据，不覆盖人工报告。"""
from pathlib import Path
import json

root = Path(__file__).resolve().parent
data = json.loads((root / 'catalog.json').read_text(encoding='utf-8'))
for dataset in data['datasets']:
    sample_file = root / dataset['samples_path']
    dataset['samples'] = json.loads(sample_file.read_text(encoding='utf-8'))['samples']
    for sample in dataset['samples']:
        path = sample.get('video_path', '')
        if path and not (root / path).is_file():
            raise ValueError(f"视频文件不存在：{path}")
encoded = json.dumps(data, ensure_ascii=False, indent=2).replace('</', '<\\/')
(root / 'data.js').write_text('window.BENCHMARK_DATA = ' + encoded + ';\n', encoding='utf-8')
print(f"已更新 {len(data['datasets'])} 个数据源的网页数据。")
