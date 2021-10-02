import { Attribute } from './Types';

export interface LoadedAttribute {
    name: string;
    image: {
        default: string;
    }
}

const loadedBackgrounds: LoadedAttribute[] = [
    {
        name: 'Black',
        image: require(`${__dirname}/../assets/backgrounds/01_01_black.png`),
    },
    {
        name: 'Brown',
        image: require(`${__dirname}/../assets/backgrounds/01_02_brown.png`),
    },
    {
        name: 'Green',
        image: require(`${__dirname}/../assets/backgrounds/01_03_green.png`),
    },
    {
        name: 'Purple',
        image: require(`${__dirname}/../assets/backgrounds/01_04_purple.png`),
    },
    {
        name: 'Teal',
        image: require(`${__dirname}/../assets/backgrounds/01_05_teal.png`),
    },
    {
        name: 'Wine',
        image: require(`${__dirname}/../assets/backgrounds/01_06_wine.png`),
    },
    {
        name: 'SpaceGray',
        image: require(`${__dirname}/../assets/backgrounds/01_07_SpaceGray.png`),
    },
    {
        name: 'SpaceYellow',
        image: require(`${__dirname}/../assets/backgrounds/01_08_SpaceYellow.png`),
    },
    {
        name: 'SpaceGreen',
        image: require(`${__dirname}/../assets/backgrounds/01_09_SpaceGreen.png`),
    },
    {
        name: 'SpaceBlue',
        image: require(`${__dirname}/../assets/backgrounds/01_10_SpaceBlue.png`),
    },
    {
        name: 'SpaceViolet',
        image: require(`${__dirname}/../assets/backgrounds/01_11_SpaceViolet.png`),
    },
    {
        name: 'SpaceRed',
        image: require(`${__dirname}/../assets/backgrounds/01_12_SpaceRed.png`),
    },
    {
        name: 'Nebula',
        image: require(`${__dirname}/../assets/backgrounds/01_13_Nebula.png`),
    },
    {
        name: 'SolanaVoid',
        image: require(`${__dirname}/../assets/backgrounds/01_14_SolanaVoid.png`),
    },
];

const loadedBodies: LoadedAttribute[] = [
    {
        name: 'Barren',
        image: require(`${__dirname}/../assets/body/02_001_Barren.png`),
    },
    {
        name: 'Ocean',
        image: require(`${__dirname}/../assets/body/02_002_Ocean.png`),
    },
    {
        name: 'Ice',
        image: require(`${__dirname}/../assets/body/02_003_Ice.png`),
    },
    {
        name: 'Forest',
        image: require(`${__dirname}/../assets/body/02_004_Forest.png`),
    },
    {
        name: 'Iron',
        image: require(`${__dirname}/../assets/body/02_005_Iron.png`),
    },
    {
        name: 'Desert',
        image: require(`${__dirname}/../assets/body/02_006_Desert.png`),
    },
    {
        name: 'Terrestrial',
        image: require(`${__dirname}/../assets/body/02_007_Terrestrial.png`),
    },
    {
        name: 'Toxic',
        image: require(`${__dirname}/../assets/body/02_008_Toxic.png`),
    },
    {
        name: 'Lava',
        image: require(`${__dirname}/../assets/body/02_009_Lava.png`),
    },
    {
        name: 'Orphan',
        image: require(`${__dirname}/../assets/body/02_010_Orphan.png`),
    },
    {
        name: 'GasGiant',
        image: require(`${__dirname}/../assets/body/02_011_GasGiant.png`),
    },
    {
        name: 'Dwarf',
        image: require(`${__dirname}/../assets/body/02_012_Dwarf.png`),
    },
    {
        name: 'StarBrown',
        image: require(`${__dirname}/../assets/body/02_101_StarBrown.png`),
    },
    {
        name: 'StarRed',
        image: require(`${__dirname}/../assets/body/02_102_StarRed.png`),
    },
    {
        name: 'StarWhite',
        image: require(`${__dirname}/../assets/body/02_103_StarWhite.png`),
    },
    {
        name: 'StarBlue',
        image: require(`${__dirname}/../assets/body/02_104_StarBlue.png`),
    },
    {
        name: 'StarYellow',
        image: require(`${__dirname}/../assets/body/02_105_StarYellow.png`),
    },
    {
        name: 'StarViolet',
        image: require(`${__dirname}/../assets/body/02_106_StarViolet.png`),
    },
    {
        name: 'BHYellow',
        image: require(`${__dirname}/../assets/body/02_201_BHYellow.png`),
    },
    {
        name: 'BHBlue',
        image: require(`${__dirname}/../assets/body/02_202_BHBlue.png`),
    },
    {
        name: 'BHYellow',
        image: require(`${__dirname}/../assets/body/02_203_BHYellow.png`),
    },
    {
        name: 'BHRainbow',
        image: require(`${__dirname}/../assets/body/02_204_BHRainbow.png`),
    },
    {
        name: 'Alien',
        image: require(`${__dirname}/../assets/body/03_001_Alien.png`),
    },
    {
        name: 'Waves',
        image: require(`${__dirname}/../assets/body/03_002_Waves.png`),
    },
    {
        name: 'Spikes',
        image: require(`${__dirname}/../assets/body/03_003_Spikes.png`),
    },
    {
        name: 'TreeOfLife',
        image: require(`${__dirname}/../assets/body/03_004_TreeOfLife.png`),
    },
    {
        name: 'GreatPyramid',
        image: require(`${__dirname}/../assets/body/03_006_GreatPyramid.png`),
    },
    {
        name: 'Shuttle',
        image: require(`${__dirname}/../assets/body/03_007_Shuttle.png`),
    },
    {
        name: 'ToxicAtmosphere',
        image: require(`${__dirname}/../assets/body/03_008_ToxicAtmosphere.png`),
    },
    {
        name: 'Volcano',
        image: require(`${__dirname}/../assets/body/03_009_Volcano.png`),
    },
    {
        name: 'TwinRings',
        image: require(`${__dirname}/../assets/body/03_010_TwinRings.png`),
    },
    {
        name: 'RockyRing',
        image: require(`${__dirname}/../assets/body/03_011_RockyRing.png`),
    },
    {
        name: 'DustRing',
        image: require(`${__dirname}/../assets/body/03_012_DustRing.png`),
    },
    {
        name: 'SolarFlaresBrown',
        image: require(`${__dirname}/../assets/body/03_101_SolarFlares.png`),
    },
    {
        name: 'SolarFlaresOrange',
        image: require(`${__dirname}/../assets/body/03_102_SolarFlares.png`),
    },
    {
        name: 'SolarFlaresWhite',
        image: require(`${__dirname}/../assets/body/03_103_SolarFlares.png`),
    },
    {
        name: 'SolarFlaresBlue',
        image: require(`${__dirname}/../assets/body/03_104_SolarFlares.png`),
    },
    {
        name: 'SolarFlaresYellow',
        image: require(`${__dirname}/../assets/body/03_105_SolarFlares.png`),
    },
    {
        name: 'SolarFlaresPurple',
        image: require(`${__dirname}/../assets/body/03_106_SolarFlares.png`),
    },
    {
        name: 'Quasar Yellow',
        image: require(`${__dirname}/../assets/body/03_201_Quasar.png`),
    },
    {
        name: 'Quasar Teal',
        image: require(`${__dirname}/../assets/body/03_202_Quasar.png`),
    },
    {
        name: 'Quasar Pink',
        image: require(`${__dirname}/../assets/body/03_203_Quasar.png`),
    },
    {
        name: 'Quasar Rainbow',
        image: require(`${__dirname}/../assets/body/03_204_Quasar.png`),
    },
];

const loadedFaces: LoadedAttribute[] = [
    {
        name: 'Smile',
        image: require(`${__dirname}/../assets/faces/04_01_Smile.png`),
    },
    {
        name: 'Uwu',
        image: require(`${__dirname}/../assets/faces/04_02_uwu.png`),
    },
    {
        name: 'Serious',
        image: require(`${__dirname}/../assets/faces/04_03_Serious.png`),
    },
    {
        name: 'Pouty',
        image: require(`${__dirname}/../assets/faces/04_04_Pouty.png`),
    },
    {
        name: 'Glasses',
        image: require(`${__dirname}/../assets/faces/04_05_Glasses.png`),
    },
    {
        name: 'Surprise',
        image: require(`${__dirname}/../assets/faces/04_06_Surprise.png`),
    },
    {
        name: 'Smirk',
        image: require(`${__dirname}/../assets/faces/04_07_Smirk.png`),
    },
    {
        name: 'Embarrassed',
        image: require(`${__dirname}/../assets/faces/04_08_Embarrassed.png`),
    },
    {
        name: 'Laugh',
        image: require(`${__dirname}/../assets/faces/04_09_Laugh.png`),
    },
    {
        name: 'Suspecting',
        image: require(`${__dirname}/../assets/faces/04_10_Suspecting.png`),
    },
    {
        name: 'Angry',
        image: require(`${__dirname}/../assets/faces/04_11_Angry.png`),
    },
    {
        name: 'Crying',
        image: require(`${__dirname}/../assets/faces/04_12_Crying.png`),
    },
    {
        name: 'Mischievous',
        image: require(`${__dirname}/../assets/faces/04_13_Mischievous.png`),
    },
    {
        name: 'Kissing',
        image: require(`${__dirname}/../assets/faces/04_14_Kissing.png`),
    },
    {
        name: 'Hearts',
        image: require(`${__dirname}/../assets/faces/04_15_Hearts.png`),
    },
];
const loadedHands: LoadedAttribute[] = [
    {
        name: 'Topaz',
        image: require(`${__dirname}/../assets/hands/06_01_Topaz.png`),
    },
    {
        name: 'Quartz',
        image: require(`${__dirname}/../assets/hands/06_02_Quartz.png`),
    },
    {
        name: 'Ruby',
        image: require(`${__dirname}/../assets/hands/06_03_Ruby.png`),
    },
    {
        name: 'Sapphire',
        image: require(`${__dirname}/../assets/hands/06_04_Sapphire.png`),
    },
    {
        name: 'Emerald',
        image: require(`${__dirname}/../assets/hands/06_05_Emerald.png`),
    },
    {
        name: 'Coffee',
        image: require(`${__dirname}/../assets/hands/06_06_Coffee.png`),
    },
    {
        name: 'Beer',
        image: require(`${__dirname}/../assets/hands/06_07_Beer.png`),
    },
    {
        name: 'Rose',
        image: require(`${__dirname}/../assets/hands/06_08_Rose.png`),
    },
    {
        name: 'Joint',
        image: require(`${__dirname}/../assets/hands/06_09_Joint.png`),
    },
    {
        name: 'FoamFinger',
        image: require(`${__dirname}/../assets/hands/06_10_FoamFinger.png`),
    },
    {
        name: 'BoxingGlove',
        image: require(`${__dirname}/../assets/hands/06_11_BoxingGlove.png`),
    },
    {
        name: 'WaterGun',
        image: require(`${__dirname}/../assets/hands/06_12_WaterGun.png`),
    },
    {
        name: 'Mushroom',
        image: require(`${__dirname}/../assets/hands/06_13_Mushroom.png`),
    },
    {
        name: 'Cookie',
        image: require(`${__dirname}/../assets/hands/06_14_Cookie.png`),
    },
    {
        name: 'Grapes',
        image: require(`${__dirname}/../assets/hands/06_15_Grapes.png`),
    },
    {
        name: 'WatermelonSlice',
        image: require(`${__dirname}/../assets/hands/06_16_WatermelonSlice.png`),
    },
    {
        name: 'Potato',
        image: require(`${__dirname}/../assets/hands/06_17_Potato.png`),
    },
    {
        name: 'TeddyBear',
        image: require(`${__dirname}/../assets/hands/06_18_TeddyBear.png`),
    },
    {
        name: 'Wand',
        image: require(`${__dirname}/../assets/hands/06_19_Wand.png`),
    },
    {
        name: 'Banana',
        image: require(`${__dirname}/../assets/hands/06_20_Banana.png`),
    },
    {
        name: 'IceCream',
        image: require(`${__dirname}/../assets/hands/06_21_IceCream.png`),
    },
];
const loadedOrbits: LoadedAttribute[] = [
    {
        name: 'Asteroid',
        image: require(`${__dirname}/../assets/orbits/05_01_Asteroid.png`),
    },
    {
        name: 'Comet',
        image: require(`${__dirname}/../assets/orbits/05_02_Comet.png`),
    },
    {
        name: 'DrillBot',
        image: require(`${__dirname}/../assets/orbits/05_03_DrillBot.png`),
    },
    {
        name: 'Satellite',
        image: require(`${__dirname}/../assets/orbits/05_04_Satellite.png`),
    },
    {
        name: 'Rocket',
        image: require(`${__dirname}/../assets/orbits/05_05_Rocket.png`),
    },
    {
        name: 'UFO',
        image: require(`${__dirname}/../assets/orbits/05_06_UFO.png`),
    },
    {
        name: 'Moon',
        image: require(`${__dirname}/../assets/orbits/05_07_Moon.png`),
    },
    {
        name: 'Astronaut',
        image: require(`${__dirname}/../assets/orbits/05_08_Astronaut.png`),
    },
    {
        name: 'Laika',
        image: require(`${__dirname}/../assets/orbits/05_09_Laika.png`),
    },
    {
        name: 'Monke',
        image: require(`${__dirname}/../assets/orbits/05_10_Monke.png`),
    },
    {
        name: 'Starman',
        image: require(`${__dirname}/../assets/orbits/05_11_Starman.png`),
    },
    {
        name: 'Shield',
        image: require(`${__dirname}/../assets/orbits/05_12_Shield.png`),
    },
    {
        name: 'Cthulu',
        image: require(`${__dirname}/../assets/orbits/05_13_Cthulu.png`),
    },
    {
        name: 'Eye',
        image: require(`${__dirname}/../assets/orbits/05_14_Eye.png`),
    },
    {
        name: 'Civilization',
        image: require(`${__dirname}/../assets/orbits/05_15_Civilization.png`),
    },
];

export const backgrounds: Attribute[] = loadedBackgrounds.map((l) => ({ name: l.name, image: l.image.default }));
export const bodies: Attribute[] = loadedBodies.map((l) => ({ name: l.name, image: l.image.default }));
export const faces: Attribute[] = loadedFaces.map((l) => ({ name: l.name, image: l.image.default }));
export const hands: Attribute[] = loadedHands.map((l) => ({ name: l.name, image: l.image.default }));
export const orbits: Attribute[] = loadedOrbits.map((l) => ({ name: l.name, image: l.image.default }));
