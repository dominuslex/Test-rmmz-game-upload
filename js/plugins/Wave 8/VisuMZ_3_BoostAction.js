//=============================================================================
// VisuStella MZ - Boost Action
// VisuMZ_3_BoostAction.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_BoostAction = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BoostAction = VisuMZ.BoostAction || {};
VisuMZ.BoostAction.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.07] [BoostAction]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Boost_Action_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_MessageCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds Boost Points, a mechanic which augments the potency of
 * skills and/or items based on the type of notetag they have. The newly added
 * mechanic allows actors and/or enemies to temporarily power themselves up for
 * the current turn by using the Boost Points resource. Boost Points are gained
 * at the end of each turn if the battler did not use any Boost Points. While
 * Boosted, actions can deal more damage, hit more times, make buffs/debuffs or
 * states last longer, and more!
 *
 * Features include all (but not limited to) the following:
 * 
 * * Add a new battle resource to your game: Boost Points!
 * * Determine how many Boost Points can be stored at a time!
 * * Also determine how many Boost Points can be used at a time!
 * * Determine how Boosting affects skills and items through the different
 *   kinds of notetags provided through this plug.
 * * Enemies can Boost, too! As long as the proper notetags are in place!
 * * Utilize Shortcut Keys to quickly Boost skills and/or items.
 * * Boosting skills and/or items can also affect the text displayed in the
 *   Help Window, too!
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
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_SkillsStatesCore
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
 * VisuMZ_3_WeaknessDisplay
 *
 * The "Analyze" ability in the VisuStella MZ Weakness Display can be Boosted
 * through this plugin and reveal multiple weaknesses at a time.
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
 * VisuMZ_1_BattleCore
 * 
 * When using Action Sequences, Boost effects for damage, turn extensions,
 * analyze, etc. will not occur for anything other than the Action Sequence:
 * "MECH: Action Effect" in order to maintain controlled effects. However, if
 * you do want to apply bonuses for Boosts, utilize "MECH: Boost Store Data" to
 * store inside a variable how many times Boosts were used. This can be used
 * however which way you want it to as long as it is manageable through events
 * and Common Events.
 * 
 * ---
 *
 * VisuMZ_2_BattleSystemBTB
 * 
 * The Boost Actions plugin cannot be used together with Battle System - BTB.
 * If the Battle System is switched to using Battle System - BTB, then the
 * Boost Actions plugin will shut itself off.
 * 
 * The reason why these plugins cannot work together is because their mechanics
 * play off too similarly to each other and cause conflicts. We, the plugin
 * developer team, highly recommend that you utilize Battle System - BTB's
 * Brave system instead of the Boost system to make the best use of the battle
 * system in effect.
 *
 * ---
 * 
 * VisuMZ_3_ActiveChainSkills
 * 
 * Boosts now carry over across the entire chain and granting bonuses to all
 * chained skills instead of just the first skill of the chain. The bonus
 * effects of the boosts will end when the chains end.
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
 * === Boost Effect-Related Notetags ===
 * 
 * ---
 *
 * <Boost Damage>
 *
 * - Used for: Skill, Item Notetags
 * - Boosts will alter the damage dealt by this skill/item.
 * - The amount of damage increased will be determined by the Plugin Parameter
 *   Mechanical settings for Damage Multipliers and Addition.
 * - When using Action Sequences, this will have no effect outside of the
 *   MECH: Action Effect command.
 *
 * ---
 *
 * <Boost Turns>
 *
 * - Used for: Skill, Item Notetags
 * - Boosts will alter the duration of skills, buffs, and debuffs added by
 *   this skill/item.
 * - The amount of turns increased will be determined by the Plugin Parameter
 *   Mechanical settings for Turn Multipliers and Addition.
 * - When using Action Sequences, this will have no effect outside of the
 *   MECH: Action Effect command.
 *
 * ---
 *
 * <Boost Repeat>
 *
 * - Used for: Skill, Item Notetags
 * - Boosts will alter the number of repeated hits dealt by this skill/item.
 * - The amount of hits increased will be determined by the Plugin Parameter
 *   Mechanical settings for Repeated Hits Multipliers and Addition.
 * - When using Action Sequences, this will have no effect outside of the
 *   MECH: Action Effect command.
 *
 * ---
 *
 * <Boost Effect Gain>
 *
 * - Used for: Skill, Item Notetags
 * - Boosts will alter the number of Boost Points acquired through the
 *   <Target Boost Points: +x> and <User Boost Points: +x> notetags.
 * - The power of the effect will be determined by the Plugin Parameter
 *   Mechanical settings for Effect Multipliers and Addition.
 * - When using Action Sequences, this will have no effect outside of the
 *   MECH: Action Effect command.
 *
 * ---
 *
 * <Boost Analyze>
 *
 * - Used for: Skill, Item Notetags
 * - Requires VisuMZ_3_WeaknessDisplay!
 * - Boosts will alter the number of revealed weaknesses by this skill/item.
 * - The amount of weaknesses revealed will be determined by the Plugin
 *   Parameter Mechanical settings for Analyze Multipliers and Addition.
 * - When using Action Sequences, this will have no effect outside of the
 *   MECH: Action Effect command.
 * 
 * ---
 * 
 * === Boost Points Gain/Loss-Related Notetags ===
 * 
 * ---
 *
 * <User Boost Points: +x>
 * <User Boost Points: -x>
 *
 * <Target Boost Points: +x>
 * <Target Boost Points: -x>
 *
 * - Used for: Skill, Item Notetags
 * - The user/target will gain/lose Boost Points if this skill/item connects.
 * - Replace 'x' with a number representing the number of Boost Points for the
 *   user/target to gain/lose.
 *
 * ---
 *
 * <Boost Points Battle Start: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Determines how many extra (or less) Boost Points the battler will start
 *   a new battle with.
 * - Replace 'x' with a number representing the amount of Boost Points to
 *   increase or decrease the starting Boost Points value by multiplicatively.
 *
 * ---
 *
 * <Boost Points Battle Start: +x>
 * <Boost Points Battle Start: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Determines how many extra (or less) Boost Points the battler will start
 *   a new battle with.
 * - Replace 'x' with a number representing the amount of Boost Points to
 *   increase or decrease the starting Boost Points value by additively.
 *
 * ---
 * 
 * === Boost Point Requirements-Related Notetags ===
 * 
 * The following are notetags that make skills/items require a certain amount
 * of Boost Points to be in "use" before they can become enabled.
 * 
 * ---
 *
 * <Require x Boost Points>
 *
 * - Used for: Skill, Item Notetags
 * - This causes the skill to require at least x Boost Points to be spent.
 * - Replace 'x' with a number value representing the Boost Points to be spent.
 *
 * ---
 *
 * <Require >= x Boost Points>
 *
 * - Used for: Skill, Item Notetags
 * - This causes the skill to require at least x Boost Points to be spent.
 * - Replace 'x' with a number value representing the Boost Points to be spent.
 *
 * ---
 *
 * <Require > x Boost Points>
 *
 * - Used for: Skill, Item Notetags
 * - This causes the skill to require more than x Boost Points to be spent.
 * - Replace 'x' with a number value representing the Boost Points to be spent.
 *
 * ---
 *
 * <Require = x Boost Points>
 *
 * - Used for: Skill, Item Notetags
 * - This causes the skill to require exactly x Boost Points to be spent.
 * - Replace 'x' with a number value representing the Boost Points to be spent.
 *
 * ---
 *
 * <Require < x Boost Points>
 *
 * - Used for: Skill, Item Notetags
 * - This causes the skill to require less than x Boost Points to be spent.
 * - Replace 'x' with a number value representing the Boost Points to be spent.
 *
 * ---
 *
 * <Require <= x Boost Points>
 *
 * - Used for: Skill, Item Notetags
 * - This causes the skill to require at most x Boost Points to be spent.
 * - Replace 'x' with a number value representing the Boost Points to be spent.
 *
 * ---
 * 
 * === Boosting-Related Notetags ===
 * 
 * ---
 *
 * <Boost Stealed>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - As long as the battler is affected by a trait object with this notetag,
 *   the battler cannot Boost.
 *
 * ---
 * 
 * === Enemy-Related Notetags ===
 * 
 * ---
 *
 * <Boost Skill id: Full>
 * <Boost name: Full>
 *
 * - Used for: Enemy Notetags
 * - Determines which skills the notetag'd enemy will Boost and their range
 *   for Boosting it.
 * - When the enemy Boosts for this skill, the enemy will use as many Boost
 *   Points as it can to cast it.
 * - Replace 'id' with a number representing the skill ID to Boost.
 * - Replace 'name' with the skill's name to Boost.
 *
 * ---
 *
 * <Boost Skill id: At Least x>
 * <Boost name: At Least x>
 *
 * - Used for: Enemy Notetags
 * - Determines which skills the notetag'd enemy will Boost and their range
 *   for Boosting it.
 * - When the enemy Boosts for this skill, the enemy will only use Boost Points
 *   after reaching 'x' Boost Points and will use as much as it can.
 * - Replace 'id' with a number representing the skill ID to Boost.
 * - Replace 'name' with the skill's name to Boost.
 *
 * ---
 *
 * <Boost Skill id: At Most x>
 * <Boost name: At Most x>
 *
 * - Used for: Enemy Notetags
 * - Determines which skills the notetag'd enemy will Boost and their range
 *   for Boosting it.
 * - When the enemy Boosts for this skill, the enemy will only as many Boost
 *   Points as it can unless the Boost Points spent go over 'x'.
 * - Replace 'id' with a number representing the skill ID to Boost.
 * - Replace 'name' with the skill's name to Boost.
 *
 * ---
 *
 * <Boost Skill id: Exactly x>
 * <Boost name: Exactly x>
 *
 * - Used for: Enemy Notetags
 * - Determines which skills the notetag'd enemy will Boost and their range
 *   for Boosting it.
 * - When the enemy Boosts for this skill, the enemy will only use 'x' Boost
 *   Points when Boosting for the skill.
 * - Replace 'id' with a number representing the skill ID to Boost.
 * - Replace 'name' with the skill's name to Boost.
 *
 * ---
 * 
 * === Regeneration-Related Notetags ===
 * 
 * ---
 *
 * <Boost Points Regen: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the amount of Boost Points gained when regenerating Boost Points
 *   (as long as the battler can).
 * - Replace 'x' with a number value representing the amount of Boost Points
 *   to increase or decrease the regenerated amount by multiplicatively.
 *
 * ---
 *
 * <Boost Points Regen: +x>
 * <Boost Points Regen: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the amount of Boost Points gained when regenerating Boost Points
 *   (as long as the battler can).
 * - Replace 'x' with a number value representing the amount of Boost Points
 *   to increase or decrease the regenerated amount by additively.
 *
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Boosting-Related Text Codes ===
 *
 * These text codes are used for Help Window descriptions. When Boosting, the
 * text displayed in the Help Window can change to reflect the amount boosted.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Help Window Text Only)
 * ------------------   -------------------------------------------------------
 * 
 * \boostDamage[x]      This will apply damage modifiers to number x based on
 *                      the actor's currently used Boost amount.
 * 
 * \boostTurn[x]        This will apply turn modifiers to number x based on
 *                      the actor's currently used Boost amount.
 * 
 * \boostRepeat[x]      This will apply repeat hit modifiers to number x based
 *                      on the actor's currently used Boost amount.
 * 
 * \boostEffect[x]      This will apply Boost Point effect modifiers to number
 *                      x based on the actor's currently used Boost amount.
 * 
 * \boostAnalyze[x]     This will apply analyze modifiers to number x based on
 *                      the actor's currently used Boost amount.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Help Window Text Only)
 * ------------------   -------------------------------------------------------
 * 
 * \boost[text]         The text inside the brackets won't appear unless at
 *                      least 1 Boost is used.
 * 
 * \boost0[text]        The text inside the brackets won't appear unless if any
 *                      Boost is used.
 * 
 * \boost>=x[text]      The text inside the brackets will only appear if at
 *                      least x Boosts are used.
 * 
 * \boost>x[text]       The text inside the brackets will only appear if more
 *                      than x Boosts are used.
 * 
 * \boost=x[text]       The text inside the brackets will only appear if
 *                      exactly x Boosts are used.
 * 
 * \boost<x[text]       The text inside the brackets will only appear if less
 *                      than x Boosts are used.
 * 
 * \boost<=x[text]      The text inside the brackets will only appear if at
 *                      most x Boosts are used.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * These Plugin Parameters govern the mechanics behind Boost Points and
 * Boosting for this RPG Maker MZ plugin.
 *
 * ---
 *
 * Boost Points
 * 
 *   Max Stored:
 *   - Maximum Boost Points that can be stored at any time.
 * 
 *   Max Usable:
 *   - How many Boost Points can be usable at a time?
 * 
 *   Start Battle:
 *   - How many Boost Points as a base do you want battlers to start
 *     battles with?
 * 
 *   Regeneration:
 *   - How many Boost Points do you want battlers to regenerate each
 *     turn applicable?
 * 
 *     Always Regen?:
 *     - Always regenerate Boost Points each turn?
 *     - Otherwise, regenerate on turns when Boost Points weren't used.
 * 
 *     Death Regen?:
 *     - Regenerate Boost Points while dead?
 *     - Otherwise, don't.
 * 
 *   Death Removal?:
 *   - Remove all stored Boost Points on death?
 *   - Otherwise, keep them.
 *
 * ---
 *
 * Boost Animations
 * 
 *   Animation ID's:
 *   - Animation IDs start from 0 Boosts to max.
 *   - These animations play when Boosting/Unboosting.
 * 
 *   Animation Delay:
 *   - How many milliseconds to play between animations when enemies
 *     Boost actions?
 *
 * ---
 *
 * Boost Modifiers
 * 
 *   Damage:
 * 
 *     Multipliers:
 *     - Damage multipliers start from 0 Boosts to max.
 *     - Affects skills/items with <Boost Damage> notetag.
 * 
 *     Addition:
 *     - Damage addition start from 0 Boosts to max.
 *     - Affects skills/items with <Boost Damage> notetag.
 * 
 *   State/Buff Turns:
 * 
 *     Multipliers:
 *     - Turn multipliers start from 0 Boosts to max.
 *     - Affects skills/items with <Boost Turns> notetag.
 * 
 *     Addition:
 *     - Turn addition start from 0 Boosts to max.
 *     - Affects skills/items with <Boost Turns> notetag.
 * 
 *   Repeated Hits:
 * 
 *     Multipliers:
 *     - Repeat multipliers start from 0 Boosts to max.
 *     - Affects skills/items with <Boost Repeat> notetag.
 * 
 *     Addition:
 *     - Repeat addition start from 0 Boosts to max.
 *     - Affects skills/items with <Boost Repeat> notetag.
 * 
 *   Effect:
 * 
 *     Multipliers:
 *     - Effect multipliers start from 0 Boosts to max.
 *     - Affects skills/items with <Boost Effect Gain> notetag.
 * 
 *     Addition:
 *     - Effect addition start from 0 Boosts to max.
 *     - Affects skills/items with <Boost Effect Gain> notetag.
 * 
 *   Analyze:
 * 
 *     Multipliers:
 *     - Analyze multipliers start from 0 Boosts to max.
 *     - Affects skills/items with <Boost Analyze> notetag.
 * 
 *     Addition:
 *     - Analyze addition start from 0 Boosts to max.
 *     - Affects skills/items with <Boost Analyze> notetag.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * These Plugin Parameter settings govern the visual elements related to Boost
 * Points and Boosting.
 *
 * ---
 *
 * Icons
 * 
 *   Boost Icon:
 *   - What icon do you wish to represent Boosting and
 *     Boost Point availability?
 * 
 *   Empty Icon:
 *   - What icon do you wish to represent Unboosting and
 *     Boost Point absence?
 * 
 *   Icon Size Rate:
 *   - What size do you wish the icons to be displayed at?
 *   - Use a number between 0 and 1 for the best results.
 * 
 *   Smooth Icons?:
 *   - Do you wish to smooth out the icons or pixelate them?
 *
 * ---
 *
 * Vocab
 * 
 *   Boost Command:
 *   - This is the text used for the "Boost" command displayed in the
 *     Actor Command Window.
 * 
 *     Show?:
 *     - Show this command in the Actor Command Window?
 * 
 *   Unboost Command:
 *   - This is the text used for the "Unboost" command displayed in the
 *     Actor Command Window.
 * 
 *     Show?:
 *     - Show this command in the Actor Command Window?
 *
 * ---
 *
 * Shortcut Controls
 * 
 *   Page Up/Dn Shortcuts?:
 *   - Enable Page Up/Down keys to adjust Boost points as a shortcut?
 * 
 *   Bypassed Windows:
 *   - These are constructor names for windows that the shortcut key will not
 *     work on.
 *
 * ---
 *
 * Battle Status
 * 
 *   Show Boost Points?:
 *   - Show Boost Points in the Battle Status Window?
 * 
 *   Auto-Position?:
 *   - Automatically position the Boost Points?
 *   - If not, it'll position it to the upper left.
 * 
 *   Offset X/Y:
 *   - How much to offset the Boost icons X/Y position by?
 *   - For X: Negative goes left. Positive goes right.
 *   - For Y: Negative goes up. Positive goes down.
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
 * Version 1.07: May 18, 2023
 * * Compatibility Update!
 * ** Added compatibility for Chain Battles. Cooldowns will be carried across
 *    chained battles. Update made by Olivia.
 * 
 * Version 1.06: December 15, 2022
 * * Bug Fixes!
 * ** Fixed a crash that would occur with <Seal Attack> notetag on any actor
 *    that focuses on auto-battle. Fix made by Olivia.
 * * Compatibility Update!
 * ** Added better compatibility with Active Chain Skills. Boosts now carry
 *    over across the entire chain and granting bonuses to all chained skills
 *    instead of just the first skill of the chain. The bonus effects of the
 *    boosts will end when the chains end.
 * * Documentation Update!
 * ** Added section to "VisuStella MZ Compatibility"
 * *** VisuMZ_3_ActiveChainSkills
 * **** Boosts now carry over across the entire chain and granting bonuses to
 *      all chained skills instead of just the first skill of the chain. The
 *      bonus effects of the boosts will end when the chains end.
 * 
 * Version 1.05: January 13, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: August 27, 2021
 * * Compatibility Update!
 * ** Boost text should now work properly with VisuStella MZ's Party System
 *    switching. Update made by Olivia.
 * 
 * Version 1.03: June 25, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: April 23, 2021
 * * Bug Fixes!
 * ** Boost icons should no longer disappear after a single battle. Fix made
 *    by Olivia.
 * 
 * Version 1.01: April 9, 2021
 * * Bug Fixes!
 * ** <User Boost Points: +x> notetag should now work properly. Fix by Olivia.
 * 
 * Version 1.00 Official Release Date: May 5, 2021
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
 * @param BoostAction
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
 * @desc Settings for the Boost Action mechanics.
 * @default {"BoostPoints":"","MaxStored:num":"5","Usable:num":"3","StartBattle:num":"1","Regen:num":"1","AlwaysRegen:eval":"false","DeathRegen:eval":"false","DeathRemoval:eval":"true","Animations":"","Animations:arraynum":"[\"12\",\"13\",\"15\",\"14\",\"2\",\"51\",\"52\",\"53\",\"67\",\"66\",\"107\"]","AnimationDelay:num":"800","Modifiers":"","Damage":"","DmgMultiply:arraynum":"[\"1.0\",\"2.0\",\"3.0\",\"4.0\",\"5.0\",\"6.0\",\"7.0\",\"8.0\",\"9.0\",\"10.0\",\"11.0\"]","DmgAddition:arraynum":"[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]","Turns":"","TurnMultiply:arraynum":"[\"1.0\",\"1.0\",\"1.0\",\"1.0\",\"1.0\",\"1.0\",\"1.0\",\"1.0\",\"1.0\",\"1.0\",\"1.0\"]","TurnAddition:arraynum":"[\"0\",\"2\",\"4\",\"6\",\"8\",\"10\",\"12\",\"14\",\"16\",\"18\",\"20\"]","Repeat":"","RepeatMultiply:arraynum":"[\"1.0\",\"2.0\",\"3.0\",\"4.0\",\"5.0\",\"6.0\",\"7.0\",\"8.0\",\"9.0\",\"10.0\",\"11.0\"]","RepeatAddition:arraynum":"[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]","Effect":"","EffectMultiply:arraynum":"[\"1.0\",\"2.0\",\"3.0\",\"4.0\",\"5.0\",\"6.0\",\"7.0\",\"8.0\",\"9.0\",\"10.0\",\"11.0\"]","EffectAddition:arraynum":"[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]","Analyze":"","AnalyzeMultiply:arraynum":"[\"1.0\",\"2.0\",\"3.0\",\"4.0\",\"5.0\",\"6.0\",\"7.0\",\"8.0\",\"9.0\",\"10.0\",\"11.0\"]","AnalyzeAddition:arraynum":"[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]"}
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Settings for the Boost Action UI.
 * @default {"Icons":"","BoostIcon:num":"163","EmptyIcon:num":"161","IconSizeRate:num":"0.5","SmoothIcons:eval":"true","Vocab":"","BoostCmd:str":"Boost","ShowBoostCmd:eval":"true","UnboostCmd:str":"Unboost","ShowUnboostCmd:eval":"true","Controls":"","PgUpDnShortcuts:eval":"true","BypassConstructors:arraystr":"[\"Window_BattleActor\",\"Window_BattleEnemy\",\"Window_BattleItem\",\"Window_PartyBattleSwitch\"]","BattleStatus":"","BattleStatusShow:eval":"true","BattleStatusAutoPosition:eval":"true","BattleStatusOffsetX:num":"+0","BattleStatusOffsetY:num":"+0"}
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
 * @param BoostPoints
 * @text Boost Points
 *
 * @param MaxStored:num
 * @text Max Stored
 * @parent BoostPoints
 * @type number
 * @min 1
 * @desc Maximum Boost Points that can be stored at any time.
 * @default 5
 *
 * @param Usable:num
 * @text Max Usable
 * @parent BoostPoints
 * @type number
 * @min 1
 * @desc How many Boost Points can be usable at a time?
 * @default 3
 *
 * @param StartBattle:num
 * @text Start Battle
 * @parent BoostPoints
 * @type number
 * @desc How many Boost Points as a base do you want battlers
 * to start battles with?
 * @default 1
 *
 * @param Regen:num
 * @text Regeneration
 * @parent BoostPoints
 * @type number
 * @desc How many Boost Points do you want battlers to regenerate
 * each turn applicable?
 * @default 1
 *
 * @param AlwaysRegen:eval
 * @text Always Regen?
 * @parent Regen:num
 * @type boolean
 * @on Always
 * @off Other
 * @desc Always regenerate Boost Points each turn? Otherwise,
 * regenerate on turns when Boost Points weren't used.
 * @default false
 *
 * @param DeathRegen:eval
 * @text Death Regen?
 * @parent Regen:num
 * @type boolean
 * @on Regen on Death
 * @off No Regen
 * @desc Regenerate Boost Points while dead?
 * Otherwise, don't.
 * @default false
 *
 * @param DeathRemoval:eval
 * @text Death Removal?
 * @parent BoostPoints
 * @type boolean
 * @on Remove on Death
 * @off No Removal
 * @desc Remove all stored Boost Points on death?
 * Otherwise, keep them.
 * @default true
 * 
 * @param Animations
 * @text Boost Animations
 *
 * @param Animations:arraynum
 * @text Animation ID's
 * @parent Animations
 * @type animation[]
 * @desc Animation IDs start from 0 Boosts to max.
 * These animations play when Boosting/Unboosting.
 * @default ["12","13","15","14","2","51","52","53","67","66","107"]
 *
 * @param AnimationDelay:num
 * @text Animation Delay
 * @parent Animations
 * @type number
 * @desc How many milliseconds to play between animations when
 * enemies Boost actions?
 * @default 1000
 * 
 * @param Modifiers
 * @text Boost Modifiers
 * 
 * @param Damage
 * @parent Modifiers
 *
 * @param DmgMultiply:arraynum
 * @text Multipliers
 * @parent Damage
 * @type string[]
 * @desc Damage multipliers start from 0 Boosts to max.
 * Affects skills/items with <Boost Damage> notetag.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","11.0"]
 *
 * @param DmgAddition:arraynum
 * @text Addition
 * @parent Damage
 * @type string[]
 * @desc Damage addition start from 0 Boosts to max.
 * Affects skills/items with <Boost Damage> notetag.
 * @default ["0","0","0","0","0","0","0","0","0","0","0"]
 * 
 * @param Turns
 * @parent Modifiers
 * @text State/Buff Turns
 *
 * @param TurnMultiply:arraynum
 * @text Multipliers
 * @parent Turns
 * @type string[]
 * @desc Turn multipliers start from 0 Boosts to max.
 * Affects skills/items with <Boost Turns> notetag.
 * @default ["1.0","1.0","1.0","1.0","1.0","1.0","1.0","1.0","1.0","1.0","1.0"]
 *
 * @param TurnAddition:arraynum
 * @text Addition
 * @parent Turns
 * @type string[]
 * @desc Turn addition start from 0 Boosts to max.
 * Affects skills/items with <Boost Turns> notetag.
 * @default ["0","2","4","6","8","10","12","14","16","18","20"]
 * 
 * @param Repeat
 * @parent Modifiers
 * @text Repeated Hits
 *
 * @param RepeatMultiply:arraynum
 * @text Multipliers
 * @parent Repeat
 * @type string[]
 * @desc Repeat multipliers start from 0 Boosts to max.
 * Affects skills/items with <Boost Repeat> notetag.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","11.0"]
 *
 * @param RepeatAddition:arraynum
 * @text Addition
 * @parent Repeat
 * @type string[]
 * @desc Repeat addition start from 0 Boosts to max.
 * Affects skills/items with <Boost Repeat> notetag.
 * @default ["0","0","0","0","0","0","0","0","0","0","0"]
 * 
 * @param Effect
 * @parent Modifiers
 *
 * @param EffectMultiply:arraynum
 * @text Multipliers
 * @parent Effect
 * @type string[]
 * @desc Effect multipliers start from 0 Boosts to max.
 * Affects skills/items with <Boost Effect Gain> notetag.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","11.0"]
 *
 * @param EffectAddition:arraynum
 * @text Addition
 * @parent Effect
 * @type string[]
 * @desc Effect addition start from 0 Boosts to max.
 * Affects skills/items with <Boost Effect Gain> notetag.
 * @default ["0","0","0","0","0","0","0","0","0","0","0"]
 * 
 * @param Analyze
 * @parent Modifiers
 *
 * @param AnalyzeMultiply:arraynum
 * @text Multipliers
 * @parent Analyze
 * @type string[]
 * @desc Analyze multipliers start from 0 Boosts to max.
 * Affects skills/items with <Boost Analyze> notetag.
 * @default ["1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","11.0"]
 *
 * @param AnalyzeAddition:arraynum
 * @text Addition
 * @parent Analyze
 * @type string[]
 * @desc Analyze addition start from 0 Boosts to max.
 * Affects skills/items with <Boost Analyze> notetag.
 * @default ["0","0","0","0","0","0","0","0","0","0","0"]
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
 * @param BoostIcon:num
 * @text Boost Icon
 * @parent Icons
 * @desc What icon do you wish to represent Boosting
 * and Boost Point availability?
 * @default 163
 *
 * @param EmptyIcon:num
 * @text Empty Icon
 * @parent Icons
 * @desc What icon do you wish to represent Unboosting
 * and Boost Point absence?
 * @default 161
 *
 * @param IconSizeRate:num
 * @text Icon Size Rate
 * @parent Icons
 * @desc What size do you wish the icons to be displayed at?
 * Use a number between 0 and 1 for the best results.
 * @default 0.5
 *
 * @param SmoothIcons:eval
 * @text Smooth Icons?
 * @parent Icons
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Do you wish to smooth out the icons or pixelate them?
 * @default true
 * 
 * @param Vocab
 *
 * @param BoostCmd:str
 * @text Boost Command
 * @parent Vocab
 * @desc This is the text used for the "Boost" command
 * displayed in the Actor Command Window.
 * @default Boost
 *
 * @param ShowBoostCmd:eval
 * @text Show?
 * @parent BoostCmd:str
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show this command in the Actor Command Window?
 * @default true
 *
 * @param UnboostCmd:str
 * @text Unboost Command
 * @parent Vocab
 * @desc This is the text used for the "Unboost" command
 * displayed in the Actor Command Window.
 * @default Unboost
 *
 * @param ShowUnboostCmd:eval
 * @text Show?
 * @parent UnboostCmd:str
 * @type boolean
 * @on Show Command
 * @off Hide Command
 * @desc Show this command in the Actor Command Window?
 * @default true
 * 
 * @param Controls
 * @text Shortcut Controls
 *
 * @param PgUpDnShortcuts:eval
 * @text Page Up/Dn Shortcuts?
 * @parent Controls
 * @type boolean
 * @on Enable Shortcuts
 * @off Disable Shortcuts
 * @desc Enable Page Up/Down keys to adjust Boost points
 * as a shortcut?
 * @default true
 *
 * @param BypassConstructors:arraystr
 * @text Bypassed Windows
 * @parent Controls
 * @type string[]
 * @desc These are constructor names for windows that the shortcut
 * key will not work on.
 * @default ["Window_BattleActor","Window_BattleEnemy","Window_BattleItem","Window_PartyBattleSwitch"]
 * 
 * @param BattleStatus
 * @text Battle Status
 *
 * @param BattleStatusShow:eval
 * @text Show Boost Points?
 * @parent BattleStatus
 * @type boolean
 * @on Show Boost Points
 * @off Hide Boost Points
 * @desc Show Boost Points in the Battle Status Window?
 * @default true
 *
 * @param BattleStatusAutoPosition:eval
 * @text Auto-Position?
 * @parent BattleStatus
 * @type boolean
 * @on Auto-Position
 * @off Manual Position
 * @desc Automatically position the Boost Points?
 * If not, it'll position it to the upper left.
 * @default true
 *
 * @param BattleStatusOffsetX:num
 * @text Offset X
 * @parent BattleStatus
 * @desc How much to offset the Boost icons X position by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param BattleStatusOffsetY:num
 * @text Offset Y
 * @parent BattleStatus
 * @desc How much to offset the Boost icons Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 *
 */
//=============================================================================

const _0x442f10=_0x4c04;(function(_0x3fc00,_0x4e71e5){const _0x38ddb7=_0x4c04,_0xe94478=_0x3fc00();while(!![]){try{const _0x2110e2=parseInt(_0x38ddb7(0x12a))/0x1+parseInt(_0x38ddb7(0x1cd))/0x2+parseInt(_0x38ddb7(0x19b))/0x3*(-parseInt(_0x38ddb7(0xcc))/0x4)+parseInt(_0x38ddb7(0x14c))/0x5+-parseInt(_0x38ddb7(0x150))/0x6+-parseInt(_0x38ddb7(0x184))/0x7+-parseInt(_0x38ddb7(0xda))/0x8*(-parseInt(_0x38ddb7(0x177))/0x9);if(_0x2110e2===_0x4e71e5)break;else _0xe94478['push'](_0xe94478['shift']());}catch(_0x3d4dae){_0xe94478['push'](_0xe94478['shift']());}}}(_0x6acd,0x34d6a));function _0x4c04(_0x445074,_0x2dcd96){const _0x6acdd5=_0x6acd();return _0x4c04=function(_0x4c04f4,_0x274997){_0x4c04f4=_0x4c04f4-0xa0;let _0x3c5e60=_0x6acdd5[_0x4c04f4];return _0x3c5e60;},_0x4c04(_0x445074,_0x2dcd96);}var label=_0x442f10(0x1d7),tier=tier||0x0,dependencies=['VisuMZ_0_CoreEngine',_0x442f10(0xb8),_0x442f10(0x1cc),'VisuMZ_1_MessageCore'],pluginData=$plugins['filter'](function(_0x12862e){const _0x231ff3=_0x442f10;return _0x12862e[_0x231ff3(0x1d0)]&&_0x12862e['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x442f10(0x16b)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x442f10(0x136)]=function(_0x54ef40,_0x406a1c){const _0x2b019c=_0x442f10;for(const _0x127fe4 in _0x406a1c){if(_0x127fe4[_0x2b019c(0xa0)](/(.*):(.*)/i)){const _0x4ac9be=String(RegExp['$1']),_0x471452=String(RegExp['$2'])[_0x2b019c(0x225)]()['trim']();let _0x32108f,_0x52bd99,_0x4b9645;switch(_0x471452){case'NUM':_0x32108f=_0x406a1c[_0x127fe4]!==''?Number(_0x406a1c[_0x127fe4]):0x0;break;case'ARRAYNUM':_0x52bd99=_0x406a1c[_0x127fe4]!==''?JSON[_0x2b019c(0x156)](_0x406a1c[_0x127fe4]):[],_0x32108f=_0x52bd99[_0x2b019c(0xab)](_0x1faeaf=>Number(_0x1faeaf));break;case'EVAL':_0x32108f=_0x406a1c[_0x127fe4]!==''?eval(_0x406a1c[_0x127fe4]):null;break;case'ARRAYEVAL':_0x52bd99=_0x406a1c[_0x127fe4]!==''?JSON[_0x2b019c(0x156)](_0x406a1c[_0x127fe4]):[],_0x32108f=_0x52bd99['map'](_0x1c0003=>eval(_0x1c0003));break;case'JSON':_0x32108f=_0x406a1c[_0x127fe4]!==''?JSON[_0x2b019c(0x156)](_0x406a1c[_0x127fe4]):'';break;case _0x2b019c(0x21d):_0x52bd99=_0x406a1c[_0x127fe4]!==''?JSON['parse'](_0x406a1c[_0x127fe4]):[],_0x32108f=_0x52bd99[_0x2b019c(0xab)](_0x2a71dd=>JSON[_0x2b019c(0x156)](_0x2a71dd));break;case _0x2b019c(0x172):_0x32108f=_0x406a1c[_0x127fe4]!==''?new Function(JSON[_0x2b019c(0x156)](_0x406a1c[_0x127fe4])):new Function(_0x2b019c(0x126));break;case _0x2b019c(0xa7):_0x52bd99=_0x406a1c[_0x127fe4]!==''?JSON[_0x2b019c(0x156)](_0x406a1c[_0x127fe4]):[],_0x32108f=_0x52bd99[_0x2b019c(0xab)](_0x3113d1=>new Function(JSON['parse'](_0x3113d1)));break;case _0x2b019c(0x174):_0x32108f=_0x406a1c[_0x127fe4]!==''?String(_0x406a1c[_0x127fe4]):'';break;case _0x2b019c(0x104):_0x52bd99=_0x406a1c[_0x127fe4]!==''?JSON[_0x2b019c(0x156)](_0x406a1c[_0x127fe4]):[],_0x32108f=_0x52bd99[_0x2b019c(0xab)](_0x5e23f4=>String(_0x5e23f4));break;case _0x2b019c(0x142):_0x4b9645=_0x406a1c[_0x127fe4]!==''?JSON[_0x2b019c(0x156)](_0x406a1c[_0x127fe4]):{},_0x32108f=VisuMZ[_0x2b019c(0x136)]({},_0x4b9645);break;case _0x2b019c(0xb5):_0x52bd99=_0x406a1c[_0x127fe4]!==''?JSON[_0x2b019c(0x156)](_0x406a1c[_0x127fe4]):[],_0x32108f=_0x52bd99[_0x2b019c(0xab)](_0x5a90ff=>VisuMZ[_0x2b019c(0x136)]({},JSON[_0x2b019c(0x156)](_0x5a90ff)));break;default:continue;}_0x54ef40[_0x4ac9be]=_0x32108f;}}return _0x54ef40;},(_0x40c781=>{const _0x6e1af9=_0x442f10,_0xd408ed=_0x40c781[_0x6e1af9(0xa2)];for(const _0x4f633c of dependencies){if(!Imported[_0x4f633c]){if(_0x6e1af9(0x102)===_0x6e1af9(0x144))return!!this['_bpSubject']&&this[_0x6e1af9(0xa9)][_0x6e1af9(0xae)]()<=_0x617b71?_0x3cacbd:'';else{alert(_0x6e1af9(0xf2)[_0x6e1af9(0x11d)](_0xd408ed,_0x4f633c)),SceneManager['exit']();break;}}}const _0x52af06=_0x40c781[_0x6e1af9(0x15b)];if(_0x52af06[_0x6e1af9(0xa0)](/\[Version[ ](.*?)\]/i)){const _0x5f3038=Number(RegExp['$1']);_0x5f3038!==VisuMZ[label][_0x6e1af9(0xac)]&&(alert(_0x6e1af9(0xd4)[_0x6e1af9(0x11d)](_0xd408ed,_0x5f3038)),SceneManager[_0x6e1af9(0x183)]());}if(_0x52af06[_0x6e1af9(0xa0)](/\[Tier[ ](\d+)\]/i)){if(_0x6e1af9(0x113)!==_0x6e1af9(0x113)){if(!_0x4509c0[_0x6e1af9(0x228)]&&(this[_0x6e1af9(0x112)]()||this[_0x6e1af9(0x1c4)]()))return 0x0;else{var _0x2b0a10=_0x43381a[_0x6e1af9(0xf3)];return _0x2b0a10=this['bpRegenMultipliers'](_0x2b0a10),_0x2b0a10=this[_0x6e1af9(0x192)](_0x2b0a10),_0x2b0a10;}}else{const _0x184640=Number(RegExp['$1']);_0x184640<tier?(alert(_0x6e1af9(0x163)[_0x6e1af9(0x11d)](_0xd408ed,_0x184640,tier)),SceneManager['exit']()):tier=Math['max'](_0x184640,tier);}}VisuMZ[_0x6e1af9(0x136)](VisuMZ[label][_0x6e1af9(0x16b)],_0x40c781[_0x6e1af9(0xe3)]);})(pluginData),VisuMZ['BoostAction']['RegExp']={'BoostDamage':/<(?:BP|BOOST) (?:DMG|DAMAGE)>/i,'BoostTurns':/<(?:BP|BOOST) (?:TURN|TURNS)>/i,'BoostRepeat':/<(?:BP|BOOST) (?:REPEAT|REPEATS|HIT|HITS)>/i,'BoostAnalyze':/<(?:BP|BOOST) (?:ANALYZE|ANALYSIS)>/i,'TargetBoostPoints':/<TARGET (?:BP|BOOST POINT|BOOST POINTS): ([\+\-]\d+)>/i,'UserBoostPoints':/<USER (?:BP|BOOST POINT|BOOST POINTS): ([\+\-]\d+)>/i,'BoostGainPoints':/<(?:BP|BOOST) (?:BP|BOOST POINT|BOOST POINTS|POINT|POINTS|EFFECT|EFFECTS) (?:EFFECT|GAIN|LOSS)>/i,'Require':{'Amount':/<REQUIRE (\d+) (?:BP|BOOST POINT|BOOST POINTS)>/i,'GreaterEqual':/<REQUIRE >= (\d+) (?:BP|BOOST POINT|BOOST POINTS)>/i,'Greater':/<REQUIRE > (\d+) (?:BP|BOOST POINT|BOOST POINTS)>/i,'Equal':/<REQUIRE = (\d+) (?:BP|BOOST POINT|BOOST POINTS)>/i,'Less':/<REQUIRE < (\d+) (?:BP|BOOST POINT|BOOST POINTS)>/i,'LessEqual':/<REQUIRE <= (\d+) (?:BP|BOOST POINT|BOOST POINTS)>/i},'BoostSealed':/<(?:BP|BOOST) (?:SEAL|SEALED)>/i,'BoostBattleStartRate':/<(?:BP|BOOST|BOOST POINT|BOOST POINTS) BATTLE START: (\d+)([%％])>/i,'BoostBattleStartFlat':/<(?:BP|BOOST|BOOST POINT|BOOST POINTS) BATTLE START: ([\+\-]\d+)>/i,'BoostPointsRegenRate':/<(?:BP|BOOST|BOOST POINT|BOOST POINTS) REGEN: (\d+)([%％])>/i,'BoostPointsRegenFlat':/<(?:BP|BOOST|BOOST POINT|BOOST POINTS) REGEN: ([\+\-]\d+)>/i,'EnemyBoostSkillID':/<BOOST SKILL (\d+):[ ](.*)>/i,'EnemyBoostSkillName':/<BOOST (.*):[ ](.*)>/i},ImageManager['boostIcon']=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['UI']['BoostIcon'],ImageManager[_0x442f10(0x162)]=VisuMZ['BoostAction'][_0x442f10(0x16b)]['UI'][_0x442f10(0x143)],ImageManager[_0x442f10(0x166)]=VisuMZ[_0x442f10(0x1d7)]['Settings']['UI']['SmoothIcons'],ImageManager[_0x442f10(0xfd)]=function(){const _0x3d7e6f=_0x442f10;if(!this[_0x3d7e6f(0xee)]){this['_boostIconSheet']=new Bitmap();const _0x1faec6=ImageManager[_0x3d7e6f(0x1c9)](_0x3d7e6f(0x1d5));_0x1faec6[_0x3d7e6f(0x19c)](this['boostTransferBitmap'][_0x3d7e6f(0x1d3)](this,_0x1faec6));}return this[_0x3d7e6f(0xee)];},ImageManager['boostTransferBitmap']=function(_0x43f6b4){const _0x35def3=_0x442f10;this['_boostIconSheet'][_0x35def3(0xff)](_0x43f6b4[_0x35def3(0x20a)],_0x43f6b4[_0x35def3(0xc5)]),this['_boostIconSheet'][_0x35def3(0x1ec)](_0x43f6b4,0x0,0x0,_0x43f6b4[_0x35def3(0x20a)],_0x43f6b4[_0x35def3(0xc5)],0x0,0x0),this[_0x35def3(0xee)][_0x35def3(0x227)]=ImageManager['boostSmooth'],this[_0x35def3(0xee)][_0x35def3(0x1c3)]=![];},TextManager[_0x442f10(0x1f2)]=VisuMZ['BoostAction'][_0x442f10(0x16b)]['UI'][_0x442f10(0x128)],TextManager[_0x442f10(0x194)]=VisuMZ['BoostAction']['Settings']['UI'][_0x442f10(0x1ac)],VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x20f)]=BattleManager[_0x442f10(0x1a2)],BattleManager[_0x442f10(0x1a2)]=function(_0x5885ad,_0x23a5c4,_0x308f94){const _0x3763bb=_0x442f10;VisuMZ['BoostAction']['BattleManager_setup'][_0x3763bb(0xbc)](this,_0x5885ad,_0x23a5c4,_0x308f94),$gameParty[_0x3763bb(0x21e)](),$gameTroop[_0x3763bb(0x21e)]();},VisuMZ['BoostAction'][_0x442f10(0x1c7)]=BattleManager['processTurn'],BattleManager['processTurn']=function(){const _0x32a7e7=_0x442f10;this[_0x32a7e7(0x1f9)](),VisuMZ[_0x32a7e7(0x1d7)][_0x32a7e7(0x1c7)][_0x32a7e7(0xbc)](this);},BattleManager[_0x442f10(0x1f9)]=function(){const _0x3cf5b7=_0x442f10;var _0x4a8b0a=this[_0x3cf5b7(0xd9)],_0x1496cc=_0x4a8b0a[_0x3cf5b7(0xe9)]();!!_0x4a8b0a&&_0x4a8b0a['isEnemy']()&&!!_0x1496cc&&_0x1496cc[_0x3cf5b7(0x204)]()&&_0x4a8b0a['storedBoostPoints']()>0x0&&!_0x4a8b0a[_0x3cf5b7(0xf7)]()&&_0x4a8b0a[_0x3cf5b7(0x219)](_0x1496cc[_0x3cf5b7(0x1dc)]());},BattleManager[_0x442f10(0x197)]=function(){const _0xc4abd2=_0x442f10;if(Imported[_0xc4abd2(0x15c)]&&this[_0xc4abd2(0x215)]())return![];return!![];},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x103)]=Game_Action[_0x442f10(0x1a5)][_0x442f10(0x21b)],Game_Action['prototype'][_0x442f10(0x21b)]=function(){const _0x1f26d8=_0x442f10;var _0x716360=VisuMZ[_0x1f26d8(0x1d7)]['Game_Action_numRepeats']['call'](this);_0x716360=this[_0x1f26d8(0xef)](_0x716360);return Math[_0x1f26d8(0x212)](_0x716360);;},Game_Action[_0x442f10(0x1a5)]['applyBoostPointRepeats']=function(_0x1a2204){const _0x41c4e1=_0x442f10,_0x16cb11=VisuMZ['BoostAction'][_0x41c4e1(0x157)];if(!!this[_0x41c4e1(0xd3)]()&&!!this[_0x41c4e1(0x1dc)]()&&this[_0x41c4e1(0x1dc)]()[_0x41c4e1(0x116)][_0x41c4e1(0xa0)](_0x16cb11['BoostRepeat'])){var _0x21e3e2=this[_0x41c4e1(0xd3)]()[_0x41c4e1(0x119)](_0x41c4e1(0xe0));_0x1a2204=Math['round'](_0x1a2204*_0x21e3e2),_0x1a2204+=this['subject']()[_0x41c4e1(0x135)](_0x41c4e1(0xe0));}return _0x1a2204;},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x217)]=Game_Action['prototype']['applyGuard'],Game_Action['prototype']['applyGuard']=function(_0x2316bd,_0xda6f2b){const _0x1a6d6a=_0x442f10;return _0x2316bd=this['applyBoostPointDamage'](_0x2316bd),VisuMZ['BoostAction'][_0x1a6d6a(0x217)]['call'](this,_0x2316bd,_0xda6f2b);},Game_Action['prototype'][_0x442f10(0x1e6)]=function(_0x3c4bbb){const _0xcbc7c8=_0x442f10,_0x563297=VisuMZ['BoostAction'][_0xcbc7c8(0x157)];if(!!this['subject']()&&this['item']()[_0xcbc7c8(0x116)][_0xcbc7c8(0xa0)](_0x563297[_0xcbc7c8(0xe4)])){var _0x162c41=this[_0xcbc7c8(0xd3)]()[_0xcbc7c8(0x119)](_0xcbc7c8(0x1b1));_0x3c4bbb=Math[_0xcbc7c8(0x212)](_0x3c4bbb*_0x162c41),_0x3c4bbb+=this[_0xcbc7c8(0xd3)]()[_0xcbc7c8(0x135)](_0xcbc7c8(0x1b1));}return _0x3c4bbb;},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x17f)]=Game_Action[_0x442f10(0x1a5)][_0x442f10(0xf9)],Game_Action[_0x442f10(0x1a5)][_0x442f10(0xf9)]=function(_0x336adf){const _0x45d077=_0x442f10;this['applyBoostPointTurns'](![]),VisuMZ['BoostAction']['Game_Action_apply'][_0x45d077(0xbc)](this,_0x336adf),this[_0x45d077(0x199)](!![]);},Game_Action[_0x442f10(0x1a5)][_0x442f10(0x199)]=function(_0x27e580){const _0x110b63=_0x442f10,_0x3ae4c0=VisuMZ[_0x110b63(0x1d7)]['RegExp'];if(!!this[_0x110b63(0xd3)]()&&this[_0x110b63(0x1dc)]()[_0x110b63(0x116)]['match'](_0x3ae4c0['BoostTurns'])){var _0x4ab18c=this[_0x110b63(0xd3)]()[_0x110b63(0x119)](_0x110b63(0x1b3));$gameTemp[_0x110b63(0x213)]=_0x4ab18c,$gameTemp[_0x110b63(0x11b)]=this[_0x110b63(0xd3)]()[_0x110b63(0x135)](_0x110b63(0x1b3));}_0x27e580&&($gameTemp[_0x110b63(0x213)]=undefined,$gameTemp[_0x110b63(0x11b)]=undefined);},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0xb2)]=Game_Action['prototype']['applyItemUserEffect'],Game_Action[_0x442f10(0x1a5)][_0x442f10(0x1ca)]=function(_0x4db4c9){const _0x3432e3=_0x442f10;VisuMZ[_0x3432e3(0x1d7)][_0x3432e3(0xb2)]['call'](this,_0x4db4c9),this['applyBPEffects'](_0x4db4c9);},Game_Action[_0x442f10(0x1a5)][_0x442f10(0x223)]=function(_0xd8c402){const _0x1b4863=_0x442f10,_0x5f559a=VisuMZ[_0x1b4863(0x1d7)][_0x1b4863(0x157)];if(!!_0xd8c402&&this[_0x1b4863(0x1dc)]()['note'][_0x1b4863(0xa0)](_0x5f559a['TargetBoostPoints'])){var _0x35449a=parseInt(RegExp['$1']);this['item']()['note']['match'](_0x5f559a['BoostGainPoints'])&&(_0x35449a=Math[_0x1b4863(0x212)](this[_0x1b4863(0xd3)]()['boostMultiplier'](_0x1b4863(0x209))*_0x35449a),_0x35449a+=this[_0x1b4863(0xd3)]()['boostAddition'](_0x1b4863(0x209))),_0xd8c402[_0x1b4863(0x1a0)](_0x35449a);}if(!!this[_0x1b4863(0xd3)]()&&this[_0x1b4863(0x1dc)]()[_0x1b4863(0x116)][_0x1b4863(0xa0)](_0x5f559a['UserBoostPoints'])){var _0x35449a=parseInt(RegExp['$1']);this[_0x1b4863(0x1dc)]()[_0x1b4863(0x116)][_0x1b4863(0xa0)](_0x5f559a[_0x1b4863(0x123)])&&(_0x35449a=Math[_0x1b4863(0x212)](this[_0x1b4863(0xd3)]()[_0x1b4863(0x119)]('BP\x20Effect')*_0x35449a),_0x35449a+=this[_0x1b4863(0xd3)]()[_0x1b4863(0x135)](_0x1b4863(0x209))),this['subject']()['gainStoredBoostPoints'](_0x35449a);}},Game_BattlerBase[_0x442f10(0xce)]=VisuMZ['BoostAction']['Settings']['Mechanics'][_0x442f10(0xdd)],Game_BattlerBase['BOOST_POINTS_MAX_TOUSE']=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)][_0x442f10(0x1a4)][_0x442f10(0xec)],Game_BattlerBase['BOOST_POINTS_DEATH_REGEN']=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)][_0x442f10(0x1a4)]['DeathRegen'],Game_BattlerBase[_0x442f10(0x1bb)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)][_0x442f10(0x1a4)]['DeathRemoval'],Game_BattlerBase[_0x442f10(0x1cb)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)][_0x442f10(0x1a4)][_0x442f10(0x18f)],Game_BattlerBase[_0x442f10(0xf3)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['Mechanics'][_0x442f10(0x10d)],Game_BattlerBase[_0x442f10(0x11f)]=VisuMZ[_0x442f10(0x1d7)]['Settings'][_0x442f10(0x1a4)][_0x442f10(0x208)],VisuMZ[_0x442f10(0x1d7)][_0x442f10(0xc2)]=Game_BattlerBase[_0x442f10(0x1a5)]['initialize'],Game_BattlerBase[_0x442f10(0x1a5)][_0x442f10(0x115)]=function(){const _0x48cee9=_0x442f10;VisuMZ[_0x48cee9(0x1d7)][_0x48cee9(0xc2)]['call'](this),this[_0x48cee9(0x1b9)]();},Game_BattlerBase['prototype']['initBoostAction']=function(){const _0x51f837=_0x442f10;this[_0x51f837(0x1fe)]=this[_0x51f837(0x1fe)]||0x0,this[_0x51f837(0x1c8)]=this[_0x51f837(0x1c8)]||0x0,this['_turnUsedBoostPoints']=this[_0x51f837(0x14d)]||0x0;},Game_BattlerBase['prototype'][_0x442f10(0x1df)]=function(){const _0x254a6e=_0x442f10;if(this[_0x254a6e(0x1fe)]===undefined){if(_0x254a6e(0x152)!==_0x254a6e(0x152))return'';else this[_0x254a6e(0x1b9)]();}return this[_0x254a6e(0x1fe)];},Game_BattlerBase[_0x442f10(0x1a5)]['setStoredBoostPoints']=function(_0x11d123){const _0x55a037=_0x442f10;if(this[_0x55a037(0x1fe)]===undefined){if('lBFXJ'===_0x55a037(0x110))this['initBoostAction']();else return 0x0;}_0x11d123=Math[_0x55a037(0x212)](_0x11d123),this[_0x55a037(0x1fe)]=_0x11d123[_0x55a037(0xa1)](0x0,Game_BattlerBase['BOOST_POINTS_MAX_STORED']),this['refresh']();},Game_BattlerBase[_0x442f10(0x1a5)][_0x442f10(0xae)]=function(){const _0xec1f8e=_0x442f10;return this[_0xec1f8e(0x1c8)]===undefined&&this[_0xec1f8e(0x1b9)](),this[_0xec1f8e(0x1c8)];},Game_BattlerBase[_0x442f10(0x1a5)]['setToUseBoostPoints']=function(_0x8ed2e1){const _0x13be47=_0x442f10;if(this['_toUseBoostPoints']===undefined){if(_0x13be47(0xf8)===_0x13be47(0x173))return'';else this[_0x13be47(0x1b9)]();}_0x8ed2e1=Math['round'](_0x8ed2e1),this['_toUseBoostPoints']=_0x8ed2e1[_0x13be47(0xa1)](0x0,Game_BattlerBase[_0x13be47(0xd2)]),this[_0x13be47(0x124)]();},Game_BattlerBase['prototype']['boostPointsRegenValue']=function(){const _0x5656cc=_0x442f10;if(!Game_BattlerBase[_0x5656cc(0x228)]&&(this[_0x5656cc(0x112)]()||this[_0x5656cc(0x1c4)]()))return 0x0;else{var _0x56cb7c=Game_BattlerBase[_0x5656cc(0xf3)];return _0x56cb7c=this['bpRegenMultipliers'](_0x56cb7c),_0x56cb7c=this[_0x5656cc(0x192)](_0x56cb7c),_0x56cb7c;}},Game_BattlerBase[_0x442f10(0x1a5)]['isBoostSealed']=function(){const _0xaa3a19=_0x442f10,_0x14e159=this[_0xaa3a19(0x1ba)](),_0x397a40=VisuMZ[_0xaa3a19(0x1d7)][_0xaa3a19(0x157)];return _0x14e159[_0xaa3a19(0x1c6)](_0x24f83a=>_0x24f83a&&_0x24f83a[_0xaa3a19(0x116)][_0xaa3a19(0xa0)](_0x397a40[_0xaa3a19(0x1a6)]));},VisuMZ[_0x442f10(0x1d7)]['Game_BattlerBase_resetStateCounts']=Game_BattlerBase[_0x442f10(0x1a5)][_0x442f10(0xc9)],Game_BattlerBase[_0x442f10(0x1a5)][_0x442f10(0xc9)]=function(_0x4b81cc){const _0x11530e=_0x442f10;var _0x47990c=this[_0x11530e(0x1f5)][_0x4b81cc]||0x0;VisuMZ[_0x11530e(0x1d7)][_0x11530e(0x164)][_0x11530e(0xbc)](this,_0x4b81cc);if(!!$gameTemp[_0x11530e(0x213)]){$gameTemp[_0x11530e(0x11b)]=$gameTemp[_0x11530e(0x11b)]||0x0;var _0x18c26e=$dataStates[_0x4b81cc],_0x7268e5=Math[_0x11530e(0x212)](_0x18c26e['maxTurns']*$gameTemp['_bpTurnRate'])+$gameTemp[_0x11530e(0x11b)],_0x59a7e5=Math[_0x11530e(0x212)](_0x18c26e[_0x11530e(0x12b)]*$gameTemp[_0x11530e(0x213)])+$gameTemp[_0x11530e(0x11b)],_0x28e61e=0x1+Math['max'](_0x7268e5-_0x59a7e5,0x0);const _0x1fc98b=this[_0x11530e(0x175)](_0x18c26e)[_0x11530e(0x19f)]()['trim']();switch(_0x1fc98b){case'reset':this['_stateTurns'][_0x4b81cc]=_0x59a7e5+Math[_0x11530e(0x193)](_0x28e61e);break;case _0x11530e(0x1fa):const _0x25b3ef=this['_stateTurns'][_0x4b81cc],_0x42b26a=_0x59a7e5+Math[_0x11530e(0x193)](_0x28e61e);this[_0x11530e(0x1f5)][_0x4b81cc]=Math[_0x11530e(0x1ee)](_0x25b3ef,_0x42b26a);break;case'add':this[_0x11530e(0x1f5)][_0x4b81cc]=_0x59a7e5+Math[_0x11530e(0x193)](_0x28e61e)+_0x47990c;break;}}},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x1cf)]=Game_BattlerBase[_0x442f10(0x1a5)][_0x442f10(0x1e4)],Game_BattlerBase[_0x442f10(0x1a5)][_0x442f10(0x1e4)]=function(_0x1ca8c4){const _0x265d77=_0x442f10;if(VisuMZ[_0x265d77(0x1d7)][_0x265d77(0x1cf)][_0x265d77(0xbc)](this,_0x1ca8c4)){if(_0x265d77(0x1eb)!=='KhoJf'){var _0x54ab82=this[_0x265d77(0xae)]()[_0x265d77(0xa1)](0x0,_0x5102d0[_0x265d77(0xd2)]);const _0xb3d8a8=_0x110b9c[_0x265d77(0x178)];var _0x3963bc=_0x134f1c(_0xb3d8a8[_0x54ab82]||_0xb3d8a8[0x0]);_0x3963bc>0x0&&_0x4c52b3['requestFauxAnimation']([this],_0x3963bc,![],![]);}else return this[_0x265d77(0x1e8)](_0x1ca8c4);}else return![];},Game_BattlerBase[_0x442f10(0x1a5)]['meetstoUseBoostPointsRequirement']=function(_0x48f015){const _0x164eb5=_0x442f10,_0x5307ea=VisuMZ[_0x164eb5(0x1d7)]['RegExp'];var _0x1a5881=_0x48f015[_0x164eb5(0x116)];if(_0x1a5881[_0x164eb5(0xa0)](_0x5307ea[_0x164eb5(0x1e7)][_0x164eb5(0x127)])||_0x1a5881['match'](_0x5307ea[_0x164eb5(0x1e7)][_0x164eb5(0x203)])){var _0x909d1a=parseInt(RegExp['$1']);return this[_0x164eb5(0xe8)]()?this['toUseBoostPoints']()>=_0x909d1a:_0x164eb5(0x1b5)!==_0x164eb5(0x1b5)?this[_0x164eb5(0x1df)]()>_0x263849:this[_0x164eb5(0x1df)]()>=_0x909d1a;}else{if(_0x48f015['note'][_0x164eb5(0xa0)](_0x5307ea[_0x164eb5(0x1e7)][_0x164eb5(0x203)])){var _0x909d1a=parseInt(RegExp['$1']);return this[_0x164eb5(0xe8)]()?this[_0x164eb5(0xae)]()>_0x909d1a:this[_0x164eb5(0x1df)]()>_0x909d1a;}else{if(_0x48f015[_0x164eb5(0x116)]['match'](_0x5307ea[_0x164eb5(0x1e7)]['Equal'])){var _0x909d1a=parseInt(RegExp['$1']);if(this[_0x164eb5(0xe8)]())return this[_0x164eb5(0xae)]()===_0x909d1a;else{if('zJMDC'==='mrpft')_0x377c80[_0x164eb5(0xaf)]()[_0x164eb5(0x1a0)](-0x1),_0x371547[_0x164eb5(0xaf)]()['gainToUseBoostPoints'](0x1),_0x2589ff['actor']()[_0x164eb5(0x21c)](),this['_helpWindow'][_0x164eb5(0x124)](),!_0x35ea68&&this[_0x164eb5(0x13a)][_0x164eb5(0xa8)](),this[_0x164eb5(0x13a)][_0x164eb5(0x124)]();else return this[_0x164eb5(0x1df)]()===_0x909d1a;}}else{if(_0x48f015[_0x164eb5(0x116)][_0x164eb5(0xa0)](_0x5307ea[_0x164eb5(0x1e7)][_0x164eb5(0xba)])){var _0x909d1a=parseInt(RegExp['$1']);if(this['isActor']()){if(_0x164eb5(0x218)!=='ttPaP')return this[_0x164eb5(0xae)]()<_0x909d1a;else var _0x52b9e1=_0x5aea2f[_0x164eb5(0x14a)];}else return this[_0x164eb5(0x1df)]()<_0x909d1a;}else{if(_0x48f015['note']['match'](_0x5307ea[_0x164eb5(0x1e7)][_0x164eb5(0x12e)])){if('QmmXH'!==_0x164eb5(0x20e)){var _0x909d1a=parseInt(RegExp['$1']);if(this['isActor']())return _0x164eb5(0x138)===_0x164eb5(0x210)?_0xae1742:this[_0x164eb5(0xae)]()<=_0x909d1a;else{if(_0x164eb5(0xb0)===_0x164eb5(0x170))_0x51423a[_0x164eb5(0x197)]()&&(this[_0x164eb5(0x1f1)](),this[_0x164eb5(0x207)]()),_0x3f3b12['BoostAction'][_0x164eb5(0x1f3)]['call'](this);else return this[_0x164eb5(0x1df)]()<=_0x909d1a;}}else this[_0x164eb5(0x18b)][_0x164eb5(0xf5)]();}else return!![];}}}}},Game_Battler['BOOST_POINTS_MULTIPLIERS']={'Damage':VisuMZ[_0x442f10(0x1d7)]['Settings'][_0x442f10(0x1a4)][_0x442f10(0x149)],'Turn':VisuMZ[_0x442f10(0x1d7)]['Settings'][_0x442f10(0x1a4)]['TurnMultiply'],'Repeat':VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)][_0x442f10(0x1a4)][_0x442f10(0x18d)],'BpEffect':VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['Mechanics'][_0x442f10(0x151)],'Analyze':VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)][_0x442f10(0x1a4)][_0x442f10(0x1b0)]},Game_Battler[_0x442f10(0x1fb)]={'Damage':VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['Mechanics'][_0x442f10(0x13e)],'Turn':VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['Mechanics'][_0x442f10(0x1bd)],'Repeat':VisuMZ['BoostAction'][_0x442f10(0x16b)]['Mechanics'][_0x442f10(0xb3)],'BpEffect':VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)][_0x442f10(0x1a4)][_0x442f10(0x16f)],'Analyze':VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)][_0x442f10(0x1a4)][_0x442f10(0x1b2)]},Game_Battler[_0x442f10(0x178)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)][_0x442f10(0x1a4)]['Animations'],Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x1a0)]=function(_0x5c71b3){const _0x56fe4b=_0x442f10;this[_0x56fe4b(0x1e2)](this[_0x56fe4b(0x1df)]()+_0x5c71b3);},Game_Battler['prototype'][_0x442f10(0x180)]=function(_0x4e0db0){const _0x4b5c9c=_0x442f10;this[_0x4b5c9c(0x109)](this['toUseBoostPoints']()+_0x4e0db0);},Game_Battler[_0x442f10(0x1a5)]['boostMultiplier']=function(_0x280aff){const _0x3aff09=_0x442f10,_0xadedf4=Game_Battler[_0x3aff09(0x1de)];if(_0x280aff['match'](/Damage/i))var _0x52069d=_0xadedf4[_0x3aff09(0x1b1)];else{if(_0x280aff[_0x3aff09(0xa0)](/Turn/i)){if('QNhsa'!==_0x3aff09(0x145))_0xce7494=_0x4d8366['round'](this[_0x3aff09(0xd3)]()['boostMultiplier'](_0x3aff09(0x209))*_0x1a2420),_0x40aa90+=this[_0x3aff09(0xd3)]()['boostAddition']('BP\x20Effect');else var _0x52069d=_0xadedf4[_0x3aff09(0x1b3)];}else{if(_0x280aff[_0x3aff09(0xa0)](/Repeat/i))var _0x52069d=_0xadedf4['Repeat'];else{if(_0x280aff[_0x3aff09(0xa0)](/BP Effect/i))var _0x52069d=_0xadedf4[_0x3aff09(0x14a)];else{if(_0x280aff[_0x3aff09(0xa0)](/Analyze/i)){if('OmyDy'!=='OmyDy'){var _0x55ba05=this[_0x3aff09(0xd9)],_0x2f2583=_0x55ba05[_0x3aff09(0xe9)]();!!_0x55ba05&&_0x55ba05['isEnemy']()&&!!_0x2f2583&&_0x2f2583[_0x3aff09(0x204)]()&&_0x55ba05[_0x3aff09(0x1df)]()>0x0&&!_0x55ba05['isBoostSealed']()&&_0x55ba05['processtoUseBoostPoints'](_0x2f2583[_0x3aff09(0x1dc)]());}else var _0x52069d=_0xadedf4[_0x3aff09(0x186)];}else{if(_0x3aff09(0x19d)===_0x3aff09(0xc3))_0x4bd40c=_0x38e084[_0x3aff09(0x212)](this[_0x3aff09(0xd3)]()[_0x3aff09(0x119)]('BP\x20Effect')*_0x2dc2fe),_0x1712e0+=this['subject']()[_0x3aff09(0x135)](_0x3aff09(0x209));else return this[_0x3aff09(0xae)]();}}}}}var _0x420f91=this['toUseBoostPoints']();return _0x52069d[_0x420f91]||_0x52069d[0x0];},Game_Battler['prototype'][_0x442f10(0x135)]=function(_0x1eb1cb){const _0x365137=_0x442f10,_0x384093=Game_Battler['BOOST_POINTS_ADDITION'];if(_0x1eb1cb[_0x365137(0xa0)](/Damage/i)){if(_0x365137(0x132)===_0x365137(0x132))var _0x20ec49=_0x384093['Damage'];else{if(!_0x21cc38[_0x365137(0x1d1)])return;const _0x275a14=this[_0x365137(0x1b8)](),_0x53a4e9=_0x48b611[_0x365137(0x194)],_0xf16d0e=_0x5503aa[_0x365137(0x162)],_0x5d2566=_0x275a14==='text'?_0x53a4e9:'\x5cI[%1]%2'[_0x365137(0x11d)](_0xf16d0e,_0x53a4e9);var _0xece453=this[_0x365137(0x10f)]['canUndoBoostPoints']();this[_0x365137(0xf4)](_0x5d2566,_0x365137(0x13f),_0xece453);}}else{if(_0x1eb1cb[_0x365137(0xa0)](/Turn/i))var _0x20ec49=_0x384093[_0x365137(0x1b3)];else{if(_0x1eb1cb[_0x365137(0xa0)](/Repeat/i))var _0x20ec49=_0x384093[_0x365137(0xe0)];else{if(_0x1eb1cb[_0x365137(0xa0)](/BP Effect/i)){if(_0x365137(0xbd)!==_0x365137(0xbd))_0x14c288['BoostAction'][_0x365137(0xdf)][_0x365137(0xbc)](this),this[_0x365137(0x18b)]&&this[_0x365137(0x18b)][_0x365137(0xb4)](_0x5ebe12['actor']());else var _0x20ec49=_0x384093['BpEffect'];}else{if(_0x1eb1cb['match'](/Analyze/i))var _0x20ec49=_0x384093[_0x365137(0x186)];else{if(_0x365137(0x1ff)===_0x365137(0x1ad))_0x137238=_0x4a75ab[_0x365137(0xa1)](0x0,this[_0x365137(0x1df)]()),_0x540451=_0x19a24b[_0x365137(0xa1)](0x0,_0x41c40c['BOOST_POINTS_MAX_TOUSE']),this[_0x365137(0x1a0)](-_0x2ae802),this[_0x365137(0x180)](_0x4e647f);else return this['toUseBoostPoints']();}}}}}var _0x1257ca=this[_0x365137(0xae)]();return parseInt(_0x20ec49[_0x1257ca]||_0x20ec49[0x0]);},Game_Battler['prototype'][_0x442f10(0x21e)]=function(){const _0x3c4306=_0x442f10;if(this[_0x3c4306(0x10b)]){if('Yuxmz'!==_0x3c4306(0xbe))return this[_0x3c4306(0xa4)](_0xe34896(arguments[0x1]));else{this[_0x3c4306(0x10b)]=undefined;return;}}var _0x38a0ac=Game_BattlerBase['BOOST_POINTS_START_BATTLE'];_0x38a0ac=this[_0x3c4306(0x17a)](_0x38a0ac),_0x38a0ac=this[_0x3c4306(0x191)](_0x38a0ac),_0x38a0ac=Math[_0x3c4306(0x212)](_0x38a0ac),this['setStoredBoostPoints'](_0x38a0ac);},Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x17a)]=function(_0x2f17ba){const _0x10bfe3=_0x442f10,_0x4771f3=this['traitObjects'](),_0x391755=VisuMZ[_0x10bfe3(0x1d7)]['RegExp'];for(const _0x3fe194 of _0x4771f3){if(!_0x3fe194)continue;_0x3fe194[_0x10bfe3(0x116)]['match'](_0x391755[_0x10bfe3(0x179)])&&(_0x2f17ba*=Number(RegExp['$1'])*0.01);}return _0x2f17ba;},Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x191)]=function(_0x57dc84){const _0x3c7dff=_0x442f10,_0x210af5=this[_0x3c7dff(0x1ba)](),_0x101d32=VisuMZ['BoostAction'][_0x3c7dff(0x157)];for(const _0x52e5a8 of _0x210af5){if(_0x3c7dff(0x18e)!==_0x3c7dff(0xc7)){if(!_0x52e5a8)continue;_0x52e5a8[_0x3c7dff(0x116)][_0x3c7dff(0xa0)](_0x101d32[_0x3c7dff(0x154)])&&(_0x3c7dff(0x214)!==_0x3c7dff(0x214)?(_0x18e1b7['_bpTurnRate']=_0x1d2c65,_0x2c4170[_0x3c7dff(0x11b)]=_0x646658):_0x57dc84+=Number(RegExp['$1']));}else this[_0x3c7dff(0x1d4)]['x']=_0xae9f9b['ICON_SIZE_RATE'],this[_0x3c7dff(0x1d4)]['y']=_0x5892c8[_0x3c7dff(0xd7)];}return _0x57dc84;},Game_Battler[_0x442f10(0x1a5)]['startChangeBoostPointsAnimation']=function(){const _0x1d1a03=_0x442f10;var _0x5b1135=this['toUseBoostPoints']()[_0x1d1a03(0xa1)](0x0,Game_BattlerBase[_0x1d1a03(0xd2)]);const _0x58250b=Game_Battler[_0x1d1a03(0x178)];var _0x3dbbef=Number(_0x58250b[_0x5b1135]||_0x58250b[0x0]);if(_0x3dbbef>0x0){if(_0x1d1a03(0x134)!==_0x1d1a03(0x134))var _0x4b9349=_0x333dcc[_0x1d1a03(0xe0)];else $gameTemp['requestFauxAnimation']([this],_0x3dbbef,![],![]);}},Game_Battler[_0x442f10(0x1a5)]['canUseBoostPoints']=function(){const _0x4f1a27=_0x442f10;if(this[_0x4f1a27(0xf7)]())return![];return this['toUseBoostPoints']()<Game_BattlerBase['BOOST_POINTS_MAX_TOUSE']&&this[_0x4f1a27(0x1df)]()>0x0;},Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x17d)]=function(){return this['toUseBoostPoints']()>0x0;},VisuMZ['BoostAction'][_0x442f10(0x155)]=Game_Battler[_0x442f10(0x1a5)]['removeBattleStates'],Game_Battler[_0x442f10(0x1a5)]['removeBattleStates']=function(){const _0x2ae9d9=_0x442f10;VisuMZ[_0x2ae9d9(0x1d7)][_0x2ae9d9(0x155)][_0x2ae9d9(0xbc)](this),this['_storedBoostPoints']=0x0,this[_0x2ae9d9(0x1c8)]=0x0;},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x133)]=Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x1a3)],Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x1a3)]=function(){const _0x5b468e=_0x442f10;VisuMZ[_0x5b468e(0x1d7)][_0x5b468e(0x133)][_0x5b468e(0xbc)](this),this[_0x5b468e(0x220)]();},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x21a)]=Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x1c5)],Game_Battler['prototype']['regenerateAll']=function(){const _0x260173=_0x442f10;VisuMZ[_0x260173(0x1d7)][_0x260173(0x21a)]['call'](this),Game_BattlerBase[_0x260173(0x228)]&&this[_0x260173(0x112)]()&&$gameParty[_0x260173(0xc0)]()&&this[_0x260173(0x220)]();},Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x220)]=function(){const _0x2b7de0=_0x442f10;if(Game_BattlerBase[_0x2b7de0(0x1cb)]||this[_0x2b7de0(0x14d)]<=0x0){if(_0x2b7de0(0x13d)===_0x2b7de0(0x108))return _0x3cfc44=this[_0x2b7de0(0x1e6)](_0x49cb87),_0xc54c27[_0x2b7de0(0x1d7)][_0x2b7de0(0x217)][_0x2b7de0(0xbc)](this,_0x48552e,_0x248f60);else this[_0x2b7de0(0x1a0)](this[_0x2b7de0(0x1d2)]());}this[_0x2b7de0(0x14d)]=0x0;},VisuMZ['BoostAction'][_0x442f10(0xa5)]=BattleManager[_0x442f10(0xc6)],BattleManager[_0x442f10(0xc6)]=function(){const _0x420809=_0x442f10;this['_subject']&&this[_0x420809(0xd9)][_0x420809(0x1aa)](),VisuMZ[_0x420809(0x1d7)][_0x420809(0xa5)][_0x420809(0xbc)](this);},Game_Battler[_0x442f10(0x1a5)]['endActionBoostPoints']=function(){const _0x10821d=_0x442f10;if(Imported[_0x10821d(0x16a)]&&$gameTemp[_0x10821d(0x160)]())return;this[_0x10821d(0x14d)]+=this['toUseBoostPoints'](),this[_0x10821d(0x109)](0x0);},Game_Battler[_0x442f10(0x1a5)]['bpRegenMultipliers']=function(_0x45fe32){const _0x59c293=_0x442f10,_0x16dae1=this[_0x59c293(0x1ba)](),_0x1a5b5a=VisuMZ['BoostAction'][_0x59c293(0x157)];for(const _0x3c2d2c of _0x16dae1){if(_0x59c293(0x19a)!==_0x59c293(0x19a)){var _0x5e385e=this[_0x59c293(0xa9)][_0x59c293(0x119)]('Repeat');_0x57974d=_0x32f090[_0x59c293(0x212)](_0x51019d*_0x5e385e),_0xa16b86+=this['_bpSubject'][_0x59c293(0x135)](_0x59c293(0xe0));}else{if(!_0x3c2d2c)continue;_0x3c2d2c['note'][_0x59c293(0xa0)](_0x1a5b5a[_0x59c293(0x107)])&&(_0x59c293(0x18a)!==_0x59c293(0x18a)?this['setStoredBoostPoints'](0x0):_0x45fe32*=Number(RegExp['$1'])*0.01);}}return _0x45fe32;},Game_Battler['prototype']['bpRegenAdded']=function(_0x5f5a63){const _0x47219e=_0x442f10,_0x538e40=this['traitObjects'](),_0x28870c=VisuMZ[_0x47219e(0x1d7)][_0x47219e(0x157)];for(const _0x305efc of _0x538e40){if('fGjFg'===_0x47219e(0x1a9)){if(!_0x305efc)continue;_0x305efc[_0x47219e(0x116)][_0x47219e(0xa0)](_0x28870c[_0x47219e(0x125)])&&(_0x5f5a63+=Number(RegExp['$1']));}else this['_subject'][_0x47219e(0x1aa)]();}return _0x5f5a63;},VisuMZ['BoostAction'][_0x442f10(0xfc)]=Game_Battler['prototype']['addState'],Game_Battler['prototype']['addState']=function(_0x22e347){const _0x327740=_0x442f10;var _0x1edcd8=this[_0x327740(0x112)]();VisuMZ[_0x327740(0x1d7)][_0x327740(0xfc)][_0x327740(0xbc)](this,_0x22e347),Game_BattlerBase[_0x327740(0x1bb)]&&!_0x1edcd8&&this[_0x327740(0x112)]()&&this[_0x327740(0x1e2)](0x0);},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x1d9)]=Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x202)],Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x202)]=function(_0x9e4d04,_0x50e18e){const _0x5b44dd=_0x442f10;if(!!$gameTemp[_0x5b44dd(0x213)]){if(_0x5b44dd(0x1e0)===_0x5b44dd(0x185))return _0x2c5b18;else $gameTemp[_0x5b44dd(0x11b)]=$gameTemp[_0x5b44dd(0x11b)]||0x0,_0x50e18e=Math[_0x5b44dd(0x212)]($gameTemp['_bpTurnRate']*_0x50e18e)+$gameTemp['_bpTurnFlat'];}VisuMZ['BoostAction'][_0x5b44dd(0x1d9)]['call'](this,_0x9e4d04,_0x50e18e);},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x226)]=Game_Battler['prototype'][_0x442f10(0x20d)],Game_Battler[_0x442f10(0x1a5)][_0x442f10(0x20d)]=function(_0xfe2a5b,_0x6159f5){const _0x2e01d9=_0x442f10;!!$gameTemp[_0x2e01d9(0x213)]&&(_0x2e01d9(0x167)!==_0x2e01d9(0x1e1)?($gameTemp['_bpTurnFlat']=$gameTemp['_bpTurnFlat']||0x0,_0x6159f5=Math['round']($gameTemp[_0x2e01d9(0x213)]*_0x6159f5)+$gameTemp['_bpTurnFlat']):_0x253444[_0x2e01d9(0x1a2)](_0xfcfccb)),VisuMZ['BoostAction'][_0x2e01d9(0x226)][_0x2e01d9(0xbc)](this,_0xfe2a5b,_0x6159f5);},Game_Enemy[_0x442f10(0x168)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)][_0x442f10(0x1a4)][_0x442f10(0x1da)],VisuMZ['BoostAction'][_0x442f10(0x1f0)]=Game_Enemy['prototype']['setup'],Game_Enemy['prototype'][_0x442f10(0x1a2)]=function(_0x208b61,_0x501e24,_0x4e8408){const _0x2ed2af=_0x442f10;VisuMZ['BoostAction']['Game_Enemy_setup'][_0x2ed2af(0xbc)](this,_0x208b61,_0x501e24,_0x4e8408),this[_0x2ed2af(0x131)]();},Game_Enemy[_0x442f10(0x1a5)][_0x442f10(0x131)]=function(){const _0x4e9b1f=_0x442f10,_0x18130d=VisuMZ[_0x4e9b1f(0x1d7)]['RegExp'];if(this[_0x4e9b1f(0xe2)]()[_0x4e9b1f(0x1f8)]===undefined){this['enemy']()[_0x4e9b1f(0x1f8)]={};var _0x39fc14=this[_0x4e9b1f(0xe2)]()[_0x4e9b1f(0x116)][_0x4e9b1f(0x114)](/[\r\n]+/);for(var _0x478242=0x0;_0x478242<_0x39fc14[_0x4e9b1f(0xaa)];_0x478242++){if(_0x4e9b1f(0x1d8)!=='ENjdR')this[_0x4e9b1f(0xa9)]=_0x55c13f;else{var _0x5b5965=_0x39fc14[_0x478242];if(_0x5b5965[_0x4e9b1f(0xa0)](_0x18130d[_0x4e9b1f(0x10a)])){var _0x3e0eb2=_0x4e9b1f(0xf0)+parseInt(RegExp['$1']),_0x16bd3d=String(RegExp['$2'])['toLowerCase']();this['enemy']()[_0x4e9b1f(0x1f8)][_0x3e0eb2]=_0x16bd3d;}else{if(_0x5b5965[_0x4e9b1f(0xa0)](_0x18130d[_0x4e9b1f(0x13b)])){var _0x2a85a5=String(RegExp['$1']),_0x16bd3d=String(RegExp['$2'])[_0x4e9b1f(0x19f)]();this[_0x4e9b1f(0xe2)]()[_0x4e9b1f(0x1f8)][_0x2a85a5]=_0x16bd3d;}}}}}},Game_Enemy['prototype'][_0x442f10(0x219)]=function(_0x47dca6){const _0x50caca=_0x442f10;this[_0x50caca(0x131)]();var _0x337c9d=this[_0x50caca(0x158)](_0x47dca6);_0x337c9d>0x0&&(_0x50caca(0xdc)==='iBeGI'?this['initialize'](...arguments):(this[_0x50caca(0x141)](_0x337c9d),this['startChangeBoostPointsAnimation']()));},Game_Enemy[_0x442f10(0x1a5)][_0x442f10(0x158)]=function(_0x33f565){const _0x3f9934=_0x442f10;if(this['storedBoostPoints']()<=0x0)return 0x0;var _0x1bdb88=_0x33f565[_0x3f9934(0xa2)],_0x9356ae='Skill\x20'+_0x33f565['id'],_0x4595d3=0x0;if(this['enemy']()[_0x3f9934(0x1f8)][_0x1bdb88]||this[_0x3f9934(0xe2)]()['_boostAI'][_0x9356ae]){var _0x3c0627=this[_0x3f9934(0xe2)]()[_0x3f9934(0x1f8)][_0x1bdb88]||this[_0x3f9934(0xe2)]()[_0x3f9934(0x1f8)][_0x9356ae];if(_0x3c0627[_0x3f9934(0xa0)](/(?:ALL|FULL)/i))'zFENQ'!=='zFENQ'?_0x57c73e+=_0x25c623(_0xaf0129['$1']):_0x4595d3=this[_0x3f9934(0x1df)]();else{if(_0x3c0627[_0x3f9934(0xa0)](/AT LEAST (\d+)/i)){if(_0x3f9934(0x222)!==_0x3f9934(0x222)){const _0x351365=_0x47c81b[_0x3f9934(0xaf)]();_0x351365&&_0x351365[_0x3f9934(0x17d)]()&&(_0x4f9d18[_0x3f9934(0x224)][_0x3f9934(0x201)](!![]),this['refresh'](),this[_0x3f9934(0x148)]()),_0x11e123[_0x3f9934(0x1fc)]();}else{var _0x4ea420=parseInt(RegExp['$1']);if(this[_0x3f9934(0x1df)]()>=_0x4ea420){if(_0x3f9934(0xf1)===_0x3f9934(0x195)){var _0x4a178e='Skill\x20'+_0x3bddd2(_0x1508ab['$1']),_0x317988=_0x574fba(_0xb42cbe['$2'])['toLowerCase']();this['enemy']()[_0x3f9934(0x1f8)][_0x4a178e]=_0x317988;}else _0x4595d3=this[_0x3f9934(0x1df)]();}}}else{if(_0x3c0627[_0x3f9934(0xa0)](/AT MOST (\d+)/i)){if(_0x3f9934(0xeb)===_0x3f9934(0xeb)){var _0x4ea420=parseInt(RegExp['$1']);if(this[_0x3f9934(0x1df)]()<=_0x4ea420){if('UHrps'==='llDwt'){this[_0x3f9934(0xcf)]=[];for(let _0x17ecba=0x1;_0x17ecba<=_0x1115a0[_0x3f9934(0xce)];_0x17ecba++){const _0x5bdb24=new _0x5ea877(_0x17ecba);this[_0x3f9934(0x15f)](_0x5bdb24),this[_0x3f9934(0xcf)][_0x3f9934(0x1f4)](_0x5bdb24);}}else _0x4595d3=this[_0x3f9934(0x1df)]();}}else return this[_0x3f9934(0x1db)](_0x3ada01(arguments[0x1]));}else{if(_0x3c0627[_0x3f9934(0xa0)](/EXACTLY (\d+)/i)){var _0x4ea420=parseInt(RegExp['$1']);this[_0x3f9934(0x1df)]()===_0x4ea420&&(_0x4595d3=_0x4ea420);}}}}}return _0x4595d3[_0x3f9934(0xa1)](0x0,Game_BattlerBase['BOOST_POINTS_MAX_TOUSE']);},Game_Enemy[_0x442f10(0x1a5)]['processEnemyBPUsage']=function(_0x195631){const _0x359002=_0x442f10;_0x195631=_0x195631[_0x359002(0xa1)](0x0,this[_0x359002(0x1df)]()),_0x195631=_0x195631[_0x359002(0xa1)](0x0,Game_BattlerBase[_0x359002(0xd2)]),this[_0x359002(0x1a0)](-_0x195631),this[_0x359002(0x180)](_0x195631);},Game_Enemy[_0x442f10(0x1a5)]['startChangeBoostPointsAnimation']=function(){const _0x2425c0=_0x442f10;var _0x55eb36=0x0,_0x221fa5=this[_0x2425c0(0xae)]()[_0x2425c0(0xa1)](0x0,Game_BattlerBase[_0x2425c0(0xd2)]);const _0x22a9e6=Game_Battler[_0x2425c0(0x178)],_0x10c3da=Game_Enemy[_0x2425c0(0x168)],_0x251c9e=0x3e8/0x3c;for(var _0x349677=0x1;_0x349677<=_0x221fa5;_0x349677++){var _0x4e0d36=_0x22a9e6[_0x349677]||_0x22a9e6[0x0];if(_0x4e0d36>0x0){let _0x4a2d59=_0x10c3da*(_0x349677-0x1);setTimeout($gameTemp['requestFauxAnimation'][_0x2425c0(0x1d3)]($gameTemp,[this],_0x4e0d36,![],![]),_0x4a2d59);}_0x55eb36+=_0x10c3da/_0x251c9e;}_0x55eb36=Math[_0x2425c0(0x106)](_0x55eb36),SceneManager['_scene'][_0x2425c0(0xe1)][_0x2425c0(0x17e)]=_0x55eb36;},Game_Unit[_0x442f10(0x1a5)]['setupBattleBoostPoints']=function(){const _0x23b0e0=_0x442f10;var _0x50cd29=this[_0x23b0e0(0x1e5)];this['_inBattle']=![];for(const _0xe04a85 of this[_0x23b0e0(0x101)]()){if(!_0xe04a85)continue;_0xe04a85[_0x23b0e0(0x21e)]();}this['_inBattle']=_0x50cd29;},VisuMZ['BoostAction']['Game_Party_addActor']=Game_Party['prototype'][_0x442f10(0x18c)],Game_Party['prototype']['addActor']=function(_0x4de829){const _0x339005=_0x442f10;VisuMZ[_0x339005(0x1d7)]['Game_Party_addActor'][_0x339005(0xbc)](this,_0x4de829),setTimeout(VisuMZ[_0x339005(0x1d7)][_0x339005(0x1bc)]['bind'](this),0x32);},VisuMZ['BoostAction'][_0x442f10(0x100)]=Game_Party[_0x442f10(0x1a5)][_0x442f10(0x12f)],Game_Party[_0x442f10(0x1a5)]['removeActor']=function(_0x5a830b){const _0x382521=_0x442f10;VisuMZ[_0x382521(0x1d7)][_0x382521(0x100)]['call'](this,_0x5a830b),setTimeout(VisuMZ['BoostAction'][_0x382521(0x1bc)]['bind'](this),0x32);},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x1a7)]=Game_Party[_0x442f10(0x1a5)][_0x442f10(0x1bf)],Game_Party[_0x442f10(0x1a5)][_0x442f10(0x1bf)]=function(){const _0x2e195c=_0x442f10;VisuMZ['BoostAction'][_0x2e195c(0x1a7)]['call'](this),setTimeout(VisuMZ[_0x2e195c(0x1d7)][_0x2e195c(0x1bc)]['bind'](this),0x32);},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x1bc)]=function(){const _0x2dc052=_0x442f10;if(!SceneManager[_0x2dc052(0x1e3)]())return;const _0x70915d=SceneManager[_0x2dc052(0x224)][_0x2dc052(0x18b)];if(!_0x70915d)return;_0x70915d[_0x2dc052(0xb4)](BattleManager[_0x2dc052(0xaf)]()),_0x70915d[_0x2dc052(0x124)]();},VisuMZ[_0x442f10(0x1d7)]['Scene_Battle_createActorCommandWindow']=Scene_Battle[_0x442f10(0x1a5)]['createActorCommandWindow'],Scene_Battle['prototype'][_0x442f10(0xbb)]=function(){const _0xcb526e=_0x442f10;VisuMZ[_0xcb526e(0x1d7)][_0xcb526e(0x12d)]['call'](this),this['_actorCommandWindow'][_0xcb526e(0x111)]('boost',this[_0xcb526e(0x161)][_0xcb526e(0x1d3)](this)),this[_0xcb526e(0x13a)]['setHandler'](_0xcb526e(0x13f),this[_0xcb526e(0x201)]['bind'](this));},Scene_Battle[_0x442f10(0x1a5)][_0x442f10(0x161)]=function(_0xeffb13){const _0x8a022c=_0x442f10;BattleManager[_0x8a022c(0xaf)]()[_0x8a022c(0x1a0)](-0x1),BattleManager[_0x8a022c(0xaf)]()[_0x8a022c(0x180)](0x1),BattleManager[_0x8a022c(0xaf)]()['startChangeBoostPointsAnimation'](),this['_helpWindow']['refresh'](),!_0xeffb13&&(_0x8a022c(0x1d6)!==_0x8a022c(0x122)?this['_actorCommandWindow']['activate']():this[_0x8a022c(0x109)](this[_0x8a022c(0xae)]()+_0x4208d7)),this[_0x8a022c(0x13a)][_0x8a022c(0x124)]();},Scene_Battle[_0x442f10(0x1a5)]['commandUnboost']=function(_0x17b392){const _0x5e80c7=_0x442f10;BattleManager[_0x5e80c7(0xaf)]()[_0x5e80c7(0x180)](-0x1),BattleManager[_0x5e80c7(0xaf)]()[_0x5e80c7(0x1a0)](0x1),BattleManager[_0x5e80c7(0xaf)]()[_0x5e80c7(0x21c)](),this[_0x5e80c7(0x18b)][_0x5e80c7(0x124)](),!_0x17b392&&this[_0x5e80c7(0x13a)]['activate'](),this[_0x5e80c7(0x13a)][_0x5e80c7(0x124)]();},VisuMZ['BoostAction'][_0x442f10(0x221)]=Scene_Battle[_0x442f10(0x1a5)]['selectNextCommand'],Scene_Battle[_0x442f10(0x1a5)][_0x442f10(0x11a)]=function(){const _0xa5b5fd=_0x442f10;this['_helpWindow']&&this[_0xa5b5fd(0x18b)][_0xa5b5fd(0xf5)](),VisuMZ['BoostAction']['Scene_Battle_selectNextCommand'][_0xa5b5fd(0xbc)](this);},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0xdf)]=Scene_Battle[_0x442f10(0x1a5)][_0x442f10(0xe7)],Scene_Battle[_0x442f10(0x1a5)][_0x442f10(0xe7)]=function(){const _0x3fc519=_0x442f10;VisuMZ[_0x3fc519(0x1d7)][_0x3fc519(0xdf)][_0x3fc519(0xbc)](this);if(this[_0x3fc519(0x18b)]){if('nWMKm'===_0x3fc519(0x14e))return this[_0x3fc519(0xae)]()>0x0;else this[_0x3fc519(0x18b)][_0x3fc519(0xb4)](BattleManager[_0x3fc519(0xaf)]());}};function Sprite_BoostContainer(){const _0x39ef0c=_0x442f10;this[_0x39ef0c(0x115)](...arguments);}Sprite_BoostContainer[_0x442f10(0x1a5)]=Object['create'](Sprite[_0x442f10(0x1a5)]),Sprite_BoostContainer['prototype'][_0x442f10(0x176)]=Sprite_BoostContainer,Sprite_BoostContainer[_0x442f10(0xd7)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['UI'][_0x442f10(0x140)],Sprite_BoostContainer['prototype'][_0x442f10(0x115)]=function(){const _0x2b725a=_0x442f10;Sprite[_0x2b725a(0x1a5)][_0x2b725a(0x115)][_0x2b725a(0xbc)](this),this[_0x2b725a(0x211)](),this['createChildSprites']();},Sprite_BoostContainer[_0x442f10(0x1a5)][_0x442f10(0x211)]=function(){const _0x131731=_0x442f10;this[_0x131731(0x1d4)]['x']=Sprite_BoostContainer[_0x131731(0xd7)],this[_0x131731(0x1d4)]['y']=Sprite_BoostContainer[_0x131731(0xd7)];},Sprite_BoostContainer[_0x442f10(0x1a5)][_0x442f10(0x129)]=function(){const _0x5ca8ec=_0x442f10;this[_0x5ca8ec(0xcf)]=[];for(let _0x3c08b4=0x1;_0x3c08b4<=Game_BattlerBase['BOOST_POINTS_MAX_STORED'];_0x3c08b4++){const _0x2d6f5c=new Sprite_BoostIcon(_0x3c08b4);this[_0x5ca8ec(0x15f)](_0x2d6f5c),this[_0x5ca8ec(0xcf)][_0x5ca8ec(0x1f4)](_0x2d6f5c);}},Sprite_BoostContainer[_0x442f10(0x1a5)][_0x442f10(0x1a2)]=function(_0x1d458f){const _0x7405f2=_0x442f10;if(!this[_0x7405f2(0xcf)])return;for(const _0x2b429d of this[_0x7405f2(0xcf)]){_0x2b429d[_0x7405f2(0x1a2)](_0x1d458f);}};function Sprite_BoostIcon(){const _0x297d50=_0x442f10;this[_0x297d50(0x115)](...arguments);}function _0x6acd(){const _0x1092b4=['IconSet','byXet','BoostAction','ENjdR','Game_Battler_addBuff','AnimationDelay','convertBoostUpEscape','item','move','BOOST_POINTS_MULTIPLIERS','storedBoostPoints','klhfC','yJkUR','setStoredBoostPoints','isSceneBattle','meetsUsableItemConditions','_inBattle','applyBoostPointDamage','Require','meetstoUseBoostPointsRequirement','NsXYl','iconHeight','KhoJf','blt','BOOST_POINTS_DISPLAY_OFFSET_X','max','loadBitmap','Game_Enemy_setup','addBoostCommand','boostCommandName','Window_ActorCommand_addGuardCommand','push','_stateTurns','fGQvq','LzEDc','_boostAI','processEnemyUseBoost','greater','BOOST_POINTS_ADDITION','clear','BattleStatusAutoPosition','_storedBoostPoints','Lkovu','fPhrw','commandUnboost','addBuff','GreaterEqual','isSkill','CwZPn','actor%1-boostPoints','addUnboostCommand','StartBattle','BP\x20Effect','width','convertBoostRepeatEscape','floor','addDebuff','NbdBE','BattleManager_setup','eHQmF','initMembers','round','_bpTurnRate','CbGCJ','isBTB','requestFauxAnimation','Game_Action_applyGuard','QPUxq','processtoUseBoostPoints','Game_Battler_regenerateAll','numRepeats','startChangeBoostPointsAnimation','ARRAYJSON','setupBattleBoostPoints','setFrame','regenerateBoostPoints','Scene_Battle_selectNextCommand','szKIp','applyBPEffects','_scene','toUpperCase','Game_Battler_addDebuff','smooth','BOOST_POINTS_DEATH_REGEN','match','clamp','name','update','convertBoostAnalyzeEscape','BattleManager_endAction','kOxAj','ARRAYFUNC','activate','_bpSubject','length','map','version','BattleStatusOffsetX','toUseBoostPoints','actor','OOZJS','GCTQR','__Game_Action_applyItemUserEffect','RepeatAddition','setBoostSubject','ARRAYSTRUCT','default','zeIFk','VisuMZ_1_BattleCore','canUseBoostPoints','Less','createActorCommandWindow','call','PBieA','Yuxmz','updateFrame','inBattle','fnrdf','Game_BattlerBase_initialize','ImhFg','apdPc','height','endAction','bvuHu','BypassConstructors','resetStateCounts','currentSymbol','\x5cI[%1]%2','30068ZncXaX','addGuardCommand','BOOST_POINTS_MAX_STORED','_icons','ShowFacesListStyle','show','BOOST_POINTS_MAX_TOUSE','subject','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','drawItemStatus','MHdnM','ICON_SIZE_RATE','convertBoostTurnEscape','_subject','328yzyOkK','drawItemStatusBoostPointsAuto','yPrph','MaxStored','boost','Scene_Battle_startActorCommandSelection','Repeat','_logWindow','enemy','parameters','BoostDamage','boostIcon','_battler','startActorCommandSelection','isActor','currentAction','NIXwD','OTVxd','Usable','ShowBoostCmd','_boostIconSheet','applyBoostPointRepeats','Skill\x20','LsiGY','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','BOOST_POINTS_TURN_REGEN','addCommand','clearBoostSubject','cFfhk','isBoostSealed','ZXJur','apply','lcDjG','optDisplayTp','Game_Battler_addState','boostIconsheetBitmap','lineHeight','resize','Game_Party_removeActor','members','crzOI','Game_Action_numRepeats','ARRAYSTR','playOkSound','ceil','BoostPointsRegenRate','ZlUkp','setToUseBoostPoints','EnemyBoostSkillID','_previousBattleChainBoostActions','updateIcon','Regen','list','_actor','lBFXJ','setHandler','isDead','uatoq','split','initialize','note','convertBoostEscapeCharacters','BOOST_POINTS_DISPLAY_AUTO_POS','boostMultiplier','selectNextCommand','_bpTurnFlat','_slot','format','replace','BOOST_POINTS_START_BATTLE','_iconIndex','Window_BattleStatus_drawItemStatus','fwxoV','BoostGainPoints','refresh','BoostPointsRegenFlat','return\x200','Amount','BoostCmd','createChildSprites','273811EfGNGq','minTurns','AZump','Scene_Battle_createActorCommandWindow','LessEqual','removeActor','Window_Selectable_cursorPagedown','setupBoostAI','gKKYK','Game_Battler_regenerateTp','uZykr','boostAddition','ConvertParams','KIQYk','PJwrw','PgUpDnShortcuts','_actorCommandWindow','EnemyBoostSkillName','create','BBgCt','DmgAddition','unboost','IconSizeRate','processEnemyBPUsage','STRUCT','EmptyIcon','IPeoj','QNhsa','DOdhM','BOOST_ACTION_SHOW','callUpdateHelp','DmgMultiply','BpEffect','cursorPageup','1458700Mnrkqw','_turnUsedBoostPoints','Tdsos','createInnerSprite','1664256wfTrHT','EffectMultiply','MFTkE','includes','BoostBattleStartFlat','Game_Battler_removeBattleStates','parse','RegExp','calculateBPtoUse','BattleLayout','convertBoostDamageEscape','description','VisuMZ_2_BattleSystemBTB','convertBoostEqualEscape','canUseBoostShortcut','addChild','getActiveChainSkillSelected','commandBoost','unboostIcon','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Game_BattlerBase_resetStateCounts','convertBoostEffectEscape','boostSmooth','SDflj','BOOST_POINTS_ANIMATION_DELAY','Window_Base_convertEscapeCharacters','VisuMZ_3_ActiveChainSkills','Settings','convertBoost0Escape','portrait','convertBoostGreaterEscape','EffectAddition','hGshP','AZZNN','FUNC','suzup','STR','getStateReapplyRulings','constructor','82692mrAKbK','BOOST_POINTS_ANIMATIONS','BoostBattleStartRate','setupBattleBoostPointsMultiplier','BOOST_POINTS_DISPLAY_OFFSET_Y','convertBoostLessEqualEscape','canUndoBoostPoints','_waitCount','Game_Action_apply','gainToUseBoostPoints','battleLayoutStyle','shouldDrawBoostIcons','exit','2764321kVbvwx','izvuW','Analyze','iconWidth','BattleStatusOffsetY','drawItemStatusBoostPoints','NFDnE','_helpWindow','addActor','RepeatMultiply','HQism','AlwaysRegen','convertBoostLessEscape','setupBattleBoostPointsAdded','bpRegenAdded','randomInt','unboostCommandName','yQSKB','text','allowBoostAction','bitmap','applyBoostPointTurns','NeySQ','33dtuxfi','addLoadListener','dZvbx','meetsBoostShortcutRequirements','toLowerCase','gainStoredBoostPoints','CJkRs','setup','regenerateTp','Mechanics','prototype','BoostSealed','Game_Party_partyChangeRefresh','actorId','fGjFg','endActionBoostPoints','IOXcq','UnboostCmd','REfEM','convertEscapeCharacters','cursorPagedown','AnalyzeMultiply','Damage','AnalyzeAddition','Turn','BOOST_ACTION_BYPASS_CONSTRUCTORS','rLJBa','drawItemStatusBoostPointsDefault','BOOST_ACTION_SHORTCUT_PAGEUP_PAGEDN','commandStyle','initBoostAction','traitObjects','BOOST_POINTS_DEATH_REMOVE','RefreshHelpWindowInBattle','TurnAddition','convertBoostGreaterEqualEscape','partyChangeRefresh','eZnVs','YsWYv','placeBoostPoints','_customModified','isHidden','regenerateAll','some','BattleManager_processTurn','_toUseBoostPoints','loadSystem','applyItemUserEffect','BOOST_POINTS_REGEN_ALWAYS','VisuMZ_1_SkillsStatesCore','58266tokjwZ','Window_Selectable_cursorPageup','Game_BattlerBase_meetsUsableItemConditions','status','UNBOOST_ACTION_SHOW','boostPointsRegenValue','bind','scale'];_0x6acd=function(){return _0x1092b4;};return _0x6acd();}Sprite_BoostIcon[_0x442f10(0x1a5)]=Object[_0x442f10(0x13c)](Sprite[_0x442f10(0x1a5)]),Sprite_BoostIcon[_0x442f10(0x1a5)][_0x442f10(0x176)]=Sprite_BoostIcon,Sprite_BoostIcon[_0x442f10(0x1a5)][_0x442f10(0x115)]=function(_0xa62db6){const _0x23c7bb=_0x442f10;this[_0x23c7bb(0x11c)]=_0xa62db6,Sprite[_0x23c7bb(0x1a5)]['initialize'][_0x23c7bb(0xbc)](this),this['initMembers'](),this[_0x23c7bb(0x1ef)]();},Sprite_BoostIcon[_0x442f10(0x1a5)][_0x442f10(0x211)]=function(){const _0x479fb1=_0x442f10;this['_iconIndex']=ImageManager['unboostIcon'],this['x']=ImageManager[_0x479fb1(0x187)]*(this['_slot']-0x1);},Sprite_BoostIcon['prototype'][_0x442f10(0x1ef)]=function(){const _0x9d652c=_0x442f10;this[_0x9d652c(0x198)]=ImageManager[_0x9d652c(0xfd)](),this[_0x9d652c(0x21f)](0x0,0x0,0x0,0x0);},Sprite_BoostIcon['prototype'][_0x442f10(0x1a2)]=function(_0x28d8cb){const _0x3848e6=_0x442f10;this[_0x3848e6(0xe6)]!==_0x28d8cb&&(this[_0x3848e6(0xe6)]=_0x28d8cb);},Sprite_BoostIcon[_0x442f10(0x1a5)]['update']=function(){const _0x1e53da=_0x442f10;Sprite['prototype'][_0x1e53da(0xa3)][_0x1e53da(0xbc)](this),this[_0x1e53da(0x10c)](),this[_0x1e53da(0xbf)]();},Sprite_BoostIcon['prototype'][_0x442f10(0x10c)]=function(){const _0x3d4b35=_0x442f10;if(this[_0x3d4b35(0xe6)]){if(_0x3d4b35(0xfa)===_0x3d4b35(0xfa)){let _0x281779=this['_battler'][_0x3d4b35(0x1df)]();_0x281779>=this['_slot']?this['_iconIndex']=ImageManager[_0x3d4b35(0xe5)]:this['_iconIndex']=ImageManager[_0x3d4b35(0x162)];}else return'';}else this[_0x3d4b35(0x120)]=0x0;},Sprite_BoostIcon[_0x442f10(0x1a5)][_0x442f10(0xbf)]=function(){const _0x48a29b=_0x442f10,_0xc83340=ImageManager[_0x48a29b(0x187)],_0x3478cd=ImageManager[_0x48a29b(0x1ea)],_0x5eb4ad=this['_iconIndex']%0x10*_0xc83340,_0x481cb3=Math[_0x48a29b(0x20c)](this['_iconIndex']/0x10)*_0x3478cd;this[_0x48a29b(0x21f)](_0x5eb4ad,_0x481cb3,_0xc83340,_0x3478cd);},VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x169)]=Window_Base[_0x442f10(0x1a5)]['convertEscapeCharacters'],Window_Base[_0x442f10(0x1a5)][_0x442f10(0x1ae)]=function(_0x2fc4c8){const _0xae431e=_0x442f10;return _0x2fc4c8=VisuMZ['BoostAction'][_0xae431e(0x169)][_0xae431e(0xbc)](this,_0x2fc4c8),_0x2fc4c8=this[_0xae431e(0x117)](_0x2fc4c8),_0x2fc4c8;},Window_Base['prototype'][_0x442f10(0x117)]=function(_0x2d2266){const _0x3caaad=_0x442f10;return _0x2d2266=_0x2d2266['replace'](/\x1b(?:BP|BOOST)DMG\[(\d+)\]/gi,function(){const _0x2f95e1=_0x4c04;if('kOxAj'!==_0x2f95e1(0xa6))this[_0x2f95e1(0x220)]();else return this[_0x2f95e1(0x15a)](parseInt(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)DAMAGE\[(\d+)\]/gi,function(){const _0xef7ff4=_0x3caaad;if(_0xef7ff4(0x137)===_0xef7ff4(0xf6)){var _0x41b355=_0x392691(_0x10081a['$1']);this[_0xef7ff4(0x1dc)]()['note'][_0xef7ff4(0xa0)](_0x24660c[_0xef7ff4(0x123)])&&(_0x41b355=_0x5dd9b0[_0xef7ff4(0x212)](this['subject']()[_0xef7ff4(0x119)](_0xef7ff4(0x209))*_0x41b355),_0x41b355+=this[_0xef7ff4(0xd3)]()[_0xef7ff4(0x135)](_0xef7ff4(0x209))),this[_0xef7ff4(0xd3)]()[_0xef7ff4(0x1a0)](_0x41b355);}else return this['convertBoostDamageEscape'](parseInt(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266['replace'](/\x1b(?:BP|BOOST)TURN\[(\d+)\]/gi,function(){const _0x4b77fb=_0x3caaad;return this[_0x4b77fb(0xd8)](parseInt(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)TURNS\[(\d+)\]/gi,function(){const _0x4f37fc=_0x3caaad;return this[_0x4f37fc(0xd8)](parseInt(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266['replace'](/\x1b(?:BP|BOOST)REP\[(\d+)\]/gi,function(){const _0x4e309a=_0x3caaad;return this[_0x4e309a(0x20b)](parseInt(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)REPEAT\[(\d+)\]/gi,function(){const _0xcec116=_0x3caaad;return this[_0xcec116(0x20b)](parseInt(arguments[0x1]));}['bind'](this)),_0x2d2266=_0x2d2266['replace'](/\x1b(?:BP|BOOST)REPEATS\[(\d+)\]/gi,function(){const _0x35e8ca=_0x3caaad;return this[_0x35e8ca(0x20b)](parseInt(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)HITS\[(\d+)\]/gi,function(){const _0x591cdf=_0x3caaad;return this[_0x591cdf(0x20b)](parseInt(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)ANALYZE\[(\d+)\]/gi,function(){const _0x5bf8cd=_0x3caaad;if(_0x5bf8cd(0x1c1)===_0x5bf8cd(0x1f7)){var _0x5aedbf=0x0,_0xff86c9=this['toUseBoostPoints']()[_0x5bf8cd(0xa1)](0x0,_0x3d52e7[_0x5bf8cd(0xd2)]);const _0x48fa4f=_0x5ee9a9[_0x5bf8cd(0x178)],_0x23536e=_0x2ae226[_0x5bf8cd(0x168)],_0x3fdbb5=0x3e8/0x3c;for(var _0x143a53=0x1;_0x143a53<=_0xff86c9;_0x143a53++){var _0x5f401d=_0x48fa4f[_0x143a53]||_0x48fa4f[0x0];if(_0x5f401d>0x0){let _0x51e486=_0x23536e*(_0x143a53-0x1);_0x459a7b(_0x46d515[_0x5bf8cd(0x216)][_0x5bf8cd(0x1d3)](_0x54ebac,[this],_0x5f401d,![],![]),_0x51e486);}_0x5aedbf+=_0x23536e/_0x3fdbb5;}_0x5aedbf=_0x4679ab[_0x5bf8cd(0x106)](_0x5aedbf),_0x55e1a1[_0x5bf8cd(0x224)]['_logWindow'][_0x5bf8cd(0x17e)]=_0x5aedbf;}else return this['convertBoostAnalyzeEscape'](parseInt(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)EFFECT\[(\d+)\]/gi,function(){const _0x5e1960=_0x3caaad;return this[_0x5e1960(0x165)](parseInt(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)\[(.*?)\]/gi,function(){return this['convertBoostUpEscape'](String(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)0\[(.*?)\]/gi,function(){const _0x353acf=_0x3caaad;if('fikFX'===_0x353acf(0x1c0))_0xd0d08e[_0x353acf(0x1d7)]['Game_Battler_regenerateAll']['call'](this),_0x5805a9[_0x353acf(0x228)]&&this['isDead']()&&_0x2d4c73[_0x353acf(0xc0)]()&&this[_0x353acf(0x220)]();else return this['convertBoost0Escape'](String(arguments[0x1]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)=(\d+)\[(.*?)\]/gi,function(){const _0x1eeb8b=_0x3caaad;return this[_0x1eeb8b(0x15d)](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266['replace'](/\x1b(?:BP|BOOST)=(\d+)\[(.*?)\]/gi,function(){return this['convertBoostEqualEscape'](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266['replace'](/\x1b(?:BP|BOOST)\<=(\d+)\[(.*?)\]/gi,function(){const _0x49b5fb=_0x3caaad;return this[_0x49b5fb(0x17c)](parseInt(arguments[0x1]),String(arguments[0x2]));}['bind'](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)\<(\d+)\[(.*?)\]/gi,function(){const _0x45f2eb=_0x3caaad;return _0x45f2eb(0x12c)===_0x45f2eb(0xd6)?this['convertBoostDamageEscape'](_0x563605(arguments[0x1])):this[_0x45f2eb(0x190)](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266['replace'](/\x1b(?:BP|BOOST)\>=(\d+)\[(.*?)\]/gi,function(){return this['convertBoostGreaterEqualEscape'](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x3caaad(0x1d3)](this)),_0x2d2266=_0x2d2266[_0x3caaad(0x11e)](/\x1b(?:BP|BOOST)\>(\d+)\[(.*?)\]/gi,function(){const _0x2d0550=_0x3caaad;return this[_0x2d0550(0x16e)](parseInt(arguments[0x1]),String(arguments[0x2]));}[_0x3caaad(0x1d3)](this)),_0x2d2266;},Window_Base['prototype']['convertBoostDamageEscape']=function(_0x13c747){const _0x119802=_0x442f10;if(!!this[_0x119802(0xa9)]){if(_0x119802(0xb7)!=='AWvAm'){var _0x485e31=this[_0x119802(0xa9)][_0x119802(0x119)](_0x119802(0x1b1));_0x13c747=Math[_0x119802(0x212)](_0x13c747*_0x485e31),_0x13c747+=this[_0x119802(0xa9)][_0x119802(0x135)](_0x119802(0x1b1));}else this['_storedBoostPoints']=this[_0x119802(0x1fe)]||0x0,this['_toUseBoostPoints']=this['_toUseBoostPoints']||0x0,this[_0x119802(0x14d)]=this[_0x119802(0x14d)]||0x0;}return _0x13c747;},Window_Base[_0x442f10(0x1a5)]['convertBoostTurnEscape']=function(_0x2bd57a){const _0x3b3236=_0x442f10;if(!!this[_0x3b3236(0xa9)]){if(_0x3b3236(0x1f6)===_0x3b3236(0x1f6)){var _0x49ed32=this['_bpSubject'][_0x3b3236(0x119)](_0x3b3236(0x1b3));_0x2bd57a=Math['round'](_0x2bd57a*_0x49ed32),_0x2bd57a+=this['_bpSubject'][_0x3b3236(0x135)](_0x3b3236(0x1b3));}else return!![];}return _0x2bd57a;},Window_Base[_0x442f10(0x1a5)]['convertBoostRepeatEscape']=function(_0x1bcba9){const _0x327050=_0x442f10;if(!!this[_0x327050(0xa9)]){var _0x5e1582=this[_0x327050(0xa9)][_0x327050(0x119)]('Repeat');_0x1bcba9=Math['round'](_0x1bcba9*_0x5e1582),_0x1bcba9+=this[_0x327050(0xa9)][_0x327050(0x135)](_0x327050(0xe0));}return _0x1bcba9;},Window_Base[_0x442f10(0x1a5)][_0x442f10(0xa4)]=function(_0x556eac){const _0x3056a9=_0x442f10;if(!!this[_0x3056a9(0xa9)]){var _0x50568d=this[_0x3056a9(0xa9)][_0x3056a9(0x119)](_0x3056a9(0x186));_0x556eac=Math[_0x3056a9(0x212)](_0x556eac*_0x50568d),_0x556eac+=this[_0x3056a9(0xa9)][_0x3056a9(0x135)](_0x3056a9(0x186));}return _0x556eac;},Window_Base['prototype'][_0x442f10(0x165)]=function(_0x293906){const _0xd18363=_0x442f10;if(!!this['_bpSubject']){var _0x17d56f=this[_0xd18363(0xa9)][_0xd18363(0x119)](_0xd18363(0x209));_0x293906=Math['round'](_0x293906*_0x17d56f),_0x293906+=this['_bpSubject'][_0xd18363(0x135)](_0xd18363(0x209));}return _0x293906;},Window_Base[_0x442f10(0x1a5)][_0x442f10(0x1db)]=function(_0x10f7f1){const _0x5b3a4a=_0x442f10;return!!this[_0x5b3a4a(0xa9)]&&this[_0x5b3a4a(0xa9)][_0x5b3a4a(0xae)]()>0x0?_0x10f7f1:'';},Window_Base[_0x442f10(0x1a5)][_0x442f10(0x16c)]=function(_0x5256ae){const _0x4dfda5=_0x442f10;return!this[_0x4dfda5(0xa9)]||this['_bpSubject']['toUseBoostPoints']()<=0x0?_0x5256ae:'';},Window_Base[_0x442f10(0x1a5)]['convertBoostEqualEscape']=function(_0x5b6339,_0x340789){const _0x2a1b8d=_0x442f10;return!!this[_0x2a1b8d(0xa9)]&&this[_0x2a1b8d(0xa9)][_0x2a1b8d(0xae)]()===_0x5b6339?'ArCOB'==='ArCOB'?_0x340789:this[_0x2a1b8d(0x1df)]()<_0x41b6d3:_0x2a1b8d(0xb1)==='thcaN'?_0x1eb3ef:'';},Window_Base[_0x442f10(0x1a5)][_0x442f10(0x15d)]=function(_0x1b9db2,_0x2bf1f2){const _0x34894e=_0x442f10;return!!this[_0x34894e(0xa9)]&&this[_0x34894e(0xa9)][_0x34894e(0xae)]()===_0x1b9db2?_0x2bf1f2:'';},Window_Base[_0x442f10(0x1a5)][_0x442f10(0x17c)]=function(_0x36d93e,_0x5431ad){const _0x2d1c7a=_0x442f10;if(!!this[_0x2d1c7a(0xa9)]&&this[_0x2d1c7a(0xa9)]['toUseBoostPoints']()<=_0x36d93e){if(_0x2d1c7a(0x200)!==_0x2d1c7a(0x205))return _0x5431ad;else return;}else return'';},Window_Base[_0x442f10(0x1a5)][_0x442f10(0x190)]=function(_0x2455ed,_0xd4e353){const _0xb910a7=_0x442f10;return!!this[_0xb910a7(0xa9)]&&this[_0xb910a7(0xa9)][_0xb910a7(0xae)]()<_0x2455ed?_0xd4e353:'';},Window_Base[_0x442f10(0x1a5)][_0x442f10(0x1be)]=function(_0x2c4889,_0x931895){const _0x1b979b=_0x442f10;if(!!this[_0x1b979b(0xa9)]&&this[_0x1b979b(0xa9)][_0x1b979b(0xae)]()>=_0x2c4889){if(_0x1b979b(0xea)===_0x1b979b(0x1ab))_0x16be52['BoostAction'][_0x1b979b(0x1ce)][_0x1b979b(0xbc)](this);else return _0x931895;}else{if(_0x1b979b(0xc4)!==_0x1b979b(0xc4)){if(this[_0x1b979b(0x10b)]){this['_previousBattleChainBoostActions']=_0x15d533;return;}var _0x98a255=_0x7e765b['BOOST_POINTS_START_BATTLE'];_0x98a255=this[_0x1b979b(0x17a)](_0x98a255),_0x98a255=this[_0x1b979b(0x191)](_0x98a255),_0x98a255=_0x19b7cf[_0x1b979b(0x212)](_0x98a255),this[_0x1b979b(0x1e2)](_0x98a255);}else return'';}},Window_Base['prototype'][_0x442f10(0x16e)]=function(_0x103c21,_0x40b3f6){const _0x3f7a9f=_0x442f10;return!!this[_0x3f7a9f(0xa9)]&&this[_0x3f7a9f(0xa9)]['toUseBoostPoints']()>_0x103c21?_0x40b3f6:'';},Window_Selectable[_0x442f10(0x1b7)]=VisuMZ['BoostAction'][_0x442f10(0x16b)]['UI'][_0x442f10(0x139)],Window_Selectable[_0x442f10(0x1b4)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['UI'][_0x442f10(0xc8)],Window_Selectable[_0x442f10(0x1a5)][_0x442f10(0x15e)]=function(){const _0x454d98=_0x442f10,_0x2ca040=this[_0x454d98(0x176)]['name'];return Window_Selectable[_0x454d98(0x1b4)][_0x454d98(0x153)](_0x2ca040)?'bATcS'!==_0x454d98(0xc1)?![]:![]:!![];},Window_Selectable[_0x442f10(0x1a5)][_0x442f10(0x19e)]=function(){const _0xc4f274=_0x442f10;if(!SceneManager[_0xc4f274(0x1e3)]())return![];if(!Window_Selectable[_0xc4f274(0x1b7)])return![];if(!BattleManager[_0xc4f274(0x197)]())return![];return this[_0xc4f274(0x15e)]();},VisuMZ['BoostAction'][_0x442f10(0x130)]=Window_Selectable[_0x442f10(0x1a5)][_0x442f10(0x1af)],Window_Selectable[_0x442f10(0x1a5)][_0x442f10(0x1af)]=function(){const _0x2bed10=_0x442f10;if(this[_0x2bed10(0x19e)]()){const _0x44144b=BattleManager[_0x2bed10(0xaf)]();_0x44144b&&_0x44144b[_0x2bed10(0xb9)]()&&('cGlhg'===_0x2bed10(0x171)?_0x36aa6f+=0x88:(SceneManager[_0x2bed10(0x224)]['commandBoost'](!![]),this[_0x2bed10(0x124)](),this[_0x2bed10(0x148)]())),Input[_0x2bed10(0x1fc)]();}else VisuMZ[_0x2bed10(0x1d7)][_0x2bed10(0x130)][_0x2bed10(0xbc)](this);},VisuMZ[_0x442f10(0x1d7)]['Window_Selectable_cursorPageup']=Window_Selectable[_0x442f10(0x1a5)]['cursorPageup'],Window_Selectable[_0x442f10(0x1a5)][_0x442f10(0x14b)]=function(){const _0x3fb904=_0x442f10;if(this[_0x3fb904(0x19e)]()){if('bXEkA'==='WMWcx')return this['convertBoostLessEscape'](_0x247ac5(arguments[0x1]),_0x579b95(arguments[0x2]));else{const _0x487ec5=BattleManager[_0x3fb904(0xaf)]();_0x487ec5&&_0x487ec5[_0x3fb904(0x17d)]()&&(SceneManager[_0x3fb904(0x224)][_0x3fb904(0x201)](!![]),this[_0x3fb904(0x124)](),this[_0x3fb904(0x148)]()),Input[_0x3fb904(0x1fc)]();}}else VisuMZ[_0x3fb904(0x1d7)][_0x3fb904(0x1ce)]['call'](this);},Window_Help[_0x442f10(0x1a5)][_0x442f10(0xb4)]=function(_0x9cace5){const _0x40d946=_0x442f10;this[_0x40d946(0xa9)]=_0x9cace5;},Window_Help[_0x442f10(0x1a5)][_0x442f10(0xf5)]=function(){this['_bpSubject']=undefined;},Window_StatusBase[_0x442f10(0x1a5)][_0x442f10(0x182)]=function(){const _0x1c4341=_0x442f10;return BattleManager[_0x1c4341(0x197)]();},Window_StatusBase[_0x442f10(0x1a5)][_0x442f10(0x1c2)]=function(_0x283f40,_0x50a0d4,_0x1440fb){const _0x56c239=_0x442f10;if(!this[_0x56c239(0x182)]())return;const _0x3ec73a=_0x56c239(0x206)[_0x56c239(0x11d)](_0x283f40[_0x56c239(0x1a8)]()),_0xc5279a=this[_0x56c239(0x14f)](_0x3ec73a,Sprite_BoostContainer);_0xc5279a[_0x56c239(0x1a2)](_0x283f40),_0xc5279a[_0x56c239(0x1dd)](_0x50a0d4,_0x1440fb),_0xc5279a[_0x56c239(0xd1)]();},Window_ActorCommand[_0x442f10(0x147)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['UI'][_0x442f10(0xed)],Window_ActorCommand['UNBOOST_ACTION_SHOW']=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['UI']['ShowUnboostCmd'],VisuMZ[_0x442f10(0x1d7)]['Window_ActorCommand_addGuardCommand']=Window_ActorCommand[_0x442f10(0x1a5)][_0x442f10(0xcd)],Window_ActorCommand['prototype'][_0x442f10(0xcd)]=function(){const _0x16df08=_0x442f10;if(BattleManager[_0x16df08(0x197)]()){if(_0x16df08(0x1e9)!==_0x16df08(0x1e9))return!this[_0x16df08(0xa9)]||this['_bpSubject']['toUseBoostPoints']()<=0x0?_0x1e7657:'';else this[_0x16df08(0x1f1)](),this[_0x16df08(0x207)]();}VisuMZ[_0x16df08(0x1d7)][_0x16df08(0x1f3)][_0x16df08(0xbc)](this);},Window_ActorCommand[_0x442f10(0x1a5)][_0x442f10(0x1f1)]=function(){const _0x261787=_0x442f10;if(!Window_ActorCommand[_0x261787(0x147)])return;const _0x50b281=this[_0x261787(0x1b8)](),_0x296f50=TextManager[_0x261787(0x1f2)],_0x26df14=ImageManager[_0x261787(0xe5)],_0x10b8df=_0x50b281===_0x261787(0x196)?_0x296f50:'\x5cI[%1]%2'[_0x261787(0x11d)](_0x26df14,_0x296f50);var _0x4ab8ec=this[_0x261787(0x10f)][_0x261787(0xb9)]();this[_0x261787(0xf4)](_0x10b8df,_0x261787(0xde),_0x4ab8ec);},Window_ActorCommand[_0x442f10(0x1a5)][_0x442f10(0x207)]=function(){const _0x1fd8ac=_0x442f10;if(!Window_ActorCommand[_0x1fd8ac(0x1d1)])return;const _0x13658c=this[_0x1fd8ac(0x1b8)](),_0x131be4=TextManager[_0x1fd8ac(0x194)],_0x59e7af=ImageManager[_0x1fd8ac(0x162)],_0x1fe8be=_0x13658c===_0x1fd8ac(0x196)?_0x131be4:_0x1fd8ac(0xcb)['format'](_0x59e7af,_0x131be4);var _0x32cf26=this['_actor'][_0x1fd8ac(0x17d)]();this[_0x1fd8ac(0xf4)](_0x1fe8be,_0x1fd8ac(0x13f),_0x32cf26);},Window_ActorCommand['prototype'][_0x442f10(0x105)]=function(){const _0xf474b9=_0x442f10;if(this['currentSymbol']()!==_0xf474b9(0xde)&&this[_0xf474b9(0xca)]()!==_0xf474b9(0x13f)){if(_0xf474b9(0x1a1)!=='CJkRs')return!!this[_0xf474b9(0xa9)]&&this['_bpSubject'][_0xf474b9(0xae)]()>=_0x5178be?_0x5f3e48:'';else Window_Selectable[_0xf474b9(0x1a5)][_0xf474b9(0x105)][_0xf474b9(0xbc)](this);}},Window_BattleStatus['BOOST_POINTS_DISPLAY_BATTLE_STATUS']=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['UI']['BattleStatusShow'],Window_BattleStatus[_0x442f10(0x118)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['UI'][_0x442f10(0x1fd)],Window_BattleStatus[_0x442f10(0x1ed)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['UI'][_0x442f10(0xad)],Window_BattleStatus[_0x442f10(0x17b)]=VisuMZ[_0x442f10(0x1d7)][_0x442f10(0x16b)]['UI'][_0x442f10(0x188)],VisuMZ['BoostAction'][_0x442f10(0x121)]=Window_BattleStatus[_0x442f10(0x1a5)][_0x442f10(0xd5)],Window_BattleStatus[_0x442f10(0x1a5)][_0x442f10(0xd5)]=function(_0x542160){const _0x503ece=_0x442f10;VisuMZ[_0x503ece(0x1d7)][_0x503ece(0x121)]['call'](this,_0x542160),this[_0x503ece(0x189)](_0x542160);},Window_BattleStatus[_0x442f10(0x1a5)][_0x442f10(0x189)]=function(_0x32481d){const _0x1abe90=_0x442f10;if(!Window_BattleStatus['BOOST_POINTS_DISPLAY_BATTLE_STATUS'])return;const _0x2a110a=this[_0x1abe90(0xaf)](_0x32481d);if(!_0x2a110a)return;if(!Window_BattleStatus[_0x1abe90(0x118)])this['drawItemStatusBoostPointsDefault'](_0x32481d);else{if(_0x1abe90(0x146)==='JxynN'){this[_0x1abe90(0x131)]();var _0x25c7a4=this[_0x1abe90(0x158)](_0xb849e6);_0x25c7a4>0x0&&(this[_0x1abe90(0x141)](_0x25c7a4),this[_0x1abe90(0x21c)]());}else this[_0x1abe90(0xdb)](_0x32481d);}},Window_BattleStatus['prototype'][_0x442f10(0x1b6)]=function(_0x585718){const _0x379275=_0x442f10,_0x45e175=this[_0x379275(0xaf)](_0x585718),_0x22c75f=this['itemRectWithPadding'](_0x585718);let _0x4a6244=_0x22c75f['x']-0x4+Window_BattleStatus[_0x379275(0x1ed)],_0x1a0aba=_0x22c75f['y']+0x4+Window_BattleStatus[_0x379275(0x17b)];this[_0x379275(0x1c2)](_0x45e175,_0x4a6244,_0x1a0aba);},Window_BattleStatus[_0x442f10(0x1a5)][_0x442f10(0xdb)]=function(_0x178c4a){const _0x45f6a6=_0x442f10,_0xac213c=this[_0x45f6a6(0xaf)](_0x178c4a),_0x5a146c=this['itemRect'](_0x178c4a),_0x2ee025=Math[_0x45f6a6(0x106)](ImageManager['iconWidth']*Game_BattlerBase[_0x45f6a6(0xce)]*Sprite_BoostContainer['ICON_SIZE_RATE']),_0x1640cb=Math[_0x45f6a6(0x106)](ImageManager[_0x45f6a6(0x1ea)]*Sprite_BoostContainer[_0x45f6a6(0xd7)]);let _0x40bd71=_0x5a146c['x']+0x4,_0x26d03a=_0x5a146c['y']+0x4;const _0x1b752e=this[_0x45f6a6(0x181)]();switch(_0x1b752e){case _0x45f6a6(0x10e):VisuMZ['BattleCore'][_0x45f6a6(0x16b)][_0x45f6a6(0x159)][_0x45f6a6(0xd0)]?_0x40bd71+=ImageManager['faceWidth']+0x8:_0x40bd71+=ImageManager[_0x45f6a6(0x187)]+0x8;_0x40bd71+=0x88,_0x40bd71+=0x88*0x2;$dataSystem[_0x45f6a6(0xfb)]&&(_0x40bd71+=0x88);_0x26d03a+=Math[_0x45f6a6(0x1ee)](0x0,Math[_0x45f6a6(0x212)]((this['lineHeight']()-_0x1640cb)/0x2));break;case'xp':case _0x45f6a6(0xb6):case'border':_0x40bd71=Math['round'](_0x5a146c['x']+(_0x5a146c[_0x45f6a6(0x20a)]-_0x2ee025)/0x2);break;case _0x45f6a6(0x16d):_0x40bd71=Math[_0x45f6a6(0x212)](_0x5a146c['x']+(_0x5a146c[_0x45f6a6(0x20a)]-_0x2ee025)/0x2);const _0x1364bb=$dataSystem[_0x45f6a6(0xfb)]?0x4:0x3;_0x26d03a=Math[_0x45f6a6(0x212)](_0x5a146c['y']+_0x5a146c[_0x45f6a6(0xc5)]-0x4-this[_0x45f6a6(0xfe)]()*_0x1364bb);break;}_0x40bd71+=Window_BattleStatus[_0x45f6a6(0x1ed)],_0x26d03a+=Window_BattleStatus[_0x45f6a6(0x17b)],this['placeBoostPoints'](_0xac213c,_0x40bd71,_0x26d03a);};