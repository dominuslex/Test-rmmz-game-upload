//=============================================================================
// VisuStella MZ - Map Camera Zoom
// VisuMZ_4_MapCameraZoom.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_MapCameraZoom = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MapCameraZoom = VisuMZ.MapCameraZoom || {};
VisuMZ.MapCameraZoom.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.01] [MapCameraZoom]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Map_Camera_Zoom_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin enables the ability to zoom the in-game camera inward and make
 * the visible game area larger and more focused. The camera can also focus on
 * events or specific tiles other than just the player, making it helpful for
 * cutscenes. Easing accessibility also makes the zoom and camera shifts more
 * soft and less rough feeling.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Zoom ability allows the camera to zoom inward and enlarge the focal point.
 * * Auto-zoom notetag allows for the camera to automatically shift when
 *   entering specific maps.
 * * Camera focus function allows the game camera to instantly move over to the
 *   target event or target tile.
 * * Easing accessibility allow for smoothing zooming and camera focus changes
 *   alongside dedicated wait time control.
 * * Wait for Zoom and Wait for Camera Focus plugin commands are available for
 *   more on the go flexibility in eventing.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Cannot Go Under 100%
 * 
 * You can zoom in (aka go above 100% zoom), but you cannot zoom out (aka go
 * under 100% zoom). The reasoning behind this is because of the limitation
 * between PixiJS and WebGL. Going under 100% zoom will break the tilemap and
 * cause large chunks of it to go missing.
 * 
 * This is true even without this plugin installed as you can try to use the
 * innate RPG Maker MZ zoom functions and try to set the zoom scale under 100%.
 * The tileset will immediately start to fall apart.
 *
 * ---
 * 
 * Sprites No Longer Smoothed
 * 
 * When using this plugin, certain resources like on-map character sprites and
 * some tile sprites will have bitmap smoothing removed. The reason for this is
 * due to PixiJS's texture bleeding problem when the sprites are zoomed in. If
 * left alone, this causes an ugly filmy border around the edges of the
 * sprite's dimensions that are otherwise an eye-sore to look at.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_0_CoreEngine
 * 
 * Having the VisuMZ Core Engine installed will enable you to use easing when
 * it comes to zooming and camera panning.
 * 
 * ---
 * 
 * Picture Zooming
 * 
 * If you are NOT using the VisuMZ Core Engine, pictures will be bound to the
 * zoom scale. This is NOT a bug. If you are using pictures in a completely
 * vanilla RPG Maker MZ project without any plugins installed and enter a
 * battle, the battle zoom will also make the pictures zoom in as well.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Zoom: x%>
 * <AutoZoom: x%>
 * <Auto Zoom: x%>
 *
 * - Used for: Map Notetags
 * - Causes the game camera to automatically zoom to x% when entering a map
 *   with this notetag.
 *   - This does NOT reverse itself when exiting the map. The zoom settings
 *     will carry over to other maps unless those maps have their own auto-zoom
 *     notetag present.
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - Replace 'x' with a percentage value above 100% to represent the zoom scale
 *   you wish to change to when entering this map.
 *   - 'x' cannot be under 100%! Read the "Cannot Go Under 100%" section for
 *     more information as to why.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Camera Plugin Commands ===
 * 
 * ---
 *
 * Camera: Focus Player
 * - Puts the camera focus on the player character.
 *
 *   Duration:
 *   - How many frames should it take to finish focus?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Camera: Focus Target Event
 * - Puts the camera focus on target event.
 *
 *   Event ID:
 *   - Insert the ID of the event to focus on.
 *   - Use 0 for this event.
 *   - You may use JavaScript code.
 *
 *   Duration:
 *   - How many frames should it take to finish focus?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Camera: Focus Target Tile
 * - Puts the camera focus on target map tile.
 *
 *   Map Tile X:
 *   - What is the X coordinate of the target map tile?
 *   - You may use JavaScript code.
 *
 *   Map Tile Y:
 *   - What is the Y coordinate of the target map tile?
 *   - You may use JavaScript code.
 *
 *   Duration:
 *   - How many frames should it take to finish focus?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Camera: Wait for Focus
 * - Waits for camera focus to finish changing before continuing.
 *
 * ---
 * 
 * === Zoom Plugin Commands ===
 * 
 * ---
 *
 * Zoom: Change Zoom
 * - Change the current zoom amount.
 *
 *   Target Zoom Scale:
 *   - What is the target zoom scale?
 *   - 1.0 = 100%; 1.5 = 150%; 2.0 = 200%;
 *   - Cannot go under 1.0!
 *
 *   Duration:
 *   - How many frames should it take to finish zooming?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Zoom: Wait for Zoom
 * - Waits for zoom to finish changing before continuing.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings used for the Map Camera Zoom plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Default Zoom:
 *   - What is the default zoom value?
 *   - 1.0 = 100%; 1.5 = 150%; 2.0 = 200%;
 *   - Cannot go under 1.0!
 * 
 *   Adapt Battle Encounter Ani:
 *   - Adapt the battle encounter zoom effect?
 *   - Occurs when entering battle from the map.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Arisu
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.01: March 16, 2023
 * * Compatibility Update
 * ** Better camera zoom with VisuStella MZ Movement Effect's Smooth Scrolling
 *    when this plugin's 'Adapt Battle Encounter Ani' setting is turned off.
 * 
 * Version 1.00 Official Release Date: November 2, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusPlayer
 * @text Camera: Focus Player
 * @desc Puts the camera focus on the player character.
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish focus?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusTargetEvent
 * @text Camera: Focus Target Event
 * @desc Puts the camera focus on target event.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the event to focus on.
 * Use 0 for this event. You may use JavaScript code.
 * @default 0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish focus?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusTargetTile
 * @text Camera: Focus Target Tile
 * @desc Puts the camera focus on target map tile.
 *
 * @arg MapX:eval
 * @text Map Tile X
 * @desc What is the X coordinate of the target map tile?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg MapY:eval
 * @text Map Tile Y
 * @desc What is the Y coordinate of the target map tile?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish focus?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusWait
 * @text Camera: Wait for Focus
 * @desc Waits for camera focus to finish changing before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Zoom
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ZoomChange
 * @text Zoom: Change Zoom
 * @desc Change the current zoom amount.
 *
 * @arg TargetScale:num
 * @text Target Zoom Scale
 * @desc What is the target zoom scale?
 * 1.0 = 100%; 1.5 = 150%; 2.0 = 200%; Cannot go under 1.0!
 * @default 1.0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish zooming?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ZoomWait
 * @text Zoom: Wait for Zoom
 * @desc Waits for zoom to finish changing before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MapCameraZoom
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DefaultZoom:num
 * @text Default Zoom
 * @desc What is the default zoom value?
 * 1.0 = 100%; 1.5 = 150%; 2.0 = 200%; Cannot go under 1.0!
 * @default 1.0
 *
 * @param AdaptBattleEncZoom:eval
 * @text Adapt Battle Encounter Ani
 * @parent Animation
 * @type boolean
 * @on Adapt
 * @off Unchanged
 * @desc Adapt the battle encounter zoom effect?
 * Occurs when entering battle from the map.
 * @default true
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
//=============================================================================

const _0x34c389=_0x2f29;(function(_0xe06849,_0x18e0d3){const _0x3492b0=_0x2f29,_0x2fa995=_0xe06849();while(!![]){try{const _0x11ef95=parseInt(_0x3492b0(0x212))/0x1+-parseInt(_0x3492b0(0x23d))/0x2+parseInt(_0x3492b0(0x27c))/0x3*(parseInt(_0x3492b0(0x1dc))/0x4)+parseInt(_0x3492b0(0x259))/0x5+parseInt(_0x3492b0(0x21e))/0x6+parseInt(_0x3492b0(0x26c))/0x7+-parseInt(_0x3492b0(0x22f))/0x8*(parseInt(_0x3492b0(0x27b))/0x9);if(_0x11ef95===_0x18e0d3)break;else _0x2fa995['push'](_0x2fa995['shift']());}catch(_0x38bb8b){_0x2fa995['push'](_0x2fa995['shift']());}}}(_0x2e5d,0x42c09));var label='MapCameraZoom',tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x1bf312){const _0x3770b1=_0x2f29;return _0x1bf312[_0x3770b1(0x20f)]&&_0x1bf312[_0x3770b1(0x1d3)][_0x3770b1(0x1da)]('['+label+']');})[0x0];VisuMZ[label][_0x34c389(0x24c)]=VisuMZ[label][_0x34c389(0x24c)]||{},VisuMZ[_0x34c389(0x1f3)]=function(_0x4a9b6c,_0x1e3652){const _0x52c980=_0x34c389;for(const _0x1c1d49 in _0x1e3652){if(_0x1c1d49[_0x52c980(0x24e)](/(.*):(.*)/i)){const _0x9cb890=String(RegExp['$1']),_0x145652=String(RegExp['$2'])[_0x52c980(0x1de)]()['trim']();let _0x184b53,_0x2a71a3,_0x3cdb1d;switch(_0x145652){case _0x52c980(0x28d):_0x184b53=_0x1e3652[_0x1c1d49]!==''?Number(_0x1e3652[_0x1c1d49]):0x0;break;case _0x52c980(0x20c):_0x2a71a3=_0x1e3652[_0x1c1d49]!==''?JSON['parse'](_0x1e3652[_0x1c1d49]):[],_0x184b53=_0x2a71a3[_0x52c980(0x293)](_0x5c8c41=>Number(_0x5c8c41));break;case'EVAL':_0x184b53=_0x1e3652[_0x1c1d49]!==''?eval(_0x1e3652[_0x1c1d49]):null;break;case _0x52c980(0x22d):_0x2a71a3=_0x1e3652[_0x1c1d49]!==''?JSON['parse'](_0x1e3652[_0x1c1d49]):[],_0x184b53=_0x2a71a3[_0x52c980(0x293)](_0x30b9d9=>eval(_0x30b9d9));break;case _0x52c980(0x261):_0x184b53=_0x1e3652[_0x1c1d49]!==''?JSON[_0x52c980(0x1ed)](_0x1e3652[_0x1c1d49]):'';break;case _0x52c980(0x288):_0x2a71a3=_0x1e3652[_0x1c1d49]!==''?JSON[_0x52c980(0x1ed)](_0x1e3652[_0x1c1d49]):[],_0x184b53=_0x2a71a3[_0x52c980(0x293)](_0x5d4fd0=>JSON[_0x52c980(0x1ed)](_0x5d4fd0));break;case _0x52c980(0x286):_0x184b53=_0x1e3652[_0x1c1d49]!==''?new Function(JSON[_0x52c980(0x1ed)](_0x1e3652[_0x1c1d49])):new Function(_0x52c980(0x274));break;case'ARRAYFUNC':_0x2a71a3=_0x1e3652[_0x1c1d49]!==''?JSON[_0x52c980(0x1ed)](_0x1e3652[_0x1c1d49]):[],_0x184b53=_0x2a71a3[_0x52c980(0x293)](_0x2fd127=>new Function(JSON[_0x52c980(0x1ed)](_0x2fd127)));break;case'STR':_0x184b53=_0x1e3652[_0x1c1d49]!==''?String(_0x1e3652[_0x1c1d49]):'';break;case _0x52c980(0x21d):_0x2a71a3=_0x1e3652[_0x1c1d49]!==''?JSON[_0x52c980(0x1ed)](_0x1e3652[_0x1c1d49]):[],_0x184b53=_0x2a71a3[_0x52c980(0x293)](_0x460a71=>String(_0x460a71));break;case _0x52c980(0x264):_0x3cdb1d=_0x1e3652[_0x1c1d49]!==''?JSON[_0x52c980(0x1ed)](_0x1e3652[_0x1c1d49]):{},_0x184b53=VisuMZ['ConvertParams']({},_0x3cdb1d);break;case'ARRAYSTRUCT':_0x2a71a3=_0x1e3652[_0x1c1d49]!==''?JSON[_0x52c980(0x1ed)](_0x1e3652[_0x1c1d49]):[],_0x184b53=_0x2a71a3[_0x52c980(0x293)](_0x3b33a0=>VisuMZ[_0x52c980(0x1f3)]({},JSON[_0x52c980(0x1ed)](_0x3b33a0)));break;default:continue;}_0x4a9b6c[_0x9cb890]=_0x184b53;}}return _0x4a9b6c;},(_0x318995=>{const _0x3c7707=_0x34c389,_0x39aaa6=_0x318995[_0x3c7707(0x254)];for(const _0x592854 of dependencies){if(!Imported[_0x592854]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x3c7707(0x255)](_0x39aaa6,_0x592854)),SceneManager[_0x3c7707(0x22b)]();break;}}const _0x12725=_0x318995[_0x3c7707(0x1d3)];if(_0x12725[_0x3c7707(0x24e)](/\[Version[ ](.*?)\]/i)){const _0x4ea9e7=Number(RegExp['$1']);_0x4ea9e7!==VisuMZ[label]['version']&&(alert(_0x3c7707(0x258)['format'](_0x39aaa6,_0x4ea9e7)),SceneManager['exit']());}if(_0x12725[_0x3c7707(0x24e)](/\[Tier[ ](\d+)\]/i)){const _0x3862b5=Number(RegExp['$1']);_0x3862b5<tier?(alert(_0x3c7707(0x1d7)[_0x3c7707(0x255)](_0x39aaa6,_0x3862b5,tier)),SceneManager[_0x3c7707(0x22b)]()):tier=Math[_0x3c7707(0x225)](_0x3862b5,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x3c7707(0x24c)],_0x318995[_0x3c7707(0x283)]);})(pluginData),PluginManager[_0x34c389(0x263)](pluginData[_0x34c389(0x254)],'CameraFocusPlayer',_0x1a959b=>{const _0x295405=_0x34c389;if(!SceneManager['isSceneMap']())return;if($gamePlayer[_0x295405(0x217)]())return;VisuMZ[_0x295405(0x1f3)](_0x1a959b,_0x1a959b);const _0x58d2b4=_0x1a959b[_0x295405(0x22a)]||0x1,_0x11d367=_0x1a959b[_0x295405(0x275)]||'Linear';$gameScreen[_0x295405(0x235)](_0x58d2b4,_0x11d367);}),PluginManager['registerCommand'](pluginData[_0x34c389(0x254)],_0x34c389(0x25e),_0x11bad0=>{const _0x506067=_0x34c389;if(!SceneManager[_0x506067(0x1f8)]())return;VisuMZ[_0x506067(0x1f3)](_0x11bad0,_0x11bad0);const _0x476a37=$gameTemp[_0x506067(0x215)](),_0x270c87=_0x11bad0['EventID']||_0x476a37[_0x506067(0x250)](),_0x36f996=$gameMap['event'](_0x270c87),_0x3cd669=_0x11bad0[_0x506067(0x22a)]||0x1,_0x2e9725=_0x11bad0['EasingType']||_0x506067(0x228);if(!_0x36f996)return;$gameScreen[_0x506067(0x1e8)](_0x270c87,_0x3cd669,_0x2e9725);}),PluginManager['registerCommand'](pluginData[_0x34c389(0x254)],'CameraFocusTargetTile',_0x30dccb=>{const _0x3581e4=_0x34c389;if(!SceneManager[_0x3581e4(0x1f8)]())return;VisuMZ[_0x3581e4(0x1f3)](_0x30dccb,_0x30dccb);const _0x509314=_0x30dccb[_0x3581e4(0x1ef)][_0x3581e4(0x26a)](0x0,$gameMap[_0x3581e4(0x223)]()-0x1),_0x5ecc45=_0x30dccb[_0x3581e4(0x1d1)][_0x3581e4(0x26a)](0x0,$gameMap[_0x3581e4(0x272)]()-0x1),_0x288812=_0x30dccb[_0x3581e4(0x22a)]||0x1,_0x3204b7=_0x30dccb[_0x3581e4(0x275)]||'Linear';$gameScreen[_0x3581e4(0x277)](_0x509314,_0x5ecc45,_0x288812,_0x3204b7);}),PluginManager[_0x34c389(0x263)](pluginData['name'],_0x34c389(0x206),_0x1a0086=>{const _0x2e2d52=_0x34c389;if(!SceneManager['isSceneMap']())return;const _0x5d6d96=$gameTemp[_0x2e2d52(0x215)]();_0x5d6d96[_0x2e2d52(0x262)](_0x2e2d52(0x1ee));}),PluginManager[_0x34c389(0x263)](pluginData['name'],_0x34c389(0x23b),_0x40fe24=>{const _0x330110=_0x34c389;if(!SceneManager[_0x330110(0x1f8)]())return;VisuMZ[_0x330110(0x1f3)](_0x40fe24,_0x40fe24);let _0x4a2504=_0x40fe24[_0x330110(0x211)];_0x4a2504<0x1&&$gameTemp[_0x330110(0x241)]()&&(alert('Zoom\x20cannot\x20go\x20under\x20100%.'),_0x4a2504=0x1);const _0xcc4a31=_0x40fe24[_0x330110(0x22a)]||0x1,_0x505cd4=_0x40fe24['EasingType']||_0x330110(0x228);$gameScreen['startMapZoom'](_0x4a2504,_0xcc4a31,_0x505cd4);}),PluginManager[_0x34c389(0x263)](pluginData[_0x34c389(0x254)],'ZoomWait',_0x35dbd6=>{const _0x86bf7b=_0x34c389;if(!SceneManager['isSceneMap']())return;const _0x498c57=$gameTemp[_0x86bf7b(0x215)]();_0x498c57[_0x86bf7b(0x262)]('mapZoom');}),VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x28a)]={'AutoZoom':/<(?:ZOOM|AUTO ZOOM|AUTOZOOM):[ ](\d+)([%％])>/i},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x1e1)]=ImageManager[_0x34c389(0x28c)],ImageManager[_0x34c389(0x28c)]=function(_0x486ffd){const _0x36abc8=_0x34c389,_0x49f376=VisuMZ['MapCameraZoom'][_0x36abc8(0x1e1)]['call'](this,_0x486ffd);return _0x49f376[_0x36abc8(0x227)]=![],_0x49f376;},VisuMZ[_0x34c389(0x1e0)]['ImageManager_loadSystem']=ImageManager[_0x34c389(0x203)],ImageManager[_0x34c389(0x203)]=function(_0x271c91){const _0xa3399a=_0x34c389,_0x102957=VisuMZ[_0xa3399a(0x1e0)][_0xa3399a(0x1f5)]['call'](this,_0x271c91);if(_0x271c91===_0xa3399a(0x1fe))_0x102957[_0xa3399a(0x227)]=![];return _0x102957;},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x25c)]=ImageManager[_0x34c389(0x218)],ImageManager[_0x34c389(0x218)]=function(_0x15a5bd){const _0x39d0a9=_0x34c389,_0x2e5467=VisuMZ[_0x39d0a9(0x1e0)][_0x39d0a9(0x25c)][_0x39d0a9(0x1d6)](this,_0x15a5bd);return _0x2e5467['smooth']=![],_0x2e5467;},SceneManager[_0x34c389(0x1f8)]=function(){const _0x113abf=_0x34c389;return this['_scene']&&this[_0x113abf(0x24d)][_0x113abf(0x205)]===Scene_Map;},Game_Temp[_0x34c389(0x268)]['setLastPluginCommandInterpreter']=function(_0x284676){const _0x35924c=_0x34c389;this[_0x35924c(0x1e9)]=_0x284676;},Game_Temp[_0x34c389(0x268)][_0x34c389(0x215)]=function(){return this['_lastPluginCommandInterpreter'];},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x1f9)]=Game_Interpreter['prototype'][_0x34c389(0x20b)],Game_Interpreter[_0x34c389(0x268)][_0x34c389(0x20b)]=function(_0x49f568){const _0x3e28eb=_0x34c389;return $gameTemp[_0x3e28eb(0x216)](this),VisuMZ[_0x3e28eb(0x1e0)][_0x3e28eb(0x1f9)][_0x3e28eb(0x1d6)](this,_0x49f568);},Game_Screen[_0x34c389(0x28e)]=Math[_0x34c389(0x225)](0x1,VisuMZ[_0x34c389(0x1e0)]['Settings'][_0x34c389(0x1fc)]||0x1),VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x23a)]=Game_Screen[_0x34c389(0x268)][_0x34c389(0x278)],Game_Screen[_0x34c389(0x268)][_0x34c389(0x278)]=function(){const _0x32007f=_0x34c389;VisuMZ[_0x32007f(0x1e0)][_0x32007f(0x23a)]['call'](this),this[_0x32007f(0x24a)]();},Game_Screen[_0x34c389(0x268)][_0x34c389(0x24a)]=function(){const _0xa4549c=_0x34c389;this[_0xa4549c(0x284)](),this[_0xa4549c(0x252)]();},Game_Screen[_0x34c389(0x268)][_0x34c389(0x229)]=function(){const _0x5a72ce=_0x34c389,_0x29842a=this[_0x5a72ce(0x260)]();$gameMap['centerMapCameraZoom'](_0x29842a['_realX'],_0x29842a['_realY']);},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x26b)]=Game_Screen[_0x34c389(0x268)]['updateZoom'],Game_Screen[_0x34c389(0x268)]['updateZoom']=function(){const _0x7ee07a=_0x34c389;VisuMZ['MapCameraZoom']['Game_Screen_updateZoom'][_0x7ee07a(0x1d6)](this),this[_0x7ee07a(0x21b)](),this[_0x7ee07a(0x287)]();},Game_Screen['prototype']['setupMapZoomSettings']=function(){const _0x3381f0=_0x34c389;this[_0x3381f0(0x251)]={'scale':Game_Screen[_0x3381f0(0x28e)],'targetScale':Game_Screen['DEFAULT_MAP_ZOOM_SCALE'],'duration':0x0,'wholeDuration':0x0,'easingType':_0x3381f0(0x228)},this['_mapEnterBattleZoom']={'scale':0x1,'targetScale':0x1,'duration':0x0,'wholeDuration':0x0,'easingType':_0x3381f0(0x228)};},Game_Screen[_0x34c389(0x268)][_0x34c389(0x247)]=function(){const _0xbd4584=_0x34c389;if(this[_0xbd4584(0x251)]===undefined)this[_0xbd4584(0x284)]();return this[_0xbd4584(0x251)];},Game_Screen['prototype'][_0x34c389(0x292)]=function(){const _0x1b3b62=_0x34c389;if(this[_0x1b3b62(0x240)]===undefined)this['setupMapZoomSettings']();return this['_mapEnterBattleZoom'];},Game_Screen[_0x34c389(0x268)][_0x34c389(0x1e7)]=function(_0x1140b2,_0x2d14d0,_0x30daf7){const _0x4d5aea=_0x34c389,_0x99880c=this[_0x4d5aea(0x247)]();if(_0x99880c['targetScale']===_0x1140b2)return;_0x99880c[_0x4d5aea(0x21a)]=_0x1140b2,_0x99880c[_0x4d5aea(0x270)]=_0x2d14d0||0x1,_0x99880c[_0x4d5aea(0x238)]=_0x2d14d0||0x1,_0x99880c['easingType']=_0x30daf7;},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x21f)]=Game_Screen[_0x34c389(0x268)][_0x34c389(0x224)],Game_Screen[_0x34c389(0x268)][_0x34c389(0x224)]=function(){const _0x5bcc7c=_0x34c389;let _0x1abbdb=VisuMZ['MapCameraZoom'][_0x5bcc7c(0x21f)][_0x5bcc7c(0x1d6)](this);if(!this['allowExtendMapZoom']())return _0x1abbdb;return SceneManager[_0x5bcc7c(0x1f8)]()&&(_0x1abbdb*=Math[_0x5bcc7c(0x225)](this[_0x5bcc7c(0x247)]()[_0x5bcc7c(0x281)],0x1),_0x1abbdb*=Math[_0x5bcc7c(0x225)](this[_0x5bcc7c(0x292)]()[_0x5bcc7c(0x281)],0x1)),_0x1abbdb;},Game_Screen['prototype'][_0x34c389(0x24f)]=function(){const _0x3286c3=_0x34c389;if(!SceneManager[_0x3286c3(0x1f8)]())return![];if($gameTemp[_0x3286c3(0x1e3)])return![];if(Imported[_0x3286c3(0x210)]&&$gameMap[_0x3286c3(0x22e)]())return![];return!![];},Game_Screen[_0x34c389(0x268)][_0x34c389(0x21b)]=function(){const _0x53d9d9=_0x34c389,_0x1d5df5=this[_0x53d9d9(0x247)]();if(_0x1d5df5[_0x53d9d9(0x270)]<=0x0)return;const _0x2e952d=_0x1d5df5[_0x53d9d9(0x270)],_0x52d767=_0x1d5df5[_0x53d9d9(0x238)],_0x3358ec=_0x1d5df5[_0x53d9d9(0x213)]||'Linear',_0x33c07a=_0x1d5df5[_0x53d9d9(0x281)],_0x3dd9b4=_0x1d5df5['targetScale'];_0x1d5df5['scale']=VisuMZ[_0x53d9d9(0x1e0)]['applyEasing'](_0x33c07a,_0x3dd9b4,_0x2e952d,_0x52d767,_0x3358ec),this[_0x53d9d9(0x229)](),_0x1d5df5['duration']--,_0x1d5df5[_0x53d9d9(0x270)]<=0x0&&this[_0x53d9d9(0x207)]();},Game_Screen['prototype']['onUpdateMapZoomEnd']=function(){const _0x284744=_0x34c389,_0xf95ec8=this[_0x284744(0x247)]();_0xf95ec8['scale']=_0xf95ec8[_0x284744(0x21a)];},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x23f)]=function(_0x539ee6,_0x30d86a,_0x230b89,_0x115e27,_0x38e150){const _0x59a1a1=_0x34c389,_0x109019=VisuMZ[_0x59a1a1(0x1f4)]((_0x115e27-_0x230b89)/_0x115e27,_0x38e150||_0x59a1a1(0x228)),_0x250230=VisuMZ[_0x59a1a1(0x1f4)]((_0x115e27-_0x230b89+0x1)/_0x115e27,_0x38e150||_0x59a1a1(0x228)),_0x690f0e=(_0x539ee6-_0x30d86a*_0x109019)/(0x1-_0x109019);return _0x690f0e+(_0x30d86a-_0x690f0e)*_0x250230;};!VisuMZ['ApplyEasing']&&(VisuMZ['ApplyEasing']=function(_0xa3d237,_0x5b4456){return _0xa3d237;});function _0x2f29(_0x4df5d6,_0x5bfbe9){const _0x2e5df4=_0x2e5d();return _0x2f29=function(_0x2f2921,_0x42590e){_0x2f2921=_0x2f2921-0x1cf;let _0x4b1b0f=_0x2e5df4[_0x2f2921];return _0x4b1b0f;},_0x2f29(_0x4df5d6,_0x5bfbe9);};Game_Screen['prototype'][_0x34c389(0x252)]=function(){const _0x3e7aa3=_0x34c389;this[_0x3e7aa3(0x242)]={'playerFocus':!![],'eventFocus':![],'eventTargetID':0x0,'tileFocus':![],'tileCoordinates':{'_realX':0x0,'_realY':0x0},'duration':0x0,'wholeDuration':0x0,'easingType':_0x3e7aa3(0x228),'currentCamera':{'_realX':0x0,'_realY':0x0}};},Game_Screen[_0x34c389(0x268)]['mapCameraSettings']=function(){const _0x7cfb28=_0x34c389;if(this['_mapCameraSettings']===undefined)this['setupMapCameraSettings']();return this[_0x7cfb28(0x242)];},Game_Screen[_0x34c389(0x268)][_0x34c389(0x260)]=function(_0x52eea8){const _0x57b4c8=_0x34c389,_0x4c2ec5=this[_0x57b4c8(0x20e)]();if(!_0x52eea8&&_0x4c2ec5[_0x57b4c8(0x270)]>0x0)return _0x4c2ec5[_0x57b4c8(0x1e4)];else{if(_0x4c2ec5[_0x57b4c8(0x236)])return $gamePlayer;else{if(_0x4c2ec5[_0x57b4c8(0x219)])return $gameMap[_0x57b4c8(0x289)](_0x4c2ec5[_0x57b4c8(0x27f)])||$gamePlayer;else{if(_0x4c2ec5[_0x57b4c8(0x214)])return _0x4c2ec5[_0x57b4c8(0x1f7)];}}}return $gamePlayer;},Game_Screen[_0x34c389(0x268)][_0x34c389(0x27a)]=function(){const _0x516727=_0x34c389;return this[_0x516727(0x260)]()===this[_0x516727(0x20e)]()[_0x516727(0x1e4)];},Game_Screen['prototype'][_0x34c389(0x25f)]=function(_0x4f0b05,_0x3a69ce){const _0x678faf=_0x34c389,_0x50165f=this['mapCameraSettings'](),_0x2f16d9=this[_0x678faf(0x260)]();_0x50165f[_0x678faf(0x1e4)][_0x678faf(0x28f)]=_0x2f16d9[_0x678faf(0x28f)],_0x50165f[_0x678faf(0x1e4)]['_realY']=_0x2f16d9[_0x678faf(0x1f1)],_0x50165f[_0x678faf(0x270)]=_0x4f0b05||0x1,_0x50165f[_0x678faf(0x238)]=_0x4f0b05||0x1,_0x50165f[_0x678faf(0x213)]=_0x3a69ce||_0x678faf(0x228);},Game_Screen[_0x34c389(0x268)][_0x34c389(0x235)]=function(_0x13a971,_0x592ee2){const _0x3c45d2=_0x34c389,_0x41e935=this[_0x3c45d2(0x20e)]();if($gamePlayer[_0x3c45d2(0x217)]())return;this[_0x3c45d2(0x25f)](_0x13a971,_0x592ee2),_0x41e935[_0x3c45d2(0x236)]=!![],_0x41e935['eventFocus']=![],_0x41e935[_0x3c45d2(0x214)]=![];const _0x17733a=_0x41e935[_0x3c45d2(0x1f7)];_0x17733a[_0x3c45d2(0x28f)]=-0x1,_0x17733a['_realY']=-0x1;},Game_Screen[_0x34c389(0x268)][_0x34c389(0x1e8)]=function(_0x44329b,_0x4fa724,_0x3878a7){const _0x4aef6e=_0x34c389,_0x55a0b4=$gameMap['event'](_0x44329b);if(!_0x55a0b4)return;const _0x30cedc=this['mapCameraSettings']();if(_0x55a0b4[_0x4aef6e(0x217)]())return;this['setCurrentCameraFocusTile'](_0x4fa724,_0x3878a7),_0x30cedc[_0x4aef6e(0x236)]=![],_0x30cedc['eventFocus']=!![],_0x30cedc[_0x4aef6e(0x214)]=![],_0x30cedc[_0x4aef6e(0x27f)]=_0x44329b;const _0x4c0824=_0x30cedc[_0x4aef6e(0x1f7)];_0x4c0824[_0x4aef6e(0x28f)]=-0x1,_0x4c0824['_realY']=-0x1;},Game_Screen[_0x34c389(0x268)][_0x34c389(0x277)]=function(_0x106ce7,_0x2ce0ce,_0x3669d1,_0x2db679){const _0x21e7c7=_0x34c389,_0x6e2af9=this['mapCameraSettings'](),_0x214cc5=_0x6e2af9[_0x21e7c7(0x1f7)];if(_0x214cc5['_realX']===_0x106ce7&&_0x214cc5['_realY']===_0x2ce0ce)return;this[_0x21e7c7(0x25f)](_0x3669d1,_0x2db679),_0x6e2af9['playerFocus']=![],_0x6e2af9[_0x21e7c7(0x219)]=![],_0x6e2af9[_0x21e7c7(0x214)]=!![],_0x6e2af9[_0x21e7c7(0x1f7)]['_realX']=_0x106ce7,_0x6e2af9[_0x21e7c7(0x1f7)][_0x21e7c7(0x1f1)]=_0x2ce0ce;},Game_Screen[_0x34c389(0x268)]['updateMapCameraFocus']=function(){const _0x589fc9=_0x34c389,_0x1ca3ef=this[_0x589fc9(0x20e)]();if(_0x1ca3ef[_0x589fc9(0x270)]<=0x0)return;const _0x4e110b=_0x1ca3ef[_0x589fc9(0x270)],_0x5409f5=_0x1ca3ef[_0x589fc9(0x238)],_0x2d2b03=_0x1ca3ef['easingType']||_0x589fc9(0x228),_0x240c1b=_0x1ca3ef[_0x589fc9(0x1e4)],_0x4ea639=this[_0x589fc9(0x260)](!![]),_0x578abc=$gameMap[_0x589fc9(0x25d)],_0x16feda=$gameMap[_0x589fc9(0x20a)];_0x240c1b['_realX']=VisuMZ[_0x589fc9(0x1e0)][_0x589fc9(0x23f)](_0x240c1b[_0x589fc9(0x28f)],_0x4ea639[_0x589fc9(0x28f)],_0x4e110b,_0x5409f5,_0x2d2b03),_0x240c1b[_0x589fc9(0x1f1)]=VisuMZ['MapCameraZoom'][_0x589fc9(0x23f)](_0x240c1b[_0x589fc9(0x1f1)],_0x4ea639[_0x589fc9(0x1f1)],_0x4e110b,_0x5409f5,_0x2d2b03),this[_0x589fc9(0x229)]();if(this[_0x589fc9(0x267)]()){const _0x426118=$gameMap[_0x589fc9(0x25d)],_0x373f37=$gameMap[_0x589fc9(0x20a)];$gameMap[_0x589fc9(0x25d)]=VisuMZ[_0x589fc9(0x1e0)][_0x589fc9(0x23f)](_0x578abc,_0x426118,_0x4e110b,_0x5409f5,_0x2d2b03),$gameMap['_displayY']=VisuMZ[_0x589fc9(0x1e0)][_0x589fc9(0x23f)](_0x16feda,_0x373f37,_0x4e110b,_0x5409f5,_0x2d2b03);}_0x1ca3ef['duration']--,_0x1ca3ef[_0x589fc9(0x270)]<=0x0&&this[_0x589fc9(0x231)]();},Game_Screen[_0x34c389(0x268)][_0x34c389(0x267)]=function(){const _0x54a255=_0x34c389;return![];if(!Imported['VisuMZ_2_MovementEffects'])return![];if(!$gamePlayer['canSmoothScroll']())return![];const _0x372867=this[_0x54a255(0x20e)](),_0x4a5440=_0x372867['duration'],_0x283c0e=_0x372867[_0x54a255(0x238)];return _0x4a5440>_0x283c0e;},Game_Screen[_0x34c389(0x268)][_0x34c389(0x231)]=function(){const _0x478930=_0x34c389,_0xea2c0e=this[_0x478930(0x20e)](),_0x260260=_0xea2c0e[_0x478930(0x1e4)],_0x379f44=this[_0x478930(0x260)](!![]);_0x260260[_0x478930(0x28f)]=_0x379f44[_0x478930(0x28f)],_0x260260[_0x478930(0x1f1)]=_0x379f44['_realY'];},Game_Picture['prototype'][_0x34c389(0x1eb)]=function(){const _0x250983=_0x34c389,_0x2ea0e2=$gameMap[_0x250983(0x1e2)]()*$gameMap[_0x250983(0x253)]();return(this['_x']-_0x2ea0e2)*$gameScreen[_0x250983(0x224)]();},Game_Picture[_0x34c389(0x268)][_0x34c389(0x1d8)]=function(){const _0x22c54c=_0x34c389,_0x2618c4=$gameMap[_0x22c54c(0x237)]()*$gameMap[_0x22c54c(0x27e)]();return(this['_y']-_0x2618c4)*$gameScreen[_0x22c54c(0x224)]();},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x1fb)]=Game_Map[_0x34c389(0x268)][_0x34c389(0x279)],Game_Map[_0x34c389(0x268)][_0x34c389(0x279)]=function(_0x1015a5){const _0x84daa3=_0x34c389;VisuMZ[_0x84daa3(0x1e0)][_0x84daa3(0x1fb)][_0x84daa3(0x1d6)](this,_0x1015a5),this[_0x84daa3(0x1e5)](),this[_0x84daa3(0x273)]=0x0;},Game_Map[_0x34c389(0x268)]['setupMapCameraZoomNotetags']=function(){const _0x4fa3fd=_0x34c389,_0x508270=VisuMZ[_0x4fa3fd(0x1e0)][_0x4fa3fd(0x28a)],_0x2ce381=$dataMap?$dataMap['note']||'':'';if(_0x2ce381[_0x4fa3fd(0x24e)](_0x508270['AutoZoom'])){let _0x260d78=Number(RegExp['$1'])*0.01;_0x260d78<0x1&&$gameTemp['isPlaytest']()&&alert(_0x4fa3fd(0x276)),_0x260d78=Math['max'](0x1,_0x260d78),$gameScreen[_0x4fa3fd(0x247)]()[_0x4fa3fd(0x281)]=_0x260d78,$gameScreen[_0x4fa3fd(0x247)]()[_0x4fa3fd(0x21a)]=_0x260d78,$gameScreen[_0x4fa3fd(0x247)]()[_0x4fa3fd(0x270)]=0x0;}$gameScreen['centerMapCameraZoom']();},Game_Map[_0x34c389(0x268)]['centerMapCameraZoom']=function(_0xce5f4,_0x4d65b2){const _0x1cc9ba=_0x34c389;_0xce5f4-=$gamePlayer[_0x1cc9ba(0x294)](),_0x4d65b2-=$gamePlayer[_0x1cc9ba(0x282)](),this['setDisplayPosMapCameraZoom'](_0xce5f4,_0x4d65b2),this[_0x1cc9ba(0x28b)](_0xce5f4,_0x4d65b2),this[_0x1cc9ba(0x1ec)](_0xce5f4,_0x4d65b2);},Game_Map['prototype'][_0x34c389(0x230)]=function(_0x81cccb,_0x2551c4){const _0x656a4e=_0x34c389;if(this['isLoopHorizontal']())this[_0x656a4e(0x25d)]=_0x81cccb['mod'](this[_0x656a4e(0x223)]()),this[_0x656a4e(0x23e)]=_0x81cccb;else{const _0x4c1ec7=this[_0x656a4e(0x223)]()-this[_0x656a4e(0x1ff)]();this[_0x656a4e(0x25d)]=_0x4c1ec7<0x0?_0x4c1ec7/0x2:_0x81cccb[_0x656a4e(0x26a)](0x0,_0x4c1ec7),this['_parallaxX']=this[_0x656a4e(0x25d)];}if(this[_0x656a4e(0x23c)]())this[_0x656a4e(0x20a)]=_0x2551c4[_0x656a4e(0x1d5)](this[_0x656a4e(0x272)]()),this[_0x656a4e(0x1d0)]=_0x2551c4;else{const _0x2aa357=this['height']()-this[_0x656a4e(0x22c)]();this[_0x656a4e(0x20a)]=_0x2aa357<0x0?_0x2aa357/0x2:_0x2551c4['clamp'](0x0,_0x2aa357),this['_parallaxY']=this['_displayY'];}},Game_Map[_0x34c389(0x268)][_0x34c389(0x28b)]=function(_0x24ec76,_0x5c79e6){const _0x1ccb6e=_0x34c389,_0x1fe7e5=this[_0x1ccb6e(0x273)]||0x0;if(_0x1fe7e5<=0x0)return;this[_0x1ccb6e(0x232)]&&(this['_parallaxX']+=this[_0x1ccb6e(0x221)]/this[_0x1ccb6e(0x253)]()/0x2*_0x1fe7e5),this[_0x1ccb6e(0x234)]&&(this[_0x1ccb6e(0x1d0)]+=this[_0x1ccb6e(0x220)]/this['tileHeight']()/0x2*_0x1fe7e5);},Game_Map[_0x34c389(0x268)][_0x34c389(0x1ec)]=function(_0x13ffb1,_0x2f690a){const _0x1fdd73=_0x34c389;if(Imported['VisuMZ_4_VisualParallaxes']){this[_0x1fdd73(0x1cf)]=this[_0x1fdd73(0x1cf)]||[];for(const _0x2ee832 of this[_0x1fdd73(0x24b)]()){if(!_0x2ee832)continue;_0x2ee832[_0x1fdd73(0x1fa)]&&(_0x2ee832[_0x1fdd73(0x23e)]=this[_0x1fdd73(0x25d)],_0x2ee832[_0x1fdd73(0x1d0)]=this[_0x1fdd73(0x20a)]);}}},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x257)]=Game_Map[_0x34c389(0x268)][_0x34c389(0x245)],Game_Map[_0x34c389(0x268)][_0x34c389(0x245)]=function(){const _0x42bf9e=_0x34c389;VisuMZ[_0x42bf9e(0x1e0)][_0x42bf9e(0x257)][_0x42bf9e(0x1d6)](this),this['_mapCameraParallaxUpdates']=this[_0x42bf9e(0x273)]||0x0,this['_mapCameraParallaxUpdates']++;},VisuMZ['MapCameraZoom'][_0x34c389(0x246)]=Game_Map[_0x34c389(0x268)][_0x34c389(0x1f0)],Game_Map[_0x34c389(0x268)][_0x34c389(0x1f0)]=function(){const _0x57e106=_0x34c389;let _0x4efa28=VisuMZ[_0x57e106(0x1e0)][_0x57e106(0x246)][_0x57e106(0x1d6)](this);if(this[_0x57e106(0x1fa)])_0x4efa28=Math[_0x57e106(0x1db)](_0x4efa28);return _0x4efa28;},VisuMZ['MapCameraZoom'][_0x34c389(0x1d4)]=Game_Map[_0x34c389(0x268)]['parallaxOy'],Game_Map[_0x34c389(0x268)][_0x34c389(0x226)]=function(){const _0xf9717d=_0x34c389;let _0x1fb233=VisuMZ[_0xf9717d(0x1e0)][_0xf9717d(0x1d4)]['call'](this);if(this['_parallaxZero'])_0x1fb233=Math['floor'](_0x1fb233);return _0x1fb233;},Game_Map[_0x34c389(0x268)][_0x34c389(0x256)]=function(_0x16bb8c){const _0x4f143a=_0x34c389,_0x322db7=this[_0x4f143a(0x253)]()*$gameScreen[_0x4f143a(0x224)](),_0x5b97fa=this['_displayX']*_0x322db7,_0x16af5c=Math[_0x4f143a(0x1db)]((_0x5b97fa+_0x16bb8c)/_0x322db7);return this[_0x4f143a(0x26f)](_0x16af5c);},Game_Map['prototype'][_0x34c389(0x233)]=function(_0x53df2d){const _0x329a29=_0x34c389,_0x523c63=this[_0x329a29(0x27e)]()*$gameScreen['zoomScale'](),_0x47e700=this[_0x329a29(0x20a)]*_0x523c63,_0x4d5d0b=Math[_0x329a29(0x1db)]((_0x47e700+_0x53df2d)/_0x523c63);return this['roundY'](_0x4d5d0b);},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x200)]=Game_Map[_0x34c389(0x268)][_0x34c389(0x1ff)],Game_Map[_0x34c389(0x268)][_0x34c389(0x1ff)]=function(){const _0x74436f=_0x34c389,_0x789829=VisuMZ['MapCameraZoom'][_0x74436f(0x200)][_0x74436f(0x1d6)](this);return _0x789829/$gameScreen[_0x74436f(0x224)]();},VisuMZ['MapCameraZoom'][_0x34c389(0x204)]=Game_Map[_0x34c389(0x268)][_0x34c389(0x22c)],Game_Map[_0x34c389(0x268)][_0x34c389(0x22c)]=function(){const _0x10967d=_0x34c389,_0x8b0c70=VisuMZ[_0x10967d(0x1e0)][_0x10967d(0x204)][_0x10967d(0x1d6)](this);return _0x8b0c70/$gameScreen['zoomScale']();},Game_CharacterBase[_0x34c389(0x268)][_0x34c389(0x217)]=function(){const _0x2494fa=_0x34c389;return $gameScreen[_0x2494fa(0x260)]()===this;},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x266)]=Game_Player['prototype']['clearTransferInfo'],Game_Player[_0x34c389(0x268)][_0x34c389(0x269)]=function(){const _0x256d3f=_0x34c389;VisuMZ['MapCameraZoom'][_0x256d3f(0x266)][_0x256d3f(0x1d6)](this),$gameScreen['setMapCameraFocusToPlayer'](0x1,'Linear'),$gameScreen[_0x256d3f(0x229)]();},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x285)]=Game_Player['prototype'][_0x34c389(0x271)],Game_Player[_0x34c389(0x268)]['updateScroll']=function(_0x4f9465,_0x2cd16a){const _0x2c9651=_0x34c389;if(!this['isMapCameraFocusTarget']())return;VisuMZ['MapCameraZoom']['Game_Player_updateScroll'][_0x2c9651(0x1d6)](this,_0x4f9465,_0x2cd16a);},Game_Event[_0x34c389(0x268)]['centerX']=function(){return Game_Player['prototype']['centerX']['call'](this);},Game_Event[_0x34c389(0x268)][_0x34c389(0x282)]=function(){const _0x21aeb7=_0x34c389;return Game_Player[_0x21aeb7(0x268)][_0x21aeb7(0x282)]['call'](this);},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x1dd)]=Game_Event[_0x34c389(0x268)][_0x34c389(0x20d)],Game_Event['prototype'][_0x34c389(0x20d)]=function(){const _0x559790=_0x34c389,_0x1ee82f=this['scrolledX'](),_0x48a447=this[_0x559790(0x1f2)]();VisuMZ['MapCameraZoom'][_0x559790(0x1dd)][_0x559790(0x1d6)](this);if(!this['isMapCameraFocusTarget']())return;this['updateScroll'](_0x1ee82f,_0x48a447);},Game_Event[_0x34c389(0x268)]['updateScroll']=function(_0x30390f,_0x5ea4db){const _0x5ab8bb=_0x34c389;return Game_Player['prototype']['updateScroll'][_0x5ab8bb(0x1d6)](this,_0x30390f,_0x5ea4db);},Game_Event[_0x34c389(0x268)][_0x34c389(0x27d)]=function(){const _0x2d8b4a=_0x34c389;try{return Game_Player[_0x2d8b4a(0x268)][_0x2d8b4a(0x27d)][_0x2d8b4a(0x1d6)](this);}catch(_0x306266){return![];}},Game_Event[_0x34c389(0x268)][_0x34c389(0x25b)]=function(_0x4b2675,_0x1a5347){const _0x240eee=_0x34c389;try{Game_Player[_0x240eee(0x268)][_0x240eee(0x25b)][_0x240eee(0x1d6)](this,_0x4b2675,_0x1a5347);}catch(_0x1715c9){VisuMZ[_0x240eee(0x201)][_0x240eee(0x285)]['call'](this,_0x4b2675,_0x1a5347);}},Game_Event[_0x34c389(0x268)][_0x34c389(0x291)]=function(){return![];},VisuMZ['MapCameraZoom'][_0x34c389(0x26e)]=Game_Interpreter[_0x34c389(0x268)][_0x34c389(0x280)],Game_Interpreter['prototype'][_0x34c389(0x280)]=function(){const _0x150f4c=_0x34c389;if(this[_0x150f4c(0x1d2)]===_0x150f4c(0x1ee)){if($gameScreen[_0x150f4c(0x20e)]()[_0x150f4c(0x270)]>0x0)return!![];this['_waitMode']='';}else{if(this['_waitMode']===_0x150f4c(0x222)){if($gameScreen['mapZoomSettings']()[_0x150f4c(0x270)]>0x0)return!![];this[_0x150f4c(0x1d2)]='';}}return VisuMZ[_0x150f4c(0x1e0)][_0x150f4c(0x26e)]['call'](this);},Scene_Map[_0x34c389(0x1df)]=VisuMZ[_0x34c389(0x1e0)]['Settings'][_0x34c389(0x1d9)],VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x1e6)]=Scene_Map[_0x34c389(0x268)][_0x34c389(0x202)],Scene_Map[_0x34c389(0x268)]['start']=function(){const _0x32915f=_0x34c389;VisuMZ[_0x32915f(0x1e0)][_0x32915f(0x1e6)][_0x32915f(0x1d6)](this),Scene_Map[_0x32915f(0x1df)]&&($gameScreen[_0x32915f(0x292)]()[_0x32915f(0x281)]=0x1,$gameScreen[_0x32915f(0x229)]());},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x21c)]=Scene_Map[_0x34c389(0x268)]['updateEncounterEffect'],Scene_Map[_0x34c389(0x268)][_0x34c389(0x1ea)]=function(){const _0x172d88=_0x34c389;$gameTemp[_0x172d88(0x265)]=Scene_Map[_0x172d88(0x1df)],VisuMZ[_0x172d88(0x1e0)]['Scene_Map_updateEncounterEffect'][_0x172d88(0x1d6)](this),$gameTemp[_0x172d88(0x265)]=undefined;},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x290)]=Game_Screen[_0x34c389(0x268)][_0x34c389(0x239)],Game_Screen[_0x34c389(0x268)][_0x34c389(0x239)]=function(_0x25e049,_0x3d1f1e,_0x3c95ca){const _0x3e954c=_0x34c389;$gameTemp[_0x3e954c(0x265)]?this['setBattleEncounterZoom'](_0x3c95ca):VisuMZ['MapCameraZoom'][_0x3e954c(0x290)][_0x3e954c(0x1d6)](this,_0x25e049,_0x3d1f1e,_0x3c95ca);},Game_Screen[_0x34c389(0x268)][_0x34c389(0x26d)]=function(_0x2b8c83){const _0xc7e191=_0x34c389;this[_0xc7e191(0x292)]()[_0xc7e191(0x281)]=_0x2b8c83,this[_0xc7e191(0x229)]();},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x243)]=Game_System[_0x34c389(0x268)][_0x34c389(0x249)],Game_System[_0x34c389(0x268)]['isSmoothCameraEnabled']=function(){const _0x4e2bf8=_0x34c389;if(!Scene_Map[_0x4e2bf8(0x1df)]&&SceneManager[_0x4e2bf8(0x1fd)](Scene_Battle))return![];return VisuMZ[_0x4e2bf8(0x1e0)]['Game_System_isSmoothCameraEnabled'][_0x4e2bf8(0x1d6)](this);},VisuMZ[_0x34c389(0x1e0)][_0x34c389(0x25a)]=Sprite_AnimationMV['prototype'][_0x34c389(0x209)],Sprite_AnimationMV['prototype'][_0x34c389(0x209)]=function(){const _0x1d1e0b=_0x34c389;SceneManager[_0x1d1e0b(0x1f8)]()&&this['_animation'][_0x1d1e0b(0x244)]===0x3?this[_0x1d1e0b(0x1f6)]():VisuMZ['MapCameraZoom'][_0x1d1e0b(0x25a)][_0x1d1e0b(0x1d6)](this);},Sprite_AnimationMV[_0x34c389(0x268)][_0x34c389(0x1f6)]=function(){const _0x56acb3=_0x34c389,_0x440baf=SceneManager['_scene'][_0x56acb3(0x208)],_0x53186f=$gameScreen[_0x56acb3(0x224)](),_0x290eaa=0.5/_0x53186f,_0x30a8f4=-_0x440baf['x']/_0x53186f,_0x97e9a8=-_0x440baf['y']/_0x53186f;this['x']=this[_0x56acb3(0x248)][_0x56acb3(0x223)]*_0x290eaa+_0x30a8f4,this['y']=this[_0x56acb3(0x248)][_0x56acb3(0x272)]*_0x290eaa+_0x97e9a8;};function _0x2e5d(){const _0x26e80b=['AdaptBattleEncZoom','includes','floor','28liSmyn','Game_Event_update','toUpperCase','MAP_ZOOM_ENTER_BATTLE_ADAPT','MapCameraZoom','ImageManager_loadCharacter','displayX','_doodadEditorMode','currentCamera','setupMapCameraZoomNotetags','Scene_Map_start','startMapZoom','setMapCameraFocusToEvent','_lastPluginCommandInterpreter','updateEncounterEffect','xScrollLinkedOffset','updateMapScrollLinkedCenteredParallax','parse','mapCameraFocus','MapX','parallaxOx','_realY','scrolledY','ConvertParams','ApplyEasing','ImageManager_loadSystem','updateMapZoomPosition','tileCoordinates','isSceneMap','Game_Interpreter_PluginCommand','_parallaxZero','Game_Map_setup','DefaultZoom','isNextScene','IconSet','screenTileX','Game_Map_screenTileX','MovementEffects','start','loadSystem','Game_Map_screenTileY','constructor','CameraFocusWait','onUpdateMapZoomEnd','_spriteset','updatePosition','_displayY','command357','ARRAYNUM','update','mapCameraSettings','status','VisuMZ_2_FurnitureSystem','TargetScale','453996fuVqjV','easingType','tileFocus','getLastPluginCommandInterpreter','setLastPluginCommandInterpreter','isMapCameraFocusTarget','loadTileset','eventFocus','targetScale','updateMapZoom','Scene_Map_updateEncounterEffect','ARRAYSTR','2335626KfNQzy','Game_Screen_zoomScale','_parallaxSy','_parallaxSx','mapZoom','width','zoomScale','max','parallaxOy','smooth','Linear','centerMapCameraZoom','Duration','exit','screenTileY','ARRAYEVAL','isFurnitureSystemMode','16IIdJvI','setDisplayPosMapCameraZoom','onUpdateMapCameraFocusEnd','_parallaxLoopX','canvasToMapY','_parallaxLoopY','setMapCameraFocusToPlayer','playerFocus','displayY','wholeDuration','setZoom','Game_Screen_initialize','ZoomChange','isLoopVertical','1022768dHDUJF','_parallaxX','applyEasing','_mapEnterBattleZoom','isPlaytest','_mapCameraSettings','Game_System_isSmoothCameraEnabled','position','updateParallax','Game_Map_parallaxOx','mapZoomSettings','parent','isSmoothCameraEnabled','setupMapCameraZoom','getVisualParallaxes','Settings','_scene','match','allowExtendMapZoom','eventId','_mapZoomSettings','setupMapCameraSettings','tileWidth','name','format','canvasToMapX','Game_Map_updateParallax','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','492285nRpOZG','Sprite_AnimationMV_updatePosition','updateScrollSmoothCamera','ImageManager_loadTileset','_displayX','CameraFocusTargetEvent','setCurrentCameraFocusTile','mapCameraFocusTarget','JSON','setWaitMode','registerCommand','STRUCT','_mapZoomEnterBattle','Game_Player_clearTransferInfo','updateMapCameraFocusSmooth','prototype','clearTransferInfo','clamp','Game_Screen_updateZoom','179053CfmhuF','setBattleEncounterZoom','Game_Interpreter_updateWaitMode','roundX','duration','updateScroll','height','_mapCameraParallaxUpdates','return\x200','EasingType','Zoom\x20cannot\x20go\x20under\x20100%.','setMapCameraFocusToTile','initialize','setup','isChangingMapCameraFocusTargets','2697966aFnelg','178734QBrwRP','canSmoothScroll','tileHeight','eventTargetID','updateWaitMode','scale','centerY','parameters','setupMapZoomSettings','Game_Player_updateScroll','FUNC','updateMapCameraFocus','ARRAYJSON','event','RegExp','updateMapCameraCenteredParallax','loadCharacter','NUM','DEFAULT_MAP_ZOOM_SCALE','_realX','Game_Screen_setZoom','isInAirship','mapZoomEnterBattleSettings','map','centerX','_visualParallaxSettings','_parallaxY','MapY','_waitMode','description','Game_Map_parallaxOy','mod','call','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','yScrollLinkedOffset'];_0x2e5d=function(){return _0x26e80b;};return _0x2e5d();}