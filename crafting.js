const recipes = {
    "pickaxe0" : {
        name: "What do I even name pickaxe 0",
        recipe: []
    },
    "pickaxe1" : {
        name : "Mulch Mallet",
        recipe : [{ore:"🟫", amt:5000},{ore:"🟧", amt:160},{ore:"🟡", amt:30},{ore:"🔴", amt:17},{ore:"⚫", amt:7}],
        upgrades : {},
    },
    "pickaxe2" : {
        name : "Mud Sickle",
        recipe : [{ore:"🟫", amt:25000},{ore:"🟥", amt:750},{ore:"🔵", amt:300},{ore:"🟣", amt:60},{ore:"🧧", amt:15}],
        upgrades : {},
    },
    "pickaxe3" : {
        name : "Dirt Ravager",
        recipe : [{ore:"🟫", amt:100000},{ore:"🟧", amt:4000},{ore:"🟢", amt:1800},{ore:"🟠", amt:650},{ore:"🟤", amt:240},{ore:"⬜", amt:30},{ore:"🟨", amt:2}],
        upgrades : {},
    },
    "pickaxe28" : {
        name: "Crystalline Excavator",
        recipe : [{ore:"🌫️", amt:250000},{ore:"🟪", amt:6900},{ore:"🟡", amt:2500},{ore:"◽", amt:480},{ore:"🔲", amt:3},{ore:"🔘", amt:2},{ore:"🔻", amt:1},{ore:"💚", amt:1}],
        upgrades : {}
    },
    "pickaxe29" : {
        name: "Ballast Breaker",
        recipe : [{ore:"🌫️", amt:500000},{ore:"🟧", amt:25000},{ore:"🔵", amt:8500},{ore:"⚫", amt:1300},{ore:"⬛", amt:70},{ore:"🟦", amt:25},{ore:"🔺", amt:2},{ore:"🔹", amt:1},{ore:"💙", amt:2},{ore:"🤎", amt:1}],
        upgrades : {}
    },
    "pickaxe30" : {
        name: "Tropical Carver",
        recipe : [{ore:"🌫️", amt:1250000},{ore:"🟥", amt:52000},{ore:"🟢", amt:28000},{ore:"⬜", amt:500},{ore:"🔲", amt:15},{ore:"🔻", amt:5},{ore:"🔸", amt:2},{ore:"🔷", amt:3},{ore:"💚", amt:3},{ore:"❤️", amt:2},{ore:"🤍", amt:1}],
        upgrades : {}
    },
    "pickaxe4" : {
        name : "Void Crusher",
        recipe : [{ore:"📰", amt:2000000},{ore:"🟪", amt:68000},{ore:"◽", amt:4750},{ore:"⬛", amt:270},{ore:"🟨", amt:60},{ore:"🔘", amt:15},{ore:"🔹", amt:7},{ore:"🔶", amt:5},{ore:"💙", amt:10},{ore:"❤️", amt:8},{ore:"🤍", amt:4},{ore:"⚙️", amt:1}],
        upgrades : {},
    },
    "pickaxe5" : {
        name : "Geode Staff",
        recipe : [{ore:"🪨", amt:2500000},{ore:"🟠", amt:32500},{ore:"🟣", amt:12000},{ore:"◾", amt:6900},{ore:"⬜", amt:1000},{ore:"🟦", amt:160},{ore:"🔺", amt:5},{ore:"🔹", amt:8},{ore:"💜", amt:8},{ore:"🖤", amt:5},{ore:"💠", amt:1},{ore:"🥏", amt:1}],
        upgrades : {},
    },
    "pickaxe6" : {
        name : "Earth Soiler",
        recipe : [{ore:"🟫", amt:3000000},{ore:"🟧", amt:290000},{ore:"🔵", amt:87500},{ore:"🟤", amt:13500},{ore:"🔻", amt:20},{ore:"🔶", amt:8},{ore:"❤️", amt:20},{ore:"🤍", amt:10},{ore:"🍁", amt:2},{ore:"🎄", amt:1}],
        upgrades : {},
    },
    "pickaxe7" : {
        name : "Crypt Smasher",
        recipe : [{ore:"🌵", amt:4000000},{ore:"🌊", amt:1500000},{ore:"🟢", amt:185000},{ore:"🟤", amt:27750},{ore:"🟨", amt:150},{ore:"🔸", amt:20},{ore:"🔷", amt:20},{ore:"🖍️", amt:2},{ore:"⚱️", amt:2},{ore:"🤿", amt:1},{ore:"🫧", amt:1},{ore:"🎀", amt:1}],
        upgrades : {},
    },
    "pickaxe8" : {
        name : "Labyrinthian Tide",
        recipe : [{ore:"🧱", amt:5000000},{ore:"🌊", amt:5000000},{ore:"☢️", amt:5000000},{ore:"🟪", amt:470000},{ore:"🧧", amt:15000},{ore:"🟨", amt:700},{ore:"🔺", amt:65},{ore:"🔶", amt:30},{ore:"🗿", amt:2},{ore:"🪙", amt:2},{ore:"🔔", amt:2},{ore:"🧩", amt:2},{ore:"⛵", amt:3},{ore:"🎣", amt:3},{ore:"🎇", amt:1},{ore:"🧲", amt:1},{ore:"👑", amt:1}],
        upgrades : {},
    },
    "pickaxe9" : {
        name : "77 Leaf Destroyer",
        recipe : [{ore:"📰", amt:15000000},{ore:"🧱", amt:15000000},{ore:"🟥", amt:1400000},{ore:"🟣", amt:115000},{ore:"⬜", amt:13500},{ore:"🔘", amt:280},{ore:"🔹", amt:100},{ore:"✂️", amt:20},{ore:"🎲", amt:18},{ore:"🪜", amt:17},{ore:"🪚", amt:15},{ore:"🏆", amt:4},{ore:"🧨", amt:5},{ore:"🔗", amt:6},{ore:"📝", amt:1}],
        upgrades : {},
    },
    "pickaxe10" : {
        name : "Planet Buster",
        recipe : [{ore:"🟫", amt:75000000},{ore:"🟧", amt:4150000},{ore:"🟡", amt:920000},{ore:"◾", amt:135000},{ore:"🔲", amt:1200},{ore:"🔸", amt:200},{ore:"🔷", amt:180},{ore:"🍁", amt:50},{ore:"🌻", amt:45},{ore:"🪵", amt:45},{ore:"🎄", amt:35},{ore:"🎍", amt:15},{ore:"🎃", amt:6},{ore:"🌲", amt:6},{ore:"🌏", amt:2},{ore:"🌪️", amt:2},{ore:"🥗", amt:1}],
        upgrades : {},
    },
    "pickaxe11" : {
        name : "Whirlpool of Fate",
        recipe : [{ore:"🌊", amt:225000000},{ore:"🔴", amt:1200000},{ore:"◽", amt:450000},{ore:"🟨", amt:5300},{ore:"🔻", amt:1000},{ore:"🔶", amt:470},{ore:"⛵", amt:325},{ore:"🎣", amt:315},{ore:"🤿", amt:300},{ore:"🫧", amt:300},{ore:"🐟", amt:100},{ore:"👑", amt:40},{ore:"🔱", amt:35},{ore:"🌀", amt:5},{ore:"👿", amt:4},{ore:"🪩", amt:3},{ore:"💫", amt:1}],
        upgrades : {},
    },
    "pickaxe12" : {
        name : "Wings of Glory",
        recipe : [{ore:"🧱", amt:0},{ore:"🪨", amt:0},{ore:"🌫️", amt:0},{ore:"🔵", amt:0},{ore:"🟠", amt:0},{ore:"⚫", amt:0},{ore:"🧧", amt:0},{ore:"🟦", amt:0},{ore:"🔺", amt:0},{ore:"💚", amt:0},{ore:"🤍", amt:0},{ore:"🧵", amt:0},{ore:"❄️", amt:0},{ore:"🥉", amt:0},{ore:"🧊", amt:0},{ore:"💸", amt:0},{ore:"👁️", amt:0},{ore:"🌈", amt:0},{ore:"🌇", amt:0}],
        upgrades : {},
    },
    "pickaxe13" : {
        name : "The Key",
        recipe :  [{ore:"🟫", amt:10000000},{ore:"🧱", amt:10000000},{ore:"🌫️", amt:10000000},{ore:"🌊", amt:10000000},{ore:"🪨", amt:10000000},{ore:"☢️", amt:10000000},{ore:"🌵", amt:10000000},{ore:"📰", amt:10000000},{ore:"🌏", amt:1},{ore:"🔩", amt:1},{ore:"🧵", amt:1},{ore:"🌀", amt:1},{ore:"❄️", amt:1},{ore:"🥀", amt:1},{ore:"🔥", amt:1},{ore:"📝", amt:1}],
        upgrades : {},
    },
    "pickaxe14" : {
        name : "Extreme Echolocator",
        recipe : [{ore:"📺", amt:50000},{ore:"🔃", amt:500},{ore:"↘️", amt:10},{ore:"⏬", amt:1},],
        upgrades : {}
    },
    "pickaxe15" : {
        name : "Corundum Caver",
        recipe : [{ore:"🚪", amt:400000},{ore:"🔁", amt:1800},{ore:"⬇️", amt:150},{ore:"⏫", amt:18},{ore:"▶️", amt:1},],
        upgrades : {}
    },
    "pickaxe16" : {
        name : "Starborne Slasher",
        recipe : [{ore:"🌐", amt:1000000},{ore:"⤵️", amt:1900},{ore:"↪️", amt:960},{ore:"🔽", amt:95},{ore:"⏮️", amt:15},{ore:"📕", amt:1},],
        upgrades : {}
    },
    "pickaxe17" : {
        name : "Nyabomb",
        recipe : [{ore:"♟️", amt:3000000},{ore:"🔂", amt:16000},{ore:"⏺️", amt:40},{ore:"⏏️", amt:10},{ore:"📗", amt:5},{ore:"📘", amt:3},{ore:"✏️", amt:1},],
        upgrades : {}
    },
    "pickaxe18" : {
        name : "Lunar Lightsabre",
        recipe : [{ore:"☁️", amt:7500000},{ore:"⬅️", amt:6000},{ore:"↖️", amt:1300},{ore:"➡️", amt:1150},{ore:"📙", amt:6},{ore:"🌧️", amt:2},{ore:"🌤️", amt:1},],
        upgrades : {}
    },
    "pickaxe19" : {
        name : "Gemstone Engraver",
        recipe : [{ore:"♟️", amt:12500000},{ore:"⬆️", amt:9750},{ore:"◀️", amt:1200},{ore:"⏯️", amt:275},{ore:"⏸️", amt:130},{ore:"📗", amt:15},{ore:"🧠", amt:2},{ore:"📐", amt:1},],
        upgrades : {}
    },
    "pickaxe20" : {
        name : "Gambler's Fallacy",
        recipe : [{ore:"❌", amt:2000000},{ore:"📺", amt:35000000},{ore:"🔼", amt:4850},{ore:"⏪", amt:1400},{ore:"✴️", amt:3},{ore:"📙", amt:20},{ore:"🛡️", amt:20},{ore:"🪃", amt:10},{ore:"🪓", amt:3},],
        upgrades : {}
    },
    "pickaxe21" : {
        name : "Exponential Centrifuge",
        recipe : [{ore:"☁️", amt:37500000},{ore:"🚪", amt:37500000},{ore:"🔃", amt:2160000},{ore:"⏏️", amt:70},{ore:"📘", amt:50},{ore:"🔑", amt:20},{ore:"🌨️", amt:10},{ore:"🖇️", amt:10},{ore:"⛈️", amt:3},],
        upgrades : {}
    },
    "pickaxe22" : {
        name : "Singularity Slammer",
        recipe : [{ore:"❌", amt:75000000},{ore:"📺", amt:100000000},{ore:"🔄", amt:2230000},{ore:"↪️", amt:260000},{ore:"⏬", amt:7800},{ore:"⏯️", amt:2100},{ore:"📗", amt:35},{ore:"📕", amt:30},{ore:"📙", amt:25},{ore:"📘", amt:20},{ore:"🛡️", amt:30},{ore:"🪃", amt:25},{ore:"🪓", amt:5},{ore:"🔕", amt:2},{ore:"🔨", amt:1}],
        upgrades : {}
    },
    "pickaxe23" : {
        name : "Staff of Binding",
        recipe : [{ore:"🚪", amt:200000000},{ore:"↘️", amt:148000},{ore:"➡️", amt:73000},{ore:"🔽", amt:49000},{ore:"🔒", amt:125},{ore:"🔑", amt:100},{ore:"🖇️", amt:35},{ore:"🔏", amt:5},{ore:"⛓️", amt:4},],
        upgrades : {}
    },
    "pickaxe24" : {
        name : "SSS",
        recipe : [{ore:"☁️", amt:625000000},{ore:"🔃", amt:16175000},{ore:"⤵️", amt:2440000},{ore:"⏬", amt:28900},{ore:"⏺️", amt:18300},{ore:"📙", amt:7500},{ore:"📘", amt:6000},{ore:"🌨️", amt:300},{ore:"🪁", amt:200},{ore:"⛈️", amt:120},{ore:"🌩️", amt:45},{ore:"🪶", amt:4},],
        upgrades : {}
    },
    "pickaxe25" : {
        name : "Coronary Catastrophe",
        recipe : [{ore:"🌐", amt:1500000000},{ore:"🔂", amt:17825000},{ore:"⬇️", amt:1480000},{ore:"◀️", amt:220000},{ore:"⏫", amt:178000},{ore:"🖱️", amt:2300},{ore:"💔", amt:200},{ore:"🔪", amt:50},{ore:"🧂", amt:20},{ore:"📽️", amt:10},{ore:"💘", amt:1},],
        upgrades : {}
    },
    "pickaxe26" : {
        name : "Null Chroma",
        recipe : [{ore:"❌", amt:44444444444},{ore:"🕳️", amt:2600000},{ore:"✴️", amt:260},{ore:"⚙️", amt:1750000},{ore:"💠", amt:1460000},{ore:"🫧", amt:1000000},{ore:"💍", amt:584000},{ore:"🎍", amt:240000},{ore:"👑", amt:140000},{ore:"💎", amt:51500},{ore:"🌟", amt:34000},{ore:"💥", amt:23360},{ore:"🌀", amt:14175},{ore:"🪐", amt:12350},{ore:"🥗", amt:10950},{ore:"🪩", amt:8750},{ore:"📌", amt:275},{ore:"🚧", amt:320},{ore:"💫", amt:4350},{ore:"⛏️", amt:1},{ore:"☯️", amt:1},{ore:"🌳", amt:30},{ore:"🏰", amt:30},{ore:"🚿", amt:30},{ore:"🏔️", amt:30},{ore:"⚠️", amt:30},{ore:"🐪", amt:30},{ore:"🐋", amt:1095},{ore:"💵", amt:30},{ore:"🍃", amt:25},{ore:"👾", amt:15},{ore:"🪡", amt:15},{ore:"🚽", amt:15},{ore:"🎓", amt:15},{ore:"⚡", amt:15},{ore:"💘", amt:30},{ore:"💢", amt:50},{ore:"🪽", amt:2},{ore:"🗝️", amt:2},{ore:"🚫", amt:2},{ore:"♨️", amt:1},]        ,
        upgrades : {}
    },
    "pickaxe27" : {
        name: "The Tree of Life",
        recipe : [],
        upgrades : {}
    },
    "pickaxe31" : {
        name: "Undersea Eviscerator",
        recipe : [{ore:"🌊", amt:0},{ore:"⛵", amt:0},{ore:"🎣", amt:0},{ore:"🤿", amt:0},{ore:"🫧", amt:0},{ore:"🐟", amt:0},{ore:"👑", amt:0},{ore:"🔱", amt:0},{ore:"🌀", amt:0},{ore:"👿", amt:0},{ore:"🪩", amt:0},{ore:"💫", amt:0},{ore:"🐋", amt:0},{ore:"⚓", amt:0},{ore:"🪸", amt:0},{ore:"HD 160529", amt:0}],
        upgrades : {}
    },
    "gear0" : {
        name : "Ore Tracker",
        recipe : [{ore:"🪨", amt:1000000},{ore:"🟠", amt:9750},{ore:"◽", amt:2400},{ore:"🔲", amt:15},{ore:"🔶", amt:2},{ore:"🔋", amt:1},],
        upgrades : {}
    },
    "gear1" : {
        name : "Real Candilium",
        recipe : [{ore:"🌫️", amt:5000000},{ore:"🟤", amt:12500},{ore:"⬜", amt:1700},{ore:"🟦", amt:200},{ore:"🔻", amt:20},{ore:"🔷", amt:4},{ore:"🎭", amt:2},{ore:"🪄", amt:1},{ore:"🕯️", amt:1}],
        upgrades : {}
    },
    "gear2" : {
        name : "Real Vitriol",
        recipe : [{ore:"🌵", amt:10000000},{ore:"🔴", amt:55000},{ore:"🔹", amt:35},{ore:"🔸", amt:25},{ore:"🖤", amt:10},{ore:"🤍", amt:20},{ore:"🖍️", amt:5},{ore:"⚱️", amt:8},{ore:"⭐", amt:1}],
        upgrades : {}
    },
    "gear3" : {
        name : "Infinity Collector",
        recipe : [{ore:"🪨", amt:75000000},{ore:"💠", amt:50},{ore:"⚜️", amt:50},{ore:"🔋", amt:15},{ore:"🔮", amt:10},{ore:"☄️", amt:6},{ore:"💎", amt:3}],
        upgrades : {}
    },
    "gear4" : {
        name : "Layer Materializer",
        recipe : [{ore:"🟫", amt:15000000},{ore:"🧱", amt:15000000},{ore:"🌫️", amt:15000000},{ore:"🌊", amt:15000000},{ore:"🪨", amt:15000000},{ore:"☢️", amt:15000000},{ore:"🌵", amt:60000000},{ore:"📰", amt:15000000},{ore:"📟", amt:7},{ore:"⌚", amt:2},{ore:"🔥", amt:2},],
        upgrades : {}
    },
    "gear5" : {
        name : "Fortune III Book",
        recipe : [{ore:"🌫️", amt:150000000},{ore:"🌊", amt:150000000},{ore:"🪄", amt:75},{ore:"🎨", amt:30},{ore:"🕋", amt:25},{ore:"🕯️", amt:15},{ore:"🌀", amt:1},{ore:"⌛", amt:1},],
        upgrades : {}
    },
    "gear6" : {
        name : "Haste II Beacon",
        recipe : [{ore:"🌵", amt:350000000},{ore:"⚱️", amt:300},{ore:"🗡️", amt:270},{ore:"🎀", amt:75},{ore:"🔆", amt:35},{ore:"⭐", amt:35},{ore:"💥", amt:7},{ore:"🪐", amt:3},],
        upgrades : {}
    },
    "gear7" : {
        name : "Energy Siphoner",
        recipe : [{ore:"🌫️", amt:25000000},{ore:"🟥", amt:1000000},{ore:"🧧", amt:20500},{ore:"🔺", amt:100},{ore:"🎭", amt:5},{ore:"🎴", amt:3},{ore:"🎨", amt:1},{ore:"🕋", amt:1},],
        upgrades : {}
    },
    "gear8" : {
        name : "Sugar Rush",
        recipe : [{ore:"☢️", amt:40000000},{ore:"⬛", amt:6500},{ore:"🔲", amt:700},{ore:"🔶", amt:100},{ore:"🧪", amt:10},{ore:"⚗️", amt:5},{ore:"⏹️", amt:3},{ore:"🔳", amt:1}],
        upgrades : {}
    },
    "gear9" : {
        name : "SILLYYYY",
        recipe : [{ore:"🎂", amt:1},{ore:"🔮", amt:1},{ore:"🪄", amt:1},],
        upgrades : {}
    },
    "gear10" : {
        name : "Logical Randomiser",
        recipe : [{ore:"🌐", amt:2500000},{ore:"🔄", amt:18500},{ore:"🔀", amt:6500},{ore:"➡️", amt:325},{ore:"⏫", amt:130},{ore:"⏏️", amt:10},{ore:"📕", amt:10},{ore:"📙", amt:10},{ore:"💻", amt:1},],
        upgrades : {}
    },
    "gear11" : {
        name : "Storm Sneakers",
        recipe : [{ore:"☁️", amt:5500000},{ore:"🔁", amt:25000},{ore:"↘️", amt:1750},{ore:"⏪", amt:140},{ore:"⏯️", amt:50},{ore:"📗", amt:30},{ore:"📘", amt:20},{ore:"🌧️", amt:3},{ore:"🌥️", amt:1},],
        upgrades : {}
    },
    "gear12" : {
        name : "Artifice Annihilator",
        recipe : [{ore:"🚪", amt:8750000},{ore:"⤴️", amt:17500},{ore:"⬅️", amt:10000},{ore:"⏬", amt:350},{ore:"⏏️", amt:45},{ore:"🔒", amt:4},{ore:"🔑", amt:3},{ore:"🖇️", amt:1},],
        upgrades : {}
    },
    "gear13" : {
        name : "Repurposed Replicator",
        recipe : [{ore:"🌐", amt:15000000},{ore:"🔃", amt:317500},{ore:"⤴️", amt:15000},{ore:"➡️", amt:2925},{ore:"⏺️", amt:325},{ore:"💻", amt:15},{ore:"🖱️", amt:5},],
        upgrades : {}
    },
    "gear14" : {
        name : "Cavern Capacitator",
        recipe : [{ore:"♟️", amt:22500000},{ore:"🔂", amt:280000},{ore:"↩️", amt:57500},{ore:"▶️", amt:450},{ore:"✏️", amt:10},{ore:"🧠", amt:6},{ore:"📖", amt:5},{ore:"📐", amt:2},{ore:"📚", amt:2},],
        upgrades : {}
    },
    "gear15" : {
        name : "High Powered Vacuum",
        recipe : [{ore:"☁️", amt:6000000},{ore:"📺", amt:6000000},{ore:"🚪", amt:6000000},{ore:"🌐", amt:6000000},{ore:"♟️", amt:6000000},{ore:"🔄", amt:690000},{ore:"⬆️", amt:49750},{ore:"◀️", amt:6200},{ore:"⏺️", amt:1400},{ore:"📗", amt:60},{ore:"📕", amt:50},{ore:"📙", amt:40},{ore:"📘", amt:30},{ore:"🛡️", amt:15},],
        upgrades : {}
    },
    "gear16" : {
        name : "Unlocked Speedcap",
        recipe : [{ore:"🌐", amt:60000000},{ore:"➡️", amt:19650},{ore:"⏩", amt:3250},{ore:"⏭️", amt:2500},{ore:"▶️", amt:915},{ore:"🖱️", amt:30},{ore:"🍆", amt:5},{ore:"💔", amt:2},],
        upgrades : {}
    },
    "gear17" : {
        name : "Infinity Collector II",
        recipe : [{ore:"♟️", amt:100000000},{ore:"⤵️", amt:530000},{ore:"🔽", amt:26500},{ore:"🔼", amt:23000},{ore:"⏸️", amt:2000},{ore:"✏️", amt:70},{ore:"🧠", amt:35},{ore:"📖", amt:35},{ore:"📐", amt:15},{ore:"📚", amt:10},{ore:"🖊️", amt:3}],
        upgrades : {}
    },
    "gear18" : {
        name : "Clover's Undoing",
        recipe : [{ore:"📺", amt:250000000},{ore:"🔀", amt:1650000},{ore:"⬅️", amt:470000},{ore:"⏩", amt:8750},{ore:"⏮️", amt:11225},{ore:"⏸️", amt:2200},{ore:"🛡️", amt:275},{ore:"🪃", amt:235},{ore:"🪓", amt:35},{ore:"🔨", amt:5},{ore:"💣", amt:3},],
        upgrades : {}
    },
    "gear19" : {
        name : "Structural Service",
        recipe : [{ore:"🚪", amt:1500000000},{ore:"⤴️", amt:3400000},{ore:"↪️", amt:2300000},{ore:"⏪", amt:57000},{ore:"⏯️", amt:19500},{ore:"🔒", amt:4200},{ore:"🖇️", amt:1300},{ore:"⛓️", amt:100},{ore:"🚧", amt:30},{ore:"🛎️", amt:5},],
        upgrades : {}
    },
    "gear20" : {
        name : "Statistical Amplifier",
        recipe : [{ore:"♟️", amt:4500000000},{ore:"↩️", amt:9000000},{ore:"⬆️", amt:4450000},{ore:"↖️", amt:1250000},{ore:"⏭️", amt:120000},{ore:"✏️", amt:10000},{ore:"📐", amt:3000},{ore:"🔎", amt:150},{ore:"📌", amt:75},{ore:"📍", amt:15},{ore:"🎓", amt:9}],
        upgrades : {}
    },
    "gear21" : {
        name : "Oblivion Fracturer",
        recipe : [{ore:"🦠", amt:70000000},{ore:"☣️", amt:40000000},{ore:"🎵", amt:20000000},{ore:"❓", amt:15000000},{ore:"🪇", amt:1},{ore:"🧬", amt:1},{ore:"🔭", amt:1},{ore:"🕸️", amt:1},],
        upgrades : {}
    },
    "gear22" : {
        name : "Replicator Prototype",
        recipe : [{ore:"🇿🇦", amt:110}, {ore:"🇹🇿", amt:100}, {ore:"🇨🇩", amt:75}],
        upgrades: {}
    },
    "gear23" : {
        name : "Hyperdrive Accelerator",
        recipe : [{ore:"🇯🇵", amt:25}, {ore:"🇧🇩", amt:25}, {ore:"🇵🇰", amt:15}],
        upgrades: {}
    },
    "gear24" : {
        name : "Superenergetic Automaton",
        recipe : [{ore:"🇨🇺", amt:15}, {ore:"🇭🇹", amt:13}, {ore:"🇬🇹", amt:10}],
        upgrades: {}
    },
    "gear25" : {  
        name : "Alteration Reiterator",
        recipe : [{ore:"🇪🇸", amt:15}, {ore:"🇮🇹", amt:13}, {ore:"🇫🇷", amt:10}],
        upgrades: {}
    },
    "gear26" : {  
        name : "Stratum Nonillonator",
        recipe : [{ore:"🇪🇨", amt:18}, {ore:"🇨🇱", amt:15}, {ore:"🇻🇪", amt:12}],
        upgrades: {}
    },
    "gear27" : {  
        name : "Biome Enchanter",
        recipe : [{ore:"🇻🇺", amt:6}, {ore:"🇫🇲", amt:5}, {ore:"🇸🇧", amt:4}, {ore:"🇰🇾", amt:3}, {ore:"🇨🇰", amt:1}, {ore:"🇫🇰", amt:1}],
        upgrades: {}
    },
    "gear28" : {  
        name : "Celestian Reaper",
        recipe : [{ore:"🇸🇩", amt:740000},{ore:"🇳🇬", amt:37500},{ore:"🇨🇳", amt:6600},{ore:"🇭🇳", amt:1800},{ore:"🇺🇸", amt:600},{ore:"🇷🇺", amt:180},{ore:"🇧🇷", amt:18},{ore:"🇫🇯", amt:1},{ore:"🇳🇿", amt:1},],
        upgrades: {}
    },
    "gear29" : {  
        name : "Abyssal Leaper",
        recipe : [{ore:"📰", amt:1000000000},{ore:"🎲", amt:9000},{ore:"🏆", amt:1900},{ore:"🗜️", amt:1700},{ore:"⌚", amt:1400},{ore:"📝", amt:350},{ore:"🌟", amt:250},{ore:"👀", amt:70},{ore:"🪅", amt:20},{ore:"💵", amt:6}],
        upgrades: {}
    },
    "gear30" : {  
        name : "RNG Manipulator",
        recipe : [{ore:"🌫️", amt:350000},{ore:"◾", amt:350},{ore:"🧧", amt:175},{ore:"🔻", amt:1},{ore:"🤍", amt:2}],
        upgrades: {}
    },
    "gear31" : {  
        name : "Makeshift Accelerator",
        recipe : [{ore:"☢️", amt:600000},{ore:"🔵", amt:9000},{ore:"🟨", amt:10},{ore:"🔘", amt:3},{ore:"🔸", amt:2},{ore:"💙", amt:5},{ore:"❤️", amt:4}],
        upgrades: {}
    },
    "gear32" : {  
        name : "Quantum Entangler",
        recipe : [{ore:"📺", amt:750000},{ore:"🔃", amt:7500},{ore:"🔂", amt:3000},{ore:"⤵️", amt:1000},{ore:"🔽", amt:50},{ore:"📗", amt:25},{ore:"📘", amt:10}],
        upgrades: {}
    },
    "gear33" : {  
        name : "Subatomic Superpositioner",
        recipe : [{ore:"🚪", amt:45000000},{ore:"🔁", amt:25000},{ore:"⬅️", amt:4400},{ore:"🔼", amt:440},{ore:"⏺️", amt:75},{ore:"🔒", amt:10},{ore:"🔑", amt:10},{ore:"🖇️", amt:3}],
        upgrades: {}
    },
}
recipeElements = {};
let currentRecipe = undefined;
function displayRecipe(recipe) {
    removePolygon();
    //const parentElement = document.getElementById("displayRecipe");
    const oldElement = get("displayRecipe");
    if (oldElement) oldElement.remove();
    const parentElement = document.createElement("div");
    parentElement.id = "displayRecipe";
    if (currentRecipe !== undefined) getButtonByName(currentRecipe).classList.remove("selectedOutline");
    while (parentElement.firstChild) parentElement.removeChild(parentElement.firstChild);
    if (currentRecipe === undefined || currentRecipe !== recipe) {
        recipeElements[recipe].style.display = "block";
        parentElement.appendChild(recipeElements[recipe]);
        const description = document.getElementById(`${recipe}Description`).cloneNode(true);
        description.style.display = "block";
        let equippedButton;
        if (recipe !== "pickaxe27") {
            let time = get("craftingTimeDisplay").cloneNode(true);
            time.style.display = "block";
            parentElement.appendChild(time);
        } else if (currentWorld !== 1.1) {
            equippedButton = get("pickaxe27Craft").cloneNode(true);
            equippedButton.id = "pickaxe27TempCraft";
            equippedButton.style.display = "block";
        }
        let title = document.getElementById("descriptionTitle").cloneNode(true);
        title.style.display = "block";
        parentElement.appendChild(title);
        parentElement.appendChild(description);
        if (equippedButton !== undefined) parentElement.appendChild(equippedButton);
        currentRecipe = recipe;
        getButtonByName(currentRecipe).insertAdjacentElement("afterend", parentElement)
        getButtonByName(currentRecipe).classList.add("selectedOutline");
    } else {
        recipeElements[recipe].style.display = "none";
        while (parentElement.firstChild) parentElement.removeChild(parentElement.firstChild);
        currentRecipe = undefined;
    }
    updateActiveRecipe();
}
let lastCount = -1;
function updateActiveRecipe() {
    let totalCount = 0;
    let count = 0;
    if (currentRecipe !== undefined) {
        let totalRarity = 0;
        let currentRarity = 0;
        if (currentRecipe !== "pickaxe27") {
            const recipe = recipes[currentRecipe].recipe;
            const elements = recipeElements[currentRecipe].children;
            for (let i = 0; i < recipe.length; i++) {
                let ore = recipe[i].ore;
                const toChange = elements[i];
                if (oreList[ore] !== undefined) {
                    totalCount++;
                    let needed = recipe[i].amt;
                    let amtOwned = playerInventory[ore]["normalAmt"];
                    totalRarity += oreList[ore]["numRarity"] * needed;
                    if (oreList[ore]["hasImage"]) {
                        toChange.innerHTML = `<span class="craftingImage"><img src="${oreList[ore]["src"]}"></img></span><span style='text-shadow: -0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff;'>${amtOwned.toLocaleString()}/${needed.toLocaleString()}</span>`
                    } else {
                        toChange.innerHTML = `<span style="filter: drop-shadow(0 0 0.2vw white)">${ore}</span><span style='text-shadow: -0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff;'>${amtOwned.toLocaleString()}/${needed.toLocaleString()}</span>`;
                    }
                    if(amtOwned >= needed) {
                        count++;
                        toChange.style.color = "#6BC267";
                        currentRarity += oreList[ore]["numRarity"] * needed;
                    }
                    else {
                        toChange.style.color = "#FF3D3D";
                        currentRarity += oreList[ore]["numRarity"] * amtOwned;
                    }  
                }
            }
        }
        let button = recipeElements[currentRecipe].lastChild;
        const type = (currentRecipe.indexOf('pickaxe') > -1) ? "pickaxe" : "gear";
        const num = Number(currentRecipe.substring(type.length));
        if (currentRecipe === "pickaxe27") {
            if (currentWorld === 1.1) return;
            button = get("pickaxe27TempCraft");
            if (!(buttonGradients["pickaxe27Craft"]["applied"])) {
                button.style.backgroundImage = buttonGradients["pickaxe27Craft"]["gradient"];
                buttonGradients["pickaxe27Craft"]["applied"] = true;
            }
            if (player.stats.currentPickaxe === "pickaxe27") button.textContent = "Equipped!";
            else button.textContent = "Equip!";
            return;
        } 
        if (player.pickaxes[currentRecipe] || player.gears[currentRecipe]) {
            if (!(buttonGradients[button.id]["applied"])) {
                button.style.backgroundImage = buttonGradients[button.id]["gradient"];
                buttonGradients[button.id]["applied"] = true;
            }
            if (type === "pickaxe" && player.stats.currentPickaxe === currentRecipe) {
                if (currentRecipe === "pickaxe26") button.innerText = "Equipped..?";
                else button.innerText = "Equipped!"
            } else if (type === "pickaxe") {
                if (currentRecipe === "pickaxe26") button.innerText = "Pledge."
                else button.innerText = "Equip!"
            } else {
                if (currentRecipe === "gear9") button.innerText = "SILLIFY!";
                else button.innerText = "Owned!" 
            }
        } else {
            let percent = 100 * (currentRarity/totalRarity);
            percent = Math.round(percent * 100) / 100;
            if (count < totalCount && percent === 100) percent = 99.99; 
            button.style.backgroundImage = "linear-gradient(to right, #6BC267 " + percent + "%, #FF3D3D " + (percent + 5) + "%)";
            if (percent < 100) button.innerText = percent + "%";
            else button.innerText = "Craft!"
            buttonGradients[button.id]["applied"] = false;
        }
        const display = get("craftingTimeDisplay");
        if (display !== null) display.textContent = `Est. Time: ${ct()}`
    }
}
function createPickaxeRecipes() {
    for (let property in recipes) {
        let recipe = recipes[property].recipe;
        const tempElement = document.createElement('div');
        if (property === "pickaxe27") {
            recipeElements[property] = tempElement;
        } else {
            tempElement.classList = 'craftingAmountsDisplay'
            tempElement.id = property;
            for (let i = 0; i < recipe.length; i++) {
                const ore = recipe[i].ore;
                const amtNeeded = recipe[i].amt;
                const amtHave = playerInventory[ore]["normalAmt"];
                const recipeElement = document.createElement('p');
                recipeElement.id = `${property}Display`;
                recipeElement.classList = `recipeOreDisplay`;
                const oreTier = oreList[ore]["oreTier"];
                if (oreList[ore]["hasImage"]) {
                    recipeElement.innerHTML = `<span class="craftingImage"><img src="${oreList[ore]["src"]}"></img></span>${amtHave.toLocaleString()}/${amtNeeded.toLocaleString()}`
                } else {
                    recipeElement.innerText = `${ore} ${amtHave.toLocaleString()}/${amtNeeded.toLocaleString()}`;
                }
                recipeElement.setAttribute("onclick", `randomFunction("${ore}", "crafting")`);
                const colors = oreInformation.getColors(oreList[ore]["oreTier"]);
                recipeElement.style.backgroundImage = `linear-gradient(to right, black, ${colors["backgroundColor"]}, black)`;
                if (amtHave >= amtNeeded) recipeElement.style.color = "#6BC267";
                else recipeElement.style.color = "#FF3D3D";
                tempElement.appendChild(recipeElement);
            }
            let tempButton = document.createElement('button');
            tempButton.id=`${property}Craft`;
            tempButton.classList = "craftPickaxeButton";
            tempButton.setAttribute("onclick", `craftPickaxe("${property}")`);
            tempButton.style.width = "100%";
            tempElement.appendChild(tempButton);
            recipeElements[property] = tempElement;
        }
        
    }
}
function createGearRecipes() {
    return;
}
const buttonGradients = {
    "pickaxe1Craft" : {"gradient" : "linear-gradient(to right, darkgray, darkgray)","applied" : false},
    "pickaxe2Craft" : {"gradient" : "linear-gradient(to right, #412B15, #412B15)","applied" : false},
    "pickaxe3Craft" : {"gradient" : "linear-gradient(to right, #C4A484, #C4A484)","applied" : false},
    "pickaxe4Craft" : {"gradient" : "linear-gradient(to right, white, #C0C0C0)","applied" : false},
    "pickaxe5Craft" : {"gradient" : "linear-gradient(to right, #87CEEB, #2C75FF)","applied" : false},
    "pickaxe6Craft" : {"gradient" : "linear-gradient(to right, #53CB59 30%, 50%, #CF7C5C)","applied" : false},
    "pickaxe7Craft" : {"gradient" : "linear-gradient(to right, #FFC71F 30%, 55%, #440B81)","applied" : false},
    "pickaxe8Craft" : {"gradient" : "linear-gradient(to right, #94BDC0 40%, 60%, #FFFF9D)","applied" : false},
    "pickaxe9Craft" : {"gradient" : "linear-gradient(to right, #E4A436 20%, #00F438, #33FFA4)","applied" : false},
    "pickaxe10Craft" : {"gradient" : "linear-gradient(to right, #DF1717, #00CF11, #2100CA)","applied" : false},
    "pickaxe11Craft" : {"gradient" : "linear-gradient(to right, #A0EE30, #FCFF25, #CFFFFE, #9AC6F1)","applied" : false},
    "pickaxe12Craft" : {"gradient" : "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)","applied" : false},
    "pickaxe13Craft" : {"gradient" : "linear-gradient(to right, #ffffff, #404040)","applied" : false},
    "pickaxe14Craft" : {"gradient" : "linear-gradient(to right, #70E3FF, 65%, #2BFF00)","applied" : false},
    "pickaxe15Craft" : {"gradient" : "linear-gradient(to right, #FF143E 25%, 50%, #3127ED 75%)","applied" : false},
    "pickaxe16Craft" : {"gradient" : "linear-gradient(to right, #FF3607, #FFE428)","applied" : false},
    "pickaxe17Craft" : {"gradient" : "linear-gradient(to right, #FF7011, 40%, #A9A9A9, #6C6C6C)","applied" : false},
    "pickaxe18Craft" : {"gradient" : "linear-gradient(to right, #C6F9FF, #5B6BC1, #FAFAFA)","applied" : false},
    "pickaxe19Craft" : {"gradient" : "linear-gradient(to right, #FF9F39, 30%, #6BFFE5, 80%, #FF9F39)","applied" : false},
    "pickaxe20Craft" : {"gradient" : "linear-gradient(to right, #D10003, #F210A7, 50%, #FFDF55 90%)","applied" : false},
    "pickaxe21Craft" : {"gradient" : "linear-gradient(135deg, #FFE200, #464646, #FFE200, #464646, #FFE200, #464646, #FFE200)","applied" : false},
    "pickaxe22Craft" : {"gradient" : "linear-gradient(to right, #C20000, #FF5300, #0D0D0D, #0D0D0D, #0D0D0D, #0D0D0D, #FF5300, #C20000)","applied" : false},
    "pickaxe23Craft" : {"gradient" : "linear-gradient(to right, #F5F5F5, #0D0D0D, #FFFDAF, #0D0D0D, #F5F5F5)","applied" : false},
    "pickaxe24Craft" : {"gradient" : "linear-gradient(to right, #F6FF58 7%, #0030F1, #676767, #57FDFF, #FC5EFF 93%","applied" : false},
    "pickaxe25Craft" : {"gradient" : "linear-gradient(to right, #FF2454, #600018, #FF8DCC, #121212, #FF8DCC, #600018, #FF2454","applied" : false},
    "pickaxe26Craft" : {"gradient" : "linear-gradient(to right, #000000, #5D0000, #734600, #807A00, #074D00, #006564, #021652 , #3B0076, #460038, #5D0000, #000000)","applied" : false},
    "pickaxe27Craft" : {"gradient" : "linear-gradient(to right, #0CAE5B, #40EE95, #A67B51, #613B16, #A67B51, #40EE95, #0CAE5B)","applied" : false},
    "pickaxe28Craft" : {"gradient" : "linear-gradient(to right, #c370e1, #8282e6, #ffffcd)","applied" : false},
    "pickaxe29Craft" : {"gradient" : "linear-gradient(to right, #882608, #6c1805, #360a0a)","applied" : false},
    "pickaxe30Craft" : {"gradient" : "linear-gradient(to right, #feda84, #976393, #43457f, #ff9b83)","applied" : false},
    "pickaxe31Craft" : {"gradient" : "linear-gradient(to right, #feda84, #976393, #43457f, #ff9b83)","applied" : false},
    

    "gear0Craft" : {"gradient" : "linear-gradient(to right, #005820, #00FF23","applied" : false},
    "gear1Craft" : {"gradient" : "linear-gradient(to right, #FFF1C0, #FF9E40","applied" : false},
    "gear2Craft" : {"gradient" : "linear-gradient(to right, #F9F9F9, #FFFB48","applied" : false},
    "gear3Craft" : {"gradient" : "linear-gradient(to right, #2E2486, #45FFF2, #45A5FF","applied" : false},
    "gear4Craft" : {"gradient" : "linear-gradient(to right, #AEAEAE, #AEAEAE, #49C6FF, #6DD700, #F7F7F7, #AD7F57, #FF6312","applied" : false},
    "gear5Craft" : {"gradient" : "linear-gradient(to right, #CA18FF, #5D6BDC, #00ED2D, #5D6BDC, #CA18FF","applied" : false},
    "gear6Craft" : {"gradient" : "linear-gradient(to right, #CDAE35, #FFF584, #5DFBFF, #FFF584, #CDAE35","applied" : false},
    "gear7Craft" : {"gradient" : "linear-gradient(to right, #62FF96, #F9F9F9, #FF9FDF","applied" : false},
    "gear8Craft" : {"gradient" : "linear-gradient(to right, #FF5609, #D7C100, #A8FF21","applied" : false},
    "gear9Craft" : {"gradient" : "linear-gradient(to right, #FFEFD8, #FF5FE4, #FF2727, #FF5FE4, #FFEFD8)","applied" : false},
    "gear10Craft" : {"gradient" : "linear-gradient(to right, #8BEFFF, #44CDFF","applied" : false},
    "gear11Craft" : {"gradient" : "linear-gradient(to right, #0016AD, #616161, #616161, #FFEF32","applied" : false},
    "gear12Craft" : {"gradient" : "linear-gradient(to right, #931A1C 30%, #9CC400 80%","applied" : false},
    "gear13Craft" : {"gradient" : "linear-gradient(to right, #7AFF1F, #FFEB00, #FF0B0B","applied" : false},
    "gear14Craft" : {"gradient" : "linear-gradient(to right, #856447, #B2B2B2, #585858","applied" : false},
    "gear15Craft" : {"gradient" : "linear-gradient(to right, #DFCE21, #F1F1F1, #0C1656 90%","applied" : false},
    "gear16Craft" : {"gradient" : "linear-gradient(to right, #DCD56B, #550000, #00551F","applied" : false},
    "gear17Craft" : {"gradient" : "linear-gradient(to right, #2E2486, #45FFF2, #45A5FF ","applied" : false},
    "gear18Craft" : {"gradient" : "linear-gradient(to right, #FF7C00 10%, #032A00, #11E900, #032A00, #FF7C00 90%","applied" : false},
    "gear19Craft" : {"gradient" : "linear-gradient(to right, #CDCDCD 5%, #F55D2F, #474747, #EFD754, #474747, #F55D2F, #CDCDCD 95%","applied" : false},
    "gear20Craft" : {"gradient" : "linear-gradient(to right, #000000 5%, #FF3636, #E94585, #000ACE, #FFFFFF 95%","applied" : false},
    "gear21Craft" : {"gradient" : "linear-gradient(to right, #44533D, #37085A, #76734E, #116666, #58340B, #04370A, #3B0505, #740A32, #451676, #236B4B)","applied" : false},
    "gear22Craft" : {"gradient" : "linear-gradient(to right,#FF0B0B, #FFEB00, #7AFF1F)","applied" : false},
    "gear23Craft" : {"gradient" : "linear-gradient(to right, #00dfff, #3a00f9, #15fd00, #3a00f9, #00dfff)","applied" : false},
    "gear24Craft" : {"gradient" : "linear-gradient(to right, #FFFF99, #b4dcf0, #dcf0f0, #b4dcf0, #FFFF99)","applied" : false},
    "gear25Craft" : {"gradient" : "linear-gradient(to right, #e365fc, #c9fc3a, #ff4b33)","applied" : false},
    "gear26Craft" : {"gradient" : "linear-gradient(to right, #a3a09d, #585f2a, #978773, #8a8038, #5b590a)","applied" : false},
    "gear27Craft" : {"gradient" : "linear-gradient(to right, #DAE34A, #C69908, #EF5522, #C69908, #DAE34A)","applied" : false},
    "gear28Craft" : {"gradient" : "linear-gradient(to right, #5A1700, #8C2806, #AB3C16, #BC4E28, #DB5B2F, #F5541D, #FF4100)","applied" : false},
    "gear29Craft" : {"gradient" : "linear-gradient(to right, #2D3250, #424769, #7077A1, #424769, #2D3250","applied" : false},
    "gear30Craft" : {"gradient" : "linear-gradient(to right, #d20202, #d20202","applied" : false},
    "gear31Craft" : {"gradient" : "linear-gradient(to right, #5F9EA0, #5F9EA0","applied" : false},
    "gear32Craft" : {"gradient" : "linear-gradient(to right, #854d89, #a9bf70, #8c4c4c","applied" : false},
    "gear33Craft" : {"gradient" : "linear-gradient(to right, #350264, #303287, #000000, #226e8f, #15116d","applied" : false},
    
}
function craftPickaxe(item) {
    const recipe = recipes[item].recipe;
    const type = (item.indexOf("pickaxe") > -1) ? "pickaxe" : "gear";
    if (item === "pickaxe27" && player.trophyProgress["subrealmOneCompletion"].trophyOwned) {
        player.stats.currentPickaxe = "pickaxe27";
        updateActiveRecipe();
        utilitySwitchActions();
        return;
    }
    if (!player.pickaxes[item] && !player.gears[item]) {
        if (item === "pickaxe13" && !player.pickaxes["pickaxe9"]) return;
        for (let i = 0; i < recipe.length; i++) {
            const amtNeeded = recipe[i].amt;
            const amtHave = playerInventory[recipe[i].ore]["normalAmt"];
            if (amtHave < amtNeeded) return;
        }
        for (let i = 0; i < recipe.length; i++) {
            const ore = recipe[i].ore;
            const amtNeeded = recipe[i].amt;
            playerInventory[ore]["normalAmt"] -= amtNeeded;
            inventoryObj[ore] = 0;
        }
        if (type === "pickaxe") player.pickaxes[item] = true;
        else player.gears[item] = true;
    }
    if (type === "pickaxe") player.stats.currentPickaxe = item;
    if (currentWorld === 1 && item === "gear9")
        gearAbility2();
    if (player.gears["gear0"]) document.getElementById("trackerLock").style.display = "none";
    if (player.gears["gear24"]) get("allowAutoPowerup").style.display = "block";
    updateActiveRecipe();
    utilitySwitchActions();
}
function getButtonByName(item) {
    const toSearch = document.getElementsByClassName("craftingButton");
    for (let i = 0; i < toSearch.length; i++) {
        let toCheck = toSearch[i].getAttribute('onclick');
        toCheck = toCheck.substring(15, toCheck.length - 2)
        if (toCheck === item) return toSearch[i];
    }
    return false;
}
function utilitySwitchActions() {
    const element = document.getElementsByClassName("equippedOutline");
    if (element[0] !== undefined) element[0].classList.remove("equippedOutline");
    const toAdd = getButtonByName(player.stats.currentPickaxe);
    if (toAdd) toAdd.classList.add("equippedOutline");
    changeLayerOres();
    updateAllLayers();
    if (debug) adminChangeLuck(verifiedOres.getCurrentLuck());
    verifiedOres.checkPickaxe();
    verifiedOres.checkCaves();
    displayArea();
    player.displayStatistics.luck = Math.floor(verifiedOres.getCurrentLuck());
    updateSpeed();
}
let m87 = 0;
let m88 = 0;
const showOrders = {
    worldOnePickaxes : ["pickaxe1", "pickaxe2", "pickaxe3", "pickaxe29", "pickaxe30", "pickaxe28", "pickaxe4", "pickaxe5", "pickaxe6", "pickaxe7", "pickaxe8", "pickaxe9", "pickaxe10", "pickaxe11", "pickaxe12", "pickaxe13"],
    worldTwoPickaxes : ["pickaxe13", "pickaxe14", "pickaxe15", "pickaxe16", "pickaxe17", "pickaxe18", "pickaxe19", "pickaxe20", "pickaxe21", "pickaxe22", "pickaxe23", "pickaxe24", "pickaxe25", "pickaxe26"],
    worldOneGears : ["gear30", "gear31", "gear0", "gear1", "gear2", "gear7", "gear8", "gear3", "gear4", "gear5", "gear6", "gear9", "gear29"],
    worldTwoGears : ["gear32", "gear10", "gear11", "gear12", "gear33", "gear13", "gear14", "gear15", "gear16", "gear17", "gear18", "gear19", "gear20", "gear21"],
    srOnePickaxes : ["pickaxe27"],
    srOneGears : ["gear22", "gear23", "gear24", "gear25", "gear26", "gear27", "gear28"],
    wwPickaxes: ["pickaxe31"],
    wwGears: []
}
function showPickaxes() {
    appear(document.getElementById("pickaxeCrafts"));
    disappear(document.getElementById("gearCrafts"));
    m87 = 0;
    m88++;
    if (m88 === 6) {
        let show = true;
        if (!player.trophyProgress["subrealmOneCompletion"].trophyOwned) show = false;
        if (!player.trophyProgress["worldOneCompletion"].trophyOwned) show = false;
        if (!player.trophyProgress["worldTwoCompletion"].trophyOwned) show = false;
        if (show) {
            let children = document.getElementById("pickaxeCrafts").children;
            for (let i = 0; i < children.length; i++) children[i].style.display = "none";
            document.getElementById("nullChroma").style.display = "block";
        } else m88 = 0;
    }
    document.getElementById("oblivionFracturer").style.display = "none";
}
function showGears() {
    disappear(document.getElementById("pickaxeCrafts"));
    appear(document.getElementById("gearCrafts"));
    m87++;
    m88 = 0;
    if (m87 === 3 && currentWorld === 2) document.getElementById("oblivionFracturer").style.display = "block";
        const list = currentWorld === 1 ? showOrders.worldOnePickaxes : (currentWorld === 1.1 ? showOrders.srOnePickaxes : (currentWorld === 1.2 ? showOrders.wwPickaxes : showOrders.worldTwoPickaxes));
        for (let i = 0; i < list.length; i++) {
            getButtonByName(list[i]).style.display = "block";
        }
        document.getElementById("nullChroma").style.display = "none";
}
function switchWorldCraftables() {
    let gearList;
    let pickaxeList;
    const elements = document.getElementsByClassName("craftingButton");
    for (let i = 0; i < elements.length; i++) elements[i].style.display = "none";
    if (currentWorld === 1) {
        gearList = showOrders.worldOneGears;
        pickaxeList = showOrders.worldOnePickaxes;
        const secondaryList = showOrders.worldTwoPickaxes;
        for (let i = 0; i < secondaryList.length; i++) if (player.pickaxes[secondaryList[i]]) pickaxeList.push(secondaryList[i]);
        if (player.trophyProgress["subrealmOneCompletion"].trophyOwned) pickaxeList.push("pickaxe27");
    } else if (currentWorld === 1.1) {
        gearList = showOrders.srOneGears;
        pickaxeList = showOrders.srOnePickaxes;
    }  else if (currentWorld === 1.2) {
        gearList = showOrders.wwGears;
        pickaxeList = showOrders.wwPickaxes;
    }else if (currentWorld === 2) {
        gearList = showOrders.worldTwoGears;
        pickaxeList = showOrders.worldTwoPickaxes;
    }
    for (let i = 0; i < gearList.length; i++) getButtonByName(gearList[i]).style.display = "flex";
    for (let i = 0; i < pickaxeList.length; i++) getButtonByName(pickaxeList[i]).style.display = "flex";
    document.getElementById("nullChroma").style.display = "none";
    document.getElementById("oblivionFracturer").style.display = "none";
    if (indexHasOre("🎂") && currentWorld === 1) document.getElementById("sillyRecipe").style.display = "flex";
    else document.getElementById("sillyRecipe").style.display = "none";
}
function toggleOreForge() {
    let element = document.getElementById("forgeContainer")
    if (element.style.display === "block") {
        element.style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        canMine = true;
    } else {
        element.style.display = "block";
        document.getElementById("mainContent").style.display = "none";
        displayOreRecipe(currentOreRecipe);
        canMine = false;
    }
}
let currentOreRecipe;
const oreRecipes = {
    "frisbeeCraft" : {
        "cost" : [{"ore":"💠","amt":1}, {"ore":"💙","amt":10}],
        "result" : [{"ore":"🥏", "amt":1}],
        "multiplier" : 1
    },
    "diamondCraft" : {
        "cost" : [{"ore":"💙","amt":25}, {"ore":"🔵","amt":250000}],
        "result" : [{"ore":"💠", "amt":1}],
        "multiplier" : 1
    },
    "bowCraft" : {
        "cost" : [{"ore":"📟","amt":2},{"ore":"🖍️","amt":3},{"ore":"❤️","amt":25}],
        "result" : [{"ore":"🎀", "amt":1}],
        "multiplier" : 1
    },
    "fishCraft" : {
        "cost" : [{"ore":"🫧","amt":2},{"ore":"🤿","amt":2},{"ore":"🎣","amt":2},{"ore":"⛵","amt":2}],
        "result" : [{"ore":"🐟", "amt":1}],
        "multiplier" : 1
    },
    "greenCraft" : {
        "cost" : [{"ore":"🟢","amt":35000}],
        "result" : [{"ore":"💚", "amt":1}],
        "multiplier" : 1
    },
    "blueCraft" : {
        "cost" : [{"ore":"🔵","amt":35000}],
        "result" : [{"ore":"💙", "amt":1}],
        "multiplier" : 1
    },
    "yellowCraft" : {
        "cost" : [{"ore":"🟡","amt":20000}],
        "result" : [{"ore":"💛", "amt":1}],
        "multiplier" : 1
    },
    "orangeCraft" : {
        "cost" : [{"ore":"🟠","amt":25000}],
        "result" : [{"ore":"🧡", "amt":1}],
        "multiplier" : 1
    },
    "redCraft" : {
        "cost" : [{"ore":"🔴","amt":20000}],
        "result" : [{"ore":"❤️", "amt":1}],
        "multiplier" : 1
    },
    "purpleCraft" : {
        "cost" : [{"ore":"🟣","amt":20000}],
        "result" : [{"ore":"💜", "amt":1}],
        "multiplier" : 1
    },
    "brownCraft" : {
        "cost" : [{"ore":"🟤","amt":20000}],
        "result" : [{"ore":"🤎", "amt":1}],
        "multiplier" : 1
    },
    "blackCraft" : {
        "cost" : [{"ore":"🔵","amt":30000}, {"ore":"🟡","amt":30000}, {"ore":"🔴","amt":30000}],
        "result" : [{"ore":"🖤", "amt":1}],
        "multiplier" : 1
    },
    "whiteCraft" : {
        "cost" : [{"ore":"🔵","amt":30000}, {"ore":"🟢","amt":30000}, {"ore":"🔴","amt":30000}],
        "result" : [{"ore":"🤍", "amt":1}],
        "multiplier" : 1
    },
    "greenFission" : {
        "cost" : [{"ore":"💚", "amt":1}],
        "result" : [{"ore":"🟢","amt":25000}],
        "multiplier" : 1
    },
    "blueFission" : {
        "cost" : [{"ore":"💙", "amt":1}],
        "result" : [{"ore":"🔵","amt":25000}],
        "multiplier" : 1
    },
    "yellowFission" : {
        "cost" : [{"ore":"💛", "amt":1}],
        "result" : [{"ore":"🟡","amt":15000}],
        "multiplier" : 1
    },
    "orangeFission" : {
        "cost" : [{"ore":"🧡", "amt":1}],
        "result" : [{"ore":"🟠","amt":20000}],
        "multiplier" : 1
    },
    "redFission" : {
        "cost" : [{"ore":"❤️", "amt":1}],
        "result" : [{"ore":"🔴","amt":15000}],
        "multiplier" : 1
    },
    "purpleFission" : {
        "cost" : [{"ore":"💜", "amt":1}],
        "result" : [{"ore":"🟣","amt":15000}],
        "multiplier" : 1
    },
    "brownFission" : {
        "cost" : [{"ore":"🤎", "amt":1}],
        "result" : [{"ore":"🟤","amt":15000}],
        "multiplier" : 1
    },
    "blackFission" : {
        "cost" : [{"ore":"🖤", "amt":1}],
        "result" : [{"ore":"🔵","amt":20000}, {"ore":"🟡","amt":20000}, {"ore":"🔴","amt":20000}],
        "multiplier" : 1
    },
    "whiteFission" : {
        "cost" : [{"ore":"🤍", "amt":1}],
        "result" : [{"ore":"🔵","amt":20000}, {"ore":"🟢","amt":20000}, {"ore":"🔴","amt":20000}],
        "multiplier" : 1
    },
    "gearCraft" : {
        "cost" : [{"ore":"🤍","amt":1}, {"ore":"🖤","amt":2}, {"ore":"⚫","amt":10000}],
        "result" : [{"ore":"⚙️", "amt":1}],
        "multiplier" : 1
    },
    "batteryCraft" : {
        "cost" : [{"ore":"💍","amt":2}, {"ore":"🥏","amt":3}, {"ore":"🤍","amt":5}, {"ore":"💚","amt":10}, {"ore":"🔵","amt":50000}],
        "result" : [{"ore":"🔋", "amt":1}],
        "multiplier" : 1
    },
    "bambooCraft" : {
        "cost" : [{"ore":"🎄","amt":2}, {"ore":"🌻","amt":2}, {"ore":"🍁","amt":2}, {"ore":"💚","amt":20}, {"ore":"🟢","amt":100000}],
        "result" : [{"ore":"🎍", "amt":1}],
        "multiplier" : 1
    },
    "idoliumFission" : {
        "cost" : [{"ore":"💎","amt":1}],
        "result" : [{"ore":"🔮", "amt":2}, {"ore":"🔋", "amt":2}, {"ore":"💍", "amt":4}, {"ore":"🥏", "amt":5}, {"ore":"💠", "amt":10}, {"ore":"🪨", "amt":250000}],
        "multiplier" : 1
    },
    "cylinderFission" : {
        "cost" : [{"ore":"🧵","amt":1}],
        "result" : [{"ore":"🕯️", "amt":2}, {"ore":"🎨", "amt":1}, {"ore":"🥽", "amt":5}, {"ore":"🪄", "amt":10}, {"ore":"🌫️", "amt":750000}],
        "multiplier" : 1
    },
    "circleFission" : {
        "cost" : [{"ore":"⭕","amt":1}],
        "result" : [{"ore":"🔕", "amt":2}],
        "multiplier" : 1
    }
}
function getRecipeById(id) {
    return oreRecipes[id];
}
function displayOreRecipe(id) {
    if (id === currentOreRecipe) {
        document.getElementById("forgeSettings").style.display = "none";
        let parent = document.getElementById("forgeRecipeDisplay");
        parent.style.display = "none";
        while (parent.firstChild) parent.removeChild(parent.firstChild);
        currentOreRecipe = "";
    } else {
        let parent = document.getElementById("forgeRecipeDisplay");
        while (parent.firstChild) parent.removeChild(parent.firstChild);
        parent.style.display = "block";
        document.getElementById("forgeSettings").style.display = "block";
        currentOreRecipe = id;
        let recipe = getRecipeById(id);
        recipe["multiplier"] = 1;
        document.getElementById("forgeCraftingAmount").innerText = "1x";
        for (let i = 0; i < recipe["cost"].length; i++) {
            let ore = recipe["cost"][i]["ore"];
            let amt = recipe["cost"][i]["amt"];
            let element = document.createElement("p");
            let colors = oreInformation.getColors(oreList[ore]["oreTier"]);
            element.style.backgroundImage = "linear-gradient(to right, black, " + colors["backgroundColor"] + ", black)";
            element.innerHTML = `${ore} <span style='text-shadow: -0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff;'>${playerInventory[ore]["normalAmt"].toLocaleString()}/${amt.toLocaleString()}</span>`;
            element.classList = "recipeOreDisplay";
            if (playerInventory[ore]["normalAmt"] >= amt)
                element.style.color = "#6BC267";
            else
                element.style.color = "#FF3D3D";
            parent.appendChild(element);
        }
        for (let i = 0; i < recipe["result"].length; i++) {
            let ore = oreRecipes[id]["result"][i]["ore"];
            let element = document.createElement("p");
            if (i === 0) element.style.borderTop = "1px solid white";
            let colors = oreInformation.getColors(oreList[ore]["oreTier"]);
            element.style.backgroundImage = "linear-gradient(to right, black, " + colors["backgroundColor"] + ", black)";
            element.style.color = colors["textColor"];
            if (colors["textColor"] === "#ffffff") element.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
            else element.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
            element.innerText = `${ore} x${(oreRecipes[id]["result"][i]["amt"] * oreRecipes[id]["multiplier"]).toLocaleString()}`;
            element.classList = "recipeOreDisplay";
            parent.appendChild(element);
        }
    }
}
function multiplyRecipe(amt) {
    amt = Number(amt);
    if (isNaN(amt)) return;
    if (amt < 1) amt = 1;
    amt = Math.floor(amt);
    document.getElementById("forgeCraftingAmount").innerText = `${amt.toLocaleString()}x`;
    document.getElementById('amountInputText').value = "";
    let recipe = getRecipeById(currentOreRecipe);
    recipe["multiplier"] = amt;
    let parent = document.getElementById("forgeRecipeDisplay");
    while (parent.firstChild) parent.removeChild(parent.firstChild);
    for (let i = 0; i < recipe["cost"].length; i++) {
        let ore = recipe["cost"][i]["ore"];
        let amt = recipe["cost"][i]["amt"] * recipe["multiplier"];
        let element = document.createElement("p");
        let colors = oreInformation.getColors(oreList[ore]["oreTier"]);
        element.style.backgroundImage = "linear-gradient(to right, black, " + colors["backgroundColor"] + ", black)";
        element.innerHTML = `${ore} <span style='text-shadow: -0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff;'>${playerInventory[ore]["normalAmt"].toLocaleString()}/${amt.toLocaleString()}</span>`;
        element.classList = "recipeOreDisplay";
        if (playerInventory[ore]["normalAmt"] >= amt)
            element.style.color = "#6BC267";
        else
            element.style.color = "#FF3D3D";
        parent.appendChild(element);
    }
    for (let i = 0; i < recipe["result"].length; i++) {
        let ore = recipe["result"][i]["ore"];
        let element = document.createElement("p");
        if (i === 0) element.style.borderTop = "1px solid white";
        let colors = oreInformation.getColors(oreList[ore]["oreTier"]);
        element.style.backgroundImage = "linear-gradient(to right, black, " + colors["backgroundColor"] + ", black)";
        element.style.color = colors["textColor"];
        if (colors["textColor"] === "#ffffff") element.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
        else element.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
        element.innerText = `${ore} x${(recipe["result"][i]["amt"] * recipe["multiplier"]).toLocaleString()}`;
        element.classList = "recipeOreDisplay";
        parent.appendChild(element);
    }
}
function craftOre(id) {
    let recipe = getRecipeById(id);
    let canCraft = true;
    for (let i = 0; i < recipe["cost"].length; i++) {
        let ore = recipe["cost"][i]["ore"];
        let amt = recipe["cost"][i]["amt"] * recipe["multiplier"];
        if (playerInventory[ore]["normalAmt"] < amt) {
            canCraft = false; 
            break;
        }
    }
    if (canCraft) {
        for (let i = 0; i < recipe["cost"].length; i++) {
            let ore = recipe["cost"][i]["ore"];
            let amt = recipe["cost"][i]["amt"] * recipe["multiplier"];
            playerInventory[ore]["normalAmt"] -= amt;
            inventoryObj[ore] = 0;
        }
        for (let i = 0; i < recipe["result"].length; i++) {
            playerInventory[recipe["result"][i]["ore"]]["normalAmt"] += (recipe["result"][i]["amt"] * recipe["multiplier"]);
            inventoryObj[recipe["result"][i]["ore"]] = 0;
            multiplyRecipe(oreRecipes[id]["multiplier"]);
        }
    }
        
}
/*
4383 4576
19928 20978
30397 33246
37468 41654
46650 54781
*/
const upgradeRecipes = {
    "pickaxe27" : {
        "upgrade0" : 
        {
            recipe : [
                {ore: "🇩🇿", amt: 25},
                {ore: "🇸🇩", amt: 25},
                {ore: "🇺🇬", amt: 5},
                {ore: "🇰🇪", amt: 3},
            ],
            descriptions : [
                "Luck:<br>1 -> 3",
                "Ability Size:<br>4,383 -> 19,928"
            ]
        },
        "upgrade1" : 
        {
            recipe : [
                {ore: "🇪🇬", amt: 100},
                {ore: "🇪🇹", amt: 90},
                {ore: "🇳🇬", amt: 80},
                {ore: "🇹🇷", amt: 70},
                {ore: "🇮🇷", amt: 60},
                {ore: "🇻🇳", amt: 50},
                {ore: "🇵🇭", amt: 30},
            ],
            descriptions : [
                "Luck:<br>3 -> 10",
                "Ability Size:<br>19,928 -> 30,397"
            ]
        },
        "upgrade2" : 
        { 
            recipe : [   
                {ore: "🇨🇦", amt: 50},
                {ore: "🇲🇽", amt: 40},
                {ore: "🇺🇸", amt: 30},
                {ore: "🇳🇱", amt: 15},
                {ore: "🇷🇴", amt: 12},
                {ore: "🇺🇦", amt: 10},
                {ore: "🇵🇱", amt: 8},
            ],
            descriptions : [
                "Luck:<br>10 -> 20",
                "Ability Size:<br>30,397 -> 37,468"
            ]
        },
        "upgrade3" : 
        { 
            recipe : [   
                {ore: "🇬🇧", amt: 35},
                {ore: "🇩🇪", amt: 30},
                {ore: "🇷🇺", amt: 25},
                {ore: "🇺🇾", amt: 10},
                {ore: "🇵🇾", amt: 7},
                {ore: "🇧🇴", amt: 4},
            ],
            descriptions : [
                "Luck:<br>20 -> 40",
                "Ability Size:<br>37,491 -> 46,650"
            ]
        },
        "upgrade4" : 
        { 
            recipe : [   
                {ore: "🇵🇪", amt: 15},
                {ore: "🇦🇷", amt: 12},
                {ore: "🇨🇴", amt: 10},
                {ore: "🇧🇷", amt: 8},
                {ore: "🇼🇸", amt: 5},
                {ore: "🇳🇨", amt: 3},
                {ore: "🇵🇫", amt: 1},
            ],
            descriptions : [
                "Luck:<br>40 -> 100",
                "Ability Size:<br>46,650 -> 54,298"
            ]
        },
        //54298 63893
        
    }
}
let currentDisplayedUpgrade;
function displayUpgrade(id, location) {
    currentDisplayedUpgrade = {id: id, location: location};
    let holder = document.getElementById("upgradeRecipeHolder");
    while (holder.firstChild) holder.removeChild(holder.firstChild);
    location = location.parentElement;
    window.onmousemove = workshopMouse;
    if (player.upgrades[id].level >= player.upgrades[id].maxLevel) {
        if (location.lastChild.classList !== undefined) {
            if (location.lastChild.classList.contains("upgradeMaxLevel")) location.removeChild(location.lastChild);
        }
        const maxElement = document.createElement('p');
        maxElement.innerText = "Max Level Reached!";
        maxElement.classList = "upgradeMaxLevel";
        location.appendChild(maxElement);
        return;
    }
    const currentUpgrade = upgradeRecipes[id][`upgrade${player.upgrades[id].level}`].recipe;
    if (currentUpgrade === undefined) return;
    let element = document.createElement('p');
    element.classList = 'upgradeRecipeElement';
    let colors;
    let amt;
    let needed;
    let ore;
    let totalNeed = 0;
    let totalHave = 0;
    let count = 0;
    let totalCount = 0;
    currentUpgrade.forEach(recipeElement => {
        ore = recipeElement.ore;
        needed = recipeElement.amt;
        amt = playerInventory[ore]["normalAmt"];
        totalNeed += oreList[ore]["numRarity"] * needed;
        totalHave += amt >= needed ? (oreList[ore]["numRarity"] * needed) : (oreList[ore]["numRarity"] * amt);
        totalCount++;
        count += amt >= needed ? 1 : 0;
        element.innerText = `${ore} ${amt}/${needed}`;
        element.style.color = amt >= needed ? "#6BC267" : "#FF3D3D";
        colors = oreInformation.getColors(oreList[ore]["oreTier"]);
        element.style.backgroundImage = `linear-gradient(to right, black, ${colors["backgroundColor"]}, black)`;
        element.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
        element.setAttribute("onclick", `randomFunction("${ore}", "crafting")`);
        holder.appendChild(element.cloneNode(true));
    });
    const progressElement = document.createElement('p');
    progressElement.classList = "upgradeRecipeProgress";
    let percent = 100 * (totalHave/totalNeed);
    percent = Math.round(percent * 100) / 100
    if (count < totalCount && percent === 100) percent = 99.99; 
    progressElement.style.backgroundImage = `linear-gradient(to right, #6BC267 ${percent}%, #FF3D3D ${(percent + 5)}%)`;
    if (percent < 100) progressElement.innerText = percent + "%";
    else progressElement.innerText = "Can Upgrade!";
    holder.appendChild(progressElement);
    if (location.lastChild.id === "upgradeRecipeHolder") location.removeChild(location.lastChild);
    holder = holder.cloneNode(true);
    location.appendChild(holder);
    holder.style.display = "block";
} 
function updateDisplayedUpgrade() {
    updateUpgradeDisplay();
    if (document.getElementById("workshopContainer").style.display === "none" || currentDisplayedUpgrade === undefined) return;
    displayUpgrade(currentDisplayedUpgrade.id, currentDisplayedUpgrade.location);
}
function craftUpgrade(id) {
    if (player.upgrades[id].level >= player.upgrades[id].maxLevel) return;
    const currentUpgrade = upgradeRecipes[id][`upgrade${player.upgrades[id].level}`].recipe;
    if (currentUpgrade === undefined) return;
    for (let i = 0; i < currentUpgrade.length; i++) {
        let recipeElement = currentUpgrade[i];
        if (playerInventory[recipeElement.ore]["normalAmt"] < recipeElement.amt) return;
    }
    removeParadoxical();
    for (let i = 0; i < currentUpgrade.length; i++) {
        let recipeElement = currentUpgrade[i];
        playerInventory[recipeElement.ore]["normalAmt"] -= recipeElement.amt;
    }
    player.upgrades[id].level++;
    player.upgrades[id].bought++;
    updateDisplayedUpgrade();
    utilitySwitchActions();
    updateTolLuck();
}
let keepShowingUpgrade = false;
let lastShownUpgrade;
let overUpgrade = false;
function workshopMouse(event) {
    let parent = currentDisplayedUpgrade.location.parentElement
    let parentNums = parent.getBoundingClientRect();
    let bottomCheck = parentNums.bottom + 1;
    let leftCheck = parentNums.left;
    let rightCheck = parentNums.right;
    let topCheck = currentDisplayedUpgrade.location.getBoundingClientRect().top - 1;
    let heightToAdd = document.getElementById("upgradeRecipeHolder").getBoundingClientRect().height;
    overUpgrade = (event.clientY >= topCheck && event.clientY <= bottomCheck + heightToAdd && event.clientX >= leftCheck && event.clientX <= rightCheck);
    if (!overUpgrade) hideUpgrade()
}
function hideUpgrade() {
    lastShownUpgrade = currentDisplayedUpgrade.location;
    currentDisplayedUpgrade.location.parentElement.removeChild(currentDisplayedUpgrade.location.parentElement.lastChild);
    currentDisplayedUpgrade = undefined;   
    window.onmousemove = "";
}
function updateUpgradeDisplay() {
    let toEdit = document.getElementsByClassName("workshopInformationLevel");
    toEdit[0].innerText = `Level ${player.upgrades["pickaxe27"].level}/${player.upgrades["pickaxe27"].maxLevel}`;
    toEdit = document.getElementsByClassName("workshopInformationLevelDescriptor");
    
    let output = "";
    if (player.upgrades["pickaxe27"].level >= player.upgrades["pickaxe27"].maxLevel) {
        output = "Ability Size: 54,298<br>Luck: 100";
    } else {
        let descriptions = upgradeRecipes["pickaxe27"][`upgrade${player.upgrades["pickaxe27"].level}`].descriptions;
        for (let i = 0; i < descriptions.length; i++) {
            output += `${descriptions[i]}<br>`;
        }
    }
    toEdit[0].innerHTML = output;
}
function updateTolLuck() {
    document.getElementById("treeOfLifeLuck").innerText = `Has ${player.upgrades["pickaxe27"].levelLuck[player.upgrades["pickaxe27"].level]}x Luck.`;
    document.getElementById("treeOfLifeSpeed").innerText = `${10 - player.upgrades["pickaxe27"].level}ms`;
}
function addPickaxeDescriptions() {
    const ignore = ["pickaxe0", "pickaxe13", "pickaxe23", "pickaxe26", "pickaxe27"]
    for (let pickaxeName in pickaxeStats) {
        if (ignore.indexOf(pickaxeName) === -1) {
            const mainElement = get(`${pickaxeName}Description`);
            let children = mainElement.children;
            const appendSecond = children[1];
            let html = `<span>Has an ability proc rate of 1/${pickaxeStats[pickaxeName].rate}.<br>Has ${pickaxeStats[pickaxeName].luck}x luck.<br>${pickaxeStats[pickaxeName].extraInformation !== undefined ? (pickaxeStats[pickaxeName].extraInformation + "<br>") : ""}`
            appendSecond.insertAdjacentHTML("beforebegin", html);
        }
    }
    
}
const pickaxeStats = {
    "pickaxe0" : {
        mined: 1, 
        revealed: 1,
        luck: 1, 
        rate: 1, 
        src: "⛏️", 
        doAbility: function(x, y) {null;},
        canSpawnCaves:[],
        canMineIn:[1],
    },
    "pickaxe1" : {
        mined: 48, 
        revealed: 140, 
        luck: 1, 
        rate: 50, 
        src: `<img class="mineImage" src="media/mulchMalletIcon.png"></img>`, 
        ability:"media/abilityImages/mulchMalletAbility.png", 
        doAbility: function(x, y) {pickaxeAbility1(x, y)},
        canSpawnCaves:[],
        canMineIn:[1],
    },
    //2 cons
    "pickaxe2" : {
        mined: 96, 
        revealed: 156, 
        luck: 1.1, 
        rate: 50, 
        src: `<img class="mineImage" src="media/mudSickleIcon.png"></img>`, 
        ability:"media/abilityImages/mudSickleAbility.png", 
        doAbility: function(x, y) {pickaxeAbility2(x, y)},
        canSpawnCaves:[],
        canMineIn:[1],
    },
    //3.5 cons
    "pickaxe3" : {
        mined: 228, 
        revealed: 468, 
        luck: 1.1, 
        rate: 100, 
        src: `<img class="mineImage" src="media/dirtRavagerIcon.png"></img>`, 
        ability:"media/abilityImages/dirtRavagerAbility.png", 
        doAbility: function(x, y) {pickaxeAbility3(x, y)},
        canSpawnCaves:[],
        canMineIn:[1],
    },
    //5.148 cons
    "pickaxe28" : {
        mined: 248, 
        revealed: 354, 
        luck: 1.275, 
        rate: 60, 
        src: `<img class="mineImage" src="media/crystallineExcavatorIcon.png"></img>`, 
        ability:"media/abilityImages/crystallineExcavatorAbility.png", 
        doAbility: function(x, y) {pickaxeAbility28(x, y) },
        canSpawnCaves:[],
        canMineIn:[1],
        },
    //7.52 cons
    "pickaxe29": {
        mined: 309,
        revealed: 423,
        luck: 1.2,
        rate: 50,
        src: "⛏️",
        ability: "media/abilityImages/anchorAbility.png",
        doAbility: function(x, y) { pickaxeAbility29(x, y) },
        canSpawnCaves:[],
        canMineIn:[1],
    },
    //10.15 cons
    "pickaxe30": {
        mined: 378,
        revealed: 510,
        luck: 1.3,
        rate: 45,
        src: `<img class="mineImage" src="media/tropicalCarverIcon.webp"></img>`,
        ability: "media/abilityImages/palmTreeAbility.png",
        doAbility: function(x, y) { pickaxeAbility30(x, y) },
        canSpawnCaves:[],
        canMineIn:[1],
    },
    //14.73 cons
    "pickaxe4": {
        mined: 437,
        revealed: 597,
        luck: 1.25,
        rate: 35,
        src: `<img class="mineImage" src="media/voidCrusherIcon.webp"></img>`,
        ability: "media/abilityImages/voidCrusherAbility.png",
        doAbility: function(x, y) { pickaxeAbility4(x, y) },
        canSpawnCaves:[],
        canMineIn:[1],
    },
    //21.32 cons
    "pickaxe5": {
        mined: 604,
        revealed: 796,
        luck: 1.3,
        rate: 35,
        src: `<img class="mineImage" src="media/geodeStaffIcon.png"></img>`,
        ability: "media/abilityImages/geodeStaffAbility.png",
        doAbility: function(x, y) { pickaxeAbility5(x, y) },
        canSpawnCaves:[1],
        canMineIn:[1],
        extraInformation: "Enables cave spawns in World 1, along with every pickaxe after it."
    },
    //29.56 cons
    "pickaxe6": {
        mined: 822,
        revealed: 1207,
        luck: 1.3,
        rate: 40,
        src: `<img class="mineImage" src="media/earthSoilerIcon.png"></img>`,
        ability: "media/abilityImages/earthSoilerAbility.png",
        doAbility: function(x, y) { pickaxeAbility6(x, y) },
        canSpawnCaves:[1],
        canMineIn:[1],
    },
    //44 cons
    "pickaxe7": {
        mined: 1036,
        revealed: 2731,
        luck: 1.75,
        rate: 65,
        src: `<img class="mineImage" src="media/cryptSmasherIcon.png"></img>`,
        ability: "media/abilityImages/cryptSmasherAbility.png",
        doAbility: function(x, y) { pickaxeAbility7(x, y) },
        canSpawnCaves:[1],
        canMineIn:[1],
        extraInformation: "85% line repetition chance, 7 max repetitions.",
    },
    //73.52 cons
    "pickaxe8": {
        mined: 1264,
        revealed: 2095,
        luck: 3.75,
        rate: 60,
        src: "⛏️",
        ability: "media/abilityImages/labyrinthianTideAbility.png",
        doAbility: function(x, y) { pickaxeAbility8(x, y) },
        canSpawnCaves:[1],
        canMineIn:[1],
        extraInformation: "70% line repetition chance, 7 max repetitions.",
    },
    //130.93 cons
    "pickaxe9": {
        mined: 1445,
        revealed: 1665,
        luck: 5,
        rate: 35,
        src: `<img class="mineImage" src="media/77LeafDestroyerIcon.png"></img>`,
        ability: "media/abilityImages/77LeafDestroyerAbility.png",
        doAbility: function(x, y) { pickaxeAbility9(x, y) },
        canSpawnCaves:[1],
        canMineIn:[1],
        extraInformation: "<i>The pickaxe resonates with a distant entity.. a signal sent from far beyond these lands. Further traces of it are found within the blueprint for a particular craft of a key, one designed to open the lock to a completely new world..</i>",
    },
    //237.85 cons
    "pickaxe10": {
        mined: 1989,
        revealed: 2803,
        luck: 7.5,
        rate: 50,
        src: "⛏️",
        ability: "media/abilityImages/planetBusterAbility.png",
        doAbility: function(x, y) { pickaxeAbility10(x, y) },
        canSpawnCaves:[1],
        canMineIn:[1],
},
    //420.45 cons
    "pickaxe11": {
        mined: 2564,
        revealed: 3288,
        luck: 25,
        rate: 80,
        src: `<img class="mineImage" src="media/whirlpoolOfFateIcon.png"></img>`,
        ability: "media/abilityImages/whirlpoolOfFateAbility.png",
        doAbility: function(x, y) { pickaxeAbility11(x, y) },
        canSpawnCaves:[1],
        canMineIn:[1],
},
    //1027.5 cons
    "pickaxe12": {
        mined: 7269,
        revealed: 8025,
        luck: 60,
        rate: 250,
        src: `<img class="mineImage" src="media/wingsOfGloryIcon.png"></img>`,
        ability: "media/abilityImages/wingsOfGloryAbility.png",
        doAbility: function(x, y) { pickaxeAbility12(x, y) },
        canSpawnCaves:[1],
        canMineIn:[1],
        extraInformation: "Mines 2 blocks at once when using automine.<br>Has 2x special cave type luck and slightly increased cave size.",
},
    
    "pickaxe13": {
        mined: 1,
        revealed: 1,
        luck: 1,
        rate: 1,
        src: `<img class="mineImage" src="media/theKeyIcon.png"></img>`,
        doAbility: function(x, y) { null; },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
},
    "pickaxe14": {
        mined: 40,
        revealed: 51,
        luck: 1.05,
        rate: 45,
        src: `<img class="mineImage" src="media/extremeEcholocatorIcon.png"></img>`,
        ability: "media/abilityImages/extremeEcholocatorAbility.png",
        doAbility: function(x, y) { pickaxeAbility14(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
},
    "pickaxe15": {
        mined: 112,
        revealed: 140,
        luck: 1.075,
        rate: 75,
        src: "⛏️",
        ability: "media/abilityImages/corundumCaverAbility.png",
        doAbility: function(x, y) { pickaxeAbility15(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
},
    "pickaxe16": {
        mined: 218,
        revealed: 292,
        luck: 1.3,
        rate: 100,
        src: `<img class="mineImage" src="media/starborneSlasherIcon.webp"></img>`,
        ability: "media/abilityImages/starborneSlasherAbility.png",
        doAbility: function(x, y) { pickaxeAbility16(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
},
    "pickaxe17": {
        mined: 826,
        revealed: 936,
        luck: 1,
        rate: 150,
        src: `<img class="mineImage" src="media/nyabombIcon.png"></img>`,
        ability: "media/abilityImages/nyabombAbility.png",
        doAbility: function(x, y) { pickaxeAbility17(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
},
    "pickaxe18": {
        mined: 1005,
        revealed: 1160,
        luck: 1.5,
        rate: 150,
        src: `<img class="mineImage" src="media/lunarLightsabreIcon.png"></img>`,
        ability: "media/abilityImages/lunarLightsabreAbility.png",
        doAbility: function(x, y) { pickaxeAbility18(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
},
    "pickaxe19": {
        mined: 656,
        revealed: 754,
        luck: 2,
        rate: 60,
        src: "⛏️",
        ability: "media/abilityImages/gemstoneEngraverAbility.png",
        doAbility: function(x, y) { pickaxeAbility19(x, y, 0)},
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
        extraInformation: "High repetition chance, 7 max repititions."
},
    "pickaxe20": {
        mined: 1082,
        revealed: 1343,
        luck: 3,
        rate: 75,
        src: `<img class="mineImage" src="media/gamblersFallacyIcon.png"></img>`,
        ability: "media/abilityImages/gamblersFallacyAbility.png",
        doAbility: function(x, y) { pickaxeAbility20(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
},
    "pickaxe21": {
        mined: 1946,
        revealed: 4489,
        luck: 2,
        rate: 75,
        src: "⛏️",
        ability: "media/abilityImages/exponentialCentrifugeAbility.png",
        doAbility: function(x, y) { pickaxeAbility21(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
},
    "pickaxe22": {
        mined: 2498,
        revealed: 5632,
        luck: 4,
        rate: 120,
        src: "⛏️",
        ability: "media/abilityImages/singularitySlammerAbility.png",
        doAbility: function(x, y) { pickaxeAbility22(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
},
    "pickaxe23": {
        mined: 4518,
        revealed: 6325,
        luck: 8.25,
        rate: 150,
        src: `<img class="mineImage" src="media/staffOfBindingIcon.png"></img>`,
        ability: "media/abilityImages/staffOfBindingAbility.png",
        doAbility: function(x, y) { pickaxeAbility23(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
},
    "pickaxe24": {
        mined: 7964,
        revealed: 9800,
        luck: 12.5,
        rate: 175,
        src: `<img class="mineImage" src="media/sssIcon.png"></img>`,
        ability: "media/abilityImages/sssAbility.png",
        doAbility: function(x, y) { pickaxeAbility24(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
        extraInformation: "You've mined too much, best to turn back now. Be warned.",
},
    "pickaxe25": {
        mined: 15131,
        revealed: 18594,
        luck: 50,
        rate: 300,
        src: `<img class="mineImage" src="media/coronaryCatastropheIcon.webp"></img>`,
        ability: "media/abilityImages/coronaryCatastropheAbility.png",
        doAbility: function(x, y) { pickaxeAbility25(x, y) },
        canSpawnCaves:[1, 2],
        canMineIn:[1, 2],
        extraInformation: "<i style='font-size: 75%;'>..This is where it ends? The most powerful tool in all the worlds..? No.. it can't end here there must be something more...</i><br><i>Warning: High mine capacities with this pickaxe may lead to game crashes.</i>",
},
    "pickaxe26": {
        mined: 21021,
        revealed: 26494,
        luck: 175,
        rate: 150,
        src: `<img class="mineImage" src="media/nullChromaIcon.png"></img>`,
        doAbility: function(x, y) { pickaxeAbility26(x, y) },
        canSpawnCaves:[1, 2, 1.2],
        canMineIn:[1, 2, 1.2],
},
    "pickaxe27" : {
        0 : {mined: 4383, revealed: 4576, luck: 1},
        1 : {mined: 19928, revealed: 20978, luck: 3},
        2 : {mined: 30397, revealed: 33246, luck: 10},
        3 : {mined: 37468, revealed: 41654, luck: 20},
        4 : {mined: 46650, revealed: 54781, luck: 40},
        5 : {mined: 54298, revealed: 63893, luck: 100},
        rate: 500,
        src : "⛏️",
        doAbility: function(x, y) {pickaxeAbility27(x, y)},
        canSpawnCaves:[1, 1.1],
        canMineIn:[1, 1.1],
    }, 
    "pickaxe31" : {
        mined: 34321,
        revealed: 35899,
        luck: 425,
        rate: 200,
        src : `<img class="mineImage" src="media/underseaEvisceratorIcon.webp"></img>`,
        ability: "media/abilityImages/underseaEvisceratorAbility.png",
        doAbility: function(x, y) {pickaxeAbility31(x, y)},
        canSpawnCaves:[1, 1.2, 2],
        canMineIn:[1, 1.2, 2],
    },
    
}
 //378 510 for 30
 //309 423 for 29
 
 
function ct() {
    const nums = calcSpeed();
    nums.speed = nums.speed < 1 ? 0 : nums.speed;
    const speed = (1000 / nums.speed) * nums.reps + nums.extra;
    const pickaxeUsing = player.stats.currentPickaxe;
    const abilityMined = pickaxeUsing !== "pickaxe27" ? pickaxeStats[pickaxeUsing].mined : pickaxeStats["pickaxe27"][player.upgrades["pickaxe27"].level].mined;
    const abilityRevealed = pickaxeUsing !== "pickaxe27" ? pickaxeStats[pickaxeUsing].revealed : pickaxeStats["pickaxe27"][player.upgrades["pickaxe27"].level].revealed;
    let m = 1;
    if (currentWorld < 2 && player.gears["gear8"]) m += 0.2;
    if (player.gears["gear23"]) m += 0.15;
    if (batteryEvent) m += 0.1;
    const abilityRate = pickaxeUsing !== "pickaxe27" ? pickaxeStats[pickaxeUsing].rate/m : 500/m;
    const recipe = !overUpgrade ? recipes[currentRecipe].recipe : player.upgrades["pickaxe27"].level === player.upgrades["pickaxe27"].maxLevel ? "RETURN" : upgradeRecipes["pickaxe27"][`upgrade${player.upgrades["pickaxe27"].level}`].recipe;
    if (recipe === "RETURN") return;
    const recipeLayers = {
    }
    for (let i = 0; i < recipe.length; i++) {
        const ore = recipe[i].ore;
        if (!oreList[ore]["caveExclusive"] && oreList[ore]["oreTier"] !== "Celestial") {
            let currentOreLayer;
            if (oreInformation.isCommon(oreList[ore]["oreTier"]) && oreList[ore]["oreTier"] !== "Layer") {
                recipeLayers.commons ??= {ore: ore, highestProcs : 0}
                currentOreLayer = "commons";
            } else {
                for (let layer in layerDictionary) {
                    if (layerDictionary[layer].layer.includes(ore)) {
                        recipeLayers[layer] ??= {ore: ore, highestProcs : 0}
                        currentOreLayer = layer;
                        break;
                    }
                }
            }
            let needed = recipe[i].amt;
            let have = playerInventory[ore]["normalAmt"];
            have = have >= needed ? needed : have;
            needed -= have;
            const rarity = 1/oreList[ore]["decimalRarity"];
            const totalOreRarity = (rarity * needed);
            let totalProcsNeeded;
            if (currentOreLayer === "commons") {
                totalProcsNeeded = totalOreRarity/abilityMined;
                if (totalProcsNeeded > recipeLayers["commons"].highestProcs) {
                    recipeLayers["commons"].highestProcs = totalProcsNeeded;
                    recipeLayers["commons"].ore = ore;
                }
            } else {
                totalProcsNeeded = totalOreRarity/abilityRevealed;
                if (oreList[ore]["oreTier"] === "Layer") totalProcsNeeded = totalOreRarity/abilityMined;
                if (totalProcsNeeded > recipeLayers[currentOreLayer].highestProcs) {
                    recipeLayers[currentOreLayer].highestProcs = totalProcsNeeded;
                    recipeLayers[currentOreLayer].ore = ore;
                }
            }
        }
    }
    let totalProcs = 0;
    let commonsAdded = false;
    const keys = Object.keys(recipeLayers);
    if (recipeLayers["commons"] !== undefined) {
        for (let layer in recipeLayers) {
            if (recipeLayers[layer].highestProcs < recipeLayers["commons"].highestProcs && !commonsAdded) {
                recipeLayers[layer].highestProcs = recipeLayers["commons"].highestProcs;
                commonsAdded = true;
            }
        }
    }
    if (recipeLayers["commons"] !== undefined) delete recipeLayers["commons"];
    for (let layer in recipeLayers) {
        totalProcs += recipeLayers[layer].highestProcs;
    }
    let timeForProcs = (Math.floor(totalProcs) * abilityRate) / speed;
    return longTime(timeForProcs * 1000);
}
let lastUsedId = undefined;
let justCreated = false;
function createPolygon(element) {
    if (justCreated) {
        removePolygon(element);
        return;
    }
    justCreated = true;
    removePolygon(0, true);
    const canvas = document.createElement('div');
    canvas.id = "hologramTriangle"
    canvas.style.height = "15vw";
    canvas.style.width = "10%";
    canvas.style.backgroundColor = "rgba(77, 255, 77, 0.25)";
    canvas.style.clipPath = "polygon(0% 0%, 100% 0%, 70% 100%, 30% 100%)";
    const image = document.createElement('img');
    image.width = "10%";
    image.height = "auto";
    image.id = "abilityImage";
    image.style.display = "none";
    element.children[0].textContent = "Hide Ability";
    element.children[0].style.boxShadow = "0px -0.2vw 6px -1px green";
    get(element.id).appendChild(image);
    get(element.id).appendChild(canvas);
    lastUsedId = element.id;
    canvas.style.animation = "extendHologramUp 0.1s linear 1";
    setTimeout(() => {
        canvas.style.animation = "";
        canvas.style.animation = "extendHologramSide 0.15s linear 1";
        setTimeout(() => {
            canvas.style.width = "100%";
            image.style.display = "block";
            image.src = pickaxeStats[element.id.substring(0, element.id.indexOf("H"))].ability;
            image.style.animation = "extendImageAbility 0.05s linear 1";
            
        }, 150);
    }, 100);
}
function removePolygon(element) {
    if (lastUsedId !== undefined) {
        get(lastUsedId).removeChild(get("hologramTriangle"));
        get(lastUsedId).removeChild(get("abilityImage"));
        lastUsedId = undefined; 
        justCreated = false;
        if (element !== undefined) {element.children[0].textContent = "View Ability"; element.children[0].style.boxShadow = "0px -0.2vw 6px -1px red";}
    }
}
