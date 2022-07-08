let catalog = [ {
  title: 'Communism for youngsters',
  author: 'Sandro',
  copies: 0
},
{
  title: 'Roman Empire History',
  author: 'Centu',
  copies: 0
},
{
  title: 'Vodka economics',
  author: 'Jilex',
  copies: 0
},
{
  title: 'Python basics',
  author: 'Zenva',
  copies: 0
},
{
  title: 'JavaScript basics',
  author: 'Zenva',
  copies: 0
},
{
  title: 'C++ basics',
  author: 'Zenva',
  copies: 0
},
{
  title: 'Communism and LGTB',
  author: 'Sandro',
  copies: 0
},
];

catalog.forEach((item, i, catalog) => {
  if (item.author == 'Zenva') {
    item.copies ++;
  };
  console.log(item.title, 'by', item.author, 'purchased', item.copies, 'times');
});
