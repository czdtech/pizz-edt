import { Game, Category } from '@/types/game';

export const categories: Category[] = [
  {
    slug: 'action',
    name: 'Action',
    icon: '⚡',
    description: 'Fast-paced thrilling games',
    gameCount: 15
  },
  {
    slug: 'puzzle',
    name: 'Puzzle',
    icon: '🧩',
    description: 'Mind-bending challenges',
    gameCount: 12
  },
  {
    slug: 'casual',
    name: 'Casual',
    icon: '🎯',
    description: 'Easy and relaxing games',
    gameCount: 18
  },
  {
    slug: 'adventure',
    name: 'Adventure',
    icon: '🗺️',
    description: 'Epic journeys await',
    gameCount: 8
  },
  {
    slug: 'racing',
    name: 'Racing',
    icon: '🏎️',
    description: 'Speed and competition',
    gameCount: 10
  },
  {
    slug: 'strategy',
    name: 'Strategy',
    icon: '♟️',
    description: 'Think and conquer',
    gameCount: 7
  }
];

export const games: Game[] = [
  {
    id: '2048',
    title: '2048',
    description: 'Join numbers and get to the 2048 tile! A classic puzzle game.',
    coverImage: '/embed/2048/icon.png',
    category: 'puzzle',
    iframeUrl: '/embed/2048/index.html',
    featured: true,
    tags: ['numbers', 'puzzle', 'strategy'],
    rating: 4.8,
    plays: 25420,
    gameInfo: {
      overview: '2048 is a classic number puzzle game created by Gabriele Cirulli in 2014. The goal is to slide numbered tiles on a grid to combine them and create a tile with the number 2048. The game is simple to learn but difficult to master, requiring strategic thinking and forward planning to achieve high scores.',
      howToPlay: 'Use arrow keys (up, down, left, right) or WASD keys to move all number tiles. When two tiles with the same number touch, they merge into one larger number. After each move, a new tile (2 or 4) randomly appears in an empty spot. The goal is to create the 2048 tile, but you can continue playing to achieve higher scores.',
      tips: '1. Keep your highest number in a corner: Choose one corner (usually bottom-right) as the permanent position for your largest tile. 2. Build number chains: Try to arrange numbers in descending order to facilitate merging. 3. Avoid random moves: Consider the consequences of each move to avoid breaking your established structure. 4. Keep one row or column as a merging lane: Leave space for smaller numbers to combine. 5. Don\'t rush to merge: Sometimes waiting for a better opportunity is more beneficial than immediate merging.',
      faq: 'Q: What are the game over conditions? A: The game ends when the 4x4 grid is full and no more merges are possible. Q: What\'s the highest possible score? A: Theoretically unlimited, but continuing after reaching 2048 becomes extremely difficult. Q: Is there an undo function? A: The original game has no undo feature - each move must be carefully considered. Q: What\'s the probability of new tiles? A: 90% chance for a 2 tile, 10% chance for a 4 tile.'
    }
  },
  {
    id: '2drocketleague',
    title: '2D Rocket League',
    description: 'Play soccer with rocket-powered cars in this 2D version!',
    coverImage: '/embed/2drocketleague/unnamed.png',
    category: 'racing',
    iframeUrl: '/embed/2drocketleague/index.html',
    featured: true,
    tags: ['soccer', 'cars', 'multiplayer'],
    rating: 4.6,
    plays: 18930,
    gameInfo: {
      overview: '2D Rocket League is a 2D version of the classic 3D game Rocket League, maintaining the core gameplay of rocket-powered cars playing soccer. The game combines racing and soccer elements to create a unique and exciting competitive experience. Players control cars that can move, jump, and fly around the field while trying to score goals.',
      howToPlay: 'Use arrow keys to control car movement and spacebar to jump and fly. The objective is to hit the ball into the opponent\'s goal to score points. You can ram the ball, other players\' cars, and use rocket boosters for quick movement and aerial maneuvers. Matches are typically 3v3 or 1v1, with the team scoring the most goals within the time limit winning.',
      tips: '1. Master aerial control: Learn to move and rotate in the air, which is crucial for advanced gameplay. 2. Predict ball trajectory: Move to where the ball will be rather than chasing it. 3. Team coordination: Work with teammates and avoid all chasing the same ball. 4. Defensive awareness: Don\'t let everyone go on offense - maintain defensive balance. 5. Practice basic skills: Focus on accurate shooting, passing, and saves. 6. Manage rocket fuel: Use boosters wisely and conserve fuel for crucial moments.',
      faq: 'Q: How do I perform aerial hits? A: Jump and use arrow keys to adjust your car\'s angle, then hit the ball when positioned correctly in the air. Q: How does rocket fuel recharge? A: Fuel slowly regenerates automatically, or drive over boost pads on the field for quick refills. Q: Can I play with friends? A: This version supports local multiplayer, allowing friends to compete on the same computer. Q: Are there different vehicles? A: The game offers various car options, but they\'re mainly cosmetic differences with similar performance.'
    }
  },

  {
    id: 'adventure-capitalist',
    title: 'Adventure Capitalist',
    description: 'Build your business empire and become the ultimate capitalist!',
    coverImage: '/embed/adventure-capitalist/logo.webp',
    category: 'strategy',
    iframeUrl: '/embed/adventure-capitalist/index.html',
    featured: true,
    tags: ['business', 'strategy', 'idle'],
    rating: 4.5,
    plays: 22780,
    gameInfo: {
      overview: 'Adventure Capitalist is an idle business simulation game where players start with a small lemonade stand and gradually expand to various businesses like newspaper delivery, car wash services, and pizza shops. The core gameplay involves investing and upgrading to achieve exponential passive income growth, ultimately building a massive business empire. Your businesses continue operating and generating revenue even when offline.',
      howToPlay: 'Click on business icons to start earning money, then use your earnings to buy more businesses or upgrade existing ones. Hire managers to automate business operations so you can earn money continuously without clicking. As your income grows, unlock new business types. Invest in Angel Investors to gain permanent income multiplier bonuses. Strategically allocate funds across different businesses to maximize your overall profit rate.',
      tips: '1. Prioritize hiring managers: Automation is key - letting businesses run automatically is more efficient than manual clicking. 2. Balance investments: Don\'t invest in just one business type - diversified investments yield better overall returns. 3. Focus on upgrade milestones: Certain business quantities trigger massive profit multipliers. 4. Angel Investor strategy: Reset progress at the right time to gain Angel Investors for higher long-term profits. 5. Offline earnings: The game supports offline money generation, so check back regularly to collect profits and make upgrades.',
      faq: 'Q: When should I reset my progress? A: When Angel Investors can provide significant profit multipliers (usually 2x or more of current earnings). Q: How long can I earn money offline? A: The game supports extended offline earnings, but the rate gradually decreases over time. Q: How can I earn money quickly? A: Focus on upgrading the most profitable businesses and prioritize purchases that trigger milestone rewards. Q: What do managers do? A: Managers automate business operations, eliminating the need for manual clicking and are crucial for game progression.'
    }
  },
  {
    id: 'amongus',
    title: 'Among Us',
    description: 'Find the impostor among the crew in this social deduction game!',
    coverImage: '/embed/amongus/amgojs]_.png',
    category: 'casual',
    iframeUrl: '/embed/amongus/index.html',
    featured: true,
    tags: ['multiplayer', 'deduction', 'space'],
    rating: 4.9,
    plays: 35200,
    gameInfo: {
      overview: 'Among Us is a multiplayer social deduction game where players take on the roles of crewmates aboard a spaceship, with 1-3 players secretly being impostors. Crewmates must complete tasks and identify the impostors, while impostors must sabotage and eliminate crewmates without being discovered. The game combines cooperation, deception, and deduction elements to create a tense and exciting gaming experience.',
      howToPlay: 'As a Crewmate: Complete various tasks around the map, observe other players\' behavior, and call emergency meetings when you discover bodies or suspicious activity to discuss and vote. As an Impostor: Pretend to do tasks, look for opportunities to eliminate crewmates, sabotage facilities to create chaos, and mislead other players during meetings. The game uses voting to eliminate suspicious players - crewmates win by completing all tasks or finding all impostors.',
      tips: '1. Observe player behavior: Watch for who\'s faking tasks or always moving alone. 2. Remember task locations: Familiarize yourself with task locations and completion methods to identify players faking tasks. 3. Stick together: Moving with other players provides mutual alibis. 4. Watch the vents: Only impostors can use vents for quick movement. 5. Stay calm and analytical: Remain rational during meetings and vote based on evidence, not emotions. 6. Report strategically: Report bodies immediately when found, but also consider your own safety.',
      faq: 'Q: How can I distinguish crewmates from impostors? A: Observe task completion patterns, movement routes, and whether they use vents. Q: When should I call an emergency meeting? A: When you discover a body, witness suspicious behavior, or notice sabotage. Q: What special abilities do impostors have? A: They can use vents, sabotage facilities, and see other impostors\' identities. Q: How can I improve my win rate? A: Observe more, communicate effectively, build trust relationships, and learn to read other players\' behavioral patterns.'
    }
  },
  {
    id: 'awesometanks',
    title: 'Awesome Tanks',
    description: 'Control powerful tanks and destroy enemies in epic battles!',
    coverImage: '/embed/awesometanks/cover.svg',
    category: 'action',
    iframeUrl: '/embed/awesometanks/index.html',
    featured: true,
    tags: ['tanks', 'shooting', 'combat'],
    rating: 4.4,
    plays: 16650,
    gameInfo: {
      overview: 'Awesome Tanks is an action-packed tank combat game where players control powerful armored vehicles in intense battlefield scenarios. Navigate through various terrains while engaging enemy tanks, turrets, and obstacles. The game features multiple tank types, weapon upgrades, and challenging missions that test your tactical skills and reflexes.',
      howToPlay: 'Use WASD or arrow keys to move your tank around the battlefield. Use the mouse to aim and left-click to fire your main weapon. Destroy enemy tanks and defensive structures while avoiding their attacks. Collect power-ups and coins to upgrade your tank\'s armor, weapons, and speed. Complete objectives in each level to progress through the campaign.',
      tips: '1. Keep moving: Stationary tanks are easy targets - always stay mobile during combat. 2. Use cover: Hide behind walls and obstacles to avoid enemy fire while reloading. 3. Upgrade wisely: Balance your upgrades between firepower, armor, and speed based on your playstyle. 4. Target priority: Focus on the most dangerous enemies first, such as heavy tanks or turrets. 5. Collect everything: Don\'t miss power-ups and coins scattered around the battlefield. 6. Learn enemy patterns: Different enemy types have predictable attack patterns you can exploit.',
      faq: 'Q: How do I upgrade my tank? A: Collect coins during battles and spend them in the upgrade menu between levels. Q: What do the different power-ups do? A: Power-ups provide temporary benefits like increased damage, faster reload, or temporary shields. Q: Can I change tank types? A: Yes, you can unlock and select different tank models with unique stats and abilities. Q: How do I heal my tank? A: Look for health power-ups on the battlefield or complete levels to restore health. Q: Are there different game modes? A: The game features campaign mode with various mission types and objectives.'
    }
  },
  {
    id: 'badicecream',
    title: 'Bad Ice Cream',
    description: 'Collect fruits while avoiding enemies in this icy maze adventure!',
    coverImage: '/embed/badicecream/bad-ice-cream.png',
    category: 'casual',
    iframeUrl: '/embed/badicecream/index.html',
    tags: ['maze', 'fruits', 'ice'],
    rating: 4.3,
    plays: 17420,
    gameInfo: {
      overview: 'Bad Ice Cream is a fun maze-based arcade game where you play as an ice cream character navigating through frozen mazes. Your goal is to collect all the fruits in each level while avoiding or defeating various enemies. The unique twist is your ability to create and break ice blocks to modify the maze layout, creating new paths or blocking enemies.',
      howToPlay: 'Use arrow keys or WASD to move your ice cream character through the maze. Press the spacebar to create or break ice blocks in front of you. Collect all fruits in the level to advance to the next stage. Avoid touching enemies or use ice blocks strategically to trap or block them. Some enemies can break through ice, so plan your moves carefully.',
      tips: '1. Block enemies: Use ice blocks to trap enemies in corners or create barriers to protect yourself. 2. Plan your route: Think ahead about which fruits to collect first and how to navigate safely. 3. Emergency exits: Always have an escape route planned when collecting fruits near enemies. 4. Ice strategy: Remember that you can break your own ice blocks if you need to change your strategy. 5. Enemy behavior: Learn how different enemies move and react to your presence. 6. Time management: Some levels have time limits, so balance safety with speed.',
      faq: 'Q: Can I destroy enemy ice blocks? A: You can only create and destroy your own ice blocks, not those made by enemies. Q: What happens if I touch an enemy? A: You lose a life and restart the current level. Q: Are there different types of enemies? A: Yes, each enemy type has different movement patterns and abilities. Q: Can I play with friends? A: The game supports local multiplayer with up to 2 players. Q: How many levels are there? A: The game features multiple worlds with several levels each, increasing in difficulty.'
    }
  },
  {
    id: 'badicecream2',
    title: 'Bad Ice Cream 2',
    description: 'The sequel to the popular ice cream maze game with new levels!',
    coverImage: '/embed/badicecream2/bad-ice-cream-2.png',
    category: 'casual',
    iframeUrl: '/embed/badicecream2/index.html',
    tags: ['maze', 'sequel', 'ice'],
    rating: 4.4,
    plays: 19300,
    gameInfo: {
      overview: 'Bad Ice Cream 2 continues the frozen maze adventure with new challenges, enemies, and mechanics. This sequel introduces fresh fruit types, more complex maze layouts, and additional enemy varieties. The core ice-block manipulation gameplay remains, but with enhanced level design and new strategic elements that make each stage more engaging.',
      howToPlay: 'Control your ice cream character using arrow keys or WASD. Create ice blocks with the spacebar to block enemies or create new paths. Collect all fruits in each level while avoiding enemies. The sequel introduces new mechanics like moving platforms, breakable walls, and special fruit types that require different collection strategies.',
      tips: '1. Master new mechanics: Learn how moving platforms and breakable walls affect your strategy. 2. Fruit prioritization: Some fruits are harder to reach - plan your collection order carefully. 3. Advanced blocking: Use ice blocks in combination with level geometry for better enemy control. 4. Timing is key: Some levels require precise timing with moving elements. 5. Cooperative play: In multiplayer mode, coordinate with your partner to solve puzzles efficiently. 6. Explore thoroughly: Some levels have hidden areas or alternative routes.',
      faq: 'Q: What\'s new in Bad Ice Cream 2? A: New enemies, fruits, level mechanics, and more complex maze designs. Q: Can I still play solo? A: Yes, the game supports both single-player and local co-op modes. Q: Are the controls the same? A: Yes, the basic controls remain the same as the original game. Q: Is it harder than the first game? A: Generally yes, with more complex puzzles and challenging enemy patterns. Q: How many new levels are there? A: The sequel features entirely new level sets with increased difficulty progression.'
    }
  },
  {
    id: 'badicecream3',
    title: 'Bad Ice Cream 3',
    description: 'The third installment with even more challenging ice cream adventures!',
    coverImage: '/embed/badicecream3/bad-ice-cream-3.png',
    category: 'casual',
    iframeUrl: '/embed/badicecream3/index.html',
    tags: ['maze', 'challenge', 'ice'],
    rating: 4.5,
    plays: 21800,
    gameInfo: {
      overview: 'Bad Ice Cream 3 is the most challenging entry in the series, featuring the most complex maze designs and sophisticated enemy AI. This installment introduces multi-layered puzzles, environmental hazards, and advanced ice manipulation mechanics. Players must master all previous skills while adapting to new challenges that test both strategy and reflexes.',
      howToPlay: 'Use the same core controls as previous games: arrow keys/WASD for movement and spacebar for ice block creation/destruction. Navigate increasingly complex mazes while collecting fruits and avoiding enemies. New mechanics include ice slides, pressure plates, and multi-stage puzzles that require sequential actions to complete.',
      tips: '1. Study the layout: Take time to understand complex maze structures before moving. 2. Sequential thinking: Many puzzles require actions in specific orders - plan ahead. 3. Environmental awareness: Use new environmental elements like slides and switches strategically. 4. Advanced enemy patterns: Enemies have more sophisticated AI - learn their new behaviors. 5. Patience pays off: Don\'t rush through levels - careful planning prevents mistakes. 6. Practice makes perfect: Some levels require multiple attempts to master the timing.',
      faq: 'Q: Is this the hardest Bad Ice Cream game? A: Yes, it features the most challenging puzzles and enemy patterns in the series. Q: Are there new enemy types? A: Yes, several new enemy types with unique movement and attack patterns. Q: Can beginners play this game? A: It\'s recommended to play the previous games first to learn the basics. Q: How long does it take to complete? A: Completion time varies greatly depending on skill level and puzzle-solving ability. Q: Are there any new power-ups? A: The game focuses more on environmental mechanics than traditional power-ups.'
    }
  },
  {
    id: 'basketball-stars',
    title: 'Basketball Stars',
    description: 'Show off your basketball skills in this exciting sports game!',
    coverImage: '/embed/basketball-stars/icon.png',
    category: 'casual',
    iframeUrl: '/embed/basketball-stars/index.html',
    featured: true,
    tags: ['basketball', 'sports', 'skills'],
    rating: 4.6,
    plays: 24300,
    gameInfo: {
      overview: 'Basketball Stars is an exciting sports game that captures the essence of street basketball. Players can engage in one-on-one matches, showcasing their dribbling, shooting, and defensive skills. The game features realistic physics, smooth animations, and various game modes that challenge players to become the ultimate basketball champion.',
      howToPlay: 'Use arrow keys or WASD to move your player around the court. Press the spacebar or designated keys to shoot, steal, and perform special moves. Time your shots carefully by releasing at the peak of your jump for better accuracy. Defend by staying close to your opponent and timing your steal attempts. Score more points than your opponent within the time limit to win.',
      tips: '1. Perfect your timing: Release shots at the peak of your jump for maximum accuracy. 2. Master defense: Stay close to your opponent and anticipate their moves to steal the ball. 3. Use special moves: Learn and utilize special dribbling moves to confuse opponents. 4. Court positioning: Position yourself strategically for both offense and defense. 5. Practice different shots: Master various shot types including three-pointers and layups. 6. Watch the clock: Manage your time effectively, especially when trailing in points.',
      faq: 'Q: Can I play against friends? A: Yes, the game supports local multiplayer for head-to-head matches. Q: Are there different courts? A: The game features various court designs and environments. Q: How do I perform special moves? A: Special moves are executed through specific key combinations during gameplay. Q: Is there a tournament mode? A: Yes, you can compete in tournaments to become the basketball champion. Q: Can I customize my player? A: The game offers various customization options for your basketball player.'
    }
  },
  {
    id: 'bobtherobber2',
    title: 'Bob The Robber 2',
    description: 'Help Bob steal treasures while avoiding guards and security!',
    coverImage: '/embed/bobtherobber2/icon.png',
    category: 'adventure',
    iframeUrl: '/embed/bobtherobber2/index.html',
    tags: ['stealth', 'treasure', 'adventure'],
    rating: 4.7,
    plays: 16500,
    gameInfo: {
      overview: 'Bob The Robber 2 is a stealth-based adventure game where you help the gentleman thief Bob navigate through various buildings to steal valuable treasures. The game combines puzzle-solving with stealth mechanics, requiring players to avoid security cameras, guards, and alarm systems while collecting loot and completing objectives.',
      howToPlay: 'Use arrow keys or WASD to move Bob through each level. Interact with objects using the spacebar or mouse clicks. Hide in shadows to avoid detection by guards and cameras. Pick locks by following on-screen prompts, disable security systems, and collect treasures. Avoid making noise or being seen, as this will trigger alarms and alert guards.',
      tips: '1. Stay in shadows: Use dark areas to hide from guards and security cameras. 2. Time your movements: Wait for guards to turn away or move to different areas. 3. Disable cameras: Look for control panels to temporarily disable security cameras. 4. Listen for audio cues: Sound effects indicate when guards are nearby or suspicious. 5. Plan your route: Study each level layout before making your move. 6. Be patient: Rushing often leads to detection - take your time to observe patterns.',
      faq: 'Q: What happens if I get caught? A: Getting caught will restart the current level, so stealth is essential. Q: Can I fight the guards? A: No, Bob relies on stealth and cunning rather than combat. Q: Are there different types of security? A: Yes, including guards, cameras, laser sensors, and alarm systems. Q: How do I pick locks? A: Follow the on-screen prompts and timing indicators to successfully pick locks. Q: Can I replay levels? A: Yes, you can replay levels to improve your performance and find missed treasures.'
    }
  },
  {
    id: 'clickerheroes',
    title: 'Clicker Heroes',
    description: 'Click to defeat monsters and hire heroes in this idle RPG!',
    coverImage: '/embed/clickerheroes/clicker-heroes.png',
    category: 'casual',
    iframeUrl: '/embed/clickerheroes/index.html',
    tags: ['clicker', 'idle', 'rpg'],
    rating: 4.4,
    plays: 28970,
    gameInfo: {
      overview: 'Clicker Heroes is an incremental idle RPG where you start by clicking to defeat monsters and gradually build an army of heroes to fight for you. The game features exponential progression, where each milestone unlocks new heroes, abilities, and prestige systems. It\'s designed to be played both actively and passively, with heroes continuing to fight even when you\'re away.',
      howToPlay: 'Click on monsters to deal damage and defeat them for gold. Use gold to hire heroes who will automatically attack monsters for you. Upgrade your heroes to increase their damage output. Progress through different zones with increasingly powerful monsters. Use special abilities like critical strikes and gold bonuses to boost your progress. Eventually, you can ascend to gain Ancient Souls for permanent bonuses.',
      tips: '1. Balance clicking and idle: Early game requires more clicking, but heroes become more important later. 2. Upgrade efficiently: Focus on your highest DPS hero rather than spreading upgrades evenly. 3. Use abilities wisely: Save powerful abilities for boss fights or when pushing new zones. 4. Don\'t neglect ancients: Ancient upgrades provide massive long-term benefits. 5. Ascend strategically: Ascend when progress slows significantly to gain Hero Souls. 6. Offline progress: The game continues progressing while you\'re away, so check back regularly.',
      faq: 'Q: When should I hire new heroes? A: Hire new heroes when they provide more DPS than upgrading existing ones. Q: What are Hero Souls? A: Currency gained from ascending that provides permanent damage bonuses. Q: Should I keep clicking forever? A: No, eventually heroes will do most of the work automatically. Q: What are Ancients? A: Powerful upgrades purchased with Hero Souls that provide various bonuses. Q: How does offline progress work? A: Heroes continue fighting for a limited time while you\'re offline, earning gold and progress.'
    }
  },
  {
    id: 'crossyroad',
    title: 'Crossy Road',
    description: 'Cross busy roads and rivers in this endless arcade adventure!',
    coverImage: '/embed/crossyroad/crossyroad.png',
    category: 'casual',
    iframeUrl: '/embed/crossyroad/index.html',
    tags: ['arcade', 'endless', 'crossing'],
    rating: 4.8,
    plays: 32150,
    gameInfo: {
      overview: 'Crossy Road is an endless arcade game inspired by the classic Frogger. Players guide various characters across busy roads, train tracks, and rivers while avoiding cars, trains, and other obstacles. The game features charming voxel-style graphics, unlockable characters, and addictive gameplay that challenges you to go as far as possible.',
      howToPlay: 'Tap or use arrow keys to move your character forward, backward, left, or right. Cross roads by timing your movements between moving cars and trucks. Jump on logs and lily pads to cross rivers safely. Avoid staying in one place too long, as the screen will scroll forward automatically. Collect coins to unlock new characters with unique appearances and sometimes special abilities.',
      tips: '1. Look ahead: Always scan the upcoming obstacles before making your next move. 2. Don\'t rush: Take your time to find safe gaps in traffic rather than rushing forward. 3. Use safe zones: Rest on sidewalks and safe areas to plan your next moves. 4. River strategy: On rivers, jump from log to log or use lily pads, but watch for moving platforms. 5. Character variety: Try different characters - some have unique animations or special features. 6. Stay centered: Try to stay in the middle of the screen to have more movement options.',
      faq: 'Q: Is there an end to the game? A: No, Crossy Road is an endless game where the goal is to achieve the highest score possible. Q: How do I unlock new characters? A: Collect coins during gameplay or through daily rewards to unlock new characters. Q: What happens if I get hit? A: Getting hit by a vehicle or falling in water ends the game and you start over. Q: Are there different environments? A: Yes, the game features various themes including roads, rivers, train tracks, and more. Q: Can I play offline? A: Yes, the basic game can be played without an internet connection.'
    }
  },
  {
    id: 'cuttherope-holiday',
    title: 'Cut The Rope Holiday',
    description: 'Feed candy to Om Nom by cutting ropes in this holiday edition!',
    coverImage: '/embed/cuttherope-holiday/Holiday_Gift.webp',
    category: 'puzzle',
    iframeUrl: '/embed/cuttherope-holiday/index.html',
    featured: true,
    tags: ['physics', 'candy', 'holiday'],
    rating: 4.7,
    plays: 18420,
    gameInfo: {
      overview: 'Cut The Rope Holiday is a festive physics-based puzzle game featuring the beloved character Om Nom. In this holiday-themed edition, players must cut ropes strategically to deliver candy to Om Nom while collecting stars and avoiding obstacles. The game combines intuitive mechanics with increasingly complex puzzles set in a cheerful holiday atmosphere.',
      howToPlay: 'Click and drag to cut ropes holding the candy. Use physics to swing the candy toward Om Nom\'s mouth. Collect up to three stars in each level by making the candy pass through them before reaching Om Nom. Interact with various objects like bubbles, spikes, and air cushions that affect the candy\'s movement. Time your cuts carefully to achieve the perfect trajectory.',
      tips: '1. Plan your cuts: Study the level layout before cutting any ropes to plan the optimal sequence. 2. Star collection: Try to collect all three stars in each level for maximum points. 3. Physics mastery: Understand how momentum and gravity affect the candy\'s movement. 4. Timing is crucial: Some levels require precise timing to avoid obstacles or hit targets. 5. Use objects wisely: Bubbles, air cushions, and other interactive elements can help guide the candy. 6. Experiment freely: Don\'t be afraid to retry levels with different cutting strategies.',
      faq: 'Q: What happens if Om Nom doesn\'t get the candy? A: You\'ll need to restart the level and try a different approach. Q: Are the stars necessary to progress? A: Stars aren\'t required to advance but collecting them unlocks achievements and bonuses. Q: Can I replay levels? A: Yes, you can replay any completed level to improve your star rating. Q: What makes this different from the original Cut The Rope? A: This holiday edition features festive themes, decorations, and some unique holiday-themed mechanics. Q: Are there hints available? A: The game provides visual cues and some levels have hint systems to help with difficult puzzles.'
    }
  },
  {
    id: 'doodlejump',
    title: 'Doodle Jump',
    description: 'Jump as high as you can on platforms in this classic mobile game!',
    coverImage: '/embed/doodlejump/icon.png',
    category: 'casual',
    iframeUrl: '/embed/doodlejump/index.html',
    tags: ['jumping', 'platforms', 'classic'],
    rating: 4.6,
    plays: 27930,
    gameInfo: {
      overview: 'Doodle Jump is a classic endless jumping game that became one of the most popular mobile games of all time. Players control a cute doodle character that automatically bounces on platforms, with the goal of jumping as high as possible. The game features simple one-touch controls, charming hand-drawn graphics, and addictive gameplay that\'s easy to learn but challenging to master.',
      howToPlay: 'Tilt your device or use arrow keys to move the Doodler left and right while it automatically jumps upward. Land on platforms to continue climbing higher. Avoid monsters and obstacles that can end your game. Collect power-ups like springs, jetpacks, and propeller hats for extra height boosts. Shoot at monsters by tapping or clicking to clear your path upward.',
      tips: '1. Stay centered: Try to keep the Doodler near the center of the screen for more platform options. 2. Look ahead: Plan your next few jumps by looking at upcoming platforms. 3. Use walls: The Doodler can wrap around screen edges - use this to reach distant platforms. 4. Power-up priority: Springs and jetpacks provide the biggest height boosts. 5. Monster strategy: Shoot monsters from below or land on them from above to defeat them. 6. Don\'t panic: Falling platforms and moving platforms require calm, precise movements.',
      faq: 'Q: Is there an end to the game? A: No, Doodle Jump is endless - the goal is to achieve the highest score possible. Q: What do the different platforms do? A: Green platforms are normal, brown ones break, blue ones move, and white ones disappear. Q: How do I defeat monsters? A: Jump on them from above or shoot them by tapping/clicking. Q: What happens if I fall? A: Falling off the bottom of the screen ends the game. Q: Are there different themes? A: Yes, the game features various themed environments with unique graphics and obstacles.'
    }
  },
  {
    id: 'fireboywatergirl',
    title: 'Fireboy and Watergirl',
    description: 'Control both characters to solve puzzles in the Forest Temple!',
    coverImage: '/embed/fireboywatergirl/icon.png',
    category: 'puzzle',
    iframeUrl: '/embed/fireboywatergirl/index.html',
    featured: true,
    tags: ['cooperation', 'puzzle', 'temple'],
    rating: 4.9,
    plays: 45150,
    gameInfo: {
      overview: 'Fireboy and Watergirl is a classic cooperative puzzle game series where players control two characters simultaneously, using their unique elemental abilities to solve various puzzles in the Forest Temple. Fireboy can walk through lava but is harmed by water, while Watergirl can pass through water but is damaged by fire. Both characters must work together to collect gems and reach the exit.',
      howToPlay: 'Use WASD keys to control Watergirl\'s movement and jumping, and arrow keys to control Fireboy\'s movement and jumping. Both characters must avoid elements harmful to them: Fireboy cannot touch water, Watergirl cannot touch fire, and neither can touch green poison. Collect colored gems (red for Fireboy, blue for Watergirl), activate switches and buttons to open passages, and guide both characters to their respective exit doors.',
      tips: '1. Teamwork is essential: Many puzzles require both characters to act simultaneously, with one pressing switches while the other passes through. 2. Use elemental advantages: Let Fireboy traverse fire paths and Watergirl navigate water routes to avoid damage. 3. Master timing: Some mechanisms require precise timing coordination - practice synchronized movements. 4. Scout ahead: Have one character explore safe paths while the other follows. 5. Collection strategy: Plan your route carefully to ensure you collect all gems. 6. Patient problem-solving: Complex levels require multiple attempts to find the correct solution.',
      faq: 'Q: Can I play solo? A: Yes, one player can control both characters simultaneously, though cooperative play with a friend is more enjoyable. Q: What happens when a character dies? A: Characters restart the current level when they touch harmful elements. Q: How do I open doors? A: Usually requires collecting all gems and activating corresponding mechanisms. Q: How many levels are there? A: The Forest Temple version contains 32 levels with gradually increasing difficulty. Q: What\'s different about other versions? A: Each version features unique temple themes and new gameplay mechanics.'
    }
  },
  {
    id: 'fireboywatergirl2',
    title: 'Fireboy and Watergirl 2',
    description: 'The duo returns in the Light Temple with new challenges!',
    coverImage: '/embed/fireboywatergirl2/icon-60x60.png',
    category: 'puzzle',
    iframeUrl: '/embed/fireboywatergirl2/index.html',
    featured: true,
    tags: ['cooperation', 'light', 'temple'],
    rating: 4.8,
    plays: 38780,
    gameInfo: {
      overview: 'Fireboy and Watergirl 2: Light Temple introduces new light-based puzzle mechanics to the beloved cooperative series. Players must manipulate light beams, mirrors, and prisms to solve increasingly complex puzzles while maintaining the core gameplay of controlling both characters with their unique elemental properties. The Light Temple features 40 new levels with innovative light-reflection challenges.',
      howToPlay: 'Use WASD to control Watergirl and arrow keys to control Fireboy. Navigate through the Light Temple while avoiding hazards specific to each character. New mechanics include light beams that must be directed using mirrors and prisms to activate switches and open doors. Collect colored gems and reach the exit doors simultaneously to complete each level.',
      tips: '1. Light beam mastery: Learn how mirrors reflect light at 90-degree angles and how prisms split white light into colors. 2. Coordinate movements: Many puzzles require both characters to be in specific positions to direct light properly. 3. Sequential activation: Some switches must be activated in the correct order using timed light beam manipulation. 4. Character positioning: Use one character to hold a mirror while the other collects gems or activates switches. 5. Patience with light puzzles: Take time to trace light paths before moving characters. 6. Practice cooperation: The light mechanics require even more coordination between the two characters.',
      faq: 'Q: How do the light mechanics work? A: Direct light beams using moveable mirrors and prisms to activate light-sensitive switches and doors. Q: Are the basic rules the same? A: Yes, Fireboy still can\'t touch water, Watergirl can\'t touch fire, and both avoid green goo. Q: Can I play solo? A: Yes, but it\'s designed for two players and requires controlling both characters simultaneously when playing alone. Q: How many levels are there? A: The Light Temple features 40 levels with increasing complexity. Q: What\'s new compared to the first game? A: Light beam puzzles, mirrors, prisms, and light-activated mechanisms are the main new features.'
    }
  },
  {
    id: 'fireboywatergirl3',
    title: 'Fireboy and Watergirl 3',
    description: 'Explore the Ice Temple with freezing new puzzle mechanics!',
    coverImage: '/embed/fireboywatergirl3/icon.png',
    category: 'puzzle',
    iframeUrl: '/embed/fireboywatergirl3/index.html',
    featured: true,
    tags: ['cooperation', 'ice', 'temple'],
    rating: 4.7,
    plays: 35200,
    gameInfo: {
      overview: 'Fireboy and Watergirl 3: Ice Temple brings the duo to a frozen environment filled with slippery surfaces, ice blocks, and temperature-based puzzles. This installment introduces unique ice mechanics where characters slide on frozen surfaces and must use thermal properties to solve puzzles. The Ice Temple challenges players with 36 levels of increasingly complex frozen puzzles.',
      howToPlay: 'Control both characters using WASD for Watergirl and arrow keys for Fireboy. Navigate the slippery ice surfaces carefully, as characters will slide until they hit an obstacle. Use Fireboy\'s heat to melt ice blocks and Watergirl\'s cooling effect to freeze water into walkable ice platforms. Collect gems and reach the exit doors while managing the unique ice physics.',
      tips: '1. Master ice physics: Characters slide on ice until they hit something - plan your movements accordingly. 2. Use thermal abilities: Fireboy can melt ice barriers while Watergirl can freeze water into platforms. 3. Momentum control: Use walls and obstacles to stop sliding at the right positions. 4. Temperature strategy: Some puzzles require alternating between melting and freezing elements. 5. Sliding coordination: Time your movements so both characters slide into correct positions simultaneously. 6. Ice block puzzles: Push and slide ice blocks to create paths or activate pressure switches.',
      faq: 'Q: How do the ice mechanics work? A: Characters slide on ice surfaces until they hit an obstacle, and thermal abilities affect ice and water. Q: Can Fireboy melt all ice? A: Fireboy can melt certain ice blocks and barriers but not the main ice floor surfaces. Q: How does Watergirl freeze water? A: Watergirl can turn water pools into solid ice platforms that both characters can walk on. Q: Is it harder than previous games? A: The ice physics add complexity, making it challenging but rewarding to master. Q: How many levels are in the Ice Temple? A: There are 36 levels with progressively more complex ice-based puzzles.'
    }
  },
  {
    id: 'fireboywatergirl4',
    title: 'Fireboy and Watergirl 4',
    description: 'Navigate the Crystal Temple with teleportation portals!',
    coverImage: '/embed/fireboywatergirl4/icon-60x60.png',
    category: 'puzzle',
    iframeUrl: '/embed/fireboywatergirl4/index.html',
    featured: true,
    tags: ['cooperation', 'crystal', 'portals'],
    rating: 4.8,
    plays: 41650,
    gameInfo: {
      overview: 'Fireboy and Watergirl 4: Crystal Temple introduces teleportation portals and crystal-powered mechanisms to the series. This installment features the most complex puzzles yet, with magical portals that transport characters instantly across levels and crystal switches that control various temple mechanisms. The Crystal Temple offers 38 levels of mind-bending portal puzzles.',
      howToPlay: 'Use the standard controls: WASD for Watergirl and arrow keys for Fireboy. Step into colored portals to teleport to matching portals elsewhere in the level. Activate crystal switches to control doors, platforms, and other mechanisms. Plan your portal usage carefully, as some portals are one-way or have limited uses. Coordinate both characters through complex portal sequences.',
      tips: '1. Portal planning: Study portal connections before using them - some are one-way or limited use. 2. Crystal switch timing: Some crystal mechanisms are temporary, requiring quick movement after activation. 3. Portal coordination: Use portals to position characters in different areas simultaneously. 4. Sequential puzzles: Many levels require activating switches in specific orders using portal travel. 5. Emergency portals: Some portals can be used as escape routes if you get stuck. 6. Character-specific portals: Some portals may only work for specific characters based on their elemental properties.',
      faq: 'Q: How do the portals work? A: Step into a colored portal to instantly teleport to the matching colored portal elsewhere in the level. Q: Are there different types of portals? A: Yes, some portals are one-way, some have limited uses, and some may be character-specific. Q: What do crystal switches do? A: Crystal switches control various temple mechanisms like doors, moving platforms, and barriers. Q: Can both characters use the same portal? A: Usually yes, but some portals may have restrictions or limited uses. Q: Is this the hardest Fireboy and Watergirl game? A: Many consider it the most challenging due to the complex portal mechanics and puzzle design.'
    }
  }
];

// Additional games for expanded collection
export const additionalGames: Game[] = [
  {
    id: 'flippyfish',
    title: 'Flippy Fish',
    description: 'Navigate through obstacles in this Flappy Bird inspired game!',
    coverImage: '/embed/flippyfish/icon.png',
    category: 'casual',
    iframeUrl: '/embed/flippyfish/index.html',
    tags: ['flying', 'obstacles', 'arcade'],
    rating: 4.3,
    plays: 23200,
    gameInfo: {
      overview: 'Flippy Fish is an addictive arcade game inspired by the popular Flappy Bird mechanics. Players control a fish that must navigate through underwater obstacles by tapping to swim upward and letting gravity pull it down. The game features simple one-touch controls, colorful underwater graphics, and increasingly challenging obstacle patterns that test your timing and reflexes.',
      howToPlay: 'Tap the screen or press the spacebar to make the fish swim upward. Release to let the fish sink down due to gravity. Navigate through gaps between obstacles without touching them. The fish moves automatically from left to right, so you only need to control the vertical movement. Try to pass through as many obstacles as possible to achieve a high score.',
      tips: '1. Find your rhythm: Develop a consistent tapping pattern to maintain smooth flight control. 2. Look ahead: Always focus on the next obstacle rather than your current position. 3. Stay centered: Try to fly through the middle of gaps when possible for maximum safety margin. 4. Practice patience: Don\'t rush - smooth, controlled movements are better than frantic tapping. 5. Learn the physics: Understand how many taps it takes to rise and how quickly you fall. 6. Stay calm: The game gets faster as you progress, but maintaining composure is key to high scores.',
      faq: 'Q: How do I control the fish? A: Simply tap to swim up, release to sink down - it\'s all about timing your taps. Q: Is there an end to the game? A: No, it\'s an endless game where the goal is to achieve the highest score possible. Q: Do obstacles get harder? A: Yes, the game gradually increases in speed and obstacle complexity as you progress. Q: Can I pause the game? A: Most versions don\'t have a pause feature since it\'s designed for quick, intense sessions. Q: What happens when I hit an obstacle? A: The game ends immediately and you\'ll need to start over from the beginning.'
    }
  },
  {
    id: 'fruitninja',
    title: 'Fruit Ninja',
    description: 'Slice fruits and avoid bombs in this classic arcade game!',
    coverImage: '/embed/fruitninja/FruitNinjaTeaser.jpg',
    category: 'casual',
    iframeUrl: '/embed/fruitninja/index.html',
    featured: true,
    tags: ['slicing', 'fruits', 'arcade'],
    rating: 4.8,
    plays: 39800,
    gameInfo: {
      overview: 'Fruit Ninja is a classic casual fruit-slicing game originally developed by Halfbrick Studios. Players take on the role of a ninja, using finger swipes across the screen to slice flying fruits while avoiding bombs. The game became a mobile gaming classic due to its simple intuitive controls, satisfying slicing mechanics, and variety of colorful fruits.',
      howToPlay: 'Use your mouse to swipe across the screen and slice flying fruits. Cut as many fruits as possible to earn points, with different fruits having different point values. Avoid slicing black bombs, as hitting them ends the game immediately. Slicing multiple fruits in one swipe creates combo bonuses. Special fruits like pomegranates explode into multiple smaller fruits when sliced. The game features multiple modes: Classic, Time Attack, and Zen mode.',
      tips: '1. Combo techniques: Slice multiple fruits in one swipe to earn higher scores and combo bonuses. 2. Avoid bombs: Carefully observe flying objects - never touch the black bombs. 3. Special fruits: Prioritize slicing pomegranates and other special fruits for extra rewards. 4. Smooth gestures: Keep your swiping motions fluid and continuous rather than choppy cuts. 5. Use the full screen: Utilize the entire screen space instead of limiting yourself to the center area. 6. Stay calm under pressure: When fruits appear densely, remain calm and strategically choose your slicing paths.',
      faq: 'Q: What happens if I hit a bomb? A: The game ends immediately and you must restart. Q: How do I achieve high scores? A: Focus on combos, slice special fruits, and avoid missing fruits. Q: What are the differences between game modes? A: Classic mode has limited lives, Time mode gives you 60 seconds, and Zen mode has no bombs but is time-limited. Q: Is there a penalty for missing fruits? A: In Classic mode, missing fruits costs you lives. Q: Are there special power-ups? A: The game features special effects like freeze time and double points that can be activated.'
    }
  },
  {
    id: 'gamemaker',
    title: 'Game Maker',
    description: 'Create your own games with this visual programming tool!',
    coverImage: '/embed/gamemaker/images.jpeg',
    category: 'puzzle',
    iframeUrl: '/embed/gamemaker/index.html',
    tags: ['programming', 'creative', 'educational'],
    rating: 4.2,
    plays: 11400,
    gameInfo: {
      overview: 'Game Maker is an educational and creative tool that introduces players to basic game development concepts through visual programming. Users can create simple games by dragging and dropping elements, setting up basic logic, and designing levels. It\'s perfect for beginners who want to understand how games work or experiment with game creation without complex coding knowledge.',
      howToPlay: 'Use the mouse to drag and drop game elements like characters, obstacles, and power-ups onto the game canvas. Set up basic rules and behaviors by connecting elements with simple logic blocks. Test your creation by clicking the play button to see how your game works. Modify and iterate on your design based on how it plays. Save and share your creations with others.',
      tips: '1. Start simple: Begin with basic mechanics before adding complex features to your game. 2. Test frequently: Play your game often during development to catch issues early. 3. Learn from examples: Study existing game templates to understand common patterns and mechanics. 4. Experiment freely: Don\'t be afraid to try different combinations of elements and rules. 5. Focus on fun: Make sure your game is enjoyable to play, not just technically impressive. 6. Iterate and improve: Keep refining your game based on feedback and testing.',
      faq: 'Q: Do I need programming experience? A: No, the tool uses visual programming that\'s beginner-friendly and doesn\'t require coding knowledge. Q: Can I save my games? A: Yes, most versions allow you to save your creations locally or share them online. Q: Are there tutorials available? A: The tool typically includes built-in tutorials and examples to help you get started. Q: What types of games can I make? A: You can create simple platformers, puzzle games, arcade-style games, and other basic game types. Q: Can others play my games? A: Yes, you can usually share your completed games for others to play and enjoy.'
    }
  },
  {
    id: 'geometrydash',
    title: 'Geometry Dash',
    description: 'Jump and fly through dangerous passages in this rhythm-based game!',
    coverImage: '/embed/geometrydash/icon.png',
    category: 'action',
    iframeUrl: '/embed/geometrydash/index.html',
    featured: true,
    tags: ['rhythm', 'jumping', 'music'],
    rating: 4.7,
    plays: 31900,
    gameInfo: {
      overview: 'Geometry Dash is a rhythm-based action platformer developed by Robert Topala. Players control a geometric character that jumps and flies through levels filled with spikes and obstacles, following the beat of electronic music. The game is renowned for its precise control requirements, energetic electronic soundtrack, and extremely challenging level design that demands excellent reflexes and rhythm sense.',
      howToPlay: 'Click the screen or press the spacebar to make your character jump, avoiding spikes, saw blades, and other deadly obstacles. The character moves forward automatically - you only control the jumping timing. Different portals change the character\'s movement mode: ship mode requires controlling up/down flight, ball mode can reverse gravity, and UFO mode allows brief flight bursts. Following the music beat helps with jump timing.',
      tips: '1. Follow the beat: Music beats usually sync with obstacle rhythms - following the music helps with completion. 2. Memorize levels: Practice repeatedly to remember obstacle positions and jump timing. 3. Use practice mode: Utilize practice mode to familiarize yourself with difficult sections. 4. Stay calm: Don\'t get frustrated after failures - analyze what went wrong. 5. Watch videos: Learn completion techniques and routes from other players. 6. Start simple: Complete easier levels first to build confidence and foundational skills.',
      faq: 'Q: Why is this so difficult? A: The game is intentionally designed to be highly challenging, requiring precise timing and extensive practice. Q: Are there checkpoints? A: Normal mode has no checkpoints, but practice mode allows checkpoint placement. Q: How do I unlock new levels? A: Complete previous levels or collect enough stars to unlock new ones. Q: Can I create my own levels? A: The full version includes a level editor feature. Q: Is the music important? A: Very important - music beats are closely tied to gameplay rhythm, so sound is recommended.'
    }
  },
  {
    id: 'hillclimbracing2',
    title: 'Hill Climb Racing 2',
    description: 'Race uphill in various vehicles and collect coins!',
    coverImage: '/embed/hillclimbracing2/cover.svg',
    category: 'racing',
    iframeUrl: '/embed/hillclimbracing2/index.html',
    tags: ['racing', 'physics', 'coins'],
    rating: 4.5,
    plays: 28700,
    gameInfo: {
      overview: 'Hill Climb Racing 2 is a physics-based driving game where players navigate various vehicles through challenging uphill terrain. The game features realistic physics simulation, multiple vehicle types, and diverse environments. Players must balance speed with control while collecting coins and fuel to progress through increasingly difficult courses filled with hills, valleys, and obstacles.',
      howToPlay: 'Use the right arrow key or accelerator button to speed up, and the left arrow key or brake button to slow down or reverse. Balance your vehicle using both controls to maintain stability on steep hills and during jumps. Collect coins scattered throughout the course and fuel canisters to keep your vehicle running. Reach the finish line or travel as far as possible before running out of fuel.',
      tips: '1. Balance is crucial: Use both gas and brake to maintain vehicle stability on steep terrain. 2. Momentum management: Build up speed on downhills to help climb the next uphill section. 3. Fuel conservation: Don\'t constantly accelerate - coast when possible to save fuel. 4. Landing technique: Try to land wheels-first after jumps to avoid flipping over. 5. Coin collection: Plan your route to collect coins without compromising vehicle stability. 6. Vehicle choice: Different vehicles have different strengths - choose based on the terrain type.',
      faq: 'Q: How do I avoid flipping over? A: Use the brake to tilt your vehicle backward and gas to tilt forward for better landing control. Q: What happens when I run out of fuel? A: The game ends, so collect fuel canisters and manage your acceleration carefully. Q: Can I upgrade my vehicles? A: Yes, use collected coins to upgrade engine power, suspension, tires, and fuel capacity. Q: Are there different vehicles? A: Yes, the game features various vehicles like cars, trucks, motorcycles, and special vehicles with unique characteristics. Q: How do I get better scores? A: Travel farther distances, collect more coins, and perform stunts for bonus points.'
    }
  },
  {
    id: 'jetpackjoyride',
    title: 'Jetpack Joyride',
    description: 'Fly with a jetpack and avoid obstacles in this endless runner!',
    coverImage: '/embed/jetpackjoyride/logo.jpeg',
    category: 'action',
    iframeUrl: '/embed/jetpackjoyride/index.html',
    featured: true,
    tags: ['jetpack', 'endless', 'flying'],
    rating: 4.8,
    plays: 36300,
    gameInfo: {
      overview: 'Jetpack Joyride is an endless side-scrolling action game where you play as Barry Steakfries, who breaks into a secret laboratory and steals an experimental jetpack. The game features fast-paced flying action, various vehicles, power-ups, and missions. With its smooth gameplay, humorous style, and addictive progression system, it became one of the most popular mobile games.',
      howToPlay: 'Tap and hold to activate the jetpack and fly upward, release to fall down due to gravity. Navigate through the laboratory while avoiding obstacles like lasers, missiles, and electric barriers. Collect coins scattered throughout the levels to purchase upgrades and cosmetics. Complete missions to earn stars and unlock new content. Pick up vehicles like the Crazy Freaking Teleporter and Profit Bird for special abilities.',
      tips: '1. Master the rhythm: Learn the tap-and-release rhythm to maintain smooth flight control. 2. Collect coins: Prioritize coin collection to afford important upgrades and power-ups. 3. Mission focus: Pay attention to current missions as they provide valuable rewards. 4. Vehicle strategy: Each vehicle has unique abilities - learn when to use them effectively. 5. Upgrade wisely: Invest in upgrades that match your playstyle and current needs. 6. Pattern recognition: Learn common obstacle patterns to navigate more efficiently.',
      faq: 'Q: How do I control the jetpack? A: Tap and hold to fly up, release to fall down - it\'s all about timing and rhythm. Q: What do the different vehicles do? A: Each vehicle has unique abilities like teleportation, coin magnetism, or invincibility. Q: How do I complete missions? A: Missions are displayed at the start and require specific actions during gameplay. Q: Can I customize Barry? A: Yes, you can purchase different outfits and jetpack designs with coins. Q: What are the scientists for? A: Scientists provide temporary power-ups when you high-five them during flight.'
    }
  },
  {
    id: 'lowsadventures2',
    title: 'Lows Adventures 2',
    description: 'Help Low collect coins and gems in this platformer adventure!',
    coverImage: '/embed/lowsadventures2/icon.png',
    category: 'adventure',
    iframeUrl: '/embed/lowsadventures2/index.html',
    tags: ['platformer', 'coins', 'adventure'],
    rating: 4.4,
    plays: 15500,
    gameInfo: {
      overview: 'Lows Adventures 2 is a charming 2D platformer adventure game featuring the character Low on a quest to collect coins and gems across various colorful worlds. The game combines classic platforming mechanics with puzzle-solving elements, featuring multiple levels with increasing difficulty, hidden secrets, and various enemies to overcome. It\'s designed to appeal to both casual and experienced platformer fans.',
      howToPlay: 'Use arrow keys or WASD to move Low left and right, and press the spacebar or up arrow to jump. Navigate through each level by jumping on platforms, avoiding enemies, and collecting coins and gems. Reach the end of each level to progress to the next stage. Some levels may have keys to collect or switches to activate to unlock new areas or complete objectives.',
      tips: '1. Explore thoroughly: Look for hidden areas and secret passages that may contain extra coins or gems. 2. Time your jumps: Practice precise jumping to navigate tricky platform sequences safely. 3. Enemy patterns: Learn enemy movement patterns to avoid them effectively or find safe opportunities to pass. 4. Collect everything: Gather all coins and gems for higher scores and potential level completion bonuses. 5. Use momentum: Build up speed for longer jumps when crossing large gaps. 6. Save power-ups: If available, save special abilities for challenging sections rather than using them immediately.',
      faq: 'Q: How many levels are in the game? A: The game typically features multiple worlds with several levels each, providing hours of platforming gameplay. Q: Are there boss battles? A: Some versions may include boss encounters at the end of worlds or special challenge levels. Q: Can I replay completed levels? A: Yes, you can usually replay levels to improve your score or find missed collectibles. Q: What happens if I fall or get hit by enemies? A: You\'ll typically restart from the beginning of the level or from a checkpoint if available. Q: Are there different difficulty modes? A: The game usually has a progressive difficulty curve, with later levels being more challenging than earlier ones.'
    }
  },
  {
    id: 'monkeymart',
    title: 'Monkey Mart',
    description: 'Manage your own mart and serve customers as a monkey!',
    coverImage: '/embed/monkeymart/unnamed.png',
    category: 'casual',
    iframeUrl: '/embed/monkeymart/index.html',
    featured: true,
    tags: ['management', 'monkey', 'business'],
    rating: 4.6,
    plays: 42600,
    gameInfo: {
      overview: 'Monkey Mart is a charming business management game where you play as a monkey running your own supermarket. Start with a small shop and gradually expand by growing produce, stocking shelves, and serving customers. The game combines resource management, time management, and strategic planning as you build your retail empire from the ground up.',
      howToPlay: 'Use WASD or arrow keys to move your monkey character around the mart. Plant and harvest crops in your garden, then stock them on the appropriate shelves. Serve customers by walking up to them when they\'re ready to pay. Collect coins from sales to purchase new equipment, expand your store, and hire assistants. Manage your time efficiently to keep customers happy and maximize profits.',
      tips: '1. Prioritize high-demand items: Stock popular products first to maximize sales and customer satisfaction. 2. Expand strategically: Add new departments and products based on customer demand and profitability. 3. Hire help: Assistants can automate tasks like restocking and checkout, freeing you for other activities. 4. Keep shelves full: Empty shelves mean lost sales - maintain good inventory management. 5. Upgrade equipment: Better tools and facilities increase efficiency and production capacity. 6. Watch customer patience: Serve waiting customers quickly to prevent them from leaving unsatisfied.',
      faq: 'Q: How do I unlock new products? A: Earn coins from sales and use them to purchase new product lines and equipment. Q: What do assistants do? A: Assistants help with specific tasks like harvesting, stocking, or operating checkout counters. Q: Can I customize my mart? A: Yes, you can expand the layout and choose which products to sell. Q: How do I increase profits? A: Focus on high-margin items, efficient operations, and keeping customers satisfied. Q: Is there an end goal? A: The game is open-ended - you can continue expanding and improving your mart indefinitely.'
    }
  },
  {
    id: 'motox3m',
    title: 'Moto X3M',
    description: 'Perform stunts and race through challenging obstacle courses!',
    coverImage: '/embed/motox3m/splash.jpg',
    category: 'racing',
    iframeUrl: '/embed/motox3m/index.html',
    featured: true,
    tags: ['motocross', 'stunts', 'obstacles'],
    rating: 4.7,
    plays: 34800,
    gameInfo: {
      overview: 'Moto X3M is an exciting motocross racing game that combines high-speed racing with spectacular stunts and challenging obstacle courses. Players navigate through increasingly difficult levels filled with ramps, loops, spikes, and explosive hazards. The game emphasizes both speed and skill, rewarding players for completing levels quickly while performing impressive aerial stunts.',
      howToPlay: 'Use the up arrow key to accelerate, down arrow to brake/reverse, and left/right arrows to lean your rider for balance and stunts. Navigate through each level\'s obstacles while maintaining speed and control. Perform flips and stunts in the air for bonus points, but land safely to avoid crashing. Reach the finish line as quickly as possible to earn a better star rating.',
      tips: '1. Balance is key: Use lean controls to maintain stability on ramps and during landings. 2. Speed management: Know when to accelerate and when to slow down for tricky sections. 3. Stunt timing: Perform flips during long jumps, but always prioritize safe landings. 4. Learn the levels: Each level has optimal routes and techniques - practice makes perfect. 5. Momentum conservation: Use slopes and ramps to maintain speed through difficult sections. 6. Risk vs reward: Stunts give points but increase crash risk - choose your moments wisely.',
      faq: 'Q: How do I perform stunts? A: Use the left and right arrow keys while airborne to perform front and back flips. Q: What happens if I crash? A: Crashing restarts you from the last checkpoint, but affects your completion time. Q: How are levels rated? A: Levels are rated with 1-3 stars based on your completion time. Q: Can I unlock new bikes? A: Yes, completing levels and earning stars unlocks new motorcycles with different characteristics. Q: Are there checkpoints? A: Yes, most levels have checkpoints that save your progress if you crash.'
    }
  },
  {
    id: 'paperio',
    title: 'Paper.io',
    description: 'Conquer territory by drawing lines in this multiplayer game!',
    coverImage: '/embed/paperio/icon.png',
    category: 'casual',
    iframeUrl: '/embed/paperio/index.html',
    tags: ['territory', 'multiplayer', 'strategy'],
    rating: 4.5,
    plays: 26700,
    gameInfo: {
      overview: 'Paper.io is a competitive multiplayer territory conquest game where players control a colored square and attempt to capture as much territory as possible. The game combines simple mechanics with strategic depth, as players must balance expansion with defense while competing against other players in real-time. The goal is to claim the largest territory while avoiding elimination.',
      howToPlay: 'Use arrow keys or WASD to move your colored square around the map. Stay within your territory (your color) to remain safe. Venture outside to draw lines and create new territory - return to your existing territory to claim the enclosed area. Avoid hitting other players\' lines or bodies while they\'re outside their territory, and try to eliminate opponents by crossing their trails.',
      tips: '1. Safe expansion: Make small, quick expansions rather than large risky ones. 2. Cut off opponents: Target players who are far from their territory to eliminate them. 3. Defensive play: Sometimes it\'s better to defend your territory than to expand aggressively. 4. Map awareness: Keep track of all players and their positions on the minimap. 5. Timing is crucial: Strike when opponents are vulnerable and retreat when threatened. 6. Territory shape: Try to create compact territories that are easier to defend.',
      faq: 'Q: How do I eliminate other players? A: Hit their trail (line) while they\'re outside their territory, or make them hit your trail. Q: What happens if I hit a wall? A: Hitting the map boundary will eliminate you, so stay within bounds. Q: Can I be eliminated in my own territory? A: No, you\'re safe within your own colored territory. Q: How is the winner determined? A: The player with the largest territory percentage when the game ends wins. Q: Can I play offline? A: Paper.io is primarily designed as a multiplayer online game.'
    }
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    description: 'Play soccer with rocket-powered cars in 3D!',
    coverImage: '/embed/rocketleague/splash.webp',
    category: 'racing',
    iframeUrl: '/embed/rocketleague/index.html',
    featured: true,
    tags: ['soccer', 'cars', '3d'],
    rating: 4.8,
    plays: 41200,
    gameInfo: {
      overview: 'Rocket League is a high-octane sports game that combines soccer with rocket-powered cars in a 3D arena. Players control customizable vehicles equipped with rocket boosters to hit a giant ball into the opponent\'s goal. The game features physics-based gameplay, aerial maneuvers, and intense multiplayer action that has made it one of the most popular esports titles worldwide.',
      howToPlay: 'Use WASD or arrow keys to drive your car around the arena. Press the spacebar to jump and perform aerial maneuvers. Hold shift or a designated boost key to activate rocket boost for extra speed and flight capability. Hit the ball with your car to move it toward the opponent\'s goal. Work with teammates in team modes or compete solo in 1v1 matches.',
      tips: '1. Master aerial control: Learn to fly and hit the ball while airborne for advanced plays. 2. Boost management: Collect boost pads around the arena and use boost strategically for crucial moments. 3. Positioning is key: Don\'t all chase the ball - maintain good field positioning with teammates. 4. Practice ball control: Learn to dribble the ball on your car\'s roof for better control. 5. Defensive awareness: Always have someone ready to defend your goal, especially in team play. 6. Wall play: Use the arena walls to your advantage for unique angles and aerial opportunities.',
      faq: 'Q: Can I customize my car? A: Yes, the game typically offers various car bodies, decals, wheels, and boost trails for customization. Q: Is there single-player content? A: Most versions include training modes, tutorials, and sometimes AI matches for practice. Q: How does the ranking system work? A: Competitive modes usually feature skill-based matchmaking and ranking systems. Q: Can I play with friends? A: Yes, the game supports both local split-screen and online multiplayer with friends. Q: What are the different game modes? A: Common modes include 1v1, 2v2, 3v3, and sometimes special limited-time modes with unique rules.'
    }
  },
  {
    id: 'skibiditoilet',
    title: 'Skibidi Toilet',
    description: 'Join the viral Skibidi Toilet adventure!',
    coverImage: '/embed/skibiditoilet/logo.png',
    category: 'casual',
    iframeUrl: '/embed/skibiditoilet/index.html',
    tags: ['viral', 'meme', 'adventure'],
    rating: 4.2,
    plays: 38400,
    gameInfo: {
      overview: 'Skibidi Toilet is a quirky casual game based on the viral internet meme series. Players engage in various mini-games and adventures featuring the iconic singing toilets and cameramen characters. The game captures the absurd humor and catchy music of the original meme while providing interactive gameplay elements that appeal to fans of the viral phenomenon.',
      howToPlay: 'Navigate through different game modes using simple controls - typically arrow keys or WASD for movement and spacebar for actions. Complete various challenges, mini-games, or story missions featuring Skibidi Toilet characters. The gameplay varies depending on the specific version but usually involves rhythm elements, simple puzzles, or action sequences themed around the meme.',
      tips: '1. Embrace the absurdity: The game is meant to be silly and fun, so don\'t take it too seriously. 2. Listen to the music: Many elements are rhythm-based, so pay attention to the catchy Skibidi beats. 3. Explore all modes: Try different game modes to experience various types of gameplay. 4. Share the fun: The game is designed to be shared and enjoyed with friends who appreciate the meme. 5. Quick reflexes: Some mini-games require fast reactions, so stay alert. 6. Enjoy the references: Look out for references to the original Skibidi Toilet video series.',
      faq: 'Q: What is Skibidi Toilet? A: It\'s a viral YouTube series featuring singing toilets that became a popular internet meme, especially among younger audiences. Q: Is this game suitable for all ages? A: While generally harmless, it\'s primarily designed for fans of the meme, typically younger players. Q: Are there multiple game modes? A: Most versions include various mini-games and challenges based on different aspects of the meme. Q: Can I play with friends? A: Some versions may include multiplayer elements or sharing features. Q: Is the music from the original videos? A: The game typically features the iconic Skibidi Toilet theme music and sound effects.'
    }
  },
  {
    id: 'stickman-hook',
    title: 'Stickman Hook',
    description: 'Swing through levels using your grappling hook skills!',
    coverImage: '/embed/stickman-hook/icon.jpg',
    category: 'action',
    iframeUrl: '/embed/stickman-hook/index.html',
    featured: true,
    tags: ['swinging', 'hook', 'physics'],
    rating: 4.7,
    plays: 37300,
    gameInfo: {
      overview: 'Stickman Hook is a physics-based swinging action game where players control a stickman character using a grappling hook to swing between various obstacles. The goal is to reach the end of each level by mastering swinging rhythm and timing. The game combines precise physics simulation with fluid action design, creating a Spider-Man-like movement experience.',
      howToPlay: 'Click and hold the screen to fire your grappling hook and grab onto anchor points (usually circular). Release to let go of the hook and use swinging momentum to continue forward. Use gravity and inertia wisely to gain sufficient speed and height. Avoid spikes, saw blades, and other dangerous obstacles. Some levels require continuous swinging sequences - mastering release and grab timing is crucial.',
      tips: '1. Master rhythm: Learn to release the hook at the highest or lowest point of your swing for maximum momentum. 2. Plan ahead: Observe upcoming anchor points and plan your swinging route in advance. 3. Use inertia: Take advantage of swinging momentum to cover greater distances. 4. Avoid over-swinging: Sometimes shorter swings are safer and more effective than long ones. 5. Practice timing: Spend time practicing hook firing and release timing. 6. Stay calm: When you fail, don\'t panic - analyze what went wrong and adjust your strategy.',
      faq: 'Q: What if my hook won\'t grab? A: Make sure you\'re aiming at grabbable anchor points (usually circular) and not too far away. Q: How do I get bigger swing amplitude? A: Release at the highest point of your swing to use gravity for greater momentum. Q: What happens if I hit obstacles? A: Your character restarts the current level and you need to try again. Q: How many levels are there? A: The game contains multiple worlds, each with several levels of gradually increasing difficulty. Q: Can I skip difficult levels? A: Usually levels must be completed in order, though some versions may offer skip options.'
    }
  },
  {
    id: 'stickmangolf',
    title: 'Stickman Golf',
    description: 'Play golf with stickman characters on creative courses!',
    coverImage: '/embed/stickmangolf/gold.png',
    category: 'casual',
    iframeUrl: '/embed/stickmangolf/index.html',
    tags: ['golf', 'stickman', 'sports'],
    rating: 4.3,
    plays: 18500,
    gameInfo: {
      overview: 'Stickman Golf is a fun and accessible golf game featuring simple stickman graphics and creative course designs. Players navigate through various challenging holes with unique obstacles, ramps, and hazards that go beyond traditional golf. The game combines realistic golf physics with imaginative level design, making it enjoyable for both golf enthusiasts and casual gamers.',
      howToPlay: 'Click and drag to aim your shot, with longer drags creating more powerful shots. Release to hit the ball toward the hole. Use the terrain, ramps, and obstacles to your advantage to reach difficult pin positions. Complete each hole in as few strokes as possible to achieve better scores. Navigate through multiple courses with increasing complexity and creative challenges.',
      tips: '1. Power control: Practice different drag lengths to master various shot powers for different situations. 2. Use the terrain: Utilize slopes, ramps, and walls to redirect your ball toward the hole. 3. Plan your route: Study each hole layout before shooting to find the optimal path. 4. Patience pays off: Take time to line up shots carefully rather than rushing through holes. 5. Learn physics: Understand how the ball bounces and rolls to predict its movement. 6. Experiment with angles: Sometimes indirect routes work better than straight shots.',
      faq: 'Q: How do I control shot power? A: Drag further from the ball to increase power, drag closer for gentler shots. Q: Can I replay holes? A: Yes, most versions allow you to replay holes to improve your score. Q: Are there different courses? A: The game typically features multiple courses with unique themes and challenges. Q: What\'s par for each hole? A: Each hole has a suggested number of strokes (par), with lower scores being better. Q: Are there obstacles besides sand and water? A: Yes, creative courses often include ramps, moving platforms, and other unique obstacles.'
    }
  },
  {
    id: 'templerun2',
    title: 'Temple Run 2',
    description: 'Run through ancient temples and collect treasures!',
    coverImage: '/embed/templerun2/079dea52d8f43464bedd59bc35cc7999.jpg',
    category: 'action',
    iframeUrl: '/embed/templerun2/index.html',
    featured: true,
    tags: ['running', 'temple', 'endless'],
    rating: 4.8,
    plays: 48800,
    gameInfo: {
      overview: 'Temple Run 2 is the sequel to the classic endless running game developed by Imangi Studios. Players control an explorer running through ancient temples, dodging various obstacles and traps while collecting coins and gems. The game is renowned for its smooth controls, beautiful 3D graphics, and intense pacing, making it one of the most popular endless runners on mobile platforms.',
      howToPlay: 'Use simple gesture controls: swipe up to jump, swipe down to slide, swipe left/right to turn, and tilt your device to collect coins along the path. Avoid obstacles like tree roots, fire pits, and broken bridges while collecting coins to unlock new characters and upgrade power-ups. The game gets progressively faster, requiring quick reflexes to dodge increasingly dense obstacles. Use collected coins to purchase power-ups and character upgrades.',
      tips: '1. Anticipate ahead: Watch the path ahead and prepare for turns and jumps in advance. 2. Prioritize coin collection: Focus on gathering coins to purchase useful upgrade power-ups. 3. Strategic power-up usage: Use magnets, shields, and other power-ups wisely to extend your survival time. 4. Character selection: Different characters have unique special abilities - choose one that suits your playstyle. 5. Achievement system: Complete achievements to earn additional rewards and bonuses. 6. Practice reflexes: Regular play improves hand-eye coordination and reaction speed.',
      faq: 'Q: Does the game have an ending? A: This is an endless runner with no finish line - the goal is to run as far as possible. Q: How do I unlock new characters? A: Use coins to purchase them or complete specific achievements to unlock characters. Q: What do power-ups do? A: Power-ups help collect coins, avoid obstacles, or provide special abilities during runs. Q: How can I get more coins? A: Collect them during gameplay, complete achievements, watch ads, or make purchases. Q: Does the game get progressively harder? A: Yes, as distance increases, the game speed accelerates and obstacles become more densely packed.'
    }
  },
  {
    id: 'theimpossiblegame',
    title: 'The Impossible Game',
    description: 'Navigate through impossible obstacles in this challenging game!',
    coverImage: '/embed/theimpossiblegame/image.jpg',
    category: 'action',
    iframeUrl: '/embed/theimpossiblegame/index.html',
    tags: ['impossible', 'challenge', 'obstacles'],
    rating: 4.4,
    plays: 21200,
    gameInfo: {
      overview: 'The Impossible Game is an extremely challenging rhythm-based platformer that tests players\' reflexes, timing, and patience to the absolute limit. Featuring a simple orange square that must navigate through seemingly impossible obstacle courses, the game is notorious for its brutal difficulty and the satisfaction that comes from finally completing its punishing levels.',
      howToPlay: 'Press the spacebar, click, or tap to make your square jump over spikes and obstacles. The square moves automatically from left to right, so you only control jumping. Time your jumps precisely to avoid the numerous spikes, gaps, and moving obstacles. The game requires perfect timing and memorization of obstacle patterns to progress through each level.',
      tips: '1. Memorize patterns: Success comes from learning the exact timing and sequence of obstacles through repetition. 2. Stay calm: Frustration leads to mistakes - take breaks when you feel overwhelmed. 3. Focus on rhythm: Many obstacles follow the background music\'s beat, so listen carefully. 4. Practice sections: Break down difficult parts and practice them repeatedly. 5. Expect to fail: The game is designed to be extremely difficult - failure is part of the learning process. 6. Celebrate small victories: Acknowledge progress even if you don\'t complete the full level.',
      faq: 'Q: Why is it called "The Impossible Game"? A: The name reflects the extreme difficulty level that makes completion seem nearly impossible for most players. Q: Are there checkpoints? A: Most versions don\'t have checkpoints - you must complete levels in one perfect run. Q: How many levels are there? A: The original features a few extremely challenging levels, with some versions offering additional content. Q: Is there a way to make it easier? A: The difficulty is intentional - the game is designed to be brutally challenging without difficulty options. Q: What happens when I complete a level? A: Completing a level provides an enormous sense of achievement and usually unlocks the next challenge.'
    }
  },
  {
    id: 'timeshooter3',
    title: 'Time Shooter 3',
    description: 'Time moves only when you move in this tactical shooter!',
    coverImage: '/embed/timeshooter3/logo.png',
    category: 'action',
    iframeUrl: '/embed/timeshooter3/index.html',
    featured: true,
    tags: ['time', 'shooter', 'tactical'],
    rating: 4.6,
    plays: 29600,
    gameInfo: {
      overview: 'Time Shooter 3 is a unique tactical first-person shooter where time only moves when you move. This innovative mechanic allows for strategic planning and precise execution as you navigate through levels filled with enemies. The game combines the intensity of action shooters with puzzle-like strategic thinking, creating a distinctive and engaging gameplay experience.',
      howToPlay: 'Use WASD keys to move (which also advances time), mouse to look around and aim, and left-click to shoot. When you stop moving, time freezes, allowing you to plan your next moves carefully. Pick up weapons from defeated enemies or the environment. Use the time-freeze mechanic to dodge bullets, plan attacks, and navigate complex combat scenarios strategically.',
      tips: '1. Plan before moving: Use the time-freeze to analyze enemy positions and plan your route. 2. Weapon management: Different weapons have different advantages - choose the right tool for each situation. 3. Cover usage: Use walls and obstacles effectively since you can plan your movements precisely. 4. Bullet dodging: Watch incoming projectiles and plan movements to avoid them. 5. Enemy prioritization: Identify the most dangerous threats and eliminate them first. 6. Environmental awareness: Use the environment to your advantage, including explosive objects.',
      faq: 'Q: Does time always freeze when I stop? A: Yes, time only progresses when you move your character. Q: Can I change weapons? A: Yes, you can pick up different weapons from enemies and the environment. Q: How do I avoid bullets? A: Use the time-freeze mechanic to see bullet trajectories and plan evasive movements. Q: Are there different enemy types? A: Yes, enemies have different weapons and behaviors that require different strategies. Q: Can I replay levels? A: Yes, you can replay completed levels to improve your performance and try different approaches.'
    }
  },
  {
    id: 'tinyfishing',
    title: 'Tiny Fishing',
    description: 'Cast your line and catch fish in this relaxing fishing game!',
    coverImage: '/embed/tinyfishing/tiny-fishing.png',
    category: 'casual',
    iframeUrl: '/embed/tinyfishing/index.html',
    featured: true,
    tags: ['fishing', 'relaxing', 'casual'],
    rating: 4.5,
    plays: 24900,
    gameInfo: {
      overview: 'Tiny Fishing is a peaceful and addictive fishing simulation game that offers a relaxing gaming experience. Players cast their lines into various fishing spots to catch different types of fish, earn coins, and upgrade their equipment. The game features charming pixel art graphics, soothing gameplay mechanics, and a progression system that keeps players engaged while providing a calming, stress-free environment.',
      howToPlay: 'Click or tap to cast your fishing line into the water. Wait for fish to bite - you\'ll see visual indicators when a fish is interested in your bait. Click again to reel in your catch when you feel a bite. Different fish require different timing and techniques. Use the coins you earn from selling fish to upgrade your rod, line, and bait to catch bigger and more valuable fish.',
      tips: '1. Patience is key: Don\'t rush - wait for the right moment to reel in your catch for better success rates. 2. Upgrade strategically: Invest in better equipment to access deeper waters and rarer fish. 3. Learn fish behavior: Different fish species have different biting patterns and preferences. 4. Explore different depths: Deeper waters often contain more valuable and exotic fish species. 5. Manage your resources: Balance spending on upgrades with saving for bigger improvements. 6. Enjoy the process: The game is designed to be relaxing, so don\'t stress about efficiency.',
      faq: 'Q: How do I know when a fish is biting? A: Look for visual cues like the bobber moving or fish approaching your bait, then click to reel in. Q: Can I catch different types of fish? A: Yes, the game features various fish species with different values and rarity levels. Q: What can I do with the fish I catch? A: Sell them for coins to upgrade your fishing equipment and unlock new fishing spots. Q: Are there different fishing locations? A: Many versions feature multiple fishing spots with unique fish populations and challenges. Q: Is there an end goal? A: The game is typically open-ended, focusing on the relaxing experience of fishing and gradual progression.'
    }
  },
  {
    id: 'tube-jumpers',
    title: 'Tube Jumpers',
    description: 'Jump on tubes and try to knock opponents off the screen!',
    coverImage: '/embed/tube-jumpers/cover.svg',
    category: 'casual',
    iframeUrl: '/embed/tube-jumpers/index.html',
    tags: ['jumping', 'multiplayer', 'tubes'],
    rating: 4.4,
    plays: 19900,
    gameInfo: {
      overview: 'Tube Jumpers is a chaotic multiplayer party game where players control bouncing characters on inflatable tubes floating on water. The objective is to be the last player remaining by knocking opponents off their tubes and into the water. The game features simple controls, physics-based gameplay, and hilarious moments as players bounce around trying to eliminate each other.',
      howToPlay: 'Use simple controls (usually one button per player) to make your character jump and bounce on the tubes. Time your jumps to land on opponents and knock them into the water while avoiding being knocked off yourself. The tubes will move and bounce, adding to the chaos. The last player standing on a tube wins the round. Multiple rounds determine the overall winner.',
      tips: '1. Timing is everything: Learn to time your jumps to land on opponents when they\'re vulnerable. 2. Use tube physics: The bouncy nature of tubes can help you reach opponents or escape danger. 3. Stay mobile: Keep moving to avoid being an easy target for other players. 4. Watch the edges: Be careful not to bounce yourself off the screen while trying to eliminate others. 5. Defensive play: Sometimes it\'s better to avoid conflict and let other players eliminate each other. 6. Practice makes perfect: The physics take time to master, so don\'t get discouraged by early losses.',
      faq: 'Q: How many players can play? A: The game typically supports 2-4 players in local multiplayer mode. Q: Are there different game modes? A: Most versions focus on the core elimination gameplay, but some may offer variations or tournament modes. Q: Can I play against AI? A: Some versions include computer-controlled opponents for single-player practice. Q: What happens when I fall in the water? A: You\'re eliminated from that round, but can usually participate in the next round. Q: Are there power-ups? A: The core game focuses on pure jumping mechanics, though some versions may include special abilities or power-ups.'
    }
  },
  {
    id: 'wordlebot',
    title: 'Wordle Bot',
    description: 'Guess the word in this popular word puzzle game!',
    coverImage: '/embed/wordlebot/icon.png',
    category: 'puzzle',
    iframeUrl: '/embed/wordlebot/index.html',
    tags: ['words', 'puzzle', 'daily'],
    rating: 4.6,
    plays: 33900,
    gameInfo: {
      overview: 'Wordle Bot is a word puzzle game inspired by the viral daily word game Wordle. Players have six attempts to guess a five-letter word, with each guess providing clues about which letters are correct and in the right position. The game combines vocabulary knowledge with logical deduction, making it both educational and entertaining for word game enthusiasts.',
      howToPlay: 'Type a five-letter word and press Enter to make your guess. After each guess, letters will be colored: green means the letter is correct and in the right position, yellow means the letter is in the word but in the wrong position, and gray means the letter is not in the word at all. Use this feedback to narrow down possibilities and guess the target word within six attempts.',
      tips: '1. Start with common letters: Use words with frequent letters like A, E, I, O, U, R, S, T, L, N for your first guesses. 2. Avoid repeated letters initially: Your first few guesses should use different letters to gather maximum information. 3. Pay attention to letter positions: Yellow letters need to be moved to different positions in subsequent guesses. 4. Use elimination: Keep track of which letters have been ruled out completely. 5. Think of word patterns: Consider common prefixes, suffixes, and letter combinations. 6. Don\'t waste guesses: Each guess should provide new information or test a serious possibility.',
      faq: 'Q: Is there a new word every day? A: This version may have multiple words available rather than a single daily word. Q: What if I can\'t think of a word? A: Try common five-letter words or use the process of elimination based on previous clues. Q: Are proper nouns allowed? A: Typically, only common nouns and some verbs/adjectives are used, not proper nouns. Q: Can I replay with the same word? A: You can usually start a new game with a different word after completing or failing the current one. Q: What makes a good starting word? A: Words with common vowels and consonants like ADIEU, AROSE, or SLATE are popular starting choices.'
    }
  }
];