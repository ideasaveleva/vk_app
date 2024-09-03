export const questions = [
  {
    id: 6,
    img: './smiley.png',
    question: 'Вопрос 1. Выбери смайлик.',
    options: [
      { text: "('^-^')", type: 3 },
      { text: '/~-_-/~', type: 2 },
      { text: '♡', type: 1 },
      { text: '☆', type: 4 },
    ],
  },
  {
    id: 2,
    img: './happiness.png',
    question: 'Вопрос 2. В чём счастье?',
    options: [
      {
        text: 'Счастье в постоянстве.',
        type: 2,
      },
      {
        text: 'Счастье — это осознавать, что никогда не был одинок.',
        type: 3,
      },
      {
        text: 'Для счастья нужно три вещи: любимый человек, интересная работа и понимание того, что ты уже счастлив...',
        type: 1,
      },
      {
        text: '— Эх, Карлсон, не в пирогах счастье... — Ты с ума сошёл! А в чём же ещё?!',
        type: 4,
      },
    ],
  },
  {
    id: 4,
    img: './wisdom.png',
    question: 'Вопрос 3. Выбери цитату:',
    options: [
      {
        text: 'Люди как птицы: взлетят повыше и забывают, что это ты их кормил.',
        type: 2,
      },
      {
        text: 'Религия — опиум для народа: она даёт наслаждение, и стоит привыкнуть, ты уже не сможешь оторваться.',
        type: 4,
      },
      {
        text: 'Дружба — она не знает ни времени, ни нации, ни жизненного статуса... настоящий друг это подарок от Бога.',
        type: 3,
      },
      {
        text: 'У настоящей любви нет конца. Настоящая любовь вообще не заканчивается.',
        type: 1,
      },
    ],
  },
  {
    id: 1,
    img: './love.png',
    question: 'Вопрос 4. Что такое любовь?',
    options: [
      {
        text: 'Непонятное глупое чувство, которое я не в силах объяснить.',
        type: 3,
      },
      {
        text: 'Это подарок.',
        type: 2,
      },
      {
        text: 'Это более обострённая дружба.',
        type: 4,
      },
      {
        text: 'Самое прекрасное чувство на планете!',
        type: 1,
      },
    ],
  },
  {
    id: 5,
    img: './cartoon.png',
    question: 'Вопрос 5. А теперь цитату из мультфильма...',
    options: [
      {
        text: 'И помни, в этом городе никому нельзя доверять.',
        type: 3,
      },
      {
        text: 'Если парень делает глупость, то это только потому, что он парень. Если же он делает эту же самую глупость ещё раз — это уже из-за девушки.',
        type: 2,
      },
      {
        text: 'Дружба — это чудо.',
        type: 4,
      },
      {
        text: 'Судьба, конечно, странная вещь. Мы часто рвемся навстречу ей, не понимая, что встреча уже состоялась.',
        type: 1,
      },
    ],
  },
  {
    id: 3,
    img: './friendship.png',
    question: 'Вопрос 6. Что такое дружба?',
    options: [
      {
        text: 'Привязанность к какому-то человеку.',
        type: 4,
      },
      {
        text: 'Дружба — это прекрасная магия!',
        type: 1,
      },
      {
        text: 'Ну... дружба — это светлое и приятное чувство...',
        type: 2,
      },
      {
        text: 'Почти безграничная вера человеку.',
        type: 3,
      },
    ],
  },
]

export const typeDescriptions = {
  1: 'ЛЮБОВЬ',
  2: 'ВЫСШИЕ СИЛЫ',
  3: 'БДИТЕЛЬНОСТЬ И ОСТОРОЖНОСТЬ',
  4: 'ДРУЖБУ И ЕДИНСТВО',
}

export const typeOne = {
  text: 'Вера в то, что два сердца стремятся друг к другу... Одна из самых прекрасных вер. Ты видишь в любви источник вдохновения и силы, который помогает преодолевать трудности и наполняет жизнь смыслом. Важно помнить, что настоящая любовь требует взаимного уважения и понимания. Постарайся открыто выражать свои чувства и ценить тех, кто находится рядом. Даже если любовь иногда сталкивается с преградами, она всегда остается светлым и теплым чувством, которое делает нас лучше и счастливее.',
  poem: `
Валерий Брюсов "Всем"

О, сколько раз, блаженно и безгласно,
В полночной мгле, свою мечту храня,
Ты думала, что обнимаешь страстно —
Меня!
Пусть миги были тягостно похожи!
Ты верила, как в первый день любя,
Что я сжимаю в сладострастной дрожи —
Тебя!
Но лгали образы часов бессонных,
И крыли тайну створы темноты:
Была в моих объятьях принужденных —
Не ты!
Вскрыть сладостный обман мне было больно,
И я молчал, отчаянье тая…
Но на твоей груди лежал безвольно —
Не я!
О, как бы ты, страдая и ревнуя,
Отпрянула в испуге предо мной,
Поняв, что я клонюсь, тебя целуя, —
К другой!

`,
}
export const typeTwo = {
  text: 'Вера в то, что есть силы, которые направляют и защищают нас на пути жизни. Ты ощущаешь присутствие чего-то большего, что помогает находить смысл в событиях и преодолевать трудности. Эта вера придает уверенность и успокоение в моменты неопределенности. Постарайся сохранять открытость к знакам и подсказкам, которые могут прийти из внешнего мира. Важно помнить, что даже в трудные времена эти высшие силы могут быть источником поддержки и направлять тебя к новым возможностям и решениям.',
  poem: `
Стихотворение Дмитрия Быкова:

Если бы кто-то меня спросил,
Как я чую присутствие высших сил —
Дрожь в хребте, мурашки по шее,
Слабость рук, подгибанье ног, —
Я бы ответил: если страшнее,
Чем можно придумать, то это Бог.

Сюжетом не предусмотренный поворот,
Небесный тунгусский камень в твой огород,
Лед и пламень, война и смута,
Тамерлан и Наполеон,
Приказ немедленно прыгать без парашюта
С горящего самолета, — все это он.

А если среди зимы запахло весной,
Если есть парашют, а к нему еще запасной,
В огне просматривается дорога,
Во тьме прорезывается просвет, —
Это почерк дьявола, а не Бога,
Это дьявол под маской Бога
Внушает надежду там, где надежды нет.

Но если ты входишь во тьму, а она бела,
Прыгнул, а у тебя отросли крыла, —
То это Бог, или ангел, его посредник,
С хурмой «Тамерлан» и тортом «Наполеон»:
Последний шанс последнего из последних,
Поскольку после последнего — сразу он.

Это то, чего не учел Иуда.
Это то, чему не учил Дада.
Чудо вступает там, где помимо чуда
Не спасет никто, ничто, никогда.

А если ты в бездну шагнул и не воспарил,
Вошел в огонь, и огонь тебя опалил,
Ринулся в чащу, а там берлога,
Шел на медведя, а их там шесть, —
Это почерк дьявола, а не Бога,
Это дьявол под маской Бога
Отнимает надежду там, где надежда есть.

`,
}
export const typeThree = {
  text: 'Вера в то, что внимательность и осторожность защищают от неприятностей и разочарований. Ну... что сказать, тебя точно нельзя назвать доверчивой овечкой. Иногда слишком сильная осторожность может мешать находить новые возможности и строить доверительные отношения. Постарайся открыться и проявить больше гибкости в своих оценках окружающих. Важно находить баланс между защитой и доверием, чтобы создать более гармоничные и искренние связи.',
  poem: `
Евгений Бачурин "Осторожность"

Острожность превыше всего -
Стража быта и жизни охрана.
Не суди выше лба своего,
Но и будь не глупее барана.
Лучше голову в плечи убрать,
Чем сложить её, сделав оплошность.
Острожность превыше добра.
О-с-т-о-р-о-ж-н-о-с-т-ь!!!

Если что, обойди строной.
Если нет - пробирайся украдкой.
На дороге у сильных не стой,
Только слабого бей без оглядки,
Только с нищего требуй рубли.
Доброта - ненадёжная должность.
Осторожность превыше любви.
О-с-т-о-р-о-ж-н-о-с-т-ь!!!

Добывая себе на прокорм,
Отрекись от великих служений,
Опасайся высоких платформ,
Берегись силовых напряжений.
Каждый миг под колёса судьбы
Может бросить любая ничтожность.
Осторожность превыше борьбы
О-с-т-о-р-о-ж-н-о-с-т-ь!!!

Пусть болтает безглазый народ
Будто главное в мире доверье.
Кто других пропускает вперёд,
Тот всегда остаётся за дверью,
Тот всегда пропадает внизу,
Проклиная свою безнадёжность.
Осторожность превыше безумств,
О-с-т-о-р-о-ж-н-о-с-т-ь!!!

Ты у всех в неоплатном долгу:
У родных, что в беде поучают,
У друзей, что по слабости лгут,
У врагов, что с плеча величают.
Ты в долгу у себя самого,
И, пока не покрыта задолжность.
Осторожность превыше всего!
О-с-т-о-р-о-ж-н-о-с-т-ь!!!

`,
}
export const typeFour = {
  text: 'Вера в то, что взаимная поддержка и общение делают нас сильнее и счастливее. Ты видишь в дружбе и гармонии ключ к полноценной и радостной жизни. Эту веру можно ощущать в каждом искреннем разговоре и совместных переживаниях. Постарайся укреплять свои связи с близкими и быть рядом в трудные моменты. Помни, что доверие и поддержка, которые ты даешь другим, вернутся к тебе многократно. Создание и поддержание крепких отношений делает жизнь более насыщенной и приносит радость и удовлетворение.',
  poem: `
Стихотворение о дружбе:

В современном мире технологий,
Взглядом по окрестностям скользя,
Вы задумайтесь, что очень многих,
Называем мы «мои друзья».
И устав от жизненных амбиций,
Нереализованных идей,
Хочется вокруг нам увидеть лица,
Дорогих и близких нам людей.
О друзьях написано немало,
От себя добавить лишь хочу,
Друг – не тот, с кем вместе выпивали,
И не тот, кто хлопал по плечу.
И не тот, кто рад давать советы,
С кем свела житейская стезя,
С кем учился ты когда-то, где-то…
Нет, ребята, это не друзья.
Друг не тот, кто шутит и смеется,
И не тот, кто ценит стиль и стих.
Друг – в твоих проблемах познается,
В радости и горе на двоих.
Благодарности ему твоей не надо,
И они словами не сорят.
Про таких друзей писал Асадов,
Делают они – не говорят.
Нет у них внутри душонок мелких,
Вам желаю просто, без затей,
Прочь гоните жалкую подделку,
Но цените искренних друзей!

`,
}
