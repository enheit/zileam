export {}

const records = [
  {
    id: '1',
    title: 'Entertnainment',
    startTime: new Date(), // 14:00
    durationInSeconds: 500 // 14:05
  },
  {
    id: '2',
    title: 'Entertnainment',
    startTime: new Date(), // 14:15
    durationInSeconds: 500 // 14:20
  },
  {
    id: '3',
    title: 'Entertnainment',
    startTime: new Date(), // 14:55
    durationInSeconds: 500 // 15:10
  }
]

const labels = [
  {
    id: '1',
    label: 'Entertainemtn'
  },
  {
    id: '2',
    label: 'Programming'
  }
]

const records = {
  '1': [
    {
      id: '3',
      title: 'Entertnainment',
      startTime: new Date(), // 14:20
      durationInSeconds: 500 // 14:30
    },
    {
      id: '3',
      title: 'Entertnainment',
      startTime: new Date(), // 14:30
      durationInSeconds: 500 // 14:40
    },
    {
      id: '3',
      title: 'Entertnainment',
      startTime: new Date(), // 14:40
      durationInSeconds: 500 // 14:50
    }
  ]
}

// [14:20-14:50]



// [0-15] = 100%, 75%, 50%, 25%

// 15 min = 100%
// 10.25 = 75%
// 7.5 min = 50%
// 3.75 min = 25%

/**
 * if (time >= 15 min) {
 *   100% of color
 * } else if (>= 10 min) {
 *   75% of color
 * } else if (>= 5) {
 *   50% of color
 * } else {
 *   25% of color
 * }
 */

// [0-15][15-30][30-45][45-60]
// [14:20-14:50]
// [14:00-14:15][14:15-14:30][14:30-14:45][14:45-15:00]



// Entertainment [|||| |||| |||| |||| |||| |||| |||| |||| |||| ||||] 1h. 30 min.