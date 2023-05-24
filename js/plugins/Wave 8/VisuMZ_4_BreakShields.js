//=============================================================================
// VisuStella MZ - Break Shields
// VisuMZ_4_BreakShields.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_BreakShields = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BreakShields = VisuMZ.BreakShields || {};
VisuMZ.BreakShields.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.03] [BreakShields]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Break_Shields_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin introduces a new mechanic called Break Shields. Actors and/or
 * enemies can have them. Whenever a battler is struck with an elemental
 * weakness, their Break Shield is reduced by 1 (unless modified by a notetag).
 * Once the battler's Break Shield reaches a score of 0, a state is then
 * applied to the battler (usually a stun state). Once the Break state wears
 * off, the battler will regain their Break Shields again. This can be used to
 * create complex battle depth for your game.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Control how Break Shields are calculated alongside how many hits are
 *   required for each actor and/or enemy to enter the Break Stun state.
 * * Display the Break Shields on the screen and relay the information to your
 *   players through icons.
 * * Play animations when hitting a weakness and reducing Break Shields.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_0_CoreEngine
 *
 * Two of the animation Plugin Parameters require the Core Engine to play them.
 * This is due to how the Core Engine allows playing animations without halting
 * the battle system to allow for a seamless flow despite relaying the Break
 * Shield reduction visual feedback.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins. Here is a list
 * of the ones this plugin is not compatible with.
 *
 * ---
 *
 * VisuMZ_2_BattleSystemSTB
 * 
 * The Break Shields plugin can be used together with Battle System - STB.
 * However, it cannot be used together with the STB Exploit system. This is
 * because both Break Shields and the Exploit system function under similar
 * mechanics and will conflict. However, if STB's Exploit system is turned off,
 * then you can use all of the Break Shield plugin's features fully.
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
 * === Break Shield Calculation-Related Notetags ===
 * 
 * ---
 *
 * <Break Shields: x>
 *
 * - Used for: Actor, Class, Enemy Notetags
 * - Declares the base amount of Break Shields this battler will have.
 * - This will ignore the default setting from the Plugin Parameters.
 * - Replace 'x' with a number representing the base amount of Break Shields to
 *   give this battler.
 * - If both the Actor and Class database object has this notetag, priority
 *   will be given to the Class before the Actor.
 *
 * ---
 *
 * <Break Shields: +x>
 * <Break Shields: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Allows trait objects to alter the amount of Break Shields battlers have
 *   whenever their Break Shields are reset.
 * - Replace 'x' with a number representing the Break Shields to increase or
 *   decrease the amount by.
 * - Total Break Shields cannot go under 1 and cannot go whatever the maximum
 *   is declared inside the Plugin Parameters.
 *
 * ---
 * 
 * === Break Shield Alteration-Related Notetags ===
 * 
 * ---
 *
 * <Break Reduce: x>
 *
 * - Used for: Skill, Item Notetags
 * - Reduces the target's Break Shield by x if this action hits a weakness.
 * - This will ignore the default setting from the Plugin Parameters.
 * - Replace 'x' with a number to determine how many Break Shields to reduce.
 * - If Break Shields reach 0, the target will enter a Stun state.
 *
 * ---
 *
 * <Change Break Shield: x>
 *
 * - Used for: Skill, Item Notetags
 * - This will change the target battler's Break Shield value to x if the
 *   battler isn't currently stunned.
 * - No effect if you don't use this notetag.
 * - Replace 'x' with a number value to change the target battler's Break
 *   Shield value to.
 *
 * ---
 *
 * <Increase Break Shield: +x>
 * <Decrease Break Shield: -x>
 *
 * - Used for: Skill, Item Notetags
 * - This will either increase the target battler's break shield by x or
 *   decrease the target battler's break shield by x.
 * - Happens after the Change Break Shield notetag.
 * - No effect if you don't use this notetag.
 * - Replace 'x' with a number value representing the amount to alter the
 *   target's Break Shields by.
 *
 * ---
 * 
 * === Element-Related Notetags ===
 * 
 * ---
 *
 * <Protect Element: id>
 * <Protect Elements: id, id, id>
 * 
 * <Protect Element: name>
 * <Protect Elements: name, name, name>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Specified element(s) will be guarded and Break Shields cannot be reduced
 *   when struck with that element (as long as the requirement is above 100%).
 * - The element rate for those will cap at 100%, preventing extra damage from
 *   being dealt despite having weaknesses, although custom JS effects will
 *   bypass this.
 * - Replace 'id' with a number value representing the ID(s) of the element(s).
 * - Replace 'name' with the name(s) of the element(s).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Customize the mechanical settings for Break Shields.
 *
 * ---
 *
 * Break Shields
 * 
 *   Affect: Actors?:
 *   - Do Break Shields affect actors?
 * 
 *   Affect: Enemies?:
 *   - Do Break Shields affect actors?
 * 
 *   Base Shield Value:
 *   - The starting amount of shields a battler has.
 *   - Can be altered through notetags.
 * 
 *   Maximum Shields:
 *   - The maximum amount of shields a battler can have.
 *   - This is a hard cap.
 * 
 *   Stun State ID:
 *   - This is the state to be applied when all Break Shields are reduced to 0.
 *
 * ---
 *
 * Animation
 * 
 *   Reduce Animation ID:
 *   - Play this animation when Break Shields are reduced.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Stun Animation ID:
 *   - Play this animation when Break Stun is achieved.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 * ---
 *
 * Weaknesses
 * 
 *   Minimum Rate:
 *   - What is the minimum element rate for an attack to be considered striking
 *     a weakness?
 * 
 *   Default Reduction:
 *   - Default reduction amount for Break Shields when striking an elemental
 *     weakness.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * Customize the UI settings for Break Shields.
 *
 * ---
 *
 * Icons
 * 
 *   Break Shield Icon:
 *   - Icon used to represent Break Shields.
 * 
 *   Stun State Icon:
 *   - Icon used to represent Break Stun if the Break Stun state does NOT have
 *     an icon assigned to it.
 * 
 *     Show Turns?:
 *     - Show how many turns are remaining with the Break Stun?
 * 
 *   Protect Icon:
 *   - Icon used to represent Protected Elements.
 *   - Used for other plugins.
 * 
 *   Font Size:
 *   - What is the font size used to display the turns and Break Shields
 *     remaining?
 *
 * ---
 *
 * Battlers > Actors/Enemies
 * 
 *   Show Battler Icon?:
 *   - Show Break Shield icons on the SV_Actor/enemy battlers?
 * 
 *   Position:
 *   - Where on the battler would you like to place the icon?
 * 
 *   Offset X:
 *   - How much to offset the icon X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the icon Y position by?
 *   - Negative goes up. Positive goes down.
 * 
 *   Name: Attach Shields (Enemies Only)
 *   - Attach the Break Shield icon to the enemy name?
 *   - Overrides direct attachment.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *     Attach: Offset X:
 *     - How much to offset the attached icon's X position by?
 *     - Negative goes left. Positive goes right.
 * 
 *     Attach: Offset Y:
 *     - How much to offset the attached icon's Y position by?
 *     - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Battle Status
 * 
 *   Show Break Shields?:
 *   - Show Break Shield icons in the Battle Status?
 * 
 *   Auto-Position?:
 *   - Automatically position the Break Shield icon?
 *   - If not, it'll position it to the upper left.
 * 
 *   Offset X:
 *   - How much to offset the icon X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the icon Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Menu Status
 * 
 *   Show Break Shields?:
 *   - Show Break Shield icons in the menu scenes?
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.03: March 16, 2023
 * * Bug Fixes!
 * ** Notetags from Elements and Status Menu Core for increasing Dealt Element
 *    damage will no longer force a Break Shield reduction when an attack has
 *    an attached element that the enemy is not weak to. Fix made by Arisu.
 * 
 * Version 1.02: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 *
 * Version 1.01: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.00 Official Release Date: April 30, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param BreakShields
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Customize the mechanical settings for Break Shields.
 * @default {"BreakShields":"","AffectActors:eval":"true","AffectEnemies:eval":"true","Base:num":"1","Max:num":"99","StunState:num":"13","Animation":"","ReduceAniID:num":"2","StunAniID:num":"15","Weaknesses":"","MinRate:num":"1.05","Reduction:num":"1"}
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Customize the UI settings for Break Shields.
 * @default {"Icons":"","ShieldIcon:num":"81","StunIcon:num":"6","ShowStunTurns:eval":"false","ProtectIcon:num":"128","FontSize:num":"22","Battlers":"","Actors":"","ActorDisplayIcon:eval":"false","ActorDisplayPosition:str":"bottom center","ActorOffsetX:num":"+0","ActorOffsetY:num":"+8","Enemies":"","EnemyDisplayIcon:eval":"true","EnemyDisplayPosition:str":"bottom center","EnemyOffsetX:num":"+0","EnemyOffsetY:num":"+8","NameAttachShieldIcon:eval":"true","AttachShieldOffsetX:num":"+0","AttachShieldOffsetY:num":"+0","BattleStatus":"","BattleStatusDisplayIcons:eval":"true","BattleStatusAutoPosition:eval":"true","BattleStatusOffsetX:num":"+0","BattleStatusOffsetY:num":"+0","MenuStatus":"","MenuStatusBreakShieldIcons:eval":"true"}
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
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param BreakShields
 * @text Break Shields
 *
 * @param AffectActors:eval
 * @text Affect: Actors?
 * @parent BreakShields
 * @type boolean
 * @on Yes
 * @off No
 * @desc Do Break Shields affect actors?
 * @default true
 *
 * @param AffectEnemies:eval
 * @text Affect: Enemies?
 * @parent BreakShields
 * @type boolean
 * @on Yes
 * @off No
 * @desc Do Break Shields affect actors?
 * @default true
 *
 * @param Base:num
 * @text Base Shield Value
 * @parent BreakShields
 * @type number
 * @min 1
 * @desc The starting amount of shields a battler has.
 * Can be altered through notetags.
 * @default 1
 *
 * @param Max:num
 * @text Maximum Shields
 * @parent BreakShields
 * @type number
 * @min 1
 * @desc The maximum amount of shields a battler can have.
 * This is a hard cap.
 * @default 99
 *
 * @param StunState:num
 * @text Stun State ID
 * @parent BreakShields
 * @type state
 * @desc This is the state to be applied when all Break Shields
 * are reduced to 0.
 * @default 13
 *
 * @param Animation
 *
 * @param ReduceAniID:num
 * @text Reduce Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when Break Shields are reduced.
 * Requires VisuMZ_0_CoreEngine.
 * @default 2
 *
 * @param StunAniID:num
 * @text Stun Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when Break Stun is achieved.
 * Requires VisuMZ_0_CoreEngine.
 * @default 15
 *
 * @param Weaknesses
 *
 * @param MinRate:num
 * @text Minimum Rate
 * @parent Weaknesses
 * @desc What is the minimum element rate for an attack to be
 * considered striking a weakness?
 * @default 1.05
 *
 * @param Reduction:num
 * @text Default Reduction
 * @parent Weaknesses
 * @type number
 * @min 1
 * @desc Default reduction amount for Break Shields when striking
 * an elemental weakness.
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param Icons
 *
 * @param ShieldIcon:num
 * @text Break Shield Icon
 * @parent Icons
 * @desc Icon used to represent Break Shields.
 * @default 81
 *
 * @param StunIcon:num
 * @text Stun State Icon
 * @parent Icons
 * @desc Icon used to represent Break Stun if the Break Stun state
 * does NOT have an icon assigned to it.
 * @default 6
 *
 * @param ShowStunTurns:eval
 * @text Show Turns?
 * @parent StunIcon:num
 * @type boolean
 * @on Show Turns
 * @off Hide Turns
 * @desc Show how many turns are remaining with the Break Stun?
 * @default false
 *
 * @param ProtectIcon:num
 * @text Protect Icon
 * @parent Icons
 * @desc Icon used to represent Protected Elements.
 * Used for other plugins.
 * @default 128
 *
 * @param FontSize:num
 * @text Font Size
 * @parent Icons
 * @number
 * @min 1
 * @desc What is the font size used to display the turns and
 * Break Shields remaining?
 * @default 22
 *
 * @param Battlers
 * 
 * @param Actors
 * @parent Battlers
 *
 * @param ActorDisplayIcon:eval
 * @text Show Battler Icon?
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Break Shield icons on the SV_Actor battlers?
 * @default false
 *
 * @param ActorDisplayPosition:str
 * @text Position
 * @parent Actors
 * @type combo
 * @option top left
 * @option top center
 * @option top right
 * @option middle left
 * @option middle center
 * @option middle right
 * @option bottom left
 * @option bottom center
 * @option bottom right
 * @desc Where on the battler would you like to place the icon?
 * @default bottom center
 *
 * @param ActorOffsetX:num
 * @text Offset X
 * @parent Actors
 * @desc How much to offset the icon X position by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param ActorOffsetY:num
 * @text Offset Y
 * @parent Actors
 * @desc How much to offset the icon Y position by?
 * Negative goes up. Positive goes down.
 * @default +8
 * 
 * @param Enemies
 * @parent Battlers
 *
 * @param EnemyDisplayIcon:eval
 * @text Show Battler Icon?
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Break Shield icons on the enemy battlers?
 * @default true
 *
 * @param EnemyDisplayPosition:str
 * @text Position
 * @parent Enemies
 * @type combo
 * @option top left
 * @option top center
 * @option top right
 * @option middle left
 * @option middle center
 * @option middle right
 * @option bottom left
 * @option bottom center
 * @option bottom right
 * @desc Where on the battler would you like to place the icon?
 * @default bottom center
 *
 * @param EnemyOffsetX:num
 * @text Offset X
 * @parent Enemies
 * @desc How much to offset the icon X position by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param EnemyOffsetY:num
 * @text Offset Y
 * @parent Enemies
 * @desc How much to offset the icon Y position by?
 * Negative goes up. Positive goes down.
 * @default +8
 *
 * @param NameAttachShieldIcon:eval
 * @text Name: Attach Shields
 * @parent Enemies
 * @type boolean
 * @on Attach
 * @off Normal Position
 * @desc Attach the Break Shield icon to the enemy name?
 * Overrides direct attachment. Requires VisuMZ_1_BattleCore!
 * @default true
 *
 * @param AttachShieldOffsetX:num
 * @text Attach: Offset X
 * @parent NameAttachShieldIcon:eval
 * @desc How much to offset the attached icon's X position by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param AttachShieldOffsetY:num
 * @text Attach: Offset Y
 * @parent NameAttachShieldIcon:eval
 * @desc How much to offset the attached icon's Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param BattleStatus
 * @text Battle Status
 *
 * @param BattleStatusDisplayIcons:eval
 * @text Show Break Shields?
 * @parent BattleStatus
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Break Shield icons in the Battle Status?
 * @default true
 *
 * @param BattleStatusAutoPosition:eval
 * @text Auto-Position?
 * @parent BattleStatus
 * @type boolean
 * @on Auto-Position
 * @off Manual Position
 * @desc Automatically position the Break Shield icon?
 * If not, it'll position it to the upper left.
 * @default true
 *
 * @param BattleStatusOffsetX:num
 * @text Offset X
 * @parent BattleStatus
 * @desc How much to offset the icon X position by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param BattleStatusOffsetY:num
 * @text Offset Y
 * @parent BattleStatus
 * @desc How much to offset the icon Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param MenuStatus
 * @text Menu Status
 *
 * @param MenuStatusBreakShieldIcons:eval
 * @text Show Break Shields?
 * @parent MenuStatus
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Break Shield icons in the menu scenes?
 * @default true
 *
 */
//=============================================================================

const _0x2c040f=_0x68da;function _0x68da(_0x19c646,_0x49b005){const _0x1eeb22=_0x1eeb();return _0x68da=function(_0x68da26,_0x546e08){_0x68da26=_0x68da26-0x182;let _0xf0ab0b=_0x1eeb22[_0x68da26];return _0xf0ab0b;},_0x68da(_0x19c646,_0x49b005);}(function(_0xb9c6fc,_0x4e4b4b){const _0x2f29ca=_0x68da,_0xaaf8dc=_0xb9c6fc();while(!![]){try{const _0x27861d=-parseInt(_0x2f29ca(0x248))/0x1*(-parseInt(_0x2f29ca(0x1aa))/0x2)+parseInt(_0x2f29ca(0x243))/0x3*(-parseInt(_0x2f29ca(0x227))/0x4)+parseInt(_0x2f29ca(0x258))/0x5*(-parseInt(_0x2f29ca(0x1af))/0x6)+parseInt(_0x2f29ca(0x24e))/0x7*(-parseInt(_0x2f29ca(0x1ec))/0x8)+-parseInt(_0x2f29ca(0x25a))/0x9+-parseInt(_0x2f29ca(0x1b0))/0xa*(-parseInt(_0x2f29ca(0x194))/0xb)+-parseInt(_0x2f29ca(0x20c))/0xc*(-parseInt(_0x2f29ca(0x1ef))/0xd);if(_0x27861d===_0x4e4b4b)break;else _0xaaf8dc['push'](_0xaaf8dc['shift']());}catch(_0x5e6583){_0xaaf8dc['push'](_0xaaf8dc['shift']());}}}(_0x1eeb,0x8c330));var label=_0x2c040f(0x1cb),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2c040f(0x210)](function(_0x23177b){const _0x1e04e9=_0x2c040f;return _0x23177b[_0x1e04e9(0x233)]&&_0x23177b['description'][_0x1e04e9(0x199)]('['+label+']');})[0x0];VisuMZ[label][_0x2c040f(0x266)]=VisuMZ[label][_0x2c040f(0x266)]||{},VisuMZ[_0x2c040f(0x19a)]=function(_0x24090b,_0x2c082f){const _0x243b3d=_0x2c040f;for(const _0x5f23b3 in _0x2c082f){if(_0x5f23b3['match'](/(.*):(.*)/i)){const _0x222118=String(RegExp['$1']),_0x32871b=String(RegExp['$2'])[_0x243b3d(0x1e9)]()[_0x243b3d(0x1c6)]();let _0x1698ff,_0x2d54a0,_0x3924bf;switch(_0x32871b){case'NUM':_0x1698ff=_0x2c082f[_0x5f23b3]!==''?Number(_0x2c082f[_0x5f23b3]):0x0;break;case _0x243b3d(0x23d):_0x2d54a0=_0x2c082f[_0x5f23b3]!==''?JSON[_0x243b3d(0x26f)](_0x2c082f[_0x5f23b3]):[],_0x1698ff=_0x2d54a0[_0x243b3d(0x1dd)](_0x61b0d=>Number(_0x61b0d));break;case _0x243b3d(0x1cc):_0x1698ff=_0x2c082f[_0x5f23b3]!==''?eval(_0x2c082f[_0x5f23b3]):null;break;case _0x243b3d(0x22c):_0x2d54a0=_0x2c082f[_0x5f23b3]!==''?JSON[_0x243b3d(0x26f)](_0x2c082f[_0x5f23b3]):[],_0x1698ff=_0x2d54a0['map'](_0x3ddd97=>eval(_0x3ddd97));break;case _0x243b3d(0x195):_0x1698ff=_0x2c082f[_0x5f23b3]!==''?JSON[_0x243b3d(0x26f)](_0x2c082f[_0x5f23b3]):'';break;case _0x243b3d(0x235):_0x2d54a0=_0x2c082f[_0x5f23b3]!==''?JSON['parse'](_0x2c082f[_0x5f23b3]):[],_0x1698ff=_0x2d54a0['map'](_0x2a98e1=>JSON[_0x243b3d(0x26f)](_0x2a98e1));break;case'FUNC':_0x1698ff=_0x2c082f[_0x5f23b3]!==''?new Function(JSON[_0x243b3d(0x26f)](_0x2c082f[_0x5f23b3])):new Function(_0x243b3d(0x264));break;case _0x243b3d(0x1c1):_0x2d54a0=_0x2c082f[_0x5f23b3]!==''?JSON[_0x243b3d(0x26f)](_0x2c082f[_0x5f23b3]):[],_0x1698ff=_0x2d54a0[_0x243b3d(0x1dd)](_0x198640=>new Function(JSON[_0x243b3d(0x26f)](_0x198640)));break;case _0x243b3d(0x21e):_0x1698ff=_0x2c082f[_0x5f23b3]!==''?String(_0x2c082f[_0x5f23b3]):'';break;case _0x243b3d(0x1dc):_0x2d54a0=_0x2c082f[_0x5f23b3]!==''?JSON[_0x243b3d(0x26f)](_0x2c082f[_0x5f23b3]):[],_0x1698ff=_0x2d54a0[_0x243b3d(0x1dd)](_0x5cdac7=>String(_0x5cdac7));break;case _0x243b3d(0x223):_0x3924bf=_0x2c082f[_0x5f23b3]!==''?JSON[_0x243b3d(0x26f)](_0x2c082f[_0x5f23b3]):{},_0x1698ff=VisuMZ[_0x243b3d(0x19a)]({},_0x3924bf);break;case'ARRAYSTRUCT':_0x2d54a0=_0x2c082f[_0x5f23b3]!==''?JSON['parse'](_0x2c082f[_0x5f23b3]):[],_0x1698ff=_0x2d54a0[_0x243b3d(0x1dd)](_0x2b3165=>VisuMZ['ConvertParams']({},JSON[_0x243b3d(0x26f)](_0x2b3165)));break;default:continue;}_0x24090b[_0x222118]=_0x1698ff;}}return _0x24090b;},(_0x32826a=>{const _0x483693=_0x2c040f,_0x4b5059=_0x32826a['name'];for(const _0x2da973 of dependencies){if(!Imported[_0x2da973]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x4b5059,_0x2da973)),SceneManager['exit']();break;}}const _0x3d1947=_0x32826a['description'];if(_0x3d1947[_0x483693(0x205)](/\[Version[ ](.*?)\]/i)){const _0x13193d=Number(RegExp['$1']);_0x13193d!==VisuMZ[label]['version']&&(alert(_0x483693(0x26e)[_0x483693(0x254)](_0x4b5059,_0x13193d)),SceneManager[_0x483693(0x226)]());}if(_0x3d1947['match'](/\[Tier[ ](\d+)\]/i)){const _0x5456b4=Number(RegExp['$1']);_0x5456b4<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x4b5059,_0x5456b4,tier)),SceneManager[_0x483693(0x226)]()):tier=Math['max'](_0x5456b4,tier);}VisuMZ[_0x483693(0x19a)](VisuMZ[label][_0x483693(0x266)],_0x32826a[_0x483693(0x250)]);})(pluginData),VisuMZ['BreakShields'][_0x2c040f(0x244)]={'BreakReduce':/<BREAK (?:REDUCE|REDUCTION):[ ](\d+)>/i,'SetBreakShield':/<(?:SET|CHANGE) BREAK (?:SHIELD|SHIELDS): (\d+)>/i,'AlterBreakShield':/<(?:INCREASE|DECREASE|ALTER) BREAK (?:SHIELD|SHIELDS): ([\+\-]\d+)>/i,'ProtectedElements':/<PROTECT (?:ELEMENT|ELEMENTS):[ ](.*)>/i,'AddedBreakShields':/<BREAK (?:SHIELD|SHIELDS): ([\+\-]\d+)>/i,'BaseBreakShields':/<BREAK (?:SHIELD|SHIELDS): (\d+)>/i},DataManager[_0x2c040f(0x222)]=function(_0x2aedb9){const _0x2c0e74=_0x2c040f;_0x2aedb9=_0x2aedb9[_0x2c0e74(0x1e9)]()[_0x2c0e74(0x1c6)](),this[_0x2c0e74(0x207)]=this['_elementIDs']||{};if(this['_elementIDs'][_0x2aedb9])return this[_0x2c0e74(0x207)][_0x2aedb9];let _0x39870b=0x1;for(const _0x22bf8c of $dataSystem[_0x2c0e74(0x259)]){if(!_0x22bf8c)continue;let _0x1def32=_0x22bf8c[_0x2c0e74(0x1e9)]();_0x1def32=_0x1def32[_0x2c0e74(0x1a6)](/\x1I\[(\d+)\]/gi,''),_0x1def32=_0x1def32[_0x2c0e74(0x1a6)](/\\I\[(\d+)\]/gi,''),this[_0x2c0e74(0x207)][_0x1def32]=_0x39870b,_0x39870b++;}return this[_0x2c0e74(0x207)][_0x2aedb9]||0x0;},ImageManager[_0x2c040f(0x26c)]=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)]['UI'][_0x2c040f(0x225)],ImageManager[_0x2c040f(0x1df)]=VisuMZ[_0x2c040f(0x1cb)]['Settings']['UI'][_0x2c040f(0x1e1)],ImageManager[_0x2c040f(0x18a)]=VisuMZ[_0x2c040f(0x1cb)]['Settings']['UI'][_0x2c040f(0x218)],ImageManager[_0x2c040f(0x198)]=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)]['UI']['ProtectIcon'],SceneManager[_0x2c040f(0x269)]=function(){const _0x864fd9=_0x2c040f;return this[_0x864fd9(0x22a)]&&this['_scene'][_0x864fd9(0x18b)]===Scene_Battle;},VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x25c)]=BattleManager[_0x2c040f(0x247)],BattleManager[_0x2c040f(0x247)]=function(_0x348f52,_0x3a38aa,_0x1a4839){const _0x437ed7=_0x2c040f;VisuMZ['BreakShields']['BattleManager_setup'][_0x437ed7(0x18e)](this,_0x348f52,_0x3a38aa,_0x1a4839),$gameParty[_0x437ed7(0x1b1)](),$gameTroop[_0x437ed7(0x1b1)]();},Game_Action[_0x2c040f(0x1c3)]=VisuMZ['BreakShields'][_0x2c040f(0x266)][_0x2c040f(0x1ae)][_0x2c040f(0x224)],Game_Action['BREAK_SHIELDS_DEFAULT_REDUCTION']=VisuMZ['BreakShields'][_0x2c040f(0x266)]['Mechanics']['Reduction'],VisuMZ['BreakShields'][_0x2c040f(0x1db)]=Game_Action['prototype']['executeDamage'],Game_Action[_0x2c040f(0x1a8)]['executeDamage']=function(_0x42febf,_0x5db3ef){const _0x50e469=_0x2c040f;VisuMZ['BreakShields']['Game_Action_executeDamage'][_0x50e469(0x18e)](this,_0x42febf,_0x5db3ef),!!_0x42febf&&_0x5db3ef>0x0&&_0x42febf[_0x50e469(0x1ac)]()&&this[_0x50e469(0x1b4)]()&&this['executeBreakShieldReduction'](_0x42febf,_0x5db3ef);},Game_Action[_0x2c040f(0x1a8)][_0x2c040f(0x22f)]=function(_0xabeb62,_0x7f728d){const _0x4a450f=_0x2c040f;if(!_0xabeb62['isBreakStunned']()){var _0x37d9e5=this['calcRawBreakShieldElementRate'](_0xabeb62);if(_0x37d9e5>=Game_Action['BREAK_SHIELDS_MINIMUM_WEAKNESS_RATE']){var _0x7f728d=-0x1*this[_0x4a450f(0x1d8)]();_0xabeb62['startBreakShieldReduceAnimation'](),_0xabeb62[_0x4a450f(0x204)](_0x7f728d);}}},Game_Action[_0x2c040f(0x1a8)][_0x2c040f(0x1e2)]=function(_0x17c8a1){const _0x2f276e=_0x2c040f;this[_0x2f276e(0x190)]=!![];const _0x1e8405=this['calcElementRate'](_0x17c8a1);return this[_0x2f276e(0x190)]=undefined,_0x1e8405;},VisuMZ['BreakShields']['Game_Action_calcUserElementDamagePlus']=Game_Action['prototype'][_0x2c040f(0x22d)],Game_Action['prototype']['calcUserElementDamagePlus']=function(_0x17295d,_0x23af95){const _0x44bf32=_0x2c040f;if(this['_calcRawBreakShieldEleRate'])return 0x0;return VisuMZ[_0x44bf32(0x1cb)][_0x44bf32(0x1f1)][_0x44bf32(0x18e)](this,_0x17295d,_0x23af95);},VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x1ee)]=Game_Action['prototype'][_0x2c040f(0x25b)],Game_Action['prototype'][_0x2c040f(0x25b)]=function(_0x5459de,_0x43d239){const _0x14cfe8=_0x2c040f;if(this[_0x14cfe8(0x190)])return 0x1;return VisuMZ['BreakShields'][_0x14cfe8(0x1ee)][_0x14cfe8(0x18e)](this,_0x5459de,_0x43d239);},VisuMZ['BreakShields']['Game_Action_calcUserElementDamageFlat']=Game_Action[_0x2c040f(0x1a8)][_0x2c040f(0x1cf)],Game_Action[_0x2c040f(0x1a8)]['calcUserElementDamageFlat']=function(_0x10711d,_0x2b38e4){const _0x25d0b6=_0x2c040f;if(this[_0x25d0b6(0x190)])return 0x0;return VisuMZ[_0x25d0b6(0x1cb)]['Game_Action_calcUserElementDamageFlat'][_0x25d0b6(0x18e)](this,_0x10711d,_0x2b38e4);},Game_Action['prototype'][_0x2c040f(0x1d8)]=function(){const _0x101d4a=_0x2c040f,_0x162f10=VisuMZ[_0x101d4a(0x1cb)][_0x101d4a(0x244)];return this[_0x101d4a(0x1e4)]()[_0x101d4a(0x1eb)]['match'](_0x162f10[_0x101d4a(0x1da)])?parseInt(RegExp['$1']):Game_Action[_0x101d4a(0x1a3)];},VisuMZ['BreakShields'][_0x2c040f(0x1a0)]=Game_Action['prototype'][_0x2c040f(0x1d4)],Game_Action[_0x2c040f(0x1a8)][_0x2c040f(0x1d4)]=function(_0x50edd8){const _0x10829e=_0x2c040f;VisuMZ[_0x10829e(0x1cb)]['Game_Action_applyItemUserEffect'][_0x10829e(0x18e)](this,_0x50edd8),!!_0x50edd8&&_0x50edd8['isAffectedByBreakShield']()&&this[_0x10829e(0x1fc)](_0x50edd8);},Game_Action[_0x2c040f(0x1a8)][_0x2c040f(0x1fc)]=function(_0x1c9186){const _0xb62437=_0x2c040f;if(!_0x1c9186[_0xb62437(0x1f7)]()){const _0x241071=VisuMZ[_0xb62437(0x1cb)]['RegExp'];this['item']()[_0xb62437(0x1eb)]['match'](_0x241071[_0xb62437(0x183)])&&(_0x1c9186[_0xb62437(0x1f8)](parseInt(RegExp['$1'])),$gameTemp['_needRefreshAllEnemyWeaknessWindows']=!![]),this[_0xb62437(0x1e4)]()['note'][_0xb62437(0x205)](_0x241071['AlterBreakShield'])&&(_0x1c9186[_0xb62437(0x204)](parseInt(RegExp['$1'])),$gameTemp['_needRefreshAllEnemyWeaknessWindows']=!![]);}},VisuMZ[_0x2c040f(0x1cb)]['Game_BattlerBase_elementRate']=Game_BattlerBase[_0x2c040f(0x1a8)][_0x2c040f(0x1ce)],Game_BattlerBase[_0x2c040f(0x1a8)][_0x2c040f(0x1ce)]=function(_0x38e380){const _0x259a54=_0x2c040f;var _0x3340b7=VisuMZ[_0x259a54(0x1cb)][_0x259a54(0x1d0)][_0x259a54(0x18e)](this,_0x38e380);return this[_0x259a54(0x192)]()['contains'](_0x38e380)?Math['min'](0x1,_0x3340b7):_0x3340b7;},Game_BattlerBase[_0x2c040f(0x1a8)][_0x2c040f(0x21c)]=function(_0x4937c8){const _0x3e5209=_0x2c040f;return VisuMZ[_0x3e5209(0x1cb)][_0x3e5209(0x1d0)][_0x3e5209(0x18e)](this,_0x4937c8);},Game_Battler['BREAK_SHIELDS_BASE']=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)][_0x2c040f(0x1ae)][_0x2c040f(0x18c)],Game_Battler['BREAK_SHIELDS_MAX']=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)][_0x2c040f(0x1ae)][_0x2c040f(0x236)],Game_Battler[_0x2c040f(0x26d)]=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)][_0x2c040f(0x1ae)]['StunState'],Game_Battler[_0x2c040f(0x19d)]=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)][_0x2c040f(0x1ae)][_0x2c040f(0x185)],Game_Battler[_0x2c040f(0x1e5)]=VisuMZ[_0x2c040f(0x1cb)]['Settings']['Mechanics']['StunAniID'],Game_Battler[_0x2c040f(0x1b8)]=VisuMZ[_0x2c040f(0x1cb)]['Settings'][_0x2c040f(0x1ae)][_0x2c040f(0x1f3)],Game_Battler[_0x2c040f(0x263)]=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)][_0x2c040f(0x1ae)][_0x2c040f(0x1c7)],VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x265)]=Game_Battler[_0x2c040f(0x1a8)][_0x2c040f(0x262)],Game_Battler[_0x2c040f(0x1a8)]['removeBattleStates']=function(){const _0x27da6b=_0x2c040f;VisuMZ['BreakShields'][_0x27da6b(0x265)][_0x27da6b(0x18e)](this),this[_0x27da6b(0x191)]();},Game_Battler[_0x2c040f(0x1a8)][_0x2c040f(0x1ac)]=function(){return![];},Game_Battler['prototype']['resetBreakShield']=function(){const _0x260126=_0x2c040f;this[_0x260126(0x1ac)]()&&this[_0x260126(0x1f8)](this[_0x260126(0x257)]());},Game_Battler[_0x2c040f(0x1a8)][_0x2c040f(0x24d)]=function(){return Game_Battler['BREAK_SHIELDS_BASE'];},Game_Battler[_0x2c040f(0x1a8)][_0x2c040f(0x257)]=function(){const _0x5e0121=_0x2c040f;var _0x195da7=this[_0x5e0121(0x24d)]();return _0x195da7=this[_0x5e0121(0x21a)](_0x195da7),_0x195da7['clamp'](0x1,Game_Battler[_0x5e0121(0x1ca)]);},Game_Battler['prototype'][_0x2c040f(0x21a)]=function(_0xd199b8){const _0x2c3973=_0x2c040f,_0x5002f2=VisuMZ[_0x2c3973(0x1cb)][_0x2c3973(0x244)];for(const _0xe456ca of this[_0x2c3973(0x249)]()){if(!_0xe456ca)continue;_0xe456ca[_0x2c3973(0x1eb)][_0x2c3973(0x205)](_0x5002f2['AddedBreakShields'])&&(_0xd199b8+=Number(RegExp['$1'])||0x0);}return _0xd199b8;},Game_Battler['prototype']['currentBreakShield']=function(){const _0x27dcfa=_0x2c040f;return this['_currentBreakShield']===undefined&&this['setBreakShield'](this[_0x27dcfa(0x257)]()),this['_currentBreakShield'];},Game_Battler['prototype']['setBreakShield']=function(_0x255357){const _0x57c22d=_0x2c040f;this['isAffectedByBreakShield']()&&(this[_0x57c22d(0x1d1)]=Math['ceil'](_0x255357),this[_0x57c22d(0x1d1)]=this[_0x57c22d(0x1d1)][_0x57c22d(0x26a)](0x0,Game_Battler['BREAK_SHIELDS_MAX']),this['_currentBreakShield']<=0x0&&this[_0x57c22d(0x1c9)](),this[_0x57c22d(0x202)]());},Game_Battler[_0x2c040f(0x1a8)]['alterBreakShield']=function(_0x235041){const _0x3ec00a=_0x2c040f;this['setBreakShield'](this[_0x3ec00a(0x1b2)]()+_0x235041);},Game_Battler['prototype'][_0x2c040f(0x1c9)]=function(){const _0x3b4bc5=_0x2c040f;this[_0x3b4bc5(0x1f8)](this[_0x3b4bc5(0x257)]());var _0x4edd79=Game_Battler['BREAK_SHIELDS_STUN_STATE'];this['addState'](_0x4edd79),this[_0x3b4bc5(0x1a9)]();},Game_Battler[_0x2c040f(0x1a8)][_0x2c040f(0x1f7)]=function(){const _0x5df841=_0x2c040f;return this[_0x5df841(0x213)](Game_Battler[_0x5df841(0x26d)]);},Game_Battler['prototype'][_0x2c040f(0x20b)]=function(){const _0x55e46f=_0x2c040f;if(Imported['VisuMZ_0_CoreEngine']&&Game_Battler[_0x55e46f(0x19d)]){var _0x2b9494=Game_Battler[_0x55e46f(0x19d)];$gameTemp[_0x55e46f(0x1be)]([this],_0x2b9494,![],![]);}},Game_Battler[_0x2c040f(0x1a8)][_0x2c040f(0x1a9)]=function(){const _0x36767b=_0x2c040f;if(Imported[_0x36767b(0x201)]&&Game_Battler['BREAK_SHIELDS_STUN_ANIMATION']){var _0x2366a3=Game_Battler['BREAK_SHIELDS_STUN_ANIMATION'];$gameTemp[_0x36767b(0x1be)]([this],_0x2366a3,![],![]);}},Game_Battler[_0x2c040f(0x1a8)][_0x2c040f(0x192)]=function(){const _0x857861=_0x2c040f,_0x543187=VisuMZ[_0x857861(0x1cb)][_0x857861(0x244)];let _0x205606=[];for(const _0x3bdc2a of this[_0x857861(0x249)]()){if(!_0x3bdc2a)continue;if(_0x3bdc2a[_0x857861(0x1eb)][_0x857861(0x205)](_0x543187[_0x857861(0x1c4)])){const _0x4b95ad=RegExp['$1'][_0x857861(0x189)](',')['map'](_0x15742d=>_0x15742d[_0x857861(0x1c6)]());for(const _0x3a299b of _0x4b95ad){const _0x23863a=/^\d+$/['test'](_0x3a299b);if(_0x23863a)_0x205606[_0x857861(0x20d)](Number(_0x3a299b));else{const _0x1bbca0=DataManager[_0x857861(0x222)](_0x3a299b);if(_0x1bbca0)_0x205606[_0x857861(0x20d)](_0x1bbca0);}}}}return _0x205606[_0x857861(0x19f)](function(_0x29313a,_0x30c9d7){return _0x29313a-_0x30c9d7;}),_0x205606;},Game_Actor['prototype'][_0x2c040f(0x1ac)]=function(){const _0x5bb10c=_0x2c040f;if(Imported['VisuMZ_2_BattleSystemSTB']&&BattleManager['isSTB']()&&BattleManager[_0x5bb10c(0x1d3)]())return this[_0x5bb10c(0x24a)]()?!![]:![];return Game_Battler['BREAK_SHIELDS_ACTORS'];},Game_Actor[_0x2c040f(0x1a8)][_0x2c040f(0x24d)]=function(){const _0x8f5f1f=_0x2c040f,_0x47a93a=VisuMZ[_0x8f5f1f(0x1cb)][_0x8f5f1f(0x244)];let _0x474699=Game_Battler[_0x8f5f1f(0x1a8)][_0x8f5f1f(0x24d)][_0x8f5f1f(0x18e)](this);if(!!this[_0x8f5f1f(0x1ab)]()&&this['currentClass']()[_0x8f5f1f(0x1eb)][_0x8f5f1f(0x205)](_0x47a93a[_0x8f5f1f(0x215)]))_0x474699=parseInt(RegExp['$1']);else this[_0x8f5f1f(0x1c2)]()&&this[_0x8f5f1f(0x1c2)]()[_0x8f5f1f(0x1eb)]['match'](_0x47a93a['BaseBreakShields'])&&(_0x474699=parseInt(RegExp['$1']));return Math['max'](0x1,_0x474699);},VisuMZ['BreakShields'][_0x2c040f(0x1d2)]=Game_Actor[_0x2c040f(0x1a8)]['refresh'],Game_Actor[_0x2c040f(0x1a8)][_0x2c040f(0x202)]=function(){const _0x525b49=_0x2c040f;VisuMZ[_0x525b49(0x1cb)][_0x525b49(0x1d2)][_0x525b49(0x18e)](this),!$gameParty[_0x525b49(0x1e3)]()&&!this['_resettingBreakShield']&&(this[_0x525b49(0x20a)]=!![],this[_0x525b49(0x191)](),this[_0x525b49(0x20a)]=undefined);},Game_Enemy['prototype'][_0x2c040f(0x1ac)]=function(){const _0x294a70=_0x2c040f;if(Imported['VisuMZ_2_BattleSystemSTB']&&BattleManager[_0x294a70(0x1a2)]()&&BattleManager[_0x294a70(0x1d3)]())return this[_0x294a70(0x24a)]()?!![]:![];return Game_Battler[_0x294a70(0x263)];},Game_Enemy[_0x2c040f(0x1a8)][_0x2c040f(0x24d)]=function(){const _0x1c483a=_0x2c040f,_0x2ffda6=VisuMZ[_0x1c483a(0x1cb)]['RegExp'];let _0x2053a1=Game_Battler[_0x1c483a(0x1a8)]['baseBreakShield'][_0x1c483a(0x18e)](this);return this[_0x1c483a(0x238)]()&&this[_0x1c483a(0x238)]()[_0x1c483a(0x1eb)][_0x1c483a(0x205)](_0x2ffda6[_0x1c483a(0x215)])&&(_0x2053a1=parseInt(RegExp['$1'])),Math[_0x1c483a(0x267)](0x1,_0x2053a1);},Game_Unit[_0x2c040f(0x1a8)][_0x2c040f(0x1b1)]=function(){const _0xa6f572=_0x2c040f;var _0x2e5cb3=this[_0xa6f572(0x21b)];this['_inBattle']=![];for(const _0x36026f of this[_0xa6f572(0x228)]()){_0x36026f&&_0x36026f[_0xa6f572(0x191)]();}this[_0xa6f572(0x21b)]=_0x2e5cb3;},Sprite_Battler[_0x2c040f(0x1a8)][_0x2c040f(0x21d)]=function(){const _0x349a6f=_0x2c040f;this[_0x349a6f(0x1a1)]=new Sprite_BreakShieldIcon(),this['addChild'](this[_0x349a6f(0x1a1)]);},Sprite_Actor['BREAK_SHIELD_BATTLER_DISPLAY_ICON']=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)]['UI'][_0x2c040f(0x23c)],Sprite_Actor['BREAK_SHIELD_BATTLER_DISPLAY_POSITION']=VisuMZ['BreakShields']['Settings']['UI']['ActorDisplayPosition'],Sprite_Actor[_0x2c040f(0x21f)]=VisuMZ['BreakShields'][_0x2c040f(0x266)]['UI'][_0x2c040f(0x20e)],Sprite_Actor['BREAK_SHIELD_BATTLER_DISPLAY_OFFSET_Y']=VisuMZ[_0x2c040f(0x1cb)]['Settings']['UI']['ActorOffsetY'],VisuMZ['BreakShields'][_0x2c040f(0x193)]=Sprite_Actor[_0x2c040f(0x1a8)][_0x2c040f(0x1cd)],Sprite_Actor[_0x2c040f(0x1a8)][_0x2c040f(0x1cd)]=function(){const _0x1af14c=_0x2c040f;VisuMZ[_0x1af14c(0x1cb)][_0x1af14c(0x193)]['call'](this),this[_0x1af14c(0x209)]()&&this['createBreakShieldIconSprite']();},Sprite_Actor[_0x2c040f(0x1a8)][_0x2c040f(0x209)]=function(){const _0x166a1c=_0x2c040f;return Sprite_Actor[_0x166a1c(0x1c0)]&&this[_0x166a1c(0x18b)]===Sprite_Actor;},VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x261)]=Sprite_Actor[_0x2c040f(0x1a8)][_0x2c040f(0x1d5)],Sprite_Actor[_0x2c040f(0x1a8)][_0x2c040f(0x1d5)]=function(_0x528256){const _0x414ce3=_0x2c040f;VisuMZ[_0x414ce3(0x1cb)][_0x414ce3(0x261)][_0x414ce3(0x18e)](this,_0x528256),this[_0x414ce3(0x1a1)]&&this[_0x414ce3(0x1a1)][_0x414ce3(0x247)](this[_0x414ce3(0x246)],!![]);},Sprite_Enemy[_0x2c040f(0x1c0)]=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)]['UI'][_0x2c040f(0x1a5)],Sprite_Enemy[_0x2c040f(0x217)]=VisuMZ['BreakShields'][_0x2c040f(0x266)]['UI'][_0x2c040f(0x1e0)],Sprite_Enemy[_0x2c040f(0x21f)]=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)]['UI']['EnemyOffsetX'],Sprite_Enemy[_0x2c040f(0x1b9)]=VisuMZ['BreakShields'][_0x2c040f(0x266)]['UI'][_0x2c040f(0x1f5)],Sprite_Enemy[_0x2c040f(0x241)]=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)]['UI'][_0x2c040f(0x203)],Sprite_Enemy[_0x2c040f(0x1ed)]=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)]['UI'][_0x2c040f(0x268)],Sprite_Enemy[_0x2c040f(0x23f)]=VisuMZ[_0x2c040f(0x1cb)]['Settings']['UI'][_0x2c040f(0x256)],VisuMZ['BreakShields'][_0x2c040f(0x182)]=Sprite_Enemy[_0x2c040f(0x1a8)]['initMembers'],Sprite_Enemy[_0x2c040f(0x1a8)]['initMembers']=function(){const _0x32d3c0=_0x2c040f;VisuMZ[_0x32d3c0(0x1cb)][_0x32d3c0(0x182)][_0x32d3c0(0x18e)](this),this[_0x32d3c0(0x209)]()&&this[_0x32d3c0(0x21d)]();},Sprite_Enemy['prototype'][_0x2c040f(0x209)]=function(){const _0x59279f=_0x2c040f;return Imported[_0x59279f(0x19e)]&&Sprite_Enemy[_0x59279f(0x241)]?![]:Sprite_Enemy[_0x59279f(0x1c0)];},VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x1d9)]=Sprite_Enemy[_0x2c040f(0x1a8)]['setBattler'],Sprite_Enemy[_0x2c040f(0x1a8)][_0x2c040f(0x1d5)]=function(_0xd34fc7){const _0x20e9d9=_0x2c040f;VisuMZ[_0x20e9d9(0x1cb)][_0x20e9d9(0x1d9)]['call'](this,_0xd34fc7),this[_0x20e9d9(0x1a1)]&&this['_breakShieldSprite'][_0x20e9d9(0x247)](this[_0x20e9d9(0x18f)],!![]);};function Sprite_BreakShieldIcon(){const _0x30f946=_0x2c040f;this[_0x30f946(0x1ba)](...arguments);}Sprite_BreakShieldIcon[_0x2c040f(0x1a8)]=Object[_0x2c040f(0x188)](Sprite['prototype']),Sprite_BreakShieldIcon[_0x2c040f(0x1a8)][_0x2c040f(0x18b)]=Sprite_BreakShieldIcon,Sprite_BreakShieldIcon[_0x2c040f(0x1a8)]['initialize']=function(){const _0x1657e4=_0x2c040f;Sprite['prototype']['initialize'][_0x1657e4(0x18e)](this),this[_0x1657e4(0x1cd)](),this[_0x1657e4(0x240)](),this[_0x1657e4(0x1bf)]();},Sprite_BreakShieldIcon[_0x2c040f(0x1a8)]['initMembers']=function(){const _0x3485ca=_0x2c040f;this[_0x3485ca(0x25f)]=null,this['_autoPositioning']=![],this[_0x3485ca(0x1d7)]=0x0,this['_numberValue']='',this[_0x3485ca(0x221)]='',this['anchor']['x']=0.5,this[_0x3485ca(0x1bc)]['y']=0.5;},Sprite_BreakShieldIcon[_0x2c040f(0x1a8)][_0x2c040f(0x240)]=function(){const _0x1e23cd=_0x2c040f;this[_0x1e23cd(0x1ff)]=ImageManager['loadSystem'](_0x1e23cd(0x186)),this[_0x1e23cd(0x1b7)](0x0,0x0,0x0,0x0);},Sprite_BreakShieldIcon['prototype'][_0x2c040f(0x1bf)]=function(){const _0x5658a2=_0x2c040f;this[_0x5658a2(0x239)]=new Sprite(),this[_0x5658a2(0x239)][_0x5658a2(0x1ff)]=new Bitmap(ImageManager['iconWidth'],ImageManager[_0x5658a2(0x1ad)]),this[_0x5658a2(0x239)]['anchor']['x']=0.5,this[_0x5658a2(0x239)][_0x5658a2(0x1bc)]['y']=0.5,this['addChild'](this['_numberSprite']);},Sprite_BreakShieldIcon[_0x2c040f(0x1a8)][_0x2c040f(0x247)]=function(_0x46ce48,_0x20c350){const _0x593aa3=_0x2c040f;this[_0x593aa3(0x25f)]!==_0x46ce48&&(this[_0x593aa3(0x25f)]=_0x46ce48),this[_0x593aa3(0x200)]=_0x20c350;},Sprite_BreakShieldIcon[_0x2c040f(0x1a8)][_0x2c040f(0x22b)]=function(){const _0x39b4e8=_0x2c040f;Sprite[_0x39b4e8(0x1a8)][_0x39b4e8(0x22b)][_0x39b4e8(0x18e)](this),this[_0x39b4e8(0x20f)]()?(this[_0x39b4e8(0x1ea)]=0xff,this[_0x39b4e8(0x1f2)](),this[_0x39b4e8(0x18d)](),this[_0x39b4e8(0x219)](),this[_0x39b4e8(0x1f4)]()):this['opacity']=0x0;},Sprite_BreakShieldIcon[_0x2c040f(0x1a8)][_0x2c040f(0x20f)]=function(){const _0x4e9458=_0x2c040f;return this[_0x4e9458(0x25f)]&&this['_battler']['isAppeared']()&&this[_0x4e9458(0x25f)][_0x4e9458(0x1ac)]();},Sprite_BreakShieldIcon[_0x2c040f(0x1a8)][_0x2c040f(0x1f2)]=function(){const _0x254afa=_0x2c040f;if(this[_0x254afa(0x25f)]['isDead']()){const _0x474840=$dataStates[this[_0x254afa(0x25f)][_0x254afa(0x216)]()];_0x474840&&_0x474840[_0x254afa(0x251)]>0x0?this[_0x254afa(0x1d7)]=_0x474840['iconIndex']:this[_0x254afa(0x1d7)]=0x0,this[_0x254afa(0x25e)]='';}else{if(this[_0x254afa(0x25f)][_0x254afa(0x1f7)]()){const _0x19ec56=$dataStates[Game_Battler['BREAK_SHIELDS_STUN_STATE']];_0x19ec56&&_0x19ec56[_0x254afa(0x251)]>0x0?this['_iconIndex']=_0x19ec56[_0x254afa(0x251)]:this['_iconIndex']=ImageManager[_0x254afa(0x1df)];if(ImageManager[_0x254afa(0x18a)]){this[_0x254afa(0x25e)]=this[_0x254afa(0x25f)]['_stateTurns'][_0x19ec56['id']]||0x0;if(this[_0x254afa(0x25e)]<=0x0)this['_numberValue']='';}else this[_0x254afa(0x25e)]='';}else this[_0x254afa(0x1d7)]=ImageManager['breakShield_ShieldIcon'],this[_0x254afa(0x25e)]=this['_battler'][_0x254afa(0x1b2)]();}},Sprite_BreakShieldIcon[_0x2c040f(0x1a8)][_0x2c040f(0x18d)]=function(){const _0x376dbc=_0x2c040f,_0x148c09=ImageManager[_0x376dbc(0x206)],_0x39778b=ImageManager[_0x376dbc(0x1ad)],_0xaf4d0b=this[_0x376dbc(0x1d7)]%0x10*_0x148c09,_0x3d029d=Math[_0x376dbc(0x24f)](this[_0x376dbc(0x1d7)]/0x10)*_0x39778b;this[_0x376dbc(0x1b7)](_0xaf4d0b,_0x3d029d,_0x148c09,_0x39778b);},Sprite_BreakShieldIcon[_0x2c040f(0x1a8)][_0x2c040f(0x219)]=function(){const _0x344255=_0x2c040f;if(this[_0x344255(0x221)]===this[_0x344255(0x25e)])return;this[_0x344255(0x221)]=this['_numberValue'];const _0x390bbe=this[_0x344255(0x239)][_0x344255(0x1ff)];_0x390bbe['fontFace']=$gameSystem[_0x344255(0x255)](),_0x390bbe[_0x344255(0x1bd)]=VisuMZ[_0x344255(0x1cb)][_0x344255(0x266)]['UI'][_0x344255(0x19b)],_0x390bbe[_0x344255(0x1b5)](),_0x390bbe['drawText'](this[_0x344255(0x221)],0x0,0x0,_0x390bbe[_0x344255(0x1de)],_0x390bbe[_0x344255(0x1fe)],'center');},Sprite_BreakShieldIcon[_0x2c040f(0x1a8)][_0x2c040f(0x1f4)]=function(){const _0x8c8843=_0x2c040f;if(!this[_0x8c8843(0x200)])return;if(!SceneManager[_0x8c8843(0x269)]())return;if(!SceneManager[_0x8c8843(0x22a)][_0x8c8843(0x1fd)])return;const _0x1bc52d=SceneManager[_0x8c8843(0x22a)][_0x8c8843(0x1fd)][_0x8c8843(0x22e)](this[_0x8c8843(0x25f)]);if(!_0x1bc52d)return;const _0x52d467=this[_0x8c8843(0x25f)][_0x8c8843(0x1c8)]()?Sprite_Actor:Sprite_Enemy,_0x5116e2=_0x52d467[_0x8c8843(0x217)];this['x']=0x0;if(_0x5116e2[_0x8c8843(0x205)](/left/i))this['x']=Math[_0x8c8843(0x24f)](_0x1bc52d[_0x8c8843(0x1de)]/-0x2);else _0x5116e2[_0x8c8843(0x205)](/right/i)&&(this['x']=Math[_0x8c8843(0x1bb)](_0x1bc52d['width']/0x2));this['x']+=_0x52d467[_0x8c8843(0x21f)],this['y']=0x0;if(_0x5116e2[_0x8c8843(0x205)](/top/i))this['y']=_0x1bc52d[_0x8c8843(0x1fe)]*-0x1;else _0x5116e2[_0x8c8843(0x205)](/middle/i)&&(this['y']=Math[_0x8c8843(0x1a4)](_0x1bc52d['height']*-0.5));this['y']+=_0x52d467['BREAK_SHIELD_BATTLER_DISPLAY_OFFSET_Y'];};Imported[_0x2c040f(0x19e)]&&Sprite_Enemy['BREAK_SHIELD_BATTLER_ATTACH_ICON_NAME']&&(VisuMZ[_0x2c040f(0x1cb)]['Sprite_EnemyName_createAttachedSprites']=Sprite_EnemyName[_0x2c040f(0x1a8)][_0x2c040f(0x245)],Sprite_EnemyName[_0x2c040f(0x1a8)][_0x2c040f(0x245)]=function(){const _0x11bf1b=_0x2c040f;VisuMZ[_0x11bf1b(0x1cb)][_0x11bf1b(0x252)][_0x11bf1b(0x18e)](this),this[_0x11bf1b(0x1a1)]=new Sprite_BreakShieldIcon(),this['addChild'](this[_0x11bf1b(0x1a1)]);},VisuMZ['BreakShields'][_0x2c040f(0x1e6)]=Sprite_EnemyName[_0x2c040f(0x1a8)]['updateAttachedSprites'],Sprite_EnemyName[_0x2c040f(0x1a8)][_0x2c040f(0x229)]=function(){const _0x571cf1=_0x2c040f;VisuMZ[_0x571cf1(0x1cb)][_0x571cf1(0x1e6)][_0x571cf1(0x18e)](this),this[_0x571cf1(0x1a7)]();},Sprite_EnemyName['prototype']['updateBreakShieldIconSprite']=function(){const _0x23eecf=_0x2c040f;if(!this[_0x23eecf(0x1a1)])return;this[_0x23eecf(0x25f)]!==this[_0x23eecf(0x1a1)][_0x23eecf(0x25f)]&&this[_0x23eecf(0x1a1)][_0x23eecf(0x247)](this[_0x23eecf(0x25f)],![]);const _0x25a9ee=this['textWidth']();this[_0x23eecf(0x1f9)]=this[_0x23eecf(0x1f9)]||Window_Base[_0x23eecf(0x1a8)][_0x23eecf(0x23e)](),this['_breakShieldSprite']['x']=Math[_0x23eecf(0x1a4)]((_0x25a9ee+ImageManager[_0x23eecf(0x206)])/-0x2)-0x8,this['_breakShieldSprite']['y']=this['_lineHeight']/0x2,this[_0x23eecf(0x1a1)]['x']+=Sprite_Enemy[_0x23eecf(0x1ed)]||0x0,this[_0x23eecf(0x1a1)]['y']+=Sprite_Enemy['BREAK_SHIELD_BATTLER_ATTACH_OFFSET_Y']||0x0,this[_0x23eecf(0x220)]();},Sprite_EnemyName[_0x2c040f(0x1a8)][_0x2c040f(0x220)]=function(){const _0x2ffcad=_0x2c040f;if(!Imported[_0x2ffcad(0x234)])return;if(!this[_0x2ffcad(0x25f)][_0x2ffcad(0x211)]())return;if(!Sprite_MultiLayerHpStates[_0x2ffcad(0x214)][_0x2ffcad(0x1fa)])return;const _0x57aff8=VisuMZ[_0x2ffcad(0x231)][_0x2ffcad(0x212)][_0x2ffcad(0x1fb)][_0x2ffcad(0x24c)];_0x57aff8[_0x2ffcad(0x1fa)]&&Sprite_MultiLayerHpStates[_0x2ffcad(0x214)][_0x2ffcad(0x1e8)]&&(this['_breakShieldSprite']['y']+=Graphics['height']*0xa);});function _0x1eeb(){const _0x1c50e6=['AffectActors','updateAutoPosition','EnemyOffsetY','drawItemStatus','isBreakStunned','setBreakShield','_lineHeight','breakShields','battler','applyChangeBreakShield','_spriteset','height','bitmap','_autoPositioning','VisuMZ_0_CoreEngine','refresh','NameAttachShieldIcon','alterBreakShield','match','iconWidth','_elementIDs','BREAK_SHIELDS_DISPLAY_AUTO','isBreakShieldIconDisplayed','_resettingBreakShield','startBreakShieldReduceAnimation','81948HGEAJS','push','ActorOffsetX','shouldDisplay','filter','showMultiLayerHpGauge','Compatibility','isStateAffected','SETTINGS','BaseBreakShields','deathStateId','BREAK_SHIELD_BATTLER_DISPLAY_POSITION','ShowStunTurns','updateNumber','addedBreakShields','_inBattle','originalElementRate','createBreakShieldIconSprite','STR','BREAK_SHIELD_BATTLER_DISPLAY_OFFSET_X','updateBreakShieldMultiLayerHpGauge','_displayValue','getElementIdWithName','STRUCT','MinRate','ShieldIcon','exit','44780mBYunH','members','updateAttachedSprites','_scene','update','ARRAYEVAL','calcUserElementDamagePlus','findTargetSprite','executeBreakShieldReduction','drawItemStatusBreakShieldsDefault','MultiLayerHpGauge','BattleStatusOffsetX','status','VisuMZ_4_MultiLayerHpGauge','ARRAYJSON','Max','BattleLayout','enemy','_numberSprite','move','drawItemStatusBreakShields','ActorDisplayIcon','ARRAYNUM','lineHeight','BREAK_SHIELD_BATTLER_ATTACH_OFFSET_Y','loadBitmap','BREAK_SHIELD_BATTLER_ATTACH_ICON_NAME','shouldDisplayBreakShields','159UsACol','RegExp','createAttachedSprites','_actor','setup','139kEBguP','traitObjects','stbCannotBeExploited','BREAK_SHIELDS_MENU_ICONS','reduceRedundancy','baseBreakShield','7XttJLT','floor','parameters','iconIndex','Sprite_EnemyName_createAttachedSprites','BREAK_SHIELDS_DISPLAY_ICONS','format','numberFontFace','AttachShieldOffsetY','topBreakShield','35VpRykz','elements','4595769vOuAdB','calcUserElementDamageRate','BattleManager_setup','BattleStatusOffsetY','_numberValue','_battler','isEnemy','Sprite_Actor_setBattler','removeBattleStates','BREAK_SHIELDS_ENEMIES','return\x200','Game_Battler_removeBattleStates','Settings','max','AttachShieldOffsetX','isSceneBattle','clamp','BattleStatusDisplayIcons','breakShield_ShieldIcon','BREAK_SHIELDS_STUN_STATE','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','parse','Sprite_Enemy_initMembers','SetBreakShield','MenuStatusBreakShieldIcons','ReduceAniID','IconSet','Window_BattleStatus_drawItemStatus','create','split','breakShield_StunTurns','constructor','Base','updateFrame','call','_enemy','_calcRawBreakShieldEleRate','resetBreakShield','getProtectedWeaknessElements','Sprite_Actor_initMembers','11pqxZyI','JSON','BREAK_SHIELDS_DISPLAY_OFFSET_X','itemRect','breakShield_ProtectIcon','includes','ConvertParams','FontSize','border','BREAK_SHIELDS_REDUCE_ANIMATION','VisuMZ_1_BattleCore','sort','Game_Action_applyItemUserEffect','_breakShieldSprite','isSTB','BREAK_SHIELDS_DEFAULT_REDUCTION','round','EnemyDisplayIcon','replace','updateBreakShieldIconSprite','prototype','startBreakShieldBrokenAnimation','13522otGulx','currentClass','isAffectedByBreakShield','iconHeight','Mechanics','425142tkVWxm','7053490zqVLYv','resetBreakShields','currentBreakShield','placeBreakShieldIcon','isHpEffect','clear','BREAK_SHIELDS_DISPLAY_OFFSET_Y','setFrame','BREAK_SHIELDS_ACTORS','BREAK_SHIELD_BATTLER_DISPLAY_OFFSET_Y','initialize','ceil','anchor','fontSize','requestFauxAnimation','createNumberDisplay','BREAK_SHIELD_BATTLER_DISPLAY_ICON','ARRAYFUNC','actor','BREAK_SHIELDS_MINIMUM_WEAKNESS_RATE','ProtectedElements','portrait','trim','AffectEnemies','isActor','applyBreakStun','BREAK_SHIELDS_MAX','BreakShields','EVAL','initMembers','elementRate','calcUserElementDamageFlat','Game_BattlerBase_elementRate','_currentBreakShield','Game_Actor_refresh','isSTBExploitSystemEnabled','applyItemUserEffect','setBattler','drawItemStatusBreakBattleCore','_iconIndex','itemBreakShieldReduction','Sprite_Enemy_setBattler','BreakReduce','Game_Action_executeDamage','ARRAYSTR','map','width','breakShield_StunIcon','EnemyDisplayPosition','StunIcon','calcRawBreakShieldElementRate','inBattle','item','BREAK_SHIELDS_STUN_ANIMATION','Sprite_EnemyName_updateAttachedSprites','actor%1-breakShieldIcon','show','toUpperCase','opacity','note','1011848mOejaz','BREAK_SHIELD_BATTLER_ATTACH_OFFSET_X','Game_Action_calcUserElementDamageRate','1248KzNFjo','drawActorIcons','Game_Action_calcUserElementDamagePlus','updateIcon'];_0x1eeb=function(){return _0x1c50e6;};return _0x1eeb();};Window_StatusBase['BREAK_SHIELDS_MENU_ICONS']=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)]['UI'][_0x2c040f(0x184)],VisuMZ[_0x2c040f(0x1cb)]['Window_StatusBase_drawActorIcons']=Window_StatusBase[_0x2c040f(0x1a8)]['drawActorIcons'],Window_StatusBase['prototype'][_0x2c040f(0x1f0)]=function(_0x46ba80,_0x5e50f1,_0x5102c8,_0x412081){const _0x5bea49=_0x2c040f;_0x412081=_0x412081||0x90;if(this[_0x5bea49(0x242)](_0x46ba80)){const _0x126828=_0x5e50f1+Math[_0x5bea49(0x1a4)](ImageManager[_0x5bea49(0x206)]/0x2),_0x22a04f=_0x5102c8+Math[_0x5bea49(0x1a4)](ImageManager[_0x5bea49(0x1ad)]/0x2)+0x2;this['placeBreakShieldIcon'](_0x46ba80,_0x126828,_0x22a04f),_0x5e50f1+=ImageManager[_0x5bea49(0x206)],_0x412081-=ImageManager[_0x5bea49(0x206)];}VisuMZ[_0x5bea49(0x1cb)]['Window_StatusBase_drawActorIcons']['call'](this,_0x46ba80,_0x5e50f1,_0x5102c8,_0x412081);},Window_StatusBase['prototype'][_0x2c040f(0x242)]=function(_0x331811){const _0x44d298=_0x2c040f;if(!_0x331811)return![];if(!Window_StatusBase[_0x44d298(0x24b)])return![];if(_0x331811[_0x44d298(0x1c8)]())return Game_Battler[_0x44d298(0x1b8)];else return _0x331811[_0x44d298(0x260)]()?Game_Battler[_0x44d298(0x263)]:!![];},Window_StatusBase['prototype']['placeBreakShieldIcon']=function(_0x5b2fb3,_0x325a83,_0xe037bb){const _0x961816=_0x2c040f,_0x5019d7=(_0x5b2fb3[_0x961816(0x1c8)]()?_0x5b2fb3['actorId']():enemy['_enemyId'])||0x0,_0xfbd1e9=_0x961816(0x1e7)['format'](_0x5019d7),_0x576d61=this['createInnerSprite'](_0xfbd1e9,Sprite_BreakShieldIcon);_0x576d61['setup'](_0x5b2fb3,![]),_0x576d61[_0x961816(0x23a)](_0x325a83,_0xe037bb),_0x576d61[_0x961816(0x1e8)]();},Window_BattleStatus[_0x2c040f(0x253)]=VisuMZ[_0x2c040f(0x1cb)]['Settings']['UI'][_0x2c040f(0x26b)],Window_BattleStatus[_0x2c040f(0x208)]=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)]['UI']['BattleStatusAutoPosition'],Window_BattleStatus['BREAK_SHIELDS_DISPLAY_OFFSET_X']=VisuMZ[_0x2c040f(0x1cb)][_0x2c040f(0x266)]['UI'][_0x2c040f(0x232)],Window_BattleStatus['BREAK_SHIELDS_DISPLAY_OFFSET_Y']=VisuMZ[_0x2c040f(0x1cb)]['Settings']['UI'][_0x2c040f(0x25d)],VisuMZ[_0x2c040f(0x1cb)]['Window_BattleStatus_drawItemStatus']=Window_BattleStatus[_0x2c040f(0x1a8)][_0x2c040f(0x1f6)],Window_BattleStatus['prototype']['drawItemStatus']=function(_0x2c24d8){const _0x34a33b=_0x2c040f;VisuMZ[_0x34a33b(0x1cb)][_0x34a33b(0x187)]['call'](this,_0x2c24d8),this['drawItemStatusBreakShields'](_0x2c24d8);},Window_BattleStatus[_0x2c040f(0x1a8)][_0x2c040f(0x23b)]=function(_0x5a0c14){const _0x5bf5bd=_0x2c040f;if(!Window_BattleStatus['BREAK_SHIELDS_DISPLAY_ICONS'])return;if(!Game_Battler[_0x5bf5bd(0x1b8)])return;const _0x35206c=this[_0x5bf5bd(0x1c2)](_0x5a0c14);if(!_0x35206c[_0x5bf5bd(0x1ac)]())return;if(!Window_BattleStatus['BREAK_SHIELDS_DISPLAY_AUTO'])this['drawItemStatusBreakShieldsDefault'](_0x5a0c14);else!Imported[_0x5bf5bd(0x19e)]?this[_0x5bf5bd(0x230)](_0x5a0c14):this[_0x5bf5bd(0x1d6)](_0x5a0c14);},Window_BattleStatus[_0x2c040f(0x1a8)]['drawItemStatusBreakShieldsDefault']=function(_0x36805a){const _0x5a4207=_0x2c040f,_0x2d012f=this[_0x5a4207(0x1c2)](_0x36805a),_0x181743=this['itemRectWithPadding'](_0x36805a),_0x18cc95=Math[_0x5a4207(0x1a4)](ImageManager[_0x5a4207(0x206)]/0x2);let _0x2fb90f=_0x181743['x']+_0x18cc95-0x4+Window_BattleStatus[_0x5a4207(0x196)],_0x11d7e8=_0x181743['y']+_0x18cc95+0x4+Window_BattleStatus['BREAK_SHIELDS_DISPLAY_OFFSET_Y'];this[_0x5a4207(0x1b3)](_0x2d012f,_0x2fb90f,_0x11d7e8);},Window_BattleStatus['prototype'][_0x2c040f(0x1d6)]=function(_0x4e9d2e){const _0x46d072=_0x2c040f,_0xdf9c3f=this[_0x46d072(0x1c2)](_0x4e9d2e),_0x410c42=this[_0x46d072(0x197)](_0x4e9d2e),_0x1f37d1=Math[_0x46d072(0x1a4)](_0x410c42['x']+(_0x410c42[_0x46d072(0x1de)]-0x80)/0x2),_0x2735c0=this['nameY'](_0x410c42),_0x24f607=Math['round'](ImageManager[_0x46d072(0x206)]/0x2);let _0x7f485d=_0x1f37d1-_0x24f607-0x4,_0x2c18f8=_0x2735c0+_0x24f607;_0x7f485d-ImageManager[_0x46d072(0x206)]/0x2<_0x410c42['x']&&(_0x7f485d=_0x1f37d1+_0x24f607-0x4,_0x2c18f8=_0x2735c0-_0x24f607);let _0x18c4b8=_0x410c42['x']+_0x24f607+0x4,_0x32ce57=_0x410c42['y']+_0x24f607+0x4;const _0x420e22=this['battleLayoutStyle']();switch(_0x420e22){case'list':!VisuMZ['BattleCore'][_0x46d072(0x266)][_0x46d072(0x237)]['ShowFacesListStyle']&&(_0x18c4b8=_0x410c42['x']+_0x410c42['width']-ImageManager[_0x46d072(0x206)]);break;case'xp':case _0x46d072(0x1c5):case'default':case _0x46d072(0x19c):_0x18c4b8=_0x7f485d,_0x32ce57=_0x2c18f8+ImageManager[_0x46d072(0x1ad)];break;}_0x18c4b8+=Window_BattleStatus[_0x46d072(0x196)],_0x32ce57+=Window_BattleStatus[_0x46d072(0x1b6)],this[_0x46d072(0x1b3)](_0xdf9c3f,_0x18c4b8,_0x32ce57);};