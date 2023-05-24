//=============================================================================
// VisuStella MZ - Battle System ATB - Active Turn Battle
// VisuMZ_2_BattleSystemATB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemATB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemATB = VisuMZ.BattleSystemATB || {};
VisuMZ.BattleSystemATB.version = 1.27;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.27] [BattleSystemATB]
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

const _0x4c7f4c=_0x13ba;(function(_0x246eea,_0xea80a8){const _0x4c7ac3=_0x13ba,_0x5cbad5=_0x246eea();while(!![]){try{const _0x26aa57=parseInt(_0x4c7ac3(0x35a))/0x1*(-parseInt(_0x4c7ac3(0x213))/0x2)+parseInt(_0x4c7ac3(0x1c3))/0x3+-parseInt(_0x4c7ac3(0x27c))/0x4+parseInt(_0x4c7ac3(0x1cb))/0x5+parseInt(_0x4c7ac3(0x304))/0x6+parseInt(_0x4c7ac3(0x2e5))/0x7*(-parseInt(_0x4c7ac3(0x1ba))/0x8)+parseInt(_0x4c7ac3(0x215))/0x9;if(_0x26aa57===_0xea80a8)break;else _0x5cbad5['push'](_0x5cbad5['shift']());}catch(_0x36d981){_0x5cbad5['push'](_0x5cbad5['shift']());}}}(_0x2971,0xac2f6));var label=_0x4c7f4c(0x2bf),tier=tier||0x0,dependencies=[_0x4c7f4c(0x2e1)],pluginData=$plugins['filter'](function(_0x51d7ef){const _0x3b9b36=_0x4c7f4c;return _0x51d7ef[_0x3b9b36(0x2a6)]&&_0x51d7ef[_0x3b9b36(0x1d0)][_0x3b9b36(0x188)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x4c7f4c(0x205)]||{},VisuMZ[_0x4c7f4c(0x2b1)]=function(_0x45af05,_0xb0f9a1){const _0x1a9bfd=_0x4c7f4c;for(const _0x48def4 in _0xb0f9a1){if(_0x1a9bfd(0x1ad)!==_0x1a9bfd(0x1ad)){const _0x30cc84=this['enemy']()[_0x1a9bfd(0x371)];if(_0x30cc84[_0x1a9bfd(0x274)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x1c2221(_0x484795['$2']);return _0x43a4d6[_0x1a9bfd(0x205)][_0x1a9bfd(0x29d)];}else{if(_0x48def4['match'](/(.*):(.*)/i)){const _0x28cfbb=String(RegExp['$1']),_0x590d2f=String(RegExp['$2'])[_0x1a9bfd(0x292)]()[_0x1a9bfd(0x1b6)]();let _0x45628,_0x17bb2c,_0x1afc45;switch(_0x590d2f){case _0x1a9bfd(0x336):_0x45628=_0xb0f9a1[_0x48def4]!==''?Number(_0xb0f9a1[_0x48def4]):0x0;break;case _0x1a9bfd(0x2a0):_0x17bb2c=_0xb0f9a1[_0x48def4]!==''?JSON[_0x1a9bfd(0x299)](_0xb0f9a1[_0x48def4]):[],_0x45628=_0x17bb2c[_0x1a9bfd(0x29c)](_0x423738=>Number(_0x423738));break;case _0x1a9bfd(0x2eb):_0x45628=_0xb0f9a1[_0x48def4]!==''?eval(_0xb0f9a1[_0x48def4]):null;break;case'ARRAYEVAL':_0x17bb2c=_0xb0f9a1[_0x48def4]!==''?JSON[_0x1a9bfd(0x299)](_0xb0f9a1[_0x48def4]):[],_0x45628=_0x17bb2c['map'](_0x1282d9=>eval(_0x1282d9));break;case _0x1a9bfd(0x2ae):_0x45628=_0xb0f9a1[_0x48def4]!==''?JSON[_0x1a9bfd(0x299)](_0xb0f9a1[_0x48def4]):'';break;case _0x1a9bfd(0x27e):_0x17bb2c=_0xb0f9a1[_0x48def4]!==''?JSON['parse'](_0xb0f9a1[_0x48def4]):[],_0x45628=_0x17bb2c[_0x1a9bfd(0x29c)](_0x28b289=>JSON[_0x1a9bfd(0x299)](_0x28b289));break;case'FUNC':_0x45628=_0xb0f9a1[_0x48def4]!==''?new Function(JSON[_0x1a9bfd(0x299)](_0xb0f9a1[_0x48def4])):new Function('return\x200');break;case'ARRAYFUNC':_0x17bb2c=_0xb0f9a1[_0x48def4]!==''?JSON['parse'](_0xb0f9a1[_0x48def4]):[],_0x45628=_0x17bb2c[_0x1a9bfd(0x29c)](_0x66ba0b=>new Function(JSON[_0x1a9bfd(0x299)](_0x66ba0b)));break;case'STR':_0x45628=_0xb0f9a1[_0x48def4]!==''?String(_0xb0f9a1[_0x48def4]):'';break;case _0x1a9bfd(0x30f):_0x17bb2c=_0xb0f9a1[_0x48def4]!==''?JSON[_0x1a9bfd(0x299)](_0xb0f9a1[_0x48def4]):[],_0x45628=_0x17bb2c['map'](_0x15779c=>String(_0x15779c));break;case _0x1a9bfd(0x36d):_0x1afc45=_0xb0f9a1[_0x48def4]!==''?JSON[_0x1a9bfd(0x299)](_0xb0f9a1[_0x48def4]):{},_0x45628=VisuMZ[_0x1a9bfd(0x2b1)]({},_0x1afc45);break;case _0x1a9bfd(0x22b):_0x17bb2c=_0xb0f9a1[_0x48def4]!==''?JSON[_0x1a9bfd(0x299)](_0xb0f9a1[_0x48def4]):[],_0x45628=_0x17bb2c[_0x1a9bfd(0x29c)](_0xc29ea1=>VisuMZ['ConvertParams']({},JSON[_0x1a9bfd(0x299)](_0xc29ea1)));break;default:continue;}_0x45af05[_0x28cfbb]=_0x45628;}}}return _0x45af05;},(_0x13e193=>{const _0x3e6b19=_0x4c7f4c,_0x43c5de=_0x13e193['name'];for(const _0x2b0a78 of dependencies){if(!Imported[_0x2b0a78]){alert(_0x3e6b19(0x36e)['format'](_0x43c5de,_0x2b0a78)),SceneManager[_0x3e6b19(0x257)]();break;}}const _0x130289=_0x13e193['description'];if(_0x130289['match'](/\[Version[ ](.*?)\]/i)){const _0x1cc245=Number(RegExp['$1']);_0x1cc245!==VisuMZ[label][_0x3e6b19(0x2fc)]&&(alert(_0x3e6b19(0x38f)[_0x3e6b19(0x1f3)](_0x43c5de,_0x1cc245)),SceneManager[_0x3e6b19(0x257)]());}if(_0x130289[_0x3e6b19(0x274)](/\[Tier[ ](\d+)\]/i)){if(_0x3e6b19(0x2d0)!==_0x3e6b19(0x2d0))_0x577169=_0x3e6b19(0x373);else{const _0x3a8917=Number(RegExp['$1']);_0x3a8917<tier?'uBOLN'===_0x3e6b19(0x1f4)?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x3e6b19(0x1f3)](_0x43c5de,_0x3a8917,tier)),SceneManager[_0x3e6b19(0x257)]()):this[_0x3e6b19(0x265)]():tier=Math[_0x3e6b19(0x28f)](_0x3a8917,tier);}}VisuMZ[_0x3e6b19(0x2b1)](VisuMZ[label]['Settings'],_0x13e193[_0x3e6b19(0x290)]);})(pluginData),PluginManager[_0x4c7f4c(0x217)](pluginData[_0x4c7f4c(0x1de)],'FieldGaugeActorIcon',_0x17b133=>{const _0x1932a5=_0x4c7f4c;VisuMZ[_0x1932a5(0x2b1)](_0x17b133,_0x17b133);const _0x250878=_0x17b133[_0x1932a5(0x342)],_0x3f931d=_0x17b133['IconIndex'];for(const _0x29fa8a of _0x250878){const _0x16e9b8=$gameActors['actor'](_0x29fa8a);if(!_0x16e9b8)continue;_0x16e9b8[_0x1932a5(0x2c6)]='icon',_0x16e9b8[_0x1932a5(0x374)]=_0x3f931d;}}),PluginManager[_0x4c7f4c(0x217)](pluginData[_0x4c7f4c(0x1de)],_0x4c7f4c(0x2fb),_0x17c1ce=>{const _0x417b76=_0x4c7f4c;VisuMZ[_0x417b76(0x2b1)](_0x17c1ce,_0x17c1ce);const _0x321d54=_0x17c1ce['Actors'],_0x5bce8d=_0x17c1ce['FaceName'],_0x512249=_0x17c1ce['FaceIndex'];for(const _0xf1bb2c of _0x321d54){const _0x56ba3e=$gameActors[_0x417b76(0x24d)](_0xf1bb2c);if(!_0x56ba3e)continue;_0x56ba3e[_0x417b76(0x2c6)]=_0x417b76(0x373),_0x56ba3e[_0x417b76(0x39e)]=_0x5bce8d,_0x56ba3e[_0x417b76(0x347)]=_0x512249;}}),PluginManager[_0x4c7f4c(0x217)](pluginData[_0x4c7f4c(0x1de)],_0x4c7f4c(0x28e),_0x177d20=>{const _0x352ff8=_0x4c7f4c;VisuMZ['ConvertParams'](_0x177d20,_0x177d20);const _0x2d0f2f=_0x177d20[_0x352ff8(0x342)];for(const _0x36e220 of _0x2d0f2f){if(_0x352ff8(0x23e)===_0x352ff8(0x212))_0x237f6d[_0x352ff8(0x2bf)][_0x352ff8(0x34d)][_0x352ff8(0x2b4)](this),!this[_0x352ff8(0x1f2)]&&this[_0x352ff8(0x2bc)]&&(this['_atbGaugeSprite'][_0x352ff8(0x23b)]=![],this[_0x352ff8(0x1cd)]&&(this['_svBattlerSprite']['_atbGaugeSprite']['visible']=![]));else{const _0x1bed58=$gameActors['actor'](_0x36e220);if(!_0x1bed58)continue;_0x1bed58[_0x352ff8(0x278)]();}}}),PluginManager[_0x4c7f4c(0x217)](pluginData[_0x4c7f4c(0x1de)],_0x4c7f4c(0x1e2),_0x3da0e3=>{const _0x36c806=_0x4c7f4c;VisuMZ[_0x36c806(0x2b1)](_0x3da0e3,_0x3da0e3);const _0x4609b0=_0x3da0e3[_0x36c806(0x1a1)],_0x1bf503=_0x3da0e3[_0x36c806(0x1b8)];for(const _0x22ee23 of _0x4609b0){const _0x4fa0de=$gameTroop[_0x36c806(0x20d)]()[_0x22ee23];if(!_0x4fa0de)continue;_0x4fa0de[_0x36c806(0x2c6)]=_0x36c806(0x1ea),_0x4fa0de[_0x36c806(0x374)]=_0x1bf503;}}),PluginManager['registerCommand'](pluginData[_0x4c7f4c(0x1de)],_0x4c7f4c(0x22f),_0x52f44b=>{const _0x42ad54=_0x4c7f4c;VisuMZ[_0x42ad54(0x2b1)](_0x52f44b,_0x52f44b);const _0xd0278=_0x52f44b[_0x42ad54(0x1a1)],_0x373ea9=_0x52f44b[_0x42ad54(0x37a)],_0x2dbe82=_0x52f44b[_0x42ad54(0x365)];for(const _0x1075e9 of _0xd0278){if(_0x42ad54(0x2d9)===_0x42ad54(0x2d9)){const _0x55ce16=$gameTroop[_0x42ad54(0x20d)]()[_0x1075e9];if(!_0x55ce16)continue;_0x55ce16['_fieldAtbGaugeGraphicType']='face',_0x55ce16[_0x42ad54(0x39e)]=_0x373ea9,_0x55ce16[_0x42ad54(0x347)]=_0x2dbe82;}else{const _0x47f7e8=!this[_0x42ad54(0x1ff)]()&&_0x34218f[_0x42ad54(0x2cb)](),_0x226357=this[_0x42ad54(0x2a1)](_0x5e2010);_0x93e44d['BattleSystemATB'][_0x42ad54(0x357)][_0x42ad54(0x2b4)](this,_0x2de98c);if(this[_0x42ad54(0x2c9)]()&&_0x226357&&!this[_0x42ad54(0x2a1)](_0x386181))_0x47f7e8&&this[_0x42ad54(0x1ff)]()&&this[_0x42ad54(0x324)]&&(this[_0x42ad54(0x30c)](),this[_0x42ad54(0x1e8)](),this[_0x42ad54(0x30b)]=0x0),this['setActionState'](_0x42ad54(0x2b2));else _0x47f7e8&&this[_0x42ad54(0x1ff)]()&&this[_0x42ad54(0x1fe)]()<=0x0&&(this[_0x42ad54(0x1f6)](),this[_0x42ad54(0x369)]=_0x42ad54(0x397),this['_onRestrictBypassAtbReset']=_0x291005);}}}),PluginManager['registerCommand'](pluginData[_0x4c7f4c(0x1de)],_0x4c7f4c(0x18b),_0x46b711=>{const _0x4eaa29=_0x4c7f4c;VisuMZ[_0x4eaa29(0x2b1)](_0x46b711,_0x46b711);const _0x5347a5=_0x46b711[_0x4eaa29(0x1a1)];for(const _0x44535e of _0x5347a5){const _0x1d949c=$gameTroop[_0x4eaa29(0x20d)]()[_0x44535e];if(!_0x1d949c)continue;_0x1d949c['clearFieldAtbGraphics']();}}),PluginManager['registerCommand'](pluginData[_0x4c7f4c(0x1de)],_0x4c7f4c(0x2d8),_0x59b845=>{const _0x9fed08=_0x4c7f4c;VisuMZ[_0x9fed08(0x2b1)](_0x59b845,_0x59b845);const _0x1c15a6=_0x59b845[_0x9fed08(0x26d)];$gameSystem['setBattleSystemATBFieldGaugeVisible'](_0x1c15a6);}),VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x305)]=Scene_Boot[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x24c)],Scene_Boot[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x24c)]=function(){const _0xe84a0d=_0x4c7f4c;this[_0xe84a0d(0x2f3)](),VisuMZ[_0xe84a0d(0x2bf)][_0xe84a0d(0x305)][_0xe84a0d(0x2b4)](this),this[_0xe84a0d(0x346)]();},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x1b1)]={},Scene_Boot['prototype'][_0x4c7f4c(0x2f3)]=function(){const _0x353e12=_0x4c7f4c,_0x5b3ce5=VisuMZ[_0x353e12(0x264)][_0x353e12(0x1b1)],_0x357559=_0x353e12(0x291),_0x37f7f9=[_0x353e12(0x2a3),'Cast','After'];for(const _0x2440ad of _0x37f7f9){const _0x153584=_0x357559[_0x353e12(0x1f3)](_0x2440ad[_0x353e12(0x292)]()[_0x353e12(0x1b6)](),_0x353e12(0x385),_0x353e12(0x2af)),_0x4cd42e=new RegExp(_0x153584,'i');VisuMZ[_0x353e12(0x2bf)][_0x353e12(0x1b1)][_0x2440ad]=_0x4cd42e;}},Scene_Boot[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x346)]=function(){const _0x46fc11=_0x4c7f4c;if(VisuMZ[_0x46fc11(0x23d)])return;const _0x11e4fc=$dataSkills[_0x46fc11(0x38d)]($dataItems);for(const _0xc1f82e of _0x11e4fc){if(!_0xc1f82e)continue;VisuMZ[_0x46fc11(0x2bf)][_0x46fc11(0x2ee)](_0xc1f82e);}},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x3a5)]=VisuMZ['ParseSkillNotetags'],VisuMZ[_0x4c7f4c(0x3a5)]=function(_0x504e58){const _0x793bcc=_0x4c7f4c;VisuMZ[_0x793bcc(0x2bf)][_0x793bcc(0x3a5)]['call'](this,_0x504e58),VisuMZ[_0x793bcc(0x2bf)]['Parse_Notetags_CreateJS'](_0x504e58);},VisuMZ['BattleSystemATB']['ParseItemNotetags']=VisuMZ[_0x4c7f4c(0x35e)],VisuMZ[_0x4c7f4c(0x35e)]=function(_0x480865){const _0x538283=_0x4c7f4c;VisuMZ[_0x538283(0x2bf)][_0x538283(0x35e)]['call'](this,_0x480865),VisuMZ['BattleSystemATB'][_0x538283(0x2ee)](_0x480865);},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x2ee)]=function(_0x4a0ce0){const _0x9a0bfd=_0x4c7f4c,_0x59232b=[_0x9a0bfd(0x2a3),_0x9a0bfd(0x344),_0x9a0bfd(0x35c)];for(const _0x295896 of _0x59232b){VisuMZ[_0x9a0bfd(0x2bf)]['createJS'](_0x4a0ce0,_0x295896);}},VisuMZ['BattleSystemATB']['JS']={},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x2ff)]=function(_0x314ab2,_0x51bde3){const _0x407a59=_0x4c7f4c,_0x562b32=_0x314ab2[_0x407a59(0x371)];if(_0x562b32[_0x407a59(0x274)](VisuMZ[_0x407a59(0x2bf)][_0x407a59(0x1b1)][_0x51bde3])){const _0x634aec=String(RegExp['$1']),_0x5a787b=_0x407a59(0x316)['format'](_0x634aec,_0x51bde3),_0x83ba7d=VisuMZ[_0x407a59(0x2bf)][_0x407a59(0x277)](_0x314ab2,_0x51bde3);VisuMZ[_0x407a59(0x2bf)]['JS'][_0x83ba7d]=new Function(_0x5a787b);}},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x277)]=function(_0x25b4bc,_0x3c8c74){const _0x455057=_0x4c7f4c;if(VisuMZ[_0x455057(0x277)])return VisuMZ[_0x455057(0x277)](_0x25b4bc,_0x3c8c74);let _0x18d74e='';if($dataActors[_0x455057(0x188)](_0x25b4bc))_0x18d74e=_0x455057(0x248)[_0x455057(0x1f3)](_0x25b4bc['id'],_0x3c8c74);if($dataClasses[_0x455057(0x188)](_0x25b4bc))_0x18d74e=_0x455057(0x352)[_0x455057(0x1f3)](_0x25b4bc['id'],_0x3c8c74);if($dataSkills[_0x455057(0x188)](_0x25b4bc))_0x18d74e=_0x455057(0x33e)[_0x455057(0x1f3)](_0x25b4bc['id'],_0x3c8c74);if($dataItems[_0x455057(0x188)](_0x25b4bc))_0x18d74e=_0x455057(0x372)[_0x455057(0x1f3)](_0x25b4bc['id'],_0x3c8c74);if($dataWeapons[_0x455057(0x188)](_0x25b4bc))_0x18d74e=_0x455057(0x301)[_0x455057(0x1f3)](_0x25b4bc['id'],_0x3c8c74);if($dataArmors[_0x455057(0x188)](_0x25b4bc))_0x18d74e=_0x455057(0x22d)['format'](_0x25b4bc['id'],_0x3c8c74);if($dataEnemies['includes'](_0x25b4bc))_0x18d74e=_0x455057(0x358)[_0x455057(0x1f3)](_0x25b4bc['id'],_0x3c8c74);if($dataStates[_0x455057(0x188)](_0x25b4bc))_0x18d74e=_0x455057(0x35d)[_0x455057(0x1f3)](_0x25b4bc['id'],_0x3c8c74);return _0x18d74e;},ConfigManager[_0x4c7f4c(0x35f)]=!![],VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x200)]=ConfigManager['makeData'],ConfigManager['makeData']=function(){const _0x3a1e4f=_0x4c7f4c,_0x28402c=VisuMZ['BattleSystemATB'][_0x3a1e4f(0x200)][_0x3a1e4f(0x2b4)](this);return _0x28402c[_0x3a1e4f(0x35f)]=this['visualAtbGauge'],_0x28402c;},VisuMZ['BattleSystemATB'][_0x4c7f4c(0x227)]=ConfigManager[_0x4c7f4c(0x34e)],ConfigManager[_0x4c7f4c(0x34e)]=function(_0x280757){const _0x5c2709=_0x4c7f4c;VisuMZ['BattleSystemATB']['ConfigManager_applyData']['call'](this,_0x280757);if('visualAtbGauge'in _0x280757)this[_0x5c2709(0x35f)]=_0x280757[_0x5c2709(0x35f)];else{if('CRMGa'===_0x5c2709(0x189))this[_0x5c2709(0x35f)]=!![];else{if(this['numActions']()!==0x0)return![];if(_0x4e65b9[_0x5c2709(0x1be)]()){if(this[_0x5c2709(0x2c9)]()){if(!this[_0x5c2709(0x368)]())return![];}}return!![];}}},ImageManager[_0x4c7f4c(0x195)]=ImageManager['svActorHorzCells']||0x9,ImageManager[_0x4c7f4c(0x22e)]=ImageManager[_0x4c7f4c(0x22e)]||0x6,TextManager[_0x4c7f4c(0x35f)]=VisuMZ['BattleSystemATB'][_0x4c7f4c(0x205)][_0x4c7f4c(0x1e5)]['Name'],VisuMZ['BattleSystemATB'][_0x4c7f4c(0x226)]=ColorManager[_0x4c7f4c(0x21b)],ColorManager[_0x4c7f4c(0x21b)]=function(){const _0x38ea5a=_0x4c7f4c;VisuMZ[_0x38ea5a(0x2bf)][_0x38ea5a(0x226)][_0x38ea5a(0x2b4)](this),this[_0x38ea5a(0x298)][_0x38ea5a(0x224)](this[_0x38ea5a(0x318)][_0x38ea5a(0x323)](this));},ColorManager[_0x4c7f4c(0x252)]=function(_0x519f07){const _0x5b57db=_0x4c7f4c;return _0x519f07=String(_0x519f07),_0x519f07[_0x5b57db(0x274)](/#(.*)/i)?_0x5b57db(0x1f0)['format'](String(RegExp['$1'])):this[_0x5b57db(0x25a)](Number(_0x519f07));},ColorManager['setupBattleSystemATBColors']=function(){const _0x406061=_0x4c7f4c,_0x82f10d=[_0x406061(0x376),'full',_0x406061(0x28c),'fast','slow','stop'],_0xaa78ed=VisuMZ['BattleSystemATB'][_0x406061(0x205)][_0x406061(0x2c0)];this[_0x406061(0x2f8)]={};for(const _0x346598 of _0x82f10d){if(_0x406061(0x27d)!==_0x406061(0x2f9))for(let _0x57d573=0x1;_0x57d573<=0x2;_0x57d573++){const _0x18b33f=_0x346598+_0x57d573;this['_atbColors'][_0x18b33f]=this[_0x406061(0x252)](_0xaa78ed[_0x18b33f]);}else{const _0x118577=new _0x777ac2(_0x562c46,_0x3b2f18,this[_0x406061(0x379)]);this['_battlerContainer'][_0x406061(0x338)](_0x118577);}}},ColorManager['atbColor']=function(_0x405d3d){const _0x5589bb=_0x4c7f4c;if(this[_0x5589bb(0x2f8)]===undefined)this[_0x5589bb(0x318)]();return this['_atbColors'][_0x405d3d]||_0x5589bb(0x197);},SceneManager[_0x4c7f4c(0x2fa)]=function(){const _0x2f30c5=_0x4c7f4c;return this[_0x2f30c5(0x308)]&&this[_0x2f30c5(0x308)][_0x2f30c5(0x32f)]===Scene_Battle;},BattleManager['isATB']=function(){const _0x240351=_0x4c7f4c;if(Imported[_0x240351(0x288)]&&this[_0x240351(0x2df)]())return![];return this[_0x240351(0x2cb)]();},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x1d4)]=BattleManager['isActiveTpb'],BattleManager[_0x4c7f4c(0x1d3)]=function(){const _0x34a3ad=_0x4c7f4c;if(!this[_0x34a3ad(0x2cb)]()){if(_0x34a3ad(0x25e)!==_0x34a3ad(0x2ce))return![];else{const _0x5c9459=_0x11aa57(_0x562349['$1']);_0x5c9459!==_0x2d475a[_0x59247e][_0x34a3ad(0x2fc)]&&(_0x1d7e2d('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x29ceb8,_0x5c9459)),_0x413fde[_0x34a3ad(0x257)]());}}else{if(ConfigManager&&ConfigManager[_0x34a3ad(0x239)]!==undefined)return ConfigManager['atbActive'];else{if(_0x34a3ad(0x1e7)===_0x34a3ad(0x183)){const _0x113559=_0x525153[_0x34a3ad(0x1af)]-0x3;if(_0x113559>0x0)return _0x10e968*(_0x113559*0x2);else{if(_0x113559<0x0)return _0x240ea4*(0x1/(_0x113559*-0x2));}}else return VisuMZ[_0x34a3ad(0x2bf)][_0x34a3ad(0x1d4)][_0x34a3ad(0x2b4)](this);}}},VisuMZ['BattleSystemATB'][_0x4c7f4c(0x1d1)]=Game_System[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x196)],Game_System[_0x4c7f4c(0x2e4)]['initialize']=function(){const _0x1c4712=_0x4c7f4c;VisuMZ[_0x1c4712(0x2bf)][_0x1c4712(0x1d1)][_0x1c4712(0x2b4)](this),this[_0x1c4712(0x265)]();},Game_System[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x265)]=function(){const _0x14a164=_0x4c7f4c;this[_0x14a164(0x19f)]=!![];},Game_System['prototype'][_0x4c7f4c(0x24f)]=function(){const _0x43f982=_0x4c7f4c;if(this[_0x43f982(0x19f)]===undefined){if('sSPhd'===_0x43f982(0x2f1))return this[_0x43f982(0x1f2)]['isAtbCastingState']()?_0x1c2a7a[_0x43f982(0x28f)](this['_battler'][_0x43f982(0x30b)],0x0):_0x5319cf[_0x43f982(0x2bf)][_0x43f982(0x28d)][_0x43f982(0x2b4)](this);else this['initBattleSystemATB']();}return this[_0x43f982(0x19f)];},Game_System['prototype'][_0x4c7f4c(0x2de)]=function(_0x574255){const _0x307733=_0x4c7f4c;this[_0x307733(0x19f)]===undefined&&('WjvLp'!=='WjvLp'?_0x46a453=_0x263772[_0x307733(0x2bf)]['JS'][_0x28a904][_0x307733(0x2b4)](this,this[_0x307733(0x2b5)](),this['subject']()):this['initBattleSystemATB']()),this['_atbFieldGaugeVisible']=_0x574255;},VisuMZ['BattleSystemATB'][_0x4c7f4c(0x237)]=Game_Action[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x389)],Game_Action[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x389)]=function(_0x2c3b36){const _0xe340e5=_0x4c7f4c;VisuMZ[_0xe340e5(0x2bf)][_0xe340e5(0x237)][_0xe340e5(0x2b4)](this,_0x2c3b36),this[_0xe340e5(0x2d4)](_0x2c3b36);},Game_Action[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2d4)]=function(_0x1e43fc){const _0x1db285=_0x4c7f4c;if(!SceneManager[_0x1db285(0x2fa)]())return;if(!BattleManager[_0x1db285(0x1be)]())return;if(this[_0x1db285(0x240)]())this[_0x1db285(0x1bd)](_0x1e43fc);},Game_Action[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1bd)]=function(_0x5d0d1f){const _0xbfbc85=_0x4c7f4c,_0x165cdb=this[_0xbfbc85(0x240)]()[_0xbfbc85(0x371)];if(_0x5d0d1f[_0xbfbc85(0x334)]()){if(_0xbfbc85(0x3a8)!==_0xbfbc85(0x2ad)){const _0x516f78=VisuMZ[_0xbfbc85(0x2bf)][_0xbfbc85(0x277)](this[_0xbfbc85(0x240)](),_0xbfbc85(0x2a3));if(VisuMZ['BattleSystemATB']['JS'][_0x516f78]){const _0x4c6a3f=VisuMZ[_0xbfbc85(0x2bf)]['JS'][_0x516f78][_0xbfbc85(0x2b4)](this,this[_0xbfbc85(0x2b5)](),_0x5d0d1f);_0x5d0d1f[_0xbfbc85(0x33b)](_0x4c6a3f);}_0x165cdb['match'](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0x5d0d1f[_0xbfbc85(0x33b)](Number(RegExp['$1'])*0.01),_0x165cdb[_0xbfbc85(0x274)](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&(_0xbfbc85(0x394)!==_0xbfbc85(0x394)?(this['x']=this[_0xbfbc85(0x322)],this['y']=this[_0xbfbc85(0x25c)]):_0x5d0d1f[_0xbfbc85(0x267)](Number(RegExp['$1'])*0.01));}else _0x1f7392[_0xbfbc85(0x2e4)][_0xbfbc85(0x1bc)][_0xbfbc85(0x2b4)](this),this[_0xbfbc85(0x198)](),this[_0xbfbc85(0x391)](),this['updateVisibility']();}else{if(_0x5d0d1f[_0xbfbc85(0x1e6)]()){const _0x33917e=VisuMZ[_0xbfbc85(0x2bf)][_0xbfbc85(0x277)](this['item'](),_0xbfbc85(0x344));if(VisuMZ[_0xbfbc85(0x2bf)]['JS'][_0x33917e]){const _0x25520c=VisuMZ['BattleSystemATB']['JS'][_0x33917e][_0xbfbc85(0x2b4)](this,this[_0xbfbc85(0x2b5)](),_0x5d0d1f);_0x5d0d1f[_0xbfbc85(0x27f)](_0x25520c);}_0x165cdb[_0xbfbc85(0x274)](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&('uQXnS'==='viwzL'?(this['process_VisuMZ_BattleSystemATB_CreateRegExp'](),_0x496ecf['BattleSystemATB']['Scene_Boot_onDatabaseLoaded'][_0xbfbc85(0x2b4)](this),this[_0xbfbc85(0x346)]()):_0x5d0d1f['setAtbCastTime'](Number(RegExp['$1'])*0.01)),_0x165cdb['match'](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x5d0d1f['changeAtbCastTime'](Number(RegExp['$1'])*0.01),_0x165cdb[_0xbfbc85(0x274)](/<(?:ATB|TPB) INTERRUPT>/i)&&_0x5d0d1f['atbInterrupt']();}}},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x199)]=Game_Action[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x329)],Game_Action[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x329)]=function(){const _0x503363=_0x4c7f4c;VisuMZ[_0x503363(0x2bf)][_0x503363(0x199)]['call'](this),this[_0x503363(0x219)]();},Game_Action[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x219)]=function(){const _0x433284=_0x4c7f4c;if(!this[_0x433284(0x240)]())return;if(!BattleManager[_0x433284(0x1be)]())return;const _0x2a92ad=this[_0x433284(0x240)]()[_0x433284(0x371)];let _0x5513b6=0x0;this[_0x433284(0x36a)]&&(_0x5513b6=this[_0x433284(0x2b5)]()['_tpbChargeTime']);const _0x23c26e=VisuMZ[_0x433284(0x2bf)][_0x433284(0x277)](this[_0x433284(0x240)](),'After');if(VisuMZ[_0x433284(0x2bf)]['JS'][_0x23c26e]){if('hwUGF'===_0x433284(0x1a0))return _0x45dc6b['BattleSystemATB'][_0x433284(0x28d)][_0x433284(0x2b4)](this);else _0x5513b6=VisuMZ[_0x433284(0x2bf)]['JS'][_0x23c26e][_0x433284(0x2b4)](this,this[_0x433284(0x2b5)](),this[_0x433284(0x2b5)]());}let _0x57a69f=this['item']()[_0x433284(0x225)]>0x0?this[_0x433284(0x240)]()['speed']:0x0;if(this[_0x433284(0x2d2)]())_0x57a69f+=this[_0x433284(0x2b5)]()['attackSpeed']();_0x5513b6+=(_0x57a69f/0xfa0)[_0x433284(0x382)](0x0,0x1);this['item']()[_0x433284(0x371)][_0x433284(0x274)](/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&(_0x5513b6=Number(RegExp['$1'])*0.01);const _0x53182f=this[_0x433284(0x2b5)]()[_0x433284(0x245)]()[_0x433284(0x38d)](this[_0x433284(0x2b5)]()[_0x433284(0x279)]()),_0x3c709e=/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i,_0x58d683=_0x53182f[_0x433284(0x29c)](_0x404e13=>_0x404e13&&_0x404e13[_0x433284(0x371)]['match'](_0x3c709e)?Number(RegExp['$1'])*0.01:0x0);_0x5513b6=_0x58d683['reduce']((_0xed3c08,_0x30fc0b)=>_0xed3c08+_0x30fc0b,_0x5513b6),this['item']()[_0x433284(0x371)][_0x433284(0x274)](/<(?:ATB|TPB) INSTANT>/i)&&(_0x5513b6=0xa),this[_0x433284(0x2b5)]()['setAtbAfterSpeed'](_0x5513b6);},Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x33b)]=function(_0x39b37e){const _0x13c5c5=_0x4c7f4c;this['_tpbChargeTime']=_0x39b37e[_0x13c5c5(0x382)](0x0,0x1);},Game_BattlerBase[_0x4c7f4c(0x2e4)]['changeAtbChargeTime']=function(_0x5a5cb7){const _0x167aec=_0x4c7f4c;this[_0x167aec(0x33b)](this[_0x167aec(0x280)]+_0x5a5cb7);},Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x27f)]=function(_0x2d8295){const _0x203261=_0x4c7f4c,_0x2dc3c3=this[_0x203261(0x38c)]();this[_0x203261(0x30b)]=(_0x2dc3c3*_0x2d8295)['clamp'](0x0,_0x2dc3c3);},Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x194)]=function(_0x1f5a83){const _0x3e20e7=_0x4c7f4c,_0x1041a1=this[_0x3e20e7(0x38c)](),_0x1f5cc1=_0x1041a1*_0x1f5a83;this[_0x3e20e7(0x30b)]=(this[_0x3e20e7(0x30b)]+_0x1f5cc1)[_0x3e20e7(0x382)](0x0,_0x1041a1);},VisuMZ[_0x4c7f4c(0x2bf)]['Game_BattlerBase_die']=Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x32e)],Game_BattlerBase['prototype'][_0x4c7f4c(0x32e)]=function(){const _0x53dddb=_0x4c7f4c;VisuMZ['BattleSystemATB'][_0x53dddb(0x21d)]['call'](this);if(BattleManager[_0x53dddb(0x2cb)]()){if(_0x53dddb(0x306)===_0x53dddb(0x20b))return![];else this['clearTpbChargeTime']();}},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x33c)]=Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x353)],Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x353)]=function(){const _0x47ffc0=_0x4c7f4c;VisuMZ['BattleSystemATB']['Game_BattlerBase_revive'][_0x47ffc0(0x2b4)](this),BattleManager[_0x47ffc0(0x2cb)]()&&(_0x47ffc0(0x1e4)===_0x47ffc0(0x1e4)?this[_0x47ffc0(0x30c)]():this[_0x47ffc0(0x2c6)]=this[_0x47ffc0(0x22a)]());},VisuMZ['BattleSystemATB'][_0x4c7f4c(0x24a)]=Game_Battler['prototype'][_0x4c7f4c(0x259)],Game_Battler[_0x4c7f4c(0x2e4)]['initTpbChargeTime']=function(_0x7a2f05){const _0x3aa084=_0x4c7f4c;BattleManager['isATB']()?this[_0x3aa084(0x383)](_0x7a2f05):VisuMZ[_0x3aa084(0x2bf)][_0x3aa084(0x24a)][_0x3aa084(0x2b4)](this,_0x7a2f05);},Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x383)]=function(_0x441a5c){const _0x2247d3=_0x4c7f4c,_0x546d36=VisuMZ['BattleSystemATB'][_0x2247d3(0x205)]['Mechanics'];let _0x13b327=this['tpbRelativeSpeed']()*eval(_0x546d36[_0x2247d3(0x328)]);const _0x11bb3f=this[_0x2247d3(0x245)]()[_0x2247d3(0x38d)](this[_0x2247d3(0x279)]()),_0x41b3f6=/<(?:ATB|TPB) (?:BATTLE START|START) (?:GAUGE|TIME|SPEED): ([\+\-]\d+)([%％])>/i,_0xdfc09c=_0x11bb3f[_0x2247d3(0x29c)](_0x316a89=>_0x316a89&&_0x316a89[_0x2247d3(0x371)][_0x2247d3(0x274)](_0x41b3f6)?Number(RegExp['$1'])*0.01:0x0);_0x13b327=_0xdfc09c[_0x2247d3(0x286)]((_0x2aa606,_0x5ae7c7)=>_0x2aa606+_0x5ae7c7,_0x13b327),this[_0x2247d3(0x369)]=_0x2247d3(0x397),this['_tpbChargeTime']=(_0x441a5c?0x1:_0x13b327)[_0x2247d3(0x382)](0x0,0x1),this[_0x2247d3(0x1a2)]()&&(this['_tpbChargeTime']=0x0);},Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x334)]=function(){const _0x2c5009=_0x4c7f4c;return this[_0x2c5009(0x369)]==='charging';},Game_Battler[_0x4c7f4c(0x2e4)]['isAtbCastingState']=function(){const _0x24328e=_0x4c7f4c;return this[_0x24328e(0x369)]==='casting'&&this['currentAction']()&&this[_0x24328e(0x1b5)]()['item']()&&this[_0x24328e(0x1b5)]()[_0x24328e(0x240)]()['speed']<0x0;},Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2a4)]=function(){const _0x450bfc=_0x4c7f4c;return this[_0x450bfc(0x1e6)]()?this['_tpbCastTime']/this['tpbRequiredCastTime']():0x0;},Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2b0)]=function(){return!this['canMove']();},Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x356)]=function(_0x407b11){const _0x22ae07=_0x4c7f4c;this[_0x22ae07(0x34f)]=_0x407b11;},VisuMZ['BattleSystemATB']['BattleManager_endBattlerActions']=BattleManager[_0x4c7f4c(0x2b8)],BattleManager[_0x4c7f4c(0x2b8)]=function(_0x5c1aba){const _0x24b426=_0x4c7f4c;this[_0x24b426(0x2cb)]()&&!_0x5c1aba[_0x24b426(0x1ff)]()&&(_0x5c1aba[_0x24b426(0x381)]=!![]),VisuMZ[_0x24b426(0x2bf)][_0x24b426(0x2bb)][_0x24b426(0x2b4)](this,_0x5c1aba),this[_0x24b426(0x2c9)]()&&this[_0x24b426(0x2cb)]()&&!_0x5c1aba[_0x24b426(0x1ff)]()&&(_0x5c1aba[_0x24b426(0x381)]=![]);},VisuMZ['BattleSystemATB'][_0x4c7f4c(0x317)]=Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x30c)],Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x30c)]=function(){const _0x13561b=_0x4c7f4c;if(this['_onRestrictBypassAtbReset'])return;VisuMZ['BattleSystemATB'][_0x13561b(0x317)][_0x13561b(0x2b4)](this),this[_0x13561b(0x280)]+=this[_0x13561b(0x34f)]||0x0;},Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x343)]=function(){const _0x4e656b=_0x4c7f4c;if(!this['isAtbCastingState']())return;if(!this[_0x4e656b(0x1b5)]())return;if(!this[_0x4e656b(0x1b5)]()[_0x4e656b(0x240)]())return;if(this['currentAction']()['item']()[_0x4e656b(0x371)]['match'](/<(?:ATB|TPB) CANNOT (?:BE INTERRUPTED|INTERRUPT)>/i))return;this['clearActions'](),this[_0x4e656b(0x30c)](),this['_tpbCastTime']=0x0,this[_0x4e656b(0x235)]();},Game_Battler['prototype'][_0x4c7f4c(0x235)]=function(){const _0x118652=_0x4c7f4c,_0x696215=VisuMZ[_0x118652(0x2bf)][_0x118652(0x205)]['Interrupt'];if(Imported['VisuMZ_0_CoreEngine']){if('YVQMy'===_0x118652(0x2dc))return this[_0x118652(0x30b)]/this[_0x118652(0x38c)]();else{const _0x111da3=_0x696215[_0x118652(0x327)],_0x192a14=_0x696215[_0x118652(0x1f5)],_0x12f8aa=_0x696215[_0x118652(0x2e6)];$gameTemp['requestFauxAnimation']([this],_0x111da3,_0x192a14,_0x12f8aa);}}if(this[_0x118652(0x1b0)]()&&_0x696215['InterruptText']['length']>0x0){if(_0x118652(0x2a7)==='oBirs'){if(!this[_0x118652(0x1f2)])return _0x30ed5f[_0x118652(0x2e8)]('default%1'[_0x118652(0x1f3)](_0xbd837b));if(this[_0x118652(0x1f2)][_0x118652(0x2b0)]())return _0xdfc3e['atbColor']('stop%1'[_0x118652(0x1f3)](_0x31b136));if(this[_0x118652(0x1f2)]['isAtbCastingState']())return _0x130ec3[_0x118652(0x2e8)](_0x118652(0x388)[_0x118652(0x1f3)](_0x51b728));if(this['gaugeRate']()>=0x1)return _0x483436[_0x118652(0x2e8)](_0x118652(0x364)[_0x118652(0x1f3)](_0x48d8e7));const _0x2abaf7=_0x2c9834[_0x118652(0x2bf)][_0x118652(0x205)]['Gauge'],_0xd66586=this[_0x118652(0x1f2)][_0x118652(0x214)](0x6)*this[_0x118652(0x1f2)][_0x118652(0x1ce)](0x6);if(_0xd66586<=_0x2abaf7[_0x118652(0x309)])return _0x413763[_0x118652(0x2e8)]('slow%1'[_0x118652(0x1f3)](_0xe36e24));if(_0xd66586>=_0x2abaf7[_0x118652(0x221)])return _0x4bb7ca[_0x118652(0x2e8)]('fast%1'[_0x118652(0x1f3)](_0x3afc5e));return _0x1843a2['atbColor'](_0x118652(0x1ee)[_0x118652(0x1f3)](_0x2ce813));}else{const _0x3ad94e=_0x696215[_0x118652(0x2b3)],_0x31ca19={'textColor':ColorManager[_0x118652(0x252)](_0x696215[_0x118652(0x1e0)]),'flashColor':_0x696215[_0x118652(0x363)],'flashDuration':_0x696215[_0x118652(0x1cf)]};this[_0x118652(0x30e)](_0x3ad94e,_0x31ca19);}}},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x1dc)]=Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1a7)],Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1a7)]=function(){const _0x2fe618=_0x4c7f4c;VisuMZ[_0x2fe618(0x2bf)]['Game_Battler_startTpbCasting'][_0x2fe618(0x2b4)](this),BattleManager[_0x2fe618(0x1be)]()&&(this[_0x2fe618(0x30b)]>=this[_0x2fe618(0x38c)]()&&(this[_0x2fe618(0x369)]=_0x2fe618(0x234)));},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x377)]=Game_Unit[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2f7)],Game_Unit[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2f7)]=function(){const _0x5da706=_0x4c7f4c;if(BattleManager[_0x5da706(0x1be)]()){if(BattleManager['allBattleMembers']()[_0x5da706(0x312)](_0x3f961c=>_0x3f961c&&_0x3f961c['isAlive']()&&_0x3f961c[_0x5da706(0x296)]()&&_0x3f961c[_0x5da706(0x369)]===_0x5da706(0x234)))return;}VisuMZ[_0x5da706(0x2bf)][_0x5da706(0x377)][_0x5da706(0x2b4)](this);},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x25f)]=Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x250)],Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x250)]=function(){const _0x3cabea=_0x4c7f4c;!VisuMZ['BattleSystemATB'][_0x3cabea(0x205)][_0x3cabea(0x2a5)][_0x3cabea(0x32b)]&&(_0x3cabea(0x26e)!==_0x3cabea(0x360)?this['_onRestrictBypassAtbReset']=BattleManager['isATB']():this['initTpbChargeTimeATB'](_0x4a8c3e)),VisuMZ[_0x3cabea(0x2bf)]['Game_Battler_onRestrict']['call'](this),BattleManager[_0x3cabea(0x2cb)]()&&this[_0x3cabea(0x369)]==='acting'&&this[_0x3cabea(0x2c9)]()&&(this[_0x3cabea(0x324)]=!![]),this[_0x3cabea(0x381)]=undefined;},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x23c)]=Game_Actor[_0x4c7f4c(0x2e4)]['clearActions'],Game_Actor['prototype'][_0x4c7f4c(0x1e8)]=function(){const _0x501c0f=_0x4c7f4c;if(this[_0x501c0f(0x381)]){if(_0x501c0f(0x186)!==_0x501c0f(0x186)){const _0x209840=this[_0x501c0f(0x24d)]()['note'];if(_0x209840[_0x501c0f(0x274)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x29fe95(_0x190bf2['$1']);return _0x2f7b92[_0x501c0f(0x205)][_0x501c0f(0x1da)];}else{if(!this[_0x501c0f(0x1e6)]())return;}}VisuMZ[_0x501c0f(0x2bf)][_0x501c0f(0x23c)][_0x501c0f(0x2b4)](this);},VisuMZ[_0x4c7f4c(0x2bf)]['Game_Battler_removeState']=Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1df)],Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1df)]=function(_0x3a78ef){const _0x265cc8=_0x4c7f4c,_0x4f0c2e=!this[_0x265cc8(0x1ff)]()&&BattleManager[_0x265cc8(0x2cb)](),_0x1dc1ef=this['isStateAffected'](_0x3a78ef);VisuMZ[_0x265cc8(0x2bf)]['Game_Battler_removeState'][_0x265cc8(0x2b4)](this,_0x3a78ef);if(this[_0x265cc8(0x2c9)]()&&_0x1dc1ef&&!this[_0x265cc8(0x2a1)](_0x3a78ef))_0x265cc8(0x31e)===_0x265cc8(0x31e)?(_0x4f0c2e&&this[_0x265cc8(0x1ff)]()&&this[_0x265cc8(0x324)]&&(_0x265cc8(0x37d)===_0x265cc8(0x392)?(this[_0x265cc8(0x21f)](),this[_0x265cc8(0x1c8)](),this['createBattlerContainer']()):(this[_0x265cc8(0x30c)](),this[_0x265cc8(0x1e8)](),this[_0x265cc8(0x30b)]=0x0)),this['setActionState'](_0x265cc8(0x2b2))):_0xf4098b+=this[_0x265cc8(0x1f2)]['battleUIOffsetX']();else _0x4f0c2e&&this[_0x265cc8(0x1ff)]()&&this[_0x265cc8(0x1fe)]()<=0x0&&(this[_0x265cc8(0x1f6)](),this[_0x265cc8(0x369)]=_0x265cc8(0x397),this[_0x265cc8(0x381)]=undefined);},Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2ea)]=function(){const _0x73c838=_0x4c7f4c;this['processBattleCoreJS']('PreStartTurnJS'),this[_0x73c838(0x295)]=![],this[_0x73c838(0x37b)]++,this[_0x73c838(0x2bd)]=0x0,this[_0x73c838(0x39a)]()&&this['makeTpbActions'](),this[_0x73c838(0x326)]('PostStartTurnJS');},Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x39a)]=function(){const _0x5048bb=_0x4c7f4c;if(this[_0x5048bb(0x1fe)]()!==0x0)return![];if(BattleManager['isATB']()){if(this[_0x5048bb(0x2c9)]()){if(!this[_0x5048bb(0x368)]())return![];}}return!![];},VisuMZ['BattleSystemATB'][_0x4c7f4c(0x184)]=Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x337)],Game_Battler['prototype'][_0x4c7f4c(0x337)]=function(){const _0x3d2948=_0x4c7f4c;if(BattleManager[_0x3d2948(0x1be)]())_0x3d2948(0x32d)==='zqOoT'?_0x5d191f=0xa:this['applyATBPenalty']();else{if(_0x3d2948(0x39c)!=='WQSxp'){const _0x4e96f5=this[_0x3d2948(0x320)](),_0x57af78=_0x779e8f['Settings'][_0x3d2948(0x2c2)];if(this['opacity']>_0x4e96f5)this[_0x3d2948(0x2f5)]=_0x1aae41[_0x3d2948(0x28f)](_0x4e96f5,this[_0x3d2948(0x2f5)]-_0x57af78);else this['opacity']<_0x4e96f5&&(this[_0x3d2948(0x2f5)]=_0x9e8008[_0x3d2948(0x19c)](_0x4e96f5,this['opacity']+_0x57af78));}else VisuMZ[_0x3d2948(0x2bf)][_0x3d2948(0x184)]['call'](this);}},Game_Battler['prototype'][_0x4c7f4c(0x256)]=function(){const _0x273c98=_0x4c7f4c;this[_0x273c98(0x369)]=_0x273c98(0x397),this['_tpbChargeTime']+=VisuMZ[_0x273c98(0x2bf)][_0x273c98(0x205)]['Mechanics'][_0x273c98(0x348)]||0x0;},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x380)]=Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1d5)],Game_Battler['prototype'][_0x4c7f4c(0x1d5)]=function(){const _0x3a0c80=_0x4c7f4c;if(BattleManager[_0x3a0c80(0x1be)]()){if('YfqLD'!==_0x3a0c80(0x38b))return VisuMZ[_0x3a0c80(0x2bf)]['Settings'][_0x3a0c80(0x2a5)]['TpbSpeedCalcJS'][_0x3a0c80(0x2b4)](this,this);else{const _0x2e83e2=this[_0x3a0c80(0x24d)]()[_0x3a0c80(0x371)];if(_0x2e83e2[_0x3a0c80(0x274)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x22ae58(_0x313d2a['$1']);return this['faceName']();}}else return VisuMZ[_0x3a0c80(0x2bf)]['Game_Battler_tpbSpeed'][_0x3a0c80(0x2b4)](this);},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x1b9)]=Game_Battler['prototype'][_0x4c7f4c(0x350)],Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x350)]=function(){const _0x206f0a=_0x4c7f4c;if(BattleManager['isATB']())return VisuMZ[_0x206f0a(0x2bf)]['Settings'][_0x206f0a(0x2a5)]['TpbBaseSpeedCalcJS'][_0x206f0a(0x2b4)](this,this);else{if(_0x206f0a(0x241)!=='lqkic')return VisuMZ['BattleSystemATB'][_0x206f0a(0x1b9)][_0x206f0a(0x2b4)](this);else this[_0x206f0a(0x369)]=_0x206f0a(0x234);}},VisuMZ['BattleSystemATB']['Game_Battler_tpbRelativeSpeed']=Game_Battler['prototype']['tpbRelativeSpeed'],Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x325)]=function(){const _0x5d284f=_0x4c7f4c;return BattleManager['isATB']()?VisuMZ[_0x5d284f(0x2bf)][_0x5d284f(0x205)][_0x5d284f(0x2a5)][_0x5d284f(0x300)][_0x5d284f(0x2b4)](this,this):VisuMZ[_0x5d284f(0x2bf)][_0x5d284f(0x307)][_0x5d284f(0x2b4)](this);},VisuMZ['BattleSystemATB']['Game_Battler_tpbAcceleration']=Game_Battler[_0x4c7f4c(0x2e4)]['tpbAcceleration'],Game_Battler['prototype'][_0x4c7f4c(0x203)]=function(){const _0x1f1156=_0x4c7f4c;if(BattleManager[_0x1f1156(0x1be)]())return this[_0x1f1156(0x1e9)]();else{if('PwJGr'!==_0x1f1156(0x1ec))_0x23c012[_0x1f1156(0x2e4)]['initialize'][_0x1f1156(0x2b4)](this),this[_0x1f1156(0x207)](),this[_0x1f1156(0x1a6)](),this['createChildren']();else return VisuMZ[_0x1f1156(0x2bf)][_0x1f1156(0x24b)][_0x1f1156(0x2b4)](this);}},Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1e9)]=function(){const _0x17d90a=_0x4c7f4c;let _0xb57240=VisuMZ[_0x17d90a(0x2bf)]['Settings'][_0x17d90a(0x2a5)][_0x17d90a(0x1ca)][_0x17d90a(0x2b4)](this,this);if(ConfigManager&&ConfigManager[_0x17d90a(0x1af)]!==undefined){if(_0x17d90a(0x1b4)===_0x17d90a(0x26b))return _0xb7aa56['Settings'][_0x17d90a(0x2e0)];else{const _0x3eb875=ConfigManager['atbSpeed']-0x3;if(_0x3eb875>0x0)return _0xb57240*(_0x3eb875*0x2);else{if(_0x3eb875<0x0)return _0xb57240*(0x1/(_0x3eb875*-0x2));}}}return _0xb57240;},VisuMZ[_0x4c7f4c(0x2bf)]['Game_Battler_tpbRequiredCastTime']=Game_Battler['prototype'][_0x4c7f4c(0x38c)],Game_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x38c)]=function(){const _0x4cffa7=_0x4c7f4c;if(BattleManager[_0x4cffa7(0x1be)]()){if('hVnTC'!==_0x4cffa7(0x232))return VisuMZ[_0x4cffa7(0x2bf)][_0x4cffa7(0x205)][_0x4cffa7(0x2a5)][_0x4cffa7(0x362)][_0x4cffa7(0x2b4)](this,this);else _0x197386['scale']['x']=-_0x2b6f63[_0x4cffa7(0x1d7)](_0x147374['scale']['x']);}else return VisuMZ['BattleSystemATB']['Game_Battler_tpbRequiredCastTime'][_0x4cffa7(0x2b4)](this);},VisuMZ[_0x4c7f4c(0x2bf)]['Scene_Options_maxCommands']=Scene_Options[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x36b)],Scene_Options['prototype'][_0x4c7f4c(0x36b)]=function(){const _0x5abe9c=_0x4c7f4c;let _0x6eda0b=VisuMZ[_0x5abe9c(0x2bf)][_0x5abe9c(0x1ab)][_0x5abe9c(0x2b4)](this);const _0x3f6a43=VisuMZ['BattleSystemATB']['Settings'];if(_0x3f6a43[_0x5abe9c(0x1e5)][_0x5abe9c(0x1f9)]&&_0x3f6a43[_0x5abe9c(0x1e5)]['AdjustRect']&&BattleManager['isATB']())_0x6eda0b++;return _0x6eda0b;},Sprite_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x331)]=function(){const _0x1a6d8a=_0x4c7f4c;if(!BattleManager[_0x1a6d8a(0x1be)]())return;if(!ConfigManager['visualAtbGauge'])return;const _0x4f49da=VisuMZ[_0x1a6d8a(0x2bf)][_0x1a6d8a(0x205)][_0x1a6d8a(0x236)],_0x4c7298=new Sprite_Gauge();_0x4c7298[_0x1a6d8a(0x244)]['x']=_0x4f49da[_0x1a6d8a(0x1f7)],_0x4c7298[_0x1a6d8a(0x244)]['y']=_0x4f49da[_0x1a6d8a(0x1a5)],_0x4c7298[_0x1a6d8a(0x276)]['x']=_0x4c7298[_0x1a6d8a(0x276)]['y']=_0x4f49da[_0x1a6d8a(0x1ac)],this['_atbGaugeSprite']=_0x4c7298,this[_0x1a6d8a(0x338)](this[_0x1a6d8a(0x2bc)]);},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x18d)]=Sprite_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x32a)],Sprite_Battler[_0x4c7f4c(0x2e4)]['setBattler']=function(_0x339f2c){const _0x31db08=_0x4c7f4c;VisuMZ['BattleSystemATB']['Sprite_Battler_setBattler'][_0x31db08(0x2b4)](this,_0x339f2c),this[_0x31db08(0x2a8)](_0x339f2c),this[_0x31db08(0x27a)]();},Sprite_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2a8)]=function(_0x234713){const _0x54d367=_0x4c7f4c;if(!_0x234713)return;if(!this['_atbGaugeSprite'])return;if(_0x234713[_0x54d367(0x31a)]()){}else{if(_0x234713[_0x54d367(0x2c9)]()){if(this[_0x54d367(0x32f)]===Sprite_Enemy&&_0x234713[_0x54d367(0x2d5)]())return;if(this[_0x54d367(0x32f)]===Sprite_SvEnemy&&!_0x234713['hasSvBattler']())return;}}this[_0x54d367(0x2bc)][_0x54d367(0x399)](_0x234713,_0x54d367(0x314));},Sprite_Battler[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x27a)]=function(){const _0x1121e0=_0x4c7f4c;if(!this[_0x1121e0(0x2bc)])return;const _0x15160f=this[_0x1121e0(0x1f2)]&&this[_0x1121e0(0x1f2)][_0x1121e0(0x296)]()&&!this[_0x1121e0(0x1f2)][_0x1121e0(0x1d8)]();this[_0x1121e0(0x2bc)][_0x1121e0(0x23b)]=_0x15160f,this[_0x1121e0(0x1cd)]&&this[_0x1121e0(0x1cd)][_0x1121e0(0x2bc)]&&(_0x1121e0(0x275)==='EmZFQ'?(_0x3b2e82[_0x1121e0(0x36f)](_0x57b1d7+_0x3cfa2b+_0xbb495,_0x3ee601+_0x5d07b6,_0x3eab05,_0x13aef5),_0x1dc8ae['x']+=_0x3b610a[_0x1121e0(0x283)](_0x28cab2*1.75),_0x265e27['anchor']['x']=0x1):this[_0x1121e0(0x1cd)][_0x1121e0(0x2bc)]['visible']=_0x15160f);},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x1c5)]=Sprite_Battler[_0x4c7f4c(0x2e4)]['updateMain'],Sprite_Battler['prototype'][_0x4c7f4c(0x1fc)]=function(){const _0x4b6ad2=_0x4c7f4c;VisuMZ[_0x4b6ad2(0x2bf)]['Sprite_Battler_updateMain'][_0x4b6ad2(0x2b4)](this),this['updateAtbGaugeSpritePosition']();},Sprite_Battler['prototype'][_0x4c7f4c(0x1c9)]=function(){const _0x37edd8=_0x4c7f4c;if(!this['_battler'])return;if(!this[_0x37edd8(0x2bc)])return;const _0x555479=VisuMZ[_0x37edd8(0x2bf)][_0x37edd8(0x205)][_0x37edd8(0x236)],_0x44d520=this[_0x37edd8(0x2bc)];let _0x714098=_0x555479[_0x37edd8(0x27b)];this[_0x37edd8(0x1f2)]['battleUIOffsetX']&&(_0x714098+=this[_0x37edd8(0x1f2)][_0x37edd8(0x2c1)]());let _0x396d76=_0x555479[_0x37edd8(0x386)];this[_0x37edd8(0x1f2)][_0x37edd8(0x2b7)]&&(_0x396d76+=this[_0x37edd8(0x1f2)][_0x37edd8(0x2b7)]());_0x44d520['x']=_0x714098,_0x44d520['y']=-this['height']+_0x396d76;if(this[_0x37edd8(0x1f2)][_0x37edd8(0x2c9)]()){if(_0x37edd8(0x19d)!=='iBybH')this[_0x37edd8(0x1f2)][_0x37edd8(0x21e)]()[_0x37edd8(0x371)]['match'](/<HIDE (?:ATB|TPB) GAUGE>/i)&&(_0x37edd8(0x206)===_0x37edd8(0x206)?_0x44d520[_0x37edd8(0x23b)]=![]:this[_0x37edd8(0x35f)]=_0x466eb4[_0x37edd8(0x35f)]);else return this[_0x37edd8(0x39e)]===_0xccbef4&&(this[_0x37edd8(0x39e)]=this['createFieldAtbGraphicFaceName']()),this[_0x37edd8(0x39e)];}this[_0x37edd8(0x243)]()&&(_0x44d520['y']+=_0x44d520['gaugeHeight']()*_0x555479[_0x37edd8(0x1ac)]-0x1),this[_0x37edd8(0x276)]['x']<0x0&&(_0x44d520[_0x37edd8(0x276)]['x']=-Math['abs'](_0x44d520[_0x37edd8(0x276)]['x']));},Sprite_Battler['prototype'][_0x4c7f4c(0x243)]=function(){const _0x3cf575=_0x4c7f4c;if(!Imported[_0x3cf575(0x231)])return![];if(this[_0x3cf575(0x1f2)]&&this[_0x3cf575(0x1f2)]['isEnemy']())return![];const _0x3c38fd=VisuMZ[_0x3cf575(0x29f)][_0x3cf575(0x205)][_0x3cf575(0x26f)];if(!_0x3c38fd['VisibleGauge'])return![];if(!ConfigManager['aggroGauge'])return![];const _0x557353=VisuMZ[_0x3cf575(0x2bf)][_0x3cf575(0x205)]['Gauge'];return _0x3c38fd[_0x3cf575(0x1ac)]===_0x557353[_0x3cf575(0x1ac)]&&_0x3c38fd[_0x3cf575(0x1f7)]===_0x557353[_0x3cf575(0x1f7)]&&_0x3c38fd[_0x3cf575(0x1a5)]===_0x557353[_0x3cf575(0x1a5)]&&_0x3c38fd[_0x3cf575(0x27b)]===_0x557353['OffsetX']&&_0x3c38fd[_0x3cf575(0x386)]===_0x557353['OffsetY']&&!![];},VisuMZ[_0x4c7f4c(0x2bf)]['Sprite_Battler_update']=Sprite_Battler['prototype']['update'],Sprite_Battler[_0x4c7f4c(0x2e4)]['update']=function(){const _0x11cd93=_0x4c7f4c;VisuMZ[_0x11cd93(0x2bf)][_0x11cd93(0x34d)]['call'](this),!this[_0x11cd93(0x1f2)]&&this[_0x11cd93(0x2bc)]&&(this[_0x11cd93(0x2bc)][_0x11cd93(0x23b)]=![],this['_svBattlerSprite']&&(_0x11cd93(0x2aa)===_0x11cd93(0x2aa)?this[_0x11cd93(0x1cd)][_0x11cd93(0x2bc)][_0x11cd93(0x23b)]=![]:_0x25866c=_0x1bc91f[_0x11cd93(0x28f)](_0x1904de,_0x35cf97)));},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x1a3)]=Sprite_Actor['prototype'][_0x4c7f4c(0x2c5)],Sprite_Actor[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2c5)]=function(){const _0x13e9ad=_0x4c7f4c;VisuMZ[_0x13e9ad(0x2bf)][_0x13e9ad(0x1a3)]['call'](this),this[_0x13e9ad(0x18f)]()&&this[_0x13e9ad(0x331)]();},Sprite_Actor[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x18f)]=function(){const _0x2e29b0=_0x4c7f4c;return VisuMZ[_0x2e29b0(0x2bf)][_0x2e29b0(0x205)][_0x2e29b0(0x236)][_0x2e29b0(0x208)];},Sprite_SvEnemy['prototype'][_0x4c7f4c(0x18f)]=function(){const _0x12bccc=_0x4c7f4c;return VisuMZ[_0x12bccc(0x2bf)][_0x12bccc(0x205)][_0x12bccc(0x236)][_0x12bccc(0x2cc)];},VisuMZ[_0x4c7f4c(0x2bf)]['Sprite_Enemy_createStateIconSprite']=Sprite_Enemy[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x223)],Sprite_Enemy[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x223)]=function(){const _0x2f7fe5=_0x4c7f4c;VisuMZ[_0x2f7fe5(0x2bf)][_0x2f7fe5(0x205)][_0x2f7fe5(0x236)]['ShowEnemyGauge']&&this[_0x2f7fe5(0x331)](),VisuMZ[_0x2f7fe5(0x2bf)][_0x2f7fe5(0x2ab)][_0x2f7fe5(0x2b4)](this);},VisuMZ[_0x4c7f4c(0x2bf)]['Sprite_Enemy_startEffect']=Sprite_Enemy[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x20c)],Sprite_Enemy[_0x4c7f4c(0x2e4)]['startEffect']=function(_0x2a8fc5){const _0x57b829=_0x4c7f4c;VisuMZ['BattleSystemATB']['Sprite_Enemy_startEffect'][_0x57b829(0x2b4)](this,_0x2a8fc5),(_0x2a8fc5===_0x57b829(0x2e7)||'disappear')&&(_0x57b829(0x33f)==='xUMwC'?this[_0x57b829(0x27a)]():this[_0x57b829(0x1f2)]['enemy']()['note'][_0x57b829(0x274)](/<HIDE (?:ATB|TPB) GAUGE>/i)&&(_0x3265d4['visible']=![]));},VisuMZ['BattleSystemATB'][_0x4c7f4c(0x1aa)]=Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2e7)],Game_BattlerBase[_0x4c7f4c(0x2e4)]['appear']=function(){const _0x270278=_0x4c7f4c;VisuMZ[_0x270278(0x2bf)]['Game_BattlerBase_appear'][_0x270278(0x2b4)](this),this['isEnemy']()&&BattleManager[_0x270278(0x1be)]()&&this[_0x270278(0x1b0)]()&&(this[_0x270278(0x1b0)]()[_0x270278(0x293)]=!![],this[_0x270278(0x1b0)]()[_0x270278(0x27a)]());},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x289)]=Sprite_Gauge[_0x4c7f4c(0x2e4)]['gaugeColor1'],Sprite_Gauge[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x28b)]=function(){const _0x1dc40d=_0x4c7f4c;if(this['_statusType']===_0x1dc40d(0x314))return this[_0x1dc40d(0x25d)](0x1);return VisuMZ[_0x1dc40d(0x2bf)]['Sprite_Gauge_gaugeColor1'][_0x1dc40d(0x2b4)](this);},VisuMZ['BattleSystemATB'][_0x4c7f4c(0x393)]=Sprite_Gauge[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2f2)],Sprite_Gauge[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2f2)]=function(){const _0x4483b2=_0x4c7f4c;if(this['_statusType']===_0x4483b2(0x314))return this[_0x4483b2(0x25d)](0x2);return VisuMZ[_0x4483b2(0x2bf)]['Sprite_Gauge_gaugeColor2'][_0x4483b2(0x2b4)](this);},Sprite_Gauge['prototype'][_0x4c7f4c(0x25d)]=function(_0xf0266e){const _0x421dc8=_0x4c7f4c;if(!this['_battler'])return ColorManager[_0x421dc8(0x2e8)]('default%1'[_0x421dc8(0x1f3)](_0xf0266e));if(this['_battler'][_0x421dc8(0x2b0)]())return ColorManager['atbColor'](_0x421dc8(0x216)['format'](_0xf0266e));if(this[_0x421dc8(0x1f2)][_0x421dc8(0x1e6)]())return ColorManager[_0x421dc8(0x2e8)](_0x421dc8(0x388)['format'](_0xf0266e));if(this[_0x421dc8(0x36c)]()>=0x1)return ColorManager[_0x421dc8(0x2e8)](_0x421dc8(0x364)[_0x421dc8(0x1f3)](_0xf0266e));const _0x4e8117=VisuMZ['BattleSystemATB'][_0x421dc8(0x205)][_0x421dc8(0x236)],_0x190e25=this[_0x421dc8(0x1f2)]['paramRate'](0x6)*this[_0x421dc8(0x1f2)][_0x421dc8(0x1ce)](0x6);if(_0x190e25<=_0x4e8117[_0x421dc8(0x309)])return ColorManager['atbColor'](_0x421dc8(0x37c)[_0x421dc8(0x1f3)](_0xf0266e));if(_0x190e25>=_0x4e8117[_0x421dc8(0x221)])return ColorManager[_0x421dc8(0x2e8)](_0x421dc8(0x285)[_0x421dc8(0x1f3)](_0xf0266e));return ColorManager[_0x421dc8(0x2e8)](_0x421dc8(0x1ee)[_0x421dc8(0x1f3)](_0xf0266e));},VisuMZ['BattleSystemATB'][_0x4c7f4c(0x28d)]=Sprite_Gauge[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2da)],Sprite_Gauge[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2da)]=function(){const _0x2c37fe=_0x4c7f4c;if(this[_0x2c37fe(0x1f2)]&&this[_0x2c37fe(0x1ed)]===_0x2c37fe(0x314))return this[_0x2c37fe(0x2b9)]();return VisuMZ[_0x2c37fe(0x2bf)][_0x2c37fe(0x28d)][_0x2c37fe(0x2b4)](this);},Sprite_Gauge['prototype']['atbCurrentValue']=function(){const _0x188497=_0x4c7f4c;return this[_0x188497(0x1f2)]['isAtbCastingState']()?Math[_0x188497(0x28f)](this[_0x188497(0x1f2)][_0x188497(0x30b)],0x0):VisuMZ[_0x188497(0x2bf)][_0x188497(0x28d)][_0x188497(0x2b4)](this);},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x187)]=Sprite_Gauge[_0x4c7f4c(0x2e4)]['currentMaxValue'],Sprite_Gauge['prototype'][_0x4c7f4c(0x2dd)]=function(){const _0x48e28a=_0x4c7f4c;if(this[_0x48e28a(0x1f2)]&&this[_0x48e28a(0x1ed)]==='time')return this[_0x48e28a(0x3a3)]();return VisuMZ[_0x48e28a(0x2bf)][_0x48e28a(0x187)][_0x48e28a(0x2b4)](this);},Sprite_Gauge[_0x4c7f4c(0x2e4)]['atbCurrentMaxValue']=function(){const _0x5dcb77=_0x4c7f4c;if(this['_battler'][_0x5dcb77(0x1e6)]()){if(_0x5dcb77(0x2cf)===_0x5dcb77(0x2cf))return Math[_0x5dcb77(0x28f)](this[_0x5dcb77(0x1f2)][_0x5dcb77(0x38c)](),0x1);else{const _0x5a64f5=_0x5a6d6e[_0x5dcb77(0x20d)](),_0x1c48dd=_0x5a64f5[_0x5dcb77(0x2d6)];for(let _0x3c4d18=0x0;_0x3c4d18<_0x1c48dd;_0x3c4d18++){this[_0x5dcb77(0x1bf)](_0x3c4d18,_0x327003);}}}else return VisuMZ[_0x5dcb77(0x2bf)][_0x5dcb77(0x187)][_0x5dcb77(0x2b4)](this);},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x32c)]=Window_Help[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x390)],Window_Help[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x390)]=function(_0x2d8770){const _0x3cfdf3=_0x4c7f4c;if(BattleManager['isATB']()&&_0x2d8770&&_0x2d8770['note']&&_0x2d8770[_0x3cfdf3(0x371)][_0x3cfdf3(0x274)](/<(?:ATB|TPB) HELP>\s*([\s\S]*)\s*<\/(?:ATB|TPB) HELP>/i)){if(_0x3cfdf3(0x228)!==_0x3cfdf3(0x20a))this[_0x3cfdf3(0x315)](String(RegExp['$1']));else return _0x45577d[_0x3cfdf3(0x2bf)]['Game_Battler_tpbRequiredCastTime'][_0x3cfdf3(0x2b4)](this);}else{if(_0x3cfdf3(0x268)!==_0x3cfdf3(0x1e3))VisuMZ['BattleSystemATB'][_0x3cfdf3(0x32c)]['call'](this,_0x2d8770);else return _0x59a14b(_0xd86f4d['$1']);}},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x396)]=Window_StatusBase[_0x4c7f4c(0x2e4)]['placeGauge'],Window_StatusBase['prototype']['placeGauge']=function(_0x5683c8,_0x3848da,_0x47b970,_0x514092){const _0x491943=_0x4c7f4c;if(!this[_0x491943(0x2b6)](_0x3848da))return;VisuMZ[_0x491943(0x2bf)][_0x491943(0x396)][_0x491943(0x2b4)](this,_0x5683c8,_0x3848da,_0x47b970,_0x514092);},Window_StatusBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2b6)]=function(_0x2566fe){const _0x4982c1=_0x4c7f4c;if(_0x2566fe!=='time')return!![];if(![_0x4982c1(0x269),'Window_SideviewUiBattleStatus'][_0x4982c1(0x188)](this[_0x4982c1(0x32f)][_0x4982c1(0x1de)]))return![];if(!BattleManager[_0x4982c1(0x1be)]())return![];if(!ConfigManager[_0x4982c1(0x35f)])return![];return VisuMZ[_0x4982c1(0x2bf)][_0x4982c1(0x205)]['Gauge'][_0x4982c1(0x1c6)];},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x355)]=Window_Options['prototype'][_0x4c7f4c(0x2c8)],Window_Options[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2c8)]=function(){const _0x126271=_0x4c7f4c;VisuMZ[_0x126271(0x2bf)][_0x126271(0x355)]['call'](this),this[_0x126271(0x361)]();},Window_Options['prototype']['addBattleSystemATBCommands']=function(){const _0x50616d=_0x4c7f4c;if(!BattleManager[_0x50616d(0x1be)]())return;VisuMZ[_0x50616d(0x2bf)][_0x50616d(0x205)]['Options'][_0x50616d(0x1f9)]&&this[_0x50616d(0x297)]();},Window_Options[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x297)]=function(){const _0x1ed58c=TextManager['visualAtbGauge'],_0x152e49='visualAtbGauge';this['addCommand'](_0x1ed58c,_0x152e49);},Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x278)]=function(){const _0x5d90b6=_0x4c7f4c;delete this[_0x5d90b6(0x2c6)],delete this[_0x5d90b6(0x39e)],delete this['_fieldAtbGaugeFaceIndex'],delete this[_0x5d90b6(0x374)];},Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x37e)]=function(){const _0x4f54c2=_0x4c7f4c;return this['_fieldAtbGaugeGraphicType']===undefined&&(this[_0x4f54c2(0x2c6)]=this[_0x4f54c2(0x22a)]()),this[_0x4f54c2(0x2c6)];},Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x22a)]=function(){const _0x51829d=_0x4c7f4c;return Sprite_FieldGaugeATB[_0x51829d(0x205)][_0x51829d(0x2e0)];},Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x395)]=function(){const _0x13eb79=_0x4c7f4c;if(this[_0x13eb79(0x39e)]===undefined){if(_0x13eb79(0x19a)===_0x13eb79(0x229))return _0x16de93[_0x13eb79(0x28f)](this[_0x13eb79(0x1f2)]['_tpbCastTime'],0x0);else this[_0x13eb79(0x39e)]=this[_0x13eb79(0x2ed)]();}return this[_0x13eb79(0x39e)];},Game_BattlerBase[_0x4c7f4c(0x2e4)]['createFieldAtbGraphicFaceName']=function(){const _0x5f0a07=_0x4c7f4c;return Sprite_FieldGaugeATB['Settings'][_0x5f0a07(0x34b)];},Game_BattlerBase[_0x4c7f4c(0x2e4)]['fieldAtbGraphicFaceIndex']=function(){const _0x56eebb=_0x4c7f4c;return this[_0x56eebb(0x347)]===undefined&&(this['_fieldAtbGaugeFaceIndex']=this[_0x56eebb(0x192)]()),this[_0x56eebb(0x347)];},Game_BattlerBase['prototype'][_0x4c7f4c(0x192)]=function(){const _0x38be26=_0x4c7f4c;return Sprite_FieldGaugeATB[_0x38be26(0x205)][_0x38be26(0x29d)];},Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x39d)]=function(){const _0x2ad778=_0x4c7f4c;return this[_0x2ad778(0x374)]===undefined&&(this[_0x2ad778(0x374)]=this[_0x2ad778(0x2ca)]()),this[_0x2ad778(0x374)];},Game_BattlerBase[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2ca)]=function(){const _0x2959b6=_0x4c7f4c;return Sprite_FieldGaugeATB['Settings'][_0x2959b6(0x262)];},Game_BattlerBase[_0x4c7f4c(0x2e4)]['setAtbGraphicIconIndex']=function(_0x32c77f){this['_fieldAtbGaugeIconIndex']=_0x32c77f;},Game_Actor[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x22a)]=function(){const _0x2292e2=_0x4c7f4c,_0x10cac7=this['actor']()[_0x2292e2(0x371)];if(_0x10cac7[_0x2292e2(0x274)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x2292e2(0x373);else{if(_0x10cac7[_0x2292e2(0x274)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x2292e2(0x1ea);}return Sprite_FieldGaugeATB[_0x2292e2(0x205)][_0x2292e2(0x2be)];},Game_Actor[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x2ed)]=function(){const _0x407aa5=_0x4c7f4c,_0x5e19b3=this['actor']()[_0x407aa5(0x371)];if(_0x5e19b3[_0x407aa5(0x274)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this[_0x407aa5(0x28a)]();},Game_Actor['prototype'][_0x4c7f4c(0x192)]=function(){const _0x36abcf=_0x4c7f4c,_0x226b54=this[_0x36abcf(0x24d)]()[_0x36abcf(0x371)];if(_0x226b54[_0x36abcf(0x274)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i)){if('oYtUX'!=='oYtUX')this[_0x36abcf(0x374)]=this['createFieldAtbGraphicIconIndex']();else return Number(RegExp['$2']);}return this[_0x36abcf(0x34a)]();},Game_Actor[_0x4c7f4c(0x2e4)]['createFieldAtbGraphicIconIndex']=function(){const _0x4ef0c6=_0x4c7f4c,_0xa24311=this[_0x4ef0c6(0x24d)]()[_0x4ef0c6(0x371)];if(_0xa24311[_0x4ef0c6(0x274)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x4ef0c6(0x2c3)!==_0x4ef0c6(0x2c3)?this[_0x4ef0c6(0x29e)]():Number(RegExp['$1']);return Sprite_FieldGaugeATB[_0x4ef0c6(0x205)][_0x4ef0c6(0x1da)];},Game_Enemy[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x22a)]=function(){const _0x8e12e8=_0x4c7f4c,_0x483b6d=this['enemy']()[_0x8e12e8(0x371)];if(_0x483b6d[_0x8e12e8(0x274)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i)){if(_0x8e12e8(0x2f4)===_0x8e12e8(0x351)){const _0x2eeb31=_0x1f3f8f[_0x8e12e8(0x205)],_0x362a8d=this['battler'](),_0x42bd2e=this['isGaugeHorizontal'](),_0x4310e0=this[_0x8e12e8(0x379)]['bitmap'][_0x8e12e8(0x185)],_0x19e6d8=this[_0x8e12e8(0x379)][_0x8e12e8(0x1ae)][_0x8e12e8(0x2f0)],_0x32b771=_0x2eeb31[_0x8e12e8(0x2fd)][_0x8e12e8(0x382)](0x0,0x1),_0x2eb2e4=_0x2eeb31[_0x8e12e8(0x18e)];let _0x51b8ef=_0x362a8d[_0x8e12e8(0x332)]()*_0x32b771;_0x51b8ef+=(0x1-_0x32b771)*_0x362a8d[_0x8e12e8(0x2a4)]();if(_0x362a8d===_0x2ba978[_0x8e12e8(0x1e1)])_0x51b8ef=0x1;if(!_0x2eb2e4)_0x51b8ef=0x1-_0x51b8ef;let _0x29b42d=0x0;if(_0x42bd2e)_0x29b42d=_0x51b8ef*_0x4310e0;else!_0x42bd2e&&(_0x29b42d=_0x51b8ef*_0x19e6d8);return _0x4d887d[_0x8e12e8(0x1b7)](_0x29b42d);}else return _0x8e12e8(0x373);}else{if(_0x483b6d[_0x8e12e8(0x274)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x8e12e8(0x1ea);}return Sprite_FieldGaugeATB[_0x8e12e8(0x205)][_0x8e12e8(0x2e0)];},Game_Enemy[_0x4c7f4c(0x2e4)]['createFieldAtbGraphicFaceName']=function(){const _0x52ed5d=_0x4c7f4c,_0x37566d=this[_0x52ed5d(0x21e)]()[_0x52ed5d(0x371)];if(_0x37566d['match'](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Sprite_FieldGaugeATB['Settings']['EnemyBattlerFaceName'];},Game_Enemy[_0x4c7f4c(0x2e4)]['createFieldAtbGraphicFaceIndex']=function(){const _0x364f04=_0x4c7f4c,_0x1016f1=this[_0x364f04(0x21e)]()[_0x364f04(0x371)];if(_0x1016f1[_0x364f04(0x274)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Sprite_FieldGaugeATB[_0x364f04(0x205)][_0x364f04(0x29d)];},Game_Enemy[_0x4c7f4c(0x2e4)]['createFieldAtbGraphicIconIndex']=function(){const _0x11264a=_0x4c7f4c,_0x1219b7=this[_0x11264a(0x21e)]()[_0x11264a(0x371)];if(_0x1219b7[_0x11264a(0x274)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Sprite_FieldGaugeATB[_0x11264a(0x205)]['EnemyBattlerIcon'];},VisuMZ[_0x4c7f4c(0x2bf)][_0x4c7f4c(0x2ef)]=Scene_Battle[_0x4c7f4c(0x2e4)]['createAllWindows'],Scene_Battle['prototype']['createAllWindows']=function(){const _0x2f625b=_0x4c7f4c;this[_0x2f625b(0x242)](),VisuMZ[_0x2f625b(0x2bf)][_0x2f625b(0x2ef)][_0x2f625b(0x2b4)](this),this[_0x2f625b(0x273)]();},Scene_Battle['prototype'][_0x4c7f4c(0x242)]=function(){const _0x404db1=_0x4c7f4c;if(!BattleManager[_0x404db1(0x1be)]())return;if(!Sprite_FieldGaugeATB[_0x404db1(0x205)][_0x404db1(0x303)])return;if(!ConfigManager[_0x404db1(0x35f)])return;this[_0x404db1(0x204)]=new Window_Base(new Rectangle(0x0,0x0,0x0,0x0));const _0x2e3407=this['getChildIndex'](this[_0x404db1(0x3a0)]);this[_0x404db1(0x23f)](this[_0x404db1(0x204)],_0x2e3407);},Scene_Battle[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x273)]=function(){const _0x52ac20=_0x4c7f4c;if(!BattleManager[_0x52ac20(0x1be)]())return;if(!Sprite_FieldGaugeATB[_0x52ac20(0x205)][_0x52ac20(0x303)])return;if(!ConfigManager[_0x52ac20(0x35f)])return;this[_0x52ac20(0x20f)]=new Sprite_FieldGaugeATB(),this[_0x52ac20(0x204)][_0x52ac20(0x338)](this[_0x52ac20(0x20f)]);};function Sprite_FieldGaugeATB(){const _0x4600fe=_0x4c7f4c;this[_0x4600fe(0x196)](...arguments);}Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)]=Object[_0x4c7f4c(0x263)](Sprite[_0x4c7f4c(0x2e4)]),Sprite_FieldGaugeATB['prototype'][_0x4c7f4c(0x32f)]=Sprite_FieldGaugeATB,Sprite_FieldGaugeATB[_0x4c7f4c(0x205)]=JsonEx['makeDeepCopy'](VisuMZ[_0x4c7f4c(0x2bf)]['Settings'][_0x4c7f4c(0x2d1)]),Sprite_FieldGaugeATB['prototype'][_0x4c7f4c(0x196)]=function(){const _0x57e3da=_0x4c7f4c;Sprite[_0x57e3da(0x2e4)][_0x57e3da(0x196)]['call'](this),this[_0x57e3da(0x207)](),this[_0x57e3da(0x1a6)](),this[_0x57e3da(0x24e)]();},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)]['initMembers']=function(){const _0x32465=_0x4c7f4c;this[_0x32465(0x244)]['x']=0.5,this[_0x32465(0x244)]['y']=0.5;},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)]['isGaugeHorizontal']=function(){const _0x2a3ac2=_0x4c7f4c;if(this[_0x2a3ac2(0x2ec)]!==undefined)return this[_0x2a3ac2(0x2ec)];const _0x11e218=Sprite_FieldGaugeATB[_0x2a3ac2(0x205)][_0x2a3ac2(0x1d2)];return this['_horz']=[_0x2a3ac2(0x271),'bottom'][_0x2a3ac2(0x188)](_0x11e218),this['_horz'];},Sprite_FieldGaugeATB['prototype'][_0x4c7f4c(0x1a6)]=function(){const _0x1e9984=_0x4c7f4c,_0xdd0d10=Sprite_FieldGaugeATB['Settings'][_0x1e9984(0x1d2)][_0x1e9984(0x367)]()[_0x1e9984(0x1b6)](),_0x294209=Window_Base[_0x1e9984(0x2e4)][_0x1e9984(0x1f8)](),_0x473d72=SceneManager['_scene'][_0x1e9984(0x19b)][_0x1e9984(0x2f0)]+Math['round'](_0x294209*0.5);this[_0x1e9984(0x322)]=0x0,this[_0x1e9984(0x25c)]=0x0;switch(_0xdd0d10){case'top':this['_homeX']=Math['round'](Graphics[_0x1e9984(0x31c)]*0.5),this[_0x1e9984(0x25c)]=0x60;break;case'bottom':this[_0x1e9984(0x322)]=Math[_0x1e9984(0x1b7)](Graphics['boxWidth']*0.5),this[_0x1e9984(0x25c)]=Graphics['boxHeight']-_0x473d72;break;case _0x1e9984(0x2a2):this[_0x1e9984(0x322)]=0x50,this[_0x1e9984(0x25c)]=Math[_0x1e9984(0x1b7)]((Graphics['boxHeight']-_0x473d72)/0x2);break;case'right':this[_0x1e9984(0x322)]=Graphics[_0x1e9984(0x31c)]-0x50,this[_0x1e9984(0x25c)]=Math[_0x1e9984(0x1b7)]((Graphics[_0x1e9984(0x30a)]-_0x473d72)/0x2);break;}this[_0x1e9984(0x322)]+=Sprite_FieldGaugeATB['Settings']['DisplayOffsetX']||0x0,this[_0x1e9984(0x25c)]+=Sprite_FieldGaugeATB[_0x1e9984(0x205)][_0x1e9984(0x1cc)]||0x0,this['x']=this[_0x1e9984(0x322)],this['y']=this[_0x1e9984(0x25c)];},Sprite_FieldGaugeATB['prototype']['createChildren']=function(){const _0x4d7a0f=_0x4c7f4c;this['createFieldGaugeSkin'](),this[_0x4d7a0f(0x1c8)](),this['createBattlerContainer']();},Sprite_FieldGaugeATB['prototype'][_0x4c7f4c(0x21f)]=function(){const _0x53efb6=_0x4c7f4c;this[_0x53efb6(0x1dd)]=new Sprite(),this[_0x53efb6(0x1dd)][_0x53efb6(0x244)]['x']=0.5,this[_0x53efb6(0x1dd)][_0x53efb6(0x244)]['y']=0.5,this[_0x53efb6(0x338)](this['_skinSprite']);const _0x5d02b2=Sprite_FieldGaugeATB[_0x53efb6(0x205)][_0x53efb6(0x35b)];if(_0x5d02b2)this[_0x53efb6(0x1dd)]['bitmap']=ImageManager['loadSystem'](_0x5d02b2);},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1c8)]=function(){const _0x325770=_0x4c7f4c;this[_0x325770(0x379)]=new Sprite(),this[_0x325770(0x338)](this[_0x325770(0x379)]),this[_0x325770(0x354)]();},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x354)]=function(){const _0x39c322=_0x4c7f4c,_0x5e7c24=Sprite_FieldGaugeATB[_0x39c322(0x205)],_0x291d9f=this['isGaugeHorizontal'](),_0x3ec530=_0x291d9f?_0x5e7c24['GaugeLengthHorz']:_0x5e7c24['GaugeThick'],_0x212606=_0x291d9f?_0x5e7c24[_0x39c322(0x330)]:_0x5e7c24['GaugeLengthVert'];this[_0x39c322(0x379)][_0x39c322(0x1ae)]=new Bitmap(_0x3ec530,_0x212606),this[_0x39c322(0x253)](),this[_0x39c322(0x379)]['x']=Math[_0x39c322(0x283)](_0x3ec530/-0x2),this[_0x39c322(0x379)]['y']=Math[_0x39c322(0x283)](_0x212606/-0x2);},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)]['drawGaugeBitmap']=function(){const _0x1e15f0=_0x4c7f4c;if(!Sprite_FieldGaugeATB['Settings']['DrawGauge'])return;const _0x4c1d3f=Sprite_FieldGaugeATB[_0x1e15f0(0x205)],_0x4affd0=this['_gaugeSprite']['bitmap'],_0x508760=_0x4affd0[_0x1e15f0(0x185)],_0x53e7ce=_0x4affd0['height'],_0x2901e1=ColorManager[_0x1e15f0(0x21c)](),_0x3a7659=ColorManager[_0x1e15f0(0x26a)](),_0x3f375a=ColorManager[_0x1e15f0(0x2e3)](),_0x437bea=ColorManager[_0x1e15f0(0x2e8)](_0x1e15f0(0x282)),_0x306fad=ColorManager[_0x1e15f0(0x2e8)]('cast2'),_0x4bce44=this['isGaugeHorizontal'](),_0x2c50e3=_0x4c1d3f[_0x1e15f0(0x18e)],_0x284bfa=_0x4c1d3f[_0x1e15f0(0x2fd)][_0x1e15f0(0x382)](0x0,0x1),_0x32aa67=Math[_0x1e15f0(0x283)](((_0x4bce44?_0x508760:_0x53e7ce)-0x2)*_0x284bfa);_0x4affd0[_0x1e15f0(0x272)](0x0,0x0,_0x508760,_0x53e7ce,_0x2901e1);let _0x41e4bc=0x0,_0x3634d1=0x0,_0x5cb413=0x0,_0x3adb33=0x0;if(_0x4bce44&&_0x2c50e3)_0x41e4bc=_0x32aa67-0x1,_0x5cb413=_0x508760-0x3-_0x41e4bc,_0x4affd0['gradientFillRect'](0x1,0x1,_0x41e4bc,_0x53e7ce-0x2,_0x3a7659,_0x3f375a,![]),_0x4affd0[_0x1e15f0(0x247)](0x2+_0x41e4bc,0x1,_0x5cb413,_0x53e7ce-0x2,_0x437bea,_0x306fad,![]);else{if(_0x4bce44&&!_0x2c50e3)_0x41e4bc=_0x32aa67-0x1,_0x5cb413=_0x508760-0x3-_0x41e4bc,_0x4affd0['gradientFillRect'](0x2+_0x5cb413,0x1,_0x41e4bc,_0x53e7ce-0x2,_0x3a7659,_0x3f375a,![]),_0x4affd0[_0x1e15f0(0x247)](0x1,0x1,_0x5cb413,_0x53e7ce-0x2,_0x437bea,_0x306fad,![]);else{if(!_0x4bce44&&_0x2c50e3){if(_0x1e15f0(0x3a2)===_0x1e15f0(0x3a2))_0x3634d1=_0x32aa67-0x1,_0x3adb33=_0x53e7ce-0x3-_0x3634d1,_0x4affd0[_0x1e15f0(0x247)](0x1,0x1,_0x508760-0x2,_0x3634d1,_0x3a7659,_0x3f375a,!![]),_0x4affd0[_0x1e15f0(0x247)](0x1,0x2+_0x3634d1,_0x508760-0x2,_0x3adb33,_0x437bea,_0x306fad,!![]);else return this['atbAcceleration']();}else{if(!_0x4bce44&&!_0x2c50e3){if(_0x1e15f0(0x202)===_0x1e15f0(0x202))_0x3634d1=_0x32aa67-0x1,_0x3adb33=_0x53e7ce-0x3-_0x3634d1,_0x4affd0[_0x1e15f0(0x247)](0x1,0x2+_0x3adb33,_0x508760-0x2,_0x3634d1,_0x3a7659,_0x3f375a,!![]),_0x4affd0[_0x1e15f0(0x247)](0x1,0x1,_0x508760-0x2,_0x3adb33,_0x437bea,_0x306fad,!![]);else return![];}}}}},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x258)]=function(){const _0x327e00=_0x4c7f4c;this['_battlerContainer']&&this[_0x327e00(0x379)][_0x327e00(0x34c)](this['_battlerContainer']),this['_battlerContainer']=new Sprite(),this[_0x327e00(0x379)][_0x327e00(0x338)](this['_battlerContainer']),this[_0x327e00(0x1c1)]();},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1c1)]=function(){const _0x4c45dc=_0x4c7f4c;this[_0x4c45dc(0x335)](),this[_0x4c45dc(0x25b)]();},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x335)]=function(){const _0x30e5af=_0x4c7f4c,_0x3dad2a=$gameTroop[_0x30e5af(0x20d)](),_0x39fc5c=_0x3dad2a[_0x30e5af(0x2d6)];for(let _0x57492e=0x0;_0x57492e<_0x39fc5c;_0x57492e++){this[_0x30e5af(0x1bf)](_0x57492e,$gameTroop);}},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x25b)]=function(){const _0x643e6a=_0x4c7f4c,_0x212b48=$gameParty[_0x643e6a(0x2ac)]();for(let _0xe92b3a=0x0;_0xe92b3a<_0x212b48;_0xe92b3a++){this[_0x643e6a(0x1bf)](_0xe92b3a,$gameParty);}},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1bf)]=function(_0x22fafc,_0x48d51c){const _0x318e83=_0x4c7f4c,_0x4e0d8f=new Sprite_FieldMarkerATB(_0x22fafc,_0x48d51c,this[_0x318e83(0x379)]);this[_0x318e83(0x1db)]['addChild'](_0x4e0d8f);},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1bc)]=function(){const _0x47183f=_0x4c7f4c;Sprite[_0x47183f(0x2e4)][_0x47183f(0x1bc)][_0x47183f(0x2b4)](this),this[_0x47183f(0x198)](),this[_0x47183f(0x391)](),this['updateVisibility']();},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x198)]=function(){const _0x59ce8d=_0x4c7f4c,_0x27929a=Sprite_FieldGaugeATB['Settings'];if(_0x27929a['DisplayPosition']!==_0x59ce8d(0x271))return;if(!_0x27929a['RepositionTopForHelp'])return;const _0x8b159b=SceneManager[_0x59ce8d(0x308)][_0x59ce8d(0x366)];if(!_0x8b159b)return;if(_0x8b159b[_0x59ce8d(0x23b)]){if(_0x59ce8d(0x1eb)!==_0x59ce8d(0x261))this['x']=this[_0x59ce8d(0x322)]+(_0x27929a[_0x59ce8d(0x1b2)]||0x0),this['y']=this[_0x59ce8d(0x25c)]+(_0x27929a[_0x59ce8d(0x319)]||0x0);else{if(this[_0x59ce8d(0x1f2)]&&this[_0x59ce8d(0x1ed)]===_0x59ce8d(0x314))return this[_0x59ce8d(0x3a3)]();return _0x2be1a4[_0x59ce8d(0x2bf)]['Sprite_Gauge_currentMaxValue'][_0x59ce8d(0x2b4)](this);}}else this['x']=this[_0x59ce8d(0x322)],this['y']=this[_0x59ce8d(0x25c)];const _0x47eab5=SceneManager['_scene'][_0x59ce8d(0x3a0)];this['x']+=_0x47eab5['x'],this['y']+=_0x47eab5['y'];},Sprite_FieldGaugeATB['prototype'][_0x4c7f4c(0x391)]=function(){const _0x2cf62b=_0x4c7f4c;if(!this[_0x2cf62b(0x1db)])return;const _0x17be14=this['_battlerContainer'][_0x2cf62b(0x246)];if(!_0x17be14)return;_0x17be14[_0x2cf62b(0x19e)](this['compareBattlerSprites'][_0x2cf62b(0x323)](this));},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x209)]=function(_0x420df9,_0x396e0b){const _0x490fc3=_0x4c7f4c,_0x50ff85=this[_0x490fc3(0x190)](),_0x5f924b=Sprite_FieldGaugeATB['Settings']['GaugeDirection'];if(_0x50ff85&&_0x5f924b)return _0x420df9['x']-_0x396e0b['x'];else{if(_0x50ff85&&!_0x5f924b){if(_0x490fc3(0x251)!=='TaaFn'){if(_0x2ddb67!==_0x490fc3(0x314))return!![];if(![_0x490fc3(0x269),'Window_SideviewUiBattleStatus'][_0x490fc3(0x188)](this[_0x490fc3(0x32f)]['name']))return![];if(!_0x16c8da[_0x490fc3(0x1be)]())return![];if(!_0x54677a[_0x490fc3(0x35f)])return![];return _0x16bdd9[_0x490fc3(0x2bf)][_0x490fc3(0x205)]['Gauge'][_0x490fc3(0x1c6)];}else return _0x396e0b['x']-_0x420df9['x'];}else{if(!_0x50ff85&&_0x5f924b){if(_0x490fc3(0x1c0)==='XQcol')this['visible']=_0x21005a['isBattleSystemATBFieldGaugeVisible']();else return _0x420df9['y']-_0x396e0b['y'];}else{if(!_0x50ff85&&!_0x5f924b)return _0x396e0b['y']-_0x420df9['y'];}}}},Sprite_FieldGaugeATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x38a)]=function(){const _0x4f7e7f=_0x4c7f4c;this[_0x4f7e7f(0x23b)]=$gameSystem[_0x4f7e7f(0x24f)]();};function _0x2971(){const _0xd5c7e2=['FieldGaugeClearActorGraphic','max','parameters','<JS\x20%2\x20%1\x20%3>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/JS\x20%2\x20%1\x20%3>','toUpperCase','_fnord','MarkerSize','_tpbTurnEnd','isAppeared','addBattleSystemATBShowGaugeCommand','_windowskin','parse','svactor','MarkerOffset','map','EnemyBattlerFaceIndex','processUpdateGraphic','AggroControlSystem','ARRAYNUM','isStateAffected','left','Charge','getAtbCastTimeRate','Mechanics','status','VtoXR','setupAtbGaugeSprite','loadSystem','PYlMs','Sprite_Enemy_createStateIconSprite','maxBattleMembers','yLzFo','JSON','(?:GAUGE|TIME|SPEED)','atbStopped','ConvertParams','undecided','InterruptText','call','subject','showVisualAtbGauge','battleUIOffsetY','endBattlerActions','atbCurrentValue','_graphicFaceIndex','BattleManager_endBattlerActions','_atbGaugeSprite','_tpbIdleTime','ActorBattlerType','BattleSystemATB','Color','battleUIOffsetX','OpacityRate','wfgDM','swYTg','createStateSprite','_fieldAtbGaugeGraphicType','faceHeight','addGeneralOptions','isEnemy','createFieldAtbGraphicIconIndex','isTpb','ShowEnemyGauge','_graphicType','xMHwP','EOpth','YsKhv','FieldGauge','isAttack','ShowMarkerBg','applyBattleSystemATBUserEffect','hasSvBattler','length','_graphicSv','SystemFieldGaugeVisibility','EenDc','currentValue','fontFace','KnaGr','currentMaxValue','setBattleSystemATBFieldGaugeVisible','isCTB','EnemyBattlerType','VisuMZ_1_BattleCore','_index','ctGaugeColor2','prototype','128730omKahL','InterruptMute','appear','atbColor','mainFontFace','startTpbTurn','EVAL','_horz','createFieldAtbGraphicFaceName','Parse_Notetags_CreateJS','Scene_Battle_createAllWindows','height','UAXFl','gaugeColor2','process_VisuMZ_BattleSystemATB_CreateRegExp','YoTcN','opacity','DDcXG','updateTpb','_atbColors','TkxYe','isSceneBattle','FieldGaugeActorFace','version','GaugeSplit','loadSvActor','createJS','BattlerRelativeSpeedJS','Weapon-%1-%2','updatePositionOnGauge','UseFieldGauge','1876728tajqGX','Scene_Boot_onDatabaseLoaded','okSCX','Game_Battler_tpbRelativeSpeed','_scene','SlowRate','boxHeight','_tpbCastTime','clearTpbChargeTime','updateSelectionEffect','setupTextPopup','ARRAYSTR','_graphicIconIndex','SopvK','some','_plural','time','setText','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20keyType\x20=\x20\x27%2\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20rate\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(keyType\x20===\x20\x27Charge\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbChargeTime;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(keyType\x20===\x20\x27Cast\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbCastTime\x20/\x20Math.max(target.tpbRequiredCastTime(),\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20originalValue\x20=\x20rate;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20NaN\x20Check\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(isNaN(rate)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27NaN\x20rate\x20created\x20by\x20%2\x27.format(\x27\x27,obj.name));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27Restoring\x20rate\x20to\x20%2\x27.format(\x27\x27,originalValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20originalValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rate;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Game_Battler_clearTpbChargeTime','setupBattleSystemATBColors','RepositionTopHelpY','isActor','zZTlo','boxWidth','setupArrowSprite','vhYqx','battlerName','targetOpacity','changeIconGraphicBitmap','_homeX','bind','_needsAtbClear','tpbRelativeSpeed','processBattleCoreJS','InterruptAnimationID','InitialGaugeJS','applyGlobal','setBattler','StunsResetGauge','Window_Help_setItem','NKnzq','die','constructor','GaugeThick','createAtbGaugeSprite','tpbChargeTime','%1BorderColor','isAtbChargingState','createEnemySprites','NUM','applyTpbPenalty','addChild','rYFqk','fast','setAtbChargeTime','Game_BattlerBase_revive','_graphicHue','Skill-%1-%2','xUMwC','getStateTooltipBattler','right','Actors','atbInterrupt','Cast','%1SystemBg','process_VisuMZ_BattleSystemATB_JS_Notetags','_fieldAtbGaugeFaceIndex','EscapeFailPenalty','createArrowSprite','faceIndex','EnemyBattlerFaceName','removeChild','Sprite_Battler_update','applyData','_atbAfterSpeed','tpbBaseSpeed','KRqNg','Class-%1-%2','revive','createGaugeBitmap','Window_Options_addGeneralOptions','setAtbAfterSpeed','Game_Battler_removeState','Enemy-%1-%2','loadFace','25WxJkvA','GaugeSystemSkin','After','State-%1-%2','ParseItemNotetags','visualAtbGauge','cAUuN','addBattleSystemATBCommands','TpbCastTimeJS','InterruptFlashColor','full%1','FaceIndex','_helpWindow','toLowerCase','isTpbCharged','_tpbState','_forcing','maxCommands','gaugeRate','STRUCT','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','setFrame','loadSvEnemy','note','Item-%1-%2','face','_fieldAtbGaugeIconIndex','updatePositionOffset','default','Game_Unit_updateTpb','drawText','_gaugeSprite','FaceName','_tpbTurnCount','slow%1','DiOKj','fieldAtbGraphicType','clear','Game_Battler_tpbSpeed','_onRestrictBypassAtbReset','clamp','initTpbChargeTimeATB','full','(?:ATB|TPB)','OffsetY','changeSvActorGraphicBitmap','cast%1','applyItemUserEffect','updateVisibility','JpOQu','tpbRequiredCastTime','concat','_graphicFaceName','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','setItem','updateBattleContainerOrder','QNjBO','Sprite_Gauge_gaugeColor2','CIjFA','fieldAtbGraphicFaceName','Window_StatusBase_placeGauge','charging','createBackgroundSprite','setup','canMakeTpbActionsAtStartTpbTurn','MuZpB','WQSxp','fieldAtbGraphicIconIndex','_fieldAtbGaugeFaceName','mainSprite','_windowLayer','updateLetter','BNtGO','atbCurrentMaxValue','VDpoO','ParseSkillNotetags','_unit','LAHNd','mNHUB','Xpgqi','Game_Battler_applyTpbPenalty','width','nKAba','Sprite_Gauge_currentMaxValue','includes','CRMGa','floor','FieldGaugeClearEnemyGraphic','WEWlb','Sprite_Battler_setBattler','GaugeDirection','isShowAtbGauge','isGaugeHorizontal','battleMembers','createFieldAtbGraphicFaceIndex','Actor','changeAtbCastTime','svActorHorzCells','initialize','#000000','updatePosition','Game_Action_applyGlobal','QDsJa','_statusWindow','min','JXdrF','sort','_atbFieldGaugeVisible','WSqzZ','Enemies','isRestricted','Sprite_Actor_createStateSprite','hOCst','AnchorY','setHomeLocation','startTpbCasting','%1BgColor1','faceWidth','Game_BattlerBase_appear','Scene_Options_maxCommands','Scale','qNcob','bitmap','atbSpeed','battler','RegExp','RepositionTopHelpX','stop','PVyRW','currentAction','trim','round','IconIndex','Game_Battler_tpbBaseSpeed','168BWemnx','_arrowSprite','update','applyItemBattleSystemATBUserEffect','isATB','createBattlerSprite','kjPju','createBattlerSprites','iconWidth','1750035GwfqkQ','targetPositionOnGauge','Sprite_Battler_updateMain','ShowStatusGauge','MarkerArrowWindowSkin','createGaugeSprite','updateAtbGaugeSpritePosition','TpbAccelerationJS','2243465pixIKD','DisplayOffsetY','_svBattlerSprite','paramBuffRate','InterruptFlashDuration','description','Game_System_initialize','DisplayPosition','isActiveTpb','BattleManager_isActiveTpb','tpbSpeed','blt','abs','isHidden','%1SystemBorder','ActorBattlerIcon','_battlerContainer','Game_Battler_startTpbCasting','_skinSprite','name','removeState','InterruptTextColor','_subject','FieldGaugeEnemyIcon','qTHSr','ZNttW','Options','isAtbCastingState','VbAcJ','clearActions','atbAcceleration','icon','WQWNM','PwJGr','_statusType','default%1','_graphicEnemy','#%1','setHue','_battler','format','uBOLN','InterruptMirror','makeActions','AnchorX','lineHeight','AddOption','%1Side','clearRect','updateMain','changeEnemyGraphicBitmap','numActions','canMove','ConfigManager_makeData','_backgroundSprite','KTCeZ','tpbAcceleration','_fieldGaugeATB_Container','Settings','FRmVp','initMembers','ShowActorGauge','compareBattlerSprites','hDSdG','uzozQ','startEffect','members','createLetterSprite','_fieldGaugeATB','aggroGauge','Enemy','auLsL','28606tasjfw','paramRate','4051197DPqQTS','stop%1','registerCommand','_graphicSprite','applyGlobalBattleSystemATBEffects','updateOpacity','loadWindowskin','gaugeBackColor','Game_BattlerBase_die','enemy','createFieldGaugeSkin','updateGraphicHue','FastRate','bottom','createStateIconSprite','addLoadListener','speed','ColorManager_loadWindowskin','ConfigManager_applyData','GBtbY','erSUi','createFieldAtbGraphicType','ARRAYSTRUCT','_letter','Armor-%1-%2','svActorVertCells','FieldGaugeEnemyFace','changeFaceGraphicBitmap','VisuMZ_2_AggroControlSystem','OJNBa','BorderThickness','ready','onAtbInterrupt','Gauge','Game_Action_applyItemUserEffect','Ptsmh','atbActive','createGraphicSprite','visible','Game_Actor_clearActions','ParseAllNotetags','Yprhq','addChildAt','item','YqkJB','createFieldGaugeContainerATB','checkAggroControlSystemOffsetYAdjustment','anchor','traitObjects','children','gradientFillRect','Actor-%1-%2','updateGraphic','Game_Battler_initTpbChargeTime','Game_Battler_tpbAcceleration','onDatabaseLoaded','actor','createChildren','isBattleSystemATBFieldGaugeVisible','onRestrict','TaaFn','getColor','drawGaugeBitmap','createBorderSprite','fieldAtbGraphicFaceIndex','applyATBPenalty','exit','createBattlerContainer','initTpbChargeTime','textColor','createActorSprites','_homeY','atbGaugeColor','NBLuK','Game_Battler_onRestrict','isDead','oXwoo','EnemyBattlerIcon','create','BattleCore','initBattleSystemATB','battlerHue','changeAtbChargeTime','yxHhh','Window_BattleStatus','ctGaugeColor1','Vizba','PvkMV','Visible','ozGno','Aggro','_letterSprite','top','fillRect','createFieldGaugeSpriteATB','match','rbRNL','scale','createKeyJS','clearFieldAtbGraphics','skills','updateAtbGaugeSpriteVisibility','OffsetX','1383696igjgDO','YOnlt','ARRAYJSON','setAtbCastTime','_tpbChargeTime','IconSet','cast1','ceil','ShowMarkerBorder','fast%1','reduce','svBattlerName','VisuMZ_2_BattleSystemCTB','Sprite_Gauge_gaugeColor1','faceName','gaugeColor1','cast','Sprite_Gauge_currentValue'];_0x2971=function(){return _0xd5c7e2;};return _0x2971();}function _0x13ba(_0x465dc9,_0x16b358){const _0x2971ba=_0x2971();return _0x13ba=function(_0x13bacb,_0xf2b52c){_0x13bacb=_0x13bacb-0x183;let _0x46b391=_0x2971ba[_0x13bacb];return _0x46b391;},_0x13ba(_0x465dc9,_0x16b358);}function Sprite_FieldMarkerATB(){const _0x56a0da=_0x4c7f4c;this[_0x56a0da(0x196)](...arguments);}Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)]=Object[_0x4c7f4c(0x263)](Sprite_Clickable[_0x4c7f4c(0x2e4)]),Sprite_FieldMarkerATB['prototype'][_0x4c7f4c(0x32f)]=Sprite_FieldMarkerATB,Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x196)]=function(_0x220ba6,_0x1a6ada,_0x2dac3f){const _0x1e890b=_0x4c7f4c;this[_0x1e890b(0x2e2)]=_0x220ba6,this[_0x1e890b(0x3a6)]=_0x1a6ada,this[_0x1e890b(0x379)]=_0x2dac3f,Sprite_Clickable[_0x1e890b(0x2e4)][_0x1e890b(0x196)][_0x1e890b(0x2b4)](this),this['initMembers'](),this['createChildren'](),this[_0x1e890b(0x2f5)]=this[_0x1e890b(0x320)]();},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)]['initMembers']=function(){const _0xd82ef0=_0x4c7f4c;this[_0xd82ef0(0x244)]['x']=0.5,this[_0xd82ef0(0x244)]['y']=0.5;},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x24e)]=function(){const _0x54a84d=_0x4c7f4c;this[_0x54a84d(0x398)](),this[_0x54a84d(0x23a)](),this['createBorderSprite'](),this[_0x54a84d(0x20e)](),this['createArrowSprite'](),this[_0x54a84d(0x302)](!![]);},Sprite_FieldMarkerATB['prototype'][_0x4c7f4c(0x398)]=function(){const _0x475884=_0x4c7f4c;if(!Sprite_FieldGaugeATB[_0x475884(0x205)][_0x475884(0x2d3)])return;const _0x23866c=Sprite_FieldGaugeATB['Settings'],_0x4de73a=this[_0x475884(0x3a6)]===$gameParty?'Actor':_0x475884(0x211),_0x33d589=_0x475884(0x345)['format'](_0x4de73a),_0x313d13=new Sprite();_0x313d13[_0x475884(0x244)]['x']=this[_0x475884(0x244)]['x'],_0x313d13[_0x475884(0x244)]['y']=this[_0x475884(0x244)]['y'];if(_0x23866c[_0x33d589]){if('DDcXG'!==_0x475884(0x2f6)){const _0x35cefb=[_0x475884(0x376),_0x475884(0x384),_0x475884(0x28c),_0x475884(0x33a),'slow',_0x475884(0x1b3)],_0x516957=_0x509279['BattleSystemATB']['Settings'][_0x475884(0x2c0)];this[_0x475884(0x2f8)]={};for(const _0x28c8cb of _0x35cefb){for(let _0x3fd6e0=0x1;_0x3fd6e0<=0x2;_0x3fd6e0++){const _0x1b8461=_0x28c8cb+_0x3fd6e0;this[_0x475884(0x2f8)][_0x1b8461]=this[_0x475884(0x252)](_0x516957[_0x1b8461]);}}}else _0x313d13['bitmap']=ImageManager['loadSystem'](_0x23866c[_0x33d589]);}else{const _0x10b6f9=_0x23866c[_0x475884(0x294)];_0x313d13[_0x475884(0x1ae)]=new Bitmap(_0x10b6f9,_0x10b6f9);const _0x1710cf=ColorManager[_0x475884(0x252)](_0x23866c[_0x475884(0x1a8)[_0x475884(0x1f3)](_0x4de73a)]),_0x2a6e66=ColorManager[_0x475884(0x252)](_0x23866c['%1BgColor2'[_0x475884(0x1f3)](_0x4de73a)]);_0x313d13[_0x475884(0x1ae)][_0x475884(0x247)](0x0,0x0,_0x10b6f9,_0x10b6f9,_0x1710cf,_0x2a6e66,!![]);}this[_0x475884(0x201)]=_0x313d13,this['addChild'](this[_0x475884(0x201)]),this[_0x475884(0x185)]=this[_0x475884(0x201)][_0x475884(0x185)],this[_0x475884(0x2f0)]=this[_0x475884(0x201)][_0x475884(0x2f0)];},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x23a)]=function(){const _0x4a6595=_0x4c7f4c,_0x293043=new Sprite();_0x293043[_0x4a6595(0x244)]['x']=this['anchor']['x'],_0x293043[_0x4a6595(0x244)]['y']=this['anchor']['y'],this[_0x4a6595(0x218)]=_0x293043,this[_0x4a6595(0x338)](this[_0x4a6595(0x218)]),this[_0x4a6595(0x29e)]();},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x254)]=function(){const _0x256f8f=_0x4c7f4c;if(!Sprite_FieldGaugeATB[_0x256f8f(0x205)][_0x256f8f(0x284)])return;const _0x48285f=Sprite_FieldGaugeATB[_0x256f8f(0x205)],_0x32bcb1=this['_unit']===$gameParty?_0x256f8f(0x193):_0x256f8f(0x211),_0x17dac5=_0x256f8f(0x1d9)['format'](_0x32bcb1),_0x21feb3=new Sprite();_0x21feb3[_0x256f8f(0x244)]['x']=this['anchor']['x'],_0x21feb3[_0x256f8f(0x244)]['y']=this['anchor']['y'];if(_0x48285f[_0x17dac5]){if(_0x256f8f(0x26c)!==_0x256f8f(0x26c)){if(_0x311189[_0x256f8f(0x277)])return _0x510843['createKeyJS'](_0x23f2b2,_0x22adf1);let _0x445e9f='';if(_0x2dec7d['includes'](_0x220ee0))_0x445e9f='Actor-%1-%2'[_0x256f8f(0x1f3)](_0x1d609b['id'],_0x395b88);if(_0x5882d3[_0x256f8f(0x188)](_0x2bae70))_0x445e9f='Class-%1-%2'['format'](_0x1d3b55['id'],_0x5eabbd);if(_0x53061f[_0x256f8f(0x188)](_0xfdb97d))_0x445e9f='Skill-%1-%2'['format'](_0x35be64['id'],_0x85cc08);if(_0x52373a[_0x256f8f(0x188)](_0x8d724f))_0x445e9f='Item-%1-%2'['format'](_0x379101['id'],_0x2a0e49);if(_0x5e1fd8[_0x256f8f(0x188)](_0x586e0f))_0x445e9f=_0x256f8f(0x301)[_0x256f8f(0x1f3)](_0x5cbb89['id'],_0x2fab9e);if(_0x3ad212['includes'](_0x469f1d))_0x445e9f=_0x256f8f(0x22d)[_0x256f8f(0x1f3)](_0x450e8f['id'],_0x20a559);if(_0x5f587c[_0x256f8f(0x188)](_0x4ad716))_0x445e9f='Enemy-%1-%2'['format'](_0x5409de['id'],_0x3f97e0);if(_0x40ae6b['includes'](_0x323d48))_0x445e9f=_0x256f8f(0x35d)[_0x256f8f(0x1f3)](_0x13522f['id'],_0x16da41);return _0x445e9f;}else _0x21feb3[_0x256f8f(0x1ae)]=ImageManager['loadSystem'](_0x48285f[_0x17dac5]);}else{let _0x5bc281=_0x48285f[_0x256f8f(0x294)],_0x2c5b32=_0x48285f['BorderThickness'];_0x21feb3[_0x256f8f(0x1ae)]=new Bitmap(_0x5bc281,_0x5bc281);const _0x5bc590='#000000',_0x30a059=ColorManager[_0x256f8f(0x252)](_0x48285f[_0x256f8f(0x333)[_0x256f8f(0x1f3)](_0x32bcb1)]);_0x21feb3['bitmap'][_0x256f8f(0x272)](0x0,0x0,_0x5bc281,_0x5bc281,_0x5bc590),_0x5bc281-=0x2,_0x21feb3[_0x256f8f(0x1ae)][_0x256f8f(0x272)](0x1,0x1,_0x5bc281,_0x5bc281,_0x30a059),_0x5bc281-=_0x2c5b32*0x2,_0x21feb3[_0x256f8f(0x1ae)][_0x256f8f(0x272)](0x1+_0x2c5b32,0x1+_0x2c5b32,_0x5bc281,_0x5bc281,_0x5bc590),_0x5bc281-=0x2,_0x2c5b32+=0x1,_0x21feb3[_0x256f8f(0x1ae)]['clearRect'](0x1+_0x2c5b32,0x1+_0x2c5b32,_0x5bc281,_0x5bc281);}this[_0x256f8f(0x201)]=_0x21feb3,this['addChild'](this[_0x256f8f(0x201)]);},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)]['createLetterSprite']=function(){const _0x2c0346=_0x4c7f4c,_0x535f83=Sprite_FieldGaugeATB[_0x2c0346(0x205)];if(!_0x535f83['EnemyBattlerDrawLetter'])return;if(this[_0x2c0346(0x3a6)]===$gameParty)return;const _0x29c8e7=_0x535f83[_0x2c0346(0x294)],_0x3f4c12=new Sprite();_0x3f4c12[_0x2c0346(0x244)]['x']=this[_0x2c0346(0x244)]['x'],_0x3f4c12['anchor']['y']=this[_0x2c0346(0x244)]['y'],_0x3f4c12[_0x2c0346(0x1ae)]=new Bitmap(_0x29c8e7,_0x29c8e7),this[_0x2c0346(0x270)]=_0x3f4c12,this['addChild'](this[_0x2c0346(0x270)]);},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x349)]=function(){const _0x184e00=_0x4c7f4c,_0x2f1f09=Sprite_FieldGaugeATB['Settings'];if(!_0x2f1f09['ShowMarkerArrow'])return;const _0x4fbf33=new Sprite();_0x4fbf33[_0x184e00(0x244)]['x']=this[_0x184e00(0x244)]['x'],_0x4fbf33[_0x184e00(0x244)]['y']=this[_0x184e00(0x244)]['y'],this[_0x184e00(0x31d)](_0x4fbf33),this[_0x184e00(0x1bb)]=_0x4fbf33,this[_0x184e00(0x338)](this[_0x184e00(0x1bb)]);},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x31d)]=function(_0x9ba7c1){const _0x81c236=_0x4c7f4c,_0x44d166=Sprite_FieldGaugeATB[_0x81c236(0x205)],_0x339312=_0x44d166[_0x81c236(0x294)],_0x403346=Math['round'](_0x339312/0x2),_0xce8634=this[_0x81c236(0x190)](),_0x6d042f=this['_unit']===$gameParty?_0x81c236(0x193):_0x81c236(0x211),_0x3fa4d5=_0x44d166[_0x81c236(0x1fa)[_0x81c236(0x1f3)](_0x6d042f)];_0x9ba7c1[_0x81c236(0x1ae)]=ImageManager[_0x81c236(0x2a9)](_0x44d166[_0x81c236(0x1c7)]);const _0x1f6219=0x18,_0x11043f=_0x1f6219/0x2,_0x17082e=0x60+_0x1f6219,_0x1aa5fd=0x0+_0x1f6219;if(_0xce8634&&_0x3fa4d5){if(_0x81c236(0x1a4)==='AXgQc'){if(!this[_0x81c236(0x1e6)]())return;if(!this[_0x81c236(0x1b5)]())return;if(!this[_0x81c236(0x1b5)]()[_0x81c236(0x240)]())return;if(this['currentAction']()[_0x81c236(0x240)]()[_0x81c236(0x371)][_0x81c236(0x274)](/<(?:ATB|TPB) CANNOT (?:BE INTERRUPTED|INTERRUPT)>/i))return;this[_0x81c236(0x1e8)](),this['clearTpbChargeTime'](),this[_0x81c236(0x30b)]=0x0,this['onAtbInterrupt']();}else _0x9ba7c1[_0x81c236(0x36f)](_0x17082e+_0x11043f,_0x1aa5fd+_0x11043f+_0x1f6219,_0x1f6219,_0x11043f),_0x9ba7c1['y']+=_0x403346,_0x9ba7c1[_0x81c236(0x244)]['y']=0x0;}else{if(_0xce8634&&!_0x3fa4d5)_0x9ba7c1[_0x81c236(0x36f)](_0x17082e+_0x11043f,_0x1aa5fd,_0x1f6219,_0x11043f),_0x9ba7c1['y']-=_0x403346,_0x9ba7c1[_0x81c236(0x244)]['y']=0x1;else{if(!_0xce8634&&_0x3fa4d5)_0x9ba7c1['setFrame'](_0x17082e,_0x1aa5fd+_0x11043f,_0x11043f,_0x1f6219),_0x9ba7c1['x']-=Math[_0x81c236(0x283)](_0x403346*1.75),_0x9ba7c1['anchor']['x']=0x0;else!_0xce8634&&!_0x3fa4d5&&(_0x9ba7c1['setFrame'](_0x17082e+_0x1f6219+_0x11043f,_0x1aa5fd+_0x11043f,_0x11043f,_0x1f6219),_0x9ba7c1['x']+=Math[_0x81c236(0x283)](_0x403346*1.75),_0x9ba7c1[_0x81c236(0x244)]['x']=0x1);}}},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1b0)]=function(){const _0x59698d=_0x4c7f4c;if(this['_unit']===$gameParty)return $gameParty[_0x59698d(0x191)]()[this[_0x59698d(0x2e2)]];else{if(_0x59698d(0x2c4)!==_0x59698d(0x2c4))_0x44151f[_0x59698d(0x1be)]()?this[_0x59698d(0x256)]():_0x274231['BattleSystemATB'][_0x59698d(0x184)][_0x59698d(0x2b4)](this);else return $gameTroop['members']()[this[_0x59698d(0x2e2)]];}},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)]['update']=function(){const _0xe43cb3=_0x4c7f4c;Sprite_Clickable[_0xe43cb3(0x2e4)][_0xe43cb3(0x1bc)][_0xe43cb3(0x2b4)](this),this['updateOpacity'](),this[_0xe43cb3(0x375)](),this[_0xe43cb3(0x302)](),this[_0xe43cb3(0x249)](),this[_0xe43cb3(0x220)](),this[_0xe43cb3(0x3a1)](),this['updateSelectionEffect']();},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x21a)]=function(){const _0x3506c5=_0x4c7f4c,_0x160fc3=this['targetOpacity'](),_0x531a16=Sprite_FieldGaugeATB['Settings'][_0x3506c5(0x2c2)];if(this[_0x3506c5(0x2f5)]>_0x160fc3)this[_0x3506c5(0x2f5)]=Math['max'](_0x160fc3,this[_0x3506c5(0x2f5)]-_0x531a16);else this[_0x3506c5(0x2f5)]<_0x160fc3&&(this['opacity']=Math[_0x3506c5(0x19c)](_0x160fc3,this[_0x3506c5(0x2f5)]+_0x531a16));},Sprite_FieldMarkerATB['prototype']['targetOpacity']=function(){const _0x4cb0ee=_0x4c7f4c,_0x3b3ae7=this[_0x4cb0ee(0x1b0)]();if(!_0x3b3ae7)return 0x0;if(_0x3b3ae7[_0x4cb0ee(0x1d8)]())return 0x0;if(_0x3b3ae7[_0x4cb0ee(0x260)]())return 0x0;return 0xff;},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)]['isGaugeHorizontal']=function(){const _0x4e550d=_0x4c7f4c;if(this[_0x4e550d(0x2ec)]!==undefined)return this[_0x4e550d(0x2ec)];const _0x3327e7=Sprite_FieldGaugeATB['Settings'][_0x4e550d(0x1d2)];return this[_0x4e550d(0x2ec)]=['top',_0x4e550d(0x222)][_0x4e550d(0x188)](_0x3327e7),this[_0x4e550d(0x2ec)];},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)]['updatePositionOffset']=function(){const _0x1691b0=_0x4c7f4c,_0x5d47b6=Sprite_FieldGaugeATB[_0x1691b0(0x205)],_0x582061=this['isGaugeHorizontal'](),_0x53f3ae=this['_unit']===$gameParty?'Actor':_0x1691b0(0x211),_0x36e4e6=_0x5d47b6[_0x1691b0(0x29b)],_0x15d68e=_0x5d47b6[_0x1691b0(0x1fa)[_0x1691b0(0x1f3)](_0x53f3ae)];_0x582061?(this['y']=_0x5d47b6[_0x1691b0(0x330)]/0x2,this['y']+=_0x15d68e?-_0x36e4e6:_0x36e4e6):(this['x']=_0x5d47b6[_0x1691b0(0x330)]/0x2,this['x']+=_0x15d68e?_0x36e4e6:-_0x36e4e6);},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x302)]=function(_0x536bd4){const _0xab2e32=_0x4c7f4c,_0x2a6652=this[_0xab2e32(0x1b0)]();if(!_0x2a6652)return;const _0x4398b3=Sprite_FieldGaugeATB[_0xab2e32(0x205)],_0x20cbfa=this[_0xab2e32(0x190)](),_0x39f479=this['targetPositionOnGauge'](),_0x24b8aa=_0x536bd4?Infinity:_0x4398b3['MarkerSpeed'];if(_0x20cbfa&&this['x']!==_0x39f479){if(_0xab2e32(0x3a4)!==_0xab2e32(0x3a4)){if(this[_0xab2e32(0x2ec)]!==_0x431eaa)return this[_0xab2e32(0x2ec)];const _0x54704d=_0x3f1868['Settings'][_0xab2e32(0x1d2)];return this['_horz']=[_0xab2e32(0x271),'bottom'][_0xab2e32(0x188)](_0x54704d),this[_0xab2e32(0x2ec)];}else{if(this['x']>_0x39f479)this['x']=Math[_0xab2e32(0x28f)](_0x39f479,this['x']-_0x24b8aa);if(this['x']<_0x39f479)this['x']=Math[_0xab2e32(0x19c)](_0x39f479,this['x']+_0x24b8aa);}}else{if(!_0x20cbfa&&this['x']!==_0x39f479){if(this['y']>_0x39f479)this['y']=Math[_0xab2e32(0x28f)](_0x39f479,this['y']-_0x24b8aa);if(this['y']<_0x39f479)this['y']=Math[_0xab2e32(0x19c)](_0x39f479,this['y']+_0x24b8aa);}}},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x1c4)]=function(){const _0x4302b5=_0x4c7f4c,_0x3ae7ee=Sprite_FieldGaugeATB[_0x4302b5(0x205)],_0x37a169=this[_0x4302b5(0x1b0)](),_0x3a387f=this[_0x4302b5(0x190)](),_0x5ccd75=this[_0x4302b5(0x379)][_0x4302b5(0x1ae)]['width'],_0x48e441=this[_0x4302b5(0x379)]['bitmap'][_0x4302b5(0x2f0)],_0x39e29d=_0x3ae7ee[_0x4302b5(0x2fd)][_0x4302b5(0x382)](0x0,0x1),_0x2d5793=_0x3ae7ee[_0x4302b5(0x18e)];let _0x384743=_0x37a169['tpbChargeTime']()*_0x39e29d;_0x384743+=(0x1-_0x39e29d)*_0x37a169[_0x4302b5(0x2a4)]();if(_0x37a169===BattleManager[_0x4302b5(0x1e1)])_0x384743=0x1;if(!_0x2d5793)_0x384743=0x1-_0x384743;let _0xd201e5=0x0;if(_0x3a387f){if(_0x4302b5(0x39b)!==_0x4302b5(0x31b))_0xd201e5=_0x384743*_0x5ccd75;else return _0x144249[_0x4302b5(0x205)][_0x4302b5(0x29d)];}else!_0x3a387f&&(_0xd201e5=_0x384743*_0x48e441);return Math['round'](_0xd201e5);},Sprite_FieldMarkerATB['prototype'][_0x4c7f4c(0x249)]=function(){const _0x42d067=_0x4c7f4c,_0x1be633=this[_0x42d067(0x1b0)]();if(!_0x1be633)return;const _0x27866c=Sprite_FieldGaugeATB[_0x42d067(0x205)],_0x1ebbe9=this[_0x42d067(0x3a6)]===$gameParty?_0x42d067(0x193):_0x42d067(0x211);let _0x3462ee=_0x1be633[_0x42d067(0x37e)]();if(_0x1be633[_0x42d067(0x31a)]()&&_0x3462ee===_0x42d067(0x21e))_0x3462ee=_0x42d067(0x373);else _0x1be633[_0x42d067(0x2c9)]()&&_0x3462ee===_0x42d067(0x29a)&&(_0x3462ee='enemy');if(this[_0x42d067(0x2cd)]!==_0x3462ee)return this[_0x42d067(0x29e)]();switch(this[_0x42d067(0x2cd)]){case _0x42d067(0x373):if(this[_0x42d067(0x38e)]!==_0x1be633[_0x42d067(0x395)]()){if(_0x42d067(0x339)===_0x42d067(0x339))return this[_0x42d067(0x29e)]();else{const _0x11d5c7=this[_0x42d067(0x21e)]()[_0x42d067(0x371)];if(_0x11d5c7[_0x42d067(0x274)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0xd9360a(_0x47e95b['$1']);return _0x376108[_0x42d067(0x205)]['EnemyBattlerIcon'];}}if(this['_graphicFaceIndex']!==_0x1be633[_0x42d067(0x255)]())return this[_0x42d067(0x29e)]();break;case _0x42d067(0x1ea):if(this['_graphicIconIndex']!==_0x1be633[_0x42d067(0x39d)]()){if(_0x42d067(0x3a7)===_0x42d067(0x238)){if(!_0x630c83[_0x42d067(0x231)])return![];if(this['_battler']&&this[_0x42d067(0x1f2)]['isEnemy']())return![];const _0x1a1ddb=_0xf09910[_0x42d067(0x29f)][_0x42d067(0x205)][_0x42d067(0x26f)];if(!_0x1a1ddb['VisibleGauge'])return![];if(!_0x1a95cc[_0x42d067(0x210)])return![];const _0x58604b=_0x2249c9[_0x42d067(0x2bf)][_0x42d067(0x205)]['Gauge'];return _0x1a1ddb[_0x42d067(0x1ac)]===_0x58604b['Scale']&&_0x1a1ddb[_0x42d067(0x1f7)]===_0x58604b['AnchorX']&&_0x1a1ddb[_0x42d067(0x1a5)]===_0x58604b[_0x42d067(0x1a5)]&&_0x1a1ddb['OffsetX']===_0x58604b[_0x42d067(0x27b)]&&_0x1a1ddb[_0x42d067(0x386)]===_0x58604b[_0x42d067(0x386)]&&!![];}else return this[_0x42d067(0x29e)]();}break;case'enemy':if(_0x1be633[_0x42d067(0x2d5)]()){if(this[_0x42d067(0x2d7)]!==_0x1be633[_0x42d067(0x287)]())return this[_0x42d067(0x29e)]();}else{if(this[_0x42d067(0x1ef)]!==_0x1be633['battlerName']())return this['processUpdateGraphic']();}break;case _0x42d067(0x29a):if(_0x1be633['isActor']()){if(this['_graphicSv']!==_0x1be633[_0x42d067(0x31f)]())return this[_0x42d067(0x29e)]();}else{if(this[_0x42d067(0x1ef)]!==_0x1be633[_0x42d067(0x31f)]()){if(_0x42d067(0x311)===_0x42d067(0x18c)){if(!_0x178425[_0x42d067(0x205)][_0x42d067(0x284)])return;const _0x52cacd=_0x247b6a['Settings'],_0x3878b1=this[_0x42d067(0x3a6)]===_0x23d0f6?_0x42d067(0x193):'Enemy',_0x2b7072=_0x42d067(0x1d9)[_0x42d067(0x1f3)](_0x3878b1),_0x1a0ecf=new _0x641dc9();_0x1a0ecf[_0x42d067(0x244)]['x']=this[_0x42d067(0x244)]['x'],_0x1a0ecf[_0x42d067(0x244)]['y']=this[_0x42d067(0x244)]['y'];if(_0x52cacd[_0x2b7072])_0x1a0ecf[_0x42d067(0x1ae)]=_0x19fc4c[_0x42d067(0x2a9)](_0x52cacd[_0x2b7072]);else{let _0x586e39=_0x52cacd[_0x42d067(0x294)],_0x25746b=_0x52cacd[_0x42d067(0x233)];_0x1a0ecf[_0x42d067(0x1ae)]=new _0xc944c(_0x586e39,_0x586e39);const _0x2e9333=_0x42d067(0x197),_0x2c5f5d=_0x2a0a14[_0x42d067(0x252)](_0x52cacd[_0x42d067(0x333)[_0x42d067(0x1f3)](_0x3878b1)]);_0x1a0ecf[_0x42d067(0x1ae)][_0x42d067(0x272)](0x0,0x0,_0x586e39,_0x586e39,_0x2e9333),_0x586e39-=0x2,_0x1a0ecf[_0x42d067(0x1ae)]['fillRect'](0x1,0x1,_0x586e39,_0x586e39,_0x2c5f5d),_0x586e39-=_0x25746b*0x2,_0x1a0ecf[_0x42d067(0x1ae)][_0x42d067(0x272)](0x1+_0x25746b,0x1+_0x25746b,_0x586e39,_0x586e39,_0x2e9333),_0x586e39-=0x2,_0x25746b+=0x1,_0x1a0ecf['bitmap'][_0x42d067(0x1fb)](0x1+_0x25746b,0x1+_0x25746b,_0x586e39,_0x586e39);}this[_0x42d067(0x201)]=_0x1a0ecf,this['addChild'](this[_0x42d067(0x201)]);}else return this[_0x42d067(0x29e)]();}}break;}},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x29e)]=function(){const _0x5446dc=_0x4c7f4c,_0x168773=this[_0x5446dc(0x1b0)]();if(!_0x168773)return;this[_0x5446dc(0x2cd)]=_0x168773[_0x5446dc(0x37e)]();if(_0x168773[_0x5446dc(0x31a)]()&&this['_graphicType']===_0x5446dc(0x21e))this[_0x5446dc(0x2cd)]='face';else _0x168773['isEnemy']()&&this['_graphicType']===_0x5446dc(0x29a)&&(this[_0x5446dc(0x2cd)]=_0x5446dc(0x21e));let _0x3e60be;switch(this[_0x5446dc(0x2cd)]){case _0x5446dc(0x373):this['_graphicFaceName']=_0x168773[_0x5446dc(0x395)](),this['_graphicFaceIndex']=_0x168773[_0x5446dc(0x255)](),_0x3e60be=ImageManager[_0x5446dc(0x359)](this[_0x5446dc(0x38e)]),_0x3e60be[_0x5446dc(0x224)](this['changeFaceGraphicBitmap'][_0x5446dc(0x323)](this,_0x3e60be));break;case _0x5446dc(0x1ea):this[_0x5446dc(0x310)]=_0x168773['fieldAtbGraphicIconIndex'](),_0x3e60be=ImageManager[_0x5446dc(0x2a9)](_0x5446dc(0x281)),_0x3e60be[_0x5446dc(0x224)](this['changeIconGraphicBitmap'][_0x5446dc(0x323)](this,_0x3e60be));break;case _0x5446dc(0x21e):if(_0x168773[_0x5446dc(0x2d5)]())this[_0x5446dc(0x2d7)]=_0x168773[_0x5446dc(0x287)](),_0x3e60be=ImageManager[_0x5446dc(0x2fe)](this['_graphicSv']),_0x3e60be[_0x5446dc(0x224)](this[_0x5446dc(0x387)][_0x5446dc(0x323)](this,_0x3e60be));else $gameSystem['isSideView']()?(this[_0x5446dc(0x1ef)]=_0x168773[_0x5446dc(0x31f)](),_0x3e60be=ImageManager[_0x5446dc(0x370)](this[_0x5446dc(0x1ef)]),_0x3e60be[_0x5446dc(0x224)](this[_0x5446dc(0x1fd)][_0x5446dc(0x323)](this,_0x3e60be))):(this[_0x5446dc(0x1ef)]=_0x168773[_0x5446dc(0x31f)](),_0x3e60be=ImageManager['loadEnemy'](this[_0x5446dc(0x1ef)]),_0x3e60be[_0x5446dc(0x224)](this[_0x5446dc(0x1fd)]['bind'](this,_0x3e60be)));break;case'svactor':this[_0x5446dc(0x2d7)]=_0x168773[_0x5446dc(0x31f)](),_0x3e60be=ImageManager[_0x5446dc(0x2fe)](this[_0x5446dc(0x2d7)]),_0x3e60be[_0x5446dc(0x224)](this[_0x5446dc(0x387)][_0x5446dc(0x323)](this,_0x3e60be));break;}},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x230)]=function(_0x5333f3){const _0x59078f=_0x4c7f4c,_0x5eff27=Sprite_FieldGaugeATB[_0x59078f(0x205)],_0x5a3a40=_0x5eff27[_0x59078f(0x294)],_0x540044=this[_0x59078f(0x2ba)];this[_0x59078f(0x218)][_0x59078f(0x1ae)]=new Bitmap(_0x5a3a40,_0x5a3a40);const _0x255685=this['_graphicSprite'][_0x59078f(0x1ae)],_0x212006=ImageManager[_0x59078f(0x1a9)],_0x52e1ad=ImageManager[_0x59078f(0x2c7)],_0xa5184c=ImageManager['faceWidth'],_0x284e4a=ImageManager['faceHeight'],_0x16eecd=_0x540044%0x4*_0x212006+(_0x212006-_0xa5184c)/0x2,_0x2f41c3=Math[_0x59078f(0x18a)](_0x540044/0x4)*_0x52e1ad+(_0x52e1ad-_0x284e4a)/0x2;_0x255685[_0x59078f(0x1d6)](_0x5333f3,_0x16eecd,_0x2f41c3,_0xa5184c,_0x284e4a,0x0,0x0,_0x5a3a40,_0x5a3a40);},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x321)]=function(_0x4c7ba7){const _0x1fc087=_0x4c7f4c,_0x182f75=Sprite_FieldGaugeATB[_0x1fc087(0x205)],_0x598b31=_0x182f75[_0x1fc087(0x294)],_0x25c7ec=this['_graphicIconIndex'];this[_0x1fc087(0x218)][_0x1fc087(0x1ae)]=new Bitmap(_0x598b31,_0x598b31);const _0x31c5db=this[_0x1fc087(0x218)]['bitmap'],_0x533b78=ImageManager[_0x1fc087(0x1c2)],_0x269de1=ImageManager['iconHeight'],_0x12bc52=_0x25c7ec%0x10*_0x533b78,_0x1ff275=Math[_0x1fc087(0x18a)](_0x25c7ec/0x10)*_0x269de1;_0x31c5db[_0x1fc087(0x1d6)](_0x4c7ba7,_0x12bc52,_0x1ff275,_0x533b78,_0x269de1,0x0,0x0,_0x598b31,_0x598b31);},Sprite_FieldMarkerATB['prototype']['changeSvActorGraphicBitmap']=function(_0x2f82a2){const _0x2965d8=_0x4c7f4c,_0x601889=Sprite_FieldGaugeATB[_0x2965d8(0x205)],_0xb96986=_0x601889[_0x2965d8(0x294)];this['_graphicSprite'][_0x2965d8(0x1ae)]=new Bitmap(_0xb96986,_0xb96986);const _0x5ea8f0=this[_0x2965d8(0x218)][_0x2965d8(0x1ae)],_0x41f7c9=this[_0x2965d8(0x2d7)][_0x2965d8(0x274)](/\$/i),_0x5c819c=_0x41f7c9?0x1:ImageManager[_0x2965d8(0x195)],_0x20c90c=_0x41f7c9?0x1:ImageManager[_0x2965d8(0x22e)],_0xab5c96=_0x2f82a2[_0x2965d8(0x185)]/_0x5c819c,_0x23cf01=_0x2f82a2[_0x2965d8(0x2f0)]/_0x20c90c,_0x560111=Math[_0x2965d8(0x19c)](0x1,_0xb96986/_0xab5c96,_0xb96986/_0x23cf01),_0x584591=_0xab5c96*_0x560111,_0x163cc8=_0x23cf01*_0x560111,_0x2d6d77=Math[_0x2965d8(0x1b7)]((_0xb96986-_0x584591)/0x2),_0x516445=Math[_0x2965d8(0x1b7)]((_0xb96986-_0x163cc8)/0x2);_0x5ea8f0[_0x2965d8(0x1d6)](_0x2f82a2,0x0,0x0,_0xab5c96,_0x23cf01,_0x2d6d77,_0x516445,_0x584591,_0x163cc8);},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)]['changeEnemyGraphicBitmap']=function(_0x33f5da){const _0x430908=_0x4c7f4c,_0x39e3aa=Sprite_FieldGaugeATB[_0x430908(0x205)],_0x2c0780=_0x39e3aa[_0x430908(0x294)];this[_0x430908(0x218)][_0x430908(0x1ae)]=new Bitmap(_0x2c0780,_0x2c0780);const _0x46fe29=this[_0x430908(0x218)][_0x430908(0x1ae)],_0x2e4e43=Math['min'](0x1,_0x2c0780/_0x33f5da[_0x430908(0x185)],_0x2c0780/_0x33f5da['height']),_0x165cef=_0x33f5da[_0x430908(0x185)]*_0x2e4e43,_0x482724=_0x33f5da[_0x430908(0x2f0)]*_0x2e4e43,_0x4eadd0=Math[_0x430908(0x1b7)]((_0x2c0780-_0x165cef)/0x2),_0x42e329=Math[_0x430908(0x1b7)]((_0x2c0780-_0x482724)/0x2);_0x46fe29[_0x430908(0x1d6)](_0x33f5da,0x0,0x0,_0x33f5da['width'],_0x33f5da[_0x430908(0x2f0)],_0x4eadd0,_0x42e329,_0x165cef,_0x482724);},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x220)]=function(){const _0x5affdc=_0x4c7f4c,_0x25010d=this[_0x5affdc(0x1b0)]();if(!_0x25010d)return;if(!_0x25010d['isEnemy']())return;if(this['_graphicHue']===_0x25010d[_0x5affdc(0x266)]())return;this[_0x5affdc(0x33d)]=_0x25010d[_0x5affdc(0x266)](),this[_0x5affdc(0x218)][_0x5affdc(0x1f1)](_0x25010d['hasSvBattler']()?0x0:this[_0x5affdc(0x33d)]);},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x3a1)]=function(){const _0x36cefe=_0x4c7f4c;if(!this['_letterSprite'])return;const _0x5944ea=this['battler']();if(!_0x5944ea)return;if(this[_0x36cefe(0x22c)]===_0x5944ea[_0x36cefe(0x22c)]&&this['_plural']===_0x5944ea['_plural'])return;this[_0x36cefe(0x22c)]=_0x5944ea[_0x36cefe(0x22c)],this['_plural']=_0x5944ea[_0x36cefe(0x313)];const _0x226d56=Sprite_FieldGaugeATB[_0x36cefe(0x205)],_0x5646e7=_0x226d56[_0x36cefe(0x294)],_0x399007=Math['floor'](_0x5646e7/0x2),_0x34d3bc=this[_0x36cefe(0x270)][_0x36cefe(0x1ae)];_0x34d3bc[_0x36cefe(0x37f)]();if(!this[_0x36cefe(0x313)])return;_0x34d3bc[_0x36cefe(0x2db)]=_0x226d56['EnemyBattlerFontFace']||$gameSystem[_0x36cefe(0x2e9)](),_0x34d3bc['fontSize']=_0x226d56['EnemyBattlerFontSize']||0x10,_0x34d3bc[_0x36cefe(0x378)](this[_0x36cefe(0x22c)],0x2,_0x399007,_0x5646e7-0x4,_0x399007-0x2,_0x36cefe(0x341));},Sprite_FieldMarkerATB[_0x4c7f4c(0x2e4)][_0x4c7f4c(0x30d)]=function(){const _0x342b71=_0x4c7f4c,_0xb98fef=this[_0x342b71(0x1b0)]();if(!_0xb98fef)return;const _0x50a8a6=_0xb98fef[_0x342b71(0x1b0)]();if(!_0x50a8a6)return;const _0x56a8a2=_0x50a8a6[_0x342b71(0x39f)]();if(!_0x56a8a2)return;this['setBlendColor'](_0x56a8a2['_blendColor']);},Sprite_FieldMarkerATB['prototype'][_0x4c7f4c(0x340)]=function(){return this['battler']();};