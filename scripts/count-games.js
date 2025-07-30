// 统计每个分类的实际游戏数量
const { games, additionalGames, categories } = require('../data/games.ts');

// 合并所有游戏
const allGames = [...games, ...additionalGames];

// 统计每个分类的游戏数量
const actualCounts = {};
const categoryList = ['action', 'puzzle', 'casual', 'adventure', 'racing', 'strategy'];

categoryList.forEach(category => {
  const categoryGames = allGames.filter(game => game.category === category);
  actualCounts[category] = categoryGames.length;
});

console.log('=== 游戏分类统计对比 ===\n');

categories.forEach(category => {
  const actualCount = actualCounts[category.slug] || 0;
  const definedCount = category.gameCount;
  const match = actualCount === definedCount ? '✅' : '❌';
  
  console.log(`${match} ${category.name} (${category.slug}):`);
  console.log(`   定义数量: ${definedCount} games`);
  console.log(`   实际数量: ${actualCount} games`);
  console.log(`   差异: ${actualCount - definedCount}\n`);
});

console.log('=== 详细游戏列表 ===\n');

categoryList.forEach(category => {
  const categoryGames = allGames.filter(game => game.category === category);
  console.log(`${category.toUpperCase()} (${categoryGames.length} games):`);
  categoryGames.forEach((game, index) => {
    console.log(`  ${index + 1}. ${game.title} (${game.id})`);
  });
  console.log('');
});
