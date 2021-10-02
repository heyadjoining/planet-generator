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
    backgrounds: Attribute[];
    bodies: Attribute[];
    faces: Attribute[];
    orbits: Attribute[];
    hands: Attribute[];
}

interface IUploaderProps {
    items: Attribute[];
    setItems: (prevState: Attribute[]) => void;
    name: string;
}

interface IAssetUploaderProps {
    backgrounds: Attribute[];
    bodies: Attribute[];
    faces: Attribute[];
    orbits: Attribute[];
    hands: Attribute[];

    setBackgrounds: (prevState: Attribute[]) => void;
    setBodies: (prevState: Attribute[]) => void;
    setFaces: (prevState: Attribute[]) => void;
    setOrbits: (prevState: Attribute[]) => void;
    setHands: (prevState: Attribute[]) => void;
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
                    faces={props.faces}
                    hands={props.hands}
                    orbits={props.orbits}
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
                  multiple={true}
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
        faces,
        hands,
        orbits,
        setBackgrounds,
        setBodies,
        setFaces,
        setHands,
        setOrbits,
    } = props;

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
                    items={faces}
                    setItems={setFaces}
                    name={'faces'}
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
        </Grid>
    );
}

function App() {
    const [tab, setTab] = React.useState(0);
    const [backgrounds, setBackgrounds] = React.useState<Attribute[]>([]);
    const [bodies, setBodies] = React.useState<Attribute[]>([]);
    const [faces, setFaces] = React.useState<Attribute[]>([]);
    const [hands, setHands] = React.useState<Attribute[]>([]);
    const [orbits, setOrbits] = React.useState<Attribute[]>([]);

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
                        <Tab label="Planet Generator"/>
                        <Tab label="Asset Uploader"/>
                    </Tabs>
                </AppBar>
                <TabPanel value={tab} index={1}>
                    <div style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    }}>
                        <AssetUploader
                            backgrounds={backgrounds}
                            bodies={bodies}
                            faces={faces}
                            hands={hands}
                            orbits={orbits}
                            setBackgrounds={setBackgrounds}
                            setBodies={setBodies}
                            setFaces={setFaces}
                            setHands={setHands}
                            setOrbits={setOrbits}
                        />
                    </div>
                </TabPanel>
                <TabPanel value={tab} index={0}>
                    <PlanetGenerator
                        backgrounds={backgrounds}
                        bodies={bodies}
                        faces={faces}
                        hands={hands}
                        orbits={orbits}
                    />
                </TabPanel>
            </ThemeProvider>
        </>
    );
}

export default App;
