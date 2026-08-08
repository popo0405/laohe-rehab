// 8/6 拓展：运动损伤康复数据库（详细版）
const SPORTS_INJURY_DATA = [
  {id: 1, name: "肩峰撞击综合征", nameEn: "Shoulder Impingement Syndrome", category: "肩关节",
   description: "肩峰下间隙内结构（冈上肌腱、肱二头肌长头腱、肩峰下滑囊）受压引起的疼痛和活动受限。常见于投掷、游泳、健身等过头运动。肩峰形态异常（III型钩状肩峰）、肩胛骨动力异常、肩袖肌力不平衡是主要诱因。",
   causes: ["肩峰形态异常(III型钩状肩峰)", "肩胛骨动力异常", "肩袖肌力不平衡", "过度过头运动", "肩锁关节骨赘"],
   symptoms: ["肩前外侧疼痛(夜间加重)", "外展60-120°疼痛弧", "肩上举无力", "撞击试验阳性(Neer/Hawkins)", "肩后伸受限"],
   riskFactors: ["40岁以上", "反复过头运动", "游泳/投掷/油漆工", "糖尿病"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "消炎止痛+避免加重", treatments: ["冰敷", "NSAIDs", "避免头上动作", "姿势纠正", "休息"], criteria: "疼痛VAS<3/10"},
     {phase: 2, weeks: "2-6周", focus: "活动度+肩胛稳定", treatments: ["牵拉前屈/外旋", "肩胛回缩", "肩胛控制", "姿势训练"], criteria: "全范围被动活动度"},
     {phase: 3, weeks: "6-12周", focus: "肩袖强化+动力链", treatments: ["肩袖渐进抗阻", "闭链稳定", "运动模式纠正", "肩胛肌肉耐力"], criteria: "肌力>健侧80%"},
     {phase: 4, weeks: "12周+", focus: "回归运动", treatments: ["专项渐进", "力量维持", "功能评估"]}
   ],
   prevention: ["运动前充分热身", "加强肩胛稳定肌", "避免长时间过头", "保持肩袖柔韧性", "定期评估投掷生物力学"]
  },
  {id: 2, name: "肩胛骨动力异常(SICK肩胛)", nameEn: "Scapular Dyskinesis", category: "肩关节",
   description: "肩胛骨位置和运动模式异常，常继发于其他肩部问题或姿势不良。SICK=Scapular malposition, Inferior medial border prominence, Coracoid pain, dysKinesis。",
   causes: ["胸长神经损伤", "颈长肌紧张", "菱形肌/中下斜方肌弱", "胸小肌紧张", "姿势不良"],
   symptoms: ["肩带周围酸痛", "翼状肩胛", "上举时肩胛早动", "肩胛下角突出"],
   riskFactors: ["长时间电脑工作", "圆肩驼背", "颈神经牵拉伤"],
   phases: [
     {phase: 1, weeks: "0-4周", focus: "姿势纠正+激活", treatments: ["胸小肌牵拉", "前锯肌激活", "中下斜方肌强化", "姿势教育"]},
     {phase: 2, weeks: "4-8周", focus: "运动控制", treatments: ["肩胛控制训练", "闭链稳定", "肩肱节律再训练"]}
   ],
   prevention: ["保持正确坐姿", "定期肩胛活动", "避免单侧长期负荷"]
  },
  {id: 3, name: "SLAP损伤", nameEn: "SLAP Lesion", category: "肩关节",
   description: "上盂唇前后部损伤(SLAP=Superior Labrum Anterior to Posterior)，多见于投掷运动员和重体力劳动者。常合并Bankart损伤或肩袖损伤。",
   causes: ["过头投掷动作", "跌倒时手撑地", "突然暴力牵拉", "重复过头运动"],
   symptoms: ["肩深部疼痛", "外展外旋时弹响/卡住", "力量下降", "投掷表现下降"],
   riskFactors: ["投掷运动员(棒球/网球)", "重体力劳动"],
   phases: [
     {phase: 1, weeks: "0-4周", focus: "保护+消炎", precautions: "避免投掷动作", treatments: ["冰敷", "姿势纠正", "肩胛稳定"]},
     {phase: 2, weeks: "4-8周", focus: "活动度恢复", treatments: ["被动→主动活动", "肩胛稳定", "后关节囊牵拉"]},
     {phase: 3, weeks: "8-12周", focus: "肩袖强化", treatments: ["渐进抗阻", "闭链训练", "肩肱节律"]},
     {phase: 4, weeks: "12周+", focus: "回归投掷", treatments: ["间歇投掷程序", "爆发力", "专项训练"]}
   ],
   prevention: ["正确投掷生物力学", "控制训练量", "加强肩袖"]
  },
  {id: 4, name: "肩袖肌腱病", nameEn: "Rotator Cuff Tendinopathy", category: "肩关节",
   description: "肩袖肌腱（冈上/冈下/肩胛下/小圆肌）的慢性退变或过度使用损伤。比肩袖肌腱炎更准确描述（少有急性炎症）。",
   causes: ["反复过头运动", "年龄相关退变", "血供差", "肩峰下撞击"],
   symptoms: ["肩外侧疼痛", "夜间痛", "特定动作痛", "外展外旋无力"],
   riskFactors: ["40岁以上", "过头运动员", "糖尿病", "吸烟"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "相对休息+消炎", treatments: ["调整活动", "冰敷", "负荷管理"]},
     {phase: 2, weeks: "2-6周", focus: "离心训练", treatments: ["冈上肌离心", "肩胛稳定", "姿势纠正"]},
     {phase: 3, weeks: "6-12周", focus: "强化+功能", treatments: ["渐进抗阻", "闭链", "运动模式"]}
   ],
   prevention: ["避免突然增加运动量", "加强肩胛稳定", "定期离心训练"]
  },
  {id: 5, name: "髌腱炎(跳跃者膝)", nameEn: "Patellar Tendinopathy", category: "膝关节",
   description: "髌腱慢性退变损伤，常见于跳跃项目运动员(篮球/排球/跳远)。也叫'跳跃者膝'，是过度使用导致的髌腱变性而非急性炎症。",
   causes: ["反复跳跃落地", "髌腱负荷过大", "股四头肌/腘绳肌紧张", "下肢力线异常", "突然增加训练量"],
   symptoms: ["髌骨下极疼痛", "下蹲/跳跃时加重", "晨起僵硬", "运动后疼痛"],
   riskFactors: ["篮球/排球/跳远", "硬地面训练", "体重过大", "Q角增大"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "负荷管理+消炎", treatments: ["相对休息", "冰敷", "调整训练量", "NSAIDs"]},
     {phase: 2, weeks: "2-6周", focus: "离心训练", treatments: ["单腿下蹲离心", "台阶离心", "股四头肌牵拉"]},
     {phase: 3, weeks: "6-12周", focus: "力量+爆发力", treatments: ["渐进抗阻", "跳跃渐进", "运动专项"]}
   ],
   prevention: ["控制训练量", "充分热身", "加强股四头肌离心", "使用护具"]
  },
  {id: 6, name: "髌股关节疼痛综合征", nameEn: "Patellofemoral Pain Syndrome", category: "膝关节",
   description: "髌股关节周围疼痛，多见于青少年和跑步爱好者，俗称'跑步膝'。是临床最常见的膝痛原因之一。",
   causes: ["髌骨轨迹异常", "Q角增大", "股内侧肌(VMO)弱", "足过度旋前", "髂胫束紧张"],
   symptoms: ["膝前痛(下蹲/上下楼加重)", "长时间屈膝痛", "磨响", "髌骨下压痛"],
   riskFactors: ["跑步爱好者", "青少年", "女性(解剖因素)", "突然增加运动量"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "消炎+避免加重", treatments: ["冰敷", "避免下蹲/跪", "NSAIDs"]},
     {phase: 2, weeks: "2-6周", focus: "VMO强化+髌骨松动", treatments: ["股内侧肌强化", "髌骨松动", "贴扎", "足弓垫"]},
     {phase: 3, weeks: "6-12周", focus: "力量+步态", treatments: ["髋膝力量", "步态训练", "运动模式纠正"]}
   ],
   prevention: ["加强股内侧肌", "纠正足过度旋前", "避免突然增加跑量"]
  },
  {id: 7, name: "髂胫束综合征", nameEn: "Iliotibial Band Syndrome", category: "膝关节",
   description: "髂胫束与股骨外髁摩擦引起的膝外侧疼痛，常见于跑步和自行车运动员。占跑步损伤的5-14%。",
   causes: ["跑步量突增", "下坡跑", "髋外展肌弱", "足过度旋前", "髂胫束紧张"],
   symptoms: ["膝外侧刺痛", "跑步时加重", "下楼梯痛", "股骨外髁压痛"],
   riskFactors: ["长跑运动员", "自行车手", "下坡跑"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "消炎+休息", treatments: ["冰敷", "休息", "调整训练", "NSAIDs"]},
     {phase: 2, weeks: "2-6周", focus: "髋外展肌强化+牵拉", treatments: ["侧躺抬腿", "髋外展抗阻", "髂胫束牵拉", "泡沫轴放松"]},
     {phase: 3, weeks: "6-12周", focus: "力量+跑步回归", treatments: ["下肢整体力量", "跑步渐进", "步态纠正"]}
   ],
   prevention: ["控制跑量", "下坡跑前热身", "加强髋外展肌"]
  },
  {id: 8, name: "踝关节扭伤", nameEn: "Lateral Ankle Sprain", category: "踝关节",
   description: "踝关节外侧韧带（距腓前/跟腓韧带）急性损伤，最常见的运动损伤。占所有运动损伤的15-20%。",
   causes: ["足内翻扭伤", "落地不稳", "不平地面", "跳跃后失衡", "他人踩脚"],
   symptoms: ["踝外侧肿痛", "淤血", "负重痛", "前抽屉试验阳性(ATFL损伤)", "距骨倾斜试验阳性(CFL损伤)"],
   riskFactors: ["篮球/足球/排球", "既往扭伤史", "高弓足", "本体感觉差"],
   phases: [
     {phase: 1, weeks: "0-1周", focus: "POLICE原则", treatments: ["保护", "适当负荷", "冰敷", "加压", "抬高", "NSAIDs"]},
     {phase: 2, weeks: "1-3周", focus: "活动度+负重", treatments: ["渐进负重", "踝主动活动", "腓骨肌激活", "关节松动"]},
     {phase: 3, weeks: "3-6周", focus: "力量+平衡", treatments: ["弹力带抗阻", "平衡训练", "本体感觉", "功能性训练"]},
     {phase: 4, weeks: "6周+", focus: "运动回归", treatments: ["跑步渐进", "跳跃训练", "运动专项", "预防复发"]}
   ],
   prevention: ["运动前热身", "加强本体感觉", "护踝(既往损伤)", "合适鞋子", "避免不平地面"]
  },
  {id: 9, name: "跟腱炎(跟腱病)", nameEn: "Achilles Tendinopathy", category: "踝关节",
   description: "跟腱慢性退变损伤，常见于跑步和跳跃运动员。中间部分跟腱病占55%，止点性跟腱病占25%。",
   causes: ["跑步量突增", "小腿肌肉紧张", "跟腱血供差", "足过度旋前", "训练强度突然增加"],
   symptoms: ["晨起跟腱僵硬", "运动时跟腱痛", "活动后加重", "跟腱增厚", "上楼梯痛"],
   riskFactors: ["跑者", "中年人", "高BMI", "高血压药物(喹诺酮)"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "负荷管理+消炎", treatments: ["冰敷", "调整训练", "NSAIDs", "避免跑步"]},
     {phase: 2, weeks: "2-6周", focus: "离心训练", treatments: ["跟腱离心(台阶)", "小腿三头肌牵拉", "足弓垫"]},
     {phase: 3, weeks: "6-12周", focus: "力量+爆发力", treatments: ["渐进抗阻", "重负荷慢速训练", "跳跃训练", "跑步回归"]}
   ],
   prevention: ["控制跑量", "拉伸小腿", "选择合适跑鞋", "避免突然增加强度"]
  },
  {id: 10, name: "足底筋膜炎", nameEn: "Plantar Fasciitis", category: "足部",
   description: "足底筋膜慢性退变，是常见的足跟痛原因。占足部疾病就诊的15%。炎症其实是误称，实际是退变。",
   causes: ["跑步量突增", "长时间站立", "足弓异常(高弓/扁平)", "小腿紧张", "体重过大", "不合适的鞋子"],
   symptoms: ["晨起第一步足跟痛", "长时间站立后加重", "足底压痛", "足底内侧结节压痛"],
   riskFactors: ["跑步爱好者", "教师/护士等久立", "BMI>30", "40-60岁"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "消炎+休息", treatments: ["冰敷", "休息", "足弓垫", "NSAIDs"]},
     {phase: 2, weeks: "2-6周", focus: "牵拉+足弓强化", treatments: ["足底筋膜牵拉", "小腿牵拉", "短足训练", "足底筋膜松解"]},
     {phase: 3, weeks: "6-12周", focus: "力量+回归", treatments: ["足弓强化", "小腿力量", "跑步回归渐进", "赤足训练"]}
   ],
   prevention: ["选择合适鞋子", "控制体重", "避免长时间站立", "足底筋膜牵拉", "跑步前热身"]
  },
  {id: 11, name: "网球肘(肱骨外上髁炎)", nameEn: "Lateral Epicondylitis", category: "肘关节",
   description: "肘外侧伸肌腱止点退变损伤，俗称'网球肘'。但其实只有5-10%发生在真网球运动员。炎症其实是误称，实际是桡侧伸腕肌腱变性。",
   causes: ["反复伸腕/前臂旋后", "网球/羽毛球反手击球", "握力过大", "反复键盘操作", "反复使用螺丝刀"],
   symptoms: ["肘外侧疼痛", "握拳/拧毛巾痛", "腕背伸痛", "Cozen试验阳性", "Mills征阳性"],
   riskFactors: ["网球/壁球/壁球手", "40-60岁", "反复腕部活动", "吸烟"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "负荷管理+消炎", treatments: ["休息", "冰敷", "护肘", "NSAIDs"]},
     {phase: 2, weeks: "2-6周", focus: "离心训练", treatments: ["伸肌离心(腕背伸)", "前臂牵拉", "腕伸肌松解"]},
     {phase: 3, weeks: "6-12周", focus: "力量+握力", treatments: ["渐进抗阻", "握力训练", "运动模式纠正", "前臂旋前/旋后训练"]}
   ],
   prevention: ["正确击球技术", "前臂牵拉", "加强伸肌离心", "避免突然增加运动量"]
  },
  {id: 12, name: "高尔夫球肘(肱骨内上髁炎)", nameEn: "Medial Epicondylitis", category: "肘关节",
   description: "肘内侧屈肌腱止点退变损伤，常见于高尔夫/投掷运动员。比网球肘少见。",
   causes: ["反复屈腕/前臂旋前", "高尔夫挥杆", "投掷动作", "反复腕部活动"],
   symptoms: ["肘内侧疼痛", "握拳痛", "腕屈曲痛", "前臂旋前痛"],
   riskFactors: ["高尔夫/投掷运动员", "40岁以上"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "消炎+休息", treatments: ["休息", "冰敷", "NSAIDs", "护肘"]},
     {phase: 2, weeks: "2-6周", focus: "离心训练", treatments: ["屈肌离心", "前臂牵拉", "屈肌松解"]},
     {phase: 3, weeks: "6-12周", focus: "力量+回归", treatments: ["渐进抗阻", "握力训练", "运动模式"]}
   ],
   prevention: ["正确挥杆技术", "前臂牵拉", "避免突然增加训练"]
  },
  {id: 13, name: "腰椎间盘突出", nameEn: "Lumbar Disc Herniation", category: "脊柱",
   description: "椎间盘纤维环破裂，髓核突出压迫神经根引起的腰腿痛。L4-5和L5-S1最常见。85%患者保守治疗有效。",
   causes: ["长期久坐", "弯腰搬重物", "突然扭转", "震动暴露(司机)", "吸烟"],
   symptoms: ["腰痛+下肢放射痛", "麻木", "咳嗽加重", "直腿抬高试验阳性", "肌力下降", "马尾综合征(急诊)"],
   riskFactors: ["30-50岁", "司机/体力劳动者", "长期久坐", "吸烟", "肥胖"],
   redFlags: ["马尾综合征(大小便障碍/鞍区麻木)", "进行性肌力下降", "夜间痛醒", "体重下降+发热", "50岁以上首次发作"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "消炎止痛+相对休息", treatments: ["NSAIDs", "短期卧床(<2天)", "姿势教育", "避免弯腰"]},
     {phase: 2, weeks: "2-6周", focus: "麦肯基+Mckenzie", treatments: ["方向性训练", "核心稳定", "神经松动", "逐步活动"]},
     {phase: 3, weeks: "6-12周", focus: "核心+脊柱稳定", treatments: ["死虫", "鸟狗", "渐进抗阻", "运动模式纠正"]},
     {phase: 4, weeks: "12周+", focus: "回归运动", treatments: ["运动专项", "预防复发", "终身核心训练"]}
   ],
   prevention: ["正确搬重物姿势", "避免久坐", "核心稳定训练", "控制体重", "戒烟"]
  },
  {id: 14, name: "颈部挥鞭样损伤", nameEn: "Whiplash Injury", category: "脊柱",
   description: "颈部快速加速-减速引起的软组织损伤，多见于车祸（WAD=Whiplash Associated Disorders）。50%患者6个月内恢复，少数遗留慢性疼痛。",
   causes: ["车祸(90%)", "运动撞击", "跌倒", "高台跳水"],
   symptoms: ["颈痛僵硬", "头痛(颈源性)", "肩痛", "麻木", "头晕", "注意力下降"],
   riskFactors: ["车祸", "女性(解剖因素)", "既往颈痛", "座椅头枕位置低"],
   phases: [
     {phase: 1, weeks: "0-2周", focus: "消炎+早期活动", treatments: ["冰敷", "NSAIDs", "早期轻柔活动", "避免长期颈托"]},
     {phase: 2, weeks: "2-6周", focus: "活动度恢复", treatments: ["主动活动", "等长训练", "姿势纠正", "睡眠姿势教育"]},
     {phase: 3, weeks: "6-12周", focus: "力量+本体感觉", treatments: ["深颈屈肌", "肩胛稳定", "本体感觉", "有氧训练"]}
   ],
   prevention: ["车座头枕调到合适高度(头枕中心与耳上缘齐平)", "系安全带", "避免撞击性运动"]
  }
];
