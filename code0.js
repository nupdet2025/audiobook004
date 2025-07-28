gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDbackgroundObjects1= [];
gdjs.IntroCode.GDbackgroundObjects2= [];
gdjs.IntroCode.GDpag_959501_959502Objects1= [];
gdjs.IntroCode.GDpag_959501_959502Objects2= [];
gdjs.IntroCode.GDnext_9595pageObjects1= [];
gdjs.IntroCode.GDnext_9595pageObjects2= [];
gdjs.IntroCode.GDbefore_9595pageObjects1= [];
gdjs.IntroCode.GDbefore_9595pageObjects2= [];
gdjs.IntroCode.GDcursorObjects1= [];
gdjs.IntroCode.GDcursorObjects2= [];
gdjs.IntroCode.GDreloadObjects1= [];
gdjs.IntroCode.GDreloadObjects2= [];


gdjs.IntroCode.asyncCallback16045484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pagina_01", false);
}gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.IntroCode.asyncCallback16045484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_music.mp3", 1, true, 30, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.IntroCode.GDcursorObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
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

gdjs.copyArray(runtimeScene.getObjects("next_page"), gdjs.IntroCode.GDnext_9595pageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDnext_9595pageObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDnext_9595pageObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDnext_9595pageObjects1[k] = gdjs.IntroCode.GDnext_9595pageObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDnext_9595pageObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pag_01_02"), gdjs.IntroCode.GDpag_959501_959502Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDpag_959501_959502Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpag_959501_959502Objects1[i].getBehavior("Animation").setAnimationName("proxima");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\flip_page.mp3", false, 100, 1);
}
{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.IntroCode.GDpag_959501_959502Objects1.length = 0;
gdjs.IntroCode.GDpag_959501_959502Objects2.length = 0;
gdjs.IntroCode.GDnext_9595pageObjects1.length = 0;
gdjs.IntroCode.GDnext_9595pageObjects2.length = 0;
gdjs.IntroCode.GDbefore_9595pageObjects1.length = 0;
gdjs.IntroCode.GDbefore_9595pageObjects2.length = 0;
gdjs.IntroCode.GDcursorObjects1.length = 0;
gdjs.IntroCode.GDcursorObjects2.length = 0;
gdjs.IntroCode.GDreloadObjects1.length = 0;
gdjs.IntroCode.GDreloadObjects2.length = 0;

gdjs.IntroCode.eventsList1(runtimeScene);
gdjs.IntroCode.GDbackgroundObjects1.length = 0;
gdjs.IntroCode.GDbackgroundObjects2.length = 0;
gdjs.IntroCode.GDpag_959501_959502Objects1.length = 0;
gdjs.IntroCode.GDpag_959501_959502Objects2.length = 0;
gdjs.IntroCode.GDnext_9595pageObjects1.length = 0;
gdjs.IntroCode.GDnext_9595pageObjects2.length = 0;
gdjs.IntroCode.GDbefore_9595pageObjects1.length = 0;
gdjs.IntroCode.GDbefore_9595pageObjects2.length = 0;
gdjs.IntroCode.GDcursorObjects1.length = 0;
gdjs.IntroCode.GDcursorObjects2.length = 0;
gdjs.IntroCode.GDreloadObjects1.length = 0;
gdjs.IntroCode.GDreloadObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
