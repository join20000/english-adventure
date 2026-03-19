const grammarData = {
  day1: {
    topic: "一般现在时",
    explanation: "一般现在时表示经常性、习惯性的动作或状态，或客观事实和真理。",
    examples: [
      {
        english: "She goes to school every day.",
        chinese: "她每天上学。"
      },
      {
        english: "The sun rises in the east.",
        chinese: "太阳从东方升起。"
      },
      {
        english: "I usually have breakfast at 7 o'clock.",
        chinese: "我通常在7点吃早饭。"
      }
    ],
    exercises: {
      basic: [
        {
          question: "He ___ (go) to work by bus every day.",
          answer: "goes",
          options: ["go", "goes", "went"]
        },
        {
          question: "They often ___ (play) football after school.",
          answer: "play",
          options: ["play", "plays", "played"]
        },
        {
          question: "The earth ___ (move) around the sun.",
          answer: "moves",
          options: ["move", "moves", "moved"]
        }
      ],
      advanced: [
        {
          question: "If it ___ (rain) tomorrow, we will stay at home.",
          answer: "rains",
          options: ["rain", "rains", "will rain"]
        },
        {
          question: "She always ___ (finish) her homework before dinner.",
          answer: "finishes",
          options: ["finish", "finishes", "finished"]
        }
      ],
      exam: [
        {
          question: "— What does your father do? — He ___ in a hospital.",
          answer: "works",
          options: ["work", "works", "worked", "will work"]
        },
        {
          question: "My sister ___ English very well, but she ___ French.",
          answer: "speaks, doesn't speak",
          options: ["speaks, doesn't speak", "speak, don't speak", "speaks, not speak"]
        }
      ]
    }
  },
  day2: {
    topic: "现在进行时",
    explanation: "现在进行时表示现在正在进行或发生的动作，结构为：be动词(am/is/are) + 动词ing形式。",
    examples: [
      {
        english: "I am reading a book now.",
        chinese: "我现在正在读书。"
      },
      {
        english: "They are playing basketball at the moment.",
        chinese: "他们此刻正在打篮球。"
      },
      {
        english: "What are you doing?",
        chinese: "你正在做什么？"
      }
    ],
    exercises: {
      basic: [
        {
          question: "Look! The children ___ (play) in the garden.",
          answer: "are playing",
          options: ["play", "are playing", "played"]
        },
        {
          question: "I ___ (watch) TV now.",
          answer: "am watching",
          options: ["watch", "am watching", "watched"]
        },
        {
          question: "She ___ (not study) at the moment.",
          answer: "isn't studying",
          options: ["not study", "isn't studying", "doesn't study"]
        }
      ],
      advanced: [
        {
          question: "We ___ (plan) a trip to Beijing next month.",
          answer: "are planning",
          options: ["plan", "are planning", "will plan"]
        },
        {
          question: "The phone is ringing. Who ___ (call)?",
          answer: "is calling",
          options: ["calls", "is calling", "will call"]
        }
      ],
      exam: [
        {
          question: "— Where is your mother? — She ___ in the kitchen.",
          answer: "is cooking",
          options: ["cooks", "is cooking", "cooked", "will cook"]
        },
        {
          question: "Listen! Someone ___ at the door.",
          answer: "is knocking",
          options: ["knocks", "is knocking", "knocked", "will knock"]
        }
      ]
    }
  },
  day3: {
    topic: "一般过去时",
    explanation: "一般过去时表示过去某个时间发生的动作或存在的状态，动词用过去式。",
    examples: [
      {
        english: "I went to the park yesterday.",
        chinese: "我昨天去了公园。"
      },
      {
        english: "She studied English last year.",
        chinese: "她去年学了英语。"
      },
      {
        english: "They were happy when they heard the news.",
        chinese: "他们听到这个消息时很高兴。"
      }
    ],
    exercises: {
      basic: [
        {
          question: "He ___ (go) to Shanghai last week.",
          answer: "went",
          options: ["go", "goes", "went"]
        },
        {
          question: "I ___ (see) him yesterday.",
          answer: "saw",
          options: ["see", "saw", "seen"]
        },
        {
          question: "They ___ (be) late for school this morning.",
          answer: "were",
          options: ["are", "were", "was"]
        }
      ],
      advanced: [
        {
          question: "When I ___ (be) young, I ___ (like) to play football.",
          answer: "was, liked",
          options: ["am, like", "was, liked", "were, liked"]
        },
        {
          question: "She ___ (not come) to the party yesterday.",
          answer: "didn't come",
          options: ["not come", "doesn't come", "didn't come"]
        }
      ],
      exam: [
        {
          question: "— What did you do last weekend? — I ___ my grandparents.",
          answer: "visited",
          options: ["visit", "visited", "will visit", "have visited"]
        },
        {
          question: "The film ___ at 8 o'clock and ___ for two hours.",
          answer: "started, lasted",
          options: ["started, lasted", "starts, lasts", "is starting, is lasting"]
        }
      ]
    }
  },
  day4: {
    topic: "一般将来时",
    explanation: "一般将来时表示将来某个时间要发生的动作或存在的状态，常用will/shall + 动词原形或be going to + 动词原形。",
    examples: [
      {
        english: "I will go to Beijing tomorrow.",
        chinese: "我明天将去北京。"
      },
      {
        english: "They are going to have a party next week.",
        chinese: "他们下周将要举行一个聚会。"
      },
      {
        english: "Will you help me with my homework?",
        chinese: "你会帮我做作业吗？"
      }
    ],
    exercises: {
      basic: [
        {
          question: "I ___ (visit) my aunt next Sunday.",
          answer: "will visit",
          options: ["visit", "visited", "will visit"]
        },
        {
          question: "They ___ (not go) to the cinema tonight.",
          answer: "won't go",
          options: ["not go", "don't go", "won't go"]
        },
        {
          question: "She ___ (be) 15 years old next month.",
          answer: "will be",
          options: ["is", "was", "will be"]
        }
      ],
      advanced: [
        {
          question: "Look at the dark clouds. It ___ (rain) soon.",
          answer: "is going to rain",
          options: ["rains", "will rain", "is going to rain"]
        },
        {
          question: "I think he ___ (pass) the exam.",
          answer: "will pass",
          options: ["passes", "will pass", "is passing"]
        }
      ],
      exam: [
        {
          question: "— What are your plans for the summer holiday? — I ___ to the beach with my family.",
          answer: "am going to go",
          options: ["go", "went", "will go", "am going to go"]
        },
        {
          question: "If you study hard, you ___ the exam.",
          answer: "will pass",
          options: ["pass", "passed", "will pass", "have passed"]
        }
      ]
    }
  },
  day5: {
    topic: "现在完成时",
    explanation: "现在完成时表示过去发生的动作对现在造成的影响或结果，或从过去开始一直持续到现在的动作或状态，结构为：have/has + 过去分词。",
    examples: [
      {
        english: "I have finished my homework.",
        chinese: "我已经完成了作业。"
      },
      {
        english: "She has lived here for 10 years.",
        chinese: "她已经在这里住了10年了。"
      },
      {
        english: "Have you ever been to Paris?",
        chinese: "你曾经去过巴黎吗？"
      }
    ],
    exercises: {
      basic: [
        {
          question: "They ___ (finish) their work already.",
          answer: "have finished",
          options: ["finish", "finished", "have finished"]
        },
        {
          question: "I ___ (not see) him for a long time.",
          answer: "haven't seen",
          options: ["not see", "don't see", "haven't seen"]
        },
        {
          question: "She ___ (be) a teacher for 5 years.",
          answer: "has been",
          options: ["is", "was", "has been"]
        }
      ],
      advanced: [
        {
          question: "We ___ (live) in this city since 2010.",
          answer: "have lived",
          options: ["live", "lived", "have lived"]
        },
        {
          question: "___ you ever ___ (visit) the Great Wall?",
          answer: "Have, visited",
          options: ["Do, visit", "Did, visit", "Have, visited"]
        }
      ],
      exam: [
        {
          question: "— How long have you ___ here? — For about two years.",
          answer: "been",
          options: ["be", "been", "are", "were"]
        },
        {
          question: "I ___ my keys. I can't find them anywhere.",
          answer: "have lost",
          options: ["lose", "lost", "have lost", "will lose"]
        }
      ]
    }
  }
};