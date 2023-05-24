//=============================================================================
// VisuStella MZ - Battle A.I.
// VisuMZ_3_BattleAI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_BattleAI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleAI = VisuMZ.BattleAI || {};
VisuMZ.BattleAI.version = 1.21;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.21] [BattleAI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_AI_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This Battle A.I. plugin changes up how enemies and any Auto Battle actors
 * behave by implementing many new key components to their decision making
 * process in battle. These new compotents are: A.I. Styles, A.I. Levels, 
 * Rating Variance, A.I. Conditions, and Influencing TGR Weight.
 *
 * With these new key components put together, you can transform RPG Maker MZ's
 * highly primitive A.I. into something more intelligent. Auto Battle actors
 * can also base their A.I. patterns off an enemy's A.I. in order to behave in
 * more desirable ways during battle as well.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Different A.I. Styles to allow for various ways to setup enemy A.I.
 * * Set A.I. Levels for enemies and Auto Battle actors.
 * * A.I. Levels can be set on a global scale or individual scale.
 * * Set rating variance levels to prioritize actions or randomize them.
 * * These include notetags to change them on a per individual basis.
 * * Create action conditions to make certain skills usable by the A.I. under
 *   specific circumstances.
 * * Action conditions are split between 'ALL' and 'ANY' types which require
 *   either all conditions to be met or at least one condition to be met.
 * * A large selection of condition notetags to use to help customize the best
 *   case situations on when to use a skill and which target to pick.
 * * Default condition settings can be made in the Plugin Parameters to make an
 *   entire database of skills become conditional for A.I. usage.
 * * Influence TGR weight to make certain targets more desirable for specific
 *   types of actions.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Auto Battle A.I. for Actors
 *
 * - With this plugin, there is an option to let certain classes reference
 * specific enemy A.I. patterns to decide which skills to use during battle.
 * If the reference option is not used, the actor will use default Auto Battle
 * evaluations to determine which skills to use instead.
 *
 * ---
 * 
 * A.I. Styles
 * 
 * - There are currently four different A.I. Styles. Actors and enemies can
 * default to a different one globally, or changed individually using notetags.
 * Read more about them in the A.I. Styles section.
 * 
 * ---
 *
 * A.I. Levels
 *
 * - Enemies and actors can be given different A.I. Levels. The higher one's
 * A.I. Level, the more they are to follow conditions. With Level 100 A.I.
 * Level, an A.I. will never disobey a condition. On the other hand, lower
 * A.I. Levels may possibly ignore certain conditions and act as if they are
 * fulfilled.
 *
 * ---
 *
 * A.I. Rating Variance
 *
 * - In the RPG Maker database editor, when deciding an enemy's Action Patterns
 * you can decide on the action's "rating". The rating is a value from 1 to 9
 * where 9 gets the highest priority and 1 gets the lowest. RPG Maker, by
 * default, will sometimes dip the rating a few levels lower to allow lower
 * ratings and bypass the priority system.
 *
 * - This plugin allows you to set the variance level through Plugin Parameters
 * on a global scale or notetags on an individual basis to allow for larger,
 * smaller, or no variance on ratings at all.
 *
 * ---
 *
 * A.I. Conditions for Skill Usage
 *
 * - Enemies and any actors that use Auto Battle A.I. with a reference can only
 * use certain skills as long as specific conditions have been met. These
 * conditions are split between 'ALL' condition sets and 'ANY' condition sets.
 *
 * - 'ALL' condition sets require all of the set's conditions to be met in
 * order for the skill to be used by the A.I.
 *
 * - 'ANY' condition sets require at least one of the set's conditions to be
 * met in order for the skill to be used by the A.I.
 *
 * - A variety of conditions can be inserted into each condition set to make
 * for some very specific usage conditions. These will also help filter out
 * which targets to pick from, too.
 *
 * ---
 *
 * TGR Weight on A.I. Target Selection
 *
 * - TGR is a special parameter in RPG Maker MZ that represents "Target Rate".
 * The higher one's TGR, the more likely they are to become the target of an
 * attack. This plugin allows various things to influence the TGR weight to
 * make certain targets more likely to be targets for attack.
 *
 * - Elemental influence rates on the TGR weight mean that if a target receives
 * more damage from an elemental attack, the TGR weight becomes higher for that
 * skill when determining a target. The higher the elemental damage received,
 * the more the TGR weight shifts upward.
 *
 * - Evasion and Magic Evasion rates do the opposite. The higher a potential
 * target's evasion and magic evasion rate is (for physical and magical skills)
 * the lower the TGR weight becomes for that potential target.
 *
 * - By default Plugin Parameter settings, TGR weight shifting requires the
 * enemy troop to have "knowledge" on the party's element rates, evasion, and
 * magic evasion properties. Enemy troops would have to hit actors with element
 * based attacks to learn the actor's resistance levels, physical attacks to
 * learn the actor's evasion, and magical attacks to learn the actor's magic
 * evasion levels.
 *
 * ---
 *
 * ============================================================================
 * A.I. Styles
 * ============================================================================
 * 
 * There are currently four different A.I. Styles. These determine how the
 * A.I. acts and behaves. You can change the A.I. Style used globally through
 * the Plugin Parameters or individually for classes and enemies through the
 * usage of notetags.
 * 
 * Read below to understand each style and its rules:
 * 
 * ---
 * 
 * Classic Style
 * 
 * "Classic" style is the traditional and default RPG Maker MZ A.I. style.
 * It puts emphasis on the Rating system, where skills with higher ratings are
 * given more priority than skills with lower ratings within variance.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions with higher Ratings.
 * - Rating variance will be determined by Plugin Parameters and/or notetags.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - After applying Ratings, Rating Variances, and A.I. Conditions, if there
 *   are still multiple actions to choose from, pick from the remaining actions
 *   randomly.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Gambit Style
 * 
 * - "Gambit" style is the style from Yanfly Engine Plugin's Battle A.I. Core.
 * It goes down the list of skills and uses them in order as long as they meet
 * the Action Pattern conditions and A.I. conditions. Ratings will be ignored.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions located higher on the list.
 * - Actions towards the bottom of the list will have lower priority.
 * - Ratings and Rating Variance has no bearing on whether or not an action
 *   will be picked.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Casual Style
 * 
 * - "Casual" style takes a lighter approach to A.I. It ignores the Ratings
 * system and doesn't care about the order of actions either. Instead, the
 * only thing this A.I. Style cares about are the A.I. Conditions. All valid
 * actions after that are randomly picked from.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Random Style
 * 
 * - "Random" style simply does not care about ratings or order. It only cares
 * if the skill's can be used (can pay for the cost) and Action Pattern
 * conditions. It does not care about A.I. Conditions, Ratings, or Order.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions are ignored.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
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
 * === General A.I. Settings Notetags ===
 *
 * These notetags set the general A.I. related settings for enemies and any
 * actors that use A.I. (requires Auto Battle and has a reference A.I.).
 *
 * ---
 * 
 * <AI Style: x>
 * 
 * - Used for: Class, Enemy Notetags
 * - Replace 'x' with 'Classic', 'Gambit', 'Casual', or 'Random' without the
 *   quotes. Example: <AI Style: Gambit>
 * - Determines the A.I. style used. Refer to the A.I. Styles section on the
 *   various types of styles.
 * - For actors, place this inside the associated class's notebox instead.
 * - For actors, this does not apply if there is no referenced enemy A.I. list.
 * - Setup the reference enemy through either the Plugin Parameters or by using
 *   the <Reference AI: Enemy id> notetag found below.
 * 
 * ---
 *
 * <AI Level: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Designates the unit's A.I. level if A.I. is to be used.
 * - Replace 'x' with a number from 0 to 100.
 * - Units with higher A.I. Levels will be more strict about conditions.
 * - Units with lower A.I. Levels will be more lax about conditions.
 *
 * ---
 *
 * <AI Rating Variance: x>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Sets the variance amount when determining A.I. actions by rating.
 * - Replace 'x' with a number between 0 and 9.
 * - 0 for no variance.
 * - Lower numbers for less variance.
 * - Higher numbers for more variance.
 *
 * ---
 *
 * <Reference AI: Enemy id>
 * <Reference AI: name>
 *
 * - Used for: Class Notetags
 * - Causes any actor using this class that has the Auto Battle trait to use
 *   a specific enemy's attack pattern (ratings, conditions, etc.) to determine
 *   which skill to use in battle.
 * - Replace 'id' with a number representing the enemy's ID to reference.
 * - Replace 'name' with the name the enemy to reference.
 * - Actors are only able to use skills they would normally have access to.
 *   - Actors need to have LEARNED the skill.
 *   - Actors need to be able to access the skill's SKILL TYPE.
 *   - Actors need to have the RESOURCES to pay for the skill.
 * - If you cannot figure out why an auto battle actor cannot use a specific
 *   skill, turn OFF auto battle and see if you can use the skill normally.
 *
 * ---
 *
 * <No Reference AI>
 *
 * - Used for: Class Notetags
 * - Prevents the class from using any enemies as their reference A.I. pattern
 *   (including the one set in the Plugin Parameters).
 *
 * ---
 *
 * === Skill A.I. Condition Notetags ===
 *
 * Insert these notetags into the noteboxes of skills that you'd like to give
 * custom A.I. conditions for. The 'All' version of the notetags require every
 * condition to be met while the 'Any' version of the notetags require only one
 * of the conditions to be met. 
 *
 * If both are used together, then the 'All' conditions must be completely
 * fulfilled while the 'Any' conditions need only one to be fulfilled.
 *
 * ---
 *
 * <All AI Conditions>
 *  condition
 *  condition
 *  condition
 * </All AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - All conditions must be met in order for this to become a valid skill for
 *   the AI to use.
 * - This can be used together with <Any AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'All' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <Any AI Conditions>
 *  condition
 *  condition
 *  condition
 * </Any AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - As long as one condition is met, this becomes a valid skill for the AI
 *   to use. If none of them are met, this skill becomes invalid for AI use.
 * - This can be used together with <All AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'Any' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <No AI Conditions>
 * 
 * - Used for: Skill
 * - Removes any default 'All' and 'Any' conditions for this skill.
 * 
 * ---
 *
 * -=-=- Condition List -=-=-
 *
 * Replace 'condition' in the notetags in the above section with any of the
 * following to make conditions. These conditions are also used in the Plugin
 * Parameters for the default conditions, too.
 *
 * ---
 *
 * x >= y
 * x > y
 * x === y
 * x !== y
 * x < y
 * x <= y
 *
 * - Replace 'x' and 'y' with any of the following:
 *
 * - A numeric value representing a hard number.
 * - '50%' or any other percentile number to represent a rate.
 * - '0.5' or any other float number to represent a rate.
 *
 * - 'Variable x' (replace 'x' with a number) for variable x's current value.
 *
 * - 'HP%', 'MP%', 'TP%' for HP, MP, and TP rates respectively.
 * - 'MaxHP', 'MaxMP', 'MaxTP' for the potential target's respective values.
 * - 'Level' for the potential target's level. Requires VisuMZ_0_CoreEngine for
 *   this to affect enemies.
 * - 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK' for the potential target's total
 *   parameter value.
 *
 * - 'param Buff Stacks' for the potential target's current Buff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 * - 'param Debuff Stacks' for the potential target's current Debuff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * - 'param Buff Turns' for potential target's current buff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that buff.
 * - 'param Debuff Turns' for potential target's current debuff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that debuff.
 *
 * - 'State id Turns' or 'State name Turns' for potential target's current turn
 *   duration on that particular state.
 *   - Replace 'id' with a number representing the ID of the state.
 *   - Replace 'name' with the state's name.
 *   - Returns 0 if the potential target is not affected by that state.
 *   - Returns the max safe number value if the potential target is has that
 *     state as a passive state.
 *
 * - 'Element id Rate', 'Element name Rate', 'name Element Rate'
 *   - Returns a (float) value of the potential target's element's rate.
 *   - Replace 'id' with the ID of the element whose rate is to be checked.
 *   - Replace 'name' with the name of the element whose rate is to be checked.
 *     - Ignore any text codes in the element name.
 *
 * - 'Team Alive Members'
 *   - Returns a number value indicating how many alive members there are on
 *     the potential target's team.
 *
 * - 'Team Dead Members'
 *   - Returns a number value indicating how many dead members there are on
 *     the potential target's team.
 * 
 * - When no keyword matches are found, the comparison value will be
 *   interpreted as JavaScript code. If the JavaScript code fails, it will
 *   default to a 0 value.
 * 
 *   *NOTE* JavaScript cannot be used without comparison operators to reduce
 *   error. This means if you want to check if a switch is on or not, don't
 *   simply use "$gameSwitches.value(42)" as it does not have any comparison
 *   operators. Instead, use "$gameSwitches.value(42) === true" to check.
 *
 *   *NOTE* To make any of these conditions base off of the user instead, add
 *   the word 'user' before the condition as such:
 *
 *   user hp% >= 0.50
 *   user atk buff stacks === 2
 *   user team alive members < 3
 *
 * ---
 *
 * Always
 *
 * - Going to be valid no matter what.
 *
 * ---
 *
 * x% Chance
 * 
 * - Replace 'x' with a number value representing the percent chance this skill
 *   would pass as valid.
 *
 * ---
 *
 * Switch x On
 * Switch x Off
 *
 * - Replace 'x' with the ID of the switch to check as ON/OFF.
 *
 * ---
 *
 * User is Actor
 * User is Enemy
 * Target is Actor
 * Target is Enemy
 *
 * - Requires the user or potential target to be an actor/enemy.
 *
 * ---
 *
 * User Has State id
 * User Has State name
 * Target Has State id
 * Target Has State name
 *
 * - Replace 'id' with the ID of the state the user or potential target needs
 *   to have.
 * - Replace 'name' with the name of the state the target needs to have.
 *
 * ---
 *
 * User Not State id
 * User Not State name
 * Target Not State id
 * Target Not State name
 *
 * - Replace 'id' with the ID of the state the user or potential target
 *   cannot have.
 * - Replace 'name' with the name of the state the target cannot have.
 *
 * ---
 *
 * User Has param Buff 
 * User Has param Debuff 
 * Target Has param Buff 
 * Target Has param Debuff 
 *
 * - Requires user or potential target to have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Has param Max Buff 
 * User Has param Max Debuff
 * Target Has param Max Buff 
 * Target Has param Max Debuff
 *
 * - Requires potential user or target to have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Buff 
 * User Not param Debuff 
 * Target Not param Buff 
 * Target Not param Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Max Buff 
 * User Not param Max Debuff 
 * Target Not param Max Buff 
 * Target Not param Max Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * === A.I. => TGR Weight Notetags ===
 *
 * You can set how much influence on TGR weights actors and enemies will place
 * when determining valid targets for their actions.
 *
 * ---
 *
 * <AI Element Rate Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the element rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI Element Rate Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in element rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI EVA Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the EVA rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI EVA Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in EVA rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI MEV Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the MEV rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI MEV Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in MEV rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 * 
 * === Specific A.I. Targeting Notetags ===
 * 
 * Specific A.I. targeting means the user will ignore any TGR influences when
 * it comes to pick out of a group of valid candidates to come down to one
 * target. This only affects skills where the user must select a specific
 * target, meaning it will ignore the effects of random and AoE scopes.
 * 
 * ---
 *
 * <AI Target: type>
 *
 * - Used for: Skill Notetags
 * - Bypasses TGR influence in favor of picking a specific target out of a
 *   group of valid targets (does not pick from outside the valid target group)
 *   for a skill target.
 * - Replace 'type' with any of the following:
 * 
 *   ----------------------------   -------------------------------------------
 *   Type                           Description
 *   ----------------------------   -------------------------------------------
 *   User                           Always picks the user if available
 *   First                          Always picks the first valid candidate
 *   Last                           Always picks the last valid candidate
 *   ----------------------------   -------------------------------------------
 *   Highest Level                  Picks candidate with highest level
 *   ----------------------------   -------------------------------------------
 *   Highest MaxHP                  Picks candidate with highest MaxHP
 *   Highest HP                     Picks candidate with highest current HP
 *   Highest HP%                    Picks candidate with highest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxMP                  Picks candidate with highest MaxMP
 *   Highest MP                     Picks candidate with highest current MP
 *   Highest MP%                    Picks candidate with highest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxTP                  Picks candidate with highest MaxTP
 *   Highest TP                     Picks candidate with highest current TP
 *   Highest TP%                    Picks candidate with highest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest ATK                    Picks candidate with highest ATK parameter
 *   Highest DEF                    Picks candidate with highest DEF parameter
 *   Highest MAT                    Picks candidate with highest MAT parameter
 *   Highest MDF                    Picks candidate with highest MDF parameter
 *   Highest AGI                    Picks candidate with highest AGI parameter
 *   Highest LUK                    Picks candidate with highest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Highest HIT                    Picks candidate with highest HIT parameter
 *   Highest EVA                    Picks candidate with highest EVA parameter
 *   Highest CRI                    Picks candidate with highest CRI parameter
 *   Highest CEV                    Picks candidate with highest CEV parameter
 *   Highest MEV                    Picks candidate with highest MEV parameter
 *   Highest MRF                    Picks candidate with highest MRF parameter
 *   Highest CNT                    Picks candidate with highest CNT parameter
 *   Highest HRG                    Picks candidate with highest HRG parameter
 *   Highest MRG                    Picks candidate with highest MRG parameter
 *   Highest TRG                    Picks candidate with highest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Highest TGR                    Picks candidate with highest TGR parameter
 *   Highest GRD                    Picks candidate with highest GRD parameter
 *   Highest REC                    Picks candidate with highest REC parameter
 *   Highest PHA                    Picks candidate with highest PHA parameter
 *   Highest MCR                    Picks candidate with highest MCR parameter
 *   Highest TCR                    Picks candidate with highest TCR parameter
 *   Highest PDR                    Picks candidate with highest PDR parameter
 *   Highest MDR                    Picks candidate with highest MDR parameter
 *   Highest FDR                    Picks candidate with highest FDR parameter
 *   Highest EXR                    Picks candidate with highest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Highest State Count            Picks candidate with most states (any)
 *   Highest Positive State Count   Picks candidate with most positive states
 *   Highest Negative State Count   Picks candidate with most negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 *   Lowest Level                   Picks candidate with lowest level
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxHP                   Picks candidate with lowest MaxHP
 *   Lowest HP                      Picks candidate with lowest current HP
 *   Lowest HP%                     Picks candidate with lowest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxMP                   Picks candidate with lowest MaxMP
 *   Lowest MP                      Picks candidate with lowest current MP
 *   Lowest MP%                     Picks candidate with lowest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxTP                   Picks candidate with lowest MaxTP
 *   Lowest TP                      Picks candidate with lowest current TP
 *   Lowest TP%                     Picks candidate with lowest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest ATK                     Picks candidate with lowest ATK parameter
 *   Lowest DEF                     Picks candidate with lowest DEF parameter
 *   Lowest MAT                     Picks candidate with lowest MAT parameter
 *   Lowest MDF                     Picks candidate with lowest MDF parameter
 *   Lowest AGI                     Picks candidate with lowest AGI parameter
 *   Lowest LUK                     Picks candidate with lowest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest HIT                     Picks candidate with lowest HIT parameter
 *   Lowest EVA                     Picks candidate with lowest EVA parameter
 *   Lowest CRI                     Picks candidate with lowest CRI parameter
 *   Lowest CEV                     Picks candidate with lowest CEV parameter
 *   Lowest MEV                     Picks candidate with lowest MEV parameter
 *   Lowest MRF                     Picks candidate with lowest MRF parameter
 *   Lowest CNT                     Picks candidate with lowest CNT parameter
 *   Lowest HRG                     Picks candidate with lowest HRG parameter
 *   Lowest MRG                     Picks candidate with lowest MRG parameter
 *   Lowest TRG                     Picks candidate with lowest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest TGR                     Picks candidate with lowest TGR parameter
 *   Lowest GRD                     Picks candidate with lowest GRD parameter
 *   Lowest REC                     Picks candidate with lowest REC parameter
 *   Lowest PHA                     Picks candidate with lowest PHA parameter
 *   Lowest MCR                     Picks candidate with lowest MCR parameter
 *   Lowest TCR                     Picks candidate with lowest TCR parameter
 *   Lowest PDR                     Picks candidate with lowest PDR parameter
 *   Lowest MDR                     Picks candidate with lowest MDR parameter
 *   Lowest FDR                     Picks candidate with lowest FDR parameter
 *   Lowest EXR                     Picks candidate with lowest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest State Count             Picks candidate with least states (any)
 *   Lowest Positive State Count    Picks candidate with least positive states
 *   Lowest Negative State Count    Picks candidate with least negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 * 
 * ---
 *
 * ============================================================================
 * Regarding $gameTroop.turnCount() for A.I. Conditions
 * ============================================================================
 * 
 * ---
 * 
 * Short Answer:
 *
 * Battle A.I. conditions do NOT support the conditions $gameTroop.turnCount()
 * or user.turnCount() or target.turnCount() for A.I. Conditions.
 * 
 * Instead, use RPG Maker MZ's built-in action editor's turn requirement to
 * make do with the same effect.
 *
 * ---
 * 
 * Long Answer:
 * 
 * The turnCount() functions are not valid for A.I. Conditions and disabled due
 * to all the problems they cause. The reason being is because actions are
 * determined before the turn count increases. This is how RPG Maker MZ handles
 * it by default.
 * 
 * The reason why this does not work is due to the following code found in
 * RPG Maker MZ's core scripts:
 * 
 *   Game_Battler.prototype.turnCount = function() {
 *       if (BattleManager.isTpb()) {
 *           return this._tpbTurnCount;
 *       } else {
 *           return $gameTroop.turnCount() + 1;
 *       }
 *   };
 * 
 * What that means the turn count will always be off by 1. So upon determining
 * the action initially, the match would come off as correct. However, as the
 * turn actually starts and reaches the enemy or actor's turn, the turn count
 * check would read differently and return incorrect information, causing the
 * battler to forfeit their actions.
 * 
 * This facet of RPG Maker MZ can be updated and changed, but it is better that
 * it doesn't in order to maintain compatibility with the rest of the plugins
 * available that utilize the turn counter.
 * 
 * The work around to this problem is, instead, to use the enemy database tab's
 * action editor and apply a Turn Condition to match the required turn instead.
 * You know, the thing with Skill and Rating, where you select which skill for
 * the enemy to use instead.
 * 
 * HOWEVER!
 * 
 * If you are willing to use an "Experimental" feature, aka one that is not
 * heavily tested and may potentially result in unintended side effects, go to:
 * 
 *  Plugin Parameters > A.I. General Settings > Experimental > On-The-Spot A.I.
 * 
 * And set that to "true" without the quotes. This will forcefully remove the
 * +1 towards the count and forcefully make enemies re-evaluate actions upon
 * the start of the string of their actions. This comes with some side effects
 * that will potentially give A.I. advantages or disadvantages depending on the
 * battle system type. Action Speed becomes something that can be abused as it
 * is normally something that is determined based on the queued actions. A.I.
 * can pick a high speed weak action and then switch it for a slow speed strong
 * action. There is no proper fix to this due to how on-the-spot A.I. works as
 * it is ill-fitted for speed-relative battle systems. You have been warned.
 * 
 * In the event that this Plugin Parameter IS enabled, then using the turnCount
 * JavaScript code should work again due to the normalization of how the turn
 * property is calculated.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. General Settings
 * ============================================================================
 *
 * These settings determine the global settings for general Battle A.I. usage.
 *
 * ---
 * 
 * A.I. Style
 * 
 *   Actor Style:
 *   - Which A.I. style do you want for referenced actors to use?
 *   - This does not apply to non-referenced actors.
 * 
 *   Enemy Style:
 *   - Which A.I. style do you want for enemies to use?
 * 
 *   Refer to the A.I. Styles list for a list of valid styles.
 * 
 * ---
 *
 * A.I. Level
 * 
 *   Actor A.I. Level:
 *   - Default A.I. level used for actor A.I.
 *   - Levels: 0-100. Higher is stricter.
 * 
 *   Enemy A.I. Level:
 *   - Default A.I. level used for enemy A.I.
 *   - Levels: 0-100. Higher is stricter.
 *
 * ---
 *
 * A.I. Ratings
 * 
 *   Actor Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 * 
 *   Enemy Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 *
 * ---
 *
 * Reference
 * 
 *   Actor => AI Reference:
 *   - Which enemy A.I. should the actor reference by default?
 *   - Use 0 for no references.
 *
 * ---
 *
 * Knowledge
 * 
 *   Learn Knowledge:
 *   - Requires enemies/actors to test the knowledge of the opponents before
 *     using specific conditions.
 * 
 *   Unknown Element Rate:
 *   - What should A.I. treat unknown element rates as?
 *
 * ---
 * 
 * Experimental
 * 
 *   On-The-Spot A.I.:
 *   - A.I. enemies/actors determine actions on the spot when it's their turn.
 * 
 *     No Idle Chant:
 *     - Requires On-The-Spot A.I. enabled.
 *     - For A.I. Battlers, disables idle chant motions due to inconsistency.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. Default Conditions
 * ============================================================================
 *
 * You can set certain conditions to be used as defaults for all skills that
 * lack the <All AI Conditions> and <Any AI Conditions>. If either of those
 * notetags exist, none of these defaults will be used for those skills. These
 * settings will allow you to set both 'All' and 'Any' conditions for defaults.
 *
 * ---
 *
 * Enable?
 * 
 *   All Conditions:
 *   - Create default 'ALL' conditions for all skills without any AI notetags?
 * 
 *   Any Conditions:
 *   - Create default 'ANY' conditions for all skills without any AI notetags?
 *
 * ---
 *
 * HP Damage
 * MP Damage
 * HP Recover
 * MP Recover
 * HP Drain
 * MP Drain
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *
 * ---
 *
 * Add State
 * Remove State
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * Add Buff
 * Remove Buff
 * Add Debuff
 * Remove Debuff
 * 
 *   All Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie param's).
 * 
 *   Any Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. => TGR Weight Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you to set whether or not you'd like for 
 * weight influence when deciding targets for actions and how much to influence
 * the TGR weight by.
 *
 * ---
 *
 * Weight
 * 
 *   Element Rate => TGR:
 *   - Makes all A.I. consider elemental rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence elemental rates have on
 *       TGR weight.
 * 
 *   EVA Rate => TGR:
 *   - Makes all A.I. consider EVA rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence EVA rates have on
 *       TGR weight.
 * 
 *   MEV Rate => TGR:
 *   - Makes all A.I. consider MEV rates when considering TGR weight
 *     by default?
 * 
 *   Influence Rate:
 *   - This determines the default level of influence MEV rates have on
 *     TGR weight.
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
 * Version 1.21: April 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented enemies from using skills that had the
 *    <Target: x Random Any> notetag. Fix made by Irina.
 * 
 * Version 1.20: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.74
 *    new features.
 * 
 * Version 1.19: January 20, 2023
 * * Bug Fixes!
 * ** On-The-Spot A.I. no longer overwrites Forced Actions. Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.73
 *    new features.
 * 
 * Version 1.18: May 19, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** General Settings > Experimental > On-The-Spot A.I. > No Idle Chant
 * **** Requires On-The-Spot A.I. enabled.
 * **** For A.I. Battlers, disables idle chant motions due to inconsistency.
 * 
 * Version 1.17: May 12, 2022
 * * Feature Update!
 * ** Better RNG calculation when using the x% Chance conditional. Update made
 *    by Arisu.
 * 
 * Version 1.16: February 24, 2022
 * * Feature Update!
 * ** Randomization between zero variance A.I. is now better.
 * ** A.I. will no longer keep unusable skills in a skill queue and replace
 *    them with new ones.
 * 
 * Version 1.15: December 2, 2021
 * * Compatibility Update!
 * ** AI for skills and items should now work if their scope is
 *    <Target: All Allies But User>. Update made by Irina.
 * 
 * Version 1.14: October 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Notetag section "Condition List" updated with the following:
 * *** *NOTE* JavaScript cannot be used without comparison operators to reduce
 *     error. This means if you want to check if a switch is on or not, don't
 *     simply use "$gameSwitches.value(42)" as it does not have any comparison
 *     operators. Instead, use "$gameSwitches.value(42) === true" to check.
 * ** Updated section "Regarding $gameTroop.turnCount() for A.I. Conditions"
 * * New Experimental Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** A.I. General Settings > Experimental > On-The-Spot A.I.
 * **** A.I. enemies/actors determine actions on the spot when it's their turn.
 * **** Functions akin to YEP's Battle A.I. Core where enemies determine new
 *      actions on the spot. Doing so will forcefully change the way the Turn
 *      Count is handled for Game_Battler to not utilize the +1.
 * **** This will forcefully remove the +1 towards the count and forcefully
 *      make enemies re-evaluate actions upon the start of the string of their
 *      actions. This comes with some side effects that will potentially give
 *      A.I. advantages or disadvantages depending on the battle system type.
 *      Action Speed becomes something that can be abused as it is normally
 *      something that is determined based on the queued actions. A.I. can pick
 *      a high speed weak action and then switch it for a slow speed strong
 *      action. There is no proper fix to this due to how on-the-spot A.I.
 *      works as it is ill-fitted for speed-relative battle systems. You have
 *      been warned.
 * **** In the event that this Plugin Parameter IS enabled, then using the
 *      turnCount JavaScript code should work again due to the normalization of
 *      how the turn property is calculated.
 * * Optimization Update!
 * ** Updated last version's newest change to be more optimized and occur upon
 *    each iteration of a new subject being determined to account for better
 *    check timing. Update made by Yanfly.
 * 
 * Version 1.13: October 13, 2021
 * * Feature Update!
 * ** A.I. Battlers with no currently determined actions, upon the start of the
 *    time frame for what would be their action, will have one more chance of
 *    determining a new action to use as to not waste their turns.
 * ** This does NOT mean that the A.I. Battlers will adjust their actions for
 *    one with a higher rating. The readjustment will only occur if there are
 *    no actions determined for that instance and only a one time window upon
 *    the start of the time frame for what would be their action.
 * ** Update made by Arisu.
 * 
 * Version 1.12: October 7, 2021
 * * Documentation Update!
 * ** Added section "Regarding $gameTroop.turnCount() for A.I. Conditions".
 * * Feature Update!
 * ** Any A.I. Conditions found with "turnCount()" will be automatically
 *    disabled in order to reduce confusion. This is due to how turnCount()
 *    functions do not accurately depict the current Turn Count depending on
 *    when the function runs. Update made by Olivia.
 * 
 * Version 1.11: September 30, 2021
 * * Bug Fixes!
 * ** Patched up a rare occurance of predetermined actions still having
 *    priority despite having no valid targets. Fix made by Olivia.
 * 
 * Version 1.10: September 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that caused "highest" and "lowest" target schemes to be
 *    inverted. Fix made by Olivia.
 * 
 * Version 1.09: July 9, 2021
 * * Bug Fixes!
 * ** Fixed a bug that caused "highest" and "lowest" target schemes to be
 *    inverted. Fix made by Arisu.
 * 
 * Version 1.08: April 16, 2021
 * * Feature Update!
 * ** Cached randomization seeds should no longer conflict with certain scope
 *    types. Update made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: January 22, 2021
 * * Bug Fixes!
 * ** <AI Target: x> notetags should no longer crashes. Fix made by Irina.
 * 
 * Version 1.06: January 8, 2021
 * * Feature Update!
 * ** For those using classic mode with a variance level of 0, action lists
 *    will be better shuffled to provide more variation between selected
 *    skills. Update made by Irina.
 * 
 * Version 1.05: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly!
 * *** <AI Target: type>
 * **** Bypasses TGR influence in favor of picking a specific target out of a
 *      group of valid targets (does not pick from outside the valid target
 *      group) for a skill target. Read documentation to see targeting types.
 * 
 * Version 1.04: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for notetag <Reference AI: Enemy id>
 * *** - Actors are only able to use skills they would normally have access to.
 *       - Actors need to have LEARNED the skill.
 *       - Actors need to be able to access the skill's SKILL TYPE.
 *       - Actors need to have the RESOURCES to pay for the skill.
 *     - If you cannot figure out why an auto battle actor cannot use a
 *       specific skill, turn OFF auto battle and see if you can use the skill
 *       normally.
 * 
 * Version 1.03: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.02: November 1, 2020
 * * Bug Fixes!
 * ** Charmed battlers will no longer vanish when attack one another. Fix made
 *    by Yanfly.
 * 
 * Version 1.01: October 18, 2020
 * * Bug Fixes!
 * ** <All AI Conditiosn> and <Any AI Conditions> notetags are now fixed and
 *    should work properly. Fix made by Yanfly.
 *
 * Version 1.00: September 30, 2020
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
 * @param BattleAI
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
 * @text A.I. General Settings
 * @type struct<General>
 * @desc General settings pertaining to A.I.
 * @default {"AIStyle":"","ActorStyleAI:str":"classic","EnemyStyleAI:str":"classic","AILevel":"","ActorAILevel:num":"100","EnemyAILevel:num":"100","AIRating":"","ActorRatingVariance:num":"1","EnemyRatingVariance:num":"3","Reference":"","ActorAIReference:num":"0","Knowledge":"","LearnKnowledge:eval":"true","UnknownElementRate:num":"1.00"}
 *
 * @param Default:struct
 * @text A.I. Default Conditions
 * @type struct<Default>
 * @desc Give certain types of skills default conditions.
 * @default {"Enable?":"","EnableAllCon:eval":"true","EnableAnyCon:eval":"true","HpDamage":"","HpDamageAll:json":"\"\"","HpDamageAny:json":"\"Always\"","MpDamage":"","MpDamageAll:json":"\"Target MP > 0\"","MpDamageAny:json":"\"\"","HpRecover":"","HpRecoverAll:json":"\"\"","HpRecoverAny:json":"\"Target HP < Target MaxHP\"","MpRecover":"","MpRecoverAll:json":"\"\"","MpRecoverAny:json":"\"Target MP < Target MaxMP\"","HpDrain":"","HpDrainAll:json":"\"\"","HpDrainAny:json":"\"User HP < User MaxHP\"","MpDrain":"","MpDrainAll:json":"\"Target MP > 0\"","MpDrainAny:json":"\"\"","AddState":"","AddStateAll:json":"\"\"","AddStateAny:json":"\"Target Not State %1\\nTarget State %1 Turns <= 1\"","RemoveState":"","RemoveStateAll:json":"\"\"","RemoveStateAny:json":"\"Target Has State %1\"","AddBuff":"","AddBuffAll:json":"\"\"","AddBuffAny:json":"\"Target Not %1 Max Buff\\nTarget %1 Buff Turns <= 1\"","RemoveBuff":"","RemoveBuffAll:json":"\"\"","RemoveBuffAny:json":"\"Target Has %1 Buff\"","AddDebuff":"","AddDebuffAll:json":"\"\"","AddDebuffAny:json":"\"Target Not %1 Max Debuff\\nTarget %1 Debuff Turns <= 1\"","RemoveDebuff":"","RemoveDebuffAll:json":"\"\"","RemoveDebuffAny:json":"\"Target Has %1 Debuff\""}
 *
 * @param Weight:struct
 * @text A.I. => TGR Weight
 * @type struct<Weight>
 * @desc How do certain properties translate to TGR weight?
 * @default {"ElementTgr:eval":"true","ElementTgrRate:num":"1.25","EvaTgr:eval":"true","EvaTgrRate:num":"1.50","MevTgr:eval":"true","MevTgrRate:num":"2.00"}
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
 * A.I. General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param AIStyle
 * @text A.I. Style
 *
 * @param ActorStyleAI:str
 * @text Actor Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for referenced actors to use?
 * This does not apply to non-referenced actors.
 * @default classic
 *
 * @param EnemyStyleAI:str
 * @text Enemy Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for enemies to use?
 * @default classic
 *
 * @param AILevel
 * @text A.I. Level
 *
 * @param ActorAILevel:num
 * @text Actor A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for actor A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param EnemyAILevel:num
 * @text Enemy A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for enemy A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param AIRating
 * @text A.I. Ratings
 *
 * @param ActorRatingVariance:num
 * @text Actor Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 1
 *
 * @param EnemyRatingVariance:num
 * @text Enemy Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 3
 *
 * @param Reference
 *
 * @param ActorAIReference:num
 * @text Actor => AI Reference
 * @parent Reference
 * @type enemy
 * @desc Which enemy A.I. should the actor reference by default?
 * Use 0 for no references.
 * @default 0
 *
 * @param Knowledge
 *
 * @param LearnKnowledge:eval
 * @text Learn Knowledge
 * @parent Knowledge
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Requires enemies/actors to test the knowledge of
 * the opponents before using specific conditions.
 * @default true
 *
 * @param UnknownElementRate:num
 * @text Unknown Element Rate
 * @parent LearnKnowledge:eval
 * @desc What should A.I. treat unknown element rates as?
 * @default 1.00
 * 
 * @param Experimental
 * 
 * @param OnSpotAI:eval
 * @text On-The-Spot A.I.
 * @parent Experimental
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc A.I. enemies/actors determine actions on the
 * spot when it's their turn.
 * @default false
 * 
 * @param SpotRemoveMotions:eval
 * @text No Idle Chant
 * @parent OnSpotAI:eval
 * @type boolean
 * @on Remove Idle Chanting
 * @off Allow Idle Chanting
 * @desc Requires On-The-Spot A.I. enabled. For A.I. Battlers,
 * disables idle chant motions due to inconsistency.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. Default Conditions
 * ----------------------------------------------------------------------------
 */
/*~struct~Default:
 *
 * @param Enable?
 *
 * @param EnableAllCon:eval
 * @text All Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ALL' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param EnableAnyCon:eval
 * @text Any Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ANY' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param HpDamage
 * @text HP Damage
 * 
 * @param HpDamageAll:json
 * @text All Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ALL' conditions used for HP damage skills.
 * @default ""
 * 
 * @param HpDamageAny:json
 * @text Any Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ANY' conditions used for HP damage skills.
 * @default "Always"
 *
 * @param MpDamage
 * @text MP Damage
 * 
 * @param MpDamageAll:json
 * @text All Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ALL' conditions used for MP damage skills.
 * @default "Target MP > 0"
 *
 * @param MpDamageAny:json
 * @text Any Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ANY' conditions used for MP damage skills.
 * @default ""
 *
 * @param HpRecover
 * @text HP Recover
 * 
 * @param HpRecoverAll:json
 * @text All Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ALL' conditions used for HP recovery skills.
 * @default ""
 *
 * @param HpRecoverAny:json
 * @text Any Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ANY' conditions used for HP recovery skills.
 * @default "Target HP < Target MaxHP"
 *
 * @param MpRecover
 * @text MP Recover
 * 
 * @param MpRecoverAll:json
 * @text All Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ALL' conditions used for MP recovery skills.
 * @default ""
 *
 * @param MpRecoverAny:json
 * @text Any Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ANY' conditions used for MP recovery skills.
 * @default "Target MP < Target MaxMP"
 *
 * @param HpDrain
 * @text HP Drain
 * 
 * @param HpDrainAll:json
 * @text All Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ALL' conditions used for HP drain skills.
 * @default ""
 *
 * @param HpDrainAny:json
 * @text Any Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ANY' conditions used for HP drain skills.
 * @default "User HP < User MaxHP"
 *
 * @param MpDrain
 * @text MP Drain
 * 
 * @param MpDrainAll:json
 * @text All Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ALL' conditions used for MP drain skills.
 * @default "Target MP > 0"
 *
 * @param MpDrainAny:json
 * @text Any Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ANY' conditions used for MP drain skills.
 * @default ""
 *
 * @param AddState
 * @text Add State
 * 
 * @param AddStateAll:json
 * @text All Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ALL' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddStateAny:json
 * @text Any Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ANY' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not State %1\nTarget State %1 Turns <= 1"
 *
 * @param RemoveState
 * @text Remove State
 * 
 * @param RemoveStateAll:json
 * @text All Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ALL' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveStateAny:json
 * @text Any Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ANY' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has State %1"
 *
 * @param AddBuff
 * @text Add Buff
 * 
 * @param AddBuffAll:json
 * @text All Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ALL' conditions used for adding buffs.
 * %1 - Dynamic values (ie param names).
 * @default ""
 *
 * @param AddBuffAny:json
 * @text Any Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ANY' conditions used for adding buffs.
 * %1 - Dynamic values (ie param's).
 * @default "Target Not %1 Max Buff\nTarget %1 Buff Turns <= 1"
 *
 * @param RemoveBuff
 * @text Remove Buff
 * 
 * @param RemoveBuffAll:json
 * @text All Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ALL' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveBuffAny:json
 * @text Any Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ANY' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Buff"
 *
 * @param AddDebuff
 * @text Add Debuff
 * 
 * @param AddDebuffAll:json
 * @text All Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ALL' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddDebuffAny:json
 * @text Any Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ANY' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not %1 Max Debuff\nTarget %1 Debuff Turns <= 1"
 *
 * @param RemoveDebuff
 * @text Remove Debuff
 * 
 * @param RemoveDebuffAll:json
 * @text All Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ALL' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveDebuffAny:json
 * @text Any Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ANY' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Debuff"
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. => TGR Weight Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Weight:
 *
 * @param ElementTgr:eval
 * @text Element Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider elemental rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param ElementTgrRate:num
 * @text Influence Rate
 * @parent ElementTgr:eval
 * @desc This determines the default level of influence elemental
 * rates have on TGR weight.
 * @default 1.25
 *
 * @param EvaTgr:eval
 * @text EVA Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider EVA rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param EvaTgrRate:num
 * @text Influence Rate
 * @parent EvaTgr:eval
 * @desc This determines the default level of influence EVA
 * rates have on TGR weight.
 * @default 1.50
 *
 * @param MevTgr:eval
 * @text MEV Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider MEV rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param MevTgrRate:num
 * @text Influence Rate
 * @parent MevTgr:eval
 * @desc This determines the default level of influence MEV
 * rates have on TGR weight.
 * @default 2.00
 *
 */
//=============================================================================

const _0x3db2fe=_0x2a3a;(function(_0x5ed4fe,_0x463600){const _0x2bc562=_0x2a3a,_0x4271dc=_0x5ed4fe();while(!![]){try{const _0x1eda27=parseInt(_0x2bc562(0x1fa))/0x1*(-parseInt(_0x2bc562(0x260))/0x2)+parseInt(_0x2bc562(0x1f9))/0x3*(parseInt(_0x2bc562(0x2ce))/0x4)+parseInt(_0x2bc562(0x1b7))/0x5+-parseInt(_0x2bc562(0x2ca))/0x6*(-parseInt(_0x2bc562(0x293))/0x7)+-parseInt(_0x2bc562(0x2a3))/0x8*(-parseInt(_0x2bc562(0x2c9))/0x9)+-parseInt(_0x2bc562(0x1c4))/0xa*(parseInt(_0x2bc562(0x287))/0xb)+-parseInt(_0x2bc562(0x1fc))/0xc;if(_0x1eda27===_0x463600)break;else _0x4271dc['push'](_0x4271dc['shift']());}catch(_0x3f9ae8){_0x4271dc['push'](_0x4271dc['shift']());}}}(_0x4e9c,0x7e29a));var label=_0x3db2fe(0x2a6),tier=tier||0x0,dependencies=['VisuMZ_1_BattleCore'],pluginData=$plugins[_0x3db2fe(0x1fb)](function(_0x29c14a){const _0xc780b2=_0x3db2fe;return _0x29c14a[_0xc780b2(0x28f)]&&_0x29c14a[_0xc780b2(0x2c8)][_0xc780b2(0x225)]('['+label+']');})[0x0];function _0x2a3a(_0x3b324c,_0x342467){const _0x4e9ca0=_0x4e9c();return _0x2a3a=function(_0x2a3ab0,_0x38b4b3){_0x2a3ab0=_0x2a3ab0-0x18a;let _0x5a7157=_0x4e9ca0[_0x2a3ab0];return _0x5a7157;},_0x2a3a(_0x3b324c,_0x342467);}VisuMZ[label][_0x3db2fe(0x28b)]=VisuMZ[label][_0x3db2fe(0x28b)]||{},VisuMZ['ConvertParams']=function(_0x28e047,_0x3fd9ec){const _0x69b476=_0x3db2fe;for(const _0x487f14 in _0x3fd9ec){if(_0x487f14[_0x69b476(0x2bc)](/(.*):(.*)/i)){const _0x284a61=String(RegExp['$1']),_0x46ea50=String(RegExp['$2'])[_0x69b476(0x286)]()[_0x69b476(0x2cf)]();let _0x4b79d3,_0xc87652,_0x1b881b;switch(_0x46ea50){case _0x69b476(0x1ba):_0x4b79d3=_0x3fd9ec[_0x487f14]!==''?Number(_0x3fd9ec[_0x487f14]):0x0;break;case _0x69b476(0x19f):_0xc87652=_0x3fd9ec[_0x487f14]!==''?JSON['parse'](_0x3fd9ec[_0x487f14]):[],_0x4b79d3=_0xc87652[_0x69b476(0x2c2)](_0x498792=>Number(_0x498792));break;case _0x69b476(0x2af):_0x4b79d3=_0x3fd9ec[_0x487f14]!==''?eval(_0x3fd9ec[_0x487f14]):null;break;case'ARRAYEVAL':_0xc87652=_0x3fd9ec[_0x487f14]!==''?JSON['parse'](_0x3fd9ec[_0x487f14]):[],_0x4b79d3=_0xc87652[_0x69b476(0x2c2)](_0x3285f0=>eval(_0x3285f0));break;case _0x69b476(0x1df):_0x4b79d3=_0x3fd9ec[_0x487f14]!==''?JSON['parse'](_0x3fd9ec[_0x487f14]):'';break;case _0x69b476(0x21e):_0xc87652=_0x3fd9ec[_0x487f14]!==''?JSON[_0x69b476(0x238)](_0x3fd9ec[_0x487f14]):[],_0x4b79d3=_0xc87652[_0x69b476(0x2c2)](_0x91394=>JSON[_0x69b476(0x238)](_0x91394));break;case _0x69b476(0x27a):_0x4b79d3=_0x3fd9ec[_0x487f14]!==''?new Function(JSON[_0x69b476(0x238)](_0x3fd9ec[_0x487f14])):new Function(_0x69b476(0x21f));break;case'ARRAYFUNC':_0xc87652=_0x3fd9ec[_0x487f14]!==''?JSON[_0x69b476(0x238)](_0x3fd9ec[_0x487f14]):[],_0x4b79d3=_0xc87652[_0x69b476(0x2c2)](_0x28c00a=>new Function(JSON[_0x69b476(0x238)](_0x28c00a)));break;case _0x69b476(0x1cf):_0x4b79d3=_0x3fd9ec[_0x487f14]!==''?String(_0x3fd9ec[_0x487f14]):'';break;case _0x69b476(0x2c7):_0xc87652=_0x3fd9ec[_0x487f14]!==''?JSON['parse'](_0x3fd9ec[_0x487f14]):[],_0x4b79d3=_0xc87652[_0x69b476(0x2c2)](_0x31cb9d=>String(_0x31cb9d));break;case'STRUCT':_0x1b881b=_0x3fd9ec[_0x487f14]!==''?JSON[_0x69b476(0x238)](_0x3fd9ec[_0x487f14]):{},_0x4b79d3=VisuMZ[_0x69b476(0x2c4)]({},_0x1b881b);break;case _0x69b476(0x272):_0xc87652=_0x3fd9ec[_0x487f14]!==''?JSON[_0x69b476(0x238)](_0x3fd9ec[_0x487f14]):[],_0x4b79d3=_0xc87652[_0x69b476(0x2c2)](_0x32b794=>VisuMZ[_0x69b476(0x2c4)]({},JSON[_0x69b476(0x238)](_0x32b794)));break;default:continue;}_0x28e047[_0x284a61]=_0x4b79d3;}}return _0x28e047;},(_0x322a46=>{const _0x430ede=_0x3db2fe,_0x49507a=_0x322a46[_0x430ede(0x24e)];for(const _0x386b6c of dependencies){if(!Imported[_0x386b6c]){alert(_0x430ede(0x208)[_0x430ede(0x2d5)](_0x49507a,_0x386b6c)),SceneManager[_0x430ede(0x1e8)]();break;}}const _0x283f0f=_0x322a46[_0x430ede(0x2c8)];if(_0x283f0f[_0x430ede(0x2bc)](/\[Version[ ](.*?)\]/i)){const _0x1d82eb=Number(RegExp['$1']);_0x1d82eb!==VisuMZ[label][_0x430ede(0x22f)]&&(alert(_0x430ede(0x1ed)[_0x430ede(0x2d5)](_0x49507a,_0x1d82eb)),SceneManager[_0x430ede(0x1e8)]());}if(_0x283f0f[_0x430ede(0x2bc)](/\[Tier[ ](\d+)\]/i)){const _0x16bcba=Number(RegExp['$1']);_0x16bcba<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x49507a,_0x16bcba,tier)),SceneManager[_0x430ede(0x1e8)]()):tier=Math[_0x430ede(0x1b1)](_0x16bcba,tier);}VisuMZ[_0x430ede(0x2c4)](VisuMZ[label][_0x430ede(0x28b)],_0x322a46['parameters']);})(pluginData);function AIManager(){throw new Error('This\x20is\x20a\x20static\x20class');}AIManager[_0x3db2fe(0x2aa)]={'noCondition':/<NO AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'allCondition':/<ALL AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ALL AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'anyCondition':/<ANY AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ANY AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'bypassElementTgr':/<(?:NO|BYPASS) AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE>/i,'bypassEvaTgr':/<(?:NO|BYPASS) AI (?:EVA|EVASION) INFLUENCE>/i,'bypassMevTgr':/<(?:NO|BYPASS) AI (?:MEV|MAGIC EVASION) INFLUENCE>/i,'aiElementTgr':/<AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE: (.*)>/i,'aiEvaTgr':/<AI (?:EVA|EVASION) INFLUENCE: (.*)>/i,'aiMevTgr':/<AI (?:MEV|MAGIC EVASION) INFLUENCE: (.*)>/i,'aiLevel':/<AI LEVEL: (\d+)>/i,'aiRatingVariance':/<AI RATING VARIANCE: (\d+)>/i,'aiTarget':/<AI (?:TARGET|TARGETS):[ ](.*)>/i,'aiStyle':/<AI STYLE:[ ](.*)>/i},AIManager['isConditionalAI']=function(_0x12a301){const _0x2e817c=_0x3db2fe;if(!_0x12a301)return![];return this[_0x2e817c(0x27e)](_0x12a301)[_0x2e817c(0x273)]>0x0||this[_0x2e817c(0x2a7)](_0x12a301)[_0x2e817c(0x273)]>0x0;},AIManager['getAllConditions']=function(_0x336dec){const _0x4f6064=_0x3db2fe;if(_0x336dec[_0x4f6064(0x256)][_0x4f6064(0x2bc)](AIManager[_0x4f6064(0x2aa)]['noCondition']))return[];else return _0x336dec[_0x4f6064(0x256)][_0x4f6064(0x2bc)](AIManager['_regexp'][_0x4f6064(0x242)])?String(RegExp['$1'])[_0x4f6064(0x2bf)](/[\r\n]+/)[_0x4f6064(0x18e)](''):this[_0x4f6064(0x1d9)](_0x336dec);},AIManager[_0x3db2fe(0x2a7)]=function(_0x50d2ea){const _0x13fc51=_0x3db2fe;if(_0x50d2ea[_0x13fc51(0x256)][_0x13fc51(0x2bc)](AIManager['_regexp'][_0x13fc51(0x19c)]))return[];else return _0x50d2ea['note']['match'](AIManager[_0x13fc51(0x2aa)][_0x13fc51(0x250)])?String(RegExp['$1'])['split'](/[\r\n]+/)[_0x13fc51(0x18e)](''):this[_0x13fc51(0x1db)](_0x50d2ea);},AIManager['getDefaultAllConditions']=function(_0x57b445){const _0x3e8c1d=_0x3db2fe;if(!VisuMZ['BattleAI'][_0x3e8c1d(0x28b)]['Default'][_0x3e8c1d(0x1cc)])return[];if(_0x57b445[_0x3e8c1d(0x256)][_0x3e8c1d(0x2bc)](AIManager[_0x3e8c1d(0x2aa)][_0x3e8c1d(0x250)]))return[];return this['makeDefaultConditions'](_0x57b445,_0x3e8c1d(0x251));},AIManager['getDefaultAnyConditions']=function(_0x53d86f){const _0x5192d0=_0x3db2fe;if(!VisuMZ[_0x5192d0(0x2a6)][_0x5192d0(0x28b)]['Default'][_0x5192d0(0x20c)])return[];if(_0x53d86f[_0x5192d0(0x256)]['match'](AIManager[_0x5192d0(0x2aa)]['allCondition']))return[];return this[_0x5192d0(0x25d)](_0x53d86f,_0x5192d0(0x227));},AIManager['makeDefaultConditions']=function(_0x1cbd83,_0xc5a8c6){const _0x3803da=_0x3db2fe;if(!_0x1cbd83)return[];const _0x1703f9=VisuMZ[_0x3803da(0x2a6)]['Settings'][_0x3803da(0x1d6)],_0x47afe9=['MAXHP',_0x3803da(0x1f5),'ATK',_0x3803da(0x210),_0x3803da(0x22b),'MDF',_0x3803da(0x284),_0x3803da(0x257)],_0xbda4fe=_0x1cbd83['damage'][_0x3803da(0x234)],_0x15ec0e=_0x1cbd83[_0x3803da(0x29f)];let _0xe7b1eb=[],_0x5d8d5c='',_0x1e3cef='';switch(_0xbda4fe){case 0x1:_0x5d8d5c='HpDamage%1'[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c],_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)](''));break;case 0x2:_0x5d8d5c='MpDamage%1'[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c],_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)](''));break;case 0x3:_0x5d8d5c='HpRecover%1'[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c],_0xe7b1eb=_0xe7b1eb['concat'](_0x1e3cef['split'](/[\r\n]+/)['remove'](''));break;case 0x4:_0x5d8d5c=_0x3803da(0x18c)[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c],_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)](''));break;case 0x5:_0x5d8d5c=_0x3803da(0x24a)[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c],_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef['split'](/[\r\n]+/)[_0x3803da(0x18e)](''));break;case 0x6:_0x5d8d5c=_0x3803da(0x197)['format'](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c],_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)](''));break;}for(const _0x3c7d90 of _0x15ec0e){if(!_0x3c7d90)continue;switch(_0x3c7d90[_0x3803da(0x1ab)]){case Game_Action[_0x3803da(0x1de)]:if(_0x3c7d90['value1']>0x0||_0x3c7d90['value2']>0x0)_0x5d8d5c=_0x3803da(0x1d4)[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c],_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)](''));else(_0x3c7d90['value1']<0x0||_0x3c7d90['value2']<0x0)&&(_0x5d8d5c='HpDamage%1'[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c],_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)]('')));break;case Game_Action[_0x3803da(0x1e7)]:if(_0x3c7d90['value1']>0x0||_0x3c7d90['value2']>0x0)_0x5d8d5c=_0x3803da(0x18c)[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c],_0xe7b1eb=_0xe7b1eb['concat'](_0x1e3cef['split'](/[\r\n]+/)[_0x3803da(0x18e)](''));else(_0x3c7d90[_0x3803da(0x19a)]<0x0||_0x3c7d90[_0x3803da(0x27b)]<0x0)&&(_0x5d8d5c='MpDamage%1'[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c],_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)]('')));break;case Game_Action[_0x3803da(0x1ac)]:if(_0x3c7d90[_0x3803da(0x25a)]===0x0)continue;_0x5d8d5c=_0x3803da(0x2a5)[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c][_0x3803da(0x2d5)](_0x3c7d90[_0x3803da(0x25a)]),_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef['split'](/[\r\n]+/)[_0x3803da(0x18e)](''));break;case Game_Action[_0x3803da(0x22d)]:_0x5d8d5c=_0x3803da(0x25b)['format'](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c][_0x3803da(0x2d5)](_0x3c7d90[_0x3803da(0x25a)]),_0xe7b1eb=_0xe7b1eb['concat'](_0x1e3cef['split'](/[\r\n]+/)['remove'](''));break;case Game_Action[_0x3803da(0x2a8)]:_0x5d8d5c=_0x3803da(0x191)[_0x3803da(0x2d5)](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c][_0x3803da(0x2d5)](_0x47afe9[_0x3c7d90[_0x3803da(0x25a)]]),_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)](''));break;case Game_Action['EFFECT_ADD_DEBUFF']:_0x5d8d5c=_0x3803da(0x276)['format'](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c][_0x3803da(0x2d5)](_0x47afe9[_0x3c7d90[_0x3803da(0x25a)]]),_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)](''));break;case Game_Action[_0x3803da(0x28c)]:_0x5d8d5c=_0x3803da(0x1e5)['format'](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c][_0x3803da(0x2d5)](_0x47afe9[_0x3c7d90[_0x3803da(0x25a)]]),_0xe7b1eb=_0xe7b1eb[_0x3803da(0x2cd)](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)](''));break;case Game_Action[_0x3803da(0x27d)]:_0x5d8d5c=_0x3803da(0x25f)['format'](_0xc5a8c6),_0x1e3cef=_0x1703f9[_0x5d8d5c]['format'](_0x47afe9[_0x3c7d90[_0x3803da(0x25a)]]),_0xe7b1eb=_0xe7b1eb['concat'](_0x1e3cef[_0x3803da(0x2bf)](/[\r\n]+/)[_0x3803da(0x18e)](''));break;}}return _0xe7b1eb;},AIManager[_0x3db2fe(0x1d7)]=function(_0x494bab,_0x5ed4c7){const _0x569254=_0x3db2fe;this[_0x569254(0x20a)]=this['makeValidTargets'](_0x494bab,_0x5ed4c7);},AIManager['clearForcedTargets']=function(){const _0x15666e=_0x3db2fe;this[_0x15666e(0x20a)]=[];},AIManager[_0x3db2fe(0x21b)]=function(){const _0x224123=_0x3db2fe;return this['_forceValidTargets']=this['_forceValidTargets']||[],this[_0x224123(0x20a)];},AIManager[_0x3db2fe(0x23b)]=function(){const _0x192407=_0x3db2fe;return this[_0x192407(0x21b)]()[_0x192407(0x273)]>0x0;},AIManager[_0x3db2fe(0x1c2)]=function(_0x60663,_0x17bd58){const _0x3025ed=_0x3db2fe;if(!_0x60663)return![];if(!_0x17bd58)return![];if(!DataManager['isSkill'](_0x17bd58))return;return this[_0x3025ed(0x1d8)](_0x17bd58)?this[_0x3025ed(0x2d6)](_0x60663,_0x17bd58)[_0x3025ed(0x273)]>=0x1:!![];},AIManager[_0x3db2fe(0x2d6)]=function(_0xc5a3ec,_0x48aa6f){const _0xbf42a3=_0x3db2fe;let _0xebfe93=[];if(this[_0xbf42a3(0x1d8)](_0x48aa6f)){const _0x36254c=this[_0xbf42a3(0x27e)](_0x48aa6f),_0x1211f4=this[_0xbf42a3(0x2a7)](_0x48aa6f),_0x2bc888=new Game_Action(_0xc5a3ec);_0x2bc888['setSkill'](_0x48aa6f['id']);let _0x3f7f28=AIManager[_0xbf42a3(0x24d)](_0xc5a3ec,_0x2bc888);this[_0xbf42a3(0x29a)]=Math[_0xbf42a3(0x1b9)](),_0xebfe93=_0x3f7f28[_0xbf42a3(0x1fb)](_0x3a9eae=>this[_0xbf42a3(0x22a)](_0xc5a3ec,_0x3a9eae,_0x48aa6f,_0x36254c,_0x1211f4));}return _0xebfe93;},AIManager[_0x3db2fe(0x24d)]=function(_0xfddd51,_0xe801dc){const _0x2986f8=_0x3db2fe;let _0x3f1013=[];if(Imported[_0x2986f8(0x281)]&&_0xe801dc['isAggroAffected']()){const _0x35e233=_0xe801dc[_0x2986f8(0x2a2)]()?_0xfddd51[_0x2986f8(0x1e6)]():_0xfddd51[_0x2986f8(0x21c)]();_0x3f1013=[_0x35e233[_0x2986f8(0x24b)]()];}else{if(_0xe801dc[_0x2986f8(0x1f3)]())_0x3f1013=$gameParty[_0x2986f8(0x1fd)]()['concat']($gameTroop[_0x2986f8(0x1fd)]());else{if(_0xe801dc['isForAnyone']&&_0xe801dc[_0x2986f8(0x190)]()){const _0x1148be=_0xe801dc['item']()['scope'];if(_0xe801dc[_0x2986f8(0x1a4)]())_0x3f1013=_0xfddd51[_0x2986f8(0x1e6)]()['aliveMembers']();else _0xe801dc[_0x2986f8(0x298)]()&&(_0x3f1013=_0xfddd51[_0x2986f8(0x21c)]()[_0x2986f8(0x1fd)]());}else{if(_0xe801dc[_0x2986f8(0x2a2)]())_0x3f1013=_0xfddd51['opponentsUnit']()['aliveMembers']();else{if(_0xe801dc['isForDeadFriend']())_0x3f1013=_0xfddd51[_0x2986f8(0x21c)]()[_0x2986f8(0x1ae)]();else _0xe801dc['isForFriend']()&&!_0xe801dc[_0x2986f8(0x2c1)]()&&(_0x3f1013=_0xfddd51[_0x2986f8(0x21c)]()['aliveMembers']());}}}}return _0xe801dc[_0x2986f8(0x2b4)]&&_0xe801dc['isForNotUser']()&&_0x3f1013[_0x2986f8(0x18e)](_0xfddd51),_0x3f1013;},AIManager['doesTargetMeetAIConditions']=function(_0x1a74ef,_0x1ee38,_0x429995,_0x4534fb,_0x3fe783){const _0x20b016=_0x3db2fe;return this[_0x20b016(0x211)](_0x1a74ef,_0x1ee38,_0x429995,_0x4534fb)&&this[_0x20b016(0x27c)](_0x1a74ef,_0x1ee38,_0x429995,_0x3fe783);},AIManager[_0x3db2fe(0x211)]=function(_0x4a480d,_0x4459b4,_0x56dea8,_0x44e560){const _0x4bce23=_0x3db2fe;if(_0x44e560[_0x4bce23(0x273)]<=0x0)return!![];for(const _0x19d5f3 of _0x44e560){if(!_0x19d5f3)continue;if(_0x19d5f3[_0x4bce23(0x273)]<=0x0)continue;if(!this[_0x4bce23(0x239)](_0x4a480d))return!![];if(!this[_0x4bce23(0x195)](_0x4a480d,_0x4459b4,_0x56dea8,_0x19d5f3))return![];}return!![];},AIManager[_0x3db2fe(0x27c)]=function(_0x52b07c,_0x3c59dd,_0x9a09f0,_0x3b9904){const _0x54a37d=_0x3db2fe;if(_0x3b9904[_0x54a37d(0x273)]<=0x0)return!![];for(const _0x77cb48 of _0x3b9904){if(!_0x77cb48)continue;if(_0x77cb48[_0x54a37d(0x273)]<=0x0)continue;if(!this[_0x54a37d(0x239)](_0x52b07c))return!![];if(this[_0x54a37d(0x195)](_0x52b07c,_0x3c59dd,_0x9a09f0,_0x77cb48))return!![];}return![];},AIManager[_0x3db2fe(0x239)]=function(_0x52b7a3){const _0x203a16=_0x3db2fe,_0x565bcd=_0x52b7a3[_0x203a16(0x241)]();return Math[_0x203a16(0x1d5)](0x64)<_0x565bcd;},AIManager[_0x3db2fe(0x195)]=function(_0x38a476,_0x1051e6,_0x466c0a,_0x23c732){const _0x4a1adb=_0x3db2fe,_0x89dd05=[_0x4a1adb(0x18f),_0x4a1adb(0x1f5),'ATK','DEF',_0x4a1adb(0x22b),_0x4a1adb(0x263),_0x4a1adb(0x284),_0x4a1adb(0x257)];if(_0x23c732['toUpperCase']()[_0x4a1adb(0x2cf)]()===_0x4a1adb(0x262))return!![];const _0x22762=_0x38a476;if(!VisuMZ['BattleAI'][_0x4a1adb(0x28b)][_0x4a1adb(0x267)][_0x4a1adb(0x254)]){if(_0x23c732[_0x4a1adb(0x2bc)](/turnCount\(\)/i)){if($gameTemp[_0x4a1adb(0x28a)]()&&!this['_alertTurnCount']){let _0x9ddaa6=_0x4a1adb(0x1ec);_0x9ddaa6+=_0x23c732+'\x0a\x0a',_0x9ddaa6+=_0x4a1adb(0x26f),_0x9ddaa6+='For\x20more\x20information,\x20view\x20the\x20help\x20file.',alert(_0x9ddaa6),this[_0x4a1adb(0x18a)]=!![];}return![];}}if(_0x23c732[_0x4a1adb(0x2bc)](/(.*) (\>=|\>|===|!==|\<|\<=) (.*)/i)){const _0x1ee90f=[String(RegExp['$1']),String(RegExp['$2']),String(RegExp['$3'])],_0x55ab7a=this['determineLineValue'](_0x38a476,_0x1051e6,_0x466c0a,_0x1ee90f[0x0]),_0x5d8d47=_0x1ee90f[0x1],_0x17e50c=this['determineLineValue'](_0x38a476,_0x1051e6,_0x466c0a,_0x1ee90f[0x2]);window[_0x4a1adb(0x26c)]=window['a']=window['b']=undefined;const _0x1ee2c9='%1\x20%2\x20%3'['format'](_0x55ab7a,_0x5d8d47,_0x17e50c);try{return eval(_0x1ee2c9);}catch(_0x3405eb){return $gameTemp[_0x4a1adb(0x28a)]()&&(console[_0x4a1adb(0x218)](_0x4a1adb(0x280)[_0x4a1adb(0x2d5)](_0x23c732)),console[_0x4a1adb(0x218)](_0x3405eb)),!![];}}else{if(_0x23c732[_0x4a1adb(0x2bc)](/(\d+\.?\d*)([%％]) CHANCE/i)){const _0x39a26c=Number(RegExp['$1'])*0.01;return this[_0x4a1adb(0x29a)]<_0x39a26c;}else{if(_0x23c732[_0x4a1adb(0x2bc)](/SWITCH (\d+) (ON|OFF|TRUE|FALSE)/i)){const _0x271ac1=Number(RegExp['$1']),_0x40f8ba=String(RegExp['$2'])['toLowerCase'](),_0x4a7cfb=_0x40f8ba[_0x4a1adb(0x2bc)](/ON|TRUE/i);return $gameSwitches['value'](_0x271ac1)===_0x4a7cfb;}else{if(_0x23c732['match'](/(.*) IS ACTOR/i)){const _0x3d1b9e=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x22762:_0x1051e6;return _0x3d1b9e[_0x4a1adb(0x216)]();}else{if(_0x23c732[_0x4a1adb(0x2bc)](/(.*) IS ENEMY/i)){const _0x5e3476=String(RegExp['$1'])[_0x4a1adb(0x2bc)](/(?:USER|SUBJECT)/i)?_0x22762:_0x1051e6;return _0x5e3476['isEnemy']();}else{if(_0x23c732[_0x4a1adb(0x2bc)](/(.*) HAS STATE (\d+)/i)){const _0x3ba9f7=$dataStates[Number(RegExp['$2'])],_0x2a1f5e=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x22762:_0x1051e6;return _0x2a1f5e['states']()[_0x4a1adb(0x225)](_0x3ba9f7);}else{if(_0x23c732[_0x4a1adb(0x2bc)](/(.*) HAS STATE (.*)/i)){const _0x5e9560=$dataStates[DataManager[_0x4a1adb(0x1b0)](RegExp['$2'])],_0x364c97=String(RegExp['$1'])[_0x4a1adb(0x2bc)](/(?:USER|SUBJECT)/i)?_0x22762:_0x1051e6;return _0x364c97[_0x4a1adb(0x228)]()['includes'](_0x5e9560);}else{if(_0x23c732[_0x4a1adb(0x2bc)](/(.*) NOT STATE (\d+)/i)){const _0x341ff8=$dataStates[Number(RegExp['$2'])],_0x36a9dc=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x22762:_0x1051e6;return!_0x36a9dc[_0x4a1adb(0x228)]()[_0x4a1adb(0x225)](_0x341ff8);}else{if(_0x23c732[_0x4a1adb(0x2bc)](/(.*) NOT STATE (.*)/i)){const _0x25b53b=$dataStates[DataManager[_0x4a1adb(0x1b0)](RegExp['$2'])],_0xb0c845=String(RegExp['$1'])[_0x4a1adb(0x2bc)](/(?:USER|SUBJECT)/i)?_0x22762:_0x1051e6;return!_0xb0c845[_0x4a1adb(0x228)]()[_0x4a1adb(0x225)](_0x25b53b);}else{if(_0x23c732[_0x4a1adb(0x2bc)](/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)){const _0x8fafe1=_0x89dd05[_0x4a1adb(0x2b6)](String(RegExp['$2'])[_0x4a1adb(0x286)]()['trim']()),_0x4aca45=String(RegExp['$3'])[_0x4a1adb(0x236)]()[_0x4a1adb(0x2cf)](),_0x270ad8=String(RegExp['$1'])[_0x4a1adb(0x2bc)](/(?:USER|SUBJECT)/i)?_0x22762:_0x1051e6,_0x77c18d='is%1Affected'[_0x4a1adb(0x2d5)](_0x4aca45[_0x4a1adb(0x1aa)](0x0)[_0x4a1adb(0x286)]()+_0x4aca45[_0x4a1adb(0x217)](0x1));return _0x270ad8[_0x77c18d](_0x8fafe1);}else{if(_0x23c732['match'](/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)){const _0x3c1c08=_0x89dd05[_0x4a1adb(0x2b6)](String(RegExp['$2'])['toUpperCase']()[_0x4a1adb(0x2cf)]()),_0x43c6bd=String(RegExp['$3'])[_0x4a1adb(0x236)]()[_0x4a1adb(0x2cf)](),_0x28971a=String(RegExp['$1'])[_0x4a1adb(0x2bc)](/(?:USER|SUBJECT)/i)?_0x22762:_0x1051e6,_0x4f4b99=_0x4a1adb(0x1b3)[_0x4a1adb(0x2d5)](_0x43c6bd[_0x4a1adb(0x1aa)](0x0)[_0x4a1adb(0x286)]()+_0x43c6bd[_0x4a1adb(0x217)](0x1));return _0x28971a[_0x4f4b99](_0x3c1c08);}else{if(_0x23c732[_0x4a1adb(0x2bc)](/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)){const _0xc49ee7=_0x89dd05[_0x4a1adb(0x2b6)](String(RegExp['$2'])[_0x4a1adb(0x286)]()[_0x4a1adb(0x2cf)]()),_0x146f82=String(RegExp['$3'])[_0x4a1adb(0x236)]()[_0x4a1adb(0x2cf)](),_0x56fb0b=String(RegExp['$1'])['match'](/(?:USER|SUBJECT)/i)?_0x22762:_0x1051e6,_0x12b012=_0x4a1adb(0x201)[_0x4a1adb(0x2d5)](_0x146f82[_0x4a1adb(0x1aa)](0x0)['toUpperCase']()+_0x146f82[_0x4a1adb(0x217)](0x1));return!_0x56fb0b[_0x12b012](_0xc49ee7);}else{if(_0x23c732[_0x4a1adb(0x2bc)](/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)){const _0x5d1940=_0x89dd05[_0x4a1adb(0x2b6)](String(RegExp['$2'])[_0x4a1adb(0x286)]()['trim']()),_0x3feb3f=String(RegExp['$3'])['toLowerCase']()[_0x4a1adb(0x2cf)](),_0x3ee347=String(RegExp['$1'])[_0x4a1adb(0x2bc)](/(?:USER|SUBJECT)/i)?_0x22762:_0x1051e6,_0x2f927a=_0x4a1adb(0x1b3)[_0x4a1adb(0x2d5)](_0x3feb3f['charAt'](0x0)[_0x4a1adb(0x286)]()+_0x3feb3f[_0x4a1adb(0x217)](0x1));return!_0x3ee347[_0x2f927a](_0x5d1940);}}}}}}}}}}}}}return!![];},AIManager[_0x3db2fe(0x20f)]=function(_0x2679d5,_0xddef74,_0x586bc7,_0x3d9ca8){const _0x3771cd=_0x3db2fe,_0x584627=[_0x3771cd(0x18f),_0x3771cd(0x1f5),_0x3771cd(0x1d2),_0x3771cd(0x210),_0x3771cd(0x22b),_0x3771cd(0x263),_0x3771cd(0x284),_0x3771cd(0x257)];window['user']=_0x2679d5,window['a']=user,window['b']=_0xddef74;const _0x167e22=_0x3d9ca8,_0x91ab1a=user[_0x3771cd(0x1e6)]();let _0x3e6495=_0x3d9ca8[_0x3771cd(0x2bc)](/(?:USER|SUBJECT)/i)?user:_0xddef74;_0x3d9ca8=_0x3d9ca8[_0x3771cd(0x1d0)](/\b(\d+)([%％])/gi,(_0x99a0bd,_0x2f3206)=>Number(_0x2f3206)*0.01);if(_0x3d9ca8[_0x3771cd(0x2bc)](/(?:VAR|VARIABLE) (\d+)/i))return $gameVariables[_0x3771cd(0x2b0)](Number(RegExp['$1']));if(_0x3d9ca8['match'](/TEAM ALIVE MEMBERS/i))return _0x3e6495[_0x3771cd(0x21c)]()[_0x3771cd(0x1fd)]()[_0x3771cd(0x273)];if(_0x3d9ca8[_0x3771cd(0x2bc)](/TEAM DEAD MEMBERS/i))return _0x3e6495[_0x3771cd(0x21c)]()[_0x3771cd(0x1ae)]()['length'];if(_0x3d9ca8['match'](/ELEMENT (\d+) RATE/i)){const _0x57a3bd=Number(RegExp['$1']);return this[_0x3771cd(0x1b6)](_0x2679d5,_0xddef74,_0x3e6495,_0x57a3bd);}else{if(_0x3d9ca8[_0x3771cd(0x2bc)](/ELEMENT (.*) RATE/i)){const _0x2fc6c1=DataManager[_0x3771cd(0x266)](String(RegExp['$1']));return this[_0x3771cd(0x1b6)](_0x2679d5,_0xddef74,_0x3e6495,_0x2fc6c1);}else{if(_0x3d9ca8[_0x3771cd(0x2bc)](/(.*) ELEMENT RATE/i)){const _0x36c8c4=DataManager['getElementIdWithName'](String(RegExp['$1']));return this[_0x3771cd(0x1b6)](_0x2679d5,_0xddef74,_0x3e6495,_0x36c8c4);}}}if(_0x3d9ca8[_0x3771cd(0x2bc)](/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:LEVEL|STACK|STACKS)/i)){const _0x2ca2cd=_0x584627[_0x3771cd(0x2b6)](String(RegExp['$1'])[_0x3771cd(0x286)]()[_0x3771cd(0x2cf)]()),_0x5a4cc6=String(RegExp['$2'])[_0x3771cd(0x236)]()[_0x3771cd(0x2cf)]();return _0x3e6495[_0x3771cd(0x23e)](_0x2ca2cd)*(_0x5a4cc6===_0x3771cd(0x23e)?0x1:-0x1);}if(_0x3d9ca8[_0x3771cd(0x2bc)](/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:TURN|TURNS)/i)){const _0x47d14b=_0x584627[_0x3771cd(0x2b6)](String(RegExp['$1'])[_0x3771cd(0x286)]()[_0x3771cd(0x2cf)]()),_0x2aa745=String(RegExp['$2'])[_0x3771cd(0x236)]()[_0x3771cd(0x2cf)]();if(_0x2aa745===_0x3771cd(0x23e)&&_0x3e6495['isBuffAffected'](_0x47d14b))return _0x3e6495[_0x3771cd(0x1bd)][_0x47d14b];else{if(_0x2aa745==='debuff'&&_0x3e6495['isDebuffAffected'](_0x47d14b))return _0x3e6495[_0x3771cd(0x1bd)][_0x47d14b];}return 0x0;}if(_0x3d9ca8[_0x3771cd(0x2bc)](/STATE (\d+) (?:TURN|TURNS)/i)){const _0x2c86e0=Number(RegExp['$1']);if(_0x3e6495[_0x3771cd(0x229)](_0x2c86e0)){const _0x3a8669=$dataStates[_0x2c86e0];return _0x3a8669&&_0x3a8669['autoRemovalTiming']===0x0?Number[_0x3771cd(0x2b1)]:_0x3e6495[_0x3771cd(0x249)][_0x2c86e0]||0x0;}else return _0x3e6495[_0x3771cd(0x228)]()[_0x3771cd(0x225)]($dataStates[_0x2c86e0])?Number[_0x3771cd(0x2b1)]:0x0;}else{if(_0x3d9ca8['match'](/STATE (.*) (?:TURN|TURNS)/i)){const _0x412f8a=DataManager['getStateIdWithName'](RegExp['$1']);if(_0x3e6495[_0x3771cd(0x229)](_0x412f8a)){const _0x155d76=$dataStates[_0x412f8a];return _0x155d76&&_0x155d76['autoRemovalTiming']===0x0?Number['MAX_SAFE_INTEGER']:_0x3e6495[_0x3771cd(0x249)][_0x412f8a]||0x0;}else return _0x3e6495[_0x3771cd(0x228)]()['includes']($dataStates[_0x412f8a])?Number[_0x3771cd(0x2b1)]:0x0;}}if(_0x3d9ca8[_0x3771cd(0x2bc)](/\bHP([%％])/i))return _0x3e6495[_0x3771cd(0x282)]();else{if(_0x3d9ca8[_0x3771cd(0x2bc)](/\bMP([%％])/i))return _0x3e6495[_0x3771cd(0x194)]();else{if(_0x3d9ca8[_0x3771cd(0x2bc)](/\bTP([%％])/i))return _0x3e6495[_0x3771cd(0x23d)]();else{if(_0x3d9ca8[_0x3771cd(0x2bc)](/\b(?:MAXHP|MAX HP|MHP)\b/i))return _0x3e6495[_0x3771cd(0x295)];else{if(_0x3d9ca8['match'](/\b(?:MAXMP|MAX MP|MMP)\b/i))return _0x3e6495[_0x3771cd(0x1bf)];else{if(_0x3d9ca8[_0x3771cd(0x2bc)](/\b(?:MAXTP|MAX TP|MTP)\b/i))return _0x3e6495['maxTp']();}}}}}if(_0x3d9ca8['match'](/\b(LEVEL|HP|MP|TP|ATK|DEF|MAT|MDF|AGI|LUK)\b/i))return _0x3e6495[String(RegExp['$1'])[_0x3771cd(0x236)]()[_0x3771cd(0x2cf)]()];try{return eval(_0x3d9ca8);}catch(_0xcdc04a){return $gameTemp[_0x3771cd(0x28a)]()&&(console['log']('AI\x20Manager\x20could\x20not\x20determine\x20this\x20value:\x20%1'[_0x3771cd(0x2d5)](_0x167e22)),console[_0x3771cd(0x218)](_0xcdc04a)),0x0;}},AIManager[_0x3db2fe(0x1b6)]=function(_0x523a6e,_0x3bfbb3,_0x524e3c,_0x5a75f6){const _0x153d9d=_0x3db2fe;if(_0x523a6e[_0x153d9d(0x216)]()===_0x524e3c['isActor']())return _0x524e3c[_0x153d9d(0x1b5)](_0x5a75f6);else return _0x524e3c['opponentsUnit']()[_0x153d9d(0x279)](_0x5a75f6,_0x524e3c)?_0x524e3c[_0x153d9d(0x1b5)](_0x5a75f6):VisuMZ[_0x153d9d(0x2a6)][_0x153d9d(0x28b)][_0x153d9d(0x267)][_0x153d9d(0x29b)];},AIManager[_0x3db2fe(0x215)]=function(_0xf7cbfb,_0x5cc853){const _0x5174ab=_0x3db2fe;if(!_0x5cc853)return;if(!_0x5cc853[_0x5174ab(0x256)][_0x5174ab(0x2bc)](AIManager[_0x5174ab(0x2aa)][_0x5174ab(0x233)]))return;const _0x484e8e=String(RegExp['$1'])[_0x5174ab(0x286)]()[_0x5174ab(0x2cf)]();let _0x2abf71=this[_0x5174ab(0x28d)](_0xf7cbfb,_0x484e8e);_0x2abf71&&(this['_forceValidTargets']=[_0x2abf71]);},AIManager[_0x3db2fe(0x28d)]=function(_0x26cf54,_0x419485){const _0x3eef8e=_0x3db2fe,_0x1184ba=['MAXHP',_0x3eef8e(0x1f5),_0x3eef8e(0x1d2),_0x3eef8e(0x210),'MAT',_0x3eef8e(0x263),'AGI',_0x3eef8e(0x257)],_0x382ddf=[_0x3eef8e(0x253),_0x3eef8e(0x1d1),_0x3eef8e(0x2c3),'CEV','MEV',_0x3eef8e(0x294),_0x3eef8e(0x2c5),'HRG',_0x3eef8e(0x299),_0x3eef8e(0x291)],_0x3ccf65=['TGR',_0x3eef8e(0x27f),'REC','PHA',_0x3eef8e(0x269),_0x3eef8e(0x2a0),_0x3eef8e(0x1e3),_0x3eef8e(0x1c8),'FDR',_0x3eef8e(0x1f6)];let _0x147cd6=null;if(_0x419485===_0x3eef8e(0x2d0)){if(this[_0x3eef8e(0x20a)]['includes'](_0x26cf54))return _0x26cf54;}else{if(_0x419485===_0x3eef8e(0x259))return this['_forceValidTargets'][0x0];else{if(_0x419485==='LAST')return this[_0x3eef8e(0x20a)][this[_0x3eef8e(0x20a)]['length']-0x1];else{if(_0x419485[_0x3eef8e(0x2bc)](/(HIGHEST|LOWEST)[ ](.*)/i)){const _0x13946a=String(RegExp['$1'])['toUpperCase']()[_0x3eef8e(0x2cf)]()===_0x3eef8e(0x214),_0x576e63=!_0x13946a,_0x160bf9=String(RegExp['$2'])[_0x3eef8e(0x286)]()[_0x3eef8e(0x2cf)]();if(_0x1184ba[_0x3eef8e(0x225)](_0x160bf9)){const _0x3fb064=_0x1184ba['indexOf'](_0x160bf9);_0x147cd6=this['_forceValidTargets'][0x0];for(const _0x20b725 of this[_0x3eef8e(0x20a)]){if(_0x13946a&&_0x20b725[_0x3eef8e(0x278)](_0x3fb064)>_0x147cd6[_0x3eef8e(0x278)](_0x3fb064))_0x147cd6=_0x20b725;if(_0x576e63&&_0x20b725[_0x3eef8e(0x278)](_0x3fb064)<_0x147cd6[_0x3eef8e(0x278)](_0x3fb064))_0x147cd6=_0x20b725;}return _0x147cd6;}if(_0x382ddf['includes'](_0x160bf9)){const _0x23b238=_0x382ddf[_0x3eef8e(0x2b6)](_0x160bf9);_0x147cd6=this[_0x3eef8e(0x20a)][0x0];for(const _0x207086 of this[_0x3eef8e(0x20a)]){if(_0x13946a&&_0x207086['xparam'](_0x23b238)>_0x147cd6['xparam'](_0x23b238))_0x147cd6=_0x207086;if(_0x576e63&&_0x207086[_0x3eef8e(0x268)](_0x23b238)<_0x147cd6[_0x3eef8e(0x268)](_0x23b238))_0x147cd6=_0x207086;}return _0x147cd6;}if(_0x3ccf65['includes'](_0x160bf9)){const _0x253ae3=_0x3ccf65[_0x3eef8e(0x2b6)](_0x160bf9);_0x147cd6=this[_0x3eef8e(0x20a)][0x0];for(const _0xb87dca of this[_0x3eef8e(0x20a)]){if(_0x13946a&&_0xb87dca[_0x3eef8e(0x1cb)](_0x253ae3)>_0x147cd6[_0x3eef8e(0x1cb)](_0x253ae3))_0x147cd6=_0xb87dca;if(_0x576e63&&_0xb87dca[_0x3eef8e(0x1cb)](_0x253ae3)<_0x147cd6[_0x3eef8e(0x1cb)](_0x253ae3))_0x147cd6=_0xb87dca;}return _0x147cd6;}if(_0x160bf9==='HP'){_0x147cd6=this[_0x3eef8e(0x20a)][0x0];for(const _0x17ff86 of this[_0x3eef8e(0x20a)]){if(_0x13946a&&_0x17ff86['hp']>_0x147cd6['hp'])_0x147cd6=_0x17ff86;if(_0x576e63&&_0x17ff86['hp']<_0x147cd6['hp'])_0x147cd6=_0x17ff86;}return _0x147cd6;}if(_0x160bf9==='HP%'){_0x147cd6=this[_0x3eef8e(0x20a)][0x0];for(const _0x52ff1f of this[_0x3eef8e(0x20a)]){if(_0x13946a&&_0x52ff1f[_0x3eef8e(0x282)]()>_0x147cd6[_0x3eef8e(0x282)]())_0x147cd6=_0x52ff1f;if(_0x576e63&&_0x52ff1f[_0x3eef8e(0x282)]()<_0x147cd6[_0x3eef8e(0x282)]())_0x147cd6=_0x52ff1f;}return _0x147cd6;}if(_0x160bf9==='MP'){_0x147cd6=this['_forceValidTargets'][0x0];for(const _0x2c6294 of this['_forceValidTargets']){if(_0x13946a&&_0x2c6294['mp']>_0x147cd6['mp'])_0x147cd6=_0x2c6294;if(_0x576e63&&_0x2c6294['mp']<_0x147cd6['mp'])_0x147cd6=_0x2c6294;}return _0x147cd6;}if(_0x160bf9===_0x3eef8e(0x2ba)){_0x147cd6=this[_0x3eef8e(0x20a)][0x0];for(const _0x2d48f6 of this['_forceValidTargets']){if(_0x13946a&&_0x2d48f6['mpRate']()>_0x147cd6[_0x3eef8e(0x194)]())_0x147cd6=_0x2d48f6;if(_0x576e63&&_0x2d48f6['mpRate']()<_0x147cd6['mpRate']())_0x147cd6=_0x2d48f6;}return _0x147cd6;}if(_0x160bf9==='TP'){_0x147cd6=this[_0x3eef8e(0x20a)][0x0];for(const _0x4d63e4 of this[_0x3eef8e(0x20a)]){if(_0x13946a&&_0x4d63e4['tp']>_0x147cd6['tp'])_0x147cd6=_0x4d63e4;if(_0x576e63&&_0x4d63e4['tp']<_0x147cd6['tp'])_0x147cd6=_0x4d63e4;}return _0x147cd6;}if(_0x160bf9===_0x3eef8e(0x243)){_0x147cd6=this[_0x3eef8e(0x20a)][0x0];for(const _0x3c6edf of this[_0x3eef8e(0x20a)]){if(_0x13946a&&_0x3c6edf[_0x3eef8e(0x23d)]()>_0x147cd6['tpRate']())_0x147cd6=_0x3c6edf;if(_0x576e63&&_0x3c6edf[_0x3eef8e(0x23d)]()<_0x147cd6[_0x3eef8e(0x23d)]())_0x147cd6=_0x3c6edf;}return _0x147cd6;}if(_0x160bf9==='MAXTP'){_0x147cd6=this['_forceValidTargets'][0x0];for(const _0x35953e of this[_0x3eef8e(0x20a)]){if(_0x13946a&&_0x35953e[_0x3eef8e(0x1c0)]()>_0x147cd6[_0x3eef8e(0x1c0)]())_0x147cd6=_0x35953e;if(_0x576e63&&_0x35953e[_0x3eef8e(0x1c0)]()<_0x147cd6[_0x3eef8e(0x1c0)]())_0x147cd6=_0x35953e;}return _0x147cd6;}if(_0x160bf9===_0x3eef8e(0x1e0)){_0x147cd6=this[_0x3eef8e(0x20a)][0x0];for(const _0x267a17 of this[_0x3eef8e(0x20a)]){if(_0x13946a&&(_0x267a17[_0x3eef8e(0x24c)]||0x0)>(_0x147cd6['level']||0x0))_0x147cd6=_0x267a17;if(_0x576e63&&(_0x267a17[_0x3eef8e(0x24c)]||0x0)<(_0x147cd6['level']||0x0))_0x147cd6=_0x267a17;}return _0x147cd6;}if(_0x160bf9===_0x3eef8e(0x2cb)&&Imported[_0x3eef8e(0x1a1)]){_0x147cd6=this[_0x3eef8e(0x20a)][0x0];for(const _0x4e697f of this[_0x3eef8e(0x20a)]){if(_0x13946a&&_0x4e697f[_0x3eef8e(0x228)]()[_0x3eef8e(0x273)]>_0x147cd6[_0x3eef8e(0x228)]()[_0x3eef8e(0x273)])_0x147cd6=_0x4e697f;if(_0x576e63&&_0x4e697f['states']()[_0x3eef8e(0x273)]<_0x147cd6[_0x3eef8e(0x228)]()[_0x3eef8e(0x273)])_0x147cd6=_0x4e697f;}return _0x147cd6;}if(_0x160bf9==='POSITIVE\x20STATE\x20COUNT'&&Imported[_0x3eef8e(0x1a1)]){_0x147cd6=this[_0x3eef8e(0x20a)][0x0];const _0x3350f6=_0x3eef8e(0x2cc);for(const _0x5f451e of this['_forceValidTargets']){if(_0x13946a&&_0x5f451e[_0x3eef8e(0x1bb)](_0x3350f6)[_0x3eef8e(0x273)]>_0x147cd6[_0x3eef8e(0x1bb)](_0x3350f6)[_0x3eef8e(0x273)])_0x147cd6=_0x5f451e;if(_0x576e63&&_0x5f451e['statesByCategory'](_0x3350f6)[_0x3eef8e(0x273)]<_0x147cd6[_0x3eef8e(0x1bb)](_0x3350f6)[_0x3eef8e(0x273)])_0x147cd6=_0x5f451e;}return _0x147cd6;}if(_0x160bf9===_0x3eef8e(0x230)&&Imported[_0x3eef8e(0x1a1)]){_0x147cd6=this[_0x3eef8e(0x20a)][0x0];const _0x6dba7=_0x3eef8e(0x199);for(const _0x26f136 of this[_0x3eef8e(0x20a)]){if(_0x13946a&&_0x26f136[_0x3eef8e(0x1bb)](_0x6dba7)[_0x3eef8e(0x273)]>_0x147cd6[_0x3eef8e(0x1bb)](_0x6dba7)[_0x3eef8e(0x273)])_0x147cd6=_0x26f136;if(_0x576e63&&_0x26f136[_0x3eef8e(0x1bb)](_0x6dba7)[_0x3eef8e(0x273)]<_0x147cd6['statesByCategory'](_0x6dba7)['length'])_0x147cd6=_0x26f136;}return _0x147cd6;}}}}}return null;},DataManager[_0x3db2fe(0x266)]=function(_0x36573e){const _0xfdd589=_0x3db2fe;_0x36573e=_0x36573e[_0xfdd589(0x286)]()[_0xfdd589(0x2cf)](),this[_0xfdd589(0x1dd)]=this[_0xfdd589(0x1dd)]||{};if(this['_elementIDs'][_0x36573e])return this[_0xfdd589(0x1dd)][_0x36573e];let _0x5dde37=0x1;for(const _0x387616 of $dataSystem['elements']){if(!_0x387616)continue;let _0x36dd49=_0x387616[_0xfdd589(0x286)]();_0x36dd49=_0x36dd49['replace'](/\x1I\[(\d+)\]/gi,''),_0x36dd49=_0x36dd49[_0xfdd589(0x1d0)](/\\I\[(\d+)\]/gi,''),this[_0xfdd589(0x1dd)][_0x36dd49]=_0x5dde37,_0x5dde37++;}return this[_0xfdd589(0x1dd)][_0x36573e]||0x0;},DataManager[_0x3db2fe(0x1b0)]=function(_0x1e2727){const _0x1b7529=_0x3db2fe;_0x1e2727=_0x1e2727[_0x1b7529(0x286)]()['trim'](),this[_0x1b7529(0x20e)]=this[_0x1b7529(0x20e)]||{};if(this['_stateIDs'][_0x1e2727])return this[_0x1b7529(0x20e)][_0x1e2727];for(const _0x53a1fc of $dataStates){if(!_0x53a1fc)continue;this[_0x1b7529(0x20e)][_0x53a1fc[_0x1b7529(0x24e)][_0x1b7529(0x286)]()[_0x1b7529(0x2cf)]()]=_0x53a1fc['id'];}return this['_stateIDs'][_0x1e2727]||0x0;},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x1ef)]=BattleManager[_0x3db2fe(0x25c)],BattleManager['getNextSubject']=function(){const _0x1f93fa=_0x3db2fe,_0x1006f7=VisuMZ[_0x1f93fa(0x2a6)][_0x1f93fa(0x1ef)][_0x1f93fa(0x29d)](this);if(_0x1006f7&&_0x1006f7[_0x1f93fa(0x245)]()){const _0x3a5058=_0x1006f7['currentAction']();if(!_0x3a5058||_0x3a5058&&!_0x3a5058[_0x1f93fa(0x213)]())_0x1006f7[_0x1f93fa(0x21d)]();else{if(VisuMZ[_0x1f93fa(0x2a6)][_0x1f93fa(0x28b)][_0x1f93fa(0x267)][_0x1f93fa(0x254)]){if(_0x3a5058&&_0x3a5058[_0x1f93fa(0x2d7)])return _0x1006f7;_0x1006f7[_0x1f93fa(0x21d)]();}}}return _0x1006f7;},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x1eb)]=BattleManager[_0x3db2fe(0x246)],BattleManager[_0x3db2fe(0x246)]=function(){const _0x212159=_0x3db2fe;this[_0x212159(0x26e)](),this[_0x212159(0x1f0)][_0x212159(0x289)]()?VisuMZ['BattleAI'][_0x212159(0x1eb)][_0x212159(0x29d)](this):this['endAction']();},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x223)]=BattleManager['endAction'],BattleManager[_0x3db2fe(0x26d)]=function(){const _0x5c5acc=_0x3db2fe;this[_0x5c5acc(0x26e)](),VisuMZ[_0x5c5acc(0x2a6)][_0x5c5acc(0x223)]['call'](this);},BattleManager[_0x3db2fe(0x26e)]=function(){this['determineTargetActionByAIisStillValid'](this['_subject']);},BattleManager['determineTargetActionByAIisStillValid']=function(_0x2331ea){const _0x4cfdd7=_0x3db2fe;if(!_0x2331ea)return;if(_0x2331ea[_0x4cfdd7(0x28e)]()===_0x4cfdd7(0x1b9))return;if(!_0x2331ea[_0x4cfdd7(0x245)]())return;const _0x3dea1a=_0x2331ea[_0x4cfdd7(0x289)]();if(!_0x3dea1a)return;if(_0x3dea1a[_0x4cfdd7(0x2d7)])return;const _0x473f0e=_0x3dea1a['item']();if(_0x2331ea[_0x4cfdd7(0x200)])return;if(AIManager[_0x4cfdd7(0x1c2)](_0x2331ea,_0x473f0e)&&_0x2331ea['canUse'](_0x473f0e))return;_0x2331ea[_0x4cfdd7(0x1a3)]();},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x22e)]=Game_Temp['prototype'][_0x3db2fe(0x1f2)],Game_Temp['prototype']['initialize']=function(){const _0x5f4907=_0x3db2fe;VisuMZ['BattleAI']['Game_Temp_initialize'][_0x5f4907(0x29d)](this),this[_0x5f4907(0x2b9)]();},Game_Temp[_0x3db2fe(0x1e2)][_0x3db2fe(0x2b9)]=function(){this['_aiTgrInfluence']={'action':null,'elementInfluence':![],'elementInfluenceRate':0x0,'elementIds':[],'evaInfluenceRate':0x0,'mevInfluenceRate':0x0};},Game_Temp[_0x3db2fe(0x1e2)]['aiTgrInfluence']=function(){const _0x1a9a6c=_0x3db2fe;if(this[_0x1a9a6c(0x2bb)]===undefined)this[_0x1a9a6c(0x2b9)]();return this[_0x1a9a6c(0x2bb)];},Game_Temp[_0x3db2fe(0x1e2)][_0x3db2fe(0x2a1)]=function(_0x2ec453,_0x4e7437){const _0x4c40b9=_0x3db2fe;this[_0x4c40b9(0x2b9)]();const _0x72065=this[_0x4c40b9(0x2c6)]();_0x72065[_0x4c40b9(0x222)]=_0x4e7437;if(_0x2ec453[_0x4c40b9(0x23a)]()){_0x72065[_0x4c40b9(0x212)]=!![],_0x72065[_0x4c40b9(0x1b2)]=_0x2ec453[_0x4c40b9(0x193)](),_0x72065['elementIds']=[];if(Imported['VisuMZ_1_ElementStatusCore'])_0x72065[_0x4c40b9(0x19e)]=_0x72065[_0x4c40b9(0x19e)][_0x4c40b9(0x2cd)](_0x4e7437[_0x4c40b9(0x297)]());else _0x4e7437[_0x4c40b9(0x213)]()['damage']['elementId']<0x0?_0x72065[_0x4c40b9(0x19e)]=_0x72065[_0x4c40b9(0x19e)][_0x4c40b9(0x2cd)](_0x2ec453[_0x4c40b9(0x2a4)]()):_0x72065[_0x4c40b9(0x19e)]['push'](_0x4e7437[_0x4c40b9(0x213)]()['damage'][_0x4c40b9(0x2c0)]);}_0x4e7437[_0x4c40b9(0x2b5)]()&&_0x2ec453[_0x4c40b9(0x1fe)]()&&(_0x72065[_0x4c40b9(0x18b)]=_0x2ec453[_0x4c40b9(0x202)]()),_0x4e7437['isMagical']()&&_0x2ec453[_0x4c40b9(0x206)]()&&(_0x72065[_0x4c40b9(0x1e4)]=_0x2ec453[_0x4c40b9(0x2b8)]());},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x1f8)]=Game_Action[_0x3db2fe(0x1e2)][_0x3db2fe(0x1ff)],Game_Action[_0x3db2fe(0x1e2)][_0x3db2fe(0x1ff)]=function(){const _0x22fcb4=_0x3db2fe;this['isSkill']()&&this['subject']()[_0x22fcb4(0x245)]()&&(AIManager['forceValidTargets'](this[_0x22fcb4(0x274)](),this[_0x22fcb4(0x213)]()),this[_0x22fcb4(0x275)]()&&AIManager[_0x22fcb4(0x215)](this['subject'](),this[_0x22fcb4(0x213)]()));$gameTemp['setAiTgrInfluences'](this[_0x22fcb4(0x274)](),this);const _0x499ceb=VisuMZ['BattleAI']['Game_Action_makeTargets'][_0x22fcb4(0x29d)](this);return $gameTemp[_0x22fcb4(0x2b9)](),AIManager[_0x22fcb4(0x1c6)](),_0x499ceb;},VisuMZ['BattleAI'][_0x3db2fe(0x261)]=Game_Action[_0x3db2fe(0x1e2)][_0x3db2fe(0x2be)],Game_Action[_0x3db2fe(0x1e2)][_0x3db2fe(0x2be)]=function(){const _0x5d0322=_0x3db2fe,_0x2fb7b2=this[_0x5d0322(0x274)](),_0x2f3fc8=this[_0x5d0322(0x213)]();let _0x258666=VisuMZ[_0x5d0322(0x2a6)]['Game_Action_itemTargetCandidates']['call'](this);if(_0x2fb7b2[_0x5d0322(0x245)]()&&AIManager[_0x5d0322(0x1c2)](_0x2fb7b2,_0x2f3fc8)){let _0x4cf2cb=AIManager['makeValidTargets'](_0x2fb7b2,_0x2f3fc8);_0x258666=_0x258666[_0x5d0322(0x1fb)](_0x40999a=>_0x4cf2cb[_0x5d0322(0x225)](_0x40999a));}return _0x258666;},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x221)]=Game_Action[_0x3db2fe(0x1e2)][_0x3db2fe(0x219)],Game_Action[_0x3db2fe(0x1e2)][_0x3db2fe(0x219)]=function(_0x20e87){const _0x42f5e0=_0x3db2fe;VisuMZ[_0x42f5e0(0x2a6)][_0x42f5e0(0x221)][_0x42f5e0(0x29d)](this,_0x20e87),this[_0x42f5e0(0x20d)](_0x20e87);},Game_Action['prototype'][_0x3db2fe(0x20d)]=function(_0x48bc0a){const _0x1aa9a5=_0x3db2fe;if(!_0x48bc0a)return;if(this[_0x1aa9a5(0x274)]()[_0x1aa9a5(0x216)]()===_0x48bc0a[_0x1aa9a5(0x216)]())return;let _0x1a5aa2=[];if(Imported[_0x1aa9a5(0x1c5)])_0x1a5aa2=this[_0x1aa9a5(0x297)]();else this[_0x1aa9a5(0x213)]()[_0x1aa9a5(0x271)][_0x1aa9a5(0x2c0)]<0x0?_0x1a5aa2=this['subject']()[_0x1aa9a5(0x2a4)]():_0x1a5aa2=[this['item']()['damage'][_0x1aa9a5(0x2c0)]];_0x48bc0a[_0x1aa9a5(0x19d)](_0x1a5aa2,this[_0x1aa9a5(0x2b5)](),this[_0x1aa9a5(0x292)]());},VisuMZ['BattleAI'][_0x3db2fe(0x1c3)]=Game_Action['prototype'][_0x3db2fe(0x1c9)],Game_Action[_0x3db2fe(0x1e2)][_0x3db2fe(0x1c9)]=function(){const _0x4359ab=_0x3db2fe,_0x57617a=this[_0x4359ab(0x213)]()[_0x4359ab(0x1a9)];if(_0x57617a[_0x4359ab(0x2bc)](/ANY/i))return!![];return VisuMZ[_0x4359ab(0x2a6)]['Game_Action_isForOpponentBattleCore'][_0x4359ab(0x29d)](this);},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x1ee)]=Game_BattlerBase['prototype'][_0x3db2fe(0x1cb)],Game_BattlerBase[_0x3db2fe(0x1e2)][_0x3db2fe(0x1cb)]=function(_0x46e9b2){const _0x4612ae=_0x3db2fe;let _0x5bb0cd=VisuMZ[_0x4612ae(0x2a6)]['Game_BattlerBase_sparam']['call'](this,_0x46e9b2);return _0x46e9b2===0x0&&(_0x5bb0cd*=this[_0x4612ae(0x255)]()),_0x5bb0cd;},Game_BattlerBase[_0x3db2fe(0x1e2)]['applyBattleAiTgrInfluences']=function(){const _0x6b3382=_0x3db2fe,_0x24e2da=$gameTemp['aiTgrInfluence'](),_0x464cae=this[_0x6b3382(0x1e6)]();if(Imported[_0x6b3382(0x2b3)]){if(_0x24e2da[_0x6b3382(0x222)]&&_0x24e2da['action']['isAggroAffected']())return 0x1;}let _0x32c59c=0x1;if(_0x24e2da[_0x6b3382(0x212)])for(const _0x469c91 of _0x24e2da[_0x6b3382(0x19e)]){_0x464cae[_0x6b3382(0x279)](_0x469c91,this)&&(_0x32c59c*=this[_0x6b3382(0x1b5)](_0x469c91)*_0x24e2da['elementInfluenceRate']);}return _0x464cae[_0x6b3382(0x20b)](_0x6b3382(0x1a5),this)&&(_0x32c59c*=0x1-this['eva']*_0x24e2da[_0x6b3382(0x18b)]),_0x464cae['hasXParamAIKnowledge']('mev',this)&&(_0x32c59c*=0x1-this['mev']*_0x24e2da[_0x6b3382(0x1e4)]),_0x32c59c[_0x6b3382(0x285)](0.001,0x3e8);},Game_BattlerBase[_0x3db2fe(0x1e2)][_0x3db2fe(0x28e)]=function(){return'classic';},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x24f)]=Game_Battler[_0x3db2fe(0x1e2)]['isChanting'],Game_Battler['prototype'][_0x3db2fe(0x198)]=function(){const _0x2edaa7=_0x3db2fe;if(this['isDetermineActionByAI']()){const _0x126d6e=VisuMZ[_0x2edaa7(0x2a6)]['Settings'][_0x2edaa7(0x267)];if(_0x126d6e[_0x2edaa7(0x254)]&&_0x126d6e['SpotRemoveMotions'])return![];}return VisuMZ['BattleAI'][_0x2edaa7(0x24f)][_0x2edaa7(0x29d)](this);},Game_Battler[_0x3db2fe(0x1e2)][_0x3db2fe(0x245)]=function(){const _0x50e1cb=_0x3db2fe;if(this[_0x50e1cb(0x1a7)]())return![];return!![];},Game_Battler[_0x3db2fe(0x1e2)]['determineNewValidAIAction']=function(){},Game_Battler[_0x3db2fe(0x1e2)][_0x3db2fe(0x23a)]=function(){const _0x52adc0=_0x3db2fe;if(this[_0x52adc0(0x216)]()||this[_0x52adc0(0x2ae)]()){const _0x1f41ae=this[_0x52adc0(0x216)]()?this['actor']()['note']:this['enemy']()[_0x52adc0(0x256)];if(_0x1f41ae[_0x52adc0(0x2bc)](AIManager['_regexp'][_0x52adc0(0x1f1)]))return![];else{if(_0x1f41ae[_0x52adc0(0x2bc)](AIManager[_0x52adc0(0x2aa)][_0x52adc0(0x264)]))return this[_0x52adc0(0x193)]()>0x0;}}return VisuMZ[_0x52adc0(0x2a6)][_0x52adc0(0x28b)][_0x52adc0(0x270)][_0x52adc0(0x2d3)];},Game_Battler[_0x3db2fe(0x1e2)]['aiApplyElementalTgrInfluenceRate']=function(){const _0x4da310=_0x3db2fe;if(this['isActor']()||this[_0x4da310(0x2ae)]()){const _0x5b7cb7=this['isActor']()?this['actor']()[_0x4da310(0x256)]:this['enemy']()[_0x4da310(0x256)];if(_0x5b7cb7[_0x4da310(0x2bc)](AIManager[_0x4da310(0x2aa)][_0x4da310(0x264)]))return eval(RegExp['$1']);}return VisuMZ['BattleAI']['Settings'][_0x4da310(0x270)]['ElementTgrRate'];},Game_Battler[_0x3db2fe(0x1e2)][_0x3db2fe(0x1fe)]=function(){const _0x366f78=_0x3db2fe;if(this[_0x366f78(0x216)]()||this[_0x366f78(0x2ae)]()){const _0x22b77c=this[_0x366f78(0x216)]()?this[_0x366f78(0x247)]()['note']:this['enemy']()['note'];if(_0x22b77c['match'](AIManager[_0x366f78(0x2aa)][_0x366f78(0x1e1)]))return![];else{if(_0x22b77c['match'](AIManager[_0x366f78(0x2aa)][_0x366f78(0x22c)]))return this[_0x366f78(0x202)]()>0x0;}}return VisuMZ['BattleAI'][_0x366f78(0x28b)][_0x366f78(0x270)]['EvaTgr'];},Game_Battler[_0x3db2fe(0x1e2)]['aiApplyEvaTgrInfluenceRate']=function(){const _0x545bd4=_0x3db2fe;if(this[_0x545bd4(0x216)]()||this[_0x545bd4(0x2ae)]()){const _0x1cdf4d=this[_0x545bd4(0x216)]()?this[_0x545bd4(0x247)]()[_0x545bd4(0x256)]:this['enemy']()[_0x545bd4(0x256)];if(_0x1cdf4d['match'](AIManager['_regexp']['aiEvaTgr']))return eval(RegExp['$1']);}return VisuMZ[_0x545bd4(0x2a6)][_0x545bd4(0x28b)][_0x545bd4(0x270)]['EvaTgrRate'];},Game_Battler[_0x3db2fe(0x1e2)][_0x3db2fe(0x206)]=function(){const _0x2c5167=_0x3db2fe;if(this[_0x2c5167(0x216)]()||this[_0x2c5167(0x2ae)]()){const _0x59f493=this[_0x2c5167(0x216)]()?this[_0x2c5167(0x247)]()['note']:this[_0x2c5167(0x26a)]()[_0x2c5167(0x256)];if(_0x59f493['match'](AIManager['_regexp'][_0x2c5167(0x2d2)]))return![];else{if(_0x59f493[_0x2c5167(0x2bc)](AIManager['_regexp'][_0x2c5167(0x1a8)]))return this[_0x2c5167(0x2b8)]()>0x0;}}return VisuMZ[_0x2c5167(0x2a6)][_0x2c5167(0x28b)]['Weight'][_0x2c5167(0x252)];},Game_Battler[_0x3db2fe(0x1e2)][_0x3db2fe(0x2b8)]=function(){const _0x217507=_0x3db2fe;if(this[_0x217507(0x216)]()||this[_0x217507(0x2ae)]()){const _0x1e281a=this[_0x217507(0x216)]()?this[_0x217507(0x247)]()[_0x217507(0x256)]:this[_0x217507(0x26a)]()[_0x217507(0x256)];if(_0x1e281a[_0x217507(0x2bc)](AIManager['_regexp'][_0x217507(0x1a8)]))return eval(RegExp['$1']);}return VisuMZ[_0x217507(0x2a6)]['Settings'][_0x217507(0x270)][_0x217507(0x277)];},Game_Battler[_0x3db2fe(0x1e2)]['aiLevel']=function(){const _0x1fb06e=_0x3db2fe,_0x48492a=VisuMZ[_0x1fb06e(0x2a6)][_0x1fb06e(0x28b)]['General'];if(this['isActor']()||this['isEnemy']()){const _0xe3965c=this[_0x1fb06e(0x216)]()?this[_0x1fb06e(0x247)]()[_0x1fb06e(0x256)]:this[_0x1fb06e(0x26a)]()[_0x1fb06e(0x256)];if(_0xe3965c[_0x1fb06e(0x2bc)](AIManager['_regexp'][_0x1fb06e(0x241)]))return Number(RegExp['$1'])[_0x1fb06e(0x285)](0x0,0x64);else{if(this[_0x1fb06e(0x216)]())return _0x48492a[_0x1fb06e(0x1d3)];else{if(this[_0x1fb06e(0x2ae)]())return _0x48492a[_0x1fb06e(0x237)];}}}return _0x48492a[_0x1fb06e(0x237)];},Game_Battler['prototype']['addAIKnowledge']=function(_0x4bdfcf,_0x260007,_0x40fc07){const _0x56d571=_0x3db2fe,_0x12a252=this[_0x56d571(0x1e6)]();if(_0x4bdfcf&&_0x4bdfcf[_0x56d571(0x273)]>0x0)for(const _0xd52d3a of _0x4bdfcf){_0x12a252['addElementAIKnowledge'](_0xd52d3a,this);}_0x260007&&_0x12a252[_0x56d571(0x226)](_0x56d571(0x2d4),this),_0x40fc07&&_0x12a252[_0x56d571(0x226)]('mevRates',this);},Game_Battler[_0x3db2fe(0x1e2)][_0x3db2fe(0x20b)]=function(_0x2f501e){const _0x4fe3f8=_0x3db2fe,_0x5c0038=this[_0x4fe3f8(0x1e6)]();return _0x5c0038['hasXParamAIKnowledge'](_0x2f501e,this);},Game_Battler[_0x3db2fe(0x1e2)][_0x3db2fe(0x1be)]=function(){const _0x50b787=_0x3db2fe,_0xbcba6f=VisuMZ[_0x50b787(0x2a6)][_0x50b787(0x28b)][_0x50b787(0x267)];if(this[_0x50b787(0x216)]()||this[_0x50b787(0x2ae)]()){const _0x1b8767=this[_0x50b787(0x216)]()?this[_0x50b787(0x247)]()[_0x50b787(0x256)]:this['enemy']()[_0x50b787(0x256)];if(_0x1b8767[_0x50b787(0x2bc)](AIManager[_0x50b787(0x2aa)][_0x50b787(0x1be)]))return Number(RegExp['$1'])['clamp'](0x0,0x9);else{if(this['isActor']())return _0xbcba6f['ActorRatingVariance'][_0x50b787(0x285)](0x0,0x9);else{if(this['isEnemy']())return _0xbcba6f[_0x50b787(0x1b8)][_0x50b787(0x285)](0x0,0x9);}}}return _0xbcba6f[_0x50b787(0x1b8)][_0x50b787(0x285)](0x0,0x9);},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x2d1)]=Game_Battler['prototype'][_0x3db2fe(0x2b7)],Game_Battler[_0x3db2fe(0x1e2)][_0x3db2fe(0x2b7)]=function(){const _0x5c5b2d=_0x3db2fe;return VisuMZ[_0x5c5b2d(0x2a6)]['Settings'][_0x5c5b2d(0x267)][_0x5c5b2d(0x254)]&&!BattleManager[_0x5c5b2d(0x224)]()?$gameTroop[_0x5c5b2d(0x2b7)]():VisuMZ[_0x5c5b2d(0x2a6)][_0x5c5b2d(0x2d1)]['call'](this);},Game_Actor[_0x3db2fe(0x1e2)][_0x3db2fe(0x245)]=function(){const _0x4eb047=_0x3db2fe;if(this['isConfused']())return![];return this[_0x4eb047(0x1e9)]()&&this[_0x4eb047(0x1ca)]();},Game_Actor[_0x3db2fe(0x1e2)]['referenceEnemyForAI']=function(){const _0x3476f4=_0x3db2fe,_0x1fd742=this[_0x3476f4(0x258)]()[_0x3476f4(0x256)];if(_0x1fd742[_0x3476f4(0x2bc)](/<NO REFERENCE AI>/i))return null;else{if(_0x1fd742[_0x3476f4(0x2bc)](/<REFERENCE AI: ENEMY (\d+)>/i))return $dataEnemies[Number(RegExp['$1'])];else{if(_0x1fd742[_0x3476f4(0x2bc)](/<REFERENCE AI: (.*)>/i))return $dataEnemies[DataManager['getEnemyIdWithName'](String(RegExp['$1']))];}}return $dataEnemies[VisuMZ[_0x3476f4(0x2a6)][_0x3476f4(0x28b)][_0x3476f4(0x267)][_0x3476f4(0x1b4)]];},Game_Actor[_0x3db2fe(0x1e2)][_0x3db2fe(0x28e)]=function(){const _0x1de324=_0x3db2fe,_0x5c62ca=this[_0x1de324(0x258)]()[_0x1de324(0x256)];if(_0x5c62ca[_0x1de324(0x2bc)](AIManager[_0x1de324(0x2aa)][_0x1de324(0x28e)]))return String(RegExp['$1'])[_0x1de324(0x236)]()[_0x1de324(0x2cf)]();return VisuMZ[_0x1de324(0x2a6)][_0x1de324(0x28b)]['General'][_0x1de324(0x203)];},Game_Actor[_0x3db2fe(0x1e2)][_0x3db2fe(0x1a3)]=function(){const _0x1629e4=_0x3db2fe;Game_Battler['prototype'][_0x1629e4(0x1a3)][_0x1629e4(0x29d)](this),this['makeAutoBattleActions']();},VisuMZ['BattleAI'][_0x3db2fe(0x1f4)]=Game_Actor['prototype'][_0x3db2fe(0x248)],Game_Actor['prototype'][_0x3db2fe(0x248)]=function(){const _0x20826e=_0x3db2fe;this[_0x20826e(0x245)]()?this[_0x20826e(0x296)]():VisuMZ[_0x20826e(0x2a6)][_0x20826e(0x1f4)]['call'](this);},Game_Actor['prototype'][_0x3db2fe(0x296)]=function(){const _0x465421=_0x3db2fe;if(this[_0x465421(0x25e)]()>0x0){const _0x649730=this['usableSkills']();if(this[_0x465421(0x1a0)]())_0x649730[_0x465421(0x244)]($dataSkills[this[_0x465421(0x232)]()]);if(this[_0x465421(0x1bc)]())_0x649730['push']($dataSkills[this['guardSkillId']()]);const _0x4b7182=this['referenceEnemyForAI'](),_0x3af984=JsonEx['makeDeepCopy'](_0x4b7182['actions']);for(const _0x5bb296 of _0x3af984){if(_0x5bb296[_0x465421(0x26b)]===0x1)_0x5bb296[_0x465421(0x26b)]=this[_0x465421(0x232)]();if(_0x5bb296[_0x465421(0x26b)]===0x2)_0x5bb296[_0x465421(0x26b)]=this[_0x465421(0x2ab)]();}const _0x1d9fd6=_0x3af984[_0x465421(0x1fb)](_0x58ada4=>this[_0x465421(0x1ce)](_0x58ada4)&&_0x649730[_0x465421(0x225)]($dataSkills[_0x58ada4['skillId']]));if(_0x1d9fd6[_0x465421(0x273)]>0x0){this[_0x465421(0x18d)](_0x1d9fd6);return;}}VisuMZ['BattleAI'][_0x465421(0x1f4)][_0x465421(0x29d)](this);},Game_Actor[_0x3db2fe(0x1e2)][_0x3db2fe(0x290)]=function(_0x536e8b){const _0x261a62=_0x3db2fe;return Game_Enemy['prototype'][_0x261a62(0x290)][_0x261a62(0x29d)](this,_0x536e8b);},Game_Actor[_0x3db2fe(0x1e2)][_0x3db2fe(0x1a2)]=function(_0x5c4d6c,_0x4c2d00){const _0x44ecec=_0x3db2fe;return Game_Enemy[_0x44ecec(0x1e2)][_0x44ecec(0x1a2)][_0x44ecec(0x29d)](this,_0x5c4d6c,_0x4c2d00);},Game_Actor[_0x3db2fe(0x1e2)][_0x3db2fe(0x19b)]=function(_0x4b7a28,_0xac44e0){const _0x3b8a62=_0x3db2fe;return Game_Enemy[_0x3b8a62(0x1e2)][_0x3b8a62(0x19b)]['call'](this,_0x4b7a28,_0xac44e0);},Game_Actor['prototype'][_0x3db2fe(0x265)]=function(_0x423a2b,_0x534033){const _0x271e2d=_0x3db2fe;return Game_Enemy[_0x271e2d(0x1e2)]['meetsMpCondition']['call'](this,_0x423a2b,_0x534033);},Game_Actor[_0x3db2fe(0x1e2)]['meetsStateCondition']=function(_0x15e322){const _0x534a51=_0x3db2fe;return Game_Enemy[_0x534a51(0x1e2)][_0x534a51(0x231)][_0x534a51(0x29d)](this,_0x15e322);},Game_Actor['prototype'][_0x3db2fe(0x2ad)]=function(_0x6c0b2e){const _0x5e1099=_0x3db2fe;return Game_Enemy[_0x5e1099(0x1e2)][_0x5e1099(0x2ad)][_0x5e1099(0x29d)](this,_0x6c0b2e);},Game_Actor[_0x3db2fe(0x1e2)][_0x3db2fe(0x1dc)]=function(_0x1c378c){const _0xe6b6b5=_0x3db2fe;return Game_Enemy[_0xe6b6b5(0x1e2)][_0xe6b6b5(0x1dc)]['call'](this,_0x1c378c);},Game_Enemy[_0x3db2fe(0x1e2)][_0x3db2fe(0x28e)]=function(){const _0x2c25ee=_0x3db2fe,_0x228d24=this[_0x2c25ee(0x26a)]()['note'];if(_0x228d24[_0x2c25ee(0x2bc)](AIManager['_regexp'][_0x2c25ee(0x28e)]))return String(RegExp['$1'])[_0x2c25ee(0x236)]()['trim']();return VisuMZ[_0x2c25ee(0x2a6)][_0x2c25ee(0x28b)][_0x2c25ee(0x267)][_0x2c25ee(0x209)];},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x2a9)]=Game_Enemy[_0x3db2fe(0x1e2)][_0x3db2fe(0x1ce)],Game_Enemy[_0x3db2fe(0x1e2)]['isActionValid']=function(_0x9d30b8){const _0x5a0bc5=_0x3db2fe;if(!VisuMZ[_0x5a0bc5(0x2a6)]['Game_Enemy_isActionValid']['call'](this,_0x9d30b8))return![];if(this[_0x5a0bc5(0x28e)]()===_0x5a0bc5(0x1b9))return!![];return AIManager[_0x5a0bc5(0x1c2)](this,$dataSkills[_0x9d30b8[_0x5a0bc5(0x26b)]]);},Game_Actor[_0x3db2fe(0x1e2)][_0x3db2fe(0x1ce)]=function(_0x19bcc2){return Game_Enemy['prototype']['isActionValid']['call'](this,_0x19bcc2);},Game_Enemy[_0x3db2fe(0x1e2)][_0x3db2fe(0x21a)]=function(_0x170621,_0x5a2d76){const _0x33aba4=_0x3db2fe,_0x4f1185=_0x170621[_0x33aba4(0x240)]((_0x5e404c,_0x148d8b)=>_0x5e404c+_0x148d8b[_0x33aba4(0x1c7)]-_0x5a2d76,0x0);if(_0x4f1185>=0x0){let _0x1cfe44=Math[_0x33aba4(0x1d5)](_0x4f1185);for(const _0x54c889 of _0x170621){_0x1cfe44-=_0x54c889['rating']-_0x5a2d76;if(_0x1cfe44<=0x0)return _0x54c889;}}else return null;},Game_Actor[_0x3db2fe(0x1e2)][_0x3db2fe(0x21a)]=function(_0x1c485d,_0x1d63fd){const _0x52252e=_0x3db2fe;return Game_Enemy[_0x52252e(0x1e2)]['selectAction'][_0x52252e(0x29d)](this,_0x1c485d,_0x1d63fd);},Game_Enemy['prototype']['selectAllActions']=function(_0x465ae4){const _0x529227=_0x3db2fe,_0x4f1fd5=String(this[_0x529227(0x28e)]())[_0x529227(0x236)]()[_0x529227(0x2cf)]();if([_0x529227(0x1b9),_0x529227(0x207)][_0x529227(0x225)](_0x4f1fd5))this[_0x529227(0x29e)](_0x465ae4);else _0x4f1fd5===_0x529227(0x220)?this[_0x529227(0x196)](_0x465ae4):this[_0x529227(0x1ad)](_0x465ae4);},Game_Actor[_0x3db2fe(0x1e2)][_0x3db2fe(0x18d)]=function(_0x317a05){const _0x37ace0=_0x3db2fe;Game_Enemy['prototype'][_0x37ace0(0x18d)][_0x37ace0(0x29d)](this,_0x317a05);},Game_Battler[_0x3db2fe(0x1e2)][_0x3db2fe(0x1ad)]=function(_0x2de7ae){const _0x2660cf=_0x3db2fe,_0x3872a0=Math[_0x2660cf(0x1b1)](..._0x2de7ae['map'](_0x2675e9=>_0x2675e9['rating'])),_0x24f2b6=_0x3872a0-this[_0x2660cf(0x1be)](),_0x276f16=this[_0x2660cf(0x25e)]();_0x2de7ae=_0x2de7ae['filter'](_0x4da819=>_0x4da819[_0x2660cf(0x1c7)]>=_0x24f2b6);for(let _0x168a4d=0x0;_0x168a4d<_0x276f16;_0x168a4d++){_0x2de7ae=VisuMZ[_0x2660cf(0x2a6)][_0x2660cf(0x1c1)](_0x2de7ae);const _0x238899=this[_0x2660cf(0x21a)](_0x2de7ae,_0x24f2b6);this['action'](_0x168a4d)[_0x2660cf(0x23c)](_0x238899);}},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x1c1)]=function(_0x49d185){const _0x40e52e=_0x3db2fe;var _0x1f54ad,_0x1e9c1f,_0x5a002e;for(_0x5a002e=_0x49d185['length']-0x1;_0x5a002e>0x0;_0x5a002e--){_0x1f54ad=Math[_0x40e52e(0x205)](Math[_0x40e52e(0x1b9)]()*(_0x5a002e+0x1)),_0x1e9c1f=_0x49d185[_0x5a002e],_0x49d185[_0x5a002e]=_0x49d185[_0x1f54ad],_0x49d185[_0x1f54ad]=_0x1e9c1f;}return _0x49d185;},Game_Battler['prototype'][_0x3db2fe(0x196)]=function(_0x51b15b){const _0x498efa=_0x3db2fe;for(let _0x249b66=0x0;_0x249b66<this['numActions']();_0x249b66++){const _0x417e29=_0x51b15b[0x0];this['action'](_0x249b66)[_0x498efa(0x23c)](_0x417e29);}},Game_Battler[_0x3db2fe(0x1e2)][_0x3db2fe(0x29e)]=function(_0x476d80){const _0x5b80e2=_0x3db2fe;for(let _0x161583=0x0;_0x161583<this[_0x5b80e2(0x25e)]();_0x161583++){const _0xcf252f=_0x476d80[Math['randomInt'](_0x476d80[_0x5b80e2(0x273)])];this['action'](_0x161583)['setEnemyAction'](_0xcf252f);}},Game_Enemy['prototype'][_0x3db2fe(0x1a3)]=function(){const _0x361fb4=_0x3db2fe;Game_Battler[_0x361fb4(0x1e2)][_0x361fb4(0x1a3)][_0x361fb4(0x29d)](this);if(this['numActions']()>0x0){const _0x7384ab=this[_0x361fb4(0x26a)]()[_0x361fb4(0x1f7)]['filter'](_0x5dbb78=>this[_0x361fb4(0x1ce)](_0x5dbb78));_0x7384ab['length']>0x0?this[_0x361fb4(0x18d)](_0x7384ab):this[_0x361fb4(0x235)]();}},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x2bd)]=Game_Unit['prototype'][_0x3db2fe(0x1f2)],Game_Unit['prototype'][_0x3db2fe(0x1f2)]=function(){const _0x155405=_0x3db2fe;VisuMZ[_0x155405(0x2a6)][_0x155405(0x2bd)][_0x155405(0x29d)](this),this[_0x155405(0x1cd)]();},Game_Unit[_0x3db2fe(0x1e2)][_0x3db2fe(0x1cd)]=function(){this['_applyAIForcedTargetFilters']=![],this['clearAIKnowledge']();},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x1ea)]=Game_Unit[_0x3db2fe(0x1e2)]['aliveMembers'],Game_Unit[_0x3db2fe(0x1e2)]['aliveMembers']=function(){const _0x379771=_0x3db2fe;let _0x15cb33=VisuMZ['BattleAI'][_0x379771(0x1ea)][_0x379771(0x29d)](this);if(this[_0x379771(0x192)]){const _0x4ebf29=AIManager[_0x379771(0x21b)]();_0x15cb33=_0x15cb33[_0x379771(0x1fb)](_0x1dcf4f=>_0x4ebf29[_0x379771(0x225)](_0x1dcf4f));}return _0x15cb33;},VisuMZ['BattleAI']['Game_Unit_randomTarget']=Game_Unit[_0x3db2fe(0x1e2)][_0x3db2fe(0x2ac)],Game_Unit[_0x3db2fe(0x1e2)][_0x3db2fe(0x2ac)]=function(){const _0x50bf71=_0x3db2fe;AIManager['hasForcedTargets']()&&(this[_0x50bf71(0x192)]=!![]);const _0x6e2dc2=VisuMZ['BattleAI']['Game_Unit_randomTarget']['call'](this);return this[_0x50bf71(0x192)]=![],_0x6e2dc2;},Game_Unit[_0x3db2fe(0x1e2)][_0x3db2fe(0x1a6)]=function(){this['_aiKnowledge']={'evaRates':[],'mevRates':[],'elementRates':{}};},Game_Unit[_0x3db2fe(0x1e2)][_0x3db2fe(0x1da)]=function(){const _0x11ce4f=_0x3db2fe;if(this[_0x11ce4f(0x204)]===undefined)this['clearAIKnowledge']();return this[_0x11ce4f(0x204)];},Game_Unit['prototype']['addXParamAIKnowledge']=function(_0x1da7ce,_0x5ac7ea){const _0x49c048=_0x3db2fe;this[_0x49c048(0x1da)]()[_0x1da7ce]=this[_0x49c048(0x1da)]()[_0x1da7ce]||[];const _0xd359f2=_0x5ac7ea['isActor']()?_0x5ac7ea[_0x49c048(0x283)]():_0x5ac7ea[_0x49c048(0x2b2)]();!this[_0x49c048(0x1da)]()[_0x1da7ce][_0x49c048(0x225)](_0xd359f2)&&this[_0x49c048(0x1da)]()[_0x1da7ce]['push'](_0xd359f2);},Game_Unit[_0x3db2fe(0x1e2)][_0x3db2fe(0x20b)]=function(_0x130ae8,_0x206dd5){const _0x53cb15=_0x3db2fe;if(!VisuMZ[_0x53cb15(0x2a6)][_0x53cb15(0x28b)][_0x53cb15(0x267)]['LearnKnowledge'])return!![];const _0x1c10ec=_0x130ae8[_0x53cb15(0x2bc)](/EVA/i)?_0x53cb15(0x2d4):'mevRates';this[_0x53cb15(0x1da)]()[_0x1c10ec]=this[_0x53cb15(0x1da)]()[_0x1c10ec]||[];const _0x42a178=_0x206dd5[_0x53cb15(0x216)]()?_0x206dd5['actorId']():_0x206dd5[_0x53cb15(0x2b2)]();return this['aiKnowledge']()[_0x1c10ec]['includes'](_0x42a178);},Game_Unit['prototype'][_0x3db2fe(0x29c)]=function(_0x3a02f7,_0x1fbf8a){const _0x280280=_0x3db2fe;this[_0x280280(0x1da)]()[_0x280280(0x23f)]=this[_0x280280(0x1da)]()[_0x280280(0x23f)]||{};const _0x2086f4=this['aiKnowledge']()[_0x280280(0x23f)];_0x2086f4[_0x3a02f7]=_0x2086f4[_0x3a02f7]||[];const _0x165f96=_0x1fbf8a['isActor']()?_0x1fbf8a[_0x280280(0x283)]():_0x1fbf8a['enemyId']();!_0x2086f4[_0x3a02f7][_0x280280(0x225)](_0x165f96)&&_0x2086f4[_0x3a02f7][_0x280280(0x244)](_0x165f96);},Game_Unit[_0x3db2fe(0x1e2)][_0x3db2fe(0x279)]=function(_0x5259d1,_0x2f2c63){const _0x74236e=_0x3db2fe;if(!VisuMZ[_0x74236e(0x2a6)][_0x74236e(0x28b)][_0x74236e(0x267)]['LearnKnowledge'])return!![];this['aiKnowledge']()[_0x74236e(0x23f)]=this[_0x74236e(0x1da)]()['elementRates']||{};const _0x527cd7=this[_0x74236e(0x1da)]()[_0x74236e(0x23f)];_0x527cd7[_0x5259d1]=_0x527cd7[_0x5259d1]||[];const _0x2512f3=_0x2f2c63[_0x74236e(0x216)]()?_0x2f2c63[_0x74236e(0x283)]():_0x2f2c63[_0x74236e(0x2b2)]();return _0x527cd7[_0x5259d1][_0x74236e(0x225)](_0x2512f3);},VisuMZ[_0x3db2fe(0x2a6)][_0x3db2fe(0x288)]=Game_Troop[_0x3db2fe(0x1e2)][_0x3db2fe(0x1af)],Game_Troop[_0x3db2fe(0x1e2)]['setup']=function(_0x4adac6){const _0x5b1643=_0x3db2fe;VisuMZ[_0x5b1643(0x2a6)][_0x5b1643(0x288)][_0x5b1643(0x29d)](this,_0x4adac6),this[_0x5b1643(0x1a6)]();};function _0x4e9c(){const _0x59bcf6=['makeTargets','_bypassAiValidCheck','is%1Affected','aiApplyEvaTgrInfluenceRate','ActorStyleAI','_aiKnowledge','floor','doesAIApplyMevTgrInfluence','casual','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','EnemyStyleAI','_forceValidTargets','hasXParamAIKnowledge','EnableAnyCon','applyBattleAI','_stateIDs','determineLineValue','DEF','doesTargetMeetAllConditions','elementInfluence','item','HIGHEST','filterForcedTargeting','isActor','slice','log','apply','selectAction','forcedTargets','friendsUnit','makeActions','ARRAYJSON','return\x200','gambit','Game_Action_apply','action','BattleManager_endAction','isTpb','includes','addXParamAIKnowledge','Any','states','isStateAffected','doesTargetMeetAIConditions','MAT','aiEvaTgr','EFFECT_REMOVE_STATE','Game_Temp_initialize','version','NEGATIVE\x20STATE\x20COUNT','meetsStateCondition','attackSkillId','aiTarget','type','clearActions','toLowerCase','EnemyAILevel','parse','passesAILevel','doesAIApplyElementalTgrInfluence','hasForcedTargets','setEnemyAction','tpRate','buff','elementRates','reduce','aiLevel','allCondition','TP%','push','isDetermineActionByAI','startAction','actor','makeAutoBattleActions','_stateTurns','HpDrain%1','highestTgrMember','level','checkSkillTargets','name','Game_Battler_isChanting','anyCondition','All','EvaTgr','HIT','OnSpotAI','applyBattleAiTgrInfluences','note','LUK','currentClass','FIRST','dataId','RemoveState%1','getNextSubject','makeDefaultConditions','numActions','RemoveDebuff%1','270994sEgixG','Game_Action_itemTargetCandidates','ALWAYS','MDF','aiElementTgr','meetsMpCondition','getElementIdWithName','General','xparam','MCR','enemy','skillId','user','endAction','determineActionByAIisStillValid','The\x20reason\x20is\x20due\x20to\x20the\x20turnCount()\x20function.\x0a','Weight','damage','ARRAYSTRUCT','length','subject','needsSelection','AddDebuff%1','EvaTgrRate','param','hasElementAIKnowledge','FUNC','value2','doesTargetMeetAnyConditions','EFFECT_REMOVE_DEBUFF','getAllConditions','GRD','AI\x20Manager\x20condition\x20cannot\x20be\x20met:\x20%1','VisuMZ_2_AggroControlSystem','hpRate','actorId','AGI','clamp','toUpperCase','2001758mnlunM','Game_Troop_setup','currentAction','isPlaytest','Settings','EFFECT_REMOVE_BUFF','createFilterTarget','aiStyle','status','meetsCondition','TRG','isMagical','6538OnDQHT','MRF','mhp','makeAutoBattleActionsWithEnemyAI','elements','isForAnyoneFocusFriends','MRG','_rngChance','UnknownElementRate','addElementAIKnowledge','call','selectAllActionsRandom','effects','TCR','setAiTgrInfluences','isForOpponent','37320QMaVpK','attackElements','AddState%1','BattleAI','getAnyConditions','EFFECT_ADD_BUFF','Game_Enemy_isActionValid','_regexp','guardSkillId','randomTarget','meetsPartyLevelCondition','isEnemy','EVAL','value','MAX_SAFE_INTEGER','enemyId','VisuMZ_4_AggroControl','isForNotUser','isPhysical','indexOf','turnCount','aiApplyMevTgrInfluenceRate','clearAiTgrInfluence','MP%','_aiTgrInfluence','match','Game_Unit_initialize','itemTargetCandidates','split','elementId','isForDeadFriend','map','CRI','ConvertParams','CNT','aiTgrInfluence','ARRAYSTR','description','1467ALkYRd','3138YJUtZo','STATE\x20COUNT','POSITIVE','concat','200768aJHceb','trim','USER','Game_Battler_turnCount','bypassMevTgr','ElementTgr','evaRates','format','makeValidTargets','_forceAction','_alertTurnCount','evaInfluenceRate','MpRecover%1','selectAllActions','remove','MAXHP','isForAnyone','AddBuff%1','_applyAIForcedTargetFilters','aiApplyElementalTgrInfluenceRate','mpRate','doesTargetMeetCondition','selectAllActionsGambit','MpDrain%1','isChanting','NEGATIVE','value1','meetsHpCondition','noCondition','addAIKnowledge','elementIds','ARRAYNUM','canAttack','VisuMZ_1_SkillsStatesCore','meetsTurnCondition','determineNewValidAIAction','isForAnyoneFocusOpponents','eva','clearAIKnowledge','isConfused','aiMevTgr','scope','charAt','code','EFFECT_ADD_STATE','selectAllActionsClassic','deadMembers','setup','getStateIdWithName','max','elementInfluenceRate','isMax%1Affected','ActorAIReference','elementRate','elementKnowledgeRate','2731925OeIJBj','EnemyRatingVariance','random','NUM','statesByCategory','canGuard','_buffTurns','aiRatingVariance','mmp','maxTp','ShuffleArray','hasValidTargets','Game_Action_isForOpponentBattleCore','10soAcAM','VisuMZ_1_ElementStatusCore','clearForcedTargets','rating','MDR','isForOpponentBattleCore','referenceEnemyForAI','sparam','EnableAllCon','initBattleAI','isActionValid','STR','replace','EVA','ATK','ActorAILevel','HpRecover%1','randomInt','Default','forceValidTargets','isConditionalAI','getDefaultAllConditions','aiKnowledge','getDefaultAnyConditions','meetsSwitchCondition','_elementIDs','EFFECT_RECOVER_HP','JSON','LEVEL','bypassEvaTgr','prototype','PDR','mevInfluenceRate','RemoveBuff%1','opponentsUnit','EFFECT_RECOVER_MP','exit','isAutoBattle','Game_Unit_aliveMembers','BattleManager_startAction','The\x20following\x20line\x20is\x20not\x20supported\x20by\x20Battle\x20A.I.:\x0a\x0a','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Game_BattlerBase_sparam','BattleManager_getNextSubject','_subject','bypassElementTgr','initialize','isForEveryone','Game_Actor_makeAutoBattleActions','MAXMP','EXR','actions','Game_Action_makeTargets','33hhipGQ','1KRbyZr','filter','18157644sZaRZj','aliveMembers','doesAIApplyEvaTgrInfluence'];_0x4e9c=function(){return _0x59bcf6;};return _0x4e9c();}