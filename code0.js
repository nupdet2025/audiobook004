gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDbackgroundObjects1= [];
gdjs.IntroCode.GDbackgroundObjects2= [];
gdjs.IntroCode.GDstartObjects1= [];
gdjs.IntroCode.GDstartObjects2= [];
gdjs.IntroCode.GDbefore_9595pageObjects1= [];
gdjs.IntroCode.GDbefore_9595pageObjects2= [];
gdjs.IntroCode.GDcursorObjects1= [];
gdjs.IntroCode.GDcursorObjects2= [];
gdjs.IntroCode.GDreloadObjects1= [];
gdjs.IntroCode.GDreloadObjects2= [];


gdjs.IntroCode.asyncCallback14446196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\Audio_Intro.mp3", 2, false, 100, 1);
}gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.IntroCode.asyncCallback14446196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.asyncCallback14447428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pagina_01", false);
}gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.IntroCode.asyncCallback14447428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.IntroCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].hide();
}
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.IntroCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_01.mp3", 1, true, 20, 1);
}
{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.IntroCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDstartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDstartObjects1[k] = gdjs.IntroCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDbackgroundObjects1.length = 0;
gdjs.IntroCode.GDbackgroundObjects2.length = 0;
gdjs.IntroCode.GDstartObjects1.length = 0;
gdjs.IntroCode.GDstartObjects2.length = 0;
gdjs.IntroCode.GDbefore_9595pageObjects1.length = 0;
gdjs.IntroCode.GDbefore_9595pageObjects2.length = 0;
gdjs.IntroCode.GDcursorObjects1.length = 0;
gdjs.IntroCode.GDcursorObjects2.length = 0;
gdjs.IntroCode.GDreloadObjects1.length = 0;
gdjs.IntroCode.GDreloadObjects2.length = 0;

gdjs.IntroCode.eventsList2(runtimeScene);
gdjs.IntroCode.GDbackgroundObjects1.length = 0;
gdjs.IntroCode.GDbackgroundObjects2.length = 0;
gdjs.IntroCode.GDstartObjects1.length = 0;
gdjs.IntroCode.GDstartObjects2.length = 0;
gdjs.IntroCode.GDbefore_9595pageObjects1.length = 0;
gdjs.IntroCode.GDbefore_9595pageObjects2.length = 0;
gdjs.IntroCode.GDcursorObjects1.length = 0;
gdjs.IntroCode.GDcursorObjects2.length = 0;
gdjs.IntroCode.GDreloadObjects1.length = 0;
gdjs.IntroCode.GDreloadObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
