//=============================================================================
// VisuStella MZ - Dragonbones Union
// VisuMZ_2_DragonbonesUnion.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_DragonbonesUnion = true;

var VisuMZ = VisuMZ || {};
VisuMZ.DragonbonesUnion = VisuMZ.DragonbonesUnion || {};
VisuMZ.DragonbonesUnion.version = 1.26;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.26] [DragonbonesUnion]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Dragonbones_Union_VisuStella_MZ
 * @base Public_0_Dragonbones
 * @orderAfter VisuMZ_0_CoreEngine
 * @orderAfter Public_0_Dragonbones
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * DragonBones allows your games to use skeletal animation, a type of computer
 * animation in which a character (or object) is represented by skins/textures
 * and a digital set of interconnected bones (called the skeleton). Using a set
 * of instructions, the game will create animations based off these skins,
 * skeletons, and instructions to create beautifully smooth and light-weight
 * movements.
 *
 * This plugin gives you such control over various facets of your game: the
 * battle system, event pictures, and map sprites for characters. Various
 * plugin commands, notetags, and comment tags are added through this plugin to
 * give you as much control as you need over Dragonbones from the RPG Maker MZ
 * editor itself.
 *
 * The version of Dragonbones used for this plugin is 5.7.002b.
 * More information can be found at http://dragonbones.com/
 *
 * Features include all (but not limited to) the following:
 * 
 * - Adds Dragonbones support to RPG Maker MZ.
 * - Dragonbones armatures can be used as battler sprites.
 * - Dragonbones armatures can be attached to event pictures.
 * - Dragonbones armatures can be inserted into the map as character sprites.
 * - A variety of Plugin Parameters, Notetags, and Plugin Commands to control
 *   the Dragonbones armatures and their animations.
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
 * - Dragonbones*
 *
 * *Note* You can download this library from the below URL or from the
 * Dragonbones Union product page. Install it as a Tier 0 plugin.
 *
 * URL: https://www.npmjs.com/package/pixi5-dragonbones/v/5.7.0-2b
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Dragonbones Naming
 * ============================================================================
 *
 * If you are trying to set up a Dragonbones armature through notetags, Plugin
 * Commands, etc., and are getting the error message "Cannot Read property
 * 'parent' of null", then most likely, the incorrect Dragonbones armature name
 * is being used.
 *
 * ---
 * 
 * To find the Proper Name:
 * 
 * 1. Open up the Dragonbones armature in the Dragonbones editor.
 * 
 * ---
 * 
 * 2. Open the armature's Properties.
 * 
 * ---
 * 
 * 3. Look at what the "Name:" field lists. This is the name to use with the
 *    Dragonbones Union plugin.
 * 
 * ---
 *
 * ============================================================================
 * Dragonbones Armature Behaviors
 * ============================================================================
 *
 * Dragonbones armatures have certain behaviors when used with battlers,
 * pictures, and/or map sprites.
 *
 * ---
 *
 * 1. When a Dragonbones armature is loaded, it will play the 'idle' animation
 *    or whatever is set inside the Plugin Parameters => General Settings =>
 *    Loaded Animation field upon loading. Make your Dragonbones armatures with
 *    this in mind. At other times, the 'idle' animation will be used as a base
 *    defaulting animation.
 *
 * ---
 *
 * 2. The Dragonbones armature will always be anchored at the X, Y coordinates
 *    of the target. This X, Y coordinate point will be where the root/pivot
 *    point of the Dragonbones armature will be located.
 *
 * ---
 *
 * 3. The properties used by a sprite (ie the opacity, scale, rotation, and
 *    tint) will also be shared and/or amplified with the Dragonbones armature.
 *    The exception to this will be Blend Modes aren't supported.
 *
 * ---
 *
 * ============================================================================
 * IMPORTANT!! Dragonbones Armatures as Map Sprites
 * ============================================================================
 *
 * If you plan on using Dragonbones armatures as map sprites, please keep in
 * mind that there will be certain limitations and properties regarding them,
 * which will be listed below:
 *
 * ---
 *
 * 1. Try not to use more than 99 vertices for meshes. The reason behind this
 *    is because the Dragonbones armature is added as a sprite to the game's
 *    Tilemap. Any and all sprites added to the Tilemap have some restrictions
 *    placed on them as per Pixi JS's design. The Dragonbones armatures are no
 *    exception to this.
 *
 *    If the number of vertices exceeds 99, strange things will occur to the
 *    Dragonbones armature that are outside of this plugin's control. While it
 *    won't stop the plugin from functioning properly, expected behaviors may
 *    happen due to the threshold.
 *
 * ---
 *
 * 2. When using Dragonbones armatures that are too tall or wide, they may clip
 *    into the tile layer above or to the side due to how the Tilemap works.
 *    Things that you would see happen would include clipping into the tops of
 *    trees and structures.
 *
 * ---
 *
 * 3. Certain motions will request specific animations from the Dragonbones
 *    armature. If the animations exist, it will play those motions. If they
 *    don't, the motions may request a different animation down the line. The
 *    request orders are as follows:
 *
 *    Jumping:
 *    - jump, walk, idle
 *
 *    Rope (Climbing) (Requires: VisuMZ_1_EventsMoveCore):
 *    - ropeclimb, ladderclimb, walk, ropeidle, ladderidle, idle
 *
 *    Rope (Idle) (Requires: VisuMZ_1_EventsMoveCore):
 *    - ropeidle, ladderidle, idle
 *
 *    Ladder (Climbing):
 *    - ladderclimb, walk, ladderidle, idle
 *
 *    Ladder (Idle):
 *    - ladderidle, idle
 *
 *    Dashing:
 *    - dash, walk, idle
 *
 *    Walking:
 *    - walk, idle
 *
 *    Idle:
 *    - idle
 *
 *    Name the animations for the Dragonbones armature as such to make the most
 *    out of the motion priority lists.
 *
 * ---
 *
 * 4. You can add directional animations for your Dragonbones armature motion
 *    animations. To do so, add a number after the animation's name like such:
 *    walk2, walk4, walk6, walk8. These numbers are based off the NumPad
 *    directions to determine which way to face:
 *
 *    7 8 9
 *    4   6
 *    1 2 3
 *
 *    These numbers are added onto the priority system listed in #3 above, too.
 *    Diagonal directions also become split and added multiple times for better
 *    streamlining, with a priority given to the horizontal direction before
 *    the vertical direction. For example, dashing becomes the following:
 *
 *    Dashing (Upper Left):
 *    - dash7, dash4, dash8, dash,
 *      walk7, walk4, walk8, walk,
 *      idle7, idle4, idle8, idle
 *
 *    Dashing (Right):
 *    - dash6, dash,
 *      walk6, walk,
 *      idle6, idle
 *
 * ---
 *
 * 5. When a Dragonbones armature is moving, it will animate slower or faster
 *    depending on the character's current movement speed. At speed
 *    '4: Normal', it will animation 4x faster than what's seen in Dragonbones.
 *    At speed '6: x4 Faster', it will animate 6x faster while '1: x8 Slower'
 *    will be at x1 speed seen in Dragonbones. In other words, the speed
 *    animated is equal to the number written on the left of the
 *    movement speed.
 *
 *    When dashing, that multiplier increases by 1 in order to match movement
 *    speeds and the Dragonbones armature will do the same to follow.
 *
 * ---
 *
 * You will need to create your Dragonbones armatures with these 5 key rules in
 * mind in order to make the armatures animate smoothly within your game.
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
 * VisuMZ_3_StateTooltips
 *
 * If you are using a Dragonbones Battler and want to apply a state tooltip to
 * it, the access area of the battler will be based on the hitbox size you
 * declare for the Dragonbones Battler with notetags. This is because all
 * Dragonbones battlers do not have innate automatically calculated hitbox
 * sizes as a result of their dynamically animated nature.
 * 
 * Please refer to the notetag section of the Dragonbones Union plugin for
 * Dragonbones Battler hitboxes to learn how to apply hitbox sizes.
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
 * === Dragonbones Battler Notetags ===
 *
 * The following notetags are to be assigned to either actors and/or enemies.
 * An assigned actor/enemy will have their original sprite hidden from view in
 * favor of the Dragonbones armature to be displayed. Use these notetags to
 * declare various settings for your Dragonbones armatures.
 *
 * ---
 *
 * <Dragonbones Battler: filename>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets the DragonBones associated with this actor/enemy to be 'filename'.
 * - The name will be associated with the assets used.
 * - It will be used to check for associated filenames that end with _ske.json,
 *   _tex.json, and _tex.png.
 * - The listed assets must be found in the assigned assets folder.
 *
 * Examples:
 *
 * <Dragonbones Battler: Demon>
 * <Dragonbones Battler: DragonBoy>
 * <Dragonbones Battler: Swordsman>
 * <Dragonbones Battler: Ubbie>
 *
 * ---
 *
 * <Dragonbones Battler Scale: x, y>
 *
 * <Dragonbones Battler Scale X: x>
 * <Dragonbones Battler Scale Y: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets the base scale for the Dragonbones associated with this actor/enemy.
 *   This is for those instances where a Dragonbones armature is too large or
 *   small and needs to be scaled down/up.
 * - This scale will be amplified by the actor/enemy's sprite's scale value.
 * - Use the 1st notetag to assign values to both Scale X and Scale Y.
 * - Use the 2nd/3rd notetags to assign Scale X and Y values separately.
 * - Use negative values to flip the Dragonbones armature around.
 *
 * Examples:
 * 
 * <Dragonbones Battler Scale: -0.3, 0.3>
 *
 * <Dragonbones Battler Scale X: -0.3>
 * <Dragonbones Battler Scale Y: 0.3>
 *
 * ---
 *
 * <Dragonbones Battler Offset: x, y>
 *
 * <Dragonbones Battler Offset X: x>
 * <Dragonbones Battler Offset Y: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - When a Dragonbones armature is attached to an actor/enemy's sprite, it
 *   will always be attached at the root point assigned within the Dragonbones
 *   data. If a Dragonbones armature has a root point that does not fit well
 *   with your battler sprite, you can offset it using these notetags.
 * - Replace 'x' and 'y' with number values representing how many pixels you
 *   want to offset the Dragonbones armature by.
 * - Use the 1st notetag to assign values to both Offset X and Offset Y.
 * - Use the 2nd/3rd notetags to assign Offset X and Y values separately.
 * - Use negative values to offset to the left (X) or up (Y) directions.
 *
 * Examples:
 *
 * <Dragonbones Battler Offset: -10, 5>
 *
 * <Dragonbones Battler Offset X: -10>
 * <Dragonbones Battler Offset Y: 5>
 *
 * ---
 *
 * <Dragonbones Battler Size: width, height>
 *
 * <Dragonbones Battler Width: x>
 * <Dragonbones Battler Height: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Dragonbones armatures have no standard width or height. This makes it
 *   problematic when trying to calculate the sprite's width/height for Action
 *   Sequences and the like. These notetags allow you to assign a width and
 *   height value to the sprite, despite the fact the Dragonbones armatures
 *   have no such thing.
 * - Replace 'width', 'height', or 'x' with number values representing the
 *   dimension values in pixels.
 * - Use the 1st notetag to assign values to both Width and Height.
 * - Use the 2nd/3rd notetags to assign Width and Height values separately.
 * - If these notetags aren't used, then use the values defined by default in
 *   Plugin Parameters => Battler Settings => Default => Width/Height.
 *
 * Examples:
 *
 * <Dragonbones Battler Size: 50, 100>
 *
 * <Dragonbones Battler Width: 50>
 * <Dragonbones Battler Height: 100>
 *
 * ---
 *
 * <Dragonbones Battler Time Scale: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Lets you adjust the time scale for the Dragonbones armature.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 *
 * Example:
 *
 * <Dragonbones Battler Time Scale: 1.5>
 *
 * ---
 *
 * <Dragonbones Battler Motion Walk: animation>
 * <Dragonbones Battler Motion Wait: animation>
 * <Dragonbones Battler Motion Chant: animation>
 * <Dragonbones Battler Motion Guard: animation>
 * <Dragonbones Battler Motion Damage: animation>
 * <Dragonbones Battler Motion Evade: animation>
 * <Dragonbones Battler Motion Thrust: animation>
 * <Dragonbones Battler Motion Swing: animation>
 * <Dragonbones Battler Motion Missile: animation>
 * <Dragonbones Battler Motion Skill: animation>
 * <Dragonbones Battler Motion Spell: animation>
 * <Dragonbones Battler Motion Item: animation>
 * <Dragonbones Battler Motion Escape: animation>
 * <Dragonbones Battler Motion Victory: animation>
 * <Dragonbones Battler Motion Dying: animation>
 * <Dragonbones Battler Motion Abnormal: animation>
 * <Dragonbones Battler Motion Sleep: animation>
 * <Dragonbones Battler Motion Dead: animation>
 *
 * - Used for: Actor, Enemy Notetags
 * - Use these notetags to assign Dragonbones animations to play when the
 *   actor/enemy sprite is supposed to play such a motion.
 * - Replace 'animation' with the name of the Dragonbones animation.
 * - If this notetag is not used, when such a motion is rquested, it will
 *   default to attempting to play the animation name equal to the motion.
 * - Animation names do not need to be case sensitive.
 * - If no animation is found, then no animation will be played.
 *
 * Examples:
 *
 * <Dragonbones Battler Motion Wait: idle>
 * <Dragonbones Battler Motion Swing: attack>
 * <Dragonbones Battler Motion Thrust: attack>
 * <Dragonbones Battler Motion Missle: attack>
 * <Dragonbones Battler Motion Skill: special>
 * <Dragonbones Battler Motion Spell: special>
 * <Dragonbones Battler Motion Dead: defeated>
 *
 * ---
 *
 * <Dragonbones Battler Settings>
 *  Battler: filename
 *  
 *  Scale: x, y
 *
 *  Scale X: x
 *  Scale Y: x
 *
 *  Offset: x, y
 *
 *  Offset X: x
 *  Offset Y: x
 *
 *  Size: width, height
 *
 *  Width: x
 *  Height: x
 *
 *  Time Scale: x
 *
 *  Motion Walk: animation
 *  Motion Wait: animation
 *  Motion Chant: animation
 *  Motion Guard: animation
 *  Motion Damage: animation
 *  Motion Evade: animation
 *  Motion Thrust: animation
 *  Motion Swing: animation
 *  Motion Missile: animation
 *  Motion Skill: animation
 *  Motion Spell: animation
 *  Motion Item: animation
 *  Motion Escape: animation
 *  Motion Victory: animation
 *  Motion Dying: animation
 *  Motion Abnormal: animation
 *  Motion Sleep: animation
 *  Motion Dead: animation
 * </Dragonbones Battler Settings>
 *
 * - Used for: Actor, Enemy Notetags
 * - The above notetag allows to wrap up all the information you'd like to
 *   set for Dragonbones battler armatures needed inside a single notetag
 *   container.
 * - The settings are the same as the notetags listed above it.
 * - You may remove the settings you don't wish to change.
 * - The only necessary data is the 'Battler: filename' line.
 *
 * Example:
 *
 * <Dragonbones Battler Settings>
 *  Battler: Demon
 *  
 *  Scale: 0.3, 0.3
 *
 *  Size: 80, 80
 *
 *  Motion Wait: idle
 *  Motion Damage: hit
 *  Motion Swing: attack
 *  Motion Thrust: attack
 *  Motion Missile: attack
 *  Motion Skill: special
 *  Motion spell: special
 *  Motion Dead: defeated
 * </Dragonbones Battler Settings>
 *
 * ---
 * 
 * <Dragonbones Hue Affected>
 * 
 * - Used for: Enemy Notetags
 * - The above notetag enables hues to affect enemy battlers.
 * - This will bypass the Plugin Parameter default settings.
 * 
 * ---
 * 
 * <Dragonbones No Hue>
 * 
 * - Used for: Enemy Notetags
 * - The above notetag disables hues to affect enemy battlers.
 * - This will bypass the Plugin Parameter default settings.
 * 
 * ---
 *
 * === Dragonbones Map Sprite Notetags & Comment Tags ===
 *
 * You can also use Dragonbones armatures as map sprites. When used, any of the
 * original sprites before will become invisible and will be replaced with the
 * Dragonbones armature.
 *
 * These notetags can be used for actors and events. In the case of events,
 * both notetags and comment tags can be used to determine what settings to use
 * for the Dragonbones armatures.
 *
 * Be cautious when using Comment Tags for event pages since comments contain a
 * maximum line count of 6.
 *
 * ---
 *
 * <Dragonbones Sprite: filename>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Sets the DragonBones associated with this map sprite to be 'filename'.
 * - The name will be associated with the assets used.
 * - It will be used to check for associated filenames that end with _ske.json,
 *   _tex.json, and _tex.png.
 * - The listed assets must be found in the assigned assets folder.
 *
 * Examples:
 *
 * <Dragonbones Sprite: Demon>
 * <Dragonbones Sprite: DragonBoy>
 * <Dragonbones Sprite: Swordsman>
 * <Dragonbones Sprite: Ubbie>
 *
 * ---
 *
 * <Dragonbones Sprite Scale: x, y>
 *
 * <Dragonbones Sprite Scale X: x>
 * <Dragonbones Sprite Scale Y: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Sets the base scale for the Dragonbones associated with this map sprite.
 *   This is for those instances where a Dragonbones armature is too large or
 *   small and needs to be scaled down/up.
 * - This scale will be amplified by the character's sprite's scale value.
 * - Use the 1st notetag to assign values to both Scale X and Scale Y.
 * - Use the 2nd/3rd notetags to assign Scale X and Y values separately.
 * - Use negative values to flip the Dragonbones armature around.
 *
 * Examples:
 * 
 * <Dragonbones Sprite Scale: -0.3, 0.3>
 *
 * <Dragonbones Sprite Scale X: -0.3>
 * <Dragonbones Sprite Scale Y: 0.3>
 *
 * ---
 *
 * <Dragonbones Sprite Offset: x, y>
 *
 * <Dragonbones Sprite Offset X: x>
 * <Dragonbones Sprite Offset Y: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - When a Dragonbones armature is attached to an character's map sprite, it
 *   will always be attached at the root point assigned within the Dragonbones
 *   data. If a Dragonbones armature has a root point that does not fit well
 *   with your battler sprite, you can offset it using these notetags.
 * - Replace 'x' and 'y' with number values representing how many pixels you
 *   want to offset the Dragonbones armature by.
 * - Use the 1st notetag to assign values to both Offset X and Offset Y.
 * - Use the 2nd/3rd notetags to assign Offset X and Y values separately.
 * - Use negative values to offset to the left (X) or up (Y) directions.
 *
 * Examples:
 *
 * <Dragonbones Sprite Offset: -10, 5>
 *
 * <Dragonbones Sprite Offset X: -10>
 * <Dragonbones Sprite Offset Y: 5>
 *
 * ---
 *
 * <Dragonbones Sprite Time Scale: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the time scale for the Dragonbones armature.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 *
 * Example:
 *
 * <Dragonbones Sprite Time Scale: 1.5>
 *
 * ---
 * 
 * <Dragonbones Sprite Walk Rate: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the animation speed for the Dragonbones armature only
 *   when it is walking.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 * - If used with the <Dragonbones Sprite Time Scale: x>, the speed will stack
 *   multiplicatively.
 *
 * Example:
 *
 * <Dragonbones Sprite Walk Rate: 1.5>
 * 
 * ---
 * 
 * <Dragonbones Sprite Dash Rate: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the animation speed for the Dragonbones armature only
 *   when it is dashing.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 * - If used with the <Dragonbones Sprite Time Scale: x>, the speed will stack
 *   multiplicatively.
 *
 * Example:
 *
 * <Dragonbones Sprite Dash Rate: 1.5>
 * 
 * ---
 *
 * <Dragonbones Sprite Size: width, height>
 *
 * <Dragonbones Sprite Width: x>
 * <Dragonbones Sprite Height: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Dragonbones armatures have no standard width or height. This makes it
 *   problematic when trying to calculate the sprite's width/height for various
 *   plugins that use it. These notetags allow you to assign a width and
 *   height value to the sprite, despite the fact the Dragonbones armatures
 *   have no such thing.
 * - Replace 'width', 'height', or 'x' with number values representing the
 *   dimension values in pixels.
 * - Use the 1st notetag to assign values to both Width and Height.
 * - Use the 2nd/3rd notetags to assign Width and Height values separately.
 * - If these notetags aren't used, then use the values defined by default in
 *   the Plugin Parameters.
 *
 * Examples:
 *
 * <Dragonbones Sprite Size: 48, 64>
 *
 * <Dragonbones Sprite Width: 48>
 * <Dragonbones Sprite Height: 64>
 *
 * ---
 *
 * <Dragonbones Sprite Flip Left>
 * <Dragonbones Sprite Flip Right>
 *
 * <Dragonbones Sprite No Flip Left>
 * <Dragonbones Sprite No Flip Right>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets the map sprite know to flip itself when facing either the left/right
 *   directions in order to reuse animations.
 * - The 'No' variants will prevent flipping from occuring.
 * - These notetags will override settings applied in the Plugin Parameters.
 *
 * ---
 *
 * <Dragonbones Sprite Motion Idle: animation>
 * <Dragonbones Sprite Motion Walk: animation>
 * <Dragonbones Sprite Motion Dash: animation>
 * <Dragonbones Sprite Motion Jump: animation>
 * <Dragonbones Sprite Motion LadderIdle: animation>
 * <Dragonbones Sprite Motion LadderClimb: animation>
 * <Dragonbones Sprite Motion RopeIdle: animation>
 * <Dragonbones Sprite Motion RopeClimb: animation>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you set specific animations different from the ones listed in the
 *   Plugin Parameters for specific motions.
 * - Replace 'animation' with the name of the Dragonbones animation.
 * - If this notetag is not used, when such a motion is rquested, it will
 *   default to attempting to play the animation name equal to the motion.
 * - Animation names do not need to be case sensitive.
 * - If no animation is found, then no animation will be played.
 *
 * Example:
 *
 * <Dragonbones Sprite Motion Idle: stand>
 * <Dragonbones Sprite Motion Walk: move>
 * <Dragonbones Sprite Motion Dash: run>
 * <Dragonbones Sprite Motion Jump: hop>
 *
 * ---
 *
 * <Dragonbones Sprite Settings>
 *  Filename: filename
 *
 *  Scale: x, y
 *
 *  Scale X: x
 *  Scale Y: x
 *
 *  Offset: x, y
 *
 *  Offset X: x
 *  Offset Y: x
 *
 *  Time Scale: x
 * 
 *  Walk Rate: x
 *  Dash Rate: x
 *
 *  Width: x
 *  Height: x
 *
 *  Flip Left
 *  Flip Right
 *
 *  No Flip Left
 *  No Flip Right
 *
 *  Motion Idle: animation
 *  Motion Walk: animation
 *  Motion Dash: animation
 *  Motion Jump: animation
 *  Motion LadderIdle: animation
 *  Motion LadderClimb: animation
 *  Motion RopeIdle: animation
 *  Motion RopeClimb: animation
 * </Dragonbones Sprite Settings>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - The above notetag allows to wrap up all the information you'd like to
 *   set for Dragonbones battler armatures needed inside a single notetag
 *   container.
 * - The settings are the same as the notetags listed above it.
 * - You may remove the settings you don't wish to change.
 * - The only necessary data is the 'Filename: filename' line.
 *
 * Example:
 *
 * <Dragonbones Sprite Settings>
 *  Filename: Ubbie
 *
 *  Scale: 0.1, 0.1
 *
 *  Flip Right
 *
 *  Motion Idle: stand
 *  Motion Walk: walk
 * </Dragonbones Sprite Settings>
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
 * === Battler Plugin Commands ===
 * 
 * ---
 *
 * Battler: Actor Change Settings
 * - Change target actor's Dragonbones armature settings for battle.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *     Filename:
 *     - Change the armature's filename.
 *
 *     Offset X:
 *     - Change the armature's Offset X value.
 *
 *     Offset Y:
 *     - Change the armature's Offset Y value.
 *
 *     Scale X:
 *     - Change the armature's Scale X value.
 * 
 *     Scale Y:
 *     - Change the armature's Scale Y value.
 *
 *     Time Scale:
 *     - Change the armature's Time Scale value.
 *
 *     Width:
 *     - Change the battler width size.
 *
 *     Height:
 *     - Change the battler height size.
 *
 *   Motion Settings:
 *
 *     Walk:
 *     Wait:
 *     Chant:
 *     Guard:
 *     Damage:
 *     Evade:
 *     Thrust:
 *     Swing:
 *     Missile:
 *     Skill:
 *     Spell:
 *     Item:
 *     Escape:
 *     Victory:
 *     Dying:
 *     Abnormal:
 *     Sleep:
 *     Dead:
 *     - Change the animation used for this motion.
 *
 * ---
 * 
 * === Map Sprite Plugin Commands ===
 * 
 * ---
 *
 * Map Sprite: Actor Change Settings
 * - Change target actor's Dragonbones armature settings for map sprites.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *     Filename:
 *     - Change the armature's filename.
 *
 *     Offset X:
 *     - Change the armature's Offset X value.
 *
 *     Offset Y:
 *     - Change the armature's Offset Y value.
 *
 *     Scale X:
 *     - Change the armature's Scale X value.
 * 
 *     Scale Y:
 *     - Change the armature's Scale Y value.
 *
 *     Time Scale:
 *     - Change the armature's Time Scale value.
 * 
 *       Walk Rate:
 *       - Change the armature's walk animation rate.
 * 
 *       Dash Rate:
 *       - Change the armature's dash animation rate.
 *
 *     Width:
 *     - Change the battler width size.
 *
 *     Height:
 *     - Change the battler height size.
 *
 *   Flip Settings:
 *
 *     Flip Left?:
 *     Flip Right:
 *     - Flip the scale x value when facing left/right-ward directions?
 *
 *   Motion Settings:
 *
 *     Idle:
 *     Walk:
 *     Dash:
 *     Jump:
 *     Ladder (Idle):
 *     Ladder (Climb):
 *     Rope (Idle):
 *     Rope (Climb):
 *     - Base rope climbing animation name used.
 *
 * ---
 *
 * Map Sprite: Actor Play Animation
 * - Target actor plays a custom Dragonbones animation.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * NOTE: An alternative to this is to put the following code inside of a
 *       Movement Route's script call:
 *
 *       this.dragonbonesAnimation = "AnimationName";
 *
 *       Replace 'AnimationName' (keep the quotes) with the name of the
 *       Dragonbones animation.
 *
 * ---
 *
 * Map Sprite: Actor Stop Animation
 * - Stops a target actor's custom Dragonbones animation.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 * ---
 *
 * Map Sprite: Event Play Animation
 * - Target event plays a custom Dragonbones animation.
 *
 *   Event ID:
 *   - Select which Event ID to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Event Stop Animation
 * - Stops a target event's custom Dragonbones animation.
 *
 *   Event ID:
 *   - Select which Event ID to affect.
 *
 * ---
 *
 * Map Sprite: Follower Play Animation
 * - Target follower plays a custom Dragonbones animation.
 *
 *   Follower Index:
 *   - Select which Follower Index to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Follower Stop Animation
 * - Stops a target follower's custom Dragonbones animation.
 *
 *   Follower ID:
 *   - Select which Follower Index to affect.
 *
 * ---
 *
 * Map Sprite: Player Play Animation
 * - Player plays a custom Dragonbones animation.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Player Stop Animation
 * - Stops player's custom Dragonbones animation.
 *
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 *
 * Picture: Dragonbones Setup
 * - Setup a Dragonbones armature for a picture.
 *
 *   Picture ID:
 *   - Select which Picture ID(s) to give a Dragonbones armature.
 *
 *   Armature Filename:
 *   - What is the armature's filename?
 *
 *   Play Animation:
 *   - Play this animation once it starts.
 *
 *   Offset: X:
 *   - Default X offset value for this Dragonbones armature.
 *
 *   Offset: Y:
 *   - Default Y offset value for this Dragonbones armature.
 *
 *   Scale: X:
 *   - Default X scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Scale: Y:
 *   - Default Y scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Time Scale:
 *   - Default time scale for this Dragonbones armature.
 *   - Higher values play faster. Lower values play slower.
 *
 * ---
 *
 * Picture: Play Dragonbones Animation
 * - Make an existing Dragonbones armature attached to a picture play
 *   an animation.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Play Animation:
 *   - Play this animation.
 * 
 *   Finish: Revert Idle:
 *   - Revert animation to 'idle' animation after finishing?
 *
 * ---
 *
 * Picture: Offset Dragonbones
 * - Offset the X, Y attachment point of the Dragonbones armature.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Offset: X:
 *   - X offset value for this Dragonbones armature.
 *
 *   Offset: Y:
 *   - Y offset value for this Dragonbones armature.
 *
 * ---
 *
 * Picture: Scale Dragonbones
 * - Change the scaling values of the Dragonbones armature.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Scale: X:
 *   - X scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Scale: Y:
 *   - Y scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 * ---
 *
 * Picture: Time Scale Dragonbones
 * - Change the speed at which Dragonbones animations play.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Time Scale:
 *   - Time scale for this Dragonbones armature.
 *   - Higher values play faster. Lower values play slower.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings that apply to all uses of Dragonbones through
 * this plugin. While the majority of these can remain unchanged, for those who
 * wish to customize the nature of the plugin to their liking can do so through
 * these Plugin Parameters.
 *
 * ---
 *
 * Assets Path
 * - The filepath to the directory that houses all the Dragonbone files.
 *
 * ---
 *
 * Defaults
 * 
 *   Loaded Animation:
 *   - The default animation to play once a Dragonbones armature is loaded.
 * 
 *   Looping Animations:
 *   - Force these animations to become looping animations even if they don't
 *     loop in Dragonbones.
 *
 * ---
 *
 * Skeletal Data
 * Texture Data
 * Texture Asset
 * 
 *   Key:
 *   - Key used to determine where needed data is stored.
 * 
 *   Extension:
 *   - Extension used to determine which files contain needed data.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Settings
 * ============================================================================
 *
 * Actor and Enemy sprites can have Dragonbones armatures attached to them as
 * sprites. Use these settings to make the Dragonbones armatures fit your needs
 * in battle.
 *
 * ---
 *
 * Default Settings
 * 
 *   Enemy Hue Affected?:
 *   - Affect hues for enemies with Dragonbones battlers?
 * 
 *   Offset: X:
 *   - Default X offset for battler sprites.
 * 
 *   Offset: Y:
 *   - Default Y offset for battler sprites.
 * 
 *   Scale: X:
 *   - Default scale for X used by Dragonbones battlers.
 * 
 *     Flip for Actors?:
 *     Flip for Enemies?:
 *     - Flip the scale x value into negative automatically for all actors
 *       or enemies?
 * 
 *   Scale: Y:
 *   - Default scale for Y used by Dragonbones battlers.
 * 
 *   Width:
 *   - Treat battler sprites as if they have this width.
 *   - Used for Action Sequences.
 * 
 *   Height:
 *   - Treat battler sprites as if they have this height.
 *   - Used for Action Sequences.
 *
 * ---
 * 
 * Idle Bypass
 * 
 *   List:
 *   - This is a list of animations that will not return back to the idle
 *     animation after completion.
 *   - Remove them if you want them to revert back to the idle animation
 *     after completion.
 *   - Add to the list if you want animations to stay in their final frame.
 * 
 * ---
 *
 * Default Motions
 * 
 *   Walk:
 *   Wait:
 *   Chant:
 *   Guard:
 *   Damage:
 *   Evade:
 *   Thrust:
 *   Swing:
 *   Missile:
 *   Skill:
 *   Spell:
 *   Item:
 *   Escape:
 *   Victory:
 *   Dying:
 *   Abnormal:
 *   Sleep:
 *   Dead:
 *   - Play this Dragonbones animation whenever this motion is requested
 *     by default.
 *   - Used for Action Sequences.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Sprite Settings
 * ============================================================================
 *
 * These Plugin Parameter settings adjust the default configurations for any
 * map sprite that's using a Dragonbones armature. These settings can be
 * overwritten on per a sprite basis using notetags and comment tags, too.
 *
 * ---
 *
 * Defaults
 * 
 *   Offset: X:
 *   - Default X offset for map sprites.
 * 
 *   Offset: Y:
 *   - Default Y offset for map sprites.
 * 
 *   Scale: X:
 *   - Default scale for X used by Dragonbones map sprites.
 * 
 *     Flip Left?:
 *     Flip Right?:
 *     - Flip the scale x value when facing left/right-ward directions?
 * 
 *   Scale: Y:
 *   - Default scale for Y used by Dragonbones map sprites.
 * 
 *   Time Scale:
 *   - The rate at which animations play.
 *   - Higher numbers go faster.
 * 
 *   Width:
 *   - Treat map sprites as if they have this width.
 *   - Used for various plugins.
 * 
 *   Height:
 *   - Treat map sprites as if they have this height.
 *   - Used for various plugins.
 *
 * ---
 *
 * Motion Settings
 * 
 *   Idle:
 *   Walk:
 *   Dash:
 *   Jump:
 *   Ladder (Idle):
 *   Ladder (Climb):
 *   Rope (Idle):
 *   Rope (Climb):
 *   - Base walk animation name used.
 * 
 *   Walk Timer:
 *   - Number of frames to count as walking so that an idle animation isn't
 *     immediately forced upon stopping.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Experimental Settings
 * ============================================================================
 *
 * These settings are experimental and have not been tested extensively yet.
 *
 * ---
 *
 * Experimental Settings
 * 
 *   Enemy Stances:
 *   - Enemies can use stance motions for idling such as chanting,
 *     guarding, etc.
 *   - Requires VisuMZ_1_BattleCore!
 *   - This is not available normally since animations are not available for
 *     enemies with the base RPG Maker MZ core scripts.
 *   - Disable this to use the default animation flow for enemies.
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
 *
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * Special Thanks To
 * 
 * * Green Kel
 * * Ækashics
 * * Swift Illusion
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.26: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused scene changes back into the battle scene would
 *    cause collapsed Dragonbones Battlers to reappear. Fix made by Arisu.
 * 
 * Version 1.25: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused some Dragonbones animations to be unable to play
 *    on map sprites if they are facing specific directions. Fix made by Irina.
 * 
 * Version 1.24: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that the "Flip Actors" and "Flip Enemies" parameters did not
 *    work properly after using a scale X notetag. Fix made by Olivia.
 * 
 * Version 1.23: January 20, 2023
 * * Feature Update!
 * ** Guard animations should no longer temporarily default to idle stances if
 *    an unnamed animation does not exist if the battler is guarding. Update
 *    made by Irina.
 * 
 * Version 1.22: December 15, 2022
 * * Compatibility Update!
 * ** Should now work with RPG Maker MZ version 1.6.1's updated Pixi JS version
 *    of 5.3.12 from 5.2.4. If ya don't have this plugin updated and you are
 *    using 5.3.12 onward, your battlers won't be loading.
 * 
 * Version 1.21: November 24, 2022
 * * Bug Fixes!
 * ** Custom motions now work better with non-actor participants during actions
 *    involving dragonbones battlers. Fix made by Arisu.
 * 
 * Version 1.20: November 17, 2022
 * * Bug Fixes!
 * ** "Damage" motion wasn't working properly for actors. This should now be
 *    fixed and working properly.
 * * Bug Fixes!
 * ** "Escape" motion should now work properly with Dragonbones actors. Idle
 *    motions will no longer take priority over them.
 * 
 * Version 1.19: November 10, 2022
 * * Bug Fixes!
 * ** Fixed a bug from the v1.18 update that prevented custom motions from
 *    being displayed properly with actors. Fix made by Irina.
 * 
 * Version 1.18: October 13, 2022
 * * Compatibility Update!
 * ** Plugin should be more compatible with VisuMZ_3_VisualStateEffect.
 * 
 * Version 1.17: January 27, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Added Plugin Command Parameter for "Picture: Play Dragonbones Animation":
 * *** Finish: Revert Idle?
 * **** Revert animation to 'idle' animation after finishing?
 * **** Added by Irina
 *
 * Version 1.16: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.15: June 18, 2021
 * * Compatibility Update
 * ** Compatibility update with Elements and Status Menu Core's trait hues.
 *    These will be affected by the notetags and/or Plugin Parameters applied.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Ækashics:
 * *** <Dragonbones Hue Affected>
 * *** <Dragonbones No Hue>
 * **** Determines if this enemy's Dragonbones battler is affected by hues
 *      or not. This will bypass the Plugin Parameter's default value.
 * ** New Plugin Parameter added by Irina and sponsored by Ækashics:
 * *** Plugin Parameters > Battler Settings > Default > Enemy Hue Affected?
 * **** Affect hues for enemies with Dragonbones battlers?
 * **** This will be disabled by default. Enable it or set it to true to make
 *      it work properly.
 * 
 * Version 1.14: April 2, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_3_StateTooltips plugin.
 * 
 * Version 1.13: March 19, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Experimental: Enemy Stances
 * **** Allows enemies to utilize stance motions for idling such as chanting,
 *      guarding, etc.
 * **** Requires VisuMZ_1_BattleCore!
 * **** This is not available normally since animations are not available for
 *      enemies with the base RPG Maker MZ core scripts.
 * **** Disable this to use the default animation flow for enemies.
 * 
 * Version 1.12: February 19, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash upon teleporting with an altering
 *    Dragonbones armature load without a base sprite. Fix made by Irina.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Fixed a bug involving the changing of a Dragonbones battler in-battle to
 *    prevent multiple instances being added at once. Fix made by Irina.
 * 
 * Version 1.10: January 22, 2021
 * * Bug Fixes!
 * ** Upon changing map sprites, Dragonbones characters would become skewed.
 *    This should no longer happen.
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** Map Sprite: Actor Change Settings new Plugin Command parameters
 * *** "Walk Rate" and "Dash Rate" modifiers added.
 * 
 * Version 1.09: November 29, 2020
 * * Bug Fixes!
 * ** Dragonbones height for actors is no longer affected by frame divisibility
 *    for SV Actors to skew the positions of height data. Fix made by Arisu.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** Two new notetags have been added for map sprites by Irina.
 * *** <Dragonbones Sprite Walk Rate: x>
 * *** <Dragonbones Sprite Dash Rate: x>
 * **** These two new notetags allow you to animate specific Dragonbones
 *      animations at a different speed when walking or dashing. These speed
 *      multipliers will stack multiplicatively with the time scale.
 * 
 * Version 1.07: October 25, 2020
 * * Bug Fixes!
 * ** Dead animations for actors no longer keep looping upon motion refreshes.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** New plugin parameter added by Irina.
 * *** Plugin Parameters > Battler Settings > Idle Bypass > List
 * **** This is a list of animations that will not return back to the idle
 *      animation after completion. Remove them if you want them to revert back
 *      to the idle animation after completion. Add to the list if you want
 *      animations to stay in their final frame.
 * 
 * Version 1.06: October 18, 2020
 * * Bug Fixes!
 * ** Enemies with Dragonbones battlers transforming into other enemies with
 *    Dragonbones battlers will now attach the sprites properly. Fix by Yanfly.
 * ** Enemies with Dragonbones battlers transforming into enemies without them
 *    will now remove the non-transformed bitmap.
 * * Documentation Update!
 * ** Added the 'Dragonbones Naming' section.
 * 
 * Version 1.05: October 4, 2020
 * * Bug Fixes!
 * ** Selected Dragonbones battlers will no longer leave behind a residual
 *    blink effect. Fix made by Irina.
 * ** There should be no more crashes from map events that have been previously
 *    deleted but not cleared from the map event list. Fix made by Irina.
 * 
 * Version 1.04: September 20, 2020
 * * Bug Fixes!
 * ** Hidden enemies with Dragonbones should be invisible at the start of
 *    battle. Fix made by Yanfly.
 * 
 * Version 1.03: September 13, 2020
 * * Compatibility Update!
 * ** Added compatibility with the new Battle Core v1.04 features!
 * 
 * Version 1.02: September 6, 2020
 * * Bug Fixes!
 * ** Previously, a Dragonbones battler does not show the blinking indicator if
 *    the battler is a selected target. This is now fixed. Fix made by Yanfly.
 * ** Prevents a crash now if no bitmap is detected for the main sprite.
 * 
 * Version 1.01: August 30, 2020
 * * Bug Fixes!
 * ** Erasing a picture no longer causes a crash when changing scenes. Fix made
 *    by Yanfly.
 * * Compatibility Update
 * ** Added compatibility for VisuStella MZ's Visual State Effects.
 *
 * Version 1.00: August 24, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Battler_ActorChange
 * @text Battler: Actor Change Settings
 * @desc Change target actor's Dragonbones armature settings for battle.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Filename:str
 * @text Filename
 * @parent ActorID:num
 * @desc Change the armature's filename.
 * @default name
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @parent ActorID:num
 * @desc Change the armature's Offset X value.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @parent ActorID:num
 * @desc Change the armature's Offset Y value.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @parent ActorID:num
 * @desc Change the armature's Scale X value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @parent ActorID:num
 * @desc Change the armature's Scale Y value.
 * @default 1.0
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @parent ActorID:num
 * @desc Change the armature's Time Scale value.
 * @default 1.0
 *
 * @arg Width:eval
 * @text Width
 * @parent ActorID:num
 * @desc Change the battler width size.
 * @default 64
 *
 * @arg Height:eval
 * @text Height
 * @parent ActorID:num
 * @desc Change the battler height size.
 * @default 64
 *
 * @arg DefaultMotions
 * @text Motion Settings
 *
 * @arg MotionWalk:str
 * @text Walk
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default walk
 *
 * @arg MotionWait:str
 * @text Wait
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default wait
 *
 * @arg MotionChant:str
 * @text Chant
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default chant
 *
 * @arg MotionGuard:str
 * @text Guard
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default guard
 *
 * @arg MotionDamage:str
 * @text Damage
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default damage
 *
 * @arg MotionEvade:str
 * @text Evade
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default evade
 *
 * @arg MotionThrust:str
 * @text Thrust
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default thrust
 *
 * @arg MotionSwing:str
 * @text Swing
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default swing
 *
 * @arg MotionMissile:str
 * @text Missile
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default missile
 *
 * @arg MotionSkill:str
 * @text Skill
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default skill
 *
 * @arg MotionSpell:str
 * @text Spell
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default spell
 *
 * @arg MotionItem:str
 * @text Item
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default item
 *
 * @arg MotionEscape:str
 * @text Escape
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default escape
 *
 * @arg MotionVictory:str
 * @text Victory
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default victory
 *
 * @arg MotionDying:str
 * @text Dying
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default dying
 *
 * @arg MotionAbnormal:str
 * @text Abnormal
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default abnormal
 *
 * @arg MotionSleep:str
 * @text Sleep
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default sleep
 *
 * @arg MotionDead:str
 * @text Dead
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default dead
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorChange
 * @text Map Sprite: Actor Change Settings
 * @desc Change target actor's Dragonbones armature settings for map sprites.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Filename:str
 * @text Filename
 * @parent ActorID:num
 * @desc Change the armature's filename.
 * @default name
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @parent ActorID:num
 * @desc Change the armature's Offset X value.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @parent ActorID:num
 * @desc Change the armature's Offset Y value.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @parent ActorID:num
 * @desc Change the armature's Scale X value.
 * @default 0.5
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @parent ActorID:num
 * @desc Change the armature's Scale Y value.
 * @default 0.5
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @parent ActorID:num
 * @desc Change the armature's Time Scale value.
 * @default 1.0
 *
 * @arg WalkRate:eval
 * @text Walk Rate
 * @parent TimeScale:eval
 * @desc Change the armature's walk animation rate.
 * @default 1.0
 *
 * @arg DashRate:eval
 * @text Dash Rate
 * @parent TimeScale:eval
 * @desc Change the armature's dash animation rate.
 * @default 1.0
 *
 * @arg Width:eval
 * @text Width
 * @parent ActorID:num
 * @desc Change the armature's width value.
 * @default 48
 *
 * @arg Height:eval
 * @text Height
 * @parent ActorID:num
 * @desc Change the armature's height.
 * @default 48
 *
 * @arg FlipSettings
 * @text Flip Settings
 *
 * @arg FlipLeft:eval
 * @text Flip Left?
 * @parent FlipSettings
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing left-ward directions?
 * @default false
 *
 * @arg FlipRight:eval
 * @text Flip Right?
 * @parent FlipSettings
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing right-ward directions?
 * animation is found?
 * @default false
 *
 * @arg Animations
 * @text Motion Settings
 *
 * @arg Idle:str
 * @text Idle
 * @parent Animations
 * @desc Base idle animation name used.
 * @default idle
 *
 * @arg Walk:str
 * @text Walk
 * @parent Animations
 * @desc Base walk animation name used.
 * @default walk
 *
 * @arg Dash:str
 * @text Dash
 * @parent Animations
 * @desc Base dash animation name used.
 * @default dash
 *
 * @arg Jump:str
 * @text Jump
 * @parent Animations
 * @desc Base jump animation name used.
 * @default jump
 *
 * @arg LadderIdle:str
 * @text Ladder (Idle)
 * @parent Animations
 * @desc Base ladder idle animation name used.
 * @default ladderidle
 *
 * @arg LadderClimb:str
 * @text Ladder (Climb)
 * @parent Animations
 * @desc Base ladder climbing animation name used.
 * @default ladderclimb
 *
 * @arg RopeIdle:str
 * @text Rope (Idle)
 * @parent Animations
 * @desc Base rope idle animation name used.
 * @default ropeidle
 *
 * @arg RopeClimb:str
 * @text Rope (Climb)
 * @parent Animations
 * @desc Base rope climbing animation name used.
 * @default ropecllmb
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorAnimationPlay
 * @text Map Sprite: Actor Play Animation
 * @desc Target actor plays a custom Dragonbones animation.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorAnimationStop
 * @text Map Sprite: Actor Stop Animation
 * @desc Stops a target actor's custom Dragonbones animation.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_EventAnimationPlay
 * @text Map Sprite: Event Play Animation
 * @desc Target event plays a custom Dragonbones animation.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Select which Event ID to affect.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_EventAnimationStop
 * @text Map Sprite: Event Stop Animation
 * @desc Stops a target event's custom Dragonbones animation.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Select which Event ID to affect.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_FollowerAnimationPlay
 * @text Map Sprite: Follower Play Animation
 * @desc Target follower plays a custom Dragonbones animation.
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Select which Follower Index to affect.
 * @default 0
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_FollowerAnimationStop
 * @text Map Sprite: Follower Stop Animation
 * @desc Stops a target follower's custom Dragonbones animation.
 *
 * @arg FollowerIndex:eval
 * @text Follower ID
 * @desc Select which Follower Index to affect.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_PlayerAnimationPlay
 * @text Map Sprite: Player Play Animation
 * @desc Player plays a custom Dragonbones animation.
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_PlayerAnimationStop
 * @text Map Sprite: Player Stop Animation
 * @desc Stops player's custom Dragonbones animation.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_SetupDragonbones
 * @text Picture: Dragonbones Setup
 * @desc Setup a Dragonbones armature for a picture.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID(s) to give a Dragonbones armature.
 * @default 1
 *
 * @arg Filename:str
 * @text Armature Filename
 * @desc What is the armature's filename?
 * @default Untitled
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation once it starts.
 * @default Idle
 *
 * @arg OffsetX:eval
 * @text Offset: X
 * @desc Default X offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset: Y
 * @desc Default Y offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale: X
 * @desc Default X scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale: Y
 * @desc Default Y scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @desc Default time scale for this Dragonbones armature.
 * Higher values play faster. Lower values play slower.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_DragonbonesAnimation
 * @text Picture: Play Dragonbones Animation
 * @desc Make an existing Dragonbones armature attached to a picture play an animation.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @arg IdleFinish:eval
 * @text Finish: Revert Idle?
 * @parent FlipSettings
 * @type boolean
 * @on Revert
 * @off Freeze
 * @desc Revert animation to 'idle' animation after finishing?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_DragonbonesOffset
 * @text Picture: Offset Dragonbones
 * @desc Offset the X, Y attachment point of the Dragonbones armature.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg OffsetX:eval
 * @text Offset: X
 * @desc X offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset: Y
 * @desc Y offset value for this Dragonbones armature.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_ScaleDragonbones
 * @text Picture: Scale Dragonbones
 * @desc Change the scaling values of the Dragonbones armature.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg ScaleX:eval
 * @text Scale: X
 * @desc X scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale: Y
 * @desc Y scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_TimeScaleDragonbones
 * @text Picture: Time Scale Dragonbones
 * @desc Change the speed at which Dragonbones animations play.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @desc Default time scale for this Dragonbones armature.
 * Higher values play faster. Lower values play slower.
 * @default 1.0
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
 * @param DragonbonesUnion
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Main
 * @text Main Settings
 *
 * @param AssetsPath:str
 * @text Assets Path
 * @parent Main
 * @desc The filepath to the directory that houses all the Dragonbone files.
 * @default ./dragonbones_assets/
 *
 * @param General:struct
 * @text General Settings
 * @parent Main
 * @type struct<General>
 * @desc A set of general settings pertaining to all uses of Dragonbones.
 * @default {"Defaults":"","LoadAnimation:str":"idle","LoopingAnimations:arraystr":"[\"idle\",\"walk\",\"wait\",\"chant\",\"guard\",\"dying\",\"abnormal\",\"sleep\",\"dash\",\"ladderidle\",\"ladderclimb\",\"ropeidle\",\"ropeclimb\"]","SkeletalData":"","SkeKey:str":"dbData","SkeExt:str":"_ske.json","TextureData":"","TexKey:str":"texData","TexExt:str":"_tex.json","TextureAsset":"","TxaKey:str":"texAsset","TxaExt:str":"_tex.png"}
 *
 * @param Battler:struct
 * @text Battler Settings
 * @parent Main
 * @type struct<Battler>
 * @desc A set of general settings pertaining to Dragonbones battlers.
 * @default {"Defaults":"","OffsetX:num":"0","OffsetY:num":"0","ScaleX:num":"1.0","FlipActors:eval":"false","FlipEnemies:eval":"false","ScaleY:num":"1.0","TimeScale:num":"1.0","Width:num":"64","Height:num":"64","IdleBypass":"","IdleBypassList:arraystr":"[\"dead\",\"escape\",\"victory\"]","DefaultMotions":"","MotionWalk:str":"walk","MotionWait:str":"wait","MotionChant:str":"chant","MotionGuard:str":"guard","MotionDamage:str":"damage","MotionEvade:str":"evade","MotionThrust:str":"thrust","MotionSwing:str":"swing","MotionMissile:str":"missile","MotionSkill:str":"skill","MotionSpell:str":"spell","MotionItem:str":"item","MotionEscape:str":"escape","MotionVictory:str":"victory","MotionDying:str":"dying","MotionAbnormal:str":"abnormal","MotionSleep:str":"sleep","MotionDead:str":"dead"}
 *
 * @param MapSprite:struct
 * @text Map Sprite Settings
 * @parent Main
 * @type struct<MapSprite>
 * @desc A set of general settings pertaining to Dragonbones map sprites.
 * @default {"Defaults":"","OffsetX:num":"0","OffsetY:num":"0","ScaleX:num":"0.5","FlipLeft:eval":"false","FlipRight:eval":"false","ScaleY:num":"0.5","TimeScale:num":"1.0","Width:num":"48","Height:num":"48","Animations":"","Idle:str":"idle","Walk:str":"walk","WalkTimer:num":"2","Dash:str":"dash","Jump:str":"jump","LadderIdle:str":"ladderidle","LadderClimb:str":"ladderclimb","RopeIdle:str":"ropeidle","RopeClimb:str":"ropecllmb"}
 * 
 * @param Experimental
 * 
 * @param EnemyStances:eval
 * @text Enemy Stances
 * @parent Experimental
 * @type boolean
 * @on Enable Stances
 * @off No Stances
 * @desc Enemies can use stance motions for idling such as
 * chanting, guarding, etc. Requires VisuMZ_1_BattleCore!
 * @default false
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
 * @param Defaults
 *
 * @param LoadAnimation:str
 * @text Loaded Animation
 * @parent Defaults
 * @desc The default animation to play once a Dragonbones armature is loaded.
 * @default idle
 *
 * @param LoopingAnimations:arraystr
 * @text Looping Animations
 * @parent Defaults
 * @type string[]
 * @desc Force these animations to become looping animations even if they don't loop in Dragonbones.
 * @default ["idle","walk","wait","chant","guard","dying","abnormal","sleep","dash","ladderidle","ladderclimb","ropeidle","ropeclimb"]
 *
 * @param SkeletalData
 * @text Skeletal Data
 *
 * @param SkeKey:str
 * @text Key
 * @parent SkeletalData
 * @desc Key used to determine where skeletal data is stored.
 * @default dbData
 *
 * @param SkeExt:str
 * @text Extension
 * @parent SkeletalData
 * @desc Extension used to determine which files contain skeletal data.
 * @default _ske.json
 *
 * @param TextureData
 * @text Texture Data
 *
 * @param TexKey:str
 * @text Key
 * @parent TextureData
 * @desc Key used to determine where texture data is stored.
 * @default texData
 *
 * @param TexExt:str
 * @text Extension
 * @parent TextureData
 * @desc Extension used to determine which files contain texture data.
 * @default _tex.json
 *
 * @param TextureAsset
 * @text Texture Asset
 *
 * @param TxaKey:str
 * @text Key
 * @parent TextureAsset
 * @desc Key used to determine where texture assets are stored.
 * @default texAsset
 *
 * @param TxaExt:str
 * @text Extension
 * @parent TextureAsset
 * @desc Extension used to determine which files contain texture assets.
 * @default _tex.png
 *
 */
/* ----------------------------------------------------------------------------
 * Battler Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param HueAffected:eval
 * @text Enemy Hue Affected?
 * @parent Defaults
 * @type boolean
 * @on Affect Hues
 * @off No Hues
 * @desc Affect hues for enemies with Dragonbones battlers?
 * @default false
 *
 * @param OffsetX:num
 * @text Offset: X
 * @parent Defaults
 * @desc Default X offset for battler sprites.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset: Y
 * @parent Defaults
 * @desc Default Y offset for battler sprites.
 * @default 0
 *
 * @param ScaleX:num
 * @text Scale: X
 * @parent Defaults
 * @desc Default scale for X used by Dragonbones battlers.
 * @default 1.0
 *
 * @param FlipActors:eval
 * @text Flip for Actors?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value into negative automatically for all actors?
 * @default false
 *
 * @param FlipEnemies:eval
 * @text Flip for Enemies?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value into negative automatically for all enemies?
 * @default false
 *
 * @param ScaleY:num
 * @text Scale: Y
 * @parent Defaults
 * @desc Default scale for Y used by Dragonbones battlers.
 * @default 1.0
 *
 * @param TimeScale:num
 * @text Time Scale
 * @parent Defaults
 * @desc The rate at which animations play.
 * Higher numbers go faster.
 * @default 1.0
 *
 * @param Width:num
 * @text Width
 * @parent Defaults
 * @desc Treat battler sprites as if they have this width.
 * Used for Action Sequences.
 * @default 64
 *
 * @param Height:num
 * @text Height
 * @parent Defaults
 * @desc Treat battler sprites as if they have this height.
 * Used for Action Sequences.
 * @default 64
 *
 * @param IdleBypass
 * @text Idle Bypass
 *
 * @param IdleBypassList:arraystr
 * @text List
 * @parent IdleBypass
 * @type combo[]
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc This is a list of animations that will not return back to the idle animation after completion.
 * @default ["dead","escape","victory"]
 *
 * @param DefaultMotions
 * @text Default Motions
 *
 * @param MotionWalk:str
 * @text Walk
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default walk
 *
 * @param MotionWait:str
 * @text Wait
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default wait
 *
 * @param MotionChant:str
 * @text Chant
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default chant
 *
 * @param MotionGuard:str
 * @text Guard
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default guard
 *
 * @param MotionDamage:str
 * @text Damage
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default damage
 *
 * @param MotionEvade:str
 * @text Evade
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default evade
 *
 * @param MotionThrust:str
 * @text Thrust
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default thrust
 *
 * @param MotionSwing:str
 * @text Swing
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default swing
 *
 * @param MotionMissile:str
 * @text Missile
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default missile
 *
 * @param MotionSkill:str
 * @text Skill
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default skill
 *
 * @param MotionSpell:str
 * @text Spell
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default spell
 *
 * @param MotionItem:str
 * @text Item
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default item
 *
 * @param MotionEscape:str
 * @text Escape
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default escape
 *
 * @param MotionVictory:str
 * @text Victory
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default victory
 *
 * @param MotionDying:str
 * @text Dying
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default dying
 *
 * @param MotionAbnormal:str
 * @text Abnormal
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default abnormal
 *
 * @param MotionSleep:str
 * @text Sleep
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default sleep
 *
 * @param MotionDead:str
 * @text Dead
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default dead
 *
 */
/* ----------------------------------------------------------------------------
 * Map Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MapSprite:
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param OffsetX:num
 * @text Offset: X
 * @parent Defaults
 * @desc Default X offset for map sprites.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset: Y
 * @parent Defaults
 * @desc Default Y offset for map sprites.
 * @default 0
 *
 * @param ScaleX:num
 * @text Scale: X
 * @parent Defaults
 * @desc Default scale for X used by Dragonbones map sprites.
 * @default 0.5
 *
 * @param FlipLeft:eval
 * @text Flip Left?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing left-ward directions?
 * @default false
 *
 * @param FlipRight:eval
 * @text Flip Right?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing right-ward directions?
 * animation is found?
 * @default false
 *
 * @param ScaleY:num
 * @text Scale: Y
 * @parent Defaults
 * @desc Default scale for Y used by Dragonbones map sprites.
 * @default 0.5
 *
 * @param TimeScale:num
 * @text Time Scale
 * @parent Defaults
 * @desc The rate at which animations play.
 * Higher numbers go faster.
 * @default 1.0
 *
 * @param Width:num
 * @text Width
 * @parent Defaults
 * @desc Treat map sprites as if they have this width.
 * Used for various plugins.
 * @default 48
 *
 * @param Height:num
 * @text Height
 * @parent Defaults
 * @desc Treat map sprites as if they have this height.
 * Used for various plugins.
 * @default 48
 *
 * @param Animations
 * @text Motion Settings
 *
 * @param Idle:str
 * @text Idle
 * @parent Animations
 * @desc Base idle animation name used.
 * @default idle
 *
 * @param Walk:str
 * @text Walk
 * @parent Animations
 * @desc Base walk animation name used.
 * @default walk
 *
 * @param WalkTimer:num
 * @text Walk Timer
 * @parent Walk:str
 * @desc Number of frames to count as walking so that an idle animation isn't immediately forced upon stopping.
 * @default 2
 *
 * @param Dash:str
 * @text Dash
 * @parent Animations
 * @desc Base dash animation name used.
 * @default dash
 *
 * @param Jump:str
 * @text Jump
 * @parent Animations
 * @desc Base jump animation name used.
 * @default jump
 *
 * @param LadderIdle:str
 * @text Ladder (Idle)
 * @parent Animations
 * @desc Base ladder idle animation name used.
 * @default ladderidle
 *
 * @param LadderClimb:str
 * @text Ladder (Climb)
 * @parent Animations
 * @desc Base ladder climbing animation name used.
 * @default ladderclimb
 *
 * @param RopeIdle:str
 * @text Rope (Idle)
 * @parent Animations
 * @desc Base rope idle animation name used.
 * @default ropeidle
 *
 * @param RopeClimb:str
 * @text Rope (Climb)
 * @parent Animations
 * @desc Base rope climbing animation name used.
 * @default ropecllmb
 *
 */
//=============================================================================

const _0x3e1ce9=_0x24b9;(function(_0x35abc3,_0x5d6c6f){const _0x2d0477=_0x24b9,_0x25a606=_0x35abc3();while(!![]){try{const _0x90cd0=parseInt(_0x2d0477(0x1d9))/0x1*(parseInt(_0x2d0477(0x1a5))/0x2)+parseInt(_0x2d0477(0x1ae))/0x3*(parseInt(_0x2d0477(0x2f2))/0x4)+-parseInt(_0x2d0477(0x37c))/0x5*(parseInt(_0x2d0477(0x231))/0x6)+parseInt(_0x2d0477(0x26f))/0x7*(-parseInt(_0x2d0477(0x235))/0x8)+parseInt(_0x2d0477(0x1fd))/0x9+-parseInt(_0x2d0477(0x2ff))/0xa+parseInt(_0x2d0477(0x2c3))/0xb*(parseInt(_0x2d0477(0x2a6))/0xc);if(_0x90cd0===_0x5d6c6f)break;else _0x25a606['push'](_0x25a606['shift']());}catch(_0x2682ec){_0x25a606['push'](_0x25a606['shift']());}}}(_0xfd34,0x6136e));var label=_0x3e1ce9(0x2ee),tier=tier||0x0,dependencies=['Dragonbones'],pluginData=$plugins[_0x3e1ce9(0x275)](function(_0x4ce2e8){const _0x382fad=_0x3e1ce9;return _0x4ce2e8[_0x382fad(0x19d)]&&_0x4ce2e8[_0x382fad(0x234)][_0x382fad(0x1e7)]('['+label+']');})[0x0];function _0x24b9(_0x1d0b09,_0x3f615e){const _0xfd3459=_0xfd34();return _0x24b9=function(_0x24b986,_0x47a7a7){_0x24b986=_0x24b986-0x192;let _0x36b678=_0xfd3459[_0x24b986];return _0x36b678;},_0x24b9(_0x1d0b09,_0x3f615e);}VisuMZ[label][_0x3e1ce9(0x348)]=VisuMZ[label][_0x3e1ce9(0x348)]||{},VisuMZ['ConvertParams']=function(_0x514bd7,_0x11bae4){const _0x2d4492=_0x3e1ce9;for(const _0x371883 in _0x11bae4){if(_0x371883[_0x2d4492(0x1aa)](/(.*):(.*)/i)){const _0x46b7e8=String(RegExp['$1']),_0x2ed2b5=String(RegExp['$2'])[_0x2d4492(0x329)]()[_0x2d4492(0x2de)]();let _0x3e791b,_0x2152fe,_0x1bf4c6;switch(_0x2ed2b5){case _0x2d4492(0x269):_0x3e791b=_0x11bae4[_0x371883]!==''?Number(_0x11bae4[_0x371883]):0x0;break;case _0x2d4492(0x327):_0x2152fe=_0x11bae4[_0x371883]!==''?JSON[_0x2d4492(0x30f)](_0x11bae4[_0x371883]):[],_0x3e791b=_0x2152fe['map'](_0x290612=>Number(_0x290612));break;case _0x2d4492(0x2e7):_0x3e791b=_0x11bae4[_0x371883]!==''?eval(_0x11bae4[_0x371883]):null;break;case _0x2d4492(0x333):_0x2152fe=_0x11bae4[_0x371883]!==''?JSON['parse'](_0x11bae4[_0x371883]):[],_0x3e791b=_0x2152fe[_0x2d4492(0x1c5)](_0x3883a6=>eval(_0x3883a6));break;case _0x2d4492(0x200):_0x3e791b=_0x11bae4[_0x371883]!==''?JSON[_0x2d4492(0x30f)](_0x11bae4[_0x371883]):'';break;case _0x2d4492(0x1d6):_0x2152fe=_0x11bae4[_0x371883]!==''?JSON[_0x2d4492(0x30f)](_0x11bae4[_0x371883]):[],_0x3e791b=_0x2152fe['map'](_0x2f3939=>JSON[_0x2d4492(0x30f)](_0x2f3939));break;case'FUNC':_0x3e791b=_0x11bae4[_0x371883]!==''?new Function(JSON[_0x2d4492(0x30f)](_0x11bae4[_0x371883])):new Function(_0x2d4492(0x1d3));break;case _0x2d4492(0x218):_0x2152fe=_0x11bae4[_0x371883]!==''?JSON[_0x2d4492(0x30f)](_0x11bae4[_0x371883]):[],_0x3e791b=_0x2152fe[_0x2d4492(0x1c5)](_0x2bd1e3=>new Function(JSON[_0x2d4492(0x30f)](_0x2bd1e3)));break;case _0x2d4492(0x2ac):_0x3e791b=_0x11bae4[_0x371883]!==''?String(_0x11bae4[_0x371883]):'';break;case'ARRAYSTR':_0x2152fe=_0x11bae4[_0x371883]!==''?JSON[_0x2d4492(0x30f)](_0x11bae4[_0x371883]):[],_0x3e791b=_0x2152fe[_0x2d4492(0x1c5)](_0xae5712=>String(_0xae5712));break;case'STRUCT':_0x1bf4c6=_0x11bae4[_0x371883]!==''?JSON[_0x2d4492(0x30f)](_0x11bae4[_0x371883]):{},_0x3e791b=VisuMZ[_0x2d4492(0x331)]({},_0x1bf4c6);break;case _0x2d4492(0x381):_0x2152fe=_0x11bae4[_0x371883]!==''?JSON[_0x2d4492(0x30f)](_0x11bae4[_0x371883]):[],_0x3e791b=_0x2152fe[_0x2d4492(0x1c5)](_0x96e095=>VisuMZ[_0x2d4492(0x331)]({},JSON[_0x2d4492(0x30f)](_0x96e095)));break;default:continue;}_0x514bd7[_0x46b7e8]=_0x3e791b;}}return _0x514bd7;},(_0x4041e5=>{const _0x7d507e=_0x3e1ce9,_0x4a6322=_0x4041e5[_0x7d507e(0x27e)];for(const _0x1eb354 of dependencies){if(!Imported[_0x1eb354]){alert(_0x7d507e(0x31a)[_0x7d507e(0x1b6)](_0x4a6322,_0x1eb354)),SceneManager['exit']();break;}}const _0x38304a=_0x4041e5[_0x7d507e(0x234)];if(_0x38304a[_0x7d507e(0x1aa)](/\[Version[ ](.*?)\]/i)){const _0x36d80d=Number(RegExp['$1']);_0x36d80d!==VisuMZ[label][_0x7d507e(0x306)]&&(_0x7d507e(0x1a8)!==_0x7d507e(0x29f)?(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x7d507e(0x1b6)](_0x4a6322,_0x36d80d)),SceneManager[_0x7d507e(0x372)]()):this[_0x7d507e(0x217)](_0x7d507e(0x236)));}if(_0x38304a[_0x7d507e(0x1aa)](/\[Tier[ ](\d+)\]/i)){if('jpWNH'===_0x7d507e(0x2aa))this[_0x7d507e(0x337)]();else{const _0x2fc5e2=Number(RegExp['$1']);if(_0x2fc5e2<tier){if(_0x7d507e(0x1df)!==_0x7d507e(0x1df)){if(!this[_0x7d507e(0x21a)])return;if(!this[_0x7d507e(0x36f)])return;this[_0x7d507e(0x36f)]['addChildAt'](this[_0x7d507e(0x21a)],0x0);}else alert(_0x7d507e(0x346)[_0x7d507e(0x1b6)](_0x4a6322,_0x2fc5e2,tier)),SceneManager['exit']();}else tier=Math['max'](_0x2fc5e2,tier);}}VisuMZ[_0x7d507e(0x331)](VisuMZ[label][_0x7d507e(0x348)],_0x4041e5[_0x7d507e(0x230)]);})(pluginData);function _0xfd34(){const _0x1aae16=['command357','Battler_ActorChange','Picture_DragonbonesAnimation','QnKCc','clearPageSettings','canActorPlayDragonbonesMotion','PTsHu','QyrPv','Sprite_Actor_updateShadow','xBwvV','playDragonbonesMotion','ARRAYFUNC','Filename','_dragonbones','length','fCXJl','GNgku','code','animations','requestMotionRefresh','yKDZR','QCVLi','height','Sprite_Actor_updateBitmap','BBTii','BattleManager_onEscapeFailure','ScaleX','MotionEscape','dragonbonesFlip','Game_CharacterBase_update','_spriteset','grocz','updateDragonbonesAnimation','addDragonbonesChild','MotionGuard','parameters','2395686eUaeRs','setLastPluginCommandInterpreter','Sprite_Picture_update','description','256Reetfc','chant','actor','timeScale','Sprite_Character_updateCharacterFrame','updateBitmap','DUeKN','add','MapSprite_ActorChange','erasePictureDragonbonesUnion','startMotion','CXKbk','_mainSprite','hasDragonbonesBattler','update','playDragonbonesIdleAnimation','index','Sprite_Enemy_setBattler','setupPageSettings','initDragonbonesData','parseDragonBonesData','MapSprite_FollowerAnimationStop','getLastPluginCommandInterpreter','max','FDWoY','onLoadDragonbones','isActor','FlipRight','battlerHue','isAlive','SpGYV','_enemyId','processLoad','MotionChant','vnGJG','Game_Screen_erasePicture','dash','UTzFn','performCollapseDragonbonesUnion','onEscapeFailure','Animation','Sprite_Actor_initMembers','_stateSprite','lastAnimationName','updateDragonbonesTimeScale','Jump','WuXQx','isSceneBattle','PixiFactory','initMembers','Game_Event_setupPageSettings','performCollapse','NUM','updateFrame','zANPV','dispose','updateShadow','GJbgt','95389gdilQL','erasePicture','updateCharacterFrameDragonbonesUnion','TxaExt','PlkQJ','setupDragonbonesDataNotetags','filter','QhWfn','play','spell','collapseType','BfXlc','yYIrh','HLitR','dragonbonesSpriteData','name','updateShadowDragonbonesUnion','filename','IdleFinish','resources','EatHz','Game_Actor_performDamage','DefaultAnimation','fSLux','wait','LoadQueue','Picture_SetupDragonbones','ygvJn','makeDeepCopy','FlipActors','sleep','LoadAnimation','HueAffected','updateDragonbonesUnion','FlipEnemies','Buxoy','initialize','Dash','EaNAD','updateDragonbonesProperties','HUsFZ','addChild','followers','Sprite_Enemy_setHue','requestDragonbonesAnimation','This\x20is\x20a\x20static\x20class','tFetf','jump','MUVCB','attack','GxoPi','updateDragonbones','isDying','zpvEw','revertToIdle','12UevIuj','offsetY','Sprite_Enemy_initMembers','isGuardWaiting','NTBNp','isSkill','STR','IYTVz','ropeclimb','VERSION','SkeKey','Game_Picture_initialize','EnemyStances','addChildAt','YSbrt','dying','CHDuL','Idle','FollowerIndex','IzKpd','Battler','JTBax','BattleManager_endBattle','ladderidle','damage','_dragonbonesMoveTimer','MotionWait','QdPJZ','playTimes','6991028nUiGMk','bitmap','testLoaded','setHue','skill','TSwCV','isItem','registerCommand','escape','OjDzI','stateMotionIndex','VisuMZ_0_CoreEngine','oXLzu','call','_character','sokAJ','guard','walkRate','Game_Enemy_performAction','wQUtX','rDpvO','performActionDragonbonesUnion','complete','uAflB','HcSWp','_requestedDragonbonesAnimation','clearTryEscaping','trim','follower','gAjcc','hFyHM','_dragonbonesSpriteData','Sprite_Character_initialize','setDragonbonesHue','walk','abnormal','EVAL','isAttack','BburU','dvAxD','Game_Enemy_performCollapse','nSyZX','ActorID','DragonbonesUnion','once','updateDragonbonesArmature','animationNames','4hjZIwf','qOghC','Sprite_Picture_initialize','flipRight','jYLtV','MotionItem','shift','defineProperty','setup','WwReY','event','TexKey','Game_Player_refresh','6690370YQSmcK','factory','isMoving','removeChild','MapSprite_PlayerAnimationPlay','Sprite_Enemy_refreshMotion','type','version','_dragonbonesBattlerData','setupDragonbones','Game_Enemy_setup','RefWo','Game_Enemy_performDamage','scale','wwxGF','attachSpritesToDistortionSprite','parse','MotionSwing','_dragonbonesData','Height','LoadedFilenames','processEscape','RmIoU','isCompleted','hasDragonbones','prepareNextLoadArmature','kYwyk','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','OffsetY','VisuMZ_1_BattleCore','Sprite_Enemy_updateBitmap','scaleY','isActing','isDragonbonesHueAffected','_shadowSprite','animation','rDSdp','terminate','isDead','isSceneMap','ARRAYNUM','OnySF','toUpperCase','isDashing','CTdXq','AssetsPath','disposeDragonbones','_lastPluginCommandInterpreter','ladderclimb','_enemy','ConvertParams','transform','ARRAYEVAL','Game_Interpreter_PluginCommand','createBaseDragonbonesSprite','initMembersDragonbonesUnion','runQueuedCallbacks','ruSIo','EventID','constructor','Game_Actor_performAttack','battlerSprites','setupDragonbonesData','VisuMZ_1_EventsMoveCore','RopeIdle','victory','eventId','DashRate','bind','MapSprite_ActorAnimationPlay','MotionSleep','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','setupDragonbonesDataCommentTags','Settings','FlipLeft','endBattle','SkeExt','isUndecided','enemy','vyRXX','MotionDead','_dragonbonesAnimation','opacity','direction','MotionDamage','setFrame','zgzor','OsXJc','note','EOLvY','MotionWalk','playDragonbonesAnimation','QEscM','push','refresh','checkDragonbonesStringTags','Pkeyk','_dragonbonesFilename','jnuOX','parseTextureAtlasData','_battler','data','offsetX','isMagicSkill','TexExt','PBcZm','refreshMotion','CpgIN','PictureID','findPictureSprite','isChanting','shared','_baseDragonbonesSprite','RopeClimb','Width','exit','refreshMotionDragonbones','_subject','isInputting','Sprite_Character_updateBitmap','vhpEp','CgdXp','_escaped','LadderIdle','dead','5PgUDwl','KFIcp','Picture_TimeScaleDragonbones','updateFrameDragonbonesUnion','_hue','ARRAYSTRUCT','currentDragonbonesAnimation','isOnRope','_escaping','Sprite_Actor_updateFrame','dragonbonesAnimation','yASLj','isOnLadder','MotionMissile','flipLeft','Game_Actor_setup','isHidden','iSZVo','status','KYiOa','ZxADP','jBnSI','TimeScale','Walk','kdrvB','Sprite_Actor','2niFeOb','_dragonbonesName','BattleManager_processEscape','xfSaz','Loader','match','mjTWX','visible','picture','85089BNubEN','Game_Battler_requestMotionRefresh','addDragonbonesAnimationDirections','battler','abxNg','performAction','MotionDying','CallbackQueue','format','item','NdqsF','loadArmature','nIEuV','MotionSpell','isEnemy','_scene','updateCharacterFrame','realMoveSpeed','Game_Enemy_transform','loading','HODUO','scaleX','dragonbonesData','map','LHmdx','Game_Event_clearPageSettings','_playtestF7Looping','_weaponSprite','Game_Battler_requestMotion','texture','oFTIq','MotionAbnormal','VisuMZ_1_OptionsCore','performDamageDragonbonesUnion','_dragonbonesSpriteContainer','loadComplete','General','return\x200','updateDragonbonesSelection','LadderClimb','ARRAYJSON','Sprite_Actor_startMotion','_dragonbonesFlipDirection','775552IRwXcQ','dashRate','MapSprite_EventAnimationStop','MotionSkill','isJumping','zRWJo','uVCPD','round','list','performAttack','MapSprite','_target','ScaleY','load','includes','toLowerCase','qkcvz','Picture_ScaleDragonbones','eaQEv','createArmature','idle','motion','PDWGn','imMTz','5.3.12','MotionThrust','find','performDamage','loadNextArmature','concat','DQhTh','MtFWJ','isGuard','sIcId','Game_Actor_performAction','lastFileName','4167981DjRlFN','Game_Battler_performActionEndMembers','TxaKey','JSON','ckWcs','requestMotion','performActionMotions','Scene_Battle_terminate','MapSprite_ActorAnimationStop','kalkt','width','createDefaultPicture','Game_Actor_performCollapse','prototype','OffsetX','AVqXe'];_0xfd34=function(){return _0x1aae16;};return _0xfd34();}function DragonbonesManager(){const _0x51e53a=_0x3e1ce9;throw new Error(_0x51e53a(0x29c));}DragonbonesManager[_0x3e1ce9(0x32c)]=VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x348)]['AssetsPath'],DragonbonesManager[_0x3e1ce9(0x285)]=VisuMZ[_0x3e1ce9(0x2ee)]['Settings'][_0x3e1ce9(0x1d2)][_0x3e1ce9(0x28e)],DragonbonesManager[_0x3e1ce9(0x313)]=[],DragonbonesManager[_0x3e1ce9(0x288)]=[],DragonbonesManager[_0x3e1ce9(0x1b5)]=[],DragonbonesManager['test']=function(_0x130878,_0x58ab2e,_0x34eeba,_0x6df7b){const _0x460b98=_0x3e1ce9;if(!_0x34eeba)_0x34eeba=SceneManager['_scene'];if(!_0x6df7b)_0x6df7b='testArmature';if(_0x34eeba[_0x6df7b]){if('rxgAa'==='rxgAa'){const _0x562db4=_0x34eeba[_0x6df7b];_0x562db4&&(_0x34eeba[_0x460b98(0x302)](_0x562db4),_0x562db4[_0x460b98(0x26c)]());}else this[_0x460b98(0x1f5)]();}this['loadArmature'](_0x130878,DragonbonesManager[_0x460b98(0x2c5)]['bind'](this,_0x130878,_0x58ab2e,_0x34eeba,_0x6df7b));},DragonbonesManager[_0x3e1ce9(0x2c5)]=function(_0x515576,_0x4ea71b,_0x18c581,_0x2ab621){const _0x32b1ca=_0x3e1ce9,_0x1e5393=this[_0x32b1ca(0x1ec)](_0x515576);_0x1e5393&&(_0x18c581[_0x32b1ca(0x298)](_0x1e5393),_0x1e5393['x']=Graphics[_0x32b1ca(0x207)]/0x2,_0x1e5393['y']=Graphics[_0x32b1ca(0x223)]*0x3/0x4,_0x4ea71b=_0x4ea71b||DragonbonesManager[_0x32b1ca(0x285)],_0x4ea71b=_0x4ea71b[_0x32b1ca(0x1e8)](),_0x1e5393[_0x32b1ca(0x322)][_0x32b1ca(0x21f)][_0x4ea71b]&&_0x1e5393['animation']['play'](_0x4ea71b)),_0x18c581[_0x2ab621]=_0x1e5393;},DragonbonesManager[_0x3e1ce9(0x1ec)]=function(_0x5960c9){const _0x570f78=_0x3e1ce9,_0x12666a=dragonBones[_0x570f78(0x265)][_0x570f78(0x300)]['buildArmatureDisplay'](_0x5960c9);if(!_0x12666a)return null;for(const _0x51f145 in _0x12666a['animation'][_0x570f78(0x21f)]){if(_0x570f78(0x1f0)!==_0x570f78(0x1f0))_0x4b7768[_0x570f78(0x238)]=_0x2861aa(_0x242720['$1']);else{if(_0x51f145[_0x570f78(0x1e8)]()===_0x51f145)continue;_0x12666a['animation'][_0x570f78(0x21f)][_0x51f145[_0x570f78(0x1e8)]()]=_0x12666a[_0x570f78(0x322)][_0x570f78(0x21f)][_0x51f145],delete _0x12666a[_0x570f78(0x322)][_0x570f78(0x21f)][_0x51f145];}}for(let _0x3617ea=0x0;_0x3617ea<_0x12666a[_0x570f78(0x322)][_0x570f78(0x2f1)][_0x570f78(0x21b)];_0x3617ea++){_0x12666a[_0x570f78(0x322)][_0x570f78(0x2f1)][_0x3617ea]=_0x12666a[_0x570f78(0x322)][_0x570f78(0x2f1)][_0x3617ea]['toLowerCase']();}const _0x20a321=VisuMZ[_0x570f78(0x2ee)][_0x570f78(0x348)][_0x570f78(0x1d2)]['LoopingAnimations'];for(let _0x2748ef of _0x20a321){_0x2748ef=_0x2748ef[_0x570f78(0x1e8)]()['trim']();_0x12666a[_0x570f78(0x322)][_0x570f78(0x21f)][_0x2748ef]&&(_0x12666a[_0x570f78(0x322)]['animations'][_0x2748ef]['playTimes']=0x0);for(let _0x40dfda=0x1;_0x40dfda<=0x9;_0x40dfda++){if(_0x570f78(0x2ea)!==_0x570f78(0x1f7)){const _0x2c7d8c=_0x2748ef+_0x40dfda;_0x12666a[_0x570f78(0x322)][_0x570f78(0x21f)][_0x2c7d8c]&&(_0x12666a[_0x570f78(0x322)][_0x570f78(0x21f)][_0x2c7d8c][_0x570f78(0x2c2)]=0x0);}else{const _0x190479=_0x415329[_0x570f78(0x2ee)][_0x570f78(0x348)][_0x570f78(0x1d2)],_0x1a27b0=this['lastFileName'],_0x26b9c7=_0x8b6585[_0x570f78(0x265)][_0x570f78(0x300)];_0x26b9c7[_0x570f78(0x249)](_0x4f53c5[_0x1a27b0+_0x190479['SkeKey']][_0x570f78(0x364)]),_0x26b9c7[_0x570f78(0x362)](_0x3a9d5a[_0x1a27b0+_0x190479[_0x570f78(0x2fd)]]['data'],_0x20af97[_0x1a27b0+_0x190479['TxaKey']]['texture']),this['loadNextArmature']();}}}return _0x12666a['animation'][_0x570f78(0x21f)][DragonbonesManager['DefaultAnimation']]&&_0x12666a['animation'][_0x570f78(0x277)](DragonbonesManager[_0x570f78(0x285)]),_0x12666a;},DragonbonesManager['loadArmature']=function(_0x190bda,_0x5037d6){const _0x19e024=_0x3e1ce9;_0x190bda=_0x190bda[_0x19e024(0x2de)](),DragonbonesManager[_0x19e024(0x288)][_0x19e024(0x35c)](_0x190bda),DragonbonesManager[_0x19e024(0x1b5)][_0x19e024(0x35c)](_0x5037d6);const _0x332f58=PIXI[_0x19e024(0x1a9)][_0x19e024(0x36e)];!_0x332f58[_0x19e024(0x1c1)]&&this[_0x19e024(0x1f5)]();},DragonbonesManager[_0x3e1ce9(0x1f5)]=function(){const _0x1e7ab7=_0x3e1ce9;if(DragonbonesManager[_0x1e7ab7(0x288)][_0x1e7ab7(0x21b)]>0x0){if(_0x1e7ab7(0x201)!==_0x1e7ab7(0x201)){if(!this[_0x1e7ab7(0x21a)])return;const _0x564820=this[_0x1e7ab7(0x21a)][_0x1e7ab7(0x322)],_0x22803d=this['_dragonbonesAnimation']['toLowerCase']()[_0x1e7ab7(0x2de)]();_0x564820['animations'][_0x22803d]&&_0x564820['play'](_0x22803d);}else this[_0x1e7ab7(0x318)]();}else{if(_0x1e7ab7(0x32b)!=='vnlXf')this[_0x1e7ab7(0x337)]();else{if(!this[_0x1e7ab7(0x317)]())return;this[_0x1e7ab7(0x301)]()?this[_0x1e7ab7(0x2bf)]=_0x5f700f['DragonbonesUnion'][_0x1e7ab7(0x348)]['MapSprite']['WalkTimer']:this[_0x1e7ab7(0x2bf)]--;}}},DragonbonesManager['prepareNextLoadArmature']=function(){const _0x3e0df0=_0x3e1ce9,_0x597863=DragonbonesManager[_0x3e0df0(0x288)][_0x3e0df0(0x2f8)]();if(this[_0x3e0df0(0x313)][_0x3e0df0(0x1e7)](_0x597863))_0x3e0df0(0x35f)===_0x3e0df0(0x2b4)?_0x20a04d[_0x3e0df0(0x2ee)][_0x3e0df0(0x239)][_0x3e0df0(0x2d0)](this):this[_0x3e0df0(0x1f5)]();else!this[_0x3e0df0(0x313)][_0x3e0df0(0x1e7)](_0x597863)&&(_0x3e0df0(0x2a1)!=='BocfU'?this[_0x3e0df0(0x255)](_0x597863):(this[_0x3e0df0(0x302)](this[_0x3e0df0(0x21a)]),this['_dragonbones'][_0x3e0df0(0x26c)](),this[_0x3e0df0(0x21a)]=null,this[_0x3e0df0(0x360)]='',this[_0x3e0df0(0x350)]=''));},DragonbonesManager[_0x3e1ce9(0x255)]=function(_0x29a58e){const _0x301750=_0x3e1ce9,_0x55ffa3=PIXI[_0x301750(0x2af)]>=_0x301750(0x1f1);this[_0x301750(0x313)][_0x301750(0x35c)](_0x29a58e),this[_0x301750(0x1fc)]=_0x29a58e;const _0x4cdd1d=VisuMZ[_0x301750(0x2ee)][_0x301750(0x348)][_0x301750(0x1d2)],_0x10ff04=DragonbonesManager[_0x301750(0x32c)],_0x36fd3f=PIXI[_0x301750(0x1a9)][_0x301750(0x36e)];_0x36fd3f[_0x301750(0x23c)](_0x29a58e+_0x4cdd1d['SkeKey'],_0x10ff04+_0x29a58e+_0x4cdd1d[_0x301750(0x34b)]),_0x36fd3f[_0x301750(0x23c)](_0x29a58e+_0x4cdd1d['TexKey'],_0x10ff04+_0x29a58e+_0x4cdd1d[_0x301750(0x367)]),_0x36fd3f[_0x301750(0x23c)](_0x29a58e+_0x4cdd1d[_0x301750(0x1ff)],_0x10ff04+_0x29a58e+_0x4cdd1d[_0x301750(0x272)]),_0x55ffa3?(_0x36fd3f[_0x301750(0x1e6)](_0x36fd3f),_0x36fd3f['onComplete']['once'](()=>DragonbonesManager[_0x301750(0x1d1)](_0x36fd3f,_0x36fd3f[_0x301750(0x282)]))):(_0x36fd3f[_0x301750(0x2ef)](_0x301750(0x2d9),DragonbonesManager[_0x301750(0x1d1)],this),_0x36fd3f['load']());},DragonbonesManager[_0x3e1ce9(0x1d1)]=function(_0x58c784,_0x332587){const _0x4674fe=_0x3e1ce9,_0x16ce17=VisuMZ[_0x4674fe(0x2ee)]['Settings'][_0x4674fe(0x1d2)],_0x2cca23=this[_0x4674fe(0x1fc)],_0x2d6029=dragonBones['PixiFactory'][_0x4674fe(0x300)];_0x2d6029[_0x4674fe(0x249)](_0x332587[_0x2cca23+_0x16ce17[_0x4674fe(0x2b0)]]['data']),_0x2d6029['parseTextureAtlasData'](_0x332587[_0x2cca23+_0x16ce17[_0x4674fe(0x2fd)]][_0x4674fe(0x364)],_0x332587[_0x2cca23+_0x16ce17[_0x4674fe(0x1ff)]][_0x4674fe(0x1cb)]),this[_0x4674fe(0x1f5)]();},DragonbonesManager[_0x3e1ce9(0x337)]=function(){const _0x2045a3=_0x3e1ce9;while(DragonbonesManager[_0x2045a3(0x1b5)]['length']>0x0){if('sokAJ'!==_0x2045a3(0x2d2))while(_0x3fad72[_0x2045a3(0x1b5)][_0x2045a3(0x21b)]>0x0){const _0xbe07d6=_0xc46f33[_0x2045a3(0x1b5)]['shift']();if(_0xbe07d6)_0xbe07d6(this);}else{const _0x5e6871=DragonbonesManager[_0x2045a3(0x1b5)][_0x2045a3(0x2f8)]();if(_0x5e6871)_0x5e6871(this);}}},PluginManager[_0x3e1ce9(0x2ca)](pluginData[_0x3e1ce9(0x27e)],_0x3e1ce9(0x20e),_0x2c347c=>{const _0x49cc62=_0x3e1ce9;if(!$gameMap)return;VisuMZ['ConvertParams'](_0x2c347c,_0x2c347c);const _0x3e30c2=$gameActors['actor'](_0x2c347c[_0x49cc62(0x2ed)]);if(!_0x3e30c2)return;_0x3e30c2[_0x49cc62(0x307)]={'battler':_0x2c347c[_0x49cc62(0x219)],'scaleX':_0x2c347c[_0x49cc62(0x227)],'scaleY':_0x2c347c[_0x49cc62(0x1e5)],'offsetX':_0x2c347c[_0x49cc62(0x20b)],'offsetY':_0x2c347c[_0x49cc62(0x31b)],'timeScale':_0x2c347c[_0x49cc62(0x1a1)],'width':_0x2c347c[_0x49cc62(0x371)],'height':_0x2c347c[_0x49cc62(0x312)],'motion':{'walk':_0x2c347c[_0x49cc62(0x359)],'wait':_0x2c347c[_0x49cc62(0x2c0)],'chant':_0x2c347c[_0x49cc62(0x256)],'guard':_0x2c347c['MotionGuard'],'damage':_0x2c347c[_0x49cc62(0x353)],'evade':_0x2c347c['MotionEvade'],'thrust':_0x2c347c[_0x49cc62(0x1f2)],'swing':_0x2c347c[_0x49cc62(0x310)],'missile':_0x2c347c[_0x49cc62(0x198)],'skill':_0x2c347c[_0x49cc62(0x1dc)],'spell':_0x2c347c[_0x49cc62(0x1bb)],'item':_0x2c347c[_0x49cc62(0x2f7)],'escape':_0x2c347c[_0x49cc62(0x228)],'victory':_0x2c347c['MotionVictory'],'dying':_0x2c347c[_0x49cc62(0x1b4)],'abnormal':_0x2c347c[_0x49cc62(0x1cd)],'sleep':_0x2c347c[_0x49cc62(0x345)],'dead':_0x2c347c['MotionDead']}};}),SceneManager[_0x3e1ce9(0x264)]=function(){const _0x4e590b=_0x3e1ce9;return this[_0x4e590b(0x1bd)]&&this[_0x4e590b(0x1bd)][_0x4e590b(0x33a)]===Scene_Battle;},SceneManager[_0x3e1ce9(0x326)]=function(){const _0x2be233=_0x3e1ce9;return this['_scene']&&this[_0x2be233(0x1bd)]['constructor']===Scene_Map;},VisuMZ[_0x3e1ce9(0x2ee)]['BattleManager_processEscape']=BattleManager[_0x3e1ce9(0x314)],BattleManager[_0x3e1ce9(0x314)]=function(){const _0x1e6796=_0x3e1ce9;return this[_0x1e6796(0x193)]=!![],VisuMZ[_0x1e6796(0x2ee)][_0x1e6796(0x1a7)][_0x1e6796(0x2d0)](this);},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x226)]=BattleManager['onEscapeFailure'],BattleManager[_0x3e1ce9(0x25c)]=function(){const _0x3e4525=_0x3e1ce9;VisuMZ[_0x3e4525(0x2ee)][_0x3e4525(0x226)][_0x3e4525(0x2d0)](this),setTimeout(this[_0x3e4525(0x2dd)][_0x3e4525(0x343)](this),0x1f4);},BattleManager[_0x3e1ce9(0x2dd)]=function(){const _0x5e01c2=_0x3e1ce9;this[_0x5e01c2(0x193)]=![];},VisuMZ['DragonbonesUnion'][_0x3e1ce9(0x2bc)]=BattleManager[_0x3e1ce9(0x34a)],BattleManager['endBattle']=function(_0x152350){const _0x1bb0e0=_0x3e1ce9;this['_escaping']=![],VisuMZ['DragonbonesUnion']['BattleManager_endBattle'][_0x1bb0e0(0x2d0)](this,_0x152350);},BattleManager['isTryingToEscape']=function(){const _0x100c96=_0x3e1ce9;return this['_escaping']||this[_0x100c96(0x379)];},Game_BattlerBase[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1b1)]=function(){const _0x2f5a27=_0x3e1ce9;if(!SceneManager[_0x2f5a27(0x264)]())return null;if(!SceneManager['_scene'][_0x2f5a27(0x22b)])return null;return SceneManager[_0x2f5a27(0x1bd)]['_spriteset']['findTargetSprite'](this);},Game_BattlerBase[_0x3e1ce9(0x20a)]['initDragonbonesData']=function(){const _0xc06ba=_0x3e1ce9,_0x3133ab=VisuMZ['DragonbonesUnion'][_0xc06ba(0x348)][_0xc06ba(0x2ba)];this[_0xc06ba(0x307)]={'battler':'','scaleX':_0x3133ab[_0xc06ba(0x227)],'scaleY':_0x3133ab[_0xc06ba(0x1e5)],'width':_0x3133ab[_0xc06ba(0x371)],'height':_0x3133ab[_0xc06ba(0x312)],'offsetX':_0x3133ab[_0xc06ba(0x20b)],'offsetY':_0x3133ab['OffsetY'],'timeScale':_0x3133ab[_0xc06ba(0x1a1)],'motion':{'walk':_0x3133ab['MotionWalk'],'wait':_0x3133ab[_0xc06ba(0x2c0)],'chant':_0x3133ab['MotionChant'],'guard':_0x3133ab[_0xc06ba(0x22f)],'damage':_0x3133ab[_0xc06ba(0x353)],'evade':_0x3133ab['MotionEvade'],'thrust':_0x3133ab[_0xc06ba(0x1f2)],'swing':_0x3133ab[_0xc06ba(0x310)],'missile':_0x3133ab[_0xc06ba(0x198)],'skill':_0x3133ab[_0xc06ba(0x1dc)],'spell':_0x3133ab['MotionSpell'],'item':_0x3133ab[_0xc06ba(0x2f7)],'escape':_0x3133ab['MotionEscape'],'victory':_0x3133ab['MotionVictory'],'dying':_0x3133ab[_0xc06ba(0x1b4)],'abnormal':_0x3133ab['MotionAbnormal'],'sleep':_0x3133ab[_0xc06ba(0x345)],'dead':_0x3133ab[_0xc06ba(0x34f)]}};if(_0x3133ab[_0xc06ba(0x28c)]&&this[_0xc06ba(0x24f)]())this[_0xc06ba(0x307)][_0xc06ba(0x1c3)]*=-0x1;if(_0x3133ab[_0xc06ba(0x291)]&&this['isEnemy']())this[_0xc06ba(0x307)][_0xc06ba(0x1c3)]*=-0x1;},Game_BattlerBase[_0x3e1ce9(0x20a)][_0x3e1ce9(0x33d)]=function(){const _0x456691=_0x3e1ce9,_0x346eb0=VisuMZ[_0x456691(0x2ee)]['Settings'][_0x456691(0x2ba)],_0x5b8dfd=(this[_0x456691(0x24f)]()?this[_0x456691(0x237)]():this['enemy']())['note'],_0x1a876e=this[_0x456691(0x1c4)]();_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:BATTLER|SKIN|NAME):[ ]*(.*)>/i)&&(_0x1a876e['battler']=String(RegExp['$1'])[_0x456691(0x2de)]());_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER):[ ]*(.*)>/i)&&(_0x456691(0x356)===_0x456691(0x328)?this['playDragonbonesMotion']('walk'):_0x1a876e[_0x456691(0x1b1)]=String(RegExp['$1'])[_0x456691(0x2de)]());if(_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALE:[ ](.*),[ ](.*)>/i)){_0x1a876e['scaleX']=Number(RegExp['$1']),_0x1a876e[_0x456691(0x31e)]=Number(RegExp['$2']);if(_0x346eb0[_0x456691(0x28c)]&&this['isActor']())_0x1a876e['scaleX']*=-0x1;if(_0x346eb0[_0x456691(0x291)]&&this[_0x456691(0x1bc)]())_0x1a876e[_0x456691(0x1c3)]*=-0x1;}if(_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:SCALEX|SCALE X):[ ](.*)>/i)){if(_0x456691(0x1de)!==_0x456691(0x23b)){_0x1a876e[_0x456691(0x1c3)]=Number(RegExp['$1']);if(_0x346eb0['FlipActors']&&this[_0x456691(0x24f)]())_0x1a876e[_0x456691(0x1c3)]*=-0x1;if(_0x346eb0['FlipEnemies']&&this[_0x456691(0x1bc)]())_0x1a876e[_0x456691(0x1c3)]*=-0x1;}else this[_0x456691(0x318)]();}_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALEY:[ ](.*)>/i)&&(_0x1a876e[_0x456691(0x31e)]=Number(RegExp['$1']));_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x456691(0x19f)!==_0x456691(0x2cc)?(_0x1a876e[_0x456691(0x365)]=Number(RegExp['$1']),_0x1a876e[_0x456691(0x2a7)]=Number(RegExp['$2'])):this['setupDragonbones']());_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&(_0x1a876e[_0x456691(0x365)]=Number(RegExp['$1']));if(_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)){if(_0x456691(0x24d)==='FDWoY')_0x1a876e[_0x456691(0x2a7)]=Number(RegExp['$1']);else{const _0x1a3e64=this[_0x456691(0x2d1)][_0x456691(0x27d)]();this['_dragonbonesFlipDirection']=this['_dragonbonesFlipDirection']||0x1;if(_0x1a3e64[_0x456691(0x199)]&&[0x1,0x4,0x7]['includes'](this[_0x456691(0x2d1)]['direction']()))this['_dragonbonesFlipDirection']=-0x1;else{if(_0x1a3e64[_0x456691(0x2f5)]&&[0x9,0x6,0x3][_0x456691(0x1e7)](this[_0x456691(0x2d1)]['direction']()))this['_dragonbonesFlipDirection']=-0x1;else![0x8,0x2]['includes'](this['_character'][_0x456691(0x352)]())&&(this['_dragonbonesFlipDirection']=0x1);}return this['_dragonbonesFlipDirection'];}}_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&(_0x1a876e[_0x456691(0x238)]=Number(RegExp['$1']));_0x5b8dfd['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SIZE:[ ](.*),[ ](.*)>/i)&&(_0x1a876e[_0x456691(0x207)]=Number(RegExp['$1']),_0x1a876e['height']=Number(RegExp['$2']));_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]WIDTH:[ ](.*)>/i)&&(_0x1a876e[_0x456691(0x207)]=Number(RegExp['$1']));_0x5b8dfd['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]HEIGHT:[ ](.*)>/i)&&(_0x1a876e[_0x456691(0x223)]=Number(RegExp['$1']));const _0x52ef07=_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/gi);if(_0x52ef07)for(const _0x441969 of _0x52ef07){_0x441969[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/i);const _0x5ad3ed=String(RegExp['$1'])['toLowerCase']()[_0x456691(0x2de)](),_0x256a6d=String(RegExp['$2'])[_0x456691(0x2de)]();_0x1a876e[_0x456691(0x1ee)][_0x5ad3ed]=_0x256a6d;}if(_0x5b8dfd[_0x456691(0x1aa)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/(?:DB|DRAGONBONE|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>/i)){const _0xa2d902=String(RegExp['$1']);_0xa2d902[_0x456691(0x1aa)](/(?:BATTLER|SKIN|NAME|FILENAME):[ ]*(.*)/i)&&(_0x1a876e['battler']=String(RegExp['$1'])[_0x456691(0x2de)]());if(_0xa2d902['match'](/SCALE:[ ](.*),[ ](.*)/i)){if(_0x456691(0x1a3)!==_0x456691(0x1a3))_0x113ddd['DragonbonesUnion']['Game_Picture_initialize'][_0x456691(0x2d0)](this),this['initDragonbonesData']();else{_0x1a876e[_0x456691(0x1c3)]=Number(RegExp['$1']),_0x1a876e[_0x456691(0x31e)]=Number(RegExp['$2']);if(_0x346eb0[_0x456691(0x28c)]&&this[_0x456691(0x24f)]())_0x1a876e[_0x456691(0x1c3)]*=-0x1;if(_0x346eb0['FlipEnemies']&&this[_0x456691(0x1bc)]())_0x1a876e[_0x456691(0x1c3)]*=-0x1;}}if(_0xa2d902[_0x456691(0x1aa)](/(?:SCALEX|SCALE X):[ ](.*)/i)){if(_0x456691(0x257)!==_0x456691(0x283)){_0x1a876e['scaleX']=Number(RegExp['$1']);if(_0x346eb0[_0x456691(0x28c)]&&this[_0x456691(0x24f)]())_0x1a876e[_0x456691(0x1c3)]*=-0x1;if(_0x346eb0[_0x456691(0x291)]&&this[_0x456691(0x1bc)]())_0x1a876e['scaleX']*=-0x1;}else this[_0x456691(0x29b)](_0x456691(0x2a0)),_0x2c771e[_0x456691(0x2ee)][_0x456691(0x33b)][_0x456691(0x2d0)](this);}_0xa2d902[_0x456691(0x1aa)](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x456691(0x28a)===_0x456691(0x273)?(_0x1eeeec['DragonbonesUnion']['Game_Actor_setup'][_0x456691(0x2d0)](this,_0x338b46),this['initDragonbonesData'](),this[_0x456691(0x33d)]()):_0x1a876e[_0x456691(0x31e)]=Number(RegExp['$1']));if(_0xa2d902[_0x456691(0x1aa)](/OFFSET:[ ](.*),[ ](.*)/i)){if(_0x456691(0x323)!==_0x456691(0x361))_0x1a876e[_0x456691(0x365)]=Number(RegExp['$1']),_0x1a876e['offsetY']=Number(RegExp['$2']);else{const _0x32c9f5=this['createArmature'](_0x531d31);_0x32c9f5&&(_0x25ed94[_0x456691(0x298)](_0x32c9f5),_0x32c9f5['x']=_0xfc8edd[_0x456691(0x207)]/0x2,_0x32c9f5['y']=_0x59c818['height']*0x3/0x4,_0x40d30c=_0x2128c4||_0x1032df['DefaultAnimation'],_0x146d81=_0x4b0cfc[_0x456691(0x1e8)](),_0x32c9f5[_0x456691(0x322)][_0x456691(0x21f)][_0x5757a6]&&_0x32c9f5['animation'][_0x456691(0x277)](_0x3102e5)),_0x2ae16d[_0x29bbcd]=_0x32c9f5;}}_0xa2d902[_0x456691(0x1aa)](/(?:OFFSETX|OFFSET X):[ ](.*)/i)&&(_0x456691(0x2fb)!==_0x456691(0x2fb)?(_0x43e1b2('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x5e06cb,_0x27cef0,_0x22937f)),_0x400bd7[_0x456691(0x372)]()):_0x1a876e[_0x456691(0x365)]=Number(RegExp['$1']));_0xa2d902[_0x456691(0x1aa)](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x456691(0x2d7)!=='Cdsgo'?_0x1a876e['offsetY']=Number(RegExp['$1']):(this['_dragonbones']=null,this[_0x456691(0x360)]='',this['_dragonbonesAnimation']=''));_0xa2d902[_0x456691(0x1aa)](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x1a876e[_0x456691(0x238)]=Number(RegExp['$1']));_0xa2d902[_0x456691(0x1aa)](/SIZE:[ ](.*),[ ](.*)/i)&&(_0x1a876e[_0x456691(0x207)]=Number(RegExp['$1']),_0x1a876e['height']=Number(RegExp['$2']));_0xa2d902[_0x456691(0x1aa)](/WIDTH:[ ](.*)/i)&&(_0x456691(0x2da)===_0x456691(0x2da)?_0x1a876e[_0x456691(0x207)]=Number(RegExp['$1']):_0x2e0ba4=_0x259eac[_0x456691(0x24c)](_0x4ec70f,_0x32a282));_0xa2d902[_0x456691(0x1aa)](/HEIGHT:[ ](.*)/i)&&(_0x1a876e[_0x456691(0x223)]=Number(RegExp['$1']));const _0x344baf=_0xa2d902[_0x456691(0x1aa)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/gi);if(_0x344baf)for(const _0x175707 of _0x344baf){if(_0x456691(0x292)!==_0x456691(0x292))this['_character'][_0x456691(0x195)]='';else{_0x175707[_0x456691(0x1aa)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/i);const _0x4aaaf8=String(RegExp['$1'])[_0x456691(0x1e8)]()[_0x456691(0x2de)](),_0x599e5f=String(RegExp['$2'])[_0x456691(0x2de)]();_0x1a876e[_0x456691(0x1ee)][_0x4aaaf8]=_0x599e5f;}}}},Game_BattlerBase[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1c4)]=function(){const _0xe6658d=_0x3e1ce9;if(this[_0xe6658d(0x307)]!==undefined)return this[_0xe6658d(0x307)];return this[_0xe6658d(0x248)](),this[_0xe6658d(0x33d)](),this[_0xe6658d(0x307)];},Game_BattlerBase[_0x3e1ce9(0x20a)][_0x3e1ce9(0x242)]=function(){const _0x32debd=_0x3e1ce9;return this[_0x32debd(0x1b1)]()&&this[_0x32debd(0x1c4)]()[_0x32debd(0x1b1)]!=='';},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x1ca)]=Game_Battler[_0x3e1ce9(0x20a)]['requestMotion'],Game_Battler['prototype'][_0x3e1ce9(0x202)]=function(_0x39d939){const _0xe0c88=_0x3e1ce9;VisuMZ[_0xe0c88(0x2ee)][_0xe0c88(0x1ca)]['call'](this,_0x39d939),this[_0xe0c88(0x242)]()&&this['battler']()[_0xe0c88(0x217)](_0x39d939);},VisuMZ[_0x3e1ce9(0x2ee)]['Game_Battler_requestMotionRefresh']=Game_Battler['prototype'][_0x3e1ce9(0x220)],Game_Battler[_0x3e1ce9(0x20a)][_0x3e1ce9(0x220)]=function(){const _0x1ed6eb=_0x3e1ce9;VisuMZ[_0x1ed6eb(0x2ee)][_0x1ed6eb(0x1af)]['call'](this),this[_0x1ed6eb(0x242)]()&&this[_0x1ed6eb(0x1b1)]()[_0x1ed6eb(0x244)]();},Game_Battler['prototype']['requestDragonbonesAnimation']=function(_0x551b7c){const _0x4981a2=_0x3e1ce9;if(!this[_0x4981a2(0x242)]())return;this[_0x4981a2(0x1b1)]()['playDragonbonesAnimation'](_0x551b7c),[_0x4981a2(0x2e5),_0x4981a2(0x1ed)][_0x4981a2(0x1e7)](_0x551b7c)?this[_0x4981a2(0x2dc)]=![]:this[_0x4981a2(0x2dc)]=!![];},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x1fe)]=Game_Battler[_0x3e1ce9(0x20a)]['performActionEndMembers'],Game_Battler['prototype']['performActionEndMembers']=function(){const _0xd4ebd9=_0x3e1ce9;this[_0xd4ebd9(0x242)]()&&(this[_0xd4ebd9(0x2dc)]=![]),VisuMZ[_0xd4ebd9(0x2ee)]['Game_Battler_performActionEndMembers'][_0xd4ebd9(0x2d0)](this);},Game_Battler['prototype'][_0x3e1ce9(0x1cf)]=function(){const _0x11e74c=_0x3e1ce9;if(!this[_0x11e74c(0x242)]())return;this[_0x11e74c(0x202)](_0x11e74c(0x2be));},Game_Battler[_0x3e1ce9(0x20a)][_0x3e1ce9(0x25b)]=function(){const _0x46e4eb=_0x3e1ce9;if(!this[_0x46e4eb(0x242)]())return;this[_0x46e4eb(0x202)]('dead');},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x19a)]=Game_Actor['prototype'][_0x3e1ce9(0x2fa)],Game_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x2fa)]=function(_0x51333b){const _0x23bf60=_0x3e1ce9;VisuMZ[_0x23bf60(0x2ee)][_0x23bf60(0x19a)]['call'](this,_0x51333b),this[_0x23bf60(0x248)](),this[_0x23bf60(0x33d)]();},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x1fb)]=Game_Actor['prototype'][_0x3e1ce9(0x1b3)],Game_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1b3)]=function(_0x291c79){const _0x17d16f=_0x3e1ce9;this[_0x17d16f(0x29b)](_0x17d16f(0x2a0)),VisuMZ[_0x17d16f(0x2ee)][_0x17d16f(0x1fb)][_0x17d16f(0x2d0)](this,_0x291c79);},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x33b)]=Game_Actor['prototype'][_0x3e1ce9(0x1e2)],Game_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1e2)]=function(){const _0x13396d=_0x3e1ce9;this[_0x13396d(0x29b)]('attack'),VisuMZ[_0x13396d(0x2ee)][_0x13396d(0x33b)][_0x13396d(0x2d0)](this);},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x284)]=Game_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1f4)],Game_Actor['prototype']['performDamage']=function(){const _0x27e1d6=_0x3e1ce9;VisuMZ[_0x27e1d6(0x2ee)]['Game_Actor_performDamage'][_0x27e1d6(0x2d0)](this),this['performDamageDragonbonesUnion']();},VisuMZ['DragonbonesUnion'][_0x3e1ce9(0x209)]=Game_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x268)],Game_Actor['prototype'][_0x3e1ce9(0x268)]=function(){const _0x4a919f=_0x3e1ce9;VisuMZ[_0x4a919f(0x2ee)][_0x4a919f(0x209)][_0x4a919f(0x2d0)](this),this[_0x4a919f(0x25b)]();},VisuMZ[_0x3e1ce9(0x2ee)]['Game_Enemy_setup']=Game_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x2fa)],Game_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x2fa)]=function(_0x4ac510,_0x34d12b,_0x11d368){const _0x4472af=_0x3e1ce9;VisuMZ[_0x4472af(0x2ee)][_0x4472af(0x309)][_0x4472af(0x2d0)](this,_0x4ac510,_0x34d12b,_0x11d368),this[_0x4472af(0x248)](),this['setupDragonbonesData']();},VisuMZ['DragonbonesUnion'][_0x3e1ce9(0x1c0)]=Game_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x332)],Game_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x332)]=function(_0x14efd9){const _0x3c48c0=_0x3e1ce9,_0x4c6d0b=this[_0x3c48c0(0x254)];VisuMZ[_0x3c48c0(0x2ee)][_0x3c48c0(0x1c0)][_0x3c48c0(0x2d0)](this,_0x14efd9),this[_0x3c48c0(0x254)]!==_0x4c6d0b&&(_0x3c48c0(0x196)!==_0x3c48c0(0x196)?this[_0x3c48c0(0x311)]={'filename':'','animation':_0x20501b[_0x3c48c0(0x285)],'scaleX':0x1,'scaleY':0x1,'offsetX':0x0,'offsetY':0x0,'timeScale':0x1,'revertToIdle':![]}:(this[_0x3c48c0(0x248)](),this['setupDragonbonesData']()));},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x2d5)]=Game_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1b3)],Game_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1b3)]=function(_0x2c9ee1){const _0x29dc48=_0x3e1ce9;VisuMZ[_0x29dc48(0x2ee)][_0x29dc48(0x2d5)][_0x29dc48(0x2d0)](this,_0x2c9ee1),this[_0x29dc48(0x2d8)](_0x2c9ee1);},Game_Enemy['prototype'][_0x3e1ce9(0x2d8)]=function(_0x1d298e){const _0x1262fb=_0x3e1ce9;if(!this['hasDragonbonesBattler']())return;this[_0x1262fb(0x29b)](_0x1262fb(0x2a0));if(Imported[_0x1262fb(0x31c)])return this[_0x1262fb(0x203)](_0x1d298e);if(_0x1d298e[_0x1262fb(0x2e8)]())this[_0x1262fb(0x29b)](_0x1262fb(0x2a0));else{if(_0x1d298e[_0x1262fb(0x1f9)]())this[_0x1262fb(0x202)]('guard');else{if(_0x1d298e[_0x1262fb(0x366)]())'PBcZm'!==_0x1262fb(0x368)?(this[_0x1262fb(0x27f)](),_0x1ccc6e['DragonbonesUnion']['Sprite_Actor_updateShadow'][_0x1262fb(0x2d0)](this),this[_0x1262fb(0x363)]&&this['_battler'][_0x1262fb(0x242)]()&&(this[_0x1262fb(0x321)]['visible']=![])):this[_0x1262fb(0x202)](_0x1262fb(0x278));else{if(_0x1d298e[_0x1262fb(0x2ab)]())_0x1d298e[_0x1262fb(0x1b7)]()[_0x1262fb(0x2be)]['type']>0x0?_0x1262fb(0x22c)!=='pxVwy'?this[_0x1262fb(0x29b)](_0x1262fb(0x2a0)):_0x515b6e[_0x1262fb(0x2a7)]=_0x199c49(_0x374d31['$1']):_0x1262fb(0x2cf)!==_0x1262fb(0x2cf)?(this['_baseDragonbonesSprite'][_0x1262fb(0x302)](this[_0x1262fb(0x21a)]),this[_0x1262fb(0x21a)][_0x1262fb(0x26c)](),this[_0x1262fb(0x21a)]=null,this[_0x1262fb(0x360)]='',this[_0x1262fb(0x350)]=''):this['requestMotion']('skill');else _0x1d298e[_0x1262fb(0x2c9)]()&&(_0x1262fb(0x216)!==_0x1262fb(0x216)?this[_0x1262fb(0x217)](_0x3434d2):this[_0x1262fb(0x202)](_0x1262fb(0x1b7)));}}}},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x30b)]=Game_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1f4)],Game_Enemy['prototype'][_0x3e1ce9(0x1f4)]=function(){const _0x284772=_0x3e1ce9;VisuMZ[_0x284772(0x2ee)][_0x284772(0x30b)][_0x284772(0x2d0)](this),this['performDamageDragonbonesUnion']();},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x2eb)]=Game_Enemy['prototype'][_0x3e1ce9(0x268)],Game_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x268)]=function(){const _0x90a7c1=_0x3e1ce9;VisuMZ[_0x90a7c1(0x2ee)][_0x90a7c1(0x2eb)]['call'](this),this[_0x90a7c1(0x25b)]();},VisuMZ[_0x3e1ce9(0x2ee)]['Scene_Battle_terminate']=Scene_Battle[_0x3e1ce9(0x20a)][_0x3e1ce9(0x324)],Scene_Battle[_0x3e1ce9(0x20a)]['terminate']=function(){const _0x3978e9=_0x3e1ce9;this[_0x3978e9(0x22b)][_0x3978e9(0x32d)](),VisuMZ['DragonbonesUnion']['Scene_Battle_terminate'][_0x3978e9(0x2d0)](this);},Sprite_Battler[_0x3e1ce9(0x20a)]['initMembersDragonbonesUnion']=function(){const _0x30b25b=_0x3e1ce9;this[_0x30b25b(0x21a)]=null,this['_dragonbonesName']='';},Sprite_Battler['prototype']['setupDragonbones']=function(){const _0x2a3c13=_0x3e1ce9;this[_0x2a3c13(0x32d)]();const _0xfcfb5c=this[_0x2a3c13(0x363)][_0x2a3c13(0x1c4)]();this[_0x2a3c13(0x1a6)]=_0xfcfb5c[_0x2a3c13(0x1b1)],armatureName=_0xfcfb5c[_0x2a3c13(0x1b1)],DragonbonesManager[_0x2a3c13(0x1b9)](armatureName,this[_0x2a3c13(0x24e)]['bind'](this)),this['bitmap']=new Bitmap(_0xfcfb5c['width'],_0xfcfb5c['height']),this['_mainSprite']&&(this[_0x2a3c13(0x241)][_0x2a3c13(0x2c4)]=new Bitmap(_0xfcfb5c[_0x2a3c13(0x207)],_0xfcfb5c[_0x2a3c13(0x223)]));},Sprite_Battler[_0x3e1ce9(0x20a)][_0x3e1ce9(0x32d)]=function(){const _0x53a5e9=_0x3e1ce9;this['_dragonbones']&&(this[_0x53a5e9(0x1d0)]&&this[_0x53a5e9(0x1d0)]['removeChild'](this['_dragonbones']),this[_0x53a5e9(0x302)](this[_0x53a5e9(0x21a)]),this[_0x53a5e9(0x21a)][_0x53a5e9(0x26c)](),delete this[_0x53a5e9(0x21a)],delete this[_0x53a5e9(0x1a6)]);},Sprite_Battler['prototype'][_0x3e1ce9(0x24e)]=function(){const _0x12b566=_0x3e1ce9,_0x63d4bc=this[_0x12b566(0x363)][_0x12b566(0x1c4)]();this['_dragonbones']=DragonbonesManager[_0x12b566(0x1ec)](_0x63d4bc[_0x12b566(0x1b1)]);!this[_0x12b566(0x1d0)]&&(_0x12b566(0x1f8)!=='VDyeP'?(this[_0x12b566(0x1d0)]=new Sprite(),this[_0x12b566(0x1d0)][_0x12b566(0x298)](this['_dragonbones'])):_0x5a93ba*=0x2);this['addChildAt'](this[_0x12b566(0x1d0)],0x0);this[_0x12b566(0x30e)]&&('usHhY'==='usHhY'?(this[_0x12b566(0x30e)](),this[_0x12b566(0x1d0)]['addChild'](this[_0x12b566(0x21a)])):(this['_dragonbonesAnimation']=_0x18882b[_0x12b566(0x322)],this['playDragonbonesAnimation']()));this[_0x12b566(0x244)](),this[_0x12b566(0x21a)]['x']=_0x63d4bc[_0x12b566(0x365)],this[_0x12b566(0x21a)]['y']=_0x63d4bc[_0x12b566(0x2a7)],this[_0x12b566(0x21a)]['scale']['x']=_0x63d4bc['scaleX'],this['_dragonbones'][_0x12b566(0x30c)]['y']=_0x63d4bc[_0x12b566(0x31e)];this[_0x12b566(0x363)]&&this[_0x12b566(0x363)][_0x12b566(0x19b)]()&&(this[_0x12b566(0x351)]=0x0);if(this[_0x12b566(0x363)]&&this[_0x12b566(0x363)][_0x12b566(0x325)]()){this[_0x12b566(0x217)](_0x12b566(0x37b)),this[_0x12b566(0x2a2)]();if(this[_0x12b566(0x363)][_0x12b566(0x279)]()<0x3){if('jSlgU'!=='eHfYk')this[_0x12b566(0x351)]=0x0;else{_0x5af5f8[_0x12b566(0x35c)](_0x32ef55+0x4);if(_0x1fdbb1['flipLeft'])_0x5b4b5c['push'](_0x3c6000+0x6);_0x4470e3[_0x12b566(0x35c)](_0xc184a4+0x2);}}}},Sprite_Battler[_0x3e1ce9(0x20a)][_0x3e1ce9(0x217)]=function(_0x1b7ad3){const _0x432739=_0x3e1ce9;if(!this[_0x432739(0x21a)])return;if(_0x1b7ad3===_0x432739(0x1ed)){if(_0x432739(0x20c)!==_0x432739(0x20c))this[_0x432739(0x29b)]('attack');else{if(this[_0x432739(0x363)][_0x432739(0x2a3)]())_0x1b7ad3=_0x432739(0x2b5);else this['_battler'][_0x432739(0x1f9)]()||this[_0x432739(0x363)]['isGuardWaiting']()?_0x1b7ad3='guard':_0x1b7ad3=_0x432739(0x2e5);}}const _0x1900e0=this[_0x432739(0x363)][_0x432739(0x1c4)]();if(_0x1900e0[_0x432739(0x1ee)][_0x1b7ad3]){if(_0x432739(0x1a0)===_0x432739(0x2a4))_0x299dca[_0x432739(0x207)]=_0x2609e8(_0xef6416['$1']),_0x4981d6[_0x432739(0x223)]=_0x241672(_0x16c44b['$2']);else{const _0x4423b8=_0x1900e0[_0x432739(0x1ee)][_0x1b7ad3];this[_0x432739(0x35a)](_0x4423b8);}}},Sprite_Battler[_0x3e1ce9(0x20a)][_0x3e1ce9(0x35a)]=function(_0x32305c){const _0x4ff216=_0x3e1ce9;_0x32305c=_0x32305c[_0x4ff216(0x1e8)]();if(!this[_0x4ff216(0x21a)])return;[_0x4ff216(0x1ed),_0x4ff216(0x287)][_0x4ff216(0x1e7)](_0x32305c)&&this[_0x4ff216(0x363)][_0x4ff216(0x1f9)]()&&(_0x32305c='guard');const _0x4622ba=this[_0x4ff216(0x21a)][_0x4ff216(0x322)];if(_0x4622ba['animations'][_0x32305c]){if('MrfKV'!==_0x4ff216(0x2ec)){const _0x4b80b1=_0x4622ba[_0x4ff216(0x260)],_0x3e9b9a=[_0x4ff216(0x1ed),_0x4ff216(0x2e5),'wait',_0x4ff216(0x236),'guard','dying',_0x4ff216(0x2e6),'sleep','dead'];if(_0x4b80b1===_0x32305c&&_0x3e9b9a[_0x4ff216(0x1e7)](_0x32305c))return;_0x4622ba['play'](_0x32305c);}else this['requestMotion'](_0x4ff216(0x1b7));}},Sprite_Battler[_0x3e1ce9(0x20a)]['updateDragonbones']=function(){const _0x5175d7=_0x3e1ce9;this['updateDragonbonesTimeScale'](),this[_0x5175d7(0x22d)](),this[_0x5175d7(0x1d4)]();},Sprite_Battler[_0x3e1ce9(0x20a)]['updateDragonbonesTimeScale']=function(){const _0x1b6395=_0x3e1ce9;if(!this['_dragonbones'])return;let _0x437288=this[_0x1b6395(0x363)][_0x1b6395(0x1c4)]()[_0x1b6395(0x238)];const _0x46ca0b=SceneManager[_0x1b6395(0x1bd)];Imported[_0x1b6395(0x2ce)]&&_0x46ca0b[_0x1b6395(0x1c8)]&&$gameTemp['_playTestFastMode']&&(_0x1b6395(0x19e)!==_0x1b6395(0x1ef)?_0x437288*=0x2:_0x2ad185[_0x1b6395(0x2f5)]=![]),Imported[_0x1b6395(0x1ce)]&&_0x46ca0b['_battleAniSpeedLooping']&&(_0x437288*=(ConfigManager['battleAniSpeed']||0x0)+0x1),this['_dragonbones'][_0x1b6395(0x322)][_0x1b6395(0x238)]=_0x437288;},Sprite_Battler[_0x3e1ce9(0x20a)][_0x3e1ce9(0x22d)]=function(){const _0x595564=_0x3e1ce9;if(!this[_0x595564(0x21a)])return;const _0x229790=this[_0x595564(0x21a)]['animation'];if(_0x229790[_0x595564(0x316)]){if(_0x595564(0x2c8)!=='TSwCV')_0xb312e8['scaleX']=_0x223eac(_0x1e5261['$1']);else{const _0x69e1e2=_0x229790[_0x595564(0x260)];let _0x1e8767=VisuMZ[_0x595564(0x2ee)][_0x595564(0x348)][_0x595564(0x2ba)]['IdleBypassList'];_0x1e8767===undefined&&(_0x1e8767=['dead',_0x595564(0x2cb),_0x595564(0x340)]),!_0x1e8767[_0x595564(0x1e7)](_0x69e1e2)&&this['playDragonbonesIdleAnimation']();}}},Sprite_Battler[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1d4)]=function(){return;},Sprite_Battler[_0x3e1ce9(0x20a)]['playDragonbonesIdleAnimation']=function(){const _0x1057d4=_0x3e1ce9;if(!this[_0x1057d4(0x21a)])return;const _0x1c939f=this[_0x1057d4(0x363)];if(!_0x1c939f)return;if(_0x1c939f[_0x1057d4(0x1bc)]()){if(_0x1057d4(0x1cc)!==_0x1057d4(0x1cc))this['_dragonbonesSpriteContainer']=new _0x105b24(),this['_dragonbonesSpriteContainer']['addChild'](this[_0x1057d4(0x21a)]);else{const _0x2e0bfb=this['_dragonbones'][_0x1057d4(0x322)];if(_0x2e0bfb&&!_0x2e0bfb[_0x1057d4(0x316)])return;}}if(this[_0x1057d4(0x212)]()){if('RmIoU'!==_0x1057d4(0x315))_0x346072[_0x1057d4(0x2ee)][_0x1057d4(0x29a)][_0x1057d4(0x2d0)](this,_0x39e8ac);else{const _0x3e28a6=this[_0x1057d4(0x21a)]['animation'];if(_0x3e28a6&&!_0x3e28a6[_0x1057d4(0x316)])return;}}_0x1c939f[_0x1057d4(0x252)]()&&this['playDragonbonesAnimation'](_0x1057d4(0x1ed));const _0x44d87c=_0x1c939f[_0x1057d4(0x2cd)]();if(_0x1c939f[_0x1057d4(0x375)]()||_0x1c939f['isActing']())_0x1057d4(0x2d6)!=='wQUtX'?this['requestMotion']('skill'):this['playDragonbonesMotion'](_0x1057d4(0x2e5));else{if(_0x44d87c===0x3)this[_0x1057d4(0x217)]('dead');else{if(_0x44d87c===0x2)this[_0x1057d4(0x217)](_0x1057d4(0x28d));else{if(_0x1c939f[_0x1057d4(0x24f)]()&&BattleManager['isTryingToEscape']())this[_0x1057d4(0x217)]('escape');else{if(_0x1c939f[_0x1057d4(0x36d)]())this[_0x1057d4(0x217)](_0x1057d4(0x236));else{if(_0x1c939f['isGuard']()||_0x1c939f[_0x1057d4(0x2a9)]())this[_0x1057d4(0x217)](_0x1057d4(0x2d3));else{if(_0x44d87c===0x1)'wdHLI'==='wdHLI'?this[_0x1057d4(0x217)](_0x1057d4(0x2e6)):_0x3ad77a[_0x1057d4(0x207)]=_0x5cc4f5(_0x150b22['$1']);else{if(_0x1c939f[_0x1057d4(0x2a3)]())this['playDragonbonesMotion'](_0x1057d4(0x1ed));else _0x1c939f[_0x1057d4(0x34c)]()?this[_0x1057d4(0x217)]('idle'):this['playDragonbonesMotion'](_0x1057d4(0x1ed));}}}}}}}},Sprite_Battler['prototype']['canActorPlayDragonbonesMotion']=function(){const _0x5307f9=_0x3e1ce9;if(!this[_0x5307f9(0x363)][_0x5307f9(0x24f)]())return![];if(this[_0x5307f9(0x363)]===BattleManager[_0x5307f9(0x374)])return!![];if(this[_0x5307f9(0x363)]===BattleManager[_0x5307f9(0x237)]()&&this[_0x5307f9(0x363)][_0x5307f9(0x375)]())return!![];if(this['_battler'][_0x5307f9(0x2dc)])return!![];if(BattleManager[_0x5307f9(0x1e4)]===this['_battler'])return!![];if(BattleManager['_targets'][_0x5307f9(0x1e7)](this[_0x5307f9(0x363)]))return!![];return![];},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x29a)]=Sprite_Enemy[_0x3e1ce9(0x20a)]['setHue'],Sprite_Enemy['prototype'][_0x3e1ce9(0x2c6)]=function(_0x131958){const _0x3397ef=_0x3e1ce9;this[_0x3397ef(0x320)]()?this[_0x3397ef(0x2e4)](_0x131958):VisuMZ['DragonbonesUnion'][_0x3397ef(0x29a)]['call'](this,_0x131958);},Sprite_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x320)]=function(){const _0x577e22=_0x3e1ce9;if(!this[_0x577e22(0x363)])return![];if(!this[_0x577e22(0x21a)])return![];const _0x15129e=this[_0x577e22(0x363)][_0x577e22(0x34d)]()[_0x577e22(0x357)]||'';if(_0x15129e[_0x577e22(0x1aa)](/<DRAGONBONES HUE AFFECTED>/i))return!![];else{if(_0x15129e[_0x577e22(0x1aa)](/<DRAGONBONES NO HUE>/i))return![];}return VisuMZ[_0x577e22(0x2ee)]['Settings'][_0x577e22(0x2ba)][_0x577e22(0x28f)];},Sprite_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x2e4)]=function(_0x2643e4){const _0x1c4b17=_0x3e1ce9;this['_dragonbonesSpriteContainer'][_0x1c4b17(0x380)]!==_0x2643e4&&('GNgku'!==_0x1c4b17(0x21d)?_0x5303f8[_0x1c4b17(0x1b1)]=_0x534e10(_0x18dcdd['$1'])[_0x1c4b17(0x2de)]():this['_dragonbonesSpriteContainer'][_0x1c4b17(0x2c6)](_0x2643e4));},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x25e)]=Sprite_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x266)],Sprite_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x266)]=function(){const _0x277bbc=_0x3e1ce9;VisuMZ['DragonbonesUnion'][_0x277bbc(0x25e)][_0x277bbc(0x2d0)](this),this[_0x277bbc(0x336)]();},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x224)]=Sprite_Actor['prototype'][_0x3e1ce9(0x23a)],Sprite_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x23a)]=function(){const _0x1e1b85=_0x3e1ce9,_0x50ec21=this[_0x1e1b85(0x363)];if(_0x50ec21[_0x1e1b85(0x242)]()){if(_0x1e1b85(0x222)!=='EKPir')Sprite_Battler[_0x1e1b85(0x20a)][_0x1e1b85(0x23a)][_0x1e1b85(0x2d0)](this),this[_0x1e1b85(0x1a6)]!==_0x50ec21[_0x1e1b85(0x1c4)]()['battler']&&this[_0x1e1b85(0x308)](),this[_0x1e1b85(0x2a2)]();else{_0x45be66[_0x1e1b85(0x35c)](_0x223875+0x6);if(_0x392cbe[_0x1e1b85(0x2f5)])_0x2ae113['push'](_0x380852+0x4);_0x222a3c[_0x1e1b85(0x35c)](_0x25ce1e+0x8);}}else _0x1e1b85(0x276)===_0x1e1b85(0x240)?this['_battler']&&this['_battler'][_0x1e1b85(0x242)]()?this[_0x1e1b85(0x37f)]():_0x330c82[_0x1e1b85(0x2ee)]['Sprite_Actor_updateFrame']['call'](this):(VisuMZ[_0x1e1b85(0x2ee)][_0x1e1b85(0x224)][_0x1e1b85(0x2d0)](this),this[_0x1e1b85(0x302)](this[_0x1e1b85(0x21a)]));},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x1d7)]=Sprite_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x23f)],Sprite_Actor[_0x3e1ce9(0x20a)]['startMotion']=function(_0x3935ee){const _0x482d7a=_0x3e1ce9;VisuMZ['DragonbonesUnion'][_0x482d7a(0x1d7)]['call'](this,_0x3935ee),this[_0x482d7a(0x33a)]['name']===_0x482d7a(0x1a4)&&(_0x482d7a(0x2c1)===_0x482d7a(0x2c1)?this[_0x482d7a(0x217)](_0x3935ee):_0x686d2b[_0x482d7a(0x322)][_0x482d7a(0x21f)][_0x5733b3][_0x482d7a(0x2c2)]=0x0);},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x215)]=Sprite_Actor['prototype']['updateShadow'],Sprite_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x26d)]=function(){const _0x38ae65=_0x3e1ce9;this[_0x38ae65(0x27f)](),VisuMZ[_0x38ae65(0x2ee)]['Sprite_Actor_updateShadow']['call'](this),this['_battler']&&this['_battler'][_0x38ae65(0x242)]()&&(this['_shadowSprite']['visible']=![]);},Sprite_Actor['prototype'][_0x3e1ce9(0x27f)]=function(){const _0x40bef0=_0x3e1ce9;if(this[_0x40bef0(0x33a)]!==Sprite_Actor)return;let _0x331a12=!![];if(this[_0x40bef0(0x363)]&&this['_battler'][_0x40bef0(0x242)]())_0x331a12=![];this[_0x40bef0(0x241)][_0x40bef0(0x1ac)]=_0x331a12,this[_0x40bef0(0x1c9)][_0x40bef0(0x1ac)]=_0x331a12,this[_0x40bef0(0x25f)]['visible']=_0x331a12;},VisuMZ['DragonbonesUnion'][_0x3e1ce9(0x194)]=Sprite_Actor[_0x3e1ce9(0x20a)]['updateFrame'],Sprite_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x26a)]=function(){const _0x50b4be=_0x3e1ce9;this[_0x50b4be(0x363)]&&this[_0x50b4be(0x363)]['hasDragonbonesBattler']()?this[_0x50b4be(0x37f)]():VisuMZ[_0x50b4be(0x2ee)][_0x50b4be(0x194)][_0x50b4be(0x2d0)](this);},Sprite_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x37f)]=function(){const _0x1ee8bc=_0x3e1ce9,_0x1c76c4=this[_0x1ee8bc(0x241)][_0x1ee8bc(0x2c4)];if(_0x1c76c4){const _0x41a65b=_0x1c76c4[_0x1ee8bc(0x207)],_0x164ce7=_0x1c76c4[_0x1ee8bc(0x223)];this[_0x1ee8bc(0x241)][_0x1ee8bc(0x354)](0x0,0x0,_0x41a65b,_0x164ce7),this['setFrame'](0x0,0x0,_0x41a65b,_0x164ce7);}},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x2a8)]=Sprite_Enemy['prototype']['initMembers'],Sprite_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x266)]=function(){const _0x4afd8c=_0x3e1ce9;VisuMZ[_0x4afd8c(0x2ee)][_0x4afd8c(0x2a8)][_0x4afd8c(0x2d0)](this),this[_0x4afd8c(0x336)]();},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x246)]=Sprite_Enemy[_0x3e1ce9(0x20a)]['setBattler'],Sprite_Enemy[_0x3e1ce9(0x20a)]['setBattler']=function(_0x3903e4){const _0x230b9f=_0x3e1ce9;this[_0x230b9f(0x32d)](),VisuMZ[_0x230b9f(0x2ee)][_0x230b9f(0x246)][_0x230b9f(0x2d0)](this,_0x3903e4);if(_0x3903e4[_0x230b9f(0x19b)]())this['opacity']=0x0;},VisuMZ['DragonbonesUnion']['Sprite_Enemy_updateBitmap']=Sprite_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x23a)],Sprite_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x23a)]=function(){const _0x2e5a00=_0x3e1ce9,_0x3530db=this[_0x2e5a00(0x363)];if(_0x3530db[_0x2e5a00(0x242)]()){if(_0x2e5a00(0x1b8)!=='NdqsF'){if(!this[_0x2e5a00(0x242)]())return;this[_0x2e5a00(0x1b1)]()[_0x2e5a00(0x35a)](_0x2b23b9),[_0x2e5a00(0x2e5),_0x2e5a00(0x1ed)][_0x2e5a00(0x1e7)](_0x257d59)?this[_0x2e5a00(0x2dc)]=![]:this[_0x2e5a00(0x2dc)]=!![];}else Sprite_Battler[_0x2e5a00(0x20a)][_0x2e5a00(0x23a)][_0x2e5a00(0x2d0)](this),this[_0x2e5a00(0x1a6)]!==_0x3530db[_0x2e5a00(0x1c4)]()[_0x2e5a00(0x1b1)]&&this[_0x2e5a00(0x308)](),this[_0x2e5a00(0x2a2)](),this['setHue'](this[_0x2e5a00(0x330)][_0x2e5a00(0x251)]());}else'BBTii'!==_0x2e5a00(0x225)?_0xc4d5ba[_0x2e5a00(0x2f5)]=![]:(VisuMZ['DragonbonesUnion'][_0x2e5a00(0x31d)]['call'](this),this[_0x2e5a00(0x302)](this[_0x2e5a00(0x21a)]));},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x304)]=Sprite_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x369)],Sprite_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x369)]=function(){const _0x10c7d0=_0x3e1ce9;VisuMZ[_0x10c7d0(0x2ee)]['Sprite_Enemy_refreshMotion'][_0x10c7d0(0x2d0)](this);if(!VisuMZ['DragonbonesUnion'][_0x10c7d0(0x348)][_0x10c7d0(0x2b2)])return;const _0x77861b=this[_0x10c7d0(0x363)];_0x77861b&&_0x77861b[_0x10c7d0(0x242)]()&&(_0x10c7d0(0x2bb)!==_0x10c7d0(0x1eb)?this[_0x10c7d0(0x373)]():_0x49bcd3['play'](_0x3592f8));},Sprite_Enemy[_0x3e1ce9(0x20a)][_0x3e1ce9(0x373)]=function(){const _0x513823=_0x3e1ce9,_0x313d7f=this[_0x513823(0x363)];if(_0x313d7f){const _0x46e824=_0x313d7f[_0x513823(0x2cd)]();if(_0x313d7f['isInputting']()||_0x313d7f[_0x513823(0x31f)]())this[_0x513823(0x217)](_0x513823(0x2e5));else{if(_0x46e824===0x3)_0x513823(0x221)!==_0x513823(0x213)?this[_0x513823(0x217)]('dead'):_0x1660ea=_0x513823(0x2e5);else{if(_0x46e824===0x2)this['playDragonbonesMotion'](_0x513823(0x28d));else{if(_0x313d7f[_0x513823(0x36d)]())this[_0x513823(0x217)](_0x513823(0x236));else{if(_0x313d7f[_0x513823(0x1f9)]()||_0x313d7f[_0x513823(0x2a9)]())_0x513823(0x297)==='OesqF'?this[_0x513823(0x2bf)]=_0x8c3ed2[_0x513823(0x2ee)]['Settings'][_0x513823(0x1e3)]['WalkTimer']:this['playDragonbonesMotion'](_0x513823(0x2d3));else{if(_0x46e824===0x1){if(_0x513823(0x1c2)===_0x513823(0x358)){if(this['_dragonbonesBattlerData']!==_0xa7ca64)return this[_0x513823(0x307)];return this[_0x513823(0x248)](),this['setupDragonbonesData'](),this['_dragonbonesBattlerData'];}else this[_0x513823(0x217)](_0x513823(0x2e6));}else{if(_0x313d7f[_0x513823(0x2a3)]())this[_0x513823(0x217)](_0x513823(0x1ed));else _0x313d7f[_0x513823(0x34c)]()?'JvuKP'!=='JvuKP'?(this[_0x513823(0x21a)]=null,this[_0x513823(0x360)]='',this['_dragonbonesAnimation']=''):this[_0x513823(0x217)](_0x513823(0x1ed)):_0x513823(0x210)==='EjYEy'?(this[_0x513823(0x22b)]['disposeDragonbones'](),_0x26d1c6[_0x513823(0x2ee)][_0x513823(0x204)][_0x513823(0x2d0)](this)):this[_0x513823(0x217)](_0x513823(0x1ed));}}}}}}}},Spriteset_Battle['prototype'][_0x3e1ce9(0x32d)]=function(){const _0x3ab8fd=_0x3e1ce9;for(const _0x37ebfd of this[_0x3ab8fd(0x33c)]()){if(_0x3ab8fd(0x263)==='XWSBC')this[_0x3ab8fd(0x29b)]('attack'),_0x421c19[_0x3ab8fd(0x2ee)][_0x3ab8fd(0x1fb)][_0x3ab8fd(0x2d0)](this,_0x8048b);else{if(!_0x37ebfd)continue;_0x37ebfd[_0x3ab8fd(0x32d)]();}}},PluginManager['registerCommand'](pluginData['name'],_0x3e1ce9(0x289),_0x225756=>{const _0x3e37bd=_0x3e1ce9;if(!$gameScreen)return;VisuMZ[_0x3e37bd(0x331)](_0x225756,_0x225756),$gameScreen[_0x3e37bd(0x208)](_0x225756['PictureID']);const _0x3b8dc7=$gameScreen[_0x3e37bd(0x1ad)](_0x225756['PictureID']),_0x2f0c52=_0x3b8dc7[_0x3e37bd(0x1c4)]();_0x2f0c52['filename']=_0x225756[_0x3e37bd(0x219)],_0x2f0c52[_0x3e37bd(0x322)]=_0x225756['Animation'],_0x2f0c52[_0x3e37bd(0x365)]=_0x225756['OffsetX'],_0x2f0c52['offsetY']=_0x225756[_0x3e37bd(0x31b)],_0x2f0c52['scaleX']=_0x225756[_0x3e37bd(0x227)],_0x2f0c52[_0x3e37bd(0x31e)]=_0x225756[_0x3e37bd(0x1e5)],_0x2f0c52[_0x3e37bd(0x238)]=_0x225756[_0x3e37bd(0x1a1)];}),PluginManager[_0x3e1ce9(0x2ca)](pluginData['name'],_0x3e1ce9(0x20f),_0x52b548=>{const _0x762009=_0x3e1ce9;if(!$gameScreen)return;VisuMZ[_0x762009(0x331)](_0x52b548,_0x52b548),$gameScreen[_0x762009(0x208)](_0x52b548[_0x762009(0x36b)]);const _0x3e9013=$gameScreen[_0x762009(0x1ad)](_0x52b548['PictureID']),_0x1f358=_0x3e9013['dragonbonesData'](),_0x30a902=_0x52b548[_0x762009(0x281)]||![];_0x1f358[_0x762009(0x322)]=_0x52b548[_0x762009(0x25d)],_0x1f358[_0x762009(0x2a5)]=_0x30a902;}),PluginManager[_0x3e1ce9(0x2ca)](pluginData[_0x3e1ce9(0x27e)],'Picture_DragonbonesOffset',_0x3b64bb=>{const _0x1b584d=_0x3e1ce9;if(!$gameScreen)return;VisuMZ['ConvertParams'](_0x3b64bb,_0x3b64bb),$gameScreen[_0x1b584d(0x208)](_0x3b64bb['PictureID']);const _0x2b697e=$gameScreen[_0x1b584d(0x1ad)](_0x3b64bb['PictureID']),_0xc1db4c=_0x2b697e[_0x1b584d(0x1c4)]();_0xc1db4c[_0x1b584d(0x365)]=_0x3b64bb['OffsetX'],_0xc1db4c[_0x1b584d(0x2a7)]=_0x3b64bb[_0x1b584d(0x31b)];}),PluginManager['registerCommand'](pluginData[_0x3e1ce9(0x27e)],_0x3e1ce9(0x1ea),_0x32d110=>{const _0x5e13e4=_0x3e1ce9;if(!$gameScreen)return;VisuMZ['ConvertParams'](_0x32d110,_0x32d110),$gameScreen[_0x5e13e4(0x208)](_0x32d110[_0x5e13e4(0x36b)]);const _0x7968dd=$gameScreen[_0x5e13e4(0x1ad)](_0x32d110[_0x5e13e4(0x36b)]),_0x5c1be8=_0x7968dd['dragonbonesData']();_0x5c1be8[_0x5e13e4(0x1c3)]=_0x32d110[_0x5e13e4(0x227)],_0x5c1be8[_0x5e13e4(0x31e)]=_0x32d110[_0x5e13e4(0x1e5)];}),PluginManager[_0x3e1ce9(0x2ca)](pluginData['name'],_0x3e1ce9(0x37e),_0xabb9bb=>{const _0x27a891=_0x3e1ce9;if(!$gameScreen)return;VisuMZ[_0x27a891(0x331)](_0xabb9bb,_0xabb9bb),$gameScreen['createDefaultPicture'](_0xabb9bb[_0x27a891(0x36b)]);const _0x1dd939=$gameScreen[_0x27a891(0x1ad)](_0xabb9bb[_0x27a891(0x36b)]),_0xa84305=_0x1dd939[_0x27a891(0x1c4)]();_0xa84305[_0x27a891(0x238)]=_0xabb9bb[_0x27a891(0x1a1)];}),Game_Screen[_0x3e1ce9(0x20a)]['createDefaultPicture']=function(_0x3e5e28){const _0x24c085=_0x3e1ce9;if(this[_0x24c085(0x1ad)](_0x3e5e28))return;this['showPicture'](_0x3e5e28,'',0x0,Math['round'](Graphics[_0x24c085(0x207)]/0x2),Math[_0x24c085(0x1e0)](Graphics[_0x24c085(0x223)]/0x2),0x64,0x64,0xff,0x0);},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x258)]=Game_Screen[_0x3e1ce9(0x20a)][_0x3e1ce9(0x270)],Game_Screen[_0x3e1ce9(0x20a)][_0x3e1ce9(0x270)]=function(_0x461852){const _0x15f364=_0x3e1ce9;this[_0x15f364(0x23e)](_0x461852),VisuMZ['DragonbonesUnion']['Game_Screen_erasePicture'][_0x15f364(0x2d0)](this,_0x461852);},Game_Screen[_0x3e1ce9(0x20a)]['erasePictureDragonbonesUnion']=function(_0x2e7e18){const _0x2ec0cd=_0x3e1ce9,_0x137cf2=this['realPictureId'](_0x2e7e18),_0x51f5f8=this['_pictures'][_0x137cf2];if(!_0x51f5f8)return;_0x51f5f8[_0x2ec0cd(0x248)](),_0x51f5f8['disposeDragonbones']();},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x2b1)]=Game_Picture[_0x3e1ce9(0x20a)][_0x3e1ce9(0x293)],Game_Picture[_0x3e1ce9(0x20a)]['initialize']=function(){const _0x410103=_0x3e1ce9;VisuMZ[_0x410103(0x2ee)][_0x410103(0x2b1)][_0x410103(0x2d0)](this),this['initDragonbonesData']();},Game_Picture[_0x3e1ce9(0x20a)]['initDragonbonesData']=function(){const _0x2ca27e=_0x3e1ce9;this['_dragonbonesData']={'filename':'','animation':DragonbonesManager[_0x2ca27e(0x285)],'scaleX':0x1,'scaleY':0x1,'offsetX':0x0,'offsetY':0x0,'timeScale':0x1,'revertToIdle':![]};},Game_Picture[_0x3e1ce9(0x20a)]['dragonbonesData']=function(){const _0x8bb7b5=_0x3e1ce9;if(this['_dragonbonesData']!==undefined)return this[_0x8bb7b5(0x311)];return this[_0x8bb7b5(0x248)](),this['_dragonbonesData'];},Game_Picture[_0x3e1ce9(0x20a)][_0x3e1ce9(0x317)]=function(){const _0x5d9081=_0x3e1ce9;return this[_0x5d9081(0x1c4)]()['filename']!=='';},Game_Picture[_0x3e1ce9(0x20a)][_0x3e1ce9(0x32d)]=function(){const _0x273685=_0x3e1ce9;if(!SceneManager[_0x273685(0x1bd)])return;if(!SceneManager[_0x273685(0x1bd)]['_spriteset'])return;const _0x2f6393=SceneManager[_0x273685(0x1bd)]['_spriteset'][_0x273685(0x36c)](this);if(_0x2f6393)_0x2f6393[_0x273685(0x32d)]();},Spriteset_Base[_0x3e1ce9(0x20a)][_0x3e1ce9(0x36c)]=function(_0x2db4a3){const _0x1029b3=_0x3e1ce9;return this['_pictureContainer']['children'][_0x1029b3(0x1f3)](_0x23f6fc=>_0x23f6fc&&_0x23f6fc[_0x1029b3(0x1ad)]()===_0x2db4a3);},VisuMZ[_0x3e1ce9(0x2ee)]['Sprite_Picture_initialize']=Sprite_Picture[_0x3e1ce9(0x20a)][_0x3e1ce9(0x293)],Sprite_Picture[_0x3e1ce9(0x20a)]['initialize']=function(_0x4dc4f3){const _0x293010=_0x3e1ce9;this[_0x293010(0x248)](),VisuMZ['DragonbonesUnion'][_0x293010(0x2f4)][_0x293010(0x2d0)](this,_0x4dc4f3);},Sprite_Picture[_0x3e1ce9(0x20a)][_0x3e1ce9(0x248)]=function(_0x54094c){const _0x3b9129=_0x3e1ce9;this[_0x3b9129(0x21a)]=null,this[_0x3b9129(0x360)]='',this[_0x3b9129(0x350)]='';},VisuMZ['DragonbonesUnion']['Sprite_Picture_update']=Sprite_Picture[_0x3e1ce9(0x20a)][_0x3e1ce9(0x243)],Sprite_Picture['prototype'][_0x3e1ce9(0x243)]=function(){const _0x5037f9=_0x3e1ce9;VisuMZ['DragonbonesUnion'][_0x5037f9(0x233)][_0x5037f9(0x2d0)](this),this['updateDragonbones']();},Sprite_Picture['prototype'][_0x3e1ce9(0x32d)]=function(){const _0x184900=_0x3e1ce9;this[_0x184900(0x21a)]&&(this['removeChild'](this[_0x184900(0x21a)]),this[_0x184900(0x21a)][_0x184900(0x26c)](),this['_dragonbones']=null,this['_dragonbonesFilename']='',this[_0x184900(0x350)]='');},Sprite_Picture[_0x3e1ce9(0x20a)][_0x3e1ce9(0x2a2)]=function(){const _0x215cd3=_0x3e1ce9,_0x3e2349=this[_0x215cd3(0x1ad)]();if(!_0x3e2349)return this[_0x215cd3(0x32d)]();if(!_0x3e2349[_0x215cd3(0x317)]())return this[_0x215cd3(0x32d)]();this[_0x215cd3(0x2f0)]();if(!this['_dragonbones'])return;this['updateDragonbonesAnimation'](),this['updateDragonbonesProperties'](),this[_0x215cd3(0x261)]();},Sprite_Picture['prototype'][_0x3e1ce9(0x2f0)]=function(){const _0x3724de=_0x3e1ce9,_0x1c6ca8=this[_0x3724de(0x1ad)]()[_0x3724de(0x1c4)]();if(this[_0x3724de(0x360)]===_0x1c6ca8['filename'])return;this[_0x3724de(0x32d)](),this['_dragonbonesFilename']=_0x1c6ca8[_0x3724de(0x280)],DragonbonesManager['loadArmature'](_0x1c6ca8[_0x3724de(0x280)],this[_0x3724de(0x24e)][_0x3724de(0x343)](this));},Sprite_Picture[_0x3e1ce9(0x20a)]['onLoadDragonbones']=function(){const _0x4219d8=_0x3e1ce9,_0x5906f4=this[_0x4219d8(0x1ad)]()[_0x4219d8(0x1c4)]();this[_0x4219d8(0x21a)]=DragonbonesManager[_0x4219d8(0x1ec)](_0x5906f4[_0x4219d8(0x280)]),this[_0x4219d8(0x2b3)](this['_dragonbones'],0x0),this[_0x4219d8(0x22d)]();},Sprite_Picture[_0x3e1ce9(0x20a)][_0x3e1ce9(0x22d)]=function(){const _0x2cb52a=_0x3e1ce9;if(!this[_0x2cb52a(0x21a)])return;const _0x25ee0b=this[_0x2cb52a(0x1ad)]()['dragonbonesData']();this[_0x2cb52a(0x350)]!==_0x25ee0b['animation']&&(this[_0x2cb52a(0x350)]=_0x25ee0b[_0x2cb52a(0x322)],this[_0x2cb52a(0x35a)]());},Sprite_Picture[_0x3e1ce9(0x20a)][_0x3e1ce9(0x35a)]=function(){const _0x858ad3=_0x3e1ce9;if(!this[_0x858ad3(0x21a)])return;const _0x1c2556=this[_0x858ad3(0x21a)][_0x858ad3(0x322)],_0x185cda=this['_dragonbonesAnimation'][_0x858ad3(0x1e8)]()[_0x858ad3(0x2de)]();_0x1c2556[_0x858ad3(0x21f)][_0x185cda]&&_0x1c2556[_0x858ad3(0x277)](_0x185cda);},Sprite_Picture['prototype']['updateDragonbonesProperties']=function(){const _0x28408e=_0x3e1ce9;if(!this[_0x28408e(0x21a)])return;const _0x2e8937=this[_0x28408e(0x1ad)]()[_0x28408e(0x1c4)]();this[_0x28408e(0x21a)]['x']=_0x2e8937['offsetX'],this[_0x28408e(0x21a)]['y']=_0x2e8937[_0x28408e(0x2a7)],this[_0x28408e(0x21a)][_0x28408e(0x30c)]['x']=_0x2e8937[_0x28408e(0x1c3)],this['_dragonbones'][_0x28408e(0x30c)]['y']=_0x2e8937[_0x28408e(0x31e)],this[_0x28408e(0x21a)]['animation']['isPlaying']===![]&&_0x2e8937[_0x28408e(0x2a5)]&&(_0x2e8937[_0x28408e(0x322)]='idle');},Sprite_Picture[_0x3e1ce9(0x20a)][_0x3e1ce9(0x261)]=function(){const _0x5a4777=_0x3e1ce9;if(!this[_0x5a4777(0x21a)])return;const _0x13b903=this[_0x5a4777(0x1ad)]()[_0x5a4777(0x1c4)]();let _0x13096f=_0x13b903[_0x5a4777(0x238)];this[_0x5a4777(0x21a)]['animation'][_0x5a4777(0x238)]=_0x13096f;},PluginManager[_0x3e1ce9(0x2ca)](pluginData[_0x3e1ce9(0x27e)],_0x3e1ce9(0x23d),_0x1df88e=>{const _0x4011a9=_0x3e1ce9;if(!$gameMap)return;VisuMZ['ConvertParams'](_0x1df88e,_0x1df88e);const _0x12061c=$gameActors[_0x4011a9(0x237)](_0x1df88e[_0x4011a9(0x2ed)]);if(!_0x12061c)return;const _0x3633ae=JsonEx[_0x4011a9(0x28b)](_0x12061c[_0x4011a9(0x2e2)]);_0x12061c[_0x4011a9(0x2e2)]={'filename':_0x1df88e[_0x4011a9(0x219)],'animation':'','scaleX':_0x1df88e[_0x4011a9(0x227)],'scaleY':_0x1df88e[_0x4011a9(0x1e5)],'offsetX':_0x1df88e[_0x4011a9(0x20b)],'offsetY':_0x1df88e[_0x4011a9(0x31b)],'timeScale':_0x1df88e['TimeScale'],'walkRate':_0x1df88e['WalkRate']??0x1,'dashRate':_0x1df88e[_0x4011a9(0x342)]??0x1,'width':_0x1df88e[_0x4011a9(0x371)],'height':_0x1df88e[_0x4011a9(0x312)],'flipLeft':_0x1df88e[_0x4011a9(0x349)],'flipRight':_0x1df88e['FlipRight'],'animationNames':{'idle':_0x1df88e[_0x4011a9(0x2b7)],'walk':_0x1df88e['Walk'],'dash':_0x1df88e[_0x4011a9(0x294)],'jump':_0x1df88e['Jump'],'ladderidle':_0x1df88e[_0x4011a9(0x37a)],'ladderclimb':_0x1df88e[_0x4011a9(0x1d5)],'ropeidle':_0x1df88e['RopeIdle'],'ropeclimb':_0x1df88e[_0x4011a9(0x370)]}},$gamePlayer[_0x4011a9(0x35d)]();}),PluginManager[_0x3e1ce9(0x2ca)](pluginData[_0x3e1ce9(0x27e)],_0x3e1ce9(0x344),_0x4a3ad9=>{const _0x105229=_0x3e1ce9;if(!$gameMap)return;if(SceneManager['_scene'][_0x105229(0x33a)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0x4a3ad9,_0x4a3ad9);const _0x1b9a0c=$gameActors['actor'](_0x4a3ad9[_0x105229(0x2ed)]),_0xc3b510=_0x1b9a0c[_0x105229(0x245)](),_0x3b45ca=_0xc3b510===0x0?$gamePlayer:$gamePlayer[_0x105229(0x299)]()[_0x105229(0x2df)](_0xc3b510-0x1);if(!_0x3b45ca)return;_0x3b45ca[_0x105229(0x195)]=_0x4a3ad9['Animation'];}),PluginManager[_0x3e1ce9(0x2ca)](pluginData[_0x3e1ce9(0x27e)],_0x3e1ce9(0x205),_0xb69996=>{const _0x5eb03b=_0x3e1ce9;if(!$gameMap)return;if(SceneManager[_0x5eb03b(0x1bd)][_0x5eb03b(0x33a)]!==Scene_Map)return;VisuMZ[_0x5eb03b(0x331)](_0xb69996,_0xb69996);const _0x41aa2a=$gameActors['actor'](_0xb69996[_0x5eb03b(0x2ed)]),_0x205c43=_0x41aa2a[_0x5eb03b(0x245)](),_0x51f166=_0x205c43===0x0?$gamePlayer:$gamePlayer[_0x5eb03b(0x299)]()[_0x5eb03b(0x2df)](_0x205c43-0x1);if(!_0x51f166)return;_0x51f166[_0x5eb03b(0x195)]='';}),PluginManager[_0x3e1ce9(0x2ca)](pluginData[_0x3e1ce9(0x27e)],'MapSprite_EventAnimationPlay',_0x822adb=>{const _0x297916=_0x3e1ce9;if(!$gameMap)return;if(SceneManager[_0x297916(0x1bd)][_0x297916(0x33a)]!==Scene_Map)return;VisuMZ[_0x297916(0x331)](_0x822adb,_0x822adb);const _0x299a02=$gameTemp[_0x297916(0x24b)](),_0x4fa681=$gameMap['event'](_0x822adb['EventID']||_0x299a02['eventId']());if(!_0x4fa681)return;_0x4fa681[_0x297916(0x195)]=_0x822adb[_0x297916(0x25d)];}),PluginManager[_0x3e1ce9(0x2ca)](pluginData['name'],_0x3e1ce9(0x1db),_0x15a26c=>{const _0x4a7c15=_0x3e1ce9;if(!$gameMap)return;if(SceneManager[_0x4a7c15(0x1bd)][_0x4a7c15(0x33a)]!==Scene_Map)return;VisuMZ[_0x4a7c15(0x331)](_0x15a26c,_0x15a26c);const _0x125528=$gameTemp[_0x4a7c15(0x24b)](),_0x56867a=$gameMap[_0x4a7c15(0x2fc)](_0x15a26c[_0x4a7c15(0x339)]||_0x125528[_0x4a7c15(0x341)]());if(!_0x56867a)return;_0x56867a[_0x4a7c15(0x195)]='';}),PluginManager[_0x3e1ce9(0x2ca)](pluginData['name'],'MapSprite_FollowerAnimationPlay',_0x51d80f=>{const _0x4eca0d=_0x3e1ce9;if(!$gameMap)return;if(SceneManager[_0x4eca0d(0x1bd)]['constructor']!==Scene_Map)return;VisuMZ[_0x4eca0d(0x331)](_0x51d80f,_0x51d80f);const _0x2c510e=$gamePlayer[_0x4eca0d(0x299)]()[_0x4eca0d(0x2df)](_0x51d80f[_0x4eca0d(0x2b8)]);if(!_0x2c510e)return;_0x2c510e[_0x4eca0d(0x195)]=_0x51d80f['Animation'];}),PluginManager[_0x3e1ce9(0x2ca)](pluginData[_0x3e1ce9(0x27e)],_0x3e1ce9(0x24a),_0x5be269=>{const _0x458050=_0x3e1ce9;if(!$gameMap)return;if(SceneManager[_0x458050(0x1bd)][_0x458050(0x33a)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0x5be269,_0x5be269);const _0x230b47=$gamePlayer[_0x458050(0x299)]()[_0x458050(0x2df)](_0x5be269['FollowerIndex']);if(!_0x230b47)return;_0x230b47[_0x458050(0x195)]='';}),PluginManager[_0x3e1ce9(0x2ca)](pluginData[_0x3e1ce9(0x27e)],_0x3e1ce9(0x303),_0x4381dd=>{const _0x2017de=_0x3e1ce9;if(!$gameMap)return;if(SceneManager[_0x2017de(0x1bd)][_0x2017de(0x33a)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0x4381dd,_0x4381dd),$gamePlayer[_0x2017de(0x195)]=_0x4381dd[_0x2017de(0x25d)];}),PluginManager[_0x3e1ce9(0x2ca)](pluginData[_0x3e1ce9(0x27e)],'MapSprite_PlayerAnimationStop',_0x20e5fb=>{const _0x2bc368=_0x3e1ce9;if(!$gameMap)return;if(SceneManager[_0x2bc368(0x1bd)][_0x2bc368(0x33a)]!==Scene_Map)return;$gamePlayer['dragonbonesAnimation']='';}),Game_Temp[_0x3e1ce9(0x20a)][_0x3e1ce9(0x232)]=function(_0x3de657){this['_lastPluginCommandInterpreter']=_0x3de657;},Game_Temp[_0x3e1ce9(0x20a)][_0x3e1ce9(0x24b)]=function(){return this['_lastPluginCommandInterpreter'];},Object[_0x3e1ce9(0x2f9)](Game_CharacterBase[_0x3e1ce9(0x20a)],_0x3e1ce9(0x195),{'get':function(){const _0x5d0fe2=_0x3e1ce9;return this[_0x5d0fe2(0x27d)]()[_0x5d0fe2(0x322)];},'set':function(_0x3fdc7a){const _0xead3bf=_0x3e1ce9;this[_0xead3bf(0x27d)]()[_0xead3bf(0x322)]=_0x3fdc7a;},'configurable':!![]}),Game_CharacterBase[_0x3e1ce9(0x20a)]['initDragonbonesData']=function(){const _0x11eeef=_0x3e1ce9,_0x2c6ade=VisuMZ['DragonbonesUnion'][_0x11eeef(0x348)][_0x11eeef(0x1e3)];this[_0x11eeef(0x2e2)]={'filename':'','animation':'','scaleX':_0x2c6ade['ScaleX'],'scaleY':_0x2c6ade['ScaleY'],'offsetX':_0x2c6ade[_0x11eeef(0x20b)],'offsetY':_0x2c6ade[_0x11eeef(0x31b)],'timeScale':_0x2c6ade['TimeScale'],'walkRate':0x1,'dashRate':0x1,'width':_0x2c6ade[_0x11eeef(0x371)],'height':_0x2c6ade[_0x11eeef(0x312)],'flipLeft':_0x2c6ade[_0x11eeef(0x349)],'flipRight':_0x2c6ade[_0x11eeef(0x250)],'animationNames':{'idle':_0x2c6ade['Idle'],'walk':_0x2c6ade[_0x11eeef(0x1a2)],'dash':_0x2c6ade['Dash'],'jump':_0x2c6ade[_0x11eeef(0x262)],'ladderidle':_0x2c6ade['LadderIdle'],'ladderclimb':_0x2c6ade['LadderClimb'],'ropeidle':_0x2c6ade[_0x11eeef(0x33f)],'ropeclimb':_0x2c6ade[_0x11eeef(0x370)]}},this[_0x11eeef(0x2bf)]===undefined&&(this[_0x11eeef(0x2bf)]=0x0);},Game_CharacterBase[_0x3e1ce9(0x20a)][_0x3e1ce9(0x33d)]=function(){},Game_CharacterBase[_0x3e1ce9(0x20a)][_0x3e1ce9(0x35e)]=function(_0x50635b){const _0x179558=_0x3e1ce9,_0x454a38=this[_0x179558(0x27d)]();_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE:[ ]*(.*)>/i)&&(_0x454a38[_0x179558(0x280)]=String(RegExp['$1'])['trim']());_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE (?:SKIN|NAME|FILENAME):[ ]*(.*)>/i)&&(_0x454a38[_0x179558(0x280)]=String(RegExp['$1'])['trim']());_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE[ ]SCALE:[ ](.*),[ ](.*)>/i)&&(_0x179558(0x21c)!==_0x179558(0x26b)?(_0x454a38[_0x179558(0x1c3)]=Number(RegExp['$1']),_0x454a38['scaleY']=Number(RegExp['$2'])):_0x20eb10['item']()[_0x179558(0x2be)][_0x179558(0x305)]>0x0?this[_0x179558(0x29b)](_0x179558(0x2a0)):this['requestMotion'](_0x179558(0x2c7)));_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE[ ](?:SCALEX|SCALE X):[ ](.*)>/i)&&(_0x454a38['scaleX']=Number(RegExp['$1']));_0x50635b['match'](/<DRAGONBONES SPRITE[ ](?:SCALEY|SCALE Y):[ ](.*)>/i)&&(_0x454a38[_0x179558(0x31e)]=Number(RegExp['$1']));_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x454a38[_0x179558(0x365)]=Number(RegExp['$1']),_0x454a38['offsetY']=Number(RegExp['$2']));_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&(_0x454a38[_0x179558(0x365)]=Number(RegExp['$1']));_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)&&(_0x454a38[_0x179558(0x2a7)]=Number(RegExp['$1']));_0x50635b['match'](/<DRAGONBONES SPRITE[ ]SIZE:[ ](.*),[ ](.*)>/i)&&(_0x179558(0x27b)!=='yYIrh'?_0x3f30fb[_0x179558(0x322)]=_0x179558(0x1ed):(_0x454a38[_0x179558(0x207)]=Number(RegExp['$1']),_0x454a38[_0x179558(0x223)]=Number(RegExp['$2'])));_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE[ ]WIDTH:[ ](.*)>/i)&&(_0x454a38[_0x179558(0x207)]=Number(RegExp['$1']));_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE[ ]HEIGHT:[ ](.*)>/i)&&(_0x454a38[_0x179558(0x223)]=Number(RegExp['$1']));_0x50635b['match'](/<DRAGONBONES SPRITE[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&(_0x179558(0x206)!==_0x179558(0x206)?(this['_dragonbonesAnimation']=_0xf5bbb1,this[_0x179558(0x35a)]()):_0x454a38[_0x179558(0x238)]=Number(RegExp['$1']));_0x50635b['match'](/<DRAGONBONES SPRITE[ ](?:WALK RATE|WALKING RATE):[ ](.*)>/i)&&(_0x179558(0x1ba)===_0x179558(0x355)?(_0x7b7fcf[_0x179558(0x207)]=_0x63cdba(_0x9e45b4['$1']),_0x17d389[_0x179558(0x223)]=_0x35ee41(_0x23cd6d['$2'])):_0x454a38[_0x179558(0x2d4)]=Number(RegExp['$1']));_0x50635b['match'](/<DRAGONBONES SPRITE[ ](?:DASH RATE|DASHING RATE):[ ](.*)>/i)&&('eMOwp'!==_0x179558(0x295)?_0x454a38[_0x179558(0x1da)]=Number(RegExp['$1']):this['updateCharacterFrameDragonbonesUnion']());_0x50635b['match'](/<DRAGONBONES SPRITE FLIP LEFT>/i)&&(_0x179558(0x286)!==_0x179558(0x286)?this[_0x179558(0x21a)]&&(this[_0x179558(0x1d0)]&&this[_0x179558(0x1d0)][_0x179558(0x302)](this['_dragonbones']),this[_0x179558(0x302)](this[_0x179558(0x21a)]),this[_0x179558(0x21a)][_0x179558(0x26c)](),delete this[_0x179558(0x21a)],delete this[_0x179558(0x1a6)]):_0x454a38[_0x179558(0x199)]=!![]);if(_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE NO FLIP LEFT>/i)){if(_0x179558(0x1e9)===_0x179558(0x1e9))_0x454a38['flipLeft']=![];else return this[_0x179558(0x32e)];}_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE FLIP RIGHT>/i)&&(_0x454a38[_0x179558(0x2f5)]=!![]);_0x50635b['match'](/<DRAGONBONES SPRITE NO FLIP RIGHT>/i)&&(_0x454a38[_0x179558(0x2f5)]=![]);const _0xbe190=_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/gi);if(_0xbe190)for(const _0x41182c of _0xbe190){_0x41182c['match'](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/i);const _0x10e652=String(RegExp['$1'])[_0x179558(0x1e8)]()[_0x179558(0x2de)](),_0x383f7e=String(RegExp['$2'])[_0x179558(0x1e8)]()[_0x179558(0x2de)]();_0x454a38[_0x179558(0x2f1)][_0x10e652]=_0x383f7e;}if(_0x50635b[_0x179558(0x1aa)](/<DRAGONBONES SPRITE (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/DRAGONBONES SPRITE (?:SETTINGS|SETTING)>/i)){if(_0x179558(0x36a)===_0x179558(0x1b2)){const _0x2591a1=this[_0x179558(0x1ad)]()[_0x179558(0x1c4)]();if(this[_0x179558(0x360)]===_0x2591a1[_0x179558(0x280)])return;this[_0x179558(0x32d)](),this[_0x179558(0x360)]=_0x2591a1[_0x179558(0x280)],_0x41b0c3[_0x179558(0x1b9)](_0x2591a1[_0x179558(0x280)],this[_0x179558(0x24e)]['bind'](this));}else{const _0x3943a7=String(RegExp['$1']);if(_0x3943a7[_0x179558(0x1aa)](/(?:SKIN|NAME|FILENAME):[ ]*(.*)/i)){if('EGcWt'!==_0x179558(0x319))_0x454a38[_0x179558(0x280)]=String(RegExp['$1'])[_0x179558(0x2de)]();else{_0x177f51['push'](_0x37efed+0x4);if(_0x151f16['flipLeft'])_0x258463[_0x179558(0x35c)](_0x32ce26+0x6);_0xad4e29[_0x179558(0x35c)](_0x54f783+0x8);}}_0x3943a7['match'](/SCALE:[ ](.*),[ ](.*)/i)&&(_0x454a38[_0x179558(0x1c3)]=Number(RegExp['$1']),_0x454a38[_0x179558(0x31e)]=Number(RegExp['$2']));_0x3943a7[_0x179558(0x1aa)](/(?:SCALEX|SCALE X):[ ](.*)/i)&&('wwxGF'===_0x179558(0x30d)?_0x454a38[_0x179558(0x1c3)]=Number(RegExp['$1']):this['updateFrameDragonbonesUnion']());_0x3943a7[_0x179558(0x1aa)](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x454a38['scaleY']=Number(RegExp['$1']));if(_0x3943a7[_0x179558(0x1aa)](/OFFSET:[ ](.*),[ ](.*)/i)){if('OYFZL'!==_0x179558(0x29d))_0x454a38[_0x179558(0x365)]=Number(RegExp['$1']),_0x454a38[_0x179558(0x2a7)]=Number(RegExp['$2']);else{if(!_0x2eb407)return;_0x5ef355[_0x179558(0x331)](_0xdc43e0,_0x2f1b62),_0x1eafdc['createDefaultPicture'](_0x105fe2[_0x179558(0x36b)]);const _0x82ff1b=_0x386a8d[_0x179558(0x1ad)](_0x28fed8['PictureID']),_0x26a2bf=_0x82ff1b[_0x179558(0x1c4)]();_0x26a2bf[_0x179558(0x238)]=_0x57f413['TimeScale'];}}_0x3943a7[_0x179558(0x1aa)](/(?:OFFSETX|OFFSET X):[ ](.*)/i)&&(_0x454a38[_0x179558(0x365)]=Number(RegExp['$1']));_0x3943a7[_0x179558(0x1aa)](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x454a38['offsetY']=Number(RegExp['$1']));_0x3943a7[_0x179558(0x1aa)](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x179558(0x2b6)!=='pwXCK'?_0x454a38[_0x179558(0x238)]=Number(RegExp['$1']):this[_0x179558(0x2dc)]=!![]);_0x3943a7['match'](/(?:WALK RATE|WALKING RATE):[ ](.*)/i)&&(_0x454a38[_0x179558(0x2d4)]=Number(RegExp['$1']));_0x3943a7[_0x179558(0x1aa)](/(?:DASH RATE|DASHING RATE):[ ](.*)/i)&&(_0x179558(0x2e1)===_0x179558(0x2e1)?_0x454a38[_0x179558(0x1da)]=Number(RegExp['$1']):this['playDragonbonesMotion'](_0x179558(0x2e6)));_0x3943a7[_0x179558(0x1aa)](/SIZE:[ ](.*),[ ](.*)/i)&&(_0x179558(0x2f6)!==_0x179558(0x2f6)?_0x548ec4[_0x179558(0x288)][_0x179558(0x21b)]>0x0?this[_0x179558(0x318)]():this['runQueuedCallbacks']():(_0x454a38[_0x179558(0x207)]=Number(RegExp['$1']),_0x454a38[_0x179558(0x223)]=Number(RegExp['$2'])));if(_0x3943a7[_0x179558(0x1aa)](/WIDTH:[ ](.*)/i)){if('KIZFL'===_0x179558(0x2e0)){const _0x160fcb=this[_0x179558(0x241)][_0x179558(0x2c4)];if(_0x160fcb){const _0x1e9808=_0x160fcb[_0x179558(0x207)],_0x2e838e=_0x160fcb[_0x179558(0x223)];this[_0x179558(0x241)][_0x179558(0x354)](0x0,0x0,_0x1e9808,_0x2e838e),this['setFrame'](0x0,0x0,_0x1e9808,_0x2e838e);}}else _0x454a38[_0x179558(0x207)]=Number(RegExp['$1']);}if(_0x3943a7[_0x179558(0x1aa)](/HEIGHT:[ ](.*)/i)){if(_0x179558(0x2f3)==='qOghC')_0x454a38['height']=Number(RegExp['$1']);else{if(!_0x1b6393)return;if(_0x529f7c['_scene'][_0x179558(0x33a)]!==_0x173db5)return;_0x5777ba[_0x179558(0x331)](_0x24f1a3,_0x9e2ce8);const _0x3537a4=_0x5d63e6[_0x179558(0x24b)](),_0x26c76c=_0xeec05e[_0x179558(0x2fc)](_0x72fdd6[_0x179558(0x339)]||_0x3537a4[_0x179558(0x341)]());if(!_0x26c76c)return;_0x26c76c['dragonbonesAnimation']='';}}_0x3943a7[_0x179558(0x1aa)](/NO FLIP LEFT/i)&&(_0x179558(0x378)===_0x179558(0x377)?this['_dragonbonesMoveTimer']--:_0x454a38[_0x179558(0x199)]=![]);_0x3943a7[_0x179558(0x1aa)](/FLIP LEFT/i)&&(_0x454a38[_0x179558(0x199)]=!![]);_0x3943a7['match'](/NO FLIP RIGHT/i)&&(_0x454a38[_0x179558(0x2f5)]=![]);_0x3943a7[_0x179558(0x1aa)](/FLIP RIGHT/i)&&('FzUKk'===_0x179558(0x1ab)?(this[_0x179558(0x21a)]=null,this['_dragonbonesName']=''):_0x454a38[_0x179558(0x2f5)]=!![]);const _0x28749d=_0x50635b['match'](/(?:ANI|MOTION) (.*):[ ](.*)/gi);if(_0x28749d)for(const _0x51a4d8 of _0x28749d){_0x51a4d8[_0x179558(0x1aa)](/(?:ANI|MOTION) (.*):[ ](.*)/i);const _0x467b9d=String(RegExp['$1'])[_0x179558(0x1e8)]()[_0x179558(0x2de)](),_0x54cddb=String(RegExp['$2'])['toLowerCase']()[_0x179558(0x2de)]();_0x454a38[_0x179558(0x2f1)][_0x467b9d]=_0x54cddb;}}}},Game_CharacterBase[_0x3e1ce9(0x20a)][_0x3e1ce9(0x27d)]=function(){const _0x27de78=_0x3e1ce9;if(this['_dragonbonesSpriteData']!==undefined)return this[_0x27de78(0x2e2)];return this[_0x27de78(0x248)](),this['setupDragonbonesData'](),this[_0x27de78(0x2e2)];},Game_CharacterBase[_0x3e1ce9(0x20a)]['hasDragonbones']=function(){const _0x442c86=_0x3e1ce9;return this[_0x442c86(0x27d)]()[_0x442c86(0x280)]!=='';},Game_CharacterBase['prototype'][_0x3e1ce9(0x382)]=function(_0x3346fb){const _0x1c8e1b=_0x3e1ce9,_0x2c4e1d=this['dragonbonesSpriteData']();if(!_0x3346fb)return _0x2c4e1d['animationNames']['idle'];_0x2c4e1d[_0x1c8e1b(0x322)]=_0x2c4e1d[_0x1c8e1b(0x322)]['toLowerCase']()[_0x1c8e1b(0x2de)]();if(_0x2c4e1d['animation']!==''&&_0x3346fb[_0x1c8e1b(0x322)]['animations'][_0x2c4e1d[_0x1c8e1b(0x322)]])return _0x2c4e1d[_0x1c8e1b(0x322)];let _0x4060fa=[];if(this[_0x1c8e1b(0x1dd)]())_0x4060fa=_0x4060fa[_0x1c8e1b(0x1f6)](this['addDragonbonesAnimationDirections'](_0x2c4e1d['animationNames'][_0x1c8e1b(0x29e)])),_0x4060fa=_0x4060fa[_0x1c8e1b(0x1f6)](this[_0x1c8e1b(0x1b0)](_0x2c4e1d[_0x1c8e1b(0x2f1)][_0x1c8e1b(0x2e5)]));else{if(this[_0x1c8e1b(0x197)]()&&!this[_0x1c8e1b(0x1dd)]())_0x1c8e1b(0x253)!==_0x1c8e1b(0x2b9)?Imported[_0x1c8e1b(0x33e)]&&this[_0x1c8e1b(0x192)]()?(this['_dragonbonesMoveTimer']>0x0&&('uPEXf'==='zKkwR'?(_0x4eaa10['DragonbonesUnion']['Game_Battler_requestMotionRefresh'][_0x1c8e1b(0x2d0)](this),this[_0x1c8e1b(0x242)]()&&this['battler']()[_0x1c8e1b(0x244)]()):(_0x4060fa[_0x1c8e1b(0x35c)](_0x2c4e1d[_0x1c8e1b(0x2f1)][_0x1c8e1b(0x2ae)]),_0x4060fa['push'](_0x2c4e1d[_0x1c8e1b(0x2f1)]['ladderclimb']),_0x4060fa=_0x4060fa[_0x1c8e1b(0x1f6)](this['addDragonbonesAnimationDirections'](_0x2c4e1d['animationNames'][_0x1c8e1b(0x2e5)])))),_0x4060fa[_0x1c8e1b(0x35c)](_0x2c4e1d[_0x1c8e1b(0x2f1)]['ropeidle']),_0x4060fa[_0x1c8e1b(0x35c)](_0x2c4e1d[_0x1c8e1b(0x2f1)][_0x1c8e1b(0x2bd)])):(this[_0x1c8e1b(0x2bf)]>0x0&&(_0x4060fa[_0x1c8e1b(0x35c)](_0x2c4e1d[_0x1c8e1b(0x2f1)][_0x1c8e1b(0x32f)]),_0x4060fa=_0x4060fa[_0x1c8e1b(0x1f6)](this['addDragonbonesAnimationDirections'](_0x2c4e1d[_0x1c8e1b(0x2f1)][_0x1c8e1b(0x2e5)]))),_0x4060fa[_0x1c8e1b(0x35c)](_0x2c4e1d['animationNames'][_0x1c8e1b(0x2bd)])):(_0x3601e8['DragonbonesUnion'][_0x1c8e1b(0x224)][_0x1c8e1b(0x2d0)](this),this[_0x1c8e1b(0x302)](this[_0x1c8e1b(0x21a)]));else{if(this[_0x1c8e1b(0x2bf)]>0x0){if('lBdGC'!=='lBdGC')this[_0x1c8e1b(0x217)](_0x1c8e1b(0x28d));else{if(this[_0x1c8e1b(0x32a)]()){if(_0x1c8e1b(0x2ad)===_0x1c8e1b(0x2ad))_0x4060fa=_0x4060fa[_0x1c8e1b(0x1f6)](this[_0x1c8e1b(0x1b0)](_0x2c4e1d['animationNames'][_0x1c8e1b(0x259)]));else return![];}_0x4060fa=_0x4060fa[_0x1c8e1b(0x1f6)](this['addDragonbonesAnimationDirections'](_0x2c4e1d[_0x1c8e1b(0x2f1)]['walk']));}}}}_0x4060fa=_0x4060fa['concat'](this[_0x1c8e1b(0x1b0)](_0x2c4e1d['animationNames'][_0x1c8e1b(0x1ed)]));for(const _0x321c17 of _0x4060fa){if(_0x1c8e1b(0x34e)==='vyRXX'){if(_0x3346fb[_0x1c8e1b(0x322)]['animations'][_0x321c17])return _0x321c17;}else _0x337cfc[_0x1c8e1b(0x199)]=!![];}return _0x2c4e1d[_0x1c8e1b(0x2f1)][_0x1c8e1b(0x1ed)];},Game_CharacterBase[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1b0)]=function(_0x30dbcb){const _0x45d295=_0x3e1ce9,_0xb1ac83=this['dragonbonesSpriteData'](),_0x3ac37d=this[_0x45d295(0x352)]();let _0x2c47ae=[];_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+_0x3ac37d);if(_0x3ac37d===0x1){if('sLrML'!==_0x45d295(0x2db)){_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x4);if(_0xb1ac83[_0x45d295(0x199)])_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x6);_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x2);}else _0xff1e42[_0x45d295(0x2ee)]['Game_Player_refresh'][_0x45d295(0x2d0)](this),this[_0x45d295(0x33d)]();}if(_0x3ac37d===0x3){if(_0x45d295(0x35b)!==_0x45d295(0x35b)){_0x313810=_0x37649f['toLowerCase']()['trim']();_0x4d5670['animation'][_0x45d295(0x21f)][_0x2d5f47]&&(_0x48119f[_0x45d295(0x322)]['animations'][_0x33801b][_0x45d295(0x2c2)]=0x0);for(let _0xb3dece=0x1;_0xb3dece<=0x9;_0xb3dece++){const _0x13cc06=_0x3d9809+_0xb3dece;_0x31568c[_0x45d295(0x322)]['animations'][_0x13cc06]&&(_0x1d09d7[_0x45d295(0x322)][_0x45d295(0x21f)][_0x13cc06][_0x45d295(0x2c2)]=0x0);}}else{_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x6);if(_0xb1ac83[_0x45d295(0x2f5)])_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x4);_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x2);}}if(_0x3ac37d===0x7){if(_0x45d295(0x26e)===_0x45d295(0x26e)){_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x4);if(_0xb1ac83[_0x45d295(0x199)])_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x6);_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x8);}else{if(!this[_0x45d295(0x2fc)]())return;if(!this['page']())return;const _0x503a48=this[_0x45d295(0x1e1)]();let _0x5300cb='';for(const _0x29f8e3 of _0x503a48){if([0x6c,0x198][_0x45d295(0x1e7)](_0x29f8e3[_0x45d295(0x21e)])){if(_0x5300cb!=='')_0x5300cb+='\x0a';_0x5300cb+=_0x29f8e3[_0x45d295(0x230)][0x0];}}this['checkDragonbonesStringTags'](_0x5300cb);}}if(_0x3ac37d===0x9){if(_0x45d295(0x27c)!=='vuHdF'){_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x6);if(_0xb1ac83['flipRight'])_0x2c47ae['push'](_0x30dbcb+0x4);_0x2c47ae[_0x45d295(0x35c)](_0x30dbcb+0x8);}else this['_dragonbonesSpriteContainer'][_0x45d295(0x380)]!==_0x1d0954&&this[_0x45d295(0x1d0)]['setHue'](_0x4789aa);}return _0x2c47ae[_0x45d295(0x35c)](_0x30dbcb),_0x2c47ae;},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x22a)]=Game_CharacterBase[_0x3e1ce9(0x20a)]['update'],Game_CharacterBase[_0x3e1ce9(0x20a)]['update']=function(){const _0x1e4133=_0x3e1ce9;VisuMZ['DragonbonesUnion'][_0x1e4133(0x22a)][_0x1e4133(0x2d0)](this),this[_0x1e4133(0x290)]();},Game_CharacterBase['prototype'][_0x3e1ce9(0x290)]=function(){const _0x29f9a0=_0x3e1ce9;if(!this[_0x29f9a0(0x317)]())return;this[_0x29f9a0(0x301)]()?'sIcId'===_0x29f9a0(0x1fa)?this[_0x29f9a0(0x2bf)]=VisuMZ[_0x29f9a0(0x2ee)]['Settings'][_0x29f9a0(0x1e3)]['WalkTimer']:_0x3602b4[_0x29f9a0(0x280)]=_0xfb0f00(_0x2180ad['$1'])['trim']():this[_0x29f9a0(0x2bf)]--;},VisuMZ['DragonbonesUnion']['Game_Player_refresh']=Game_Player[_0x3e1ce9(0x20a)][_0x3e1ce9(0x35d)],Game_Player[_0x3e1ce9(0x20a)][_0x3e1ce9(0x35d)]=function(){const _0xf97d1a=_0x3e1ce9;VisuMZ[_0xf97d1a(0x2ee)][_0xf97d1a(0x2fe)]['call'](this),this['setupDragonbonesData']();},Game_Player[_0x3e1ce9(0x20a)][_0x3e1ce9(0x33d)]=function(){const _0x53bd09=_0x3e1ce9,_0x26d17d=$gameParty['leader']();!_0x26d17d?this['initDragonbonesData']():_0x53bd09(0x25a)===_0x53bd09(0x27a)?_0x4112ce[_0x53bd09(0x31e)]=_0x3ccfe8(_0x5a1322['$1']):this[_0x53bd09(0x2e2)]=_0x26d17d[_0x53bd09(0x27d)]();},VisuMZ[_0x3e1ce9(0x2ee)]['Game_Follower_refresh']=Game_Follower[_0x3e1ce9(0x20a)][_0x3e1ce9(0x35d)],Game_Follower[_0x3e1ce9(0x20a)][_0x3e1ce9(0x35d)]=function(){const _0x11d8b6=_0x3e1ce9;VisuMZ[_0x11d8b6(0x2ee)]['Game_Follower_refresh'][_0x11d8b6(0x2d0)](this),this[_0x11d8b6(0x33d)]();},Game_Follower['prototype'][_0x3e1ce9(0x33d)]=function(){const _0x3d6ce0=_0x3e1ce9,_0x1fce76=this['actor']();if(!_0x1fce76)this[_0x3d6ce0(0x248)]();else{if('KFIcp'!==_0x3d6ce0(0x37d)){if(!this[_0x3d6ce0(0x21a)])return;const _0x467ad1=this['_dragonbones']['animation'];if(_0x467ad1[_0x3d6ce0(0x316)]){const _0x1e0e45=_0x467ad1[_0x3d6ce0(0x260)];let _0x1c896a=_0x39bd90['DragonbonesUnion'][_0x3d6ce0(0x348)][_0x3d6ce0(0x2ba)]['IdleBypassList'];_0x1c896a===_0x368bb4&&(_0x1c896a=['dead','escape',_0x3d6ce0(0x340)]),!_0x1c896a[_0x3d6ce0(0x1e7)](_0x1e0e45)&&this[_0x3d6ce0(0x244)]();}}else this[_0x3d6ce0(0x2e2)]=_0x1fce76[_0x3d6ce0(0x27d)]();}},Game_Actor['prototype'][_0x3e1ce9(0x248)]=function(){const _0x422262=_0x3e1ce9;Game_BattlerBase[_0x422262(0x20a)][_0x422262(0x248)][_0x422262(0x2d0)](this),Game_CharacterBase[_0x422262(0x20a)][_0x422262(0x248)]['call'](this);},Game_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x33d)]=function(){const _0x205655=_0x3e1ce9;Game_BattlerBase['prototype'][_0x205655(0x33d)][_0x205655(0x2d0)](this);const _0x54287d=this['actor']()[_0x205655(0x357)];Game_CharacterBase[_0x205655(0x20a)][_0x205655(0x35e)][_0x205655(0x2d0)](this,_0x54287d);},Game_Actor[_0x3e1ce9(0x20a)][_0x3e1ce9(0x27d)]=function(){const _0x1653a4=_0x3e1ce9;if(this[_0x1653a4(0x2e2)]!==undefined)return this[_0x1653a4(0x2e2)];return this[_0x1653a4(0x248)](),this[_0x1653a4(0x33d)](),this[_0x1653a4(0x2e2)];},VisuMZ['DragonbonesUnion'][_0x3e1ce9(0x1c7)]=Game_Event[_0x3e1ce9(0x20a)][_0x3e1ce9(0x211)],Game_Event[_0x3e1ce9(0x20a)][_0x3e1ce9(0x211)]=function(){const _0x2215d5=_0x3e1ce9;VisuMZ['DragonbonesUnion'][_0x2215d5(0x1c7)][_0x2215d5(0x2d0)](this),this['initDragonbonesData']();},VisuMZ[_0x3e1ce9(0x2ee)]['Game_Event_setupPageSettings']=Game_Event[_0x3e1ce9(0x20a)][_0x3e1ce9(0x247)],Game_Event[_0x3e1ce9(0x20a)][_0x3e1ce9(0x247)]=function(){const _0x44762b=_0x3e1ce9;VisuMZ[_0x44762b(0x2ee)][_0x44762b(0x267)][_0x44762b(0x2d0)](this),this['initDragonbonesData'](),this[_0x44762b(0x33d)]();},Game_Event[_0x3e1ce9(0x20a)][_0x3e1ce9(0x33d)]=function(){const _0x3ef9fe=_0x3e1ce9;this[_0x3ef9fe(0x274)](),this[_0x3ef9fe(0x347)]();},Game_Event[_0x3e1ce9(0x20a)]['setupDragonbonesDataNotetags']=function(){const _0x128204=_0x3e1ce9;if(!this[_0x128204(0x2fc)]()){if(_0x128204(0x30a)!==_0x128204(0x30a)){if(this[_0x128204(0x2e2)]!==_0xdd18fe)return this[_0x128204(0x2e2)];return this[_0x128204(0x248)](),this['setupDragonbonesData'](),this['_dragonbonesSpriteData'];}else return;}const _0x54e328=this[_0x128204(0x2fc)]()['note'];if(_0x54e328==='')return;this[_0x128204(0x35e)](_0x54e328);},Game_Event[_0x3e1ce9(0x20a)][_0x3e1ce9(0x347)]=function(){const _0x8f011b=_0x3e1ce9;if(!this[_0x8f011b(0x2fc)]())return;if(!this['page']())return;const _0x1293c3=this['list']();let _0x42ff65='';for(const _0x41ad1d of _0x1293c3){if([0x6c,0x198]['includes'](_0x41ad1d[_0x8f011b(0x21e)])){if(_0x42ff65!=='')_0x42ff65+='\x0a';_0x42ff65+=_0x41ad1d[_0x8f011b(0x230)][0x0];}}this[_0x8f011b(0x35e)](_0x42ff65);},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x334)]=Game_Interpreter[_0x3e1ce9(0x20a)]['command357'],Game_Interpreter[_0x3e1ce9(0x20a)][_0x3e1ce9(0x20d)]=function(_0x3d0bb2){const _0x52a624=_0x3e1ce9;return $gameTemp[_0x52a624(0x232)](this),VisuMZ[_0x52a624(0x2ee)][_0x52a624(0x334)][_0x52a624(0x2d0)](this,_0x3d0bb2);},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x2e3)]=Sprite_Character[_0x3e1ce9(0x20a)]['initialize'],Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x293)]=function(_0xb8ffec){const _0x18174d=_0x3e1ce9;this[_0x18174d(0x248)](),VisuMZ[_0x18174d(0x2ee)][_0x18174d(0x2e3)]['call'](this,_0xb8ffec),this[_0x18174d(0x335)]();},Sprite_Character[_0x3e1ce9(0x20a)]['initDragonbonesData']=function(){const _0x1eb053=_0x3e1ce9;this['_dragonbones']=null,this[_0x1eb053(0x360)]='',this[_0x1eb053(0x350)]='';},Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x335)]=function(){const _0x26daa5=_0x3e1ce9;this['_baseDragonbonesSprite']=new Sprite(),this[_0x26daa5(0x298)](this[_0x26daa5(0x36f)]);},VisuMZ[_0x3e1ce9(0x2ee)][_0x3e1ce9(0x376)]=Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x23a)],Sprite_Character['prototype'][_0x3e1ce9(0x23a)]=function(){const _0x2356bc=_0x3e1ce9;VisuMZ[_0x2356bc(0x2ee)][_0x2356bc(0x376)][_0x2356bc(0x2d0)](this),this[_0x2356bc(0x2a2)]();},Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x32d)]=function(){const _0xb7fd5c=_0x3e1ce9;this[_0xb7fd5c(0x21a)]&&(this[_0xb7fd5c(0x36f)]['removeChild'](this[_0xb7fd5c(0x21a)]),this[_0xb7fd5c(0x21a)][_0xb7fd5c(0x26c)](),this['_dragonbones']=null,this[_0xb7fd5c(0x360)]='',this[_0xb7fd5c(0x350)]='');},Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x2a2)]=function(){const _0x56b07c=_0x3e1ce9;if(!this['_character'])return this[_0x56b07c(0x32d)]();if(!this['_character'][_0x56b07c(0x317)]())return this[_0x56b07c(0x32d)]();this[_0x56b07c(0x2f0)]();if(!this[_0x56b07c(0x21a)])return;this[_0x56b07c(0x22d)](),this[_0x56b07c(0x296)](),this['updateDragonbonesTimeScale']();},Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x2f0)]=function(){const _0x24ad96=_0x3e1ce9,_0x235b05=this[_0x24ad96(0x2d1)][_0x24ad96(0x27d)]();if(this['_dragonbonesFilename']===_0x235b05['filename'])return;this[_0x24ad96(0x32d)](),this[_0x24ad96(0x360)]=_0x235b05[_0x24ad96(0x280)],DragonbonesManager['loadArmature'](_0x235b05[_0x24ad96(0x280)],this[_0x24ad96(0x24e)]['bind'](this));},Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x24e)]=function(){const _0x2dd27b=_0x3e1ce9,_0x4b8819=this[_0x2dd27b(0x2d1)][_0x2dd27b(0x27d)]();this[_0x2dd27b(0x21a)]=DragonbonesManager[_0x2dd27b(0x1ec)](_0x4b8819[_0x2dd27b(0x280)]),this[_0x2dd27b(0x22d)](),setTimeout(this[_0x2dd27b(0x22e)]['bind'](this),0x0);},Sprite_Character[_0x3e1ce9(0x20a)]['addDragonbonesChild']=function(){const _0x41fc90=_0x3e1ce9;if(!this[_0x41fc90(0x21a)])return;if(!this[_0x41fc90(0x36f)])return;this['_baseDragonbonesSprite'][_0x41fc90(0x2b3)](this[_0x41fc90(0x21a)],0x0);},Sprite_Character[_0x3e1ce9(0x20a)]['updateDragonbonesAnimation']=function(){const _0x4a74b9=_0x3e1ce9;if(!this['_dragonbones'])return;const _0x524582=this[_0x4a74b9(0x2d1)][_0x4a74b9(0x27d)](),_0x5d53fa=this[_0x4a74b9(0x21a)][_0x4a74b9(0x322)],_0x1c7dd6=this[_0x4a74b9(0x2d1)][_0x4a74b9(0x382)](this['_dragonbones']);_0x5d53fa['isCompleted']&&(_0x1c7dd6&&_0x1c7dd6[_0x4a74b9(0x1aa)](/(?:IDLE|WALK|DASH)(\d+)/i)&&(this[_0x4a74b9(0x2d1)]['dragonbonesAnimation']=''),this[_0x4a74b9(0x350)]='',_0x5d53fa['lastAnimationName']='');if(this['_dragonbonesAnimation']!==_0x1c7dd6){if(_0x4a74b9(0x214)!==_0x4a74b9(0x19c))this[_0x4a74b9(0x350)]=_0x1c7dd6,this[_0x4a74b9(0x35a)]();else return this[_0x4a74b9(0x1c4)]()[_0x4a74b9(0x280)]!=='';}},Sprite_Character[_0x3e1ce9(0x20a)]['playDragonbonesAnimation']=function(){const _0x10ab5e=_0x3e1ce9;if(!this['_dragonbones'])return;const _0x536470=this[_0x10ab5e(0x21a)][_0x10ab5e(0x322)],_0x341cdd=this['_dragonbonesAnimation'][_0x10ab5e(0x1e8)]()[_0x10ab5e(0x2de)]();if(_0x536470[_0x10ab5e(0x21f)][_0x341cdd]){if(_0x536470[_0x10ab5e(0x260)]===_0x341cdd&&_0x536470[_0x10ab5e(0x21f)][_0x341cdd][_0x10ab5e(0x2c2)]<=0x0)return;_0x536470['play'](_0x341cdd);}},Sprite_Character[_0x3e1ce9(0x20a)]['updateDragonbonesProperties']=function(){const _0x2c9257=_0x3e1ce9;if(!this['_dragonbones'])return;const _0x516997=this[_0x2c9257(0x2d1)]['dragonbonesSpriteData']();this[_0x2c9257(0x21a)]['x']=_0x516997[_0x2c9257(0x365)],this[_0x2c9257(0x21a)]['y']=_0x516997[_0x2c9257(0x2a7)],this[_0x2c9257(0x21a)][_0x2c9257(0x30c)]['x']=_0x516997[_0x2c9257(0x1c3)]*this[_0x2c9257(0x229)](),this['_dragonbones'][_0x2c9257(0x30c)]['y']=_0x516997[_0x2c9257(0x31e)];},Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x229)]=function(){const _0x4f8bc7=_0x3e1ce9,_0xd5ddaf=this[_0x4f8bc7(0x2d1)][_0x4f8bc7(0x27d)]();this['_dragonbonesFlipDirection']=this[_0x4f8bc7(0x1d8)]||0x1;if(_0xd5ddaf[_0x4f8bc7(0x199)]&&[0x1,0x4,0x7][_0x4f8bc7(0x1e7)](this[_0x4f8bc7(0x2d1)][_0x4f8bc7(0x352)]()))'LHmdx'!==_0x4f8bc7(0x1c6)?(_0x40b791[_0x4f8bc7(0x2ee)]['Game_Actor_performDamage'][_0x4f8bc7(0x2d0)](this),this[_0x4f8bc7(0x1cf)]()):this[_0x4f8bc7(0x1d8)]=-0x1;else{if(_0xd5ddaf[_0x4f8bc7(0x2f5)]&&[0x9,0x6,0x3][_0x4f8bc7(0x1e7)](this[_0x4f8bc7(0x2d1)]['direction']()))_0x4f8bc7(0x338)!==_0x4f8bc7(0x338)?this['initDragonbonesData']():this[_0x4f8bc7(0x1d8)]=-0x1;else![0x8,0x2][_0x4f8bc7(0x1e7)](this[_0x4f8bc7(0x2d1)][_0x4f8bc7(0x352)]())&&(this['_dragonbonesFlipDirection']=0x1);}return this['_dragonbonesFlipDirection'];},Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x261)]=function(){const _0x2a5ee9=_0x3e1ce9;if(!this[_0x2a5ee9(0x21a)])return;const _0x9bdb3f=this[_0x2a5ee9(0x2d1)][_0x2a5ee9(0x27d)]();let _0x1fca10=_0x9bdb3f['timeScale'];this[_0x2a5ee9(0x2d1)][_0x2a5ee9(0x301)]()&&(_0x1fca10*=this[_0x2a5ee9(0x2d1)][_0x2a5ee9(0x1bf)](),this[_0x2a5ee9(0x2d1)]['isDashing']()?_0x1fca10*=_0x9bdb3f[_0x2a5ee9(0x1da)]:_0x1fca10*=_0x9bdb3f[_0x2a5ee9(0x2d4)]),this['_dragonbones'][_0x2a5ee9(0x322)][_0x2a5ee9(0x238)]=_0x1fca10;},VisuMZ['DragonbonesUnion'][_0x3e1ce9(0x239)]=Sprite_Character[_0x3e1ce9(0x20a)]['updateCharacterFrame'],Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x1be)]=function(){const _0x37267f=_0x3e1ce9;if(this[_0x37267f(0x2d1)]&&this[_0x37267f(0x2d1)][_0x37267f(0x317)]()){if('VFWWk'!==_0x37267f(0x2e9))this[_0x37267f(0x271)]();else{this['disposeDragonbones'](),_0x4164b6[_0x37267f(0x2ee)][_0x37267f(0x246)][_0x37267f(0x2d0)](this,_0x48d2db);if(_0x43b182[_0x37267f(0x19b)]())this[_0x37267f(0x351)]=0x0;}}else VisuMZ[_0x37267f(0x2ee)][_0x37267f(0x239)][_0x37267f(0x2d0)](this);},Sprite_Character[_0x3e1ce9(0x20a)][_0x3e1ce9(0x271)]=function(){const _0x335f00=_0x3e1ce9,_0x2cb4b5=this[_0x335f00(0x2d1)][_0x335f00(0x27d)](),_0xd13648=_0x2cb4b5[_0x335f00(0x223)];this[_0x335f00(0x354)](0x0,0x0,0x0,_0xd13648);};