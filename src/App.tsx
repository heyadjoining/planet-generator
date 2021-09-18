import React from 'react';
import {
    Tabs,
    Tab,
    AppBar,
    ThemeProvider,
    createTheme,
    Button,
    Grid,
} from '@material-ui/core';
import { deepPurple, deepOrange } from '@material-ui/core/colors';

import { PlanetPicker } from './PlanetPicker';
import { Attribute } from './Types';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

interface IGeneratorProps {
    backgrounds?: Attribute[];

    bodies?: Attribute[];

    mouths?: Attribute[];

    hands?: Attribute[];

    orbits?: Attribute[];

    eyes?: Attribute[];

    features?: Attribute[];

    hats?: Attribute[];
}

interface IUploaderProps {
    items: Attribute[];
    setItems: (prevState: Attribute[]) => void;
    name: string;
}

interface IAssetUploaderProps {
    backgrounds: Attribute[];
    bodies: Attribute[];
    mouths: Attribute[];
    hands: Attribute[];
    orbits: Attribute[];
    eyes: Attribute[];
    features: Attribute[];
    hats: Attribute[];

    setBackgrounds: (prevState: Attribute[]) => void;
    setBodies: (prevState: Attribute[]) => void;
    setMouths: (prevState: Attribute[]) => void;
    setHands: (prevState: Attribute[]) => void;
    setOrbits: (prevState: Attribute[]) => void;
    setEyes: (prevState: Attribute[]) => void;
    setFeatures: (prevState: Attribute[]) => void;
    setHats: (prevState: Attribute[]) => void;
}

const theme = createTheme({
    palette: {
        primary: deepPurple,
        secondary: deepOrange,
    },
});

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

function PlanetGenerator(props: IGeneratorProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <div
                style={{
                    marginTop: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <PlanetPicker
                    id={'1'}
                    includeRandomButton={true}
                    includeConfigurationOptions={true}
                    backgrounds={props.backgrounds}
                    bodies={props.bodies}
                    mouths={props.mouths}
                    hands={props.hands}
                    orbits={props.orbits}
                    eyes={props.eyes}
                    features={props.features}
                    hats={props.hats}
                />
            </div>
        </div>
    );
}

function Uploader(props: IUploaderProps) {
    const { items, setItems, name } = props;

    const [error, setError] = React.useState('');

    function readFileAsync(file: Blob): Promise<string> {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result as string);
            };

            reader.onerror = reject;

            reader.readAsDataURL(file);
        })
    }

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }

        const uploadedFiles = e.target.files;
        const newFiles: Attribute[] = [...items];

        let haveError = false;

        for (const file of uploadedFiles) {
            if (!file.type.startsWith('image')) {
                setError(`File ${file.name} does not appear to be an image file, but a ${file.type}`);
                haveError = true;
                continue;
            }

            const fileData = await readFileAsync(file);

            newFiles.push({
                name: file.name,
                image: fileData,
            });
        }

        if (!haveError) {
            setError('');
        }

        setItems(newFiles);
    }

    return (
        <div style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <span>
                {items.length} {name} uploaded.
            </span>
            <span>
                {error}
            </span>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px',
            }}>
                <input
                  color="primary"
                  accept="image/*"
                  type="file"
                  onChange={handleUpload}
                  id={`icon-button-file-${name}`}
                  style={{ display: 'none', }}
                />
                <label htmlFor={`icon-button-file-${name}`}>
                  <Button
                    variant="contained"
                    component="span"
                    size="large"
                    color="primary"
                  >
                    Select {name} 
                  </Button>
                </label>
            </div>
        </div>
    );
}

function AssetUploader(props: IAssetUploaderProps) {
    const {
        backgrounds,
        bodies,
        mouths,
        hands,
        orbits,
        eyes,
        features,
        hats,
        setBackgrounds,
        setBodies,
        setMouths,
        setHands,
        setOrbits,
        setEyes,
        setFeatures,
        setHats,
    } = props;

    const [error, setError] = React.useState('');

    function readFileAsync(file: Blob): Promise<string> {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result as string);
            };

            reader.onerror = reject;

            reader.readAsDataURL(file);
        })
    }

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>, setStateFunc: any, existingFiles: Attribute[]) {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }

        const uploadedFiles = e.target.files;
        const newFiles: Attribute[] = [...existingFiles];

        let haveError = false;

        for (const file of uploadedFiles) {
            if (!file.type.startsWith('image')) {
                setError(`File ${file.name} does not appear to be an image file, but a ${file.type}`);
                haveError = true;
                continue;
            }

            const fileData = await readFileAsync(file);

            newFiles.push({
                name: file.name,
                image: fileData,
            });
        }

        if (!haveError) {
            setError('');
        }

        setStateFunc(newFiles);
    }

    return (
        <Grid container spacing={1} style={{ width: '1000px' }} alignItems='center' justifyContent='center'>
            <Grid item xs={3} sm={3} md={3}>
                <Uploader
                    items={backgrounds}
                    setItems={setBackgrounds}
                    name={'backgrounds'}
                />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Uploader
                    items={bodies}
                    setItems={setBodies}
                    name={'bodies'}
                />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Uploader
                    items={mouths}
                    setItems={setMouths}
                    name={'mouths'}
                />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Uploader
                    items={hands}
                    setItems={setHands}
                    name={'hands'}
                />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Uploader
                    items={orbits}
                    setItems={setOrbits}
                    name={'orbits'}
                />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Uploader
                    items={eyes}
                    setItems={setEyes}
                    name={'eyes'}
                />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Uploader
                    items={features}
                    setItems={setFeatures}
                    name={'features'}
                />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
                <Uploader
                    items={hats}
                    setItems={setHats}
                    name={'hats'}
                />
            </Grid>
        </Grid>
    );
}

function App() {
    const [tab, setTab] = React.useState(0);
    const [backgrounds, setBackgrounds] = React.useState<Attribute[]>([]);
    const [bodies, setBodies] = React.useState<Attribute[]>([]);
    const [mouths, setMouths] = React.useState<Attribute[]>([]);
    const [hands, setHands] = React.useState<Attribute[]>([]);
    const [orbits, setOrbits] = React.useState<Attribute[]>([]);
    const [eyes, setEyes] = React.useState<Attribute[]>([]);
    const [features, setFeatures] = React.useState<Attribute[]>([]);
    const [hats, setHats] = React.useState<Attribute[]>([]);

    function handleTabChange(event: React.ChangeEvent<{}>, newValue: number) {
        setTab(newValue);
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Tabs
                        value={tab}
                        onChange={handleTabChange}
                        centered
                    > 
                        <Tab label="Asset Uploader"/>
                        <Tab label="Planet Generator"/>
                    </Tabs>
                </AppBar>
                <TabPanel value={tab} index={0}>
                    <div style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    }}>
                        <AssetUploader
                            backgrounds={backgrounds}
                            bodies={bodies}
                            mouths={mouths}
                            hands={hands}
                            orbits={orbits}
                            eyes={eyes}
                            features={features}
                            hats={hats}
                            setBackgrounds={setBackgrounds}
                            setBodies={setBodies}
                            setMouths={setMouths}
                            setHands={setHands}
                            setOrbits={setOrbits}
                            setEyes={setEyes}
                            setFeatures={setFeatures}
                            setHats={setHats}
                        />
                    </div>
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <PlanetGenerator
                        backgrounds={backgrounds}
                        bodies={bodies}
                        mouths={mouths}
                        hands={hands}
                        orbits={orbits}
                        eyes={eyes}
                        features={features}
                        hats={hats}
                    />
                </TabPanel>
            </ThemeProvider>
        </>
    );
}

export default App;
