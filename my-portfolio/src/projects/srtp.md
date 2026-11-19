---
templateEngineOverride: "njk"
layout: "project.njk"
title: "智绘视界 SkyLens-AI"
titleEn: "SkyLens-AI"
permalink: "/projects/srtp/"
nav: "works"
group: "research"
order: 5
kicker: "国家级大学生创新训练计划"
kind: "2025—2026 · 项目编号 202510286001"
desc: "城市鸟瞰效果图的实时生成系统。本人负责鸟瞰数据集的构建与网页交互系统。"
cover: "/imgs/srtp-cover.jpg"
tone: "tone-magenta"
script: ""
---


  <div class="wrap">
    <header class="phead tone-magenta reveal">
      <p class="kicker">研究 / 国家级大学生创新训练计划</p>
      <h1>智绘视界 SkyLens-AI</h1>
      <p class="sub">城市鸟瞰效果图实时渲染系统研究 · 2025—2026</p>
      <div class="phead-meta">
        <div class="pm"><div class="k">项目编号</div><div class="v">202510286001</div></div>
        <div class="pm"><div class="k">指导教师</div><div class="v">章飙</div></div>
        <div class="pm"><div class="k">负责人</div><div class="v">金润喜</div></div>
        <div class="pm"><div class="k">本人分工</div><div class="v">数据集构建 · 网页交互系统</div></div>
      </div>
    </header>

    <div class="pintro">
      <p class="lede reveal">团队把 Stable Diffusion、LoRA 风格训练与 ControlNet 结构控制组合成一套城市鸟瞰效果图的生成流程，目标是把数小时的传统渲染压缩到可以即时反馈的时间尺度。</p>
      <p class="lede reveal">我负责两件事：为模型准备一套垂直、合规、可用的鸟瞰数据集；以及搭建设计师能直接上手的网页交互界面。</p>
    </div>

    <div class="results reveal">
      <div class="result"><div class="k">1200+</div><div class="v">高质量鸟瞰样本</div></div>
      <div class="result"><div class="k">2–4 s</div><div class="v">单图生成平均用时</div></div>
      <div class="result"><div class="k">4:2:2:2</div><div class="v">日景 / 夜景 / 黄昏 / 雪景</div></div>
      <div class="result"><div class="k">≥95%</div><div class="v">结构约束下的生成吻合度</div></div>
    </div>

    <div class="chapter tone-cyan">
      <div class="chapter-label">Dataset 数据集</div>
      <h2 class="reveal">双尺度与三重验证</h2>
      <p class="note reveal">样本按空间尺度分为覆盖 2–3 km² 的整体鸟瞰与 0.5–1 km² 的局部鸟瞰，按日景、夜景、黄昏、雪景 4:2:2:2 配比；入库前经过构图评估、信息熵检测与人工审核三重验证。标注分为基础语义 36 项、专业属性 52 项、美学特征 48 项。</p>
      <div class="grid-2">
        <figure class="fig reveal" data-lb data-group="s" data-cap="双尺度数据架构">
          <img src="/imgs/srtp-scale.jpg" width="1900" height="1069" alt="双尺度鸟瞰数据集架构" loading="lazy">
          <figcaption><span class="fno">图 01</span><span class="ft">双尺度数据架构</span></figcaption>
        </figure>
        <figure class="fig reveal" data-lb data-group="s" data-cap="多层级语义标签">
          <img src="/imgs/srtp-labels.jpg" width="1900" height="1069" alt="多层级语义标签体系" loading="lazy">
          <figcaption><span class="fno">图 02</span><span class="ft">多层级语义标签</span></figcaption>
        </figure>
      </div>
    </div>

    <div class="chapter tone-magenta">
      <div class="chapter-label">Interface 网页系统</div>
      <h2 class="reveal">把参数藏在设计师的习惯里</h2>
      <p class="note reveal">网页端基于 Gradio 开发，与本地部署的 Stable Diffusion 通过接口联动：上传草图或底图、选择场景风格、调整权重与提示词，即可得到生成结果并批量下载。</p>
      <div class="grid-2">
        <figure class="fig reveal" data-lb data-group="s" data-cap="网页交互界面">
          <img src="/imgs/srtp-web.jpg" width="1900" height="1069" alt="网页交互界面" loading="lazy">
          <figcaption><span class="fno">图 03</span><span class="ft">网页交互界面</span></figcaption>
        </figure>
        <figure class="fig reveal" data-lb data-group="s" data-cap="ControlNet 结构控制">
          <img src="/imgs/srtp-controlnet.jpg" width="1900" height="1069" alt="ControlNet 文图双线程控制" loading="lazy">
          <figcaption><span class="fno">图 04</span><span class="ft">ControlNet 结构控制</span></figcaption>
        </figure>
      </div>
    </div>

    <div class="chapter tone-sand">
      <div class="chapter-label">Outcome 成果</div>
      <h2 class="reveal">论文、专利与结题</h2>
      <ul class="list reveal">
        <li>论文《基于 SkyLens-AI 技术的城市鸟瞰场景生成方法研究》，第一作者，与金润喜、汪圣欣、杨诗庭、周琼琦、章飙合作</li>
        <li>发明专利申请公布 CN 121211900 A《一种城市设计三维模型图谱化的导则信息转译方法与系统》，发明人之一，2025.12.26 公布</li>
        <li>国家级大学生创新创业训练计划结题，2026.04，成绩「通过」</li>
        <li>2025 年东南大学第十九届大学生创新成果展示会「我最喜爱的作品」</li>
      </ul>

      <div class="grid-3" style="margin-top:clamp(24px,3.6vw,42px)">
        <figure class="fig fig-doc reveal" data-lb data-group="s" data-cap="结项证书（国家级大创，2026.04）">
          <img src="/imgs/srtp-cert.jpg" width="1200" height="1695" alt="国家级大学生创新创业训练计划结题证书" loading="lazy">
          <figcaption><span class="fno">证 01</span><span class="ft">结题证书</span></figcaption>
        </figure>
        <figure class="fig fig-doc reveal" data-lb data-group="s" data-cap="荣誉证书（2025 第十九届创新成果展示会）">
          <img src="/imgs/srtp-award.jpg" width="1500" height="1080" alt="荣誉证书：我最喜爱的作品" loading="lazy">
          <figcaption><span class="fno">证 02</span><span class="ft">荣誉证书</span></figcaption>
        </figure>
        <figure class="fig fig-doc reveal" data-lb data-group="s" data-cap="发明专利申请公布（CN 121211900 A）">
          <img src="/imgs/srtp-patent.jpg" width="1300" height="1838" alt="发明专利申请公布文件" loading="lazy">
          <figcaption><span class="fno">证 03</span><span class="ft">专利公布</span></figcaption>
        </figure>
      </div>
    </div>

    <div class="chapter tone-steel">
      <div class="chapter-label">Paper 论文</div>
      <h2 class="reveal">六页论文</h2>
      <p class="note reveal">论文完整记录了技术路线、数据集构建、LoRA 训练与 ControlNet 介入方式，可在下方链接中阅读原文。</p>
      <div class="grid-3">
        <figure class="fig reveal" data-lb data-group="p" data-cap="论文 第 1 页">
          <img src="/imgs/srtp-paper-1.jpg" width="1300" height="1770" alt="论文第 1 页" loading="lazy">
          <figcaption><span class="fno">P.01</span><span class="ft">论文首页</span></figcaption>
        </figure>
        <figure class="fig reveal" data-lb data-group="p" data-cap="论文 第 2 页">
          <img src="/imgs/srtp-paper-2.jpg" width="1300" height="1770" alt="论文第 2 页" loading="lazy">
          <figcaption><span class="fno">P.02</span><span class="ft">第 2 页</span></figcaption>
        </figure>
        <figure class="fig reveal" data-lb data-group="p" data-cap="论文 第 3 页">
          <img src="/imgs/srtp-paper-3.jpg" width="1300" height="1770" alt="论文第 3 页" loading="lazy">
          <figcaption><span class="fno">P.03</span><span class="ft">第 3 页</span></figcaption>
        </figure>
        <figure class="fig reveal" data-lb data-group="p" data-cap="论文 第 4 页">
          <img src="/imgs/srtp-paper-4.jpg" width="1300" height="1770" alt="论文第 4 页" loading="lazy">
          <figcaption><span class="fno">P.04</span><span class="ft">第 4 页</span></figcaption>
        </figure>
        <figure class="fig reveal" data-lb data-group="p" data-cap="论文 第 5 页">
          <img src="/imgs/srtp-paper-5.jpg" width="1300" height="1770" alt="论文第 5 页" loading="lazy">
          <figcaption><span class="fno">P.05</span><span class="ft">第 5 页</span></figcaption>
        </figure>
        <figure class="fig reveal" data-lb data-group="p" data-cap="论文 第 6 页">
          <img src="/imgs/srtp-paper-6.jpg" width="1300" height="1770" alt="论文第 6 页" loading="lazy">
          <figcaption><span class="fno">P.06</span><span class="ft">第 6 页</span></figcaption>
        </figure>
      </div>
    </div>

    <div class="links reveal">
      <a class="link" href="%E6%99%BA%E7%BB%98%E8%A7%86%E7%95%8CSRTP/%E7%BB%93%E9%A1%B9%E6%88%90%E6%9E%9C/%E5%9F%BA%E4%BA%8ESkyLens-AI%E6%8A%80%E6%9C%AF%E7%9A%84%E5%9F%8E%E5%B8%82%E9%B8%9F%E7%9E%B0%E5%9C%BA%E6%99%AF%E7%94%9F%E6%88%90%E6%96%B9%E6%B3%95%E7%A0%94%E7%A9%B6.pdf" target="_blank" rel="noopener">论文 PDF <span class="sz">6 页</span></a>
      <a class="link" href="%E6%99%BA%E7%BB%98%E8%A7%86%E7%95%8CSRTP/%E7%BB%93%E9%A1%B9%E6%88%90%E6%9E%9C/%E7%BB%93%E9%A2%98%E6%8A%A5%E5%91%8A.pdf" target="_blank" rel="noopener">结题报告 <span class="sz">59 页 / 43 MB</span></a>
      <a class="link" href="%E6%99%BA%E7%BB%98%E8%A7%86%E7%95%8CSRTP/%E7%BB%93%E9%A1%B9%E6%88%90%E6%9E%9C/%E6%99%BA%E7%BB%98%E8%A7%86%E7%95%8C-%E5%9F%BA%E4%BA%8E%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%9F%8E%E5%B8%82%E9%B8%9F%E7%9E%B0%E6%95%88%E6%9E%9C%E5%9B%BE%E5%AE%9E%E6%97%B6%E6%B8%B2%E6%9F%93%E7%B3%BB%E7%BB%9F%E7%A0%94%E7%A9%B6.pdf" target="_blank" rel="noopener">成果汇报 <span class="sz">36 页</span></a>
      <a class="link" href="%E6%99%BA%E7%BB%98%E8%A7%86%E7%95%8CSRTP/web/%E6%88%90%E6%9E%9C%E8%A7%86%E9%A2%91%E5%BD%95%E5%88%B6.mp4" target="_blank" rel="noopener">成果视频 <span class="sz">28 MB</span></a>
    </div>

    <div class="next">
      <a class="back" href="/">← 返回目录</a>
      <a href="/">去看看摄影 <i>→</i></a>
    </div>
  </div>

  
