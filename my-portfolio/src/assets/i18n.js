/* 中英双语切换：按页面文本节点匹配，保留中文原文以便切回 */
(function () {
  "use strict";

  var DICT = {
    /* ---------- 通用 / 导航 / 页脚 ---------- */
    "王睿泽": "Wang Ruize",
    "王睿泽 Reese": "Wang Ruize (Reese)",
    "建筑设计": "Architecture",
    "摄影": "Photography",
    "作品": "Works",
    "经历": "Profile",
    "联系": "Contact",
    "邮箱": "Email",
    "小红书": "RED",
    "所在地": "Based in",
    "关于本页": "About this site",
    "页面内的图片由原始素材压缩或转绘而来，原始文件未做修改。网站为静态 HTML，可在浏览器中直接离线打开。":
      "Images are compressed or re-drawn from the original material; source files are untouched. This is a static HTML site that opens offline.",
    "© 2026 王睿泽 Reese · 东南大学建筑学院": "© 2026 Wang Ruize (Reese) · School of Architecture, Southeast University",
    "回到首页 ↑": "Back to home ↑",
    "作品 · 王睿泽": "Works · Wang Ruize",
    "经历 · 王睿泽 Reese": "Profile · Wang Ruize (Reese)",
    "看摄影作品": "View photography",
    "回到页面顶部": "Back to top",

    /* ---------- 首页 ---------- */
    "2023级本科生": "Undergraduate, Class of 2023",
    "东南大学建筑学院": "School of Architecture, Southeast University",
    "南京": "Nanjing",
    "站点导航": "Site navigation",
    "王睿泽：东南大学建筑学院 2023级本科生。建筑设计、摄影与 AIGC 研究。":
      "Wang Ruize: undergraduate at the School of Architecture, Southeast University. Architecture, photography and AIGC research.",

    /* ---------- 作品目录 ---------- */
    "建筑设计 · 竞赛与工作营 · 研究": "Architecture · Competitions & Workshops · Research",
    "建筑课程": "Design studios",
    "两项设计": "Two projects",
    "竞赛 / 工作营": "Competitions / Workshops",
    "霍普杯 2026 · DF2026": "UIA-HYP Cup 2026 · DF2026",
    "研究": "Research",
    "国家级大创": "National innovation program",
    "影像": "Photography",
    "摄影作品 11 幅 →": "11 photographs →",
    "课程设计以作品集的方式展开：场地、策略、空间与图纸依次呈现。竞赛、工作营与研究以成果为主，直接给出最终图版与可下载的原件。":
      "Studio projects unfold like a portfolio: site, strategy, space and drawings in sequence. Competitions, workshops and research focus on outcomes — final boards and downloadable originals.",
    "2 项 · 课程设计": "2 projects · Studio",
    "建筑设计课程": "Architecture studio",
    "泉州先锋书店改造设计": "Quanzhou Librairie Avant-Garde",
    "2026.09—11 · 与陈艺钊合作 · 旧影院改造": "Sep—Nov 2026 · with Chen Yizhao · Cinema renovation",
    "泉州古城南片的旧礼堂，保留钢屋架与高侧窗，重新组织门厅、书厅、书阶、咖啡厅与前后院。":
      "An old auditorium in southern Quanzhou: steel trusses and high clerestory kept, foyer, book hall, book steps, café and courtyards reorganized.",
    "查看项目": "View project",
    "悬台筑院": "Suspended Terraces",
    "2025.11—2026.1 · 成贤街社区青年众创综合体": "Nov 2025—Jan 2026 · Community youth hub, Chengxian Street",
    "进香河菜场北侧的高密度街区，用悬挑的混凝土桁架架起一座社区球场，上部置入青年公寓与共享空间。":
      "In a dense block north of the Jinxianghe market, cantilevered concrete trusses lift a community court, with youth housing and shared space above.",
    "2 项": "2 projects",
    "霍普杯 2026 · 何以栖居": "UIA-HYP Cup 2026 · How to Inhabit",
    "金陵何处望长江": "Where Jinling Meets the Yangtze Again",
    "竞赛 · 2026": "Competition · 2026",
    "以金陵船厂的龙门吊与厂房结构为框架，把工业岸线重新接回江边日常。":
      "Using the gantry cranes and factory frames of the Jinling Shipyard, the industrial waterfront is reconnected to everyday life on the river.",
    "查看图版": "View boards",
    "DigitalFUTURES 2026 · 第 16 届工作营": "DigitalFUTURES 2026 · 16th Workshop",
    "增感街道": "Augmented Street",
    "工作营 · 2026 · 混合现实 / 具身交互": "Workshop · 2026 · Mixed reality / Embodied interaction",
    "以 MR 重写街道：从街道尺度的数据采集与智能体模拟，到 1:1 尺度的具身交互实验。":
      "Rewriting the street through MR: from street-scale data collection and agent simulation to 1:1 embodied interaction.",
    "查看成果": "View outcome",
    "1 项 · 国家级大创": "1 project · National program",
    "国家级大学生创新训练计划": "National Undergraduate Innovation Program",
    "智绘视界 SkyLens-AI": "SkyLens-AI",
    "2025—2026 · 项目编号 202510286001": "2025—2026 · Project no. 202510286001",
    "城市鸟瞰效果图的实时生成系统。本人负责鸟瞰数据集的构建与网页交互系统。":
      "A real-time aerial rendering system for cities. I built the aerial dataset and the web interface.",
    "← 返回首页": "← Home",
    "继续看摄影": "Next: photography",

    /* ---------- 泉州先锋书店 ---------- */
    "泉州先锋书店改造设计 · 王睿泽": "Quanzhou Librairie Avant-Garde · Wang Ruize",
    "项目 01 / 建筑设计课程": "Project 01 / Architecture studio",
    "从影院到书店 · 2026.09—11 · 与陈艺钊合作": "From cinema to bookshop · Sep—Nov 2026 · with Chen Yizhao",
    "地点": "Location",
    "泉州古城南片 · 惠义巷": "Southern old town, Quanzhou · Huiyi Lane",
    "类型": "Type",
    "既有建筑改造 / 书店": "Adaptive reuse / Bookshop",
    "时间": "Time",
    "成果": "Outcome",
    "13 张效果图 · 现场影像 78 张": "13 renderings · 78 site photographs",
    "场地是泉州古城南片的一座旧礼堂——课程题目称它为「从影院到书店」。设计保留了大厅的钢屋架、高侧窗与挑高，把门厅、书厅、书阶、咖啡厅以及前院与后院重新组织成一条阅读的路径。":
      "The site is an old auditorium in southern Quanzhou — the brief called it “From Cinema to Bookshop”. The design keeps the hall’s steel trusses, clerestory and double height, reorganizing foyer, book hall, book steps, café and courtyards into a route of reading.",
    "混凝土的灰、木饰面的暖与书脊的颜色构成主色调；天窗与高侧窗把光带进大厅深处。图纸与效果图均由本次课程完成，现场照片记录了改造前的状态。":
      "Concrete grey, warm timber and the colours of book spines set the palette; skylights and clerestories draw light deep into the hall. Drawings and renderings were made for this studio; the photographs record the state before renovation.",
    "图 01": "Fig. 01",
    "主厅 · 由南向北": "Main hall · looking north",
    "Site 场地": "Site",
    "一条巷道里的旧礼堂": "An old auditorium in a lane",
    "南侧正门接惠义巷，院内有一棵大树；主楼面向院落，北侧另有后门与巷道。踏勘时大厅仍保留完整的屋架与高窗，砖墙与地面记录着它作为影院的使用痕迹。":
      "The south gate opens onto Huiyi Lane, with a large tree in the yard; the main building faces the courtyard, with a back door to the north. At survey the hall still kept its roof structure and high windows, while brick walls and floors recorded its life as a cinema.",
    "照 01": "Photo 01",
    "正大门 · 南门": "Main gate · south",
    "照 02": "Photo 02",
    "主楼正面": "Main facade",
    "照 03": "Photo 03",
    "惠义巷街景": "Huiyi Lane",
    "图 02": "Fig. 02",
    "鸟瞰拼贴 · 主楼、前院与周边城市肌理": "Aerial collage · main building, forecourt and urban fabric",
    "Strategy 策略": "Strategy",
    "把大厅重新分成可读的层次": "Re-layering the hall",
    "总平面保留了南侧入口院与院内树木；爆炸图把屋架、楼板、书墙与家具拆成分层；一层平面标注门厅、书厅、书阶、咖啡厅、阅读区与辅助空间，二、三层沿大厅两侧布置阅读与藏书。":
      "The site plan keeps the south entrance court and its trees; the exploded drawing separates roof structure, slabs, book walls and furniture; the ground plan labels foyer, book hall, book steps, café, reading and support spaces, while upper floors place reading and storage along both sides of the hall.",
    "图 03": "Fig. 03",
    "总平面": "Site plan",
    "图 04": "Fig. 04",
    "爆炸图": "Exploded axonometric",
    "图 05": "Fig. 05",
    "一层平面": "Ground floor",
    "图 06": "Fig. 06",
    "二、三层平面": "Upper floors",
    "Space 空间": "Space",
    "从门厅到后院": "From foyer to back court",
    "效果图依次记录门厅、书廊、书阶、咖啡厅、主厅、边厅、收银台、台口，以及前院、后院与入口院。":
      "Renderings record the foyer, book corridor, book steps, café, main hall, side hall, counter, proscenium, plus forecourt, back court and entrance court.",
    "图 07": "Fig. 07",
    "门厅": "Foyer",
    "图 08": "Fig. 08",
    "书廊": "Book corridor",
    "图 09": "Fig. 09",
    "书阶": "Book steps",
    "图 10": "Fig. 10",
    "咖啡厅": "Café",
    "图 11": "Fig. 11",
    "主厅 · 反向": "Main hall · reverse view",
    "图 12": "Fig. 12",
    "边厅": "Side hall",
    "图 13": "Fig. 13",
    "收银台": "Counter",
    "图 14": "Fig. 14",
    "台口": "Proscenium",
    "图 15": "Fig. 15",
    "入口院": "Entrance court",
    "图 16": "Fig. 16",
    "前院": "Forecourt",
    "图 17": "Fig. 17",
    "后院": "Back court",
    "Drawings 图纸": "Drawings",
    "剖面、立面与分析": "Sections, elevations and analysis",
    "长剖面与立面记录屋架、楼板与高窗的关系；剖轴测与剖透视把大厅的空间层次展开；另附场地分析、SWOT、家具分析与两张 1:50 局部图。":
      "The long section and elevation record roof structure, slabs and high windows; cut axonometric and sectional perspective unfold the hall; site collage, SWOT, furniture analysis and two 1:50 details complete the set.",
    "图 18": "Fig. 18",
    "长剖面": "Long section",
    "图 19": "Fig. 19",
    "立面": "Elevation",
    "图 20": "Fig. 20",
    "剖轴测": "Cut axonometric",
    "图 21": "Fig. 21",
    "剖透视": "Sectional perspective",
    "图 22": "Fig. 22",
    "咖啡厅剖立面": "Café section",
    "图 23": "Fig. 23",
    "场地分析拼贴": "Site collage",
    "图 24": "Fig. 24",
    "SWOT 分析": "SWOT analysis",
    "图 25": "Fig. 25",
    "家具分析": "Furniture analysis",
    "图 26": "Fig. 26",
    "1:50 咖啡厅平面": "Café plan 1:50",
    "图 27": "Fig. 27",
    "1:50 灯具吊顶": "Lighting ceiling 1:50",
    "Archive 踏勘档案": "Archive",
    "改造前的现场": "The site before renovation",
    "从 78 张现场记录中选出 20 张：外部环境、主楼室内，以及改造过程中的大厅与屋面。完整素材保留在原始文件夹中。":
      "Twenty of 78 site records: surroundings, interiors, and the hall and roof during renovation. The full set stays in the original folder.",
    "全部 20": "All 20",
    "外部 / 环境": "Exterior / context",
    "室内 / 大厅": "Interior / hall",
    "照片墙需要 JavaScript；完整照片见原始文件夹。": "The photo wall needs JavaScript; the full set is in the original folder.",
    "最终排版文件.pdf": "Final layout.pdf",
    "课题介绍.pdf": "Studio brief.pdf",
    "60 页": "60 pages",
    "现场照片原始文件夹": "Original site photos folder",
    "78 张": "78 files",
    "原始图纸与加固方案": "Original drawings & reinforcement",
    "← 返回目录": "← Back to index",
    "下一个 · 悬台筑院": "Next · Suspended Terraces",

    /* ---------- 悬台筑院 ---------- */
    "悬台筑院 · 王睿泽": "Suspended Terraces · Wang Ruize",
    "项目 02 / 建筑设计课程": "Project 02 / Architecture studio",
    "成贤街社区青年众创综合体设计 · 2025.11—2026.1": "Community youth hub on Chengxian Street · Nov 2025—Jan 2026",
    "南京 · 进香河路与老虎桥交汇处": "Nanjing · Jinxianghe Rd / Laohuqiao junction",
    "规模": "Scale",
    "计容 6000 ㎡ · 用地 4040 ㎡": "6,000 m² GFA · 4,040 m² site",
    "限高": "Height limit",
    "指导": "Studio tutor",
    "夏兵": "Xia Bing",
    "基地在进香河集贸菜场北侧，四面被高密度住区与生活性街巷围住。任务要求在同一块地上叠合青年公寓 3000 ㎡（60 个约 35 ㎡ 的单元）、社区配套 2000 ㎡（含一片 800 ㎡ 风雨篮球场与不小于 500 ㎡ 的城市开放空间）、约 1000 ㎡ 的众创功能，以及 50–99 辆的地下停车。":
      "The site sits north of the Jinxianghe market, enclosed by dense housing and everyday lanes. The brief stacks 3,000 m² of youth housing (60 units of about 35 m²), 2,000 m² of community facilities (including an 800 m² covered basketball court and at least 500 m² of public open space), some 1,000 m² of co-working, and 50–99 underground parking spaces.",
    "设计名为「悬台筑院」：把球场架空在桁架之下，公寓与共享空间向上悬挑；保留菜场二层入户平台与疏散楼梯的动线，屋顶与各层平台成为社区的第二地面。":
      "Titled “Suspended Terraces”: the court sits under the trusses while housing and shared space cantilever above; the market’s first-floor access deck and escape stairs are kept, and roofs and terraces become a second ground for the community.",
    "架空球场 · 混凝土桁架与悬挑体量": "Elevated court · concrete trusses and cantilevered volumes",
    "Site & Massing 场地与体块": "Site & massing",
    "在菜场北侧叠一座院子": "A courtyard stacked north of the market",
    "总平面沿进香河路退让 6 m，其余边线退让 4 m；球场占据场地中央，公寓与活动中心沿东、南两侧展开，地下车库入口布置在北侧。体块生成把「球场—活动中心—公寓」自下而上叠合，并留出屋顶绿化与平台。":
      "The plan sets back 6 m along Jinxianghe Road and 4 m elsewhere; the court occupies the centre, housing and activity centre unfold east and south, and the garage entrance sits north. The massing stacks court, activity centre and housing from the ground up, leaving roof planting and terraces.",
    "图版 01 · 轴测、人视与总平面": "Board 01 · axonometric, eye level and site plan",
    "沿街视角 · 悬挑体量与骑楼": "Street view · cantilever and arcade",
    "一条玻璃廊道串起的日常": "Everyday life along a glass gallery",
    "玻璃顶的廊道贯穿二、三层，把阅读、健身、共享厨房与公寓门厅串在一起；球场上方是架空的平台，下方是向社区开放的阴凉场地。":
      "A glazed gallery runs through the second and third floors, linking reading, fitness, shared kitchen and housing lobby; the court has a deck above and a shaded public space below.",
    "玻璃廊道 · 共享空间": "Glass gallery · shared space",
    "剖轴测 · Fresh Air / Stale Air": "Cut axonometric · fresh / stale air",
    "结构、平面与剖面": "Structure, plans and sections",
    "结构以混凝土桁架跨越球场，形成 24 m 限高内的无柱大空间；图版包含各层平面、长剖面、北立面与桁架结构轴测。":
      "Concrete trusses span the court, creating a column-free volume within the 24 m limit; boards include floor plans, long section, north elevation and a truss axonometric.",
    "图版 02 · 廊道、地下一层与首层平面": "Board 02 · gallery, basement and ground plans",
    "图版 03 · 剖轴测、长剖面、北立面与各层平面": "Board 03 · cut axonometric, section, elevation and plans",
    "完整图版 PDF": "Full boards PDF",
    "3 页 / 27 MB": "3 pages / 27 MB",
    "设计任务书": "Design brief",
    "下一个 · 金陵何处望长江": "Next · Where Jinling Meets the Yangtze",

    /* ---------- 霍普杯 ---------- */
    "金陵何处望长江 · 王睿泽": "Where Jinling Meets the Yangtze Again · Wang Ruize",
    "竞赛 / 霍普杯 2026 · 何以栖居": "Competition / UIA-HYP Cup 2026 · How to Inhabit",
    "国际建筑设计竞赛": "International architecture competition",
    "题目": "Theme",
    "霍普杯 2026「何以栖居」": "UIA-HYP Cup 2026 “How to Inhabit”",
    "南京 · 金陵船厂": "Nanjing · Jinling Shipyard",
    "年份": "Year",
    "2026 · 三张图版": "2026 · three boards",
    "金陵船厂退出生产后，这片临江的工业场地与城市日常逐渐脱开。方案不抹掉工业遗存，而是把龙门吊与厂房骨架当作新的城市框架，让登临江岸重新成为一种日常仪式。":
      "After the shipyard closed, this riverside industrial site drifted away from everyday city life. Rather than erasing that heritage, the proposal treats gantry cranes and factory frames as a new urban framework, making a walk to the river an everyday ritual again.",
    "设计以「点、线、面」组织：散落的红色构件作为可停留的点；架空步道与江岸路径连成线；保留的厂房与新增的院落铺成面，串起观江、散步、工作与展览。":
      "The design is organized as points, lines and fields: scattered red elements become places to pause; elevated walks and riverside paths form lines; retained workshops and new courtyards form fields that link river viewing, walking, work and exhibition.",
    "图版 01 · 江岸总览、历史沿革与总平面": "Board 01 · waterfront overview, timeline and site plan",
    "Boards 图版": "Boards",
    "三张图版": "Three boards",
    "三张 4967 × 3508 px 的图版，完整记录了从场地判断、结构介入到平面与剖面的推演。":
      "Three boards at 4967 × 3508 px document the move from site reading and structural intervention to plans and sections.",
    "图版 02 · 点 / 线 / 面": "Board 02 · point / line / field",
    "图版 03 · 平面、剖面与效果": "Board 03 · plans, sections and views",
    "原始图版文件夹": "Original boards folder",

    /* ---------- 增感街道 ---------- */
    "增感街道 · 王睿泽 Reese": "Augmented Street · Wang Ruize (Reese)",
    "工作营 / DigitalFUTURES 2026": "Workshop / DigitalFUTURES 2026",
    "Augmented Street：基于具身交互的混合现实智慧空间": "Augmented Street: intelligent MR environments with embodied interaction",
    "工作营": "Workshop",
    "DigitalFUTURES 2026 · 第 16 届": "DigitalFUTURES 2026 · 16th edition",
    "混合现实 / 具身交互": "Mixed reality / Embodied interaction",
    "尺度": "Scales",
    "街道尺度 · 1:1 身体尺度": "Street scale · 1:1 body scale",
    "2 张完整图版": "2 full boards",
    "「增感街道」把街道当作可以被混合现实（MR）重新组织的空间。工作营先做街道尺度的数据采集、单元街区设计与智能体模拟，再把同一套逻辑压缩到 1:1 的身体尺度。":
      "“Augmented Street” treats the street as a space that mixed reality can reorganize. The workshop begins with street-scale data collection, block-unit design and agent simulation, then compresses the same logic to a 1:1 body scale.",
    "在具身实验里，参与者戴着 MR 头显，在实体模型上摆放「七巧板」式的街区块；行为数据被记录、分析，并回馈到街道尺度的模拟中——街道因此成为一条可以在身体与图纸之间往返的反馈回路。":
      "In the embodied experiment, participants wearing MR headsets place tangram-like street blocks on a physical model; behaviour is recorded, analysed and fed back into the street-scale simulation — the street becomes a feedback loop between body and drawing.",
    "街道尺度 · 数据采集": "Street scale · Data capture",
    "以 ZED 2i 深度相机与 6 轴位置追踪记录街道剖面：20 m 感知距离、街道界面、人流与停留。":
      "ZED 2i depth cameras and six-axis tracking record the street section: 20 m sensing range, street edges, footfall and dwelling.",
    "单元街区 · 智能体模拟": "Block units · Agent simulation",
    "把街道拆成可拼装的「七巧板」单元与 QR 码块，用智能体模拟检验不同组合下的人流、业态与活力。":
      "The street is broken into assembleable tangram units and QR-coded blocks; agent simulation tests footfall, programmes and vitality across combinations.",
    "1:1 具身 · 行为回看": "1:1 embodiment · Behaviour review",
    "桌面模型与 MR 场景叠加，参与者用身体完成一次街道设计；GNN 热力图回看行为，再反馈到街道尺度。":
      "Table model and MR scene overlap as participants design with their bodies; GNN heatmaps review behaviour and feed back to street scale.",
    "图版 01 · 街道尺度反馈回路、数据采集与共设计": "Board 01 · street-scale feedback loops, data capture and co-design",
    "Framework 研究框架": "Framework",
    "从街道到身体，再回到街道": "From street to body and back",
    "工作营把「街道」拆成三组可以互相校验的对象：可测量的街道剖面、可拼装的街区单元、可回放的身体行为。每一组都对应一套图版上的图示与实验。":
      "The workshop splits the street into three mutually verifiable objects: a measurable section, assembleable block units, and replayable bodily behaviour — each matched by diagrams and experiments on the boards.",
    "街道尺度": "Street scale",
    "：传感器布点、深度相机与街道剖面，建立可计算的街道基底": ": sensor layout, depth cameras and section build a computable base",
    "街区单元": "Block units",
    "：spatial matrix 与 QR 码块，把街道家具变成可拼装的语汇": ": spatial matrix and QR blocks turn street furniture into an assembleable vocabulary",
    "智能体模拟": "Agent simulation",
    "：用 agent simulation 预判人流、业态与停留的分布": ": agent simulation predicts footfall, programme and dwelling",
    "身体尺度": "Body scale",
    "：MR 具身实验记录动作与选择，用热力图回看设计结果": ": MR experiments record movement and choice, reviewed through heatmaps",
    "图版 02 · 传感器布点、街道剖面与数据分析": "Board 02 · sensors, street section and data analysis",
    "图版 01 · 原图": "Board 01 · original",
    "图版 02 · 原图": "Board 02 · original",
    "下一个 · 智绘视界": "Next · SkyLens-AI",

    /* ---------- 摄影 ---------- */
    "摄影 · 王睿泽 Reese": "Photography · Wang Ruize (Reese)",
    "建筑 · 金陵四季 · 晋祠古建": "Architecture · Four seasons of Jinling · Jinci",
    "发布": "Published",
    "500px「RayZ」 · 小红书": "500px “RayZ” · RED",
    "题材": "Subjects",
    "建筑 · 风景 · 城市": "Architecture · Landscape · City",
    "选登": "Selection",
    "13 幅": "13 works",
    "从明孝陵的水杉到东大的雪，从晋祠的宋构到西安的城墙。拍照是我记录城市与季节的方式，也是建筑设计之外另一条观察的路径。":
      "From the dawn redwoods of Ming Xiaoling to snow at Southeast University, from Song-dynasty timber frames at Jinci to the city walls of Xi’an. Photography is how I record cities and seasons — another way of looking beyond architectural design.",
    "这里选登 13 幅；完整的作品集发布在 500px（RayZ）与小红书（超级凶狠小霸王龙）。":
      "Thirteen works are shown here; the full portfolio is on 500px (RayZ) and RED (超级凶狠小霸王龙).",
    "彩雪": "Coloured Snow",
    "建筑摄影": "Architectural Photography",
    "构成": "Composition",
    "圣母殿": "Shengmu Hall",
    "晋祠": "Jinci Temple",
    "晋中": "Jinzhong",
    "雪景中的树木": "Trees in Snow",
    "方知是金陵": "So This Is Jinling",
    "方知是金陵 · 雪后": "So This Is Jinling · After Snow",
    "落叶季与猫": "Leaf-fall and a Cat",
    "色染潆秋波": "Autumn Dyed in Ripples",
    "憧憬": "Longing",
    "一瞬": "A Moment",
    "完整作品集": "Full portfolio",
    "小红书 · 超级凶狠小霸王龙": "RED · 超级凶狠小霸王龙",
    "← 返回作品": "← Back to works",
    "继续看经历": "Next: profile",

    /* ---------- 智绘视界 ---------- */
    "智绘视界 SkyLens-AI · 王睿泽": "SkyLens-AI · Wang Ruize",
    "研究 / 国家级大学生创新训练计划": "Research / National Undergraduate Innovation Program",
    "城市鸟瞰效果图实时渲染系统研究 · 2025—2026": "Real-time aerial rendering system for urban scenes · 2025—2026",
    "项目编号": "Project no.",
    "指导教师": "Supervisor",
    "章飙": "Zhang Biao",
    "负责人": "Team lead",
    "金润喜": "Jin Runxi",
    "本人分工": "My role",
    "数据集构建 · 网页交互系统": "Dataset construction · Web interface",
    "团队把 Stable Diffusion、LoRA 风格训练与 ControlNet 结构控制组合成一套城市鸟瞰效果图的生成流程，目标是把数小时的传统渲染压缩到可以即时反馈的时间尺度。":
      "The team combines Stable Diffusion, LoRA style training and ControlNet structural control into a pipeline for urban aerial renderings, compressing hours of conventional rendering into an immediately responsive timeframe.",
    "我负责两件事：为模型准备一套垂直、合规、可用的鸟瞰数据集；以及搭建设计师能直接上手的网页交互界面。":
      "I was responsible for two things: preparing a vertical, compliant and usable aerial dataset, and building a web interface that designers can pick up directly.",
    "高质量鸟瞰样本": "High-quality aerial samples",
    "单图生成平均用时": "Average time per image",
    "日景 / 夜景 / 黄昏 / 雪景": "Day / night / dusk / snow",
    "结构约束下的生成吻合度": "Structural consistency of results",
    "Dataset 数据集": "Dataset",
    "双尺度与三重验证": "Two scales, three validations",
    "样本按空间尺度分为覆盖 2–3 km² 的整体鸟瞰与 0.5–1 km² 的局部鸟瞰，按日景、夜景、黄昏、雪景 4:2:2:2 配比；入库前经过构图评估、信息熵检测与人工审核三重验证。标注分为基础语义 36 项、专业属性 52 项、美学特征 48 项。":
      "Samples are split by scale into whole-city aerials of 2–3 km² and local aerials of 0.5–1 km², in a 4:2:2:2 mix of day, night, dusk and snow. Before entry each passes three checks: composition assessment, entropy detection and manual review. Annotations cover 36 basic semantics, 52 professional attributes and 48 aesthetic features.",
    "双尺度数据架构": "Two-scale data architecture",
    "多层级语义标签": "Multi-level semantic tags",
    "Interface 网页系统": "Interface",
    "把参数藏在设计师的习惯里": "Parameters hidden in designers’ habits",
    "网页端基于 Gradio 开发，与本地部署的 Stable Diffusion 通过接口联动：上传草图或底图、选择场景风格、调整权重与提示词，即可得到生成结果并批量下载。":
      "The web client is built with Gradio and linked to a locally deployed Stable Diffusion via API: upload a sketch or base image, choose a scene style, adjust weights and prompts, then download results in batches.",
    "网页交互界面": "Web interface",
    "ControlNet 结构控制": "ControlNet structural control",
    "Outcome 成果": "Outcome",
    "论文、专利与结题": "Paper, patent and completion",
    "论文《基于 SkyLens-AI 技术的城市鸟瞰场景生成方法研究》，第一作者，与金润喜、汪圣欣、杨诗庭、周琼琦、章飙合作":
      "Paper “Research on Aerial Perspective Representation of Urban Scenes Generation Method Based on SkyLens-AI”, first author, with Jin Runxi, Wang Shengxin, Yang Shiting, Zhou Qiongqi and Zhang Biao",
    "发明专利申请公布 CN 121211900 A《一种城市设计三维模型图谱化的导则信息转译方法与系统》，发明人之一，2025.12.26 公布":
      "Invention application CN 121211900 A, “Method and system for translating guideline information from graph-based 3D urban design models”, co-inventor, published 26 Dec 2025",
    "国家级大学生创新创业训练计划结题，2026.04，成绩「通过」": "National innovation program completed, April 2026, result “Pass”",
    "2025 年东南大学第十九届大学生创新成果展示会「我最喜爱的作品」": "“Favourite Work”, 19th Southeast University Student Innovation Exhibition, 2025",
    "证 01": "Cert. 01",
    "结题证书": "Completion certificate",
    "证 02": "Cert. 02",
    "荣誉证书": "Honorary certificate",
    "证 03": "Cert. 03",
    "专利公布": "Patent publication",
    "Paper 论文": "Paper",
    "六页论文": "Six-page paper",
    "论文完整记录了技术路线、数据集构建、LoRA 训练与 ControlNet 介入方式，可在下方链接中阅读原文。":
      "The paper documents the technical route, dataset construction, LoRA training and ControlNet intervention; the original is linked below.",
    "论文首页": "First page",
    "第 2 页": "Page 2",
    "第 3 页": "Page 3",
    "第 4 页": "Page 4",
    "第 5 页": "Page 5",
    "第 6 页": "Page 6",
    "论文 PDF": "Paper PDF",
    "6 页": "6 pages",
    "结题报告": "Final report",
    "59 页 / 43 MB": "59 pages / 43 MB",
    "成果汇报": "Presentation",
    "36 页": "36 pages",
    "成果视频": "Outcome video",
    "去看看摄影": "See photography",

    /* ---------- 经历 ---------- */
    "经历与荣誉": "Profile & Honours",
    "东南大学建筑学院 · 建筑学 · 2023级本科生 · Reese": "School of Architecture, Southeast University · B.Arch · Class of 2023 · Reese",
    "2023 年由其他专业转入东南大学建筑学院，此后围绕建筑设计展开学习，并把一部分时间放在摄影与建筑智能化的交叉上。":
      "Transferred into the School of Architecture at Southeast University in 2023, since when my studies have centred on architectural design, with part of my time at the intersection of photography and architectural intelligence.",
    "下面只列出有材料可查或有明确记录的节点；课程作业、竞赛图版与研究成果都可在作品页中查看原件。":
      "Only nodes with verifiable material or clear records are listed; studio work, competition boards and research outcomes can be viewed on the works pages.",
    "转专业进入": "Transferred to",
    "，攻读建筑学": ", studying architecture",
    "Honors 荣誉": "Honours",
    "学业与设计": "Academic and design",
    "钟训正设计奖": "Zhong Xunzheng Design Award",
    "设计奖": "Design award",
    "校级三好学生": "University Merit Student",
    "校级": "University",
    "2026 寒假": "Winter 2026",
    "社会实践 · 优秀团队三等奖": "Social practice · Third prize, outstanding team",
    "社会实践": "Social practice",
    "国家奖学金": "National Scholarship",
    "国家级": "National",
    "按学年倒序排列。": "Listed by academic year, most recent first.",
    "Projects 项目与成果": "Projects",
    "课程、竞赛与研究": "Studios, competitions and research",
    "· 建筑设计课程，与陈艺钊合作": " · Architecture studio, with Chen Yizhao",
    "课程设计": "Studio project",
    "结题，成绩「通过」": "completed, result “Pass”",
    "项目 202510286001": "Project 202510286001",
    "· 成贤街社区青年众创综合体设计": " · Community youth hub on Chengxian Street",
    "· 霍普杯 2026 参赛图版": " · UIA-HYP Cup 2026 boards",
    "建筑设计竞赛": "Architecture competition",
    "· DF2026 工作营成果": " · DF2026 workshop outcome",
    "设计工作营": "Design workshop",
    "「我最喜爱的作品」": "“Favourite Work”",
    "· 东南大学第十九届大学生创新成果展示会": " · 19th Southeast University Student Innovation Exhibition",
    "东南大学教务处": "Academic Affairs Office, SEU",
    "发明专利申请公布": "Invention application published",
    "CN 121211900 A，发明人之一": "CN 121211900 A, co-inventor",
    "申请日 2025.08.08": "Filed 8 Aug 2025",
    "Contact 联系": "Contact",
    "欢迎来信": "Say hello",
    "对某个项目感兴趣，或希望看到更完整的图纸与过程，可以通过下面的方式联系。":
      "If a project interests you, or you would like to see fuller drawings and process, please get in touch.",
    "超级凶狠小霸王龙 · 406471515": "超级凶狠小霸王龙 · 406471515"    ,
    /* archive captions */
    "俯瞰场地片区": "Site district from above",
    "南侧俯瞰场地": "Site from the south",
    "场地北侧（后门）": "North side (back gate)",
    "场地正大门（南门）": "Main gate (south)",
    "场地主楼正面": "Main building facade",
    "主楼东侧外立面": "East elevation",
    "主入口挑高前厅": "Double-height entrance hall",
    "大厅中段主体空间": "Central hall, middle bay",
    "大厅北段（看向东侧）": "North bay, looking east",
    "大厅主体空间": "Main hall",
    "大厅主体空间全景": "Main hall panorama",
    "主入口挑高前厅二层": "Entrance hall, upper level",
    "前院与主楼": "Forecourt and main building",
    "院内大树": "The courtyard tree",
    "改造中的大厅": "Hall under renovation",
    "屋架与木地板": "Roof structure and timber floor",
    "屋面俯瞰": "Roof view",
    "屋顶远眺": "View from the roof",
    "场地航拍": "Aerial of the site",
    "下一个 · 增感街道": "Next · Augmented Street",
    "国家级大学生创新创业训练计划": "National Undergraduate Innovation and Entrepreneurship Training Program",
    "RayZ · 摄影主页": "RayZ · 500px profile",
    "外": "Ext",
    "内": "Int"
  };

  var TITLES = {
    "index.html": "Wang Ruize (Reese) · Portfolio 2024—2026",
    "works.html": "Works · Wang Ruize",
    "quanzhou.html": "Quanzhou Librairie Avant-Garde · Wang Ruize",
    "jinxianghe.html": "Suspended Terraces · Wang Ruize",
    "hope.html": "Where Jinling Meets the Yangtze Again · Wang Ruize",
    "df.html": "Augmented Street · Wang Ruize (Reese)",
    "photography.html": "Photography · Wang Ruize (Reese)",
    "srtp.html": "SkyLens-AI · Wang Ruize",
    "about.html": "Profile · Wang Ruize (Reese)"
  };

  var textRecs = [];
  var attrRecs = [];
  var lang = "zh";

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = walker.nextNode())) {
      if (!/[\u4e00-\u9fa5]/.test(n.nodeValue)) continue;
      var t = n.nodeValue;
      if (!norm(t)) continue;
      if (textRecs.some(function (r) { return r.node === n; })) continue;
      textRecs.push({ node: n, zh: t });
    }
    document.querySelectorAll("[data-cap]").forEach(function (el) {
      var v = el.getAttribute("data-cap");
      if (v && /[\u4e00-\u9fa5]/.test(v)) attrRecs.push({ el: el, name: "data-cap", zh: v });
    });
    document.querySelectorAll("[aria-label]").forEach(function (el) {
      var v = el.getAttribute("aria-label");
      if (v && /[\u4e00-\u9fa5]/.test(v)) attrRecs.push({ el: el, name: "aria-label", zh: v });
    });
  }

  function tr(s) {
    var k = norm(s);
    if (DICT[k]) return DICT[k];
    var m = k.match(/^图 (\d+)$/);
    if (m) return "Fig. " + m[1];
    m = k.match(/^照 (\d+)$/);
    if (m) return "Photo " + m[1];
    m = k.match(/^证 (\d+)$/);
    if (m) return "Cert. " + m[1];
    m = k.match(/^论文 第 (\d+) 页$/);
    if (m) return "Paper p. " + m[1];
    m = k.match(/^第 (\d+) 页$/);
    if (m) return "Page " + m[1];
    return null;
  }

  function syncButtons() {
    document.querySelectorAll(".lang").forEach(function (b) {
      b.textContent = lang === "en" ? "中" : "EN";
      b.setAttribute("aria-label", lang === "en" ? "切换到中文" : "Switch to English");
    });
  }

  function apply(next) {
    lang = next;
    textRecs.forEach(function (r) {
      var t = r.zh;
      if (next === "en") {
        var en = tr(t);
        if (!en) return;
        var lead = t.match(/^\s*/)[0], tail = t.match(/\s*$/)[0];
        r.node.nodeValue = lead + en + tail;
      } else {
        r.node.nodeValue = t;
      }
    });
    attrRecs.forEach(function (a) {
      if (next === "en") {
        var en = tr(a.zh);
        if (en) a.el.setAttribute(a.name, en);
      } else {
        a.el.setAttribute(a.name, a.zh);
      }
    });
    document.documentElement.lang = next === "en" ? "en" : "zh-CN";
    syncButtons();
    try { localStorage.setItem("lang", next); } catch (e) {}
    try { window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: next } })); } catch (e) {}
  }

  function init() {
    collect();
    var saved = "zh";
    try { saved = localStorage.getItem("lang") || "zh"; } catch (e) {}
    apply(saved === "en" ? "en" : "zh");
    document.querySelectorAll(".lang").forEach(function (b) {
      b.addEventListener("click", function () { apply(lang === "en" ? "zh" : "en"); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
