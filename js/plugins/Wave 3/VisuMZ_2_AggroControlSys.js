//=============================================================================
// VisuStella MZ - Aggro Control System
// VisuMZ_2_AggroControlSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_AggroControlSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.AggroControlSystem = VisuMZ.AggroControlSystem || {};
VisuMZ.AggroControlSystem.version = 1.15;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.15] [AggroControlSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Aggro_Control_System_VisuStella_MZ
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * A common mechanic found in many RPG's nowadays is the ability to steer the
 * way enemies target party members. This can be in the form of provocations, 
 * taunts, and aggro.
 *
 * Provocations come in the form of states, where when a unit applies a provoke
 * state on a target, the target must attack the provoker when using single
 * target skills. This plugin provides support for multiple provocations and
 * such provocations will be given focus based on the state's priority value.
 *
 * Taunts are a third way to steer an opponent to focus on a party member. The
 * taunt effects can be split up into global, physical, magical, or certain hit
 * only taunts and these can be applied to almost any trait object.
 *
 * Aggro is a numeric value that determines the likelihood and/or priority
 * level of how often a target party member is to be attacked by an enemy unit.
 * The higher the aggro value, the more likely the chances of being targeted.
 * A option can be turned on (or through notetags) to set enemies to always
 * target the party member with the highest aggro.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Three different ways to influencing which targets enemies should attack:
 *   Provoke, taunt, and aggro.
 * * Provoke and taunt effects work both ways for actors and enemies.
 * * Aggro effects accumulate through battle and can be manipulated through
 *   notetag values, Plugin Commands, and/or Plugin Parameters.
 * * Provoked battlers can have provoke lines displayed to indicate which
 *   unit has provoked them.
 * * Taunting units can have animations played on them repeatedly to quickly
 *   relay information to the player about their taunt properties.
 * * Gauges that can be displayed over the heads of actor sprites to display
 *   how much aggro that actor holds in comparison to the other actors.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
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
 * VisuMZ_1_BattleCore
 *
 * - Provoke Priority Lines and Taunt animations become available if these
 *   plugins are installed.
 *
 * ---
 *
 * ============================================================================
 * How Aggro, Provoke, and Taunts Work
 * ============================================================================
 *
 * This section will explain how aggro, provoke, and taunts work.
 *
 * ---
 *
 * Provoke
 *
 * - Provocations come in the form of states, where when a unit applies a
 * provoke state on a target, the target must attack the provoker when using
 * single target skills. This plugin provides support for multiple provocations
 * and such provocations will be given focus based on the state's database
 * priority value.
 *
 * - The provoke will last only as long as the duration of the state itself. If
 * the state's duration is refreshed by reapplying the Provoke state, then the
 * provoker of that state will then switch over to the one applying the newly
 * added state.
 *
 * - When an actor selects a target for an action and the actor is provoked by
 * an enemy on the other team, the player's choice selection becomes limited to
 * only the provoker.
 *
 * - Provoke can be bypassed through the <Bypass Provoke> notetag.
 *
 * ---
 *
 * Taunts
 *
 * - Taunts are a third way to steer an opponent to focus on a party member.
 * The taunt effects can be split up into global, physical, magical, or certain
 * hit only taunts and these can be applied to almost any trait object.
 *
 * - When an actor selects a target and the enemy team has a taunting unit,
 * the player's choice selection becomes limited to only the targets with the
 * associated taunt type.
 *
 * - Taunts can be bypassed through the <Bypass Taunt> notetag.
 *
 * ---
 *
 * Aggro
 *
 * - Aggro is a numeric value that determines the likelihood and/or priority
 * level of how often a target party member is to be attacked by an enemy unit.
 * The higher the aggro value, the more likely the chances of being targeted.
 * A option can be turned on (or through notetags) to set enemies to always
 * target the party member with the highest aggro.
 *
 * - Skills and items can raise its user's aggro value through notetags and/or
 * how much damage they've dealt or healed. Skills and items can also change a
 * target's aggro value through notetags, too.
 *
 * - Through the Plugin Parameters, you can set Aggro to automatically raised
 * based on how much damage or healing dealt by a user.
 *
 * - Some enemies can be bypass forced aggro target through the <Bypass Aggro>
 * notetag while other enemies can be forced to target the highest aggro target
 * through the <Target Highest Aggro> notetag;
 *
 * ---
 *
 * Priorities
 *
 * - Priority will be given in the order of provokes, taunts, and then aggro.
 * This means if an enemy is provoked, the opposing side has a taunt, and there
 * is a member with high aggro, then the enemy will always attack the provoker
 * first before targeting a taunting unit before targeting the unit with high
 * aggro values.
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
 * === Provoke-Related Notetags ===
 *
 * The following notetags enable you to utilize the Provoke effects added by
 * this plugin. Provoked targets can only attack the provoking unit for single
 * target actions.
 *
 * ---
 *
 * <Provoke>
 *
 * - Used for: State Notetags
 * - Causes the state affected unit to be able to only attack the caster of the
 *   provoke state for single target actions.
 * - If multiple provoke states are applied, then the provoker is the one who
 *   applied the highest priority provoke state.
 *
 * ---
 *
 * <Bypass Provoke>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Makes the affected unit to ignore any and all provoke effects applied by
 *   any provoke states, allowing them to target foes as if they are unaffected
 *   by provoke states altogether.
 *
 * ---
 * 
 * <Bypass Provoke>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass provoke effects applied by any provoke states,
 *   allowing this action to target foes as if the user is unaffected by any
 *   provoke effects altogether.
 * 
 * ---
 * 
 * <Provoke Height Origin: x%>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Sets the provoke height origin point to x% of the sprite's height.
 * - This is the landing point for the provoke trails.
 * - Replace 'x' with a number presenting what rate of the sprite's height to
 *   set as the provoke height origin point.
 * 
 * ---
 *
 * === Taunt-Related Notetags ===
 *
 * ---
 *
 * <Taunt>
 * <All Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the taunting unit to become the target of the opposing team's
 *   single target actions for physical, magical, and certain hit actions.
 * - If multiple taunters exist, then the opposing team can select between any
 *   of the taunters for targets.
 *
 * ---
 *
 * <Physical Taunt>
 * <Magical Taunt>
 * <Certain Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the taunting unit to become the target of the opposing team's
 *   single target actions for physical, magical, and certain hit actions
 *   respectively.
 * - Add/remove any combination of the above to cause the affected unit to
 *   become the target of those types of actions.
 * - If multiple taunters exist, then the opposing team can select between any
 *   of the taunters for targets.
 *
 * ---
 *
 * <Bypass Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The affected unit will ignore any and all taunt effects created by the
 *   opposing team, allowing them to use single target actions as if no
 *   taunters exist on the opposing team.
 *
 * ---
 * 
 * <Bypass Taunt>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass taunt effects created by the opposing team,
 *   allowing the user to use single target actions as if no taunters exist on
 *   the opposing team.
 * 
 * ---
 *
 * === Aggro-Related Notetags ===
 *
 * ---
 *
 * <User Aggro: +x>
 * <User Aggro: -x>
 *
 * - Used for: Skill, Item
 * - Upon using this action, raise the user's battle aggro value by 'x'.
 * - Replace 'x' with the amount of battle aggro to increase/decrease by.
 * - This effect will only apply once per usage regardless of the number of
 *   successful hits landed by the action.
 *
 * ---
 *
 * <Target Aggro: +x>
 * <Target Aggro: -x>
 *
 * - Used for: Skill, Item
 * - Upon using this action, raise the target's battle aggro value by 'x'.
 * - Replace 'x' with the amount of battle aggro to increase/decrease by.
 * - This effect will apply multiple times based on the number of successful
 *   hits landed by the action.
 *
 * ---
 *
 * <Aggro: +x>
 * <Aggro: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected unit to passively have increased/decreased aggro
 *   values independent of the amount of aggro it earns in battle.
 * - Replace 'x' with the amount of aggro this object increases/decreases by.
 *
 * ---
 *
 * <Aggro Multiplier: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected unit to increase the amount of perceived aggro it has
 *   by the aggro multiplier.
 * - Replace 'x' with a number representing the percentage to increase/decrease
 *   the perceived aggro by.
 * - If multiple of these traits exist across different trait objects, the
 *   effects are increased multiplicatively.
 *
 * ---
 *
 * <Bypass Highest Aggro>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - If used on skills or items, the action will decide targets by aggro weight
 *   instead of always picking the highest aggro unit(s).
 * - If used on trait objects, the affected unit will decide targets by aggro
 *   weight instead of always picking the highest aggro unit(s).
 * - This is used for enemy A.I. or Actor auto battle A.I.
 *
 * ---
 * 
 * <Bypass Highest Aggro>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass highest aggro effects and instead focuses on
 *   targets by aggro weight instead.
 * - This is used for enemy A.I. or Actor auto battle A.I.
 * 
 * ---
 *
 * <Target Highest Aggro>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - If used on skills or items, the action will always decide its targets by
 *   the highest aggro value.
 * - If used on trait objects, the affected unit will always decide on targets
 *   by the highest aggro value.
 * - If the <Bypass Highest Aggro> notetag exists, this effect is ignored.
 * - This is used for enemy A.I. or Actor auto battle A.I.
 *
 * ---
 *
 * === JavaScript Notetags: Aggro-Related ===
 *
 * ---
 *
 * <JS User Aggro>
 *  code
 *  code
 *  value = code
 * </JS User Aggro>
 *
 * - Used for: Skill, Item
 * - Replace 'code' with JavaScript code to determine the final 'value' to
 *   change the user's battle aggro to upon using this skill.
 * - The 'user' variable represents the one using the skill/item.
 * - The 'target' variable represents the one receiving the skill/item hit.
 * - This effect will only apply once per usage regardless of the number of
 *   successful hits landed by the action.
 *
 * ---
 *
 * <JS Target Aggro>
 *  code
 *  code
 *  value = code
 * </JS Target Aggro>
 *
 * - Used for: Skill, Item
 * - Replace 'code' with JavaScript code to determine the final 'value' to
 *   change target's battle aggro to upon using this skill.
 * - The 'user' variable represents the one using the skill/item.
 * - The 'target' variable represents the one receiving the skill/item hit.
 * - This effect will apply multiple times based on the number of successful
 *   hits landed by the action.
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
 * Actor: Change Aggro
 * - Changes target actor's aggro value.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Change Aggro By:
 *   - Change aggro by this amount.
 *   - Use negative numbers to reduce aggro.
 *
 * ---
 *
 * Actor: Set Aggro
 * - Set target actor's aggro value.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Set Aggro To:
 *   - Sets target's aggro to this amount.
 *   - Aggro must be at least a value of 1.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Aggro
 * - Changes target enemy's aggro value.
 *
 *   Enemy Index:
 *   - Select which Enemy Index to affect.
 *
 *   Change Aggro By:
 *   - Change aggro by this amount.
 *   - Use negative numbers to reduce aggro.
 *
 * ---
 *
 * Enemy: Set Aggro
 * - Set target enemy's aggro value.
 *
 *   Enemy Index:
 *   - Select which Enemy Index to affect.
 *
 *   Set Aggro To:
 *   - Sets target's aggro to this amount.
 *   - Aggro must be at least a value of 1.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Provoke Settings
 * ============================================================================
 *
 * The Provoke Settings Plugin Parameters adjust the visual aspects related to
 * the provoke effect. These settings will require VisuMZ_1_BattleCore to be
 * installed in order for them to work due to dependencies. 
 *
 * ---
 *
 * VisuMZ_1_BattleCore
 * 
 *   Show Priority Lines?:
 *   - Show priority target lines for this plugin?
 *   - Requires VisuMZ_1_BattleCore.
 *
 * ---
 *
 * Line Settings
 * 
 *   Arc Height:
 *   - How tall should the line arc in pixels?
 * 
 *   Blend Mode:
 *   - The blend mode used for the sprite.
 * 
 *   Height Origin:
 *   - The rate from the battler's sprite base to determine where the line
 *     starts from.
 * 
 *   Line Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Opacity:
 *   - The highest possible opacity for active provoke lines.
 * 
 *   Opacity Speed:
 *   - The speed at which opacity fluctuates for the line sprite.
 * 
 *   Parts:
 *   - The number of joint parts to split up the sprite as.
 * 
 *   Parts Size:
 *   - The number in pixels for the diameter of each part.
 *
 * ---
 * 
 * Options
 * 
 *   Add Provoke Option?
 *   - Add the 'Show Provoke Origin' option to the Options menu?
 * 
 *   Adjust Window Height
 *   - Automatically adjust the options window height?
 * 
 *   Option Name
 *   - Command name of the option.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Taunt Settings
 * ============================================================================
 *
 * Battlers with specific taunt types can have animations playing on them over
 * and over to relay information to the player. These settings require you to
 * have both VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore installed in your
 * project's plugin list in order to use.
 *
 * ---
 *
 * VisuMZ_0_CoreEngine & VisuMZ_1_BattleCore
 * 
 *   Show Animations?:
 *   - Show animations for each of the taunt effects?
 *   - Requires VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore.
 *
 * ---
 *
 * Animation ID's
 * 
 *   Physical Taunt:
 *   - The animation ID used for physical taunts.
 *   - Use 0 or 'None' to bypass this type.
 * 
 *   Magical Taunt:
 *   - The animation ID used for magical taunts.
 *   - Use 0 or 'None' to bypass this type.
 * 
 *   Certain Hit Taunt:
 *   - The animation ID used for certain hit taunts.
 *   - Use 0 or 'None' to bypass this type.
 *
 * ---
 *
 * Animation Settings
 * 
 *   Cycle Time:
 *   - The amount of frames to wait before each animation cycle.
 *   - WARNING: Lower numbers can jeopardize game performance.
 * 
 *   Mirror Actor Ani?:
 *   - Mirror animations played on actors?
 * 
 *   Mute Animation SFX?:
 *   - Mute sounds played by animations?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Aggro Settings
 * ============================================================================
 *
 * This lets you adjust the settings for this plugin's Aggro mechanics. Most of
 * these settings focus on the visual gauge display of the Aggro gauge, but you
 * can also change up the settings for how aggro is utilized.
 *
 * ---
 *
 * General
 * 
 *   Priority: Highest TGR:
 *   - When enemies target actors for an single target attack, always target
 *     the highest members or make it weighted?
 *
 *   Aggro Per Damage:
 *   - The amount of aggro generated per point of HP damage dealt to an enemy.
 *
 *   Aggro Per Heal:
 *   - The amount of aggro generated per point of HP recovered to an ally.
 *
 * ---
 *
 * Gauge
 * 
 *   Visible Battler Gauge:
 *   - Display an aggro gauge over an SV actor's head to show current aggro
 *     level compared to other party members.
 * 
 *   Visible Status Gauge:
 *   - Display an aggro gauge in the Battle Status Window to show the current
 *     aggro level compared to others.
 * 
 *   Gauge Color 1:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Gauge Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Gauge Width:
 *   - Width in pixels you want the gauge to be.
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Where do you want the Aggro Gauge sprite's anchor X/Y to be?
 *   - Use values between 0 and 1 to be safe.
 * 
 *   Scale:
 *   - How large/small do you want the Aggro Gauge to be scaled?
 * 
 *   Battler Gauge
 * 
 *     Offset X:
 *     Offset Y:
 *     - How many pixels to offset the Aggro Gauge's X/Y by?
 * 
 *   Battle Status Gauge
 * 
 *     Offset X:
 *     Offset Y:
 *     - How many pixels to offset the Aggro Gauge's X/Y by?
 *
 * ---
 * 
 * Options
 * 
 *   Add Provoke Option?
 *   - Add the 'Show Aggro Gauge' option to the Options menu?
 * 
 *   Adjust Window Height
 *   - Automatically adjust the options window height?
 * 
 *   Option Name
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
 * Version 1.15: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused <All Taunt> to not work properly.
 *    Fix made by Irina.
 * 
 * Version 1.14: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause cached battlers from a previous save file to
 *    not load up properly when actions are used for highest aggro actors.
 *    Fix made by Irina.
 * 
 * Version 1.13: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a problem that would cause a crash when exiting the Options menu in
 *    battle when used with specific battle systems. Fix made by Irina.
 * 
 * Version 1.12: January 20, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.73
 *    new features.
 * 
 * Version 1.11: November 17, 2022
 * * Bug Fixes!
 * ** <JS User Aggro> and <JS Target Aggro> should now work properly.
 *    Fix made by Arisu.
 * 
 * Version 1.10: August 25, 2022
 * * Documentation Update!
 * ** Added note to the <Provoke> notetag:
 * *** States with <Provoke> on them will automatically remove themselves if
 *     the provoker dies. Update made by Arisu.
 * * Feature Update!
 * ** States with <Provoke> on them will automatically remove themselves if the
 *    provoker dies. Update made by Arisu.
 * 
 * Version 1.09: June 2, 2022
 * * Bug Fixes!
 * ** Filename has been shortened from VisuMZ_2_AggroControlSystem.js to
 *    VisuMZ_2_AggroControlSys.js due to deployment reasons. For some mobile
 *    devices, keeping the name as long as VisuMZ_2_AggroControlSystem.js
 *    causes problems, but VisuMZ_2_AggroControlSys.js is fine. Take note of
 *    this while you are updating.
 * ** 'user' and 'target' now works properly with the JS notetags.
 *    Fix made by Irina.
 * 
 * Version 1.08: April 16, 2021
 * * Feature Update!
 * ** Highest and lowest TGR members are now cached on an action by action
 *    basis for reduce needed computations. Update made by Irina.
 * 
 * Version 1.07: April 9, 2021
 * * Bug Fixes!
 * ** Provoke effect now takes into consideration when Provoke is applied by
 *    a weapon effect that comes off a counter attack from an actor. Fix made
 *    by Olivia.
 * 
 * Version 1.06: March 12, 2021
 * * Bug Fixes!
 * ** Subsequent battles or changing scenes should no longer clear the custom
 *    rendered bitmap used for the provoke trail. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for the Skill and Item versions of the following
 *    notetags into the help file and wiki:
 * *** <Bypass Provoke>
 * *** <Bypass Taunt>
 * *** <Bypass Highest Aggro>
 * 
 * Version 1.05: March 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Aggro Settings > Battle Status Gauge
 * **** These settings allow you to offset the Aggro Gauge in the Battle Status
 *      Window from its original position.
 * 
 * Version 1.04: February 26, 2021
 * * Bug Fixes!
 * ** Fixed positioning of gauge for List Style battle layouts without faces.
 *    Fix made by Olivia.
 * 
 * Version 1.03: February 5, 2021
 * * Feature Update!
 * ** Aggro is now cleared at the end of each battle in addition to the start
 *    of each battle. Update made by Olivia.
 *
 * Version 1.02: November 1, 2020
 * * Compatibility Update!
 * ** Plugin is made more compatible with other plugins.
 * 
 * Version 1.01: October 4, 2020
 * * Bug Fixes!
 * ** Provoke lines should now be placed correctly if the UI area is smaller
 *    than the resolution area.
 * ** The Plugin Commands should no longer cause crashes. Fix made by Irina.
 *
 * Version 1.00: September 28, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeAggro
 * @text Actor: Change Aggro
 * @desc Changes target actor's aggro value.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Aggro:num
 * @text Change Aggro By
 * @desc Change aggro by this amount.
 * Use negative numbers to reduce aggro.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorSetAggro
 * @text Actor: Set Aggro
 * @desc Set target actor's aggro value.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Aggro:num
 * @text Set Aggro To
 * @desc Sets target's aggro to this amount.
 * Aggro must be at least a value of 1.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyChangeAggro
 * @text Enemy: Change Aggro
 * @desc Changes target enemy's aggro value.
 *
 * @arg EnemyIndex:num
 * @text Enemy Index
 * @type actor
 * @desc Select which Enemy Index to affect.
 * @default 0
 *
 * @arg Aggro:num
 * @text Change Aggro By
 * @desc Change aggro by this amount.
 * Use negative numbers to reduce aggro.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemySetAggro
 * @text Enemy: Set Aggro
 * @desc Set target enemy's aggro value.
 *
 * @arg EnemyIndex:num
 * @text Enemy Index
 * @type actor
 * @desc Select which Enemy Index to affect.
 * @default 0
 *
 * @arg Aggro:num
 * @text Set Aggro To
 * @desc Sets target's aggro to this amount.
 * Aggro must be at least a value of 1.
 * @default 1
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
 * @param AggroControl
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Provoke:struct
 * @text Provoke Settings
 * @type struct<Provoke>
 * @desc Settings related to the Provoke mechanic.
 * These settings require VisuMZ_1_BattleCore.
 * @default {"VisuMZ_1_BattleCore":"","ShowLines:eval":"true","LineSettings":"","ArcHeight:num":"125","BlendMode:num":"1","HeightOrigin:num":"0.8","LineColor:str":"#ff0000","Opacity:num":"255","OpacitySpeed:num":"4","Parts:num":"256","PartsSize:num":"5","Options":"","AddOption:eval":"true","AdjustOptionsRect:eval":"true","OptionName:str":"Show Provoke Origin"}
 *
 * @param Taunt:struct
 * @text Taunt Settings
 * @type struct<Taunt>
 * @desc Settings related to the Taunt mechanic.
 * @default {"Dependency":"VisuMZ_1_BattleCore","ShowAnimation:eval":"true","AnimationID":"","AniPhysical:num":"1","AniMagical:num":"2","AniCertain:num":"3","AnimationSettings":"","CycleTime:num":"60","MirrorActorAni:eval":"true","MuteAnimations:eval":"true"}
 *
 * @param Aggro:struct
 * @text Aggro Settings
 * @type struct<Aggro>
 * @desc Settings related to the Aggro mechanic.
 * @default {"General":"","PriorityHighest:eval":"true","AggroPerDmg:num":"0.1","AggroPerHeal:num":"0.5","Gauge":"","VisibleGauge:eval":"false","StatusGauge:eval":"true","GaugeColor1:str":"#959595","GaugeColor2:str":"#ffffff","AnchorX:num":"0.5","AnchorY:num":"1.0","Scale:num":"0.5","OffsetX:num":"+0","OffsetY:num":"+2","Options":"","AddOption:eval":"true","AdjustOptionsRect:eval":"true","OptionName:str":"Show Aggro Gauge"}
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
 * Provoke Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Provoke:
 *
 * @param VisuMZ_1_BattleCore
 *
 * @param ShowLines:eval
 * @text Show Priority Lines?
 * @parent VisuMZ_1_BattleCore
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show priority target lines for this plugin?
 * Requires VisuMZ_1_BattleCore.
 * @default true
 *
 * @param LineSettings
 * @text Line Settings
 *
 * @param ArcHeight:num
 * @text Arc Height
 * @parent LineSettings
 * @type number
 * @desc How tall should the line arc in pixels?
 * @default 125
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent LineSettings
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @param HeightOrigin:num
 * @text Height Origin
 * @parent LineSettings
 * @desc The rate from the battler's sprite base to determine where the line starts from.
 * @default 0.8
 *
 * @param LineColor:str
 * @text Line Color
 * @parent LineSettings
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ff0000
 *
 * @param Opacity:num
 * @text Opacity
 * @parent LineSettings
 * @type number
 * @min 1
 * @max 255
 * @desc The highest possible opacity for active provoke lines.
 * @default 255
 *
 * @param OpacitySpeed:num
 * @text Opacity Speed
 * @parent Opacity:num
 * @type number
 * @min 1
 * @desc The speed at which opacity fluctuates for the line sprite.
 * @default 4
 *
 * @param Parts:num
 * @text Parts
 * @parent LineSettings
 * @type number
 * @min 1
 * @desc The number of joint parts to split up the sprite as.
 * @default 256
 *
 * @param PartsSize:num
 * @text Parts Size
 * @parent Parts:num
 * @type number
 * @min 1
 * @desc The number in pixels for the diameter of each part.
 * @default 5
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Provoke Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show Provoke Origin' option to the Options menu?
 * @default true
 *
 * @param AdjustOptionsRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionName:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show Provoke Origin
 *
 */
/* ----------------------------------------------------------------------------
 * Taunt Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Taunt:
 *
 * @param Dependency
 * @text VisuMZ_0_CoreEngine
 * @default VisuMZ_1_BattleCore
 *
 * @param ShowAnimation:eval
 * @text Show Animations?
 * @parent Dependency
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show animations for each of the taunt effects?
 * Requires VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore.
 * @default true
 *
 * @param AnimationID
 * @text Animation ID's
 *
 * @param AniPhysical:num
 * @text Physical Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for physical taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 13
 *
 * @param AniMagical:num
 * @text Magical Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for magical taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 14
 *
 * @param AniCertain:num
 * @text Certain Hit Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for certain hit taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 15
 *
 * @param AnimationSettings
 * @text Animation Settings
 *
 * @param CycleTime:num
 * @text Cycle Time
 * @parent AnimationSettings
 * @type number
 * @min 1
 * @desc The amount of frames to wait before each animation cycle.
 * WARNING: Lower numbers can jeopardize game performance.
 * @default 60
 *
 * @param MirrorActorAni:eval
 * @text Mirror Actor Ani?
 * @parent AnimationSettings
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror animations played on actors?
 * @default true
 *
 * @param MuteAnimations:eval
 * @text Mute Animation SFX?
 * @parent AnimationSettings
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute sounds played by animations?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Aggro Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Aggro:
 *
 * @param General
 *
 * @param PriorityHighest:eval
 * @text Priority: Highest TGR
 * @parent General
 * @type boolean
 * @on Always
 * @off Weighted
 * @desc When enemies target actors for an single target attack,
 * always target the highest members or make it weighted?
 * @default true
 *
 * @param AggroPerDmg:num
 * @text Aggro Per Damage
 * @parent General
 * @desc The amount of aggro generated per point of HP damage dealt to an enemy.
 * @default 0.1
 *
 * @param AggroPerHeal:num
 * @text Aggro Per Heal
 * @parent General
 * @desc The amount of aggro generated per point of HP recovered to an ally.
 * @default 0.5
 *
 * @param Gauge
 *
 * @param VisibleGauge:eval
 * @text Visible Battler Gauge
 * @parent Gauge
 * @type boolean
 * @on Visible
 * @off None
 * @desc Display an aggro gauge over an SV actor's head to show
 * current aggro level compared to other party members.
 * @default false
 *
 * @param StatusGauge:eval
 * @text Visible Status Gauge
 * @parent Gauge
 * @type boolean
 * @on Visible
 * @off None
 * @desc Display an aggro gauge in the Battle Status Window
 * to show the current aggro level compared to others.
 * @default true
 *
 * @param GaugeColor1:str
 * @text Gauge Color 1
 * @parent Gauge
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #959595
 *
 * @param GaugeColor2:str
 * @text Gauge Color 2
 * @parent Gauge
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent Gauge
 * @desc Where do you want the Aggro Gauge sprite's anchor X to be?
 * Use values between 0 and 1 to be safe.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent Gauge
 * @desc Where do you want the Aggro Gauge sprite's anchor Y to be?
 * Use values between 0 and 1 to be safe.
 * @default 1.0
 *
 * @param Scale:num
 * @text Scale
 * @parent Gauge
 * @desc How large/small do you want the Aggro Gauge to be scaled?
 * @default 0.5
 * 
 * @param BattlerGauge
 * @text Battler Gauge
 * @parent Gauge
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent BattlerGauge
 * @desc How many pixels to offset the Aggro Gauge's X by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent BattlerGauge
 * @desc How many pixels to offset the Aggro Gauge's Y by?
 * Negative goes up. Positive goes down.
 * @default +2
 * 
 * @param BattleStatus
 * @text Battle Status Gauge
 * @parent Gauge
 *
 * @param BattleStatusOffsetX:num
 * @text Offset X
 * @parent BattleStatus
 * @desc How many pixels to offset the Aggro Gauge's X by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param BattleStatusOffsetY:num
 * @text Offset Y
 * @parent BattleStatus
 * @desc How many pixels to offset the Aggro Gauge's Y by?
 * Negative goes up. Positive goes down.
 * @default +0
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
 * @desc Add the 'Show Aggro Gauge' option to the Options menu?
 * @default true
 *
 * @param AdjustOptionsRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionName:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show Aggro Gauge
 *
 */
//=============================================================================

function _0x37d8(_0x3f36d8,_0x539489){const _0x4c4b89=_0x4c4b();return _0x37d8=function(_0x37d810,_0x310988){_0x37d810=_0x37d810-0x140;let _0x5a93d9=_0x4c4b89[_0x37d810];return _0x5a93d9;},_0x37d8(_0x3f36d8,_0x539489);}const _0x3a9adf=_0x37d8;(function(_0x24b691,_0x1aed21){const _0x8eb2ce=_0x37d8,_0x1c6afa=_0x24b691();while(!![]){try{const _0x1d1e9b=parseInt(_0x8eb2ce(0x1df))/0x1+parseInt(_0x8eb2ce(0x225))/0x2+parseInt(_0x8eb2ce(0x14a))/0x3+parseInt(_0x8eb2ce(0x2c1))/0x4*(parseInt(_0x8eb2ce(0x2e3))/0x5)+parseInt(_0x8eb2ce(0x2f6))/0x6+-parseInt(_0x8eb2ce(0x297))/0x7+-parseInt(_0x8eb2ce(0x1cc))/0x8*(parseInt(_0x8eb2ce(0x2a5))/0x9);if(_0x1d1e9b===_0x1aed21)break;else _0x1c6afa['push'](_0x1c6afa['shift']());}catch(_0x5d2be6){_0x1c6afa['push'](_0x1c6afa['shift']());}}}(_0x4c4b,0xdad1e));function _0x4c4b(){const _0x5aea86=['Sprite_Actor_update','Sprite_Gauge_gaugeRate','ArcHeight','fzJTX','version','selectAllActors','lowestTgrMember','concat','value','nAAFh','pdZSf','_homeY','JTSFW','Game_BattlerBase_refresh','note','aggroMultiplier','kLXoQ','isActor','_targetX','applyProvokeEffect','MuteAnimations','Scene_Options_maxCommands','addChild','addAggroControlSystemCommands','AniPhysical','FuHlO','BattleManager_invokeCounterAttack','_tauntAnimationTimer','format','tgrMax','isDead','time','isBypassTaunt','leftwardAnimation','NUM','_provokeBitmap','Sprite_Gauge_gaugeX','name','Sprite_Battler_update','_statusType','mHDTU','tyvdN','tgrMin','Game_BattlerBase_sparam','_muteTauntAnimations','currentMaxValue','ARRAYEVAL','refresh','_menuAggroType','certainHitTaunt','RKYxV','isTauntAffected','setHandler','optDisplayTp','prototype','Game_Action_applyGlobal','convertStringToBattleTarget','bypassProvoke','_aggro','createProvokeHeightOrigin','AddOption','log','arcHeight','description','baseAggro','OffsetX','Oirch','aggroGaugeColor2','getColorDataFromPluginParameters','currentValue','constructor','battleAggro','isEnemy','registerCommand','OpacitySpeed','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','endBattle','addState','isMagical','matchTauntType','stateHasProvoke','_%1TauntAnimation','Sprite_Gauge_currentValue','createStateSprite','1761496LNKcDq','initAggroControl','provokeHeightOrigin','bKWtm','provoke-line-color','STRUCT','getColor','AniCertain','bind','lEfUS','updateTauntAnimations','makeProvokeTarget','NahCw','nRnBF','_homeX','bypassHighestAggro','indexOf','_spriteset','addChildAt','1284625IWBWpN','parse','highestTgrMember','Game_Action_applyItemUserEffect','placeActorName','setBattler','bitmapHeight','ReqWd','EOyct','currentMaxValueAggroControl','aggro','LrZcz','AnchorX','Sprite_Gauge_drawValue','battleLayoutStyle','EMaKH','createBattleField','aggroGaugeY','Sprite_Battler_setBattler','status','drawValue','HITTYPE_PHYSICAL','initMembers','isAlive','alwaysTargetHighestAggro','BlendMode','EnemyChangeAggro','call','nameX','Game_Action_targetsForAlive','faceWidth','AnchorY','target','nameY','Provoke','filter','includes','AdjustOptionsRect','Window_BattleEnemy_refresh','blendMode','xrBcv','visible','uMXnz','placeGauge','_targetY','ryaVA','drawCircle','Game_Action_executeHpDamage','_mirrorActorTauntAnimations','isBypassProvoke','FbxAG','setAggro','EFzNL','toUpperCase','needsSelection','anchor','_counterAttackingTarget','gaugeHeight','actorId','initTauntAnimations','GaugeColor1','TsSoC','vxkoX','Game_Battler_onBattleStart','Sprite_Gauge_update','EnemyIndex','HITTYPE_CERTAIN','opacity','LAoOX','_lowestTgrMember','978938hmfbJz','OptionName','scale','_provoker','create','FzqCN','requestFauxAnimation','isAggroGaugeVisible','Taunt','phdYa','tgrSumFromGroup','Opacity','loseAggro','gaugeColor2','actor','BattleManager_endBattle','Game_BattlerBase_initMembers','maxSprites','magicalTauntMembers','certainHit','endAction','SckzE','ARRAYSTR','isProvokeAffected','Spriteset_Battle_createBattleField','_colorCache','applySubjectAggro','NRDSt','revVz','_battler','ConfigManager_makeData','uWETB','isShowPriorityLines','Sprite_Gauge_currentMaxValue','CycleTime','states','convertBattleTargetToString','_highestTgrMember','_targetIndex','exit','Sprite_Gauge_gaugeColor2','trim','_battleField','setup','itemRect','inputtingAction','FmIGu','nmPhm','Spriteset_Battle_update','nYEXU','BattleManager_invokeMagicReflection','YaNyX','aggro-gauge-color-2','updateAggroControl','provokeOrigin','pagedown','heightOrigin','match','updateChildrenOpacity','_checkingAggroTarget','_statusWindow','Game_Action_getSpecificBattlerKeyTarget','#%1','applyProvokeFilters','inBattle','random','isPhysical','friendsUnit','sortEnemies','provoker','hitType','reduce','BattleStatusOffsetX','fjQnY','_tauntAnimationCycle','battleUIOffsetY','tgr','startNewTauntAnimation','map','_physicalTauntAnimation','getSpecificBattlerKeyTarget','_enemies','isAggroGaugeShown','isTargetHighestTGR','Aggro','updateOpacity','drawAggroGauge','FzPmk','ViRqd','isSideView','isAggroAffected','ARRAYSTRUCT','vtctl','smoothTarget','_provokeContainer','opponentsUnit','orfQu','isTpb','AggroPerDmg','randomInt','magical','addCommand','HITTYPE_MAGICAL','randomTauntTarget','currentValueAggroControl','aggroGaugeColor1','fIGfx','provokeLineColor','_cache','height','pwoWx','max','removeDeadProvokerStates','magicalTaunt','9468088FUMMJY','ConfigManager_applyData','canSingleOrMultipleSelect','bGEWl','physicalTaunt','checkCacheKey','user','_animationCycleTime','VisuMZ_1_BattleCore','findTgrMember','Window_StatusBase_placeActorName','Qydjv','boxWidth','applyItemUserEffect','153cYVbJt','maxCommands','addAggroControlSystemAggroCommand','update','bypassTaunt','ActorSetAggro','BattleManager_endAction','_mainSprite','padding','EnemySetAggro','taunting','aggroGauge','xNwYU','round','maxOpacity','_aggroGaugeSprite','actor%1-gauge-aggro','VisuMZ_0_CoreEngine','ntWAu','ARRAYNUM','Game_Battler_addState','VZCBQ','UItQm','AggroControlSystem','aliveMembers','sparam','battler','length','4XzDzUc','isBypassHighestAggro','_provokeSprite','isAggroType','cmafc','isAtbGaugeVisible','GGnEF','Window_Options_addGeneralOptions','applyItemUserEffectAggroControl','PCyAc','BattleStatusOffsetY','gUGoZ','rPtDu','textColor','ShowLines','ConvertParams','randomTarget','parentContainer','children','subject','mkHVI','isForAnyone','Battle\x20Enemy\x20%1','JSON','min','index','makeData','isPlaytest','executeHpDamage','onBattleStart','xrcRB','VisuMZ_2_BattleSystemATB','clamp','physicalTauntMembers','7611280obuzfc','_subject','certainHitTauntMembers','ijZsi','RWeHU','updateSubPositions','PMqVU','tauntTargetsForAlive','_scene','Scale','clearProvokers','Sprite_Gauge_gaugeColor1','EVAL','physical','aggro-gauge-color-1','setFrame','gQyCV','abs','Sprite_Battler_initMembers','9608490Pkhsaq','scope','createInnerSprite','traitObjects','item','ActorID','jNUNR','Parts','ShowFacesListStyle','_magicalTauntAnimation','gaugeX','addGeneralOptions','getTauntMembers','applyTauntFilters','executeHpDamageAggroControl','createBattleFieldAggroControl','isSceneBattle','partsSize','DARHR','clearAggro','ActorChangeAggro','ShowAnimation','3282852BuLYzG','list','createAggroGauge','dRCPt','applyGlobal','Game_Battler_onBattleEnd','vTZHx','invokeMagicReflection','targetsForAlive','_damageContainer','Sprite_Battler_initialize','showVisualAtbGauge','boxHeight','provokeBitmap','isStateAffected','GaugeColor2','GvmRI','Settings','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','battleUIOffsetX','_opacitySpeed','dUjTM','HeightOrigin','iconWidth','invokeCounterAttack','initialize','clearTgrCache','updateAggroGaugeSprite','shift','Game_Unit_onBattleStart','LineColor','gainAggro','some','width','pADxt','aggroGaugeX','isCertainHit','PriorityHighest','AniMagical','applyData','BattleLayout','Sprite_Actor_createStateSprite','updateBattlerPositions','isNotEnemySelectAction','_sprites','members'];_0x4c4b=function(){return _0x5aea86;};return _0x4c4b();}var label=_0x3a9adf(0x2bc),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x3a9adf(0x202)](function(_0x37e1fe){const _0x17b6ea=_0x3a9adf;return _0x37e1fe[_0x17b6ea(0x1f2)]&&_0x37e1fe[_0x17b6ea(0x1b7)][_0x17b6ea(0x203)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x20c09f,_0x231fbd){const _0x5a3a1e=_0x3a9adf;for(const _0x378150 in _0x231fbd){if(_0x5a3a1e(0x253)===_0x5a3a1e(0x2e9)){const _0x5c8b40=_0x5750fe[_0x5a3a1e(0x2bd)]();this['_enemies']=this['_enemies'][_0x5a3a1e(0x17f)](_0x5c8b40),_0x752907[_0x5a3a1e(0x299)]&&_0x549839[_0x5a3a1e(0x299)]()&&_0x5c8b40[_0x5a3a1e(0x2c0)]>0x1&&this['setHandler'](_0x5a3a1e(0x25c),this[_0x5a3a1e(0x17d)]['bind'](this));}else{if(_0x378150[_0x5a3a1e(0x25e)](/(.*):(.*)/i)){const _0xaac934=String(RegExp['$1']),_0x287692=String(RegExp['$2'])[_0x5a3a1e(0x214)]()[_0x5a3a1e(0x24e)]();let _0x1e7a65,_0x40e992,_0x2a6176;switch(_0x287692){case _0x5a3a1e(0x19a):_0x1e7a65=_0x231fbd[_0x378150]!==''?Number(_0x231fbd[_0x378150]):0x0;break;case _0x5a3a1e(0x2b8):_0x40e992=_0x231fbd[_0x378150]!==''?JSON[_0x5a3a1e(0x1e0)](_0x231fbd[_0x378150]):[],_0x1e7a65=_0x40e992[_0x5a3a1e(0x273)](_0x58d015=>Number(_0x58d015));break;case _0x5a3a1e(0x2ef):_0x1e7a65=_0x231fbd[_0x378150]!==''?eval(_0x231fbd[_0x378150]):null;break;case _0x5a3a1e(0x1a6):_0x40e992=_0x231fbd[_0x378150]!==''?JSON['parse'](_0x231fbd[_0x378150]):[],_0x1e7a65=_0x40e992[_0x5a3a1e(0x273)](_0x51b6f9=>eval(_0x51b6f9));break;case _0x5a3a1e(0x2d8):_0x1e7a65=_0x231fbd[_0x378150]!==''?JSON[_0x5a3a1e(0x1e0)](_0x231fbd[_0x378150]):'';break;case'ARRAYJSON':_0x40e992=_0x231fbd[_0x378150]!==''?JSON[_0x5a3a1e(0x1e0)](_0x231fbd[_0x378150]):[],_0x1e7a65=_0x40e992['map'](_0x4fe75e=>JSON['parse'](_0x4fe75e));break;case'FUNC':_0x1e7a65=_0x231fbd[_0x378150]!==''?new Function(JSON[_0x5a3a1e(0x1e0)](_0x231fbd[_0x378150])):new Function('return\x200');break;case'ARRAYFUNC':_0x40e992=_0x231fbd[_0x378150]!==''?JSON[_0x5a3a1e(0x1e0)](_0x231fbd[_0x378150]):[],_0x1e7a65=_0x40e992[_0x5a3a1e(0x273)](_0x248f28=>new Function(JSON[_0x5a3a1e(0x1e0)](_0x248f28)));break;case'STR':_0x1e7a65=_0x231fbd[_0x378150]!==''?String(_0x231fbd[_0x378150]):'';break;case _0x5a3a1e(0x23b):_0x40e992=_0x231fbd[_0x378150]!==''?JSON[_0x5a3a1e(0x1e0)](_0x231fbd[_0x378150]):[],_0x1e7a65=_0x40e992[_0x5a3a1e(0x273)](_0x3f464a=>String(_0x3f464a));break;case _0x5a3a1e(0x1d1):_0x2a6176=_0x231fbd[_0x378150]!==''?JSON['parse'](_0x231fbd[_0x378150]):{},_0x1e7a65=VisuMZ[_0x5a3a1e(0x2d0)]({},_0x2a6176);break;case _0x5a3a1e(0x280):_0x40e992=_0x231fbd[_0x378150]!==''?JSON[_0x5a3a1e(0x1e0)](_0x231fbd[_0x378150]):[],_0x1e7a65=_0x40e992['map'](_0xab7e3b=>VisuMZ[_0x5a3a1e(0x2d0)]({},JSON[_0x5a3a1e(0x1e0)](_0xab7e3b)));break;default:continue;}_0x20c09f[_0xaac934]=_0x1e7a65;}}}return _0x20c09f;},(_0x50a754=>{const _0x5871df=_0x3a9adf,_0x5df4c8=_0x50a754[_0x5871df(0x19d)];for(const _0x31bfad of dependencies){if('bGEWl'!==_0x5871df(0x29a)){if(!_0x16d295[_0x5871df(0x2b6)])return;if(!_0x8f1176[_0x5871df(0x29f)])return;if(!_0x80c117[_0x5871df(0x2bc)]['Settings']['Taunt'][_0x5871df(0x149)])return;if(!this[_0x5871df(0x242)])return;this['_tauntAnimationTimer']--,this[_0x5871df(0x193)]<=0x0&&this['startNewTauntAnimation']();}else{if(!Imported[_0x31bfad]){if('BWwNL'===_0x5871df(0x2fc)){if(!_0x1869be)return![];return _0x1a7ab6[_0x5871df(0x186)][_0x5871df(0x25e)](/<PROVOKE>/i);}else{alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x5df4c8,_0x31bfad)),SceneManager[_0x5871df(0x24c)]();break;}}}}const _0x18b1c4=_0x50a754[_0x5871df(0x1b7)];if(_0x18b1c4[_0x5871df(0x25e)](/\[Version[ ](.*?)\]/i)){const _0xc3a0e8=Number(RegExp['$1']);_0xc3a0e8!==VisuMZ[label][_0x5871df(0x17c)]&&(alert(_0x5871df(0x1c3)[_0x5871df(0x194)](_0x5df4c8,_0xc3a0e8)),SceneManager['exit']());}if(_0x18b1c4[_0x5871df(0x25e)](/\[Tier[ ](\d+)\]/i)){if('UdVHx'===_0x5871df(0x1a0))return _0x10229f[_0x5871df(0x26c)]((_0x1ce1f5,_0x4a6eae)=>_0x1ce1f5+_0x4a6eae[_0x5871df(0x271)],0x0);else{const _0x3ec148=Number(RegExp['$1']);if(_0x3ec148<tier)alert(_0x5871df(0x15c)[_0x5871df(0x194)](_0x5df4c8,_0x3ec148,tier)),SceneManager[_0x5871df(0x24c)]();else{if(_0x5871df(0x2cd)!==_0x5871df(0x2a2))tier=Math['max'](_0x3ec148,tier);else return[_0x4dfc76];}}}VisuMZ[_0x5871df(0x2d0)](VisuMZ[label]['Settings'],_0x50a754['parameters']);})(pluginData),PluginManager[_0x3a9adf(0x1c1)](pluginData['name'],_0x3a9adf(0x148),_0x11422f=>{const _0x4682fd=_0x3a9adf;if(!$gameParty[_0x4682fd(0x265)]())return;VisuMZ['ConvertParams'](_0x11422f,_0x11422f);const _0x2b94c4=$gameActors[_0x4682fd(0x233)](_0x11422f[_0x4682fd(0x2fb)]),_0x5c93e3=_0x11422f[_0x4682fd(0x279)];if(_0x2b94c4)_0x2b94c4[_0x4682fd(0x169)](_0x5c93e3);}),PluginManager['registerCommand'](pluginData[_0x3a9adf(0x19d)],_0x3a9adf(0x2aa),_0x1abb85=>{const _0x54cf7f=_0x3a9adf;if(!$gameParty[_0x54cf7f(0x265)]())return;VisuMZ[_0x54cf7f(0x2d0)](_0x1abb85,_0x1abb85);const _0xcd5966=$gameActors[_0x54cf7f(0x233)](_0x1abb85[_0x54cf7f(0x2fb)]),_0x53b1d9=_0x1abb85['Aggro'];if(_0xcd5966)_0xcd5966[_0x54cf7f(0x212)](_0x53b1d9);}),PluginManager[_0x3a9adf(0x1c1)](pluginData[_0x3a9adf(0x19d)],_0x3a9adf(0x1f9),_0x3322ea=>{const _0x2ba1a0=_0x3a9adf;if(!$gameParty[_0x2ba1a0(0x265)]())return;VisuMZ[_0x2ba1a0(0x2d0)](_0x3322ea,_0x3322ea);const _0x201d65=$gameTroop[_0x2ba1a0(0x177)]()[_0x3322ea[_0x2ba1a0(0x220)]],_0x20ff78=_0x3322ea[_0x2ba1a0(0x279)];if(_0x201d65)_0x201d65['gainAggro'](_0x20ff78);}),PluginManager[_0x3a9adf(0x1c1)](pluginData[_0x3a9adf(0x19d)],_0x3a9adf(0x2ae),_0x56ce33=>{const _0x1e114b=_0x3a9adf;if(!$gameParty['inBattle']())return;VisuMZ[_0x1e114b(0x2d0)](_0x56ce33,_0x56ce33);const _0x5ab82c=$gameTroop[_0x1e114b(0x177)]()[_0x56ce33[_0x1e114b(0x220)]],_0x3a1885=_0x56ce33[_0x1e114b(0x279)];if(_0x5ab82c)_0x5ab82c['setAggro'](_0x3a1885);}),DataManager[_0x3a9adf(0x1c8)]=function(_0x37caf0){const _0x338ea3=_0x3a9adf;if(!_0x37caf0)return![];return _0x37caf0[_0x338ea3(0x186)][_0x338ea3(0x25e)](/<PROVOKE>/i);},DataManager['isBypassProvoke']=function(_0xe65434){const _0x165cb9=_0x3a9adf;if(!_0xe65434)return![];return _0xe65434[_0x165cb9(0x186)][_0x165cb9(0x25e)](/<BYPASS PROVOKE>/i);},DataManager[_0x3a9adf(0x198)]=function(_0x45f2c5){const _0x55fe88=_0x3a9adf;if(!_0x45f2c5)return![];return _0x45f2c5[_0x55fe88(0x186)][_0x55fe88(0x25e)](/<BYPASS TAUNT>/i);},DataManager[_0x3a9adf(0x2c2)]=function(_0x3eaabf){const _0x1f599f=_0x3a9adf;if(!_0x3eaabf)return![];return _0x3eaabf[_0x1f599f(0x186)][_0x1f599f(0x25e)](/<BYPASS HIGHEST (?:AGGRO|ENMITY|THREAT)>/i);},DataManager[_0x3a9adf(0x1f7)]=function(_0x261f7f){const _0x332fba=_0x3a9adf;if(!_0x261f7f)return![];return _0x261f7f[_0x332fba(0x186)][_0x332fba(0x25e)](/<TARGET HIGHEST (?:AGGRO|ENMITY|THREAT)>/i);},ImageManager[_0x3a9adf(0x157)]=function(){const _0xb6d9f5=_0x3a9adf;if(this[_0xb6d9f5(0x19b)])return this[_0xb6d9f5(0x19b)];return this[_0xb6d9f5(0x19b)]=new Bitmap(0x64,0x64),this[_0xb6d9f5(0x19b)][_0xb6d9f5(0x20d)](0x32,0x32,0x32,ColorManager[_0xb6d9f5(0x290)]()),this['_provokeBitmap']['_customModified']=![],this[_0xb6d9f5(0x19b)];},ConfigManager[_0x3a9adf(0x2b0)]=!![],ConfigManager['provokeOrigin']=!![],VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x243)]=ConfigManager[_0x3a9adf(0x2db)],ConfigManager[_0x3a9adf(0x2db)]=function(){const _0x161828=_0x3a9adf,_0x53f77c=VisuMZ[_0x161828(0x2bc)][_0x161828(0x243)][_0x161828(0x1fa)](this);return _0x53f77c['aggroGauge']=this['aggroGauge'],_0x53f77c[_0x161828(0x25b)]=this[_0x161828(0x25b)],_0x53f77c;},VisuMZ['AggroControlSystem'][_0x3a9adf(0x298)]=ConfigManager['applyData'],ConfigManager[_0x3a9adf(0x171)]=function(_0x24188f){const _0x561f8b=_0x3a9adf;VisuMZ[_0x561f8b(0x2bc)][_0x561f8b(0x298)][_0x561f8b(0x1fa)](this,_0x24188f),_0x561f8b(0x2b0)in _0x24188f?'XCKFJ'!==_0x561f8b(0x27d)?this[_0x561f8b(0x2b0)]=_0x24188f['aggroGauge']:(this[_0x561f8b(0x24a)]=_0x3a2045,this['_lowestTgrMember']=_0x4dd759):'uYtwb'!=='LERqz'?this['aggroGauge']=!![]:this[_0x561f8b(0x25b)]=_0x301c65[_0x561f8b(0x25b)],_0x561f8b(0x25b)in _0x24188f?this['provokeOrigin']=_0x24188f['provokeOrigin']:'rXWmh'!==_0x561f8b(0x22e)?this['provokeOrigin']=!![]:(_0x34d433=!![],this[_0x561f8b(0x18a)]+=_0x4644a7['_scene']['_statusWindow']['x'],this['_targetY']+=_0x40355d[_0x561f8b(0x2eb)][_0x561f8b(0x261)]['y']);},TextManager[_0x3a9adf(0x2b0)]=VisuMZ['AggroControlSystem'][_0x3a9adf(0x15b)][_0x3a9adf(0x279)][_0x3a9adf(0x226)],TextManager[_0x3a9adf(0x25b)]=VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x15b)][_0x3a9adf(0x201)][_0x3a9adf(0x226)],ColorManager[_0x3a9adf(0x1bc)]=function(_0x31d4f6,_0x5efca8){const _0x157959=_0x3a9adf;return _0x5efca8=String(_0x5efca8),this['_colorCache']=this[_0x157959(0x23e)]||{},_0x5efca8[_0x157959(0x25e)](/#(.*)/i)?this[_0x157959(0x23e)][_0x31d4f6]=_0x157959(0x263)[_0x157959(0x194)](String(RegExp['$1'])):this[_0x157959(0x23e)][_0x31d4f6]=this[_0x157959(0x2ce)](Number(_0x5efca8)),this[_0x157959(0x23e)][_0x31d4f6];},ColorManager[_0x3a9adf(0x1d2)]=function(_0x57af39){const _0x22d95c=_0x3a9adf;return _0x57af39=String(_0x57af39),_0x57af39[_0x22d95c(0x25e)](/#(.*)/i)?_0x22d95c(0x263)[_0x22d95c(0x194)](String(RegExp['$1'])):this[_0x22d95c(0x2ce)](Number(_0x57af39));},ColorManager[_0x3a9adf(0x290)]=function(){const _0x3b99f6=_0x3a9adf,_0x47ea84=_0x3b99f6(0x1d0);this[_0x3b99f6(0x23e)]=this[_0x3b99f6(0x23e)]||{};if(this['_colorCache'][_0x47ea84])return this[_0x3b99f6(0x23e)][_0x47ea84];const _0xea5e3c=VisuMZ[_0x3b99f6(0x2bc)][_0x3b99f6(0x15b)]['Provoke'][_0x3b99f6(0x168)];return this[_0x3b99f6(0x1bc)](_0x47ea84,_0xea5e3c);},ColorManager[_0x3a9adf(0x28e)]=function(){const _0x4b4d89=_0x3a9adf,_0x2cb4c5=_0x4b4d89(0x2f1);this[_0x4b4d89(0x23e)]=this['_colorCache']||{};if(this[_0x4b4d89(0x23e)][_0x2cb4c5])return this['_colorCache'][_0x2cb4c5];const _0x115039=VisuMZ[_0x4b4d89(0x2bc)][_0x4b4d89(0x15b)][_0x4b4d89(0x279)][_0x4b4d89(0x21b)];return this[_0x4b4d89(0x1bc)](_0x2cb4c5,_0x115039);},ColorManager[_0x3a9adf(0x1bb)]=function(){const _0x8f2496=_0x3a9adf,_0x48517a=_0x8f2496(0x259);this['_colorCache']=this[_0x8f2496(0x23e)]||{};if(this['_colorCache'][_0x48517a])return this[_0x8f2496(0x23e)][_0x48517a];const _0x31dc66=VisuMZ[_0x8f2496(0x2bc)][_0x8f2496(0x15b)]['Aggro'][_0x8f2496(0x159)];return this[_0x8f2496(0x1bc)](_0x48517a,_0x31dc66);},SceneManager[_0x3a9adf(0x144)]=function(){const _0x35ad8b=_0x3a9adf;return this[_0x35ad8b(0x2eb)]&&this[_0x35ad8b(0x2eb)][_0x35ad8b(0x1be)]===Scene_Battle;},BattleManager[_0x3a9adf(0x249)]=function(_0x484728){const _0x43b2a6=_0x3a9adf;let _0x27d3e3=this[_0x43b2a6(0x2e4)];if(this['_counterAttackingTarget']){if(_0x43b2a6(0x254)===_0x43b2a6(0x254))_0x27d3e3=this[_0x43b2a6(0x217)];else return _0x27951e[_0x43b2a6(0x2bc)]['Sprite_Gauge_currentMaxValue'][_0x43b2a6(0x1fa)](this);}if(!_0x27d3e3){if(_0x43b2a6(0x181)!==_0x43b2a6(0x181))_0x4a28cf['AggroControlSystem'][_0x43b2a6(0x2f5)][_0x43b2a6(0x1fa)](this),this[_0x43b2a6(0x21a)]();else return null;}if(_0x27d3e3[_0x43b2a6(0x189)]()&&_0x484728[_0x43b2a6(0x1c0)]())return'Battle\x20Actor\x20%1'[_0x43b2a6(0x194)](_0x27d3e3[_0x43b2a6(0x219)]());else{if(_0x27d3e3[_0x43b2a6(0x1c0)]()&&_0x484728[_0x43b2a6(0x189)]()){if(_0x43b2a6(0x17b)!=='fzJTX')_0x5032b5(_0xf93809);else return _0x43b2a6(0x2d7)[_0x43b2a6(0x194)](_0x27d3e3[_0x43b2a6(0x2da)]());}}return null;},BattleManager[_0x3a9adf(0x1b0)]=function(_0x278ec2){const _0x36df48=_0x3a9adf;if(!_0x278ec2)return null;if(_0x278ec2['match'](/BATTLE ACTOR (\d+)/i))return $gameActors[_0x36df48(0x233)](Number(RegExp['$1']));else{if(_0x278ec2[_0x36df48(0x25e)](/BATTLE ENEMY (\d+)/i))return $gameTroop[_0x36df48(0x177)]()[Number(RegExp['$1'])];}return null;},BattleManager[_0x3a9adf(0x278)]=function(){const _0x33bbf8=_0x3a9adf;return VisuMZ[_0x33bbf8(0x2bc)][_0x33bbf8(0x15b)][_0x33bbf8(0x279)][_0x33bbf8(0x16f)];},VisuMZ[_0x3a9adf(0x2bc)]['Game_Action_getSpecificBattlerKeyTarget']=Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x275)],Game_Action['prototype'][_0x3a9adf(0x275)]=function(){const _0x12a18f=_0x3a9adf;let _0x476274=VisuMZ[_0x12a18f(0x2bc)][_0x12a18f(0x262)][_0x12a18f(0x1fa)](this);if(this[_0x12a18f(0x260)])return _0x476274;this['_checkingAggroTarget']=!![];if(_0x476274&&_0x476274[_0x12a18f(0x189)]()!==this[_0x12a18f(0x2d4)]()['isActor']()){if('PCyAc'!==_0x12a18f(0x2ca))return this['physicalTaunt']()||this[_0x12a18f(0x296)]()||this[_0x12a18f(0x1a9)]();else{this[_0x12a18f(0x24b)]=-0x1;if(this[_0x12a18f(0x23c)]()){if(_0x12a18f(0x1cf)!==_0x12a18f(0x1d8))_0x476274=this[_0x12a18f(0x2d4)]()['provoker']();else return this[_0x12a18f(0x2c4)]()?this[_0x12a18f(0x1e8)]():_0x52234d[_0x12a18f(0x2bc)][_0x12a18f(0x246)][_0x12a18f(0x1fa)](this);}else{if(this['isTauntAffected']()){if('xxRPI'==='RKDui')return 0x64;else{this[_0x12a18f(0x260)]=![];const _0x1bcec1=this[_0x12a18f(0x2fa)]()[_0x12a18f(0x26b)],_0x5add6b=this[_0x12a18f(0x284)]()['getTauntMembers'](_0x1bcec1);!_0x5add6b[_0x12a18f(0x203)](_0x476274)&&(_0x476274=_0x5add6b[Math[_0x12a18f(0x288)](_0x5add6b[_0x12a18f(0x2c0)])]);}}else{if(this[_0x12a18f(0x27f)]()){if(_0x12a18f(0x241)!==_0x12a18f(0x241))return _0xf8503['aggroGaugeColor2']();else this[_0x12a18f(0x260)]=![],_0x476274=this['opponentsUnit']()[_0x12a18f(0x1e1)]();}}}}}return this[_0x12a18f(0x260)]=![],_0x476274;},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x1fc)]=Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x152)],Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x152)]=function(_0x2f12f9){const _0x522d85=_0x3a9adf;if(this[_0x522d85(0x23c)]())return _0x522d85(0x15f)==='dUjTM'?this[_0x522d85(0x1d7)]():this[_0x522d85(0x2f9)]()['some'](_0x313156=>_0x313156&&_0x313156[_0x522d85(0x186)][_0x522d85(0x25e)](/<(?:TAUNT|MAGICAL TAUNT|ALL TAUNT)>/i));else{if(this[_0x522d85(0x1ab)]())return this[_0x522d85(0x2ea)](_0x2f12f9);else return this[_0x522d85(0x27f)]()?(_0x2f12f9[_0x522d85(0x164)](),[_0x2f12f9[_0x522d85(0x1e1)]()]):VisuMZ[_0x522d85(0x2bc)]['Game_Action_targetsForAlive'][_0x522d85(0x1fa)](this,_0x2f12f9);}},Game_Action[_0x3a9adf(0x1ae)]['isNotEnemySelectAction']=function(){const _0x2ec079=_0x3a9adf;if(this[_0x2ec079(0x2d6)]&&this[_0x2ec079(0x2d6)]()&&this[_0x2ec079(0x215)]()){if(_0x2ec079(0x20c)===_0x2ec079(0x20c)){const _0x3367c2=this['getBattlerKeyTargets']();return _0x3367c2[_0x2ec079(0x2c0)]>=0x1&&_0x3367c2[0x0][_0x2ec079(0x189)]()===this[_0x2ec079(0x2d4)]()[_0x2ec079(0x189)]();}else return this['currentMaxValueAggroControl']();}else{if(this[_0x2ec079(0x2fa)]()[_0x2ec079(0x2f7)]!==0x1)return!![];}return![];},Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x23c)]=function(){const _0x4b93d1=_0x3a9adf;if(!$gameParty[_0x4b93d1(0x265)]())return![];if(!this[_0x4b93d1(0x2fa)]())return![];if(this[_0x4b93d1(0x175)]())return![];if(!this[_0x4b93d1(0x215)]())return![];if(DataManager[_0x4b93d1(0x210)](this[_0x4b93d1(0x2fa)]()))return![];if(this[_0x4b93d1(0x2d4)]()[_0x4b93d1(0x1b1)]())return![];if(!this[_0x4b93d1(0x2d4)]()[_0x4b93d1(0x23c)]())return![];const _0x1614c9=this['subject']()['provoker']();if(_0x1614c9[_0x4b93d1(0x196)]())return![];return!![];},Game_Action['prototype']['makeProvokeTarget']=function(){const _0x23f4ea=_0x3a9adf;return[this[_0x23f4ea(0x2d4)]()[_0x23f4ea(0x26a)]()];},Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x1ab)]=function(){const _0x7930f7=_0x3a9adf;if(!$gameParty['inBattle']())return![];if(!this[_0x7930f7(0x2fa)]())return![];if(this[_0x7930f7(0x175)]())return![];if(!this['needsSelection']())return![];if(DataManager[_0x7930f7(0x198)](this[_0x7930f7(0x2fa)]()))return![];if(this[_0x7930f7(0x2d4)]()['bypassTaunt']())return![];const _0x17c577=this[_0x7930f7(0x284)]();let _0x3c8a2c=![];if(this[_0x7930f7(0x267)]()&&_0x17c577[_0x7930f7(0x2e2)]()[_0x7930f7(0x2c0)]>0x0)_0x3c8a2c=!![];if(this[_0x7930f7(0x1c6)]()&&_0x17c577[_0x7930f7(0x237)]()['length']>0x0)_0x3c8a2c=!![];if(this[_0x7930f7(0x16e)]()&&_0x17c577['certainHitTauntMembers']()[_0x7930f7(0x2c0)]>0x0)_0x3c8a2c=!![];return _0x3c8a2c;},Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x2ea)]=function(_0x440549){const _0x10c911=_0x3a9adf;if(this['_targetIndex']<0x0){if(_0x10c911(0x146)===_0x10c911(0x1aa)){const _0x6bfd70=_0x3a9104['AggroControlSystem']['ConfigManager_makeData']['call'](this);return _0x6bfd70[_0x10c911(0x2b0)]=this[_0x10c911(0x2b0)],_0x6bfd70['provokeOrigin']=this['provokeOrigin'],_0x6bfd70;}else return[_0x440549[_0x10c911(0x28c)](this[_0x10c911(0x2fa)]()[_0x10c911(0x26b)])];}else{const _0x1b4f2c=_0x440549[_0x10c911(0x282)](this[_0x10c911(0x24b)]);if(_0x1b4f2c[_0x10c911(0x1c7)](this[_0x10c911(0x2fa)]()[_0x10c911(0x26b)])){if(_0x10c911(0x240)!==_0x10c911(0x191))return[_0x1b4f2c];else{for(const _0x1fa2a2 of _0x2289fc){_0x1f6ed8-=_0x1fa2a2[_0x10c911(0x271)],_0xb4f10c<=0x0&&!_0x5d786e&&(_0x1f0d13=_0x1fa2a2);}return _0x9fb84b||this[_0x10c911(0x2d1)]();}}else return[_0x440549[_0x10c911(0x28c)]()];}},Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x27f)]=function(){const _0x37994d=_0x3a9adf;if(!$gameParty[_0x37994d(0x265)]())return![];if(this[_0x37994d(0x175)]())return![];if(this[_0x37994d(0x24b)]>=0x0)return![];if(DataManager[_0x37994d(0x2c2)](this[_0x37994d(0x2fa)]()))return![];if(this['subject']()[_0x37994d(0x1db)]())return![];if(DataManager[_0x37994d(0x1f7)](this[_0x37994d(0x2fa)]()))return!![];if(this[_0x37994d(0x2d4)]()[_0x37994d(0x1f7)]())return!![];return BattleManager[_0x37994d(0x278)]();},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x1af)]=Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x14e)],Game_Action['prototype']['applyGlobal']=function(){const _0x2f21af=_0x3a9adf;VisuMZ[_0x2f21af(0x2bc)][_0x2f21af(0x1af)][_0x2f21af(0x1fa)](this),this[_0x2f21af(0x23f)]();},Game_Action['prototype'][_0x3a9adf(0x23f)]=function(){const _0x300408=_0x3a9adf,_0x36bcfa=this['item']()[_0x300408(0x186)];if(_0x36bcfa['match'](/<(?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT): ([\+\-]\d+)>/i)){const _0x833e91=Number(RegExp['$1']);this['subject']()['gainAggro'](_0x833e91);}if(_0x36bcfa['match'](/<JS (?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT)>\s*([\s\S]*)\s*<\/JS (?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT)>/i)){if('fjQnY'!==_0x300408(0x26e))return _0xb4a455;else{const _0x324ab7=String(RegExp['$1']);window['user']=this[_0x300408(0x2d4)](),window[_0x300408(0x2fa)]=this[_0x300408(0x2fa)](),window['a']=this[_0x300408(0x2d4)](),window['b']=a,window[_0x300408(0x180)]=user['battleAggro']();try{if('tyvdN'!==_0x300408(0x1a1)){const _0x15f439=_0x14edc2['AggroPerHeal'];this[_0x300408(0x2d4)]()[_0x300408(0x169)](_0x15f439*_0x2fc50a[_0x300408(0x2f4)](_0x572a58));}else eval(_0x324ab7);}catch(_0x1a0484){if($gameTemp['isPlaytest']())console['log'](_0x1a0484);}user[_0x300408(0x212)](window[_0x300408(0x180)]),window[_0x300408(0x29d)]=undefined,window[_0x300408(0x1ff)]=undefined,window[_0x300408(0x2fa)]=undefined,window['a']=undefined,window['b']=undefined,window[_0x300408(0x180)]=undefined;}}},VisuMZ[_0x3a9adf(0x2bc)]['Game_Action_applyItemUserEffect']=Game_Action[_0x3a9adf(0x1ae)]['applyItemUserEffect'],Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x2a4)]=function(_0x43fef6){const _0x71cd66=_0x3a9adf;VisuMZ[_0x71cd66(0x2bc)][_0x71cd66(0x1e2)][_0x71cd66(0x1fa)](this,_0x43fef6),this[_0x71cd66(0x2c9)](_0x43fef6);},Game_Action['prototype']['applyItemUserEffectAggroControl']=function(_0x43d0f0){const _0x15c742=_0x3a9adf;if(!this[_0x15c742(0x2fa)]())return;if(!SceneManager[_0x15c742(0x144)]())return;const _0x4259af=this['item']()[_0x15c742(0x186)];if(_0x4259af['match'](/<TARGET (?:AGGRO|ENMITY|THREAT): ([\+\-]\d+)>/i)){const _0x2c1874=Number(RegExp['$1']);_0x43d0f0[_0x15c742(0x169)](_0x2c1874);}if(_0x4259af[_0x15c742(0x25e)](/<JS TARGET (?:AGGRO|ENMITY|THREAT)>\s*([\s\S]*)\s*<\/JS TARGET (?:AGGRO|ENMITY|THREAT)>/i)){const _0x33be83=String(RegExp['$1']);window[_0x15c742(0x29d)]=this['subject'](),window[_0x15c742(0x1ff)]=_0x43d0f0,window[_0x15c742(0x2fa)]=this[_0x15c742(0x2fa)](),window['a']=this[_0x15c742(0x2d4)](),window['b']=_0x43d0f0,window['value']=_0x43d0f0[_0x15c742(0x1bf)]();try{eval(_0x33be83);}catch(_0x5cb80c){if(_0x15c742(0x182)===_0x15c742(0x182)){if($gameTemp[_0x15c742(0x2dc)]())console[_0x15c742(0x1b5)](_0x5cb80c);}else{const _0x26a306=_0x15c742(0x1c9)[_0x15c742(0x194)](_0x3f0a3),_0x26bfaf=_0x25038c[_0x26a306];if(_0x26bfaf)return _0x26bfaf;}}_0x43d0f0[_0x15c742(0x212)](window[_0x15c742(0x180)]),window['user']=undefined,window[_0x15c742(0x1ff)]=undefined,window[_0x15c742(0x2fa)]=undefined,window['a']=undefined,window['b']=undefined,window[_0x15c742(0x180)]=undefined;}},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x20e)]=Game_Action[_0x3a9adf(0x1ae)]['executeHpDamage'],Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x2dd)]=function(_0x12cd39,_0x329837){const _0x328a56=_0x3a9adf;VisuMZ[_0x328a56(0x2bc)][_0x328a56(0x20e)][_0x328a56(0x1fa)](this,_0x12cd39,_0x329837),this[_0x328a56(0x142)](_0x12cd39,_0x329837);},Game_Action[_0x3a9adf(0x1ae)][_0x3a9adf(0x142)]=function(_0xdf2158,_0x5ce98f){const _0x578107=_0x3a9adf,_0x50dc29=VisuMZ[_0x578107(0x2bc)][_0x578107(0x15b)][_0x578107(0x279)];if(_0x5ce98f>0x0&&_0xdf2158['isActor']()!==this[_0x578107(0x2d4)]()[_0x578107(0x189)]()){const _0x479815=_0x50dc29['AggroPerDmg'];this[_0x578107(0x2d4)]()[_0x578107(0x169)](_0x479815*_0x5ce98f);}if(_0x5ce98f<0x0&&_0xdf2158['isActor']()===this[_0x578107(0x2d4)]()[_0x578107(0x189)]()){const _0x820839=_0x50dc29['AggroPerHeal'];this[_0x578107(0x2d4)]()['gainAggro'](_0x820839*Math[_0x578107(0x2f4)](_0x5ce98f));}},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x235)]=Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x1f5)],Game_BattlerBase['prototype'][_0x3a9adf(0x1f5)]=function(){const _0x6249aa=_0x3a9adf;this[_0x6249aa(0x291)]={},VisuMZ[_0x6249aa(0x2bc)][_0x6249aa(0x235)][_0x6249aa(0x1fa)](this),this['initAggroControl']();},Game_BattlerBase['prototype'][_0x3a9adf(0x1cd)]=function(){const _0x5189a1=_0x3a9adf;this[_0x5189a1(0x2ed)](),this[_0x5189a1(0x147)]();},Game_BattlerBase['prototype'][_0x3a9adf(0x2ed)]=function(){this['_provoker']={};},VisuMZ['AggroControlSystem'][_0x3a9adf(0x185)]=Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x1a7)],Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x1a7)]=function(){const _0x252166=_0x3a9adf;this[_0x252166(0x291)]={},VisuMZ['AggroControlSystem'][_0x252166(0x185)][_0x252166(0x1fa)](this),this[_0x252166(0x295)]();},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x29c)]=function(_0x4b9569){const _0x59c7ad=_0x3a9adf;return this[_0x59c7ad(0x291)]=this['_cache']||{},this['_cache'][_0x4b9569]!==undefined;},Game_BattlerBase[_0x3a9adf(0x1ae)]['provoker']=function(){const _0x4c89a8=_0x3a9adf;for(const _0x1d1fff of this['states']()){if(DataManager[_0x4c89a8(0x1c8)](_0x1d1fff)){if('GbXJS'!==_0x4c89a8(0x2e6)){if(this[_0x4c89a8(0x228)]===undefined)this['clearProvokers']();const _0x5a60af=this[_0x4c89a8(0x228)][_0x1d1fff['id']],_0x878fda=BattleManager[_0x4c89a8(0x1b0)](_0x5a60af);if(_0x878fda&&_0x878fda[_0x4c89a8(0x1f6)]())return _0x878fda;}else _0x1ede07['AggroControlSystem'][_0x4c89a8(0x19e)][_0x4c89a8(0x1fa)](this),this[_0x4c89a8(0x1d6)]();}}return null;},Game_BattlerBase[_0x3a9adf(0x1ae)]['isProvokeAffected']=function(){return!!this['provoker']();},Game_BattlerBase[_0x3a9adf(0x1ae)]['bypassProvoke']=function(){const _0x507649=_0x3a9adf;return this['traitObjects']()[_0x507649(0x16a)](_0x2e481e=>_0x2e481e&&_0x2e481e[_0x507649(0x186)][_0x507649(0x25e)](/<BYPASS PROVOKE>/i));},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x1ce)]=function(){const _0x24a483=_0x3a9adf;let _0x4c42b6='provokeHeightOrigin';if(this[_0x24a483(0x29c)](_0x4c42b6))return this[_0x24a483(0x291)][_0x4c42b6];return this[_0x24a483(0x291)][_0x4c42b6]=this[_0x24a483(0x1b3)](),this[_0x24a483(0x291)][_0x4c42b6];},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x1b3)]=function(){const _0x4084f3=_0x3a9adf,_0xb9d933=this[_0x4084f3(0x189)]()?this[_0x4084f3(0x233)]()[_0x4084f3(0x186)]:this[_0x4084f3(0x1c0)]()?this['enemy']()[_0x4084f3(0x186)]:'';if(_0xb9d933['match'](/<PROVOKE HEIGHT ORIGIN: (\d+)([%％])>/i)){if(_0x4084f3(0x213)==='CNMSc')this[_0x4084f3(0x18e)](this[_0x4084f3(0x283)]);else return Number(RegExp['$1'])*0.01;}return VisuMZ['AggroControlSystem']['Settings'][_0x4084f3(0x201)][_0x4084f3(0x160)];},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x295)]=function(){const _0x13c686=_0x3a9adf;for(const _0x4f182a of this[_0x13c686(0x248)]()){if(DataManager[_0x13c686(0x1c8)](_0x4f182a)){if(_0x13c686(0x2e7)!=='RWeHU')_0x18da5a[_0x13c686(0x2bc)][_0x13c686(0x1e2)][_0x13c686(0x1fa)](this,_0x25e27e),this['applyItemUserEffectAggroControl'](_0x3defaa);else{if(this[_0x13c686(0x228)]===undefined)this[_0x13c686(0x2ed)]();const _0x1ba2ba=this[_0x13c686(0x228)][_0x4f182a['id']],_0x1a2b51=BattleManager[_0x13c686(0x1b0)](_0x1ba2ba);_0x1a2b51&&_0x1a2b51[_0x13c686(0x196)]()&&this['removeState'](_0x4f182a['id']);}}}},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x1c7)]=function(_0x173a6d){const _0x50444e=_0x3a9adf;switch(_0x173a6d){case Game_Action['HITTYPE_PHYSICAL']:return this[_0x50444e(0x29b)]();break;case Game_Action[_0x50444e(0x28b)]:return this[_0x50444e(0x296)]();break;case Game_Action[_0x50444e(0x221)]:return this[_0x50444e(0x1a9)]();break;}},Game_BattlerBase['prototype'][_0x3a9adf(0x2af)]=function(){const _0x1523c4=_0x3a9adf;return this[_0x1523c4(0x29b)]()||this[_0x1523c4(0x296)]()||this[_0x1523c4(0x1a9)]();},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x29b)]=function(){const _0x218546=_0x3a9adf;return this[_0x218546(0x2f9)]()['some'](_0x4877be=>_0x4877be&&_0x4877be['note'][_0x218546(0x25e)](/<(?:TAUNT|PHYSICAL TAUNT|ALL TAUNT)>/i));},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x296)]=function(){const _0x4c8847=_0x3a9adf;return this[_0x4c8847(0x2f9)]()['some'](_0x301093=>_0x301093&&_0x301093[_0x4c8847(0x186)][_0x4c8847(0x25e)](/<(?:TAUNT|MAGICAL TAUNT|ALL TAUNT)>/i));},Game_BattlerBase['prototype']['certainHitTaunt']=function(){const _0x4f7129=_0x3a9adf;return this[_0x4f7129(0x2f9)]()['some'](_0x5dbc85=>_0x5dbc85&&_0x5dbc85[_0x4f7129(0x186)]['match'](/<(?:TAUNT|CERTAIN TAUNT|CERTAIN HIT TAUNT|ALL TAUNT)>/i));},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x2a9)]=function(){const _0x4b16b8=_0x3a9adf;return this[_0x4b16b8(0x2f9)]()[_0x4b16b8(0x16a)](_0x31286f=>_0x31286f&&_0x31286f[_0x4b16b8(0x186)]['match'](/<BYPASS TAUNT>/i));},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x147)]=function(){const _0x3f97fe=_0x3a9adf;this[_0x3f97fe(0x1b2)]=0x1;},VisuMZ[_0x3a9adf(0x2bc)]['Game_BattlerBase_sparam']=Game_BattlerBase[_0x3a9adf(0x1ae)]['sparam'],Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x2be)]=function(_0x5c68b4){const _0x4c379a=_0x3a9adf;let _0x55ab98=VisuMZ[_0x4c379a(0x2bc)][_0x4c379a(0x1a3)]['call'](this,_0x5c68b4);if(_0x5c68b4===0x0){if(this[_0x4c379a(0x1b2)]===undefined)this[_0x4c379a(0x147)]();_0x55ab98*=this[_0x4c379a(0x1e9)]();}return _0x55ab98;},Game_BattlerBase['prototype'][_0x3a9adf(0x212)]=function(_0x3f885f){const _0x39617d=_0x3a9adf;if(this[_0x39617d(0x1b2)]===undefined)this[_0x39617d(0x147)]();this[_0x39617d(0x1b2)]=Math['max'](0x1,Math[_0x39617d(0x2b2)](this[_0x39617d(0x1b2)]));},Game_BattlerBase[_0x3a9adf(0x1ae)]['gainAggro']=function(_0x2439ad){const _0x1bb185=_0x3a9adf;if(this[_0x1bb185(0x1b2)]===undefined)this[_0x1bb185(0x147)]();this['_aggro']=Math[_0x1bb185(0x294)](0x1,this[_0x1bb185(0x1b2)]+Math[_0x1bb185(0x2b2)](_0x2439ad));},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x231)]=function(_0x38c759){const _0x137fa4=_0x3a9adf;this[_0x137fa4(0x169)](-_0x38c759);},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x1e9)]=function(){const _0x3e2e50=_0x3a9adf;if(this[_0x3e2e50(0x196)]())return 0x0;return this[_0x3e2e50(0x1b8)]()*this[_0x3e2e50(0x187)]();},Game_BattlerBase[_0x3a9adf(0x1ae)]['battleAggro']=function(){const _0xecc1c7=_0x3a9adf;return this[_0xecc1c7(0x1b2)]===undefined&&this[_0xecc1c7(0x147)](),this[_0xecc1c7(0x1b2)];},Game_BattlerBase['prototype'][_0x3a9adf(0x1b8)]=function(){const _0x37c8be=_0x3a9adf;return this['traitObjects']()[_0x37c8be(0x26c)]((_0x36f5b9,_0x595a4b)=>{const _0x3f049d=_0x37c8be;if(_0x3f049d(0x1e6)!==_0x3f049d(0x2f3)){if(_0x595a4b&&_0x595a4b[_0x3f049d(0x186)][_0x3f049d(0x25e)](/<(?:AGGRO|ENMITY|THREAT): ([\+\-]\d+)>/i)){if('IaDvm'===_0x3f049d(0x188)){if(this['_aggro']===_0x1df422)this[_0x3f049d(0x147)]();this['_aggro']=_0x1275c9[_0x3f049d(0x294)](0x1,_0x1c9a52['round'](this[_0x3f049d(0x1b2)]));}else return _0x36f5b9+Number(RegExp['$1'])/0x64;}else return _0x36f5b9;}else{const _0x48b133=_0xb820bd(_0x563f1b['$1']);_0x48b133!==_0x2182ca[_0x263e00]['version']&&(_0x13fbe5(_0x3f049d(0x1c3)[_0x3f049d(0x194)](_0x3f6237,_0x48b133)),_0x8b5e55[_0x3f049d(0x24c)]());}},this[_0x37c8be(0x1bf)]());},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x187)]=function(){const _0x3d29cd=_0x3a9adf;return this[_0x3d29cd(0x2f9)]()[_0x3d29cd(0x26c)]((_0x469807,_0xf702a5)=>{const _0x40b9eb=_0x3d29cd;if(_0x40b9eb(0x150)!==_0x40b9eb(0x150))_0x46d6df=_0x2d4d86[_0x40b9eb(0x294)](_0x17e79b,_0x5e968d);else return _0xf702a5&&_0xf702a5[_0x40b9eb(0x186)][_0x40b9eb(0x25e)](/<(?:AGGRO|ENMITY|THREAT) MULTIPLIER: (\d+)%>/i)?_0x40b9eb(0x22a)!==_0x40b9eb(0x22a)?this['isAggroType']()?_0x2fa9b0[_0x40b9eb(0x1bb)]():_0x10ddfb[_0x40b9eb(0x2bc)][_0x40b9eb(0x24d)][_0x40b9eb(0x1fa)](this):_0x469807+Number(RegExp['$1'])/0x64:_0x40b9eb(0x1ee)!=='xFfnb'?_0x469807:!!this[_0x40b9eb(0x26a)]();},0x1);},Game_BattlerBase['prototype'][_0x3a9adf(0x1db)]=function(){const _0x4e99dc=_0x3a9adf;return this[_0x4e99dc(0x2f9)]()['some'](_0x2423e3=>_0x2423e3&&_0x2423e3[_0x4e99dc(0x186)][_0x4e99dc(0x25e)](/<BYPASS HIGHEST (?:AGGRO|ENMITY|THREAT)>/i));},Game_BattlerBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x1f7)]=function(){const _0x2dfb47=_0x3a9adf;return this['traitObjects']()[_0x2dfb47(0x16a)](_0x204f18=>_0x204f18&&_0x204f18[_0x2dfb47(0x186)]['match'](/<TARGET HIGHEST (?:AGGRO|ENMITY|THREAT)>/i));},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x21e)]=Game_Battler[_0x3a9adf(0x1ae)]['onBattleStart'],Game_Battler[_0x3a9adf(0x1ae)][_0x3a9adf(0x2de)]=function(_0x13f51f){const _0x35d131=_0x3a9adf;VisuMZ[_0x35d131(0x2bc)]['Game_Battler_onBattleStart'][_0x35d131(0x1fa)](this,_0x13f51f),this['clearAggro']();},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x14f)]=Game_Battler[_0x3a9adf(0x1ae)]['onBattleEnd'],Game_Battler[_0x3a9adf(0x1ae)]['onBattleEnd']=function(){const _0xd6a2ec=_0x3a9adf;VisuMZ[_0xd6a2ec(0x2bc)][_0xd6a2ec(0x14f)][_0xd6a2ec(0x1fa)](this),this[_0xd6a2ec(0x147)]();},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x2b9)]=Game_Battler[_0x3a9adf(0x1ae)][_0x3a9adf(0x1c5)],Game_Battler[_0x3a9adf(0x1ae)][_0x3a9adf(0x1c5)]=function(_0x4beadf){const _0x4fb683=_0x3a9adf;VisuMZ[_0x4fb683(0x2bc)][_0x4fb683(0x2b9)][_0x4fb683(0x1fa)](this,_0x4beadf),this[_0x4fb683(0x18b)](_0x4beadf);},Game_Battler[_0x3a9adf(0x1ae)][_0x3a9adf(0x18b)]=function(_0xe11740){const _0x5ddae2=_0x3a9adf;if(this[_0x5ddae2(0x158)](_0xe11740)){if(_0x5ddae2(0x28f)!==_0x5ddae2(0x28f))this[_0x5ddae2(0x222)]=0x0;else{if(this[_0x5ddae2(0x228)]===undefined)this[_0x5ddae2(0x2ed)]();const _0x541e50=BattleManager[_0x5ddae2(0x249)](this);this[_0x5ddae2(0x228)][_0xe11740]=_0x541e50,!this['_provoker'][_0xe11740]&&delete this[_0x5ddae2(0x228)][_0xe11740];}}},VisuMZ[_0x3a9adf(0x2bc)]['BattleManager_invokeCounterAttack']=BattleManager[_0x3a9adf(0x162)],BattleManager[_0x3a9adf(0x162)]=function(_0x1c1211,_0xc1e249){const _0xdc60f7=_0x3a9adf;this[_0xdc60f7(0x217)]=_0xc1e249,VisuMZ[_0xdc60f7(0x2bc)][_0xdc60f7(0x192)][_0xdc60f7(0x1fa)](this,_0x1c1211,_0xc1e249),this['_counterAttackingTarget']=undefined;},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x257)]=BattleManager[_0x3a9adf(0x151)],BattleManager[_0x3a9adf(0x151)]=function(_0x17e728,_0x4bbb25){const _0x580fe1=_0x3a9adf;this[_0x580fe1(0x217)]=_0x4bbb25,VisuMZ['AggroControlSystem'][_0x580fe1(0x257)]['call'](this,_0x17e728,_0x4bbb25),this[_0x580fe1(0x217)]=undefined;},VisuMZ['AggroControlSystem'][_0x3a9adf(0x167)]=Game_Unit[_0x3a9adf(0x1ae)][_0x3a9adf(0x2de)],Game_Unit[_0x3a9adf(0x1ae)][_0x3a9adf(0x2de)]=function(_0x58c265){const _0x351e83=_0x3a9adf;this[_0x351e83(0x164)](),VisuMZ['AggroControlSystem'][_0x351e83(0x167)][_0x351e83(0x1fa)](this,_0x58c265);},Game_Unit[_0x3a9adf(0x1ae)]['physicalTauntMembers']=function(){const _0x160425=_0x3a9adf;return this[_0x160425(0x2bd)]()[_0x160425(0x202)](_0x9ae83c=>_0x9ae83c&&_0x9ae83c[_0x160425(0x29b)]());},Game_Unit[_0x3a9adf(0x1ae)][_0x3a9adf(0x237)]=function(){const _0x343b8b=_0x3a9adf;return this[_0x343b8b(0x2bd)]()[_0x343b8b(0x202)](_0xb342ef=>_0xb342ef&&_0xb342ef[_0x343b8b(0x296)]());},Game_Unit[_0x3a9adf(0x1ae)]['certainHitTauntMembers']=function(){const _0x9968ca=_0x3a9adf;return this[_0x9968ca(0x2bd)]()[_0x9968ca(0x202)](_0x37e524=>_0x37e524&&_0x37e524[_0x9968ca(0x1a9)]());},Game_Unit[_0x3a9adf(0x1ae)][_0x3a9adf(0x140)]=function(_0x36ad82){const _0x24d854=_0x3a9adf;switch(_0x36ad82){case Game_Action[_0x24d854(0x1f4)]:return this[_0x24d854(0x2e2)]();break;case Game_Action[_0x24d854(0x28b)]:return this[_0x24d854(0x237)]();break;case Game_Action[_0x24d854(0x221)]:return this['certainHitTauntMembers']();break;}return[];},Game_Unit[_0x3a9adf(0x1ae)][_0x3a9adf(0x28c)]=function(_0x12d26d){const _0x42a384=_0x3a9adf;let _0x44c4ee=[];switch(_0x12d26d){case Game_Action[_0x42a384(0x1f4)]:_0x44c4ee=this['physicalTauntMembers']();break;case Game_Action[_0x42a384(0x28b)]:_0x44c4ee=this[_0x42a384(0x237)]();break;case Game_Action[_0x42a384(0x221)]:_0x44c4ee=this[_0x42a384(0x2e5)]();break;}let _0x1e89bc=Math[_0x42a384(0x266)]()*this[_0x42a384(0x22f)](_0x44c4ee),_0x2d9a90=null;if(BattleManager[_0x42a384(0x278)]()){if('OnJAb'!==_0x42a384(0x21d)){const _0x1c22a5=!![];return this[_0x42a384(0x2a0)](_0x44c4ee,_0x1c22a5);}else{const _0x5ccad8=_0x2b5d3b['provokeOrigin'],_0x5d42c6=_0x42a384(0x25b);this[_0x42a384(0x28a)](_0x5ccad8,_0x5d42c6);}}else{for(const _0x41c6f2 of _0x44c4ee){if(_0x42a384(0x1d9)===_0x42a384(0x1d9))_0x1e89bc-=_0x41c6f2['tgr'],_0x1e89bc<=0x0&&!_0x2d9a90&&('mkHVI'===_0x42a384(0x2d5)?_0x2d9a90=_0x41c6f2:(_0x1236f6[_0x42a384(0x29f)]&&this[_0x42a384(0x269)](),_0x19fed7[_0x42a384(0x1ae)][_0x42a384(0x1a7)][_0x42a384(0x1fa)](this)));else return this['currentValueAggroControl']();}return _0x2d9a90||this[_0x42a384(0x2d1)]();}},Game_Unit['prototype'][_0x3a9adf(0x22f)]=function(_0x4de328){const _0x3b2597=_0x3a9adf;return _0x4de328[_0x3b2597(0x26c)]((_0x12bc44,_0x1b032a)=>_0x12bc44+_0x1b032a[_0x3b2597(0x271)],0x0);},Game_Unit[_0x3a9adf(0x1ae)][_0x3a9adf(0x195)]=function(){const _0x593199=_0x3a9adf,_0x381454=this[_0x593199(0x2bd)]()[_0x593199(0x273)](_0x36f50c=>_0x36f50c[_0x593199(0x271)]);return Math[_0x593199(0x294)](..._0x381454);},Game_Unit[_0x3a9adf(0x1ae)][_0x3a9adf(0x1a2)]=function(){const _0x487e31=_0x3a9adf,_0xcf12e8=this['aliveMembers']()[_0x487e31(0x273)](_0x53976c=>_0x53976c[_0x487e31(0x271)]);return Math['min'](..._0xcf12e8);},Game_Unit['prototype'][_0x3a9adf(0x164)]=function(){const _0x15f991=_0x3a9adf;this['_highestTgrMember']=undefined,this[_0x15f991(0x224)]=undefined;},Game_Unit[_0x3a9adf(0x1ae)][_0x3a9adf(0x1e1)]=function(){const _0x4c0ea3=_0x3a9adf;if(!this[_0x4c0ea3(0x24a)]){if(_0x4c0ea3(0x14d)===_0x4c0ea3(0x14d)){const _0x4b9d10=this[_0x4c0ea3(0x195)](),_0x39a67=this[_0x4c0ea3(0x2bd)]()[_0x4c0ea3(0x202)](_0x4a1094=>_0x4a1094[_0x4c0ea3(0x271)]===_0x4b9d10);this[_0x4c0ea3(0x24a)]=_0x39a67[Math[_0x4c0ea3(0x288)](_0x39a67[_0x4c0ea3(0x2c0)])]||this[_0x4c0ea3(0x2d1)]();}else{const _0x5ed350=this[_0x4c0ea3(0x2d3)][_0x4c0ea3(0x1dc)](this[_0x4c0ea3(0x153)]);this[_0x4c0ea3(0x1de)](this[_0x4c0ea3(0x283)],_0x5ed350);}}return this[_0x4c0ea3(0x24a)];},Game_Unit[_0x3a9adf(0x1ae)][_0x3a9adf(0x17e)]=function(){const _0x1bb7a5=_0x3a9adf;if(!this[_0x1bb7a5(0x224)]){const _0x574620=this['tgrMin'](),_0x505028=this[_0x1bb7a5(0x2bd)]()[_0x1bb7a5(0x202)](_0x1ee4ea=>_0x1ee4ea[_0x1bb7a5(0x271)]===_0x574620);this[_0x1bb7a5(0x224)]=_0x505028[Math[_0x1bb7a5(0x288)](_0x505028[_0x1bb7a5(0x2c0)])]||this[_0x1bb7a5(0x2d1)]();}return this[_0x1bb7a5(0x224)];},VisuMZ[_0x3a9adf(0x2bc)]['BattleManager_endAction']=BattleManager[_0x3a9adf(0x239)],BattleManager[_0x3a9adf(0x239)]=function(){const _0x3fa43c=_0x3a9adf;VisuMZ[_0x3fa43c(0x2bc)][_0x3fa43c(0x2ab)]['call'](this),$gameParty['clearTgrCache'](),$gameTroop[_0x3fa43c(0x164)]();},VisuMZ['AggroControlSystem'][_0x3a9adf(0x234)]=BattleManager[_0x3a9adf(0x1c4)],BattleManager['endBattle']=function(_0x2713e2){const _0x3e100c=_0x3a9adf;VisuMZ[_0x3e100c(0x2bc)][_0x3e100c(0x234)][_0x3e100c(0x1fa)](this,_0x2713e2),$gameParty[_0x3e100c(0x164)](),$gameTroop[_0x3e100c(0x164)]();},Game_Unit['prototype'][_0x3a9adf(0x2a0)]=function(_0x60b887,_0x129b46){const _0x3a5176=_0x3a9adf,_0x2744a7=_0x60b887['map'](_0x5ca3ed=>_0x5ca3ed[_0x3a5176(0x271)]),_0x469a0d=_0x129b46?Math['max'](..._0x2744a7):Math['min'](..._0x2744a7),_0x1b1268=_0x60b887[_0x3a5176(0x202)](_0x696aec=>_0x696aec[_0x3a5176(0x271)]===_0x469a0d);return _0x1b1268[Math['randomInt'](_0x1b1268[_0x3a5176(0x2c0)])]||this[_0x3a5176(0x2d1)]();},VisuMZ[_0x3a9adf(0x2bc)]['Scene_Options_maxCommands']=Scene_Options[_0x3a9adf(0x1ae)][_0x3a9adf(0x2a6)],Scene_Options[_0x3a9adf(0x1ae)][_0x3a9adf(0x2a6)]=function(){const _0x2ebf37=_0x3a9adf;let _0x3b0c83=VisuMZ[_0x2ebf37(0x2bc)][_0x2ebf37(0x18d)][_0x2ebf37(0x1fa)](this);const _0x5bc0ce=VisuMZ[_0x2ebf37(0x2bc)]['Settings'];if(_0x5bc0ce[_0x2ebf37(0x201)]['AddOption']&&_0x5bc0ce[_0x2ebf37(0x201)]['AdjustOptionsRect'])_0x3b0c83++;if(_0x5bc0ce[_0x2ebf37(0x279)][_0x2ebf37(0x1b4)]&&_0x5bc0ce[_0x2ebf37(0x279)][_0x2ebf37(0x204)])_0x3b0c83++;return _0x3b0c83;},Sprite_Battler[_0x3a9adf(0x29e)]=VisuMZ['AggroControlSystem'][_0x3a9adf(0x15b)][_0x3a9adf(0x22d)][_0x3a9adf(0x247)],Sprite_Battler[_0x3a9adf(0x274)]=VisuMZ['AggroControlSystem']['Settings'][_0x3a9adf(0x22d)][_0x3a9adf(0x190)],Sprite_Battler[_0x3a9adf(0x2ff)]=VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x15b)][_0x3a9adf(0x22d)][_0x3a9adf(0x170)],Sprite_Battler['_certainHitTauntAnimation']=VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x15b)][_0x3a9adf(0x22d)][_0x3a9adf(0x1d3)],Sprite_Battler[_0x3a9adf(0x20f)]=VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x15b)][_0x3a9adf(0x22d)]['MirrorActorAni'],Sprite_Battler['_muteTauntAnimations']=VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x15b)][_0x3a9adf(0x22d)][_0x3a9adf(0x18c)],VisuMZ[_0x3a9adf(0x2bc)]['Sprite_Battler_initialize']=Sprite_Battler['prototype']['initialize'],Sprite_Battler[_0x3a9adf(0x1ae)][_0x3a9adf(0x163)]=function(_0x168b8b){const _0x4f4752=_0x3a9adf;VisuMZ[_0x4f4752(0x2bc)][_0x4f4752(0x154)]['call'](this,_0x168b8b),this[_0x4f4752(0x245)]()&&(_0x4f4752(0x256)!==_0x4f4752(0x256)?(_0x50149d['VisuMZ_1_BattleCore']&&this[_0x4f4752(0x269)](),_0x5c1b2e[_0x4f4752(0x1ae)][_0x4f4752(0x1a7)]['call'](this)):setTimeout(this['createProvokeSprite'][_0x4f4752(0x1d4)](this),0x3e8));},VisuMZ[_0x3a9adf(0x2bc)]['Sprite_Battler_initMembers']=Sprite_Battler[_0x3a9adf(0x1ae)][_0x3a9adf(0x1f5)],Sprite_Battler[_0x3a9adf(0x1ae)][_0x3a9adf(0x1f5)]=function(){const _0x48a882=_0x3a9adf;VisuMZ['AggroControlSystem']['Sprite_Battler_initMembers']['call'](this),this[_0x48a882(0x21a)]();},Sprite_Battler[_0x3a9adf(0x1ae)][_0x3a9adf(0x21a)]=function(){const _0x27a789=_0x3a9adf;this[_0x27a789(0x193)]=VisuMZ[_0x27a789(0x2bc)]['Settings'][_0x27a789(0x22d)][_0x27a789(0x247)],this[_0x27a789(0x26f)]=[_0x27a789(0x2f0),_0x27a789(0x289),'certainHit'];},Sprite_Battler[_0x3a9adf(0x1ae)]['isShowPriorityLines']=function(){const _0x2555b5=_0x3a9adf;if(!Imported[_0x2555b5(0x29f)])return![];if(![Sprite_Actor,Sprite_Enemy]['includes'](this['constructor']))return![];return ConfigManager[_0x2555b5(0x25b)]&&VisuMZ[_0x2555b5(0x2bc)][_0x2555b5(0x15b)][_0x2555b5(0x201)][_0x2555b5(0x2cf)];},Sprite_Battler[_0x3a9adf(0x1ae)]['createProvokeSprite']=function(){const _0x522065=_0x3a9adf;if(!SceneManager['isSceneBattle']())return;this[_0x522065(0x2c3)]=new Sprite_ProvokeTrail(this),this['_provokeSprite'][_0x522065(0x2d2)]()[_0x522065(0x18e)](this[_0x522065(0x2c3)]);},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x1f1)]=Sprite_Battler[_0x3a9adf(0x1ae)][_0x3a9adf(0x1e4)],Sprite_Battler[_0x3a9adf(0x1ae)]['setBattler']=function(_0x5d4fd9){const _0x127a6c=_0x3a9adf;VisuMZ['AggroControlSystem']['Sprite_Battler_setBattler'][_0x127a6c(0x1fa)](this,_0x5d4fd9);if(this[_0x127a6c(0x2b4)])this[_0x127a6c(0x2b4)][_0x127a6c(0x242)]=_0x5d4fd9;},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x19e)]=Sprite_Battler[_0x3a9adf(0x1ae)][_0x3a9adf(0x2a8)],Sprite_Battler['prototype'][_0x3a9adf(0x2a8)]=function(){const _0x1ad8ad=_0x3a9adf;VisuMZ[_0x1ad8ad(0x2bc)][_0x1ad8ad(0x19e)]['call'](this),this[_0x1ad8ad(0x1d6)]();},Sprite_Battler['prototype'][_0x3a9adf(0x1d6)]=function(){const _0x396bbb=_0x3a9adf;if(!Imported[_0x396bbb(0x2b6)])return;if(!Imported['VisuMZ_1_BattleCore'])return;if(!VisuMZ['AggroControlSystem'][_0x396bbb(0x15b)]['Taunt']['ShowAnimation'])return;if(!this[_0x396bbb(0x242)])return;this[_0x396bbb(0x193)]--,this['_tauntAnimationTimer']<=0x0&&(_0x396bbb(0x258)!==_0x396bbb(0x223)?this[_0x396bbb(0x272)]():(this[_0x396bbb(0x193)]=_0x332a3a[_0x396bbb(0x2bc)][_0x396bbb(0x15b)]['Taunt']['CycleTime'],this[_0x396bbb(0x26f)]=[_0x396bbb(0x2f0),'magical',_0x396bbb(0x238)]));},Sprite_Battler[_0x3a9adf(0x1ae)]['startNewTauntAnimation']=function(){const _0x37d464=_0x3a9adf;this['_tauntAnimationTimer']=Sprite_Battler['_animationCycleTime'];if(!this['_battler'])return;if(!this[_0x37d464(0x242)][_0x37d464(0x2af)]())return;const _0x5c6552=[this[_0x37d464(0x242)]],_0x359227=this['getNextTauntAnimation'](),_0x150c5f=this[_0x37d464(0x242)][_0x37d464(0x189)]()&&Sprite_Battler[_0x37d464(0x20f)],_0x184ded=Sprite_Battler[_0x37d464(0x1a4)];$gameTemp[_0x37d464(0x22b)](_0x5c6552,_0x359227,_0x150c5f,_0x184ded);},Sprite_Battler[_0x3a9adf(0x1ae)]['getNextTauntAnimation']=function(){const _0x3913f9=_0x3a9adf;let _0x38bdae=this[_0x3913f9(0x26f)][_0x3913f9(0x2c0)];while(_0x38bdae){if(_0x3913f9(0x2c7)===_0x3913f9(0x2c7)){const _0x4062dc=this[_0x3913f9(0x26f)][_0x3913f9(0x166)]();this[_0x3913f9(0x26f)]['push'](_0x4062dc);const _0x288ce0='%1Taunt'[_0x3913f9(0x194)](_0x4062dc);if(this[_0x3913f9(0x242)][_0x288ce0]()){if('JTSFW'===_0x3913f9(0x184)){const _0x267963='_%1TauntAnimation'[_0x3913f9(0x194)](_0x4062dc),_0x2b2370=Sprite_Battler[_0x267963];if(_0x2b2370)return _0x2b2370;}else{const _0x3609c5=_0x49d1f7[_0x3913f9(0x287)];this['subject']()[_0x3913f9(0x169)](_0x3609c5*_0x5305f7);}}_0x38bdae--;}else this[_0x3913f9(0x2a7)]();}return Sprite_Battler['_certainHitTauntAnimation'];},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x173)]=Sprite_Actor[_0x3a9adf(0x1ae)][_0x3a9adf(0x1cb)],Sprite_Actor[_0x3a9adf(0x1ae)][_0x3a9adf(0x1cb)]=function(){const _0x2b9177=_0x3a9adf;VisuMZ[_0x2b9177(0x2bc)][_0x2b9177(0x173)][_0x2b9177(0x1fa)](this),this[_0x2b9177(0x14c)]();},Sprite_Actor['prototype'][_0x3a9adf(0x14c)]=function(){const _0x3e7a61=_0x3a9adf;if(this[_0x3e7a61(0x1be)]!==Sprite_Actor)return;if(!this[_0x3e7a61(0x22c)]())return;if(!SceneManager['isSceneBattle']())return;const _0x356ec3=VisuMZ[_0x3e7a61(0x2bc)][_0x3e7a61(0x15b)]['Aggro'],_0xba0d0e=new Sprite_Gauge();_0xba0d0e[_0x3e7a61(0x216)]['x']=_0x356ec3[_0x3e7a61(0x1eb)],_0xba0d0e[_0x3e7a61(0x216)]['y']=_0x356ec3[_0x3e7a61(0x1fe)];const _0x3233e5=Sprite_Gauge[_0x3e7a61(0x1ae)]['bitmapWidth']();_0xba0d0e[_0x3e7a61(0x227)]['x']=_0xba0d0e[_0x3e7a61(0x227)]['y']=_0x356ec3[_0x3e7a61(0x2ec)],this[_0x3e7a61(0x2b4)]=_0xba0d0e,this[_0x3e7a61(0x18e)](_0xba0d0e);},Sprite_Actor[_0x3a9adf(0x1ae)][_0x3a9adf(0x22c)]=function(){const _0x3a76ad=_0x3a9adf;if(Imported[_0x3a76ad(0x29f)]&&this['constructor']===Sprite_SvEnemy)return![];return ConfigManager[_0x3a76ad(0x2b0)]&&VisuMZ['AggroControlSystem'][_0x3a76ad(0x15b)][_0x3a76ad(0x279)]['VisibleGauge'];},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x178)]=Sprite_Actor['prototype'][_0x3a9adf(0x2a8)],Sprite_Actor['prototype'][_0x3a9adf(0x2a8)]=function(){const _0x15a171=_0x3a9adf;VisuMZ['AggroControlSystem'][_0x15a171(0x178)][_0x15a171(0x1fa)](this),this[_0x15a171(0x165)]();},Sprite_Actor[_0x3a9adf(0x1ae)][_0x3a9adf(0x165)]=function(){const _0x2f290f=_0x3a9adf;if(!this[_0x2f290f(0x242)])return;if(!this[_0x2f290f(0x2b4)])return;const _0x4c73cd=VisuMZ[_0x2f290f(0x2bc)][_0x2f290f(0x15b)][_0x2f290f(0x279)],_0x376374=this[_0x2f290f(0x2b4)];let _0x1a7c0d=_0x4c73cd[_0x2f290f(0x1b9)];this[_0x2f290f(0x242)][_0x2f290f(0x15d)]&&('jGbhR'===_0x2f290f(0x1ba)?_0x33dbc3[_0x2f290f(0x227)]['x']=-_0x578c39[_0x2f290f(0x2f4)](_0x58b493['scale']['x']):_0x1a7c0d+=this['_battler'][_0x2f290f(0x15d)]());let _0x521de6=_0x4c73cd['OffsetY'];this[_0x2f290f(0x242)][_0x2f290f(0x270)]&&(_0x521de6+=this[_0x2f290f(0x242)]['battleUIOffsetY']());_0x376374['x']=_0x1a7c0d,_0x376374['y']=-this['height']+_0x521de6;this['_battler']&&_0x376374[_0x2f290f(0x19f)]!==_0x2f290f(0x1e9)&&(_0x376374[_0x2f290f(0x208)]=!![],_0x376374[_0x2f290f(0x250)](this[_0x2f290f(0x242)],_0x2f290f(0x1e9)));if(this[_0x2f290f(0x227)]['x']<0x0){if(_0x2f290f(0x2ba)===_0x2f290f(0x2df))return _0x18a7ae['AggroControlSystem'][_0x2f290f(0x1fc)][_0x2f290f(0x1fa)](this,_0x1c2e90);else _0x376374[_0x2f290f(0x227)]['x']=-Math[_0x2f290f(0x2f4)](_0x376374['scale']['x']);}},Sprite_Gauge[_0x3a9adf(0x1ae)][_0x3a9adf(0x2c4)]=function(){const _0xb3f7e0=_0x3a9adf;return this[_0xb3f7e0(0x242)]&&this[_0xb3f7e0(0x19f)]===_0xb3f7e0(0x1e9);},VisuMZ['AggroControlSystem'][_0x3a9adf(0x19c)]=Sprite_Gauge[_0x3a9adf(0x1ae)][_0x3a9adf(0x300)],Sprite_Gauge['prototype'][_0x3a9adf(0x300)]=function(){const _0x59310f=_0x3a9adf;return this[_0x59310f(0x2c4)]()?0x0:VisuMZ[_0x59310f(0x2bc)][_0x59310f(0x19c)][_0x59310f(0x1fa)](this);},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x179)]=Sprite_Gauge[_0x3a9adf(0x1ae)]['gaugeRate'],Sprite_Gauge['prototype']['gaugeRate']=function(){const _0x282032=_0x3a9adf;let _0x2f347a=VisuMZ[_0x282032(0x2bc)][_0x282032(0x179)][_0x282032(0x1fa)](this);if(this[_0x282032(0x2c4)]()&&this[_0x282032(0x242)]){if(this['_battler'][_0x282032(0x196)]())return 0x0;if(this[_0x282032(0x242)][_0x282032(0x1f6)]()&&this[_0x282032(0x242)]['friendsUnit']()[_0x282032(0x2bd)]()[_0x282032(0x2c0)]===0x1)return 0x1;}return _0x2f347a[_0x282032(0x2e1)](0x0,0x1);},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x1ca)]=Sprite_Gauge[_0x3a9adf(0x1ae)][_0x3a9adf(0x1bd)],Sprite_Gauge[_0x3a9adf(0x1ae)][_0x3a9adf(0x1bd)]=function(){const _0x1088c1=_0x3a9adf;if(this[_0x1088c1(0x2c4)]()){if(_0x1088c1(0x27c)!=='FzPmk')this[_0x1088c1(0x23e)][_0x4c94f5]=this[_0x1088c1(0x2ce)](_0x10a91d(_0x11555d));else return this[_0x1088c1(0x28d)]();}else{if(_0x1088c1(0x281)===_0x1088c1(0x211)){for(const _0x288783 of this[_0x1088c1(0x248)]()){if(_0x375825['stateHasProvoke'](_0x288783)){if(this['_provoker']===_0x247a3d)this[_0x1088c1(0x2ed)]();const _0x42d3b4=this[_0x1088c1(0x228)][_0x288783['id']],_0x4cb75d=_0x249dd4[_0x1088c1(0x1b0)](_0x42d3b4);if(_0x4cb75d&&_0x4cb75d[_0x1088c1(0x1f6)]())return _0x4cb75d;}}return null;}else return VisuMZ[_0x1088c1(0x2bc)][_0x1088c1(0x1ca)][_0x1088c1(0x1fa)](this);}},Sprite_Gauge['prototype'][_0x3a9adf(0x28d)]=function(){const _0x184b1e=_0x3a9adf,_0x1ff4a7=this[_0x184b1e(0x242)][_0x184b1e(0x268)](),_0x29c45f=this[_0x184b1e(0x242)][_0x184b1e(0x271)]-_0x1ff4a7[_0x184b1e(0x1a2)](),_0x46fbf1=_0x1ff4a7['tgrMax']()-_0x1ff4a7[_0x184b1e(0x1a2)]();if(_0x29c45f>=_0x46fbf1)return 0x64;return _0x29c45f/Math[_0x184b1e(0x294)](_0x46fbf1,0x1)*0x64;},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x246)]=Sprite_Gauge[_0x3a9adf(0x1ae)][_0x3a9adf(0x1a5)],Sprite_Gauge[_0x3a9adf(0x1ae)][_0x3a9adf(0x1a5)]=function(){const _0x117c6a=_0x3a9adf;return this[_0x117c6a(0x2c4)]()?'UItQm'===_0x117c6a(0x2bb)?this[_0x117c6a(0x1e8)]():_0x33c5dd['AggroControlSystem'][_0x117c6a(0x24d)][_0x117c6a(0x1fa)](this):VisuMZ[_0x117c6a(0x2bc)][_0x117c6a(0x246)][_0x117c6a(0x1fa)](this);},Sprite_Gauge[_0x3a9adf(0x1ae)][_0x3a9adf(0x1e8)]=function(){return 0x64;},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x2ee)]=Sprite_Gauge[_0x3a9adf(0x1ae)]['gaugeColor1'],Sprite_Gauge['prototype']['gaugeColor1']=function(){const _0x17d140=_0x3a9adf;if(this['isAggroType']()){if(_0x17d140(0x21c)==='TsSoC')return ColorManager['aggroGaugeColor1']();else this[_0x17d140(0x147)]();}else{if(_0x17d140(0x1e7)!==_0x17d140(0x1e7)){if(this[_0x17d140(0x277)]())this[_0x17d140(0x27b)](_0x138770[_0x17d140(0x2da)]());_0x56a6dd['AggroControlSystem']['Window_StatusBase_placeActorName'][_0x17d140(0x1fa)](this,_0x4ba33b,_0x145793,_0xa1b510);}else return VisuMZ[_0x17d140(0x2bc)][_0x17d140(0x2ee)][_0x17d140(0x1fa)](this);}},VisuMZ[_0x3a9adf(0x2bc)]['Sprite_Gauge_gaugeColor2']=Sprite_Gauge['prototype'][_0x3a9adf(0x232)],Sprite_Gauge[_0x3a9adf(0x1ae)][_0x3a9adf(0x232)]=function(){const _0x1119b3=_0x3a9adf;if(this[_0x1119b3(0x2c4)]()){if(_0x1119b3(0x15a)===_0x1119b3(0x2c5)){if(_0x57922d[_0x1119b3(0x2dc)]())_0x54990e[_0x1119b3(0x1b5)](_0x12925e);}else return ColorManager[_0x1119b3(0x1bb)]();}else return VisuMZ[_0x1119b3(0x2bc)][_0x1119b3(0x24d)][_0x1119b3(0x1fa)](this);},VisuMZ['AggroControlSystem'][_0x3a9adf(0x21f)]=Sprite_Gauge[_0x3a9adf(0x1ae)]['update'],Sprite_Gauge[_0x3a9adf(0x1ae)][_0x3a9adf(0x2a8)]=function(){const _0x2bb61d=_0x3a9adf;VisuMZ[_0x2bb61d(0x2bc)][_0x2bb61d(0x21f)][_0x2bb61d(0x1fa)](this),this['updateOpacityAggroControl']();},Sprite_Gauge[_0x3a9adf(0x1ae)]['updateOpacityAggroControl']=function(){const _0x2dc79b=_0x3a9adf;if(!this['isAggroType']())return;if(!Imported[_0x2dc79b(0x29f)])return;const _0x21711a=this[_0x2dc79b(0x242)][_0x2dc79b(0x2bf)]();if(this[_0x2dc79b(0x1a8)])this[_0x2dc79b(0x222)]=0xff;else _0x21711a&&_0x21711a[_0x2dc79b(0x222)]>0x0?_0x2dc79b(0x16c)==='HzOKF'?this[_0x2dc79b(0x222)]=0xff:this[_0x2dc79b(0x222)]=0xff:this[_0x2dc79b(0x222)]=0x0;},VisuMZ['AggroControlSystem'][_0x3a9adf(0x1ec)]=Sprite_Gauge['prototype'][_0x3a9adf(0x1f3)],Sprite_Gauge[_0x3a9adf(0x1ae)][_0x3a9adf(0x1f3)]=function(){const _0x293de8=_0x3a9adf;if(this[_0x293de8(0x2c4)]())return;VisuMZ[_0x293de8(0x2bc)]['Sprite_Gauge_drawValue'][_0x293de8(0x1fa)](this);};function Sprite_ProvokeTrail(){const _0x31c711=_0x3a9adf;this[_0x31c711(0x163)](...arguments);}Sprite_ProvokeTrail['prototype']=Object[_0x3a9adf(0x229)](Sprite[_0x3a9adf(0x1ae)]),Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x1be)]=Sprite_ProvokeTrail,Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x163)]=function(_0x391d87){const _0x5eca63=_0x3a9adf;this['_mainSprite']=_0x391d87,Sprite['prototype'][_0x5eca63(0x163)][_0x5eca63(0x1fa)](this),this[_0x5eca63(0x1f5)](),this['createChildSprites']();},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x1f5)]=function(){const _0x367193=_0x3a9adf,_0xaf8c96=VisuMZ[_0x367193(0x2bc)][_0x367193(0x15b)]['Provoke'];this[_0x367193(0x216)]['x']=0.5,this[_0x367193(0x216)]['y']=0.5,this['_homeX']=0x0,this[_0x367193(0x183)]=0x0,this[_0x367193(0x18a)]=0x0,this[_0x367193(0x20b)]=0x0,this[_0x367193(0x222)]=0x0,this['_opacitySpeed']=_0xaf8c96[_0x367193(0x1c2)],this[_0x367193(0x206)]=_0xaf8c96[_0x367193(0x1f8)];},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x236)]=function(){const _0x10bba2=_0x3a9adf;return VisuMZ['AggroControlSystem'][_0x10bba2(0x15b)][_0x10bba2(0x201)][_0x10bba2(0x2fd)];},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x145)]=function(){const _0x387b03=_0x3a9adf;return VisuMZ[_0x387b03(0x2bc)][_0x387b03(0x15b)][_0x387b03(0x201)]['PartsSize']/0x64;},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)]['createChildSprites']=function(){const _0x1a2f2a=_0x3a9adf;this[_0x1a2f2a(0x176)]=[];let _0x480552=0x0;for(let _0x4aa780=0x0;_0x4aa780<=this[_0x1a2f2a(0x236)]();_0x4aa780++){if(_0x1a2f2a(0x293)===_0x1a2f2a(0x293)){const _0x14b6e6=new Sprite();_0x14b6e6['bitmap']=ImageManager[_0x1a2f2a(0x157)](),_0x14b6e6[_0x1a2f2a(0x216)]['x']=0.5,_0x14b6e6[_0x1a2f2a(0x216)]['y']=0.5,_0x14b6e6[_0x1a2f2a(0x227)]['x']=_0x14b6e6[_0x1a2f2a(0x227)]['y']=this['partsSize'](),_0x14b6e6[_0x1a2f2a(0x222)]=_0x480552,_0x14b6e6[_0x1a2f2a(0x206)]=this['blendMode'],this['addChild'](_0x14b6e6),this[_0x1a2f2a(0x176)]['push'](_0x14b6e6),_0x480552+=this[_0x1a2f2a(0x15e)];if(_0x480552>=0xff)_0x480552=0x0;}else return this[_0x1a2f2a(0x2f9)]()['some'](_0x427dd6=>_0x427dd6&&_0x427dd6[_0x1a2f2a(0x186)]['match'](/<TARGET HIGHEST (?:AGGRO|ENMITY|THREAT)>/i));}},Sprite_ProvokeTrail['prototype'][_0x3a9adf(0x199)]=function(){const _0x407f03=_0x3a9adf;return this[_0x407f03(0x2ac)][_0x407f03(0x1be)]===Sprite_Actor;},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x2d2)]=function(){const _0x115390=_0x3a9adf;return SceneManager[_0x115390(0x2eb)][_0x115390(0x1dd)][_0x115390(0x283)];},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)]['update']=function(){const _0x39ef87=_0x3a9adf;Sprite[_0x39ef87(0x1ae)]['update'][_0x39ef87(0x1fa)](this),this[_0x39ef87(0x174)](),this[_0x39ef87(0x2e8)](),this[_0x39ef87(0x27a)](),this[_0x39ef87(0x25f)]();},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x25d)]=function(){const _0x58bef3=_0x3a9adf;return VisuMZ[_0x58bef3(0x2bc)][_0x58bef3(0x15b)]['Provoke']['HeightOrigin'];},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x174)]=function(){const _0x1a6079=_0x3a9adf;if(!this[_0x1a6079(0x2ac)]['_battler'])return;if(!this['_mainSprite'][_0x1a6079(0x242)]['provoker']())return;const _0x546061=this['_mainSprite'][_0x1a6079(0x242)][_0x1a6079(0x26a)]()['battler']();if(!_0x546061)return;const _0x238d6d=this[_0x1a6079(0x2ac)][_0x1a6079(0x242)][_0x1a6079(0x1ce)](),_0x40a2f8=this[_0x1a6079(0x2ac)]['_battler'][_0x1a6079(0x26a)]()[_0x1a6079(0x1ce)]();this[_0x1a6079(0x1da)]=this[_0x1a6079(0x2ac)]['x'],this['_homeY']=this['_mainSprite']['y']-this[_0x1a6079(0x2ac)][_0x1a6079(0x292)]*_0x238d6d,this[_0x1a6079(0x18a)]=_0x546061['x'],this['_targetY']=_0x546061['y']-_0x546061['height']*_0x40a2f8,this[_0x1a6079(0x1da)]+=Math['round']((Graphics[_0x1a6079(0x16b)]-Graphics[_0x1a6079(0x2a3)])/0x2),this[_0x1a6079(0x183)]+=Math[_0x1a6079(0x2b2)]((Graphics[_0x1a6079(0x292)]-Graphics['boxHeight'])/0x2),this[_0x1a6079(0x18a)]+=Math[_0x1a6079(0x2b2)]((Graphics['width']-Graphics[_0x1a6079(0x2a3)])/0x2),this[_0x1a6079(0x20b)]+=Math[_0x1a6079(0x2b2)]((Graphics[_0x1a6079(0x292)]-Graphics[_0x1a6079(0x156)])/0x2);if(!$gameSystem[_0x1a6079(0x27e)]()){if('ntWAu'===_0x1a6079(0x2b7)){if(_0x546061[_0x1a6079(0x242)][_0x1a6079(0x189)]())visible=!![],this[_0x1a6079(0x18a)]+=SceneManager[_0x1a6079(0x2eb)][_0x1a6079(0x261)]['x'],this[_0x1a6079(0x20b)]+=SceneManager[_0x1a6079(0x2eb)]['_statusWindow']['y'];else _0x546061['_battler']['isEnemy']()&&(visible=!![],this['_homeX']+=SceneManager[_0x1a6079(0x2eb)][_0x1a6079(0x261)]['x'],this[_0x1a6079(0x183)]+=SceneManager[_0x1a6079(0x2eb)][_0x1a6079(0x261)]['y']);}else{const _0xad3b11='provoke-line-color';this[_0x1a6079(0x23e)]=this['_colorCache']||{};if(this[_0x1a6079(0x23e)][_0xad3b11])return this[_0x1a6079(0x23e)][_0xad3b11];const _0x4c5a60=_0x59131b['AggroControlSystem']['Settings'][_0x1a6079(0x201)][_0x1a6079(0x168)];return this['getColorDataFromPluginParameters'](_0xad3b11,_0x4c5a60);}}},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x1b6)]=function(){const _0x2e0872=_0x3a9adf;return VisuMZ[_0x2e0872(0x2bc)][_0x2e0872(0x15b)]['Provoke'][_0x2e0872(0x17a)];},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x2e8)]=function(){const _0x393d5a=_0x3a9adf;if(!this[_0x393d5a(0x2ac)][_0x393d5a(0x242)])return;if(!this[_0x393d5a(0x2ac)]['_battler']['provoker']())return;if(!this[_0x393d5a(0x176)])return;if(this[_0x393d5a(0x176)][_0x393d5a(0x2c0)]<=0x0)return;const _0xa3454a=(this['_targetX']-this[_0x393d5a(0x1da)])/this[_0x393d5a(0x236)](),_0x213730=(this[_0x393d5a(0x20b)]-this['_homeY'])/this[_0x393d5a(0x236)]();for(let _0x5db387=0x0;_0x5db387<=this[_0x393d5a(0x236)]();_0x5db387++){const _0x5a816f=this[_0x393d5a(0x176)][_0x5db387];if(!_0x5a816f)continue;_0x5a816f['x']=this[_0x393d5a(0x1da)]+_0xa3454a*_0x5db387;const _0x33f7f8=this['maxSprites']()-_0x5db387,_0x1c79c8=this[_0x393d5a(0x236)]()/0x2,_0x158181=this[_0x393d5a(0x1b6)](),_0x5f3ec2=-_0x158181/Math['pow'](_0x1c79c8,0x2),_0x15324c=_0x5f3ec2*Math['pow'](_0x33f7f8-_0x1c79c8,0x2)+_0x158181;_0x5a816f['y']=this[_0x393d5a(0x183)]+_0x213730*_0x5db387-_0x15324c;}},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x2b3)]=function(){const _0x38f6cb=_0x3a9adf;return VisuMZ[_0x38f6cb(0x2bc)][_0x38f6cb(0x15b)][_0x38f6cb(0x201)][_0x38f6cb(0x230)];},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)][_0x3a9adf(0x27a)]=function(){const _0x9e8590=_0x3a9adf,_0x2e7093=this[_0x9e8590(0x2ac)]['_battler'];if(!_0x2e7093)this[_0x9e8590(0x222)]=0x0;else _0x2e7093['isAlive']()&&_0x2e7093[_0x9e8590(0x26a)]()?this[_0x9e8590(0x222)]=0xff:this[_0x9e8590(0x222)]=0x0;},Sprite_ProvokeTrail[_0x3a9adf(0x1ae)]['updateChildrenOpacity']=function(){const _0x583efb=_0x3a9adf;if(!this[_0x583efb(0x2ac)][_0x583efb(0x242)])return;if(!this['_mainSprite']['_battler']['provoker']())return;if(!this['_sprites'])return;if(this['_sprites'][_0x583efb(0x2c0)]<=0x0)return;for(let _0x1c10d4=0x0;_0x1c10d4<=this[_0x583efb(0x236)]();_0x1c10d4++){if('IKUFP'!==_0x583efb(0x1d5)){const _0x54be87=this[_0x583efb(0x176)][this['leftwardAnimation']()?this[_0x583efb(0x236)]()-_0x1c10d4:_0x1c10d4];if(!_0x54be87)continue;_0x54be87[_0x583efb(0x222)]-=this[_0x583efb(0x15e)];if(_0x54be87[_0x583efb(0x222)]<=0x0)_0x54be87['opacity']=0xff;}else{const _0x478323=this['tgrMax'](),_0x1f559a=this[_0x583efb(0x2bd)]()[_0x583efb(0x202)](_0x57e116=>_0x57e116[_0x583efb(0x271)]===_0x478323);this[_0x583efb(0x24a)]=_0x1f559a[_0x111db6[_0x583efb(0x288)](_0x1f559a[_0x583efb(0x2c0)])]||this[_0x583efb(0x2d1)]();}}},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x23d)]=Spriteset_Battle['prototype'][_0x3a9adf(0x1ef)],Spriteset_Battle[_0x3a9adf(0x1ae)][_0x3a9adf(0x1ef)]=function(){const _0x3ddbbf=_0x3a9adf;VisuMZ[_0x3ddbbf(0x2bc)][_0x3ddbbf(0x23d)][_0x3ddbbf(0x1fa)](this),this[_0x3ddbbf(0x143)]();},Spriteset_Battle[_0x3a9adf(0x1ae)][_0x3a9adf(0x143)]=function(){const _0x498856=_0x3a9adf;if(!Imported[_0x498856(0x29f)])return;const _0x2b4969=this[_0x498856(0x24f)]['x'],_0x4f5332=this[_0x498856(0x24f)]['y'],_0xf7f3a0=this['_battleField'][_0x498856(0x16b)],_0x517c6f=this[_0x498856(0x24f)][_0x498856(0x292)];this[_0x498856(0x283)]=new Sprite(),this['_provokeContainer'][_0x498856(0x2f2)](0x0,0x0,_0xf7f3a0,_0x517c6f),this[_0x498856(0x283)]['x']=_0x2b4969,this[_0x498856(0x283)]['y']=_0x4f5332;if(Imported[_0x498856(0x29f)]){const _0x5d6964=this[_0x498856(0x2d3)][_0x498856(0x1dc)](this[_0x498856(0x153)]);this[_0x498856(0x1de)](this['_provokeContainer'],_0x5d6964);}else this[_0x498856(0x18e)](this[_0x498856(0x283)]);},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x255)]=Spriteset_Battle[_0x3a9adf(0x1ae)][_0x3a9adf(0x2a8)],Spriteset_Battle[_0x3a9adf(0x1ae)][_0x3a9adf(0x2a8)]=function(){const _0x4417a4=_0x3a9adf;VisuMZ[_0x4417a4(0x2bc)]['Spriteset_Battle_update'][_0x4417a4(0x1fa)](this),this[_0x4417a4(0x25a)]();},Spriteset_Battle[_0x3a9adf(0x1ae)][_0x3a9adf(0x25a)]=function(){const _0xf5abbc=_0x3a9adf;if(!this[_0xf5abbc(0x283)])return;if(!this['_damageContainer'])return;this['_provokeContainer']['x']=this[_0xf5abbc(0x153)]['x'],this[_0xf5abbc(0x283)]['y']=this[_0xf5abbc(0x153)]['y'];},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x205)]=Window_BattleEnemy['prototype']['refresh'],Window_BattleEnemy[_0x3a9adf(0x1ae)][_0x3a9adf(0x1a7)]=function(){const _0x4d5cfd=_0x3a9adf;if(this[_0x4d5cfd(0x264)]())Imported[_0x4d5cfd(0x29f)]&&this[_0x4d5cfd(0x269)](),Window_Selectable[_0x4d5cfd(0x1ae)][_0x4d5cfd(0x1a7)][_0x4d5cfd(0x1fa)](this);else{if(this[_0x4d5cfd(0x141)]()){if(Imported['VisuMZ_1_BattleCore']){if('GBAlj'==='GBAlj')this[_0x4d5cfd(0x269)]();else{this[_0x4d5cfd(0x260)]=![];const _0xa82a38=this['item']()[_0x4d5cfd(0x26b)],_0xd1b9d=this[_0x4d5cfd(0x284)]()[_0x4d5cfd(0x140)](_0xa82a38);!_0xd1b9d[_0x4d5cfd(0x203)](_0x3bd864)&&(_0x36994f=_0xd1b9d[_0x2f9a94[_0x4d5cfd(0x288)](_0xd1b9d[_0x4d5cfd(0x2c0)])]);}}Window_Selectable[_0x4d5cfd(0x1ae)][_0x4d5cfd(0x1a7)][_0x4d5cfd(0x1fa)](this);}else VisuMZ[_0x4d5cfd(0x2bc)][_0x4d5cfd(0x205)][_0x4d5cfd(0x1fa)](this);}},Window_BattleEnemy['prototype'][_0x3a9adf(0x264)]=function(){const _0x1b21aa=_0x3a9adf,_0x1a365c=BattleManager[_0x1b21aa(0x252)](),_0x16357c=BattleManager[_0x1b21aa(0x233)]();if(!_0x1a365c)return![];if(!_0x16357c)return![];if(DataManager[_0x1b21aa(0x210)](_0x1a365c[_0x1b21aa(0x2fa)]()))return![];if(_0x16357c[_0x1b21aa(0x1b1)]())return![];if(!_0x1a365c['isProvokeAffected']())return![];if(_0x16357c[_0x1b21aa(0x23c)]()){if(_0x1b21aa(0x1ea)!==_0x1b21aa(0x244)){this['_enemies']=[_0x16357c['provoker']()];if(_0x1a365c[_0x1b21aa(0x2d6)]&&_0x1a365c[_0x1b21aa(0x2d6)]()){const _0x12eed6=$gameParty[_0x1b21aa(0x2bd)]();this[_0x1b21aa(0x276)]=this[_0x1b21aa(0x276)][_0x1b21aa(0x17f)](_0x12eed6),_0x1a365c['canSingleOrMultipleSelect']&&_0x1a365c[_0x1b21aa(0x299)]()&&_0x12eed6[_0x1b21aa(0x2c0)]>0x1&&this[_0x1b21aa(0x1ac)](_0x1b21aa(0x25c),this[_0x1b21aa(0x17d)][_0x1b21aa(0x1d4)](this));}return!![];}else _0x53d6cb+=this[_0x1b21aa(0x242)][_0x1b21aa(0x270)]();}else return![];},Window_BattleEnemy[_0x3a9adf(0x1ae)][_0x3a9adf(0x141)]=function(){const _0x1d191c=_0x3a9adf,_0x433d52=BattleManager['inputtingAction'](),_0x52f867=BattleManager[_0x1d191c(0x233)](),_0x347799=$gameTroop;if(!_0x433d52)return![];if(!_0x52f867)return![];if(!_0x433d52['item']())return![];if(DataManager[_0x1d191c(0x198)](_0x433d52[_0x1d191c(0x2fa)]()))return![];if(_0x52f867[_0x1d191c(0x2a9)]())return![];if(!_0x433d52[_0x1d191c(0x1ab)]())return![];if(_0x433d52[_0x1d191c(0x267)]()&&_0x347799['physicalTauntMembers']()[_0x1d191c(0x2c0)]>0x0){if(_0x1d191c(0x207)!=='xrBcv'){if(!_0x2a9101[_0x1d191c(0x29f)])return;const _0x584509=this[_0x1d191c(0x24f)]['x'],_0x16a737=this[_0x1d191c(0x24f)]['y'],_0x4b0532=this[_0x1d191c(0x24f)]['width'],_0x3c9571=this[_0x1d191c(0x24f)][_0x1d191c(0x292)];this[_0x1d191c(0x283)]=new _0x1be811(),this[_0x1d191c(0x283)][_0x1d191c(0x2f2)](0x0,0x0,_0x4b0532,_0x3c9571),this[_0x1d191c(0x283)]['x']=_0x584509,this[_0x1d191c(0x283)]['y']=_0x16a737;if(_0x20f5a7['VisuMZ_1_BattleCore']){const _0x19e1a2=this['children'][_0x1d191c(0x1dc)](this[_0x1d191c(0x153)]);this[_0x1d191c(0x1de)](this['_provokeContainer'],_0x19e1a2);}else this[_0x1d191c(0x18e)](this['_provokeContainer']);}else this[_0x1d191c(0x276)]=_0x347799[_0x1d191c(0x2e2)]();}else{if(_0x433d52[_0x1d191c(0x1c6)]()&&_0x347799[_0x1d191c(0x237)]()[_0x1d191c(0x2c0)]>0x0)this[_0x1d191c(0x276)]=_0x347799['magicalTauntMembers']();else{if(_0x433d52[_0x1d191c(0x16e)]()&&_0x347799[_0x1d191c(0x2e5)]()[_0x1d191c(0x2c0)]>0x0)this[_0x1d191c(0x276)]=_0x347799['certainHitTauntMembers']();else{if(_0x1d191c(0x2cc)!==_0x1d191c(0x2cc)){const _0x405de9=_0xebd6e3[_0x1d191c(0x1ad)]?0x4:0x3,_0x4978e0=_0x405de9*0x80+(_0x405de9-0x1)*0x8+0x4,_0x1b4e4e=this[_0x1d191c(0x233)](_0x22c890);let _0x539f80=_0x21c548['x']+this[_0x1d191c(0x2ad)];_0x56eec1['BattleCore'][_0x1d191c(0x15b)][_0x1d191c(0x172)][_0x1d191c(0x2fe)]?_0x539f80=_0x44480c['x']+_0x1b0c41[_0x1d191c(0x1fd)]+0x8:_0x539f80+=_0x352944['iconWidth'],_0x4aa82e=_0x50f54a[_0x1d191c(0x2b2)](_0x5d3662[_0x1d191c(0x2d9)](_0x2d561f['x']+_0x98bfa8[_0x1d191c(0x16b)]-_0x4978e0,_0x539f80)),_0x58109f-=0x4;}else return![];}}}if(_0x433d52['isForAnyone']&&_0x433d52[_0x1d191c(0x2d6)]()){const _0x375118=$gameParty[_0x1d191c(0x2bd)]();this[_0x1d191c(0x276)]=this['_enemies'][_0x1d191c(0x17f)](_0x375118),_0x433d52[_0x1d191c(0x299)]&&_0x433d52[_0x1d191c(0x299)]()&&_0x375118[_0x1d191c(0x2c0)]>0x1&&this['setHandler'](_0x1d191c(0x25c),this[_0x1d191c(0x17d)]['bind'](this));}return!![];},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x2c8)]=Window_Options[_0x3a9adf(0x1ae)][_0x3a9adf(0x301)],Window_Options[_0x3a9adf(0x1ae)][_0x3a9adf(0x301)]=function(){const _0x4be279=_0x3a9adf;VisuMZ['AggroControlSystem'][_0x4be279(0x2c8)][_0x4be279(0x1fa)](this),this['addAggroControlSystemCommands']();},Window_Options['prototype'][_0x3a9adf(0x18f)]=function(){const _0x4769bd=_0x3a9adf;VisuMZ[_0x4769bd(0x2bc)]['Settings']['Provoke'][_0x4769bd(0x1b4)]&&this['addAggroControlSystemProvokeCommand']();if(VisuMZ[_0x4769bd(0x2bc)][_0x4769bd(0x15b)][_0x4769bd(0x279)][_0x4769bd(0x1b4)]){if(_0x4769bd(0x2b1)===_0x4769bd(0x2b1))this['addAggroControlSystemAggroCommand']();else return _0x25c07e+_0xb13eea(_0x2d534c['$1'])/0x64;}},Window_Options['prototype']['addAggroControlSystemProvokeCommand']=function(){const _0xb5dcd0=_0x3a9adf,_0x3c30ab=TextManager['provokeOrigin'],_0x5ec708=_0xb5dcd0(0x25b);this[_0xb5dcd0(0x28a)](_0x3c30ab,_0x5ec708);},Window_Options['prototype']['addAggroControlSystemAggroCommand']=function(){const _0x4c74e9=_0x3a9adf,_0x430bb4=TextManager[_0x4c74e9(0x2b0)],_0x1c94ad=_0x4c74e9(0x2b0);this[_0x4c74e9(0x28a)](_0x430bb4,_0x1c94ad);},VisuMZ[_0x3a9adf(0x2bc)][_0x3a9adf(0x2a1)]=Window_StatusBase['prototype']['placeActorName'],Window_StatusBase['prototype'][_0x3a9adf(0x1e3)]=function(_0x37ab4c,_0x37c62a,_0x464d80){const _0x3eaeee=_0x3a9adf;if(this[_0x3eaeee(0x277)]())this[_0x3eaeee(0x27b)](_0x37ab4c[_0x3eaeee(0x2da)]());VisuMZ[_0x3eaeee(0x2bc)][_0x3eaeee(0x2a1)]['call'](this,_0x37ab4c,_0x37c62a,_0x464d80);},Window_StatusBase[_0x3a9adf(0x1ae)][_0x3a9adf(0x277)]=function(){const _0xb56e02=_0x3a9adf;if(![Window_BattleActor,Window_BattleStatus][_0xb56e02(0x203)](this['constructor']))return![];if(!SceneManager[_0xb56e02(0x144)]())return![];return ConfigManager[_0xb56e02(0x2b0)]&&VisuMZ[_0xb56e02(0x2bc)][_0xb56e02(0x15b)]['Aggro']['StatusGauge'];},Window_StatusBase[_0x3a9adf(0x1ae)]['placeAggroGauge']=function(_0x1c7c9a,_0x2364e1,_0x2ee4fe){const _0x23f75a=_0x3a9adf;this[_0x23f75a(0x20a)](_0x1c7c9a,'aggro',_0x2364e1,_0x2ee4fe);},Window_BattleStatus[_0x3a9adf(0x1ae)][_0x3a9adf(0x27b)]=function(_0x4ed582){const _0x3aa886=_0x3a9adf,_0xe026f0=this[_0x3aa886(0x233)](_0x4ed582),_0x29ae00=this[_0x3aa886(0x16d)](_0x4ed582),_0x2a2ade=this['aggroGaugeY'](_0x4ed582),_0x19feaf=_0x3aa886(0x2b5)[_0x3aa886(0x194)](_0xe026f0[_0x3aa886(0x219)]()),_0x5177ff=this[_0x3aa886(0x2f8)](_0x19feaf,Sprite_Gauge),_0x2ea842=VisuMZ[_0x3aa886(0x2bc)][_0x3aa886(0x15b)][_0x3aa886(0x279)];_0x5177ff['x']=_0x29ae00+(_0x2ea842[_0x3aa886(0x26d)]||0x0),_0x5177ff['y']=_0x2a2ade+(_0x2ea842[_0x3aa886(0x2cb)]||0x0),_0x5177ff[_0x3aa886(0x1a8)]=!![],_0x5177ff[_0x3aa886(0x250)](_0xe026f0,'aggro'),_0x5177ff['visible']=!![];},Window_BattleStatus['prototype'][_0x3a9adf(0x16d)]=function(_0x18668d){const _0x3f7f81=_0x3a9adf;let _0x23d517=this['itemRectWithPadding'](_0x18668d),_0x414813=this[_0x3f7f81(0x1fb)](_0x23d517);if(Imported[_0x3f7f81(0x29f)]){let _0x584b8a=this[_0x3f7f81(0x251)](_0x18668d);if(this[_0x3f7f81(0x1ed)]()===_0x3f7f81(0x14b)){if('FPOAy'==='tRzcJ')_0x145d2e['prototype'][_0x3f7f81(0x2a8)]['call'](this),this[_0x3f7f81(0x174)](),this[_0x3f7f81(0x2e8)](),this['updateOpacity'](),this[_0x3f7f81(0x25f)]();else{const _0x41b017=$dataSystem[_0x3f7f81(0x1ad)]?0x4:0x3,_0x4ed190=_0x41b017*0x80+(_0x41b017-0x1)*0x8+0x4,_0x2e0217=this[_0x3f7f81(0x233)](_0x18668d);let _0x1e06bd=_0x584b8a['x']+this[_0x3f7f81(0x2ad)];if(VisuMZ['BattleCore']['Settings'][_0x3f7f81(0x172)][_0x3f7f81(0x2fe)]){if('SckzE'===_0x3f7f81(0x23a))_0x1e06bd=_0x584b8a['x']+ImageManager[_0x3f7f81(0x1fd)]+0x8;else return this[_0x3f7f81(0x2f9)]()[_0x3f7f81(0x26c)]((_0x278060,_0x5bba1f)=>{const _0x4cd5f9=_0x3f7f81;return _0x5bba1f&&_0x5bba1f[_0x4cd5f9(0x186)][_0x4cd5f9(0x25e)](/<(?:AGGRO|ENMITY|THREAT) MULTIPLIER: (\d+)%>/i)?_0x278060+_0x3741e4(_0x25af04['$1'])/0x64:_0x278060;},0x1);}else{if(_0x3f7f81(0x209)!==_0x3f7f81(0x285))_0x1e06bd+=ImageManager[_0x3f7f81(0x161)];else return this[_0x3f7f81(0x2bd)]()[_0x3f7f81(0x202)](_0x27d40d=>_0x27d40d&&_0x27d40d['certainHitTaunt']());}_0x414813=Math[_0x3f7f81(0x2b2)](Math[_0x3f7f81(0x2d9)](_0x584b8a['x']+_0x584b8a[_0x3f7f81(0x16b)]-_0x4ed190,_0x1e06bd)),_0x414813-=0x4;}}else _0x414813=Math[_0x3f7f81(0x2b2)](_0x584b8a['x']+(_0x584b8a['width']-0x80)/0x2);}return _0x414813;},Window_BattleStatus['prototype'][_0x3a9adf(0x1f0)]=function(_0x4fd353){const _0x4d40d2=_0x3a9adf,_0x27b9bf=this[_0x4d40d2(0x251)](_0x4fd353);let _0x122e43=this[_0x4d40d2(0x200)](_0x27b9bf);if(Imported['VisuMZ_1_BattleCore']){if(this[_0x4d40d2(0x1ed)]()===_0x4d40d2(0x14b)){let _0x56c7bd=this['itemRect'](_0x4fd353);_0x122e43=Math[_0x4d40d2(0x2b2)](_0x56c7bd['y']+(_0x56c7bd[_0x4d40d2(0x292)]-Sprite_Name[_0x4d40d2(0x1ae)][_0x4d40d2(0x1e5)]())/0x2);}}if(this['isAtbGaugeVisible']())_0x122e43-=Sprite_Gauge[_0x4d40d2(0x1ae)][_0x4d40d2(0x218)]()-0x1;return _0x122e43;},Window_BattleStatus[_0x3a9adf(0x1ae)][_0x3a9adf(0x2c6)]=function(){const _0x380895=_0x3a9adf;if(!BattleManager[_0x380895(0x286)]())return![];if(Imported[_0x380895(0x2e0)])return this[_0x380895(0x155)](_0x380895(0x197));return!![];};