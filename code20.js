gdjs.Pagina_95020Code = {};
gdjs.Pagina_95020Code.localVariables = [];
gdjs.Pagina_95020Code.GDbackgroundObjects1= [];
gdjs.Pagina_95020Code.GDbackgroundObjects2= [];
gdjs.Pagina_95020Code.GDpag_959501_959502Objects1= [];
gdjs.Pagina_95020Code.GDpag_959501_959502Objects2= [];
gdjs.Pagina_95020Code.GDnext_9595pageObjects1= [];
gdjs.Pagina_95020Code.GDnext_9595pageObjects2= [];
gdjs.Pagina_95020Code.GDcursorObjects1= [];
gdjs.Pagina_95020Code.GDcursorObjects2= [];
gdjs.Pagina_95020Code.GDbefore_9595pageObjects1= [];
gdjs.Pagina_95020Code.GDbefore_9595pageObjects2= [];
gdjs.Pagina_95020Code.GDrecome_95231arObjects1= [];
gdjs.Pagina_95020Code.GDrecome_95231arObjects2= [];
gdjs.Pagina_95020Code.GDcreditosObjects1= [];
gdjs.Pagina_95020Code.GDcreditosObjects2= [];


gdjs.Pagina_95020Code.asyncCallback16468364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Pagina_95020Code.localVariables);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pagina_03", false);
}gdjs.Pagina_95020Code.localVariables.length = 0;
}
gdjs.Pagina_95020Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Pagina_95020Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Pagina_95020Code.asyncCallback16468364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Pagina_95020Code.asyncCallback16469644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Pagina_95020Code.localVariables);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pagina_019", false);
}gdjs.Pagina_95020Code.localVariables.length = 0;
}
gdjs.Pagina_95020Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Pagina_95020Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Pagina_95020Code.asyncCallback16469644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Pagina_95020Code.asyncCallback16472076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Pagina_95020Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}gdjs.Pagina_95020Code.localVariables.length = 0;
}
gdjs.Pagina_95020Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Pagina_95020Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Pagina_95020Code.asyncCallback16472076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Pagina_95020Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Pagina_95020Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Pagina_95020Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Pagina_95020Code.GDcursorObjects1[i].hide();
}
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Pagina_95020Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Pagina_95020Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Pagina_95020Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Pagina_95020Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Pagina_95020Code.GDcursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next_page"), gdjs.Pagina_95020Code.GDnext_9595pageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pagina_95020Code.GDnext_9595pageObjects1.length;i<l;++i) {
    if ( gdjs.Pagina_95020Code.GDnext_9595pageObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Pagina_95020Code.GDnext_9595pageObjects1[k] = gdjs.Pagina_95020Code.GDnext_9595pageObjects1[i];
        ++k;
    }
}
gdjs.Pagina_95020Code.GDnext_9595pageObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pag_01_02"), gdjs.Pagina_95020Code.GDpag_959501_959502Objects1);
{for(var i = 0, len = gdjs.Pagina_95020Code.GDpag_959501_959502Objects1.length ;i < len;++i) {
    gdjs.Pagina_95020Code.GDpag_959501_959502Objects1[i].getBehavior("Animation").setAnimationName("proxima");
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\flip_page.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Pagina_95020Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("before_page"), gdjs.Pagina_95020Code.GDbefore_9595pageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pagina_95020Code.GDbefore_9595pageObjects1.length;i<l;++i) {
    if ( gdjs.Pagina_95020Code.GDbefore_9595pageObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Pagina_95020Code.GDbefore_9595pageObjects1[k] = gdjs.Pagina_95020Code.GDbefore_9595pageObjects1[i];
        ++k;
    }
}
gdjs.Pagina_95020Code.GDbefore_9595pageObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("creditos"), gdjs.Pagina_95020Code.GDcreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("pag_01_02"), gdjs.Pagina_95020Code.GDpag_959501_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("recomeçar"), gdjs.Pagina_95020Code.GDrecome_95231arObjects1);
{for(var i = 0, len = gdjs.Pagina_95020Code.GDpag_959501_959502Objects1.length ;i < len;++i) {
    gdjs.Pagina_95020Code.GDpag_959501_959502Objects1[i].getBehavior("Animation").setAnimationName("volta");
}
}{for(var i = 0, len = gdjs.Pagina_95020Code.GDrecome_95231arObjects1.length ;i < len;++i) {
    gdjs.Pagina_95020Code.GDrecome_95231arObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Pagina_95020Code.GDcreditosObjects1.length ;i < len;++i) {
    gdjs.Pagina_95020Code.GDcreditosObjects1[i].hide();
}
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\flip_page.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Pagina_95020Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("recomeçar"), gdjs.Pagina_95020Code.GDrecome_95231arObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pagina_95020Code.GDrecome_95231arObjects1.length;i<l;++i) {
    if ( gdjs.Pagina_95020Code.GDrecome_95231arObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Pagina_95020Code.GDrecome_95231arObjects1[k] = gdjs.Pagina_95020Code.GDrecome_95231arObjects1[i];
        ++k;
    }
}
gdjs.Pagina_95020Code.GDrecome_95231arObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 0, 0.5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 40, 1);
}
{ //Subevents
gdjs.Pagina_95020Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Pagina_95020Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pagina_95020Code.GDbackgroundObjects1.length = 0;
gdjs.Pagina_95020Code.GDbackgroundObjects2.length = 0;
gdjs.Pagina_95020Code.GDpag_959501_959502Objects1.length = 0;
gdjs.Pagina_95020Code.GDpag_959501_959502Objects2.length = 0;
gdjs.Pagina_95020Code.GDnext_9595pageObjects1.length = 0;
gdjs.Pagina_95020Code.GDnext_9595pageObjects2.length = 0;
gdjs.Pagina_95020Code.GDcursorObjects1.length = 0;
gdjs.Pagina_95020Code.GDcursorObjects2.length = 0;
gdjs.Pagina_95020Code.GDbefore_9595pageObjects1.length = 0;
gdjs.Pagina_95020Code.GDbefore_9595pageObjects2.length = 0;
gdjs.Pagina_95020Code.GDrecome_95231arObjects1.length = 0;
gdjs.Pagina_95020Code.GDrecome_95231arObjects2.length = 0;
gdjs.Pagina_95020Code.GDcreditosObjects1.length = 0;
gdjs.Pagina_95020Code.GDcreditosObjects2.length = 0;

gdjs.Pagina_95020Code.eventsList3(runtimeScene);
gdjs.Pagina_95020Code.GDbackgroundObjects1.length = 0;
gdjs.Pagina_95020Code.GDbackgroundObjects2.length = 0;
gdjs.Pagina_95020Code.GDpag_959501_959502Objects1.length = 0;
gdjs.Pagina_95020Code.GDpag_959501_959502Objects2.length = 0;
gdjs.Pagina_95020Code.GDnext_9595pageObjects1.length = 0;
gdjs.Pagina_95020Code.GDnext_9595pageObjects2.length = 0;
gdjs.Pagina_95020Code.GDcursorObjects1.length = 0;
gdjs.Pagina_95020Code.GDcursorObjects2.length = 0;
gdjs.Pagina_95020Code.GDbefore_9595pageObjects1.length = 0;
gdjs.Pagina_95020Code.GDbefore_9595pageObjects2.length = 0;
gdjs.Pagina_95020Code.GDrecome_95231arObjects1.length = 0;
gdjs.Pagina_95020Code.GDrecome_95231arObjects2.length = 0;
gdjs.Pagina_95020Code.GDcreditosObjects1.length = 0;
gdjs.Pagina_95020Code.GDcreditosObjects2.length = 0;


return;

}

gdjs['Pagina_95020Code'] = gdjs.Pagina_95020Code;
