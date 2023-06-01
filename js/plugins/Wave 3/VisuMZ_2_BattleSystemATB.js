//=============================================================================
// VisuStella MZ - Battle System ATB - Active Turn Battle
// VisuMZ_2_BattleSystemATB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemATB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemATB = VisuMZ.BattleSystemATB || {};
VisuMZ.BattleSystemATB.version = 1.28;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.28] [BattleSystemATB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_ATB_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The RPG Maker MZ Time Progress Battle (TPB) system is only a few steps away
 * from the acclaimed Active Turn Battle (ATB) system. This plugin will grant
 * it the various features needed to turn it from TPB into ATB.
 * 
 * This plugin will grant control over how the various mechanics work, ranging
 * from penalties to calculations, to actions that can manipulate the ATB gauge
 * of battlers. Battlers that are in the middle of casting a spell can also be
 * interrupted with specific notetag traits.
 * 
 * ATB Gauges can also be displayed on enemies and/or allies, giving the player
 * full access to the current battle state. The ATB Gauges are also improved,
 * showing different colors for different states and showing a new gauge for
 * the casting state.
 * 
 * *NOTE* You will need to set the game project to run in either TPB mode,
 * Time Progress (Active) or Time Progress (Wait), for these new ATB effects
 * to work. You can find this setting in Database > System 1.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Full control over the TPB/ATB mechanics such as speed, calculations, etc.
 * * Notetags that give skills and items access to ATB Gauge manipulation, by
 *   altering how filled they are.
 * * Interrupts can be used on battlers in the middle of casting a skill.
 * * Visual ATB Gauges can be displayed over battlers' heads.
 * * ATB Gauges have extra coloring options added to them to let the player
 *   quickly know the current speed state of the ATB Gauge.
 * * A field-wide ATB Gauge that positions actor and enemy markers on it to
 *   show how far along actors and enemies are relative to each other's turns.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * - VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 * 
 * *NOTE* You will need to set the game project to run in either TPB mode,
 * Time Progress (Active) or Time Progress (Wait), for these new ATB effects
 * to work. You can find this setting in Database > System 1.
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
 * ATB Gauges
 * 
 * The gauges are now revamped to show different colors to depict the various
 * ATB states a battler can be in. These various states include the following:
 * 
 * - When a battler's speed is fully stopped.
 * - When a battler's speed is slower/faster past a specific rating.
 * - When a battler is ready for an action.
 * - When a battler is casting an action (those with negative speed values).
 * 
 * The colors used for these states can be found and altered in the Plugin
 * Parameters under Gauge Color Settings.
 *
 * ---
 * 
 * Skill & Item Speeds
 * 
 * With TPB, skills and items with negative speed values will cause the battler
 * to enter a "casting" state, meaning they have to wait extra time before the
 * action takes off. With this delayed action execution, one might assume that
 * if there is a positive speed value, the battler would require less time for
 * their next turn.
 * 
 * However, this isn't the case with RPG Maker MZ's TPB. By changing it to ATB,
 * skills and items with positive speed values will have an impact on how full
 * their ATB Gauges will be in the following turn. A value of 2000 will put the
 * gauge at 50% full, 1000 will put the gauge at 25% full, 500 will put it at
 * 12.5% full, and so on. Notetags can also be used to influence this.
 * 
 * ---
 * 
 * JS Calculation Mechanics
 * 
 * While the calculation mechanics aren't changed from their original RPG Maker
 * MZ formulas, the functions for them have been overwritten to allow you, the
 * game developer, to alter them as you see fit.
 * 
 * ---
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
 * - ATB Interrupts can have animations played when they trigger if the
 * VisuStella Core Engine is installed.
 *
 * ---
 * 
 * VisuMZ_1_OptionsCore
 * 
 * - Having the VisuStella Options Core available will allow you to adjust the
 * speed at which the ATB gauges fill up.
 * 
 * - The VisuStella Options Core also gives the player the option to toggle
 * between Active and Wait-based ATB.
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
 * === General ATB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 *
 * ---
 * 
 * <ATB Help>
 *  description
 *  description
 * </ATB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under TPB/ATB.
 * - This is primarily used if the skill behaves differently in TPB/ATB versus
 *   any other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to TPB/ATB.
 * 
 * ---
 *
 * <Hide ATB Gauge>
 *
 * - Used for: Enemy Notetags
 * - If you don't want an enemy to show their ATB Gauge, use this notetag.
 * 
 * ---
 * 
 * === ATB Field Gauge-Related Notetags ===
 * 
 * These notetags only work if the ATB Field Gauge is enabled.
 * 
 * ---
 *
 * <ATB Field Gauge Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the marker graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <ATB Field Gauge Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the marker graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <ATB Field Gauge Face: Monster, 1>
 * 
 * ---
 * 
 * === ATB Gauge Manipulation-Related Notetags ===
 * 
 * These notetags are used for ATB Gauge manipulation purposes.
 * 
 * ---
 *
 * <ATB After Gauge: x%>
 *
 * - Used for: Skill, Item Notetags
 * - After using the skill/item, the user's ATB Gauge will be set to x%.
 * - Replace 'x' with a percentile value representing the amount you want the
 *   ATB Gauge to reset to after the skill/item's usage.
 * 
 * ---
 * 
 * <ATB Charge Gauge: x%>
 * <ATB Charge Gauge: +x%>
 * <ATB Charge Gauge: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a charging state, change the target's gauge amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the ATB
 *   Gauge you wish to alter it to/by.
 * - This only affects targets who are in a charging state.
 * 
 * ---
 * 
 * <ATB Cast Gauge: x%>
 * <ATB Cast Gauge: +x%>
 * <ATB Cast Gauge: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a casting state, change the target's gauge amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the ATB
 *   Gauge you wish to alter it to/by.
 * - This only affects targets who are in a casting state.
 * 
 * ---
 *
 * <ATB Interrupt>
 *
 * - Used for: Skill, Item Notetags
 * - If this skill/item hits a target who is in a casting state, interrupt that
 *   action to cancel it and reset the target's ATB Gauge to 0%.
 * 
 * ---
 *
 * <ATB Cannot Be Interrupted>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the skill/item immune to ATB Interruptions.
 * 
 * ---
 * 
 * <ATB Battle Start Gauge: +x%>
 * <ATB Battle Start Gauge: -x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Determine how much extra or less ATB Gauge the battler will start with if
 *   associated with one of these database objects.
 * - Replace 'x' with a percentile value determining how much extra or less ATB
 *   Gauge value the battler will start battle with.
 * - These values are additive when stacked.
 *
 * ---
 * 
 * <ATB After Gauge: +x%>
 * <ATB After Gauge: -x%>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - Determine how much influence there is on the ATB Gauge after finishing a
 *   skill/item. Increase or decrease the amount after each action.
 * - Replace 'x' with a percentile value determining how much influence there
 *   is on the ATB Gauge after the skill/item has finished performing.
 * - These values are additive when stacked.
 *
 * ---
 * 
 * === JavaScript Notetags: ATB Gauge Manipulation ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * give more control over conditional ATB Gauge Manipulation.
 * 
 * ---
 * 
 * <JS ATB Charge Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB Charge Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to if the target is in a charging state.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current ATB Gauge rate
 *   if the target is in a charging state.
 * 
 * ---
 * 
 * <JS ATB Cast Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB Cast Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to if the target is in a casting state.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current ATB Gauge rate
 *   if the target is in a casting state.
 * 
 * ---
 * 
 * <JS ATB After Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB After Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to after performing this skill/item action.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to 0.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Field Gauge Icon
 * - Changes the icons used for the specific actor(s) on the ATB Field Gauge.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 * 
 * Actor: Change Field Gauge Face
 * - Changes the faces used for the specific actor(s) on the ATB Field Gauge.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Face Name:
 *   - This is the filename for the target face graphic.
 * 
 *   Face Index:
 *   - This is the index for the target face graphic.
 * 
 * ---
 *
 * Actor: Clear Field Gauge Graphic
 * - Clears the ATB Field Gauge graphics for the actor(s).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Field Gauge Icon
 * - Changes the icons used for the specific enemy(ies) on the ATB Field Gauge.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change Field Gauge Face
 * - Changes the faces used for the specific enemy(ies) on the ATB Field Gauge.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Enemy: Clear Field Gauge Graphic
 * - Clears the ATB Field Gauge graphics for the enemy(ies).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 * 
 * System: ATB Field Gauge Visibility
 * - Determine the visibility of the ATB Field Gauge.
 * 
 *   Visibility:
 *   - Changes the visibility of the ATB Field Gauge.
 * 
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Mechanics settings used for Battle System ATB. The majority of these are
 * JavaScript-based and will require knowledge of JavaScript to fully utilize
 * the plugin parameters.
 *
 * ---
 *
 * Mechanics
 * 
 *   Escape Fail Penalty:
 *   - Gauge penalty if an escape attempt fails.
 * 
 *   Stuns Reset Gauge?:
 *   - Should stuns reset the ATB Gauge?
 * 
 *   JS: Initial Gauge:
 *   - JavaScript code to determine how much ATB gauge to give each battler at
 *     the start of battle.
 * 
 *   JS: Speed:
 *   - JavaScript code to determine how much speed a battler has.
 * 
 *   JS: Base Speed:
 *   - JavaScript code to determine how much base speed a battler has.
 * 
 *   JS: Relative Speed:
 *   - JavaScript code to determine what is the relative speed of a battler.
 * 
 *   JS: Acceleration:
 *   - JavaScript code to determine how much gauges accelerate by relative to
 *     reference time.
 * 
 *   JS: Cast Time:
 *   - JavaScript code to determine how much cast time is used for skills/items
 *     with negative speed modifiers.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Interrupt Settings
 * ============================================================================
 *
 * Interrupt settings used for Battle System ATB.
 *
 * ---
 *
 * Interrupt
 * 
 *   Animation ID:
 *   - Play this animation when a unit is interrupted.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mirror Animation:
 *     - Mirror the interrupt animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mute Animation:
 *     - Mute the interrupt animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *   Text Popup:
 *   - Text used for popup when interrupts happen.
 *   - Leave empty for no popup.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *     Flash Color:
 *     - Adjust the popup's flash color.
 *     - Format: [red, green, blue, alpha]
 * 
 *     Flash Duration:
 *     - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Gauge Settings
 * ============================================================================
 *
 * General gauge settings used for ATB Gauges.
 *
 * ---
 *
 * General
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Where do you want the ATB Gauge sprite's anchor X/Y to be?
 *   - Use values between 0 and 1 to be safe.
 * 
 *   Scale:
 *   - How large/small do you want the ATB Gauge to be scaled?
 * 
 *   Offset X:
 *   Offset Y:
 *   - How many pixels to offset the ATB Gauge's X/Y by?
 *
 * ---
 *
 * AGI Gauge Rates
 * 
 *   Slow Rate:
 *   - How much should the AGI rate be at to be considered slow?
 * 
 *   Fast Rate:
 *   - How much should the AGI rate be at to be considered fast?
 *
 * ---
 *
 * Actors
 * 
 *   Show Sprite Gauges:
 *   - Show ATB Gauges over the actor sprites' heads?
 *   - Requires SV Actors to be visible.
 * 
 *   Show Status Gauges:
 *   - Show ATB Gauges in the status window?
 *   - Applies only to sideview.
 *
 * ---
 *
 * Enemies
 * 
 *   Show Sprite Gauges:
 *   - Show ATB Gauges over the enemy sprites' heads?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Field Gauge Settings
 * ============================================================================
 * 
 * The ATB Field Gauge is a large gauge placed on the screen with all of the
 * current battle's active participants shown on it. The participants are
 * represented by a marker. Each marker's position on the gauge indicates its
 * battler's ATB progress towards a turn.
 * 
 * In order for this feature to work, enable "Use Field Gauge?" in the
 * Plugin Parameters.
 *
 * ---
 *
 * General
 * 
 *   Use Field Gauge?:
 *   - This value must be set to true in order for the ATB Field Gauge
 *     to appear.
 *   - This needs to be on in order for this feature to work.
 * 
 *   Display Position:
 *   - Select where the Field Gauge will appear on the screen.
 *   - Top
 *   - Bottom
 *   - Left
 *   - Right
 * 
 *   Offset X:
 *   Offset Y:
 *   - How much to offset the X/Y coordinates by.
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the gauge when the
 *     help window is open?
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Field Gauge.
 *   - Settings may vary depending on position.
 *   - Left to Right
 *   - Right to Left
 *   - Up to Down
 *   - Down to Up
 *
 * ---
 *
 * Field Gauge Settings
 * 
 *   Gauge Skin:
 *   - Optional. Select an image to place behind the gauge.
 *   - This will be centered on the Field Gauge's position.
 * 
 *   Show Gauge?:
 *   - Decide if you want the gauge to be shown.
 * 
 *   Horizontal Length:
 *   - The length of the Field Gauge if placed horizontally.
 * 
 *   Vertical Length:
 *   - The length of the Field Gauge if placed vertically.
 * 
 *   Thickness:
 *   - The thickness of the Field Gauge for either direction.
 * 
 *   Split Location:
 *   - Determine where the gauge should split.
 *   - Use 0.00 for the start. Use 1.00 for the end.
 *
 * ---
 *
 * Marker Sprites
 * 
 *   Actor Marker Side:
 *   - Which side do you want the actor markers to appear?
 * 
 *   Enemy Marker Side:
 *   - Which side do you want the enemy markers to appear?
 * 
 *   Marker Offset:
 *   - How many pixels do you want to offset the markers by?
 * 
 *   Marker Size:
 *   - How pixels wide and tall do you want the markers to be?
 * 
 *   Marker Speed:
 *   - How many pixels maximum can a marker travel in one frame?
 * 
 *   Opacity Rate:
 *   - If a marker has to change opacity, how fast should it change by?
 *
 * ---
 *
 * Marker Border
 * 
 *   Show Border?:
 *   - Show borders for the marker sprites?
 * 
 *   Border Thickness:
 *   - How many pixels thick should the colored portion of the border be?
 * 
 *   Actors
 *   Enemies
 * 
 *     Border Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 *
 * ---
 *
 * Marker Sprites
 * 
 *   Actors
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the actor graphic.
 *     - Face Graphic - Show the actor's face.
 *     - Icon - Show a specified icon.
 *     - Sideview Actor - Show the actor's sideview battler.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for actors by default?
 * 
 *   Enemies
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the enemy graphic.
 *     - Face Graphic - Show a specified face graphic.
 *     - Icon - Show a specified icon.
 *     - Enemy - Show the enemy's graphic or sideview battler.
 * 
 *     Default Face Name:
 *     - Use this default face graphic if there is no specified face.
 * 
 *     Default Face Index:
 *     - Use this default face index if there is no specified index.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for enemies by default?
 * 
 *     Match Hue?:
 *     - Match the hue for enemy battlers?
 *     - Does not apply if there's a sideview battler.
 *
 * ---
 *
 * Marker Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the marker sprite?
 * 
 *   Font Name:
 *   - The font name used for the text of the Letter.
 *   - Leave empty to use the default game's font.
 * 
 *   Font Size:
 *   - The font size used for the text of the Letter.
 *
 * ---
 *
 * Marker Background
 * 
 *   Show Background?:
 *   - Show the background on the marker sprite?
 * 
 *   Actors
 *   Enemies
 * 
 *     Background Color 1:
 *     Background Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
 *
 * ---
 *
 * Marker Arrow
 * 
 *   Show Arrow?:
 *   - Show the arrow sprite pointing towards the Field Gauge?
 * 
 *   Arrow Skin:
 *   - Pick a window skin to draw arrows from.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gauge Color Settings
 * ============================================================================
 *
 * Gauge color settings used for ATB Gauges.
 *
 * ---
 *
 * Colors
 * 
 *   Default Color 1:
 *   Default Color 2:
 *   Full Color 1:
 *   Full Color 2:
 *   Cast Color 1:
 *   Cast Color 2:
 *   Fast Color 1:
 *   Fast Color 2:
 *   Slow Color 1:
 *   Slow Color 2:
 *   Stop Color 1:
 *   Stop Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * Options settings used for Battle System ATB.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Show ATB Gauges' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
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
 * Version 1.28: June 15, 2023
 * * Bug Fixes!
 * ** Crash should no longer occur for the end of ATB actions. Fix made
 *    by Olivia.
 * 
 * Version 1.27: May 18, 2023
 * * Bug Fixes!
 * ** Enemies no longer soft-lock themselves if they get stunned via a counter
 *    attack with an attack-state that applies stun. Fix made by Olivia.
 * 
 * Version 1.26: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused a clash when loaded together with certain
 *    combinations of plugins. Fix made by Olivia.
 * 
 * Version 1.25: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented initial ATB Gauge settings and features from
 *    working properly. Fix made by Irina.
 * 
 * Version 1.24: December 15, 2022
 * * Bug Fixes!
 * ** The Battle Core's <JS Pre-Start Turn> and <JS Post-Start Turn> notetags
 *    were previously disabled by this plugin. They should now be working again
 *    without problems. Fix made by Olivia.
 * 
 * Version 1.23: November 10, 2022
 * * Bug Fixes!
 * ** ATB Gauges will now display for ANIMATED sideview enemies depending on
 *    the Show Enemy Gauge setting. Fix made by Olivia.
 * 
 * Version 1.22: September 29, 2022
 * * Bug Fixes!
 * ** After enemies recover from a stun, enemies no longer take an immediate
 *    action regardless of their time gauge state. Fix made by Olivia.
 * 
 * Version 1.21: August 25, 2022
 * * Bug Fixes!
 * ** Restricted enemies will no longer be action-locked after removing the
 *    restriction state. Fix made by Olivia.
 * 
 * Version 1.20: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the ATB Field Gauge faces and icons to not change
 *    properly for actors and enemies. Fix made by Olivia.
 * 
 * Version 1.19: July 21, 2022
 * * Bug Fixes!
 * ** Battlers under a "Cannot Move" state will no longer reset their ATB gauge
 *    after their "turn" comes up to update it. Fix made by Olivia.
 * 
 * Version 1.18: June 2, 2022
 * * Bug Fixes!
 * ** Notetag effect for <ATB After Gauge: x%> should now be working properly.
 *    Fix made by Olivia.
 * ** Notetag effect for <JS ATB After Gauge> should now be working properly.
 *    Fix made by Olivia.
 * 
 * Version 1.17: February 17, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.16: August 13, 2021
 * * Bug Fixes!
 * ** Crash prevented with certain Plugin Parameter combinations enabled when
 *    the ATB Gauge is filled up. Fix made by Irina.
 * 
 * Version 1.15: July 23, 2021
 * * Bug Fixes!
 * ** When enemies appear out from a troop event, Visual ATB Gauges above their
 *    heads should now appear properly for SV Enemies, too. Fix made by Irina.
 * 
 * Version 1.14: July 16, 2021
 * * Bug Fixes!
 * ** When enemies appear out from a troop event, Visual ATB Gauges above their
 *    heads should now appear properly. Fix made by Olivia.
 * 
 * Version 1.13: May 21, 2021
 * * Bug Fixes!
 * ** When slip damage is allowed to kill, dying actors will have their TPB
 *    state reset to charging in order to prevent lock-ups. Fix by Olivia.
 * 
 * Version 1.12: May 7, 2021
 * * Feature Update!
 * ** Actions with 0 or positive speed will now act immediately without
 *    allowing a single gauge tick pass through. Update made by Olivia.
 * 
 * Version 1.11: April 16, 2021
 * * Bug Fixes!
 * ** ATB Gauge visibility is now properly updated across various events such
 *    as party removal and other obstruction effects. Fix made by Olivia.
 * 
 * Version 1.10: March 12, 2021
 * * Hot Fix!
 * ** Fixed calculation errors due to field gauge. Fix made by Olivia.
 * * Feature Update!
 * ** Slight change to the way calculations are made for the bottom aligned
 *    field gauge position. Update made by Olivia.
 * 
 * Version 1.09: January 1, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.08: November 22, 2020
 * * Feature Update!
 * ** ATB Interrupts will not clear all actions (including queued ones) for
 *    mechanical compatibility. Change made by Yanfly.
 * 
 * Version 1.07: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: November 1, 2020
 * * Documentation Update!
 * ** Help file updated with new features.
 * * New Features!
 * ** New Plugin Command by Irina!
 * *** Actor: Change Field Gauge Face
 * **** Changes the faces used for the specific actor(s) on the ATB
 *      Field Gauge.
 * 
 * Version 1.05: October 25, 2020
 * * Bug Fixes!
 * ** Plugin should now be compatible with older saves when changing to a save
 *    that didn't use a Field Gauge to one that does. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated with new features.
 * * Feature Update!
 * ** <ATB Field Gauge Face: filename, index> notetag now works with actors.
 *    Update made by Irina.
 *
 * Version 1.04: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.03: October 11, 2020
 * * Documentation Update
 * ** Help file updated with new features.
 * * Feature Update!
 * ** Enemy letters are no longer drawn on the Field Gauge unless there are
 *    multiple enemies of the same type. Added by Arisu.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and Yanfly.
 * *** Plugin Parameters > Field Gauge > Offset X and Y
 * **** How much to offset the X/Y coordinates of the Field Gauge by.
 * 
 * Version 1.02: October 4, 2020
 * * New Features!
 * ** New Plugin Command added "System: ATB Field Gauge Visibility" to let you
 *    show or hide the Field Gauge during battle. Added by Arisu.
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** ATB Cast and Charge notetags no longer cause crashes. Fix made by Olivia.
 * * New Features!
 * ** New plugin parameter added by Olivia.
 * *** Plugin Parameters > Mechanics > Stuns Reset Gauge?
 * **** Should stuns reset the ATB Gauge?
 *
 * Version 1.00: September 21, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeActorIcon
 * @text Actor: Change Field Gauge Icon
 * @desc Changes the icons used for the specific actor(s) on the ATB Field Gauge.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 84
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeActorFace
 * @text Actor: Change Field Gauge Face
 * @desc Changes the faces used for the specific actor(s) on the ATB Field Gauge.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeClearActorGraphic
 * @text Actor: Clear Field Gauge Graphic
 * @desc Clears the ATB Field Gauge graphics for the actor(s).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeEnemyIcon
 * @text Enemy: Change Field Gauge Icon
 * @desc Changes the icons used for the specific enemy(ies) on the ATB Field Gauge.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 298
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeEnemyFace
 * @text Enemy: Change Field Gauge Face
 * @desc Changes the faces used for the specific enemy(ies) on the ATB Field Gauge.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Monster
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeClearEnemyGraphic
 * @text Enemy: Clear Field Gauge Graphic
 * @desc Clears the ATB Field Gauge graphics for the enemy(ies).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemFieldGaugeVisibility
 * @text System: ATB Field Gauge Visibility
 * @desc Determine the visibility of the ATB Field Gauge.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the ATB Field Gauge.
 * @default true
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
 * @param BattleSystemATB
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
 * @desc Mechanics settings used for Battle System ATB.
 * @default {"General":"","EscapeFailPenalty:num":"-1.00","StunsResetGauge:eval":"false","JavaScript":"","InitialGaugeJS:str":"Math.random() * 0.5","TpbSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\n\\n// Process Calculation\\nlet speed = Math.sqrt(user.agi) + 1;\\n\\n// Return Value\\nreturn speed;\"","TpbBaseSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\nconst baseAgility = user.paramBasePlus(6);\\n\\n// Process Calculation\\nlet speed = Math.sqrt(baseAgility) + 1;\\n\\n// Return Value\\nreturn speed;\"","BattlerRelativeSpeedJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbSpeed()\\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\\n\\n// Process Calculation\\nlet relativeSpeed = speed / partyBaseSpeed;\\n\\n// Return Value\\nreturn relativeSpeed;\"","TpbAccelerationJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbRelativeSpeed();\\nconst referenceTime = $gameParty.tpbReferenceTime();\\n\\n// Process Calculation\\nlet acceleration = speed / referenceTime;\\n\\n// Return Value\\nreturn acceleration;\"","TpbCastTimeJS:func":"\"// Declare Constants\\nconst user = this;\\nconst actions = user._actions.filter(action => action.isValid());\\nconst items = actions.map(action => action.item());\\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\\n\\n// Process Calculation\\nlet time = Math.sqrt(delay) / user.tpbSpeed();\\n\\n// Return Value\\nreturn time;\""}
 *
 * @param Interrupt:struct
 * @text Interrupt Settings
 * @type struct<Interrupt>
 * @desc Interrupt settings used for Battle System ATB.
 * @default {"Interrupt":"","InterruptAnimationID:num":"11","InterruptMirror:eval":"false","InterruptMute:eval":"false","InterruptText:str":"INTERRUPTED!","InterruptTextColor:str":"0","InterruptFlashColor:eval":"[255, 0, 0, 160]","InterruptFlashDuration:num":"60"}
 *
 * @param Gauge:struct
 * @text General Gauge Settings
 * @type struct<Gauge>
 * @desc General gauge settings used for ATB Gauges.
 * @default {"General":"","AnchorX:num":"0.5","AnchorY:num":"1.0","Scale:num":"0.5","OffsetX:num":"0","OffsetY:num":"2","AGIGaugeRates":"","SlowRate:num":"0.60","FastRate:num":"1.40","Actors":"","ShowActorGauge:eval":"true","ShowStatusGauge:eval":"false","Enemies":"","ShowEnemyGauge:eval":"true"}
 *
 * @param FieldGauge:struct
 * @text Field Gauge Settings
 * @type struct<FieldGauge>
 * @desc Make a field-wide ATB gauge for all the battlers.
 * @default {"General":"","UseFieldGauge:eval":"false","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","RepositionTopForHelp:eval":"true","GaugeDirection:eval":"true","Gauge":"","GaugeSystemSkin:str":"","DrawGauge:eval":"true","GaugeLengthHorz:num":"600","GaugeLengthVert:num":"400","GaugeThick:num":"16","GaugeSplit:num":"0.70","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"48","Markers":"","ActorSide:eval":"true","EnemySide:eval":"false","MarkerOffset:num":"28","MarkerSize:num":"32","MarkerSpeed:num":"36","OpacityRate:num":"4","BorderThickness:num":"2","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","ActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","EnemySystemBorder:str":"","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"1","ActorBgColor2:str":"9","ActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"10","EnemyBgColor2:str":"18","EnemySystemBg:str":"","Arrow":"","ShowMarkerArrow:eval":"true","MarkerArrowWindowSkin:str":"Window"}
 *
 * @param Color:struct
 * @text Gauge Color Settings
 * @type struct<Color>
 * @desc Gauge color settings used for ATB Gauges.
 * @default {"default1:str":"26","default2:str":"27","full1:str":"14","full2:str":"6","cast1:str":"2","cast2:str":"10","fast1:str":"27","fast2:str":"18","slow1:str":"22","slow2:str":"23","stop1:str":"7","stop2:str":"8"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options settings used for Battle System ATB.
 * @default {"Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Show ATB Gauges"}
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
 * @param General
 * 
 * @param EscapeFailPenalty:num
 * @text Escape Fail Penalty
 * @parent General
 * @desc Gauge penalty if an escape attempt fails.
 * @default -1.00
 *
 * @param StunsResetGauge:eval
 * @text Stuns Reset Gauge?
 * @parent General
 * @type boolean
 * @on Reset Gauge
 * @off Don't Reset
 * @desc Should stuns reset the ATB Gauge?
 * @default false
 *
 * @param JavaScript
 *
 * @param InitialGaugeJS:str
 * @text JS: Initial Gauge
 * @parent JavaScript
 * @desc JavaScript code to determine how much ATB gauge to give
 * each battler at the start of battle.
 * @default Math.random() * 0.5
 *
 * @param TpbSpeedCalcJS:func
 * @text JS: Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much speed a battler has.
 * @default "// Declare Constants\nconst user = this;\n\n// Process Calculation\nlet speed = Math.sqrt(user.agi) + 1;\n\n// Return Value\nreturn speed;"
 * 
 * @param TpbBaseSpeedCalcJS:func
 * @text JS: Base Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much base speed a battler has.
 * @default "// Declare Constants\nconst user = this;\nconst baseAgility = user.paramBasePlus(6);\n\n// Process Calculation\nlet speed = Math.sqrt(baseAgility) + 1;\n\n// Return Value\nreturn speed;"
 * 
 * @param BattlerRelativeSpeedJS:func
 * @text JS: Relative Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine what is the relative speed of a battler.
 * @default "// Declare Constants\nconst user = this;\nconst speed = user.tpbSpeed()\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\n\n// Process Calculation\nlet relativeSpeed = speed / partyBaseSpeed;\n\n// Return Value\nreturn relativeSpeed;"
 * 
 * @param TpbAccelerationJS:func
 * @text JS: Acceleration
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much gauges accelerate by relative to reference time.
 * @default "// Declare Constants\nconst user = this;\nconst speed = user.tpbRelativeSpeed();\nconst referenceTime = $gameParty.tpbReferenceTime();\n\n// Process Calculation\nlet acceleration = speed / referenceTime;\n\n// Return Value\nreturn acceleration;"
 * 
 * @param TpbCastTimeJS:func
 * @text JS: Cast Time
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much cast time is used for skills/items with negative speed modifiers.
 * @default "// Declare Constants\nconst user = this;\nconst actions = user._actions.filter(action => action.isValid());\nconst items = actions.map(action => action.item());\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\n\n// Process Calculation\nlet time = Math.sqrt(delay) / user.tpbSpeed();\n\n// Return Value\nreturn time;"
 * 
 */
/* ----------------------------------------------------------------------------
 * Interrupt Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Interrupt:
 *
 * @param Interrupt
 *
 * @param InterruptAnimationID:num
 * @text Animation ID
 * @parent Interrupt
 * @type animation
 * @desc Play this animation when a unit is interrupted.
 * Requires VisuMZ_0_CoreEngine.
 * @default 11
 *
 * @param InterruptMirror:eval
 * @text Mirror Animation
 * @parent InterruptAnimationID:num
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the interrupt animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param InterruptMute:eval
 * @text Mute Animation
 * @parent InterruptAnimationID:num
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the interrupt animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param InterruptText:str
 * @text Text Popup
 * @parent Interrupt
 * @desc Text used for popup when interrupts happen.
 * Leave empty for no popup.
 * @default INTERRUPTED!
 *
 * @param InterruptTextColor:str
 * @text Text Color
 * @parent InterruptText:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param InterruptFlashColor:eval
 * @text Flash Color
 * @parent InterruptText:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param InterruptFlashDuration:num
 * @text Flash Duration
 * @parent InterruptText:str
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gauge:
 *
 * @param General
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent General
 * @desc Where do you want the ATB Gauge sprite's anchor X to be?
 * Use values between 0 and 1 to be safe.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent General
 * @desc Where do you want the ATB Gauge sprite's anchor Y to be?
 * Use values between 0 and 1 to be safe.
 * @default 1.0
 *
 * @param Scale:num
 * @text Scale
 * @parent General
 * @desc How large/small do you want the ATB Gauge to be scaled?
 * @default 0.5
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent General
 * @desc How many pixels to offset the ATB Gauge's X by?
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent General
 * @desc How many pixels to offset the ATB Gauge's Y by?
 * @default 2
 *
 * @param AGIGaugeRates
 * @text AGI Gauge Rates
 *
 * @param SlowRate:num
 * @text Slow Rate
 * @parent AGIGaugeRates
 * @desc How much should the AGI rate be at to be considered slow?
 * @default 0.60
 *
 * @param FastRate:num
 * @text Fast Rate
 * @parent AGIGaugeRates
 * @desc How much should the AGI rate be at to be considered fast?
 * @default 1.40
 *
 * @param Actors
 *
 * @param ShowActorGauge:eval
 * @text Show Sprite Gauges
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges over the actor sprites' heads?
 * Requires SV Actors to be visible.
 * @default true
 *
 * @param ShowStatusGauge:eval
 * @text Show Status Gauges
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges in the status window?
 * Applies only to sideview.
 * @default false
 *
 * @param Enemies
 *
 * @param ShowEnemyGauge:eval
 * @text Show Sprite Gauges
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges over the enemy sprites' heads?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param default1:str
 * @text Default Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param default2:str
 * @text Default Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param full1:str
 * @text Full Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param full2:str
 * @text Full Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param cast1:str
 * @text Cast Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param cast2:str
 * @text Cast Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 10
 *
 * @param fast1:str
 * @text Fast Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param fast2:str
 * @text Fast Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param slow1:str
 * @text Slow Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param slow2:str
 * @text Slow Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param stop1:str
 * @text Stop Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param stop2:str
 * @text Stop Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 8
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show ATB Gauges' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show ATB Gauges
 *
 */
/* ----------------------------------------------------------------------------
 * Field Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FieldGauge:
 *
 * @param General
 *
 * @param UseFieldGauge:eval
 * @text Use Field Gauge?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc This value must be set to true in order for the ATB Field Gauge to appear.
 * @default false
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @option left
 * @option right
 * @desc Select where the Field Gauge will appear on the screen.
 * @default top
 * 
 * @param DisplayOffsetX:num
 * @text Offset X
 * @parent DisplayPosition:str
 * @desc How much to offset the X coordinate by.
 * Negative: left. Positive: right.
 * @default 0
 * 
 * @param DisplayOffsetY:num
 * @text Offset Y
 * @parent DisplayPosition:str
 * @desc How much to offset the Y coordinate by.
 * Negative: up. Positive: down.
 * @default 0
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * gauge when the help window is open?
 * @default true
 *
 * @param GaugeDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right / Up to Down
 * @off Right to Left / Down to Up
 * @desc Decide on the direction of the Field Gauge.
 * Settings may vary depending on position.
 * @default true
 *
 * @param Gauge
 * @text Field Gauge Settings
 *
 * @param GaugeSystemSkin:str
 * @text Gauge Skin
 * @parent Gauge
 * @type file
 * @dir img/system/
 * @desc Optional. Select an image to place behind the gauge.
 * This will be centered on the Field Gauge's position.
 * @default 
 *
 * @param DrawGauge:eval
 * @text Show Gauge?
 * @parent Gauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Decide if you want the gauge to be shown.
 * @default true
 *
 * @param GaugeLengthHorz:num
 * @text Horizontal Length
 * @parent Gauge
 * @type number
 * @min 10
 * @desc The length of the Field Gauge if placed horizontally.
 * @default 600
 *
 * @param GaugeLengthVert:num
 * @text Vertical Length
 * @parent Gauge
 * @type number
 * @min 10
 * @desc The length of the Field Gauge if placed vertically.
 * @default 400
 *
 * @param GaugeThick:num
 * @text Thickness
 * @parent Gauge
 * @type number
 * @min 3
 * @desc The thickness of the Field Gauge for either direction.
 * @default 16
 *
 * @param GaugeSplit:num
 * @text Split Location
 * @parent Gauge
 * @desc Determine where the gauge should split.
 * Use 0.00 for the start. Use 1.00 for the end.
 * @default 0.70
 * 
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the gauge's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the gauge's Y coordinates by this much when
 * the Help Window is visible.
 * @default 48
 *
 * @param Markers
 * @text Marker Sprites
 *
 * @param ActorSide:eval
 * @text Actor Marker Side
 * @parent Markers
 * @type boolean
 * @on Top / Right
 * @off Bottom / Left
 * @desc Which side do you want the actor markers to appear?
 * @default true
 *
 * @param EnemySide:eval
 * @text Enemy Marker Side
 * @parent Markers
 * @type boolean
 * @on Top / Right
 * @off Bottom / Left
 * @desc Which side do you want the enemy markers to appear?
 * @default false
 *
 * @param MarkerOffset:num
 * @text Marker Offset
 * @parent Markers
 * @desc How many pixels do you want to offset the markers by?
 * @default 28
 *
 * @param MarkerSize:num
 * @text Marker Size
 * @parent Markers
 * @type number
 * @min 10
 * @desc How pixels wide and tall do you want the markers to be?
 * @default 32
 *
 * @param MarkerSpeed:num
 * @text Marker Speed
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels maximum can a marker travel in one frame?
 * @default 36
 *
 * @param OpacityRate:num
 * @text Opacity Rate
 * @parent Markers
 * @type number
 * @min 1
 * @desc If a marker has to change opacity, how fast should it change by?
 * @default 4
 *
 * @param Border
 * @text Marker Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the marker sprites?
 * @default true
 *
 * @param BorderThickness:num
 * @text Border Thickness
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels thick should the colored portion of the border be?
 * @default 2
 *
 * @param BorderActor
 * @text Actors
 * @parent Border
 *
 * @param ActorBorderColor:str
 * @text Border Color
 * @parent BorderActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param BorderEnemy
 * @text Enemies
 * @parent Border
 *
 * @param EnemyBorderColor:str
 * @text Border Color
 * @parent BorderEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param Sprite
 * @text Marker Sprites
 *
 * @param ActorSprite
 * @text Actors
 * @parent Sprite
 *
 * @param ActorBattlerType:str
 * @text Sprite Type
 * @parent ActorSprite
 * @type select
 * @option Face Graphic - Show the actor's face.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Sideview Actor - Show the actor's sideview battler.
 * @value svactor
 * @desc Select the type of sprite used for the actor graphic.
 * @default face
 *
 * @param ActorBattlerIcon:num
 * @text Default Icon
 * @parent ActorSprite
 * @desc Which icon do you want to use for actors by default?
 * @default 84
 *
 * @param EnemySprite
 * @text Enemies
 * @parent Sprite
 *
 * @param EnemyBattlerType:str
 * @text Sprite Type
 * @parent EnemySprite
 * @type select
 * @option Face Graphic - Show a specified face graphic.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Enemy - Show the enemy's graphic or sideview battler.
 * @value enemy
 * @desc Select the type of sprite used for the enemy graphic.
 * @default enemy
 *
 * @param EnemyBattlerFaceName:str
 * @text Default Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc Use this default face graphic if there is no specified face.
 * @default Monster
 *
 * @param EnemyBattlerFaceIndex:num
 * @text Default Face Index
 * @parent EnemySprite
 * @type number
 * @desc Use this default face index if there is no specified index.
 * @default 1
 *
 * @param EnemyBattlerIcon:num
 * @text Default Icon
 * @parent EnemySprite
 * @desc Which icon do you want to use for enemies by default?
 * @default 298
 *
 * @param EnemyBattlerMatchHue:eval
 * @text Match Hue?
 * @parent EnemySprite
 * @type boolean
 * @on Match
 * @off Don't Match
 * @desc Match the hue for enemy battlers?
 * Does not apply if there's a sideview battler.
 * @default true
 *
 * @param Letter
 * @text Marker Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the marker sprite?
 * @default true
 *
 * @param EnemyBattlerFontFace:str
 * @text Font Name
 * @parent Letter
 * @desc The font name used for the text of the Letter.
 * Leave empty to use the default game's font.
 * @default 
 *
 * @param EnemyBattlerFontSize:num
 * @text Font Size
 * @parent Letter
 * @min 1
 * @desc The font size used for the text of the Letter.
 * @default 16
 *
 * @param Background
 * @text Marker Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the marker sprite?
 * @default true
 *
 * @param BackgroundActor
 * @text Actors
 * @parent Background
 *
 * @param ActorBgColor1:str
 * @text Background Color 1
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 1
 *
 * @param ActorBgColor2:str
 * @text Background Color 2
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 9
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param BackgroundEnemy
 * @text Enemies
 * @parent Background
 *
 * @param EnemyBgColor1:str
 * @text Background Color 1
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 10
 *
 * @param EnemyBgColor2:str
 * @text Background Color 2
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 * @param Arrow
 * @text Marker Arrow
 *
 * @param ShowMarkerArrow:eval
 * @text Show Arrow?
 * @parent Arrow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the arrow sprite pointing towards the Field Gauge?
 * @default true
 *
 * @param MarkerArrowWindowSkin:str
 * @text Arrow Skin
 * @parent Arrow
 * @type file
 * @dir img/system/
 * @desc Pick a window skin to draw arrows from.
 * @default Window
 *
 */
//=============================================================================

function _0x15c8(){const _0x459efd=['_arrowSprite','createActorSprites','%1Side','ncjxq','TpbAccelerationJS','InterruptAnimationID','createKeyJS','create','setActionState','createFieldGaugeSpriteATB','createGraphicSprite','boxHeight','_atbGaugeSprite','applyItemBattleSystemATBUserEffect','includes','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_fieldAtbGaugeGraphicType','UKDbs','ActorBattlerType','addChildAt','tpbSpeed','MOvSl','Scene_Battle_createAllWindows','setupArrowSprite','traitObjects','length','JSON','fontSize','(?:GAUGE|TIME|SPEED)','trim','DrawGauge','aqupe','mBzTR','ShowActorGauge','isActiveTpb','battlerName','processUpdateGraphic','updateAtbGaugeSpritePosition','%1SystemBorder','updateBattleContainerOrder','placeGauge','Actor-%1-%2','_graphicHue','isRestricted','top','_statusType','isSideView','addChild','Game_System_initialize','Sprite_Actor_createStateSprite','dyccE','SAmNt','SQMPp','WjUKr','WFgeN','atbCurrentValue','Sprite_Enemy_createStateIconSprite','NOoJF','JlDHT','EnemyBattlerFaceName','process_VisuMZ_BattleSystemATB_CreateRegExp','onAtbInterrupt','Game_Battler_tpbBaseSpeed','Game_Actor_clearActions','atbCurrentMaxValue','_windowskin','clamp','_tpbState','tpbBaseSpeed','createFieldAtbGraphicFaceIndex','createEnemySprites','ubHZc','Window_Options_addGeneralOptions','fontFace','bzGgC','setAtbChargeTime','uxBKF','boxWidth','GaDKP','updateSelectionEffect','visualAtbGauge','getChildIndex','time','tZfOr','endBattlerActions','1158476iTqeEC','Charge','GaugeSystemSkin','cast','updatePositionOnGauge','_homeX','createStateSprite','Scene_Options_maxCommands','Sprite_Gauge_gaugeColor1','Sprite_Gauge_currentValue','FieldGauge','battlerHue','isBattleSystemATBFieldGaugeVisible','Game_Battler_applyTpbPenalty','ParseItemNotetags','createJS','BattlerRelativeSpeedJS','makeData','isTpbCharged','_atbFieldGaugeVisible','oLxAu','EnemyBattlerIcon','Game_Action_applyItemUserEffect','_fieldAtbGaugeFaceIndex','some','bitmap','GaugeLengthHorz','Actors','icon','width','tpbRequiredCastTime','createStateIconSprite','_svBattlerSprite','svActorHorzCells','isSceneBattle','changeIconGraphicBitmap','applyBattleSystemATBUserEffect','PxCvR','BcVgE','_graphicType','Oktfd','Mechanics','MarkerSpeed','height','_graphicFaceName','Sprite_Gauge_currentMaxValue','Gauge','die','currentValue','updateMain','FaceName','FieldGaugeEnemyFace','BorderThickness','TpbSpeedCalcJS','blt','Game_Battler_initTpbChargeTime','updateGraphic','_horz','createFieldGaugeSkin','map','_fieldGaugeATB','Game_Action_applyGlobal','StunsResetGauge','max','applyItemUserEffect','createFieldAtbGraphicFaceName','format','updateLetter','slow','svBattlerName','PostStartTurnJS','DisplayOffsetX','faceHeight','ctGaugeColor2','createFieldAtbGraphicType','wTmYA','STRUCT','lineHeight','AnchorY','fieldAtbGraphicFaceName','_tpbTurnCount','EnemyBattlerFontSize','VisuMZ_0_CoreEngine','full','#%1','filter','parameters','_onRestrictBypassAtbReset','_atbColors','startTpbTurn','onDatabaseLoaded','QKfMn','yrpnd','%1SystemBg','PreStartTurnJS','ELTTb','update','members','Window_SideviewUiBattleStatus','ssnfK','wrkoR','_fieldAtbGaugeIconIndex','Game_Battler_tpbAcceleration','BattleCore','updateVisibility','getAtbCastTimeRate','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','atbInterrupt','disappear','lRxvm','initTpbChargeTimeATB','InterruptText','changeAtbChargeTime','_backgroundSprite','NZshB','EnemyBattlerFontFace','EyrPR','setAtbCastTime','GaugeSplit','%1BorderColor','RAzXJ','Scale','_graphicIconIndex','FieldGaugeEnemyIcon','fillRect','_fnord','onRestrict','_forcing','63jGuZhk','currentMaxValue','showVisualAtbGauge','SystemFieldGaugeVisibility','Game_BattlerBase_appear','textColor','undecided','Game_Battler_onRestrict','_battlerContainer','call','HvcEC','default%1','numActions','_graphicFaceIndex','charging','setBattleSystemATBFieldGaugeVisible','_fieldAtbGaugeFaceName','XlOYL','BattleSystemATB','isActor','ShowMarkerBg','Window_StatusBase_placeGauge','Cast','faceWidth','applyData','TpbBaseSpeedCalcJS','initialize','_plural','initMembers','Enemies','bottom','Sprite_Battler_update','currentAction','Scene_Boot_onDatabaseLoaded','Weapon-%1-%2','updatePosition','revive','kypax','TVLBF','KlIMA','tpbRelativeSpeed','ConfigManager_applyData','VisibleGauge','atbGaugeColor','tpbChargeTime','applyGlobal','pEQGn','changeFaceGraphicBitmap','ItZad','ColorManager_loadWindowskin','cLmqv','%1BgColor1','right','targetPositionOnGauge','Armor-%1-%2','ShowMarkerArrow','tpbAcceleration','Options','startEffect','note','isGaugeHorizontal','bind','pLdSR','_index','SyqII','removeChild','createBattlerSprite','maxBattleMembers','setBattler','OffsetX','battler','atbAcceleration','left','Sghha','face','Window_BattleStatus','exit','ARRAYSTRUCT','applyTpbPenalty','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','DisplayPosition','Enemy-%1-%2','clearFieldAtbGraphics','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20keyType\x20=\x20\x27%2\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20rate\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(keyType\x20===\x20\x27Charge\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbChargeTime;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(keyType\x20===\x20\x27Cast\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbCastTime\x20/\x20Math.max(target.tpbRequiredCastTime(),\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20originalValue\x20=\x20rate;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20NaN\x20Check\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(isNaN(rate)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27NaN\x20rate\x20created\x20by\x20%2\x27.format(\x27\x27,obj.name));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27Restoring\x20rate\x20to\x20%2\x27.format(\x27\x27,originalValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20originalValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rate;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','updatePositionOffset','ParseAllNotetags','maxCommands','WXtSz','BattleManager_endBattlerActions','Window_Help_setItem','createGaugeBitmap','round','FieldGaugeClearEnemyGraphic','ctGaugeColor1','17819747mtYyRi','battleMembers','createFieldAtbGraphicIconIndex','clearActions','VEuSg','makeDeepCopy','status','State-%1-%2','NaVaV','Class-%1-%2','370680sPeONM','InterruptFlashDuration','gaugeBackColor','svactor','_needsAtbClear','mainSprite','createBattlerContainer','ARRAYEVAL','ARRAYJSON','_helpWindow','giIUe','GaugeLengthVert','DisplayOffsetY','AggroControlSystem','createChildren','Game_Battler_removeState','Color','UseFieldGauge','addBattleSystemATBCommands','KQzoP','vptCd','Sprite_Enemy_startEffect','processBattleCoreJS','Sprite_Battler_updateMain','registerCommand','atbActive','svActorVertCells','battleUIOffsetY','isATB','createBattlerSprites','atbStopped','isEnemy','UHHSv','fast','_graphicSprite','AHBJc','4670OimGYE','compareBattlerSprites','_fieldGaugeATB_Container','paramBuffRate','initTpbChargeTime','YxVbs','Settings','JudWE','canMakeTpbActionsAtStartTpbTurn','#000000','AnchorX','isAtbChargingState','ready','updateAtbGaugeSpriteVisibility','createFieldGaugeContainerATB','EVAL','match','HlWFy','floor','UklOG','_graphicEnemy','requestFauxAnimation','_skinSprite','BBwXa','opacity','165122aDQitS','MarkerArrowWindowSkin','updateGraphicHue','Game_BattlerBase_revive','ShowMarkerBorder','pEAUY','initBattleSystemATB','InterruptFlashColor','stop','sPqOQ','GaugeThick','ConfigManager_makeData','clearRect','changeSvActorGraphicBitmap','Game_Battler_tpbRequiredCastTime','3899908pbDsPw','isStateAffected','addGeneralOptions','bceKZ','isShowAtbGauge','item','BaAjq','Enemy','_letterSprite','EnemyBattlerDrawLetter','Name','ARRAYSTR','speed','Item-%1-%2','GaugeDirection','buxfG','2318632PnXoJn','subject','fieldAtbGraphicType','fieldAtbGraphicFaceIndex','changeEnemyGraphicBitmap','RegExp','setupAtbGaugeSprite','sBhrb','loadSystem','cast1','Sprite_Battler_setBattler','reduce','AdjustRect','VisuMZ_1_BattleCore','InitialGaugeJS','actor','setFrame','drawGaugeBitmap','description','rvJHy','visible','hasSvBattler','ceil','loadWindowskin','Game_Unit_updateTpb','enemy','makeActions','setHue','FastRate','gaugeColor2','HOPyW','atbSpeed','Interrupt','_graphicSv','createBackgroundSprite','default','gaugeColor1','DVlju','createAtbGaugeSprite','nZgiV','%1BgColor2','_tpbCastTime','TOtAW','version','SlowRate','ShowEnemyGauge','cast2','applyATBPenalty','ConvertParams','setHomeLocation','drawText','parse','NpTIQ','dOREd','JivyW','skills','_battler','_tpbChargeTime','7jafaWf','OffsetY','PQpdG','GGkgx','Game_Battler_tpbSpeed','Zefxk','EnemyBattlerType','After','concat','_atbAfterSpeed','setAtbAfterSpeed','_gaugeSprite','RepositionTopHelpY','changeAtbCastTime','Game_BattlerBase_die','_tpbIdleTime','MarkerOffset','KNdnq','kJfxB','addCommand','addLoadListener','setupBattleSystemATBColors','EnemyBattlerFaceIndex','VisuMZ_2_AggroControlSystem','uAdQG','NUM','Actor','battleUIOffsetX','casting','Game_Battler_clearTpbChargeTime','EhXNg','IconIndex','setAtbGraphicIconIndex','_homeY','setBlendColor','4260yNsIUd','isDead','Game_Battler_startTpbCasting','canMove','faceName','addBattleSystemATBShowGaugeCommand','updateTpb','NUDZo','AddOption','scale','BotSc','TpbCastTimeJS','InterruptTextColor','15licOkr','isHidden','ycDPD','vLVeU','setItem','nLTnU','updateOpacity','isAtbCastingState','loadEnemy','FaceIndex','DKItQ','bLybk','createBorderSprite','targetOpacity','process_VisuMZ_BattleSystemATB_JS_Notetags','<JS\x20%2\x20%1\x20%3>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/JS\x20%2\x20%1\x20%3>','_letter','allBattleMembers','createLetterSprite','startTpbCasting','Game_Battler_tpbRelativeSpeed','cast%1','fieldAtbGraphicIconIndex','min','anchor','setupTextPopup','Sprite_Gauge_gaugeColor2','clearTpbChargeTime','_scene','applyGlobalBattleSystemATBEffects','prototype','_subject','BattleManager_isActiveTpb','appear','getColor','_windowLayer','ParseSkillNotetags','EscapeFailPenalty','LopFV','faceIndex','isAttack','isTpb','createGaugeSprite','_unit','acting','cZUxU','InterruptMirror','createArrowSprite','InterruptMute','MarkerSize','isCTB','gradientFillRect','atbColor','constructor','OpacityRate','toUpperCase','Parse_Notetags_CreateJS','zsQNV','witoJ','makeTpbActions','ANAhG','createAllWindows','children','zQObp','name','QXTnJ'];_0x15c8=function(){return _0x459efd;};return _0x15c8();}const _0xc24814=_0x12ef;(function(_0x51f28a,_0x1cf9ec){const _0x533ab6=_0x12ef,_0x4a7047=_0x51f28a();while(!![]){try{const _0x44ebad=-parseInt(_0x533ab6(0x1d8))/0x1+-parseInt(_0x533ab6(0xb8))/0x2*(-parseInt(_0x533ab6(0x141))/0x3)+-parseInt(_0x533ab6(0xc7))/0x4+parseInt(_0x533ab6(0x9f))/0x5*(parseInt(_0x533ab6(0x134))/0x6)+parseInt(_0x533ab6(0x111))/0x7*(parseInt(_0x533ab6(0xd7))/0x8)+-parseInt(_0x533ab6(0x258))/0x9*(parseInt(_0x533ab6(0x2c0))/0xa)+parseInt(_0x533ab6(0x2b6))/0xb;if(_0x44ebad===_0x1cf9ec)break;else _0x4a7047['push'](_0x4a7047['shift']());}catch(_0x4dd95a){_0x4a7047['push'](_0x4a7047['shift']());}}}(_0x15c8,0x90bb6));var label=_0xc24814(0x26a),tier=tier||0x0,dependencies=[_0xc24814(0xe4)],pluginData=$plugins[_0xc24814(0x22d)](function(_0x2f1e36){const _0x3ad491=_0xc24814;return _0x2f1e36[_0x3ad491(0x2bc)]&&_0x2f1e36['description'][_0x3ad491(0x191)]('['+label+']');})[0x0];VisuMZ[label][_0xc24814(0xa5)]=VisuMZ[label][_0xc24814(0xa5)]||{},VisuMZ[_0xc24814(0x107)]=function(_0x3dbf81,_0xd5e7a8){const _0x5805fb=_0xc24814;for(const _0x302dd0 in _0xd5e7a8){if(_0x5805fb(0x17d)===_0x5805fb(0x1cd))return _0x2ebd69=_0x32b219(_0x465751),_0x3a31b9[_0x5805fb(0xaf)](/#(.*)/i)?_0x5805fb(0x22c)['format'](_0x21c97d(_0x42d3f5['$1'])):this[_0x5805fb(0x25d)](_0x2bdeab(_0x4b678b));else{if(_0x302dd0[_0x5805fb(0xaf)](/(.*):(.*)/i)){if(_0x5805fb(0x2a1)==='Sghha'){const _0x1ccf63=String(RegExp['$1']),_0x22178c=String(RegExp['$2'])['toUpperCase']()[_0x5805fb(0x1a0)]();let _0x2e7342,_0xde9ef9,_0x3f7892;switch(_0x22178c){case _0x5805fb(0x12a):_0x2e7342=_0xd5e7a8[_0x302dd0]!==''?Number(_0xd5e7a8[_0x302dd0]):0x0;break;case'ARRAYNUM':_0xde9ef9=_0xd5e7a8[_0x302dd0]!==''?JSON[_0x5805fb(0x10a)](_0xd5e7a8[_0x302dd0]):[],_0x2e7342=_0xde9ef9[_0x5805fb(0x213)](_0x5310f5=>Number(_0x5310f5));break;case _0x5805fb(0xae):_0x2e7342=_0xd5e7a8[_0x302dd0]!==''?eval(_0xd5e7a8[_0x302dd0]):null;break;case _0x5805fb(0x2c7):_0xde9ef9=_0xd5e7a8[_0x302dd0]!==''?JSON[_0x5805fb(0x10a)](_0xd5e7a8[_0x302dd0]):[],_0x2e7342=_0xde9ef9['map'](_0x5cf6bc=>eval(_0x5cf6bc));break;case _0x5805fb(0x19d):_0x2e7342=_0xd5e7a8[_0x302dd0]!==''?JSON[_0x5805fb(0x10a)](_0xd5e7a8[_0x302dd0]):'';break;case _0x5805fb(0x2c8):_0xde9ef9=_0xd5e7a8[_0x302dd0]!==''?JSON[_0x5805fb(0x10a)](_0xd5e7a8[_0x302dd0]):[],_0x2e7342=_0xde9ef9[_0x5805fb(0x213)](_0x528652=>JSON['parse'](_0x528652));break;case'FUNC':_0x2e7342=_0xd5e7a8[_0x302dd0]!==''?new Function(JSON[_0x5805fb(0x10a)](_0xd5e7a8[_0x302dd0])):new Function('return\x200');break;case'ARRAYFUNC':_0xde9ef9=_0xd5e7a8[_0x302dd0]!==''?JSON['parse'](_0xd5e7a8[_0x302dd0]):[],_0x2e7342=_0xde9ef9[_0x5805fb(0x213)](_0x2f4415=>new Function(JSON[_0x5805fb(0x10a)](_0x2f4415)));break;case'STR':_0x2e7342=_0xd5e7a8[_0x302dd0]!==''?String(_0xd5e7a8[_0x302dd0]):'';break;case _0x5805fb(0xd2):_0xde9ef9=_0xd5e7a8[_0x302dd0]!==''?JSON['parse'](_0xd5e7a8[_0x302dd0]):[],_0x2e7342=_0xde9ef9[_0x5805fb(0x213)](_0x5e2d97=>String(_0x5e2d97));break;case _0x5805fb(0x224):_0x3f7892=_0xd5e7a8[_0x302dd0]!==''?JSON[_0x5805fb(0x10a)](_0xd5e7a8[_0x302dd0]):{},_0x2e7342=VisuMZ[_0x5805fb(0x107)]({},_0x3f7892);break;case _0x5805fb(0x2a5):_0xde9ef9=_0xd5e7a8[_0x302dd0]!==''?JSON['parse'](_0xd5e7a8[_0x302dd0]):[],_0x2e7342=_0xde9ef9[_0x5805fb(0x213)](_0x216377=>VisuMZ[_0x5805fb(0x107)]({},JSON[_0x5805fb(0x10a)](_0x216377)));break;default:continue;}_0x3dbf81[_0x1ccf63]=_0x2e7342;}else this[_0x5805fb(0x91)](_0x5805fb(0x236)),this['_tpbTurnEnd']=![],this[_0x5805fb(0x228)]++,this[_0x5805fb(0x120)]=0x0,this['canMakeTpbActionsAtStartTpbTurn']()&&this[_0x5805fb(0x17c)](),this['processBattleCoreJS'](_0x5805fb(0x21e));}}}return _0x3dbf81;},(_0x4e0803=>{const _0x585e5b=_0xc24814,_0x5968a3=_0x4e0803['name'];for(const _0x5b3f1e of dependencies){if(!Imported[_0x5b3f1e]){alert(_0x585e5b(0x242)[_0x585e5b(0x21a)](_0x5968a3,_0x5b3f1e)),SceneManager[_0x585e5b(0x2a4)]();break;}}const _0x3109f6=_0x4e0803[_0x585e5b(0xe9)];if(_0x3109f6['match'](/\[Version[ ](.*?)\]/i)){if('fgMqz'==='brCZX'){const _0x1e534e=new _0x3f291f(_0x4c9b6a,_0x3e2bd0,this[_0x585e5b(0x11c)]);this['_battlerContainer'][_0x585e5b(0x1b2)](_0x1e534e);}else{const _0x3a7544=Number(RegExp['$1']);if(_0x3a7544!==VisuMZ[label][_0x585e5b(0x102)]){if(_0x585e5b(0x1b7)===_0x585e5b(0x1b7))alert(_0x585e5b(0x2a7)[_0x585e5b(0x21a)](_0x5968a3,_0x3a7544)),SceneManager[_0x585e5b(0x2a4)]();else{const _0x2274af=_0x4893f3[_0x585e5b(0x26a)][_0x585e5b(0x189)](this['item'](),_0x585e5b(0x1d9));if(_0x13619c[_0x585e5b(0x26a)]['JS'][_0x2274af]){const _0x1f912b=_0x32b5c8[_0x585e5b(0x26a)]['JS'][_0x2274af][_0x585e5b(0x261)](this,this[_0x585e5b(0xd8)](),_0xb5eb7d);_0x1cc6d4[_0x585e5b(0x1ce)](_0x1f912b);}_0x1aa931['match'](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0x162fb1[_0x585e5b(0x1ce)](_0x2b7752(_0x518b19['$1'])*0.01),_0x2f6bb1['match'](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x29fed0[_0x585e5b(0x248)](_0x9c00b3(_0x31081f['$1'])*0.01);}}}}if(_0x3109f6['match'](/\[Tier[ ](\d+)\]/i)){const _0x30fbe7=Number(RegExp['$1']);_0x30fbe7<tier?(alert(_0x585e5b(0x192)[_0x585e5b(0x21a)](_0x5968a3,_0x30fbe7,tier)),SceneManager[_0x585e5b(0x2a4)]()):_0x585e5b(0xca)===_0x585e5b(0xca)?tier=Math['max'](_0x30fbe7,tier):_0x76647c[_0x585e5b(0x97)]()&&_0x151007&&_0x19da9f[_0x585e5b(0x293)]&&_0x4485cb['note'][_0x585e5b(0xaf)](/<(?:ATB|TPB) HELP>\s*([\s\S]*)\s*<\/(?:ATB|TPB) HELP>/i)?this['setText'](_0x5f4ad6(_0x5dc5c2['$1'])):_0x17f3b2['BattleSystemATB']['Window_Help_setItem'][_0x585e5b(0x261)](this,_0x4642ba);}VisuMZ[_0x585e5b(0x107)](VisuMZ[label][_0x585e5b(0xa5)],_0x4e0803[_0x585e5b(0x22e)]);})(pluginData),PluginManager[_0xc24814(0x93)](pluginData[_0xc24814(0x181)],'FieldGaugeActorIcon',_0x1c949e=>{const _0x48ebcc=_0xc24814;VisuMZ[_0x48ebcc(0x107)](_0x1c949e,_0x1c949e);const _0x13a3d7=_0x1c949e[_0x48ebcc(0x1f3)],_0x1fa7f7=_0x1c949e[_0x48ebcc(0x130)];for(const _0x572683 of _0x13a3d7){if(_0x48ebcc(0xb0)===_0x48ebcc(0x24a))_0x231489['visible']=![];else{const _0x133651=$gameActors[_0x48ebcc(0xe6)](_0x572683);if(!_0x133651)continue;_0x133651[_0x48ebcc(0x193)]=_0x48ebcc(0x1f4),_0x133651[_0x48ebcc(0x23d)]=_0x1fa7f7;}}}),PluginManager[_0xc24814(0x93)](pluginData['name'],'FieldGaugeActorFace',_0x27b242=>{const _0x86c33d=_0xc24814;VisuMZ['ConvertParams'](_0x27b242,_0x27b242);const _0x3b7d3b=_0x27b242[_0x86c33d(0x1f3)],_0x27ee67=_0x27b242[_0x86c33d(0x20a)],_0x39620a=_0x27b242[_0x86c33d(0x14a)];for(const _0x4048cf of _0x3b7d3b){const _0x3dee19=$gameActors[_0x86c33d(0xe6)](_0x4048cf);if(!_0x3dee19)continue;_0x3dee19['_fieldAtbGaugeGraphicType']=_0x86c33d(0x2a2),_0x3dee19[_0x86c33d(0x268)]=_0x27ee67,_0x3dee19[_0x86c33d(0x1ef)]=_0x39620a;}}),PluginManager['registerCommand'](pluginData[_0xc24814(0x181)],'FieldGaugeClearActorGraphic',_0xf1ba1a=>{const _0x1024b7=_0xc24814;VisuMZ[_0x1024b7(0x107)](_0xf1ba1a,_0xf1ba1a);const _0x99fa6d=_0xf1ba1a[_0x1024b7(0x1f3)];for(const _0x148b5a of _0x99fa6d){const _0x27d093=$gameActors['actor'](_0x148b5a);if(!_0x27d093)continue;_0x27d093[_0x1024b7(0x2aa)]();}}),PluginManager[_0xc24814(0x93)](pluginData[_0xc24814(0x181)],_0xc24814(0x253),_0x24a27c=>{const _0xab2266=_0xc24814;VisuMZ[_0xab2266(0x107)](_0x24a27c,_0x24a27c);const _0x47b4b6=_0x24a27c[_0xab2266(0x275)],_0x429ebb=_0x24a27c[_0xab2266(0x130)];for(const _0x2b64e6 of _0x47b4b6){if('bxbBN'!==_0xab2266(0x262)){const _0x3f5e8b=$gameTroop['members']()[_0x2b64e6];if(!_0x3f5e8b)continue;_0x3f5e8b[_0xab2266(0x193)]=_0xab2266(0x1f4),_0x3f5e8b['_fieldAtbGaugeIconIndex']=_0x429ebb;}else this[_0xab2266(0x15c)](),this[_0xab2266(0x2b9)](),this[_0xab2266(0x100)]=0x0;}}),PluginManager['registerCommand'](pluginData[_0xc24814(0x181)],_0xc24814(0x20b),_0xc6276f=>{const _0x9802e3=_0xc24814;VisuMZ['ConvertParams'](_0xc6276f,_0xc6276f);const _0x42fb99=_0xc6276f[_0x9802e3(0x275)],_0x387dcc=_0xc6276f['FaceName'],_0x43555f=_0xc6276f[_0x9802e3(0x14a)];for(const _0x5da88d of _0x42fb99){const _0x59e797=$gameTroop[_0x9802e3(0x239)]()[_0x5da88d];if(!_0x59e797)continue;_0x59e797[_0x9802e3(0x193)]='face',_0x59e797[_0x9802e3(0x268)]=_0x387dcc,_0x59e797[_0x9802e3(0x1ef)]=_0x43555f;}}),PluginManager[_0xc24814(0x93)](pluginData[_0xc24814(0x181)],_0xc24814(0x2b4),_0x346971=>{const _0x126775=_0xc24814;VisuMZ[_0x126775(0x107)](_0x346971,_0x346971);const _0x1d073d=_0x346971['Enemies'];for(const _0x41b494 of _0x1d073d){const _0x416215=$gameTroop['members']()[_0x41b494];if(!_0x416215)continue;_0x416215[_0x126775(0x2aa)]();}}),PluginManager[_0xc24814(0x93)](pluginData['name'],_0xc24814(0x25b),_0x221dd2=>{const _0x1c284b=_0xc24814;VisuMZ[_0x1c284b(0x107)](_0x221dd2,_0x221dd2);const _0x4e8fdf=_0x221dd2['Visible'];$gameSystem[_0x1c284b(0x267)](_0x4e8fdf);}),VisuMZ['BattleSystemATB'][_0xc24814(0x279)]=Scene_Boot['prototype'][_0xc24814(0x232)],Scene_Boot[_0xc24814(0x15f)]['onDatabaseLoaded']=function(){const _0x37489e=_0xc24814;this['process_VisuMZ_BattleSystemATB_CreateRegExp'](),VisuMZ[_0x37489e(0x26a)][_0x37489e(0x279)][_0x37489e(0x261)](this),this[_0x37489e(0x14f)]();},VisuMZ[_0xc24814(0x26a)][_0xc24814(0xdc)]={},Scene_Boot[_0xc24814(0x15f)][_0xc24814(0x1bf)]=function(){const _0xfea631=_0xc24814,_0x41afed=VisuMZ[_0xfea631(0x23f)][_0xfea631(0xdc)],_0x4aef44=_0xfea631(0x150),_0x3f1390=[_0xfea631(0x1d9),'Cast',_0xfea631(0x118)];for(const _0xd51d46 of _0x3f1390){const _0x5652e5=_0x4aef44['format'](_0xd51d46[_0xfea631(0x178)]()[_0xfea631(0x1a0)](),'(?:ATB|TPB)',_0xfea631(0x19f)),_0x4e75ed=new RegExp(_0x5652e5,'i');VisuMZ[_0xfea631(0x26a)][_0xfea631(0xdc)][_0xd51d46]=_0x4e75ed;}},Scene_Boot[_0xc24814(0x15f)][_0xc24814(0x14f)]=function(){const _0x3bac6f=_0xc24814;if(VisuMZ[_0x3bac6f(0x2ad)])return;const _0x100621=$dataSkills['concat']($dataItems);for(const _0x61001b of _0x100621){if(_0x3bac6f(0x2ca)!==_0x3bac6f(0x27e)){if(!_0x61001b)continue;VisuMZ[_0x3bac6f(0x26a)]['Parse_Notetags_CreateJS'](_0x61001b);}else return this[_0x3bac6f(0x10f)][_0x3bac6f(0x148)]()?_0x2ebb60[_0x3bac6f(0x217)](this[_0x3bac6f(0x10f)][_0x3bac6f(0x100)],0x0):_0xd6eac8[_0x3bac6f(0x26a)][_0x3bac6f(0x1e1)][_0x3bac6f(0x261)](this);}},VisuMZ['BattleSystemATB'][_0xc24814(0x165)]=VisuMZ[_0xc24814(0x165)],VisuMZ[_0xc24814(0x165)]=function(_0x55e452){const _0x3bf546=_0xc24814;VisuMZ[_0x3bf546(0x26a)][_0x3bf546(0x165)][_0x3bf546(0x261)](this,_0x55e452),VisuMZ['BattleSystemATB'][_0x3bf546(0x179)](_0x55e452);},VisuMZ['BattleSystemATB'][_0xc24814(0x1e6)]=VisuMZ['ParseItemNotetags'],VisuMZ[_0xc24814(0x1e6)]=function(_0x2f86c7){const _0x99bcb=_0xc24814;VisuMZ[_0x99bcb(0x26a)][_0x99bcb(0x1e6)][_0x99bcb(0x261)](this,_0x2f86c7),VisuMZ['BattleSystemATB'][_0x99bcb(0x179)](_0x2f86c7);},VisuMZ['BattleSystemATB'][_0xc24814(0x179)]=function(_0x193e2e){const _0x43fe5d=_0xc24814,_0x20bc61=[_0x43fe5d(0x1d9),_0x43fe5d(0x26e),_0x43fe5d(0x118)];for(const _0xa42b91 of _0x20bc61){if(_0x43fe5d(0x194)!==_0x43fe5d(0x194)){let _0x4be9f3=_0x486632['MarkerSize'],_0x8b6eee=_0x198b1f[_0x43fe5d(0x20c)];_0x58008a['bitmap']=new _0x4c7ef1(_0x4be9f3,_0x4be9f3);const _0x56f136=_0x43fe5d(0xa8),_0x44462f=_0x577833[_0x43fe5d(0x163)](_0x503940['%1BorderColor'[_0x43fe5d(0x21a)](_0x4f30a7)]);_0x4d2e34[_0x43fe5d(0x1f1)][_0x43fe5d(0x254)](0x0,0x0,_0x4be9f3,_0x4be9f3,_0x56f136),_0x4be9f3-=0x2,_0x6da2a9[_0x43fe5d(0x1f1)]['fillRect'](0x1,0x1,_0x4be9f3,_0x4be9f3,_0x44462f),_0x4be9f3-=_0x8b6eee*0x2,_0xefee64[_0x43fe5d(0x1f1)][_0x43fe5d(0x254)](0x1+_0x8b6eee,0x1+_0x8b6eee,_0x4be9f3,_0x4be9f3,_0x56f136),_0x4be9f3-=0x2,_0x8b6eee+=0x1,_0xe2fe18[_0x43fe5d(0x1f1)][_0x43fe5d(0xc4)](0x1+_0x8b6eee,0x1+_0x8b6eee,_0x4be9f3,_0x4be9f3);}else VisuMZ[_0x43fe5d(0x26a)][_0x43fe5d(0x1e7)](_0x193e2e,_0xa42b91);}},VisuMZ[_0xc24814(0x26a)]['JS']={},VisuMZ[_0xc24814(0x26a)]['createJS']=function(_0x146133,_0x1a43e8){const _0x1c187e=_0xc24814,_0xf771b8=_0x146133[_0x1c187e(0x293)];if(_0xf771b8[_0x1c187e(0xaf)](VisuMZ['BattleSystemATB'][_0x1c187e(0xdc)][_0x1a43e8])){if('FxMXF'==='FxMXF'){const _0x4038c6=String(RegExp['$1']),_0x197dd6=_0x1c187e(0x2ab)[_0x1c187e(0x21a)](_0x4038c6,_0x1a43e8),_0x4c169b=VisuMZ[_0x1c187e(0x26a)][_0x1c187e(0x189)](_0x146133,_0x1a43e8);VisuMZ[_0x1c187e(0x26a)]['JS'][_0x4c169b]=new Function(_0x197dd6);}else _0x22be20['BattleSystemATB'][_0x1c187e(0x281)][_0x1c187e(0x261)](this,_0x5428cb),_0x1c187e(0x1d3)in _0x3900e7?this['visualAtbGauge']=_0x3da405['visualAtbGauge']:this[_0x1c187e(0x1d3)]=!![];}},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x189)]=function(_0x3fcee2,_0x5cf0ea){const _0x2e3f7f=_0xc24814;if(VisuMZ['createKeyJS'])return VisuMZ[_0x2e3f7f(0x189)](_0x3fcee2,_0x5cf0ea);let _0x54552d='';if($dataActors[_0x2e3f7f(0x191)](_0x3fcee2))_0x54552d=_0x2e3f7f(0x1ac)['format'](_0x3fcee2['id'],_0x5cf0ea);if($dataClasses['includes'](_0x3fcee2))_0x54552d=_0x2e3f7f(0x2bf)[_0x2e3f7f(0x21a)](_0x3fcee2['id'],_0x5cf0ea);if($dataSkills[_0x2e3f7f(0x191)](_0x3fcee2))_0x54552d='Skill-%1-%2'['format'](_0x3fcee2['id'],_0x5cf0ea);if($dataItems[_0x2e3f7f(0x191)](_0x3fcee2))_0x54552d=_0x2e3f7f(0xd4)[_0x2e3f7f(0x21a)](_0x3fcee2['id'],_0x5cf0ea);if($dataWeapons[_0x2e3f7f(0x191)](_0x3fcee2))_0x54552d=_0x2e3f7f(0x27a)[_0x2e3f7f(0x21a)](_0x3fcee2['id'],_0x5cf0ea);if($dataArmors[_0x2e3f7f(0x191)](_0x3fcee2))_0x54552d=_0x2e3f7f(0x28e)[_0x2e3f7f(0x21a)](_0x3fcee2['id'],_0x5cf0ea);if($dataEnemies[_0x2e3f7f(0x191)](_0x3fcee2))_0x54552d=_0x2e3f7f(0x2a9)[_0x2e3f7f(0x21a)](_0x3fcee2['id'],_0x5cf0ea);if($dataStates[_0x2e3f7f(0x191)](_0x3fcee2))_0x54552d=_0x2e3f7f(0x2bd)[_0x2e3f7f(0x21a)](_0x3fcee2['id'],_0x5cf0ea);return _0x54552d;},ConfigManager[_0xc24814(0x1d3)]=!![],VisuMZ['BattleSystemATB'][_0xc24814(0xc3)]=ConfigManager['makeData'],ConfigManager[_0xc24814(0x1e9)]=function(){const _0x48c4df=_0xc24814,_0x3fc8bc=VisuMZ[_0x48c4df(0x26a)][_0x48c4df(0xc3)]['call'](this);return _0x3fc8bc['visualAtbGauge']=this[_0x48c4df(0x1d3)],_0x3fc8bc;},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x281)]=ConfigManager[_0xc24814(0x270)],ConfigManager[_0xc24814(0x270)]=function(_0x5d18f1){const _0x3a4756=_0xc24814;VisuMZ['BattleSystemATB'][_0x3a4756(0x281)]['call'](this,_0x5d18f1),_0x3a4756(0x1d3)in _0x5d18f1?this[_0x3a4756(0x1d3)]=_0x5d18f1['visualAtbGauge']:'LLueK'===_0x3a4756(0xd6)?this[_0x3a4756(0x23d)]=this['createFieldAtbGraphicIconIndex']():this[_0x3a4756(0x1d3)]=!![];},ImageManager[_0xc24814(0x1f9)]=ImageManager[_0xc24814(0x1f9)]||0x9,ImageManager[_0xc24814(0x95)]=ImageManager[_0xc24814(0x95)]||0x6,TextManager[_0xc24814(0x1d3)]=VisuMZ[_0xc24814(0x26a)]['Settings']['Options'][_0xc24814(0xd1)],VisuMZ[_0xc24814(0x26a)][_0xc24814(0x289)]=ColorManager[_0xc24814(0xee)],ColorManager[_0xc24814(0xee)]=function(){const _0x3fbb89=_0xc24814;VisuMZ[_0x3fbb89(0x26a)]['ColorManager_loadWindowskin'][_0x3fbb89(0x261)](this),this[_0x3fbb89(0x1c4)]['addLoadListener'](this['setupBattleSystemATBColors'][_0x3fbb89(0x295)](this));},ColorManager[_0xc24814(0x163)]=function(_0x239eaf){const _0x4b2e27=_0xc24814;return _0x239eaf=String(_0x239eaf),_0x239eaf[_0x4b2e27(0xaf)](/#(.*)/i)?_0x4b2e27(0x22c)[_0x4b2e27(0x21a)](String(RegExp['$1'])):this[_0x4b2e27(0x25d)](Number(_0x239eaf));},ColorManager['setupBattleSystemATBColors']=function(){const _0x8e21d8=_0xc24814,_0x3e1739=[_0x8e21d8(0xfa),_0x8e21d8(0x22b),_0x8e21d8(0x1db),'fast',_0x8e21d8(0x21c),'stop'],_0x29bed9=VisuMZ[_0x8e21d8(0x26a)][_0x8e21d8(0xa5)]['Color'];this[_0x8e21d8(0x230)]={};for(const _0x17a0e9 of _0x3e1739){for(let _0x53ccc2=0x1;_0x53ccc2<=0x2;_0x53ccc2++){if(_0x8e21d8(0xb6)!=='BBwXa'){const _0x57638b=this[_0x8e21d8(0xf0)]()[_0x8e21d8(0x293)];if(_0x57638b[_0x8e21d8(0xaf)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x12c33d(_0xf3d2f6['$2']);return _0x12c460[_0x8e21d8(0xa5)][_0x8e21d8(0x127)];}else{const _0x443653=_0x17a0e9+_0x53ccc2;this[_0x8e21d8(0x230)][_0x443653]=this[_0x8e21d8(0x163)](_0x29bed9[_0x443653]);}}}},ColorManager[_0xc24814(0x175)]=function(_0x29e663){const _0x1b9717=_0xc24814;if(this[_0x1b9717(0x230)]===undefined)this[_0x1b9717(0x126)]();return this[_0x1b9717(0x230)][_0x29e663]||_0x1b9717(0xa8);},SceneManager[_0xc24814(0x1fa)]=function(){const _0x49356d=_0xc24814;return this[_0x49356d(0x15d)]&&this['_scene']['constructor']===Scene_Battle;},BattleManager['isATB']=function(){const _0x34e3cc=_0xc24814;if(Imported['VisuMZ_2_BattleSystemCTB']&&this[_0x34e3cc(0x173)]())return![];return this[_0x34e3cc(0x16a)]();},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x161)]=BattleManager[_0xc24814(0x1a5)],BattleManager[_0xc24814(0x1a5)]=function(){const _0x596f7a=_0xc24814;if(!this[_0x596f7a(0x16a)]())return![];else{if(ConfigManager&&ConfigManager[_0x596f7a(0x94)]!==undefined)return ConfigManager[_0x596f7a(0x94)];else{if('uxBKF'===_0x596f7a(0x1cf))return VisuMZ['BattleSystemATB'][_0x596f7a(0x161)][_0x596f7a(0x261)](this);else{if(!_0x50f88f[_0x596f7a(0x97)]())return;if(!_0x29f519[_0x596f7a(0xa5)][_0x596f7a(0x8c)])return;if(!_0x2bcdc4[_0x596f7a(0x1d3)])return;this[_0x596f7a(0x214)]=new _0x2d9fed(),this[_0x596f7a(0xa1)][_0x596f7a(0x1b2)](this[_0x596f7a(0x214)]);}}}},VisuMZ['BattleSystemATB'][_0xc24814(0x1b3)]=Game_System[_0xc24814(0x15f)]['initialize'],Game_System[_0xc24814(0x15f)][_0xc24814(0x272)]=function(){const _0x3a077c=_0xc24814;VisuMZ[_0x3a077c(0x26a)][_0x3a077c(0x1b3)][_0x3a077c(0x261)](this),this[_0x3a077c(0xbe)]();},Game_System[_0xc24814(0x15f)][_0xc24814(0xbe)]=function(){const _0x4a9990=_0xc24814;this[_0x4a9990(0x1eb)]=!![];},Game_System[_0xc24814(0x15f)]['isBattleSystemATBFieldGaugeVisible']=function(){const _0x3314d2=_0xc24814;return this['_atbFieldGaugeVisible']===undefined&&this['initBattleSystemATB'](),this[_0x3314d2(0x1eb)];},Game_System[_0xc24814(0x15f)][_0xc24814(0x267)]=function(_0x586b05){const _0x21579a=_0xc24814;this['_atbFieldGaugeVisible']===undefined&&this[_0x21579a(0xbe)](),this['_atbFieldGaugeVisible']=_0x586b05;},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x1ee)]=Game_Action[_0xc24814(0x15f)]['applyItemUserEffect'],Game_Action[_0xc24814(0x15f)][_0xc24814(0x218)]=function(_0xc0ab87){const _0x3a12f8=_0xc24814;VisuMZ[_0x3a12f8(0x26a)][_0x3a12f8(0x1ee)]['call'](this,_0xc0ab87),this[_0x3a12f8(0x1fc)](_0xc0ab87);},Game_Action[_0xc24814(0x15f)][_0xc24814(0x1fc)]=function(_0x4246f0){const _0x1898ba=_0xc24814;if(!SceneManager[_0x1898ba(0x1fa)]())return;if(!BattleManager[_0x1898ba(0x97)]())return;if(this[_0x1898ba(0xcc)]())this['applyItemBattleSystemATBUserEffect'](_0x4246f0);},Game_Action[_0xc24814(0x15f)][_0xc24814(0x190)]=function(_0x517136){const _0xeba5a7=_0xc24814,_0x26671f=this['item']()[_0xeba5a7(0x293)];if(_0x517136[_0xeba5a7(0xaa)]()){if(_0xeba5a7(0xcd)!==_0xeba5a7(0x113)){const _0x5731d4=VisuMZ[_0xeba5a7(0x26a)][_0xeba5a7(0x189)](this[_0xeba5a7(0xcc)](),_0xeba5a7(0x1d9));if(VisuMZ[_0xeba5a7(0x26a)]['JS'][_0x5731d4]){const _0x4c29ae=VisuMZ['BattleSystemATB']['JS'][_0x5731d4]['call'](this,this['subject'](),_0x517136);_0x517136[_0xeba5a7(0x1ce)](_0x4c29ae);}_0x26671f[_0xeba5a7(0xaf)](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0x517136[_0xeba5a7(0x1ce)](Number(RegExp['$1'])*0.01),_0x26671f[_0xeba5a7(0xaf)](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x517136[_0xeba5a7(0x248)](Number(RegExp['$1'])*0.01);}else return this[_0xeba5a7(0x1c6)]===_0xeba5a7(0x12d)&&this[_0xeba5a7(0x278)]()&&this[_0xeba5a7(0x278)]()[_0xeba5a7(0xcc)]()&&this['currentAction']()['item']()[_0xeba5a7(0xd3)]<0x0;}else{if(_0x517136['isAtbCastingState']()){const _0x519fc5=VisuMZ[_0xeba5a7(0x26a)]['createKeyJS'](this[_0xeba5a7(0xcc)](),_0xeba5a7(0x26e));if(VisuMZ['BattleSystemATB']['JS'][_0x519fc5]){const _0x3e450f=VisuMZ[_0xeba5a7(0x26a)]['JS'][_0x519fc5][_0xeba5a7(0x261)](this,this[_0xeba5a7(0xd8)](),_0x517136);_0x517136[_0xeba5a7(0x24d)](_0x3e450f);}_0x26671f[_0xeba5a7(0xaf)](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0x517136[_0xeba5a7(0x24d)](Number(RegExp['$1'])*0.01);if(_0x26671f[_0xeba5a7(0xaf)](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)){if(_0xeba5a7(0x1b6)!==_0xeba5a7(0x296))_0x517136[_0xeba5a7(0x11e)](Number(RegExp['$1'])*0.01);else return _0xeba5a7(0x1f4);}_0x26671f['match'](/<(?:ATB|TPB) INTERRUPT>/i)&&_0x517136['atbInterrupt']();}}},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x215)]=Game_Action['prototype'][_0xc24814(0x285)],Game_Action[_0xc24814(0x15f)]['applyGlobal']=function(){const _0x2d7f9e=_0xc24814;VisuMZ['BattleSystemATB']['Game_Action_applyGlobal'][_0x2d7f9e(0x261)](this),this[_0x2d7f9e(0x15e)]();},Game_Action[_0xc24814(0x15f)][_0xc24814(0x15e)]=function(){const _0x20dd23=_0xc24814;if(!this[_0x20dd23(0xcc)]())return;if(!BattleManager['isATB']())return;const _0xa35af9=this['item']()[_0x20dd23(0x293)];let _0x20a7e0=0x0;this[_0x20dd23(0x257)]&&(_0x20dd23(0x180)!==_0x20dd23(0x180)?this['applyATBPenalty']():_0x20a7e0=this['subject']()['_tpbChargeTime']);const _0x22fcaf=VisuMZ[_0x20dd23(0x26a)][_0x20dd23(0x189)](this[_0x20dd23(0xcc)](),_0x20dd23(0x118));if(VisuMZ['BattleSystemATB']['JS'][_0x22fcaf]){if(_0x20dd23(0xc1)!==_0x20dd23(0x298))_0x20a7e0=VisuMZ[_0x20dd23(0x26a)]['JS'][_0x22fcaf]['call'](this,this[_0x20dd23(0xd8)](),this[_0x20dd23(0xd8)]());else return _0x11a5bb[_0x20dd23(0x2bc)]&&_0x270bad[_0x20dd23(0xe9)][_0x20dd23(0x191)]('['+_0x3356aa+']');}let _0x1dac6e=this['item']()[_0x20dd23(0xd3)]>0x0?this[_0x20dd23(0xcc)]()[_0x20dd23(0xd3)]:0x0;if(this[_0x20dd23(0x169)]())_0x1dac6e+=this[_0x20dd23(0xd8)]()['attackSpeed']();_0x20a7e0+=(_0x1dac6e/0xfa0)['clamp'](0x0,0x1);if(this[_0x20dd23(0xcc)]()[_0x20dd23(0x293)][_0x20dd23(0xaf)](/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)){if(_0x20dd23(0x9e)!==_0x20dd23(0x1bd))_0x20a7e0=Number(RegExp['$1'])*0.01;else{const _0x137954=_0x17abd2[_0x20dd23(0xa5)];if(!_0x137954[_0x20dd23(0xd0)])return;if(this[_0x20dd23(0x16c)]===_0x28d335)return;const _0x497423=_0x137954[_0x20dd23(0x172)],_0xdf8621=new _0x2f082c();_0xdf8621['anchor']['x']=this[_0x20dd23(0x159)]['x'],_0xdf8621['anchor']['y']=this['anchor']['y'],_0xdf8621[_0x20dd23(0x1f1)]=new _0x45fbf2(_0x497423,_0x497423),this[_0x20dd23(0xcf)]=_0xdf8621,this['addChild'](this['_letterSprite']);}}const _0x1ad7be=this[_0x20dd23(0xd8)]()[_0x20dd23(0x19b)]()[_0x20dd23(0x119)](this[_0x20dd23(0xd8)]()[_0x20dd23(0x10e)]()),_0x16f66b=/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i,_0x40595c=_0x1ad7be[_0x20dd23(0x213)](_0x1685e3=>_0x1685e3&&_0x1685e3[_0x20dd23(0x293)][_0x20dd23(0xaf)](_0x16f66b)?Number(RegExp['$1'])*0.01:0x0);_0x20a7e0=_0x40595c[_0x20dd23(0xe2)]((_0x3f7927,_0x3684fa)=>_0x3f7927+_0x3684fa,_0x20a7e0),this['item']()['note']['match'](/<(?:ATB|TPB) INSTANT>/i)&&(_0x20dd23(0x14b)!==_0x20dd23(0x198)?_0x20a7e0=0xa:_0xaca2d3[_0x20dd23(0x1f1)]=_0x522fe3['loadSystem'](_0x57413a[_0x18c25f])),this['subject']()[_0x20dd23(0x11b)](_0x20a7e0);},Game_BattlerBase['prototype']['setAtbChargeTime']=function(_0x188005){const _0x1c7cbf=_0xc24814;this[_0x1c7cbf(0x110)]=_0x188005[_0x1c7cbf(0x1c5)](0x0,0x1);},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x248)]=function(_0x27dd40){const _0x1c3476=_0xc24814;this[_0x1c3476(0x1ce)](this[_0x1c3476(0x110)]+_0x27dd40);},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x24d)]=function(_0x3da6c4){const _0x31e7b6=_0xc24814,_0x5a9350=this[_0x31e7b6(0x1f6)]();this[_0x31e7b6(0x100)]=(_0x5a9350*_0x3da6c4)['clamp'](0x0,_0x5a9350);},Game_BattlerBase[_0xc24814(0x15f)]['changeAtbCastTime']=function(_0x359b80){const _0xccaf24=_0xc24814,_0x10ea54=this[_0xccaf24(0x1f6)](),_0x3c53ec=_0x10ea54*_0x359b80;this[_0xccaf24(0x100)]=(this[_0xccaf24(0x100)]+_0x3c53ec)['clamp'](0x0,_0x10ea54);},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x11f)]=Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x207)],Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x207)]=function(){const _0x103410=_0xc24814;VisuMZ[_0x103410(0x26a)]['Game_BattlerBase_die']['call'](this),BattleManager[_0x103410(0x16a)]()&&this[_0x103410(0x15c)]();},VisuMZ['BattleSystemATB']['Game_BattlerBase_revive']=Game_BattlerBase[_0xc24814(0x15f)]['revive'],Game_BattlerBase['prototype'][_0xc24814(0x27c)]=function(){const _0x45db81=_0xc24814;VisuMZ[_0x45db81(0x26a)][_0x45db81(0xbb)][_0x45db81(0x261)](this);if(BattleManager['isTpb']()){if(_0x45db81(0x122)===_0x45db81(0xb2)){if(!this[_0x45db81(0x16a)]())return![];else return _0x1452a4&&_0x154b43[_0x45db81(0x94)]!==_0x336679?_0x2b0bcf[_0x45db81(0x94)]:_0x9dbd7d[_0x45db81(0x26a)]['BattleManager_isActiveTpb'][_0x45db81(0x261)](this);}else this[_0x45db81(0x15c)]();}},VisuMZ[_0xc24814(0x26a)]['Game_Battler_initTpbChargeTime']=Game_Battler['prototype']['initTpbChargeTime'],Game_Battler[_0xc24814(0x15f)][_0xc24814(0xa3)]=function(_0x544880){const _0x493d1a=_0xc24814;if(BattleManager[_0x493d1a(0x97)]())this[_0x493d1a(0x246)](_0x544880);else{if(_0x493d1a(0xea)!=='TQpnW')VisuMZ[_0x493d1a(0x26a)][_0x493d1a(0x20f)][_0x493d1a(0x261)](this,_0x544880);else return _0x1df074(_0x10e560['$1']);}},Game_Battler['prototype']['initTpbChargeTimeATB']=function(_0x3ca05d){const _0x2234ac=_0xc24814,_0xc16dbb=VisuMZ[_0x2234ac(0x26a)]['Settings'][_0x2234ac(0x201)];let _0x209f74=this[_0x2234ac(0x280)]()*eval(_0xc16dbb[_0x2234ac(0xe5)]);const _0x3431d0=this[_0x2234ac(0x19b)]()[_0x2234ac(0x119)](this[_0x2234ac(0x10e)]()),_0x4f20ea=/<(?:ATB|TPB) (?:BATTLE START|START) (?:GAUGE|TIME|SPEED): ([\+\-]\d+)([%％])>/i,_0x217f6e=_0x3431d0[_0x2234ac(0x213)](_0x1522a8=>_0x1522a8&&_0x1522a8[_0x2234ac(0x293)][_0x2234ac(0xaf)](_0x4f20ea)?Number(RegExp['$1'])*0.01:0x0);_0x209f74=_0x217f6e[_0x2234ac(0xe2)]((_0x204176,_0x38beda)=>_0x204176+_0x38beda,_0x209f74),this['_tpbState']=_0x2234ac(0x266),this[_0x2234ac(0x110)]=(_0x3ca05d?0x1:_0x209f74)[_0x2234ac(0x1c5)](0x0,0x1),this[_0x2234ac(0x1ae)]()&&(this[_0x2234ac(0x110)]=0x0);},Game_Battler[_0xc24814(0x15f)][_0xc24814(0xaa)]=function(){const _0x4e52ef=_0xc24814;return this[_0x4e52ef(0x1c6)]===_0x4e52ef(0x266);},Game_Battler[_0xc24814(0x15f)][_0xc24814(0x148)]=function(){const _0x402d0c=_0xc24814;return this[_0x402d0c(0x1c6)]==='casting'&&this['currentAction']()&&this[_0x402d0c(0x278)]()[_0x402d0c(0xcc)]()&&this[_0x402d0c(0x278)]()[_0x402d0c(0xcc)]()[_0x402d0c(0xd3)]<0x0;},Game_BattlerBase['prototype']['getAtbCastTimeRate']=function(){const _0xa68817=_0xc24814;return this['isAtbCastingState']()?this['_tpbCastTime']/this[_0xa68817(0x1f6)]():0x0;},Game_Battler[_0xc24814(0x15f)][_0xc24814(0x99)]=function(){const _0xfdb81=_0xc24814;return!this[_0xfdb81(0x137)]();},Game_Battler[_0xc24814(0x15f)][_0xc24814(0x11b)]=function(_0x108f21){const _0x55f2cc=_0xc24814;this[_0x55f2cc(0x11a)]=_0x108f21;},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x2b0)]=BattleManager[_0xc24814(0x1d7)],BattleManager[_0xc24814(0x1d7)]=function(_0x553141){const _0x384e53=_0xc24814;this[_0x384e53(0x16a)]()&&!_0x553141[_0x384e53(0x137)]()&&(_0x553141[_0x384e53(0x22f)]=!![]);VisuMZ[_0x384e53(0x26a)][_0x384e53(0x2b0)][_0x384e53(0x261)](this,_0x553141);if(_0x553141[_0x384e53(0x9a)]()&&this[_0x384e53(0x16a)]()&&!_0x553141[_0x384e53(0x137)]()){if(_0x384e53(0x237)==='ELTTb')_0x553141['_onRestrictBypassAtbReset']=![];else return _0x13f620['x']-_0x3d98eb['x'];}},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x12e)]=Game_Battler[_0xc24814(0x15f)][_0xc24814(0x15c)],Game_Battler['prototype'][_0xc24814(0x15c)]=function(){const _0x21276e=_0xc24814;if(this[_0x21276e(0x22f)])return;VisuMZ[_0x21276e(0x26a)][_0x21276e(0x12e)]['call'](this),this[_0x21276e(0x110)]+=this[_0x21276e(0x11a)]||0x0;},Game_Battler[_0xc24814(0x15f)][_0xc24814(0x243)]=function(){const _0x4598ea=_0xc24814;if(!this[_0x4598ea(0x148)]())return;if(!this[_0x4598ea(0x278)]())return;if(!this[_0x4598ea(0x278)]()[_0x4598ea(0xcc)]())return;if(this[_0x4598ea(0x278)]()[_0x4598ea(0xcc)]()[_0x4598ea(0x293)]['match'](/<(?:ATB|TPB) CANNOT (?:BE INTERRUPTED|INTERRUPT)>/i))return;this['clearActions'](),this[_0x4598ea(0x15c)](),this[_0x4598ea(0x100)]=0x0,this[_0x4598ea(0x1c0)]();},Game_Battler[_0xc24814(0x15f)][_0xc24814(0x1c0)]=function(){const _0x38499e=_0xc24814,_0x3ba0e7=VisuMZ[_0x38499e(0x26a)]['Settings'][_0x38499e(0xf7)];if(Imported[_0x38499e(0x22a)]){const _0x290b75=_0x3ba0e7[_0x38499e(0x188)],_0x441dc2=_0x3ba0e7[_0x38499e(0x16f)],_0x1c5903=_0x3ba0e7[_0x38499e(0x171)];$gameTemp[_0x38499e(0xb4)]([this],_0x290b75,_0x441dc2,_0x1c5903);}if(this[_0x38499e(0x29e)]()&&_0x3ba0e7[_0x38499e(0x247)]['length']>0x0){const _0x3fee63=_0x3ba0e7['InterruptText'],_0x482e47={'textColor':ColorManager[_0x38499e(0x163)](_0x3ba0e7[_0x38499e(0x140)]),'flashColor':_0x3ba0e7[_0x38499e(0xbf)],'flashDuration':_0x3ba0e7[_0x38499e(0x2c1)]};this[_0x38499e(0x15a)](_0x3fee63,_0x482e47);}},VisuMZ[_0xc24814(0x26a)]['Game_Battler_startTpbCasting']=Game_Battler['prototype'][_0xc24814(0x154)],Game_Battler[_0xc24814(0x15f)]['startTpbCasting']=function(){const _0xa34796=_0xc24814;VisuMZ['BattleSystemATB'][_0xa34796(0x136)][_0xa34796(0x261)](this);if(BattleManager[_0xa34796(0x97)]()){if(_0xa34796(0x1a2)!==_0xa34796(0x1a2)){const _0x261bc1=this[_0xa34796(0xf0)]()[_0xa34796(0x293)];if(_0x261bc1[_0xa34796(0xaf)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x5413f4(_0xd5ba11['$1']);return _0x1364ea[_0xa34796(0xa5)][_0xa34796(0x1ed)];}else this[_0xa34796(0x100)]>=this[_0xa34796(0x1f6)]()&&(_0xa34796(0x143)!==_0xa34796(0x27d)?this['_tpbState']=_0xa34796(0xab):(_0x499a71[_0xa34796(0x26a)][_0xa34796(0x277)][_0xa34796(0x261)](this),!this['_battler']&&this['_atbGaugeSprite']&&(this['_atbGaugeSprite'][_0xa34796(0xeb)]=![],this[_0xa34796(0x1f8)]&&(this[_0xa34796(0x1f8)]['_atbGaugeSprite'][_0xa34796(0xeb)]=![]))));}},VisuMZ[_0xc24814(0x26a)][_0xc24814(0xef)]=Game_Unit['prototype']['updateTpb'],Game_Unit[_0xc24814(0x15f)][_0xc24814(0x13a)]=function(){const _0x1e26d9=_0xc24814;if(BattleManager[_0x1e26d9(0x97)]()){if(_0x1e26d9(0x1a3)===_0x1e26d9(0xfe))_0x5210a2['prototype'][_0x1e26d9(0x238)][_0x1e26d9(0x261)](this),this[_0x1e26d9(0x27b)](),this[_0x1e26d9(0x1aa)](),this[_0x1e26d9(0x240)]();else{if(BattleManager[_0x1e26d9(0x152)]()[_0x1e26d9(0x1f0)](_0x1ede2d=>_0x1ede2d&&_0x1ede2d['isAlive']()&&_0x1ede2d['isAppeared']()&&_0x1ede2d[_0x1e26d9(0x1c6)]===_0x1e26d9(0xab)))return;}}VisuMZ['BattleSystemATB'][_0x1e26d9(0xef)][_0x1e26d9(0x261)](this);},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x25f)]=Game_Battler[_0xc24814(0x15f)]['onRestrict'],Game_Battler[_0xc24814(0x15f)][_0xc24814(0x256)]=function(){const _0x5680d7=_0xc24814;if(!VisuMZ[_0x5680d7(0x26a)][_0x5680d7(0xa5)][_0x5680d7(0x201)][_0x5680d7(0x216)]){if(_0x5680d7(0x28a)!==_0x5680d7(0x28a)){if(!_0x13dcfb['isATB']())return;if(!_0x18527d['Settings']['UseFieldGauge'])return;if(!_0x53aa71[_0x5680d7(0x1d3)])return;this[_0x5680d7(0xa1)]=new _0x31894a(new _0x180ae4(0x0,0x0,0x0,0x0));const _0x3511c6=this[_0x5680d7(0x1d4)](this[_0x5680d7(0x164)]);this[_0x5680d7(0x196)](this['_fieldGaugeATB_Container'],_0x3511c6);}else this['_onRestrictBypassAtbReset']=BattleManager[_0x5680d7(0x97)]();}VisuMZ['BattleSystemATB'][_0x5680d7(0x25f)][_0x5680d7(0x261)](this),BattleManager['isTpb']()&&this[_0x5680d7(0x1c6)]===_0x5680d7(0x16d)&&this[_0x5680d7(0x9a)]()&&(this[_0x5680d7(0x2c4)]=!![]),this[_0x5680d7(0x22f)]=undefined;},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x1c2)]=Game_Actor['prototype']['clearActions'],Game_Actor[_0xc24814(0x15f)]['clearActions']=function(){const _0x2c7464=_0xc24814;if(this['_onRestrictBypassAtbReset']){if(_0x2c7464(0x123)===_0x2c7464(0x123)){if(!this[_0x2c7464(0x148)]())return;}else{const _0x55d669=_0x1530fa[_0x2c7464(0x26a)]['JS'][_0x558fe6][_0x2c7464(0x261)](this,this[_0x2c7464(0xd8)](),_0x59b2e5);_0x4a59b5[_0x2c7464(0x1ce)](_0x55d669);}}VisuMZ[_0x2c7464(0x26a)][_0x2c7464(0x1c2)]['call'](this);},VisuMZ['BattleSystemATB'][_0xc24814(0x8a)]=Game_Battler[_0xc24814(0x15f)]['removeState'],Game_Battler['prototype']['removeState']=function(_0x114bad){const _0x2a84cc=_0xc24814,_0x11bad4=!this['canMove']()&&BattleManager[_0x2a84cc(0x16a)](),_0x896b7c=this[_0x2a84cc(0xc8)](_0x114bad);VisuMZ[_0x2a84cc(0x26a)]['Game_Battler_removeState'][_0x2a84cc(0x261)](this,_0x114bad);if(this['isEnemy']()&&_0x896b7c&&!this[_0x2a84cc(0xc8)](_0x114bad))_0x11bad4&&this['canMove']()&&this['_needsAtbClear']&&('sIqWT'!=='sIqWT'?this[_0x2a84cc(0x1f8)][_0x2a84cc(0x18f)][_0x2a84cc(0xeb)]=_0x4e56f5:(this[_0x2a84cc(0x15c)](),this[_0x2a84cc(0x2b9)](),this['_tpbCastTime']=0x0)),this[_0x2a84cc(0x18b)](_0x2a84cc(0x25e));else _0x11bad4&&this[_0x2a84cc(0x137)]()&&this[_0x2a84cc(0x264)]()<=0x0&&(_0x2a84cc(0x1b9)!==_0x2a84cc(0x1b9)?_0x4110b1[_0x2a84cc(0x1f1)]=_0x8380e4['loadSystem'](_0x22a8c1[_0x487bc2]):(this[_0x2a84cc(0xf1)](),this[_0x2a84cc(0x1c6)]=_0x2a84cc(0x266),this[_0x2a84cc(0x22f)]=undefined));},Game_Battler[_0xc24814(0x15f)][_0xc24814(0x231)]=function(){const _0x18193d=_0xc24814;this[_0x18193d(0x91)](_0x18193d(0x236)),this['_tpbTurnEnd']=![],this[_0x18193d(0x228)]++,this['_tpbIdleTime']=0x0,this[_0x18193d(0xa7)]()&&this[_0x18193d(0x17c)](),this['processBattleCoreJS'](_0x18193d(0x21e));},Game_Battler[_0xc24814(0x15f)][_0xc24814(0xa7)]=function(){const _0x131a26=_0xc24814;if(this['numActions']()!==0x0)return![];if(BattleManager[_0x131a26(0x97)]()){if(this['isEnemy']()){if(!this[_0x131a26(0x1ea)]())return![];}}return!![];},VisuMZ[_0xc24814(0x26a)]['Game_Battler_applyTpbPenalty']=Game_Battler[_0xc24814(0x15f)][_0xc24814(0x2a6)],Game_Battler[_0xc24814(0x15f)][_0xc24814(0x2a6)]=function(){const _0x1f536e=_0xc24814;BattleManager['isATB']()?this[_0x1f536e(0x106)]():VisuMZ[_0x1f536e(0x26a)][_0x1f536e(0x1e5)][_0x1f536e(0x261)](this);},Game_Battler[_0xc24814(0x15f)][_0xc24814(0x106)]=function(){const _0x963409=_0xc24814;this['_tpbState']=_0x963409(0x266),this[_0x963409(0x110)]+=VisuMZ[_0x963409(0x26a)][_0x963409(0xa5)][_0x963409(0x201)][_0x963409(0x166)]||0x0;},VisuMZ['BattleSystemATB']['Game_Battler_tpbSpeed']=Game_Battler['prototype'][_0xc24814(0x197)],Game_Battler[_0xc24814(0x15f)]['tpbSpeed']=function(){const _0x3bde7b=_0xc24814;if(BattleManager[_0x3bde7b(0x97)]())return _0x3bde7b(0x8f)!==_0x3bde7b(0x200)?VisuMZ['BattleSystemATB'][_0x3bde7b(0xa5)][_0x3bde7b(0x201)][_0x3bde7b(0x20d)]['call'](this,this):_0x16d656['max'](this[_0x3bde7b(0x10f)]['tpbRequiredCastTime'](),0x1);else{if(_0x3bde7b(0x16e)==='cZUxU')return VisuMZ['BattleSystemATB'][_0x3bde7b(0x115)][_0x3bde7b(0x261)](this);else{const _0x59f006=[_0x3bde7b(0xfa),'full',_0x3bde7b(0x1db),_0x3bde7b(0x9c),_0x3bde7b(0x21c),_0x3bde7b(0xc0)],_0x285457=_0x34d6ac[_0x3bde7b(0x26a)]['Settings'][_0x3bde7b(0x8b)];this[_0x3bde7b(0x230)]={};for(const _0x37c4a4 of _0x59f006){for(let _0x1a8a8a=0x1;_0x1a8a8a<=0x2;_0x1a8a8a++){const _0x146d26=_0x37c4a4+_0x1a8a8a;this[_0x3bde7b(0x230)][_0x146d26]=this[_0x3bde7b(0x163)](_0x285457[_0x146d26]);}}}}},VisuMZ['BattleSystemATB'][_0xc24814(0x1c1)]=Game_Battler[_0xc24814(0x15f)][_0xc24814(0x1c7)],Game_Battler[_0xc24814(0x15f)][_0xc24814(0x1c7)]=function(){const _0x5d91e6=_0xc24814;if(BattleManager['isATB']())return VisuMZ[_0x5d91e6(0x26a)]['Settings'][_0x5d91e6(0x201)][_0x5d91e6(0x271)][_0x5d91e6(0x261)](this,this);else{if('NUDZo'===_0x5d91e6(0x13b))return VisuMZ[_0x5d91e6(0x26a)]['Game_Battler_tpbBaseSpeed'][_0x5d91e6(0x261)](this);else this[_0x5d91e6(0xac)]();}},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x155)]=Game_Battler['prototype']['tpbRelativeSpeed'],Game_Battler[_0xc24814(0x15f)][_0xc24814(0x280)]=function(){const _0x4f5f84=_0xc24814;return BattleManager['isATB']()?'FguHL'==='FguHL'?VisuMZ[_0x4f5f84(0x26a)][_0x4f5f84(0xa5)][_0x4f5f84(0x201)][_0x4f5f84(0x1e8)][_0x4f5f84(0x261)](this,this):(this['_fieldAtbGaugeFaceName']===_0x61a789&&(this['_fieldAtbGaugeFaceName']=this[_0x4f5f84(0x219)]()),this['_fieldAtbGaugeFaceName']):VisuMZ['BattleSystemATB']['Game_Battler_tpbRelativeSpeed'][_0x4f5f84(0x261)](this);},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x23e)]=Game_Battler[_0xc24814(0x15f)][_0xc24814(0x290)],Game_Battler[_0xc24814(0x15f)][_0xc24814(0x290)]=function(){const _0x4b6040=_0xc24814;return BattleManager[_0x4b6040(0x97)]()?'bLybk'===_0x4b6040(0x14c)?this[_0x4b6040(0x29f)]():_0x5e4682[_0x4b6040(0x97)]()?_0x54c8df[_0x4b6040(0x26a)]['Settings'][_0x4b6040(0x201)][_0x4b6040(0x271)][_0x4b6040(0x261)](this,this):_0x14d95c[_0x4b6040(0x26a)][_0x4b6040(0x1c1)][_0x4b6040(0x261)](this):VisuMZ['BattleSystemATB'][_0x4b6040(0x23e)][_0x4b6040(0x261)](this);},Game_Battler['prototype']['atbAcceleration']=function(){const _0x626957=_0xc24814;let _0x30843f=VisuMZ['BattleSystemATB']['Settings'][_0x626957(0x201)][_0x626957(0x187)][_0x626957(0x261)](this,this);if(ConfigManager&&ConfigManager[_0x626957(0xf6)]!==undefined){const _0xbd1be=ConfigManager[_0x626957(0xf6)]-0x3;if(_0xbd1be>0x0)return _0x626957(0x17a)!=='PeJKg'?_0x30843f*(_0xbd1be*0x2):_0x4e437e[_0x626957(0x94)];else{if(_0xbd1be<0x0)return _0x30843f*(0x1/(_0xbd1be*-0x2));}}return _0x30843f;},VisuMZ[_0xc24814(0x26a)][_0xc24814(0xc6)]=Game_Battler[_0xc24814(0x15f)][_0xc24814(0x1f6)],Game_Battler[_0xc24814(0x15f)][_0xc24814(0x1f6)]=function(){const _0x7e15b=_0xc24814;if(BattleManager[_0x7e15b(0x97)]()){if(_0x7e15b(0x10d)!==_0x7e15b(0xde))return VisuMZ[_0x7e15b(0x26a)][_0x7e15b(0xa5)][_0x7e15b(0x201)][_0x7e15b(0x13f)][_0x7e15b(0x261)](this,this);else this['_fieldAtbGaugeIconIndex']=_0x3afdb6;}else return VisuMZ[_0x7e15b(0x26a)][_0x7e15b(0xc6)][_0x7e15b(0x261)](this);},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x1df)]=Scene_Options[_0xc24814(0x15f)]['maxCommands'],Scene_Options[_0xc24814(0x15f)][_0xc24814(0x2ae)]=function(){const _0x94224d=_0xc24814;let _0x3bc8de=VisuMZ['BattleSystemATB'][_0x94224d(0x1df)][_0x94224d(0x261)](this);const _0x13a6ca=VisuMZ[_0x94224d(0x26a)][_0x94224d(0xa5)];if(_0x13a6ca[_0x94224d(0x291)][_0x94224d(0x13c)]&&_0x13a6ca[_0x94224d(0x291)][_0x94224d(0xe3)]&&BattleManager[_0x94224d(0x97)]())_0x3bc8de++;return _0x3bc8de;},Sprite_Battler[_0xc24814(0x15f)][_0xc24814(0xfd)]=function(){const _0x393c38=_0xc24814;if(!BattleManager[_0x393c38(0x97)]())return;if(!ConfigManager[_0x393c38(0x1d3)])return;const _0x48712f=VisuMZ[_0x393c38(0x26a)][_0x393c38(0xa5)][_0x393c38(0x206)],_0x411544=new Sprite_Gauge();_0x411544[_0x393c38(0x159)]['x']=_0x48712f[_0x393c38(0xa9)],_0x411544[_0x393c38(0x159)]['y']=_0x48712f[_0x393c38(0x226)],_0x411544[_0x393c38(0x13d)]['x']=_0x411544[_0x393c38(0x13d)]['y']=_0x48712f[_0x393c38(0x251)],this[_0x393c38(0x18f)]=_0x411544,this['addChild'](this['_atbGaugeSprite']);},VisuMZ[_0xc24814(0x26a)][_0xc24814(0xe1)]=Sprite_Battler['prototype'][_0xc24814(0x29c)],Sprite_Battler[_0xc24814(0x15f)][_0xc24814(0x29c)]=function(_0x3a4acd){const _0x42eb41=_0xc24814;VisuMZ[_0x42eb41(0x26a)][_0x42eb41(0xe1)][_0x42eb41(0x261)](this,_0x3a4acd),this[_0x42eb41(0xdd)](_0x3a4acd),this['updateAtbGaugeSpriteVisibility']();},Sprite_Battler[_0xc24814(0x15f)]['setupAtbGaugeSprite']=function(_0xe5b6d1){const _0x25cad5=_0xc24814;if(!_0xe5b6d1)return;if(!this['_atbGaugeSprite'])return;if(_0xe5b6d1['isActor']()){}else{if(_0xe5b6d1['isEnemy']()){if(this['constructor']===Sprite_Enemy&&_0xe5b6d1['hasSvBattler']())return;if(this[_0x25cad5(0x176)]===Sprite_SvEnemy&&!_0xe5b6d1[_0x25cad5(0xec)]())return;}}this[_0x25cad5(0x18f)]['setup'](_0xe5b6d1,_0x25cad5(0x1d5));},Sprite_Battler[_0xc24814(0x15f)][_0xc24814(0xac)]=function(){const _0x3c5e3c=_0xc24814;if(!this[_0x3c5e3c(0x18f)])return;const _0x5df569=this[_0x3c5e3c(0x10f)]&&this[_0x3c5e3c(0x10f)]['isAppeared']()&&!this[_0x3c5e3c(0x10f)]['isHidden']();this[_0x3c5e3c(0x18f)][_0x3c5e3c(0xeb)]=_0x5df569;if(this[_0x3c5e3c(0x1f8)]&&this[_0x3c5e3c(0x1f8)]['_atbGaugeSprite']){if(_0x3c5e3c(0x286)!=='KyWqW')this[_0x3c5e3c(0x1f8)][_0x3c5e3c(0x18f)][_0x3c5e3c(0xeb)]=_0x5df569;else{const _0x2e2066=_0x3e088b[_0x3c5e3c(0x26a)][_0x3c5e3c(0xc3)][_0x3c5e3c(0x261)](this);return _0x2e2066[_0x3c5e3c(0x1d3)]=this[_0x3c5e3c(0x1d3)],_0x2e2066;}}},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x92)]=Sprite_Battler['prototype'][_0xc24814(0x209)],Sprite_Battler[_0xc24814(0x15f)][_0xc24814(0x209)]=function(){const _0x4ea108=_0xc24814;VisuMZ['BattleSystemATB'][_0x4ea108(0x92)][_0x4ea108(0x261)](this),this['updateAtbGaugeSpritePosition']();},Sprite_Battler[_0xc24814(0x15f)][_0xc24814(0x1a8)]=function(){const _0x2868fc=_0xc24814;if(!this[_0x2868fc(0x10f)])return;if(!this['_atbGaugeSprite'])return;const _0x128154=VisuMZ[_0x2868fc(0x26a)]['Settings'][_0x2868fc(0x206)],_0xf216df=this[_0x2868fc(0x18f)];let _0x17b84f=_0x128154[_0x2868fc(0x29d)];this[_0x2868fc(0x10f)][_0x2868fc(0x12c)]&&(_0x2868fc(0x129)!==_0x2868fc(0x129)?(_0xe990c6['BattleSystemATB'][_0x2868fc(0x165)][_0x2868fc(0x261)](this,_0x47e36c),_0x33b6b7[_0x2868fc(0x26a)][_0x2868fc(0x179)](_0x1e8724)):_0x17b84f+=this[_0x2868fc(0x10f)][_0x2868fc(0x12c)]());let _0xef485a=_0x128154['OffsetY'];if(this['_battler'][_0x2868fc(0x96)]){if(_0x2868fc(0xa4)!==_0x2868fc(0xa4)){const _0x4cb7d0=_0xe74bc4(_0x1a964f['$1']),_0x5d8796='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20keyType\x20=\x20\x27%2\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20rate\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(keyType\x20===\x20\x27Charge\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbChargeTime;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(keyType\x20===\x20\x27Cast\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbCastTime\x20/\x20Math.max(target.tpbRequiredCastTime(),\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20originalValue\x20=\x20rate;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20NaN\x20Check\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(isNaN(rate)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27NaN\x20rate\x20created\x20by\x20%2\x27.format(\x27\x27,obj.name));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27Restoring\x20rate\x20to\x20%2\x27.format(\x27\x27,originalValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20originalValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rate;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x2868fc(0x21a)](_0x4cb7d0,_0x3df62c),_0x8e013c=_0x5aaf80[_0x2868fc(0x26a)]['createKeyJS'](_0x1cf209,_0x403f20);_0x3ebde6[_0x2868fc(0x26a)]['JS'][_0x8e013c]=new _0x567cd1(_0x5d8796);}else _0xef485a+=this[_0x2868fc(0x10f)][_0x2868fc(0x96)]();}_0xf216df['x']=_0x17b84f,_0xf216df['y']=-this[_0x2868fc(0x203)]+_0xef485a;this[_0x2868fc(0x10f)]['isEnemy']()&&(this['_battler'][_0x2868fc(0xf0)]()[_0x2868fc(0x293)][_0x2868fc(0xaf)](/<HIDE (?:ATB|TPB) GAUGE>/i)&&(_0xf216df[_0x2868fc(0xeb)]=![]));if(this['checkAggroControlSystemOffsetYAdjustment']()){if(_0x2868fc(0x101)!==_0x2868fc(0x10b))_0xf216df['y']+=_0xf216df['gaugeHeight']()*_0x128154[_0x2868fc(0x251)]-0x1;else{const _0x2e8dfb=!this[_0x2868fc(0x137)]()&&_0x44c485['isTpb'](),_0x1062af=this[_0x2868fc(0xc8)](_0x263538);_0x32bd85[_0x2868fc(0x26a)][_0x2868fc(0x8a)][_0x2868fc(0x261)](this,_0x1487ec);if(this[_0x2868fc(0x9a)]()&&_0x1062af&&!this[_0x2868fc(0xc8)](_0x5f4b35))_0x2e8dfb&&this[_0x2868fc(0x137)]()&&this['_needsAtbClear']&&(this[_0x2868fc(0x15c)](),this['clearActions'](),this[_0x2868fc(0x100)]=0x0),this[_0x2868fc(0x18b)](_0x2868fc(0x25e));else _0x2e8dfb&&this[_0x2868fc(0x137)]()&&this[_0x2868fc(0x264)]()<=0x0&&(this[_0x2868fc(0xf1)](),this[_0x2868fc(0x1c6)]=_0x2868fc(0x266),this[_0x2868fc(0x22f)]=_0x40f9c5);}}this[_0x2868fc(0x13d)]['x']<0x0&&(_0x2868fc(0x2af)===_0x2868fc(0x2af)?_0xf216df[_0x2868fc(0x13d)]['x']=-Math['abs'](_0xf216df[_0x2868fc(0x13d)]['x']):_0x4f38ed=_0x2ae89e[_0x2868fc(0x26a)]['JS'][_0x1fb884][_0x2868fc(0x261)](this,this[_0x2868fc(0xd8)](),this[_0x2868fc(0xd8)]()));},Sprite_Battler['prototype']['checkAggroControlSystemOffsetYAdjustment']=function(){const _0x1f5de3=_0xc24814;if(!Imported[_0x1f5de3(0x128)])return![];if(this[_0x1f5de3(0x10f)]&&this['_battler']['isEnemy']())return![];const _0x428475=VisuMZ[_0x1f5de3(0x88)][_0x1f5de3(0xa5)]['Aggro'];if(!_0x428475[_0x1f5de3(0x282)])return![];if(!ConfigManager['aggroGauge'])return![];const _0x4ed3f3=VisuMZ[_0x1f5de3(0x26a)][_0x1f5de3(0xa5)]['Gauge'];return _0x428475[_0x1f5de3(0x251)]===_0x4ed3f3[_0x1f5de3(0x251)]&&_0x428475['AnchorX']===_0x4ed3f3[_0x1f5de3(0xa9)]&&_0x428475[_0x1f5de3(0x226)]===_0x4ed3f3[_0x1f5de3(0x226)]&&_0x428475[_0x1f5de3(0x29d)]===_0x4ed3f3[_0x1f5de3(0x29d)]&&_0x428475[_0x1f5de3(0x112)]===_0x4ed3f3[_0x1f5de3(0x112)]&&!![];},VisuMZ[_0xc24814(0x26a)]['Sprite_Battler_update']=Sprite_Battler[_0xc24814(0x15f)][_0xc24814(0x238)],Sprite_Battler[_0xc24814(0x15f)]['update']=function(){const _0x5e3169=_0xc24814;VisuMZ[_0x5e3169(0x26a)][_0x5e3169(0x277)][_0x5e3169(0x261)](this),!this[_0x5e3169(0x10f)]&&this[_0x5e3169(0x18f)]&&(this['_atbGaugeSprite'][_0x5e3169(0xeb)]=![],this['_svBattlerSprite']&&(this[_0x5e3169(0x1f8)][_0x5e3169(0x18f)][_0x5e3169(0xeb)]=![]));},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x1b4)]=Sprite_Actor[_0xc24814(0x15f)]['createStateSprite'],Sprite_Actor[_0xc24814(0x15f)][_0xc24814(0x1de)]=function(){const _0x24b4a5=_0xc24814;VisuMZ[_0x24b4a5(0x26a)][_0x24b4a5(0x1b4)][_0x24b4a5(0x261)](this),this['isShowAtbGauge']()&&this[_0x24b4a5(0xfd)]();},Sprite_Actor[_0xc24814(0x15f)][_0xc24814(0xcb)]=function(){const _0x21b0ea=_0xc24814;return VisuMZ[_0x21b0ea(0x26a)][_0x21b0ea(0xa5)][_0x21b0ea(0x206)][_0x21b0ea(0x1a4)];},Sprite_SvEnemy[_0xc24814(0x15f)][_0xc24814(0xcb)]=function(){const _0x33bf37=_0xc24814;return VisuMZ[_0x33bf37(0x26a)][_0x33bf37(0xa5)][_0x33bf37(0x206)]['ShowEnemyGauge'];},VisuMZ['BattleSystemATB'][_0xc24814(0x1bb)]=Sprite_Enemy[_0xc24814(0x15f)]['createStateIconSprite'],Sprite_Enemy[_0xc24814(0x15f)][_0xc24814(0x1f7)]=function(){const _0x957f0c=_0xc24814;if(VisuMZ['BattleSystemATB']['Settings'][_0x957f0c(0x206)][_0x957f0c(0x104)]){if(_0x957f0c(0xfc)!=='DVlju'){const _0x359784=this[_0x957f0c(0x14e)](),_0x122b9b=_0x56913a['Settings'][_0x957f0c(0x177)];if(this[_0x957f0c(0xb7)]>_0x359784)this[_0x957f0c(0xb7)]=_0x247785[_0x957f0c(0x217)](_0x359784,this[_0x957f0c(0xb7)]-_0x122b9b);else this[_0x957f0c(0xb7)]<_0x359784&&(this['opacity']=_0x28a68a[_0x957f0c(0x158)](_0x359784,this[_0x957f0c(0xb7)]+_0x122b9b));}else this[_0x957f0c(0xfd)]();}VisuMZ[_0x957f0c(0x26a)][_0x957f0c(0x1bb)]['call'](this);},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x90)]=Sprite_Enemy['prototype'][_0xc24814(0x292)],Sprite_Enemy['prototype'][_0xc24814(0x292)]=function(_0x305048){const _0x34208c=_0xc24814;VisuMZ[_0x34208c(0x26a)][_0x34208c(0x90)][_0x34208c(0x261)](this,_0x305048),(_0x305048===_0x34208c(0x162)||_0x34208c(0x244))&&this['updateAtbGaugeSpriteVisibility']();},VisuMZ['BattleSystemATB']['Game_BattlerBase_appear']=Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x162)],Game_BattlerBase[_0xc24814(0x15f)]['appear']=function(){const _0xf01356=_0xc24814;VisuMZ['BattleSystemATB']['Game_BattlerBase_appear']['call'](this);if(this[_0xf01356(0x9a)]()&&BattleManager[_0xf01356(0x97)]()&&this[_0xf01356(0x29e)]()){if(_0xf01356(0x146)===_0xf01356(0x146))this[_0xf01356(0x29e)]()[_0xf01356(0x255)]=!![],this[_0xf01356(0x29e)]()[_0xf01356(0xac)]();else{const _0x454890=_0xf44b38[_0xf01356(0x29b)]();for(let _0x961a2e=0x0;_0x961a2e<_0x454890;_0x961a2e++){this[_0xf01356(0x29a)](_0x961a2e,_0xe5531a);}}}},VisuMZ['BattleSystemATB'][_0xc24814(0x1e0)]=Sprite_Gauge[_0xc24814(0x15f)][_0xc24814(0xfb)],Sprite_Gauge[_0xc24814(0x15f)]['gaugeColor1']=function(){const _0x1ae7b0=_0xc24814;if(this['_statusType']===_0x1ae7b0(0x1d5))return this[_0x1ae7b0(0x283)](0x1);return VisuMZ[_0x1ae7b0(0x26a)][_0x1ae7b0(0x1e0)]['call'](this);},VisuMZ[_0xc24814(0x26a)]['Sprite_Gauge_gaugeColor2']=Sprite_Gauge[_0xc24814(0x15f)][_0xc24814(0xf4)],Sprite_Gauge[_0xc24814(0x15f)]['gaugeColor2']=function(){const _0x227089=_0xc24814;if(this[_0x227089(0x1b0)]==='time')return this[_0x227089(0x283)](0x2);return VisuMZ[_0x227089(0x26a)][_0x227089(0x15b)]['call'](this);},Sprite_Gauge['prototype'][_0xc24814(0x283)]=function(_0x44095b){const _0x1fa52c=_0xc24814;if(!this[_0x1fa52c(0x10f)])return ColorManager['atbColor'](_0x1fa52c(0x263)[_0x1fa52c(0x21a)](_0x44095b));if(this[_0x1fa52c(0x10f)]['atbStopped']())return ColorManager['atbColor']('stop%1'[_0x1fa52c(0x21a)](_0x44095b));if(this[_0x1fa52c(0x10f)]['isAtbCastingState']())return ColorManager[_0x1fa52c(0x175)](_0x1fa52c(0x156)[_0x1fa52c(0x21a)](_0x44095b));if(this['gaugeRate']()>=0x1)return ColorManager[_0x1fa52c(0x175)]('full%1'[_0x1fa52c(0x21a)](_0x44095b));const _0x1d9e83=VisuMZ['BattleSystemATB'][_0x1fa52c(0xa5)][_0x1fa52c(0x206)],_0x258e7c=this[_0x1fa52c(0x10f)]['paramRate'](0x6)*this[_0x1fa52c(0x10f)][_0x1fa52c(0xa2)](0x6);if(_0x258e7c<=_0x1d9e83[_0x1fa52c(0x103)])return ColorManager[_0x1fa52c(0x175)]('slow%1'[_0x1fa52c(0x21a)](_0x44095b));if(_0x258e7c>=_0x1d9e83[_0x1fa52c(0xf3)])return ColorManager[_0x1fa52c(0x175)]('fast%1'['format'](_0x44095b));return ColorManager['atbColor'](_0x1fa52c(0x263)[_0x1fa52c(0x21a)](_0x44095b));},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x1e1)]=Sprite_Gauge[_0xc24814(0x15f)]['currentValue'],Sprite_Gauge[_0xc24814(0x15f)][_0xc24814(0x208)]=function(){const _0x476fec=_0xc24814;if(this['_battler']&&this['_statusType']==='time')return this[_0x476fec(0x1ba)]();return VisuMZ[_0x476fec(0x26a)][_0x476fec(0x1e1)][_0x476fec(0x261)](this);},Sprite_Gauge[_0xc24814(0x15f)]['atbCurrentValue']=function(){const _0x965d6d=_0xc24814;if(this[_0x965d6d(0x10f)]['isAtbCastingState']()){if(_0x965d6d(0x1ec)===_0x965d6d(0x1ec))return Math[_0x965d6d(0x217)](this['_battler'][_0x965d6d(0x100)],0x0);else _0x253ce8(_0x965d6d(0x192)[_0x965d6d(0x21a)](_0xb41953,_0x54d6b6,_0x3953ff)),_0x381811[_0x965d6d(0x2a4)]();}else{if(_0x965d6d(0x186)===_0x965d6d(0x1bc))_0x321149[_0x965d6d(0x26a)][_0x965d6d(0x25c)][_0x965d6d(0x261)](this),this[_0x965d6d(0x9a)]()&&_0xc4a47f[_0x965d6d(0x97)]()&&this['battler']()&&(this[_0x965d6d(0x29e)]()['_fnord']=!![],this[_0x965d6d(0x29e)]()['updateAtbGaugeSpriteVisibility']());else return VisuMZ[_0x965d6d(0x26a)][_0x965d6d(0x1e1)][_0x965d6d(0x261)](this);}},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x205)]=Sprite_Gauge['prototype'][_0xc24814(0x259)],Sprite_Gauge['prototype'][_0xc24814(0x259)]=function(){const _0x465411=_0xc24814;if(this[_0x465411(0x10f)]&&this[_0x465411(0x1b0)]===_0x465411(0x1d5))return this['atbCurrentMaxValue']();return VisuMZ[_0x465411(0x26a)]['Sprite_Gauge_currentMaxValue'][_0x465411(0x261)](this);},Sprite_Gauge[_0xc24814(0x15f)][_0xc24814(0x1c3)]=function(){const _0x2a81fa=_0xc24814;return this[_0x2a81fa(0x10f)][_0x2a81fa(0x148)]()?Math[_0x2a81fa(0x217)](this['_battler']['tpbRequiredCastTime'](),0x1):VisuMZ['BattleSystemATB']['Sprite_Gauge_currentMaxValue'][_0x2a81fa(0x261)](this);},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x2b1)]=Window_Help[_0xc24814(0x15f)][_0xc24814(0x145)],Window_Help[_0xc24814(0x15f)][_0xc24814(0x145)]=function(_0x227631){const _0x2bd1eb=_0xc24814;if(BattleManager['isATB']()&&_0x227631&&_0x227631[_0x2bd1eb(0x293)]&&_0x227631[_0x2bd1eb(0x293)][_0x2bd1eb(0xaf)](/<(?:ATB|TPB) HELP>\s*([\s\S]*)\s*<\/(?:ATB|TPB) HELP>/i))_0x2bd1eb(0x223)!==_0x2bd1eb(0x223)?(this[_0x2bd1eb(0xf1)](),this['_tpbState']='charging',this[_0x2bd1eb(0x22f)]=_0x17b321):this['setText'](String(RegExp['$1']));else{if(_0x2bd1eb(0x167)==='AcVmK'){if(!this[_0x2bd1eb(0x260)])return;const _0x302980=this[_0x2bd1eb(0x260)][_0x2bd1eb(0x17f)];if(!_0x302980)return;_0x302980['sort'](this[_0x2bd1eb(0xa0)]['bind'](this));}else VisuMZ[_0x2bd1eb(0x26a)][_0x2bd1eb(0x2b1)][_0x2bd1eb(0x261)](this,_0x227631);}},VisuMZ[_0xc24814(0x26a)]['Window_StatusBase_placeGauge']=Window_StatusBase[_0xc24814(0x15f)][_0xc24814(0x1ab)],Window_StatusBase[_0xc24814(0x15f)][_0xc24814(0x1ab)]=function(_0x52fa75,_0x1fbae0,_0x168948,_0x2e5666){const _0x5466e7=_0xc24814;if(!this['showVisualAtbGauge'](_0x1fbae0))return;VisuMZ[_0x5466e7(0x26a)][_0x5466e7(0x26d)][_0x5466e7(0x261)](this,_0x52fa75,_0x1fbae0,_0x168948,_0x2e5666);},Window_StatusBase[_0xc24814(0x15f)][_0xc24814(0x25a)]=function(_0x1210f7){const _0x524e48=_0xc24814;if(_0x1210f7!==_0x524e48(0x1d5))return!![];if(![_0x524e48(0x2a3),_0x524e48(0x23a)][_0x524e48(0x191)](this['constructor'][_0x524e48(0x181)]))return![];if(!BattleManager[_0x524e48(0x97)]())return![];if(!ConfigManager[_0x524e48(0x1d3)])return![];return VisuMZ[_0x524e48(0x26a)]['Settings'][_0x524e48(0x206)]['ShowStatusGauge'];},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x1cb)]=Window_Options[_0xc24814(0x15f)][_0xc24814(0xc9)],Window_Options[_0xc24814(0x15f)]['addGeneralOptions']=function(){const _0x1a66a1=_0xc24814;VisuMZ[_0x1a66a1(0x26a)][_0x1a66a1(0x1cb)][_0x1a66a1(0x261)](this),this['addBattleSystemATBCommands']();},Window_Options[_0xc24814(0x15f)][_0xc24814(0x8d)]=function(){const _0x352f7a=_0xc24814;if(!BattleManager['isATB']())return;if(VisuMZ['BattleSystemATB'][_0x352f7a(0xa5)][_0x352f7a(0x291)][_0x352f7a(0x13c)]){if(_0x352f7a(0x233)===_0x352f7a(0x1fd)){const _0x574aea=[_0x352f7a(0x1d9),'Cast','After'];for(const _0x345c3b of _0x574aea){_0x423873['BattleSystemATB'][_0x352f7a(0x1e7)](_0x2b6a27,_0x345c3b);}}else this[_0x352f7a(0x139)]();}},Window_Options[_0xc24814(0x15f)][_0xc24814(0x139)]=function(){const _0x2187d1=_0xc24814,_0x54b32d=TextManager[_0x2187d1(0x1d3)],_0x5dc169='visualAtbGauge';this[_0x2187d1(0x124)](_0x54b32d,_0x5dc169);},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x2aa)]=function(){const _0x1c74e4=_0xc24814;delete this[_0x1c74e4(0x193)],delete this['_fieldAtbGaugeFaceName'],delete this['_fieldAtbGaugeFaceIndex'],delete this['_fieldAtbGaugeIconIndex'];},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0xd9)]=function(){const _0x18fb5f=_0xc24814;return this['_fieldAtbGaugeGraphicType']===undefined&&(this[_0x18fb5f(0x193)]=this[_0x18fb5f(0x222)]()),this[_0x18fb5f(0x193)];},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x222)]=function(){const _0x59b346=_0xc24814;return Sprite_FieldGaugeATB[_0x59b346(0xa5)][_0x59b346(0x117)];},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x227)]=function(){const _0x318fc8=_0xc24814;if(this[_0x318fc8(0x268)]===undefined){if('VEuSg'===_0x318fc8(0x2ba))this[_0x318fc8(0x268)]=this[_0x318fc8(0x219)]();else return _0x4de1df[_0x318fc8(0x26a)][_0x318fc8(0xa5)]['Mechanics'][_0x318fc8(0x1e8)][_0x318fc8(0x261)](this,this);}return this[_0x318fc8(0x268)];},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x219)]=function(){const _0x43fa96=_0xc24814;return Sprite_FieldGaugeATB[_0x43fa96(0xa5)][_0x43fa96(0x1be)];},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0xda)]=function(){const _0x172eca=_0xc24814;if(this[_0x172eca(0x1ef)]===undefined){if('hFiED'===_0x172eca(0x234))return _0xb9c55a[_0x172eca(0xa5)][_0x172eca(0x127)];else this['_fieldAtbGaugeFaceIndex']=this[_0x172eca(0x1c8)]();}return this[_0x172eca(0x1ef)];},Game_BattlerBase['prototype']['createFieldAtbGraphicFaceIndex']=function(){const _0x17aef8=_0xc24814;return Sprite_FieldGaugeATB['Settings'][_0x17aef8(0x127)];},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x157)]=function(){const _0x1a4726=_0xc24814;return this['_fieldAtbGaugeIconIndex']===undefined&&(this[_0x1a4726(0x23d)]=this[_0x1a4726(0x2b8)]()),this[_0x1a4726(0x23d)];},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x2b8)]=function(){const _0x47c84c=_0xc24814;return Sprite_FieldGaugeATB[_0x47c84c(0xa5)][_0x47c84c(0x1ed)];},Game_BattlerBase[_0xc24814(0x15f)][_0xc24814(0x131)]=function(_0xa14433){const _0xfb6b2d=_0xc24814;this[_0xfb6b2d(0x23d)]=_0xa14433;},Game_Actor[_0xc24814(0x15f)][_0xc24814(0x222)]=function(){const _0x487440=_0xc24814,_0x2373fb=this[_0x487440(0xe6)]()['note'];if(_0x2373fb[_0x487440(0xaf)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x487440(0x2a2);else{if(_0x2373fb[_0x487440(0xaf)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return'NaVaV'===_0x487440(0x2be)?_0x487440(0x1f4):_0x1badac[_0x487440(0x26a)][_0x487440(0x115)][_0x487440(0x261)](this);}return Sprite_FieldGaugeATB['Settings'][_0x487440(0x195)];},Game_Actor[_0xc24814(0x15f)][_0xc24814(0x219)]=function(){const _0x6a4f03=_0xc24814,_0x273e3a=this[_0x6a4f03(0xe6)]()[_0x6a4f03(0x293)];if(_0x273e3a['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i)){if('WcDlZ'!=='GQwEk')return String(RegExp['$1']);else{if(_0x3eb988!==_0x6a4f03(0x1d5))return!![];if(![_0x6a4f03(0x2a3),_0x6a4f03(0x23a)]['includes'](this['constructor']['name']))return![];if(!_0x48b4e6[_0x6a4f03(0x97)]())return![];if(!_0x24b6d2[_0x6a4f03(0x1d3)])return![];return _0x37d888[_0x6a4f03(0x26a)][_0x6a4f03(0xa5)][_0x6a4f03(0x206)]['ShowStatusGauge'];}}return this[_0x6a4f03(0x138)]();},Game_Actor[_0xc24814(0x15f)]['createFieldAtbGraphicFaceIndex']=function(){const _0x4461fb=_0xc24814,_0x1d5868=this[_0x4461fb(0xe6)]()[_0x4461fb(0x293)];if(_0x1d5868['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x4461fb(0x168)]();},Game_Actor['prototype'][_0xc24814(0x2b8)]=function(){const _0x34aa5a=_0xc24814,_0x19007b=this[_0x34aa5a(0xe6)]()[_0x34aa5a(0x293)];if(_0x19007b[_0x34aa5a(0xaf)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Sprite_FieldGaugeATB[_0x34aa5a(0xa5)]['ActorBattlerIcon'];},Game_Enemy[_0xc24814(0x15f)][_0xc24814(0x222)]=function(){const _0x19a43d=_0xc24814,_0x471fec=this[_0x19a43d(0xf0)]()[_0x19a43d(0x293)];if(_0x471fec['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x19a43d(0x2a2);else{if(_0x471fec[_0x19a43d(0xaf)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return'icon';}return Sprite_FieldGaugeATB[_0x19a43d(0xa5)][_0x19a43d(0x117)];},Game_Enemy[_0xc24814(0x15f)][_0xc24814(0x219)]=function(){const _0x567120=_0xc24814,_0x49f8ad=this[_0x567120(0xf0)]()[_0x567120(0x293)];if(_0x49f8ad[_0x567120(0xaf)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i)){if(_0x567120(0x23c)!=='wrkoR'){if(this['x']>_0x107cc6)this['x']=_0x14a4d3['max'](_0x51ed9c,this['x']-_0x442967);if(this['x']<_0x1692db)this['x']=_0x25a77d[_0x567120(0x158)](_0x149d87,this['x']+_0x3cdef0);}else return String(RegExp['$1']);}return Sprite_FieldGaugeATB[_0x567120(0xa5)][_0x567120(0x1be)];},Game_Enemy[_0xc24814(0x15f)][_0xc24814(0x1c8)]=function(){const _0x1ae73c=_0xc24814,_0x18615b=this[_0x1ae73c(0xf0)]()[_0x1ae73c(0x293)];if(_0x18615b['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Sprite_FieldGaugeATB[_0x1ae73c(0xa5)][_0x1ae73c(0x127)];},Game_Enemy['prototype'][_0xc24814(0x2b8)]=function(){const _0x98cda1=_0xc24814,_0x1e68d5=this['enemy']()[_0x98cda1(0x293)];if(_0x1e68d5[_0x98cda1(0xaf)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i)){if(_0x98cda1(0x245)===_0x98cda1(0x245))return Number(RegExp['$1']);else this['_tpbChargeTime']=0x0;}return Sprite_FieldGaugeATB['Settings'][_0x98cda1(0x1ed)];},VisuMZ[_0xc24814(0x26a)][_0xc24814(0x199)]=Scene_Battle[_0xc24814(0x15f)][_0xc24814(0x17e)],Scene_Battle[_0xc24814(0x15f)]['createAllWindows']=function(){const _0x2e1f52=_0xc24814;this['createFieldGaugeContainerATB'](),VisuMZ['BattleSystemATB'][_0x2e1f52(0x199)]['call'](this),this[_0x2e1f52(0x18c)]();},Scene_Battle[_0xc24814(0x15f)][_0xc24814(0xad)]=function(){const _0x317823=_0xc24814;if(!BattleManager[_0x317823(0x97)]())return;if(!Sprite_FieldGaugeATB[_0x317823(0xa5)][_0x317823(0x8c)])return;if(!ConfigManager['visualAtbGauge'])return;this[_0x317823(0xa1)]=new Window_Base(new Rectangle(0x0,0x0,0x0,0x0));const _0x4f34f5=this[_0x317823(0x1d4)](this['_windowLayer']);this[_0x317823(0x196)](this[_0x317823(0xa1)],_0x4f34f5);},Scene_Battle[_0xc24814(0x15f)][_0xc24814(0x18c)]=function(){const _0x3b9488=_0xc24814;if(!BattleManager[_0x3b9488(0x97)]())return;if(!Sprite_FieldGaugeATB[_0x3b9488(0xa5)][_0x3b9488(0x8c)])return;if(!ConfigManager['visualAtbGauge'])return;this['_fieldGaugeATB']=new Sprite_FieldGaugeATB(),this['_fieldGaugeATB_Container'][_0x3b9488(0x1b2)](this['_fieldGaugeATB']);};function Sprite_FieldGaugeATB(){const _0x23f813=_0xc24814;this[_0x23f813(0x272)](...arguments);}Sprite_FieldGaugeATB['prototype']=Object['create'](Sprite[_0xc24814(0x15f)]),Sprite_FieldGaugeATB['prototype']['constructor']=Sprite_FieldGaugeATB,Sprite_FieldGaugeATB[_0xc24814(0xa5)]=JsonEx[_0xc24814(0x2bb)](VisuMZ[_0xc24814(0x26a)]['Settings'][_0xc24814(0x1e2)]),Sprite_FieldGaugeATB[_0xc24814(0x15f)]['initialize']=function(){const _0xba53f2=_0xc24814;Sprite[_0xba53f2(0x15f)]['initialize'][_0xba53f2(0x261)](this),this['initMembers'](),this[_0xba53f2(0x108)](),this[_0xba53f2(0x89)]();},Sprite_FieldGaugeATB['prototype']['initMembers']=function(){this['anchor']['x']=0.5,this['anchor']['y']=0.5;},Sprite_FieldGaugeATB['prototype'][_0xc24814(0x294)]=function(){const _0x5ec708=_0xc24814;if(this[_0x5ec708(0x211)]!==undefined)return this[_0x5ec708(0x211)];const _0x13ef7c=Sprite_FieldGaugeATB['Settings'][_0x5ec708(0x2a8)];return this[_0x5ec708(0x211)]=['top',_0x5ec708(0x276)][_0x5ec708(0x191)](_0x13ef7c),this[_0x5ec708(0x211)];},Sprite_FieldGaugeATB[_0xc24814(0x15f)]['setHomeLocation']=function(){const _0x41cf5a=_0xc24814,_0x3e44d1=Sprite_FieldGaugeATB[_0x41cf5a(0xa5)]['DisplayPosition']['toLowerCase']()[_0x41cf5a(0x1a0)](),_0x24231a=Window_Base['prototype'][_0x41cf5a(0x225)](),_0x577ab6=SceneManager[_0x41cf5a(0x15d)]['_statusWindow']['height']+Math[_0x41cf5a(0x2b3)](_0x24231a*0.5);this[_0x41cf5a(0x1dd)]=0x0,this[_0x41cf5a(0x132)]=0x0;switch(_0x3e44d1){case _0x41cf5a(0x1af):this[_0x41cf5a(0x1dd)]=Math['round'](Graphics['boxWidth']*0.5),this[_0x41cf5a(0x132)]=0x60;break;case _0x41cf5a(0x276):this[_0x41cf5a(0x1dd)]=Math[_0x41cf5a(0x2b3)](Graphics[_0x41cf5a(0x1d0)]*0.5),this[_0x41cf5a(0x132)]=Graphics['boxHeight']-_0x577ab6;break;case _0x41cf5a(0x2a0):this[_0x41cf5a(0x1dd)]=0x50,this['_homeY']=Math[_0x41cf5a(0x2b3)]((Graphics[_0x41cf5a(0x18e)]-_0x577ab6)/0x2);break;case'right':this[_0x41cf5a(0x1dd)]=Graphics['boxWidth']-0x50,this[_0x41cf5a(0x132)]=Math['round']((Graphics[_0x41cf5a(0x18e)]-_0x577ab6)/0x2);break;}this[_0x41cf5a(0x1dd)]+=Sprite_FieldGaugeATB[_0x41cf5a(0xa5)][_0x41cf5a(0x21f)]||0x0,this[_0x41cf5a(0x132)]+=Sprite_FieldGaugeATB['Settings'][_0x41cf5a(0x87)]||0x0,this['x']=this[_0x41cf5a(0x1dd)],this['y']=this['_homeY'];},Sprite_FieldGaugeATB[_0xc24814(0x15f)]['createChildren']=function(){const _0x22d67f=_0xc24814;this['createFieldGaugeSkin'](),this[_0x22d67f(0x16b)](),this[_0x22d67f(0x2c6)]();},Sprite_FieldGaugeATB[_0xc24814(0x15f)][_0xc24814(0x212)]=function(){const _0x2c651a=_0xc24814;this[_0x2c651a(0xb5)]=new Sprite(),this[_0x2c651a(0xb5)][_0x2c651a(0x159)]['x']=0.5,this[_0x2c651a(0xb5)]['anchor']['y']=0.5,this[_0x2c651a(0x1b2)](this[_0x2c651a(0xb5)]);const _0x34a0b3=Sprite_FieldGaugeATB['Settings'][_0x2c651a(0x1da)];if(_0x34a0b3)this[_0x2c651a(0xb5)][_0x2c651a(0x1f1)]=ImageManager[_0x2c651a(0xdf)](_0x34a0b3);},Sprite_FieldGaugeATB[_0xc24814(0x15f)][_0xc24814(0x16b)]=function(){const _0x2ead71=_0xc24814;this['_gaugeSprite']=new Sprite(),this[_0x2ead71(0x1b2)](this[_0x2ead71(0x11c)]),this[_0x2ead71(0x2b2)]();},Sprite_FieldGaugeATB['prototype']['createGaugeBitmap']=function(){const _0x4a2b41=_0xc24814,_0x1a2851=Sprite_FieldGaugeATB[_0x4a2b41(0xa5)],_0x335c99=this[_0x4a2b41(0x294)](),_0x44399=_0x335c99?_0x1a2851[_0x4a2b41(0x1f2)]:_0x1a2851[_0x4a2b41(0xc2)],_0x1180ef=_0x335c99?_0x1a2851['GaugeThick']:_0x1a2851[_0x4a2b41(0x2cb)];this[_0x4a2b41(0x11c)]['bitmap']=new Bitmap(_0x44399,_0x1180ef),this['drawGaugeBitmap'](),this['_gaugeSprite']['x']=Math['ceil'](_0x44399/-0x2),this[_0x4a2b41(0x11c)]['y']=Math['ceil'](_0x1180ef/-0x2);},Sprite_FieldGaugeATB[_0xc24814(0x15f)][_0xc24814(0xe8)]=function(){const _0x1fd42b=_0xc24814;if(!Sprite_FieldGaugeATB[_0x1fd42b(0xa5)][_0x1fd42b(0x1a1)])return;const _0x2f2ea7=Sprite_FieldGaugeATB[_0x1fd42b(0xa5)],_0x2ffd1c=this[_0x1fd42b(0x11c)][_0x1fd42b(0x1f1)],_0x159c83=_0x2ffd1c['width'],_0x251718=_0x2ffd1c[_0x1fd42b(0x203)],_0xf0b71c=ColorManager[_0x1fd42b(0x2c2)](),_0x130ced=ColorManager[_0x1fd42b(0x2b5)](),_0x1d4a94=ColorManager[_0x1fd42b(0x221)](),_0x272286=ColorManager[_0x1fd42b(0x175)](_0x1fd42b(0xe0)),_0x307b5f=ColorManager['atbColor'](_0x1fd42b(0x105)),_0xad6a7d=this[_0x1fd42b(0x294)](),_0x46a8d6=_0x2f2ea7['GaugeDirection'],_0x2d5770=_0x2f2ea7[_0x1fd42b(0x24e)]['clamp'](0x0,0x1),_0x68b7f4=Math['ceil'](((_0xad6a7d?_0x159c83:_0x251718)-0x2)*_0x2d5770);_0x2ffd1c['fillRect'](0x0,0x0,_0x159c83,_0x251718,_0xf0b71c);let _0x27598e=0x0,_0x1e6f0c=0x0,_0x8f2c66=0x0,_0x38f259=0x0;if(_0xad6a7d&&_0x46a8d6)_0x27598e=_0x68b7f4-0x1,_0x8f2c66=_0x159c83-0x3-_0x27598e,_0x2ffd1c[_0x1fd42b(0x174)](0x1,0x1,_0x27598e,_0x251718-0x2,_0x130ced,_0x1d4a94,![]),_0x2ffd1c['gradientFillRect'](0x2+_0x27598e,0x1,_0x8f2c66,_0x251718-0x2,_0x272286,_0x307b5f,![]);else{if(_0xad6a7d&&!_0x46a8d6)_0x27598e=_0x68b7f4-0x1,_0x8f2c66=_0x159c83-0x3-_0x27598e,_0x2ffd1c[_0x1fd42b(0x174)](0x2+_0x8f2c66,0x1,_0x27598e,_0x251718-0x2,_0x130ced,_0x1d4a94,![]),_0x2ffd1c[_0x1fd42b(0x174)](0x1,0x1,_0x8f2c66,_0x251718-0x2,_0x272286,_0x307b5f,![]);else{if(!_0xad6a7d&&_0x46a8d6)_0x1fd42b(0x24c)!==_0x1fd42b(0x24c)?(_0x41afb3[_0x1fd42b(0x26a)][_0x1fd42b(0x1ee)][_0x1fd42b(0x261)](this,_0x25ba0f),this['applyBattleSystemATBUserEffect'](_0x5cb829)):(_0x1e6f0c=_0x68b7f4-0x1,_0x38f259=_0x251718-0x3-_0x1e6f0c,_0x2ffd1c[_0x1fd42b(0x174)](0x1,0x1,_0x159c83-0x2,_0x1e6f0c,_0x130ced,_0x1d4a94,!![]),_0x2ffd1c[_0x1fd42b(0x174)](0x1,0x2+_0x1e6f0c,_0x159c83-0x2,_0x38f259,_0x272286,_0x307b5f,!![]));else{if(!_0xad6a7d&&!_0x46a8d6){if(_0x1fd42b(0x1d6)===_0x1fd42b(0x1d6))_0x1e6f0c=_0x68b7f4-0x1,_0x38f259=_0x251718-0x3-_0x1e6f0c,_0x2ffd1c[_0x1fd42b(0x174)](0x1,0x2+_0x38f259,_0x159c83-0x2,_0x1e6f0c,_0x130ced,_0x1d4a94,!![]),_0x2ffd1c[_0x1fd42b(0x174)](0x1,0x1,_0x159c83-0x2,_0x38f259,_0x272286,_0x307b5f,!![]);else return _0x45b4af(_0x57fe2c['$2']);}}}}},Sprite_FieldGaugeATB['prototype'][_0xc24814(0x2c6)]=function(){const _0x36978c=_0xc24814;this[_0x36978c(0x260)]&&(_0x36978c(0x269)===_0x36978c(0xbd)?(_0x37a0ba[_0x36978c(0xe7)](_0x5ea0b9+_0x202276,_0x23a3bb,_0x55f1fe,_0x507dff),_0x97e941['y']-=_0x744cf0,_0x3542e6['anchor']['y']=0x1):this[_0x36978c(0x11c)][_0x36978c(0x299)](this[_0x36978c(0x260)])),this['_battlerContainer']=new Sprite(),this['_gaugeSprite']['addChild'](this[_0x36978c(0x260)]),this[_0x36978c(0x98)]();},Sprite_FieldGaugeATB['prototype']['createBattlerSprites']=function(){this['createEnemySprites'](),this['createActorSprites']();},Sprite_FieldGaugeATB[_0xc24814(0x15f)][_0xc24814(0x1c9)]=function(){const _0x36460d=_0xc24814,_0x32ef71=$gameTroop[_0x36460d(0x239)](),_0x4f9a60=_0x32ef71[_0x36460d(0x19c)];for(let _0x31d3de=0x0;_0x31d3de<_0x4f9a60;_0x31d3de++){this[_0x36460d(0x29a)](_0x31d3de,$gameTroop);}},Sprite_FieldGaugeATB[_0xc24814(0x15f)][_0xc24814(0x184)]=function(){const _0x33e4b2=_0xc24814,_0x7e5c9a=$gameParty[_0x33e4b2(0x29b)]();for(let _0x5150b3=0x0;_0x5150b3<_0x7e5c9a;_0x5150b3++){_0x33e4b2(0x144)!==_0x33e4b2(0x144)?(_0x4a3413&&this['canMove']()&&this[_0x33e4b2(0x2c4)]&&(this[_0x33e4b2(0x15c)](),this['clearActions'](),this[_0x33e4b2(0x100)]=0x0),this[_0x33e4b2(0x18b)](_0x33e4b2(0x25e))):this[_0x33e4b2(0x29a)](_0x5150b3,$gameParty);}},Sprite_FieldGaugeATB[_0xc24814(0x15f)]['createBattlerSprite']=function(_0x496a11,_0x30954f){const _0x4f88a1=_0xc24814,_0x85c229=new Sprite_FieldMarkerATB(_0x496a11,_0x30954f,this[_0x4f88a1(0x11c)]);this[_0x4f88a1(0x260)][_0x4f88a1(0x1b2)](_0x85c229);},Sprite_FieldGaugeATB[_0xc24814(0x15f)][_0xc24814(0x238)]=function(){const _0x38bb21=_0xc24814;Sprite[_0x38bb21(0x15f)]['update'][_0x38bb21(0x261)](this),this[_0x38bb21(0x27b)](),this[_0x38bb21(0x1aa)](),this[_0x38bb21(0x240)]();},Sprite_FieldGaugeATB[_0xc24814(0x15f)][_0xc24814(0x27b)]=function(){const _0x1ea35f=_0xc24814,_0xaf7778=Sprite_FieldGaugeATB['Settings'];if(_0xaf7778[_0x1ea35f(0x2a8)]!==_0x1ea35f(0x1af))return;if(!_0xaf7778['RepositionTopForHelp'])return;const _0x436232=SceneManager['_scene'][_0x1ea35f(0x2c9)];if(!_0x436232)return;if(_0x436232[_0x1ea35f(0xeb)]){if(_0x1ea35f(0x23b)!=='KSwDO')this['x']=this[_0x1ea35f(0x1dd)]+(_0xaf7778['RepositionTopHelpX']||0x0),this['y']=this['_homeY']+(_0xaf7778[_0x1ea35f(0x11d)]||0x0);else{const _0x2b7dd3=_0x38ffa4[_0x1ea35f(0xa5)],_0x2704cc=_0x2b7dd3['MarkerSize'];this[_0x1ea35f(0x9d)][_0x1ea35f(0x1f1)]=new _0x4012ee(_0x2704cc,_0x2704cc);const _0xbedce=this[_0x1ea35f(0x9d)]['bitmap'],_0x5a6d87=_0x5f560e[_0x1ea35f(0x158)](0x1,_0x2704cc/_0x55e3f8['width'],_0x2704cc/_0x2d71fd['height']),_0x1956d2=_0x36a777['width']*_0x5a6d87,_0x40b0ba=_0x27d273[_0x1ea35f(0x203)]*_0x5a6d87,_0x497a2d=_0x1a8e79[_0x1ea35f(0x2b3)]((_0x2704cc-_0x1956d2)/0x2),_0x4ec6de=_0x2d21dc[_0x1ea35f(0x2b3)]((_0x2704cc-_0x40b0ba)/0x2);_0xbedce[_0x1ea35f(0x20e)](_0x5eec44,0x0,0x0,_0x40ca62[_0x1ea35f(0x1f5)],_0x4bc8e7['height'],_0x497a2d,_0x4ec6de,_0x1956d2,_0x40b0ba);}}else this['x']=this['_homeX'],this['y']=this[_0x1ea35f(0x132)];const _0x9964d6=SceneManager[_0x1ea35f(0x15d)][_0x1ea35f(0x164)];this['x']+=_0x9964d6['x'],this['y']+=_0x9964d6['y'];},Sprite_FieldGaugeATB[_0xc24814(0x15f)]['updateBattleContainerOrder']=function(){const _0x55c5ed=_0xc24814;if(!this[_0x55c5ed(0x260)])return;const _0x46a255=this[_0x55c5ed(0x260)][_0x55c5ed(0x17f)];if(!_0x46a255)return;_0x46a255['sort'](this['compareBattlerSprites'][_0x55c5ed(0x295)](this));},Sprite_FieldGaugeATB[_0xc24814(0x15f)][_0xc24814(0xa0)]=function(_0x11a2d9,_0x1acc13){const _0x441e4e=_0xc24814,_0x3b18b0=this[_0x441e4e(0x294)](),_0x12db3b=Sprite_FieldGaugeATB[_0x441e4e(0xa5)][_0x441e4e(0xd5)];if(_0x3b18b0&&_0x12db3b){if('HOPyW'===_0x441e4e(0xf5))return _0x11a2d9['x']-_0x1acc13['x'];else{if(this[_0x441e4e(0x211)]!==_0x49e266)return this[_0x441e4e(0x211)];const _0x1eba38=_0x56a377['Settings'][_0x441e4e(0x2a8)];return this[_0x441e4e(0x211)]=[_0x441e4e(0x1af),_0x441e4e(0x276)][_0x441e4e(0x191)](_0x1eba38),this['_horz'];}}else{if(_0x3b18b0&&!_0x12db3b)return _0x1acc13['x']-_0x11a2d9['x'];else{if(!_0x3b18b0&&_0x12db3b){if(_0x441e4e(0x10c)===_0x441e4e(0x10c))return _0x11a2d9['y']-_0x1acc13['y'];else this[_0x441e4e(0x139)]();}else{if(!_0x3b18b0&&!_0x12db3b)return _0x441e4e(0x182)!==_0x441e4e(0x182)?_0x3eb5ce[_0x441e4e(0x26a)][_0x441e4e(0x161)][_0x441e4e(0x261)](this):_0x1acc13['y']-_0x11a2d9['y'];}}}},Sprite_FieldGaugeATB['prototype'][_0xc24814(0x240)]=function(){const _0x4ff2a2=_0xc24814;this[_0x4ff2a2(0xeb)]=$gameSystem[_0x4ff2a2(0x1e4)]();};function _0x12ef(_0x21c0c7,_0x772e52){const _0x15c87f=_0x15c8();return _0x12ef=function(_0x12efab,_0xaf097){_0x12efab=_0x12efab-0x87;let _0x5416af=_0x15c87f[_0x12efab];return _0x5416af;},_0x12ef(_0x21c0c7,_0x772e52);}function Sprite_FieldMarkerATB(){const _0x4a1fbc=_0xc24814;this[_0x4a1fbc(0x272)](...arguments);}Sprite_FieldMarkerATB['prototype']=Object[_0xc24814(0x18a)](Sprite_Clickable['prototype']),Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x176)]=Sprite_FieldMarkerATB,Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x272)]=function(_0x3a7d31,_0x589f93,_0xfc6fb8){const _0x2fc1c6=_0xc24814;this[_0x2fc1c6(0x297)]=_0x3a7d31,this[_0x2fc1c6(0x16c)]=_0x589f93,this[_0x2fc1c6(0x11c)]=_0xfc6fb8,Sprite_Clickable['prototype'][_0x2fc1c6(0x272)][_0x2fc1c6(0x261)](this),this[_0x2fc1c6(0x274)](),this[_0x2fc1c6(0x89)](),this['opacity']=this['targetOpacity']();},Sprite_FieldMarkerATB[_0xc24814(0x15f)]['initMembers']=function(){const _0x3a0e76=_0xc24814;this[_0x3a0e76(0x159)]['x']=0.5,this['anchor']['y']=0.5;},Sprite_FieldMarkerATB['prototype'][_0xc24814(0x89)]=function(){const _0x396a11=_0xc24814;this[_0x396a11(0xf9)](),this[_0x396a11(0x18d)](),this[_0x396a11(0x14d)](),this[_0x396a11(0x153)](),this[_0x396a11(0x170)](),this[_0x396a11(0x1dc)](!![]);},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0xf9)]=function(){const _0xe7f74b=_0xc24814;if(!Sprite_FieldGaugeATB[_0xe7f74b(0xa5)][_0xe7f74b(0x26c)])return;const _0x41d30b=Sprite_FieldGaugeATB[_0xe7f74b(0xa5)],_0x161575=this[_0xe7f74b(0x16c)]===$gameParty?_0xe7f74b(0x12b):_0xe7f74b(0xce),_0x4bc74e=_0xe7f74b(0x235)[_0xe7f74b(0x21a)](_0x161575),_0x4dbed7=new Sprite();_0x4dbed7[_0xe7f74b(0x159)]['x']=this[_0xe7f74b(0x159)]['x'],_0x4dbed7[_0xe7f74b(0x159)]['y']=this[_0xe7f74b(0x159)]['y'];if(_0x41d30b[_0x4bc74e])_0x4dbed7[_0xe7f74b(0x1f1)]=ImageManager[_0xe7f74b(0xdf)](_0x41d30b[_0x4bc74e]);else{if(_0xe7f74b(0x1d1)==='PmQCS'){const _0x492c6e=this['tpbRequiredCastTime'](),_0x2c5c38=_0x492c6e*_0x40829b;this['_tpbCastTime']=(this['_tpbCastTime']+_0x2c5c38)[_0xe7f74b(0x1c5)](0x0,_0x492c6e);}else{const _0x17755b=_0x41d30b['MarkerSize'];_0x4dbed7[_0xe7f74b(0x1f1)]=new Bitmap(_0x17755b,_0x17755b);const _0x39246f=ColorManager['getColor'](_0x41d30b[_0xe7f74b(0x28b)[_0xe7f74b(0x21a)](_0x161575)]),_0x110865=ColorManager['getColor'](_0x41d30b[_0xe7f74b(0xff)[_0xe7f74b(0x21a)](_0x161575)]);_0x4dbed7[_0xe7f74b(0x1f1)]['gradientFillRect'](0x0,0x0,_0x17755b,_0x17755b,_0x39246f,_0x110865,!![]);}}this[_0xe7f74b(0x249)]=_0x4dbed7,this[_0xe7f74b(0x1b2)](this[_0xe7f74b(0x249)]),this[_0xe7f74b(0x1f5)]=this[_0xe7f74b(0x249)][_0xe7f74b(0x1f5)],this[_0xe7f74b(0x203)]=this[_0xe7f74b(0x249)][_0xe7f74b(0x203)];},Sprite_FieldMarkerATB['prototype'][_0xc24814(0x18d)]=function(){const _0x21d613=_0xc24814,_0x46a19=new Sprite();_0x46a19[_0x21d613(0x159)]['x']=this['anchor']['x'],_0x46a19[_0x21d613(0x159)]['y']=this[_0x21d613(0x159)]['y'],this['_graphicSprite']=_0x46a19,this[_0x21d613(0x1b2)](this['_graphicSprite']),this[_0x21d613(0x1a7)]();},Sprite_FieldMarkerATB['prototype'][_0xc24814(0x14d)]=function(){const _0x5310e8=_0xc24814;if(!Sprite_FieldGaugeATB[_0x5310e8(0xa5)][_0x5310e8(0xbc)])return;const _0x22ac36=Sprite_FieldGaugeATB[_0x5310e8(0xa5)],_0x21149c=this['_unit']===$gameParty?'Actor':_0x5310e8(0xce),_0x5bb43e=_0x5310e8(0x1a9)[_0x5310e8(0x21a)](_0x21149c),_0x36e4ce=new Sprite();_0x36e4ce[_0x5310e8(0x159)]['x']=this[_0x5310e8(0x159)]['x'],_0x36e4ce['anchor']['y']=this[_0x5310e8(0x159)]['y'];if(_0x22ac36[_0x5bb43e])_0x36e4ce[_0x5310e8(0x1f1)]=ImageManager[_0x5310e8(0xdf)](_0x22ac36[_0x5bb43e]);else{if(_0x5310e8(0x9b)!==_0x5310e8(0x9b))return this[_0x5310e8(0x10f)][_0x5310e8(0x148)]()?_0x66700c[_0x5310e8(0x217)](this[_0x5310e8(0x10f)][_0x5310e8(0x1f6)](),0x1):_0xeb4d67[_0x5310e8(0x26a)]['Sprite_Gauge_currentMaxValue']['call'](this);else{let _0x1495e1=_0x22ac36[_0x5310e8(0x172)],_0x173b5e=_0x22ac36[_0x5310e8(0x20c)];_0x36e4ce[_0x5310e8(0x1f1)]=new Bitmap(_0x1495e1,_0x1495e1);const _0x5b8d27=_0x5310e8(0xa8),_0x4be606=ColorManager[_0x5310e8(0x163)](_0x22ac36['%1BorderColor'[_0x5310e8(0x21a)](_0x21149c)]);_0x36e4ce[_0x5310e8(0x1f1)][_0x5310e8(0x254)](0x0,0x0,_0x1495e1,_0x1495e1,_0x5b8d27),_0x1495e1-=0x2,_0x36e4ce[_0x5310e8(0x1f1)][_0x5310e8(0x254)](0x1,0x1,_0x1495e1,_0x1495e1,_0x4be606),_0x1495e1-=_0x173b5e*0x2,_0x36e4ce[_0x5310e8(0x1f1)]['fillRect'](0x1+_0x173b5e,0x1+_0x173b5e,_0x1495e1,_0x1495e1,_0x5b8d27),_0x1495e1-=0x2,_0x173b5e+=0x1,_0x36e4ce[_0x5310e8(0x1f1)]['clearRect'](0x1+_0x173b5e,0x1+_0x173b5e,_0x1495e1,_0x1495e1);}}this['_backgroundSprite']=_0x36e4ce,this['addChild'](this[_0x5310e8(0x249)]);},Sprite_FieldMarkerATB['prototype'][_0xc24814(0x153)]=function(){const _0x3b51d3=_0xc24814,_0x23aabe=Sprite_FieldGaugeATB[_0x3b51d3(0xa5)];if(!_0x23aabe[_0x3b51d3(0xd0)])return;if(this[_0x3b51d3(0x16c)]===$gameParty)return;const _0x414f78=_0x23aabe[_0x3b51d3(0x172)],_0xad7b53=new Sprite();_0xad7b53['anchor']['x']=this[_0x3b51d3(0x159)]['x'],_0xad7b53[_0x3b51d3(0x159)]['y']=this[_0x3b51d3(0x159)]['y'],_0xad7b53[_0x3b51d3(0x1f1)]=new Bitmap(_0x414f78,_0x414f78),this[_0x3b51d3(0xcf)]=_0xad7b53,this[_0x3b51d3(0x1b2)](this[_0x3b51d3(0xcf)]);},Sprite_FieldMarkerATB['prototype'][_0xc24814(0x170)]=function(){const _0x44e3c1=_0xc24814,_0x5a967e=Sprite_FieldGaugeATB[_0x44e3c1(0xa5)];if(!_0x5a967e[_0x44e3c1(0x28f)])return;const _0x49b081=new Sprite();_0x49b081[_0x44e3c1(0x159)]['x']=this['anchor']['x'],_0x49b081['anchor']['y']=this[_0x44e3c1(0x159)]['y'],this[_0x44e3c1(0x19a)](_0x49b081),this[_0x44e3c1(0x183)]=_0x49b081,this['addChild'](this[_0x44e3c1(0x183)]);},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x19a)]=function(_0x4475c0){const _0x55dd02=_0xc24814,_0x227def=Sprite_FieldGaugeATB[_0x55dd02(0xa5)],_0x2abcce=_0x227def[_0x55dd02(0x172)],_0x4c407e=Math[_0x55dd02(0x2b3)](_0x2abcce/0x2),_0x12517d=this[_0x55dd02(0x294)](),_0x208578=this[_0x55dd02(0x16c)]===$gameParty?'Actor':_0x55dd02(0xce),_0x244a18=_0x227def['%1Side'[_0x55dd02(0x21a)](_0x208578)];_0x4475c0['bitmap']=ImageManager[_0x55dd02(0xdf)](_0x227def[_0x55dd02(0xb9)]);const _0x112cd6=0x18,_0x3ad51b=_0x112cd6/0x2,_0x4621a9=0x60+_0x112cd6,_0x5c6050=0x0+_0x112cd6;if(_0x12517d&&_0x244a18)_0x4475c0[_0x55dd02(0xe7)](_0x4621a9+_0x3ad51b,_0x5c6050+_0x3ad51b+_0x112cd6,_0x112cd6,_0x3ad51b),_0x4475c0['y']+=_0x4c407e,_0x4475c0['anchor']['y']=0x0;else{if(_0x12517d&&!_0x244a18)_0x4475c0[_0x55dd02(0xe7)](_0x4621a9+_0x3ad51b,_0x5c6050,_0x112cd6,_0x3ad51b),_0x4475c0['y']-=_0x4c407e,_0x4475c0[_0x55dd02(0x159)]['y']=0x1;else{if(!_0x12517d&&_0x244a18)_0x4475c0[_0x55dd02(0xe7)](_0x4621a9,_0x5c6050+_0x3ad51b,_0x3ad51b,_0x112cd6),_0x4475c0['x']-=Math[_0x55dd02(0xed)](_0x4c407e*1.75),_0x4475c0[_0x55dd02(0x159)]['x']=0x0;else!_0x12517d&&!_0x244a18&&(_0x4475c0[_0x55dd02(0xe7)](_0x4621a9+_0x112cd6+_0x3ad51b,_0x5c6050+_0x3ad51b,_0x3ad51b,_0x112cd6),_0x4475c0['x']+=Math[_0x55dd02(0xed)](_0x4c407e*1.75),_0x4475c0[_0x55dd02(0x159)]['x']=0x1);}}},Sprite_FieldMarkerATB[_0xc24814(0x15f)]['battler']=function(){const _0x2737c1=_0xc24814;if(this[_0x2737c1(0x16c)]===$gameParty){if(_0x2737c1(0x8e)===_0x2737c1(0x250))this[_0x2737c1(0x29e)]()[_0x2737c1(0x255)]=!![],this[_0x2737c1(0x29e)]()['updateAtbGaugeSpriteVisibility']();else return $gameParty[_0x2737c1(0x2b7)]()[this['_index']];}else return $gameTroop[_0x2737c1(0x239)]()[this[_0x2737c1(0x297)]];},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x238)]=function(){const _0x58d390=_0xc24814;Sprite_Clickable[_0x58d390(0x15f)]['update'][_0x58d390(0x261)](this),this[_0x58d390(0x147)](),this['updatePositionOffset'](),this['updatePositionOnGauge'](),this['updateGraphic'](),this[_0x58d390(0xba)](),this[_0x58d390(0x21b)](),this['updateSelectionEffect']();},Sprite_FieldMarkerATB[_0xc24814(0x15f)]['updateOpacity']=function(){const _0x403771=_0xc24814,_0x55b5b6=this['targetOpacity'](),_0x13df5d=Sprite_FieldGaugeATB[_0x403771(0xa5)][_0x403771(0x177)];if(this[_0x403771(0xb7)]>_0x55b5b6)this['opacity']=Math[_0x403771(0x217)](_0x55b5b6,this['opacity']-_0x13df5d);else this[_0x403771(0xb7)]<_0x55b5b6&&(this[_0x403771(0xb7)]=Math[_0x403771(0x158)](_0x55b5b6,this[_0x403771(0xb7)]+_0x13df5d));},Sprite_FieldMarkerATB[_0xc24814(0x15f)]['targetOpacity']=function(){const _0x56ac68=_0xc24814,_0x1d6657=this[_0x56ac68(0x29e)]();if(!_0x1d6657)return 0x0;if(_0x1d6657[_0x56ac68(0x142)]())return 0x0;if(_0x1d6657[_0x56ac68(0x135)]())return 0x0;return 0xff;},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x294)]=function(){const _0x2317d9=_0xc24814;if(this[_0x2317d9(0x211)]!==undefined)return this['_horz'];const _0x50202e=Sprite_FieldGaugeATB[_0x2317d9(0xa5)][_0x2317d9(0x2a8)];return this[_0x2317d9(0x211)]=[_0x2317d9(0x1af),'bottom'][_0x2317d9(0x191)](_0x50202e),this['_horz'];},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x2ac)]=function(){const _0x21d568=_0xc24814,_0x435f2c=Sprite_FieldGaugeATB[_0x21d568(0xa5)],_0x572a71=this[_0x21d568(0x294)](),_0x379e3e=this[_0x21d568(0x16c)]===$gameParty?_0x21d568(0x12b):_0x21d568(0xce),_0x409795=_0x435f2c[_0x21d568(0x121)],_0x472886=_0x435f2c[_0x21d568(0x185)['format'](_0x379e3e)];if(_0x572a71)this['y']=_0x435f2c[_0x21d568(0xc2)]/0x2,this['y']+=_0x472886?-_0x409795:_0x409795;else{if('EMFXR'==='xWTlW'){if(this['_graphicSv']!==_0x4902cb['svBattlerName']())return this[_0x21d568(0x1a7)]();}else this['x']=_0x435f2c[_0x21d568(0xc2)]/0x2,this['x']+=_0x472886?_0x409795:-_0x409795;}},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x1dc)]=function(_0x451f99){const _0x2f28b0=_0xc24814,_0xa3e78e=this[_0x2f28b0(0x29e)]();if(!_0xa3e78e)return;const _0x9b350f=Sprite_FieldGaugeATB[_0x2f28b0(0xa5)],_0x1fa25e=this[_0x2f28b0(0x294)](),_0x2b33da=this[_0x2f28b0(0x28d)](),_0x23511e=_0x451f99?Infinity:_0x9b350f[_0x2f28b0(0x202)];if(_0x1fa25e&&this['x']!==_0x2b33da){if(_0x2f28b0(0xa6)===_0x2f28b0(0x12f))this[_0x2f28b0(0xeb)]=_0x261dd9['isBattleSystemATBFieldGaugeVisible']();else{if(this['x']>_0x2b33da)this['x']=Math[_0x2f28b0(0x217)](_0x2b33da,this['x']-_0x23511e);if(this['x']<_0x2b33da)this['x']=Math[_0x2f28b0(0x158)](_0x2b33da,this['x']+_0x23511e);}}else{if(!_0x1fa25e&&this['x']!==_0x2b33da){if(_0x2f28b0(0x1b5)==='BfUcO')this[_0x2f28b0(0xbe)]();else{if(this['y']>_0x2b33da)this['y']=Math['max'](_0x2b33da,this['y']-_0x23511e);if(this['y']<_0x2b33da)this['y']=Math[_0x2f28b0(0x158)](_0x2b33da,this['y']+_0x23511e);}}}},Sprite_FieldMarkerATB['prototype'][_0xc24814(0x28d)]=function(){const _0x47368f=_0xc24814,_0x3e3eb8=Sprite_FieldGaugeATB['Settings'],_0xda97e8=this['battler'](),_0x34c25e=this[_0x47368f(0x294)](),_0x1963e7=this[_0x47368f(0x11c)]['bitmap'][_0x47368f(0x1f5)],_0x360787=this[_0x47368f(0x11c)]['bitmap'][_0x47368f(0x203)],_0x32b963=_0x3e3eb8[_0x47368f(0x24e)]['clamp'](0x0,0x1),_0x52bd16=_0x3e3eb8[_0x47368f(0xd5)];let _0x14a86c=_0xda97e8[_0x47368f(0x284)]()*_0x32b963;_0x14a86c+=(0x1-_0x32b963)*_0xda97e8[_0x47368f(0x241)]();if(_0xda97e8===BattleManager[_0x47368f(0x160)])_0x14a86c=0x1;if(!_0x52bd16)_0x14a86c=0x1-_0x14a86c;let _0x59d5ba=0x0;if(_0x34c25e)_0x59d5ba=_0x14a86c*_0x1963e7;else!_0x34c25e&&(_0x59d5ba=_0x14a86c*_0x360787);return Math[_0x47368f(0x2b3)](_0x59d5ba);},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x210)]=function(){const _0xb83eb5=_0xc24814,_0x354d68=this[_0xb83eb5(0x29e)]();if(!_0x354d68)return;const _0x2aa903=Sprite_FieldGaugeATB['Settings'],_0x5b2f03=this['_unit']===$gameParty?_0xb83eb5(0x12b):_0xb83eb5(0xce);let _0x3b43e4=_0x354d68[_0xb83eb5(0xd9)]();if(_0x354d68[_0xb83eb5(0x26b)]()&&_0x3b43e4==='enemy')_0x3b43e4=_0xb83eb5(0x2a2);else _0x354d68[_0xb83eb5(0x9a)]()&&_0x3b43e4===_0xb83eb5(0x2c3)&&(_0xb83eb5(0x27f)==='KlIMA'?_0x3b43e4=_0xb83eb5(0xf0):this['opacity']=_0x59cfef[_0xb83eb5(0x217)](_0x2f9d2f,this[_0xb83eb5(0xb7)]-_0x29ad9d));if(this[_0xb83eb5(0x1ff)]!==_0x3b43e4){if(_0xb83eb5(0x17b)===_0xb83eb5(0x17b))return this[_0xb83eb5(0x1a7)]();else this[_0xb83eb5(0x29a)](_0x93a9e0,_0x5bcadf);}switch(this['_graphicType']){case'face':if(this[_0xb83eb5(0x204)]!==_0x354d68[_0xb83eb5(0x227)]())return this[_0xb83eb5(0x1a7)]();if(this[_0xb83eb5(0x265)]!==_0x354d68[_0xb83eb5(0xda)]())return this[_0xb83eb5(0x1a7)]();break;case _0xb83eb5(0x1f4):if(this[_0xb83eb5(0x252)]!==_0x354d68['fieldAtbGraphicIconIndex']())return _0xb83eb5(0x13e)!==_0xb83eb5(0x1ca)?this['processUpdateGraphic']():_0x37b048[_0xb83eb5(0x26a)][_0xb83eb5(0x1c1)]['call'](this);break;case _0xb83eb5(0xf0):if(_0x354d68[_0xb83eb5(0xec)]()){if(this[_0xb83eb5(0xf8)]!==_0x354d68[_0xb83eb5(0x21d)]())return this[_0xb83eb5(0x1a7)]();}else{if(this[_0xb83eb5(0xb3)]!==_0x354d68[_0xb83eb5(0x1a6)]()){if(_0xb83eb5(0x1b8)===_0xb83eb5(0x116))this[_0xb83eb5(0x15c)]();else return this['processUpdateGraphic']();}}break;case _0xb83eb5(0x2c3):if(_0x354d68[_0xb83eb5(0x26b)]()){if(this[_0xb83eb5(0xf8)]!==_0x354d68[_0xb83eb5(0x1a6)]()){if(_0xb83eb5(0x114)===_0xb83eb5(0x1fe)){if(!_0x41ece7['Settings'][_0xb83eb5(0xbc)])return;const _0x6cd381=_0x4fee4f[_0xb83eb5(0xa5)],_0x5c2d8d=this['_unit']===_0x4b824e?_0xb83eb5(0x12b):_0xb83eb5(0xce),_0x5fb413=_0xb83eb5(0x1a9)[_0xb83eb5(0x21a)](_0x5c2d8d),_0x16122b=new _0x102dda();_0x16122b[_0xb83eb5(0x159)]['x']=this['anchor']['x'],_0x16122b[_0xb83eb5(0x159)]['y']=this[_0xb83eb5(0x159)]['y'];if(_0x6cd381[_0x5fb413])_0x16122b['bitmap']=_0x372eaa[_0xb83eb5(0xdf)](_0x6cd381[_0x5fb413]);else{let _0x5171fd=_0x6cd381['MarkerSize'],_0x9981f5=_0x6cd381[_0xb83eb5(0x20c)];_0x16122b[_0xb83eb5(0x1f1)]=new _0x357ba9(_0x5171fd,_0x5171fd);const _0xcf2664=_0xb83eb5(0xa8),_0x48074a=_0x1bc182['getColor'](_0x6cd381[_0xb83eb5(0x24f)[_0xb83eb5(0x21a)](_0x5c2d8d)]);_0x16122b[_0xb83eb5(0x1f1)][_0xb83eb5(0x254)](0x0,0x0,_0x5171fd,_0x5171fd,_0xcf2664),_0x5171fd-=0x2,_0x16122b[_0xb83eb5(0x1f1)][_0xb83eb5(0x254)](0x1,0x1,_0x5171fd,_0x5171fd,_0x48074a),_0x5171fd-=_0x9981f5*0x2,_0x16122b[_0xb83eb5(0x1f1)][_0xb83eb5(0x254)](0x1+_0x9981f5,0x1+_0x9981f5,_0x5171fd,_0x5171fd,_0xcf2664),_0x5171fd-=0x2,_0x9981f5+=0x1,_0x16122b[_0xb83eb5(0x1f1)][_0xb83eb5(0xc4)](0x1+_0x9981f5,0x1+_0x9981f5,_0x5171fd,_0x5171fd);}this[_0xb83eb5(0x249)]=_0x16122b,this['addChild'](this['_backgroundSprite']);}else return this['processUpdateGraphic']();}}else{if(this[_0xb83eb5(0xb3)]!==_0x354d68['battlerName']())return this[_0xb83eb5(0x1a7)]();}break;}},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x1a7)]=function(){const _0x3f95ee=_0xc24814,_0x113575=this['battler']();if(!_0x113575)return;this[_0x3f95ee(0x1ff)]=_0x113575[_0x3f95ee(0xd9)]();if(_0x113575[_0x3f95ee(0x26b)]()&&this['_graphicType']===_0x3f95ee(0xf0))_0x3f95ee(0x288)===_0x3f95ee(0x288)?this['_graphicType']=_0x3f95ee(0x2a2):(_0x4185de=_0x3af8d9-0x1,_0x56e832=_0x29b20d-0x3-_0x5bef6f,_0x411b0a[_0x3f95ee(0x174)](0x1,0x1,_0x1871c0-0x2,_0x230bf2,_0x305dc8,_0x38c3b6,!![]),_0x387c08[_0x3f95ee(0x174)](0x1,0x2+_0x1d9ff5,_0x260dac-0x2,_0x337987,_0x4c7899,_0x339bb7,!![]));else _0x113575[_0x3f95ee(0x9a)]()&&this[_0x3f95ee(0x1ff)]==='svactor'&&(this[_0x3f95ee(0x1ff)]=_0x3f95ee(0xf0));let _0x369692;switch(this[_0x3f95ee(0x1ff)]){case'face':this[_0x3f95ee(0x204)]=_0x113575[_0x3f95ee(0x227)](),this[_0x3f95ee(0x265)]=_0x113575['fieldAtbGraphicFaceIndex'](),_0x369692=ImageManager['loadFace'](this[_0x3f95ee(0x204)]),_0x369692[_0x3f95ee(0x125)](this[_0x3f95ee(0x287)]['bind'](this,_0x369692));break;case _0x3f95ee(0x1f4):this['_graphicIconIndex']=_0x113575[_0x3f95ee(0x157)](),_0x369692=ImageManager[_0x3f95ee(0xdf)]('IconSet'),_0x369692['addLoadListener'](this[_0x3f95ee(0x1fb)][_0x3f95ee(0x295)](this,_0x369692));break;case _0x3f95ee(0xf0):if(_0x113575[_0x3f95ee(0xec)]())this[_0x3f95ee(0xf8)]=_0x113575[_0x3f95ee(0x21d)](),_0x369692=ImageManager['loadSvActor'](this[_0x3f95ee(0xf8)]),_0x369692['addLoadListener'](this[_0x3f95ee(0xc5)][_0x3f95ee(0x295)](this,_0x369692));else $gameSystem[_0x3f95ee(0x1b1)]()?(this[_0x3f95ee(0xb3)]=_0x113575[_0x3f95ee(0x1a6)](),_0x369692=ImageManager['loadSvEnemy'](this[_0x3f95ee(0xb3)]),_0x369692[_0x3f95ee(0x125)](this[_0x3f95ee(0xdb)][_0x3f95ee(0x295)](this,_0x369692))):(this[_0x3f95ee(0xb3)]=_0x113575[_0x3f95ee(0x1a6)](),_0x369692=ImageManager[_0x3f95ee(0x149)](this[_0x3f95ee(0xb3)]),_0x369692[_0x3f95ee(0x125)](this['changeEnemyGraphicBitmap'][_0x3f95ee(0x295)](this,_0x369692)));break;case _0x3f95ee(0x2c3):this[_0x3f95ee(0xf8)]=_0x113575[_0x3f95ee(0x1a6)](),_0x369692=ImageManager['loadSvActor'](this['_graphicSv']),_0x369692[_0x3f95ee(0x125)](this[_0x3f95ee(0xc5)][_0x3f95ee(0x295)](this,_0x369692));break;}},Sprite_FieldMarkerATB['prototype'][_0xc24814(0x287)]=function(_0x16bbc2){const _0x35d4af=_0xc24814,_0x3389b3=Sprite_FieldGaugeATB['Settings'],_0x40cc7c=_0x3389b3['MarkerSize'],_0x3dc348=this[_0x35d4af(0x265)];this['_graphicSprite']['bitmap']=new Bitmap(_0x40cc7c,_0x40cc7c);const _0x218ba3=this[_0x35d4af(0x9d)]['bitmap'],_0x4ae498=ImageManager['faceWidth'],_0x2d4608=ImageManager[_0x35d4af(0x220)],_0x2f3c36=ImageManager[_0x35d4af(0x26f)],_0x2a343f=ImageManager[_0x35d4af(0x220)],_0x1e7268=_0x3dc348%0x4*_0x4ae498+(_0x4ae498-_0x2f3c36)/0x2,_0xca5643=Math[_0x35d4af(0xb1)](_0x3dc348/0x4)*_0x2d4608+(_0x2d4608-_0x2a343f)/0x2;_0x218ba3[_0x35d4af(0x20e)](_0x16bbc2,_0x1e7268,_0xca5643,_0x2f3c36,_0x2a343f,0x0,0x0,_0x40cc7c,_0x40cc7c);},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x1fb)]=function(_0x35dd9a){const _0x465811=_0xc24814,_0x5bcec6=Sprite_FieldGaugeATB['Settings'],_0x16032c=_0x5bcec6[_0x465811(0x172)],_0xecbffb=this[_0x465811(0x252)];this[_0x465811(0x9d)][_0x465811(0x1f1)]=new Bitmap(_0x16032c,_0x16032c);const _0x1d9454=this[_0x465811(0x9d)][_0x465811(0x1f1)],_0x211dbb=ImageManager['iconWidth'],_0x3c9e1d=ImageManager['iconHeight'],_0x25828b=_0xecbffb%0x10*_0x211dbb,_0x39177b=Math[_0x465811(0xb1)](_0xecbffb/0x10)*_0x3c9e1d;_0x1d9454['blt'](_0x35dd9a,_0x25828b,_0x39177b,_0x211dbb,_0x3c9e1d,0x0,0x0,_0x16032c,_0x16032c);},Sprite_FieldMarkerATB[_0xc24814(0x15f)]['changeSvActorGraphicBitmap']=function(_0x5ad171){const _0xf1bcb3=_0xc24814,_0x226bb3=Sprite_FieldGaugeATB[_0xf1bcb3(0xa5)],_0x495375=_0x226bb3[_0xf1bcb3(0x172)];this[_0xf1bcb3(0x9d)][_0xf1bcb3(0x1f1)]=new Bitmap(_0x495375,_0x495375);const _0x577a6d=this[_0xf1bcb3(0x9d)]['bitmap'],_0x35d43f=this[_0xf1bcb3(0xf8)][_0xf1bcb3(0xaf)](/\$/i),_0x188deb=_0x35d43f?0x1:ImageManager[_0xf1bcb3(0x1f9)],_0x57834f=_0x35d43f?0x1:ImageManager['svActorVertCells'],_0x5e2404=_0x5ad171[_0xf1bcb3(0x1f5)]/_0x188deb,_0x205f36=_0x5ad171[_0xf1bcb3(0x203)]/_0x57834f,_0x38b8da=Math['min'](0x1,_0x495375/_0x5e2404,_0x495375/_0x205f36),_0x5176c=_0x5e2404*_0x38b8da,_0x42931d=_0x205f36*_0x38b8da,_0x2bae55=Math[_0xf1bcb3(0x2b3)]((_0x495375-_0x5176c)/0x2),_0x198be2=Math[_0xf1bcb3(0x2b3)]((_0x495375-_0x42931d)/0x2);_0x577a6d[_0xf1bcb3(0x20e)](_0x5ad171,0x0,0x0,_0x5e2404,_0x205f36,_0x2bae55,_0x198be2,_0x5176c,_0x42931d);},Sprite_FieldMarkerATB[_0xc24814(0x15f)]['changeEnemyGraphicBitmap']=function(_0x3f9732){const _0xe51d84=_0xc24814,_0x4e9ef4=Sprite_FieldGaugeATB[_0xe51d84(0xa5)],_0x4c3add=_0x4e9ef4['MarkerSize'];this[_0xe51d84(0x9d)][_0xe51d84(0x1f1)]=new Bitmap(_0x4c3add,_0x4c3add);const _0x10b2c5=this[_0xe51d84(0x9d)][_0xe51d84(0x1f1)],_0x2b1cbe=Math[_0xe51d84(0x158)](0x1,_0x4c3add/_0x3f9732[_0xe51d84(0x1f5)],_0x4c3add/_0x3f9732['height']),_0x599dec=_0x3f9732['width']*_0x2b1cbe,_0x5dfb2c=_0x3f9732['height']*_0x2b1cbe,_0x2fadc6=Math[_0xe51d84(0x2b3)]((_0x4c3add-_0x599dec)/0x2),_0x2798b9=Math[_0xe51d84(0x2b3)]((_0x4c3add-_0x5dfb2c)/0x2);_0x10b2c5[_0xe51d84(0x20e)](_0x3f9732,0x0,0x0,_0x3f9732[_0xe51d84(0x1f5)],_0x3f9732['height'],_0x2fadc6,_0x2798b9,_0x599dec,_0x5dfb2c);},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0xba)]=function(){const _0x46ad73=_0xc24814,_0x13530d=this[_0x46ad73(0x29e)]();if(!_0x13530d)return;if(!_0x13530d[_0x46ad73(0x9a)]())return;if(this[_0x46ad73(0x1ad)]===_0x13530d['battlerHue']())return;this[_0x46ad73(0x1ad)]=_0x13530d[_0x46ad73(0x1e3)](),this[_0x46ad73(0x9d)][_0x46ad73(0xf2)](_0x13530d['hasSvBattler']()?0x0:this['_graphicHue']);},Sprite_FieldMarkerATB['prototype'][_0xc24814(0x21b)]=function(){const _0x2290da=_0xc24814;if(!this[_0x2290da(0xcf)])return;const _0x570233=this[_0x2290da(0x29e)]();if(!_0x570233)return;if(this[_0x2290da(0x151)]===_0x570233['_letter']&&this[_0x2290da(0x273)]===_0x570233['_plural'])return;this[_0x2290da(0x151)]=_0x570233['_letter'],this[_0x2290da(0x273)]=_0x570233['_plural'];const _0x3d41e6=Sprite_FieldGaugeATB[_0x2290da(0xa5)],_0x48a603=_0x3d41e6[_0x2290da(0x172)],_0x4f59e1=Math[_0x2290da(0xb1)](_0x48a603/0x2),_0x763c72=this['_letterSprite'][_0x2290da(0x1f1)];_0x763c72['clear']();if(!this['_plural'])return;_0x763c72[_0x2290da(0x1cc)]=_0x3d41e6[_0x2290da(0x24b)]||$gameSystem['mainFontFace'](),_0x763c72[_0x2290da(0x19e)]=_0x3d41e6[_0x2290da(0x229)]||0x10,_0x763c72[_0x2290da(0x109)](this['_letter'],0x2,_0x4f59e1,_0x48a603-0x4,_0x4f59e1-0x2,_0x2290da(0x28c));},Sprite_FieldMarkerATB[_0xc24814(0x15f)][_0xc24814(0x1d2)]=function(){const _0x3b73f9=_0xc24814,_0x303dc6=this[_0x3b73f9(0x29e)]();if(!_0x303dc6)return;const _0x211334=_0x303dc6[_0x3b73f9(0x29e)]();if(!_0x211334)return;const _0x1065b5=_0x211334[_0x3b73f9(0x2c5)]();if(!_0x1065b5)return;this[_0x3b73f9(0x133)](_0x1065b5['_blendColor']);},Sprite_FieldMarkerATB[_0xc24814(0x15f)]['getStateTooltipBattler']=function(){const _0xfd43df=_0xc24814;return this[_0xfd43df(0x29e)]();};