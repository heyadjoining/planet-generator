import React from 'react';
import { fabric } from 'fabric';
import { Button, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import * as defaultImages from './Images'; 
import { Attribute } from './Types';
import { Planet } from './Planet';

export interface IPlanetPickerProps {
    /* Need an id so we have a unique canvas per planetpicker */
    id: string;

    /* Style of configuration div on the left */
    configLeftStyles?: React.CSSProperties;

    /* Style of configuration div on the right */
    configRightStyles?: React.CSSProperties;

    /* Styles for the planet picker div */
    styles?: React.CSSProperties;

    /* Include the randomize planet button? */
    includeRandomButton?: boolean;

    /* Include the customize planet attributes inputs? */
    includeConfigurationOptions?: boolean;

    /* Call this function when a new planet is selected / generated */
    onPlanetChange?: (planet: Planet) => void;

    backgrounds?: Attribute[];

    bodies?: Attribute[];

    mouths?: Attribute[];

    hands?: Attribute[];

    orbits?: Attribute[];

    eyes?: Attribute[];

    features?: Attribute[];

    hats?: Attribute[];
}

const CANVAS_WIDTH = 128;
const CANVAS_HEIGHT = 128;

export function pickRandomAttributeImg(items: any, allowEmpty?: boolean, emptyProbability?: number) {
    if (items.length === 0) {
        return undefined;
    }

    return pickRandomAttribute(items, allowEmpty, emptyProbability).image;
}

export function pickRandomAttribute(items: any, allowEmpty?: boolean, emptyProbability?: number): Attribute {
    if (items.length === 0) {
        return { name: 'None', image: '' };
    }

    const attributes = [...items];
    
    if (allowEmpty) {
        if (emptyProbability) {
            if (emptyProbability < 0 || emptyProbability > 1) {
                throw new Error('Probability should be between 0 and 1');
            }

            const random = Math.random();

            if (random < emptyProbability) {
                return { name: 'None', image: '' };
            }
        } else {
            attributes.push({ name: 'None', image: '' });
        }
    }

    return items[Math.floor(Math.random() * items.length)];
}

export function PlanetPicker(props: IPlanetPickerProps) {
    const [canvas, setCanvas] = React.useState<fabric.StaticCanvas>();

    const { backgrounds, bodies, mouths, hands, hats, orbits, eyes, features } = props;

    const availableBackgrounds = backgrounds || [...defaultImages.backgrounds];
    const availableBodies = bodies || [...defaultImages.bodies];
    const availableMouths = mouths || [...defaultImages.mouths];
    const availableHands = hands || [...defaultImages.hands];
    const availableHats = hats || [...defaultImages.hats];
    const availableOrbits = orbits || [...defaultImages.orbits];
    const availableEyes = eyes || [...defaultImages.eyes];
    const availableFeatures = features || [...defaultImages.features];
    
    const backgroundOptions = [...availableBackgrounds];
    const bodyOptions = [...availableBodies];
    const mouthOptions = [...availableMouths];
    const handOptions = [...availableHands];
    const hatOptions = [...availableHats];
    const orbitsOptions = [...availableOrbits];
    const eyeOptions = [...availableEyes];
    const featureOptions = [...availableFeatures];

    for (const arr of [backgroundOptions, bodyOptions, mouthOptions, handOptions, hatOptions, orbitsOptions, eyeOptions, featureOptions]) {
        arr.sort((a, b) => a.name.localeCompare(b.name));

        arr.unshift({
            name: 'None',
            image: '',
        })
    }

    const [backgroundVal, setBackground] = React.useState<Attribute>(pickRandomAttribute(availableBackgrounds));
    const [bodyVal, setBody] = React.useState<Attribute>(pickRandomAttribute(availableBodies));
    const [eyesVal, setEyes] = React.useState<Attribute>(pickRandomAttribute(availableEyes));
    const [mouthsVal, setMouth] = React.useState<Attribute>(pickRandomAttribute(availableMouths));
    const [featuresVal, setFeatures] = React.useState<Attribute>(pickRandomAttribute(availableFeatures, true));
    const [orbitsVal, setOrbits] = React.useState<Attribute>(pickRandomAttribute(availableOrbits, true, 0.5));
    const [handsVal, setHands] = React.useState<Attribute>(pickRandomAttribute(availableHands, true, 0.3));
    const [hatVal, setHats] = React.useState<Attribute>(pickRandomAttribute(availableHats, true, 0.5));

    const { onPlanetChange } = props;

    React.useEffect(() => {
        const canvasObj = new fabric.StaticCanvas(`canvas-${props.id}`, {
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT,
        });

        setCanvas(canvasObj);
    }, [props.id]);

    React.useEffect(() => {
        if (canvas) {
            const planet = new Planet(
                bodyVal,
                backgroundVal,
                orbitsVal,
                eyesVal,
                mouthsVal,
                handsVal,
                hatVal,
                featuresVal,
            );

            planet.setCanvas(canvas);

            planet.draw();

            if (onPlanetChange) {
                onPlanetChange(planet);
            }
        }
    }, [
        onPlanetChange,
        canvas,
        backgroundVal,
        bodyVal,
        eyesVal,
        mouthsVal,
        featuresVal,
        orbitsVal,
        handsVal,
        hatVal,
    ]);

    function handleRandomButton() {
        if (!canvas) {
            return;
        }

        setBackground(pickRandomAttribute(availableBackgrounds));
        setBody(pickRandomAttribute(availableBodies));
        setEyes(pickRandomAttribute(availableEyes));
        setMouth(pickRandomAttribute(availableMouths));
        setFeatures(pickRandomAttribute(availableFeatures, true));
        setOrbits(pickRandomAttribute(availableOrbits, true, 0.5));
        setHands(pickRandomAttribute(availableHands, true, 0.3));
        setHats(pickRandomAttribute(availableHats, true, 0.5));
    }

    function handleAttributeChange(event: React.ChangeEvent<{}>, newValue: Attribute | null, setStateFunc: any) {
        if (newValue !== null) {
            setStateFunc(newValue);
        }
    }

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'center',
                padding: '1rem',
            }}>
                {props.includeConfigurationOptions &&
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '30px',
                            ...props.configLeftStyles,
                        }}
                    >
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setBackground)}
                            value={backgroundVal}
                            options={backgroundOptions}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Background" variant="outlined"/>}
                            style={{
                                width: '200px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setBody)}
                            options={bodyOptions}
                            value={bodyVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Celestial Body" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setMouth)}
                            options={mouthOptions}
                            value={mouthsVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Mouths" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setHands)}
                            options={handOptions}
                            value={handsVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Hands" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />

                    </div>
                }
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '128px',
                        ...props.styles,
                    }}
                >
                    <canvas
                        id={`canvas-${props.id}`}
                        style={{
                            height: '128px',
                            width: '128px',
                            marginTop: '50px',
                        }}
                    >
                    </canvas>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '15px',
                        }}
                    >
                        {props.includeRandomButton && <Button
                            variant="contained"
                            color="primary"
                            style={{
                                width: '128px',
                            }}
                            onClick={handleRandomButton}
                            size="small"
                        >
                            Random
                        </Button>}
                    </div>
                </div>
                {props.includeConfigurationOptions &&
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '30px',
                            ...props.configRightStyles,
                        }}
                    >
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setHats)}
                            options={hatOptions}
                            value={hatVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Hats" variant="outlined"/>}
                            style={{
                                width: '200px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setOrbits)}
                            options={orbitsOptions}
                            value={orbitsVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Orbits" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setEyes)}
                            options={eyeOptions}
                            value={eyesVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Eyes" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setFeatures)}
                            options={featureOptions}
                            value={featuresVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Features" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />
                    </div>
                }
            </div>
        </>
    );
}
