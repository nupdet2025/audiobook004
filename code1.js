gdjs.Pagina_9502Code = {};
gdjs.Pagina_9502Code.localVariables = [];
gdjs.Pagina_9502Code.GDbackgroundObjects1= [];
gdjs.Pagina_9502Code.GDbackgroundObjects2= [];
gdjs.Pagina_9502Code.GDpag_959501_959502Objects1= [];
gdjs.Pagina_9502Code.GDpag_959501_959502Objects2= [];
gdjs.Pagina_9502Code.GDnext_9595pageObjects1= [];
gdjs.Pagina_9502Code.GDnext_9595pageObjects2= [];
gdjs.Pagina_9502Code.GDbefore_9595pageObjects1= [];
gdjs.Pagina_9502Code.GDbefore_9595pageObjects2= [];
gdjs.Pagina_9502Code.GDcursorObjects1= [];
gdjs.Pagina_9502Code.GDcursorObjects2= [];


gdjs.Pagina_9502Code.asyncCallback9928404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Pagina_9502Code.localVariables);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pagina_03", false);
}gdjs.Pagina_9502Code.localVariables.length = 0;
}
gdjs.Pagina_9502Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Pagina_9502Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Pagina_9502Code.asyncCallback9928404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Pagina_9502Code.asyncCallback9956996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Pagina_9502Code.localVariables);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pagina_01", false);
}gdjs.Pagina_9502Code.localVariables.length = 0;
}
gdjs.Pagina_9502Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Pagina_9502Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Pagina_9502Code.asyncCallback9956996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Pagina_9502Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Pagina_9502Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Pagina_9502Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Pagina_9502Code.GDcursorObjects1[i].hide();
}
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\Audio_01.mp3", 2, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Pagina_9502Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Pagina_9502Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Pagina_9502Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Pagina_9502Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Pagina_9502Code.GDcursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("next_page"), gdjs.Pagina_9502Code.GDnext_9595pageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pagina_9502Code.GDnext_9595pageObjects1.length;i<l;++i) {
    if ( gdjs.Pagina_9502Code.GDnext_9595pageObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Pagina_9502Code.GDnext_9595pageObjects1[k] = gdjs.Pagina_9502Code.GDnext_9595pageObjects1[i];
        ++k;
    }
}
gdjs.Pagina_9502Code.GDnext_9595pageObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pag_01_02"), gdjs.Pagina_9502Code.GDpag_959501_959502Objects1);
{for(var i = 0, len = gdjs.Pagina_9502Code.GDpag_959501_959502Objects1.length ;i < len;++i) {
    gdjs.Pagina_9502Code.GDpag_959501_959502Objects1[i].getBehavior("Animation").setAnimationName("proxima");
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\flip_page.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Pagina_9502Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("before_page"), gdjs.Pagina_9502Code.GDbefore_9595pageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pagina_9502Code.GDbefore_9595pageObjects1.length;i<l;++i) {
    if ( gdjs.Pagina_9502Code.GDbefore_9595pageObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Pagina_9502Code.GDbefore_9595pageObjects1[k] = gdjs.Pagina_9502Code.GDbefore_9595pageObjects1[i];
        ++k;
    }
}
gdjs.Pagina_9502Code.GDbefore_9595pageObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pag_01_02"), gdjs.Pagina_9502Code.GDpag_959501_959502Objects1);
{for(var i = 0, len = gdjs.Pagina_9502Code.GDpag_959501_959502Objects1.length ;i < len;++i) {
    gdjs.Pagina_9502Code.GDpag_959501_959502Objects1[i].getBehavior("Animation").setAnimationName("volta");
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\flip_page.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Pagina_9502Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Pagina_9502Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pagina_9502Code.GDbackgroundObjects1.length = 0;
gdjs.Pagina_9502Code.GDbackgroundObjects2.length = 0;
gdjs.Pagina_9502Code.GDpag_959501_959502Objects1.length = 0;
gdjs.Pagina_9502Code.GDpag_959501_959502Objects2.length = 0;
gdjs.Pagina_9502Code.GDnext_9595pageObjects1.length = 0;
gdjs.Pagina_9502Code.GDnext_9595pageObjects2.length = 0;
gdjs.Pagina_9502Code.GDbefore_9595pageObjects1.length = 0;
gdjs.Pagina_9502Code.GDbefore_9595pageObjects2.length = 0;
gdjs.Pagina_9502Code.GDcursorObjects1.length = 0;
gdjs.Pagina_9502Code.GDcursorObjects2.length = 0;

gdjs.Pagina_9502Code.eventsList2(runtimeScene);
gdjs.Pagina_9502Code.GDbackgroundObjects1.length = 0;
gdjs.Pagina_9502Code.GDbackgroundObjects2.length = 0;
gdjs.Pagina_9502Code.GDpag_959501_959502Objects1.length = 0;
gdjs.Pagina_9502Code.GDpag_959501_959502Objects2.length = 0;
gdjs.Pagina_9502Code.GDnext_9595pageObjects1.length = 0;
gdjs.Pagina_9502Code.GDnext_9595pageObjects2.length = 0;
gdjs.Pagina_9502Code.GDbefore_9595pageObjects1.length = 0;
gdjs.Pagina_9502Code.GDbefore_9595pageObjects2.length = 0;
gdjs.Pagina_9502Code.GDcursorObjects1.length = 0;
gdjs.Pagina_9502Code.GDcursorObjects2.length = 0;


return;

}

gdjs['Pagina_9502Code'] = gdjs.Pagina_9502Code;
