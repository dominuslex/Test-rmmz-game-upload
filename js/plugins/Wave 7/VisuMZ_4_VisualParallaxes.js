//=============================================================================
// VisuStella MZ - Visual Parallaxes
// VisuMZ_4_VisualParallaxes.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VisualParallaxes = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualParallaxes = VisuMZ.VisualParallaxes || {};
VisuMZ.VisualParallaxes.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.08] [VisualParallaxes]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Parallaxes_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * By default, RPG Maker MZ only allows each map to have one parallax. Such a
 * limit makes it difficult to create different layers of objects to portray
 * distance and the like. This plugin will remedy that by allowing you to add
 * an unlimited amount of parallaxes per map alongside many controls to make
 * the parallaxes more vivid.
 * 
 * A restricted parallax area system is also added to this plugin to make
 * parallaxes appear only within certain regions and/or terrain tags. This way,
 * you can utilize parallaxes as masked layers for water surfaces and the like.
 * 
 * To make the most out of this, with the tilesets are formatted properly,
 * reflective water and reflective solid surfaces are also new effects added
 * through this plugin. Water effects will show ripples while reflective solid
 * surfaces are static.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Add, change, and/or remove parallaxes through map notetags.
 * * Lots of customization options for each of the parallaxes.
 * * Limit where parallaxes can be displayed on the map through regions and/or
 *   terrain tags.
 * * Create reflective surfaces for water and solid ground as long as the
 *   tilesets have been formatted properly.
 * * Use Plugin Commands midway through the game to add, change, fade, and/or
 *   remove parallaxes as needed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Recommended Plugin List ------
 *
 * * Pixi JS Filters*
 *
 * This plugin recommends the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You can use this plugin without
 * it, but there will be features missing.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
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
 * Parallaxes
 * 
 * The map editor's inherent parallax will remain untouched and unable to
 * utilize the extra features provided by this plugin. However, you can just
 * simply create a new parallax layer over it and hide it from view if needed.
 * 
 * Each of the parallaxes added through this plugin's notetags and/or commands
 * are assigned an ID. Referring back to the ID later will allow you to update
 * and/or remove that parallax when needed.
 * 
 * The new parallaxes are created on a separate layer from the map editor's
 * parallax and isn't included with the new parallaxes. Layers with higher ID's
 * will appear above layers with lower ID's.
 * 
 * However, other than that, all of the new parallaxes follow the same rules as
 * the map editor's parallax. This means that they will not appear above the
 * tile map and require transparent tiles to be seen. They will also scroll the
 * same way the original parallax does to provide consistency.
 *
 * ---
 * 
 * Regions and Terrain Tags
 * 
 * If you don't want a parallax to appear for the whole entire background and
 * want to confine them to certain areas of the map, you can assign regions or
 * terrain tags for them to appear in.
 * 
 * Only the parts of the map marked by the designated regions and/or terrain
 * tags will reveal the parallax. Those parts will be little squares each,
 * equal to the size of a tile. They have hard borders and do not have any
 * smoothing options in order to display the parallax tiles accurately.
 * 
 * Each parallax layer can have their own custom regions and/or terrain tags to
 * appear in. These can be adjusted through the notetag settings or through the
 * Plugin Commands provided by this plugin. Parallax layers can be limited to
 * multiple regions and/or terrain tags at the same time.
 * 
 * WARNING: This will cause longer load times on larger maps and affect their
 * performance. We highly recommend that you don't use this feature on maps
 * larger than 120 tiles wide or tall. However, this value can vary from device
 * to device.
 * 
 * ---
 * 
 * Reflections
 * 
 * In order to use reflections, you need to use tiles that are semi-transparent
 * or fully transparent. For example, water reflections need to come from tiles
 * that have been modified to be semi-transparent or fully transparent. If the
 * tile is completely opaque, the reflection will not show through. This rule
 * also applies to ground surfaces.
 * 
 * By default, water-based reflections are assigned the Terrain Tag 1 and solid
 * ground reflections are assigned the Terrain Tag 2. In order to make water
 * tiles show water reflections, you need to mark their tiles in the database's
 * tilesets with 1's. To mark reflective ground surfaces, mark them with 2's.
 * If the tiles are not tagged properly, the reflections will not be shown.
 * 
 * In the Plugin Parameters and notetags, you can decide if the reflections
 * will appear above the parallaxes or below them. By default, they will appear
 * above them. However, if you change them to appear below the parallaxes, then
 * pay attention to the opacity level of the parallaxes. If the parallaxes are
 * too opaque, you will barely see the reflection.
 * 
 * Once again, both water and ground tiles need to be semi-transparent or fully
 * transparent in order for reflections to be seen.
 * 
 * WARNING: This will cause longer load times on larger maps and affect their
 * performance. We highly recommend that you don't use this feature on maps
 * larger than 120 tiles wide or tall. However, this value can vary from device
 * to device.
 * 
 * ---
 * 
 * Not For Battle
 * 
 * For clarification, the VisuStella MZ Visual Parallaxes plugin is NOT made
 * for battle. There's a separate plugin for that called Visual Battle
 * Environment. The reason why parallaxes aren't made for battle is because the
 * way parallaxes are handled in map vary from how they would be handled in
 * battle. Using the Visual Parallax Plugin Commands will only alter the
 * parallax appearances when the player finishes battle.
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
 * Pixi JS Filters
 *
 * If the game project has Pixi JS Filters installed, then water reflections
 * will have a ripple effect. This is based off the Pixi JS ReflectionFilter
 * and will follow their rules. There are a couple of settings that can be
 * adjusted to customize the reflective properties.
 * 
 * Boundary: Vertical position of the reflection point, default is 50% (middle)
 * smaller numbers produce a larger reflection, larger numbers produce a
 * smaller reflection. This also means that reflections closer to the edges
 * will also have a different visual ripple effect than those towards the
 * middle of the reflection.
 * 
 * Amplitude: Starting and ending amplitude of waves allows you to control the
 * intensity of the reflection ripples. Use larger numbers for more intensity.
 * You have control over the values for the start and end values.
 * 
 * Wavelength: Starting and ending wavelength values determine the size of the
 * ripples for the reflection filter. Use larger numbers for larger wave sizes.
 * You have control over the values for the start and end values.
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
 * === Parallax-Related Notetags ===
 * 
 * ---
 *
 * <Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a regular parallax layer for this map by default.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 *
 * ---
 *
 * <Water Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Water Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a water-based parallax layer for this map by default.
 *   - This will utilize the water reflection properties and will only appear
 *     on water-marked regions and terrain tags.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 *
 * <Solid Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Solid Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a solid-based parallax layer for this map by default.
 *   - This will utilize the solid reflection properties and will only appear
 *     on solid-marked regions and terrain tags.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 * 
 * -=-=- Optional Properties -=-=-
 * 
 * Replace the 'optional property' segment of the notetags above with any of
 * the text below to acquire their effects. You can add/remove as many of the
 * optional properties as you need.
 * 
 * ---
 * 
 * Horz Scroll: x
 * Vert Scroll: y
 * 
 * - This enables horizontal or vertical scrolling for the parallax.
 * - Replace 'x' or 'y' with a Number value to determine how fast they will
 *   scroll across the screen.
 * - Use a negative value to make them scroll the other way.
 * - These effects are mutually exclusive from the "Map Locked" property.
 * 
 * ---
 * 
 * Map Locked
 * 
 * - This will cause the parallax to only scroll when the map scrolls.
 * - This has the same effect as naming a parallax with "!" in front of
 *   its filename.
 * - If the filename used for this parallax has "!" in front of it, the
 *   Map Locked effect will be automatically turned on.
 * - These effect is mutually exclusive from the "Horz Scroll" and
 *   "Vert Scroll" properties.
 * 
 * ---
 * 
 * Opacity: x
 * Opacity: x%
 * 
 * - Changes the opacity level of the parallax.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * 
 * ---
 * 
 * Blend Mode: Normal
 * Blend Mode: Additive
 * Blend Mode: Multiply
 * Blend Mode: Screen
 * 
 * - Sets the blend mode for the icon on the parallax.
 * - Use only one of the above.
 * 
 * ---
 * 
 * Hue: x
 * Hue Shift: x
 * 
 * - Changes the hue of the parallax to 'x' so that you don't need to create
 *   multiple copies of the files with different colors.
 * - Replace 'x' with a number value between 0 and 360.
 * - If the "Hue Shift" property is also used, then adjust the hue of the
 *   parallax each frame by 'x' amount.
 *   - 'x' can be positive or negative.
 * 
 * ---
 * 
 * Color Tone: red, green, blue, gray
 * 
 * - Changes the color tone or tint of the parallax.
 * - Replace 'red', 'green', 'blue' with a value between -255 and 255.
 * - Replace 'gray' with a value between 0 and 255.
 * 
 * ---
 * 
 * Region: id
 * Regions: id, id, id
 * 
 * - Forces the parallax to only become visible on tiles marked regions with a
 *   matching ID (alongside valid terrain tags).
 * - If this isn't used, then the parallax will be as large as the screen.
 * - Replace 'id' with a region ID between 1 and 255.
 *   - Region 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * Terrain Tag: id
 * Terrain Tags: id, id, id
 * 
 * - Forces the parallax to only become visible on tiles marked terrain tags
 *   with a matching ID (alongside valid regions).
 * - If this isn't used, then the parallax will be as large as the screen.
 * - Replace 'id' with a terrain tag ID between 1 and 7.
 *   - Terrain tag 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * === Event Reflection-Related Notetags ===
 * 
 * ---
 *
 * <No Reflection>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - This will cause the event to not show any reflection on reflective tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Reflection-Related Notetags ===
 * 
 * In order to use reflections, you need to use tiles that are semi-transparent
 * or fully transparent. For example, water reflections need to come from tiles
 * that have been modified to be semi-transparent or fully transparent. If the
 * tile is completely opaque, the reflection will not show through. This rule
 * also applies to ground surfaces.
 * 
 * ---
 *
 * <Water Reflection Region: id>
 * <Water Reflection Regions: id, id, id>
 *
 * <Solid Reflection Region: id>
 * <Solid Reflection Regions: id, id, id>
 *
 * - Used for: Map Notetags
 * - Sets the tiles marked by the region ID's to become reflective.
 * - This will override the Plugin Parameter settings for this map.
 *   - This does not add upon them.
 * - Replace 'id' with a region ID between 1 and 255.
 *   - Region 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 *
 * <Water Reflection Terrain Tag: id>
 * <Water Reflection Terrain Tags: id, id, id>
 *
 * <Solid Reflection Terrain Tag: id>
 * <Solid Reflection Terrain Tags: id, id, id>
 *
 * - Used for: Map Notetags
 * - Sets the tiles marked by the terrain tag ID's to become reflective.
 * - This will override the Plugin Parameter settings for this map.
 *   - This does not add upon them.
 * - Replace 'id' with a terrain tag ID between 1 and 7.
 *   - Terrain Tag 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 * 
 * <No Reflections>
 * 
 * - Used for: Map Notetags
 * - Disable water and map reflections on the current map.
 * 
 * ---
 *
 * <Water Reflection Top>
 * <Water Reflection Bottom>
 *
 * <Solid Reflection Top>
 * <Solid Reflection Bottom>
 *
 * - Used for: Map Notetags
 * - This will put the reflection layer either above all of the newly added
 *   parallaxes or below them.
 *   - If placed below, the reflection layer will not appear below the map
 *     editor's parallax layer.
 *   - If you change them to appear below the parallaxes, then pay attention to
 *     the opacity level of the parallaxes. If the parallaxes are too opaque,
 *     you will barely see the reflection.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 *
 * <Water Reflection Blur: x>
 * 
 * <Solid Reflection Blur: x>
 *
 * - Used for: Map Notetags
 * - Changes how much the water/solid tiles will blur the reflection for
 *   this map.
 * - Replace 'x' with a decimal Number value. Use a number between 0 and 1 for
 *   the best results.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 *
 * <Water Reflection Opacity: x>
 * <Water Reflection Opacity: x%>
 * 
 * <Solid Reflection Opacity: x>
 * <Solid Reflection Opacity: x%>
 *
 * - Used for: Map Notetags
 * - Changes the opacity level of the tile's reflection.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 * 
 * <Water Reflection Boundary: x>
 *
 * <Water Reflection Amplitude: start, end>
 * 
 * <Water Reflection Wavelength: start, end>
 *
 * - Used for: Map Notetags
 * - Requires Pixi JS Filters installed for the game project.
 * - These settings adjust the water reflection's ripple intensity.
 * - Replace Boundary's 'x' with a number value between 0 and 1.
 *   - Vertical position of the reflection point, default is 50% (middle)
 *     smaller numbers produce a larger reflection, larger numbers produce a
 *     smaller reflection. This also means that reflections closer to the edges
 *     will also have a different visual ripple effect than those towards the
 *     middle of the reflection.
 * - Replace Amplitude's 'start' and 'end' with number values representing how
 *   much to alter the intensity by.
 *   - Starting and ending amplitude of waves allows you to control the
 *     intensity of the reflection ripples.
 *   - Use larger numbers for more intensity.
 * - Replace Wavelength's 'start' and 'end' with number values representing the
 *   wave size.
 *   - Starting and ending wavelength values determine the size of the ripples
 *     for the reflection filter.
 *   - Use larger numbers for larger wave sizes.
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
 * === Parallax Plugin Commands ===
 * 
 * ---
 *
 * Parallax: Add/Change Settings
 * - Add/Change settings for target parallax.
 * - Does not alter the map editor's parallax.
 *
 *   Required:
 *
 *     ID:
 *     - What is the ID of this parallax to be added/changed?
 *
 *     Filename:
 *     - What is the filename of the parallax?
 *
 *     Type:
 *     - What kind of parallax is this going to be?
 *     - Normal
 *     - Water
 *     - Solid
 * 
 *   Optional Settings:
 * 
 *     Scrolling:
 *
 *       Map Lock?:
 *       - Lock the parallax to the map's scrolling?
 *       - Automatically enable if the filename starts with "!"
 *
 *       Loop Horizontally?:
 *       - Loop the parallax horizontally?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the horizontal scroll speed?
 *         - Use a negative value to invert the direction.
 *
 *       Loop Vertically?:
 *       - Loop the parallax vertically?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the vertical scroll speed?
 *         - Use a negative value to invert the direction.
 * 
 *     Appearance:
 *
 *       Opacity:
 *       - What is the opacity level for this parallax?
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the parallax?
 *       - You may use JavaScript code.
 *         - Normal
 *         - Additive
 *         - Multiply
 *         - Screen
 *
 *       Hue:
 *       - Do you wish to adjust this parallax's hue?
 *       - You may use JavaScript code.
 *
 *       Hue Shift:
 *       - How much do you want the hue to shift each frame?
 *       - You may use JavaScript code.
 *
 *       Color Tone:
 *       - What tone do you want for the parallax?
 *       - Format: [Red, Green, Blue, Gray]
 * 
 *     Location:
 *
 *       Regions:
 *       - Which regions will show this parallax?
 *       - Does not work with 0. Leave empty to ignore.
 *
 *       Terrain Tags:
 *       - Which terrain tags will show this parallax?
 *       - Does not work with 0. Leave empty to ignore.
 *
 * ---
 * 
 * Parallax: Fade Opacity
 * - Fades the target parallax(es) opacity to a different value.
 * 
 *   ID(s):
 *   - Target which parallax(es)?
 *   - Cannot target the map editor's parallax.
 * 
 *   Target Opacity:
 *   - What opacity level to this value (0-255).
 *   - You may use JavaScript code to determine the value.
 * 
 *   Duration:
 *   - How many frames should this change take?
 *   - You may use JavaScript code to determine the value.
 * 
 * ---
 *
 * Parallax: Remove
 * - Removes target parallax(es).
 *
 *   ID(s):
 *   - Remove which parallax(es)?
 *   - Cannot remove the map editor's parallax.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Water Reflection Settings
 * ============================================================================
 *
 * These are the default settings for water-based reflections.
 *
 * ---
 *
 * Markers
 * 
 *   Regions:
 *   - By default, which regions by default apply this reflection?
 *   - 0 is ignored.
 * 
 *   Terrain Tags:
 *   - By default, which terrain tags by default apply this reflection?
 *   - 0 is ignored.
 *
 * ---
 *
 * Positioning
 * 
 *   Above Parallaxes?:
 *   - Place water reflections above visual parallaxes?
 *
 * ---
 *
 * Appearance
 * 
 *   Blur Rate:
 *   - How much do you wish to blur this reflection?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Opacity:
 *   - What is the default opacity for this reflection?
 *   - Use a value between 0 and 255.
 * 
 *   Water Boundary:
 *   - At which point is the water boundary?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Amplitude Start:
 *   - What should be the starting amplitude value?
 * 
 *   Amplitude End:
 *   - What should be the ending amplitude value?
 * 
 *   Wavelength Start:
 *   - What should be the starting wavelength value?
 * 
 *   Wavelength End:
 *   - What should be the ending wavelength value?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Solid Reflection Settings
 * ============================================================================
 *
 * These are the default settings for solid ground reflections.
 *
 * ---
 *
 * Markers
 * 
 *   Regions:
 *   - By default, which regions by default apply this reflection?
 *   - 0 is ignored.
 * 
 *   Terrain Tags:
 *   - By default, which terrain tags by default apply this reflection?
 *   - 0 is ignored.
 *
 * ---
 *
 * Positioning
 * 
 *   Above Parallaxes?:
 *   - Place water reflections above visual parallaxes?
 *
 * ---
 *
 * Appearance
 * 
 *   Blur Rate:
 *   - How much do you wish to blur this reflection?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Opacity:
 *   - What is the default opacity for this reflection?
 *   - Use a value between 0 and 255.
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
 * Version 1.08: May 18, 2023
 * * Bug Fixes!
 * ** Reflections should now work properly with VisuMZ_1_EventsMoveCore's
 *    latest version. Fix made by Arisu.
 * 
 * Version 1.07: August 4, 2022
 * * Compatibility Update!
 * ** Map Locked parallaxes now work better with smooth scroll.
 * 
 * Version 1.06: July 7, 2022
 * * Feature Update!
 * ** Blend modes are now revamped for the parallaxes to behave more like they
 *    do for pictures for better accuracy. Update made by Irina.
 * 
 * Version 1.05: January 27, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: January 6, 2022
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.03: December 9, 2021
 * * Documentation Update!
 * ** Added section to "Major Changes" for clarification purposes:
 * *** Not For Battle
 * *** For clarification, the VisuStella MZ Visual Parallxes plugin is NOT made
 *     for battle. There's a separate plugin for that called Visual Battle
 *     Environment. The reason why parallaxes aren't made for battle is because
 *     the way parallaxes are handled in map vary from how they would be
 *     handled in battle. Using the Visual Parallaxes Plugin Commands will only
 *     alter the parallax appearances when the player finishes battle.
 * * Feature Update!
 * ** Added fail safes to prevent Plugin Command usage during battle to cause
 *    problems while inside battle test. Update made by Irina.
 * 
 * Version 1.02: June 25, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for Event Title Scene.
 * 
 * Version 1.01: May 28, 2021
 * * Feature Update!
 * ** Fail safe added for those without Pixi JS Filters added.
 * ** Removed the VisuStella MZ Core Engine requirement.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 *
 * Version 1.00 Official Release Date: March 12, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxAddChangeSettings
 * @text Parallax: Add/Change Settings
 * @desc Add/Change settings for target parallax.
 * Does not alter the map editor's parallax.
 * 
 * @arg Required
 *
 * @arg id:num
 * @text ID
 * @parent Required
 * @type number
 * @min 1
 * @desc What is the ID of this parallax to be added/changed?
 * @default 1
 *
 * @arg filename:str
 * @text Filename
 * @parent Required
 * @type file
 * @dir img/parallaxes/
 * @desc What is the filename of the parallax?
 * @default >>>ATTENTION<<<
 *
 * @arg type:str
 * @text Type
 * @parent Required
 * @type select
 * @option Normal
 * @value normal
 * @option Water
 * @value water
 * @option Solid
 * @value solid
 * @desc What kind of parallax is this going to be?
 * @default normal
 *
 * @arg Optional:struct
 * @text Optional Settings
 * @type struct<Optional>
 * @desc Optional settings regarding Visual Parallaxes.
 * @default {"Scrolling":"","_parallaxZero:eval":"false","_parallaxLoopX:eval":"false","_parallaxSx:eval":"+0","_parallaxLoopY:eval":"false","_parallaxSy:eval":"+0","Appearance":"","opacity:eval":"255","blendMode:eval":"0","hue:eval":"0","hueShift:eval":"+0","colorTone:eval":"[0, 0, 0, 0]","Location":"","maskRegions:arraynum":"[]","maskTerrainTags:arraynum":"[]"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxFadeOpacity
 * @text Parallax: Fade Opacity
 * @desc Fades the target parallax(es) opacity to a different value.
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Target which parallax(es)?
 * Cannot target the map editor's parallax.
 * @default ["1"]
 *
 * @arg targetOpacity:eval
 * @text Target Opacity
 * @desc What opacity level to this value (0-255).
 * You may use JavaScript code to determine the value.
 * @default 255
 *
 * @arg opacityDuration:eval
 * @text Duration
 * @desc How many frames should this change take?
 * You may use JavaScript code to determine the value.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxRemove
 * @text Parallax: Remove
 * @desc Removes target parallax(es).
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Remove which parallax(es)?
 * Cannot remove the map editor's parallax.
 * @default ["1"]
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
 * @param VisualParallaxes
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param WaterReflect:struct
 * @text Water Reflection Settings
 * @type struct<WaterReflect>
 * @desc These are the default settings for water-based reflections.
 * @default {"Markers":"","Regions:arraynum":"[]","TerrainTags:arraynum":"[\"1\"]","Positioning":"","Top:eval":"true","Appearance":"","Blur:num":"0.8","Opacity:num":"128","Boundary:num":"0.1","AmpStart:num":"2","AmpEnd:num":"4","WaveStart:num":"4","WaveEnd:num":"16"}
 *
 * @param SolidReflect:struct
 * @text Solid Reflection Settings
 * @type struct<SolidReflect>
 * @desc These are the default settings for solid ground reflections.
 * @default {"Markers":"","Regions:arraynum":"[]","TerrainTags:arraynum":"[\"2\"]","Positioning":"","Top:eval":"true","Appearance":"","Blur:num":"0.8","Opacity:num":"128"}
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
 * Water Reflection Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WaterReflect:
 *
 * @param Markers
 *
 * @param Regions:arraynum
 * @text Regions
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 255
 * @desc By default, which regions by default apply this reflection? 0 is ignored.
 * @default []
 *
 * @param TerrainTags:arraynum
 * @text Terrain Tags
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 7
 * @desc By default, which terrain tags by default apply this reflection? 0 is ignored.
 * @default ["1"]
 * 
 * @param Positioning
 * 
 * @param Top:eval
 * @text Above Parallaxes?
 * @parent Positioning
 * @type boolean
 * @on Above Parallaxes
 * @off Below Parallaxes
 * @desc Place water reflections above visual parallaxes?
 * @default true
 * 
 * @param Appearance
 *
 * @param Blur:num
 * @text Blur Rate
 * @parent Appearance
 * @desc How much do you wish to blur this reflection?
 * Use a decimal number between 0 and 1.
 * @default 0.8
 *
 * @param Opacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this reflection?
 * Use a value between 0 and 255.
 * @default 128
 *
 * @param Boundary:num
 * @text Water Boundary
 * @parent Appearance
 * @desc At which point is the water boundary?
 * Use a decimal number between 0 and 1.
 * @default 0.1
 *
 * @param AmpStart:num
 * @text Amplitude Start
 * @parent Appearance
 * @type number
 * @desc What should be the starting amplitude value?
 * @default 2
 *
 * @param AmpEnd:num
 * @text Amplitude End
 * @parent Appearance
 * @type number
 * @desc What should be the ending amplitude value?
 * @default 4
 *
 * @param WaveStart:num
 * @text Wavelength Start
 * @parent Appearance
 * @type number
 * @desc What should be the starting wavelength value?
 * @default 4
 *
 * @param WaveEnd:num
 * @text Wavelength End
 * @parent Appearance
 * @type number
 * @desc What should be the ending wavelength value?
 * @default 16
 *
 */
/* ----------------------------------------------------------------------------
 * Solid Reflection Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SolidReflect:
 *
 * @param Markers
 *
 * @param Regions:arraynum
 * @text Regions
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 255
 * @desc By default, which regions by default apply this reflection? 0 is ignored.
 * @default []
 *
 * @param TerrainTags:arraynum
 * @text Terrain Tags
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 7
 * @desc By default, which terrain tags by default apply this reflection? 0 is ignored.
 * @default ["2"]
 * 
 * @param Positioning
 * 
 * @param Top:eval
 * @text Above Parallaxes?
 * @parent Positioning
 * @type boolean
 * @on Above Parallaxes
 * @off Below Parallaxes
 * @desc Place solid reflections above visual parallaxes?
 * @default true
 * 
 * @param Appearance
 *
 * @param Blur:num
 * @text Blur Rate
 * @parent Appearance
 * @desc How much do you wish to blur this reflection?
 * Use a decimal number between 0 and 1.
 * @default 0.8
 *
 * @param Opacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this reflection?
 * Use a value between 0 and 255.
 * @default 128
 *
 */
/* ----------------------------------------------------------------------------
 * Optional Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Optional:
 * 
 * @param Scrolling
 * 
 * @param _parallaxZero:eval
 * @text Map Lock?
 * @parent Scrolling
 * @type boolean
 * @on Map Lock
 * @off No Map Lock
 * @desc Lock the parallax to the map's scrolling?
 * Automatically enable if the filename starts with "!"
 * @default false
 * 
 * @param _parallaxLoopX:eval
 * @text Loop Horizontally?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the parallax horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _parallaxSx:eval
 * @text Scroll:
 * @parent _parallaxLoopX:eval
 * @desc What is the horizontal scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param _parallaxLoopY:eval
 * @text Loop Vertically?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the parallax horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _parallaxSy:eval
 * @text Scroll:
 * @parent _parallaxLoopY:eval
 * @desc What is the vertical scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param Appearance
 *
 * @param opacity:eval
 * @text Opacity
 * @parent Appearance
 * @desc What is the opacity level for this parallax?
 * You may use JavaScript code.
 * @default 255
 *
 * @param blendMode:eval
 * @text Blend Mode
 * @parent Appearance
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the parallax?
 * You may use JavaScript code.
 * @default 0
 *
 * @param hue:eval
 * @text Hue
 * @parent Appearance
 * @desc Do you wish to adjust this parallax's hue?
 * You may use JavaScript code.
 * @default 0
 *
 * @param hueShift:eval
 * @text Hue Shift
 * @parent hue:eval
 * @desc How much do you want the hue to shift each frame?
 * You may use JavaScript code.
 * @default +0
 *
 * @param colorTone:eval
 * @text Color Tone
 * @parent Appearance
 * @desc What tone do you want for the parallax?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 * 
 * @param Location
 *
 * @param maskRegions:arraynum
 * @text Regions
 * @parent Location
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which regions will show this parallax?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 * @param maskTerrainTags:arraynum
 * @text Terrain Tags
 * @parent Location
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which terrain tags will show this parallax?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 */
//=============================================================================

const _0x52be61=_0x358c;function _0x148e(){const _0x49e128=['MAElb','_parallaxLoopX','getWaterReflectionAmplitude','_parallaxLoopY','118214JYuhgu','updateHue','UyIQW','mGFJk','pzRRU','destroy','clone','updateTone','_id','_colorFilter','nOJRi','CreateLayerData','yVXer','HwWyN','WaterTop','Game_Map_setDisplayPos','tMLsC','terrainTag','hueShift','lZpFh','scrollLeft','getVisualParallaxSettings','updateVisualParallaxSettings','_parallaxSy','initialize','uOiAH','rtvvp','udKWO','bcGon','toUpperCase','_parallaxDataRef','match','ELWml','exit','screenTileX','NksGr','_spriteset','opacity','updateWaterReflections','constructor','_blurFilter','WTMwT','DEFAULT_SOLID_REFLECTION_REGIONS','Regions','isEventTest','XPTWV','FUNC','status','WaterBlur','_reflection','BpZFa','DEFAULT_SOLID_REFLECTION_FILTER_TOP','DEFAULT_WATER_REFLECTION_TERRAINTAGS','DEFAULT_WATER_REFLECTION_FILTER_WAVELENGTH','tileWidth','_parallaxX','setupPageSettings','mask','ReflectionFilter','indexOf','round','#ffffff','return\x200','_parallaxName','getWaterReflectionRegions','Settings','rKiyO','createMaskSprite','sortVisualParallaxes','kTkyf','scrollDown','colorTone','Spriteset_Map_createParallax','isLoopVertical','createWaterReflectionMask','hIfMa','ARRAYNUM','charAt','WEhVP','getSolidReflectionRegions','updateVisualParallaxLayer','FWSZx','WaterTerrainTags','clamp','Game_Map_scrollRight','note','rwRlE','isSceneMap','DEFAULT_WATER_REFLECTION_FILTER_BOUNDARY','setupVisualParallaxesNotetags','ADDITIVE','removeVisualParallax','nhXaW','filter','TerrainTags','createParallaxLayers','ARRAYJSON','parameters','_parallaxY','Start','children','ParallaxRemove','format','fillRect','WmahH','find','ARRAYSTRUCT','floor','filters','CkaDq','includes','addLoadListener','DEFAULT_WATER_REFLECTION_FILTER_BLUR','SolidTop','vehicles','makeDeepCopy','BlurFilter','getWaterReflectionBoundary','ConvertParams','updateMask','_waterReflectContainer','createSolidReflectionMask','HQvHq','setupVisualParallaxes','NUM','_parallaxContainer','bHBLo','setHue','displayY','NhZKk','SolidOpacityRate','OpacityFlat','registerReflectionSettings','oBEnK','createSolidReflectionLayer','SolidTerrainTags','AmpStart','ODoof','hue','_maskSprite','setupVisualParallaxesCommentTags','type','_parallaxSx','displayX','EVAL','getSolidReflectionTop','_updateColorFilter','SolidOpacityFlat','split','hasWaterReflections','clearPageSettings','YjIcl','create','zxqaJ','MULTIPLY','sort','_displayX','setColorTone','YdUXT','oKoPc','findTargetVisualParallax','WaterBoundary','cpTyZ','Game_Map_updateParallax','WaterReflect','scale','_baseSprite','createReflectionMask','height','getWaterReflectionTop','DEFAULT_WATER_REFLECTION_REGIONS','loadBitmap','YZsXl','Top','maskTerrainTags','removeChild','max','SolidReflect','rixyf','length','_createColorFilter','prototype','DEFAULT_SOLID_REFLECTION_TERRAINTAGS','_noReflection','_character','RegExp','getSolidReflectionBlur','NidTK','remove','blendMode','DEFAULT_SOLID_REFLECTION_FILTER_OPACITY','_solidReflectAdded','Optional','dmGjp','_displayY','opacityDuration','TemplateSettings','Opacity','list','updateOrigin','WaterBottom','NORMAL','events','bqePc','escVd','call','Filename','parse','createParallax','rxUtp','noReflections','1502500qelSYp','targetOpacity','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ParallaxFadeOpacity','reverseData','aJlRU','isLoopHorizontal','NAlEG','addChild','OtUXT','updateBlendMode','getWaterReflectionBlur','_parallaxZero','jXjFt','checkVisualParallaxesStringTags','_maskFilter','createNewParallaxLayer','Game_Map_scrollUp','DGxiX','_solidReflectContainer','createWaterReflectionLayer','DEFAULT_WATER_REFLECTION_FILTER_AMPLITUDE','name','SolidBlur','Game_Event_setupPageSettings','1123185VtYAJS','OXDzG','lglJm','_hasSolidReflections','3182136CJcGTJ','_reflectFilter','scrollRight','createCharacterReflections','NoReflection','End','oonNY','STR','updateParallax','rkEbh','oleCt','DEFAULT_SOLID_REFLECTION_FILTER_BLUR','WaterOpacityRate','euHEs','vtOgK','getSolidReflectionTerrainTags','WaterRegions','_scene','_solidReflectLayer','hasSolidReflections','OpacityRate','gAiaC','getSolidReflectionOpacity','JyHVv','WaveEnd','removeVisualParallaxLayer','cCtTv','TuIQD','oHJgg','8646IVPLUQ','createMaskBitmap','map','Game_Map_setup','_scaleY','_mask','oapKG','regionId','vlFJf','Game_Map_scrollLeft','5ntWbQq','187FQChJP','scrollUp','_hue','isInstanceOfSceneMap','_waterReflectAdded','hasOwnProperty','code','Spriteset_Map_update','ZDWoN','PGATu','setup','maskRegions','bind','updateSolidReflections','initVisualParallaxesEffects','_colorTone','UeKCh','registerCommand','DEFAULT_WATER_REFLECTION_FILTER_TOP','description','eKsfc','updateOpacity','version','Game_Map_scrollDown','getWaterReflectionTerrainTags','nZsPL','equals','_hasWaterReflections','OjICd','Argument\x20must\x20be\x20an\x20array','>>>ATTENTION<<<','trim','SolidRegions','jqGiQ','settings','setupVisualParallaxesEffects','origin','VisualParallaxes','screenTileY','event','setDisplayPos','createCharacters','932964ZyXbSH','filename','ARRAYEVAL','update','fJYUo','MaskTerrainTags','bitmap','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','tileHeight','STRUCT','getWaterReflectionOpacity','3735LHpLNL','HueShift','WaterAmplitude','getVisualParallaxes','width','YWSaq','getVisualParallaxOy','bgNed','1883JNOCte','push','getWaterReflectionWavelength','getVisualParallaxOx','12664Rwzejd','_visualParallaxSettings','rrcbf','addChangeVisualParallax','Blur','ARRAYFUNC','_waterReflectLayer','ElvfG'];_0x148e=function(){return _0x49e128;};return _0x148e();}(function(_0x217596,_0x22f2f3){const _0x37ef68=_0x358c,_0x54d7af=_0x217596();while(!![]){try{const _0x2f2227=-parseInt(_0x37ef68(0x22f))/0x1+parseInt(_0x37ef68(0x2a8))/0x2+parseInt(_0x37ef68(0x285))/0x3+-parseInt(_0x37ef68(0x233))/0x4*(parseInt(_0x37ef68(0x25a))/0x5)+parseInt(_0x37ef68(0x250))/0x6*(parseInt(_0x37ef68(0x298))/0x7)+parseInt(_0x37ef68(0x29c))/0x8*(-parseInt(_0x37ef68(0x290))/0x9)+parseInt(_0x37ef68(0x216))/0xa*(parseInt(_0x37ef68(0x25b))/0xb);if(_0x2f2227===_0x22f2f3)break;else _0x54d7af['push'](_0x54d7af['shift']());}catch(_0x47c8cf){_0x54d7af['push'](_0x54d7af['shift']());}}}(_0x148e,0xb3c36));var label=_0x52be61(0x280),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x22f049){const _0x597c79=_0x52be61;return _0x22f049[_0x597c79(0x2d7)]&&_0x22f049[_0x597c79(0x26e)][_0x597c79(0x316)]('['+label+']');})[0x0];VisuMZ[label][_0x52be61(0x2e9)]=VisuMZ[label][_0x52be61(0x2e9)]||{},VisuMZ[_0x52be61(0x1b9)]=function(_0x2cf6c3,_0x2737d0){const _0x166686=_0x52be61;for(const _0x8050a2 in _0x2737d0){if(_0x8050a2[_0x166686(0x2c7)](/(.*):(.*)/i)){if(_0x166686(0x24d)===_0x166686(0x24d)){const _0x47995d=String(RegExp['$1']),_0x1e4bd9=String(RegExp['$2'])[_0x166686(0x2c5)]()[_0x166686(0x27a)]();let _0x41232d,_0x3b3843,_0x1502d4;switch(_0x1e4bd9){case _0x166686(0x1bf):_0x41232d=_0x2737d0[_0x8050a2]!==''?Number(_0x2737d0[_0x8050a2]):0x0;break;case _0x166686(0x2f4):_0x3b3843=_0x2737d0[_0x8050a2]!==''?JSON['parse'](_0x2737d0[_0x8050a2]):[],_0x41232d=_0x3b3843[_0x166686(0x252)](_0x506c65=>Number(_0x506c65));break;case _0x166686(0x1d3):_0x41232d=_0x2737d0[_0x8050a2]!==''?eval(_0x2737d0[_0x8050a2]):null;break;case _0x166686(0x287):_0x3b3843=_0x2737d0[_0x8050a2]!==''?JSON[_0x166686(0x212)](_0x2737d0[_0x8050a2]):[],_0x41232d=_0x3b3843[_0x166686(0x252)](_0x6b2fec=>eval(_0x6b2fec));break;case'JSON':_0x41232d=_0x2737d0[_0x8050a2]!==''?JSON[_0x166686(0x212)](_0x2737d0[_0x8050a2]):'';break;case _0x166686(0x308):_0x3b3843=_0x2737d0[_0x8050a2]!==''?JSON[_0x166686(0x212)](_0x2737d0[_0x8050a2]):[],_0x41232d=_0x3b3843['map'](_0x30099b=>JSON[_0x166686(0x212)](_0x30099b));break;case _0x166686(0x2d6):_0x41232d=_0x2737d0[_0x8050a2]!==''?new Function(JSON[_0x166686(0x212)](_0x2737d0[_0x8050a2])):new Function(_0x166686(0x2e6));break;case _0x166686(0x2a1):_0x3b3843=_0x2737d0[_0x8050a2]!==''?JSON[_0x166686(0x212)](_0x2737d0[_0x8050a2]):[],_0x41232d=_0x3b3843[_0x166686(0x252)](_0x4f098a=>new Function(JSON[_0x166686(0x212)](_0x4f098a)));break;case _0x166686(0x23a):_0x41232d=_0x2737d0[_0x8050a2]!==''?String(_0x2737d0[_0x8050a2]):'';break;case'ARRAYSTR':_0x3b3843=_0x2737d0[_0x8050a2]!==''?JSON[_0x166686(0x212)](_0x2737d0[_0x8050a2]):[],_0x41232d=_0x3b3843[_0x166686(0x252)](_0x2189a6=>String(_0x2189a6));break;case _0x166686(0x28e):_0x1502d4=_0x2737d0[_0x8050a2]!==''?JSON[_0x166686(0x212)](_0x2737d0[_0x8050a2]):{},_0x41232d=VisuMZ['ConvertParams']({},_0x1502d4);break;case _0x166686(0x312):_0x3b3843=_0x2737d0[_0x8050a2]!==''?JSON[_0x166686(0x212)](_0x2737d0[_0x8050a2]):[],_0x41232d=_0x3b3843['map'](_0x2c3165=>VisuMZ[_0x166686(0x1b9)]({},JSON[_0x166686(0x212)](_0x2c3165)));break;default:continue;}_0x2cf6c3[_0x47995d]=_0x41232d;}else this[_0x166686(0x1f7)]();}}return _0x2cf6c3;},(_0x3ec70a=>{const _0x584503=_0x52be61,_0xcc18ee=_0x3ec70a['name'];for(const _0x5a78c6 of dependencies){if(!Imported[_0x5a78c6]){if('ZstQH'===_0x584503(0x21f)){const _0x1e4101=_0x42f4b7['VisualParallaxes'][_0x584503(0x1fc)],_0x57d90e=_0x14c557[_0x584503(0x2fd)]||'';if(_0x57d90e['match'](_0x1e4101[_0x584503(0x2b6)]))return!![];else{if(_0x57d90e[_0x584503(0x2c7)](_0x1e4101['WaterBottom']))return![];}return _0x4b8414['DEFAULT_WATER_REFLECTION_FILTER_TOP'];}else{alert(_0x584503(0x28c)['format'](_0xcc18ee,_0x5a78c6)),SceneManager[_0x584503(0x2c9)]();break;}}}const _0x7b5b5c=_0x3ec70a[_0x584503(0x26e)];if(_0x7b5b5c[_0x584503(0x2c7)](/\[Version[ ](.*?)\]/i)){if('rKiyO'!==_0x584503(0x2ea))for(const _0x26a351 of _0x49ff38){_0x26a351[_0x584503(0x2d9)]=!![],this[_0x584503(0x1bb)][_0x584503(0x21e)](_0x26a351),_0x26a351[_0x584503(0x1e8)]['y']=-0.85,_0x26a351[_0x584503(0x314)]=_0x26a351['filters']||[],this[_0x584503(0x2a2)][_0x584503(0x234)]&&_0x26a351['filters'][_0x584503(0x299)](this[_0x584503(0x2a2)][_0x584503(0x234)]);}else{const _0x1a286b=Number(RegExp['$1']);_0x1a286b!==VisuMZ[label][_0x584503(0x271)]&&(alert(_0x584503(0x218)[_0x584503(0x30e)](_0xcc18ee,_0x1a286b)),SceneManager[_0x584503(0x2c9)]());}}if(_0x7b5b5c[_0x584503(0x2c7)](/\[Tier[ ](\d+)\]/i)){const _0x510fe5=Number(RegExp['$1']);_0x510fe5<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x584503(0x30e)](_0xcc18ee,_0x510fe5,tier)),SceneManager[_0x584503(0x2c9)]()):tier=Math[_0x584503(0x1f3)](_0x510fe5,tier);}VisuMZ[_0x584503(0x1b9)](VisuMZ[label]['Settings'],_0x3ec70a['parameters']);})(pluginData),VisuMZ['VisualParallaxes'][_0x52be61(0x207)]=function(){return{'id':0x0,'filename':'','_parallaxZero':![],'_parallaxLoopX':![],'_parallaxLoopY':![],'_parallaxSx':0x0,'_parallaxSy':0x0,'_parallaxX':0x0,'_parallaxY':0x0,'opacity':0xff,'targetOpacity':0xff,'opacityDuration':0x0,'blendMode':0x0,'hue':0x0,'hueShift':0x0,'colorTone':[0x0,0x0,0x0,0x0],'maskRegions':[],'maskTerrainTags':[]};},PluginManager['registerCommand'](pluginData['name'],'ParallaxAddChangeSettings',_0x80f0e8=>{const _0x158f3b=_0x52be61;VisuMZ[_0x158f3b(0x1b9)](_0x80f0e8,_0x80f0e8);if(_0x80f0e8['id']<=0x0)return;if(_0x80f0e8[_0x158f3b(0x286)]===''||_0x80f0e8['filename']===_0x158f3b(0x279))return;let _0xb40b36=JsonEx[_0x158f3b(0x1b6)](_0x80f0e8[_0x158f3b(0x203)]);if(!_0xb40b36[_0x158f3b(0x260)]('maskRegions'))_0xb40b36=VisuMZ['VisualParallaxes'][_0x158f3b(0x207)]();_0xb40b36[_0x158f3b(0x286)]=_0x80f0e8[_0x158f3b(0x286)],_0xb40b36['id']=_0x80f0e8['id'];_0x80f0e8[_0x158f3b(0x1d0)]==='water'&&(_0xb40b36['maskRegions']['length']<=0x0&&(_0x158f3b(0x1cc)!==_0x158f3b(0x24f)?_0xb40b36[_0x158f3b(0x266)]=JsonEx[_0x158f3b(0x1b6)]($gameMap[_0x158f3b(0x2e8)]()):_0x43a331['_parallaxZero']=!![]),_0xb40b36[_0x158f3b(0x1f1)][_0x158f3b(0x1f6)]<=0x0&&(_0xb40b36[_0x158f3b(0x1f1)]=JsonEx[_0x158f3b(0x1b6)]($gameMap[_0x158f3b(0x273)]())));if(_0x80f0e8[_0x158f3b(0x1d0)]==='wasolidter'){if(_0xb40b36[_0x158f3b(0x266)][_0x158f3b(0x1f6)]<=0x0){if('MAElb'!==_0x158f3b(0x2a4)){if(_0x2099ea[_0x158f3b(0x2d4)]())return!![];if(this['isLoopHorizontal']()||this[_0x158f3b(0x2f1)]())return!![];const _0x36b5b2=_0x1a455d[_0x158f3b(0x280)][_0x158f3b(0x1fc)],_0x2f5620=_0x5cd25d[_0x158f3b(0x2fd)]||'';return _0x2f5620['match'](_0x36b5b2[_0x158f3b(0x237)])?!![]:![];}else _0xb40b36[_0x158f3b(0x266)]=JsonEx[_0x158f3b(0x1b6)]($gameMap[_0x158f3b(0x2f7)]());}if(_0xb40b36[_0x158f3b(0x1f1)][_0x158f3b(0x1f6)]<=0x0){if('gTaul'===_0x158f3b(0x289)){if(!this['_maskSprite'])return;const _0x1b8304=this['settings']()[_0x158f3b(0x266)],_0x55e6c8=this[_0x158f3b(0x27d)]()[_0x158f3b(0x1f1)];if(_0x1b8304[_0x158f3b(0x1f6)]<=0x0&&_0x55e6c8[_0x158f3b(0x1f6)]<=0x0)return;if(_0x19cd0b[_0x158f3b(0x21c)]()||_0x199fc8[_0x158f3b(0x2f1)]())return;this[_0x158f3b(0x1ce)]['x']=_0x1f544f[_0x158f3b(0x313)](-_0xc94fc5['displayX']()*_0x5497b3[_0x158f3b(0x2de)]()),this[_0x158f3b(0x1ce)]['y']=_0x350f76[_0x158f3b(0x313)](-_0x201dfb[_0x158f3b(0x1c3)]()*_0x537c80[_0x158f3b(0x28d)]());}else _0xb40b36[_0x158f3b(0x1f1)]=JsonEx[_0x158f3b(0x1b6)]($gameMap[_0x158f3b(0x242)]());}}while(_0xb40b36[_0x158f3b(0x2ef)][_0x158f3b(0x1f6)]<0x4){_0xb40b36[_0x158f3b(0x2ef)][_0x158f3b(0x299)](0x0);}_0xb40b36['_parallaxX']=0x0,_0xb40b36['_parallaxY']=0x0,_0xb40b36['targetOpacity']=_0x80f0e8['opacity'],_0xb40b36[_0x158f3b(0x206)]=0x0,$gameMap[_0x158f3b(0x29f)](_0xb40b36);}),PluginManager[_0x52be61(0x26c)](pluginData['name'],_0x52be61(0x219),_0x457581=>{const _0x11a9ab=_0x52be61;if(!SceneManager[_0x11a9ab(0x25e)]())return;VisuMZ[_0x11a9ab(0x1b9)](_0x457581,_0x457581);const _0x6fc5a5=_0x457581[_0x11a9ab(0x209)];for(const _0x2e66e2 of _0x6fc5a5){if(_0x11a9ab(0x2f6)==='CMTId'){const _0xcd035f=_0x279ecf(_0x5166b4['$1'])['split'](',')[_0x11a9ab(0x252)](_0x3fe105=>_0x45116a(_0x3fe105)||0x1);_0x522bf7[_0x11a9ab(0x1f1)]=_0xcd035f;}else{const _0x56e985=$gameMap[_0x11a9ab(0x2bd)](_0x2e66e2);if(!_0x56e985)continue;_0x56e985['targetOpacity']=_0x457581['targetOpacity']||0x0,_0x56e985['opacityDuration']=_0x457581[_0x11a9ab(0x206)]||0x0,_0x56e985[_0x11a9ab(0x206)]<=0x0&&(_0x56e985[_0x11a9ab(0x2cd)]=_0x56e985[_0x11a9ab(0x217)]);}}}),PluginManager[_0x52be61(0x26c)](pluginData[_0x52be61(0x22c)],_0x52be61(0x30d),_0xd2a9fb=>{const _0x4da589=_0x52be61;if(!SceneManager[_0x4da589(0x25e)]())return;VisuMZ[_0x4da589(0x1b9)](_0xd2a9fb,_0xd2a9fb);const _0x4f9491=_0xd2a9fb[_0x4da589(0x209)];for(const _0x39c770 of _0x4f9491){$gameMap[_0x4da589(0x303)](_0x39c770);}}),VisuMZ['VisualParallaxes'][_0x52be61(0x1fc)]={'Start':/<(?:PARALLAX|WATER PARALLAX|SOLID PARALLAX)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'End':/<\/(?:PARALLAX|WATER PARALLAX|SOLID PARALLAX)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'Filename':/(?:FILENAME|NAME):[ ](.*)/i,'HorzLoop':/(?:HORZ|HORIZONTAL) (?:LOOP|SCROLL):[ ](.*)/i,'VertLoop':/(?:VERT|VERTICAL) (?:LOOP|SCROLL):[ ](.*)/i,'ScrollLock':/<(?:MAP|SCROLL)[ ](?:LOCK|LOCKED)>/i,'OpacityRate':/(?:OPACITY):[ ](\d+)([%％])/i,'OpacityFlat':/(?:OPACITY):[ ](\d+)/i,'BlendMode':/BLEND MODE:[ ](.*)/i,'Hue':/HUE:[ ](\d+)/i,'HueShift':/HUE (?:SHIFT|SPEED):[ ](.*)/i,'Tone':/(?:COLOR TONE|TONE|TINT):[ ](.*)/i,'MaskRegions':/(?:REGION|REGIONS):[ ](.*)/i,'MaskTerrainTags':/TERRAIN (?:TAG|TAGS):[ ](.*)/i,'WaterRegions':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:REGION|REGIONS):[ ](.*)>/i,'WaterTerrainTags':/<(?:WATER|WATER REFLECT|WATER REFLECTION) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'WaterTop':/<(?:WATER|WATER REFLECT|WATER REFLECTION) TOP>/i,'WaterBottom':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BOTTOM>/i,'WaterBlur':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BLUR:[ ](.*)>/i,'WaterOpacityRate':/<(?:WATER|WATER REFLECT|WATER REFLECTION) OPACITY:[ ](\d+)([%％])>/i,'WaterOpacityFlat':/<(?:WATER|WATER REFLECT|WATER REFLECTION) OPACITY:[ ](\d+)>/i,'WaterBoundary':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BOUNDARY:[ ](.*)>/i,'WaterAmplitude':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:AMP|AMPLITUDE):[ ](.*)>/i,'WaterWavelength':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:WAVE|WAVELENGTH):[ ](.*)>/i,'SolidRegions':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) (?:REGION|REGIONS):[ ](.*)>/i,'SolidTerrainTags':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'SolidTop':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) TOP>/i,'SolidBottom':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) BOTTOM>/i,'SolidBlur':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) BLUR:[ ](.*)>/i,'SolidOpacityRate':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) OPACITY:[ ](\d+)([%％])>/i,'SolidOpacityFlat':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) OPACITY:[ ](\d+)>/i,'NoReflection':/<NO (?:REFLECT|REFLECTION|REFLECTIONS)>/i},SceneManager[_0x52be61(0x2ff)]=function(){const _0x3c5d7e=_0x52be61;return this[_0x3c5d7e(0x244)]&&this[_0x3c5d7e(0x244)]['constructor']===Scene_Map;},SceneManager[_0x52be61(0x25e)]=function(){const _0x57741a=_0x52be61;return this[_0x57741a(0x244)]&&this[_0x57741a(0x244)]instanceof Scene_Map;},VisuMZ[_0x52be61(0x280)][_0x52be61(0x253)]=Game_Map['prototype'][_0x52be61(0x265)],Game_Map[_0x52be61(0x1f8)]['setup']=function(_0x58b505){const _0x2a01fc=_0x52be61;VisuMZ[_0x2a01fc(0x280)][_0x2a01fc(0x253)]['call'](this,_0x58b505),this[_0x2a01fc(0x1be)](),this[_0x2a01fc(0x1c7)]();},Game_Map[_0x52be61(0x1ed)]=VisuMZ[_0x52be61(0x280)][_0x52be61(0x2e9)][_0x52be61(0x1e7)][_0x52be61(0x2d3)],Game_Map[_0x52be61(0x2dc)]=VisuMZ['VisualParallaxes'][_0x52be61(0x2e9)]['WaterReflect'][_0x52be61(0x306)],Game_Map[_0x52be61(0x1f8)][_0x52be61(0x215)]=function(){const _0x4199a7=_0x52be61;if(DataManager['isEventTest']())return!![];if(this['isLoopHorizontal']()||this[_0x4199a7(0x2f1)]())return!![];const _0x2e5b52=VisuMZ['VisualParallaxes'][_0x4199a7(0x1fc)],_0x410781=$dataMap[_0x4199a7(0x2fd)]||'';if(_0x410781['match'](_0x2e5b52[_0x4199a7(0x237)])){if('Nylfq'!==_0x4199a7(0x2d1))return!![];else _0x647d09[_0x4199a7(0x303)](_0x3569ef);}else return![];},Game_Map[_0x52be61(0x1f8)]['getWaterReflectionRegions']=function(){const _0x1e3ddb=_0x52be61,_0x384891=VisuMZ[_0x1e3ddb(0x280)][_0x1e3ddb(0x1fc)],_0x5a2ac7=$dataMap[_0x1e3ddb(0x2fd)]||'';if(_0x5a2ac7['match'](_0x384891[_0x1e3ddb(0x243)]))return String(RegExp['$1'])[_0x1e3ddb(0x1d7)](',')[_0x1e3ddb(0x252)](_0x5b3c70=>Number(_0x5b3c70)||0x1)[_0x1e3ddb(0x1ff)](0x0);return JsonEx['makeDeepCopy'](Game_Map[_0x1e3ddb(0x1ed)])['remove'](0x0);},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x273)]=function(){const _0x5201cc=_0x52be61,_0x137168=VisuMZ[_0x5201cc(0x280)][_0x5201cc(0x1fc)],_0xee56e3=$dataMap['note']||'';if(_0xee56e3['match'](_0x137168[_0x5201cc(0x2fa)]))return String(RegExp['$1'])[_0x5201cc(0x1d7)](',')['map'](_0x1e274a=>Number(_0x1e274a)||0x1)['remove'](0x0);return JsonEx[_0x5201cc(0x1b6)](Game_Map[_0x5201cc(0x2dc)])[_0x5201cc(0x1ff)](0x0);},Game_Map[_0x52be61(0x26d)]=VisuMZ[_0x52be61(0x280)]['Settings'][_0x52be61(0x1e7)]['Top'],Game_Map[_0x52be61(0x318)]=VisuMZ[_0x52be61(0x280)][_0x52be61(0x2e9)][_0x52be61(0x1e7)][_0x52be61(0x2a0)],Game_Map['DEFAULT_WATER_REFLECTION_FILTER_OPACITY']=VisuMZ[_0x52be61(0x280)][_0x52be61(0x2e9)]['WaterReflect'][_0x52be61(0x208)],Game_Map[_0x52be61(0x300)]=VisuMZ['VisualParallaxes'][_0x52be61(0x2e9)][_0x52be61(0x1e7)]['Boundary'],Game_Map[_0x52be61(0x22b)]=[VisuMZ[_0x52be61(0x280)][_0x52be61(0x2e9)][_0x52be61(0x1e7)][_0x52be61(0x1cb)],VisuMZ[_0x52be61(0x280)][_0x52be61(0x2e9)]['WaterReflect']['AmpEnd']],Game_Map['DEFAULT_WATER_REFLECTION_FILTER_WAVELENGTH']=[VisuMZ['VisualParallaxes'][_0x52be61(0x2e9)][_0x52be61(0x1e7)]['WaveStart'],VisuMZ['VisualParallaxes'][_0x52be61(0x2e9)][_0x52be61(0x1e7)][_0x52be61(0x24b)]],Game_Map[_0x52be61(0x1f8)]['getWaterReflectionTop']=function(){const _0x955620=_0x52be61,_0x1a495f=VisuMZ['VisualParallaxes'][_0x955620(0x1fc)],_0x3e11da=$dataMap[_0x955620(0x2fd)]||'';if(_0x3e11da[_0x955620(0x2c7)](_0x1a495f['WaterTop'])){if(_0x955620(0x297)!==_0x955620(0x297))_0x261507[_0x955620(0x2a5)]&&(_0x197c37[_0x955620(0x2df)]+=_0x332a42);else return!![];}else{if(_0x3e11da[_0x955620(0x2c7)](_0x1a495f[_0x955620(0x20b)]))return![];}return Game_Map[_0x955620(0x26d)];},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x221)]=function(){const _0x287a4f=_0x52be61,_0x214857=VisuMZ[_0x287a4f(0x280)]['RegExp'],_0xc0f4ff=$dataMap[_0x287a4f(0x2fd)]||'';if(_0xc0f4ff[_0x287a4f(0x2c7)](_0x214857[_0x287a4f(0x2d8)])){if('lKwOf'!==_0x287a4f(0x214))return Math[_0x287a4f(0x1f3)](0x0,Number(RegExp['$1'])||0x0);else{const _0x5668e5=_0x1fd16f(_0x897c6f['$1']);_0x5668e5<_0x5d0557?(_0x3ff365('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x287a4f(0x30e)](_0xc47d12,_0x5668e5,_0x4dd16d)),_0x3194c0[_0x287a4f(0x2c9)]()):_0x31ecba=_0x15187d[_0x287a4f(0x1f3)](_0x5668e5,_0x36f61c);}}return Game_Map[_0x287a4f(0x318)];},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x28f)]=function(){const _0xfe2388=_0x52be61,_0x2ff3b9=VisuMZ[_0xfe2388(0x280)][_0xfe2388(0x1fc)],_0x4ad77d=$dataMap[_0xfe2388(0x2fd)]||'';if(_0x4ad77d[_0xfe2388(0x2c7)](_0x2ff3b9[_0xfe2388(0x23f)])){if(_0xfe2388(0x20f)===_0xfe2388(0x277)){const _0x4bc488=_0x15c821(_0x434e26['$1']);_0x4bc488!==_0x390e8f[_0x408f44][_0xfe2388(0x271)]&&(_0x57cf09(_0xfe2388(0x218)['format'](_0x54459b,_0x4bc488)),_0x3108b7['exit']());}else return Math['round']((Number(RegExp['$1'])||0x0)*0.01*0xff)[_0xfe2388(0x2fb)](0x0,0xff);}else{if(_0x4ad77d[_0xfe2388(0x2c7)](_0x2ff3b9['WaterOpacityFlat'])){if('IFcHU'===_0xfe2388(0x2f3)){const _0x52757c=this[_0xfe2388(0x282)]()[_0xfe2388(0x2fd)];if(_0x52757c==='')return;this[_0xfe2388(0x224)](_0x52757c);}else return(Number(RegExp['$1'])||0x0)['clamp'](0x0,0xff);}}return Game_Map[_0xfe2388(0x201)];},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x1b8)]=function(){const _0x451d62=_0x52be61,_0x6b4f2=VisuMZ['VisualParallaxes'][_0x451d62(0x1fc)],_0x5b07c9=$dataMap[_0x451d62(0x2fd)]||'';if(_0x5b07c9['match'](_0x6b4f2[_0x451d62(0x1e4)]))return _0x451d62(0x23c)===_0x451d62(0x1fe)?!![]:(Number(RegExp['$1'])||0x0)[_0x451d62(0x2fb)](0x0,0x1);return Game_Map[_0x451d62(0x300)];},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x2a6)]=function(){const _0x3f5b3a=_0x52be61,_0x38d1ba=VisuMZ[_0x3f5b3a(0x280)]['RegExp'],_0x373ebb=$dataMap[_0x3f5b3a(0x2fd)]||'';if(_0x373ebb[_0x3f5b3a(0x2c7)](_0x38d1ba[_0x3f5b3a(0x292)])){if(_0x3f5b3a(0x231)!==_0x3f5b3a(0x2c4)){const _0x508b7e=String(RegExp['$1'])['split'](',')['map'](_0x7a408c=>Number(_0x7a408c)||0x0);if(_0x508b7e['length']<=0x1)_0x508b7e[0x1]=_0x508b7e[0x0];}else{if(!this['_solidReflectAdded']&&_0x28793a[_0x3f5b3a(0x246)]())this['_solidReflectLayer'][_0x3f5b3a(0x21e)](this[_0x3f5b3a(0x229)]),this[_0x3f5b3a(0x202)]=!![];else this[_0x3f5b3a(0x202)]&&!_0x2a4010[_0x3f5b3a(0x246)]()&&(this[_0x3f5b3a(0x245)][_0x3f5b3a(0x1f2)](this[_0x3f5b3a(0x229)]),this['_solidReflectAdded']=![]);}}return JsonEx[_0x3f5b3a(0x1b6)](Game_Map['DEFAULT_WATER_REFLECTION_FILTER_AMPLITUDE'])[_0x3f5b3a(0x1ff)](0x0);},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x29a)]=function(){const _0x268b92=_0x52be61,_0x24734e=VisuMZ[_0x268b92(0x280)]['RegExp'],_0x37c5b5=$dataMap[_0x268b92(0x2fd)]||'';if(_0x37c5b5[_0x268b92(0x2c7)](_0x24734e[_0x268b92(0x292)])){const _0x57edea=String(RegExp['$1'])[_0x268b92(0x1d7)](',')[_0x268b92(0x252)](_0x24f8bd=>Number(_0x24f8bd)||0x0);if(_0x57edea[_0x268b92(0x1f6)]<=0x1)_0x57edea[0x1]=_0x57edea[0x0];}return JsonEx[_0x268b92(0x1b6)](Game_Map[_0x268b92(0x2dd)])['remove'](0x0);},Game_Map[_0x52be61(0x2d2)]=VisuMZ[_0x52be61(0x280)]['Settings'][_0x52be61(0x1f4)][_0x52be61(0x2d3)],Game_Map[_0x52be61(0x1f9)]=VisuMZ[_0x52be61(0x280)][_0x52be61(0x2e9)]['SolidReflect'][_0x52be61(0x306)],Game_Map['prototype'][_0x52be61(0x2f7)]=function(){const _0x514814=_0x52be61,_0x31c960=VisuMZ[_0x514814(0x280)][_0x514814(0x1fc)],_0x4b66bb=$dataMap[_0x514814(0x2fd)]||'';if(_0x4b66bb[_0x514814(0x2c7)](_0x31c960[_0x514814(0x27b)])){if('WnbXE'===_0x514814(0x2c3))_0x38811b['x']=_0x4dad23[_0x514814(0x313)](-_0x2bec90['displayX']()*_0x7c7095[_0x514814(0x2de)]()),_0x5ab998['y']=_0x2bbdbe['floor'](-_0x1cc9f1[_0x514814(0x1c3)]()*_0x2b28ed[_0x514814(0x28d)]());else return String(RegExp['$1'])[_0x514814(0x1d7)](',')[_0x514814(0x252)](_0x4d3f4c=>Number(_0x4d3f4c)||0x1)['remove'](0x0);}return JsonEx[_0x514814(0x1b6)](Game_Map[_0x514814(0x2d2)])[_0x514814(0x1ff)](0x0);},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x242)]=function(){const _0x2ca320=_0x52be61,_0x26433c=VisuMZ[_0x2ca320(0x280)][_0x2ca320(0x1fc)],_0x1c04d4=$dataMap[_0x2ca320(0x2fd)]||'';if(_0x1c04d4[_0x2ca320(0x2c7)](_0x26433c[_0x2ca320(0x1ca)]))return String(RegExp['$1'])[_0x2ca320(0x1d7)](',')[_0x2ca320(0x252)](_0x5f3244=>Number(_0x5f3244)||0x1)[_0x2ca320(0x1ff)](0x0);return JsonEx['makeDeepCopy'](Game_Map[_0x2ca320(0x1f9)])[_0x2ca320(0x1ff)](0x0);},Game_Map[_0x52be61(0x2db)]=VisuMZ[_0x52be61(0x280)][_0x52be61(0x2e9)][_0x52be61(0x1f4)][_0x52be61(0x1f0)],Game_Map[_0x52be61(0x23e)]=VisuMZ[_0x52be61(0x280)][_0x52be61(0x2e9)][_0x52be61(0x1f4)]['Blur'],Game_Map[_0x52be61(0x201)]=VisuMZ[_0x52be61(0x280)][_0x52be61(0x2e9)][_0x52be61(0x1f4)][_0x52be61(0x208)],Game_Map['prototype'][_0x52be61(0x1d4)]=function(){const _0x9f75b8=_0x52be61,_0x4bddf3=VisuMZ['VisualParallaxes'][_0x9f75b8(0x1fc)],_0x1373b6=$dataMap['note']||'';if(_0x1373b6[_0x9f75b8(0x2c7)](_0x4bddf3[_0x9f75b8(0x319)])){if(_0x9f75b8(0x2c2)!==_0x9f75b8(0x204))return!![];else _0x2c42fc[_0x9f75b8(0x2df)]-=_0x3253a0;}else{if(_0x1373b6[_0x9f75b8(0x2c7)](_0x4bddf3['SolidBottom']))return![];}return Game_Map[_0x9f75b8(0x2db)];},Game_Map[_0x52be61(0x1f8)]['getSolidReflectionBlur']=function(){const _0x5ebf66=_0x52be61,_0x6f83db=VisuMZ[_0x5ebf66(0x280)][_0x5ebf66(0x1fc)],_0x1dd77a=$dataMap[_0x5ebf66(0x2fd)]||'';if(_0x1dd77a['match'](_0x6f83db[_0x5ebf66(0x22d)]))return Math['max'](0x0,Number(RegExp['$1'])||0x0);return Game_Map[_0x5ebf66(0x23e)];},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x249)]=function(){const _0x102c20=_0x52be61,_0x1dba04=VisuMZ['VisualParallaxes']['RegExp'],_0x537ba9=$dataMap[_0x102c20(0x2fd)]||'';if(_0x537ba9['match'](_0x1dba04[_0x102c20(0x1c5)])){if('YTlpP'!==_0x102c20(0x1da))return Math[_0x102c20(0x2e4)]((Number(RegExp['$1'])||0x0)*0.01*0xff)['clamp'](0x0,0xff);else _0x7ea0a8[_0x102c20(0x266)]=_0xcd1161[_0x102c20(0x1b6)](_0x4a46c0['getWaterReflectionRegions']());}else{if(_0x537ba9[_0x102c20(0x2c7)](_0x1dba04[_0x102c20(0x1d6)])){if(_0x102c20(0x1c8)!==_0x102c20(0x1c8)){const _0x3fc7ce=_0x33b6c2[_0x102c20(0x206)];_0x27af94['opacity']=(_0x145589[_0x102c20(0x2cd)]*(_0x3fc7ce-0x1)+_0x197cd0[_0x102c20(0x217)])/_0x3fc7ce,_0x794345[_0x102c20(0x206)]--;}else return(Number(RegExp['$1'])||0x0)['clamp'](0x0,0xff);}}return Game_Map['DEFAULT_SOLID_REFLECTION_FILTER_OPACITY'];},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x1c7)]=function(){const _0x87f265=_0x52be61,_0x33f286=this['getWaterReflectionRegions'](),_0x19d04b=this[_0x87f265(0x273)](),_0x10c2a9=this[_0x87f265(0x2f7)](),_0x1a58c1=this['getSolidReflectionTerrainTags'](),_0x45ba9d=this['width'](),_0x1d54be=this[_0x87f265(0x1eb)]();this[_0x87f265(0x276)]=![],this['_hasSolidReflections']=![];for(let _0x1140bd=0x0;_0x1140bd<_0x45ba9d;_0x1140bd++){if('vVSjW'===_0x87f265(0x230))return _0x228e49['_parallaxX']*this[_0x87f265(0x2de)]()/0x2;else for(let _0x47a653=0x0;_0x47a653<_0x45ba9d;_0x47a653++){const _0x1b9975=this[_0x87f265(0x257)](_0x1140bd,_0x47a653);if(_0x33f286[_0x87f265(0x316)](_0x1b9975)){if(_0x87f265(0x29e)!=='rrcbf')return 0x0;else this[_0x87f265(0x276)]=!![];}_0x10c2a9[_0x87f265(0x316)](_0x1b9975)&&(_0x87f265(0x2fe)==='rwRlE'?this[_0x87f265(0x232)]=!![]:(this[_0x87f265(0x26a)]=_0x4f9756[_0x87f265(0x2ae)](),this[_0x87f265(0x1d5)]()));const _0x530642=this[_0x87f265(0x2b9)](_0x1140bd,_0x47a653);_0x19d04b['includes'](_0x530642)&&(this[_0x87f265(0x276)]=!![]);_0x1a58c1[_0x87f265(0x316)](_0x530642)&&(this[_0x87f265(0x232)]=!![]);if(this[_0x87f265(0x276)]&&this['_hasSolidReflections'])break;}}},Game_Map['prototype'][_0x52be61(0x1d8)]=function(){const _0x3bcc86=_0x52be61;if(this[_0x3bcc86(0x276)]===undefined)this[_0x3bcc86(0x1c7)]();return this[_0x3bcc86(0x276)];},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x246)]=function(){const _0x57b91d=_0x52be61;if(this['_hasSolidReflections']===undefined)this[_0x57b91d(0x1c7)]();return this['_hasSolidReflections'];},Game_Map[_0x52be61(0x1f8)]['setupVisualParallaxes']=function(){const _0x564c89=_0x52be61;this[_0x564c89(0x29d)]=[null];if(!$dataMap)return;const _0x4c1b09=VisuMZ[_0x564c89(0x280)]['CreateLayerData']();for(const _0x2126d0 of _0x4c1b09){if(_0x564c89(0x295)!==_0x564c89(0x21d)){if(!_0x2126d0)continue;this[_0x564c89(0x29d)][_0x2126d0['id']]=_0x2126d0;}else this[_0x564c89(0x276)]=!![];}},VisuMZ[_0x52be61(0x280)][_0x52be61(0x2b3)]=function(){const _0x33350d=_0x52be61;if(!$dataMap)return[];const _0x288a33=[],_0x3c3461=VisuMZ[_0x33350d(0x280)][_0x33350d(0x207)]();if(!$dataMap[_0x33350d(0x2fd)])return[];const _0xf9ba70=VisuMZ['VisualParallaxes'][_0x33350d(0x1fc)],_0x25acda=$dataMap['note'][_0x33350d(0x1d7)](/[\r\n]+/);let _0x4798dd=JsonEx[_0x33350d(0x1b6)](_0x3c3461);for(const _0x474388 of _0x25acda){if('tYydP'==='aUSXB')_0x2918c0[_0x33350d(0x30a)]+=_0x5c026a[_0x33350d(0x2bf)]/this[_0x33350d(0x28d)]()/0x2;else{if(_0x474388[_0x33350d(0x2c7)](_0xf9ba70[_0x33350d(0x30b)])){_0x4798dd['id']=Number(RegExp['$1']);if(_0x474388[_0x33350d(0x2c7)](/WATER/i))_0x4798dd[_0x33350d(0x266)]=JsonEx[_0x33350d(0x1b6)]($gameMap['getWaterReflectionRegions']()),_0x4798dd[_0x33350d(0x1f1)]=JsonEx[_0x33350d(0x1b6)]($gameMap[_0x33350d(0x273)]());else _0x474388[_0x33350d(0x2c7)](/SOLID/i)&&(_0x4798dd[_0x33350d(0x266)]=JsonEx[_0x33350d(0x1b6)]($gameMap['getSolidReflectionRegions']()),_0x4798dd['maskTerrainTags']=JsonEx[_0x33350d(0x1b6)]($gameMap[_0x33350d(0x242)]()));}else{if(_0x474388[_0x33350d(0x2c7)](_0xf9ba70[_0x33350d(0x238)])){const _0x47ea98=Number(RegExp['$1']);if(_0x47ea98>0x0&&_0x47ea98===_0x4798dd['id']&&_0x4798dd[_0x33350d(0x286)]!=='')_0x288a33[_0x33350d(0x299)](_0x4798dd);_0x4798dd=JsonEx[_0x33350d(0x1b6)](_0x3c3461);}else{if(_0x4798dd['id']<=0x0){if(_0x33350d(0x1e5)!==_0x33350d(0x1e5))return _0x187716['getVisualParallaxSettings'](this[_0x33350d(0x2b0)]);else continue;}}}if(_0x474388['match'](_0xf9ba70[_0x33350d(0x211)]))_0x4798dd[_0x33350d(0x286)]=String(RegExp['$1'])[_0x33350d(0x27a)](),_0x4798dd['filename'][_0x33350d(0x2f5)](0x0)==='!'&&(_0x4798dd['_parallaxZero']=!![]);else{if(_0x474388[_0x33350d(0x2c7)](_0xf9ba70['HorzLoop']))'NhZKk'===_0x33350d(0x1c4)?(_0x4798dd[_0x33350d(0x2a5)]=!![],_0x4798dd[_0x33350d(0x1d1)]=Number(RegExp['$1'])||0x0):_0x49078e=_0x5b6e08[_0x33350d(0x1f3)](_0x1b0534,_0x4c2797);else{if(_0x474388[_0x33350d(0x2c7)](_0xf9ba70['VertLoop']))_0x4798dd['_parallaxLoopY']=!![],_0x4798dd[_0x33350d(0x2bf)]=Number(RegExp['$1'])||0x0;else{if(_0x474388['match'](_0xf9ba70['ScrollLock']))_0x33350d(0x2b2)===_0x33350d(0x2bb)?_0x569c89[_0x33350d(0x2f8)](_0x27a297,_0x4ad680):_0x4798dd['_parallaxZero']=!![];else{if(_0x474388[_0x33350d(0x2c7)](_0xf9ba70[_0x33350d(0x247)])){const _0x3b32f1=Number(RegExp['$1'])*0.01;_0x4798dd[_0x33350d(0x2cd)]=Math[_0x33350d(0x2e4)](_0x3b32f1*0xff)['clamp'](0x0,0xff);}else{if(_0x474388[_0x33350d(0x2c7)](_0xf9ba70[_0x33350d(0x1c6)])){if(_0x33350d(0x223)!=='jXjFt')return _0x5ed602[_0x33350d(0x1f3)](0x0,_0x58c433(_0x348781['$1'])||0x0);else _0x4798dd[_0x33350d(0x2cd)]=Number(RegExp['$1'])[_0x33350d(0x2fb)](0x0,0xff);}else{if(_0x474388['match'](_0xf9ba70['BlendMode'])){const _0x2f3ffd=String(RegExp['$1'])['toUpperCase']()[_0x33350d(0x27a)](),_0x1df199=[_0x33350d(0x20c),_0x33350d(0x302),_0x33350d(0x1dd),'SCREEN'];_0x4798dd[_0x33350d(0x200)]=_0x1df199[_0x33350d(0x2e3)](_0x2f3ffd)[_0x33350d(0x2fb)](0x0,0x3);}else{if(_0x474388['match'](_0xf9ba70['Hue']))_0x4798dd[_0x33350d(0x1cd)]=Number(RegExp['$1'])[_0x33350d(0x2fb)](0x0,0x168);else{if(_0x474388[_0x33350d(0x2c7)](_0xf9ba70[_0x33350d(0x291)])){if(_0x33350d(0x27c)===_0x33350d(0x27c))_0x4798dd[_0x33350d(0x2ba)]=Number(RegExp['$1'])||0x0;else{const _0x2f7014=_0x2eb337(_0x2b0960['$1'])[_0x33350d(0x1d7)](',')[_0x33350d(0x252)](_0x22fb8f=>_0x1f78e4(_0x22fb8f)||0x0);while(_0x2f7014[_0x33350d(0x1f6)]<0x4)_0x2f7014['push'](0x0);_0x3e43c7['colorTone']=_0x2f7014;}}else{if(_0x474388['match'](_0xf9ba70['Tone'])){const _0x3598c9=String(RegExp['$1'])[_0x33350d(0x1d7)](',')[_0x33350d(0x252)](_0x40d95b=>Number(_0x40d95b)||0x0);while(_0x3598c9[_0x33350d(0x1f6)]<0x4)_0x3598c9['push'](0x0);_0x4798dd[_0x33350d(0x2ef)]=_0x3598c9;}else{if(_0x474388['match'](_0xf9ba70['MaskRegions'])){if(_0x33350d(0x264)!==_0x33350d(0x2cb)){const _0xb88b14=String(RegExp['$1'])[_0x33350d(0x1d7)](',')[_0x33350d(0x252)](_0x4c3cb3=>Number(_0x4c3cb3)||0x1);_0x4798dd[_0x33350d(0x266)]=_0xb88b14;}else{_0xcd3bae['id']=_0x26e7bc(_0x49bbe3['$1']);if(_0x2775f7[_0x33350d(0x2c7)](/WATER/i))_0x336624[_0x33350d(0x266)]=_0x59d14e[_0x33350d(0x1b6)](_0x5c2914[_0x33350d(0x2e8)]()),_0x287905[_0x33350d(0x1f1)]=_0x18c657['makeDeepCopy'](_0x26b44f['getWaterReflectionTerrainTags']());else _0x138653['match'](/SOLID/i)&&(_0x3a27dc[_0x33350d(0x266)]=_0x1dd4f9['makeDeepCopy'](_0x214cbe[_0x33350d(0x2f7)]()),_0x508c4c[_0x33350d(0x1f1)]=_0x59bead['makeDeepCopy'](_0x137ec2[_0x33350d(0x242)]()));}}else{if(_0x474388[_0x33350d(0x2c7)](_0xf9ba70[_0x33350d(0x28a)])){const _0x3e122f=String(RegExp['$1'])[_0x33350d(0x1d7)](',')[_0x33350d(0x252)](_0x2b7a93=>Number(_0x2b7a93)||0x1);_0x4798dd[_0x33350d(0x1f1)]=_0x3e122f;}}}}}}}}}}}}}}return _0x288a33;},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x293)]=function(){const _0x3578bb=_0x52be61;return this[_0x3578bb(0x29d)][_0x3578bb(0x305)](_0x3c4fe7=>!!_0x3c4fe7);},Game_Map['prototype'][_0x52be61(0x2bd)]=function(_0x3b6676){const _0x48d04c=_0x52be61;return this['_visualParallaxSettings']=this['_visualParallaxSettings']||[],this[_0x48d04c(0x29d)][_0x3b6676]||null;},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x29b)]=function(_0x442990){const _0x4b207d=_0x52be61,_0x55ed00=this[_0x4b207d(0x2bd)](_0x442990);if(_0x55ed00[_0x4b207d(0x222)])return Math[_0x4b207d(0x313)](_0x55ed00['_parallaxX']*this[_0x4b207d(0x2de)]());else{if(_0x55ed00['_parallaxLoopX'])return'kTkyf'!==_0x4b207d(0x2ed)?this[_0x4b207d(0x244)]&&this[_0x4b207d(0x244)]['constructor']===_0x2a479f:_0x55ed00[_0x4b207d(0x2df)]*this[_0x4b207d(0x2de)]()/0x2;else{if(_0x4b207d(0x2ab)!=='zEKev')return 0x0;else{if(!this[_0x4b207d(0x282)]())return;this['initVisualParallaxesEffects'](),this['setupVisualParallaxesNotetags'](),this[_0x4b207d(0x1cf)]();}}}},Game_Map['prototype']['getVisualParallaxOy']=function(_0x2a620b){const _0x42d2f3=_0x52be61,_0x2ef533=this[_0x42d2f3(0x2bd)](_0x2a620b);if(_0x2ef533['_parallaxZero'])return Math[_0x42d2f3(0x313)](_0x2ef533['_parallaxY']*this[_0x42d2f3(0x28d)]());else{if(_0x2ef533[_0x42d2f3(0x2a7)]){if('rXYuG'===_0x42d2f3(0x2a3)){const _0x19796a=_0x573c53(_0x4cc5b8['$1'])[_0x42d2f3(0x1d7)](',')[_0x42d2f3(0x252)](_0x154666=>_0xe83877(_0x154666)||0x0);if(_0x19796a[_0x42d2f3(0x1f6)]<=0x1)_0x19796a[0x1]=_0x19796a[0x0];}else return _0x2ef533['_parallaxY']*this[_0x42d2f3(0x28d)]()/0x2;}else return 0x0;}},Game_Map[_0x52be61(0x1f8)]['removeVisualParallax']=function(_0x291279){const _0x53a39b=_0x52be61;this['_visualParallaxSettings']=this[_0x53a39b(0x29d)]||[];if(!this[_0x53a39b(0x29d)][_0x291279])return;this[_0x53a39b(0x29d)][_0x291279]=null;const _0x1a0aa4=SceneManager['_scene'][_0x53a39b(0x2cc)];_0x1a0aa4&&_0x1a0aa4[_0x53a39b(0x24c)](_0x291279);},Game_Map[_0x52be61(0x1f8)][_0x52be61(0x29f)]=function(_0x2f7002){const _0x557e2c=_0x52be61,_0x1a9336=_0x2f7002['id'];let _0x2f0084=![];this[_0x557e2c(0x29d)]=this[_0x557e2c(0x29d)]||[];if(this[_0x557e2c(0x29d)][_0x1a9336]){const _0x371da6=this[_0x557e2c(0x29d)][_0x1a9336];if(!_0x371da6[_0x557e2c(0x266)]['equals'](_0x2f7002[_0x557e2c(0x266)]))_0x2f0084=!![];else!_0x371da6[_0x557e2c(0x1f1)][_0x557e2c(0x275)](_0x2f7002['maskTerrainTags'])&&(_0x2f0084=!![]);}this[_0x557e2c(0x29d)][_0x1a9336]=_0x2f7002;if(!SceneManager[_0x557e2c(0x2ff)]())return;const _0x1bf0e7=SceneManager['_scene'][_0x557e2c(0x2cc)];_0x1bf0e7&&_0x1bf0e7[_0x557e2c(0x2f8)](_0x1a9336,_0x2f0084);},VisuMZ[_0x52be61(0x280)]['Game_Map_setDisplayPos']=Game_Map[_0x52be61(0x1f8)][_0x52be61(0x283)],Game_Map['prototype'][_0x52be61(0x283)]=function(_0x114324,_0x3e4a5f){const _0x4106b9=_0x52be61;VisuMZ[_0x4106b9(0x280)][_0x4106b9(0x2b7)]['call'](this,_0x114324,_0x3e4a5f);for(const _0xcf560f of this[_0x4106b9(0x293)]()){if(_0x4106b9(0x2b5)===_0x4106b9(0x228))_0x261ed3[_0x4106b9(0x280)]['Game_Event_clearPageSettings'][_0x4106b9(0x210)](this),this['initVisualParallaxesEffects']();else{if(!_0xcf560f)continue;this['isLoopHorizontal']()?_0xcf560f[_0x4106b9(0x2df)]=_0x114324:'GCPyl'!=='qxmHK'?_0xcf560f[_0x4106b9(0x2df)]=this['_displayX']:_0x200c19[_0x4106b9(0x30a)]+=this[_0x4106b9(0x205)]-_0x1ddb8a;if(this[_0x4106b9(0x2f1)]()){if(_0x4106b9(0x26b)===_0x4106b9(0x1e1))return![];else _0xcf560f[_0x4106b9(0x30a)]=_0x3e4a5f;}else _0xcf560f[_0x4106b9(0x30a)]=this[_0x4106b9(0x205)];}}},VisuMZ[_0x52be61(0x280)]['Game_Map_scrollLeft']=Game_Map[_0x52be61(0x1f8)]['scrollLeft'],Game_Map[_0x52be61(0x1f8)][_0x52be61(0x2bc)]=function(_0x154c0e){const _0x318014=_0x52be61,_0x391d93=this[_0x318014(0x1df)];VisuMZ[_0x318014(0x280)][_0x318014(0x259)][_0x318014(0x210)](this,_0x154c0e);for(const _0x4da846 of this[_0x318014(0x293)]()){if(_0x318014(0x2aa)!==_0x318014(0x2da)){if(!_0x4da846)continue;if(this['isLoopHorizontal']())_0x4da846[_0x318014(0x2a5)]&&(_0x318014(0x1bd)!=='gLaDY'?_0x4da846[_0x318014(0x2df)]-=_0x154c0e:_0x19d75f['_parallaxLoopX']&&(_0x3a5e2f[_0x318014(0x2df)]-=_0x1e3a35));else{if(this['width']()>=this['screenTileX']()){if(_0x318014(0x2b4)!=='yVXer')return _0x2d0314['round']((_0x3fb6e3(_0x4cc77d['$1'])||0x0)*0.01*0xff)[_0x318014(0x2fb)](0x0,0xff);else _0x4da846['_parallaxX']+=this[_0x318014(0x1df)]-_0x391d93;}}}else(_0x43148a[_0x318014(0x316)](_0x501b77['regionId'](_0x3bb535,_0x5f116c))||_0x983df4['includes'](_0x2fcfe8['terrainTag'](_0x262273,_0x3dd823)))&&_0x33e516[_0x318014(0x28b)][_0x318014(0x30f)](_0x5471b9*_0x510593+_0x27b368,_0x45a900*_0x28da18+_0x4361f0,_0x4ab928-_0x4957bd,_0x590b5e-_0x143b07,_0x318014(0x2e5));}},VisuMZ[_0x52be61(0x280)][_0x52be61(0x2fc)]=Game_Map[_0x52be61(0x1f8)][_0x52be61(0x235)],Game_Map['prototype'][_0x52be61(0x235)]=function(_0x23020f){const _0x521028=_0x52be61,_0x438cf1=this[_0x521028(0x1df)];VisuMZ[_0x521028(0x280)][_0x521028(0x2fc)][_0x521028(0x210)](this,_0x23020f);for(const _0x52d4a5 of this[_0x521028(0x293)]()){if(_0x521028(0x24a)===_0x521028(0x310))this[_0x521028(0x27f)]['x']=_0x4931d0[_0x521028(0x29b)](this['_id']),this[_0x521028(0x27f)]['y']=_0x35ad6b[_0x521028(0x296)](this[_0x521028(0x2b0)]);else{if(!_0x52d4a5)continue;if(this['isLoopHorizontal']())_0x52d4a5[_0x521028(0x2a5)]&&(_0x521028(0x315)===_0x521028(0x315)?_0x52d4a5[_0x521028(0x2df)]+=_0x23020f:this['_hue']!==_0x5818ff(_0x2d6b8b)&&(this[_0x521028(0x25d)]=_0x2765cd(_0x1af4bb),this[_0x521028(0x1d5)]()));else this[_0x521028(0x294)]()>=this[_0x521028(0x2ca)]()&&(_0x52d4a5['_parallaxX']+=this['_displayX']-_0x438cf1);}}},VisuMZ[_0x52be61(0x280)][_0x52be61(0x272)]=Game_Map[_0x52be61(0x1f8)][_0x52be61(0x2ee)],Game_Map[_0x52be61(0x1f8)][_0x52be61(0x2ee)]=function(_0x24c698){const _0xe24b1a=_0x52be61,_0x35357b=this[_0xe24b1a(0x205)];VisuMZ[_0xe24b1a(0x280)][_0xe24b1a(0x272)][_0xe24b1a(0x210)](this,_0x24c698);for(const _0x42cd72 of this[_0xe24b1a(0x293)]()){if(_0xe24b1a(0x1e2)!==_0xe24b1a(0x1e2)){const _0x41ae7e=this[_0xe24b1a(0x29d)][_0x1ed194];if(!_0x41ae7e[_0xe24b1a(0x266)][_0xe24b1a(0x275)](_0x508f12[_0xe24b1a(0x266)]))_0x39eb8a=!![];else!_0x41ae7e[_0xe24b1a(0x1f1)][_0xe24b1a(0x275)](_0x5dfbe5[_0xe24b1a(0x1f1)])&&(_0xf48970=!![]);}else{if(!_0x42cd72)continue;if(this[_0xe24b1a(0x2f1)]())_0x42cd72[_0xe24b1a(0x2a7)]&&(_0x42cd72[_0xe24b1a(0x30a)]+=_0x24c698);else this[_0xe24b1a(0x1eb)]()>=this[_0xe24b1a(0x281)]()&&(_0xe24b1a(0x2c8)==='ELWml'?_0x42cd72[_0xe24b1a(0x30a)]+=this[_0xe24b1a(0x205)]-_0x35357b:(_0x146ca9['x']=_0x1fc9ad[_0xe24b1a(0x313)](-_0x8d1286['displayX']()*_0x456cd8[_0xe24b1a(0x2de)]()),_0x224193['y']=_0x2f667f['floor'](-_0x4dbf02[_0xe24b1a(0x1c3)]()*_0x3b69cf[_0xe24b1a(0x28d)]())));}}},VisuMZ[_0x52be61(0x280)][_0x52be61(0x227)]=Game_Map[_0x52be61(0x1f8)][_0x52be61(0x25c)],Game_Map['prototype'][_0x52be61(0x25c)]=function(_0xf45d56){const _0x1c1b46=_0x52be61,_0x48041d=this[_0x1c1b46(0x205)];VisuMZ[_0x1c1b46(0x280)]['Game_Map_scrollUp'][_0x1c1b46(0x210)](this,_0xf45d56);for(const _0x445bd3 of this['getVisualParallaxes']()){if(!_0x445bd3)continue;if(this[_0x1c1b46(0x2f1)]()){if(_0x445bd3[_0x1c1b46(0x2a7)]){if(_0x1c1b46(0x1c1)!==_0x1c1b46(0x1c1))return _0x4cb6ff[_0x1c1b46(0x313)](_0x250116[_0x1c1b46(0x30a)]*this[_0x1c1b46(0x28d)]());else _0x445bd3[_0x1c1b46(0x30a)]-=_0xf45d56;}}else this['height']()>=this['screenTileY']()&&(_0x445bd3[_0x1c1b46(0x30a)]+=this['_displayY']-_0x48041d);}},VisuMZ['VisualParallaxes'][_0x52be61(0x1e6)]=Game_Map[_0x52be61(0x1f8)][_0x52be61(0x23b)],Game_Map[_0x52be61(0x1f8)]['updateParallax']=function(){const _0x3db9c1=_0x52be61;VisuMZ[_0x3db9c1(0x280)][_0x3db9c1(0x1e6)][_0x3db9c1(0x210)](this);for(const _0x33aa60 of this[_0x3db9c1(0x293)]()){if(!_0x33aa60)continue;this['updateVisualParallaxSettings'](_0x33aa60);}},Game_Map['prototype'][_0x52be61(0x2be)]=function(_0x1ea46a){const _0x5388b6=_0x52be61;_0x1ea46a[_0x5388b6(0x2a5)]&&(_0x1ea46a[_0x5388b6(0x2df)]+=_0x1ea46a[_0x5388b6(0x1d1)]/this[_0x5388b6(0x2de)]()/0x2);_0x1ea46a[_0x5388b6(0x2a7)]&&(_0x5388b6(0x304)!==_0x5388b6(0x304)?_0x3393df[_0x5388b6(0x30a)]+=_0xbca589:_0x1ea46a['_parallaxY']+=_0x1ea46a[_0x5388b6(0x2bf)]/this[_0x5388b6(0x28d)]()/0x2);_0x1ea46a['hue']+=_0x1ea46a[_0x5388b6(0x2ba)];if(_0x1ea46a[_0x5388b6(0x206)]>0x0){if('efUFW'==='efUFW'){const _0x445c96=_0x1ea46a[_0x5388b6(0x206)];_0x1ea46a[_0x5388b6(0x2cd)]=(_0x1ea46a[_0x5388b6(0x2cd)]*(_0x445c96-0x1)+_0x1ea46a[_0x5388b6(0x217)])/_0x445c96,_0x1ea46a[_0x5388b6(0x206)]--;}else{if(this[_0x5388b6(0x276)]===_0x4bcd38)this[_0x5388b6(0x1c7)]();return this[_0x5388b6(0x276)];}}},VisuMZ[_0x52be61(0x280)]['Game_Event_clearPageSettings']=Game_Event[_0x52be61(0x1f8)][_0x52be61(0x1d9)],Game_Event[_0x52be61(0x1f8)][_0x52be61(0x1d9)]=function(){const _0x491682=_0x52be61;VisuMZ['VisualParallaxes']['Game_Event_clearPageSettings'][_0x491682(0x210)](this),this[_0x491682(0x269)]();},VisuMZ['VisualParallaxes'][_0x52be61(0x22e)]=Game_Event[_0x52be61(0x1f8)][_0x52be61(0x2e0)],Game_Event[_0x52be61(0x1f8)][_0x52be61(0x2e0)]=function(){const _0x1f3c4b=_0x52be61;VisuMZ[_0x1f3c4b(0x280)]['Game_Event_setupPageSettings'][_0x1f3c4b(0x210)](this),this[_0x1f3c4b(0x27e)]();},Game_Event['prototype'][_0x52be61(0x27e)]=function(){const _0x4b1b3c=_0x52be61;if(!this[_0x4b1b3c(0x282)]())return;this['initVisualParallaxesEffects'](),this[_0x4b1b3c(0x301)](),this['setupVisualParallaxesCommentTags']();},Game_Event['prototype'][_0x52be61(0x301)]=function(){const _0xc920d6=_0x52be61,_0x172785=this[_0xc920d6(0x282)]()[_0xc920d6(0x2fd)];if(_0x172785==='')return;this[_0xc920d6(0x224)](_0x172785);},Game_Event[_0x52be61(0x1f8)]['setupVisualParallaxesCommentTags']=function(){const _0x2624d7=_0x52be61;if(!this['page']())return;const _0x263de2=this[_0x2624d7(0x209)]();let _0x2098ed='';for(const _0x24e917 of _0x263de2){if([0x6c,0x198][_0x2624d7(0x316)](_0x24e917[_0x2624d7(0x261)])){if(_0x2098ed!=='')_0x2098ed+='\x0a';_0x2098ed+=_0x24e917[_0x2624d7(0x309)][0x0];}}this['checkVisualParallaxesStringTags'](_0x2098ed);},Game_Event[_0x52be61(0x1f8)][_0x52be61(0x269)]=function(){const _0x30a192=_0x52be61;this[_0x30a192(0x1fa)]=![];},Game_Event[_0x52be61(0x1f8)][_0x52be61(0x224)]=function(_0x33ff9d){const _0x558386=_0x52be61,_0x1354ef=VisuMZ[_0x558386(0x280)]['RegExp'];if(_0x33ff9d[_0x558386(0x2c7)](_0x1354ef[_0x558386(0x237)])){if(_0x558386(0x241)===_0x558386(0x241))this['_noReflection']=!![];else return!![];}};function _0x358c(_0x3c3e24,_0x360fec){const _0x148e78=_0x148e();return _0x358c=function(_0x358cde,_0x4e849c){_0x358cde=_0x358cde-0x1b6;let _0x565a7f=_0x148e78[_0x358cde];return _0x565a7f;},_0x358c(_0x3c3e24,_0x360fec);}function Sprite_VisualParallax(){this['initialize'](...arguments);}Sprite_VisualParallax[_0x52be61(0x1f8)]=Object['create'](TilingSprite[_0x52be61(0x1f8)]),Sprite_VisualParallax['prototype'][_0x52be61(0x2cf)]=Sprite_VisualParallax,Sprite_VisualParallax[_0x52be61(0x1f8)][_0x52be61(0x2c0)]=function(_0x1dd7b6){const _0x2c61c9=_0x52be61;this[_0x2c61c9(0x2b0)]=_0x1dd7b6,TilingSprite[_0x2c61c9(0x1f8)][_0x2c61c9(0x2c0)][_0x2c61c9(0x210)](this),this[_0x2c61c9(0x1f7)](),this[_0x2c61c9(0x1ee)](),this[_0x2c61c9(0x28b)][_0x2c61c9(0x317)](this['createMaskSprite'][_0x2c61c9(0x267)](this));},Sprite_VisualParallax['prototype'][_0x52be61(0x27d)]=function(){const _0x258b99=_0x52be61;return $gameMap[_0x258b99(0x2bd)](this['_id']);},Sprite_VisualParallax['prototype']['_createColorFilter']=function(){const _0x4a915c=_0x52be61;this[_0x4a915c(0x25d)]=0x0,this[_0x4a915c(0x26a)]=[0x0,0x0,0x0,0x0],this[_0x4a915c(0x2b1)]=new ColorFilter(),!this[_0x4a915c(0x314)]&&(this[_0x4a915c(0x314)]=[]),this['filters']['push'](this['_colorFilter']);},Sprite_VisualParallax[_0x52be61(0x1f8)][_0x52be61(0x1d5)]=function(){const _0x5346f9=_0x52be61;if(!this[_0x5346f9(0x2b1)]){if('hovKw'===_0x5346f9(0x258))return _0x2be42a(_0x4cae07['$1'])[_0x5346f9(0x1d7)](',')[_0x5346f9(0x252)](_0x124f25=>_0x362e38(_0x124f25)||0x1)['remove'](0x0);else this[_0x5346f9(0x1f7)]();}this[_0x5346f9(0x2b1)]['setHue'](this[_0x5346f9(0x25d)]),this[_0x5346f9(0x2b1)][_0x5346f9(0x1e0)](this['_colorTone']);},Sprite_VisualParallax[_0x52be61(0x1f8)][_0x52be61(0x1ee)]=function(){const _0x1cb279=_0x52be61;this[_0x1cb279(0x2e7)]=this[_0x1cb279(0x27d)]()[_0x1cb279(0x286)],this[_0x1cb279(0x28b)]=ImageManager['loadParallax'](this['_parallaxName']);},Sprite_VisualParallax['prototype'][_0x52be61(0x2eb)]=function(){const _0x4e8092=_0x52be61;this[_0x4e8092(0x1ce)]=new Sprite(),this[_0x4e8092(0x251)]();},Sprite_VisualParallax[_0x52be61(0x1f8)][_0x52be61(0x251)]=function(){const _0x590242=_0x52be61;if(this[_0x590242(0x1ce)]['bitmap']){if(_0x590242(0x256)==='oapKG')this['_maskSprite'][_0x590242(0x28b)][_0x590242(0x2ad)](),this[_0x590242(0x1f2)](this[_0x590242(0x1ce)]);else{_0x2311ba[_0x590242(0x1f8)][_0x590242(0x288)][_0x590242(0x210)](this);if(!this['bitmap'])return;if(!this[_0x590242(0x27d)]())return;this[_0x590242(0x270)](),this['updateOrigin'](),this[_0x590242(0x220)](),this['updateHue'](),this['updateTone'](),this[_0x590242(0x1ba)]();}}const _0xedd9de=new Bitmap(Graphics[_0x590242(0x294)],Graphics[_0x590242(0x1eb)]);_0xedd9de[_0x590242(0x30f)](0x0,0x0,_0xedd9de[_0x590242(0x294)],_0xedd9de['height'],'#ffffff'),this[_0x590242(0x1ce)]['bitmap']=_0xedd9de,this['addChild'](this[_0x590242(0x1ce)]),this[_0x590242(0x225)]=new PIXI['SpriteMaskFilter'](this[_0x590242(0x1ce)]),this[_0x590242(0x314)][_0x590242(0x299)](this[_0x590242(0x225)]);const _0x573c2e=this['settings']()[_0x590242(0x266)],_0x53393c=this[_0x590242(0x27d)]()[_0x590242(0x1f1)];if(_0x573c2e[_0x590242(0x1f6)]<=0x0&&_0x53393c['length']<=0x0)return;if($gameMap['isLoopHorizontal']()||$gameMap[_0x590242(0x2f1)]())return;const _0x53f43c=$gameMap['width'](),_0x168ece=$gameMap[_0x590242(0x1eb)](),_0x14a073=$gameMap[_0x590242(0x2de)](),_0x5abf33=$gameMap[_0x590242(0x28d)]();this[_0x590242(0x1ce)][_0x590242(0x28b)]=new Bitmap(_0x53f43c*_0x14a073,_0x168ece*_0x5abf33);for(let _0x3507ca=0x0;_0x3507ca<_0x53f43c;_0x3507ca++){if(_0x590242(0x2d5)==='XPTWV')for(let _0x2f8f89=0x0;_0x2f8f89<_0x168ece;_0x2f8f89++){_0x590242(0x2b8)===_0x590242(0x21b)?_0x35701c[_0x590242(0x2a7)]&&(_0x15b378['_parallaxY']-=_0x5d3959):(_0x573c2e[_0x590242(0x316)]($gameMap['regionId'](_0x3507ca,_0x2f8f89))||_0x53393c['includes']($gameMap[_0x590242(0x2b9)](_0x3507ca,_0x2f8f89)))&&this[_0x590242(0x1ce)]['bitmap'][_0x590242(0x30f)](_0x3507ca*_0x14a073,_0x2f8f89*_0x5abf33,_0x14a073,_0x5abf33,_0x590242(0x2e5));}else _0x232e34[_0x590242(0x1f1)]=_0xfc3f63[_0x590242(0x1b6)](_0x1b424c['getSolidReflectionTerrainTags']());}},Sprite_VisualParallax[_0x52be61(0x1f8)]['update']=function(){const _0x3f988c=_0x52be61;TilingSprite[_0x3f988c(0x1f8)][_0x3f988c(0x288)][_0x3f988c(0x210)](this);if(!this[_0x3f988c(0x28b)])return;if(!this['settings']())return;this[_0x3f988c(0x270)](),this[_0x3f988c(0x20a)](),this[_0x3f988c(0x220)](),this['updateHue'](),this[_0x3f988c(0x2af)](),this[_0x3f988c(0x1ba)]();},Sprite_VisualParallax['prototype'][_0x52be61(0x270)]=function(){const _0x155bf9=_0x52be61;this['opacity']=this[_0x155bf9(0x27d)]()[_0x155bf9(0x2cd)];},Sprite_VisualParallax['prototype'][_0x52be61(0x20a)]=function(){const _0x3ac75c=_0x52be61;this[_0x3ac75c(0x27f)]['x']=$gameMap[_0x3ac75c(0x29b)](this[_0x3ac75c(0x2b0)]),this['origin']['y']=$gameMap[_0x3ac75c(0x296)](this['_id']);},Sprite_VisualParallax['prototype'][_0x52be61(0x220)]=function(){const _0x3440b8=_0x52be61;this[_0x3440b8(0x225)]&&(this[_0x3440b8(0x225)][_0x3440b8(0x200)]=this[_0x3440b8(0x27d)]()['blendMode']);},Sprite_VisualParallax['prototype'][_0x52be61(0x2a9)]=function(){const _0x35532f=_0x52be61;this[_0x35532f(0x1c2)](this[_0x35532f(0x27d)]()[_0x35532f(0x1cd)]);},Sprite_VisualParallax[_0x52be61(0x1f8)][_0x52be61(0x1c2)]=function(_0x28d55d){const _0x40babd=_0x52be61;this[_0x40babd(0x25d)]!==Number(_0x28d55d)&&(_0x40babd(0x2ac)===_0x40babd(0x1dc)?(this[_0x40babd(0x226)](_0x222482['getVisualParallaxSettings'](_0x13ed47)),this['sortVisualParallaxes']()):(this[_0x40babd(0x25d)]=Number(_0x28d55d),this[_0x40babd(0x1d5)]()));},Sprite_VisualParallax[_0x52be61(0x1f8)][_0x52be61(0x2af)]=function(){const _0x492c0e=_0x52be61;this['setColorTone'](this[_0x492c0e(0x27d)]()['colorTone']);},Sprite_VisualParallax['prototype'][_0x52be61(0x1e0)]=function(_0x171437){const _0x80f05f=_0x52be61;if(!(_0x171437 instanceof Array))throw new Error(_0x80f05f(0x278));!this[_0x80f05f(0x26a)]['equals'](_0x171437)&&(this['_colorTone']=_0x171437[_0x80f05f(0x2ae)](),this[_0x80f05f(0x1d5)]());},Sprite_VisualParallax['prototype']['updateMask']=function(){const _0x19784e=_0x52be61;if(!this['_maskSprite'])return;const _0x30b235=this['settings']()['maskRegions'],_0x3e4e63=this[_0x19784e(0x27d)]()['maskTerrainTags'];if(_0x30b235[_0x19784e(0x1f6)]<=0x0&&_0x3e4e63[_0x19784e(0x1f6)]<=0x0)return;if($gameMap['isLoopHorizontal']()||$gameMap[_0x19784e(0x2f1)]())return;this[_0x19784e(0x1ce)]['x']=Math[_0x19784e(0x313)](-$gameMap[_0x19784e(0x1d2)]()*$gameMap[_0x19784e(0x2de)]()),this[_0x19784e(0x1ce)]['y']=Math[_0x19784e(0x313)](-$gameMap[_0x19784e(0x1c3)]()*$gameMap[_0x19784e(0x28d)]());};function Sprite_ReflectionCharacter(){const _0x482e8b=_0x52be61;this[_0x482e8b(0x2c0)](...arguments);}Sprite_ReflectionCharacter[_0x52be61(0x1f8)]=Object[_0x52be61(0x1db)](Sprite_Character[_0x52be61(0x1f8)]),Sprite_ReflectionCharacter['prototype'][_0x52be61(0x2cf)]=Sprite_ReflectionCharacter,Sprite_ReflectionCharacter[_0x52be61(0x1f8)]['setupRadialLight']=function(_0x279144){},Sprite_ReflectionCharacter[_0x52be61(0x1f8)][_0x52be61(0x288)]=function(){const _0x37459f=_0x52be61;Sprite_Character[_0x37459f(0x1f8)]['update'][_0x37459f(0x210)](this);},Sprite_ReflectionCharacter[_0x52be61(0x1f8)]['updateScaleBase']=function(){const _0x290f7b=_0x52be61;this['scale']['x']=this[_0x290f7b(0x1fb)]['_scaleX'],this[_0x290f7b(0x1e8)]['y']=-this[_0x290f7b(0x1fb)][_0x290f7b(0x254)];},VisuMZ['VisualParallaxes']['Spriteset_Map_createParallax']=Spriteset_Map['prototype'][_0x52be61(0x213)],Spriteset_Map[_0x52be61(0x1f8)]['createParallax']=function(){const _0x1958cc=_0x52be61;VisuMZ[_0x1958cc(0x280)][_0x1958cc(0x2f0)][_0x1958cc(0x210)](this);if(!$gameMap['getWaterReflectionTop']())this[_0x1958cc(0x22a)]();if(!$gameMap['getSolidReflectionRegions']())this[_0x1958cc(0x1c9)]();this['createParallaxContainer'](),this[_0x1958cc(0x307)](),this['sortVisualParallaxes']();if($gameMap[_0x1958cc(0x1ec)]())this[_0x1958cc(0x22a)]();if($gameMap[_0x1958cc(0x2f7)]())this[_0x1958cc(0x1c9)]();},Spriteset_Map[_0x52be61(0x1f8)][_0x52be61(0x22a)]=function(){const _0x4a824a=_0x52be61;if(!PIXI['filters'])return;if($gameMap['isLoopHorizontal']()||$gameMap[_0x4a824a(0x2f1)]())return;if($gameMap[_0x4a824a(0x215)]())return;this[_0x4a824a(0x2a2)]=new Sprite(),this['_waterReflectContainer']=new Sprite(),this[_0x4a824a(0x25f)]=![],this['_baseSprite'][_0x4a824a(0x21e)](this[_0x4a824a(0x2a2)]),this['_waterReflectLayer'][_0x4a824a(0x314)]=[],this['_waterReflectLayer'][_0x4a824a(0x2cd)]=$gameMap[_0x4a824a(0x28f)]();if(!!PIXI[_0x4a824a(0x314)][_0x4a824a(0x2e2)]){if('euHEs'===_0x4a824a(0x240))this[_0x4a824a(0x2a2)][_0x4a824a(0x234)]=new PIXI[(_0x4a824a(0x314))][(_0x4a824a(0x2e2))]({'boundary':$gameMap[_0x4a824a(0x1b8)](),'amplitude':$gameMap['getWaterReflectionAmplitude'](),'waveLength':$gameMap[_0x4a824a(0x29a)](),'mirror':![]});else return _0x288b8d(_0x3303ca['$1'])[_0x4a824a(0x1d7)](',')[_0x4a824a(0x252)](_0x4e064c=>_0x2fd909(_0x4e064c)||0x1)[_0x4a824a(0x1ff)](0x0);}!!PIXI[_0x4a824a(0x314)][_0x4a824a(0x1b7)]&&(this['_waterReflectLayer'][_0x4a824a(0x2d0)]=new PIXI[(_0x4a824a(0x314))][(_0x4a824a(0x1b7))]($gameMap['getWaterReflectionBlur']()),this[_0x4a824a(0x2a2)][_0x4a824a(0x314)][_0x4a824a(0x299)](this[_0x4a824a(0x2a2)][_0x4a824a(0x2d0)])),this['createWaterReflectionMask']();},Spriteset_Map['prototype'][_0x52be61(0x2f2)]=function(){const _0x410693=_0x52be61,_0x3ae2f8=$gameMap[_0x410693(0x2e8)](),_0x5d2eb9=$gameMap[_0x410693(0x273)](),_0x5a1d15=this['createReflectionMask'](_0x3ae2f8,_0x5d2eb9);if(_0x5a1d15){if(_0x410693(0x23d)!==_0x410693(0x2c1))this[_0x410693(0x21e)](_0x5a1d15),this[_0x410693(0x2a2)][_0x410693(0x2e1)]=_0x5a1d15;else{if(_0x5b66ff!=='')_0x15026e+='\x0a';_0x1b1fa5+=_0x4e4dfd['parameters'][0x0];}}},Spriteset_Map['prototype'][_0x52be61(0x1c9)]=function(){const _0x43fb6f=_0x52be61;if(!PIXI['filters'])return;if($gameMap['isLoopHorizontal']()||$gameMap[_0x43fb6f(0x2f1)]())return;if($gameMap[_0x43fb6f(0x215)]())return;this[_0x43fb6f(0x245)]=new Sprite(),this[_0x43fb6f(0x229)]=new Sprite(),this['_solidReflectAdded']=![],this[_0x43fb6f(0x1e9)][_0x43fb6f(0x21e)](this[_0x43fb6f(0x245)]),this['_solidReflectLayer'][_0x43fb6f(0x314)]=[],this[_0x43fb6f(0x245)][_0x43fb6f(0x2cd)]=$gameMap[_0x43fb6f(0x249)](),!!PIXI[_0x43fb6f(0x314)][_0x43fb6f(0x1b7)]&&(this[_0x43fb6f(0x245)][_0x43fb6f(0x2d0)]=new PIXI[(_0x43fb6f(0x314))][(_0x43fb6f(0x1b7))]($gameMap[_0x43fb6f(0x1fd)]()),this[_0x43fb6f(0x245)][_0x43fb6f(0x314)]['push'](this['_solidReflectLayer'][_0x43fb6f(0x2d0)])),this[_0x43fb6f(0x1bc)]();},Spriteset_Map[_0x52be61(0x1f8)][_0x52be61(0x1bc)]=function(){const _0x18f748=_0x52be61,_0xc2e801=$gameMap['getSolidReflectionRegions'](),_0x2c45e4=$gameMap[_0x18f748(0x242)](),_0x3bb2a1=this[_0x18f748(0x1ea)](_0xc2e801,_0x2c45e4);_0x3bb2a1&&(this[_0x18f748(0x21e)](_0x3bb2a1),this['_solidReflectLayer'][_0x18f748(0x2e1)]=_0x3bb2a1);},Spriteset_Map[_0x52be61(0x1f8)][_0x52be61(0x1ea)]=function(_0x4a02dd,_0x110807){const _0x3f7726=_0x52be61;if(_0x4a02dd[_0x3f7726(0x1f6)]<=0x0&&_0x110807[_0x3f7726(0x1f6)]<=0x0)return null;const _0x34d5e2=$gameMap['width'](),_0x4b62f9=$gameMap[_0x3f7726(0x1eb)](),_0x22cc73=$gameMap['tileWidth'](),_0x636163=$gameMap[_0x3f7726(0x28d)](),_0x9bf28d=0x0,_0x4faa43=_0x9bf28d*0x2,_0xc2926d=new Sprite();_0xc2926d['bitmap']=new Bitmap(_0x34d5e2*_0x22cc73,_0x4b62f9*_0x636163);for(let _0x1df88c=0x0;_0x1df88c<_0x34d5e2;_0x1df88c++){if(_0x3f7726(0x24e)===_0x3f7726(0x24e))for(let _0x3f1334=0x0;_0x3f1334<_0x4b62f9;_0x3f1334++){if(_0x4a02dd[_0x3f7726(0x316)]($gameMap[_0x3f7726(0x257)](_0x1df88c,_0x3f1334))||_0x110807[_0x3f7726(0x316)]($gameMap[_0x3f7726(0x2b9)](_0x1df88c,_0x3f1334))){if(_0x3f7726(0x248)==='fOeXx'){const _0x18879e=_0x1b7903(_0x45ead3['$1'])[_0x3f7726(0x1d7)](',')[_0x3f7726(0x252)](_0x463526=>_0x48dfe6(_0x463526)||0x0);if(_0x18879e['length']<=0x1)_0x18879e[0x1]=_0x18879e[0x0];}else _0xc2926d['bitmap']['fillRect'](_0x1df88c*_0x22cc73+_0x9bf28d,_0x3f1334*_0x636163+_0x9bf28d,_0x22cc73-_0x4faa43,_0x636163-_0x4faa43,_0x3f7726(0x2e5));}}else _0x194ca1['_parallaxY']+=this[_0x3f7726(0x205)]-_0x546059;}return _0xc2926d;},VisuMZ[_0x52be61(0x280)]['Spriteset_Map_createCharacters']=Spriteset_Map[_0x52be61(0x1f8)][_0x52be61(0x284)],Spriteset_Map[_0x52be61(0x1f8)][_0x52be61(0x284)]=function(){const _0x4a710e=_0x52be61;VisuMZ['VisualParallaxes']['Spriteset_Map_createCharacters'][_0x4a710e(0x210)](this),this[_0x4a710e(0x236)]();},Spriteset_Map['prototype'][_0x52be61(0x236)]=function(){const _0x3e6b3f=_0x52be61;if($gameMap[_0x3e6b3f(0x215)]())return;const _0x5a119d=[],_0x3fb3e0=[];for(const _0x37d1b1 of $gameMap[_0x3e6b3f(0x20d)]()){if(_0x37d1b1[_0x3e6b3f(0x1fa)])continue;_0x5a119d[_0x3e6b3f(0x299)](new Sprite_ReflectionCharacter(_0x37d1b1)),_0x3fb3e0[_0x3e6b3f(0x299)](new Sprite_ReflectionCharacter(_0x37d1b1));}for(const _0x4720bc of $gameMap[_0x3e6b3f(0x31a)]()){_0x5a119d[_0x3e6b3f(0x299)](new Sprite_ReflectionCharacter(_0x4720bc)),_0x3fb3e0[_0x3e6b3f(0x299)](new Sprite_ReflectionCharacter(_0x4720bc));}for(const _0x51dece of $gamePlayer['followers']()[_0x3e6b3f(0x21a)]()){if(_0x3e6b3f(0x2f9)==='FWSZx')_0x5a119d[_0x3e6b3f(0x299)](new Sprite_ReflectionCharacter(_0x51dece)),_0x3fb3e0[_0x3e6b3f(0x299)](new Sprite_ReflectionCharacter(_0x51dece));else{const _0x118308=this[_0x3e6b3f(0x2bd)](_0x4cea5b);if(_0x118308[_0x3e6b3f(0x222)])return _0x563732[_0x3e6b3f(0x313)](_0x118308[_0x3e6b3f(0x2df)]*this[_0x3e6b3f(0x2de)]());else return _0x118308[_0x3e6b3f(0x2a5)]?_0x118308[_0x3e6b3f(0x2df)]*this[_0x3e6b3f(0x2de)]()/0x2:0x0;}}_0x5a119d[_0x3e6b3f(0x299)](new Sprite_ReflectionCharacter($gamePlayer)),_0x3fb3e0[_0x3e6b3f(0x299)](new Sprite_ReflectionCharacter($gamePlayer));if(this['_waterReflectLayer']){if(_0x3e6b3f(0x274)===_0x3e6b3f(0x274))for(const _0x380aeb of _0x5a119d){_0x380aeb[_0x3e6b3f(0x2d9)]=!![],this['_waterReflectContainer'][_0x3e6b3f(0x21e)](_0x380aeb),_0x380aeb['scale']['y']=-0.85,_0x380aeb['filters']=_0x380aeb[_0x3e6b3f(0x314)]||[],this[_0x3e6b3f(0x2a2)][_0x3e6b3f(0x234)]&&_0x380aeb[_0x3e6b3f(0x314)][_0x3e6b3f(0x299)](this[_0x3e6b3f(0x2a2)][_0x3e6b3f(0x234)]);}else _0x31500d['_parallaxY']=this['_displayY'];}if(this[_0x3e6b3f(0x245)])for(const _0x8a7d20 of _0x3fb3e0){_0x8a7d20[_0x3e6b3f(0x2d9)]=!![],this[_0x3e6b3f(0x229)][_0x3e6b3f(0x21e)](_0x8a7d20),_0x8a7d20[_0x3e6b3f(0x1e8)]['y']=-0.85;}},VisuMZ[_0x52be61(0x280)][_0x52be61(0x262)]=Spriteset_Map[_0x52be61(0x1f8)][_0x52be61(0x288)],Spriteset_Map[_0x52be61(0x1f8)][_0x52be61(0x288)]=function(){const _0x31ccc2=_0x52be61;VisuMZ[_0x31ccc2(0x280)][_0x31ccc2(0x262)]['call'](this),this['updateWaterReflections'](),this[_0x31ccc2(0x268)]();},Spriteset_Map[_0x52be61(0x1f8)][_0x52be61(0x2ce)]=function(){const _0x205baf=_0x52be61;if(!this[_0x205baf(0x2a2)])return;if($gameMap){if(_0x205baf(0x1ef)===_0x205baf(0x20e))return(_0x1cfe84(_0x290c84['$1'])||0x0)['clamp'](0x0,0x1);else{if(!this[_0x205baf(0x25f)]&&$gameMap[_0x205baf(0x1d8)]())this[_0x205baf(0x2a2)][_0x205baf(0x21e)](this[_0x205baf(0x1bb)]),this[_0x205baf(0x25f)]=!![];else this[_0x205baf(0x25f)]&&!$gameMap[_0x205baf(0x1d8)]()&&(this[_0x205baf(0x2a2)][_0x205baf(0x1f2)](this[_0x205baf(0x1bb)]),this[_0x205baf(0x25f)]=![]);}}this['_waterReflectLayer'][_0x205baf(0x234)]&&(this['_waterReflectLayer'][_0x205baf(0x234)]['time']+=0.05);const _0x58b6e2=this[_0x205baf(0x2a2)]['_mask'];_0x58b6e2&&(_0x58b6e2['x']=Math[_0x205baf(0x313)](-$gameMap[_0x205baf(0x1d2)]()*$gameMap[_0x205baf(0x2de)]()),_0x58b6e2['y']=Math['floor'](-$gameMap[_0x205baf(0x1c3)]()*$gameMap[_0x205baf(0x28d)]()));},Spriteset_Map['prototype']['updateSolidReflections']=function(){const _0x3d1353=_0x52be61;if(!this['_solidReflectLayer'])return;if($gameMap){if(!this[_0x3d1353(0x202)]&&$gameMap[_0x3d1353(0x246)]())this[_0x3d1353(0x245)]['addChild'](this['_solidReflectContainer']),this[_0x3d1353(0x202)]=!![];else this['_solidReflectAdded']&&!$gameMap['hasSolidReflections']()&&(this[_0x3d1353(0x245)][_0x3d1353(0x1f2)](this['_solidReflectContainer']),this[_0x3d1353(0x202)]=![]);}const _0x54a037=this[_0x3d1353(0x245)][_0x3d1353(0x255)];_0x54a037&&(_0x54a037['x']=Math[_0x3d1353(0x313)](-$gameMap[_0x3d1353(0x1d2)]()*$gameMap[_0x3d1353(0x2de)]()),_0x54a037['y']=Math[_0x3d1353(0x313)](-$gameMap[_0x3d1353(0x1c3)]()*$gameMap[_0x3d1353(0x28d)]()));},Spriteset_Map[_0x52be61(0x1f8)]['createParallaxContainer']=function(){const _0xc8e734=_0x52be61;this[_0xc8e734(0x1c0)]=new Sprite(),this['_baseSprite'][_0xc8e734(0x21e)](this[_0xc8e734(0x1c0)]),this[_0xc8e734(0x2c6)]=[null];},Spriteset_Map[_0x52be61(0x1f8)]['createParallaxLayers']=function(){const _0x5695d0=_0x52be61,_0x793194=$gameMap['getVisualParallaxes']();for(const _0x4cc817 of _0x793194){if(!_0x4cc817)continue;this[_0x5695d0(0x226)](_0x4cc817);}},Spriteset_Map[_0x52be61(0x1f8)]['createNewParallaxLayer']=function(_0x1455d4){const _0x474ae4=_0x52be61;if(!_0x1455d4)return;const _0x4c5e92=new Sprite_VisualParallax(_0x1455d4['id']);_0x4c5e92['move'](0x0,0x0,Graphics[_0x474ae4(0x294)],Graphics['height']),this[_0x474ae4(0x1c0)][_0x474ae4(0x21e)](_0x4c5e92);},Spriteset_Map[_0x52be61(0x1f8)][_0x52be61(0x2ec)]=function(){const _0x59761e=_0x52be61;this[_0x59761e(0x1c0)][_0x59761e(0x30c)][_0x59761e(0x1de)]((_0x92ef33,_0x30e4d5)=>_0x92ef33[_0x59761e(0x2b0)]-_0x30e4d5['_id']);},Spriteset_Map['prototype']['findTargetVisualParallax']=function(_0x47e7fd){const _0x145962=_0x52be61;return this['_parallaxContainer'][_0x145962(0x30c)][_0x145962(0x311)](_0x177c3f=>_0x177c3f[_0x145962(0x2b0)]===_0x47e7fd);},Spriteset_Map['prototype'][_0x52be61(0x24c)]=function(_0x3cff0c){const _0x161ae4=_0x52be61,_0x197c87=this[_0x161ae4(0x1e3)](_0x3cff0c);_0x197c87&&this[_0x161ae4(0x1c0)][_0x161ae4(0x1f2)](_0x197c87);},Spriteset_Map[_0x52be61(0x1f8)][_0x52be61(0x2f8)]=function(_0x4cb2c3,_0x385a68){const _0x2881d3=_0x52be61,_0x114965=this[_0x2881d3(0x1e3)](_0x4cb2c3);if(!_0x114965){if('acyse'===_0x2881d3(0x1f5)){const _0x2c7338=_0x1a3b26['VisualParallaxes']['RegExp'],_0x4d06e4=_0xf26549[_0x2881d3(0x2fd)]||'';if(_0x4d06e4[_0x2881d3(0x2c7)](_0x2c7338[_0x2881d3(0x2d8)]))return _0x241d96[_0x2881d3(0x1f3)](0x0,_0x42811b(_0x302b75['$1'])||0x0);return _0x4648c6[_0x2881d3(0x318)];}else this[_0x2881d3(0x226)]($gameMap[_0x2881d3(0x2bd)](_0x4cb2c3)),this[_0x2881d3(0x2ec)]();}else{if(_0x2881d3(0x239)!==_0x2881d3(0x239)){const _0x2aea80=_0x478d20(_0x39bcd8['$1']);if(_0x2aea80>0x0&&_0x2aea80===_0x3026fb['id']&&_0x576beb[_0x2881d3(0x286)]!=='')_0x28816e[_0x2881d3(0x299)](_0x186134);_0x4cf417=_0x2f4f13['makeDeepCopy'](_0x382109);}else{_0x114965[_0x2881d3(0x1ee)]();if(_0x385a68){if(_0x2881d3(0x26f)!==_0x2881d3(0x263))_0x114965[_0x2881d3(0x28b)][_0x2881d3(0x317)](_0x114965['createMaskBitmap'][_0x2881d3(0x267)](_0x114965));else{this[_0x2881d3(0x29d)]=this[_0x2881d3(0x29d)]||[];if(!this[_0x2881d3(0x29d)][_0x514410])return;this[_0x2881d3(0x29d)][_0x597b59]=null;const _0xe780ec=_0x30290c[_0x2881d3(0x244)][_0x2881d3(0x2cc)];_0xe780ec&&_0xe780ec[_0x2881d3(0x24c)](_0x41494b);}}}}};