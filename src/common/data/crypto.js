// import React from "react"

const wallet = {
  id: '#SK0234',
  userName: 'Henry Wells',
  email: 'henrywells@abc.com',
  availableBalance: '$ 9148.23',
  lastMonthDifference: '+ $ 248.35',
  lastMonthDifferencePercent: '+ 1.3 %',
  send: '$ 654.42',
  receive: '$ 1054.32',
  withdraw: '$ 824.34',
  series: [
    {
      type: 'area',
      name: 'BTC',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    },
    {
      type: 'area',
      name: 'ETH',
      data: [28, 41, 52, 42, 13, 18, 29, 18, 36, 51, 55, 35]
    },
    {
      type: 'line',
      name: 'LTC',
      data: [45, 52, 38, 24, 33, 65, 45, 75, 54, 18, 28, 10]
    }
  ],
  options: {
    chart: { toolbar: { show: !1 } },
    dataLabels: { enabled: !1 },
    stroke: { curve: 'smooth', width: 2, dashArray: [0, 0, 3] },
    fill: { type: 'solid', opacity: [0.15, 0.05, 1] },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    colors: ['#f1b44c', '#3452e1', '#50a5f1']
  },
  walletHistory: [
    {
      id: '#SK3215',
      date: '03 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    },
    {
      id: '#SK3216',
      date: '04 Mar, 2020',
      type: 'Sell',
      currency: 'Ethereum',
      amount: '0.00413 ETH',
      amountinUSD: '$ 2123.01'
    },
    {
      id: '#SK3217',
      date: '04 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    },
    {
      id: '#SK3218',
      date: '03 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    },
    {
      id: '#SK3219',
      date: '03 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    },
    {
      id: '#SK3220',
      date: '03 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    },
    {
      id: '#SK3221',
      date: '03 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    },
    {
      id: '#SK3222',
      date: '03 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    },
    {
      id: '#SK3223',
      date: '03 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    },
    {
      id: '#SK3224',
      date: '03 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    },
    {
      id: '#SK3225',
      date: '03 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    },
    {
      id: '#SK3226',
      date: '03 Mar, 2020',
      type: 'Buy',
      currency: 'Bitcoin',
      amount: '1.00952 BTC',
      amountinUSD: '$ 9067.62'
    }
  ]
};

const cryptoOrders = [
  {
    date: '03 Mar, 2020',
    type: 'Buy',
    coin: 'Bitcoin',
    value: '1.00952 BTC',
    valueinUSD: '$ 9067.62',
    status: 'completed'
  },
  {
    date: '04 Mar, 2020',
    type: 'Sell',
    coin: 'Ethereum',
    value: '0.00413 ETH	',
    valueinUSD: '$ 2123.01',
    status: 'completed'
  },
  {
    date: '04 Mar, 2020',
    type: 'Buy',
    coin: 'Bitcoin',
    value: '0.00321 BTC	',
    valueinUSD: '$ 1802.62',
    status: 'pending'
  },
  {
    date: '05 Mar, 2020',
    type: 'Buy',
    coin: 'Litecoin',
    value: '0.00224 LTC',
    valueinUSD: '$ 1773.01',
    status: 'completed'
  },
  {
    date: '06 Mar, 2020',
    type: 'Buy',
    coin: 'Ethereum',
    value: 'Ethereum',
    valueinUSD: '$ 9423.73',
    status: 'failed'
  },
  {
    date: '07 Mar, 2020',
    type: 'Buy',
    coin: 'Bitcoin',
    value: '1.00952 BTC',
    valueinUSD: '$ 9067.62',
    status: 'completed'
  },
  {
    date: '07 Mar, 2020',
    type: 'Sell',
    coin: 'Ethereum',
    value: '0.00413 ETH	',
    valueinUSD: '$ 2123.01',
    status: 'completed'
  },
  {
    date: '08 Mar, 2020',
    type: 'Buy',
    coin: 'Bitcoin',
    value: '0.00321 BTC	',
    valueinUSD: '$ 1802.62',
    status: 'pending'
  },
  {
    date: '09 Mar, 2020',
    type: 'Buy',
    coin: 'Litecoin',
    value: '0.00224 LTC',
    valueinUSD: '$ 1773.01',
    status: 'completed'
  },
  {
    date: '10 Mar, 2020',
    type: 'Buy',
    coin: 'Ethereum',
    value: 'Ethereum',
    valueinUSD: '$ 9423.73',
    status: 'pending'
  },
  {
    date: '10 Mar, 2020',
    type: 'Buy',
    coin: 'Bitcoin',
    value: '1.00952 BTC',
    valueinUSD: '$ 9067.62',
    status: 'completed'
  },
  {
    date: '11 Mar, 2020',
    type: 'Sell',
    coin: 'Ethereum',
    value: '0.00413 ETH	',
    valueinUSD: '$ 2123.01',
    status: 'completed'
  },
  {
    date: '12 Mar, 2020',
    type: 'Buy',
    coin: 'Bitcoin',
    value: '0.00321 BTC	',
    valueinUSD: '$ 1802.62',
    status: 'pending'
  },
  {
    date: '13 Mar, 2020',
    type: 'Buy',
    coin: 'Litecoin',
    value: '0.00224 LTC',
    valueinUSD: '$ 1773.01',
    status: 'completed'
  },
  {
    date: '14 Mar, 2020',
    type: 'Buy',
    coin: 'Ethereum',
    value: 'Ethereum',
    valueinUSD: '$ 9423.73',
    status: 'failed'
  },
  {
    date: '15 Mar, 2020',
    type: 'Buy',
    coin: 'Litecoin',
    value: '0.00224 LTC',
    valueinUSD: '$ 1773.01',
    status: 'completed'
  }
];

export { wallet, cryptoOrders };
