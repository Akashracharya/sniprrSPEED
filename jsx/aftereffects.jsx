function SendJSX_SCRIPT_ALERT(the_alert) {
    var NormalMSG = "JerryFlow: " + the_alert;
    alert(NormalMSG);
}

function SendJSX_SCRIPT_ALERT_ERROR(the_alert_2) {
    var errorMSG = "JerryFlow ERROR: " + the_alert_2;
    alert(errorMSG);
}

function MathClampValue(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}

function NotInACompERROR() {
    alert("JerryFlow ERROR: Please select a composition.");
}

function LayerPropDEBUGGER(what_is_searched) {
    app.beginUndoGroup("JerryFlow DEBUGGER");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var selectedLayer = comp.selectedLayers[0];
        for (var e = 1; e <= selectedLayer.Effects.numProperties; e += 1) {
            var thisEffect = selectedLayer.effect(e);
            for (var r = 1; r <= thisEffect.numProperties; r += 1) {
                var selectedProperty_effect = thisEffect.property(r).name;
                var DEBUG_TEXT = selectedProperty_effect + " | Index: " + r;
                if (selectedProperty_effect === what_is_searched) {
                    alert(DEBUG_TEXT);
                }
            }
        }
    } else {
        NotInACompERROR();
    }
}

function createSmoothCurveFromKeyframeJerryFlow002(selectedProperty, selectedKey, easeIn, easeOut) {
    switch (selectedProperty.propertyValueType) {
        case 6417:
            selectedProperty.setTemporalEaseAtKey(selectedKey, [easeIn], [easeOut]);
            break;
        case 6413:
            selectedProperty.setTemporalEaseAtKey(selectedKey, [easeIn], [easeOut]);
            break;
        case 6414:
            selectedProperty.setTemporalEaseAtKey(selectedKey, [easeIn, easeIn, easeIn], [easeOut, easeOut, easeOut]);
            break;
        case 6416:
            selectedProperty.setTemporalEaseAtKey(selectedKey, [easeIn, easeIn], [easeOut, easeOut]);
            break;
        default:
            selectedProperty.setTemporalEaseAtKey(selectedKey, [easeIn], [easeOut]);
    }
}

function sdg5zhsdg(sauf8efheafe47tg4wrt, presetstate) {
    if (Number(presetstate)) {
        app.settings.saveSetting(key1, key2, "0");
        var offlinekeysystem = app.settings.haveSetting(key1, OfflineKey) ? app.settings.getSetting(key1, OfflineKey) : 999;
        if (offlinekeysystem < 999) {
            offlinekeysystem = Number(offlinekeysystem) + 1;
        }
        app.settings.saveSetting(key1, OfflineKey, offlinekeysystem);
    } else {
        if (sauf8efheafe47tg4wrt === LOG_key) {
            app.settings.saveSetting(key1, key2, LOG_key);
            app.settings.saveSetting(key1, OfflineKey, 0);
        } else {
            if (sauf8efheafe47tg4wrt === LOG_OFF_key) {
                app.settings.saveSetting(key1, key2, "0");
            }
        }
    }
}

function djb2Ha4hStggSAG5ghS(str) {
    var hash = 5381;
    var i = 0;
    var len = str.length;
    while (i < len) {
        hash = (hash << 5) + hash + str.charCodeAt(i);
        hash = hash & 4294967295;
        i += 2;
    }
    return hash >>> 0;
}

function sgnjr8gSn5g7bsAZFVB47gbsfs(filePath) {
    var file = new File(filePath);
    if (file.exists) {
        file.encoding = "BINARY";
        if (file.open("r")) {
            var content = file.read();
            file.close();
            const fileName = file.name;
            var compressedContent = "420";
            if (((fileName === fsArrayN[0]) || (fileName === fsArrayN[1])) || (fileName === fsArrayN[2])) {
                compressedContent = djb2Ha4hStggSAG5ghS(content);
            }
            const fileSize = file.length;
            const totalChars1 = content.length;
            return djb2Ha4hStggSAG5ghS(fileName) + "X" + fileSize + "X" + compressedContent + "X" + totalChars1;
        } else {
            alert("wtf but 2");
            return "0";
        }
    } else {
        alert("wtf");
        return "0";
    }
    return "0";
}

function scanUserFileAuthDuNegrr(signedFile, singed) {
    var file = new File(signedFile);
    if (file.exists) {
        if (file.open("r")) {
            var content = file.read();
            file.close();
            var fileSize = file.length;
            var hasUserName = content.indexOf("userName") !== -1;
            var hasIdToken = content.indexOf("idToken") !== -1;
            var hasSystemHash = content.indexOf("systemHash") !== -1;
            var hasEmail = content.indexOf("email") !== -1;
            var hasPassword = content.indexOf("password") !== -1;
            var hassign = content.indexOf("signed") !== -1;
            if (singed) {
                return (hassign) && (fileSize > 1000);
            } else {
                return (((((hasUserName) && (hasIdToken)) && (hasSystemHash)) && (hasEmail)) && (hasPassword)) && (fileSize > 100);
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
    return false;
}

function asfug8basufbgr8gsg(num1, num2) {
    return num1 === num2;
}

function scanFileIDS_8457457435() {
    return false;
    var ERRORFOUND_X001 = false;
    if ($.os.indexOf("Mac") !== -1) {
        for (var i = 0; i < fsArrayMAC.length; i += 1) {
            if (!asfug8basufbgr8gsg(sgnjr8gSn5g7bsAZFVB47gbsfs(fsArrayMAC[i]), fcArray[i])) {
                ERRORFOUND_X001 = true;
            }
        }
    } else {
        for (var i = 0; i < fsArrayWIN.length; i += 1) {
            if (!asfug8basufbgr8gsg(sgnjr8gSn5g7bsAZFVB47gbsfs(fsArrayWIN[i]), fcArray[i])) {
                ERRORFOUND_X001 = true;
            }
        }
    }
    return ERRORFOUND_X001;
}

function removeRetardedCachedFile1337BeLike() {
    var documentsFolder = Folder(Folder.userData.parent.parent.fsName + "/Documents").fsName;
    var JerryFlowFolder = documentsFolder + "/JerryFlow/Cache/";
    var fileName = "SavedPluginsAndEffects.jf";
    var filePath = JerryFlowFolder + "/" + fileName;
    var fileToDelete = File(filePath);
    if (fileToDelete.exists) {
        fileToDelete.remove();
    }
}

function nSHg7bgfbBsb4rzfB7bSb() {
    sibn478ghUASgbhrgzrgsgug7rgf7gf = scanFileIDS_8457457435();
}

function checkForUser() {
    return true;
    var documentsFolder = Folder(Folder.userData.parent.parent.fsName + "/Documents").fsName;
    var JerryFlowFolder = documentsFolder + "/JerryFlow/Cache/";
    const HowManyLoginsLeft = 10;
    var OnlineKey = app.settings.haveSetting(key1, key2) ? app.settings.getSetting(key1, key2) : "0";
    var OfflineKeyVar = app.settings.haveSetting(key1, OfflineKey) ? app.settings.getSetting(key1, OfflineKey) : 999;
    if (!scanForLoginFiles) {
        if (!scanUserFileAuthDuNegrr(JerryFlowFolder + "signed-User.json", true)) {
            sibn478ghUASgbhrgzrgsgug7rgf7gf = true;
            ERRORFOUND_X002 = true;
        }
        if (!scanUserFileAuthDuNegrr(JerryFlowFolder + "user.json", false)) {
            sibn478ghUASgbhrgzrgsgug7rgf7gf = true;
            ERRORFOUND_X002 = true;
        }
        scanForLoginFiles = true;
    }
    if (OnlineKey === LOG_key) {
        if (sibn478ghUASgbhrgzrgsgug7rgf7gf) {
            removeRetardedCachedFile1337BeLike();
            if (ERRORFOUND_X002) {
                alert("JerryFlow ERROR: No user is logged in. If you are restart the extension.");
            } else {
                alert("Nope");
            }
            return false;
        } else {
            return true;
        }
    } else {
        if (Number(OfflineKeyVar) <= HowManyLoginsLeft) {
            if (sibn478ghUASgbhrgzrgsgug7rgf7gf) {
                removeRetardedCachedFile1337BeLike();
                if (ERRORFOUND_X002) {
                    alert("JerryFlow ERROR: No user is logged in. If you are restart the extension.");
                } else {
                    alert("Nope");
                }
                return false;
            } else {
                return true;
            }
        } else {
            alert("JerryFlow ERROR: Please restart you AE. (With internet connection)");
            return false;
        }
    }
    alert("JerryFlow ERROR: Please ensure that you use a valid JerryFlow V2 license key.");
    return false;
}

function NiggerDebuggerConectionYesYes() {
    app.beginUndoGroup("JerryFlow DEBUGGER");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        asdnfusdufsduifsduifgsduifg();
    } else {
        NotInACompERROR();
    }
}

function PurgeThatShit() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.executeCommand(10200);
}

function GetMeOutHereAsap() {
    app.quit();
}

function RemoveOne() {
    var comp = app.project.activeItem;
    comp.removeGuide(0);
}

function ToggleCrossHair() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Crosshair");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        if (comp.guides.length > 0) {
            if (comp.guides.length == 2) {
                comp.removeGuide(1);
                comp.removeGuide(0);
                var center_x = comp.width * 0.66666;
                var center_y = comp.height * 0.66666;
                var center_x_1 = comp.width * 0.33333;
                var center_y_1 = comp.height * 0.33333;
                comp.addGuide(1, center_x);
                comp.addGuide(1, center_x_1);
                comp.addGuide(0, center_y);
                comp.addGuide(0, center_y_1);
            } else {
                for (var i = 0; i < 250; i += 1) {
                    RemoveOne();
                }
            }
        } else {
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            comp.addGuide(1, center_x);
            comp.addGuide(0, center_y);
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function CreateTheCurve(selectedProperty, selectedKeys, i, easeIn, easeOut, start, end) {
    switch (selectedProperty.propertyValueType) {
        case 6417:
            switch (i) {
                case start:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], selectedProperty.keyInTemporalEase(selectedKeys[i]), [easeOut]);
                    break;
                case end:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], [easeIn], selectedProperty.keyOutTemporalEase(selectedKeys[i]));
                    break;
                default:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], [easeIn], [easeOut]);
            }
            break;
        case 6413:
            switch (i) {
                case start:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], selectedProperty.keyInTemporalEase(selectedKeys[i]), [easeOut]);
                    break;
                case end:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], [easeIn], selectedProperty.keyOutTemporalEase(selectedKeys[i]));
                    break;
                default:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], [easeIn], [easeOut]);
            }
            break;
        case 6414:
            switch (i) {
                case start:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], selectedProperty.keyInTemporalEase(selectedKeys[i]), [easeOut, easeOut, easeOut]);
                    break;
                case end:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], [easeIn, easeIn, easeIn], selectedProperty.keyOutTemporalEase(selectedKeys[i]));
                    break;
                default:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], [easeIn, easeIn, easeIn], [easeOut, easeOut, easeOut]);
            }
            break;
        case 6416:
            switch (i) {
                case start:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], selectedProperty.keyInTemporalEase(selectedKeys[i]), [easeOut, easeOut]);
                    break;
                case end:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], [easeIn, easeIn], selectedProperty.keyOutTemporalEase(selectedKeys[i]));
                    break;
                default:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], [easeIn, easeIn], [easeOut, easeOut]);
            }
            break;
        default:
            switch (i) {
                case start:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], selectedProperty.keyInTemporalEase(selectedKeys[i]), [easeOut]);
                    break;
                case end:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], [easeIn], selectedProperty.keyOutTemporalEase(selectedKeys[i]));
                    break;
                default:
                    selectedProperty.setTemporalEaseAtKey(selectedKeys[i], [easeIn], [easeOut]);
            }
    }
}

function OutSourcedCurves(selectedProperty, selectedKeys, x1, y1, x2, y2, original_x2, original_y2) {
    if (selectedKeys.length > 0) {
        for (var i = 0; i < selectedKeys.length; i += 1) {
            if ((((x1 <= 0.01) && (y1 <= 0.01)) && (original_x2 >= 0.99)) && (original_y2 >= 0.99)) {
                selectedProperty.setInterpolationTypeAtKey(selectedKeys[i], KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
            } else {
                var end = selectedKeys.length - 1;
                var start = 0;
                var easeIn2 = new KeyframeEase(0, 0.1);
                var easeOut2 = new KeyframeEase(0, 0.1);
                CreateTheCurve(selectedProperty, selectedKeys, i, easeIn2, easeOut2, start, end);
                switch (i) {
                    case start:
                        selectedProperty.setInterpolationTypeAtKey(selectedKeys[i], KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.LINEAR);
                        break;
                    case end:
                        selectedProperty.setInterpolationTypeAtKey(selectedKeys[i], KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.BEZIER);
                        break;
                    default:
                        selectedProperty.setInterpolationTypeAtKey(selectedKeys[i], KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR);
                }
                var arvSpeedIn = selectedProperty.keyInTemporalEase(selectedKeys[i])[0].speed;
                var arvSpeedOut = selectedProperty.keyOutTemporalEase(selectedKeys[i])[0].speed;
                var influenceIn = MathClampValue(x2 * 100, 0.1, 100);
                var influenceOut = MathClampValue(x1 * 100, 0.1, 100);
                var bruhIn = x2 <= 0 ? 1000 : 1 / x2;
                var bruhOut = x1 <= 0 ? 1000 : 1 / x1;
                var constSpeedIn = y2 * arvSpeedIn * bruhIn;
                var constSpeedOut = y1 * arvSpeedOut * bruhOut;
                var easeIn = new KeyframeEase(parseFloat(Number(constSpeedIn).toFixed(2)), influenceIn);
                var easeOut = new KeyframeEase(parseFloat(Number(constSpeedOut).toFixed(2)), influenceOut);
                CreateTheCurve(selectedProperty, selectedKeys, i, easeIn, easeOut, start, end);
            }
            continue;
        }
    }
}

function ApplyCurveToKeyFramesJerryFlow(x1, y1, x2, y2) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Curves");
    var original_x2 = x2;
    var original_y2 = y2;
    x2 = 1 - x2;
    y2 = 1 - y2;
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        for (var l = 0; l < myComp.selectedLayers.length; l += 1) {
            var selectedLayer = myComp.selectedLayers[l];
            if (selectedLayer) {
                if (selectedLayer.Masks) {
                    for (var e = 1; e <= selectedLayer.Masks.numProperties; e += 1) {
                        var thisMask = selectedLayer.Masks.property(e);
                        for (var r = 1; r <= 4; r += 1) {
                            var selectedProperty_mask = thisMask.property(r);
                            if (((selectedProperty_mask) && (selectedProperty_mask.selectedKeys)) && (selectedProperty_mask.selectedKeys.length > 0)) {
                                var selectedKeys_Mask = selectedProperty_mask.selectedKeys;
                                OutSourcedCurves(selectedProperty_mask, selectedKeys_Mask, x1, y1, x2, y2, original_x2, original_y2);
                                OutSourcedCurves(selectedProperty_mask, selectedKeys_Mask, x1, y1, x2, y2, original_x2, original_y2);
                            } else {
                                continue;
                            }
                        }
                    }
                }
                if (selectedLayer.Effects) {
                    for (var e = 1; e <= selectedLayer.Effects.numProperties; e += 1) {
                        var thisEffect = selectedLayer.effect(e);
                        for (var r = 1; r <= thisEffect.numProperties; r += 1) {
                            var selectedProperty_effect = thisEffect.property(r);
                            if (((selectedProperty_effect) && (selectedProperty_effect.selectedKeys)) && (selectedProperty_effect.selectedKeys.length > 0)) {
                                var selectedKeys_Effects = selectedProperty_effect.selectedKeys;
                                OutSourcedCurves(selectedProperty_effect, selectedKeys_Effects, x1, y1, x2, y2, original_x2, original_y2);
                                OutSourcedCurves(selectedProperty_effect, selectedKeys_Effects, x1, y1, x2, y2, original_x2, original_y2);
                            }
                        }
                    }
                }
                if (selectedLayer.selectedProperties) {
                    for (var f = 0; f < selectedLayer.selectedProperties.length; f += 1) {
                        var selectedProperty = selectedLayer.selectedProperties[f];
                        if (((selectedProperty) && (selectedProperty.selectedKeys)) && (selectedProperty.selectedKeys.length > 0)) {
                            var selectedKeys = selectedProperty.selectedKeys;
                            OutSourcedCurves(selectedProperty, selectedKeys, x1, y1, x2, y2, original_x2, original_y2);
                            OutSourcedCurves(selectedProperty, selectedKeys, x1, y1, x2, y2, original_x2, original_y2);
                        }
                    }
                }
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function returnColorFunc(color_index) {
    switch (color_index) {
        case 1:
            return [1, 0, 0];
            break;
        case 2:
            return [1, 1, 0];
            break;
        case 3:
            return [0.7, 1, 1];
            break;
        case 4:
            return [1, 0.7, 1];
            break;
        case 5:
            return [0.7, 0.7, 0.7];
            break;
        case 6:
            return [1, 0.7, 0.3];
            break;
        case 7:
            return [0.729, 1, 0.702];
            break;
        case 8:
            return [0.075, 0.604, 1];
            break;
        case 9:
            return [0.388, 0.871, 0.278];
            break;
        case 10:
            return [0.608, 0.341, 0.98];
            break;
        case 11:
            return [0.98, 0.69, 0.341];
            break;
        case 12:
            return [0.49, 0.333, 0.149];
            break;
        case 13:
            return [1, 0.424, 0.988];
            break;
        case 14:
            return [0.424, 1, 0.953];
            break;
        case 15:
            return [1, 0.827, 0.675];
            break;
        case 16:
            return [0.11, 0.549, 0.075];
            break;
        default:
            return [0, 0, 0];
    }
}

function DoAPrecomp(color, create_at_comp_comp) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Pre-compose");
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        if (create_at_comp_comp == "true") {
            var myLayers = myComp.selectedLayers;
            if (myLayers.length > 0) {
                for (var i = 0; i < myLayers.length; i += 1) {
                    var layer = myLayers[i];
                    var inPoint = layer.inPoint;
                    var outPoint = layer.outPoint;
                    myLayers[i].startTime -= inPoint;
                    var layerIndex = [layer.index];
                    var baseName = layer.name + " PreComp";
                    var newCompName = baseName + " (" + countPreCompTimes + ")";
                    var newComp = myComp.layers.precompose(layerIndex, newCompName, true);
                    countPreCompTimes++;
                    newComp.duration = outPoint - inPoint;
                    var preCompLayer = myComp.layer(layerIndex[0]);
                    preCompLayer.startTime = inPoint;
                    preCompLayer.label = Number(color);
                }
            }
        } else {
            var myLayers = myComp.selectedLayers;
            if (myLayers.length > 0) {
                var newInPoint = myLayers[0].inPoint;
                var newOutPoint = myLayers[0].outPoint;
                var layerIndices = [];
                for (var i = 0; i < myLayers.length; i += 1) {
                    layerIndices.push(myLayers[i].index);
                    var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
                    var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
                    if (inPoint < newInPoint) {
                        newInPoint = inPoint;
                    }
                    if (outPoint > newOutPoint) {
                        newOutPoint = outPoint;
                    }
                }
                var offset = newInPoint;
                for (var i = 0; i < myLayers.length; i += 1) {
                    myLayers[i].startTime -= offset;
                }
                myLayers.sort(function(a, b) {
                    return b.index - a.index;
                });
                var lowestLayerName = myLayers[0].name;
                var baseName = lowestLayerName.replace(/ PreComp(\s\(\d+\))?$/, "");
                var suffix = " PreComp";
                var newCompName = baseName + suffix;
                newCompName = newCompName + " (" + countPreCompTimes + ")";
                var newComp = myComp.layers.precompose(layerIndices, newCompName, true);
                countPreCompTimes++;
                newComp.duration = newOutPoint - offset;
                var preCompLayer = myComp.selectedLayers[0];
                preCompLayer.startTime = offset;
                preCompLayer.label = Number(color);
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function AddAdjustmentLayer(color, create_at_comp_aju) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Adjustment Layer");
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        if (create_at_comp_aju == "true") {
            var myLayers = myComp.selectedLayers;
            if (myLayers.length <= 0) {
                var solid = myComp.layers.addSolid(returnColorFunc(Number(color)), "Adjustment Layer", myComp.width, myComp.height, 1);
                solid.adjustmentLayer = true;
                solid.label = Number(color);
            } else {
                for (var i = 0; i < myLayers.length; i += 1) {
                    var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
                    var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
                    var solid = myComp.layers.addSolid(returnColorFunc(Number(color)), "Adjustment Layer", myComp.width, myComp.height, 1, outPoint - inPoint);
                    solid.adjustmentLayer = true;
                    solid.moveBefore(myLayers[i]);
                    solid.startTime = inPoint;
                    solid.label = Number(color);
                    continue;
                }
            }
        } else {
            var myLayers = myComp.selectedLayers;
            if (myLayers.length > 0) {
                var newInPoint = myLayers[0].inPoint;
                var newOutPoint = myLayers[0].outPoint;
                var lowest_index = 999999;
                var lowest = 999999;
                for (var i = 0; i < myLayers.length; i += 1) {
                    if (myLayers[i].index < lowest_index) {
                        lowest = i;
                        lowest_index = myLayers[i].index;
                    }
                    var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
                    var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
                    if (inPoint < newInPoint) {
                        newInPoint = inPoint;
                    }
                    if (outPoint > newOutPoint) {
                        newOutPoint = outPoint;
                    }
                    continue;
                }
                var solid = myComp.layers.addSolid(returnColorFunc(Number(color)), "Adjustment Layer", myComp.width, myComp.height, 1, newOutPoint - newInPoint);
                solid.adjustmentLayer = true;
                solid.moveBefore(myLayers[lowest]);
                solid.startTime = newInPoint;
                solid.label = Number(color);
            } else {
                var solid = myComp.layers.addSolid(returnColorFunc(Number(color)), "Adjustment Layer", myComp.width, myComp.height, 1);
                solid.adjustmentLayer = true;
                solid.label = Number(color);
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function createCenteredTextLayer_0(myComp, myLayers, text, color) {
    if (myLayers.length > 0) {
        var newInPoint = myLayers[0].inPoint;
        var newOutPoint = myLayers[0].outPoint;
        var lowest_index = 999999;
        for (var i = 0; i < myLayers.length; i += 1) {
            if (myLayers[i].index < lowest_index) {
                lowest_index = myLayers[i].index + 1;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (inPoint < newInPoint) {
                newInPoint = inPoint;
            }
            if (outPoint > newOutPoint) {
                newOutPoint = outPoint;
            }
        }
        var textLayer = myComp.layers.addText(text);
        textLayer.startTime = newInPoint;
        textLayer.outPoint = newOutPoint;
        var textProp = textLayer.property("Source Text");
        var sourceRect = textLayer.sourceRectAtTime(0, false);
        textLayer.anchorPoint.setValue([(sourceRect.width / 2) + sourceRect.left, (sourceRect.height / 2) + sourceRect.top]);
        var compCenter = [myComp.width / 2, myComp.height / 2];
        textLayer.position.setValue(compCenter);
        textLayer.label = Number(color);
        textLayer.moveBefore(myComp.layer(lowest_index));
    } else {
        var textLayer = myComp.layers.addText(text);
        var textProp = textLayer.property("Source Text");
        var sourceRect = textLayer.sourceRectAtTime(0, false);
        textLayer.anchorPoint.setValue([(sourceRect.width / 2) + sourceRect.left, (sourceRect.height / 2) + sourceRect.top]);
        var compCenter = [myComp.width / 2, myComp.height / 2];
        textLayer.position.setValue(compCenter);
        textLayer.label = Number(color);
    }
}

function AddTextLayer(color) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Create Text Layer");
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var selectedLayers = myComp.selectedLayers;
        createCenteredTextLayer_0(myComp, selectedLayers, "JerryFlow Text", color);
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function createPrecutCameraAboveSelected_0(myComp, myLayers, cameraName, focalLength, color) {
    if (myLayers.length > 0) {
        var newInPoint = myLayers[0].inPoint;
        var newOutPoint = myLayers[0].outPoint;
        var lowest_index = 999999;
        for (var i = 0; i < myLayers.length; i += 1) {
            if (myLayers[i].index < lowest_index) {
                lowest_index = myLayers[i].index + 1;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (inPoint < newInPoint) {
                newInPoint = inPoint;
            }
            if (outPoint > newOutPoint) {
                newOutPoint = outPoint;
            }
        }
        var cameraLayer = myComp.layers.addCamera(cameraName, [myComp.width / 2, myComp.height / 2]);
        cameraLayer.cameraOption.zoom.setValue(focalLength * 2.834646086869532);
        cameraLayer.startTime = newInPoint;
        cameraLayer.outPoint = newOutPoint;
        cameraLayer.moveBefore(myComp.layer(lowest_index));
        cameraLayer.label = Number(color);
        return cameraLayer;
    } else {
        var cameraLayer = myComp.layers.addCamera(cameraName, [myComp.width / 2, myComp.height / 2]);
        cameraLayer.cameraOption.zoom.setValue(focalLength * 2.834646086869532);
        cameraLayer.label = Number(color);
        return cameraLayer;
    }
}

function AddCameraLayer(color) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Create Camera");
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var selectedLayers = myComp.selectedLayers;
        createPrecutCameraAboveSelected_0(myComp, selectedLayers, "Camera", 940.7408, color);
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function createPrecutNullSelected_0(myComp, myLayers, color) {
    if (myLayers.length > 0) {
        var newInPoint = myLayers[0].inPoint;
        var newOutPoint = myLayers[0].outPoint;
        var lowest_index = 999999;
        for (var i = 0; i < myLayers.length; i += 1) {
            if (myLayers[i].index < lowest_index) {
                lowest_index = myLayers[i].index + 1;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (inPoint < newInPoint) {
                newInPoint = inPoint;
            }
            if (outPoint > newOutPoint) {
                newOutPoint = outPoint;
            }
        }
        var nullLayer = myComp.layers.addNull();
        nullLayer.anchorPoint.setValue([50, 50]);
        nullLayer.startTime = newInPoint;
        nullLayer.outPoint = newOutPoint;
        nullLayer.moveBefore(myComp.layer(lowest_index));
        nullLayer.label = Number(color);
        return nullLayer;
    } else {
        var nullLayer = myComp.layers.addNull();
        nullLayer.anchorPoint.setValue([50, 50]);
        nullLayer.label = Number(color);
        return nullLayer;
    }
}

function AddNullLayer(color) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Create Null");
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var selectedLayers = myComp.selectedLayers;
        createPrecutNullSelected_0(myComp, selectedLayers, color);
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function GetColorPicker(startValue, comp) {
    if ((!startValue) || (startValue.length != 3)) {
        startValue = [1, 1, 1];
    }
    app.beginUndoGroup("[JerryFlow] Seleced color");
    var selectedLayers = [];
    for (var i = 1; i <= comp.numLayers; i += 1) {
        if (comp.layer(i).selected) {
            selectedLayers.push(i);
        }
    }
    var newNull = comp.layers.addNull();
    var newColorControl = newNull.property("ADBE Effect Parade").addProperty("ADBE Color Control");
    var theColorProp = newColorControl.property("ADBE Color Control-0001");
    var origShyCondition = comp.hideShyLayers;
    newNull.enabled = false;
    theColorProp.setValue(startValue);
    app.endUndoGroup();
    theColorProp.selected = true;
    app.executeCommand(2240);
    app.beginUndoGroup("[JerryFlow] Seleced color");
    var result = theColorProp.value;
    if (newNull) {
        newNull.remove();
    }
    comp.hideShyLayers = origShyCondition;
    for (var i = 0; i < selectedLayers.length; i += 1) {
        comp.layer(selectedLayers[i]).selected = true;
    }
    app.endUndoGroup();
    return result;
}

function AddASolid(color_layer) {
    /*if (!checkForUser()) { 
    return;
    }*/
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var color = GetColorPicker([1, 1, 1], myComp);
        app.beginUndoGroup("[JerryFlow] Solid");
        var myLayers = myComp.selectedLayers;
        if (myLayers.length > 0) {
            var newInPoint = myLayers[0].inPoint;
            var newOutPoint = myLayers[0].outPoint;
            var layerIndices = [];
            var lowest_index = 999999;
            var lowest = 999999;
            for (var i = 0; i < myLayers.length; i += 1) {
                if (myLayers[i].index < lowest_index) {
                    lowest = i;
                    lowest_index = myLayers[i].index;
                }
                layerIndices.push(myLayers[i].index);
                var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
                var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
                if (inPoint < newInPoint) {
                    newInPoint = inPoint;
                }
                if (outPoint > newOutPoint) {
                    newOutPoint = outPoint;
                }
                continue;
            }
            var solid = myComp.layers.addSolid([color[0], color[1], color[2]], "Solid", myComp.width, myComp.height, 1, newOutPoint - newInPoint);
            solid.moveBefore(myLayers[lowest]);
            solid.startTime = newInPoint;
            solid.label = Number(color_layer);
        } else {
            var solid = myComp.layers.addSolid([color[0], color[1], color[2]], "Solid", myComp.width, myComp.height, 1);
            solid.label = Number(color_layer);
        }
        app.endUndoGroup();
    } else {
        NotInACompERROR();
    }
}

function scaleCompToOneToOne() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Scale to comp (1/1)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        for (var i = 0; i < comp.selectedLayers.length; i += 1) {
            var targetLayer = comp.selectedLayers[i];
            if (targetLayer) {
                var scaleX = (comp.width / targetLayer.width) * 100;
                var scaleY = (comp.height / targetLayer.height) * 100;
                var centerX = comp.width / 2;
                var centerY = comp.height / 2;
                targetLayer.scale.setValue([scaleX, scaleY]);
                targetLayer.position.setValue([centerX, centerY]);
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function scaleCompToOneToTwo() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Scale to comp (1/2)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        for (var i = 0; i < comp.selectedLayers.length; i += 1) {
            var targetLayer = comp.selectedLayers[i];
            if (targetLayer) {
                var scaleX = (comp.width / targetLayer.width) * 50;
                var scaleY = (comp.height / targetLayer.height) * 50;
                var centerX = comp.width / 2;
                var centerY = comp.height / 2;
                targetLayer.scale.setValue([scaleX, scaleY]);
                targetLayer.position.setValue([centerX, centerY]);
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function scaleCompToOneToFour() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Scale to comp (1/4)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        for (var i = 0; i < comp.selectedLayers.length; i += 1) {
            var targetLayer = comp.selectedLayers[i];
            if (targetLayer) {
                var scaleX = (comp.width / targetLayer.width) * 25;
                var scaleY = (comp.height / targetLayer.height) * 25;
                var centerX = comp.width / 2;
                var centerY = comp.height / 2;
                targetLayer.scale.setValue([scaleX, scaleY]);
                targetLayer.position.setValue([centerX, centerY]);
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function scaleCompToOriginal() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Scale to comp (Original)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        for (var i = 0; i < comp.selectedLayers.length; i += 1) {
            var targetLayer = comp.selectedLayers[i];
            if (targetLayer) {
                var scaleX = 100;
                var scaleY = 100;
                var centerX = comp.width / 2;
                var centerY = comp.height / 2;
                targetLayer.scale.setValue([scaleX, scaleY]);
                targetLayer.position.setValue([centerX, centerY]);
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function EnableFrameBlending(layer) {
    if (layer instanceof AVLayer) {
        layer.frameBlendingType = FrameBlendingType.PIXEL_MOTION;
    }
}

function EnableFrameBlendingInComposition(comp) {
    for (var i = 1; i <= comp.layers.length; i += 1) {
        var layer = comp.layer(i);
        EnableFrameBlending(layer);
        if ((layer instanceof AVLayer) && (layer.source instanceof CompItem)) {
            EnableFrameBlendingInComposition(layer.source);
        }
    }
}

function EnableFrameBlendingInFolder(folder) {
    for (var i = 1; i <= folder.items.length; i += 1) {
        var item = folder.items[i];
        if (item instanceof CompItem) {
            EnableFrameBlendingInComposition(item);
        }
        if (item instanceof FolderItem) {
            EnableFrameBlendingInFolder(item);
        }
    }
}

function EnableFrameBlendingFunc() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Enable frameblending (!!! ON ALL CLIPS !!!)");
    alert("* * * WARNING * * * \nThis will enable frameblending for the WHOLE project!");
    var myProject = app.project;
    for (var i = 1; i <= myProject.rootFolder.items.length; i += 1) {
        var item = myProject.rootFolder.items[i];
        if (item instanceof CompItem) {
            EnableFrameBlendingInComposition(item);
        }
        if (item instanceof FolderItem) {
            EnableFrameBlendingInFolder(item);
        }
    }
    app.endUndoGroup();
}

function enableFrameBlendingOff(layer) {
    if (layer instanceof AVLayer) {
        layer.frameBlendingType = FrameBlendingType.NO_FRAME_BLEND;
    }
}

function DisableenableFrameBlendingInCompositionOff(comp) {
    for (var i = 1; i <= comp.layers.length; i += 1) {
        var layer = comp.layer(i);
        enableFrameBlendingOff(layer);
        if ((layer instanceof AVLayer) && (layer.source instanceof CompItem)) {
            DisableenableFrameBlendingInCompositionOff(layer.source);
        }
    }
}

function DisableenableFrameBlendingInFolderOff(folder) {
    for (var i = 1; i <= folder.items.length; i += 1) {
        var item = folder.items[i];
        if (item instanceof CompItem) {
            DisableenableFrameBlendingInCompositionOff(item);
        }
        if (item instanceof FolderItem) {
            DisableenableFrameBlendingInFolderOff(item);
        }
    }
}

function DisableFrameBlendingFunc() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Disable frameblending (!!! ON ALL CLIPS !!!)");
    alert("* * * WARNING * * * \nThis will disable frameblending for the WHOLE project!");
    var myProject = app.project;
    for (var i = 1; i <= myProject.rootFolder.items.length; i += 1) {
        var item = myProject.rootFolder.items[i];
        if (item instanceof CompItem) {
            DisableenableFrameBlendingInCompositionOff(item);
        }
        if (item instanceof FolderItem) {
            DisableenableFrameBlendingInFolderOff(item);
        }
    }
    app.endUndoGroup();
}

function SpeedChangeTo(Factor) {
    /*if (!checkForUser()) { 
    return;
    }*/
    var changeTo = "JerryFlow Speed change to " + Factor;
    app.beginUndoGroup(changeTo);
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length > 0) {
            for (var i = 0; i < comp.selectedLayers.length; i += 1) {
                var curLayer = comp.selectedLayers[i];
                var old_in = curLayer.inPoint;
                var old_out = curLayer.outPoint;
                var old_start = curLayer.startTime;
                var stretchFactor = Factor;
                if (curLayer.stretch > 0) {
                    curLayer.stretch = stretchFactor;
                    curLayer.startTime -= (curLayer.inPoint - old_in);
                } else {
                    curLayer.stretch = -stretchFactor;
                    curLayer.startTime -= (curLayer.outPoint - old_out);
                }
                continue;
            }
        } else {
            SendJSX_SCRIPT_ALERT_ERROR("Please select one or more layer.");
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function ReverseLayer() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Reversed layer");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length > 0) {
            for (var i = 0; i < comp.selectedLayers.length; i += 1) {
                var curLayer = comp.selectedLayers[i];
                var old_in = curLayer.inPoint;
                var old_out = curLayer.outPoint;
                var old_start = curLayer.startTime;
                curLayer.stretch = -curLayer.stretch;
                curLayer.startTime += (old_out - old_start) + (old_in - old_start);
            }
        } else {
            SendJSX_SCRIPT_ALERT_ERROR("Please select one or more layer.");
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function FlipAxis(direction) {
    /*if (!checkForUser()) { 
    return;
    }*/
    var PlaceHolderText = "JerryFlow Flip on the ";
    switch (direction) {
        case 1:
            PlaceHolderText = "JerryFlow Flip on the X axis";
            break;
        case 2:
            PlaceHolderText = "JerryFlow Flip on the Y axis";
            break;
    }
    app.beginUndoGroup(PlaceHolderText);
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        if (comp.selectedLayers.length > 0) {
            for (var i = 0; i < comp.selectedLayers.length; i += 1) {
                var targetLayer = comp.selectedLayers[i];
                if (targetLayer) {
                    var currentScale = targetLayer.scale.value;
                    var flippedScale = [0, 0];
                    switch (direction) {
                        case 1:
                            flippedScale = [-currentScale[0], currentScale[1]];
                            break;
                        case 2:
                            flippedScale = [currentScale[0], -currentScale[1]];
                            break;
                    }
                    targetLayer.scale.setValue(flippedScale);
                    comp.openInViewer();
                }
            }
        } else {
            SendJSX_SCRIPT_ALERT_ERROR("Please select one or more layer.");
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function RollMinus(rotateVal) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Rotate");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        if (comp.selectedLayers.length > 0) {
            for (var i = 0; i < comp.selectedLayers.length; i += 1) {
                var targetLayer = comp.selectedLayers[i];
                if (targetLayer) {
                    var rotationValuemin = Number(targetLayer.rotation.value) - Number(rotateVal);
                    targetLayer.rotation.setValue(rotationValuemin);
                }
            }
        } else {
            SendJSX_SCRIPT_ALERT_ERROR("Please select one or more layer.");
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function RollPlus(rotateVal2) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Rotate");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        if (comp.selectedLayers.length > 0) {
            for (var i = 0; i < comp.selectedLayers.length; i += 1) {
                var targetLayer = comp.selectedLayers[i];
                if (targetLayer) {
                    var rotationValueplus = Number(targetLayer.rotation.value) + Number(rotateVal2);
                    targetLayer.rotation.setValue(rotationValueplus);
                }
            }
        } else {
            SendJSX_SCRIPT_ALERT_ERROR("Please select one or more layer.");
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function AddFlash(create_at_comp, duration, strenght, color, withblendmode) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Flash");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        if (Number(create_at_comp) == 1) {
            var newInPoint = comp.time;
            var myLayers = comp.selectedLayers;
            var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
            if (myLayers.length >= 1) {
                if (myLayers.length == 1) {
                    var lowest_index = 999999;
                    var lowest = 999999;
                    for (var i = 0; i < myLayers.length; i += 1) {
                        if (myLayers[i].index < lowest_index) {
                            lowest = i;
                            lowest_index = myLayers[i].index;
                        }
                        continue;
                    }
                    var solid = comp.layers.addSolid([1, 1, 1], "Flash (JerryFlow)", comp.width, comp.height, 1, frameDuration * Number(duration));
                    solid.moveBefore(myLayers[lowest]);
                    solid.startTime = newInPoint;
                    if (Number(withblendmode) == 1) {
                        solid.blendingMode = BlendingMode.OVERLAY;
                    }
                    solid.label = Number(color);
                    var newInPoint = solid.inPoint;
                    var newOutPoint = solid.outPoint;
                    solid.property("ADBE Transform Group").property("ADBE Opacity").setValueAtTime(newInPoint, Number(strenght));
                    solid.property("ADBE Transform Group").property("ADBE Opacity").setValueAtTime(newOutPoint, 0);
                } else {
                    SendJSX_SCRIPT_ALERT_ERROR("With \"Create flash at current comp time\" Please only select one layer or none.");
                }
            } else {
                var solid = comp.layers.addSolid([1, 1, 1], "Flash (JerryFlow)", comp.width, comp.height, 1, frameDuration * Number(duration));
                solid.startTime = newInPoint;
                if (Number(withblendmode) == 1) {
                    solid.blendingMode = BlendingMode.OVERLAY;
                }
                solid.label = Number(color);
                var newInPoint = solid.inPoint;
                var newOutPoint = solid.outPoint;
                solid.property("ADBE Transform Group").property("ADBE Opacity").setValueAtTime(newInPoint, Number(strenght));
                solid.property("ADBE Transform Group").property("ADBE Opacity").setValueAtTime(newOutPoint, 0);
            }
        } else {
            if (comp.selectedLayers.length > 0) {
                var myLayers = comp.selectedLayers;
                var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
                for (var i = 0; i < myLayers.length; i += 1) {
                    var newInPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
                    var solid = comp.layers.addSolid([1, 1, 1], "Flash (JerryFlow)", comp.width, comp.height, 1, frameDuration * Number(duration));
                    solid.moveBefore(myLayers[i]);
                    solid.startTime = newInPoint;
                    if (Number(withblendmode) == 1) {
                        solid.blendingMode = BlendingMode.OVERLAY;
                    }
                    solid.label = Number(color);
                    var newInPoint = solid.inPoint;
                    var newOutPoint = solid.outPoint;
                    solid.property("ADBE Transform Group").property("ADBE Opacity").setValueAtTime(newInPoint, Number(strenght));
                    solid.property("ADBE Transform Group").property("ADBE Opacity").setValueAtTime(newOutPoint, 0);
                }
            } else {
                SendJSX_SCRIPT_ALERT_ERROR("Please select one or more layer.");
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function SetLayerTimeToStart() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Set Layers time to in");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length > 0) {
            for (var i = 0; i < myLayers.length; i += 1) {
                var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
                var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
                myLayers[i].startTime = comp.time + (myLayers[i].startTime - inPoint);
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function SetLayerTimeToEnd() {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Set Layers time to out");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length > 0) {
            for (var i = 0; i < myLayers.length; i += 1) {
                var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
                var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
                myLayers[i].startTime = comp.time + (myLayers[i].startTime - outPoint);
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function DoAPreCompBeforeTracking(layer) {
    if ((((layer.Position.numKeys > 0) || (layer.anchorPoint.numKeys > 0)) || (layer.scale.numKeys > 0)) || (layer.rotation.numKeys > 0)) {
        return true;
    }
    if ((layer.scale.value[0] != 100) || (layer.scale.value[1] != 100)) {
        return true;
    }
    return false;
}

function CreateWarpStable(color, detailan, smooth, method) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Warp Stabilizer");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length == 1) {
            if (DoAPreCompBeforeTracking(myLayers[0])) {
                var i = 0;
                var newInPoint = myLayers[0].inPoint;
                var newOutPoint = myLayers[0].outPoint;
                var layerIndices = [];
                for (var i = 0; i < myLayers.length; i += 1) {
                    layerIndices.push(myLayers[i].index);
                    var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
                    var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
                    if (inPoint < newInPoint) {
                        newInPoint = inPoint;
                    }
                    if (outPoint > newOutPoint) {
                        newOutPoint = outPoint;
                    }
                    continue;
                }
                var offset = newInPoint;
                for (var i = 0; i < myLayers.length; i += 1) {
                    myLayers[i].startTime -= offset;
                    continue;
                }
                var LayerName = myLayers[0].name + " stabilized";
                var newComp = comp.layers.precompose(layerIndices, LayerName, true);
                newComp.duration = newOutPoint - offset;
                var preCompLayelmao = comp.selectedLayers[0];
                preCompLayelmao.startTime = offset;
                preCompLayelmao.label = Number(color);
                preCompLayelmao.seleced = true;
                var stable = preCompLayelmao.Effects.addProperty("ADBE SubspaceStabilizer");
                var method = Number(method) + 1;
                stable.property(6).setValue(method);
                stable.property(5).setValue(Number(smooth));
                stable.property(18).setValue(Number(detailan));
            } else {
                var compCenter = [comp.width / 2, comp.height / 2];
                myLayers[0].position.setValue(compCenter);
                myLayers[0].anchorPoint.setValue(compCenter);
                myLayers[0].rotation.setValue(0);
                var stable = myLayers[0].Effects.addProperty("ADBE SubspaceStabilizer");
                var method = Number(method) + 1;
                stable.property(6).setValue(method);
                stable.property(5).setValue(Number(smooth));
                stable.property(18).setValue(Number(detailan));
            }
        } else {
            SendJSX_SCRIPT_ALERT_ERROR("Please select only one Layer.");
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function CreateCameraTracker(color, detailan, points) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow 3D Camera Tracker");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length == 1) {
            if (DoAPreCompBeforeTracking(myLayers[0])) {
                var i = 0;
                var newInPoint = myLayers[0].inPoint;
                var newOutPoint = myLayers[0].outPoint;
                var layerIndices = [];
                for (var i = 0; i < myLayers.length; i += 1) {
                    layerIndices.push(myLayers[i].index);
                    var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
                    var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
                    if (inPoint < newInPoint) {
                        newInPoint = inPoint;
                    }
                    if (outPoint > newOutPoint) {
                        newOutPoint = outPoint;
                    }
                    continue;
                }
                var offset = newInPoint;
                for (var i = 0; i < myLayers.length; i += 1) {
                    myLayers[i].startTime -= offset;
                    continue;
                }
                var LayerName = myLayers[0].name + " Camera Track";
                var newComp = comp.layers.precompose(layerIndices, LayerName, true);
                newComp.duration = newOutPoint - offset;
                var preCompLayelmao = comp.selectedLayers[0];
                preCompLayelmao.startTime = offset;
                preCompLayelmao.label = Number(color);
                preCompLayelmao.seleced = true;
                var cameraTrack = preCompLayelmao.Effects.addProperty("ADBE 3D Tracker");
                cameraTrack.property(16).setValue(Number(detailan));
                cameraTrack.property(7).setValue(Number(points));
            } else {
                var compCenter = [comp.width / 2, comp.height / 2];
                myLayers[0].position.setValue(compCenter);
                myLayers[0].anchorPoint.setValue(compCenter);
                myLayers[0].rotation.setValue(0);
                var cameraTrack = myLayers[0].Effects.addProperty("ADBE 3D Tracker");
                cameraTrack.property(16).setValue(Number(detailan));
                cameraTrack.property(7).setValue(Number(points));
            }
        } else {
            SendJSX_SCRIPT_ALERT_ERROR("Please select only one Layer.");
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function CreateForceMotionBlur(color, blur) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Force Motion Blur");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length == 0) {
            var solid = comp.layers.addSolid(returnColorFunc(Number(color)), "Force Motion Blur", comp.width, comp.height, 1);
            solid.adjustmentLayer = true;
            solid.label = Number(color);
            var MBlur = solid.Effects.addProperty("CC Force Motion Blur");
            MBlur.property(1).setValue(Number(blur));
        } else {
            for (var i = 0; i < myLayers.length; i += 1) {
                var MBlur = myLayers[i].Effects.addProperty("CC Force Motion Blur");
                MBlur.property(1).setValue(Number(blur));
            }
        }
    } else {
        NotInACompERROR();
    }
    app.endUndoGroup();
}

function WarpIn(adjust_color, l_length) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Warp (End)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Warp (End)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = inPoint;
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 100);
            var easeOut = new KeyframeEase(0, 1);
            var warp_effect = solid.Effects.addProperty("ADBE WRPMESH");
            warp_effect.property(1).setValue(12);
            var keyframe1 = warp_effect.property(3).addKey(newInPoint);
            var keyframe2 = warp_effect.property(3).addKey(newOutPoint);
            warp_effect.property(3).setValueAtKey(keyframe1, -100);
            warp_effect.property(3).setValueAtKey(keyframe2, 0);
            createSmoothCurveFromKeyframeJerryFlow002(warp_effect.property(3), keyframe1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(warp_effect.property(3), keyframe2, easeIn, easeIn);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function WarpOut(adjust_color, l_length) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Warp (Start)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Warp (Start)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = outPoint - (frameDuration * Number(l_length));
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 1);
            var easeOut = new KeyframeEase(0, 100);
            var warp_effect = solid.Effects.addProperty("ADBE WRPMESH");
            warp_effect.property(1).setValue(12);
            var keyframe1 = warp_effect.property(3).addKey(newInPoint);
            var keyframe2 = warp_effect.property(3).addKey(newOutPoint);
            warp_effect.property(3).setValueAtKey(keyframe1, 0);
            warp_effect.property(3).setValueAtKey(keyframe2, -100);
            createSmoothCurveFromKeyframeJerryFlow002(warp_effect.property(3), keyframe1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(warp_effect.property(3), keyframe2, easeIn, easeIn);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function SlideLeftIn(adjust_color, l_length, angle) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Slide (End)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Slide (End)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = inPoint;
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 100);
            var easeOut = new KeyframeEase(0, 1);
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            var keyframe1 = motionTile.property(1).addKey(newInPoint);
            var keyframe2 = motionTile.property(1).addKey(newOutPoint);
            switch (Number(angle)) {
                case 0:
                    motionTile.property(1).setValueAtKey(keyframe1, [0, center_y]);
                    break;
                case 1:
                    motionTile.property(1).setValueAtKey(keyframe1, [center_x * 2, center_y]);
                    break;
                case 2:
                    motionTile.property(1).setValueAtKey(keyframe1, [center_x, center_y * 0.5]);
                    break;
                case 3:
                    motionTile.property(1).setValueAtKey(keyframe1, [center_x, center_y * 1.5]);
                    break;
            }
            motionTile.property(1).setValueAtKey(keyframe2, [center_x, center_y]);
            createSmoothCurveFromKeyframeJerryFlow002(motionTile.property(1), keyframe1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(motionTile.property(1), keyframe2, easeIn, easeIn);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function SlideLeftOut(adjust_color, l_length, angle) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Slide (Start)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Slide (Start)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = outPoint - (frameDuration * Number(l_length));
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 1);
            var easeOut = new KeyframeEase(0, 100);
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            var keyframe1 = motionTile.property(1).addKey(newInPoint);
            var keyframe2 = motionTile.property(1).addKey(newOutPoint);
            motionTile.property(1).setValueAtKey(keyframe1, [center_x, center_y]);
            switch (Number(angle)) {
                case 0:
                    motionTile.property(1).setValueAtKey(keyframe2, [center_x * 2, center_y]);
                    break;
                case 1:
                    motionTile.property(1).setValueAtKey(keyframe2, [0, center_y]);
                    break;
                case 2:
                    motionTile.property(1).setValueAtKey(keyframe2, [center_x, center_y * 1.5]);
                    break;
                case 3:
                    motionTile.property(1).setValueAtKey(keyframe2, [center_x, center_y * 0.5]);
                    break;
            }
            createSmoothCurveFromKeyframeJerryFlow002(motionTile.property(1), keyframe1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(motionTile.property(1), keyframe2, easeIn, easeIn);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function ZoomOutIn(adjust_color, l_length) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Zoom Out (Start)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Zoom Out (Start)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = outPoint - (frameDuration * Number(l_length));
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 1);
            var easeOut = new KeyframeEase(0, 100);
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(200);
            motionTile.property(4).setValue(200);
            var geometrytwa = solid.Effects.addProperty("ADBE Geometry2");
            var keyframe1 = geometrytwa.property(4).addKey(newInPoint);
            var keyframe2 = geometrytwa.property(4).addKey(newOutPoint);
            geometrytwa.property(4).setValueAtKey(keyframe1, 100);
            geometrytwa.property(4).setValueAtKey(keyframe2, 50);
            createSmoothCurveFromKeyframeJerryFlow002(geometrytwa.property(4), keyframe1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(geometrytwa.property(4), keyframe2, easeIn, easeIn);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function ZoomOutOut(adjust_color, l_length) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Zoom Out (End)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Zoom Out (End)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = inPoint;
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 100);
            var easeOut = new KeyframeEase(0, 1);
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            var geometrytwa = solid.Effects.addProperty("ADBE Geometry2");
            var keyframe1 = geometrytwa.property(4).addKey(newInPoint);
            var keyframe2 = geometrytwa.property(4).addKey(newOutPoint);
            geometrytwa.property(4).setValueAtKey(keyframe1, 150);
            geometrytwa.property(4).setValueAtKey(keyframe2, 100);
            createSmoothCurveFromKeyframeJerryFlow002(geometrytwa.property(4), keyframe1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(geometrytwa.property(4), keyframe2, easeIn, easeIn);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function ZoomInIn(adjust_color, l_length) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Zoom In (Start)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Zoom In (Start)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = outPoint - (frameDuration * Number(l_length));
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 1);
            var easeOut = new KeyframeEase(0, 100);
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            var geometrytwa = solid.Effects.addProperty("ADBE Geometry2");
            var keyframe1 = geometrytwa.property(4).addKey(newInPoint);
            var keyframe2 = geometrytwa.property(4).addKey(newOutPoint);
            geometrytwa.property(4).setValueAtKey(keyframe1, 100);
            geometrytwa.property(4).setValueAtKey(keyframe2, 150);
            createSmoothCurveFromKeyframeJerryFlow002(geometrytwa.property(4), keyframe1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(geometrytwa.property(4), keyframe2, easeIn, easeIn);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function ZoomInOut(adjust_color, l_length) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Zoom In (End)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Zoom In (End)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = inPoint;
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 100);
            var easeOut = new KeyframeEase(0, 1);
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(200);
            motionTile.property(4).setValue(200);
            var geometrytwa = solid.Effects.addProperty("ADBE Geometry2");
            var keyframe1 = geometrytwa.property(4).addKey(newInPoint);
            var keyframe2 = geometrytwa.property(4).addKey(newOutPoint);
            geometrytwa.property(4).setValueAtKey(keyframe1, 50);
            geometrytwa.property(4).setValueAtKey(keyframe2, 100);
            createSmoothCurveFromKeyframeJerryFlow002(geometrytwa.property(4), keyframe1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(geometrytwa.property(4), keyframe2, easeIn, easeIn);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function BlurIn(adjust_color, l_length, blurriness) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Blur (Start)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Blur (Start)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = outPoint - (frameDuration * Number(l_length));
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var Gaussian = solid.Effects.addProperty("ADBE Gaussian Blur 2");
            Gaussian.property(3).setValue(true);
            Gaussian.property(1).setValueAtTime(newInPoint, 0);
            Gaussian.property(1).setValueAtTime(newOutPoint, Number(blurriness));
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function BlurOut(adjust_color, l_length, blurriness) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Blur (End)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Blur (End)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = inPoint;
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var Gaussian = solid.Effects.addProperty("ADBE Gaussian Blur 2");
            Gaussian.property(3).setValue(true);
            Gaussian.property(1).setValueAtTime(newInPoint, Number(blurriness));
            Gaussian.property(1).setValueAtTime(newOutPoint, 0);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function TimeWarpIn(adjust_color, l_length) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Time Warp (Start)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Time Warp (Start)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = outPoint - (frameDuration * Number(l_length));
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 1);
            var easeOut = new KeyframeEase(0, 100);
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            var TimeWarp = solid.Effects.addProperty("CC Wide Time");
            TimeWarp.property(2).setValue(0);
            var keyframe1 = TimeWarp.property(1).addKey(newInPoint);
            var keyframe2 = TimeWarp.property(1).addKey(newOutPoint);
            TimeWarp.property(1).setValueAtKey(keyframe1, 0);
            TimeWarp.property(1).setValueAtKey(keyframe2, 8);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function TimeWarpOut(adjust_color, l_length) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Time Warp (End)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Time Warp (End)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = inPoint;
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 100);
            var easeOut = new KeyframeEase(0, 1);
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            var TimeWarp = solid.Effects.addProperty("CC Wide Time");
            TimeWarp.property(2).setValue(0);
            var keyframe1 = TimeWarp.property(1).addKey(newInPoint);
            var keyframe2 = TimeWarp.property(1).addKey(newOutPoint);
            TimeWarp.property(1).setValueAtKey(keyframe1, 8);
            TimeWarp.property(1).setValueAtKey(keyframe2, 0);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function TimeDisplacementIn(adjust_color, l_length) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Time Displacement (Start)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Time Displacement (Start)", comp.width, comp.height, 1, frameDuration * Number(l_length));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = outPoint - (frameDuration * Number(l_length));
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var easeIn = new KeyframeEase(0, 1);
            var easeOut = new KeyframeEase(0, 100);
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            var TimeWarp = solid.Effects.addProperty("ADBE Time Displacement");
            var keyframe1 = TimeWarp.property(2).addKey(newInPoint);
            var keyframe2 = TimeWarp.property(2).addKey(newOutPoint);
            TimeWarp.property(2).setValueAtKey(keyframe1, 0);
            TimeWarp.property(2).setValueAtKey(keyframe2, -0.6);
            createSmoothCurveFromKeyframeJerryFlow002(TimeWarp.property(2), keyframe1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(TimeWarp.property(2), keyframe2, easeIn, easeIn);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function TimeDisplacementOut(adjust_color, l_length) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Time Displacement (End)");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length != 2) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select only two layers.");
            return;
        }
        var lowest_index = 999999;
        var lowest = 999999;
        for (var b = 0; b < myLayers.length; b += 1) {
            if (myLayers[b].index < lowest_index) {
                lowest = b;
                lowest_index = myLayers[b].index;
            }
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        var losestLayer = myLayers[lowest];
        var inPoint = Math.min(losestLayer.inPoint, losestLayer.outPoint);
        var outPoint = Math.max(losestLayer.inPoint, losestLayer.outPoint);
        var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Time Displacement (End)", comp.width, comp.height, 1, frameDuration * Number(l_length) * 2);
        solid.moveBefore(losestLayer);
        solid.adjustmentLayer = true;
        solid.startTime = inPoint - (frameDuration * Number(l_length));
        solid.label = Number(adjust_color);
        solid.motionBlur = true;
        var newInPoint = solid.inPoint;
        var newOutPoint = solid.outPoint;
        var easeIn = new KeyframeEase(0, 100);
        var easeOut = new KeyframeEase(80, 1);
        var easeOut2 = new KeyframeEase(-80, 1);
        var center_x = comp.width / 2;
        var center_y = comp.height / 2;
        var TimeWarp = solid.Effects.addProperty("ADBE Time Displacement");
        var keyframe0 = TimeWarp.property(2).addKey(newInPoint);
        var keyframe1 = TimeWarp.property(2).addKey(newInPoint + (frameDuration * Number(l_length)));
        var keyframe2 = TimeWarp.property(2).addKey(newOutPoint);
        TimeWarp.property(2).setValueAtKey(keyframe0, 0);
        TimeWarp.property(2).setValueAtKey(keyframe1, 0.6);
        TimeWarp.property(2).setValueAtKey(keyframe2, 0);
        createSmoothCurveFromKeyframeJerryFlow002(TimeWarp.property(2), keyframe0, easeIn, easeIn);
        createSmoothCurveFromKeyframeJerryFlow002(TimeWarp.property(2), keyframe1, easeOut, easeOut2);
        createSmoothCurveFromKeyframeJerryFlow002(TimeWarp.property(2), keyframe2, easeIn, easeIn);
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function OneFrameGltich(adjust_color) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Pixel Glitch");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
            return;
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Pixel Glitch", comp.width, comp.height, 1, frameDuration * 4);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = inPoint;
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var Mosaic = solid.Effects.addProperty("ADBE Mosaic");
            Mosaic.property(1).setValueAtTime(newInPoint, 29);
            Mosaic.property(2).setValueAtTime(newInPoint, 483);
            Mosaic.property(1).setValueAtTime(newInPoint + (frameDuration * 1), 34);
            Mosaic.property(2).setValueAtTime(newInPoint + (frameDuration * 1), 43);
            Mosaic.property(1).setValueAtTime(newInPoint + (frameDuration * 2), comp.width);
            Mosaic.property(2).setValueAtTime(newInPoint + (frameDuration * 2), comp.height);
            Mosaic.property(1).setValueAtTime(newInPoint + (frameDuration * 3), comp.width);
            Mosaic.property(2).setValueAtTime(newInPoint + (frameDuration * 3), 60);
            var HLS = solid.Effects.addProperty("ADBE Color Balance (HLS)");
            HLS.property(1).setValueAtTime(newInPoint, 177);
            HLS.property(3).setValueAtTime(newInPoint, 98);
            HLS.property(1).setValueAtTime(newInPoint + (frameDuration * 1), 5);
            HLS.property(3).setValueAtTime(newInPoint + (frameDuration * 1), 0);
            HLS.property(1).setValueAtTime(newInPoint + (frameDuration * 2), 264);
            HLS.property(3).setValueAtTime(newInPoint + (frameDuration * 2), 0);
            HLS.property(1).setValueAtTime(newInPoint + (frameDuration * 3), 0);
            HLS.property(3).setValueAtTime(newInPoint + (frameDuration * 3), 0);
            var BnC = solid.Effects.addProperty("ADBE Brightness & Contrast 2");
            BnC.property(1).setValueAtTime(newInPoint, -3);
            BnC.property(2).setValueAtTime(newInPoint, -3);
            BnC.property(1).setValueAtTime(newInPoint + (frameDuration * 1), -144);
            BnC.property(2).setValueAtTime(newInPoint + (frameDuration * 1), -96);
            BnC.property(1).setValueAtTime(newInPoint + (frameDuration * 2), 146);
            BnC.property(2).setValueAtTime(newInPoint + (frameDuration * 2), 98);
            BnC.property(1).setValueAtTime(newInPoint + (frameDuration * 3), 0);
            BnC.property(2).setValueAtTime(newInPoint + (frameDuration * 3), 0);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function OneFrameInverOffset(adjust_color) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Inver Offset");
    var comp = app.project.activeItem;
    if (comp instanceof CompItem) {
        var myLayers = comp.selectedLayers;
        if (myLayers.length <= 0) {
            SendJSX_SCRIPT_ALERT_ERROR("Please select at least one layer.");
        }
        var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = comp.layers.addSolid(returnColorFunc(Number(adjust_color)), "JerryFlow Inver Offset", comp.width, comp.height, 1, frameDuration * 4);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = inPoint;
            solid.label = Number(adjust_color);
            solid.motionBlur = true;
            var center_x = comp.width / 2;
            var center_y = comp.height / 2;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var Effect1 = solid.Effects.addProperty("ADBE Invert");
            Effect1.property(2).setValueAtTime(newInPoint, 100);
            Effect1.property(2).setValueAtTime(newInPoint + (frameDuration * 1), 0);
            Effect1.property(2).setValueAtTime(newInPoint + (frameDuration * 2), 100);
            Effect1.property(2).setValueAtTime(newInPoint + (frameDuration * 3), 0);
            Effect1.property(2).setValueAtTime(newInPoint + (frameDuration * 4), 100);
            var Effect2 = solid.Effects.addProperty("ADBE Color Balance (HLS)");
            Effect2.property(3).setValueAtTime(newInPoint, 0);
            Effect2.property(3).setValueAtTime(newInPoint + (frameDuration * 1), -100);
            Effect2.property(3).setValueAtTime(newInPoint + (frameDuration * 2), 0);
            Effect2.property(3).setValueAtTime(newInPoint + (frameDuration * 3), -100);
            Effect2.property(3).setValueAtTime(newInPoint + (frameDuration * 4), 0);
            var Effect3 = solid.Effects.addProperty("ADBE Offset");
            Effect3.property(1).setValueAtTime(newInPoint, [center_x, center_y]);
            Effect3.property(1).setValueAtTime(newInPoint + (frameDuration * 1), [center_x / 4, center_y]);
            Effect3.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y]);
            Effect3.property(1).setValueAtTime(newInPoint + (frameDuration * 3), [center_x, center_y / 3]);
            Effect3.property(1).setValueAtTime(newInPoint + (frameDuration * 4), [center_x, center_y]);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function findItemByName(folder, name) {
    for (var i = 1; i <= folder.numItems; i += 1) {
        var item = folder.item(i);
        if ((item instanceof FootageItem) || (item instanceof CompItem)) {
            var itemName = item.name;
            if ((item.mainSource) && (item.mainSource.file)) {
                itemName = item.mainSource.file.name;
            }
            if (itemName === name) {
                return item;
            }
        }
    }
    return null;
}

function findOrCreateFolder(folderName, parentFolder) {
    for (var i = 1; i <= parentFolder.numItems; i += 1) {
        if ((parentFolder.item(i).name === folderName) && (parentFolder.item(i) instanceof FolderItem)) {
            return parentFolder.item(i);
        }
    }
    return parentFolder.items.addFolder(folderName);
}

function importFileToActiveCompJerryFlow(encodedFilePath) {
    var filePath = decodeURIComponent(encodedFilePath);
    var fileName = filePath.split("/").pop();
    /*if (!checkForUser()) { 
    return;
    }*/
    var file = new File(filePath);
    if (!file.exists) {
        alert("File does not exist.");
        return;
    }
    var fileName = file.name;
    var project = app.project;
    if (!project) {
        alert("No project found.");
        return;
    }
    var activeComp = project.activeItem;
    if ((!activeComp) || (!(activeComp instanceof CompItem))) {
        return;
    }
    app.beginUndoGroup("JerryFlow Assets Loader");
    var testFolder = findOrCreateFolder("JerryFlowV2 Assets", project.rootFolder);
    var existingItem = findItemByName(testFolder, fileName);
    if (existingItem) {
        itemToUse = existingItem;
    } else {
        var importOptions = new ImportOptions(file);
        var importedItem = project.importFile(importOptions);
        importedItem.parentFolder = testFolder;
        itemToUse = importedItem;
    }
    if ((itemToUse instanceof FootageItem) || (itemToUse instanceof AVLayer)) {
        var myLayers = activeComp.selectedLayers;
        if (myLayers.length > 0) {
            var lowest_index = 999999;
            var lowest = 999999;
            for (var i = 0; i < myLayers.length; i += 1) {
                if (myLayers[i].index < lowest_index) {
                    lowest = i;
                    lowest_index = myLayers[i].index;
                }
            }
            var layer = activeComp.layers.add(itemToUse);
            layer.startTime = activeComp.time;
            layer.moveBefore(myLayers[lowest]);
        } else {
            var layer = activeComp.layers.add(itemToUse);
            layer.startTime = activeComp.time;
        }
    } else {
        alert("Unsupported file type.");
    }
    app.endUndoGroup();
}

function AddFlashShakes_0x00_JF(comp, C_CompTime, i, myLayers, newInPoint, duration, strenght, color, withblendmode) {
    var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
    var solid = comp.layers.addSolid([1, 1, 1], "Flash (JerryFlow)", comp.width, comp.height, 1, frameDuration * Number(duration));
    solid.moveBefore(myLayers[i]);
    solid.startTime = Number(C_CompTime) ? comp.time : newInPoint;
    if (Number(withblendmode) == 1) {
        solid.blendingMode = BlendingMode.OVERLAY;
    }
    solid.label = Number(color);
    var newInPoint = solid.inPoint;
    var newOutPoint = solid.outPoint;
    solid.property("ADBE Transform Group").property("ADBE Opacity").setValueAtTime(newInPoint, Number(strenght));
    solid.property("ADBE Transform Group").property("ADBE Opacity").setValueAtTime(newOutPoint, 0);
}

function BasicShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Basic (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function QuickShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Quick (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 5);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.035 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.03 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 3), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function WaveV1_Shake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Wave (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 14);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 3), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 7), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var turbdisplacement = solid.Effects.addProperty("ADBE Turbulent Displace");
            turbdisplacement.property(2).setValueAtTime(newInPoint, 38 * shkStrength);
            turbdisplacement.property(2).setValueAtTime(newInPoint + (frameDuration * 8), 10 * shkStrength);
            turbdisplacement.property(2).setValueAtTime(newOutPoint, 0);
            var scale_correction = 1080 / myComp.width;
            turbdisplacement.property(3).setValueAtTime(newInPoint, 80 * scale_correction);
            turbdisplacement.property(3).setValueAtTime(newInPoint + (frameDuration * 10), 200 * scale_correction);
            turbdisplacement.property(3).setValueAtTime(newOutPoint, 320);
            turbdisplacement.property(6).setValueAtTime(newInPoint, -50);
            turbdisplacement.property(6).setValueAtTime(newInPoint + (frameDuration * 10), 65);
            turbdisplacement.property(6).setValueAtTime(newOutPoint, 100);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 7), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function WaveV2_Shake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Wave V2 (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 14);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 3), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 7), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var easeIn = new KeyframeEase(0, 50);
            var easeOut = new KeyframeEase(0, 1);
            var turbdisplacement = solid.Effects.addProperty("ADBE Turbulent Displace");
            var ammou_keyframe0 = turbdisplacement.property(2).addKey(newInPoint);
            var ammou_keyframe1 = turbdisplacement.property(2).addKey(newOutPoint);
            turbdisplacement.property(2).setValueAtKey(ammou_keyframe0, 45 * shkStrength * 0.8);
            turbdisplacement.property(2).setValueAtKey(ammou_keyframe1, 0);
            createSmoothCurveFromKeyframeJerryFlow002(turbdisplacement.property(2), ammou_keyframe0, easeIn, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(turbdisplacement.property(2), ammou_keyframe1, easeIn, easeOut);
            var scale_correction = 1080 / myComp.width;
            var scale_keyframe0 = turbdisplacement.property(3).addKey(newInPoint);
            var scale_keyframe1 = turbdisplacement.property(3).addKey(newOutPoint);
            turbdisplacement.property(3).setValueAtKey(scale_keyframe0, 130 * shkStrength * 0.8);
            turbdisplacement.property(3).setValueAtKey(scale_keyframe1, 477 * shkStrength * 0.8);
            createSmoothCurveFromKeyframeJerryFlow002(turbdisplacement.property(3), scale_keyframe0, easeIn, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(turbdisplacement.property(3), scale_keyframe1, easeIn, easeOut);
            turbdisplacement.property(6).setValueAtTime(newInPoint, 26);
            turbdisplacement.property(6).setValueAtTime(newOutPoint, 368);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 7), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function WarpShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Warp (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var fovdisplacement = solid.Effects.addProperty("ADBE Optics Compensation");
            fovdisplacement.property(2).setValue(true);
            fovdisplacement.property(1).setValueAtTime(newInPoint, 75 * shkStrength);
            fovdisplacement.property(1).setValueAtTime(newOutPoint, 0);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function LensShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Lens (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var lens = solid.Effects.addProperty("CC Lens");
            var lenseStart = 190 - (shkStrength * 95);
            var lensemid = 260 - (shkStrength * 130);
            lens.property(2).setValueAtTime(newInPoint, lenseStart);
            lens.property(2).setValueAtTime(newInPoint + (frameDuration * 3), lensemid);
            lens.property(2).setValueAtTime(newOutPoint, 500);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function LensShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Lens (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var lens = solid.Effects.addProperty("CC Lens");
            var lenseStart = 190 - (shkStrength * 95);
            var lensemid = 260 - (shkStrength * 130);
            lens.property(2).setValueAtTime(newInPoint, lenseStart);
            lens.property(2).setValueAtTime(newInPoint + (frameDuration * 3), lensemid);
            lens.property(2).setValueAtTime(newOutPoint, 500);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function BounceInShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Bounce in (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            motionTile.property(2).setValueAtTime(newInPoint, 100 - (15 * shkStrength));
            motionTile.property(2).setValueAtTime(newInPoint + (frameDuration * 2), 100 - (10 * shkStrength));
            motionTile.property(2).setValueAtTime(newInPoint + (frameDuration * 4), 100);
            motionTile.property(3).setValueAtTime(newInPoint, 100 - (15 * shkStrength));
            motionTile.property(3).setValueAtTime(newInPoint + (frameDuration * 3), 100);
            motionTile.property(3).setValueAtTime(newInPoint + (frameDuration * 5), 100 - (10 * shkStrength));
            motionTile.property(3).setValueAtTime(newInPoint + (frameDuration * 9), 100);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function BounceOutShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Bounce out (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            motionTile.property(3).setValueAtTime(newInPoint, 100 - (5 * shkStrength));
            motionTile.property(3).setValueAtTime(newInPoint + (frameDuration * 2), 100 - (10 * shkStrength));
            motionTile.property(3).setValueAtTime(newInPoint + (frameDuration * 4), 100);
            motionTile.property(2).setValueAtTime(newInPoint, 100 - (15 * shkStrength));
            motionTile.property(2).setValueAtTime(newInPoint + (frameDuration * 3), 100);
            motionTile.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 100 - (5 * shkStrength));
            motionTile.property(2).setValueAtTime(newInPoint + (frameDuration * 9), 100);
            var easeIn = new KeyframeEase(0, 100);
            var easeOut = new KeyframeEase(0, 1);
            var squeeze1 = solid.Effects.addProperty("CC Scale Wipe");
            squeeze1.property(3).setValue(0);
            var keyframe1_1 = squeeze1.property(1).addKey(newInPoint);
            var keyframe2_1 = squeeze1.property(1).addKey(newOutPoint);
            squeeze1.property(1).setValueAtKey(keyframe1_1, 2 * shkStrength);
            squeeze1.property(1).setValueAtKey(keyframe2_1, 0);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze1.property(1), keyframe1_1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze1.property(1), keyframe2_1, easeIn, easeIn);
            var squeeze2 = solid.Effects.addProperty("CC Scale Wipe");
            squeeze2.property(3).setValue(0);
            var keyframe1_2 = squeeze2.property(1).addKey(newInPoint);
            var keyframe2_2 = squeeze2.property(1).addKey(newOutPoint);
            squeeze2.property(1).setValueAtKey(keyframe1_2, -2 * shkStrength);
            squeeze2.property(1).setValueAtKey(keyframe2_2, 0);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze2.property(1), keyframe1_2, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze2.property(1), keyframe2_2, easeIn, easeIn);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function InvertShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Invert (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var invert = solid.Effects.addProperty("ADBE Invert");
            invert.property(1).setValueAtTime(newInPoint, 9 * shkStrength);
            invert.property(1).setValueAtTime(newInPoint + (frameDuration * 1), 1);
            invert.property(1).setValueAtTime(newInPoint + (frameDuration * 2), 8);
            invert.property(2).setValueAtTime(newInPoint + (frameDuration * 2), 0);
            invert.property(2).setValueAtTime(newInPoint + (frameDuration * 3), 100);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function InvertPixleShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Invert Pixle (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var invert = solid.Effects.addProperty("ADBE Invert");
            invert.property(1).setValueAtTime(newInPoint, 9);
            invert.property(1).setValueAtTime(newInPoint + (frameDuration * 1), 1);
            invert.property(1).setValueAtTime(newInPoint + (frameDuration * 2), 8);
            invert.property(2).setValueAtTime(newInPoint + (frameDuration * 2), 0);
            invert.property(2).setValueAtTime(newInPoint + (frameDuration * 3), 100);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            var blockLoad = solid.Effects.addProperty("CS BlockLoad");
            blockLoad.property(1).setValueAtTime(newInPoint, 1);
            blockLoad.property(1).setValueAtTime(newInPoint + (frameDuration * 1), 100);
            blockLoad.property(1).setValueAtTime(newInPoint + (frameDuration * 3), 3);
            blockLoad.property(1).setValueAtTime(newInPoint + (frameDuration * 5), 10);
            blockLoad.property(1).setValueAtTime(newInPoint + (frameDuration * 7), 64);
            blockLoad.property(1).setValueAtTime(newOutPoint, 41);
            blockLoad.property(2).setValueAtTime(newInPoint, 16);
            blockLoad.property(2).setValueAtTime(newInPoint + (frameDuration * 1), 5);
            blockLoad.property(2).setValueAtTime(newInPoint + (frameDuration * 3), 15);
            blockLoad.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 4);
            blockLoad.property(2).setValueAtTime(newInPoint + (frameDuration * 7), 16);
            blockLoad.property(2).setValueAtTime(newOutPoint, 16);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function SqueezeV1Shake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Squeeze Y (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var easeIn = new KeyframeEase(0, 100);
            var easeOut = new KeyframeEase(0, 1);
            var squeeze1 = solid.Effects.addProperty("CC Scale Wipe");
            squeeze1.property(3).setValue(0);
            var keyframe1_1 = squeeze1.property(1).addKey(newInPoint);
            var keyframe2_1 = squeeze1.property(1).addKey(newOutPoint);
            squeeze1.property(1).setValueAtKey(keyframe1_1, 2 * shkStrength);
            squeeze1.property(1).setValueAtKey(keyframe2_1, 0);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze1.property(1), keyframe1_1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze1.property(1), keyframe2_1, easeIn, easeIn);
            var squeeze2 = solid.Effects.addProperty("CC Scale Wipe");
            squeeze2.property(3).setValue(0);
            var keyframe1_2 = squeeze2.property(1).addKey(newInPoint);
            var keyframe2_2 = squeeze2.property(1).addKey(newOutPoint);
            squeeze2.property(1).setValueAtKey(keyframe1_2, -2 * shkStrength);
            squeeze2.property(1).setValueAtKey(keyframe2_2, 0);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze2.property(1), keyframe1_2, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze2.property(1), keyframe2_2, easeIn, easeIn);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function SqueezeV2Shake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Squeeze X (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var easeIn = new KeyframeEase(0, 100);
            var easeOut = new KeyframeEase(0, 1);
            var squeeze1 = solid.Effects.addProperty("CC Scale Wipe");
            squeeze1.property(3).setValue(90);
            var keyframe1_1 = squeeze1.property(1).addKey(newInPoint);
            var keyframe2_1 = squeeze1.property(1).addKey(newOutPoint);
            squeeze1.property(1).setValueAtKey(keyframe1_1, 2 * shkStrength);
            squeeze1.property(1).setValueAtKey(keyframe2_1, 0);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze1.property(1), keyframe1_1, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze1.property(1), keyframe2_1, easeIn, easeIn);
            var squeeze2 = solid.Effects.addProperty("CC Scale Wipe");
            squeeze2.property(3).setValue(90);
            var keyframe1_2 = squeeze2.property(1).addKey(newInPoint);
            var keyframe2_2 = squeeze2.property(1).addKey(newOutPoint);
            squeeze2.property(1).setValueAtKey(keyframe1_2, -2 * shkStrength);
            squeeze2.property(1).setValueAtKey(keyframe2_2, 0);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze2.property(1), keyframe1_2, easeOut, easeOut);
            createSmoothCurveFromKeyframeJerryFlow002(squeeze2.property(1), keyframe2_2, easeIn, easeIn);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function DarkFlickerShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Lens (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            var exposure = solid.Effects.addProperty("ADBE Exposure2");
            exposure.property(5).setValueAtTime(newInPoint, 1 - (0.5 * shkStrength));
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 1), 1);
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 2), 1 - (0.4 * shkStrength));
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 3), 1);
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 4), 1 - (0.3 * shkStrength));
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 5), 1);
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 6), 1 - (0.3 * shkStrength));
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 7), 1);
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 8), 1 - (0.2 * shkStrength));
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 9), 1);
            exposure.property(5).setValueAtTime(newOutPoint, 1 - (0.1 * shkStrength));
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function WhiteFlickerShake_001_JF(C_CompTime, C_Shk_Speed, C_Shk_Strength, C_Color, F_duration, F_strenght, F_color, F_withblendmode, F_enable) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Basic Shake");
    const shkStrength = Number(C_Shk_Strength) / 100;
    const shkLength = 200 - Number(C_Shk_Speed);
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            if ((Number(C_CompTime)) && (myLayers.length > 1)) {
                alert("JerryShakes: The comp time option only works with one selected layer.");
                return;
            }
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            if (Number(F_enable)) {
                AddFlashShakes_0x00_JF(myComp, Number(C_CompTime), i, myLayers, inPoint, Number(F_duration), Number(F_strenght), Number(F_color), Number(F_withblendmode));
            }
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Lens (JerryFlow)", myComp.width, myComp.height, 1, frameDuration * 10);
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = Number(C_CompTime) ? myComp.time : inPoint;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            motionTile.property(1).setValueAtTime(newInPoint, [center_x, center_y * (1 + (0.045 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 2), [center_x, center_y * (1 - (0.02 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newInPoint + (frameDuration * 5), [center_x, center_y * (1 + (0.01 * shkStrength))]);
            motionTile.property(1).setValueAtTime(newOutPoint, [center_x, center_y]);
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            direktblur.property(2).setValueAtTime(newInPoint, defaultMotionBlurJerryFlow * shkStrength);
            direktblur.property(2).setValueAtTime(newInPoint + (frameDuration * 5), 0);
            var exposure = solid.Effects.addProperty("ADBE Exposure2");
            exposure.property(5).setValueAtTime(newInPoint, 1 + (0.5 * shkStrength));
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 1), 1);
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 2), 1 + (0.4 * shkStrength));
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 3), 1);
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 4), 1 + (0.3 * shkStrength));
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 5), 1);
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 6), 1 + (0.3 * shkStrength));
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 7), 1);
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 8), 1 + (0.2 * shkStrength));
            exposure.property(5).setValueAtTime(newInPoint + (frameDuration * 9), 1);
            exposure.property(5).setValueAtTime(newOutPoint, 1 + (0.1 * shkStrength));
            solid.stretch = shkLength;
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function getAllEff832ruhFS84rugbbUSDG() {
    var names = [];
    var effects = app.effects;
    for (var i = 0; i < effects.length; i += 1) {
        names.push(effects[i].displayName);
    }
    return names;
}

function getStandardEffectsAndPlugins83nhUShgudbds() {
    var effectArray = getAllEff832ruhFS84rugbbUSDG();
    return effectArray.toSource();
}

function AE_VersionButDumCuzAdobeIsFuckingStupid() {
    var version = 0;
    version = Number(app.version.substr(0, 2));
    if (version < 20) {
        version += 3;
    }
    return version;
}

function PresetFolderPath() {
    var aeVersion = AE_VersionButDumCuzAdobeIsFuckingStupid();
    if ($.os.indexOf("Mac") !== -1) {
        userPresetsFolder = Folder(Folder.myDocuments.fsName + "/Adobe/After Effects 20" + aeVersion + "/User Presets/");
    } else {
        userPresetsFolder = Folder(Folder.myDocuments.fsName + "\\Adobe\\After Effects 20" + aeVersion + "\\User Presets\\");
    }
    return userPresetsFolder;
}

function getAllUserPresets() {
    var userPresetsArray = [];
    var userPresetsFolder = PresetFolderPath();
    if (!userPresetsFolder.exists) {
        return userPresetsArray.toSource();
    }
    var presetFiles = userPresetsFolder.getFiles("*.ffx");
    for (var i = 0; i < presetFiles.length; i += 1) {
        userPresetsArray.push(decodeURIComponent(presetFiles[i].name));
    }
    return userPresetsArray.toSource();
}

function JustAddTheEffect(theEffect) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Added Effect");
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryFlow: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            myLayers[i].Effects.addProperty(theEffect);
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function JustAddThePreset(thePreset) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow Added Effect");
    var aeVersion = app.version.substr(0, 2);
    if ($.os.indexOf("Mac") !== -1) {
        userPresetsFolder = Folder(Folder.myDocuments.fsName + "/Adobe/After Effects 20" + aeVersion + "/User Presets/" + thePreset);
    } else {
        userPresetsFolder = Folder(Folder.myDocuments.fsName + "\\Adobe\\After Effects 20" + aeVersion + "\\User Presets\\" + thePreset);
    }
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryFlow: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            myLayers[i].applyPreset(File(decodeURIComponent(userPresetsFolder)));
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function clearAllMarkers(comp) {
    var markerProp = comp.markerProperty;
    var numMarkers = markerProp.numKeys;
    for (var i = numMarkers; i >= 1; i--) {
        markerProp.removeKey(i);
    }
}

function MarkerDoingIsCheatingNow(comp, audioLayer, thresholdInPercent, bassMode, trebleMode) {
    var gVer = AE_VersionButDumCuzAdobeIsFuckingStupid();
    if ((((((gVer != 21) || (gVer != 22)) || (gVer != 23)) || (gVer != 24)) || (gVer != 25)) || (gVer != 26)) {
        var beforeConvert = thresholdInPercent;
    }
    thresholdInPercent = thresholdInPercent / 100;
    audioLayer[0].selected = true;
    var BZZZZZZZZZ = audioLayer[0].property("ADBE Effect Parade").addProperty("ADBE Aud BT");
    BZZZZZZZZZ.property(1).setValue(bassMode);
    BZZZZZZZZZ.property(2).setValue(trebleMode);
    switch (AE_VersionButDumCuzAdobeIsFuckingStupid()) {
        case 21:
            app.executeCommand(5047);
            break;
        case 22:
            app.executeCommand(5046);
            break;
        case 23:
        case 24:
        case 25:
        case 26:
            app.executeCommand(4218);
            break;
        default:
            app.executeCommand(0);
    }
    var niggerman = comp.layer(1);
    if (!niggerman) {
        return;
    }
    var markerProp = comp.markerProperty;
    var keyframes = niggerman.property("ADBE Effect Parade").property(3).property(1);
    var numKeys = keyframes.numKeys;
    var minAmplitude = keyframes.keyValue(1);
    var highestAmplitude = minAmplitude;
    var ImBrainingNow = minAmplitude;
    for (var i = 1; i <= numKeys; i += 1) {
        var amplitude = keyframes.keyValue(i);
        if (amplitude < minAmplitude) {
            minAmplitude = amplitude;
        }
        if (amplitude > highestAmplitude) {
            ImBrainingNow = highestAmplitude;
            highestAmplitude = amplitude;
        } else {
            if ((amplitude > ImBrainingNow) && (amplitude < highestAmplitude)) {
                ImBrainingNow = amplitude;
            }
        }
    }
    var thresholdDB = 0;
    if (beforeConvert == 60) {
        thresholdDB = ImBrainingNow * 0.8;
    } else {
        thresholdDB = highestAmplitude * thresholdInPercent;
    }
    var numKeys = keyframes.numKeys;
    var frameDuration = comp.frameDuration * (0.0333333333 / comp.frameDuration);
    for (var i = 1; i <= numKeys; i += 1) {
        var time = keyframes.keyTime(i);
        var amplitude = keyframes.keyValue(i);
        if (amplitude >= thresholdDB) {
            if (bassMode == -100) {
                i += Math.floor(highestAmplitude / 4);
            } else {
                i += Math.floor(highestAmplitude / 10);
            }
            var newMarker = new MarkerValue("");
            comp.markerProperty.setValueAtTime(time - frameDuration, newMarker);
        }
    }
    niggerman.remove();
    BZZZZZZZZZ.remove();
}

function DoAudioMarkers(valueSlider, valueSlider2) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow do audio markers");
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryFlow: Please select at least one layer.");
            return;
        }
        if (myLayers.length > 1) {
            alert("JerryFlow: Please select only one layer.");
            return;
        }
        clearAllMarkers(myComp);
        if (Number(valueSlider) < 100) {
            MarkerDoingIsCheatingNow(myComp, myLayers, Number(valueSlider), 25, -100);
        }
        if (Number(valueSlider2) < 100) {
            MarkerDoingIsCheatingNow(myComp, myLayers, Number(valueSlider2), -100, 5);
        }
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}

function BroWtfCreateDocumentFolderRetard() {
    alert("Critical JerryFlow ERROR!\nYour documents folder is not in the right place!\n\nHere is how to fix it\n\n1. Press Windows + R and open \"regedit\"\n2. Open the following Path: Computer\\HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Current Version\\Explorer\\User Shell Folders\n3. Find the File called  \"Personal\" and doubble click it.\n4. Replace the Value with \"%USERPROFILE%\\Documents\" and click \"Ok\"\n5. Restart your PC\n6. Enjoy :)");
}

function stringToNumbersAlt(str) {
    var result = 0;
    for (var i = 0; i < str.length; i += 1) {
        result = (result * 31) + str.charCodeAt(i);
    }
    return result;
}

function smoothOscillation(seed, currentTime, frequency, position, position_Next, currentCount) {
    function mulberry32(a) {
        return function() {
            var t = a += 1831565813;
            t = (t ^ (t >>> 15)) * (t | 1);
            t ^= (t + ((t ^ (t >>> 7)) * (t | 61)));
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }
    seed = stringToNumbersAlt(seed);
    const rand = mulberry32(seed);
    const phaseOffset = rand() * 2 * Math.PI;
    const oscillation = Math.sin((currentTime * frequency * 2 * Math.PI) + phaseOffset);
    var returnPosition = 1;
    var deltaTime = 0;
    if (!isNaN(VideoTimeLineArrayForSkipping[currentCount])) {
        deltaTime = Math.min(Math.max(1 + (((currentTime - 0.125) - VideoTimeLineArrayForSkipping[currentCount - 1]) * 4), 0), 1).toFixed(10);
    }
    const fixLag = Number(VideoTimeLineArrayForSkipping[currentCount - 1]).toFixed(3) == Number(currentTime - 0.125).toFixed(3);
    if (((!isNaN(position_Next)) && (!isNaN(position))) || (fixLag)) {
        if (fixLag) {
            returnPosition = position + ((position_Next - position) * 1);
        } else {
            returnPosition = position + ((position_Next - position) * deltaTime);
        }
    } else {
        returnPosition = position;
    }
    return oscillation * returnPosition * returnPosition;
}

function calculateAngle(x1, y1, x2, y2) {
    const angleRadians = Math.atan2(y2 - y1, x2 - x1);
    const angleDegrees = (angleRadians * 180) / Math.PI;
    const positiveAngle = (angleDegrees + 360) % 360;
    return positiveAngle;
}

function MathclampNum(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}

function AddCustomShake_JF(C_Color, tempKeyFramesX, tempKeyFramesY, seed, frequency, startTimeX, endTimeX, placement) {
    /*if (!checkForUser()) { 
    return;
    }*/
    app.beginUndoGroup("JerryFlow custom shake");
    var myComp = app.project.activeItem;
    if (myComp instanceof CompItem) {
        var myLayers = myComp.selectedLayers;
        if (myLayers.length <= 0) {
            alert("JerryShakes: Please select at least one layer.");
        }
        var frameDuration = myComp.frameDuration * (0.0333333333 / myComp.frameDuration);
        for (var i = 0; i < myLayers.length; i += 1) {
            var inPoint = Math.min(myLayers[i].inPoint, myLayers[i].outPoint);
            var outPoint = Math.max(myLayers[i].inPoint, myLayers[i].outPoint);
            var solid = myComp.layers.addSolid(returnColorFunc(Number(C_Color)), "Custom shake (JerryFlow)", myComp.width, myComp.height, 1, Number(endTimeX) - Number(startTimeX));
            solid.moveBefore(myLayers[i]);
            solid.adjustmentLayer = true;
            solid.startTime = 0;
            solid.label = Number(C_Color);
            solid.motionBlur = true;
            var newInPoint = solid.inPoint;
            var newOutPoint = solid.outPoint;
            var motionTile = solid.Effects.addProperty("ADBE Tile");
            motionTile.property(6).setValue(true);
            motionTile.property(4).setValue(110);
            motionTile.property(5).setValue(110);
            var center_x = myComp.width / 2;
            var center_y = myComp.height / 2;
            var currentTime = Number(startTimeX);
            while (currentTime < Number(endTimeX)) {
                var calcPercent = currentTime / 3;
                caledJustForPreview = Math.round(12 * calcPercent) + 1;
                var currentPerceX = smoothOscillation(seed, currentTime, Number(frequency) / 2, tempKeyFramesX[caledJustForPreview] / 100, tempKeyFramesX[caledJustForPreview + 1] / 100, caledJustForPreview) * 0.25;
                var currentPerceY = smoothOscillation(seed, currentTime, Number(frequency) / 2, tempKeyFramesY[caledJustForPreview] / 100, tempKeyFramesY[caledJustForPreview + 1] / 100, caledJustForPreview) * 0.25;
                if (isNaN(currentPerceX)) {
                    currentPerceX = 0;
                }
                if (isNaN(currentPerceY)) {
                    currentPerceY = 0;
                }
                currentX = center_x + (center_x * currentPerceX);
                currentY = center_y + (center_y * currentPerceY);
                motionTile.property(1).setValueAtTime(currentTime - Number(startTimeX), [currentX, currentY]);
                currentTime += myComp.frameDuration;
            }
            var direktblur = solid.Effects.addProperty("ADBE Motion Blur");
            var currentTimeV2 = Number(startTimeX);
            while (currentTimeV2 < Number(endTimeX)) {
                var calcPercent = currentTimeV2 / 3;
                caledJustForPreview = Math.round(12 * calcPercent) + 1;
                var currentPerceX = smoothOscillation(seed, currentTimeV2, Number(frequency) / 2, tempKeyFramesX[caledJustForPreview] / 100, tempKeyFramesX[caledJustForPreview + 1] / 100, caledJustForPreview) * 0.25;
                var currentPerceY = smoothOscillation(seed, currentTimeV2, Number(frequency) / 2, tempKeyFramesY[caledJustForPreview] / 100, tempKeyFramesY[caledJustForPreview + 1] / 100, caledJustForPreview) * 0.25;
                if (isNaN(currentPerceX)) {
                    currentPerceX = 0;
                }
                if (isNaN(currentPerceY)) {
                    currentPerceY = 0;
                }
                var calcMotionBlurStrength = (Math.abs(currentPerceX) + Math.abs(currentPerceY)) * 0.5;
                currentX = center_x + (center_x * currentPerceX);
                currentY = center_y + (center_y * currentPerceY);
                var calcAngle = calculateAngle(center_x, center_y, currentX, currentY);
                direktblur.property(1).setValueAtTime(currentTimeV2 - Number(startTimeX), calcAngle - 90);
                direktblur.property(2).setValueAtTime(currentTimeV2 - Number(startTimeX), MathclampNum(100 * calcMotionBlurStrength, 0, 100));
                currentTimeV2 += myComp.frameDuration;
            }
            const shakeLengthTotal = Number(endTimeX) - Number(startTimeX);
            switch (Number(placement)) {
                case 1:
                    solid.startTime = inPoint;
                    break;
                case 2:
                    solid.startTime = myComp.time;
                    break;
                case 3:
                    solid.startTime = outPoint - shakeLengthTotal;
                    break;
            }
        }
        comp.openInViewer();
    } else {
        alert("please select a composition.");
    }
    app.endUndoGroup();
}
var key1 = "afrj0w4egth8e97ghshguighuisedghuisegewr";
var key2 = "rfeiauhfbrte98tgfe9agtfh9easghfuisaeghf";
var OfflineKey = "efrj8e98hsugifBGzsgbsg7ehsrdzdgf7gdsafz";
var LOG_key = "sIn8hdfnn38Fnfg4ueiufujjssi844nnd";
var LOG_OFF_key = "kasFjsn848FBSAHfbhn48Bjsfk384SnfG";
var justToFuckAroundLmfao1337187NN = false;
var winStart = "C:/Program Files (x86)/Common Files/Adobe/CEP/extensions/";
var macStart = "/Library/Application Support/Adobe/CEP/extensions/";
var fsArrayWIN = [winStart + "JerryFlow V2/index.html", winStart + "JerryFlow V2/js/7g23f5gh.js", winStart + "JerryFlow V2/js/8gnS8ghns.js", winStart + "JerryFlow V2/js/534gsd34.js", winStart + "JerryFlow V2/js/KEY.js", winStart + "JerryFlow V2/css/nav_style.css", winStart + "JerryFlow V2/css/styles.css", winStart + "JerryFlow V2/resources/PreviewICON.png", winStart + "JerryFlow V2/resources/discordLogo.png", winStart + "JerryFlow V2/resources/jrymedia.png"];
var fsArrayMAC = [macStart + "JerryFlow V2/index.html", macStart + "JerryFlow V2/js/7g23f5gh.js", macStart + "JerryFlow V2/js/8gnS8ghns.js", macStart + "JerryFlow V2/js/534gsd34.js", macStart + "JerryFlow V2/js/KEY.js", macStart + "JerryFlow V2/css/nav_style.css", macStart + "JerryFlow V2/css/styles.css", macStart + "JerryFlow V2/resources/PreviewICON.png", macStart + "JerryFlow V2/resources/discordLogo.png", macStart + "JerryFlow V2/resources/jrymedia.png"];
var fcArray = ["262401855X83120X1535590552X83120", "2347578300X2879776X722321714X2879776", "2456219208X49218X420X49218", "2272089909X46724X420X46724", "193461715X28221X420X28221", "854296880X9690X420X9690", "274993143X80317X420X80317", "2893868674X26499X420X26499", "1678815716X11637X420X11637", "132682674X69956X420X69956"];
var fsArrayN = ["index.html", "7g23f5gh.js", "44d02d5.js"];
var ERRORFOUND_X002 = false;
var sibn478ghUASgbhrgzrgsgug7rgf7gf = false;
nSHg7bgfbBsb4rzfB7bSb();
var scanForLoginFiles = false;
var countPreCompTimes = 0;
const defaultMotionBlurJerryFlow = 55;
var VideoTimeLineArrayForSkipping = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3];