//=============================================================================
// VisuStella MZ - Victory Aftermath
// VisuMZ_3_VictoryAftermath.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VictoryAftermath = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VictoryAftermath = VisuMZ.VictoryAftermath || {};
VisuMZ.VictoryAftermath.version = 1.18;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.18] [VictoryAftermath]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Victory_Aftermath_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Victory Aftermath plugin consolidates the rewards granted upon finishing
 * a battle successfully into one screen (or more if there are level ups).
 * This helps reduce the amount of button presses needed to display similar
 * information by default. The level up screens will also display parameter
 * changes and new skills acquired in addition to victory quotes.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Consolidates EXP, Gold, and Items acquired through battle rewards into one
 *   battle screen.
 * * EXP gauges for currently active battle party will be displayed on the same
 *   screen to indicate progress.
 * * Upon leveling up, individual screens can be shown (optionally) to display
 *   parameter changes, new skills acquired, and level up quotes.
 * * Plugin Commands can be used to clear/add new quotes at any time.
 * * Plugin Commands can be used by bypass certain parts of the Victory
 *   Aftermath segments or the entire thing completely.
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
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
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
 * - The EXP gauge colors will match the color settings found in the Core
 * Engine's Plugin Parameters instead of defaulting to specific colors.
 *
 * - The continue message will display any changed input keys designated by
 * the Core Engine's Plugin Parameters.
 *
 * ---
 *
 * VisuMZ_1_MainMenuCore
 *
 * - Upon leveling up, the Menu Image will show up (optional) as a bust during
 * the quote segment.
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
 * <Level Up Quotes>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 * </Level Up Quotes>
 *
 * - Used for: Actor Notetags
 * - Description
 * - Replace 'text' with the text you'd want the actor to say when leveling up.
 * - The <New Quote> tag is used between the <Level Up Quotes> notetags to
 *   separate quotes.
 * - If an actor has multiple quotes (due to the <New Quote> notetag), then a
 *   random quote will be selected upon level up.
 * - If this notetag is not found inside an actor's notebox, a random level up
 *   quote will be selected from the Plugin Parameters => Level Up => Quotes =>
 *   Level Up Quotes plugin parameter.
 *
 * ---
 *
 * <New Skill Quotes>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 *  <New Quote>
 *  text
 *  text
 *  text
 *  text
 * </New Skill Quotes>
 *
 * - Used for: Actor Notetags
 * - Description
 * - Replace 'text' with the text you'd want the actor to say when leveling up
 *   in addition to learning a new skill upon leveling up.
 * - The <New Quote> tag is used between the <New Skill Quotes> notetags to
 *   separate quotes.
 * - If an actor has multiple quotes (due to the <New Quote> notetag), then a
 *   random quote will be selected upon level up and learning a new skill.
 * - If this notetag is not found inside an actor's notebox, a random new skill
 *   quote will be selected from the Plugin Parameters => Level Up => Quotes =>
 *   New Skill Quotes plugin parameter.
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
 * Actor: Add Level Up Quotes
 * - Add new entries target actor's level up quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to add quotes for.
 *
 *   New Quotes:
 *   - Add new entries to actor's level up quotes.
 *   - Text codes allowed. %1 - Actor's Name
 *
 * ---
 *
 * Actor: Add New Skill Quotes
 * - Add new entries target actor's new skill quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to add quotes for.
 *
 *   New Quotes:
 *   - Add new entries to actor's new skill quotes.
 *   - Text codes allowed. %1 - Actor's Name
 *
 * ---
 *
 * Actor: Clear Level Up Quotes
 * - Clear target actor's level up quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to clear quotes for.
 *
 * ---
 *
 * Actor: Clear New Skill Quotes
 * - Clear target actor's new skill quotes.
 *
 *   Actor ID:
 *   - Select ID of target actor to clear quotes for.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Bypass Victory Motion
 * - Bypass actors performing their victory motion?
 *
 *   Bypass?:
 *   - Bypass actors performing their victory motion?
 *
 * ---
 *
 * System: Bypass Victory Music
 * - Bypass playing the victory music?
 *
 *   Bypass?:
 *   - Bypass playing the victory music?
 *
 * ---
 *
 * System: Bypass Victory Phase
 * - Bypass the entire victory phase and all aspects about it?
 *
 *   Bypass?:
 *   - Bypass the entire victory phase and all aspects about it?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * The general settings Plugin Parameters control the overall settings found
 * within the main aspects of the Victory Aftermath sequence.
 *
 * ---
 *
 * General Settings
 * 
 *   Fade In Speed:
 *   - Fade in speed for the victory window.
 * 
 *   Hide Delay (MS):
 *   - Delay in milliseconds before hiding the UI Windows.
 * 
 *   Show Delay (MS):
 *   - Delay in milliseconds before showing the Victory Windows.
 * 
 *   Update Duration:
 *   - Duration in frames on updating actor EXP gauges.
 * 
 *   Auto Skip Auto Battle?:
 *   - Skip the Victory Aftermath sequence if the player has decided to use
 *     the party Auto Battle command?
 * 
 *   Mirror Contents?:
 *   - Mirror the positions of EXP, Gold, and Items?
 * 
 *   Show EXP Gauges?:
 *   - Show the EXP Gauges of the main party members for the first screen of
 *     the Victory Aftermath?
 *   - This is added for those with large parties and cannot fit everything
 *     into one screen for all party members and would prefer not showing any
 *     EXP Gauges at all instead.
 *
 * ---
 * 
 * Collapse Effect
 * 
 *   Normal Collapse Wait?:
 *   - Wait for the normal collapse effect to finish?
 * 
 *   Boss Collapse Wait?:
 *   - Wait for the boss collapse effect to finish?
 * 
 * ---
 * 
 * Victory Music
 * 
 *   Victory BGM:
 *   - Background music to play during the victory sequence.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Reward Strips Settings
 * ============================================================================
 *
 * Reward strip settings that appear in the first screen of the Victory
 * Aftermath. These are used to let you have control over what rewards are
 * displayed at the end of each battle and can be used to display custom data
 * from other plugins as well.
 *
 * ---
 *
 * Reward Strip
 * 
 *   Label:
 *   - This one doesn't have any use other than being a label to  quickly
 *     determine what this one is for.
 * 
 *   JS: Show:
 *   - Code used to determine if the reward strip is shown.
 * 
 *   JS: Text:
 *   - Code used to determine if the text displayed as the category.
 * 
 *   JS: Data:
 *   - Code used to determine what data should be displayed in the
 *     reward strip.
 *
 * ---
 * 
 * The default parameters for this will be updated from time to time as more
 * VisuStella MZ plugins are released to add in extra displayed resources that
 * the party can gain from battle.
 *
 * ============================================================================
 * Plugin Parameters: Level Up Settings
 * ============================================================================
 *
 * When actors level up, extra screens will be displayed in the Victory
 * Aftermath sequence. Alter these settings to best fit your game.
 *
 * ---
 *
 * General
 * 
 *   Enable?:
 *   - Enable the Level Up portion of the Victory Aftermath phase?
 * 
 *   Show Face?:
 *   - Show the actor's face?
 * 
 *   Show Param Change?:
 *   - Show an extra column for parameter value differences?
 * 
 *     Hide Level?:
 *     - Hide the level change in the parameter value differences?
 * 
 *   Shown Max Skills:
 *   - The maximum amount of skills that are displayed.
 *   - This is due to limited screen space.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Quotes
 * 
 *   Level Up Quotes:
 *   - A list of generic level up quotes for those who don't have the
 *     <Level Up Quote> notetags.
 *   - %1 - Actor Name
 * 
 *   New Skill Quotes:
 *   - A list of generic level up quotes for those who don't have the
 *     <New Skill Quote> notetags.
 *   - %1 - Actor Name
 *
 * ---
 *
 * VisuMZ_1_MainMenuCore
 * - The following Plugin Parameters require VisuMZ_1_MainMenuCore.
 * 
 *   Show Bust?:
 *   - Show the actor's menu image as a bust?
 * 
 *   Bust Position X:
 *   - Positon to center the actor's menu image bust.
 *   - You may use JavaScript code.
 * 
 *   Bust Position Y:
 *   - Positon to anchor the actor's menu image bust.
 *   - You may use JavaScript code.
 * 
 *   Bust Scale:
 *   - The amount to scale the actor's menu image bust.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * There's certain diction used in the Victory Aftermath plugin that's not set
 * anywhere else in the game. Change the settings to make it fit your game.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Continue Format:
 *   - Text format for continue message.
 *   - %1 - OK key, %2 - Cancel key
 * 
 *   OK Button:
 *   - Text used to represent the OK button.
 *   - If VisuMZ_0_CoreEngine is present, ignore this.
 * 
 *   Cancel Button:
 *   - Text used to represent the Cancel button.
 *   - If VisuMZ_0_CoreEngine is present, ignore this.
 * 
 *   Level Format:
 *   - Text format for actor level.
 *   - %1 - Level
 * 
 *   Level Up:
 *   - Text format for reaching a level up.
 * 
 *   Sound Effect:
 *   - Sound effect played when a level up occurs.
 * 
 *     Volume:
 *     - Volume of the sound effect played.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played.
 * 
 *     Pan:
 *     - Pan of the sound effect played.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors
 *     from the Window Skin.
 * 
 *   New Skill Format:
 *   - Text format describing that a new skill has been learned.
 *   - %1 - Actor Name
 * 
 *   Reward Items:
 *   - Text displayed for items rewarded.
 * 
 *   Victory Title:
 *   - Text displayed at the top of the victory screen.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.18: June 15, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.17: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: January 6, 2022
 * * Bug Fixes!
 * ** Fixed incorrect level change display text. Fix made by Olivia.
 * 
 * Version 1.15: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** Battle Core's post-battle common events should now load properly. This
 *     incompatibility is due to RPG Maker MZ 1.4.0's core scripts added in
 *     a common event queue clear. Update made by Olivia.
 * 
 * Version 1.14: December 9, 2021
 * * Feature Update!
 * ** Victory Aftermath gauges now automatically round to the nearest pixel
 *    rather than be on half pixels with specific resolutions. Update by Irina.
 * 
 * Version 1.13: September 23, 2021
 * * Bug Fixes!
 * ** Values for parameter differences should no longer be hidden or the same
 *    as the previous values. Fix made by Irina.
 * 
 * Version 1.12: August 27, 2021
 * * Bug Fixes!
 * ** X-Parameters and S-Parameters shown in the level up stat changes should
 *    now display the percentage signs properly. Fix made by Olivia.
 * 
 * Version 1.11: July 9, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.10: March 12, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia!
 * *** Plugin Parameters > General > Show EXP Gauges?
 * **** Show the EXP Gauges of the main party members for the first screen of
 *      the Victory Aftermath?
 * **** This is added for those with large parties and cannot fit everything
 *      into one screen for all party members and would prefer not showing any
 *      EXP Gauges at all instead.
 * 
 * Version 1.09: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu!
 * *** Plugin Parameters > Vocab > Level Up > Volume
 * *** Plugin Parameters > Vocab > Level Up > Pitch
 * *** Plugin Parameters > Vocab > Level Up > Pan
 * **** For the people who want more control over the level up sound effect.
 * 
 * Version 1.08: December 11, 2020
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Feature Updates!
 * ** The default Plugin Parameter for "Reward Strips" have been updated to
 *    contain compatibility for a future plugin.
 * 
 * Version 1.07: December 4, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Parameter added by Olivia:
 * ** Plugin Parameters > Level Up Settings > Hide Level?
 * *** Hide the level change in the parameter value differences when comparing
 *     the stat changes from the previous level to the next.
 * 
 * Version 1.06: November 29, 2020
 * * Bug Fixed!
 * ** The default reward strips Plugin Parameters data is now updated for the
 *    SP display costs to show the Skill Points data instead of Ability Points
 *    data. Fix made by Arisu.
 * 
 * Version 1.05: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New plugin parameter added by Arisu.
 * *** Plugin Parameters > Reward Strips
 * **** Reward strip settings that appear in the first screen of the Victory
 *      Aftermath. These are used to let you have control over what rewards are
 *      displayed at the end of each battle and can be used to display custom
 *      data from other plugins as well.
 * 
 * Version 1.04: October 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New plugin parameter added by Olivia.
 * *** Plugin Parameters > General > Mirror Contents?
 * **** Mirror the positions of EXP, Gold, and Items?
 * 
 * Version 1.03: October 18, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** BGM pitch plugin parameter is now uncapped.
 * * New Features!
 * ** New plugin parameters added by Yanfly.
 * *** Plugin Parameters > General > Collapse Effect > Normal Collapse Wait?
 * *** Plugin Parameters > General > Collapse Effect > Boss Collapse Wait?
 * **** These settings enable you to decide if you want the Victory Aftermath
 *      to wait until collapse effects are finished before continuing.
 * *** Plugin Parameters > General > Music > Volume
 * *** Plugin Parameters > General > Music > Pitch
 * *** Plugin Parameters > General > Music > Pan
 * **** Adjusts the volume, pitch, and pan of the victory music.
 * 
 * Version 1.02: September 13, 2020
 * * Feature Update!
 * ** Victory Aftermath windows now wait until all boss collapse effects are
 *    done before showing. Update added by Olivia.
 * * New Features!
 * ** New Plugin Parameter under General Settings: Auto Skip Auto Battle?
 * *** Skip the Victory Aftermath sequence if the player has decided to use the
 *     party Auto Battle command?
 * *** Feature added by Olivia
 * 
 * Version 1.01: September 6, 2020
 * * New Features!
 * ** New Plugin Parameters added in Level Up Settings for disabling
 *    the back rectangles and/or changing their colors.
 *
 * Version 1.00: August 26, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesLevelUpAdd
 * @text Actor: Add Level Up Quotes
 * @desc Add new entries target actor's level up quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to add quotes for.
 * @default 1
 *
 * @arg NewQuotes:arrayjson
 * @text New Quotes
 * @type note[]
 * @desc Add new entries to actor's level up quotes.
 * Text codes allowed. %1 - Actor's Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Text\\\"\""]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesNewSkillAdd
 * @text Actor: Add New Skill Quotes
 * @desc Add new entries target actor's new skill quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to add quotes for.
 * @default 1
 *
 * @arg NewQuotes:arrayjson
 * @text New Quotes
 * @type note[]
 * @desc Add new entries to actor's new skill quotes.
 * Text codes allowed. %1 - Actor's Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Text\\\"\""]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesLevelUpClear
 * @text Actor: Clear Level Up Quotes
 * @desc Clear target actor's level up quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to clear quotes for.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorQuotesNewSkillClear
 * @text Actor: Clear New Skill Quotes
 * @desc Clear target actor's new skill quotes.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select ID of target actor to clear quotes for.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryMotion
 * @text System: Bypass Victory Motion
 * @desc Bypass actors performing their victory motion?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass actors performing their victory motion?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryMusic
 * @text System: Bypass Victory Music
 * @desc Bypass playing the victory music?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass playing the victory music?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemBypassVictoryPhase
 * @text System: Bypass Victory Phase
 * @desc Bypass the entire victory phase and all aspects about it?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypass the entire victory phase and all aspects about it?
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
 * @param VictoryAftermath
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings pertaining to the Victory Aftermath phase.
 * @default {"General":"","FadeInSpeed:num":"8","HideDelayMS:num":"1500","ShowDelayMS:num":"2000","UpdateDuration:num":"180","AutoBattleAutoSkip:eval":"true","MirrorContents:eval":"false","Collapse":"","WaitRegularCollapse:eval":"true","WaitBossCollapse:eval":"true","Music":"","Bgm:str":"Ship3","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param Rewards:arraystruct
 * @text Reward Strips
 * @parent General:struct
 * @type struct<Rewards>[]
 * @desc Reward strip settings that appear in the first screen of the Victory Aftermath.
 * @default ["{\"Label\":\"EXP\",\"Show:func\":\"\\\"return true;\\\"\",\"Text:func\":\"\\\"return TextManager.exp;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.exp;\\\"\"}","{\"Label\":\"Gold\",\"Show:func\":\"\\\"return true;\\\"\",\"Text:func\":\"\\\"return TextManager.currencyUnit;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.gold;\\\"\"}","{\"Label\":\"AP (Skill Learn System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_SkillLearnSystem &&\\\\n    VisuMZ.SkillLearnSystem.Settings.AbilityPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.abilityPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.abilityPoints;\\\"\"}","{\"Label\":\"CP (Class Change System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    VisuMZ.ClassChangeSystem.Settings.ClassPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.classPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.classPoints;\\\"\"}","{\"Label\":\"JP (Class Change System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    VisuMZ.ClassChangeSystem.Settings.JobPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.jobPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.jobPoints;\\\"\"}","{\"Label\":\"SP (Skill Learn System)\",\"Show:func\":\"\\\"return Imported.VisuMZ_2_SkillLearnSystem &&\\\\n    VisuMZ.SkillLearnSystem.Settings.SkillPoints.ShowVictory;\\\"\",\"Text:func\":\"\\\"return TextManager.skillPointsAbbr;\\\"\",\"Data:func\":\"\\\"return BattleManager._rewards.skillPoints;\\\"\"}"]
 *
 * @param LevelUp:struct
 * @text Level Up Settings
 * @type struct<LevelUp>
 * @desc Settings pertaining to the Level Up portion of the Victory Aftermath phase.
 * @default {"General":"","Enable:eval":"true","ShowFace:eval":"false","ShowParamDiff:eval":"true","HideLevelDiff:eval":"false","MaxSkills:num":"8","DelayBuffer:num":"200","DrawBackRect:eval":"true","BackRectColor:str":"19","Quotes":"","LevelUpQuotes:arrayjson":"[\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Alright! A level up!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Yes! I've leveled up!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Oh? I've leveled up!?\\\\n This is awesome!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Looks like I've become stronger!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I feel like I'm getting used to battle.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"The power! I can feel it!\\\\\\\"\\\"\"]","NewSkillQuotes:arrayjson":"[\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"Looks like I've acquired a new skill!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"This new skill should come in handy.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"It seems I've learned something new!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I've acquired a new power!\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"This should be useful for future battles.\\\\\\\"\\\"\",\"\\\"\\\\\\\\c[6]%1\\\\\\\\c[0]\\\\n\\\\\\\"I wonder what this new skill is like?\\\\\\\"\\\"\"]","MainMenuCore":"","ShowBust:eval":"true","BustPosX:str":"Graphics.width * 0.25","BustPosY:str":"Graphics.height","BustScale:num":"1.20"}
 *
 * @param Vocab:struct
 * @text Vocabulary
 * @type struct<Vocab>
 * @desc The vocabulary used for this plugin and related settings.
 * @default {"ContinueFmt:str":"Press %1 or %2 to continue","KeyOK:str":"OK","KeyCancel:str":"Cancel","LvFmt:str":"LV %1","LvUp:str":"LEVEL UP!","LvUpSfx:str":"Up4","LvUpVolume:num":"90","LvUpPitch:num":"100","LvUpPan:num":"0","LvUpColor:str":"17","NewSkill:str":"%1 has learned:","RewardItems:str":"Items Obtained","Victory:str":"Victory!"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param General
 * 
 * @param FadeInSpeed:num
 * @text Fade In Speed
 * @parent General
 * @desc Fade in speed for the victory window.
 * @default 8
 *
 * @param HideDelayMS:num
 * @text Hide Delay (MS)
 * @parent General
 * @desc Delay in milliseconds before hiding the UI Windows.
 * @default 1500
 *
 * @param ShowDelayMS:num
 * @text Show Delay (MS)
 * @parent General
 * @desc Delay in milliseconds before showing the Victory Windows.
 * @default 2000
 *
 * @param UpdateDuration:num
 * @text Update Duration
 * @parent General
 * @desc Duration in frames on updating actor EXP gauges.
 * @default 180
 *
 * @param AutoBattleAutoSkip:eval
 * @text Skip Auto Battle?
 * @parent General
 * @type boolean
 * @on Skip
 * @off Don't Skip
 * @desc Skip the Victory Aftermath sequence if the player has
 * decided to use the party Auto Battle command?
 * @default true
 *
 * @param MirrorContents:eval
 * @text Mirror Contents?
 * @parent General
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the positions of EXP, Gold, and Items?
 * @default false
 *
 * @param ShowExpGauges:eval
 * @text Show EXP Gauges?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the EXP Gauges of the main party members
 * for the first screen of the Victory Aftermath?
 * @default true
 * 
 * @param Collapse
 * @text Collapse Effect
 *
 * @param WaitRegularCollapse:eval
 * @text Normal Collapse Wait?
 * @parent Collapse
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for the normal collapse effect to finish?
 * @default true
 *
 * @param WaitBossCollapse:eval
 * @text Boss Collapse Wait?
 * @parent Collapse
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for the boss collapse effect to finish?
 * @default true
 * 
 * @param Music
 * @text Victory Music
 *
 * @param Bgm:str
 * @text Victory BGM
 * @parent Music
 * @type file
 * @dir audio/bgm/
 * @desc Background music to play during the victory sequence.
 * @default Ship3
 *
 * @param volume:num
 * @text Volume
 * @parent Music
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @parent Music
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @parent Music
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Rewards Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Rewards:
 *
 * @param Label
 * @desc This one doesn't have any use other than being a label to 
 * quickly determine what this one is for.
 * @default Untitled
 *
 * @param Show:func
 * @text JS: Show
 * @type note
 * @desc Code used to determine if the reward strip is shown.
 * @default "return true;"
 *
 * @param Text:func
 * @text JS: Text
 * @type note
 * @desc Code used to determine if the text displayed as the category.
 * @default "return 'Untitled';"
 *
 * @param Data:func
 * @text JS: Data
 * @type note
 * @desc Code used to determine what data should be displayed in the reward strip.
 * @default "return 0;"
 *
 */
/* ----------------------------------------------------------------------------
 * Level Up Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LevelUp:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the Level Up portion of the Victory Aftermath phase?
 * @default true
 *
 * @param ShowFace:eval
 * @text Show Face?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the actor's face?
 * @default false
 *
 * @param ShowParamDiff:eval
 * @text Show Param Change?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show an extra column for parameter value differences?
 * @default true
 *
 * @param HideLevelDiff:eval
 * @text Hide Level?
 * @parent ShowParamDiff:eval
 * @type boolean
 * @on Hide
 * @off Normal
 * @desc Hide the level change in the parameter value differences?
 * @default false
 *
 * @param MaxSkills:num
 * @text Shown Max Skills
 * @parent General
 * @desc The maximum amount of skills that are displayed.
 * This is due to limited screen space.
 * @default 8
 *
 * @param DelayBuffer:num
 * @text Delay Buffer
 * @parent General
 * @type number
 * @desc How many milliseconds to wait in between playing
 * each level up sound effect?
 * @default 200
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param Quotes
 *
 * @param LevelUpQuotes:arrayjson
 * @text Level Up Quotes
 * @parent Quotes
 * @type note[]
 * @desc A list of generic level up quotes for those who don't
 * have the <Level Up Quote> notetags. %1 - Actor Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Alright! A level up!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Yes! I've leveled up!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Oh? I've leveled up!?\\n This is awesome!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"Looks like I've become stronger!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I feel like I'm getting used to battle.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"The power! I can feel it!\\\"\""]
 *
 * @param NewSkillQuotes:arrayjson
 * @text New Skill Quotes
 * @parent Quotes
 * @type note[]
 * @desc A list of generic level up quotes for those who don't
 * have the <New Skill Quote> notetags. %1 - Actor Name
 * @default ["\"\\\\c[6]%1\\\\c[0]\\n\\\"Looks like I've acquired a new skill!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"This new skill should come in handy.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"It seems I've learned something new!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I've acquired a new power!\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"This should be useful for future battles.\\\"\"","\"\\\\c[6]%1\\\\c[0]\\n\\\"I wonder what this new skill is like?\\\"\""]
 *
 * @param MainMenuCore
 * @text VisuMZ_1_MainMenuCore
 *
 * @param ShowBust:eval
 * @text Show Bust?
 * @parent MainMenuCore
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the actor's menu image as a bust?
 * @default true
 *
 * @param BustPosX:str
 * @text Bust Position X
 * @parent MainMenuCore
 * @desc Positon to center the actor's menu image bust.
 * You may use JavaScript code.
 * @default Graphics.width * 0.25
 *
 * @param BustPosY:str
 * @text Bust Position Y
 * @parent MainMenuCore
 * @desc Positon to anchor the actor's menu image bust.
 * You may use JavaScript code.
 * @default Graphics.height
 *
 * @param BustScale:num
 * @text Bust Scale
 * @parent MainMenuCore
 * @desc The amount to scale the actor's menu image bust.
 * @default 1.20
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param ContinueFmt:str
 * @text Continue Format
 * @desc Text format for continue message.
 * %1 - OK key, %2 - Cancel key
 * @default Press %1 or %2 to continue
 *
 * @param KeyOK:str
 * @text OK Button
 * @parent ContinueFmt:str
 * @desc Text used to represent the OK button.
 * If VisuMZ_0_CoreEngine is present, ignore this.
 * @default OK
 *
 * @param KeyCancel:str
 * @text Cancel Button
 * @parent ContinueFmt:str
 * @desc Text used to represent the Cancel button.
 * If VisuMZ_0_CoreEngine is present, ignore this.
 * @default Cancel
 *
 * @param LvFmt:str
 * @text Level Format
 * @desc Text format for actor level.
 * %1 - Level
 * @default LV %1
 *
 * @param LvUp:str
 * @text Level Up
 * @desc Text format for reaching a level up.
 * @default LEVEL UP!
 *
 * @param LvUpSfx:str
 * @text Sound Effect
 * @parent LvUp:str
 * @type file
 * @dir audio/se/
 * @desc Sound effect played when a level up occurs.
 * @default Up4
 *
 * @param LvUpVolume:num
 * @text Volume
 * @parent LvUpSfx:str
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param LvUpPitch:num
 * @text Pitch
 * @parent LvUpSfx:str
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param LvUpPan:num
 * @text Pan
 * @parent LvUpSfx:str
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param LvUpColor:str
 * @text Text Color
 * @parent LvUp:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param NewSkill:str
 * @text New Skill Format
 * @desc Text format describing that a new skill has been learned.
 * %1 - Actor Name
 * @default %1 has learned:
 *
 * @param RewardItems:str
 * @text Reward Items
 * @desc Text displayed for items rewarded.
 * @default Items Obtained
 *
 * @param Victory:str
 * @text Victory Title
 * @desc Text displayed at the top of the victory screen.
 * @default Victory!
 *
 */
//=============================================================================

const _0x49dd92=_0x5644;(function(_0x26917a,_0x3d1328){const _0x263341=_0x5644,_0x2a89f6=_0x26917a();while(!![]){try{const _0xaf0c23=parseInt(_0x263341(0x2aa))/0x1+-parseInt(_0x263341(0x1a3))/0x2*(parseInt(_0x263341(0x1f7))/0x3)+parseInt(_0x263341(0x1b8))/0x4+-parseInt(_0x263341(0x17d))/0x5*(-parseInt(_0x263341(0x1c8))/0x6)+parseInt(_0x263341(0x28a))/0x7+-parseInt(_0x263341(0x1f8))/0x8+-parseInt(_0x263341(0x247))/0x9*(parseInt(_0x263341(0x2e4))/0xa);if(_0xaf0c23===_0x3d1328)break;else _0x2a89f6['push'](_0x2a89f6['shift']());}catch(_0x2412f3){_0x2a89f6['push'](_0x2a89f6['shift']());}}}(_0x1d70,0xac594));var label=_0x49dd92(0x289),tier=tier||0x0,dependencies=['VisuMZ_1_BattleCore'],pluginData=$plugins[_0x49dd92(0x29c)](function(_0x3f7bdb){const _0x3355f0=_0x49dd92;return _0x3f7bdb[_0x3355f0(0x1f4)]&&_0x3f7bdb[_0x3355f0(0x34d)][_0x3355f0(0x28b)]('['+label+']');})[0x0];VisuMZ[label][_0x49dd92(0x2ff)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x49dd92(0x22e)]=function(_0x45cac2,_0x2c517f){const _0x35a9c1=_0x49dd92;for(const _0x2a0e13 in _0x2c517f){if(_0x2a0e13[_0x35a9c1(0x2ab)](/(.*):(.*)/i)){if(_0x35a9c1(0x29b)===_0x35a9c1(0x2a4))this[_0x35a9c1(0x20d)]()?this['setActionState'](_0x35a9c1(0x26c)):_0x2ea618[_0x35a9c1(0x289)][_0x35a9c1(0x266)]['call'](this);else{const _0x267444=String(RegExp['$1']),_0x4556f6=String(RegExp['$2'])[_0x35a9c1(0x1ff)]()[_0x35a9c1(0x2b4)]();let _0x2fae1c,_0x4e4fd4,_0x9ad929;switch(_0x4556f6){case _0x35a9c1(0x2cf):_0x2fae1c=_0x2c517f[_0x2a0e13]!==''?Number(_0x2c517f[_0x2a0e13]):0x0;break;case _0x35a9c1(0x20f):_0x4e4fd4=_0x2c517f[_0x2a0e13]!==''?JSON[_0x35a9c1(0x235)](_0x2c517f[_0x2a0e13]):[],_0x2fae1c=_0x4e4fd4['map'](_0x4419c5=>Number(_0x4419c5));break;case'EVAL':_0x2fae1c=_0x2c517f[_0x2a0e13]!==''?eval(_0x2c517f[_0x2a0e13]):null;break;case'ARRAYEVAL':_0x4e4fd4=_0x2c517f[_0x2a0e13]!==''?JSON[_0x35a9c1(0x235)](_0x2c517f[_0x2a0e13]):[],_0x2fae1c=_0x4e4fd4['map'](_0x518139=>eval(_0x518139));break;case _0x35a9c1(0x335):_0x2fae1c=_0x2c517f[_0x2a0e13]!==''?JSON[_0x35a9c1(0x235)](_0x2c517f[_0x2a0e13]):'';break;case _0x35a9c1(0x1e4):_0x4e4fd4=_0x2c517f[_0x2a0e13]!==''?JSON['parse'](_0x2c517f[_0x2a0e13]):[],_0x2fae1c=_0x4e4fd4['map'](_0x48c918=>JSON['parse'](_0x48c918));break;case _0x35a9c1(0x2e5):_0x2fae1c=_0x2c517f[_0x2a0e13]!==''?new Function(JSON[_0x35a9c1(0x235)](_0x2c517f[_0x2a0e13])):new Function(_0x35a9c1(0x1b5));break;case _0x35a9c1(0x21b):_0x4e4fd4=_0x2c517f[_0x2a0e13]!==''?JSON[_0x35a9c1(0x235)](_0x2c517f[_0x2a0e13]):[],_0x2fae1c=_0x4e4fd4['map'](_0x34b869=>new Function(JSON[_0x35a9c1(0x235)](_0x34b869)));break;case _0x35a9c1(0x206):_0x2fae1c=_0x2c517f[_0x2a0e13]!==''?String(_0x2c517f[_0x2a0e13]):'';break;case _0x35a9c1(0x242):_0x4e4fd4=_0x2c517f[_0x2a0e13]!==''?JSON[_0x35a9c1(0x235)](_0x2c517f[_0x2a0e13]):[],_0x2fae1c=_0x4e4fd4[_0x35a9c1(0x315)](_0x4886a6=>String(_0x4886a6));break;case _0x35a9c1(0x2c6):_0x9ad929=_0x2c517f[_0x2a0e13]!==''?JSON[_0x35a9c1(0x235)](_0x2c517f[_0x2a0e13]):{},_0x2fae1c=VisuMZ[_0x35a9c1(0x22e)]({},_0x9ad929);break;case _0x35a9c1(0x227):_0x4e4fd4=_0x2c517f[_0x2a0e13]!==''?JSON[_0x35a9c1(0x235)](_0x2c517f[_0x2a0e13]):[],_0x2fae1c=_0x4e4fd4[_0x35a9c1(0x315)](_0x37de06=>VisuMZ[_0x35a9c1(0x22e)]({},JSON[_0x35a9c1(0x235)](_0x37de06)));break;default:continue;}_0x45cac2[_0x267444]=_0x2fae1c;}}}return _0x45cac2;},(_0x795305=>{const _0x10cd0a=_0x49dd92,_0x190b43=_0x795305['name'];for(const _0x2bd2c3 of dependencies){if(!Imported[_0x2bd2c3]){alert(_0x10cd0a(0x236)[_0x10cd0a(0x1cc)](_0x190b43,_0x2bd2c3)),SceneManager[_0x10cd0a(0x27a)]();break;}}const _0x33dcd0=_0x795305[_0x10cd0a(0x34d)];if(_0x33dcd0[_0x10cd0a(0x2ab)](/\[Version[ ](.*?)\]/i)){const _0x3dfcc0=Number(RegExp['$1']);_0x3dfcc0!==VisuMZ[label]['version']&&(alert(_0x10cd0a(0x200)[_0x10cd0a(0x1cc)](_0x190b43,_0x3dfcc0)),SceneManager['exit']());}if(_0x33dcd0[_0x10cd0a(0x2ab)](/\[Tier[ ](\d+)\]/i)){if(_0x10cd0a(0x1bb)!==_0x10cd0a(0x2f7)){const _0x35b6f6=Number(RegExp['$1']);if(_0x35b6f6<tier){if('oRxTM'!==_0x10cd0a(0x1dc))alert(_0x10cd0a(0x262)[_0x10cd0a(0x1cc)](_0x190b43,_0x35b6f6,tier)),SceneManager['exit']();else{const _0x2a6dee=_0x5cb553[_0x10cd0a(0x327)][_0x10cd0a(0x1da)](),_0x58b6a0=_0x421f28['round'](_0x31bd62[_0x10cd0a(0x2df)]/0x2)-0x64,_0x29dd96=_0x6d3e6e[_0x10cd0a(0x347)](_0x476ade[_0x10cd0a(0x22c)]-_0x2a6dee*1.25),_0x168439=_0x26f432[_0x10cd0a(0x347)](_0x2f3fb9['width']/0x2),_0xedb27d=_0x2a6dee;return new _0x353e85(_0x58b6a0,_0x29dd96,_0x168439,_0xedb27d);}}else tier=Math[_0x10cd0a(0x1af)](_0x35b6f6,tier);}else return _0x5f3ffb[_0x10cd0a(0x231)]()[_0x10cd0a(0x278)]||_0x25a572['victoryAftermathSettings']()[_0x10cd0a(0x2d2)];}VisuMZ[_0x10cd0a(0x22e)](VisuMZ[label][_0x10cd0a(0x2ff)],_0x795305[_0x10cd0a(0x35a)]);})(pluginData),PluginManager[_0x49dd92(0x1c2)](pluginData[_0x49dd92(0x28f)],'ActorQuotesLevelUpAdd',_0x2d00a5=>{const _0xa193d6=_0x49dd92;VisuMZ[_0xa193d6(0x22e)](_0x2d00a5,_0x2d00a5);const _0x7aa04b=$gameActors['actor'](_0x2d00a5[_0xa193d6(0x239)]),_0x54e6dc=_0x2d00a5['NewQuotes'];if(_0x7aa04b)while(_0x54e6dc['length']>0x0){_0x7aa04b['levelUpQuotes']()[_0xa193d6(0x2eb)](_0x54e6dc[_0xa193d6(0x337)]());}}),PluginManager[_0x49dd92(0x1c2)](pluginData['name'],_0x49dd92(0x28c),_0x337d88=>{const _0x21ce61=_0x49dd92;VisuMZ['ConvertParams'](_0x337d88,_0x337d88);const _0x27b74b=$gameActors[_0x21ce61(0x328)](_0x337d88[_0x21ce61(0x239)]),_0x169229=_0x337d88['NewQuotes'];if(_0x27b74b)while(_0x169229['length']>0x0){if('PhtVk'!==_0x21ce61(0x303))_0x27b74b[_0x21ce61(0x2ca)]()[_0x21ce61(0x2eb)](_0x169229['shift']());else return 0x1;}}),PluginManager[_0x49dd92(0x1c2)](pluginData['name'],_0x49dd92(0x18f),_0x1dcc63=>{const _0x49b307=_0x49dd92;VisuMZ[_0x49b307(0x22e)](_0x1dcc63,_0x1dcc63);const _0x14ae15=$gameActors[_0x49b307(0x328)](_0x1dcc63['ActorID']);if(_0x14ae15)while(_0x14ae15[_0x49b307(0x194)]()['length']>0x0){_0x14ae15['levelUpQuotes']()[_0x49b307(0x337)]();}}),PluginManager['registerCommand'](pluginData[_0x49dd92(0x28f)],_0x49dd92(0x282),_0x2985d2=>{const _0x4d8627=_0x49dd92;VisuMZ[_0x4d8627(0x22e)](_0x2985d2,_0x2985d2);const _0xfaf450=$gameActors[_0x4d8627(0x328)](_0x2985d2[_0x4d8627(0x239)]);if(_0xfaf450)while(_0xfaf450[_0x4d8627(0x2ca)]()['length']>0x0){_0xfaf450[_0x4d8627(0x2ca)]()['shift']();}}),PluginManager[_0x49dd92(0x1c2)](pluginData[_0x49dd92(0x28f)],_0x49dd92(0x2b3),_0x2ef142=>{const _0x520b18=_0x49dd92;VisuMZ['ConvertParams'](_0x2ef142,_0x2ef142),$gameSystem[_0x520b18(0x231)]()['bypassVictoryMotion']=_0x2ef142[_0x520b18(0x1c3)];}),PluginManager[_0x49dd92(0x1c2)](pluginData[_0x49dd92(0x28f)],_0x49dd92(0x2e8),_0x5b15be=>{const _0x3ad0ca=_0x49dd92;VisuMZ[_0x3ad0ca(0x22e)](_0x5b15be,_0x5b15be),$gameSystem[_0x3ad0ca(0x231)]()[_0x3ad0ca(0x278)]=_0x5b15be['Bypass'];}),PluginManager[_0x49dd92(0x1c2)](pluginData[_0x49dd92(0x28f)],_0x49dd92(0x292),_0xfb1970=>{const _0x18876f=_0x49dd92;VisuMZ[_0x18876f(0x22e)](_0xfb1970,_0xfb1970),$gameSystem[_0x18876f(0x231)]()['bypassVictoryPhase']=_0xfb1970[_0x18876f(0x1c3)];}),TextManager[_0x49dd92(0x305)]=VisuMZ[_0x49dd92(0x289)]['Settings'][_0x49dd92(0x299)][_0x49dd92(0x1c5)],TextManager['victoryKeyOk']=VisuMZ[_0x49dd92(0x289)]['Settings'][_0x49dd92(0x299)][_0x49dd92(0x2a0)],TextManager[_0x49dd92(0x31f)]=VisuMZ['VictoryAftermath'][_0x49dd92(0x2ff)]['Vocab'][_0x49dd92(0x26a)],TextManager[_0x49dd92(0x204)]=VisuMZ['VictoryAftermath'][_0x49dd92(0x2ff)]['Vocab'][_0x49dd92(0x308)],TextManager[_0x49dd92(0x219)]=VisuMZ['VictoryAftermath'][_0x49dd92(0x2ff)][_0x49dd92(0x299)][_0x49dd92(0x33d)],TextManager[_0x49dd92(0x17e)]=VisuMZ[_0x49dd92(0x289)][_0x49dd92(0x2ff)][_0x49dd92(0x299)][_0x49dd92(0x2b9)],TextManager[_0x49dd92(0x287)]=VisuMZ[_0x49dd92(0x289)][_0x49dd92(0x2ff)]['Vocab']['Victory'],TextManager['victoryNewSkillFmt']=VisuMZ[_0x49dd92(0x289)][_0x49dd92(0x2ff)][_0x49dd92(0x299)][_0x49dd92(0x1a1)],TextManager[_0x49dd92(0x238)]=function(_0x1fed16){const _0x30973a=_0x49dd92,_0xa20f60=VisuMZ[_0x30973a(0x289)][_0x30973a(0x2ff)][_0x30973a(0x33c)]['LevelUpQuotes'];if(!_0x1fed16)return _0xa20f60[Math[_0x30973a(0x1ce)](_0xa20f60['length'])];if(!_0x1fed16[_0x30973a(0x245)]())return _0xa20f60[Math[_0x30973a(0x1ce)](_0xa20f60[_0x30973a(0x22b)])];const _0x58ad46=_0x1fed16[_0x30973a(0x194)]();if(_0x58ad46[_0x30973a(0x22b)]>0x0)return _0x58ad46[Math[_0x30973a(0x1ce)](_0x58ad46[_0x30973a(0x22b)])];return _0xa20f60[Math[_0x30973a(0x1ce)](_0xa20f60['length'])];},TextManager[_0x49dd92(0x326)]=function(_0x82b1b8){const _0x32bae3=_0x49dd92,_0x241695=VisuMZ[_0x32bae3(0x289)][_0x32bae3(0x2ff)]['LevelUp'][_0x32bae3(0x18a)];if(!_0x82b1b8)return _0x241695[Math[_0x32bae3(0x1ce)](_0x241695[_0x32bae3(0x22b)])];if(!_0x82b1b8[_0x32bae3(0x245)]())return _0x241695[Math[_0x32bae3(0x1ce)](_0x241695[_0x32bae3(0x22b)])];const _0x2a56fb=_0x82b1b8[_0x32bae3(0x2ca)]();if(_0x2a56fb['length']>0x0)return _0x2a56fb[Math[_0x32bae3(0x1ce)](_0x2a56fb[_0x32bae3(0x22b)])];return _0x241695[Math['randomInt'](_0x241695[_0x32bae3(0x22b)])];},ColorManager['getColorDataFromPluginParameters']=function(_0x48b357,_0x5b138c){const _0x1bb413=_0x49dd92;return _0x5b138c=String(_0x5b138c),this[_0x1bb413(0x2e0)]=this[_0x1bb413(0x2e0)]||{},_0x5b138c['match'](/#(.*)/i)?this[_0x1bb413(0x2e0)][_0x48b357]=_0x1bb413(0x1f3)[_0x1bb413(0x1cc)](String(RegExp['$1'])):this['_colorCache'][_0x48b357]=this[_0x1bb413(0x34f)](Number(_0x5b138c)),this[_0x1bb413(0x2e0)][_0x48b357];},ColorManager[_0x49dd92(0x2c5)]=function(_0x27555c){const _0x44d0db=_0x49dd92;_0x27555c=String(_0x27555c);if(_0x27555c['match'](/#(.*)/i)){if(_0x44d0db(0x222)===_0x44d0db(0x1a2))_0x4e45d8[_0x44d0db(0x327)][_0x44d0db(0x25c)][_0x44d0db(0x2f8)](this),this['updateContentsOpacity']();else return _0x44d0db(0x1f3)[_0x44d0db(0x1cc)](String(RegExp['$1']));}else return this['textColor'](Number(_0x27555c));},ColorManager[_0x49dd92(0x35e)]=function(){const _0x3bf75e=_0x49dd92,_0x1adb72=_0x3bf75e(0x1a6);this[_0x3bf75e(0x2e0)]=this[_0x3bf75e(0x2e0)]||{};if(this[_0x3bf75e(0x2e0)][_0x1adb72])return this[_0x3bf75e(0x2e0)][_0x1adb72];const _0x11ba8a=VisuMZ[_0x3bf75e(0x289)][_0x3bf75e(0x2ff)]['Vocab'][_0x3bf75e(0x291)];return this[_0x3bf75e(0x19b)](_0x1adb72,_0x11ba8a);},SoundManager[_0x49dd92(0x311)]=function(){const _0x4947d6=_0x49dd92;if(this[_0x4947d6(0x283)])return;if(!this[_0x4947d6(0x2b2)]){const _0x1677fd=VisuMZ['VictoryAftermath'][_0x4947d6(0x2ff)]['Vocab'];this[_0x4947d6(0x2b2)]={'name':_0x1677fd[_0x4947d6(0x213)]||'','volume':_0x1677fd[_0x4947d6(0x26f)]??0x5a,'pitch':_0x1677fd['LvUpPitch']??0x64,'pan':_0x1677fd[_0x4947d6(0x184)]??0x0};}this[_0x4947d6(0x2b2)]['name']!==''&&(AudioManager[_0x4947d6(0x269)](this[_0x4947d6(0x2b2)]),this[_0x4947d6(0x283)]=!![],setTimeout(this[_0x4947d6(0x1fd)][_0x4947d6(0x34b)](this),0xc8));},SoundManager[_0x49dd92(0x1fd)]=function(){const _0x2e032a=_0x49dd92;this[_0x2e032a(0x283)]=![];},SoundManager[_0x49dd92(0x342)]=function(){const _0xbe2678=_0x49dd92;if(!this[_0xbe2678(0x27f)]){const _0x2634dc=VisuMZ['VictoryAftermath'][_0xbe2678(0x2ff)][_0xbe2678(0x295)];if(_0x2634dc['volume']===undefined)_0x2634dc[_0xbe2678(0x1c6)]=0x5a;if(_0x2634dc[_0xbe2678(0x2fe)]===undefined)_0x2634dc['pitch']=0x64;if(_0x2634dc[_0xbe2678(0x2d6)]===undefined)_0x2634dc[_0xbe2678(0x2d6)]=0x0;this[_0xbe2678(0x27f)]={'name':_0x2634dc[_0xbe2678(0x1b0)]||'','volume':_0x2634dc[_0xbe2678(0x1c6)]||0x0,'pitch':_0x2634dc['pitch']||0x0,'pan':_0x2634dc[_0xbe2678(0x2d6)]||0x0};}this[_0xbe2678(0x27f)][_0xbe2678(0x28f)]!==''&&(_0xbe2678(0x319)==='gQhFN'?this[_0xbe2678(0x2f9)](_0xbe2678(0x26c)):AudioManager['playBgm'](this['_victoryBgm']));},BattleManager['_victoryUpdateDuration']=VisuMZ[_0x49dd92(0x289)][_0x49dd92(0x2ff)][_0x49dd92(0x295)][_0x49dd92(0x345)]||0x1,VisuMZ[_0x49dd92(0x289)]['BattleManager_initMembers']=BattleManager[_0x49dd92(0x1e9)],BattleManager[_0x49dd92(0x1e9)]=function(){const _0x2d7ede=_0x49dd92;VisuMZ['VictoryAftermath'][_0x2d7ede(0x2ad)][_0x2d7ede(0x2f8)](this),this['_victoryPhase']=![],this[_0x2d7ede(0x2dd)]=-0x1,this[_0x2d7ede(0x23a)]=![];},VisuMZ['VictoryAftermath'][_0x49dd92(0x232)]=BattleManager[_0x49dd92(0x252)],BattleManager[_0x49dd92(0x252)]=function(){const _0xf5c5c3=_0x49dd92;return this[_0xf5c5c3(0x2b6)]()?!![]:VisuMZ[_0xf5c5c3(0x289)][_0xf5c5c3(0x232)][_0xf5c5c3(0x2f8)](this);},BattleManager[_0x49dd92(0x2b6)]=function(){const _0xbbd082=_0x49dd92;return this[_0xbbd082(0x1e0)]==='battleEnd'&&this[_0xbbd082(0x344)];},BattleManager[_0x49dd92(0x314)]=function(){const _0x933128=_0x49dd92;this[_0x933128(0x1a7)]('BattleVictoryJS'),this['processVictoryAftermath'](),Imported[_0x933128(0x1b9)]&&$gameParty['playBattleVoice'](_0x933128(0x2fc));},BattleManager[_0x49dd92(0x301)]=function(){const _0x110fcc=_0x49dd92;this[_0x110fcc(0x290)](),this[_0x110fcc(0x1cd)](),this[_0x110fcc(0x24c)](),this[_0x110fcc(0x248)]();},BattleManager[_0x49dd92(0x290)]=function(){const _0x4c6e94=_0x49dd92;$gameParty[_0x4c6e94(0x2dc)](),$gameParty[_0x4c6e94(0x1c7)]();},BattleManager[_0x49dd92(0x1cd)]=function(){const _0x155817=_0x49dd92;if(this['isBypassVictoryAftermathMusic']())return;this[_0x155817(0x1ac)](),SoundManager[_0x155817(0x342)]();},BattleManager[_0x49dd92(0x361)]=function(){const _0x16485e=_0x49dd92;return $gameSystem[_0x16485e(0x231)]()[_0x16485e(0x278)]||$gameSystem['victoryAftermathSettings']()[_0x16485e(0x2d2)];},BattleManager[_0x49dd92(0x24c)]=function(){const _0x4cc4e0=_0x49dd92;this[_0x4cc4e0(0x33a)](),this[_0x4cc4e0(0x29f)](),this[_0x4cc4e0(0x27d)]();},BattleManager[_0x49dd92(0x33a)]=function(){const _0x27b6ae=_0x49dd92;this[_0x27b6ae(0x33e)]=$gameParty[_0x27b6ae(0x1ad)]()[_0x27b6ae(0x315)](_0x56cd2e=>_0x56cd2e[_0x27b6ae(0x338)]()),this[_0x27b6ae(0x32e)]=JsonEx[_0x27b6ae(0x1d4)](this[_0x27b6ae(0x33e)]);},BattleManager['prepareVictoryAftermathTransition']=function(){const _0xf1c21e=_0x49dd92;this[_0xf1c21e(0x2a8)](),this['endBattle'](0x0),this[_0xf1c21e(0x193)](_0xf1c21e(0x181)),this[_0xf1c21e(0x344)]=!![],this[_0xf1c21e(0x320)]()?this['skipVictoryAftermathTransition']():this['processVictoryAftermathTransition']();},BattleManager[_0x49dd92(0x2a8)]=function(){const _0x29a955=_0x49dd92,_0x486505=VisuMZ[_0x29a955(0x289)][_0x29a955(0x2ff)][_0x29a955(0x295)];_0x486505[_0x29a955(0x330)]===undefined&&(_0x486505[_0x29a955(0x330)]=!![]),_0x486505[_0x29a955(0x330)]===!![]&&(this[_0x29a955(0x23a)]=this['_autoBattle']);},BattleManager[_0x49dd92(0x320)]=function(){const _0x53ab6c=_0x49dd92;if(this[_0x53ab6c(0x23a)])return!![];return $gameSystem[_0x53ab6c(0x231)]()['bypassVictoryPhase'];},BattleManager[_0x49dd92(0x2ac)]=function(){const _0x4d44b3=_0x49dd92,_0x27a5dc=VisuMZ['VictoryAftermath']['Settings']['General'],_0x414bc9=SceneManager[_0x4d44b3(0x26d)];setTimeout(_0x414bc9['finishVictoryPhase']['bind'](_0x414bc9),_0x27a5dc['ShowDelayMS']);},BattleManager[_0x49dd92(0x186)]=function(){const _0x498348=_0x49dd92,_0x280793=VisuMZ[_0x498348(0x289)]['Settings'][_0x498348(0x295)],_0x3a01c1=SceneManager[_0x498348(0x26d)];this[_0x498348(0x32c)]=this[_0x498348(0x2f0)]['exp']/(BattleManager['_victoryUpdateDuration']||0x1),Window_StatusBase[_0x498348(0x327)][_0x498348(0x21d)](),setTimeout(_0x3a01c1[_0x498348(0x351)][_0x498348(0x34b)](_0x3a01c1),_0x280793['HideDelayMS']),setTimeout(_0x3a01c1[_0x498348(0x2c3)]['bind'](_0x3a01c1),_0x280793[_0x498348(0x234)]);},BattleManager[_0x49dd92(0x279)]=function(){const _0x20504b=_0x49dd92;for(;;){this[_0x20504b(0x2dd)]++;if(this[_0x20504b(0x2dd)]>=$gameParty[_0x20504b(0x18b)]())return null;const _0x35dc07=$gameParty[_0x20504b(0x1ad)]()[this[_0x20504b(0x2dd)]],_0x4865a1=this[_0x20504b(0x32e)][this[_0x20504b(0x2dd)]];if(_0x35dc07[_0x20504b(0x302)]!==_0x4865a1[_0x20504b(0x302)])return _0x35dc07;}return null;},VisuMZ['VictoryAftermath'][_0x49dd92(0x2bf)]=Game_System[_0x49dd92(0x327)][_0x49dd92(0x2f6)],Game_System[_0x49dd92(0x327)][_0x49dd92(0x2f6)]=function(){const _0xb8519c=_0x49dd92;VisuMZ['VictoryAftermath'][_0xb8519c(0x2bf)]['call'](this),this[_0xb8519c(0x286)]();},Game_System[_0x49dd92(0x327)][_0x49dd92(0x286)]=function(){this['_victoryAftermathSettings']={'bypassVictoryMusic':![],'bypassVictoryPhase':![],'bypassVictoryMotion':![]};},Game_System['prototype'][_0x49dd92(0x231)]=function(){const _0x1e3fae=_0x49dd92;if(this[_0x1e3fae(0x256)]===undefined)this[_0x1e3fae(0x286)]();return this[_0x1e3fae(0x256)];},VisuMZ[_0x49dd92(0x289)][_0x49dd92(0x25a)]=Game_Actor['prototype'][_0x49dd92(0x1a9)],Game_Actor[_0x49dd92(0x327)]['setup']=function(_0xc066fe){const _0x24d465=_0x49dd92;VisuMZ[_0x24d465(0x289)]['Game_Actor_setup'][_0x24d465(0x2f8)](this,_0xc066fe),this[_0x24d465(0x2d3)]();},Game_Actor[_0x49dd92(0x327)][_0x49dd92(0x2d3)]=function(){const _0x4756f9=_0x49dd92;this[_0x4756f9(0x264)]=[],this[_0x4756f9(0x306)]=[];const _0x5cb395=this['actor']()['note'];_0x5cb395[_0x4756f9(0x2ab)](/<LEVEL UP (?:QUOTE|QUOTES)>\s*([\s\S]*)\s*<\/LEVEL UP (?:QUOTE|QUOTES)>/i)&&(_0x4756f9(0x2ae)===_0x4756f9(0x2ae)?this[_0x4756f9(0x264)]=String(RegExp['$1'])['split'](/<NEW QUOTE>[\r\n]+/i):this['bitmap'][_0x4756f9(0x296)](_0x40d6be['exp'],_0x306607,_0x3e912b,_0x4e6d73,_0x3ae05a,_0x4756f9(0x1e8)));if(_0x5cb395[_0x4756f9(0x2ab)](/<NEW SKILL (?:QUOTE|QUOTES)>\s*([\s\S]*)\s*<\/NEW SKILL (?:QUOTE|QUOTES)>/i)){if(_0x4756f9(0x348)!==_0x4756f9(0x294))this[_0x4756f9(0x306)]=String(RegExp['$1'])[_0x4756f9(0x225)](/<NEW QUOTE>[\r\n]+/i);else return this[_0x4756f9(0x328)]()[_0x4756f9(0x1bc)]()?_0x544967[_0x4756f9(0x229)]?_0x438406['maxLvGaugeColor1']():_0x35016b[_0x4756f9(0x34f)](0xe):_0x3f84ae[_0x4756f9(0x229)]?_0x19a700[_0x4756f9(0x1de)]():_0x251830[_0x4756f9(0x34f)](0x1e);}},Game_Actor[_0x49dd92(0x327)]['levelUpQuotes']=function(){const _0x4832bb=_0x49dd92;if(this['_victoryAftermathLevelUpQuotes']===undefined)this[_0x4832bb(0x2d3)]();return this[_0x4832bb(0x264)];},Game_Actor[_0x49dd92(0x327)][_0x49dd92(0x2ca)]=function(){const _0x3fa72a=_0x49dd92;if(this[_0x3fa72a(0x306)]===undefined)this['setupVictoryAftermathQuotes']();return this['_victoryAftermathNewSkillQuotes'];},Game_Actor['prototype'][_0x49dd92(0x2a5)]=function(){const _0x31ad7d=_0x49dd92;if(this[_0x31ad7d(0x1bc)]())return 0x1;const _0x304805=this[_0x31ad7d(0x240)]()-this['currentLevelExp'](),_0x45e46c=this['currentExp']()-this[_0x31ad7d(0x1d5)]();return(_0x45e46c/_0x304805)[_0x31ad7d(0x2d7)](0x0,0x1);},VisuMZ[_0x49dd92(0x289)]['Game_Actor_shouldDisplayLevelUp']=Game_Actor['prototype'][_0x49dd92(0x188)],Game_Actor[_0x49dd92(0x327)][_0x49dd92(0x188)]=function(){const _0x31e00a=_0x49dd92;if(SceneManager['isSceneBattle']()){if(_0x31e00a(0x297)===_0x31e00a(0x297))return![];else this[_0x31e00a(0x352)]-=_0x1ca282['_opacitySpeed'];}else return VisuMZ[_0x31e00a(0x289)][_0x31e00a(0x29d)][_0x31e00a(0x2f8)](this);},Game_Actor[_0x49dd92(0x327)][_0x49dd92(0x338)]=function(){const _0x527c6c=_0x49dd92,_0x12ca50=JsonEx[_0x527c6c(0x1d4)](this);return _0x12ca50['_victoryAftermathCopy']=!![],_0x12ca50;},VisuMZ[_0x49dd92(0x289)][_0x49dd92(0x325)]=Game_Actor[_0x49dd92(0x327)]['isBattleMember'],Game_Actor['prototype'][_0x49dd92(0x1c9)]=function(){const _0x96427c=_0x49dd92;if(this['_victoryAftermathCopy']){if(_0x96427c(0x258)===_0x96427c(0x1f5))this[_0x96427c(0x26e)]=this[_0x96427c(0x23f)][_0x96427c(0x352)];else return!![];}else return _0x96427c(0x35f)===_0x96427c(0x35f)?VisuMZ[_0x96427c(0x289)][_0x96427c(0x325)][_0x96427c(0x2f8)](this):_0x1afcfc[_0x96427c(0x218)][_0x96427c(0x18e)][_0x96427c(0x1cc)](_0x58e1a9[_0x96427c(0x341)](),_0x11acb8['abilityPointsAbbr'],_0x39c06b[_0x96427c(0x1db)]);},VisuMZ['VictoryAftermath'][_0x49dd92(0x266)]=Game_Actor['prototype'][_0x49dd92(0x1c7)],Game_Actor[_0x49dd92(0x327)][_0x49dd92(0x1c7)]=function(){const _0x43ba24=_0x49dd92;this[_0x43ba24(0x20d)]()?this[_0x43ba24(0x2f9)](_0x43ba24(0x26c)):VisuMZ['VictoryAftermath'][_0x43ba24(0x266)][_0x43ba24(0x2f8)](this);},Game_Actor[_0x49dd92(0x327)][_0x49dd92(0x20d)]=function(){const _0x2d0907=_0x49dd92;return $gameSystem[_0x2d0907(0x231)]()['bypassVictoryMotion']||$gameSystem[_0x2d0907(0x231)]()[_0x2d0907(0x2d2)];},Scene_Battle[_0x49dd92(0x327)]['hideWindowsForVictoryAftermath']=function(){const _0x3b4eed=_0x49dd92;if(this[_0x3b4eed(0x2bc)][_0x3b4eed(0x220)]())return setTimeout(this[_0x3b4eed(0x351)][_0x3b4eed(0x34b)](this),0x7d0);if(!SceneManager['isSceneBattle']())return;this[_0x3b4eed(0x207)](![]),this[_0x3b4eed(0x313)](),this['hideSubInputWindows'](),this[_0x3b4eed(0x2a6)]['y']=Graphics[_0x3b4eed(0x22c)]*0xa;},Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x2c3)]=function(){const _0x3006db=_0x49dd92;if(this[_0x3006db(0x2bc)][_0x3006db(0x220)]())return setTimeout(this[_0x3006db(0x2c3)][_0x3006db(0x34b)](this),0x7d0);this['_victoryWindows']=[],this[_0x3006db(0x340)](),this[_0x3006db(0x1ae)](),this['updateVictorySteps']();},Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x340)]=function(){const _0x3e026c=_0x49dd92;this['_victorySteps']=[],this[_0x3e026c(0x334)](),this['createVictoryStepLevelUps']();},Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x334)]=function(){const _0x4ea6c2=_0x49dd92;this[_0x4ea6c2(0x20a)][_0x4ea6c2(0x2eb)](_0x4ea6c2(0x1ea));},Scene_Battle['prototype'][_0x49dd92(0x2b5)]=function(){const _0x3edc50=_0x49dd92;if(!this[_0x3edc50(0x359)]())return;for(const _0x5dbbce of $gameParty[_0x3edc50(0x1ad)]()){if(!_0x5dbbce)continue;const _0x557245=BattleManager[_0x3edc50(0x33e)][_0x5dbbce[_0x3edc50(0x2d0)]()];_0x5dbbce['level']>_0x557245[_0x3edc50(0x302)]&&this[_0x3edc50(0x199)](_0x5dbbce);}},Scene_Battle['prototype']['onVictoryStepLevelUpMember']=function(_0x25d0ca){const _0x3d2efd=_0x49dd92;Imported[_0x3d2efd(0x29a)]&&Window_VictoryLevelUp[_0x3d2efd(0x2e1)]&&ImageManager['loadPicture'](_0x25d0ca['getMenuImage']()),this[_0x3d2efd(0x20a)][_0x3d2efd(0x2eb)](_0x3d2efd(0x284));},Scene_Battle[_0x49dd92(0x327)]['isVictoryLevelUpPhaseEnabled']=function(){const _0x98722=_0x49dd92;return VisuMZ['VictoryAftermath'][_0x98722(0x2ff)]['LevelUp'][_0x98722(0x2b8)];},Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x1a8)]=function(){const _0x4d7234=_0x49dd92;this[_0x4d7234(0x1fa)]=this[_0x4d7234(0x20a)][_0x4d7234(0x337)]()||'',this[_0x4d7234(0x1b3)]();},Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x1b3)]=function(){const _0x1e0573=_0x49dd92;switch(this[_0x1e0573(0x1fa)][_0x1e0573(0x2a3)]()[_0x1e0573(0x2b4)]()){case _0x1e0573(0x1ea):this[_0x1e0573(0x202)](),this[_0x1e0573(0x2bd)][_0x1e0573(0x336)](BattleManager[_0x1e0573(0x25b)]);break;case _0x1e0573(0x284):this[_0x1e0573(0x2ec)](),this[_0x1e0573(0x298)](),this[_0x1e0573(0x2bd)][_0x1e0573(0x336)](0x0);break;default:this[_0x1e0573(0x2ea)]();break;}this[_0x1e0573(0x1d8)](this['_victoryContinueWindow']);},Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x1e3)]=function(){const _0xd0fa02=_0x49dd92,_0x8aa1e9=Window_Base['prototype']['lineHeight'](),_0x276b70=Math[_0xd0fa02(0x347)](Graphics[_0xd0fa02(0x2df)]/0x2)-0x64,_0x244052=Math['round'](Graphics[_0xd0fa02(0x22c)]-_0x8aa1e9*1.25),_0x368682=Math['round'](Graphics[_0xd0fa02(0x2df)]/0x2),_0x45a36c=_0x8aa1e9;return new Rectangle(_0x276b70,_0x244052,_0x368682,_0x45a36c);},Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x1aa)]=function(){const _0x145655=_0x49dd92,_0x798718=0x0,_0x316858=0x0,_0x1419c9=Graphics[_0x145655(0x2df)],_0x27491a=Graphics['height'];return new Rectangle(_0x798718,_0x316858,_0x1419c9,_0x27491a);},Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x1ae)]=function(){const _0x27a4fb=_0x49dd92;if(this['_victoryContinueWindow'])return;const _0x54587f=this[_0x27a4fb(0x1e3)](),_0x4237ea=new Window_VictoryContinueMessage(_0x54587f);this[_0x27a4fb(0x1d8)](_0x4237ea),this[_0x27a4fb(0x2c1)][_0x27a4fb(0x2eb)](_0x4237ea),this[_0x27a4fb(0x2bd)]=_0x4237ea;},Scene_Battle[_0x49dd92(0x327)]['createVictoryRewardsWindow']=function(){const _0x46416d=_0x49dd92;if(this['_victoryRewardsWindow'])return;const _0x5801b1=this['victoryFullScreenWindowRect'](),_0x3db4fd=new Window_VictoryRewards(_0x5801b1);this[_0x46416d(0x1d8)](_0x3db4fd),this[_0x46416d(0x2c1)][_0x46416d(0x2eb)](_0x3db4fd),this[_0x46416d(0x2cc)]=_0x3db4fd;},Scene_Battle['prototype']['createVictoryLevelUpWindow']=function(){const _0x1b6f0b=_0x49dd92;if(this['_victoryLevelUpWindow'])return;const _0x3c7a96=this[_0x1b6f0b(0x1aa)](),_0x1f8580=new Window_VictoryLevelUp(_0x3c7a96);this['addChild'](_0x1f8580),this[_0x1b6f0b(0x2c1)][_0x1b6f0b(0x2eb)](_0x1f8580),this[_0x1b6f0b(0x1c1)]=_0x1f8580;},Scene_Battle['prototype'][_0x49dd92(0x298)]=function(){const _0x52e016=_0x49dd92,_0x2affa2=BattleManager[_0x52e016(0x279)]();this[_0x52e016(0x1c1)][_0x52e016(0x329)](_0x2affa2),Imported['VisuMZ_3_BattleVoices']&&_0x2affa2[_0x52e016(0x2ee)](_0x52e016(0x2e9));},Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x2ea)]=function(){const _0x4fde7e=_0x49dd92;BattleManager[_0x4fde7e(0x1d7)](),BattleManager['_victoryPhase']=![];};function _0x1d70(){const _0xf3babe=['gainTempExp','show','drawParamChanges','makeDeepCopy','currentLevelExp','drawTextEx','replayBgmAndBgs','addChild','findNewSkills','lineHeight','abilityPointsFull','zyhhj','FadeInSpeed','expGaugeColor1','aGbdE','_phase','_showLevelUp','hLnhB','victoryContinueMessageWindowRect','ARRAYJSON','getAdditionalRewardsText','mainFontSize','VisuMZ_3_VisualGaugeStyles','left','initMembers','rewards','lOrkx','fontFace','drawRewards','min','clearRect','drawLevelMessage','drawParamDiffValue','itemPadding','#%1','status','SWaUl','floor','18cFrrRR','8861592yMyJTi','contents','_victoryStep','MAX\x20LEVEL','VisuMZ_1_MessageCore','removeVictoryLevelUpBuffer','JobPoints','toUpperCase','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','getQuoteText','createVictoryRewardsWindow','_actorSprite','victoryDisplayLvFmt','updatePadding','STR','setVisibleUI','clear','isWeapon','_victorySteps','collapse','createActorSprite','isBypassVictoryAftermathMotion','SkillLearnSystem','ARRAYNUM','items','drawItemGainTitle','earnedJobPoints','LvUpSfx','_rewardSets','mVkMg','getInputButtonString','drawExpGauge','AbilityPoints','victoryDisplayLvUp','_currentlevel','ARRAYFUNC','_subWindow','loadFaceImages','_duration','create','isCollapsing','_index','tkYgQ','laCfC','anchor','split','jobPointsAbbr','ARRAYSTRUCT','classPointsFull','VisuMZ_0_CoreEngine','earnedClassPoints','length','height','actor%1-gauge','ConvertParams','eYOgK','paramchangeTextColor','victoryAftermathSettings','BattleManager_isBusy','AftermathActorDisplay','ShowDelayMS','parse','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','makeFontBigger','quoteLevelUp','ActorID','_autoBattleVictorySkip','isPressed','ClassPoints','itemCount','blt','_mainWindow','nextLevelExp','_data','ARRAYSTR','gaugeColor2','translucentOpacity','isActor','drawNewLearnedSkillsBackground','357201qVmPpd','prepareVictoryAftermathTransition','makeItemGainWindow','placeActorGauges','_effectType','processVictoryAftermathRewards','paramValueByName','cancel','VisuMZ_3_VisualGoldDisplay','allowUpdateBattleAniSpeed','battlerEXPStyle','isBusy','ItemQuantityFmt','(+%1)','drawNewLearnedSkills','_victoryAftermathSettings','normalColor','rMJDJ','ItemsEquipsCore','Game_Actor_setup','_victoryUpdateDuration','update','fillRect','sort','bitmap','JrkKN','padding','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','bossCollapse','_victoryAftermathLevelUpQuotes','BustScale','Game_Actor_performVictory','drawParamAfterValue','dcCIJ','playSe','KeyCancel','BustPosX','done','_scene','opacity','LvUpVolume','updateExpGain','levelUp','VCqFe','expGaugeColor2','earnedSkillPoints','SqzHb','addChildToBack','mMmWd','bypassVictoryMusic','nextVictoryLevelUpActor','exit','right','abilityPointsAbbr','gainRewards','createGaugeSprite','_victoryBgm','measureTextWidth','nABMQ','ActorQuotesNewSkillClear','_victoryLevelUpBuffer','levelups','beforeActor','initVictoryAftermath','victoryDisplayTitle','loadPicture','VictoryAftermath','406126OQpWbt','includes','ActorQuotesNewSkillAdd','isVictoryContinueReady','Param','name','processVictoryAftermathParty','LvUpColor','SystemBypassVictoryPhase','WaitRegularCollapse','CknRT','General','drawText','GRXge','setupVictoryLevelUpNextActor','Vocab','VisuMZ_1_MainMenuCore','bzYEj','filter','Game_Actor_shouldDisplayLevelUp','drawLevelUpQuote','makeRewards','KeyOK','(%1)','Show','toLowerCase','wONHU','expRate','_statusWindow','members','checkVictoryAftermathAutoBattleAutoSkip','fontSize','1215198SZyxUL','match','skipVictoryAftermathTransition','BattleManager_initMembers','VudEr','drawPartyExpGauges','victoryNewSkillFmt','nSarY','_victoryLevelUpSFX','SystemBypassVictoryMotion','trim','createVictoryStepLevelUps','isVictoryPhase','GAehJ','Enable','RewardItems','MaxSkills','kxTus','_spriteset','_victoryContinueWindow','isShowNew','Game_System_initialize','rgba(0,\x200,\x200,\x200.4)','_victoryWindows','isFastForwarded','createVictoryAftermathWindows','gaugeHeight','getColor','STRUCT','skills','jobPointsFull','getMenuImage','newSkillQuotes','maxLvGaugeColor1','_victoryRewardsWindow','drawActorLevel','drawExpValues','NUM','index','powerUpColor','bypassVictoryPhase','setupVictoryAftermathQuotes','drawNewLearnedSkillsList','_delayDuration','pan','clamp','BustPosY','setBackgroundType','gradientFillRect','drawItemBackground','removeBattleStates','_victoryActorIndex','_itemGainWindow','width','_colorCache','_showBust','arrow','gaugeBackColor','80uxGcwJ','FUNC','mNcka','select','SystemBypassVictoryMusic','BattleVictoryLevelUp','finishVictoryPhase','push','createVictoryLevelUpWindow','drawCircle','playBattleVoice','Scene_Battle_update','_rewards','rgba(0,\x200,\x200,\x201)','drawActorName','drawItemNumber','isRepeated','itemHeight','initialize','HQQAO','call','setActionState','wsqfi','refresh','BattleVictory','drawItemDarkRect','pitch','Settings','MirrorContents','processVictoryAftermath','level','UsvHq','victoryNameBitmap','victoryContinueFmt','_victoryAftermathNewSkillQuotes','currentExp','LvFmt','center','resetFontSettings','drawActorAdditionalRewards','VisuMZ_1_ItemsEquipsCore','Text','maxVisibleItems','VisualGaugeStyles','_opacitySpeed','playVictoryLevelUpSFX','gaugeColor1','closeCommandWindows','processVictory','map','IUOcs','VisuMZ_X_Template','drawBackgroundElements','ZkqzG','getVictoryAftermathBackColor','changeExp','_actorId','createSubWindow','addInnerChild','victoryKeyCancel','isBypassVictoryAftermathPhase','eKiBC','victoryRewardBitmap','_additionalSprites','systemColor','Game_Actor_isBattleMember','quoteLevelSkill','prototype','actor','setActor','VisuMZ_2_ClassChangeSystem','WaitBossCollapse','_tempActorExpGain','_fullWidth','_victoryTempActorsB','_showFace','AutoBattleAutoSkip','MessageCore','textSizeEx','ShowFace','createVictoryStepRewards','JSON','setDelayDuration','shift','makeVictoryCopy','mirrorContents','makeTempActors','ShowParamDiff','LevelUp','LvUp','_victoryTempActorsA','drawCurrencyValue','createVictorySteps','earnedAbilityPoints','playVictoryBgm','maxLvGaugeColor2','_victoryPhase','UpdateDuration','drawActorFace','round','ajfkK','mbriC','CoreEngine','bind','updateContentsOpacity','description','_drawParamDiff','textColor','VisuMZ_1_OptionsCore','hideWindowsForVictoryAftermath','contentsOpacity','ShowExpGauges','ItemScene','ROWfz','textWidth','UBtps','DigitGroupingStandardText','isVictoryLevelUpPhaseEnabled','parameters','HideLevelDiff','paramValueFontSize','changeTextColor','victoryLevelUpColor','QdZss','innerWidth','isBypassVictoryAftermathMusic','paintOpacity','85aspidX','victoryDisplayItem','rgba(0,\x200,\x200,\x200.8)','ShowBust','Victory','drawParamName','FkJgV','LvUpPan','SkillPoints','processVictoryAftermathTransition','ExtDisplayedParams','shouldDisplayLevelUp','fOzSr','NewSkillQuotes','maxBattleMembers','uNfDj','faceHeight','AftermathText','ActorQuotesLevelUpClear','drawItemName','isItem','ClassChangeSystem','processPostBattleCommonEvents','levelUpQuotes','AkAlt','currencyUnit','drawParamBeforeValue','mainFontFace','onVictoryStepLevelUpMember','drawActorNameStrip','getColorDataFromPluginParameters','updateVictoryPhase','constructor','createBitmap','_actor','BackRectColor','NewSkill','KWbmc','82132UIvcGv','isArmor','IKhAs','victory-level-up-color','processBattleCoreJS','updateVictorySteps','setup','victoryFullScreenWindowRect','updateOpacity','playVictoryMe','battleMembers','createVictoryContinueMessageWindow','max','Bgm','xctQi','scale','processVictoryStep','dimColor2','return\x200','GroupDigits','boxWidth','623536ZokXPG','VisuMZ_3_BattleVoices','param','QIVev','isMaxLevel','camWc','WJkPe','faceWidth','classPointsAbbr','_victoryLevelUpWindow','registerCommand','Bypass','victoryKeyOk','ContinueFmt','volume','performVictory','334746wQTqcN','isBattleMember','actorParams','afterActor','format','processVictoryAftermathMusic','randomInt','Data','Template'];_0x1d70=function(){return _0xf3babe;};return _0x1d70();}Imported[_0x49dd92(0x350)]&&(VisuMZ[_0x49dd92(0x289)]['Scene_Battle_allowUpdateBattleAniSpeed']=Scene_Battle['prototype'][_0x49dd92(0x250)],Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x250)]=function(){const _0x5e3eb0=_0x49dd92;if(BattleManager['isVictoryPhase']())return![];return VisuMZ['VictoryAftermath']['Scene_Battle_allowUpdateBattleAniSpeed'][_0x5e3eb0(0x2f8)](this);});;Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x28d)]=function(){const _0x17d591=_0x49dd92;return this[_0x17d591(0x2bd)]&&this[_0x17d591(0x2bd)]['isContinueReady']();},VisuMZ[_0x49dd92(0x289)][_0x49dd92(0x2ef)]=Scene_Battle['prototype'][_0x49dd92(0x25c)],Scene_Battle['prototype'][_0x49dd92(0x25c)]=function(){const _0x2b24ee=_0x49dd92;VisuMZ[_0x2b24ee(0x289)][_0x2b24ee(0x2ef)][_0x2b24ee(0x2f8)](this),this[_0x2b24ee(0x19c)]();},Scene_Battle[_0x49dd92(0x327)][_0x49dd92(0x19c)]=function(){const _0x32fc00=_0x49dd92;if(!BattleManager['isVictoryPhase']())return;if(!this[_0x32fc00(0x28d)]())return;(Input[_0x32fc00(0x2f4)]('ok')||Input[_0x32fc00(0x2f4)](_0x32fc00(0x24e))||TouchInput[_0x32fc00(0x2f4)]())&&(Input[_0x32fc00(0x208)](),TouchInput['clear'](),this[_0x32fc00(0x1a8)]());},Sprite_Enemy[_0x49dd92(0x327)][_0x49dd92(0x220)]=function(){const _0x348f81=_0x49dd92,_0x24f456=VisuMZ[_0x348f81(0x289)][_0x348f81(0x2ff)]['General'];if(this[_0x348f81(0x24b)]===_0x348f81(0x20b)){if(_0x348f81(0x260)!=='JrkKN')_0xfa4e14[_0x348f81(0x29a)]&&_0x82be38[_0x348f81(0x2e1)]&&_0x5317ac[_0x348f81(0x288)](_0x4bca3c[_0x348f81(0x2c9)]()),this['_victorySteps'][_0x348f81(0x2eb)]('levelups');else{if(_0x24f456[_0x348f81(0x293)]!==undefined)return _0x24f456[_0x348f81(0x293)];}}else{if(this['_effectType']==='bossCollapse'){if(_0x24f456[_0x348f81(0x32b)]!==undefined){if(_0x348f81(0x215)!=='mVkMg')_0x2c8430[_0x348f81(0x327)]['refresh']['call'](this),this[_0x348f81(0x1f9)][_0x348f81(0x208)](),this['resetFontSettings'](),this[_0x348f81(0x318)](),this[_0x348f81(0x1ed)](),this[_0x348f81(0x211)](),this[_0x348f81(0x249)](),this[_0x348f81(0x2af)]();else return _0x24f456['WaitBossCollapse'];}}}return[_0x348f81(0x20b),_0x348f81(0x263)][_0x348f81(0x28b)]();},Sprite_Battler[_0x49dd92(0x327)]['isCollapsing']=function(){return![];},Spriteset_Battle[_0x49dd92(0x327)]['isCollapsing']=function(){const _0x3cc596=_0x49dd92;return this['battlerSprites']()['some'](_0x2f76b2=>_0x2f76b2[_0x3cc596(0x220)]());};function Sprite_VictoryGauge(){const _0x1d9cbc=_0x49dd92;this[_0x1d9cbc(0x2f6)](...arguments);}function _0x5644(_0x55ef9c,_0x2f0b1c){const _0x1d7050=_0x1d70();return _0x5644=function(_0x564430,_0x2baaf5){_0x564430=_0x564430-0x17c;let _0x50837f=_0x1d7050[_0x564430];return _0x50837f;},_0x5644(_0x55ef9c,_0x2f0b1c);}Sprite_VictoryGauge[_0x49dd92(0x327)]=Object[_0x49dd92(0x21f)](Sprite['prototype']),Sprite_VictoryGauge['prototype']['constructor']=Sprite_VictoryGauge,Sprite_VictoryGauge['prototype'][_0x49dd92(0x2f6)]=function(_0x2204d5,_0x57adef,_0x45d9fb){const _0x3a08df=_0x49dd92;this[_0x3a08df(0x221)]=_0x2204d5,this[_0x3a08df(0x23f)]=_0x57adef,this[_0x3a08df(0x32d)]=_0x45d9fb,Sprite['prototype']['initialize'][_0x3a08df(0x2f8)](this),this[_0x3a08df(0x1e9)](),this[_0x3a08df(0x19e)](),this[_0x3a08df(0x2fb)](),this['updateOpacity']();},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x1e9)]=function(){const _0x5053a7=_0x49dd92;this['_duration']=BattleManager[_0x5053a7(0x25b)],this[_0x5053a7(0x21a)]=this[_0x5053a7(0x328)]()[_0x5053a7(0x302)],this[_0x5053a7(0x1e1)]=![];},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x19e)]=function(){const _0x256760=_0x49dd92;this['bitmap']=new Bitmap(this[_0x256760(0x32d)],this[_0x256760(0x1da)]()*0x2);},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x1da)]=function(){const _0xa9228b=_0x49dd92;return Window_Base[_0xa9228b(0x327)]['lineHeight']();},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x328)]=function(){return BattleManager['_victoryTempActorsA'][this['_index']];},Sprite_VictoryGauge['prototype'][_0x49dd92(0x25c)]=function(){const _0x944327=_0x49dd92;Sprite['prototype'][_0x944327(0x25c)][_0x944327(0x2f8)](this),this[_0x944327(0x270)](),this[_0x944327(0x1ab)]();},Sprite_VictoryGauge[_0x49dd92(0x327)]['updateExpGain']=function(){const _0xda5fc8=_0x49dd92;if(this[_0xda5fc8(0x21e)]<=0x0)return;const _0x427417=this['actor']();this[_0xda5fc8(0x21e)]--;this[_0xda5fc8(0x2c2)]()&&('kaKTw'!==_0xda5fc8(0x1df)?this[_0xda5fc8(0x21e)]=0x0:this['_victoryAftermathSettings']={'bypassVictoryMusic':![],'bypassVictoryPhase':![],'bypassVictoryMotion':![]});if(this[_0xda5fc8(0x21e)]<=0x0){const _0x3533d8=$gameActors[_0xda5fc8(0x328)](_0x427417[_0xda5fc8(0x31c)]);_0x427417[_0xda5fc8(0x31b)](_0x3533d8['currentExp'](),![]);}else _0xda5fc8(0x2b1)==='CaNgl'?(_0x3a4ad8[_0xda5fc8(0x22e)](_0x815e54,_0x38cee5),_0x4b008c[_0xda5fc8(0x231)]()[_0xda5fc8(0x278)]=_0x32ed70[_0xda5fc8(0x1c3)]):_0x427417[_0xda5fc8(0x1d1)](BattleManager[_0xda5fc8(0x32c)]);this[_0xda5fc8(0x21a)]!==_0x427417[_0xda5fc8(0x302)]&&(this['_currentlevel']=_0x427417['level'],this[_0xda5fc8(0x1e1)]=!![],SoundManager[_0xda5fc8(0x311)]()),this[_0xda5fc8(0x2fb)]();},Game_Actor['prototype'][_0x49dd92(0x1d1)]=function(_0x2775d8){const _0xe2d883=_0x49dd92,_0x121661=this[_0xe2d883(0x307)]()+_0x2775d8*this['finalExpRate']();this[_0xe2d883(0x31b)](_0x121661,this[_0xe2d883(0x188)]());},Sprite_VictoryGauge[_0x49dd92(0x327)]['isFastForwarded']=function(){const _0xa5711d=_0x49dd92;return SceneManager[_0xa5711d(0x26d)][_0xa5711d(0x28d)]();},Sprite_VictoryGauge['prototype'][_0x49dd92(0x1ab)]=function(){const _0x1e1df8=_0x49dd92;this[_0x1e1df8(0x26e)]=this[_0x1e1df8(0x23f)][_0x1e1df8(0x352)];},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x2fb)]=function(){const _0xf32092=_0x49dd92;this['bitmap'][_0xf32092(0x208)](),this[_0xf32092(0x30a)](),this[_0xf32092(0x2f2)](),this[_0xf32092(0x2cd)](),this[_0xf32092(0x30b)](),this[_0xf32092(0x217)](),this[_0xf32092(0x2ce)]();},Sprite_VictoryGauge['prototype'][_0x49dd92(0x30a)]=function(){const _0x59c8f8=_0x49dd92;this[_0x59c8f8(0x25f)][_0x59c8f8(0x1ec)]=$gameSystem[_0x59c8f8(0x198)](),this[_0x59c8f8(0x25f)]['fontSize']=$gameSystem[_0x59c8f8(0x1e6)](),this[_0x59c8f8(0x25f)][_0x59c8f8(0x34f)]=ColorManager[_0x59c8f8(0x257)]();},Sprite_VictoryGauge['prototype'][_0x49dd92(0x2f2)]=function(){const _0x1a4f2c=_0x49dd92;this[_0x1a4f2c(0x30a)]();const _0x8d6d3e=this[_0x1a4f2c(0x1da)](),_0x2c65b4=Math[_0x1a4f2c(0x347)](_0x8d6d3e/0x2),_0x2a87af=0x0,_0x396f14=this[_0x1a4f2c(0x25f)]['width']-_0x8d6d3e,_0x3d52dd=_0x1a4f2c(0x1e8),_0x5c1de9=this[_0x1a4f2c(0x328)]()['name']();this[_0x1a4f2c(0x25f)][_0x1a4f2c(0x296)](_0x5c1de9,_0x2c65b4,_0x2a87af,_0x396f14,_0x8d6d3e,_0x3d52dd);},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x2cd)]=function(){const _0x411eed=_0x49dd92;this[_0x411eed(0x30a)]();const _0x4c0616=this[_0x411eed(0x1da)](),_0x49ae1f=Math[_0x411eed(0x347)](_0x4c0616/0x2),_0x585545=0x0,_0x13a192=this[_0x411eed(0x25f)]['width']-_0x4c0616,_0x8c6c2=this[_0x411eed(0x1e5)]()===''?_0x411eed(0x27b):_0x411eed(0x309),_0xa3f7b6=TextManager['victoryDisplayLvFmt'][_0x411eed(0x1cc)](this[_0x411eed(0x328)]()[_0x411eed(0x302)]);if(this['_showLevelUp']){if('HDfSX'===_0x411eed(0x349))return _0x40fdc0['CoreEngine'][_0x411eed(0x2ff)][_0x411eed(0x28e)][_0x411eed(0x187)];else this['bitmap'][_0x411eed(0x34f)]=ColorManager[_0x411eed(0x2d1)]();}this[_0x411eed(0x25f)]['drawText'](_0xa3f7b6,_0x49ae1f,_0x585545,_0x13a192,_0x4c0616,_0x8c6c2);},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x1e5)]=function(){const _0x11f00c=_0x49dd92,_0x2a4eca=$gameParty[_0x11f00c(0x2a7)]()[this[_0x11f00c(0x221)]];if(!_0x2a4eca)return'';if(Imported[_0x11f00c(0x317)]&&VisuMZ[_0x11f00c(0x1d0)][_0x11f00c(0x2ff)][_0x11f00c(0x1fe)]['AftermathActorDisplay'])return VisuMZ['Template'][_0x11f00c(0x2ff)]['JobPoints'][_0x11f00c(0x18e)][_0x11f00c(0x1cc)](_0x2a4eca[_0x11f00c(0x212)](),TextManager[_0x11f00c(0x226)],TextManager[_0x11f00c(0x2c8)]);if(Imported[_0x11f00c(0x32a)]){const _0x5b414a=VisuMZ[_0x11f00c(0x192)][_0x11f00c(0x2ff)];if(_0x5b414a[_0x11f00c(0x23c)][_0x11f00c(0x233)])return _0x5b414a[_0x11f00c(0x23c)]['AftermathText'][_0x11f00c(0x1cc)](_0x2a4eca[_0x11f00c(0x22a)](),TextManager[_0x11f00c(0x1c0)],TextManager[_0x11f00c(0x228)]);if(_0x5b414a[_0x11f00c(0x1fe)][_0x11f00c(0x233)])return _0x11f00c(0x18c)!==_0x11f00c(0x18c)?_0x37bce4(this[_0x11f00c(0x351)][_0x11f00c(0x34b)](this),0x7d0):_0x5b414a[_0x11f00c(0x1fe)][_0x11f00c(0x18e)]['format'](_0x2a4eca[_0x11f00c(0x212)](),TextManager['jobPointsAbbr'],TextManager[_0x11f00c(0x2c8)]);}if(Imported['VisuMZ_2_SkillLearnSystem']){const _0x5e1869=VisuMZ[_0x11f00c(0x20e)][_0x11f00c(0x2ff)];if(_0x5e1869[_0x11f00c(0x218)][_0x11f00c(0x233)]){if('eNQYA'!=='eNQYA'){const _0x5293d7=_0xd7fe37[_0x11f00c(0x192)][_0x11f00c(0x2ff)];if(_0x5293d7[_0x11f00c(0x23c)][_0x11f00c(0x233)])return _0x5293d7[_0x11f00c(0x23c)][_0x11f00c(0x18e)][_0x11f00c(0x1cc)](_0xafcea2[_0x11f00c(0x22a)](),_0x3ad663[_0x11f00c(0x1c0)],_0x33a6ba[_0x11f00c(0x228)]);if(_0x5293d7[_0x11f00c(0x1fe)][_0x11f00c(0x233)])return _0x5293d7[_0x11f00c(0x1fe)][_0x11f00c(0x18e)][_0x11f00c(0x1cc)](_0x201fd0[_0x11f00c(0x212)](),_0x3d512c['jobPointsAbbr'],_0x2e40f9[_0x11f00c(0x2c8)]);}else return _0x5e1869['AbilityPoints'][_0x11f00c(0x18e)][_0x11f00c(0x1cc)](_0x2a4eca[_0x11f00c(0x341)](),TextManager[_0x11f00c(0x27c)],TextManager[_0x11f00c(0x1db)]);}if(_0x5e1869[_0x11f00c(0x185)][_0x11f00c(0x233)]){if(_0x11f00c(0x1e2)==='oovJl')this['changeTextColor'](_0x69f990[_0x11f00c(0x230)](_0xbd6298)),_0x5adb64=(_0x3b271a>=0x0?_0x11f00c(0x254):_0x11f00c(0x2a1))[_0x11f00c(0x1cc)](_0x3d8c94),this[_0x11f00c(0x296)](_0x59d312,_0x3dc44f+this['itemPadding'](),_0x2de6a3,_0x1b453d-this[_0x11f00c(0x1f2)]()*0x2,_0x11f00c(0x1e8));else return _0x5e1869[_0x11f00c(0x185)][_0x11f00c(0x18e)][_0x11f00c(0x1cc)](_0x2a4eca[_0x11f00c(0x274)](),TextManager['skillPointsAbbr'],TextManager['skillPointsFull']);}}return'';},Sprite_VictoryGauge['prototype'][_0x49dd92(0x30b)]=function(){const _0x2e51f3=_0x49dd92;this[_0x2e51f3(0x30a)]();const _0x1fee6f=this['lineHeight'](),_0x1adf28=Math[_0x2e51f3(0x347)](_0x1fee6f/0x2),_0x296a45=0x0,_0x5bb8ee=this[_0x2e51f3(0x25f)][_0x2e51f3(0x2df)]-_0x1fee6f,_0x5bebc9=_0x2e51f3(0x27b);let _0x1b2c0e=this[_0x2e51f3(0x1e5)]();this[_0x2e51f3(0x25f)][_0x2e51f3(0x296)](_0x1b2c0e,_0x1adf28,_0x296a45,_0x5bb8ee,_0x1fee6f,_0x5bebc9);},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x217)]=function(){const _0xa5344d=_0x49dd92,_0x2e2c4e=this['lineHeight'](),_0x12d1b6=this[_0xa5344d(0x25f)]['width']-_0x2e2c4e,_0x48dbb4=Sprite_Gauge[_0xa5344d(0x327)][_0xa5344d(0x2c4)](),_0x58d420=Math[_0xa5344d(0x347)](_0x2e2c4e/0x2),_0x1b0eec=_0x2e2c4e*0x2-_0x48dbb4-0x2,_0x5cbbf7=Math[_0xa5344d(0x1f6)]((_0x12d1b6-0x2)*this[_0xa5344d(0x328)]()[_0xa5344d(0x2a5)]()),_0x5683bd=_0x48dbb4-0x2,_0x33e7c1=this['gaugeBackColor'](),_0x879a96=this['gaugeColor1'](),_0x39a17e=this[_0xa5344d(0x243)]();if(Imported[_0xa5344d(0x1e7)]){const _0x5b268a=VisuMZ[_0xa5344d(0x30f)]['Settings'][_0xa5344d(0x251)]??_0xa5344d(0x2e2);this[_0xa5344d(0x25f)]['drawVisualStyleGauge'](_0x5b268a,_0x58d420,_0x1b0eec,_0x12d1b6,_0x48dbb4,this['actor']()[_0xa5344d(0x2a5)](),_0x33e7c1,_0x879a96,_0x39a17e);}else this[_0xa5344d(0x25f)][_0xa5344d(0x25d)](_0x58d420,_0x1b0eec,_0x12d1b6,_0x48dbb4,_0x33e7c1),this[_0xa5344d(0x25f)][_0xa5344d(0x2da)](_0x58d420+0x1,_0x1b0eec+0x1,_0x5cbbf7,_0x5683bd,_0x879a96,_0x39a17e);},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x2e3)]=function(){return ColorManager['gaugeBackColor']();},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x312)]=function(){const _0x2d91dd=_0x49dd92;return this[_0x2d91dd(0x328)]()['isMaxLevel']()?_0x2d91dd(0x2e6)!=='uqVaR'?Imported[_0x2d91dd(0x229)]?ColorManager[_0x2d91dd(0x2cb)]():ColorManager['textColor'](0xe):_0x4f0111[_0x2d91dd(0x293)]:Imported['VisuMZ_0_CoreEngine']?ColorManager[_0x2d91dd(0x1de)]():ColorManager['textColor'](0x1e);},Sprite_VictoryGauge['prototype'][_0x49dd92(0x243)]=function(){const _0x1caa57=_0x49dd92;return this[_0x1caa57(0x328)]()[_0x1caa57(0x1bc)]()?Imported['VisuMZ_0_CoreEngine']?ColorManager[_0x1caa57(0x343)]():ColorManager[_0x1caa57(0x34f)](0x6):Imported[_0x1caa57(0x229)]?ColorManager[_0x1caa57(0x273)]():ColorManager[_0x1caa57(0x34f)](0x1f);},Sprite_VictoryGauge[_0x49dd92(0x327)][_0x49dd92(0x2ce)]=function(){const _0x3afbf5=_0x49dd92;this[_0x3afbf5(0x30a)]();const _0x25cfb5=this[_0x3afbf5(0x1da)](),_0xfae89b=_0x25cfb5,_0x207a8a=_0x25cfb5;let _0x31a03f=this[_0x3afbf5(0x25f)][_0x3afbf5(0x2df)]-_0x25cfb5*0x2;const _0xea8cce=this[_0x3afbf5(0x328)]();let _0x5f4af1=Math[_0x3afbf5(0x347)](_0xea8cce[_0x3afbf5(0x307)]()-_0xea8cce['currentLevelExp']()),_0x2f1dee='/'+Math[_0x3afbf5(0x347)](_0xea8cce[_0x3afbf5(0x240)]()-_0xea8cce['currentLevelExp']());Imported[_0x3afbf5(0x229)]&&VisuMZ[_0x3afbf5(0x34a)]['Settings']['QoL'][_0x3afbf5(0x358)]&&(_0x5f4af1=VisuMZ['GroupDigits'](_0x5f4af1),_0x2f1dee=VisuMZ['GroupDigits'](_0x2f1dee));this[_0x3afbf5(0x1e1)]?(this[_0x3afbf5(0x25f)]['textColor']=ColorManager[_0x3afbf5(0x35e)](),this['bitmap'][_0x3afbf5(0x296)](TextManager[_0x3afbf5(0x219)],_0xfae89b,_0x207a8a,_0x31a03f,_0x25cfb5,'left')):this[_0x3afbf5(0x25f)][_0x3afbf5(0x296)](TextManager['exp'],_0xfae89b,_0x207a8a,_0x31a03f,_0x25cfb5,'left');this[_0x3afbf5(0x30a)]();if(_0xea8cce[_0x3afbf5(0x1bc)]()){if(_0x3afbf5(0x277)!=='WuLcS'){this[_0x3afbf5(0x25f)]['drawText'](_0x3afbf5(0x1fb),_0xfae89b,_0x207a8a,_0x31a03f,_0x25cfb5,'right');return;}else{const _0x41d9f3=new _0x559697(0x0,0x0,this['width'],this['height']);this[_0x3afbf5(0x21c)]=new _0x2a747d(_0x41d9f3,this),this[_0x3afbf5(0x1d8)](this[_0x3afbf5(0x21c)]);}}this[_0x3afbf5(0x25f)][_0x3afbf5(0x2a9)]-=0x8,this[_0x3afbf5(0x25f)]['textColor']=ColorManager['textColor'](0x8),this['bitmap'][_0x3afbf5(0x296)](_0x2f1dee,_0xfae89b,_0x207a8a,_0x31a03f,_0x25cfb5,'right'),_0x31a03f-=this[_0x3afbf5(0x25f)][_0x3afbf5(0x280)](_0x2f1dee),this[_0x3afbf5(0x30a)](),this['bitmap']['drawText'](_0x5f4af1,_0xfae89b,_0x207a8a,_0x31a03f,_0x25cfb5,_0x3afbf5(0x27b));};function Window_VictoryContinueMessage(){this['initialize'](...arguments);}Window_VictoryContinueMessage[_0x49dd92(0x327)]=Object['create'](Window_Base['prototype']),Window_VictoryContinueMessage[_0x49dd92(0x327)]['constructor']=Window_VictoryContinueMessage,Window_VictoryContinueMessage[_0x49dd92(0x327)][_0x49dd92(0x2f6)]=function(_0x49de8f){const _0xb3e435=_0x49dd92;Window_Base[_0xb3e435(0x327)][_0xb3e435(0x2f6)][_0xb3e435(0x2f8)](this,_0x49de8f),this[_0xb3e435(0x2d9)](0x2),this['refresh']();},Window_VictoryContinueMessage['prototype'][_0x49dd92(0x336)]=function(_0x47c511){const _0x52e9cc=_0x49dd92;this[_0x52e9cc(0x2d5)]=_0x47c511,this[_0x52e9cc(0x352)]=0x0;},Window_VictoryContinueMessage[_0x49dd92(0x327)][_0x49dd92(0x205)]=function(){this['padding']=0x0;},Window_VictoryContinueMessage[_0x49dd92(0x327)][_0x49dd92(0x25c)]=function(){const _0x5b9dc3=_0x49dd92;Window_Base[_0x5b9dc3(0x327)]['update']['call'](this),this[_0x5b9dc3(0x34c)]();},Window_VictoryContinueMessage['prototype'][_0x49dd92(0x34c)]=function(){const _0x6fd041=_0x49dd92;this[_0x6fd041(0x2d5)]>0x0&&this['isFastForwarded']()&&('iKyvR'!==_0x6fd041(0x22f)?(this['_delayDuration']=0x0,Input[_0x6fd041(0x208)](),TouchInput[_0x6fd041(0x208)]()):this['_colorCache'][_0x463e00]=_0x6fd041(0x1f3)[_0x6fd041(0x1cc)](_0x5cd187(_0x3fc1be['$1'])));if(this[_0x6fd041(0x2d5)]-->0x0)return;this['contentsOpacity']+=Window_VictoryRewards[_0x6fd041(0x310)];},Window_VictoryContinueMessage[_0x49dd92(0x327)][_0x49dd92(0x2c2)]=function(){const _0x669e35=_0x49dd92;return Input[_0x669e35(0x23b)]('ok')||Input[_0x669e35(0x23b)]('cancel')||TouchInput['isPressed']();},Window_VictoryContinueMessage[_0x49dd92(0x327)][_0x49dd92(0x2fb)]=function(){const _0x2120ee=_0x49dd92;this['contents'][_0x2120ee(0x208)]();const _0x33888c=TextManager[_0x2120ee(0x305)];let _0x160839=TextManager[_0x2120ee(0x1c4)],_0x2b6981=TextManager[_0x2120ee(0x31f)];Imported[_0x2120ee(0x229)]&&('AkAlt'!==_0x2120ee(0x195)?(_0x8d6077(_0x2120ee(0x200)[_0x2120ee(0x1cc)](_0x38cc74,_0x265243)),_0x4fddb7[_0x2120ee(0x27a)]()):(_0x160839=TextManager[_0x2120ee(0x216)]('ok'),_0x2b6981=TextManager[_0x2120ee(0x216)]('cancel')));const _0xa84a88=_0x33888c[_0x2120ee(0x1cc)](_0x160839,_0x2b6981),_0x3fe905=this['textSizeEx'](_0xa84a88)[_0x2120ee(0x2df)],_0x15d18c=Math['round']((this[_0x2120ee(0x360)]-_0x3fe905)/0x2);this[_0x2120ee(0x1d6)](_0xa84a88,_0x15d18c,0x0,_0x3fe905);},Window_VictoryContinueMessage[_0x49dd92(0x327)]['isContinueReady']=function(){const _0x18fd95=_0x49dd92;return this[_0x18fd95(0x2d5)]<=0x0;};function Window_VictoryRewards(){this['initialize'](...arguments);}Window_VictoryRewards[_0x49dd92(0x310)]=VisuMZ[_0x49dd92(0x289)]['Settings'][_0x49dd92(0x295)][_0x49dd92(0x1dd)],Window_VictoryRewards[_0x49dd92(0x327)]=Object[_0x49dd92(0x21f)](Window_StatusBase[_0x49dd92(0x327)]),Window_VictoryRewards['prototype'][_0x49dd92(0x19d)]=Window_VictoryRewards,Window_VictoryRewards['prototype']['initialize']=function(_0x450802){const _0x510a1d=_0x49dd92;Window_StatusBase[_0x510a1d(0x327)]['initialize'][_0x510a1d(0x2f8)](this,_0x450802),this[_0x510a1d(0x2d9)](0x2),this[_0x510a1d(0x352)]=0x0,this['refresh']();},Window_VictoryRewards[_0x49dd92(0x327)][_0x49dd92(0x205)]=function(){const _0x17fd97=_0x49dd92;this[_0x17fd97(0x261)]=0x0;},Window_VictoryRewards['prototype']['update']=function(){const _0xf14aa8=_0x49dd92;Window_StatusBase[_0xf14aa8(0x327)][_0xf14aa8(0x25c)][_0xf14aa8(0x2f8)](this),this[_0xf14aa8(0x34c)]();},Window_VictoryRewards[_0x49dd92(0x327)][_0x49dd92(0x34c)]=function(){const _0x391ce9=_0x49dd92;SceneManager[_0x391ce9(0x26d)]['_victoryStep']===_0x391ce9(0x1ea)?this[_0x391ce9(0x352)]+=Window_VictoryRewards[_0x391ce9(0x310)]:_0x391ce9(0x1bd)!==_0x391ce9(0x1eb)?this[_0x391ce9(0x352)]-=Window_VictoryRewards['_opacitySpeed']:this[_0x391ce9(0x21e)]=0x0;},Window_VictoryRewards[_0x49dd92(0x327)]['mirrorContents']=function(){const _0x11779e=_0x49dd92;return VisuMZ['VictoryAftermath'][_0x11779e(0x2ff)][_0x11779e(0x295)][_0x11779e(0x300)];},Window_VictoryRewards['prototype']['refresh']=function(){const _0x47b048=_0x49dd92;Window_StatusBase[_0x47b048(0x327)]['refresh'][_0x47b048(0x2f8)](this),this['contents'][_0x47b048(0x208)](),this['resetFontSettings'](),this['drawBackgroundElements'](),this['drawRewards'](),this['drawItemGainTitle'](),this[_0x47b048(0x249)](),this[_0x47b048(0x2af)]();},Window_VictoryRewards['prototype'][_0x49dd92(0x318)]=function(){const _0x2f33a9=_0x49dd92,_0x3806a4=this['lineHeight'](),_0x47707d=0x0,_0x2f4695=_0x3806a4*2.5,_0x3792d3=_0x2f33a9(0x17f),_0x55b6ba=_0x2f33a9(0x2c0),_0x1dece1=ColorManager[_0x2f33a9(0x257)]();this['contents'][_0x2f33a9(0x2da)](_0x47707d,_0x2f4695,this[_0x2f33a9(0x2df)],this[_0x2f33a9(0x22c)]-_0x2f4695-_0x3806a4*1.5,_0x3792d3,_0x55b6ba),this[_0x2f33a9(0x1f9)][_0x2f33a9(0x25d)](0x0,_0x2f4695-0x1,this[_0x2f33a9(0x2df)],0x2,_0x1dece1),this[_0x2f33a9(0x1f9)][_0x2f33a9(0x25d)](0x0,this['height']-_0x3806a4*1.5-0x1,this[_0x2f33a9(0x2df)],0x2,_0x1dece1);const _0x3987eb=this[_0x2f33a9(0x339)](),_0x552b74=_0x3987eb?Math[_0x2f33a9(0x347)](this[_0x2f33a9(0x2df)]/0x2+0x28):0x64,_0x4eeb6c=_0x2f4695-_0x3806a4*0.75,_0x16ffab=TextManager['victoryDisplayTitle'];this[_0x2f33a9(0x237)](),this[_0x2f33a9(0x237)](),this['drawText'](_0x16ffab,_0x552b74,_0x4eeb6c,this[_0x2f33a9(0x2df)]);},Window_VictoryRewards[_0x49dd92(0x214)]=VisuMZ[_0x49dd92(0x289)]['Settings']['Rewards'],Window_VictoryRewards[_0x49dd92(0x327)][_0x49dd92(0x1ed)]=function(){const _0x2879a3=_0x49dd92;this[_0x2879a3(0x30a)]();const _0x20ccd1=this[_0x2879a3(0x339)](),_0x35a5e1=this[_0x2879a3(0x1da)](),_0x32be0c=Math[_0x2879a3(0x1f6)](_0x35a5e1/0x2),_0x280e98=_0x20ccd1?Math[_0x2879a3(0x347)](this[_0x2879a3(0x2df)]/0x2+0x28):0x64,_0x271f31=Math['round'](_0x35a5e1*3.5),_0x87d7da=Math[_0x2879a3(0x347)](this['width']/0x2-0x8c),_0x5da97d=_0x87d7da-_0x32be0c-0x50;let _0x5a5558=_0x271f31;for(const _0x1eef8a of Window_VictoryRewards['_rewardSets']){if(!_0x1eef8a[_0x2879a3(0x2a2)]())continue;this['drawRewardStrip'](_0x280e98,_0x5a5558,_0x87d7da),this['changeTextColor'](ColorManager[_0x2879a3(0x324)]()),this['drawText'](_0x1eef8a[_0x2879a3(0x30d)](),_0x280e98+_0x32be0c,_0x5a5558,_0x5da97d),this['changeTextColor'](ColorManager[_0x2879a3(0x257)]());const _0x30bbe5=_0x1eef8a[_0x2879a3(0x1cf)]();Imported[_0x2879a3(0x24f)]&&_0x1eef8a[_0x2879a3(0x30d)]()===TextManager[_0x2879a3(0x196)]?this[_0x2879a3(0x33f)](_0x30bbe5,TextManager[_0x2879a3(0x196)],_0x280e98+_0x32be0c,_0x5a5558,_0x5da97d):this[_0x2879a3(0x296)](_0x30bbe5,_0x280e98+_0x32be0c,_0x5a5558,_0x5da97d,_0x2879a3(0x27b)),_0x5a5558+=_0x35a5e1;}},Window_VictoryRewards[_0x49dd92(0x327)]['drawRewardStrip']=function(_0x365fd0,_0xef9226,_0x3e0011){const _0x552521=_0x49dd92,_0x3bae28=this['lineHeight']()-0x2,_0x4fe74c=Math[_0x552521(0x1f6)](_0x3bae28/0x2),_0x565124=_0x552521(0x2f1),_0x256822=ColorManager[_0x552521(0x1b4)](),_0xc9b244=0x50,_0x37f649=_0x3e0011-_0x4fe74c-_0xc9b244;!ImageManager[_0x552521(0x322)]&&(ImageManager[_0x552521(0x322)]=new Bitmap(_0x3e0011,_0x3bae28),ImageManager['victoryRewardBitmap'][_0x552521(0x17c)]=this[_0x552521(0x244)](),ImageManager[_0x552521(0x322)][_0x552521(0x2ed)](_0x4fe74c,_0x4fe74c,_0x4fe74c,_0x565124),ImageManager[_0x552521(0x322)][_0x552521(0x1ef)](_0x4fe74c,0x0,_0x3bae28,_0x3bae28),ImageManager[_0x552521(0x322)]['fillRect'](_0x4fe74c,0x0,_0x37f649,_0x3bae28,_0x565124),ImageManager[_0x552521(0x322)]['gradientFillRect'](_0x4fe74c+_0x37f649,0x0,_0xc9b244,_0x3bae28,_0x565124,_0x256822)),this[_0x552521(0x1f9)][_0x552521(0x23e)](ImageManager[_0x552521(0x322)],0x0,0x0,_0x3e0011,_0x3bae28,_0x365fd0,_0xef9226,_0x3e0011,_0x3bae28);},Window_VictoryRewards[_0x49dd92(0x327)][_0x49dd92(0x211)]=function(){const _0x185d66=_0x49dd92;this[_0x185d66(0x30a)]();if(BattleManager[_0x185d66(0x2f0)][_0x185d66(0x210)]['length']<=0x0)return;const _0x52d89a=this[_0x185d66(0x339)](),_0x9a0ac=this[_0x185d66(0x1da)](),_0x2c783c=_0x52d89a?0x8c:Math[_0x185d66(0x347)](this[_0x185d66(0x2df)]/0x2+0x28),_0xf3a698=Math[_0x185d66(0x347)](_0x9a0ac*0x3),_0x4540b8=Math['round'](this['width']/0x2-0x8c),_0x4be37c=TextManager[_0x185d66(0x17e)],_0x5f3b0e=ColorManager[_0x185d66(0x257)]();this[_0x185d66(0x237)](),this[_0x185d66(0x296)](_0x4be37c,_0x2c783c,_0xf3a698,_0x4540b8,_0x185d66(0x1e8));const _0x463733=_0x52d89a?0x64:Math['round'](this[_0x185d66(0x2df)]/0x2),_0x2ef800=_0xf3a698+_0x9a0ac*1.5,_0x28907e=Math[_0x185d66(0x347)](this[_0x185d66(0x2df)]/0x2)-0x64;this[_0x185d66(0x1f9)][_0x185d66(0x25d)](_0x463733,_0x2ef800,_0x28907e,0x2,_0x5f3b0e);},Window_VictoryRewards[_0x49dd92(0x327)][_0x49dd92(0x249)]=function(){const _0x5d47c4=_0x49dd92,_0x1aaebe=this['mirrorContents'](),_0x55587d=this['lineHeight'](),_0x344ed7=_0x1aaebe?0x64:Math['round'](this[_0x5d47c4(0x2df)]/0x2+0x28),_0x4b408d=Math[_0x5d47c4(0x347)](_0x55587d*0x5),_0x1192c5=Math[_0x5d47c4(0x347)](this[_0x5d47c4(0x2df)]/0x2-0x8c),_0x27eb86=this[_0x5d47c4(0x22c)]-_0x4b408d-_0x55587d*0x2,_0x3bdfe2=new Rectangle(_0x344ed7,_0x4b408d,_0x1192c5,_0x27eb86);this[_0x5d47c4(0x2de)]=new Window_VictoryItem(_0x3bdfe2,this),this[_0x5d47c4(0x1d8)](this[_0x5d47c4(0x2de)]);},Window_VictoryRewards[_0x49dd92(0x327)][_0x49dd92(0x2af)]=function(){const _0x5adb1d=_0x49dd92;this[_0x5adb1d(0x30a)]();const _0x13272c=this[_0x5adb1d(0x339)](),_0x2f7d3e=this[_0x5adb1d(0x1da)](),_0x535907=$gameParty[_0x5adb1d(0x18b)](),_0x49a427=_0x13272c?Math[_0x5adb1d(0x347)](this[_0x5adb1d(0x2df)]/0x2+0x28):0x64,_0x17a9db=this[_0x5adb1d(0x22c)]-1.5-_0x2f7d3e*0x2*(_0x535907+0x1),_0x1ea7e1=Math[_0x5adb1d(0x347)](this[_0x5adb1d(0x2df)]/0x2-0x8c);let _0xeceff3=Math[_0x5adb1d(0x347)](_0x17a9db);if(VisuMZ[_0x5adb1d(0x289)]['Settings'][_0x5adb1d(0x295)][_0x5adb1d(0x353)]??!![])for(let _0x4436f8=0x0;_0x4436f8<_0x535907;_0x4436f8++){if(!$gameParty[_0x5adb1d(0x2a7)]()[_0x4436f8])continue;this[_0x5adb1d(0x19a)](_0x49a427,_0xeceff3,_0x1ea7e1),this[_0x5adb1d(0x24a)](_0x4436f8,_0x49a427,_0xeceff3,_0x1ea7e1),_0xeceff3+=_0x2f7d3e*0x2;}},Window_VictoryRewards[_0x49dd92(0x327)][_0x49dd92(0x19a)]=function(_0x2ed7de,_0x50c33f,_0x3c3691){const _0x11324b=_0x49dd92,_0x468ec8=this[_0x11324b(0x1da)]()-0x2,_0x2629c4=Math[_0x11324b(0x1f6)](_0x468ec8/0x2),_0x5ba7e3=_0x11324b(0x2f1),_0x2b9fd8=ColorManager[_0x11324b(0x1b4)](),_0x58c2ba=_0x3c3691-_0x468ec8;!ImageManager[_0x11324b(0x304)]&&(ImageManager[_0x11324b(0x304)]=new Bitmap(_0x3c3691,_0x468ec8),ImageManager[_0x11324b(0x304)][_0x11324b(0x17c)]=this['translucentOpacity'](),ImageManager[_0x11324b(0x304)][_0x11324b(0x2ed)](_0x2629c4,_0x2629c4,_0x2629c4,_0x5ba7e3),ImageManager[_0x11324b(0x304)][_0x11324b(0x2ed)](_0x2629c4+_0x58c2ba,_0x2629c4,_0x2629c4,_0x5ba7e3),ImageManager[_0x11324b(0x304)][_0x11324b(0x1ef)](_0x2629c4,0x0,_0x58c2ba,_0x468ec8),ImageManager[_0x11324b(0x304)][_0x11324b(0x25d)](_0x2629c4,0x0,_0x58c2ba,_0x468ec8,_0x5ba7e3)),this[_0x11324b(0x1f9)]['blt'](ImageManager[_0x11324b(0x304)],0x0,0x0,_0x3c3691,_0x468ec8,_0x2ed7de,_0x50c33f,_0x3c3691,_0x468ec8);},Window_VictoryRewards[_0x49dd92(0x327)][_0x49dd92(0x24a)]=function(_0x6f7882,_0xafb222,_0x2eb657,_0x440e0a){const _0x325b4c=_0x49dd92,_0x7c9fcc=_0x325b4c(0x22d)[_0x325b4c(0x1cc)](_0x6f7882),_0x4236ce=this[_0x325b4c(0x27e)](_0x7c9fcc,_0x6f7882,_0x440e0a);_0x4236ce['move'](_0xafb222,_0x2eb657),_0x4236ce[_0x325b4c(0x1d2)]();},Window_VictoryRewards[_0x49dd92(0x327)]['createGaugeSprite']=function(_0x4ec594,_0x57b147,_0x4642bb){const _0x48dd7d=_0x49dd92,_0x58fcc1=this[_0x48dd7d(0x323)];if(_0x58fcc1[_0x4ec594]){if(_0x48dd7d(0x2bb)===_0x48dd7d(0x355))_0x3a6a85=_0x5823bd[_0x48dd7d(0x1ba)](_0x36d694);else return _0x58fcc1[_0x4ec594];}else{if(_0x48dd7d(0x321)===_0x48dd7d(0x183))this[_0x48dd7d(0x2f6)](...arguments);else{const _0x1dcb02=new Sprite_VictoryGauge(_0x57b147,this,_0x4642bb);return _0x58fcc1[_0x4ec594]=_0x1dcb02,this[_0x48dd7d(0x31e)](_0x1dcb02),_0x1dcb02;}}};function Window_VictoryItem(){this['initialize'](...arguments);}Window_VictoryItem[_0x49dd92(0x327)]=Object['create'](Window_ItemList[_0x49dd92(0x327)]),Window_VictoryItem['prototype']['constructor']=Window_VictoryItem,Window_VictoryItem[_0x49dd92(0x327)][_0x49dd92(0x2f6)]=function(_0x5d8077,_0x2b9eb4){const _0xc6da19=_0x49dd92;this[_0xc6da19(0x23f)]=_0x2b9eb4,Window_ItemList['prototype'][_0xc6da19(0x2f6)][_0xc6da19(0x2f8)](this,_0x5d8077),this['setBackgroundType'](0x2),this[_0xc6da19(0x2fb)](),this['updateContentsOpacity'](),this[_0xc6da19(0x241)][_0xc6da19(0x22b)]>this[_0xc6da19(0x30e)]()&&(this['activate'](),this[_0xc6da19(0x2e7)](0x0));},Window_VictoryItem[_0x49dd92(0x327)][_0x49dd92(0x2f5)]=function(){const _0x9501bf=_0x49dd92;return Window_Base[_0x9501bf(0x327)][_0x9501bf(0x2f5)][_0x9501bf(0x2f8)](this);},Window_VictoryItem[_0x49dd92(0x327)]['updatePadding']=function(){const _0x2bb868=_0x49dd92;this[_0x2bb868(0x261)]=0x0;},Window_VictoryItem['prototype']['maxCols']=function(){return 0x1;},Window_VictoryItem[_0x49dd92(0x327)]['colSpacing']=function(){return 0x0;},Window_VictoryItem[_0x49dd92(0x327)][_0x49dd92(0x25c)]=function(){const _0x438880=_0x49dd92;Window_ItemList[_0x438880(0x327)]['update']['call'](this),this[_0x438880(0x34c)]();},Window_VictoryItem[_0x49dd92(0x327)][_0x49dd92(0x34c)]=function(){const _0x4c1db1=_0x49dd92;this[_0x4c1db1(0x352)]=this[_0x4c1db1(0x23f)][_0x4c1db1(0x352)];},Window_VictoryItem[_0x49dd92(0x327)]['makeItemList']=function(){const _0x5ce7d5=_0x49dd92,_0x19310e=BattleManager[_0x5ce7d5(0x2f0)][_0x5ce7d5(0x210)];_0x19310e[_0x5ce7d5(0x25e)]((_0x268339,_0x6918f4)=>_0x268339['id']-_0x6918f4['id']);const _0x25df4f=_0x19310e['filter'](_0x4e46ea=>DataManager[_0x5ce7d5(0x191)](_0x4e46ea)),_0x207ced=_0x19310e[_0x5ce7d5(0x29c)](_0x20ed31=>DataManager[_0x5ce7d5(0x209)](_0x20ed31)),_0x1db772=_0x19310e[_0x5ce7d5(0x29c)](_0x507022=>DataManager[_0x5ce7d5(0x1a4)](_0x507022));this[_0x5ce7d5(0x241)]=_0x25df4f['concat'](_0x207ced)['concat'](_0x1db772),this[_0x5ce7d5(0x241)]=this[_0x5ce7d5(0x241)][_0x5ce7d5(0x29c)]((_0x1736f0,_0x312558,_0x1970bd)=>_0x1970bd['indexOf'](_0x1736f0)===_0x312558);},Window_VictoryItem[_0x49dd92(0x327)]['isEnabled']=function(_0x2f84c7){return!![];},Window_VictoryItem[_0x49dd92(0x327)][_0x49dd92(0x2be)]=function(){return![];},Window_VictoryItem[_0x49dd92(0x327)][_0x49dd92(0x23d)]=function(_0x3f6193){const _0x4af40e=_0x49dd92;return BattleManager[_0x4af40e(0x2f0)][_0x4af40e(0x210)][_0x4af40e(0x29c)](_0x31ecf9=>_0x31ecf9===_0x3f6193)[_0x4af40e(0x22b)];},Window_VictoryItem['prototype'][_0x49dd92(0x2db)]=function(_0x3b5eac){},Window_VictoryItem['prototype'][_0x49dd92(0x2f3)]=function(_0x2b8597,_0x30599f,_0x27d04f,_0x4e4c44){const _0x320afb=_0x49dd92;let _0x408e98='x%1';Imported[_0x320afb(0x30c)]&&(_0x320afb(0x275)!==_0x320afb(0x268)?_0x408e98=VisuMZ[_0x320afb(0x259)][_0x320afb(0x2ff)][_0x320afb(0x354)][_0x320afb(0x253)]:_0x5e998c=_0x29443d[_0x320afb(0x1ee)](_0x336884,_0x266234[_0x320afb(0x331)][_0x320afb(0x2ff)][_0x320afb(0x295)]['MessageWidth']));let _0x4a05df=_0x408e98[_0x320afb(0x1cc)](this[_0x320afb(0x23d)](_0x2b8597));this[_0x320afb(0x296)](_0x4a05df,_0x30599f,_0x27d04f,_0x4e4c44,_0x320afb(0x27b));};function Window_VictoryLevelUp(){const _0x2334a0=_0x49dd92;this[_0x2334a0(0x2f6)](...arguments);}Window_VictoryLevelUp[_0x49dd92(0x310)]=Window_VictoryRewards['_opacitySpeed'],Window_VictoryLevelUp[_0x49dd92(0x2e1)]=VisuMZ[_0x49dd92(0x289)][_0x49dd92(0x2ff)]['LevelUp'][_0x49dd92(0x180)],Window_VictoryLevelUp[_0x49dd92(0x327)]=Object[_0x49dd92(0x21f)](Window_StatusBase[_0x49dd92(0x327)]),Window_VictoryLevelUp[_0x49dd92(0x327)][_0x49dd92(0x19d)]=Window_VictoryLevelUp,Window_VictoryLevelUp[_0x49dd92(0x327)]['initialize']=function(_0x3c5fe7){const _0x55bda4=_0x49dd92;Window_StatusBase[_0x55bda4(0x327)][_0x55bda4(0x2f6)][_0x55bda4(0x2f8)](this,_0x3c5fe7),this[_0x55bda4(0x2d9)](0x2),this[_0x55bda4(0x352)]=0x0,this[_0x55bda4(0x2fb)](),this[_0x55bda4(0x20c)](),this[_0x55bda4(0x31d)]();},Window_VictoryLevelUp['prototype']['updatePadding']=function(){const _0x1b557c=_0x49dd92;this[_0x1b557c(0x261)]=0x0;},Window_VictoryLevelUp[_0x49dd92(0x327)]['update']=function(){const _0x28d00f=_0x49dd92;Window_StatusBase[_0x28d00f(0x327)][_0x28d00f(0x25c)][_0x28d00f(0x2f8)](this),this[_0x28d00f(0x34c)]();},Window_VictoryLevelUp[_0x49dd92(0x327)][_0x49dd92(0x34c)]=function(){const _0x1de8b1=_0x49dd92;if(SceneManager['_scene'][_0x1de8b1(0x1fa)]===_0x1de8b1(0x284)){if(_0x1de8b1(0x1be)!==_0x1de8b1(0x272))this[_0x1de8b1(0x352)]+=Window_VictoryLevelUp[_0x1de8b1(0x310)];else{if(this['_victoryAftermathLevelUpQuotes']===_0x4eb573)this[_0x1de8b1(0x2d3)]();return this[_0x1de8b1(0x264)];}}else this['contentsOpacity']-=Window_VictoryLevelUp[_0x1de8b1(0x310)];this[_0x1de8b1(0x203)]&&(this['_actorSprite'][_0x1de8b1(0x26e)]=this[_0x1de8b1(0x352)]);},Window_VictoryLevelUp['prototype'][_0x49dd92(0x2fb)]=function(){const _0x1600be=_0x49dd92;Window_StatusBase[_0x1600be(0x327)][_0x1600be(0x2fb)][_0x1600be(0x2f8)](this),this[_0x1600be(0x1f9)][_0x1600be(0x208)](),this[_0x1600be(0x30a)](),this[_0x1600be(0x318)]();},Window_VictoryLevelUp[_0x49dd92(0x327)][_0x49dd92(0x318)]=function(){const _0x1df92c=_0x49dd92,_0x54c37e=this['lineHeight'](),_0x41d0eb='rgba(0,\x200,\x200,\x200.8)',_0x420f3f=_0x1df92c(0x2c0),_0x44951b=ColorManager['normalColor'](),_0x1fe6d5=SceneManager[_0x1df92c(0x26d)][_0x1df92c(0x2bd)]['x'],_0x29770c=Math[_0x1df92c(0x347)](this[_0x1df92c(0x2df)]/0x2);this['contents'][_0x1df92c(0x2da)](_0x1fe6d5,0x0,_0x29770c,this[_0x1df92c(0x22c)],_0x420f3f,_0x41d0eb,!![]),this[_0x1df92c(0x1f9)][_0x1df92c(0x25d)](_0x1fe6d5-0x1,0x0,0x2,this[_0x1df92c(0x22c)],_0x44951b),this['contents'][_0x1df92c(0x25d)](_0x1fe6d5+_0x29770c-0x1,0x0,0x2,this[_0x1df92c(0x22c)],_0x44951b);const _0x3e0585=_0x54c37e,_0x447494=_0x54c37e*0x1;this[_0x1df92c(0x1f9)][_0x1df92c(0x2da)](0x0,_0x3e0585,this['width'],_0x447494,_0x41d0eb,_0x420f3f),this['contents'][_0x1df92c(0x25d)](0x0,_0x3e0585-0x1,this[_0x1df92c(0x2df)],0x2,_0x44951b),this[_0x1df92c(0x1f9)][_0x1df92c(0x25d)](0x0,_0x3e0585+_0x447494-0x1,this[_0x1df92c(0x2df)],0x2,_0x44951b);const _0x534ef1=this[_0x1df92c(0x22c)]-_0x54c37e*5.5,_0x39e495=_0x54c37e*0x4;this[_0x1df92c(0x1f9)][_0x1df92c(0x2da)](0x0,_0x534ef1,this[_0x1df92c(0x2df)],_0x39e495,_0x41d0eb,_0x420f3f),this[_0x1df92c(0x1f9)][_0x1df92c(0x2da)](0x0,_0x534ef1,this['width'],_0x39e495,_0x420f3f,_0x41d0eb),this[_0x1df92c(0x1f9)][_0x1df92c(0x25d)](0x0,_0x534ef1-0x2,this[_0x1df92c(0x2df)],0x2,_0x44951b),this[_0x1df92c(0x1f9)][_0x1df92c(0x25d)](0x0,_0x534ef1+_0x39e495,this['width'],0x2,_0x44951b);},Window_VictoryLevelUp[_0x49dd92(0x327)]['createActorSprite']=function(){const _0x12637a=_0x49dd92,_0x47d23e=VisuMZ[_0x12637a(0x289)][_0x12637a(0x2ff)]['LevelUp'];this[_0x12637a(0x203)]=new Sprite(),this[_0x12637a(0x203)]['anchor']['x']=0.5,this[_0x12637a(0x203)][_0x12637a(0x224)]['y']=0x1,this['_actorSprite'][_0x12637a(0x26e)]=0x0,this[_0x12637a(0x203)]['x']=Math['round'](eval(_0x47d23e[_0x12637a(0x26b)])),this[_0x12637a(0x203)]['y']=Math['round'](eval(_0x47d23e[_0x12637a(0x2d8)])),this[_0x12637a(0x203)][_0x12637a(0x1b2)]['x']=_0x47d23e[_0x12637a(0x265)],this['_actorSprite']['scale']['y']=_0x47d23e[_0x12637a(0x265)],this[_0x12637a(0x276)](this[_0x12637a(0x203)]);},Window_VictoryLevelUp[_0x49dd92(0x327)]['createSubWindow']=function(){const _0x4e4582=_0x49dd92,_0x26b8b5=new Rectangle(0x0,0x0,this['width'],this['height']);this[_0x4e4582(0x21c)]=new Window_VictoryLevelUpActor(_0x26b8b5,this),this[_0x4e4582(0x1d8)](this[_0x4e4582(0x21c)]);},Window_VictoryLevelUp[_0x49dd92(0x327)]['setActor']=function(_0x3aff71){const _0x40aa0e=_0x49dd92;Imported[_0x40aa0e(0x29a)]&&Window_VictoryLevelUp['_showBust']&&(this[_0x40aa0e(0x203)]['bitmap']=ImageManager[_0x40aa0e(0x288)](_0x3aff71['getMenuImage']())),SoundManager[_0x40aa0e(0x311)](),this['_subWindow']['setActor'](_0x3aff71);};function Window_VictoryLevelUpActor(){const _0x5265d5=_0x49dd92;this[_0x5265d5(0x2f6)](...arguments);}Window_VictoryLevelUpActor[_0x49dd92(0x310)]=Window_VictoryRewards[_0x49dd92(0x310)],Window_VictoryLevelUpActor[_0x49dd92(0x34e)]=VisuMZ['VictoryAftermath'][_0x49dd92(0x2ff)][_0x49dd92(0x33c)][_0x49dd92(0x33b)],Window_VictoryLevelUpActor[_0x49dd92(0x32f)]=VisuMZ[_0x49dd92(0x289)][_0x49dd92(0x2ff)][_0x49dd92(0x33c)][_0x49dd92(0x333)],Window_VictoryLevelUpActor[_0x49dd92(0x327)]=Object[_0x49dd92(0x21f)](Window_StatusBase[_0x49dd92(0x327)]),Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x19d)]=Window_VictoryLevelUpActor,Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x2f6)]=function(_0x26c613,_0x586a1a){const _0x59a340=_0x49dd92;this[_0x59a340(0x23f)]=_0x586a1a,Window_StatusBase[_0x59a340(0x327)]['initialize']['call'](this,_0x26c613),this[_0x59a340(0x2d9)](0x2),this[_0x59a340(0x352)]=0x0,this[_0x59a340(0x19f)]=null,this[_0x59a340(0x2fb)]();},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x205)]=function(){const _0x5ad2e1=_0x49dd92;this[_0x5ad2e1(0x261)]=0x0;},Window_VictoryLevelUpActor[_0x49dd92(0x327)]['update']=function(){const _0x1c720a=_0x49dd92;Window_StatusBase['prototype']['update']['call'](this),this[_0x1c720a(0x34c)]();},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x34c)]=function(){const _0x43e1f2=_0x49dd92;this['contentsOpacity']=this[_0x43e1f2(0x23f)]['contentsOpacity'];},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x329)]=function(_0x2154d4){const _0x2ed887=_0x49dd92;this[_0x2ed887(0x19f)]=_0x2154d4,this[_0x2ed887(0x2fb)]();},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x285)]=function(){const _0x443261=_0x49dd92,_0x467525=this[_0x443261(0x19f)]['index']();return BattleManager[_0x443261(0x32e)][_0x467525];},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x1cb)]=function(){const _0x84aa5c=_0x49dd92,_0x356301=this[_0x84aa5c(0x19f)]['index']();return BattleManager[_0x84aa5c(0x33e)][_0x356301];},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x2fb)]=function(){const _0x18f08d=_0x49dd92;Window_StatusBase[_0x18f08d(0x327)][_0x18f08d(0x2fb)][_0x18f08d(0x2f8)](this),this[_0x18f08d(0x1f9)][_0x18f08d(0x208)](),this['resetFontSettings']();if(!this['_actor'])return;this[_0x18f08d(0x1f0)](),this[_0x18f08d(0x1d3)](),this[_0x18f08d(0x255)](),this[_0x18f08d(0x29e)]();},Window_VictoryLevelUpActor[_0x49dd92(0x327)]['drawLevelMessage']=function(){const _0x21a4dc=_0x49dd92,_0x255f2a=this[_0x21a4dc(0x1da)](),_0x1447f7=TextManager[_0x21a4dc(0x271)]['format'](this[_0x21a4dc(0x19f)][_0x21a4dc(0x28f)](),TextManager[_0x21a4dc(0x302)],this[_0x21a4dc(0x19f)][_0x21a4dc(0x302)]),_0x17d944=this['textSizeEx'](_0x1447f7)['width'],_0x84779f=SceneManager[_0x21a4dc(0x26d)]['_victoryContinueWindow']['x']+Math[_0x21a4dc(0x347)]((this[_0x21a4dc(0x2df)]/0x2-_0x17d944)/0x2),_0x35170b=_0x255f2a;this[_0x21a4dc(0x1d6)](_0x1447f7,_0x84779f,_0x35170b,_0x17d944);},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x2fd)]=function(_0x572a65,_0x4825d7,_0xa56822,_0x177ad3,_0x719c){const _0x26d2e5=_0x49dd92;if(VisuMZ['VictoryAftermath']['Settings']['LevelUp']['DrawBackRect']===![])return;_0x719c=Math[_0x26d2e5(0x1af)](_0x719c||0x1,0x1);while(_0x719c--){_0x177ad3=_0x177ad3||this['lineHeight'](),this['contents']['paintOpacity']=0xa0;const _0xfb090f=ColorManager['getVictoryAftermathBackColor']();this[_0x26d2e5(0x1f9)]['fillRect'](_0x572a65+0x1,_0x4825d7+0x1,_0xa56822-0x2,_0x177ad3-0x2,_0xfb090f),this[_0x26d2e5(0x1f9)]['paintOpacity']=0xff;}},ColorManager[_0x49dd92(0x31a)]=function(){const _0xaaa695=_0x49dd92,_0x507ae3=VisuMZ[_0xaaa695(0x289)][_0xaaa695(0x2ff)]['LevelUp'];let _0x37749e=_0x507ae3[_0xaaa695(0x1a0)]!==undefined?_0x507ae3[_0xaaa695(0x1a0)]:0x13;return ColorManager[_0xaaa695(0x2c5)](_0x37749e);},Window_VictoryLevelUpActor['prototype'][_0x49dd92(0x1d3)]=function(){const _0xcff03b=_0x49dd92,_0x5ead67=this[_0xcff03b(0x1da)](),_0x3d4f65='→',_0x8a1326=this['actorParams'](),_0x4c1e11=_0x5ead67*0x2,_0x3aab58=this[_0xcff03b(0x22c)]-_0x5ead67*5.5,_0x566b9c=this[_0xcff03b(0x356)](_0x3d4f65)+this['itemPadding']()*0x2,_0xa1180d=Window_VictoryLevelUpActor[_0xcff03b(0x34e)]?0x4:0x3,_0x4cb51d=Math[_0xcff03b(0x347)]((this[_0xcff03b(0x2df)]/0x2-_0x566b9c-this[_0xcff03b(0x1f2)]()*0x2)/_0xa1180d),_0x4141d2=_0x3aab58-_0x4c1e11,_0x45df35=VisuMZ[_0xcff03b(0x289)]['Settings'][_0xcff03b(0x33c)][_0xcff03b(0x35b)],_0x312629=SceneManager[_0xcff03b(0x26d)][_0xcff03b(0x2bd)]['x']+this[_0xcff03b(0x1f2)](),_0x63eb27=_0x312629+_0x4cb51d,_0x11d7bc=_0x63eb27+_0x4cb51d,_0x5a1972=_0x11d7bc+_0x566b9c,_0x59c858=_0x5a1972+_0x4cb51d;let _0x29b554=Math[_0xcff03b(0x347)](_0x4c1e11+(_0x4141d2-(_0x8a1326['length']+(_0x45df35?0x0:0x1))*_0x5ead67)/0x2),_0x56b380=0x2;!_0x45df35&&(this[_0xcff03b(0x30a)](),VisuMZ[_0xcff03b(0x259)]&&(this['contents'][_0xcff03b(0x2a9)]=Window_EquipStatus[_0xcff03b(0x327)][_0xcff03b(0x35c)]()),this[_0xcff03b(0x2fd)](_0x312629,_0x29b554,_0x4cb51d,_0x5ead67,_0x56b380),this[_0xcff03b(0x182)](_0xcff03b(0x302),_0x312629,_0x29b554,_0x4cb51d),this[_0xcff03b(0x2fd)](_0x63eb27,_0x29b554,_0x4cb51d,_0x5ead67,_0x56b380),this[_0xcff03b(0x197)]('level',_0x63eb27,_0x29b554,_0x4cb51d),this['drawItemDarkRect'](_0x11d7bc,_0x29b554,_0x566b9c,_0x5ead67,_0x56b380),this[_0xcff03b(0x35d)](ColorManager[_0xcff03b(0x324)]()),this[_0xcff03b(0x296)](_0x3d4f65,_0x11d7bc,_0x29b554,_0x566b9c,'center'),this['drawItemDarkRect'](_0x5a1972,_0x29b554,_0x4cb51d,_0x5ead67,_0x56b380),this[_0xcff03b(0x267)](_0xcff03b(0x302),_0x5a1972,_0x29b554,_0x4cb51d),Window_VictoryLevelUpActor[_0xcff03b(0x34e)]&&(this[_0xcff03b(0x2fd)](_0x59c858,_0x29b554,_0x4cb51d,_0x5ead67,_0x56b380),this[_0xcff03b(0x1f1)]('level',_0x59c858,_0x29b554,_0x4cb51d)),_0x29b554+=_0x5ead67,_0x56b380=_0x56b380===0x2?0x1:0x2);for(const _0x39b731 of _0x8a1326){this[_0xcff03b(0x30a)]();VisuMZ[_0xcff03b(0x259)]&&(_0xcff03b(0x281)==='kbFwV'?this[_0xcff03b(0x296)](_0x3c93bb,_0x4a204e+_0x341fc3,_0x2cfdef,_0x4a7cb0,_0xcff03b(0x27b)):this['contents'][_0xcff03b(0x2a9)]=Window_EquipStatus['prototype']['paramValueFontSize']());this['drawItemDarkRect'](_0x312629,_0x29b554,_0x4cb51d,_0x5ead67,_0x56b380),this[_0xcff03b(0x182)](_0x39b731,_0x312629,_0x29b554,_0x4cb51d),this[_0xcff03b(0x2fd)](_0x63eb27,_0x29b554,_0x4cb51d,_0x5ead67,_0x56b380),this[_0xcff03b(0x197)](_0x39b731,_0x63eb27,_0x29b554,_0x4cb51d),this[_0xcff03b(0x2fd)](_0x11d7bc,_0x29b554,_0x566b9c,_0x5ead67,_0x56b380),this[_0xcff03b(0x35d)](ColorManager['systemColor']()),this[_0xcff03b(0x296)](_0x3d4f65,_0x11d7bc,_0x29b554,_0x566b9c,_0xcff03b(0x309)),this[_0xcff03b(0x2fd)](_0x5a1972,_0x29b554,_0x4cb51d,_0x5ead67,_0x56b380),this[_0xcff03b(0x267)](_0x39b731,_0x5a1972,_0x29b554,_0x4cb51d);if(Window_VictoryLevelUpActor[_0xcff03b(0x34e)]){if(_0xcff03b(0x1b1)!==_0xcff03b(0x1b1)){const _0x1fd81d=this[_0xcff03b(0x285)]()[_0xcff03b(0x2c7)]();return this[_0xcff03b(0x19f)][_0xcff03b(0x1d9)](_0x1fd81d);}else this[_0xcff03b(0x2fd)](_0x59c858,_0x29b554,_0x4cb51d,_0x5ead67,_0x56b380),this[_0xcff03b(0x1f1)](_0x39b731,_0x59c858,_0x29b554,_0x4cb51d);}_0x29b554+=_0x5ead67,_0x56b380=_0x56b380===0x2?0x1:0x2;}},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x1ca)]=function(){const _0x28ce07=_0x49dd92;if(Imported[_0x28ce07(0x229)]){if('XjkPp'==='ozJyP')_0x26f311[_0x28ce07(0x288)](_0x4a7870[_0x28ce07(0x2c9)]());else return VisuMZ[_0x28ce07(0x34a)][_0x28ce07(0x2ff)][_0x28ce07(0x28e)][_0x28ce07(0x187)];}else{if('xVzGj'!==_0x28ce07(0x2b7))return[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];else this[_0x28ce07(0x261)]=0x0;}},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x182)]=function(_0x2f8539,_0x294c5a,_0xcd2519,_0x588046){const _0x27725c=_0x49dd92;this[_0x27725c(0x35d)](ColorManager[_0x27725c(0x324)]());let _0x2f58b1='';_0x2f8539===_0x27725c(0x302)?_0x2f58b1=TextManager[_0x27725c(0x302)]:'IKhAs'!==_0x27725c(0x1a5)?(this['_victoryTempActorsA']=_0x1c6dd0[_0x27725c(0x1ad)]()[_0x27725c(0x315)](_0x213e97=>_0x213e97[_0x27725c(0x338)]()),this[_0x27725c(0x32e)]=_0x1731cd[_0x27725c(0x1d4)](this['_victoryTempActorsA'])):_0x2f58b1=TextManager['param'](_0x2f8539),this[_0x27725c(0x296)](_0x2f58b1,_0x294c5a+this[_0x27725c(0x1f2)](),_0xcd2519,_0x588046-this[_0x27725c(0x1f2)]()*0x2);},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x197)]=function(_0x34b6d9,_0x416eb5,_0x57e4e2,_0x30ae95){const _0x1c4d77=_0x49dd92,_0x39221c=this[_0x1c4d77(0x285)]();let _0x2b6a0c='';_0x34b6d9===_0x1c4d77(0x302)?_0x2b6a0c=_0x39221c[_0x1c4d77(0x302)]:_0x2b6a0c=Imported[_0x1c4d77(0x229)]?_0x39221c['paramValueByName'](_0x34b6d9,!![]):_0x39221c[_0x1c4d77(0x1ba)](_0x34b6d9),this[_0x1c4d77(0x35d)](ColorManager['normalColor']()),this[_0x1c4d77(0x296)](_0x2b6a0c,_0x416eb5+this[_0x1c4d77(0x1f2)](),_0x57e4e2,_0x30ae95-this[_0x1c4d77(0x1f2)]()*0x2,_0x1c4d77(0x27b));},Window_VictoryLevelUpActor[_0x49dd92(0x327)]['drawParamAfterValue']=function(_0x7ac882,_0x2e501d,_0x5300d0,_0x20abec){const _0x32b7fa=_0x49dd92,_0x84d57e=this[_0x32b7fa(0x285)](),_0x7470df=this[_0x32b7fa(0x19f)];let _0x2d4e5e=0x0,_0x153690=0x0,_0x37bf7b='0';_0x7ac882===_0x32b7fa(0x302)?(_0x2d4e5e=_0x84d57e[_0x32b7fa(0x302)],_0x153690=_0x7470df[_0x32b7fa(0x302)],_0x37bf7b=_0x153690):_0x32b7fa(0x316)!=='IUOcs'?(_0x413cfc=_0x790cc4[_0x32b7fa(0x1b6)](_0x23b4b7),_0x139409=_0x14c5ce[_0x32b7fa(0x1b6)](_0x340f5f)):(_0x2d4e5e=Imported[_0x32b7fa(0x229)]?_0x84d57e['paramValueByName'](_0x7ac882,![]):_0x84d57e[_0x32b7fa(0x1ba)](_0x7ac882),_0x153690=Imported[_0x32b7fa(0x229)]?_0x7470df['paramValueByName'](_0x7ac882,![]):_0x7470df[_0x32b7fa(0x1ba)](_0x7ac882),_0x37bf7b=Imported[_0x32b7fa(0x229)]?_0x7470df[_0x32b7fa(0x24d)](_0x7ac882,!![]):_0x153690);const _0x324ca6=_0x153690-_0x2d4e5e;this[_0x32b7fa(0x35d)](ColorManager[_0x32b7fa(0x230)](_0x324ca6)),this[_0x32b7fa(0x296)](_0x37bf7b,_0x2e501d+this[_0x32b7fa(0x1f2)](),_0x5300d0,_0x20abec-this[_0x32b7fa(0x1f2)]()*0x2,'right');},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x1f1)]=function(_0x2c0d22,_0x294dca,_0x3cb03a,_0x29c8c2){const _0x494795=_0x49dd92,_0xc2443c=this['beforeActor'](),_0x3ac03b=this[_0x494795(0x19f)];let _0x4b30bf=0x0,_0x79c53b=0x0;if(_0x2c0d22===_0x494795(0x302)){if(_0x494795(0x223)==='DPylD'){const _0x3b07d1=_0x1db32c['nextVictoryLevelUpActor']();this[_0x494795(0x1c1)][_0x494795(0x329)](_0x3b07d1),_0xf0071f[_0x494795(0x1b9)]&&_0x3b07d1[_0x494795(0x2ee)](_0x494795(0x2e9));}else _0x4b30bf=_0xc2443c[_0x494795(0x302)],_0x79c53b=_0x3ac03b['level'];}else _0x4b30bf=Imported[_0x494795(0x229)]?_0xc2443c[_0x494795(0x24d)](_0x2c0d22,![]):_0xc2443c[_0x494795(0x1ba)](_0x2c0d22),_0x79c53b=Imported['VisuMZ_0_CoreEngine']?_0x3ac03b['paramValueByName'](_0x2c0d22,![]):_0x3ac03b[_0x494795(0x1ba)](_0x2c0d22);const _0x19d3e0=_0x79c53b-_0x4b30bf;let _0x5548d=_0x19d3e0;if(_0x4b30bf%0x1!==0x0)_0x5548d=Math[_0x494795(0x347)](_0x19d3e0*0x64)+'%';_0x19d3e0!==0x0&&(this[_0x494795(0x35d)](ColorManager[_0x494795(0x230)](_0x19d3e0)),_0x5548d=(_0x19d3e0>=0x0?_0x494795(0x254):_0x494795(0x2a1))[_0x494795(0x1cc)](_0x5548d),this[_0x494795(0x296)](_0x5548d,_0x294dca+this['itemPadding'](),_0x3cb03a,_0x29c8c2-this['itemPadding']()*0x2,'left'));},Window_VictoryLevelUpActor['prototype'][_0x49dd92(0x255)]=function(){const _0x5ae5d3=_0x49dd92;this[_0x5ae5d3(0x30a)]();const _0x3e1fe4=this[_0x5ae5d3(0x1d9)]();if(_0x3e1fe4[_0x5ae5d3(0x22b)]<=0x0)return;const _0x4fcfa9=VisuMZ[_0x5ae5d3(0x289)][_0x5ae5d3(0x2ff)][_0x5ae5d3(0x33c)][_0x5ae5d3(0x2ba)];while(_0x3e1fe4[_0x5ae5d3(0x22b)]>_0x4fcfa9){if(_0x5ae5d3(0x2fa)===_0x5ae5d3(0x189))return _0x5ae5d3(0x1f3)['format'](_0x1b2085(_0x39f6a0['$1']));else _0x3e1fe4['pop']();}this['drawNewLearnedSkillsBackground'](_0x3e1fe4),this['drawNewLearnedSkillsList'](_0x3e1fe4);},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x1d9)]=function(){const _0x3c1210=_0x49dd92,_0x2ab223=this['beforeActor']()['skills']();return this['_actor'][_0x3c1210(0x1d9)](_0x2ab223);},Window_VictoryLevelUpActor['prototype'][_0x49dd92(0x246)]=function(_0x407cf4){const _0x444780=_0x49dd92,_0x38e12c=this[_0x444780(0x1da)](),_0x43fe06='rgba(0,\x200,\x200,\x200.8)',_0x271bfa=_0x444780(0x2c0),_0x438e88=ColorManager[_0x444780(0x257)](),_0x58b271=Math[_0x444780(0x347)](this[_0x444780(0x2df)]/0x2)-0x64-_0x38e12c*0x2,_0x42f5e6=(_0x407cf4[_0x444780(0x22b)]+0x1)*_0x38e12c,_0x33ee95=_0x38e12c,_0x27f478=this[_0x444780(0x22c)]-_0x38e12c*6.5-_0x42f5e6;this[_0x444780(0x1f9)][_0x444780(0x25d)](_0x33ee95-0x2,_0x27f478-0x2,_0x58b271+0x4,_0x42f5e6+0x4,_0x438e88),this[_0x444780(0x1f9)][_0x444780(0x1ef)](_0x33ee95,_0x27f478,_0x58b271,_0x42f5e6),this[_0x444780(0x1f9)][_0x444780(0x2da)](_0x33ee95,_0x27f478,_0x58b271,_0x42f5e6,_0x43fe06,_0x271bfa);},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x2d4)]=function(_0x41755e){const _0x35be58=_0x49dd92,_0x134218=this[_0x35be58(0x1da)](),_0x18f8dc=_0x35be58(0x17f),_0x4031d6=_0x35be58(0x2c0),_0x4af2b4=ColorManager[_0x35be58(0x257)](),_0x28cd16=Math[_0x35be58(0x347)](this['width']/0x2)-0x64-(_0x134218+this[_0x35be58(0x1f2)]())*0x2,_0x171a79=(_0x41755e[_0x35be58(0x22b)]+0x1)*_0x134218;let _0x77584c=_0x134218+this[_0x35be58(0x1f2)](),_0x3a81d3=this[_0x35be58(0x22c)]-_0x134218*6.5-_0x171a79;const _0xc40599=TextManager[_0x35be58(0x2b0)][_0x35be58(0x1cc)](this['_actor'][_0x35be58(0x28f)]()),_0x1f8409=this[_0x35be58(0x332)](_0xc40599)[_0x35be58(0x2df)],_0x26bca6=Math[_0x35be58(0x347)](_0x77584c+(_0x28cd16-_0x1f8409)/0x2);this['drawTextEx'](_0xc40599,_0x26bca6,_0x3a81d3,_0x1f8409),_0x3a81d3+=_0x134218,this[_0x35be58(0x1f9)][_0x35be58(0x25d)](_0x77584c,_0x3a81d3-0x1,_0x28cd16,0x2,_0x4af2b4);for(const _0x16fcc5 of _0x41755e){if(!_0x16fcc5)continue;this['resetFontSettings'](),this[_0x35be58(0x190)](_0x16fcc5,_0x77584c+this[_0x35be58(0x1f2)](),_0x3a81d3,_0x28cd16-this[_0x35be58(0x1f2)]()*0x2),_0x3a81d3+=_0x134218;}},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x29e)]=function(){const _0x5e08ca=_0x49dd92,_0x25891b=this[_0x5e08ca(0x1da)](),_0x21231f=Window_VictoryLevelUpActor[_0x5e08ca(0x32f)],_0x2e4c33=this['getQuoteWidth'](),_0x4a5a6f=_0x25891b*0x4,_0x3bd3f5=Math[_0x5e08ca(0x347)]((this['width']-_0x2e4c33)/0x2),_0x4eea37=_0x3bd3f5+(_0x21231f?ImageManager[_0x5e08ca(0x1bf)]+0x14:0x0),_0x4eaa43=this[_0x5e08ca(0x22c)]-_0x25891b*5.5;let _0x5a35e2=this[_0x5e08ca(0x201)]();if(_0x21231f){if(_0x5e08ca(0x357)!=='UBtps'){const _0xe8bb28=this[_0x5e08ca(0x285)](),_0x2cc3b6=this[_0x5e08ca(0x19f)];let _0x58c505=0x0,_0xad4829=0x0,_0x5722b0='0';_0x12b9d8===_0x5e08ca(0x302)?(_0x58c505=_0xe8bb28['level'],_0xad4829=_0x2cc3b6[_0x5e08ca(0x302)],_0x5722b0=_0xad4829):(_0x58c505=_0x229f7e['VisuMZ_0_CoreEngine']?_0xe8bb28[_0x5e08ca(0x24d)](_0x122a37,![]):_0xe8bb28[_0x5e08ca(0x1ba)](_0x2c6d59),_0xad4829=_0x377858[_0x5e08ca(0x229)]?_0x2cc3b6[_0x5e08ca(0x24d)](_0x41e3f6,![]):_0x2cc3b6[_0x5e08ca(0x1ba)](_0x4e0946),_0x5722b0=_0x389678['VisuMZ_0_CoreEngine']?_0x2cc3b6[_0x5e08ca(0x24d)](_0x16b052,!![]):_0xad4829);const _0x494a42=_0xad4829-_0x58c505;this[_0x5e08ca(0x35d)](_0x1cad63['paramchangeTextColor'](_0x494a42)),this[_0x5e08ca(0x296)](_0x5722b0,_0x3e09ef+this['itemPadding'](),_0x21bcac,_0x3829ec-this[_0x5e08ca(0x1f2)]()*0x2,_0x5e08ca(0x27b));}else this[_0x5e08ca(0x346)](this[_0x5e08ca(0x19f)],_0x3bd3f5,_0x4eaa43,ImageManager[_0x5e08ca(0x1bf)],ImageManager[_0x5e08ca(0x18d)]);}this[_0x5e08ca(0x1d6)](_0x5a35e2,_0x4eea37,_0x4eaa43,_0x2e4c33-_0x4eea37);},Window_VictoryLevelUpActor[_0x49dd92(0x327)]['getQuoteWidth']=function(){const _0x3a5049=_0x49dd92;let _0x1daf95=Graphics[_0x3a5049(0x1b7)];return Imported[_0x3a5049(0x1fc)]&&(_0x1daf95=Math[_0x3a5049(0x1ee)](_0x1daf95,VisuMZ[_0x3a5049(0x331)]['Settings']['General']['MessageWidth'])),_0x1daf95-this[_0x3a5049(0x1f2)]()*0x2;},Window_VictoryLevelUpActor[_0x49dd92(0x327)][_0x49dd92(0x201)]=function(){const _0x20e33b=_0x49dd92;return this[_0x20e33b(0x1d9)]()[_0x20e33b(0x22b)]>0x0?TextManager[_0x20e33b(0x326)](this[_0x20e33b(0x19f)])[_0x20e33b(0x1cc)](this['_actor'][_0x20e33b(0x28f)]()):TextManager[_0x20e33b(0x238)](this[_0x20e33b(0x19f)])[_0x20e33b(0x1cc)](this[_0x20e33b(0x19f)]['name']());};