
# Typora

refer to: https://support.typora.io/Auto-Numbering/

# Zettlr

- ~/.config/Zettlr/defaults/export.docx.yaml
- ~/.config/Zettlr/defaults/export.pdf.yaml
- ~/.config/Zettlr/custom.css

typora使用pandoc来导出docx等格式，但用得很差很初级。由于pandoc导出pdf需要latex环境有些复杂，typora导出pdf没有用pandoc。

这一点Zettlr比较强，可以把pandoc所有命令行参数和metadata放入导出配置，和pandoc命令行导出完全一样。

但有一个小问题：

date: \today、code-block-font-size: \footnotesize这样带latex参数的不知为什么需要放到md文件中才有效；

而fontsize则相反，必须在导出配置yaml中才有效，在md中无法覆盖导出配置中的设置。

# MPE

https://github.com/shd101wyy/vscode-markdown-preview-enhanced

## 增加heading AutoNum支持

MPE:自定义式样(Markdown Preview Enhanced:Customize CSS)
~/.mume/style.less

```shell
cp style.less ~/.mume/
```

## 增加{.plantuml}的解析支持

``` shell
cp parseBlockInfo.js ~/.vscode/extensions/shd101wyy.markdown-preview-enhanced-0.6.3/node_modules//@shd101wyy/mume/out/src/lib/block-info/
```

# vscode-vditor

https://github.com/ajeep8/vscode-vditor

``` shell
cp light-autonum.css ~/.vscode/extensions/zhepama.vscode-vditor-1.0.7/assets/content-theme/
```

# pandoc

templates/eisvogel.latex come frome https://github.com/Wandmalfarbe/pandoc-latex-template with some "ajeep modify".

