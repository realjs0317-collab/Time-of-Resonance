export const GUARDIAN_DATA = {
  주작: {
    direction: '남쪽',
    concept: '상승 / 발산',
    words: [
      { word: '높이다', desc: '마음의 층위를 위로 끌어올려 더 넓은 시야를 갖게 됨.' },
      { word: '돋우다', desc: '안으로 고여 있던 에너지를 위로 바짝 세워 생동감을 얻음.' },
    ],
    questions: [
      '지금까지 당신의 삶에서 가장 뜨거웠던 순간은 언제였나요?',
      '앞으로 바꾸고 싶은 것은 무엇인가요?',
    ],
    infographic: ['열정 지수', '혁신 포인트', '용기 레벨', '변화 의지'],
    lyrics: '주작의 불꽃이 당신을 감싸네\n남방의 기운이 흐르는 밤\n열정과 용기로 세상을 밝혀라',
    photocard: { word: '열정', symbol: '🔥', accent: '#c0392b', image: '/photocards/jujak.png' },
  },
  청룡: {
    direction: '동쪽',
    concept: '확장 / 밖으로',
    words: [
      { word: '나아가다', desc: '정체된 상태를 벗어나 앞(오른쪽)을 향해 힘차게 발을 내딛음.' },
      { word: '바라다', desc: '시선을 멀리 던져 내일의 희망과 긍정적인 변화를 꿈꾼다.' },
    ],
    questions: [
      '당신이 꿈꾸는 미래는 어떤 모습인가요?',
      '지금 당신을 성장시키는 것은 무엇인가요?',
    ],
    infographic: ['지혜 수치', '성장 곡선', '비전 명확도', '도약 준비도'],
    lyrics: '청룡이 하늘을 가로지르네\n동방의 기운이 빛나는 아침\n지혜와 비전으로 날아오르라',
    photocard: { word: '소원', symbol: '🐉', accent: '#2980b9', image: '/photocards/cheongryong.png' },
  },
  백호: {
    direction: '서쪽',
    concept: '수렴 / 안으로',
    words: [
      { word: '어리다', desc: '눈시울이나 마음에 감정이 안으로 맺히며 깊은 울림을 남김.' },
      { word: '거두다', desc: '밖으로 흩어졌던 마음의 조각들을 다시 내 안으로 불러 모음.' },
    ],
    questions: [
      '당신의 삶에서 가장 중요한 결단은 무엇이었나요?',
      '지금 당신이 지켜야 할 것은 무엇인가요?',
    ],
    infographic: ['결단력', '정의 감각', '용맹도', '균형 점수'],
    lyrics: '백호가 서방을 지키네\n맑고 선명한 그 기운\n결단과 정의로 앞을 열어라',
    photocard: { word: '결단', symbol: '🐯', accent: '#7f8c8d', image: '/photocards/baekho.png' },
  },
  현무: {
    direction: '북쪽',
    concept: '침잠 / 하강',
    words: [
      { word: '누르다', desc: '들뜬 감정을 차분히 가라앉히고 내면의 무게중심을 잡음.' },
      { word: '두다', desc: '무언가를 애써 잡지 않고 아래로 내려놓아 마음의 여백을 만듦.' },
    ],
    questions: [
      '당신의 삶의 근본이 되는 것은 무엇인가요?',
      '어떤 순간에 가장 평온함을 느끼나요?',
    ],
    infographic: ['침착도', '인내력', '근본 점수', '안정 지수'],
    lyrics: '현무가 북방을 감싸네\n깊고 담담한 그 기운\n인내와 안정으로 뿌리를 내려라',
    photocard: { word: '인내', symbol: '🐢', accent: '#2c3e50', image: '/photocards/hyeonmu.png' },
  },
};

export const STEPS = ['splash', 'step1', 'step2', 'step3', 'step4', 'step5', 'step5b', 'step6'];
export const GUARDIANS = [
  { id: '주작', icon: '🔥', desc: '朱雀 · 남방 화염' },
  { id: '청룡', icon: '🐉', desc: '靑龍 · 동방 비룡' },
  { id: '백호', icon: '🐯', desc: '白虎 · 서방 백호' },
  { id: '현무', icon: '🐢', desc: '玄武 · 북방 현무' },
];
