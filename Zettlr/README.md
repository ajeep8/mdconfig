- ~/.config/Zettlr/defaults/export.docx.yaml
- ~/.config/Zettlr/defaults/export.pdf.yaml
- ~/.config/Zettlr/custom.css

typora使用pandoc来导出docx等格式，但用得很差很初级。由于pandoc导出pdf需要latex环境有些复杂，typora导出pdf没有用pandoc。

这一点Zettlr比较强，可以把pandoc所有命令行参数和metadata放入导出配置，和pandoc命令行导出完全一样。

但有一个小问题：

date: \today、code-block-font-size: \footnotesize这样带latex参数的不知为什么需要放到md文件中才有效；

而fontsize则相反，必须在导出配置yaml中才有效，在md中无法覆盖导出配置中的设置。
