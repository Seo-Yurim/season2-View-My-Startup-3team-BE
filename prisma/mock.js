export const CATEGORIES = [
  { id: 1, category: '에듀테크' },
  { id: 2, category: '전자상거래' },
  { id: 3, category: '솔루션' },
];

export const STARTUPS = [
  {
    id: 1,
    name: '코드잇',
    categoryId: 1, 
    actualInvest: BigInt(14000000000),
    simInvest: BigInt(6225300000),
    revenue: BigInt(1200000000),
    employees: 500,
    description: '코드잇은 \'온라인 코딩 교육 서비스\'를 운영하는 EdTech 스타트업입니다.\n\n코딩 교육과 데이터 사이언스 교육에 대한 수요는 급격히 늘어나고 있지만, 아직까지 좋은 교육 서비스를 찾기란 쉽지 않습니다. 이를 해결하고자 코드잇은 모든 강의를 자체 제작하여 퀄리티 높은 콘텐츠를 제공하고, 동시에 코딩 교육에 최적화된 플랫폼을 개발하고 있습니다.\n\n모든 강의를 마음껏 들을 수 있는 "코드잇 무제한 멤버십"을 제공하고 있으며, 지난 5년 동안 21만 명의 수강생과 평균만족도 4.9점이라는 국내 교육 업계에서 보기 드문 성과를 달성하였습니다. 또한 콘텐츠와 기술력을 인정받아 2021년 10월 Series B 투자를 받아 누적 140억 원 투자를 받았고, 현재 40여 명의 팀원이 같은 목표를 향해 나아가고 있습니다.\n\n"배움의 기쁨을 세상 모두에게."\n\n이것이 코드잇의 비전입니다. 현재는 최고의 코딩 교육 서비스를 국내에서 제공하고 있지만, 이보다 더 큰 그림을 그리고 있습니다. 2021년 상반기부터 영어권 시장 진출을 시작했고, 코딩과 인접한 분야부터 스펙트럼을 넓혀 나갈 계획입니다.',
    selectedCount: 1,
    comparedCount: 0,
    image: '/images/logo_codeit.png',
    createdAt: '2024-09-01T09:00:00Z',
    updatedAt: '2024-09-01T09:00:00Z',
  },
  {
    id: 2,
    name: '매스프레소',
    categoryId: 1, 
    actualInvest: BigInt(100000000000),
    simInvest: BigInt(3000000000),
    revenue: BigInt(1800000000),
    employees: 100,
    description: '매스프레소는 \'AI 기반 교육 플랫폼 서비스\'를 운영하는 EdTech 스타트업입니다.\n\n학생들이 어려움을 겪는 문제를 손쉽게 해결할 수 있도록, 매스프레소는 인공지능 기술을 활용하여 수학 문제 해결 및 학습 지원 서비스를 제공합니다. 대표 서비스인 "콴다"는 문제를 찍어 올리면 해답을 제공하는 기능으로 많은 학생들에게 큰 인기를 끌고 있으며, 5천만 이상의 사용자를 보유하고 있습니다.\n\n교육의 격차를 줄이고 누구나 쉽게 학습할 수 있는 환경을 만들기 위해, 매스프레소는 AI 기술을 지속적으로 고도화하며, 다양한 교육 콘텐츠를 추가하여 플랫폼을 확장해 나가고 있습니다. 이러한 성과를 인정받아 Series C 투자 유치를 통해 누적 1천억 원 이상의 자금을 확보하였으며, 전 세계 교육 시장으로의 진출을 계획하고 있습니다.\n\n"교육의 기회를 모두에게."\n\n이것이 매스프레소의 비전입니다. 매스프레소는 학생들이 보다 쉽게 학습하고 성공할 수 있도록 돕는 혁신적인 교육 플랫폼을 구축하고 있으며, 향후 글로벌 교육 시장에서도 그 영향력을 확장해 나갈 계획입니다.',
    selectedCount: 1,
    comparedCount: 0,
    image: '/images/logo_mathpresso.png',
    createdAt: '2024-09-02T09:30:00Z',
    updatedAt: '2024-09-02T09:30:00Z',
  },
  {
    id: 3,
    name: '엘리스',
    categoryId: 1, 
    actualInvest: BigInt(1000000000),
    simInvest: BigInt(500000000),
    revenue: BigInt(1400000000),
    employees: 700,
    description: '엘리스는 \'편리한 올인원 AI 교육 플랫폼\'을 운영하는 EdTech 스타트업입니다.\n\n엘리스는 학습자에게 최적화된 AI 기반 교육 솔루션을 제공하여, 학습 과정에서의 효율성을 극대화하고 있습니다. 인터랙티브 실습 환경을 통해 학습자들은 이론과 실습을 동시에 진행할 수 있으며, 스마트한 AI 학습 관리 시스템은 학습 성과를 분석하고 개인 맞춤형 학습 경로를 제시합니다.\n\n엘리스는 다양한 분야의 코딩 교육 및 AI 관련 강의를 제공하며, 교육의 질을 높이기 위해 지속적으로 콘텐츠를 개발하고 있습니다. 이러한 차별화된 AI 기능을 바탕으로 10만 명 이상의 수강생이 엘리스를 통해 학습을 진행하고 있으며, 국내 교육 시장에서 두각을 나타내고 있습니다.\n\n"모두가 쉽게 학습할 수 있는 세상."\n\n이것이 엘리스의 비전입니다. 엘리스는 현재의 AI 교육 플랫폼을 발전시키고, 글로벌 시장에서의 입지를 넓히기 위해 꾸준히 성장하고 있으며, 더 많은 학습자들에게 차별화된 학습 경험을 제공하는 것을 목표로 하고 있습니다.',
    selectedCount: 1,
    comparedCount: 0,
    image: '/images/logo_elice.png',
    createdAt: '2024-09-03T10:00:00Z',
    updatedAt: '2024-09-03T10:00:00Z',
  },
  {
    id: 4,
    name: '뤼이드',
    categoryId: 1, 
    actualInvest: BigInt(5500000000),
    simInvest: BigInt(800000000),
    revenue: BigInt(1900000000),
    employees: 800,
    description: '뤼이드는 AI를 활용한 학습 개인화와 시험 준비 솔루션을 제공합니다.',
    selectedCount: 1,
    comparedCount: 0,
    image: '/images/logo_riiid.png',
    createdAt: '2024-09-04T10:30:00Z',
    updatedAt: '2024-09-04T10:30:00Z',
  },
  {
    id: 5,
    name: '패스트캠퍼스',
    categoryId: 1, 
    actualInvest: BigInt(4500000000),
    simInvest: BigInt(1000000000),
    revenue: BigInt(1600000000),
    employees: 600,
    description: '프로그래밍, 영상편집, UX/UI, 마케팅, 데이터 분석, 엑셀강의, The RED, 국비지원 교육과정을 제공하는 플랫폼입니다.',
    selectedCount: 1,
    comparedCount: 0,
    image: '/images/logo_fastcampus.png',
    createdAt: '2024-09-05T11:00:00Z',
    updatedAt: '2024-09-05T11:00:00Z',
  },
  {
    id: 6,
    name: '럭스로보',
    categoryId: 1,
    actualInvest: BigInt(2800000000),
    simInvest: BigInt(1000000000),
    revenue: BigInt(1100000000),
    employees: 400,
    description: '럭스로보는 로봇 기술을 기반으로 교육용 로봇, 사물인터넷(IoT) 플랫폼을 개발하는 스타트업으로, 모듈형 코딩 키트와 로봇을 통해 코딩 교육을 제공합니다.',
    selectedCount: 0,
    comparedCount: 1,
    image: '/images/logo_luxrobo.png',
    createdAt: '2024-09-06T11:30:00Z',
    updatedAt: '2024-09-06T11:30:00Z',
  },
  {
    id: 7,
    name: '스파르타코딩클럽',
    categoryId: 1, 
    actualInvest: BigInt(3200000000),
    simInvest: BigInt(3000000000),
    revenue: 300000000,
    employees: 800,
    description: '스파르타코딩클럽은 초보자부터 실무 개발자까지 누구나 쉽게 코딩을 배울 수 있도록 돕는 대한민국 대표 코딩 교육 플랫폼입니다. 실무 중심의 교육과 실전 프로젝트 기반 학습을 통해 단기간에 코딩 실력을 쌓을 수 있도록 지원합니다.',
    selectedCount: 0,
    comparedCount: 1,
    image: '/images/logo_sparta.png',
    createdAt: '2024-09-07T12:00:00Z',
    updatedAt: '2024-09-07T12:00:00Z',
  },
  {
    id: 8,
    name: '엔코드',
    categoryId: 3, 
    actualInvest: BigInt(3200000000),
    simInvest: BigInt(1500000000),
    revenue: 200000000,
    employees: 800,
    description: '엔코드는 국내 최초 럭셔리 프리오더 플랫폼 디코드를 운영하는 회사로, 지속 가능한 소비 문화를 구축하는 것을 목표로 하고 있습니다.	',
    selectedCount: 0,
    comparedCount: 1,
    image: '/images/logo_ncode.png',
    createdAt: '2024-09-08T12:00:00Z',
    updatedAt: '2024-09-08T12:00:00Z',
  },
  {
    id: 9,
    name: '직방',
    categoryId: 3, 
    actualInvest: BigInt(3700000000),
    simInvest: BigInt(1700000000),
    revenue: 130000000,
    employees: 400,
    description: '직방은 \'온라인 부동산 플랫폼\'을 운영하는 PropTech 스타트업입니다.\n\n직방은 혁신적인 부동산 거래 서비스를 제공하여, 사용자가 편리하게 주거 정보를 검색하고 부동산 거래를 진행할 수 있도록 돕고 있습니다. 모바일 앱을 통해 아파트, 오피스텔, 원룸 등 다양한 주거 매물 정보를 제공하며, 3D 단지 투어, VR 홈 투어와 같은 첨단 기술을 도입하여 더 나은 사용자 경험을 제공합니다.\n\n직방은 부동산 정보의 투명성과 신뢰성을 높이기 위해 노력하고 있으며, 이를 위해 인증된 중개사들과의 협력을 강화하고 있습니다. 또한, 직방은 빅데이터와 인공지능(AI)을 활용하여 사용자 맞춤형 매물 추천 서비스를 제공하고, 빠르고 효율적인 부동산 거래를 지원하고 있습니다. 이러한 혁신적인 서비스로 현재 수백만 명의 사용자와 부동산 거래를 연결하며, 국내 부동산 시장에서 선도적인 위치를 차지하고 있습니다.\n\n직방은 사용자에게 더 나은 주거 경험을 제공하기 위해 끊임없이 발전하고 있으며, 앞으로 글로벌 시장으로의 확장을 통해 전 세계적으로 혁신적인 부동산 서비스를 제공할 계획입니다.',
    selectedCount: 0,
    comparedCount: 1,
    image: '/images/logo_zigbang.png',
    createdAt: '2024-09-09T13:00:00Z',
    updatedAt: '2024-09-09T13:00:00Z',
  },
  {
    id: 10,
    name: '당근마켓',
    categoryId: 2, 
    actualInvest: BigInt(6000000000),
    simInvest: BigInt(2300000000),
    revenue: 230000000,
    employees: 1000,
    description: '당근마켓은 지역 기반의 중고 거래 플랫폼으로, 사용자들이 가까운 지역에서 중고 물품을 쉽게 사고팔 수 있도록 연결해주는 서비스입니다. 친근한 사용자 경험과 지역 커뮤니티 활성화를 통해 신뢰할 수 있는 중고 거래 환경을 제공합니다.',
    selectedCount: 0,
    comparedCount: 1,
    image: '/images/logo_daangn.png',
    createdAt: '2024-09-10T13:00:00Z',
    updatedAt: '2024-09-10T13:00:00Z',
  },
  {
    id: 11,
    name: '쿠팡',
    categoryId: 2, 
    actualInvest: BigInt(300000000000),
    simInvest: BigInt(4000000000),
    revenue: 230000000000,
    employees: 2000,
    description: '쿠팡은 \'온라인 쇼핑 서비스\'를 운영하는 eCommerce 스타트업입니다.\n\n한국을 대표하는 온라인 쇼핑 플랫폼으로, 쿠팡은 고객에게 편리하고 빠른 쇼핑 경험을 제공하기 위해 혁신적인 기술을 개발하고 있습니다. 물류 인프라를 기반으로 한 로켓배송은 다음 날 배송을 보장하며, 이는 국내 유통업계에서 혁신적인 서비스로 평가받고 있습니다.\n\n고객을 중심으로 한 서비스 개선을 지속적으로 추진하며, 다양한 제품 카테고리와 신속한 배송 서비스로 1천만 명 이상의 활성 고객을 확보하였습니다. 이러한 성과를 바탕으로 2021년 미국 뉴욕 증권거래소에 상장하여 글로벌 시장에서의 성장을 가속화하고 있습니다.\n\n"모든 고객에게 최고의 쇼핑 경험을."\n\n이것이 쿠팡의 비전입니다. 쿠팡은 단순한 쇼핑몰을 넘어, IT 기술과 물류 혁신을 결합한 새로운 커머스 플랫폼을 구축하고 있으며, 향후 글로벌 시장으로의 확장을 목표로 하고 있습니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: '/images/logo_coupang.png',
    createdAt: '2024-09-11T13:00:00Z',
    updatedAt: '2024-09-11T13:00:00Z',
  },
  {
    id: 12,
    name: '센드버드',
    categoryId: 3, 
    actualInvest: BigInt(32000000),
    simInvest: BigInt(3000000),
    revenue: 25000000,
    employees: 300,
    description: '센드버드는 실시간 채팅 및 메시징 솔루션을 제공하는 글로벌 스타트업으로, 앱 내 채팅 기능을 손쉽게 통합할 수 있는 API를 제공합니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-12T12:00:00Z',
    updatedAt: '2024-09-12T12:00:00Z',
  },
  {
    id: 13,
    name: '빅밸류',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 35000000,
    employees: 210,
    description: '빅밸류는 부동산 데이터 분석 솔루션을 제공하는 스타트업으로, 인공지능과 빅데이터를 활용해 부동산의 가치를 평가하고 매물 정보를 제공합니다. 특히 아파트 시세를 예측하고 분석하는 데 특화된 솔루션을 제공하여 부동산 시장에서의 의사결정을 돕고 있습니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-13T12:00:00Z',
    updatedAt: '2024-09-13T12:00:00Z',
  },	
  {
    id: 14,
    name: '기업14',
    categoryId: 3, 
    actualInvest: BigInt(320000),
    simInvest: 0,
    revenue: 14000000,
    employees: 140,
    description: '기업 14는 솔루션 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-14T12:00:00Z',
    updatedAt: '2024-09-14T12:00:00Z',
  },	
  {
    id: 15,
    name: '기업15',
    categoryId: 2, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 15000000,
    employees: 150,
    description: '기업 15는 전자상거래 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-15T12:00:00Z',
    updatedAt: '2024-09-15T12:00:00Z',
  },	
  {
    id: 16,
    name: '기업16',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 39000000,
    employees: 160,
    description: '기업 16는 솔루션 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-16T12:00:00Z',
    updatedAt: '2024-09-16T12:00:00Z',
  },	
  {
    id: 17,
    name: '기업17',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 31000000,
    employees: 170,
    description: '기업 17는 솔루션 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-17T12:00:00Z',
    updatedAt: '2024-09-17T12:00:00Z',
  },	
  {
    id: 18,
    name: '기업18',
    categoryId: 2, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 12000000,
    employees: 180,
    description: '기업 18는 전자상거래 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-18T12:00:00Z',
    updatedAt: '2024-09-18T12:00:00Z',
  },	
  {
    id: 19,
    name: '기업19',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 10000000,
    employees: 190,
    description: '기업 19는 솔루션 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-19T12:00:00Z',
    updatedAt: '2024-09-19T12:00:00Z',
  },	
 {
    id: 20,
    name: '기업20',
    categoryId: 3, 
    actualInvest: BigInt(3200000),
    simInvest: 0,
    revenue: 28000000,
    employees: 200,
    description: '기업 20는 솔루션 기업입니다.',
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: '2024-09-20T12:00:00Z',
    updatedAt: '2024-09-20T12:00:00Z',
  },	


  {
    id: 21,
    name: "기업 21",
    categoryId: 2,
    actualInvest: BigInt(320000000),
    simInvest: 0,
    revenue: 21000000,
    employees: 210,
    description: "기업 21는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:01Z",
    updatedAt: "2024-09-21T12:00:01Z"
  },
  {
    id: 22,
    name: "기업 22",
    categoryId: 1,
    actualInvest: BigInt(330000000),
    simInvest: 0,
    revenue: 22000000,
    employees: 211,
    description: "기업 22는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:02Z",
    updatedAt: "2024-09-21T12:00:02Z"
  },
  {
    id: 23,
    name: "기업 23",
    categoryId: 2,
    actualInvest: BigInt(340000000),
    simInvest: 0,
    revenue: 23000000,
    employees: 212,
    description: "기업 23는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:03Z",
    updatedAt: "2024-09-21T12:00:03Z"
  },
  {
    id: 24,
    name: "기업 24",
    categoryId: 1,
    actualInvest: BigInt(350000000),
    simInvest: 0,
    revenue: 24000000,
    employees: 213,
    description: "기업 24는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:04Z",
    updatedAt: "2024-09-21T12:00:04Z"
  },
  {
    id: 25,
    name: "기업 25",
    categoryId: 2,
    actualInvest: BigInt(360000000),
    simInvest: 0,
    revenue: 25000000,
    employees: 214,
    description: "기업 25는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:05Z",
    updatedAt: "2024-09-21T12:00:05Z"
  },
  {
    id: 26,
    name: "기업 26",
    categoryId: 1,
    actualInvest: BigInt(370000000),
    simInvest: 0,
    revenue: 26000000,
    employees: 215,
    description: "기업 26는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:06Z",
    updatedAt: "2024-09-21T12:00:06Z"
  },
  {
    id: 27,
    name: "기업 27",
    categoryId: 2,
    actualInvest: BigInt(380000000),
    simInvest: 0,
    revenue: 27000000,
    employees: 216,
    description: "기업 27는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:07Z",
    updatedAt: "2024-09-21T12:00:07Z"
  },
  {
    id: 28,
    name: "기업 28",
    categoryId: 1,
    actualInvest: BigInt(390000000),
    simInvest: 0,
    revenue: 28000000,
    employees: 217,
    description: "기업 28는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:08Z",
    updatedAt: "2024-09-21T12:00:08Z"
  },
  {
    id: 29,
    name: "기업 29",
    categoryId: 2,
    actualInvest: BigInt(400000000),
    simInvest: 0,
    revenue: 29000000,
    employees: 218,
    description: "기업 29는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:09Z",
    updatedAt: "2024-09-21T12:00:09Z"
  },
  {
    id: 30,
    name: "기업 30",
    categoryId: 1,
    actualInvest: BigInt(410000000),
    simInvest: 0,
    revenue: 30000000,
    employees: 219,
    description: "기업 30는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:10Z",
    updatedAt: "2024-09-21T12:00:10Z"
  },
  {
    id: 31,
    name: "기업 31",
    categoryId: 2,
    actualInvest: BigInt(420000000),
    simInvest: 0,
    revenue: 31000000,
    employees: 220,
    description: "기업 31는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:11Z",
    updatedAt: "2024-09-21T12:00:11Z"
  },
  {
    id: 32,
    name: "기업 32",
    categoryId: 1,
    actualInvest: BigInt(430000000),
    simInvest: 0,
    revenue: 32000000,
    employees: 221,
    description: "기업 32는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:12Z",
    updatedAt: "2024-09-21T12:00:12Z"
  },
  {
    id: 33,
    name: "기업 33",
    categoryId: 2,
    actualInvest: BigInt(440000000),
    simInvest: 0,
    revenue: 33000000,
    employees: 222,
    description: "기업 33는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:13Z",
    updatedAt: "2024-09-21T12:00:13Z"
  },
  {
    id: 34,
    name: "기업 34",
    categoryId: 1,
    actualInvest: BigInt(450000000),
    simInvest: 0,
    revenue: 34000000,
    employees: 223,
    description: "기업 34는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:14Z",
    updatedAt: "2024-09-21T12:00:14Z"
  },
  {
    id: 35,
    name: "기업 35",
    categoryId: 2,
    actualInvest: BigInt(460000000),
    simInvest: 0,
    revenue: 35000000,
    employees: 224,
    description: "기업 35는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:15Z",
    updatedAt: "2024-09-21T12:00:15Z"
  },
  {
    id: 36,
    name: "기업 36",
    categoryId: 1,
    actualInvest: BigInt(470000000),
    simInvest: 0,
    revenue: 36000000,
    employees: 225,
    description: "기업 36는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:16Z",
    updatedAt: "2024-09-21T12:00:16Z"
  },
  {
    id: 37,
    name: "기업 37",
    categoryId: 2,
    actualInvest: BigInt(480000000),
    simInvest: 0,
    revenue: 37000000,
    employees: 226,
    description: "기업 37는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:17Z",
    updatedAt: "2024-09-21T12:00:17Z"
  },
  {
    id: 38,
    name: "기업 38",
    categoryId: 1,
    actualInvest: BigInt(490000000),
    simInvest: 0,
    revenue: 38000000,
    employees: 227,
    description: "기업 38는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:18Z",
    updatedAt: "2024-09-21T12:00:18Z"
  },
  {
    id: 39,
    name: "기업 39",
    categoryId: 2,
    actualInvest: BigInt(500000000),
    simInvest: 0,
    revenue: 39000000,
    employees: 228,
    description: "기업 39는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:19Z",
    updatedAt: "2024-09-21T12:00:19Z"
  },
  {
    id: 40,
    name: "기업 40",
    categoryId: 1,
    actualInvest: BigInt(510000000),
    simInvest: 0,
    revenue: 40000000,
    employees: 229,
    description: "기업 40는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:20Z",
    updatedAt: "2024-09-21T12:00:20Z"
  },
  {
    id: 41,
    name: "기업 41",
    categoryId: 2,
    actualInvest: BigInt(520000000),
    simInvest: 0,
    revenue: 41000000,
    employees: 230,
    description: "기업 41는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:21Z",
    updatedAt: "2024-09-21T12:00:21Z"
  },
  {
    id: 42,
    name: "기업 42",
    categoryId: 1,
    actualInvest: BigInt(530000000),
    simInvest: 0,
    revenue: 42000000,
    employees: 231,
    description: "기업 42는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:22Z",
    updatedAt: "2024-09-21T12:00:22Z"
  },
  {
    id: 43,
    name: "기업 43",
    categoryId: 2,
    actualInvest: BigInt(540000000),
    simInvest: 0,
    revenue: 43000000,
    employees: 232,
    description: "기업 43는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:23Z",
    updatedAt: "2024-09-21T12:00:23Z"
  },
  {
    id: 44,
    name: "기업 44",
    categoryId: 1,
    actualInvest: BigInt(550000000),
    simInvest: 0,
    revenue: 44000000,
    employees: 233,
    description: "기업 44는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:24Z",
    updatedAt: "2024-09-21T12:00:24Z"
  },
  {
    id: 45,
    name: "기업 45",
    categoryId: 2,
    actualInvest: BigInt(560000000),
    simInvest: 0,
    revenue: 45000000,
    employees: 234,
    description: "기업 45는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:25Z",
    updatedAt: "2024-09-21T12:00:25Z"
  },
  {
    id: 46,
    name: "기업 46",
    categoryId: 1,
    actualInvest: BigInt(570000000),
    simInvest: 0,
    revenue: 46000000,
    employees: 235,
    description: "기업 46는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:26Z",
    updatedAt: "2024-09-21T12:00:26Z"
  },
  {
    id: 47,
    name: "기업 47",
    categoryId: 2,
    actualInvest: BigInt(580000000),
    simInvest: 0,
    revenue: 47000000,
    employees: 236,
    description: "기업 47는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:27Z",
    updatedAt: "2024-09-21T12:00:27Z"
  },
  {
    id: 48,
    name: "기업 48",
    categoryId: 1,
    actualInvest: BigInt(590000000),
    simInvest: 0,
    revenue: 48000000,
    employees: 237,
    description: "기업 48는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:28Z",
    updatedAt: "2024-09-21T12:00:28Z"
  },
  {
    id: 49,
    name: "기업 49",
    categoryId: 2,
    actualInvest: BigInt(600000000),
    simInvest: 0,
    revenue: 49000000,
    employees: 238,
    description: "기업 49는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:29Z",
    updatedAt: "2024-09-21T12:00:29Z"
  },
  {
    id: 50,
    name: "기업 50",
    categoryId: 1,
    actualInvest: BigInt(610000000),
    simInvest: 0,
    revenue: 50000000,
    employees: 239,
    description: "기업 50는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:30Z",
    updatedAt: "2024-09-21T12:00:30Z"
  },
  {
    id: 51,
    name: "기업 51",
    categoryId: 2,
    actualInvest: BigInt(620000000),
    simInvest: 0,
    revenue: 51000000,
    employees: 240,
    description: "기업 51는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:31Z",
    updatedAt: "2024-09-21T12:00:31Z"
  },
  {
    id: 52,
    name: "기업 52",
    categoryId: 1,
    actualInvest: BigInt(630000000),
    simInvest: 0,
    revenue: 52000000,
    employees: 241,
    description: "기업 52는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:32Z",
    updatedAt: "2024-09-21T12:00:32Z"
  },
  {
    id: 53,
    name: "기업 53",
    categoryId: 2,
    actualInvest: BigInt(640000000),
    simInvest: 0,
    revenue: 53000000,
    employees: 242,
    description: "기업 53는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:33Z",
    updatedAt: "2024-09-21T12:00:33Z"
  },
  {
    id: 54,
    name: "기업 54",
    categoryId: 1,
    actualInvest: BigInt(650000000),
    simInvest: 0,
    revenue: 54000000,
    employees: 243,
    description: "기업 54는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:34Z",
    updatedAt: "2024-09-21T12:00:34Z"
  },
  {
    id: 55,
    name: "기업 55",
    categoryId: 2,
    actualInvest: BigInt(660000000),
    simInvest: 0,
    revenue: 55000000,
    employees: 244,
    description: "기업 55는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:35Z",
    updatedAt: "2024-09-21T12:00:35Z"
  },
  {
    id: 56,
    name: "기업 56",
    categoryId: 1,
    actualInvest: BigInt(670000000),
    simInvest: 0,
    revenue: 56000000,
    employees: 245,
    description: "기업 56는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:36Z",
    updatedAt: "2024-09-21T12:00:36Z"
  },
  {
    id: 57,
    name: "기업 57",
    categoryId: 2,
    actualInvest: BigInt(680000000),
    simInvest: 0,
    revenue: 57000000,
    employees: 246,
    description: "기업 57는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:37Z",
    updatedAt: "2024-09-21T12:00:37Z"
  },
  {
    id: 58,
    name: "기업 58",
    categoryId: 1,
    actualInvest: BigInt(690000000),
    simInvest: 0,
    revenue: 58000000,
    employees: 247,
    description: "기업 58는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:38Z",
    updatedAt: "2024-09-21T12:00:38Z"
  },
  {
    id: 59,
    name: "기업 59",
    categoryId: 2,
    actualInvest: BigInt(700000000),
    simInvest: 0,
    revenue: 59000000,
    employees: 248,
    description: "기업 59는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:39Z",
    updatedAt: "2024-09-21T12:00:39Z"
  },
  {
    id: 60,
    name: "기업 60",
    categoryId: 1,
    actualInvest: BigInt(710000000),
    simInvest: 0,
    revenue: 60000000,
    employees: 249,
    description: "기업 60는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:40Z",
    updatedAt: "2024-09-21T12:00:40Z"
  },
  {
    id: 61,
    name: "기업 61",
    categoryId: 2,
    actualInvest: BigInt(720000000),
    simInvest: 0,
    revenue: 61000000,
    employees: 250,
    description: "기업 61는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:41Z",
    updatedAt: "2024-09-21T12:00:41Z"
  },
  {
    id: 62,
    name: "기업 62",
    categoryId: 1,
    actualInvest: BigInt(730000000),
    simInvest: 0,
    revenue: 62000000,
    employees: 251,
    description: "기업 62는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:42Z",
    updatedAt: "2024-09-21T12:00:42Z"
  },
  {
    id: 63,
    name: "기업 63",
    categoryId: 2,
    actualInvest: BigInt(740000000),
    simInvest: 0,
    revenue: 63000000,
    employees: 252,
    description: "기업 63는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:43Z",
    updatedAt: "2024-09-21T12:00:43Z"
  },
  {
    id: 64,
    name: "기업 64",
    categoryId: 1,
    actualInvest: BigInt(750000000),
    simInvest: 0,
    revenue: 64000000,
    employees: 253,
    description: "기업 64는 에듀테크 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:44Z",
    updatedAt: "2024-09-21T12:00:44Z"
  },
  {
    id: 65,
    name: "기업 65",
    categoryId: 2,
    actualInvest: BigInt(760000000),
    simInvest: 0,
    revenue: 65000000,
    employees: 254,
    description: "기업 65는 전자상거래 기업입니다.",
    selectedCount: 0,
    comparedCount: 0,
    image: null,
    createdAt: "2024-09-21T12:00:45Z",
    updatedAt: "2024-09-21T12:00:45Z"
  },
]

export const MOCK_INVESTORS = [
  {
    id: 1,
    name: '홍길동',
    startupId: 1,
    investAmount: BigInt(3000000000),
    comment: '유망한 스타트업입니다.',
    password: 'pw1234',
    createdAt: '2024-09-01T09:00:00Z',
    updatedAt: '2024-09-01T09:00:00Z',
  },
  {
    id: 2,
    name: '김철수',
    startupId: 2,
    investAmount: BigInt(1000000000),
    comment: '성장 가능성이 높습니다.',
    password: 'pw1234',
    createdAt: '2024-09-02T09:30:00Z',
    updatedAt: '2024-09-02T09:30:00Z',
  },
  {
    id: 3,
    name: '이영희',
    startupId: 3,
    investAmount: BigInt(500000000),
    comment: '신뢰할 수 있는 기업입니다.',
    password: 'pw1234',
    createdAt: '2024-09-03T10:00:00Z',
    updatedAt: '2024-09-03T10:00:00Z',
  },
  {
    id: 4,
    name: '박민수',
    startupId: 4,
    investAmount: BigInt(800000000),
    comment: '초기 투자를 고려할 만합니다.',
    password: 'pw1234',
    createdAt: '2024-09-04T10:30:00Z',
    updatedAt: '2024-09-04T10:30:00Z',
  },
  {
    id: 5,
    name: '최진영',
    startupId: 5,
    investAmount: BigInt(1000000000),
    comment: '안정적인 투자처입니다.',
    password: 'pw1234',
    createdAt: '2024-09-05T11:00:00Z',
    updatedAt: '2024-09-05T11:00:00Z',
  },
  {
    id: 6,
    name: '정다희',
    startupId: 6,
    investAmount: BigInt(1000000000),
    comment: '기술력이 뛰어납니다.',
    password: 'pw1234',
    createdAt: '2024-09-06T11:30:00Z',
    updatedAt: '2024-09-06T11:30:00Z',
  },
  {
    id: 7,
    name: '한지수',
    startupId: 2,
    investAmount: BigInt(1000000000),
    comment: '미래가 기대됩니다.',
    password: 'pw1234',
    createdAt: '2024-09-07T12:00:00Z',
    updatedAt: '2024-09-07T12:00:00Z',
  },
  {
    id: 8,
    name: '윤상우',
    startupId: 2,
    investAmount: BigInt(1000000000),
    comment: '혁신적인 아이디어가 좋습니다.',
    password: 'pw1234',
    createdAt: '2024-09-08T12:30:00Z',
    updatedAt: '2024-09-08T12:30:00Z',
  },
  {
    id: 9,
    name: '이수민',
    startupId: 1,
    investAmount: BigInt(2000000000),
    comment: '투자 가치가 높습니다.',
    password: 'pw1234',
    createdAt: '2024-09-09T13:00:00Z',
    updatedAt: '2024-09-09T13:00:00Z',
  },
  {
    id: 10,
    name: '박준호',
    startupId: 1,
    investAmount: BigInt(1000000000),
    comment: '빠른 성장이 예상됩니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 11,
    name: '홍길동',
    startupId: 7,
    investAmount: BigInt(3000000000),
    comment: '유망한 스타트업입니다2.',
    password: 'pw1234',
    createdAt: '2024-09-01T09:00:00Z',
    updatedAt: '2024-09-01T09:00:00Z',
  },	
  {
    id: 12,
    name: '윤상우',
    startupId: 8,
    investAmount: BigInt(1500000000),
    comment: '혁신적인 아이디어가 좋습니다2.',
    password: 'pw1234',
    createdAt: '2024-09-08T12:30:00Z',
    updatedAt: '2024-09-08T12:30:00Z',
  },
  {
    id: 13,
    name: '이수민',
    startupId: 9,
    investAmount: BigInt(1700000000),
    comment: '투자 가치가 높습니다2.',
    password: 'pw1234',
    createdAt: '2024-09-09T13:00:00Z',
    updatedAt: '2024-09-09T13:00:00Z',
  },
  {
    id: 14,
    name: '박준호',
    startupId: 10,
    investAmount: BigInt(2300000000),
    comment: '빠른 성장이 예상됩니다2.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },		
  {
    id: 15,
    name: '이수민',
    startupId: 11,
    investAmount: BigInt(4000000000),
    comment: '투자 가치가 높습니다2.',
    password: 'pw1234',
    createdAt: '2024-09-09T13:00:00Z',
    updatedAt: '2024-09-09T13:00:00Z',
  },
  {
    id: 16,
    name: '박준호',
    startupId: 12,
    investAmount: BigInt(3000000),
    comment: '빠른 성장이 예상됩니다2.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 17,
    name: '김수철',
    startupId: 1,
    investAmount: BigInt(30000000),
    comment: '기대가 큽니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 18,
    name: '이영자',
    startupId: 1,
    investAmount: BigInt(4500000),
    comment: '성장이 빠를 것 같습니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 19,
    name: '최민수',
    startupId: 1,
    investAmount: BigInt(50000000),
    comment: '잠재력이 있습니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 20,
    name: '정재영',
    startupId: 1,
    investAmount: BigInt(2900000),
    comment: '팀이 좋아보입니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 21,
    name: '박성호',
    startupId: 1,
    investAmount: BigInt(3200000),
    comment: '많은 발전이 예상됩니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 22,
    name: '김수영',
    startupId: 1,
    investAmount: BigInt(4700000),
    comment: '투자가치가 있습니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 23,
    name: '이민호',
    startupId: 1,
    investAmount: BigInt(31000000),
    comment: '성공할 것으로 기대됩니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 24,
    name: '장지훈',
    startupId: 1,
    investAmount: BigInt(32000000),
    comment: '혁신적인 아이디어입니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 25,
    name: '한지민',
    startupId: 1,
    investAmount: BigInt(33000000),
    comment: '성장 가능성이 큽니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  },
  {
    id: 26,
    name: '조현우',
    startupId: 1,
    investAmount: BigInt(34000000),
    comment: '기대 이상입니다.',
    password: 'pw1234',
    createdAt: '2024-09-10T13:30:00Z',
    updatedAt: '2024-09-10T13:30:00Z',
  }
];

export const SELECTIONS = [
  {
    id: 1,
    sessionId: 'aaaaaaaa',
    isSelected: true, 
    startupId: 1,
    createdAt: '2024-09-22T09:00:00Z',
    updatedAt: '2024-09-22T09:00:00Z',
  },
  {
    id: 2,
    sessionId: 'bbbbbbbbb',
    isSelected: true, 
    startupId: 2,
    createdAt: '2024-09-21T09:00:00Z',
    updatedAt: '2024-09-21T09:00:00Z',
  },
  {
    id: 3,
    sessionId: 'cccccccc',
    isSelected: true, 
    startupId: 3,
    createdAt: '2024-09-20T09:00:00Z',
    updatedAt: '2024-09-20T09:00:00Z',
  },
  {
    id: 4,
    sessionId: 'dddddddd',
    isSelected: true, 
    startupId: 4,
    createdAt: '2024-09-19T09:00:00Z',
    updatedAt: '2024-09-19T09:00:00Z',
  },
  {
    id: 5,
    sessionId: 'eeeeeeee',
    isSelected: true, 
    startupId: 5,
    createdAt: '2024-09-18T09:00:00Z',
    updatedAt: '2024-09-18T09:00:00Z',
  },
]
		
export const COMPARISONS = [
  {
    id: 1,
    sessionId: 'caaaaaaaa',
    isCompared: true, 
    startupId: 6,
    createdAt: '2024-09-22T09:00:00Z',
    updatedAt: '2024-09-22T09:00:00Z',
  },
  {
    id: 2,
    sessionId: 'cbbbbbbbbb',
    isCompared: true, 
    startupId: 7,
    createdAt: '2024-09-21T09:00:00Z',
    updatedAt: '2024-09-21T09:00:00Z',
  },
  {
    id: 3,
    sessionId: 'ccccccccc',
    isCompared: true, 
    startupId: 8,
    createdAt: '2024-09-20T09:00:00Z',
    updatedAt: '2024-09-20T09:00:00Z',
  },
  {
    id: 4,
    sessionId: 'cdddddddd',
    isCompared: true, 
    startupId: 9,
    createdAt: '2024-09-19T09:00:00Z',
    updatedAt: '2024-09-19T09:00:00Z',
  },
  {
    id: 5,
    sessionId: 'ceeeeeeee',
    isCompared: true, 
    startupId: 10,
    createdAt: '2024-09-18T09:00:00Z',
    updatedAt: '2024-09-18T09:00:00Z',
  },
]	