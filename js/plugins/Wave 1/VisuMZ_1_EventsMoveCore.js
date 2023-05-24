//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.50;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.50] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * <Hide Player>
 * <Show Player>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player sprite. This is so you don't need to
 *   manually turn the setting on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - If the player sprite is hidden, so are the player's followers.
 * - If the player sprite is visible, the player's followers will still depend
 *   on their settings.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * <Hide Followers>
 * <Show Followers>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player's followers. This is so you don't
 *   need to manually turn them on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Radius: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Radius: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 *   - If '0' is used for the Map ID, reference the current map.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Custom Z: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number value to determine the event sprite's Z value
 *   relative to the tilemap.
 * - For reference from rmmz_core.js:
 *   - 0 : Lower tiles
 *   - 1 : Lower characters
 *   - 3 : Normal characters
 *   - 4 : Upper tiles
 *   - 5 : Upper characters
 *   - 6 : Airship shadow
 *   - 7 : Balloon
 *   - 8 : Animation
 *   - 9 : Destination
 * - You can use numbers below 0 and above 9.
 *   - Values under 0 go below the tilemap.
 *   - Values above 9 go above everything else on the tilemap.
 *   - These values do NOT go below or above other screen objects that are
 *     NOT attached to the tilemap layer such as parallaxes or weather or
 *     windows because that's simply not how z-axis work with sprite layers.
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * 
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Mirror Sprite>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event sprite's visual appearance is mirrored.
 * 
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Synch Distance Opacity: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity of the event based on the distance between it and its
 *   move synched target. Closer means more opaque. Further away means more
 *   transparent.
 * - Replace 'x' with a number representing the opacity change per pixel
 *   distance away. 'x' can use decimal values like 1.05 and 1.5.
 * 
 * ---
 * 
 * <Picture Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Applies a picture graphic from the /img/pictures/ folder of your project.
 * - This graphic will be on top of the character sprite but below the event
 *   icon sprite.
 *   - The picture priority will be the same as the event's priority.
 *   - If it is "below characters", the player can walk on top of it.
 *   - If it is "above characters", the player will behind it.
 *   - If it is "same as characters", the priority will be based on the
 *     current relative Y position. This also means, if the picture is big
 *     enough, it can clip into the top of tree tiles and such.
 * - Replace 'filename' with a filename from the game project's /img/pictures/
 *   folder. This is case sensitive. Do NOT include the file extension.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Max Size: x>
 * <Picture Scale: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - If the "Max Size" or "Scale" supplementary notetags are used, the picture
 *   graphic will be scaled proportionally to fit either the exact pixel size
 *   for "Max Size" or the "Scale" ratio.
 *   - Both the "Max Size" and "Scale" notetags require the "Filename" notetag.
 * - Replace 'x' with a number value representing the exact pixel size for the
 *   "Max Size" notetag.
 * - Replace 'y' with a number value representing the scale on which to shrink
 *   or enlarge the picture. 100% is normal size. 50% is half size. 200% is
 *   double size.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Picture Offset X: +x>
 * <Picture Offset X: -x>
 *
 * <Picture Offset Y: +x>
 * <Picture Offset Y: -x>
 *
 * <Picture Offset: +x, +y>
 * <Picture Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Offsets the X and Y position of the event picture relative to the event
 *   sprite's own position.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Wait Frames: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Requires VisuMZ_4_AnimatedPictures!
 * - "Wait Frames" is used with VisuMZ's Animated Pictures plugin. This
 *   determines the delay inbetween frame changes.
 * - Replace 'x' with a number representing the amount of frames to wait
 *   inbetween frame changes.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Playtest>
 * 
 * - Used for: Event Notetags.
 * - This does NOT work when it's in the Event Page Comment Tags.
 * - If this notetag is found in the event's notebox (NOT comments), then the
 *   event will only appear during a playtest session. It will not appear in a
 *   deployed game where the playtest flag is not on.
 * 
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Scale: x%>
 * 
 * <Scale X: x%>
 * <Scale Y: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the scale of the sprite to the designated size.
 * - For <Scale: x%> variant: replace 'x' with a number representing the
 *   scaling overall percentage to be used.
 * - For <Scale X: x%> variant, replace 'x' with a number representing the x
 *   factor for the horizontal scaling percentage to be used.
 * - For <Scale Y: y%> variant, replace 'y' with a number representing the y
 *   factor for the vertical scaling percentage to be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
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
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Activation
 * - Runs the page of a different event remotely.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change
 * - Change the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Data Plugin Commands ===
 * 
 * ---
 * 
 * Self Data: Reset All
 * - Reset the Self Switch and Self Variable data of all events within the
 *   specified map.
 * 
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This refers to the original position's X/Y on the map.
 * - The event will turn and face the tile that is its original X/Y location.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Sprite Based?:
 *   - Use sprite-based labels instead of legacy-window version.
 *   - Legacy-window version will not be supported in future.
 *   - Sprite-based labels are more memory efficient and work better
 *     compatibility-wise.
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Dash on Ladder?
 *   - Allow dashing while on a ladder or rope?
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 *   Shift Y:
 *   - How many pixels should non-tile characters be shifted by?
 *   - Negative: up. Positive: down.
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 * 
 * Wall Bump
 * 
 *   Enable?:
 *   - Enable the sound effect to be played when bumping into a wall?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
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
 * Version 1.50: April 13, 2023
 * * Bug Fixes!
 * ** <Icon: x> should now update correctly when changing pages through self
 *    switches or other event conditions. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Event Labels > Mobile-Enabled?
 * *** Plugin Parameters > Movement > Pathfinding > Mobile-Enabled?
 * **** These settings allow you to enable or disable certain features when
 *      played on mobile devices for better performance.
 * 
 * Version 1.49: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Event Notetag and Comment Tags added by Arisu:
 * *** <Scale: x%>
 * *** <Scale X: x%>
 * *** <Scale Y: y%>
 * **** Changes the scale of the sprite to the designated size.
 * 
 * Version 1.48: January 20, 2023
 * * Feature Update!
 * ** <Move Synch> for certain types will also copy facing directions even if
 *    there are no tile movements (ie changing directions when pressed up
 *    against and obstacle). Update made by Arisu.
 * 
 * Version 1.47: November 10, 2022
 * * Feature Update!
 * ** If "Follower: Set Global Chase" is set to false, followers will no longer
 *    jump towards the player location when the player jumps. This does NOT
 *    apply to gather or location changing players. Followers will still have
 *    to synchronize their positions there regardless in order to maintain
 *    consistency. Update made by Olivia.
 * 
 * Version 1.46: September 29, 2022
 * * Bug Fixes!
 * ** Altered the self switch auto-reset timing to reduce errors. Fix by Arisu.
 * * Feature Update!
 * ** Added self-movement prevention whenever scenes are deactivated. Update
 *    made by Arisu.
 * 
 * Version 1.45: August 18, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused event labels with variables from refreshing
 *    properly. Fix made by Arisu.
 * 
 * Version 1.44: July 21, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused <Exit Reset Self Data> notetag to not work.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Diagonal pathfinding is now disabled when there are too many events on a
 *    map, causing extra collission checks. This value is set to 100 for the
 *    time being until we can figure out a better way to calculate diagonal
 *    pathfinding. Update made by Irina.
 * 
 * Version 1.43: July 14, 2022
 * * Bug Fixes!
 * ** Move to Player for events should no longer cause hang ups. Fix by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added caching function for pathfinding when using touch movement for a
 *    smoother experience. When touch movement is held down, pathfinding will
 *    utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Update made by Arisu.
 * * New Features!
 * ** New notetag added by Arisu:
 * *** <Playtest>
 * **** If this notetag is found in the event's notebox (NOT comments), then
 *      the event will only appear during a playtest session. It will not
 *      appear in a deployed game where the playtest flag is not on.
 * 
 * Version 1.42: June 23, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added to <Copy Event: x, y> notetag help:
 * *** - If '0' is used for the Map ID, reference the current map.
 * * Feature Update!
 * ** Default MZ behavior would have "below characters" trigger events with
 *    only comments lock out facing "same as characters" trigger events. This
 *    is now bypassed. Update made by Arisu.
 * ** The <Copy Event: mapID, eventID> notetags now allow usage of '0' for the
 *    mapID to reference the current map. Update made by Arisu.
 * ** <Save Event Location> should now work more efficiently. Update by Arisu.
 * ** Dashing animations for followers will no longer look weird after having
 *    gathered up and then proceeding to dash. Update made by Irina.
 * * New Features!
 * ** New event notetag added by Arisu:
 * *** <Exit Reset Self Data>
 * **** When the player leaves the current map, all Self Switches and Self
 *      Variables related to this event will be reset.
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Self Data: Reset All
 * **** Reset the Self Switch and Self Variable data of all events within the
 *      specified map.
 * ** New Plugin Parameter added by Arisu and sponsored by Anon:
 * *** Plugin Params > Movement Settings > Dash > Dash on Ladder?
 * **** Allow dashing while on a ladder or rope?
 * 
 * Version 1.41: June 1, 2022
 * * Bug Fixes!
 * ** Parallel Process Common Events above 1000 should no longer crash the
 *    game. Bug fixed by Irina.
 * 
 * Version 1.40: May 19, 2022
 * * Bug Fixes!
 * ** Sprite Event Labels with distance properties will now work properly
 *    when changing from a non-met page condition to a met page condition.
 *    Fix made by Arisu.
 * 
 * Version 1.39: May 5, 2022
 * * Bug Fixes!
 * ** Save event location should now work properly with Set Event Location
 *    command. Fix made by Arisu.
 * ** Sprite Event Labels with distance properties will no longer be visible
 *    when constantly entering/exiting the Main Menu. Fix made by Arisu.
 * 
 * Version 1.38: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Movement Settings > Event Movement > Shift Y
 * **** How many pixels should non-tile characters be shifted by?
 * ** New Notetags added by Arisu and sponsored by Archeia:
 * *** <Picture Filename: filename>
 * **** applies a picture graphic from the /img/pictures/ folder of your
 *      game project.
 * **** This graphic will be on top of the character sprite but below the event
 *      icon sprite.
 * **** The picture priority will be the same as the event's priority. If it is
 *      "below characters", the player can walk on top of it. If it is "above
 *      characters", the player will behind it. If it is "same as characters",
 *      the priority will be based on the current relative Y position.
 * *** <Picture Max Size: x>
 * *** <Picture Scale: y%>
 * **** If the "Max Size" or "Scale" supplementary notetags are used, the
 *      picture graphic will be scaled proportionally to fit either the exact
 *      pixel size for "Max Size" or the "Scale" ratio.
 * *** <Picture Offset: +x, +y>
 * *** <Picture Offset: -x, -y>
 * **** Offsets the X and Y position of the event picture relative to the event
 *      sprite's own position.
 * *** <Picture Wait Frames: x>
 * **** Requires VisuMZ_4_AnimatedPictures! "Wait Frames" is used with VisuMZ's
 *      Animated Pictures plugin. This determines the delay inbetween
 *      frame changes.
 * 
 * Version 1.37: March 24, 2022
 * * Documentation Update!
 * ** Added extra clarity to "Turn to Home" Movement Command.
 * *** This refers to the original position's X/Y on the map.
 * *** The event will turn and face the tile that is its original X/Y location.
 * 
 * Version 1.36: March 17, 2022
 * * Bug Fixes!
 * ** "Turn To Home" movement command now properly faces the home position.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.35: March 3, 2022
 * * IMPORTANT! Compatibility Update!
 * ** Compatibility Update with RPG Maker MZ 1.4.4.
 * *** For some reason this update broke any saves made before 1.4.4 was
 *     updated and they cannot be loaded. The only way saves would load is if
 *     you made a safe after 1.4.4 was done. This should be fixed and saves
 *     made with 1.4.3 and before should now be working. Update made by Irina.
 * 
 * Version 1.34: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** Arisu has created new event notetag/comment tags:
 * *** <Custom Z: x>
 * **** Replace 'x' with a number value to determine the event sprite's Z value
 *      relative to the tilemap.
 * **** View the helpfile for more information.
 * *** <Mirror Sprite>
 * **** The event sprite's visual appearance is mirrored.
 * *** <Move Synch Distance Opacity: x>
 * **** Changes the opacity of the event based on the distance between it and
 *      its move synched target. Closer means more opaque. Further away means
 *      more transparent.
 * ** Irina has created a more memory efficient version of Event Labels.
 * *** Plugin Parameters > Event Label Settings > Sprite Based?
 * **** Use sprite-based labels instead of legacy-window version.
 * **** Legacy-window version will not be supported in future.
 * 
 * Version 1.33: February 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu!
 * *** <Hide Player>
 * *** <Show Player>
 * **** Map Notetag. Forcefully hides or shows the player sprite. This is so
 *      you don't need to manually turn the setting on/off each time you enter
 *      a specific map.
 * *** <Hide Followers>
 * *** <Show Followers>
 * **** Map Notetag. Forcefully hides or shows the player's followers. This is
 *      so you don't need to manually turn them on/off each time you enter a
 *      specific map.
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Self Variable changes from custom move routes should no longer cause
 *    crashes. Fix made by Arisu.
 * ** Self Switch custom move route toggles should now work properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Better shadow tracking algorithm to remove any shadow twitching.
 *    Update made by Yanfly.
 * 
 * Version 1.31: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_AutoMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CallEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Activation
 * @desc Runs the page of a different event remotely.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DashEnable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change
 * @desc Change the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLabel
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLocation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventTimer
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MorphEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerMovement
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfData
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfDataResetAll
 * @text Self Data: Reset All
 * @desc Reset the Self Switch and Self Variable data of all events
 * within the specified map.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SpawnEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
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
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
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
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param SpriteBased:eval
 * @text Sprite Based?
 * @type boolean
 * @on Sprite-Based
 * @off Legacy-Window
 * @desc Use sprite-based labels instead of legacy-window version.
 * Legacy-window version will not be supported in future.
 * @default true
 *
 * @param MobileEnabled:eval
 * @text Mobile-Enabled?
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable event labels for mobile devices?
 * @default true
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param DashOnLadder:eval
 * @text Dash On Ladder?
 * @parent Dash
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow dashing while on a ladder or rope?
 * @default false
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param ShiftY:num
 * @text Shift Y
 * @parent EventMove
 * @desc How many pixels should non-tile characters be shifted by?
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param PathFind
 * @text Path Finding
 *
 * @param PathfindMobileEnabled:eval
 * @text Mobile-Enabled?
 * @parent PathFind
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable diagonal pathfinding for mobile devices?
 * @default false
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
//=============================================================================

function _0x1433(_0x424355,_0x4aa155){const _0x4788c1=_0x4788();return _0x1433=function(_0x1433d2,_0x4cda8b){_0x1433d2=_0x1433d2-0xa6;let _0xcce02c=_0x4788c1[_0x1433d2];return _0xcce02c;},_0x1433(_0x424355,_0x4aa155);}const _0x1e9303=_0x1433;function _0x4788(){const _0x529fd7=['parallelCommonEvents','_patternLocked','DashModifier','clearAttachPictureSettings','shadowY','turnRight90','_target','morphInto','drawTextEx','6XIhJaj','isAdvancedSwitch','_inputTime','HMPH','getPreservedMorphEventData','isEventsMoveCoreInvisible','OFF','setPose','setValue','cwY','processMoveSynchMimic','IconBlendMode','_expireCommonEvent','Game_CharacterBase_isDashing','%1,%2,','processMoveRouteBalloon','_eventMorphData','USER-DEFINED\x201','NORMAL','getControlledFollowerID','Map%1.json','Sprite_Character_setTileBitmap','locate','AllForbid','autoEventIconBuffer','BlendMode','updateEventLabelText','mapId','splice','RemovePreserve','isMovementSucceeded','toLowerCase','LIGHTBULB','_duration','updateSelfMovement','isValid','filename','Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a','turnTowardPoint','Spriteset_Map_createLowerLayer','Minutes','isPreventSelfMovement','processMoveRouteMoveTo','Scene_Map_startEncounterEffect','isAirshipPassable','Sprite_Balloon_updatePosition','updateShadowChanges','isCollidedWithPlayerCharacters','_scaleBaseY','MULTIPLY','jump','updateTilt','Game_Event_initialize','isSpawnHitboxCollisionOk','processMoveRouteTeleportToCharacter','bushDepth','textSizeEx','Boat','switch1Id','FastForwardKey','_hidden','attachPictureOffsetY','Game_CharacterBase_pattern','unlockEvent','clearPose','meetsCPC','VisibleRange','_cacheSystemVisible','_cpc','Letter','moveTowardPoint','updateEventsAndMovementCore','Game_Switches_setValue','deltaYFrom','Game_CharacterBase_characterIndex','mirror\x20vertical','isPlayerForceHidden','TiltLeft','increaseSteps','convertSelfVariableValuesInScriptCall','_eventSpawnData','moveStraight','pattern','TRUE','1833944nwMfZN','Seconds','resume','setupPageSettings','processMoveRouteMoveRepeat','posNt','setBackgroundType','makeDeepCopy','moveRouteIndex','smooth','initMoveSpeed','IconBufferX','updateVS8BalloonOffsets','code','PlayerForbid','isMobileDevice','regionId','isPressed','page','EventId','Game_System_initialize','_scaleBaseX','setItemChoice','event','ZZZ','createCharacterShadow','OffsetX','Game_CharacterBase_direction','updateRoutineMove','setEventLabelsVisible','SILENCE','EnableDashTilt','6691810ZuBhMv','startEncounterEffect','RIGHT\x20TO\x20LEFT','max','prototype','_requestSaveEventLocation','Game_Map_unlockEvent','horz\x20mirror','updateScale','_direction','isMoving','prepareSpawnedEventAtTerrainTag','registerSelfTarget','processMoveSynchDirection','isAnyEventStarting','player','PlayerAllow','_eventLabelOffsetY','MapId','createShadows','isAdvancedVariable','QUESTION','_opacity','setStopFollowerChasing','9neOUOx','gainFrames','Game_Timer_stop','updateStop','adjustMoveSynchOpacityDelta','_spriteOffsetY','isPlaytest','switchId','MapVariables','getPose','PreloadedMaps','setTileBitmap','SlowerSpeed','isSupportDiagonalMovement','activationRegionList','_visiblePlayerX','Icon','Game_Map_setup','isPosing','getAttachPictureBitmapHeight','NUM','FollowerID','Preserve','setupSpawn','Game_CharacterBase_update','frontY','Game_Timer_initialize','SelfSwitches','setControlledFollowerID','mirror\x20vert','initMembers','screenY','_forceHideFollower','spawnEventId','updatePose','_eventScreenY','Rope','screenX','Hidden','description','match','_diagonalSupport','SpawnEventAtXY','concat','isMapVariable','initEventsMoveCoreSettings','contents','Game_Vehicle_isLandOk','_spawnPreserved','updatePattern','BULB','hasStepAnime','padding','refreshIfNeeded','Chase','meetActivationRegionConditions','_clickTrigger','isTriggerIn','CarryPose','min','Movement','onChange','_activationProximity','RandomMoveWeight','horizontal\x20mirror','Game_Map_refresh','region','_callEventData','defaultFontSize','turnAwayFromPoint','cwX','canPass','deleteSavedEventLocationKey','setupMorphEvent','target','apply','_comments','Collision','custom','selfValue','createSpawnedEventWithData','FALSE','processMoveRoutePatternLock','_moveRoute','_speed','_characterSprites','DashingEnable','despawnTerrainTags','EventTimerFramesSet','roundXWithDirection','_randomHomeX','%1Allow','SelfSwitchABCD','Game_Player_getInputDirection','Hours','Game_CharacterBase_opacity','isSpriteVS8dir','left','isInVehicle','Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a','isOnRope','startsWith','_eventCopyData','setFrame','setupSaveEventLocations','processMoveRouteJumpToCharacter','pageId','COBWEB','iconWidth','EnableDir8','Airship','Game_CharacterBase_screenY','isCollidedWithEvents','Game_Map_events','createSpawnedEvent','backY','Game_CharacterBase_hasStepAnime','posEventsMoveCore','floor','_labelWindows','setupEventsMoveCoreCommentTags','setEventIconDataKey','getPosingCharacterPattern','FontSize','characterIndex','_paused','DOWN','meetsSwitchCondition','Event','_selfEvent','updateText','registerSelfEvent','front','Game_CharacterBase_initMembers','processMoveRouteSelfSwitch','EventID','_needsPeriodicRefresh','VS8','moveSynchTarget','DEFAULT_SHIFT_Y','pluginCommandCallEvent','_characterIndex','prepareSpawnedEventAtRegion','deleteIconsOnEventsData','Game_CharacterBase_moveStraight','_scaleY','_shadowGraphic','UNTITLED','updateParallel','executeCommandCommonEvent','clearSpriteOffsets','stop','%1DockRegionOnly','_attachPictureSprite','SelfVariables','randomInt','checkValidEventerMap','visible','saveEventLocation','BufferY','isSelfSwitch','SpawnEventAtTerrainTag','of\x20Preloaded\x20Maps.\x0a\x0a','createDisplayObjects','CallEvent','resizeWindow','%1Forbid','onCancel','isAirship','getEventIconData','Step1EventId','deleteEventLocation','command357','despawnEventId','_mirrorSprite','StopAutoMoveMessages','forceMoveRoute','away','PosY','scale','Sprite_Character_update','_lastAttachPictureMaxSize','Passability','_waitMode','ANGER','Game_CharacterBase_bushDepth','moveBackToRandomHome','return\x20%1','labelWindowText','vehicle','updateMove','updateOpacity','USER-DEFINED\x204','Game_Event_isCollidedWithPlayerCharacters','drawText','_chaseOff','Game_Event_findProperPageIndex','_PreservedEventMorphData','_spriteset','characterPatternY','processMoveSynch','update','PathfindMobileEnabled','Game_SelfSwitches_setValue','All','AdvancedSwitches','EventAllow','_commonEventId','radius','clearEventCache','isMapSwitch','labelWindowRange','_eventOverloadThreshold','VehicleDock','Visibility','BitmapSmoothing','VisuMZ_Setup_Preload_Map','needsAttachPictureUpdate','attachPictureSettings','_dragonbones','Game_Player_isMapPassable','SPIN\x20CLOCKWISE','clearSelfTarget','shiftY','return\x200','events','SwitchId','EventTemplates','turnLeft90','hasAdvancedSwitchVariable','processMoveRouteSelfVariable','resetFontSettings','canMove','KNEEL','Game_CharacterBase_moveDiagonally','canStartLocalEvents','updateScaleBase','call','EventLocationSave','144806kyBizd','_moveOnlyRegions','mainFontSize','TurnInPlaceDelay','setupEvents','Game_Map_parallelCommonEvents','_realX','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','isDiagonalDirection','_regionRules','useCarryPoseForIcons','dashSpeedModifier','hasEventIcon','characterName','setOpacity','create','startMapCommonEventOnOK','_characterName','_moveSynch','setupEventsMoveCoreEffects','_proxyWindow','padZero','eventId','Game_CharacterBase_isTransparent','setupFollowerVisibilityOverrides','List','EventLocationDelete','pause','_addedHitbox','MessageCore','EventTimerExpireEvent','follower','_eventIcon','executeMoveDir8','_poseDuration','ConvertParams','Game_Event_update','EnableTurnInPlace','EventLocationCreate','moveAwayFromPoint','determineEventOverload','_forceShowFollower','setupDiagonalSupport','ARRAYFUNC','Game_Message_setItemChoice','needsUpdate','EventAutoMovement','copy','opacityDelta','string','_filename','Scene_Load_onLoadSuccess','Game_Character_processMoveCommand','PreloadMaps','firstSpawnedEvent','UPPER\x20RIGHT','setFrames','checkSmartEventCollision','updateWaitMode','Toggle','itemPadding','_moveRouteIndex','Spriteset_Map_createShadow','_selfTargetItemChoice','_interpreter','_periodicRefreshTimer','refreshBushDepth','_lastMapId','createShadow','setAllowEventAutoMovement','setPlayerControlDisable','Enable','Game_Temp_setDestination','removeChild','_lastAttachPictureScale','isBigCharacter','jumpAll','moveForward','processMoveRouteStepToCharacter','determineCommonEventsWithCPC','Game_Event_meetsConditionsCPC','maxSize','Self\x20Variable\x20%1','trim','MapSwitches','_lastPluginCommandInterpreter','$preloadedMap_%1','Name','_scaleX','absDistance','_reflection','MUSICNOTE','character','setWaitMode','followers','TemplateName','autosaveEventLocation','Window_EventItem_onOk','executeCommonEvent','Game_Event_updateParallel','_shadowSprite','BalloonOffsetX','_visiblePlayerY','characterPatternYBasic','isShadowShrink','_mapId','_followerChaseOff','_spriteOffsetX','executeMove','updateAttachPictureBitmap','getAttachPictureBitmapWidth','processMoveSynchReverseMimic','moveTypeRandom','Player','_attachPicture','meetActivationProximityConditions','includes','Game_Interpreter_PluginCommand','clamp','TiltVert','PreSpawnJS','MoveAllSynchTargets','_EventsMoveCoreSettings','_event','prepareSpawnedEventAtXY','frameCount','initFollowerController','isDashing','_randomMoveWeight','_PlayerDiagonalSetting','ARRAYSTRUCT','charAt','Game_Event_meetsConditions','moveDiagonally','processSaveEventLocation','eventsXy','_scene','_customZ','reverse\x20copy','convertVariableValuesInScriptCall','_moveAllowPlayerCollision','isLandOk','_seconds','requestRefresh','_eventCache','getPosingCharacterDirection','_forceDashing','checkCollisionKeywords','row','LIGHT','createContents','_randomHomeY','getSavedEventLocation','clearStepPattern','processMoveRouteHugWall','_stopCount','SCREEN','_erased','Scene_Boot_onDatabaseLoaded','_needsRefresh','updateMoveSynchDirection','_isObjectCharacter','isPassable','Sprite_Character_initMembers','checkExistingEntitiesAt','indexOf','_selfTargetNumberInput','_MapSpawnedEventData','_stepPattern','MOBILE_DIAGONAL_PATHFINDING','getDirectionToPoint','createLowerLayer','replace','isPassableByAnyDirection','isMoveOnlyRegionPassable','_saveEventLocation','originalText','Visible','Step2MapId','findDiagonalDirectionTo','HEART','_pattern','Game_Timer_start','checkEventsMoveCoreStringTags','Game_Switches_value','process_VisuMZ_EventsMoveCore_Switches_Variables','morphIntoTemplate','Game_Followers_isVisible','switch2Id','changeSpeed','DefaultShadow','878505dWjIVd','%1Dock','setDirection','isTile','BoatSpeed','_visibleEventX','anchor','EventForbid','EventIconDelete','setCommonEvent','height','_eventId','Window_NumberInput_start','Disable','PlayerIconDelete','Settings','mapValue','Window_NumberInput_processOk','findTargetSprite','isActive','CustomPageConditions','PreMorphJS','Label','isAutoBufferIcon','COLLAPSE','_forceShowPlayer','ITEM','lock','_eventOverload','FUNC','constructor','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','isRegionAllowPass','SwitchGetSelfSwitchID','EVAL','Scene_Map_createDisplayObjects','_character','checkEventTriggerEventsMoveCore','Step2EventId','processMoveSynchApproach','_selfTarget','IconSet','dir8','format','AllAllow','isEventTest','ccwY','filter','_pose','turnAwayFromCharacter','isNearTheScreen','Direction','ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.','VisibleEventLabels','version','WalkForbid','Game_CharacterBase_screenX','template','USER-DEFINED\x202','Game_Interpreter_updateWaitMode','isLongPressed','_alwaysUpdateMove','list','shift','SelfDataResetAll','OffsetY','SWEAT','_encounterEffectDuration','MUSIC','EventLabelVisible','note','_visibleEventY','bufferY','advancedValue','ANNOYED','setupAttachPictureBitmap','EventsMoveCore','PostSpawnJS','Game_Interpreter_character','advancedFunc','initEventsMoveCoreEffects','isLabelVisible','_commonEvents','FollowerSetGlobalChase','clearPageSettings','isSmartEventCollisionOn','getLastPluginCommandInterpreter','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','loadSystem','_eventErased','GetMoveSynchTarget','vert\x20mirror','chaseCharacter','onDatabaseLoaded','distance','processMoveRouteFadeIn','reverseDir','setPlayerDiagonalSetting','SPIN\x20ACW','Game_CommonEvent_isActive','Game_Player_isDashing','removeMorph','isShadowVisible','deltaXFrom','_EventIcons','JSON','setNumberInput','log','getMapSpawnedEventData','reverse','pageIndex','registerCommand','addChild','blendMode','mirror\x20horz','Game_Interpreter_executeCommand','updatePatternEventsMoveCore','CommonEventID','AirshipSpeed','command108','isTurnInPlace','regionList','OperateValues','visibleRange','abs','createProxyWindow','_forceCarrying','eventLabelsVisible','EventTimerFramesGain','text','Game_Event_moveTypeRandom','Game_CharacterBase_setDirection','EXCLAMATION','DiagonalSpeedMultiplier','shadowX','_text','_followerControlID','SPIN\x20CCW','Game_Message_setNumberInput','resetSelfSwitchesForEvent','iconSize','isRunning','MapID','hasCPCs','deltaX','opacitySpeed','_type','ADDITIVE','despawnEverything','DashOnLadder','execute','FollowerReset','AdvancedVariables','createLabelWindowForTarget','pages','HURT','_spawnData','initialize','pos','startMessage','Game_Troop_meetsConditionsCPC','Game_Variables_setValue','Game_Character_forceMoveRoute','forceCarrying','LineHeight','tileWidth','findDirectionTo','refresh','map','switches','_actuallyMoving','Game_Player_checkEventTriggerHere','processMoveSynchMirrorHorz','setChaseOff','isPlayerForceShown','onLoadSuccess','_eventIconSprite','moveSynchType','getDiagonalDestination','requestBalloon','Region%1','setup','parse','MorphEventRemove','restoreSavedEventPosition','_cacheVisibility','_spawnedEvents','VICTORY','bufferX','getDirectionFromPoint','2NJGPPj','tileHeight','width','vertical\x20mirror','setSelfValue','processMoveRouteTeleportTo','EventTimerResume','down','move','_screenZoomScale','_SavedEventLocations','roundYWithDirection','Sprite_Balloon_setup','variables','setCharacterBitmap','FollowerSetControl','Sprite_Character_setCharacterBitmap','eventsXyNt','updateVisibility','bitmap','trigger','ARRAYNUM','right','executeCommand','MUSIC\x20NOTE','setPosition','SpawnEventDespawnRegions','SPIN\x20COUNTERCLOCKWISE','USER-DEFINED\x203','_shadowOpacity','updateBitmapSmoothing','setDiagonalDirection','SLEEP','SelfSwitchID','AutoBuffer','isTransparent','Game_CharacterBase_canPass','removeTemporaryMapSpawnedEvents','Game_Map_event','activationProximityType','Game_CharacterBase_increaseSteps','TargetSwitchId','despawnRegions','reserveCommonEvent','ALLOW_LADDER_DASH','getInputDirection','checkActivationProximity','setImage','...','isEventClickTriggered','getPlayerDiagonalSetting','Game_SelfSwitches_value','opacity','Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1','setBalloonPose','isObjectCharacter','areFollowersForceShown','_DisablePlayerControl','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','lastSpawnedEvent','isDestinationValid','updateShadow','isNormalPriority','RegionOk','Map\x20%1\x20Switch\x20%2','isTargetEventValidForLabelWindow','createAttachPictureSprite','keys','column','onLoadAttachPicture','checkNeedForPeriodicRefresh','isBusy','updateSaveEventLocation','innerWidth','PlayerMovementDiagonal','Game_Troop_meetsConditions','rotation','LOWER\x20LEFT','DIAGONAL_PATHFINDING_EVENT_LIMIT','_events','Game_Follower_chaseCharacter','loadCPC','VariableId','updateEventIconSprite','setupEventsMoveCoreNotetags','setMoveRoute','isBattleTest','isAllowCharacterTilt','Region','Setting','451995oQijLa','bind','Step1MapId','initEventsMoveCore','eraseEvent','mimic','isVisible','IconBufferY','Game_Event_updateSelfMovement','processDrawIcon','timerText','Frames','outlineColor','isEventRunning','inBattle','Game_Player_checkEventTriggerThere','Game_Variables_value','attachPictureBlendMode','Window_ScrollText_startMessage','correctFacingDirection','random','_pageIndex','setupCopyEvent','processMoveRouteJumpTo','_frames','_activationProximityAutoTriggerBypass','Game_Follower_initialize','_labelWindow','createLabelWindows','delay','processMoveSynchCustom','updateAttachPictureSprite','lineHeight','deletePreservedMorphEventDataKey','_eventPageIndex','activationProximityDistance','Game_Player_executeMove','CPCsMet','isSaveEventLocations','_forceHidePlayer','_CPCs','1051976ducBxD','Game_Vehicle_initMoveSpeed','StrictCollision','adjustDir8MovementSpeed','moveTowardCharacter','ShipSpeed','loadDataFile','erase','ShowShadows','Forbid','updateEventCustomZ','startCallEvent','updateEventsMoveCoreTagChanges','checkRegionEventTrigger','isAllowEventAutoMovement','checkEventTriggerAuto','processMoveSynchAway','_realY','EventTimerExpireClear','PageId','Window_Message_startMessage','terrainTag','checkEventTriggerHere','isStopFollowerChasing','You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a','AutoBalloon','slice','ARRAYSTR','fontSize','firstSpawnedEventID','processMoveSynchRandom','checkAdvancedSwitchVariablePresent','Dock','attachPictureMaxSize','name','VisuMZ_2_DragonbonesUnion','Map%1-Event%2','_advancedSwitchVariable','setupRegionRestrictions','LOWER\x20RIGHT','CPC','getEventIconIndex','isSceneMap','isOnLadder','toUpperCase','PostMorphJS','despawnAtXY','reverse\x20mimic','Vehicle','isSelfVariable','createIconSprite','SwitchGetSelfSwitchABCD','_eventLabelOffsetX','contentsOpacity','attachPictureFilename','boxWidth','updateEventMirrorSprite','TerrainTags','windowPadding','SpawnEventDespawnAtXY','_working','drawing','square','_lastAttachPictureFilename','isDashingAndMoving','Window_EventItem_onCancel','Game_Event_event','Game_Map_isDashDisabled','fontFace','setMapValue','createSaveEventLocationData','_callEventMap','roundY','startMapCommonEventOnTouch','resetSelfSwitchesForMap','spawnPreserved','FavorHorz','_tilemap','characterPatternYVS8','shadowFilename','addLoadListener','add','clear','processMoveRouteStepFrom','isDashDisabled','setupPlayerVisibilityOverrides','realMoveSpeed','LOVE','SpriteBased','type','setLastPluginCommandInterpreter','SpawnEventDespawnTerrainTags','isMapPassable','Game_Event_clearPageSettings','none','attachPictureOffsetX','referEvent','length','updatePeriodicRefresh','default','MUSIC-NOTE','onOk','Sprite_Character_characterPatternY','setupSpawnedEvents','savePreservedMorphEventDataKey','turnTowardCharacter','PosX','Template','parameters','updatePosition','getSelfTarget','_saveEventLocations','Game_Timer_onExpire','RegionOkTarget','Game_Character_setMoveRoute','clearDashing','setEventIconData','RIGHT','boat','Game_CharacterBase_realMoveSpeed','processMoveRouteMoveToCharacter','Ship','processMoveRouteStepTo','variableId','processMoveSynchMirrorVert','direction','isRegionForbidPass','Game_Player_increaseSteps','processMoveRouteJumpForward','SpawnEventAtRegion','exit','offsetY','Game_Event_locate','setDestination','isPlayerControlDisabled','Game_Event_start','zoomScale','frontX','1926696erkFmL','value','setDashingEnabled','moveAwayFromCharacter','iconHeight','start','isSpawnedEvent','some','onExpire','push','isWorking','STRUCT','Game_Event_setupPageSettings','iconIndex','Operation','Self\x20Switch\x20%1','SuccessSwitchId','Button','timer','Game_Map_setupEvents','requestAnimation','processMoveCommandEventsMoveCore','IconIndex','MoveRouteIndex','_eventScreenX','deleteSavedEventLocation','Game_Event_checkEventTriggerAuto','onClickTrigger','Value','variableValid','EventTimerSpeed','processMoveRouteSetIndex','VisuMZ_0_CoreEngine','AutoMoveEvents','metCPC','offsetX','airship','FollowerSetTargetChase','round','_starting','startMapCommonEventOnOKTarget','standing','_data','processMoveCommand','setPattern','WalkAllow','clearDestination','PreCopyJS','meetsConditions','PostCopyJS','SPIN\x20CW','checkEventTriggerThere','getPosingCharacterIndex','updateMoveSynch','setMoveSpeed','ship','processMoveRouteMoveUntilStop','deleteIconsOnEventsDataKey','LIGHT\x20BULB','lastMovedDirection','Game_Vehicle_isMapPassable','scrolledY','resetExitSelfSwitches','_lastMovedDirection','hideShadows','processMoveRouteAnimation','initMembersEventsMoveCore'];_0x4788=function(){return _0x529fd7;};return _0x4788();}(function(_0x49b4b0,_0x2131fe){const _0x1f969d=_0x1433,_0x36a4cd=_0x49b4b0();while(!![]){try{const _0x3ca435=parseInt(_0x1f969d(0x1b0))/0x1+-parseInt(_0x1f969d(0x32d))/0x2*(parseInt(_0x1f969d(0x26f))/0x3)+-parseInt(_0x1f969d(0x3b0))/0x4+parseInt(_0x1f969d(0x387))/0x5+-parseInt(_0x1f969d(0x486))/0x6*(parseInt(_0x1f969d(0x4da))/0x7)+-parseInt(_0x1f969d(0x43a))/0x8*(-parseInt(_0x1f969d(0xc1))/0x9)+parseInt(_0x1f969d(0xa9))/0xa;if(_0x3ca435===_0x2131fe)break;else _0x36a4cd['push'](_0x36a4cd['shift']());}catch(_0x485024){_0x36a4cd['push'](_0x36a4cd['shift']());}}}(_0x4788,0x4feea));var label=_0x1e9303(0x2bb),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x1e9303(0x29e)](function(_0x48c3dd){const _0x3e00b0=_0x1e9303;return _0x48c3dd['status']&&_0x48c3dd[_0x3e00b0(0xe8)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x1e9303(0x27e)]=VisuMZ[label][_0x1e9303(0x27e)]||{},VisuMZ['ConvertParams']=function(_0x405e76,_0x261188){const _0x1b1b6d=_0x1e9303;for(const _0x533ccc in _0x261188){if(_0x533ccc[_0x1b1b6d(0xe9)](/(.*):(.*)/i)){const _0x5d0a9b=String(RegExp['$1']),_0x446ae3=String(RegExp['$2'])[_0x1b1b6d(0x3dc)]()[_0x1b1b6d(0x203)]();let _0x146948,_0x3af846,_0x8e4b05;switch(_0x446ae3){case _0x1b1b6d(0xd5):_0x146948=_0x261188[_0x533ccc]!==''?Number(_0x261188[_0x533ccc]):0x0;break;case _0x1b1b6d(0x342):_0x3af846=_0x261188[_0x533ccc]!==''?JSON[_0x1b1b6d(0x325)](_0x261188[_0x533ccc]):[],_0x146948=_0x3af846[_0x1b1b6d(0x317)](_0x86304f=>Number(_0x86304f));break;case _0x1b1b6d(0x291):_0x146948=_0x261188[_0x533ccc]!==''?eval(_0x261188[_0x533ccc]):null;break;case'ARRAYEVAL':_0x3af846=_0x261188[_0x533ccc]!==''?JSON[_0x1b1b6d(0x325)](_0x261188[_0x533ccc]):[],_0x146948=_0x3af846[_0x1b1b6d(0x317)](_0x469f35=>eval(_0x469f35));break;case _0x1b1b6d(0x2d8):_0x146948=_0x261188[_0x533ccc]!==''?JSON[_0x1b1b6d(0x325)](_0x261188[_0x533ccc]):'';break;case'ARRAYJSON':_0x3af846=_0x261188[_0x533ccc]!==''?JSON['parse'](_0x261188[_0x533ccc]):[],_0x146948=_0x3af846[_0x1b1b6d(0x317)](_0x58df2d=>JSON[_0x1b1b6d(0x325)](_0x58df2d));break;case _0x1b1b6d(0x28c):_0x146948=_0x261188[_0x533ccc]!==''?new Function(JSON[_0x1b1b6d(0x325)](_0x261188[_0x533ccc])):new Function(_0x1b1b6d(0x1a1));break;case _0x1b1b6d(0x1db):_0x3af846=_0x261188[_0x533ccc]!==''?JSON['parse'](_0x261188[_0x533ccc]):[],_0x146948=_0x3af846['map'](_0x124264=>new Function(JSON['parse'](_0x124264)));break;case'STR':_0x146948=_0x261188[_0x533ccc]!==''?String(_0x261188[_0x533ccc]):'';break;case _0x1b1b6d(0x3cb):_0x3af846=_0x261188[_0x533ccc]!==''?JSON[_0x1b1b6d(0x325)](_0x261188[_0x533ccc]):[],_0x146948=_0x3af846['map'](_0x168532=>String(_0x168532));break;case _0x1b1b6d(0x445):_0x8e4b05=_0x261188[_0x533ccc]!==''?JSON[_0x1b1b6d(0x325)](_0x261188[_0x533ccc]):{},_0x405e76[_0x5d0a9b]={},VisuMZ[_0x1b1b6d(0x1d3)](_0x405e76[_0x5d0a9b],_0x8e4b05);continue;case _0x1b1b6d(0x232):_0x3af846=_0x261188[_0x533ccc]!==''?JSON[_0x1b1b6d(0x325)](_0x261188[_0x533ccc]):[],_0x146948=_0x3af846[_0x1b1b6d(0x317)](_0x599468=>VisuMZ[_0x1b1b6d(0x1d3)]({},JSON[_0x1b1b6d(0x325)](_0x599468)));break;default:continue;}_0x405e76[_0x5d0a9b]=_0x146948;}}return _0x405e76;},(_0x50de55=>{const _0x4f4d5b=_0x1e9303,_0x5ecb80=_0x50de55[_0x4f4d5b(0x3d2)];for(const _0x27dd62 of dependencies){if(!Imported[_0x27dd62]){alert(_0x4f4d5b(0x2c6)[_0x4f4d5b(0x29a)](_0x5ecb80,_0x27dd62)),SceneManager['exit']();break;}}const _0x2084c7=_0x50de55['description'];if(_0x2084c7[_0x4f4d5b(0xe9)](/\[Version[ ](.*?)\]/i)){const _0x2e37a8=Number(RegExp['$1']);_0x2e37a8!==VisuMZ[label][_0x4f4d5b(0x2a5)]&&(alert(_0x4f4d5b(0x367)[_0x4f4d5b(0x29a)](_0x5ecb80,_0x2e37a8)),SceneManager[_0x4f4d5b(0x432)]());}if(_0x2084c7[_0x4f4d5b(0xe9)](/\[Tier[ ](\d+)\]/i)){const _0x39e504=Number(RegExp['$1']);_0x39e504<tier?(alert(_0x4f4d5b(0x1b7)[_0x4f4d5b(0x29a)](_0x5ecb80,_0x39e504,tier)),SceneManager['exit']()):tier=Math[_0x4f4d5b(0xac)](_0x39e504,tier);}VisuMZ[_0x4f4d5b(0x1d3)](VisuMZ[label][_0x4f4d5b(0x27e)],_0x50de55[_0x4f4d5b(0x41c)]);})(pluginData),VisuMZ[_0x1e9303(0x2e9)]=function(_0x15d439,_0x388685,_0x1d96f1){switch(_0x1d96f1){case'=':return _0x388685;break;case'+':return _0x15d439+_0x388685;break;case'-':return _0x15d439-_0x388685;break;case'*':return _0x15d439*_0x388685;break;case'/':return _0x15d439/_0x388685;break;case'%':return _0x15d439%_0x388685;break;}return _0x15d439;},PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x45b),_0x501079=>{const _0xbe175e=_0x1e9303;VisuMZ[_0xbe175e(0x1d3)](_0x501079,_0x501079);switch(_0x501079['Value']){case'Allow':$gameSystem['setAllowEventAutoMovement'](!![]);break;case'Stop':$gameSystem[_0xbe175e(0x1f5)](![]);break;case _0xbe175e(0x1eb):$gameSystem[_0xbe175e(0x1f5)](!$gameSystem['isAllowEventAutoMovement']());break;}}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x165),_0x198d8c=>{const _0x80a77c=_0x1e9303;VisuMZ[_0x80a77c(0x1d3)](_0x198d8c,_0x198d8c);const _0x3eb32b=$gameTemp[_0x80a77c(0x2c5)](),_0x55dad0={'mapId':_0x198d8c[_0x80a77c(0xbb)],'eventId':_0x198d8c[_0x80a77c(0x4ed)]||_0x3eb32b[_0x80a77c(0x1c6)](),'pageId':_0x198d8c[_0x80a77c(0x3c3)]};if(_0x55dad0[_0x80a77c(0x4a1)]<=0x0)_0x55dad0[_0x80a77c(0x4a1)]=$gameMap?$gameMap[_0x80a77c(0x4a1)]():0x1;$gameTemp[_0x80a77c(0x2c5)]()[_0x80a77c(0x14d)](_0x55dad0);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],'DashEnableToggle',_0x5cc965=>{const _0x3505c9=_0x1e9303;VisuMZ[_0x3505c9(0x1d3)](_0x5cc965,_0x5cc965);switch(_0x5cc965[_0x3505c9(0x456)]){case _0x3505c9(0x1f7):$gameSystem[_0x3505c9(0x43c)](!![]);break;case _0x3505c9(0x27c):$gameSystem[_0x3505c9(0x43c)](![]);break;case _0x3505c9(0x1eb):$gameSystem[_0x3505c9(0x43c)](!$gameSystem['isDashingEnabled']());break;}}),PluginManager['registerCommand'](pluginData[_0x1e9303(0x3d2)],'EventIconChange',_0x34136b=>{const _0x1f6c9f=_0x1e9303;VisuMZ[_0x1f6c9f(0x1d3)](_0x34136b,_0x34136b);const _0x123c24=$gameTemp[_0x1f6c9f(0x2c5)]();_0x34136b['MapId']=_0x34136b[_0x1f6c9f(0xbb)]||$gameMap['mapId'](),$gameSystem['setEventIconDataKey'](_0x34136b[_0x1f6c9f(0xbb)],_0x34136b['EventId']||_0x123c24[_0x1f6c9f(0x1c6)](),_0x34136b[_0x1f6c9f(0x450)],_0x34136b[_0x1f6c9f(0x4e5)],_0x34136b[_0x1f6c9f(0x38e)],_0x34136b[_0x1f6c9f(0x491)]);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x277),_0x4550b5=>{const _0x1bed4c=_0x1e9303;VisuMZ[_0x1bed4c(0x1d3)](_0x4550b5,_0x4550b5);const _0x3e55a2=$gameTemp[_0x1bed4c(0x2c5)]();_0x4550b5[_0x1bed4c(0xbb)]=_0x4550b5[_0x1bed4c(0xbb)]||$gameMap[_0x1bed4c(0x4a1)](),$gameSystem[_0x1bed4c(0x473)](_0x4550b5['MapId'],_0x4550b5[_0x1bed4c(0x4ed)]||_0x3e55a2[_0x1bed4c(0x1c6)]());}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],'EventLabelRefresh',_0x4e5826=>{const _0x410459=_0x1e9303;if($gameMap)for(const _0x14d9f1 of $gameMap['events']()){_0x14d9f1['refresh'](),_0x14d9f1['updateEventLabelText']();}if(SceneManager[_0x410459(0x3da)]()){const _0x358dd2=SceneManager[_0x410459(0x238)][_0x410459(0x187)];if(_0x358dd2)_0x358dd2['refreshEventLabels']();}}),PluginManager[_0x1e9303(0x2de)](pluginData['name'],_0x1e9303(0x2b4),_0x34c727=>{const _0xc07a7d=_0x1e9303;VisuMZ['ConvertParams'](_0x34c727,_0x34c727);switch(_0x34c727[_0xc07a7d(0x197)]){case _0xc07a7d(0x261):$gameSystem['setEventLabelsVisible'](!![]);break;case _0xc07a7d(0xe7):$gameSystem[_0xc07a7d(0xa6)](![]);break;case'Toggle':$gameSystem[_0xc07a7d(0xa6)](!$gameSystem[_0xc07a7d(0x2ee)]());break;}}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x1af),_0x1cc1c4=>{const _0x424666=_0x1e9303;VisuMZ[_0x424666(0x1d3)](_0x1cc1c4,_0x1cc1c4);const _0x2450ef=$gameTemp[_0x424666(0x2c5)]();if(!$gameMap)return;const _0x320cb6=$gameMap[_0x424666(0x4f1)](_0x1cc1c4[_0x424666(0x4ed)]||_0x2450ef[_0x424666(0x1c6)]());if(_0x320cb6)_0x320cb6[_0x424666(0x15f)]();}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x1d6),_0x3a1cf5=>{const _0x230e35=_0x1e9303;VisuMZ[_0x230e35(0x1d3)](_0x3a1cf5,_0x3a1cf5);const _0x474e31=$gameTemp['getLastPluginCommandInterpreter'](),_0x13f76b=_0x3a1cf5[_0x230e35(0xbb)]||$gameMap[_0x230e35(0x4a1)](),_0x1a75a4=_0x3a1cf5[_0x230e35(0x4ed)]||_0x474e31[_0x230e35(0x1c6)](),_0x20268e=_0x3a1cf5[_0x230e35(0x41a)]||0x0,_0x2ff95c=_0x3a1cf5[_0x230e35(0x173)]||0x0,_0x54a0b5=_0x3a1cf5[_0x230e35(0x2a2)]||0x2,_0x4dae81=((_0x3a1cf5[_0x230e35(0x3c3)]||0x1)-0x1)[_0x230e35(0x226)](0x0,0x13),_0x5ee59c=_0x3a1cf5[_0x230e35(0x451)]||0x0;$gameSystem[_0x230e35(0x3f6)](_0x13f76b,_0x1a75a4,_0x20268e,_0x2ff95c,_0x54a0b5,_0x4dae81,_0x5ee59c);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x1ca),_0x5950f1=>{const _0x4a8394=_0x1e9303;VisuMZ['ConvertParams'](_0x5950f1,_0x5950f1);const _0x1604bc=$gameTemp[_0x4a8394(0x2c5)](),_0x6d50d7=_0x5950f1[_0x4a8394(0xbb)]||$gameMap[_0x4a8394(0x4a1)](),_0xb7271b=_0x5950f1['EventId']||_0x1604bc[_0x4a8394(0x1c6)]();$gameSystem['deleteSavedEventLocationKey'](_0x6d50d7,_0xb7271b);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x1ce),_0x4e606a=>{const _0x17b8d7=_0x1e9303;VisuMZ[_0x17b8d7(0x1d3)](_0x4e606a,_0x4e606a);const _0x2eadd5=_0x4e606a[_0x17b8d7(0x2e4)];$gameTimer[_0x17b8d7(0x278)](_0x2eadd5);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x3c2),_0x308ef1=>{const _0x58672c=_0x1e9303;$gameTimer[_0x58672c(0x278)](0x0);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x2ef),_0x461203=>{const _0x6f6000=_0x1e9303;if(!$gameTimer['isWorking']())return;VisuMZ['ConvertParams'](_0x461203,_0x461203);let _0x555122=0x0;_0x555122+=_0x461203[_0x6f6000(0x392)],_0x555122+=_0x461203[_0x6f6000(0x4db)]*0x3c,_0x555122+=_0x461203[_0x6f6000(0x4ae)]*0x3c*0x3c,_0x555122+=_0x461203[_0x6f6000(0x11f)]*0x3c*0x3c*0x3c,$gameTimer[_0x6f6000(0xc2)](_0x555122);}),PluginManager['registerCommand'](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x119),_0x267208=>{const _0x1f1880=_0x1e9303;if(!$gameTimer[_0x1f1880(0x444)]())return;VisuMZ[_0x1f1880(0x1d3)](_0x267208,_0x267208);let _0xcac267=0x0;_0xcac267+=_0x267208['Frames'],_0xcac267+=_0x267208[_0x1f1880(0x4db)]*0x3c,_0xcac267+=_0x267208[_0x1f1880(0x4ae)]*0x3c*0x3c,_0xcac267+=_0x267208['Hours']*0x3c*0x3c*0x3c,$gameTimer[_0x1f1880(0x1e8)](_0xcac267);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],'EventTimerPause',_0xd9e9f6=>{const _0x44d95e=_0x1e9303;if(!$gameTimer[_0x44d95e(0x444)]())return;$gameTimer['pause']();}),PluginManager[_0x1e9303(0x2de)](pluginData['name'],_0x1e9303(0x333),_0x5127a7=>{const _0x404f58=_0x1e9303;if(!$gameTimer[_0x404f58(0x444)]())return;$gameTimer[_0x404f58(0x4dc)]();}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x458),_0x476b33=>{const _0x55dde3=_0x1e9303;VisuMZ[_0x55dde3(0x1d3)](_0x476b33,_0x476b33);const _0xe04be2=_0x476b33['Speed']||0x0;$gameTimer[_0x55dde3(0x26d)](_0xe04be2);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x2c2),_0x26a3cd=>{const _0x277919=_0x1e9303;VisuMZ[_0x277919(0x1d3)](_0x26a3cd,_0x26a3cd);const _0x3a292b=!_0x26a3cd[_0x277919(0xf7)];$gameSystem[_0x277919(0xc0)](_0x3a292b);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x45f),_0x5c7636=>{const _0x1b954b=_0x1e9303;VisuMZ[_0x1b954b(0x1d3)](_0x5c7636,_0x5c7636);const _0x3e4757=(_0x5c7636['FollowerID']||0x0)-0x1,_0x51426d=!_0x5c7636[_0x1b954b(0xf7)],_0x6eb475=$gamePlayer[_0x1b954b(0x20e)]()[_0x1b954b(0x1cf)](_0x3e4757);if(_0x6eb475)_0x6eb475[_0x1b954b(0x31c)](_0x51426d);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x33c),_0x453671=>{const _0x5ef9f3=_0x1e9303;VisuMZ[_0x5ef9f3(0x1d3)](_0x453671,_0x453671);const _0x107cd4=_0x453671[_0x5ef9f3(0xd6)];$gameSystem[_0x5ef9f3(0xdd)](_0x107cd4);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x306),_0xae5db7=>{const _0x4720cd=_0x1e9303;VisuMZ['ConvertParams'](_0xae5db7,_0xae5db7),$gameSystem[_0x4720cd(0xdd)](0x0),$gameSystem[_0x4720cd(0xc0)](![]);for(const _0x25f2b0 of $gamePlayer[_0x4720cd(0x20e)]()[_0x4720cd(0x464)]){if(_0x25f2b0)_0x25f2b0[_0x4720cd(0x31c)](![]);}}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x3e3),_0x10e70b=>{const _0x3081ed=_0x1e9303;VisuMZ[_0x3081ed(0x1d3)](_0x10e70b,_0x10e70b);const _0x599093=$gameTemp[_0x3081ed(0x2c5)]();_0x10e70b['MapId']=_0x10e70b['MapId']||$gameMap[_0x3081ed(0x4a1)]();const _0x2d340f=[_0x10e70b['MapId'],_0x10e70b[_0x3081ed(0x4ed)]||_0x599093['eventId'](),_0x10e70b[_0x3081ed(0x4cb)]],_0x59d2a2=_0x10e70b[_0x3081ed(0x356)],_0x2c0f2a=$gameSelfSwitches[_0x3081ed(0x43b)](_0x2d340f)||![];$gameSwitches[_0x3081ed(0x48e)](_0x59d2a2,_0x2c0f2a);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x290),_0x1e3195=>{const _0x4b8e03=_0x1e9303;VisuMZ[_0x4b8e03(0x1d3)](_0x1e3195,_0x1e3195);const _0x4bb79d=$gameTemp[_0x4b8e03(0x2c5)]();_0x1e3195[_0x4b8e03(0xbb)]=_0x1e3195[_0x4b8e03(0xbb)]||$gameMap['mapId']();const _0x22afdd=[_0x1e3195['MapId'],_0x1e3195[_0x4b8e03(0x4ed)]||_0x4bb79d[_0x4b8e03(0x1c6)](),_0x4b8e03(0x449)[_0x4b8e03(0x29a)](_0x1e3195[_0x4b8e03(0x1a3)])],_0xdae844=_0x1e3195[_0x4b8e03(0x356)],_0x4191d5=$gameSelfSwitches[_0x4b8e03(0x43b)](_0x22afdd)||![];$gameSwitches[_0x4b8e03(0x48e)](_0xdae844,_0x4191d5);}),PluginManager['registerCommand'](pluginData[_0x1e9303(0x3d2)],'VariableGetSelfVariableID',_0x53b730=>{const _0xc02938=_0x1e9303;VisuMZ[_0xc02938(0x1d3)](_0x53b730,_0x53b730);const _0xd92903=$gameTemp[_0xc02938(0x2c5)]();_0x53b730['MapId']=_0x53b730['MapId']||$gameMap['mapId']();const _0x2a904b=[_0x53b730[_0xc02938(0xbb)],_0x53b730[_0xc02938(0x4ed)]||_0xd92903[_0xc02938(0x1c6)](),_0xc02938(0x202)[_0xc02938(0x29a)](_0x53b730[_0xc02938(0x37f)])],_0x1e2126=_0x53b730['TargetVariableId'],_0x7d81c8=$gameSelfSwitches[_0xc02938(0x43b)](_0x2a904b)||![];$gameVariables[_0xc02938(0x48e)](_0x1e2126,_0x7d81c8);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],'MorphEventTo',_0x4190ce=>{const _0xeb6944=_0x1e9303;VisuMZ[_0xeb6944(0x1d3)](_0x4190ce,_0x4190ce);if(!$gameMap)return;const _0x3da3d6=$gameTemp[_0xeb6944(0x2c5)](),_0x4d4e18=_0x4190ce['Step2Preserve'];_0x4190ce[_0xeb6944(0x389)]=_0x4190ce[_0xeb6944(0x389)]||$gameMap[_0xeb6944(0x4a1)](),_0x4190ce[_0xeb6944(0x262)]=_0x4190ce[_0xeb6944(0x262)]||$gameMap[_0xeb6944(0x4a1)](),_0x4190ce[_0xeb6944(0x20f)]=_0x4190ce['TemplateName'][_0xeb6944(0x3dc)]()['trim']();if(!_0x4d4e18&&_0x4190ce[_0xeb6944(0x389)]!==$gameMap[_0xeb6944(0x4a1)]())return;if($gameMap['mapId']()===_0x4190ce[_0xeb6944(0x389)]){const _0x351196=$gameMap[_0xeb6944(0x4f1)](_0x4190ce[_0xeb6944(0x16b)]||_0x3da3d6['eventId']());if(!_0x351196)return;_0x4190ce['TemplateName']!==_0xeb6944(0x154)?_0x351196[_0xeb6944(0x26a)](_0x4190ce[_0xeb6944(0x20f)]):_0x351196[_0xeb6944(0x484)](_0x4190ce['Step2MapId'],_0x4190ce[_0xeb6944(0x295)]||_0x3da3d6['eventId']());}_0x4d4e18&&$gameSystem[_0xeb6944(0x418)](_0x4190ce[_0xeb6944(0x389)],_0x4190ce['Step1EventId'],_0x4190ce[_0xeb6944(0x20f)],_0x4190ce[_0xeb6944(0x262)],_0x4190ce['Step2EventId']);}),PluginManager['registerCommand'](pluginData['name'],_0x1e9303(0x326),_0x760672=>{const _0x4ded60=_0x1e9303;VisuMZ[_0x4ded60(0x1d3)](_0x760672,_0x760672);if(!$gameMap)return;const _0x329706=$gameTemp['getLastPluginCommandInterpreter']();_0x760672[_0x4ded60(0xbb)]=_0x760672[_0x4ded60(0xbb)]||$gameMap[_0x4ded60(0x4a1)]();if($gameMap['mapId']()===_0x760672['MapId']){const _0xbe733e=$gameMap[_0x4ded60(0x4f1)](_0x760672['EventId']||_0x329706[_0x4ded60(0x1c6)]());_0xbe733e[_0x4ded60(0x2d4)]();}_0x760672[_0x4ded60(0x4a3)]&&$gameSystem[_0x4ded60(0x3a8)](_0x760672[_0x4ded60(0xbb)],_0x760672[_0x4ded60(0x4ed)]||_0x329706['eventId']());}),PluginManager['registerCommand'](pluginData[_0x1e9303(0x3d2)],'PlayerIconChange',_0x5820fd=>{const _0x3d6e89=_0x1e9303;VisuMZ[_0x3d6e89(0x1d3)](_0x5820fd,_0x5820fd),$gameSystem[_0x3d6e89(0x424)]($gamePlayer,_0x5820fd[_0x3d6e89(0x450)],_0x5820fd[_0x3d6e89(0x4e5)],_0x5820fd[_0x3d6e89(0x38e)],_0x5820fd[_0x3d6e89(0x491)]);}),PluginManager['registerCommand'](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x27d),_0x122b50=>{const _0x1cd38d=_0x1e9303;VisuMZ['ConvertParams'](_0x122b50,_0x122b50),$gameSystem[_0x1cd38d(0x150)]($gamePlayer);}),PluginManager[_0x1e9303(0x2de)](pluginData['name'],'PlayerMovementChange',_0x4fba59=>{const _0xa6b62a=_0x1e9303;VisuMZ[_0xa6b62a(0x1d3)](_0x4fba59,_0x4fba59),$gameSystem[_0xa6b62a(0x1f6)](!_0x4fba59[_0xa6b62a(0x1f7)]);}),PluginManager['registerCommand'](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x377),_0x2aa661=>{const _0x4ffb98=_0x1e9303;VisuMZ[_0x4ffb98(0x1d3)](_0x2aa661,_0x2aa661),$gameSystem[_0x4ffb98(0x2d0)](_0x2aa661[_0x4ffb98(0x386)]);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x2af),_0x4c69db=>{const _0x2a8afd=_0x1e9303;VisuMZ[_0x2a8afd(0x1d3)](_0x4c69db,_0x4c69db);const _0x442b1b=_0x4c69db[_0x2a8afd(0xbb)]||$gameMap[_0x2a8afd(0x4a1)]();$gameSelfSwitches[_0x2a8afd(0x3fa)](_0x442b1b);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x11d),_0x56a0b9=>{const _0x27cf30=_0x1e9303;VisuMZ[_0x27cf30(0x1d3)](_0x56a0b9,_0x56a0b9);const _0x4b0cfb=$gameTemp[_0x27cf30(0x2c5)]();_0x56a0b9['MapId']=_0x56a0b9[_0x27cf30(0xbb)]||$gameMap[_0x27cf30(0x4a1)]();const _0x3515ff=[_0x56a0b9[_0x27cf30(0xbb)],_0x56a0b9['EventId']||_0x4b0cfb[_0x27cf30(0x1c6)](),_0x56a0b9['Letter']];switch(_0x56a0b9[_0x27cf30(0x456)]){case'ON':$gameSelfSwitches[_0x27cf30(0x48e)](_0x3515ff,!![]);break;case _0x27cf30(0x48c):$gameSelfSwitches[_0x27cf30(0x48e)](_0x3515ff,![]);break;case _0x27cf30(0x1eb):$gameSelfSwitches[_0x27cf30(0x48e)](_0x3515ff,!$gameSelfSwitches[_0x27cf30(0x43b)](_0x3515ff));break;}}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x34e),_0x2aa92e=>{const _0x502215=_0x1e9303;VisuMZ['ConvertParams'](_0x2aa92e,_0x2aa92e);const _0x2b0191=$gameTemp[_0x502215(0x2c5)]();_0x2aa92e[_0x502215(0xbb)]=_0x2aa92e[_0x502215(0xbb)]||$gameMap[_0x502215(0x4a1)]();const _0x45b550=[_0x2aa92e[_0x502215(0xbb)],_0x2aa92e[_0x502215(0x4ed)]||_0x2b0191[_0x502215(0x1c6)](),_0x502215(0x449)['format'](_0x2aa92e[_0x502215(0x1a3)])];switch(_0x2aa92e['Value']){case'ON':$gameSelfSwitches[_0x502215(0x48e)](_0x45b550,!![]);break;case'OFF':$gameSelfSwitches['setValue'](_0x45b550,![]);break;case _0x502215(0x1eb):$gameSelfSwitches[_0x502215(0x48e)](_0x45b550,!$gameSelfSwitches[_0x502215(0x43b)](_0x45b550));break;}}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],'SelfVariableID',_0x5c6b22=>{const _0x78fc3d=_0x1e9303;VisuMZ[_0x78fc3d(0x1d3)](_0x5c6b22,_0x5c6b22);const _0x23cd42=$gameTemp['getLastPluginCommandInterpreter']();_0x5c6b22['MapId']=_0x5c6b22[_0x78fc3d(0xbb)]||$gameMap[_0x78fc3d(0x4a1)]();const _0x163b22=[_0x5c6b22[_0x78fc3d(0xbb)],_0x5c6b22[_0x78fc3d(0x4ed)]||_0x23cd42[_0x78fc3d(0x1c6)](),_0x78fc3d(0x202)[_0x78fc3d(0x29a)](_0x5c6b22['VariableId'])],_0x480def=VisuMZ[_0x78fc3d(0x2e9)]($gameSelfSwitches[_0x78fc3d(0x43b)](_0x163b22),_0x5c6b22[_0x78fc3d(0x456)],_0x5c6b22[_0x78fc3d(0x448)]);$gameSelfSwitches['setValue'](_0x163b22,_0x480def);}),PluginManager['registerCommand'](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0xeb),_0x492c4e=>{const _0x4dffbd=_0x1e9303;VisuMZ[_0x4dffbd(0x1d3)](_0x492c4e,_0x492c4e);const _0x7963b3=$gameTemp[_0x4dffbd(0x2c5)](),_0x508aa8={'template':_0x492c4e[_0x4dffbd(0x20f)],'mapId':_0x492c4e[_0x4dffbd(0xbb)]||$gameMap[_0x4dffbd(0x4a1)](),'eventId':_0x492c4e[_0x4dffbd(0x4ed)]||_0x7963b3[_0x4dffbd(0x1c6)](),'x':_0x492c4e[_0x4dffbd(0x41a)],'y':_0x492c4e['PosY'],'spawnPreserved':_0x492c4e['Preserve'],'spawnEventId':$gameMap['_spawnedEvents'][_0x4dffbd(0x411)]+0x3e8},_0x255241=_0x492c4e['SuccessSwitchId']||0x0;if(!VisuMZ['PreloadedMaps'][_0x508aa8[_0x4dffbd(0x4a1)]]&&_0x508aa8[_0x4dffbd(0x4a1)]!==$gameMap['mapId']()){let _0x474147=_0x4dffbd(0x3c8)[_0x4dffbd(0x29a)](_0x508aa8[_0x4dffbd(0x4a1)]);_0x474147+=_0x4dffbd(0x163),_0x474147+=_0x4dffbd(0x4ab),_0x474147+=_0x4dffbd(0x124),_0x474147+=_0x4dffbd(0x362)['format'](_0x508aa8[_0x4dffbd(0x4a1)]),alert(_0x474147);return;}const _0x15fee6=$gameMap[_0x4dffbd(0x22c)](_0x508aa8,_0x492c4e[_0x4dffbd(0x10e)],_0x492c4e[_0x4dffbd(0x177)]);_0x255241&&$gameSwitches['setValue'](_0x255241,!!_0x15fee6);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x431),_0x2eb47f=>{const _0xbb2605=_0x1e9303;VisuMZ[_0xbb2605(0x1d3)](_0x2eb47f,_0x2eb47f);const _0x5f5a44=$gameTemp[_0xbb2605(0x2c5)](),_0x2b21bf={'template':_0x2eb47f[_0xbb2605(0x20f)],'mapId':_0x2eb47f[_0xbb2605(0xbb)]||$gameMap[_0xbb2605(0x4a1)](),'eventId':_0x2eb47f[_0xbb2605(0x4ed)]||_0x5f5a44[_0xbb2605(0x1c6)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x2eb47f[_0xbb2605(0xd7)],'spawnEventId':$gameMap[_0xbb2605(0x329)][_0xbb2605(0x411)]+0x3e8},_0x357d29=_0x2eb47f['SuccessSwitchId']||0x0;if(!VisuMZ['PreloadedMaps'][_0x2b21bf[_0xbb2605(0x4a1)]]&&_0x2b21bf[_0xbb2605(0x4a1)]!==$gameMap[_0xbb2605(0x4a1)]()){let _0x592ea4=_0xbb2605(0x3c8)['format'](_0x2b21bf[_0xbb2605(0x4a1)]);_0x592ea4+=_0xbb2605(0x163),_0x592ea4+=_0xbb2605(0x4ab),_0x592ea4+=_0xbb2605(0x124),_0x592ea4+=_0xbb2605(0x362)[_0xbb2605(0x29a)](_0x2b21bf[_0xbb2605(0x4a1)]),alert(_0x592ea4);return;}const _0x42ffa1=$gameMap[_0xbb2605(0x14f)](_0x2b21bf,_0x2eb47f['Region'],_0x2eb47f[_0xbb2605(0x10e)],_0x2eb47f[_0xbb2605(0x177)]);_0x357d29&&$gameSwitches[_0xbb2605(0x48e)](_0x357d29,!!_0x42ffa1);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x162),_0x4456b0=>{const _0x5196d9=_0x1e9303;VisuMZ[_0x5196d9(0x1d3)](_0x4456b0,_0x4456b0);const _0x2e5136=$gameTemp[_0x5196d9(0x2c5)](),_0x240592={'template':_0x4456b0['TemplateName'],'mapId':_0x4456b0[_0x5196d9(0xbb)]||$gameMap[_0x5196d9(0x4a1)](),'eventId':_0x4456b0['EventId']||_0x2e5136[_0x5196d9(0x1c6)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x4456b0['Preserve'],'spawnEventId':$gameMap[_0x5196d9(0x329)][_0x5196d9(0x411)]+0x3e8},_0x3d10fb=_0x4456b0[_0x5196d9(0x44a)]||0x0;if(!VisuMZ[_0x5196d9(0xcb)][_0x240592['mapId']]&&_0x240592[_0x5196d9(0x4a1)]!==$gameMap[_0x5196d9(0x4a1)]()){let _0x23aa09=_0x5196d9(0x3c8)[_0x5196d9(0x29a)](_0x240592[_0x5196d9(0x4a1)]);_0x23aa09+=_0x5196d9(0x163),_0x23aa09+=_0x5196d9(0x4ab),_0x23aa09+=_0x5196d9(0x124),_0x23aa09+=_0x5196d9(0x362)[_0x5196d9(0x29a)](_0x240592[_0x5196d9(0x4a1)]),alert(_0x23aa09);return;}const _0x364880=$gameMap[_0x5196d9(0xb4)](_0x240592,_0x4456b0['TerrainTags'],_0x4456b0['Collision'],_0x4456b0[_0x5196d9(0x177)]);_0x3d10fb&&$gameSwitches[_0x5196d9(0x48e)](_0x3d10fb,!!_0x364880);}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],'SpawnEventDespawnEventID',_0x20939c=>{const _0x41c7fe=_0x1e9303;VisuMZ['ConvertParams'](_0x20939c,_0x20939c);const _0x5b3280=$gameTemp[_0x41c7fe(0x2c5)]();$gameMap[_0x41c7fe(0x16e)](_0x20939c[_0x41c7fe(0x148)]||_0x5b3280[_0x41c7fe(0x1c6)]());}),PluginManager[_0x1e9303(0x2de)](pluginData[_0x1e9303(0x3d2)],_0x1e9303(0x3eb),_0x234f6f=>{const _0x40604e=_0x1e9303;VisuMZ['ConvertParams'](_0x234f6f,_0x234f6f);const _0x9ccc01=_0x234f6f[_0x40604e(0x41a)],_0x18a874=_0x234f6f[_0x40604e(0x173)];$gameMap[_0x40604e(0x3de)](_0x9ccc01,_0x18a874);}),PluginManager[_0x1e9303(0x2de)](pluginData['name'],_0x1e9303(0x347),_0x48a5aa=>{const _0x4b46e0=_0x1e9303;VisuMZ[_0x4b46e0(0x1d3)](_0x48a5aa,_0x48a5aa),$gameMap['despawnRegions'](_0x48a5aa[_0x4b46e0(0x385)]);}),PluginManager[_0x1e9303(0x2de)](pluginData['name'],_0x1e9303(0x40b),_0x9470b1=>{const _0x1f93c7=_0x1e9303;VisuMZ[_0x1f93c7(0x1d3)](_0x9470b1,_0x9470b1),$gameMap[_0x1f93c7(0x118)](_0x9470b1[_0x1f93c7(0x3e9)]);}),PluginManager[_0x1e9303(0x2de)](pluginData['name'],'SpawnEventDespawnEverything',_0x531de6=>{const _0x589808=_0x1e9303;VisuMZ[_0x589808(0x1d3)](_0x531de6,_0x531de6),$gameMap['despawnEverything']();}),VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x24e)]=Scene_Boot['prototype']['onDatabaseLoaded'],Scene_Boot['prototype'][_0x1e9303(0x2cc)]=function(){const _0x4c6142=_0x1e9303;VisuMZ['EventsMoveCore'][_0x4c6142(0x24e)][_0x4c6142(0x1ae)](this),this['process_VisuMZ_EventsMoveCore_LoadTemplateMaps'](),this['process_VisuMZ_EventsMoveCore_Switches_Variables']();if(VisuMZ['EventsMoveCore'][_0x4c6142(0x283)])VisuMZ[_0x4c6142(0x2bb)][_0x4c6142(0x283)]['initialize']();},VisuMZ[_0x1e9303(0xcb)]=[],VisuMZ[_0x1e9303(0x1a4)]={},Scene_Boot[_0x1e9303(0xad)][_0x1e9303(0x28e)]=function(){const _0x1b0008=_0x1e9303;if(DataManager[_0x1b0008(0x383)]()||DataManager[_0x1b0008(0x29c)]())return;const _0x3bd4f8=VisuMZ[_0x1b0008(0x2bb)]['Settings'][_0x1b0008(0x41b)],_0x1daffe=_0x3bd4f8[_0x1b0008(0x1e5)]['slice'](0x0);for(const _0x388b7c of _0x3bd4f8[_0x1b0008(0x1c9)]){_0x388b7c[_0x1b0008(0x207)]=_0x388b7c[_0x1b0008(0x207)][_0x1b0008(0x3dc)]()[_0x1b0008(0x203)](),VisuMZ['EventTemplates'][_0x388b7c[_0x1b0008(0x207)]]=_0x388b7c;if(!_0x1daffe['includes'](_0x388b7c[_0x1b0008(0x2fd)]))_0x1daffe[_0x1b0008(0x443)](_0x388b7c[_0x1b0008(0x2fd)]);}for(const _0x427210 of _0x1daffe){if(VisuMZ[_0x1b0008(0xcb)][_0x427210])continue;const _0x1619a4=_0x1b0008(0x49a)[_0x1b0008(0x29a)](_0x427210[_0x1b0008(0x1c5)](0x3)),_0x58f6bf=_0x1b0008(0x206)[_0x1b0008(0x29a)](_0x427210);DataManager[_0x1b0008(0x3b6)](_0x58f6bf,_0x1619a4),setTimeout(this[_0x1b0008(0x199)]['bind'](this,_0x427210,_0x58f6bf),0x64);}},Scene_Boot[_0x1e9303(0xad)][_0x1e9303(0x199)]=function(_0x1006b1,_0x406a87){const _0x112e4a=_0x1e9303;window[_0x406a87]?(VisuMZ['PreloadedMaps'][_0x1006b1]=window[_0x406a87],window[_0x406a87]=undefined):setTimeout(this['VisuMZ_Setup_Preload_Map'][_0x112e4a(0x388)](this,_0x1006b1,_0x406a87),0x64);},VisuMZ[_0x1e9303(0x18e)]=[],VisuMZ[_0x1e9303(0xdc)]=[],VisuMZ[_0x1e9303(0x204)]=[],VisuMZ[_0x1e9303(0x307)]=[],VisuMZ[_0x1e9303(0x15b)]=[],VisuMZ[_0x1e9303(0xc9)]=[],Scene_Boot['prototype'][_0x1e9303(0x269)]=function(){const _0x4c9cbe=_0x1e9303;for(let _0x4712c4=0x1;_0x4712c4<$dataSystem[_0x4c9cbe(0x318)][_0x4c9cbe(0x411)];_0x4712c4++){if($dataSystem['switches'][_0x4712c4]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x4c9cbe(0x18e)]['push'](_0x4712c4);if($dataSystem[_0x4c9cbe(0x318)][_0x4712c4][_0x4c9cbe(0xe9)](/<SELF>/i))VisuMZ['SelfSwitches'][_0x4c9cbe(0x443)](_0x4712c4);if($dataSystem['switches'][_0x4712c4][_0x4c9cbe(0xe9)](/<MAP>/i))VisuMZ['MapSwitches']['push'](_0x4712c4);}for(let _0x10ae86=0x1;_0x10ae86<$dataSystem['variables'][_0x4c9cbe(0x411)];_0x10ae86++){if($dataSystem[_0x4c9cbe(0x33a)][_0x10ae86][_0x4c9cbe(0xe9)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x4c9cbe(0x307)][_0x4c9cbe(0x443)](_0x10ae86);if($dataSystem['variables'][_0x10ae86][_0x4c9cbe(0xe9)](/<SELF>/i))VisuMZ[_0x4c9cbe(0x15b)][_0x4c9cbe(0x443)](_0x10ae86);if($dataSystem['variables'][_0x10ae86][_0x4c9cbe(0xe9)](/<MAP>/i))VisuMZ[_0x4c9cbe(0xc9)][_0x4c9cbe(0x443)](_0x10ae86);}},VisuMZ[_0x1e9303(0x2bb)]['CustomPageConditions']={},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x283)]['initialize']=function(){const _0x328217=_0x1e9303;this[_0x328217(0x1f0)]=new Game_CPCInterpreter(),this[_0x328217(0x1ff)]();},VisuMZ['EventsMoveCore'][_0x1e9303(0x283)][_0x1e9303(0x1ff)]=function(){const _0x33f847=_0x1e9303;this[_0x33f847(0x2c1)]=[];for(const _0x157311 of $dataCommonEvents){if(!_0x157311)continue;VisuMZ['EventsMoveCore']['CustomPageConditions']['loadCPC'](_0x157311);if(_0x157311['CPC'][_0x33f847(0x411)]>0x0)this[_0x33f847(0x2c1)][_0x33f847(0x443)](_0x157311['id']);}},VisuMZ['EventsMoveCore'][_0x1e9303(0x283)]['metCPC']=function(_0x34299d,_0x52d0d0,_0x175c69){const _0x52f22d=_0x1e9303;return this[_0x52f22d(0x1f0)][_0x52f22d(0x324)](_0x34299d,_0x52d0d0),_0x175c69?this[_0x52f22d(0x1f0)][_0x52f22d(0x212)](_0x175c69):this[_0x52f22d(0x1f0)][_0x52f22d(0x305)](),this[_0x52f22d(0x1f0)][_0x52f22d(0x4ca)];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x283)][_0x1e9303(0x37e)]=function(_0x139eb7){const _0x19cd48=_0x1e9303;let _0x33f5a7=![];_0x139eb7[_0x19cd48(0x3d8)]=[];for(const _0xd237b4 of _0x139eb7['list']){if([0x6c,0x198][_0x19cd48(0x224)](_0xd237b4[_0x19cd48(0x4e7)])){const _0x202144=_0xd237b4[_0x19cd48(0x41c)][0x0];if(_0x202144['match'](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x33f5a7=!![];else _0x202144[_0x19cd48(0xe9)](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x33f5a7=![]);}_0x33f5a7&&_0x139eb7[_0x19cd48(0x3d8)][_0x19cd48(0x443)](_0xd237b4);}},getSelfSwitchValue=function(_0x4b29a1,_0x30ccc3,_0x3a982b){const _0x534d2b=_0x1e9303;let _0x1cf56a=[_0x4b29a1,_0x30ccc3,_0x534d2b(0x449)[_0x534d2b(0x29a)](_0x3a982b)];return typeof _0x3a982b==='string'&&(_0x1cf56a=[_0x4b29a1,_0x30ccc3,_0x3a982b[_0x534d2b(0x3dc)]()[_0x534d2b(0x203)]()]),$gameSelfSwitches[_0x534d2b(0x43b)](_0x1cf56a);},getMapSwitchValue=function(_0x11c3c5,_0x18cc68){const _0x9bd7a3=_0x1e9303;let _0x190179=[0x0,0x0,_0x9bd7a3(0x36d)[_0x9bd7a3(0x29a)](_0x11c3c5,_0x18cc68)];return $gameSelfSwitches['value'](_0x190179);},getMapVariableValue=function(_0x508cb1,_0x200f51){const _0x1d22d1=_0x1e9303;let _0x1ff057=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'[_0x1d22d1(0x29a)](_0x508cb1,_0x200f51)];return $gameSelfSwitches[_0x1d22d1(0x43b)](_0x1ff057);},getSelfVariableValue=function(_0x20eb3b,_0x1ecaee,_0x59c16c){const _0x327bc5=_0x1e9303,_0x17dcbc=[_0x20eb3b,_0x1ecaee,_0x327bc5(0x202)[_0x327bc5(0x29a)](_0x59c16c)];return $gameSelfSwitches['value'](_0x17dcbc);},setSelfSwitchValue=function(_0x21d89b,_0x7a72ca,_0x3448b3,_0x25e7bd){const _0xb32a9a=_0x1e9303;let _0x48b5ba=[_0x21d89b,_0x7a72ca,_0xb32a9a(0x449)[_0xb32a9a(0x29a)](_0x3448b3)];typeof _0x3448b3===_0xb32a9a(0x1e1)&&(_0x48b5ba=[_0x21d89b,_0x7a72ca,_0x3448b3['toUpperCase']()[_0xb32a9a(0x203)]()]),$gameSelfSwitches['setValue'](_0x48b5ba,_0x25e7bd);},setSelfVariableValue=function(_0x57a118,_0x51815d,_0x57dcd7,_0xeae967){const _0x12533f=_0x1e9303,_0x553f9a=[_0x57a118,_0x51815d,_0x12533f(0x202)[_0x12533f(0x29a)](_0x57dcd7)];$gameSelfSwitches[_0x12533f(0x48e)](_0x553f9a,_0xeae967);},setMapSwitchValue=function(_0xa5823e,_0x1cc922,_0x195709){const _0x432685=_0x1e9303;let _0x4f4f02=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'[_0x432685(0x29a)](_0xa5823e,_0x1cc922)];$gameSelfSwitches['setValue'](_0x4f4f02,_0x195709);},setMapVariableValue=function(_0x360827,_0x4bf903,_0x1bba9a){let _0x5d42c6=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'['format'](_0x360827,_0x4bf903)];$gameSelfSwitches['setValue'](_0x5d42c6,_0x1bba9a);},DataManager[_0x1e9303(0x487)]=function(_0x201e28){const _0x349509=_0x1e9303;if(SceneManager[_0x349509(0x238)][_0x349509(0x28d)]===Scene_Debug)return![];return VisuMZ[_0x349509(0x18e)][_0x349509(0x224)](_0x201e28);},DataManager[_0x1e9303(0xbd)]=function(_0xa270a8){const _0xb62001=_0x1e9303;if(SceneManager[_0xb62001(0x238)][_0xb62001(0x28d)]===Scene_Debug)return![];return VisuMZ[_0xb62001(0x307)][_0xb62001(0x224)](_0xa270a8);},DataManager['isSelfSwitch']=function(_0x318059){const _0x4e3d8f=_0x1e9303;if(SceneManager[_0x4e3d8f(0x238)]['constructor']===Scene_Debug)return![];return VisuMZ['SelfSwitches'][_0x4e3d8f(0x224)](_0x318059);},DataManager[_0x1e9303(0x3e1)]=function(_0x1499cc){const _0x1d2958=_0x1e9303;if(SceneManager[_0x1d2958(0x238)][_0x1d2958(0x28d)]===Scene_Debug)return![];return VisuMZ[_0x1d2958(0x15b)]['includes'](_0x1499cc);},DataManager[_0x1e9303(0x193)]=function(_0x59d513){const _0x1ebb47=_0x1e9303;if(BattleManager['isBattleTest']())return![];return VisuMZ[_0x1ebb47(0x204)]['includes'](_0x59d513);},DataManager[_0x1e9303(0xed)]=function(_0x28e266){const _0x123d02=_0x1e9303;if(BattleManager[_0x123d02(0x383)]())return![];return VisuMZ[_0x123d02(0xc9)][_0x123d02(0x224)](_0x28e266);},SceneManager['isSceneMap']=function(){const _0xe566e7=_0x1e9303;return this['_scene']&&this[_0xe566e7(0x238)][_0xe566e7(0x28d)]===Scene_Map;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x1f8)]=Game_Temp[_0x1e9303(0xad)][_0x1e9303(0x435)],Game_Temp[_0x1e9303(0xad)]['setDestination']=function(_0x2edbfc,_0x19e9b4){const _0x243331=_0x1e9303;if(this[_0x243331(0x35e)](_0x2edbfc,_0x19e9b4))return;VisuMZ[_0x243331(0x2bb)][_0x243331(0x1f8)]['call'](this,_0x2edbfc,_0x19e9b4);},Game_Temp[_0x1e9303(0xad)][_0x1e9303(0x35e)]=function(_0x3a3734,_0xf6bdf7){const _0xf66d98=_0x1e9303,_0x34494f=$gameMap[_0xf66d98(0x237)](_0x3a3734,_0xf6bdf7);for(const _0x262cc9 of _0x34494f){if(_0x262cc9&&_0x262cc9['hasClickTrigger']())return _0x262cc9[_0xf66d98(0x455)](),!![];}return TouchInput[_0xf66d98(0x2ab)]()&&_0x34494f[_0xf66d98(0x411)]>0x0&&TouchInput['clear'](),![];},Game_Temp['prototype'][_0x1e9303(0x40a)]=function(_0x2c0118){const _0x1badd0=_0x1e9303;this[_0x1badd0(0x205)]=_0x2c0118;},Game_Temp[_0x1e9303(0xad)][_0x1e9303(0x2c5)]=function(){return this['_lastPluginCommandInterpreter'];},Game_Temp['prototype']['registerSelfTarget']=function(_0x368757){this['_selfTarget']=_0x368757;},Game_Temp[_0x1e9303(0xad)][_0x1e9303(0x19f)]=function(){const _0x3d96d4=_0x1e9303;this[_0x3d96d4(0x297)]=undefined;},Game_Temp[_0x1e9303(0xad)][_0x1e9303(0x41e)]=function(){const _0x188526=_0x1e9303;return this[_0x188526(0x297)];},VisuMZ['EventsMoveCore'][_0x1e9303(0x4ee)]=Game_System[_0x1e9303(0xad)][_0x1e9303(0x30c)],Game_System[_0x1e9303(0xad)][_0x1e9303(0x30c)]=function(){const _0x520004=_0x1e9303;VisuMZ[_0x520004(0x2bb)]['Game_System_initialize']['call'](this),this[_0x520004(0x38a)](),this[_0x520004(0x22e)]();},Game_System[_0x1e9303(0xad)]['initEventsMoveCore']=function(){const _0x614770=_0x1e9303;this[_0x614770(0x22a)]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this['_EventIcons']={},this['_MapSpawnedEventData']=[],this[_0x614770(0x186)]={},this[_0x614770(0x337)]={},this[_0x614770(0x366)]=![],this[_0x614770(0x231)]='default';},Game_System[_0x1e9303(0xad)]['isDashingEnabled']=function(){const _0x52bffc=_0x1e9303;if(this['_EventsMoveCoreSettings']===undefined)this[_0x52bffc(0x38a)]();if(this[_0x52bffc(0x22a)]['DashingEnable']===undefined)this[_0x52bffc(0x38a)]();return this[_0x52bffc(0x22a)][_0x52bffc(0x117)];},Game_System[_0x1e9303(0xad)][_0x1e9303(0x43c)]=function(_0x44ae73){const _0x3fc7bd=_0x1e9303;if(this[_0x3fc7bd(0x22a)]===undefined)this[_0x3fc7bd(0x38a)]();if(this[_0x3fc7bd(0x22a)][_0x3fc7bd(0x117)]===undefined)this[_0x3fc7bd(0x38a)]();this[_0x3fc7bd(0x22a)]['DashingEnable']=_0x44ae73;},Game_System['prototype']['isAllowEventAutoMovement']=function(){const _0x4985ae=_0x1e9303;if(this[_0x4985ae(0x22a)]===undefined)this[_0x4985ae(0x38a)]();if(this['_EventsMoveCoreSettings'][_0x4985ae(0x1de)]===undefined)this[_0x4985ae(0x38a)]();return this[_0x4985ae(0x22a)][_0x4985ae(0x1de)];},Game_System[_0x1e9303(0xad)][_0x1e9303(0x1f5)]=function(_0x5bad46){const _0x44ef68=_0x1e9303;if(this['_EventsMoveCoreSettings']===undefined)this[_0x44ef68(0x38a)]();if(this[_0x44ef68(0x22a)][_0x44ef68(0x1de)]===undefined)this[_0x44ef68(0x38a)]();this[_0x44ef68(0x22a)]['EventAutoMovement']=_0x5bad46;},Game_System[_0x1e9303(0xad)]['eventLabelsVisible']=function(){const _0x299e03=_0x1e9303;if(this[_0x299e03(0x22a)]===undefined)this['initEventsMoveCore']();if(this[_0x299e03(0x22a)]['VisibleEventLabels']===undefined)this['initEventsMoveCore']();return this[_0x299e03(0x22a)][_0x299e03(0x2a4)];},Game_System['prototype']['setEventLabelsVisible']=function(_0x5b37db){const _0xa8813d=_0x1e9303;if(this['_EventsMoveCoreSettings']===undefined)this[_0xa8813d(0x38a)]();if(this[_0xa8813d(0x22a)][_0xa8813d(0x2a4)]===undefined)this[_0xa8813d(0x38a)]();this['_EventsMoveCoreSettings']['VisibleEventLabels']=_0x5b37db;},Game_System[_0x1e9303(0xad)][_0x1e9303(0x436)]=function(){const _0x1c8bd5=_0x1e9303;return this[_0x1c8bd5(0x366)]===undefined&&(this[_0x1c8bd5(0x366)]=![]),this['_DisablePlayerControl'];},Game_System['prototype']['setPlayerControlDisable']=function(_0x55fedb){const _0xd16b60=_0x1e9303;this[_0xd16b60(0x366)]=_0x55fedb;},Game_System['prototype']['getPlayerDiagonalSetting']=function(){return this['_PlayerDiagonalSetting'];},Game_System[_0x1e9303(0xad)][_0x1e9303(0x2d0)]=function(_0x562421){const _0x4291bd=_0x1e9303;this[_0x4291bd(0x231)]=String(_0x562421)[_0x4291bd(0x4a5)]()['trim']();},Game_System['prototype'][_0x1e9303(0x16a)]=function(_0x6dcdb8){const _0x6a3846=_0x1e9303;if(this['_EventIcons']===undefined)this[_0x6a3846(0x38a)]();if(!_0x6dcdb8)return null;if(_0x6dcdb8===$gamePlayer)return this[_0x6a3846(0x2d7)][_0x6a3846(0x221)];else{const _0x3d31f7=VisuMZ[_0x6a3846(0x2bb)][_0x6a3846(0x27e)],_0x498fa8=_0x6a3846(0x3d4)[_0x6a3846(0x29a)](_0x6dcdb8['_mapId'],_0x6dcdb8[_0x6a3846(0x27a)]);return this[_0x6a3846(0x2d7)][_0x498fa8]=this[_0x6a3846(0x2d7)][_0x498fa8]||{'iconIndex':0x0,'bufferX':_0x3d31f7[_0x6a3846(0xd1)]['BufferX'],'bufferY':_0x3d31f7['Icon'][_0x6a3846(0x160)],'blendMode':_0x3d31f7[_0x6a3846(0xd1)]['BlendMode']},this[_0x6a3846(0x2d7)][_0x498fa8];}},Game_System[_0x1e9303(0xad)][_0x1e9303(0x424)]=function(_0x5e4595,_0x3e606a,_0x4b3d88,_0x4b6b73,_0x2455d7){const _0x103c39=_0x1e9303;if(this[_0x103c39(0x2d7)]===undefined)this['initEventsMoveCore']();const _0x2acfbb=_0x5e4595===$gamePlayer?_0x103c39(0x221):_0x103c39(0x3d4)['format'](_0x5e4595[_0x103c39(0x219)],_0x5e4595[_0x103c39(0x27a)]);this[_0x103c39(0x2d7)][_0x2acfbb]={'iconIndex':_0x3e606a,'bufferX':_0x4b3d88,'bufferY':_0x4b6b73,'blendMode':_0x2455d7};},Game_System['prototype'][_0x1e9303(0x13a)]=function(_0x310560,_0xddc812,_0x488849,_0x4b8abb,_0x4d2cf1,_0x5e7902){const _0xec4dce=_0x1e9303;if(this[_0xec4dce(0x2d7)]===undefined)this['initEventsMoveCore']();const _0x182b2c=_0xec4dce(0x3d4)[_0xec4dce(0x29a)](_0x310560,_0xddc812);this['_EventIcons'][_0x182b2c]={'iconIndex':_0x488849,'bufferX':_0x4b8abb,'bufferY':_0x4d2cf1,'blendMode':_0x5e7902};},Game_System[_0x1e9303(0xad)][_0x1e9303(0x150)]=function(_0x36fc4a){const _0x9151c0=_0x1e9303;if(this[_0x9151c0(0x2d7)]===undefined)this[_0x9151c0(0x38a)]();if(!_0x36fc4a)return null;_0x36fc4a===$gamePlayer?delete this[_0x9151c0(0x2d7)]['Player']:this[_0x9151c0(0x473)](_0x36fc4a[_0x9151c0(0x219)],_0x36fc4a[_0x9151c0(0x27a)]);},Game_System['prototype']['deleteIconsOnEventsDataKey']=function(_0x2503af,_0x2b9e13){if(this['_EventIcons']===undefined)this['initEventsMoveCore']();const _0x4fa8e2='Map%1-Event%2'['format'](_0x2503af,_0x2b9e13);delete this['_EventIcons'][_0x4fa8e2];},Game_System[_0x1e9303(0xad)][_0x1e9303(0x248)]=function(_0x4971b6){const _0x4437dc=_0x1e9303;if(this[_0x4437dc(0x337)]===undefined)this[_0x4437dc(0x38a)]();if(!_0x4971b6)return null;const _0x558ab2=_0x4437dc(0x3d4)[_0x4437dc(0x29a)](_0x4971b6[_0x4437dc(0x219)],_0x4971b6[_0x4437dc(0x27a)]);return this[_0x4437dc(0x337)][_0x558ab2];},Game_System['prototype'][_0x1e9303(0x15f)]=function(_0x34061e){const _0x444c88=_0x1e9303;if(this[_0x444c88(0x337)]===undefined)this[_0x444c88(0x38a)]();if(!_0x34061e)return;const _0x2b36de=_0x444c88(0x3d4)[_0x444c88(0x29a)](_0x34061e[_0x444c88(0x219)],_0x34061e['_eventId']);this[_0x444c88(0x337)][_0x2b36de]={'direction':_0x34061e[_0x444c88(0x42d)](),'x':Math['round'](_0x34061e['x']),'y':Math[_0x444c88(0x460)](_0x34061e['y']),'pageIndex':_0x34061e['_pageIndex'],'moveRouteIndex':_0x34061e['_moveRouteIndex']};},Game_System[_0x1e9303(0xad)][_0x1e9303(0x453)]=function(_0x3c4958){const _0x507233=_0x1e9303;if(this[_0x507233(0x337)]===undefined)this['initEventsMoveCore']();if(!_0x3c4958)return;this[_0x507233(0x109)](_0x3c4958[_0x507233(0x219)],_0x3c4958[_0x507233(0x27a)]);},Game_System[_0x1e9303(0xad)][_0x1e9303(0x109)]=function(_0x98d74c,_0x463d68){const _0x15cc24=_0x1e9303;if(this['_SavedEventLocations']===undefined)this[_0x15cc24(0x38a)]();const _0x2f6e2c='Map%1-Event%2'['format'](_0x98d74c,_0x463d68);delete this['_SavedEventLocations'][_0x2f6e2c];},Game_System[_0x1e9303(0xad)][_0x1e9303(0x3f6)]=function(_0x30b36d,_0x8c285f,_0x38d25e,_0x41e197,_0x2d3e40,_0x4b3b2f,_0x5de4a0){const _0x519b7e=_0x1e9303;if(this[_0x519b7e(0x337)]===undefined)this[_0x519b7e(0x38a)]();const _0x2c71b8='Map%1-Event%2'[_0x519b7e(0x29a)](_0x30b36d,_0x8c285f);this[_0x519b7e(0x337)][_0x2c71b8]={'direction':_0x2d3e40,'x':Math['round'](_0x38d25e),'y':Math[_0x519b7e(0x460)](_0x41e197),'pageIndex':_0x4b3b2f,'moveRouteIndex':_0x5de4a0};},Game_System[_0x1e9303(0xad)]['getPreservedMorphEventData']=function(_0x1dae9e){const _0x213a7b=_0x1e9303;if(this['_PreservedEventMorphData']===undefined)this[_0x213a7b(0x38a)]();if(!_0x1dae9e)return;const _0x207d59=_0x213a7b(0x3d4)[_0x213a7b(0x29a)](_0x1dae9e[_0x213a7b(0x219)],_0x1dae9e[_0x213a7b(0x27a)]);return this[_0x213a7b(0x186)][_0x207d59];},Game_System[_0x1e9303(0xad)][_0x1e9303(0x418)]=function(_0xab1015,_0x12647f,_0x32e6f1,_0x55762a,_0x24a5cf){const _0x1d71ec=_0x1e9303;if(this[_0x1d71ec(0x186)]===undefined)this['initEventsMoveCore']();const _0x56555c='Map%1-Event%2'['format'](_0xab1015,_0x12647f);this[_0x1d71ec(0x186)][_0x56555c]={'template':_0x32e6f1,'mapId':_0x55762a,'eventId':_0x24a5cf};},Game_System[_0x1e9303(0xad)][_0x1e9303(0x3a8)]=function(_0x563b08,_0x4f1687){const _0x2db984=_0x1e9303;if(this[_0x2db984(0x186)]===undefined)this['initEventsMoveCore']();const _0x151e10=_0x2db984(0x3d4)['format'](_0x563b08,_0x4f1687);delete this[_0x2db984(0x186)][_0x151e10];},Game_System[_0x1e9303(0xad)][_0x1e9303(0x2db)]=function(_0x5194de){const _0x5c16ba=_0x1e9303;if(this[_0x5c16ba(0x257)]===undefined)this[_0x5c16ba(0x38a)]();return this['_MapSpawnedEventData'][_0x5194de]=this[_0x5c16ba(0x257)][_0x5194de]||[],this['_MapSpawnedEventData'][_0x5194de];},Game_System[_0x1e9303(0xad)][_0x1e9303(0x352)]=function(_0x21c319){const _0x10e7d4=_0x1e9303,_0x52f73e=this['getMapSpawnedEventData'](_0x21c319);for(const _0x585e93 of _0x52f73e){if(!_0x585e93)continue;if(_0x585e93[_0x10e7d4(0xf1)])continue;const _0x2e3b7f=_0x52f73e[_0x10e7d4(0x255)](_0x585e93);_0x52f73e[_0x2e3b7f]=null;}},Game_System[_0x1e9303(0xad)][_0x1e9303(0x22e)]=function(){const _0x269b6b=_0x1e9303;this[_0x269b6b(0x2f7)]=0x0,this[_0x269b6b(0x21a)]=![];},Game_System[_0x1e9303(0xad)][_0x1e9303(0x499)]=function(){const _0x4c4e90=_0x1e9303;if(this[_0x4c4e90(0x2f7)]===undefined)this[_0x4c4e90(0x22e)]();return this[_0x4c4e90(0x2f7)];},Game_System[_0x1e9303(0xad)][_0x1e9303(0xdd)]=function(_0x594af3){const _0x16a15b=_0x1e9303;if(this[_0x16a15b(0x2f7)]===undefined)this[_0x16a15b(0x22e)]();this[_0x16a15b(0x2f7)]=_0x594af3;;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x2bd)]=Game_Interpreter['prototype']['character'],Game_Interpreter['prototype'][_0x1e9303(0x20c)]=function(_0x4367b2){const _0x4954d6=_0x1e9303;if(!$gameParty[_0x4954d6(0x395)]()&&_0x4367b2<0x0){let _0x576690=$gameSystem['getControlledFollowerID']();if(_0x576690>0x0)return $gamePlayer[_0x4954d6(0x20e)]()[_0x4954d6(0x1cf)](_0x576690-0x1);}return VisuMZ['EventsMoveCore'][_0x4954d6(0x2bd)][_0x4954d6(0x1ae)](this,_0x4367b2);},Game_System[_0x1e9303(0xad)][_0x1e9303(0x3c7)]=function(){const _0x564d5a=_0x1e9303;if(this[_0x564d5a(0x21a)]===undefined)this[_0x564d5a(0x22e)]();return this[_0x564d5a(0x21a)];},Game_System[_0x1e9303(0xad)][_0x1e9303(0xc0)]=function(_0x4e639c){const _0x4f8300=_0x1e9303;if(this[_0x4f8300(0x21a)]===undefined)this['initFollowerController']();this[_0x4f8300(0x21a)]=_0x4e639c;;},VisuMZ[_0x1e9303(0x2bb)]['Game_Followers_jumpAll']=Game_Followers[_0x1e9303(0xad)][_0x1e9303(0x1fc)],Game_Followers[_0x1e9303(0xad)]['jumpAll']=function(){const _0xab69cd=_0x1e9303;if($gameSystem['isStopFollowerChasing']())return;VisuMZ[_0xab69cd(0x2bb)]['Game_Followers_jumpAll']['call'](this);},VisuMZ[_0x1e9303(0x2bb)]['Game_Timer_initialize']=Game_Timer[_0x1e9303(0xad)][_0x1e9303(0x30c)],Game_Timer['prototype']['initialize']=function(){const _0x152314=_0x1e9303;VisuMZ[_0x152314(0x2bb)][_0x152314(0xdb)]['call'](this),this[_0x152314(0x38a)]();},Game_Timer[_0x1e9303(0xad)][_0x1e9303(0x38a)]=function(){const _0x51c7a=_0x1e9303;this[_0x51c7a(0x13e)]=![],this['_speed']=-0x1,this[_0x51c7a(0x492)]=0x0;},Game_Timer[_0x1e9303(0xad)][_0x1e9303(0x18a)]=function(_0x3d774f){const _0x4ce305=_0x1e9303;if(!_0x3d774f)return;if(!this[_0x4ce305(0x3ec)])return;if(this[_0x4ce305(0x13e)])return;if(this[_0x4ce305(0x39f)]<=0x0)return;if(this[_0x4ce305(0x115)]===undefined)this[_0x4ce305(0x38a)]();this[_0x4ce305(0x39f)]+=this['_speed'],this[_0x4ce305(0x39f)]<=0x0&&this[_0x4ce305(0x442)]();},VisuMZ[_0x1e9303(0x2bb)]['Game_Timer_start']=Game_Timer[_0x1e9303(0xad)][_0x1e9303(0x43f)],Game_Timer['prototype'][_0x1e9303(0x43f)]=function(_0x56d154){const _0x53d0b0=_0x1e9303;VisuMZ[_0x53d0b0(0x2bb)][_0x53d0b0(0x266)][_0x53d0b0(0x1ae)](this,_0x56d154);if(this[_0x53d0b0(0x13e)]===undefined)this['initEventsMoveCore']();this[_0x53d0b0(0x13e)]=![];},VisuMZ['EventsMoveCore'][_0x1e9303(0xc3)]=Game_Timer['prototype'][_0x1e9303(0x158)],Game_Timer[_0x1e9303(0xad)][_0x1e9303(0x158)]=function(){const _0x3dde6f=_0x1e9303;VisuMZ[_0x3dde6f(0x2bb)][_0x3dde6f(0xc3)][_0x3dde6f(0x1ae)](this);if(this[_0x3dde6f(0x13e)]===undefined)this[_0x3dde6f(0x38a)]();this[_0x3dde6f(0x13e)]=![];},Game_Timer[_0x1e9303(0xad)][_0x1e9303(0x1cb)]=function(){const _0x19684f=_0x1e9303;if(this[_0x19684f(0x39f)]<=0x0)return;this['_paused']=!![],this[_0x19684f(0x3ec)]=!![];},Game_Timer[_0x1e9303(0xad)][_0x1e9303(0x4dc)]=function(){const _0x40193a=_0x1e9303;if(this[_0x40193a(0x39f)]<=0x0)return;this[_0x40193a(0x13e)]=![],this[_0x40193a(0x3ec)]=!![];},Game_Timer['prototype']['gainFrames']=function(_0x11493b){const _0x1fc36c=_0x1e9303;this[_0x1fc36c(0x39f)]=this[_0x1fc36c(0x39f)]||0x0,this[_0x1fc36c(0x39f)]+=_0x11493b,this['_working']=!![],this[_0x1fc36c(0x39f)]=Math['max'](0x1,this['_frames']);},Game_Timer[_0x1e9303(0xad)]['setFrames']=function(_0x5556f0){const _0x113085=_0x1e9303;this['_frames']=this['_frames']||0x0,this['_frames']=_0x5556f0,this[_0x113085(0x3ec)]=!![],this[_0x113085(0x39f)]=Math['max'](0x1,this[_0x113085(0x39f)]);},Game_Timer[_0x1e9303(0xad)][_0x1e9303(0x26d)]=function(_0x452a0e){const _0x5dae74=_0x1e9303;this[_0x5dae74(0x115)]=_0x452a0e,this[_0x5dae74(0x3ec)]=!![],_0x452a0e>0x0&&(this[_0x5dae74(0x39f)]=Math['max'](this[_0x5dae74(0x39f)],0x1));},Game_Timer[_0x1e9303(0xad)][_0x1e9303(0x278)]=function(_0x1b1f32){const _0x42de60=_0x1e9303;if(this[_0x42de60(0x492)]===undefined)this['initEventsMoveCore']();this[_0x42de60(0x492)]=_0x1b1f32;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x420)]=Game_Timer[_0x1e9303(0xad)]['onExpire'],Game_Timer[_0x1e9303(0xad)][_0x1e9303(0x442)]=function(){const _0x2b9194=_0x1e9303;if(this[_0x2b9194(0x492)]===undefined)this[_0x2b9194(0x38a)]();this[_0x2b9194(0x492)]?$gameTemp[_0x2b9194(0x358)](this[_0x2b9194(0x492)]):VisuMZ[_0x2b9194(0x2bb)][_0x2b9194(0x420)][_0x2b9194(0x1ae)](this);},VisuMZ[_0x1e9303(0x2bb)]['Game_Message_add']=Game_Message[_0x1e9303(0xad)][_0x1e9303(0x401)],Game_Message[_0x1e9303(0xad)][_0x1e9303(0x401)]=function(_0x4f55c9){const _0x1a05eb=_0x1e9303;VisuMZ[_0x1a05eb(0x2bb)]['Game_Message_add']['call'](this,_0x4f55c9),this[_0x1a05eb(0x142)]=$gameTemp[_0x1a05eb(0x41e)]();},Game_Message[_0x1e9303(0xad)][_0x1e9303(0x144)]=function(){const _0x369616=_0x1e9303;$gameTemp[_0x369616(0xb5)](this['_selfEvent']);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x268)]=Game_Switches[_0x1e9303(0xad)][_0x1e9303(0x43b)],Game_Switches[_0x1e9303(0xad)][_0x1e9303(0x43b)]=function(_0x55210a){const _0x3d397d=_0x1e9303;if(DataManager['isAdvancedSwitch'](_0x55210a))return!!this[_0x3d397d(0x2b8)](_0x55210a);else{if(DataManager[_0x3d397d(0x161)](_0x55210a))return!!this['selfValue'](_0x55210a);else return DataManager['isMapSwitch'](_0x55210a)?!!this[_0x3d397d(0x27f)](_0x55210a):VisuMZ[_0x3d397d(0x2bb)]['Game_Switches_value'][_0x3d397d(0x1ae)](this,_0x55210a);}},Game_Switches[_0x1e9303(0x2be)]={},Game_Switches[_0x1e9303(0xad)]['advancedValue']=function(_0x383126){const _0x8fa18c=_0x1e9303;if(!Game_Switches['advancedFunc'][_0x383126]){$dataSystem['switches'][_0x383126][_0x8fa18c(0xe9)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x5cbd13='return\x20%1'[_0x8fa18c(0x29a)](String(RegExp['$1']));Game_Switches[_0x8fa18c(0x2be)][_0x383126]=new Function(_0x8fa18c(0xc8),_0x5cbd13);}const _0x575cb3=$gameTemp[_0x8fa18c(0x41e)]()||this;return Game_Switches[_0x8fa18c(0x2be)][_0x383126][_0x8fa18c(0x1ae)](_0x575cb3,_0x383126);},Game_Switches[_0x1e9303(0xad)][_0x1e9303(0x110)]=function(_0xbe835c){const _0x149625=_0x1e9303,_0x5aac04=$gameTemp[_0x149625(0x41e)]()||this;if(_0x5aac04[_0x149625(0x28d)]!==Game_Event)return VisuMZ[_0x149625(0x2bb)][_0x149625(0x268)]['call'](this,_0xbe835c);else{const _0x479a21=[_0x5aac04[_0x149625(0x219)],_0x5aac04[_0x149625(0x27a)],'Self\x20Switch\x20%1'[_0x149625(0x29a)](_0xbe835c)];return $gameSelfSwitches[_0x149625(0x43b)](_0x479a21);}},Game_Switches[_0x1e9303(0xad)][_0x1e9303(0x27f)]=function(_0x5b57b7){const _0x20e327=_0x1e9303,_0x406876=$gameMap?$gameMap[_0x20e327(0x4a1)]():0x0,_0x25e21a=[0x0,0x0,_0x20e327(0x36d)['format'](_0x406876,_0x5b57b7)];return $gameSelfSwitches[_0x20e327(0x43b)](_0x25e21a);},VisuMZ[_0x1e9303(0x2bb)]['Game_Switches_setValue']=Game_Switches[_0x1e9303(0xad)][_0x1e9303(0x48e)],Game_Switches[_0x1e9303(0xad)]['setValue']=function(_0x10e090,_0x17ef26){const _0x550dee=_0x1e9303;if(DataManager[_0x550dee(0x161)](_0x10e090))this[_0x550dee(0x331)](_0x10e090,_0x17ef26);else DataManager[_0x550dee(0x193)](_0x10e090)?this['setMapValue'](_0x10e090,_0x17ef26):VisuMZ[_0x550dee(0x2bb)]['Game_Switches_setValue'][_0x550dee(0x1ae)](this,_0x10e090,_0x17ef26);},Game_Switches[_0x1e9303(0xad)]['setSelfValue']=function(_0xfcf555,_0x14061f){const _0x20873b=_0x1e9303,_0x4be232=$gameTemp[_0x20873b(0x41e)]()||this;if(_0x4be232[_0x20873b(0x28d)]!==Game_Event)VisuMZ[_0x20873b(0x2bb)][_0x20873b(0x4ce)]['call'](this,_0xfcf555,_0x14061f);else{const _0x18be30=[_0x4be232[_0x20873b(0x219)],_0x4be232['_eventId'],_0x20873b(0x449)['format'](_0xfcf555)];$gameSelfSwitches[_0x20873b(0x48e)](_0x18be30,_0x14061f);}},Game_Switches['prototype'][_0x1e9303(0x3f5)]=function(_0x1d4687,_0x2da8c9){const _0x55c7ca=_0x1e9303,_0x4b2a59=$gameMap?$gameMap[_0x55c7ca(0x4a1)]():0x0,_0x4e6767=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'[_0x55c7ca(0x29a)](_0x4b2a59,_0x1d4687)];return $gameSelfSwitches[_0x55c7ca(0x48e)](_0x4e6767,_0x2da8c9);},VisuMZ[_0x1e9303(0x2bb)]['Game_Variables_value']=Game_Variables[_0x1e9303(0xad)][_0x1e9303(0x43b)],Game_Variables[_0x1e9303(0xad)][_0x1e9303(0x43b)]=function(_0x31ad03){const _0x48be23=_0x1e9303;if(DataManager[_0x48be23(0xbd)](_0x31ad03))return this['advancedValue'](_0x31ad03);else{if(DataManager[_0x48be23(0x3e1)](_0x31ad03))return this[_0x48be23(0x110)](_0x31ad03);else return DataManager['isMapVariable'](_0x31ad03)?this[_0x48be23(0x27f)](_0x31ad03):VisuMZ[_0x48be23(0x2bb)]['Game_Variables_value'][_0x48be23(0x1ae)](this,_0x31ad03);}},Game_Variables['advancedFunc']={},Game_Variables['prototype'][_0x1e9303(0x2b8)]=function(_0x41517a){const _0x1a6cea=_0x1e9303;if(!Game_Variables['advancedFunc'][_0x41517a]){$dataSystem['variables'][_0x41517a][_0x1a6cea(0xe9)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x53763c=_0x1a6cea(0x17c)[_0x1a6cea(0x29a)](String(RegExp['$1']));Game_Variables[_0x1a6cea(0x2be)][_0x41517a]=new Function(_0x1a6cea(0x42b),_0x53763c);}const _0x448dc7=$gameTemp[_0x1a6cea(0x41e)]()||this;return Game_Variables[_0x1a6cea(0x2be)][_0x41517a][_0x1a6cea(0x1ae)](_0x448dc7,_0x41517a);},Game_Variables[_0x1e9303(0xad)][_0x1e9303(0x110)]=function(_0x430345){const _0x5ee66a=_0x1e9303,_0x118613=$gameTemp[_0x5ee66a(0x41e)]()||this;if(_0x118613[_0x5ee66a(0x28d)]!==Game_Event)return VisuMZ[_0x5ee66a(0x2bb)][_0x5ee66a(0x397)][_0x5ee66a(0x1ae)](this,_0x430345);else{const _0x36d732=[_0x118613[_0x5ee66a(0x219)],_0x118613[_0x5ee66a(0x27a)],_0x5ee66a(0x202)[_0x5ee66a(0x29a)](_0x430345)];return $gameSelfSwitches[_0x5ee66a(0x43b)](_0x36d732);}},Game_Variables[_0x1e9303(0xad)][_0x1e9303(0x27f)]=function(_0x434c57){const _0x4b76c6=_0x1e9303,_0x552a4a=$gameMap?$gameMap[_0x4b76c6(0x4a1)]():0x0,_0x15798a=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'['format'](_0x552a4a,_0x434c57)];return $gameSelfSwitches[_0x4b76c6(0x43b)](_0x15798a)||0x0;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x310)]=Game_Variables[_0x1e9303(0xad)]['setValue'],Game_Variables[_0x1e9303(0xad)][_0x1e9303(0x48e)]=function(_0x288659,_0x1a5545){const _0x22ac39=_0x1e9303;if(DataManager[_0x22ac39(0x3e1)](_0x288659))this[_0x22ac39(0x331)](_0x288659,_0x1a5545);else DataManager[_0x22ac39(0xed)](_0x288659)?this[_0x22ac39(0x3f5)](_0x288659,_0x1a5545):VisuMZ['EventsMoveCore'][_0x22ac39(0x310)][_0x22ac39(0x1ae)](this,_0x288659,_0x1a5545);},Game_Variables[_0x1e9303(0xad)][_0x1e9303(0x331)]=function(_0x28c3b2,_0x492e2b){const _0x433b49=_0x1e9303,_0x234bdd=$gameTemp[_0x433b49(0x41e)]()||this;if(_0x234bdd[_0x433b49(0x28d)]!==Game_Event)VisuMZ[_0x433b49(0x2bb)][_0x433b49(0x310)][_0x433b49(0x1ae)](this,_0x28c3b2,_0x492e2b);else{const _0x2ba79f=[_0x234bdd['_mapId'],_0x234bdd[_0x433b49(0x27a)],'Self\x20Variable\x20%1'[_0x433b49(0x29a)](_0x28c3b2)];$gameSelfSwitches[_0x433b49(0x48e)](_0x2ba79f,_0x492e2b);}},Game_Variables[_0x1e9303(0xad)][_0x1e9303(0x3f5)]=function(_0xbc52e4,_0x3d9a58){const _0x4ae139=_0x1e9303,_0x25dfaf=$gameMap?$gameMap[_0x4ae139(0x4a1)]():0x0,_0x1fd142=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'[_0x4ae139(0x29a)](_0x25dfaf,_0xbc52e4)];$gameSelfSwitches['setValue'](_0x1fd142,_0x3d9a58);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x360)]=Game_SelfSwitches[_0x1e9303(0xad)][_0x1e9303(0x43b)],Game_SelfSwitches[_0x1e9303(0xad)]['value']=function(_0xbd281e){const _0x1eadb8=_0x1e9303;if(_0xbd281e[0x2][_0x1eadb8(0xe9)](/(?:SELF|MAP)/i))return this[_0x1eadb8(0x110)](_0xbd281e);else{return VisuMZ[_0x1eadb8(0x2bb)][_0x1eadb8(0x360)][_0x1eadb8(0x1ae)](this,_0xbd281e);;}},Game_SelfSwitches[_0x1e9303(0xad)][_0x1e9303(0x110)]=function(_0xd7c819){const _0x45992a=_0x1e9303;return _0xd7c819[0x2][_0x45992a(0xe9)](/VAR/i)?this[_0x45992a(0x464)][_0xd7c819]||0x0:!!this['_data'][_0xd7c819];},VisuMZ['EventsMoveCore'][_0x1e9303(0x18c)]=Game_SelfSwitches[_0x1e9303(0xad)][_0x1e9303(0x48e)],Game_SelfSwitches[_0x1e9303(0xad)][_0x1e9303(0x48e)]=function(_0x3370b8,_0x288cb4){const _0x20de8d=_0x1e9303;_0x3370b8[0x2]['match'](/(?:SELF|MAP)/i)?this['setSelfValue'](_0x3370b8,_0x288cb4):VisuMZ[_0x20de8d(0x2bb)][_0x20de8d(0x18c)][_0x20de8d(0x1ae)](this,_0x3370b8,_0x288cb4);},Game_SelfSwitches[_0x1e9303(0xad)][_0x1e9303(0x331)]=function(_0x5ca23d,_0x323a02){const _0x43c7d4=_0x1e9303;this[_0x43c7d4(0x464)][_0x5ca23d]=_0x5ca23d[0x2][_0x43c7d4(0xe9)](/VAR/i)?_0x323a02:!!_0x323a02,this[_0x43c7d4(0xfe)]();},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x292)]=Scene_Map[_0x1e9303(0xad)][_0x1e9303(0x164)],Scene_Map[_0x1e9303(0xad)][_0x1e9303(0x164)]=function(){const _0x51326b=_0x1e9303;$gameMap['resetExitSelfSwitches'](),VisuMZ[_0x51326b(0x2bb)][_0x51326b(0x292)]['call'](this);},Game_Map['prototype'][_0x1e9303(0x478)]=function(){const _0x2074bc=_0x1e9303;this[_0x2074bc(0x1f3)]=this[_0x2074bc(0x4a1)](),this[_0x2074bc(0x240)]=undefined;const _0x1a6972=this[_0x2074bc(0x1a2)]();for(const _0x257ad0 of _0x1a6972){if(_0x257ad0)$gameSelfSwitches['resetSelfSwitchesForEvent'](_0x257ad0);}},Game_SelfSwitches[_0x1e9303(0xad)][_0x1e9303(0x2fa)]=function(_0x3704da){const _0x5f4603=_0x1e9303;if(!_0x3704da)return;if(!_0x3704da[_0x5f4603(0x4f1)]())return;const _0x1da194=_0x3704da[_0x5f4603(0x4f1)]()[_0x5f4603(0x2b5)]||'';if(_0x1da194['match'](/<(?:EXIT RESET|EXIT|TEMP|TEMPORARY) (?:SELF|SELF SWITCH|SELF SWITCHES|SELF DATA)>/i)){const _0x5c8966=_0x5f4603(0x494)[_0x5f4603(0x29a)]($gameMap[_0x5f4603(0x219)],_0x3704da[_0x5f4603(0x27a)]),_0x10957f=Object[_0x5f4603(0x370)](this[_0x5f4603(0x464)])[_0x5f4603(0x29e)](_0xe1dfa7=>_0xe1dfa7[_0x5f4603(0x126)](_0x5c8966));while(_0x10957f[_0x5f4603(0x411)]>0x0){const _0x11cfbd=_0x10957f[_0x5f4603(0x2ae)]();delete this[_0x5f4603(0x464)][_0x11cfbd];}}},Game_SelfSwitches['prototype']['resetSelfSwitchesForMap']=function(_0x35c3be){const _0x4cf983=_0x1e9303,_0x527a31='%1,'[_0x4cf983(0x29a)]($gameMap[_0x4cf983(0x219)]),_0x581084=Object[_0x4cf983(0x370)](this['_data'])[_0x4cf983(0x29e)](_0x198a9b=>_0x198a9b[_0x4cf983(0x126)](_0x527a31));while(_0x581084[_0x4cf983(0x411)]>0x0){const _0x1fe176=_0x581084['shift']();delete this[_0x4cf983(0x464)][_0x1fe176];}_0x35c3be===$gameMap[_0x4cf983(0x4a1)]()&&$gameMap[_0x4cf983(0x23f)]();},VisuMZ[_0x1e9303(0x2bb)]['Game_Enemy_meetsSwitchCondition']=Game_Enemy['prototype']['meetsSwitchCondition'],Game_Enemy['prototype'][_0x1e9303(0x140)]=function(_0x12ffad){const _0xc4c552=_0x1e9303;$gameTemp['registerSelfTarget'](this);const _0x4c2adb=VisuMZ[_0xc4c552(0x2bb)]['Game_Enemy_meetsSwitchCondition']['call'](this,_0x12ffad);return $gameTemp[_0xc4c552(0x19f)](),_0x4c2adb;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x378)]=Game_Troop[_0x1e9303(0xad)]['meetsConditions'],Game_Troop[_0x1e9303(0xad)][_0x1e9303(0x46a)]=function(_0x4a765d){const _0x2553e9=_0x1e9303;$gameTemp[_0x2553e9(0xb5)](this);const _0x3908ba=VisuMZ[_0x2553e9(0x2bb)][_0x2553e9(0x378)]['call'](this,_0x4a765d);return $gameTemp[_0x2553e9(0x19f)](),_0x3908ba;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0xd2)]=Game_Map[_0x1e9303(0xad)][_0x1e9303(0x324)],Game_Map[_0x1e9303(0xad)]['setup']=function(_0x565382){const _0x463cb3=_0x1e9303;this[_0x463cb3(0x352)](_0x565382),this['clearEventCache'](),VisuMZ['EventsMoveCore'][_0x463cb3(0xd2)][_0x463cb3(0x1ae)](this,_0x565382),this['clearEventCache'](),this['setupDiagonalSupport'](),this[_0x463cb3(0x3d6)](),this[_0x463cb3(0x129)](),this['setupSpawnedEvents'](),this['setupPlayerVisibilityOverrides'](),this['setupFollowerVisibilityOverrides'](),this['clearEventCache']();},VisuMZ[_0x1e9303(0x2bb)]['Game_Map_setupEvents']=Game_Map[_0x1e9303(0xad)][_0x1e9303(0x1b4)],Game_Map[_0x1e9303(0xad)][_0x1e9303(0x1b4)]=function(){const _0x2fb9ae=_0x1e9303;VisuMZ[_0x2fb9ae(0x2bb)][_0x2fb9ae(0x44d)][_0x2fb9ae(0x1ae)](this),this[_0x2fb9ae(0xf6)]();},Game_Map[_0x1e9303(0x195)]=0xc8,Game_Map['prototype'][_0x1e9303(0x1d8)]=function(){const _0x2cc3d4=_0x1e9303,_0x285666=Game_Map[_0x2cc3d4(0x195)];this['_eventOverload']=this[_0x2cc3d4(0x1a2)]()[_0x2cc3d4(0x411)]>_0x285666;if(this[_0x2cc3d4(0x28b)]&&$gameTemp['isPlaytest']()){}},Game_Map['prototype']['isEventOverloaded']=function(){const _0x1f6dbf=_0x1e9303;return this[_0x1f6dbf(0x28b)];},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x192)]=function(){const _0x44714f=_0x1e9303;this[_0x44714f(0x240)]=undefined;},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x1da)]=function(){const _0x32db95=_0x1e9303;this[_0x32db95(0xea)]=VisuMZ[_0x32db95(0x2bb)][_0x32db95(0x27e)][_0x32db95(0xfd)][_0x32db95(0x12e)];const _0x341db2=$dataMap[_0x32db95(0x2b5)]||'';if(_0x341db2['match'](/<DIAGONAL MOVEMENT: ON>/i))this[_0x32db95(0xea)]=!![];else _0x341db2[_0x32db95(0xe9)](/<DIAGONAL MOVEMENT: OFF>/i)&&(this[_0x32db95(0xea)]=![]);},Game_Map[_0x1e9303(0x259)]=VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x27e)][_0x1e9303(0xfd)][_0x1e9303(0x18b)]??![],Game_Map[_0x1e9303(0xad)][_0x1e9303(0xce)]=function(){const _0x2e9d0e=_0x1e9303;if(Utils[_0x2e9d0e(0x4e9)]()){if(!Game_Map['MOBILE_DIAGONAL_PATHFINDING'])return![];}const _0x434ff5=$gameSystem[_0x2e9d0e(0x35f)]();if(_0x434ff5==='enable')return!![];if(_0x434ff5==='disable')return![];if(this[_0x2e9d0e(0xea)]===undefined)this['setupDiagonalSupport']();return this[_0x2e9d0e(0xea)];},Game_Map[_0x1e9303(0xad)]['roundXWithDirection']=function(_0x14b7e2,_0x50770f){const _0x22911b=_0x1e9303;if([0x1,0x4,0x7][_0x22911b(0x224)](_0x50770f))_0x14b7e2-=0x1;if([0x3,0x6,0x9][_0x22911b(0x224)](_0x50770f))_0x14b7e2+=0x1;return this['roundX'](_0x14b7e2);},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x338)]=function(_0x414c3b,_0x47c5a0){const _0x2ca353=_0x1e9303;if([0x1,0x2,0x3][_0x2ca353(0x224)](_0x47c5a0))_0x414c3b+=0x1;if([0x7,0x8,0x9]['includes'](_0x47c5a0))_0x414c3b-=0x1;return this[_0x2ca353(0x3f8)](_0x414c3b);},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x209)]=function(_0x2a1490,_0x57041d,_0x4385be,_0x927dcf){const _0x2f50b5=_0x1e9303;return Math[_0x2f50b5(0xac)](Math['abs'](this[_0x2f50b5(0x2ff)](_0x2a1490,_0x4385be)),Math['abs'](this['deltaY'](_0x57041d,_0x927dcf)));},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x3d6)]=function(){const _0x16aab1=_0x1e9303,_0x47f987=VisuMZ[_0x16aab1(0x2bb)][_0x16aab1(0x27e)][_0x16aab1(0x385)],_0x5b922c={},_0x4198b4=['Allow',_0x16aab1(0x3b9),_0x16aab1(0x3d0)],_0x330403=[_0x16aab1(0x18d),'Walk',_0x16aab1(0x221),_0x16aab1(0x141),_0x16aab1(0x3e0),_0x16aab1(0x4bf),_0x16aab1(0x429),_0x16aab1(0x12f)];for(const _0xc9e17c of _0x4198b4){for(const _0x4618a2 of _0x330403){const _0x418398='%1%2'[_0x16aab1(0x29a)](_0x4618a2,_0xc9e17c);_0x47f987[_0x418398]&&(_0x5b922c[_0x418398]=_0x47f987[_0x418398][_0x16aab1(0x3ca)](0x0));}}const _0x508dd3=$dataMap[_0x16aab1(0x2b5)]||'',_0x50bcdf=_0x508dd3['match'](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x50bcdf)for(const _0x1cb3e6 of _0x50bcdf){_0x1cb3e6[_0x16aab1(0xe9)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x266a68=String(RegExp['$1'])['toLowerCase']()[_0x16aab1(0x203)](),_0x53dee8=String(RegExp['$2'])['toLowerCase']()[_0x16aab1(0x203)]();const _0x1d4fd6=JSON[_0x16aab1(0x325)]('['+RegExp['$3'][_0x16aab1(0xe9)](/\d+/g)+']');_0x266a68=_0x266a68['charAt'](0x0)[_0x16aab1(0x3dc)]()+_0x266a68[_0x16aab1(0x3ca)](0x1),_0x53dee8=_0x53dee8['charAt'](0x0)[_0x16aab1(0x3dc)]()+_0x53dee8[_0x16aab1(0x3ca)](0x1);const _0x42c806='%1%2'[_0x16aab1(0x29a)](_0x266a68,_0x53dee8);if(_0x5b922c[_0x42c806])_0x5b922c[_0x42c806]=_0x5b922c[_0x42c806]['concat'](_0x1d4fd6);}this[_0x16aab1(0x1b9)]=_0x5b922c;},Game_Map['prototype'][_0x1e9303(0x28f)]=function(_0x21db8d,_0x562045,_0x1ac3c4,_0x459398){const _0x1958c1=_0x1e9303,_0x3955ab=this['roundXWithDirection'](_0x21db8d,_0x1ac3c4),_0x3a56e6=this[_0x1958c1(0x338)](_0x562045,_0x1ac3c4),_0xea15bb=this[_0x1958c1(0x4ea)](_0x3955ab,_0x3a56e6),_0x841d48=this[_0x1958c1(0x1b9)];if(_0x841d48[_0x1958c1(0x29b)][_0x1958c1(0x224)](_0xea15bb))return!![];else{if(_0x459398===_0x1958c1(0xb8))return _0x841d48[_0x1958c1(0xb9)][_0x1958c1(0x224)](_0xea15bb)||_0x841d48['WalkAllow']['includes'](_0xea15bb);else{if(_0x459398==='event')return _0x841d48[_0x1958c1(0x18f)][_0x1958c1(0x224)](_0xea15bb)||_0x841d48[_0x1958c1(0x467)]['includes'](_0xea15bb);else{if(_0x841d48['VehicleAllow']['includes'](_0xea15bb))return!![];else{const _0x578e7b=_0x1958c1(0x11c)[_0x1958c1(0x29a)](_0x459398[_0x1958c1(0x233)](0x0)[_0x1958c1(0x3dc)]()+_0x459398['slice'](0x1));if(_0x841d48[_0x578e7b])return _0x841d48[_0x578e7b]['includes'](_0xea15bb);}}}}return![];},Game_Map['prototype']['isRegionForbidPass']=function(_0x81c746,_0x2b174e,_0xf09d36,_0x379a3e){const _0x29556c=_0x1e9303,_0xa13e6=this['roundXWithDirection'](_0x81c746,_0xf09d36),_0x16cd69=this[_0x29556c(0x338)](_0x2b174e,_0xf09d36),_0x3900e2=this[_0x29556c(0x4ea)](_0xa13e6,_0x16cd69),_0x36b4e1=this[_0x29556c(0x1b9)];if(_0x36b4e1[_0x29556c(0x49d)][_0x29556c(0x224)](_0x3900e2))return!![];else{if(_0x379a3e===_0x29556c(0xb8))return _0x36b4e1[_0x29556c(0x4e8)][_0x29556c(0x224)](_0x3900e2)||_0x36b4e1[_0x29556c(0x2a6)][_0x29556c(0x224)](_0x3900e2);else{if(_0x379a3e==='event')return _0x36b4e1[_0x29556c(0x276)][_0x29556c(0x224)](_0x3900e2)||_0x36b4e1[_0x29556c(0x2a6)]['includes'](_0x3900e2);else{if(_0x36b4e1['VehicleForbid'][_0x29556c(0x224)](_0x3900e2))return!![];else{const _0x33e971=_0x29556c(0x167)[_0x29556c(0x29a)](_0x379a3e['charAt'](0x0)[_0x29556c(0x3dc)]()+_0x379a3e['slice'](0x1));if(_0x36b4e1[_0x33e971])return _0x36b4e1[_0x33e971][_0x29556c(0x224)](_0x3900e2);}}}}return![];},Game_Map['prototype']['isRegionDockable']=function(_0x148184,_0x42c3c0,_0x2a27d1,_0x261432){const _0x129d6a=_0x1e9303;_0x2a27d1=_0x261432===_0x129d6a(0x45e)?0x5:_0x2a27d1;const _0x1dd861=this[_0x129d6a(0x11a)](_0x148184,_0x2a27d1),_0x48a21a=this[_0x129d6a(0x338)](_0x42c3c0,_0x2a27d1),_0x15966f=this[_0x129d6a(0x4ea)](_0x1dd861,_0x48a21a),_0x430868=this['_regionRules'];if(_0x430868[_0x129d6a(0x196)]['includes'](_0x15966f))return!![];else{const _0x2da0e9=_0x129d6a(0x270)[_0x129d6a(0x29a)](_0x261432[_0x129d6a(0x233)](0x0)[_0x129d6a(0x3dc)]()+_0x261432[_0x129d6a(0x3ca)](0x1));if(_0x430868[_0x2da0e9])return _0x430868[_0x2da0e9][_0x129d6a(0x224)](_0x15966f);}return![];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x102)]=Game_Map[_0x1e9303(0xad)][_0x1e9303(0x316)],Game_Map['prototype'][_0x1e9303(0x316)]=function(){const _0xa380ef=_0x1e9303;VisuMZ[_0xa380ef(0x2bb)]['Game_Map_refresh'][_0xa380ef(0x1ae)](this),this['checkNeedForPeriodicRefresh']();},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x373)]=function(){const _0xfde4ab=_0x1e9303;this[_0xfde4ab(0x149)]=![];if(this[_0xfde4ab(0x1a2)]()[_0xfde4ab(0x441)](_0x5e5025=>_0x5e5025[_0xfde4ab(0x1a6)]())){this[_0xfde4ab(0x149)]=!![];return;}if(this[_0xfde4ab(0x1a2)]()[_0xfde4ab(0x441)](_0x379292=>_0x379292[_0xfde4ab(0x2fe)]())){this[_0xfde4ab(0x149)]=!![];return;}if(this[_0xfde4ab(0x2c1)][_0xfde4ab(0x441)](_0x52f106=>_0x52f106[_0xfde4ab(0x1a6)]())){this[_0xfde4ab(0x149)]=!![];return;}if(this[_0xfde4ab(0x2c1)][_0xfde4ab(0x441)](_0x4c8c86=>_0x4c8c86[_0xfde4ab(0x2fe)]())){this[_0xfde4ab(0x149)]=!![];return;}},VisuMZ[_0x1e9303(0x2bb)]['Game_Map_update']=Game_Map[_0x1e9303(0xad)][_0x1e9303(0x18a)],Game_Map['prototype'][_0x1e9303(0x18a)]=function(_0x43fc5b){const _0x963d18=_0x1e9303;this[_0x963d18(0x412)](),VisuMZ[_0x963d18(0x2bb)]['Game_Map_update'][_0x963d18(0x1ae)](this,_0x43fc5b);},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x412)]=function(){const _0x177a59=_0x1e9303;if(!this['_needsPeriodicRefresh'])return;this[_0x177a59(0x1f1)]=this[_0x177a59(0x1f1)]||0x3c,this[_0x177a59(0x1f1)]--,this[_0x177a59(0x1f1)]<=0x0&&(this['requestRefresh'](),this[_0x177a59(0x1f1)]=0x3c);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x3f3)]=Game_Map[_0x1e9303(0xad)][_0x1e9303(0x404)],Game_Map[_0x1e9303(0xad)]['isDashDisabled']=function(){const _0x1d16df=_0x1e9303;if(!$gameSystem['isDashingEnabled']())return!![];return VisuMZ[_0x1d16df(0x2bb)][_0x1d16df(0x3f3)][_0x1d16df(0x1ae)](this);},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x129)]=function(){const _0x422ac3=_0x1e9303;this['_saveEventLocations']=![];const _0x371108=$dataMap[_0x422ac3(0x2b5)]||'';_0x371108['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this['_saveEventLocations']=!![]);},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x3ad)]=function(){const _0x5aa04b=_0x1e9303;if(this[_0x5aa04b(0x41f)]===undefined)this[_0x5aa04b(0x129)]();return this[_0x5aa04b(0x41f)];},Game_Map[_0x1e9303(0xad)]['removeTemporaryMapSpawnedEvents']=function(_0x4994d9){const _0x321c74=_0x1e9303;_0x4994d9!==this[_0x321c74(0x4a1)]()&&$gamePlayer&&$gameSystem[_0x321c74(0x352)](this[_0x321c74(0x4a1)]());},Game_Map['prototype'][_0x1e9303(0x417)]=function(){const _0x25e3b1=_0x1e9303;this[_0x25e3b1(0x329)]=$gameSystem['getMapSpawnedEventData'](this[_0x25e3b1(0x4a1)]()),this[_0x25e3b1(0x24f)]=!![];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x132)]=Game_Map[_0x1e9303(0xad)]['events'],Game_Map[_0x1e9303(0xad)]['events']=function(){const _0x3b7dcd=_0x1e9303;if(this['_eventCache'])return this[_0x3b7dcd(0x240)];const _0x5d03da=VisuMZ[_0x3b7dcd(0x2bb)][_0x3b7dcd(0x132)]['call'](this),_0x270b66=_0x5d03da['concat'](this[_0x3b7dcd(0x329)]||[]);return this[_0x3b7dcd(0x240)]=_0x270b66[_0x3b7dcd(0x29e)](_0x58138c=>!!_0x58138c),this[_0x3b7dcd(0x240)];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x353)]=Game_Map[_0x1e9303(0xad)][_0x1e9303(0x4f1)],Game_Map[_0x1e9303(0xad)]['event']=function(_0x3fce3a){const _0x43b7ec=_0x1e9303;return _0x3fce3a>=0x3e8?(_0x3fce3a-=0x3e8,this[_0x43b7ec(0x329)][_0x3fce3a]):VisuMZ['EventsMoveCore'][_0x43b7ec(0x353)][_0x43b7ec(0x1ae)](this,_0x3fce3a);},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x38b)]=function(_0x39b265){const _0x32da1c=_0x1e9303,_0x3db7c4=this[_0x32da1c(0x4f1)](_0x39b265);if(_0x3db7c4)_0x3db7c4[_0x32da1c(0x3b7)]();},Game_Map['prototype']['setupSpawnTest']=function(){const _0x21c8a0=_0x1e9303,_0x584a79={'template':_0x21c8a0(0x44b),'mapId':0x1,'eventId':0xc,'x':$gamePlayer['x']+0x1,'y':$gamePlayer['y']+0x1,'spawnPreserved':!![],'spawnEventId':this[_0x21c8a0(0x329)][_0x21c8a0(0x411)]+0x3e8};this[_0x21c8a0(0x111)](_0x584a79);},Game_Map['prototype'][_0x1e9303(0x254)]=function(_0x263911,_0x419985){const _0x368b9c=_0x1e9303;if(this['eventsXy'](_0x263911,_0x419985)['length']>0x0)return!![];if($gamePlayer['x']===_0x263911&&$gamePlayer['y']===_0x419985)return!![];if(this[_0x368b9c(0x426)]()[_0x368b9c(0x4df)](_0x263911,_0x419985))return!![];if(this[_0x368b9c(0x471)]()[_0x368b9c(0x4df)](_0x263911,_0x419985))return!![];return![];},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x4bb)]=function(_0x781406,_0x336c6e,_0x5b6209){const _0x8ec202=_0x1e9303;$gameTemp[_0x8ec202(0x30b)]=_0x781406;const _0x4f45bb=new Game_Event(_0x781406[_0x8ec202(0x4a1)],_0x781406[_0x8ec202(0x1c6)]);$gameTemp['_spawnData']=undefined,_0x4f45bb['refresh']();let _0x1c2b44=_0x336c6e-_0x4f45bb[_0x8ec202(0x1cc)]['left'],_0x309dca=_0x336c6e+_0x4f45bb['_addedHitbox'][_0x8ec202(0x343)],_0x43cd3c=_0x5b6209-_0x4f45bb[_0x8ec202(0x1cc)]['up'],_0xfb3645=_0x5b6209+_0x4f45bb['_addedHitbox'][_0x8ec202(0x334)];for(let _0xeca83c=_0x1c2b44;_0xeca83c<=_0x309dca;_0xeca83c++){for(let _0x31e2b7=_0x43cd3c;_0x31e2b7<=_0xfb3645;_0x31e2b7++){if(this[_0x8ec202(0x254)](_0xeca83c,_0x31e2b7))return![];}}return!![];},Game_Map[_0x1e9303(0xad)]['createSpawnedEventWithData']=function(_0x2040d7){const _0x3a466a=_0x1e9303;$gameTemp[_0x3a466a(0x30b)]=_0x2040d7;const _0x5efd17=new Game_Event(_0x2040d7[_0x3a466a(0x4a1)],_0x2040d7[_0x3a466a(0x1c6)]);$gameTemp['_spawnData']=undefined,this[_0x3a466a(0x329)][_0x3a466a(0x443)](_0x5efd17),_0x5efd17[_0x3a466a(0xd8)](_0x2040d7),this['clearEventCache']();},Game_Map[_0x1e9303(0xad)]['prepareSpawnedEventAtXY']=function(_0x4a62b0,_0x3a7d78,_0xd9cd15){const _0x4452d1=_0x1e9303,_0x5e07ce=_0x4a62b0[_0x4452d1(0x2a8)][_0x4452d1(0x3dc)]()[_0x4452d1(0x203)]();if(_0x5e07ce!==_0x4452d1(0x154)){const _0x12e047=VisuMZ[_0x4452d1(0x1a4)][_0x5e07ce];_0x12e047&&(_0x4a62b0['mapId']=_0x12e047[_0x4452d1(0x2fd)],_0x4a62b0['eventId']=_0x12e047[_0x4452d1(0x148)]);}const _0x2d2400=_0x4a62b0['x'],_0x510bf9=_0x4a62b0['y'];if(!this[_0x4452d1(0x4a9)](_0x2d2400,_0x510bf9))return![];if(_0x3a7d78){if(this[_0x4452d1(0x254)](_0x2d2400,_0x510bf9))return![];if(!this['isSpawnHitboxCollisionOk'](_0x4a62b0,_0x2d2400,_0x510bf9))return![];}if(_0xd9cd15){if(!this[_0x4452d1(0x25d)](_0x2d2400,_0x510bf9))return![];}return this[_0x4452d1(0x111)](_0x4a62b0),!![];},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x14f)]=function(_0x215ff6,_0x360a3a,_0x55a4c4,_0x8f1866){const _0x42a9a2=_0x1e9303,_0x5668bb=_0x215ff6[_0x42a9a2(0x2a8)][_0x42a9a2(0x3dc)]()[_0x42a9a2(0x203)]();if(_0x5668bb!==_0x42a9a2(0x154)){const _0xe545b=VisuMZ[_0x42a9a2(0x1a4)][_0x5668bb];_0xe545b&&(_0x215ff6[_0x42a9a2(0x4a1)]=_0xe545b['MapID'],_0x215ff6[_0x42a9a2(0x1c6)]=_0xe545b[_0x42a9a2(0x148)]);}const _0x45ff8c=[],_0x3e1c68=this[_0x42a9a2(0x32f)](),_0x1689a7=this[_0x42a9a2(0x279)]();for(let _0x32b9a8=0x0;_0x32b9a8<_0x3e1c68;_0x32b9a8++){for(let _0x5a768b=0x0;_0x5a768b<_0x1689a7;_0x5a768b++){if(!_0x360a3a['includes'](this[_0x42a9a2(0x4ea)](_0x32b9a8,_0x5a768b)))continue;if(!this['isValid'](_0x32b9a8,_0x5a768b))continue;if(_0x55a4c4){if(this[_0x42a9a2(0x254)](_0x32b9a8,_0x5a768b))continue;if(!this[_0x42a9a2(0x4bb)](_0x215ff6,_0x32b9a8,_0x5a768b))continue;}if(_0x8f1866){if(!this[_0x42a9a2(0x25d)](_0x32b9a8,_0x5a768b))continue;}_0x45ff8c['push']([_0x32b9a8,_0x5a768b]);}}if(_0x45ff8c[_0x42a9a2(0x411)]>0x0){const _0x116e00=_0x45ff8c[Math[_0x42a9a2(0x15c)](_0x45ff8c[_0x42a9a2(0x411)])];return _0x215ff6['x']=_0x116e00[0x0],_0x215ff6['y']=_0x116e00[0x1],this[_0x42a9a2(0x111)](_0x215ff6),!![];}return![];},Game_Map[_0x1e9303(0xad)][_0x1e9303(0xb4)]=function(_0x127a0e,_0xc07842,_0xe1ec40,_0x612ed0){const _0x4ef726=_0x1e9303,_0x4835e6=_0x127a0e[_0x4ef726(0x2a8)][_0x4ef726(0x3dc)]()[_0x4ef726(0x203)]();if(_0x4835e6!==_0x4ef726(0x154)){const _0x375678=VisuMZ[_0x4ef726(0x1a4)][_0x4835e6];_0x375678&&(_0x127a0e['mapId']=_0x375678['MapID'],_0x127a0e[_0x4ef726(0x1c6)]=_0x375678['EventID']);}const _0x31a7bc=[],_0x459378=this[_0x4ef726(0x32f)](),_0x1cfc63=this[_0x4ef726(0x279)]();for(let _0x4867e4=0x0;_0x4867e4<_0x459378;_0x4867e4++){for(let _0x3b49e7=0x0;_0x3b49e7<_0x1cfc63;_0x3b49e7++){if(!_0xc07842[_0x4ef726(0x224)](this[_0x4ef726(0x3c5)](_0x4867e4,_0x3b49e7)))continue;if(!this['isValid'](_0x4867e4,_0x3b49e7))continue;if(_0xe1ec40){if(this[_0x4ef726(0x254)](_0x4867e4,_0x3b49e7))continue;if(!this[_0x4ef726(0x4bb)](_0x127a0e,_0x4867e4,_0x3b49e7))continue;}if(_0x612ed0){if(!this[_0x4ef726(0x25d)](_0x4867e4,_0x3b49e7))continue;}_0x31a7bc[_0x4ef726(0x443)]([_0x4867e4,_0x3b49e7]);}}if(_0x31a7bc[_0x4ef726(0x411)]>0x0){const _0x52d774=_0x31a7bc[Math[_0x4ef726(0x15c)](_0x31a7bc[_0x4ef726(0x411)])];return _0x127a0e['x']=_0x52d774[0x0],_0x127a0e['y']=_0x52d774[0x1],this[_0x4ef726(0x111)](_0x127a0e),!![];}return![];},Game_Map['prototype'][_0x1e9303(0x25d)]=function(_0x17861e,_0x41f30c){const _0x19ee25=_0x1e9303;if(this[_0x19ee25(0x252)](_0x17861e,_0x41f30c,0x2))return!![];if(this['isPassable'](_0x17861e,_0x41f30c,0x4))return!![];if(this[_0x19ee25(0x252)](_0x17861e,_0x41f30c,0x6))return!![];if(this[_0x19ee25(0x252)](_0x17861e,_0x41f30c,0x8))return!![];return![];},Game_Map[_0x1e9303(0xad)]['despawnEventId']=function(_0x326d21){const _0x365643=_0x1e9303;if(_0x326d21<0x3e8)return;if(!this['_spawnedEvents'])return;const _0x380cbb=this['event'](_0x326d21);_0x380cbb[_0x365643(0x49c)](-0x1,-0x1),_0x380cbb[_0x365643(0x3b7)](),this[_0x365643(0x329)][_0x326d21-0x3e8]=null,this[_0x365643(0x192)]();},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x1e6)]=function(){for(const _0x2d391f of this['_spawnedEvents']){if(_0x2d391f)return _0x2d391f;}return null;},Game_Map['prototype'][_0x1e9303(0x3cd)]=function(){const _0x3ef1d5=_0x1e9303,_0xd5cad9=this[_0x3ef1d5(0x1e6)]();return _0xd5cad9?_0xd5cad9['_eventId']:0x0;},Game_Map['prototype'][_0x1e9303(0x368)]=function(){const _0x50f6a0=_0x1e9303,_0x2bb83c=this['_spawnedEvents'][_0x50f6a0(0x3ca)](0x0)[_0x50f6a0(0x2dc)]();for(const _0x5e435d of _0x2bb83c){if(_0x5e435d)return _0x5e435d;}return null;},Game_Map[_0x1e9303(0xad)]['lastSpawnedEventID']=function(){const _0x2fb78d=_0x1e9303,_0x424680=this[_0x2fb78d(0x368)]();return _0x424680?_0x424680['_eventId']:0x0;},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x3de)]=function(_0x45b0dc,_0x953ae){const _0x498382=_0x1e9303,_0x2ff0bc=this[_0x498382(0x237)](_0x45b0dc,_0x953ae);for(const _0x3c67f4 of _0x2ff0bc){if(!_0x3c67f4)continue;if(_0x3c67f4[_0x498382(0x440)]())this['despawnEventId'](_0x3c67f4[_0x498382(0x27a)]);}},Game_Map['prototype'][_0x1e9303(0x357)]=function(_0x88061a){const _0x529b5f=_0x1e9303;for(const _0x1221d5 of this[_0x529b5f(0x329)]){if(!_0x1221d5)continue;_0x88061a[_0x529b5f(0x224)](_0x1221d5['regionId']())&&this['despawnEventId'](_0x1221d5[_0x529b5f(0x27a)]);}},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x118)]=function(_0x3ee797){const _0x4ce5f8=_0x1e9303;for(const _0x5580e7 of this['_spawnedEvents']){if(!_0x5580e7)continue;_0x3ee797[_0x4ce5f8(0x224)](_0x5580e7[_0x4ce5f8(0x3c5)]())&&this[_0x4ce5f8(0x16e)](_0x5580e7['_eventId']);}},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x303)]=function(){const _0x37d9a5=_0x1e9303;for(const _0x4a6c86 of this[_0x37d9a5(0x329)]){if(!_0x4a6c86)continue;this[_0x37d9a5(0x16e)](_0x4a6c86[_0x37d9a5(0x27a)]);}},VisuMZ['EventsMoveCore']['Game_Map_unlockEvent']=Game_Map[_0x1e9303(0xad)]['unlockEvent'],Game_Map[_0x1e9303(0xad)][_0x1e9303(0x4c5)]=function(_0x2b5add){const _0x12a991=_0x1e9303;VisuMZ[_0x12a991(0x2bb)][_0x12a991(0xaf)][_0x12a991(0x1ae)](this,_0x2b5add);if(_0x2b5add>=0x3e8){const _0x4e555e=this['event'](_0x2b5add);if(_0x4e555e)_0x4e555e['unlock']();}},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x405)]=function(){const _0x1ebf18=_0x1e9303;this[_0x1ebf18(0x288)]=![],this['_forceHidePlayer']=![];if(!$dataMap)return;const _0x53e6e7=$dataMap[_0x1ebf18(0x2b5)]||'';if(_0x53e6e7[_0x1ebf18(0xe9)](/<HIDE PLAYER>/i))this[_0x1ebf18(0x288)]=![],this[_0x1ebf18(0x3ae)]=!![];else _0x53e6e7[_0x1ebf18(0xe9)](/<SHOW PLAYER>/i)&&(this[_0x1ebf18(0x288)]=!![],this[_0x1ebf18(0x3ae)]=![]);},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x31d)]=function(){const _0x20b42a=_0x1e9303;return this[_0x20b42a(0x288)]===undefined&&this['setupPlayerVisibilityOverrides'](),this[_0x20b42a(0x288)];},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x4d2)]=function(){const _0x20ed7c=_0x1e9303;return this[_0x20ed7c(0x3ae)]===undefined&&this[_0x20ed7c(0x405)](),this['_forceHidePlayer'];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x1c7)]=Game_CharacterBase[_0x1e9303(0xad)]['isTransparent'],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x350)]=function(){const _0x3955ba=_0x1e9303;if(this===$gamePlayer){if($gameMap[_0x3955ba(0x31d)]())return![];if($gameMap['isPlayerForceHidden']())return!![];}return VisuMZ[_0x3955ba(0x2bb)]['Game_CharacterBase_isTransparent'][_0x3955ba(0x1ae)](this);},Game_Map[_0x1e9303(0xad)]['setupFollowerVisibilityOverrides']=function(){const _0xa91b6f=_0x1e9303;this[_0xa91b6f(0x1d9)]=![],this['_forceHideFollower']=![];if(!$dataMap)return;const _0x337be3=$dataMap[_0xa91b6f(0x2b5)]||'';if(_0x337be3[_0xa91b6f(0xe9)](/<HIDE FOLLOWERS>/i))this[_0xa91b6f(0x1d9)]=![],this[_0xa91b6f(0xe1)]=!![];else _0x337be3[_0xa91b6f(0xe9)](/<SHOW FOLLOWERS>/i)&&(this[_0xa91b6f(0x1d9)]=!![],this[_0xa91b6f(0xe1)]=![]);},Game_Map['prototype'][_0x1e9303(0x365)]=function(){const _0x5c54b7=_0x1e9303;return this[_0x5c54b7(0x1d9)]===undefined&&this[_0x5c54b7(0x1c8)](),this[_0x5c54b7(0x1d9)];},Game_Map[_0x1e9303(0xad)]['areFollowersForceHidden']=function(){const _0x1a0d68=_0x1e9303;return this[_0x1a0d68(0xe1)]===undefined&&this[_0x1a0d68(0x1c8)](),this[_0x1a0d68(0xe1)];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x26b)]=Game_Followers['prototype'][_0x1e9303(0x38d)],Game_Followers[_0x1e9303(0xad)][_0x1e9303(0x38d)]=function(){const _0xd8e138=_0x1e9303;if($gameMap[_0xd8e138(0x365)]())return!![];if($gameMap['areFollowersForceHidden']())return![];return VisuMZ['EventsMoveCore'][_0xd8e138(0x26b)][_0xd8e138(0x1ae)](this);},Game_CommonEvent[_0x1e9303(0xad)][_0x1e9303(0x1a6)]=function(){const _0x11735d=_0x1e9303,_0x2ec7ac=this[_0x11735d(0x4f1)]();return this[_0x11735d(0x282)]()&&_0x2ec7ac[_0x11735d(0x341)]>=0x1&&DataManager[_0x11735d(0x487)](_0x2ec7ac[_0x11735d(0xc8)]);},Game_CommonEvent[_0x1e9303(0xad)][_0x1e9303(0x2fe)]=function(){const _0x4d7079=_0x1e9303;return VisuMZ['EventsMoveCore'][_0x4d7079(0x283)][_0x4d7079(0x2c1)][_0x4d7079(0x224)](this['_commonEventId']);},VisuMZ['EventsMoveCore'][_0x1e9303(0x2d2)]=Game_CommonEvent[_0x1e9303(0xad)][_0x1e9303(0x282)],Game_CommonEvent[_0x1e9303(0xad)][_0x1e9303(0x282)]=function(){const _0x5c3144=_0x1e9303;if(VisuMZ[_0x5c3144(0x2bb)][_0x5c3144(0x2d2)][_0x5c3144(0x1ae)](this))return!![];else{const _0x21c69c=this[_0x5c3144(0x4f1)]();return VisuMZ[_0x5c3144(0x2bb)][_0x5c3144(0x283)][_0x5c3144(0x45c)](this[_0x5c3144(0x4f1)]()[_0x5c3144(0x3d8)],this[_0x5c3144(0x190)],_0x21c69c);}},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x1b5)]=Game_Map[_0x1e9303(0xad)][_0x1e9303(0x47d)],Game_Map[_0x1e9303(0xad)][_0x1e9303(0x47d)]=function(){const _0x5e2362=_0x1e9303,_0x2eb0ad=VisuMZ[_0x5e2362(0x2bb)]['Game_Map_parallelCommonEvents'][_0x5e2362(0x1ae)](this),_0xc6848f=VisuMZ[_0x5e2362(0x2bb)][_0x5e2362(0x283)][_0x5e2362(0x2c1)][_0x5e2362(0x317)](_0x3e4d7b=>$dataCommonEvents[_0x3e4d7b]);return _0x2eb0ad[_0x5e2362(0xec)](_0xc6848f)[_0x5e2362(0x29e)]((_0x5eab97,_0x568f22,_0xb198af)=>_0xb198af[_0x5e2362(0x255)](_0x5eab97)===_0x568f22);},Game_CharacterBase[_0x1e9303(0x359)]=VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x27e)][_0x1e9303(0xfd)][_0x1e9303(0x304)]??![],VisuMZ[_0x1e9303(0x2bb)]['Game_CharacterBase_initMembers']=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0xdf)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0xdf)]=function(){const _0x2eabc0=_0x1e9303;VisuMZ[_0x2eabc0(0x2bb)][_0x2eabc0(0x146)][_0x2eabc0(0x1ae)](this),this[_0x2eabc0(0xee)]();},Game_CharacterBase[_0x1e9303(0xad)]['initEventsMoveCoreSettings']=function(){const _0x3695b6=_0x1e9303;this[_0x3695b6(0x4ef)]=0x1,this[_0x3695b6(0x4b6)]=0x1,this['_patternLocked']=![],this[_0x3695b6(0x4c6)](),this[_0x3695b6(0x423)](),this['clearSpriteOffsets'](),this['clearStepPattern']();},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x120)]=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x361)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x361)]=function(){const _0x33f527=_0x1e9303;let _0xee148f=VisuMZ['EventsMoveCore'][_0x33f527(0x120)][_0x33f527(0x1ae)](this);return _0xee148f=this[_0x33f527(0xc5)](_0xee148f),_0xee148f;},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0xc5)]=function(_0x40b90f){return _0x40b90f;},Game_CharacterBase[_0x1e9303(0xad)]['isSpriteVS8dir']=function(){const _0x177785=_0x1e9303;if(this[_0x177785(0x28d)]===Game_Player&&this['isInVehicle']())return this[_0x177785(0x17e)]()[_0x177785(0x1bd)]()[_0x177785(0xe9)](/\[VS8\]/i);else return Imported[_0x177785(0x3d3)]&&this['hasDragonbones']()?!![]:this['characterName']()['match'](/\[VS8\]/i);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x4f5)]=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x42d)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x42d)]=function(){const _0x501f8b=_0x1e9303;if(!$dataMap)return this[_0x501f8b(0xb2)]||0x2;if(this['isOnLadder']()&&!this['isJumping']()&&this[_0x501f8b(0x121)]())return this['directionOnLadderSpriteVS8dir']();else{if(this[_0x501f8b(0x3db)]()&&!this['isJumping']())return 0x8;else return this[_0x501f8b(0xd3)]()&&this['isSpriteVS8dir']()?this[_0x501f8b(0x241)]():VisuMZ['EventsMoveCore']['Game_CharacterBase_direction'][_0x501f8b(0x1ae)](this);}},VisuMZ[_0x1e9303(0x2bb)]['Game_CharacterBase_setDirection']=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x271)],Game_CharacterBase['prototype'][_0x1e9303(0x271)]=function(_0xef1f85){const _0x5da82e=_0x1e9303;if(!this['isSpriteVS8dir']())_0xef1f85=this[_0x5da82e(0x39a)](_0xef1f85);VisuMZ[_0x5da82e(0x2bb)]['Game_CharacterBase_setDirection'][_0x5da82e(0x1ae)](this,_0xef1f85),this[_0x5da82e(0x250)]();},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x39a)]=function(_0x546a1c){const _0xc3eb7c=_0x1e9303;if(_0x546a1c===0x1)return this['canPass'](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x546a1c===0x3)return this['canPass'](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x546a1c===0x7)return this[_0xc3eb7c(0x108)](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x546a1c===0x9)return this[_0xc3eb7c(0x108)](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x546a1c;},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x1b8)]=function(_0x151138){const _0x5f4642=_0x1e9303;return[0x1,0x3,0x5,0x7,0x9][_0x5f4642(0x224)](_0x151138);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x475)]=function(){const _0x59e480=_0x1e9303;return this[_0x59e480(0x479)]||0x0;},VisuMZ['EventsMoveCore'][_0x1e9303(0x151)]=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x4d7)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x4d7)]=function(_0x3fc05b){const _0xb7657d=_0x1e9303;this['_lastMovedDirection']=_0x3fc05b,VisuMZ['EventsMoveCore'][_0xb7657d(0x151)][_0xb7657d(0x1ae)](this,_0x3fc05b);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x1d1)]=function(_0x5c317a){const _0x1f55f3=_0x1e9303;if(!this['isDiagonalDirection'](_0x5c317a))return this['moveStraight'](_0x5c317a);let _0x4cb5a6=0x0,_0x3b0683=0x0;switch(_0x5c317a){case 0x1:_0x4cb5a6=0x4,_0x3b0683=0x2;break;case 0x3:_0x4cb5a6=0x6,_0x3b0683=0x2;break;case 0x7:_0x4cb5a6=0x4,_0x3b0683=0x8;break;case 0x9:_0x4cb5a6=0x6,_0x3b0683=0x8;break;}if(VisuMZ[_0x1f55f3(0x2bb)]['Settings'][_0x1f55f3(0xfd)][_0x1f55f3(0x3b2)]){if(!this['canPass'](this['_x'],this['_y'],_0x4cb5a6))return this[_0x1f55f3(0x4d7)](_0x3b0683);if(!this[_0x1f55f3(0x108)](this['_x'],this['_y'],_0x3b0683))return this['moveStraight'](_0x4cb5a6);if(!this['canPassDiagonally'](this['_x'],this['_y'],_0x4cb5a6,_0x3b0683)){let _0x19d0c1=VisuMZ['EventsMoveCore'][_0x1f55f3(0x27e)][_0x1f55f3(0xfd)][_0x1f55f3(0x3fc)]?_0x4cb5a6:_0x3b0683;return this['moveStraight'](_0x19d0c1);}}this[_0x1f55f3(0x479)]=_0x5c317a,this['moveDiagonally'](_0x4cb5a6,_0x3b0683);},VisuMZ['EventsMoveCore'][_0x1e9303(0x427)]=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x406)],Game_CharacterBase['prototype'][_0x1e9303(0x406)]=function(){const _0x52003c=_0x1e9303;let _0x1ae601=this['_moveSpeed'];return this[_0x52003c(0x22f)]()&&(_0x1ae601+=this[_0x52003c(0x1bb)]()),this['adjustDir8MovementSpeed'](_0x1ae601);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x1bb)]=function(){const _0x22e0a3=_0x1e9303,_0x462c27=VisuMZ[_0x22e0a3(0x2bb)]['Settings']['Movement'];return _0x462c27[_0x22e0a3(0x47f)]!==undefined?_0x462c27[_0x22e0a3(0x47f)]:VisuMZ[_0x22e0a3(0x2bb)][_0x22e0a3(0x427)][_0x22e0a3(0x1ae)](this)-this['_moveSpeed'];},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x3b3)]=function(_0x12c740){const _0x1171db=_0x1e9303,_0x2dd2c5=VisuMZ[_0x1171db(0x2bb)][_0x1171db(0x27e)]['Movement'];if(!_0x2dd2c5[_0x1171db(0xcd)])return _0x12c740;return[0x1,0x3,0x7,0x9]['includes'](this[_0x1171db(0x479)])&&(_0x12c740*=_0x2dd2c5[_0x1171db(0x2f4)]||0.01),_0x12c740;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x493)]=Game_CharacterBase[_0x1e9303(0xad)]['isDashing'],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x22f)]=function(){const _0x48b27b=_0x1e9303;if(!Game_CharacterBase[_0x48b27b(0x359)]&&this[_0x48b27b(0x3db)]())return![];if(this['_forceDashing'])return!![];return VisuMZ[_0x48b27b(0x2bb)][_0x48b27b(0x493)]['call'](this);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x3f0)]=function(){const _0x11cbc3=_0x1e9303;return this[_0x11cbc3(0x22f)]()&&this['_stopCount']===0x0;},VisuMZ[_0x1e9303(0x2bb)]['Game_CharacterBase_pattern']=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x4d8)],Game_CharacterBase[_0x1e9303(0xad)]['pattern']=function(){const _0x2220cb=_0x1e9303;return this[_0x2220cb(0xd3)]()?this[_0x2220cb(0x13b)]():VisuMZ[_0x2220cb(0x2bb)][_0x2220cb(0x4c4)]['call'](this);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x355)]=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x4d4)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x4d4)]=function(){const _0x4c80e2=_0x1e9303;VisuMZ[_0x4c80e2(0x2bb)][_0x4c80e2(0x355)]['call'](this),this[_0x4c80e2(0x4c6)]();},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x4d0)]=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x13d)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x13d)]=function(){const _0x27e9a4=_0x1e9303;if(this['isSpriteVS8dir']())return this['characterIndexVS8']();return VisuMZ[_0x27e9a4(0x2bb)][_0x27e9a4(0x4d0)]['call'](this);},Game_CharacterBase[_0x1e9303(0xad)]['characterIndexVS8']=function(){const _0x5dbc57=_0x1e9303,_0xe0e114=this[_0x5dbc57(0x42d)]();if(this['isJumping']()){if([0x2,0x4,0x6,0x8][_0x5dbc57(0x224)](_0xe0e114))return 0x4;if([0x1,0x3,0x7,0x9][_0x5dbc57(0x224)](_0xe0e114))return 0x5;}else{if(this[_0x5dbc57(0x3db)]())return 0x6;else{if(this[_0x5dbc57(0xd3)]())return this[_0x5dbc57(0x46e)]();else{if(this[_0x5dbc57(0x2ed)]){if([0x2,0x4,0x6,0x8][_0x5dbc57(0x224)](_0xe0e114))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0xe0e114))return 0x5;}else{if(this[_0x5dbc57(0x1bc)]()&&this[_0x5dbc57(0x1ba)]()){if([0x2,0x4,0x6,0x8][_0x5dbc57(0x224)](_0xe0e114))return 0x4;if([0x1,0x3,0x7,0x9][_0x5dbc57(0x224)](_0xe0e114))return 0x5;}else{if(this['isDashingAndMoving']()){if([0x2,0x4,0x6,0x8]['includes'](_0xe0e114))return 0x2;if([0x1,0x3,0x7,0x9][_0x5dbc57(0x224)](_0xe0e114))return 0x3;}else{if([0x2,0x4,0x6,0x8]['includes'](_0xe0e114))return 0x0;if([0x1,0x3,0x7,0x9][_0x5dbc57(0x224)](_0xe0e114))return 0x1;}}}}}}},Game_CharacterBase[_0x1e9303(0xad)]['useCarryPoseForIcons']=function(){const _0x569a62=_0x1e9303;return VisuMZ['EventsMoveCore'][_0x569a62(0x27e)][_0x569a62(0x14a)][_0x569a62(0xfb)];},Game_CharacterBase[_0x1e9303(0xad)]['isOnRope']=function(){const _0x200711=_0x1e9303;return this['isOnLadder']()&&this[_0x200711(0x3c5)]()===VisuMZ[_0x200711(0x2bb)][_0x200711(0x27e)]['TerrainTag'][_0x200711(0xe5)];},Game_CharacterBase[_0x1e9303(0xad)]['directionOnLadderSpriteVS8dir']=function(){const _0x366c73=_0x1e9303;return this[_0x366c73(0x125)]()?0x4:0x2;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0xd9)]=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x18a)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x18a)]=function(){const _0x44daac=_0x1e9303;this[_0x44daac(0x1ad)](),VisuMZ[_0x44daac(0x2bb)][_0x44daac(0xd9)][_0x44daac(0x1ae)](this),this[_0x44daac(0xe3)]();},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x1ad)]=function(){const _0x5338c4=_0x1e9303;this[_0x5338c4(0x208)]=this[_0x5338c4(0x4ef)]??0x1,this['_scaleY']=this['_scaleBaseY']??0x1;},VisuMZ['EventsMoveCore'][_0x1e9303(0x17a)]=Game_CharacterBase['prototype']['bushDepth'],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x4bd)]=function(){const _0x568d2e=_0x1e9303;let _0x11b4d8=VisuMZ[_0x568d2e(0x2bb)][_0x568d2e(0x17a)][_0x568d2e(0x1ae)](this);return this[_0x568d2e(0x152)]!==undefined&&(_0x11b4d8/=Math[_0x568d2e(0xac)](this[_0x568d2e(0x152)],0.00001)),Math[_0x568d2e(0x137)](_0x11b4d8);},Game_CharacterBase['prototype'][_0x1e9303(0xe3)]=function(){const _0x478798=_0x1e9303;this[_0x478798(0x1d2)]=this[_0x478798(0x1d2)]||0x0;if(this[_0x478798(0x1d2)]>0x0){this['_poseDuration']--;if(this[_0x478798(0x1d2)]<=0x0&&this[_0x478798(0x29f)]!==_0x478798(0x4f2))this[_0x478798(0x4c6)]();}},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x1ab)]=Game_CharacterBase['prototype'][_0x1e9303(0x235)],Game_CharacterBase['prototype'][_0x1e9303(0x235)]=function(_0xfa8741,_0x5052bf){const _0x246a52=_0x1e9303;VisuMZ['EventsMoveCore'][_0x246a52(0x1ab)][_0x246a52(0x1ae)](this,_0xfa8741,_0x5052bf);if(this[_0x246a52(0x121)]())this['setDiagonalDirection'](_0xfa8741,_0x5052bf);},Game_CharacterBase['prototype'][_0x1e9303(0x34c)]=function(_0x312857,_0x51f5e0){const _0x43028f=_0x1e9303;if(_0x312857===0x4&&_0x51f5e0===0x2)this['setDirection'](0x1);if(_0x312857===0x6&&_0x51f5e0===0x2)this[_0x43028f(0x271)](0x3);if(_0x312857===0x4&&_0x51f5e0===0x8)this[_0x43028f(0x271)](0x7);if(_0x312857===0x6&&_0x51f5e0===0x8)this['setDirection'](0x9);},VisuMZ[_0x1e9303(0x2bb)]['Game_CharacterBase_hasStepAnime']=Game_CharacterBase['prototype'][_0x1e9303(0xf4)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0xf4)]=function(){const _0x22af20=_0x1e9303;if(this[_0x22af20(0xd3)]()&&this['getPose']()===_0x22af20(0x4f2))return!![];return VisuMZ[_0x22af20(0x2bb)][_0x22af20(0x135)][_0x22af20(0x1ae)](this);},Game_CharacterBase['prototype'][_0x1e9303(0x48d)]=function(_0x18c0cc,_0xcbe2e8){const _0x172fac=_0x1e9303;if(_0x18c0cc[_0x172fac(0xe9)](/Z/i))_0x18c0cc='ZZZ';if(_0x18c0cc[_0x172fac(0xe9)](/SLEEP/i))_0x18c0cc='ZZZ';this[_0x172fac(0x121)]()&&(this['_pose']=_0x18c0cc[_0x172fac(0x3dc)]()[_0x172fac(0x203)](),this[_0x172fac(0x1d2)]=_0xcbe2e8||Infinity);},Game_CharacterBase['prototype'][_0x1e9303(0xca)]=function(){const _0x162c9c=_0x1e9303;return this[_0x162c9c(0x121)]()?(this[_0x162c9c(0x29f)]||'')[_0x162c9c(0x3dc)]()[_0x162c9c(0x203)]():''[_0x162c9c(0x3dc)]()[_0x162c9c(0x203)]();},Game_CharacterBase[_0x1e9303(0xad)]['setBalloonPose']=function(_0x21b52d,_0x2fddef){const _0x3936ef=_0x1e9303;if(this[_0x3936ef(0x121)]()){const _0x2a620e=['',_0x3936ef(0x2f3),_0x3936ef(0xbe),'MUSIC\x20NOTE',_0x3936ef(0x264),'ANGER',_0x3936ef(0x2b1),'COBWEB',_0x3936ef(0xa7),_0x3936ef(0x474),_0x3936ef(0x4f2),'','','','',''][_0x21b52d];this[_0x3936ef(0x48d)](_0x2a620e,_0x2fddef);}},Game_CharacterBase[_0x1e9303(0xad)]['clearPose']=function(){const _0x272b58=_0x1e9303;this[_0x272b58(0x29f)]='',this[_0x272b58(0x1d2)]=0x0;},Game_CharacterBase[_0x1e9303(0xad)]['isPosing']=function(){const _0x33f86a=_0x1e9303;return this['isSpriteVS8dir']()&&!!this[_0x33f86a(0x29f)];},Game_CharacterBase['prototype'][_0x1e9303(0x46e)]=function(){const _0x408ec6=_0x1e9303,_0x5b6fa7=this[_0x408ec6(0x29f)][_0x408ec6(0x3dc)]();switch(this[_0x408ec6(0x29f)][_0x408ec6(0x3dc)]()['trim']()){case _0x408ec6(0x289):case'HMPH':case'VICTORY':case _0x408ec6(0x30a):case _0x408ec6(0x1aa):case _0x408ec6(0x287):return 0x6;break;default:return 0x7;break;}},Game_CharacterBase['prototype'][_0x1e9303(0x241)]=function(){const _0x5f1e51=_0x1e9303;switch(this[_0x5f1e51(0x29f)][_0x5f1e51(0x3dc)]()){case _0x5f1e51(0x2f3):case _0x5f1e51(0xbe):case _0x5f1e51(0x345):case'!':case'?':return 0x2;break;case _0x5f1e51(0x264):case _0x5f1e51(0x179):case _0x5f1e51(0x2b1):return 0x4;break;case'ITEM':case _0x5f1e51(0x489):case _0x5f1e51(0x32a):case _0x5f1e51(0x12c):case'SILENCE':case _0x5f1e51(0x474):return 0x6;break;case _0x5f1e51(0x30a):case _0x5f1e51(0x1aa):case _0x5f1e51(0x287):case _0x5f1e51(0x4f2):case _0x5f1e51(0x34d):return 0x8;break;default:return VisuMZ[_0x5f1e51(0x2bb)][_0x5f1e51(0x2f2)][_0x5f1e51(0x1ae)](this);break;}},Game_CharacterBase['prototype'][_0x1e9303(0x13b)]=function(){const _0x2f08e1=_0x1e9303;switch(this[_0x2f08e1(0x29f)][_0x2f08e1(0x3dc)]()){case _0x2f08e1(0x289):case _0x2f08e1(0x30a):case _0x2f08e1(0x2f3):case'!':case _0x2f08e1(0x264):case _0x2f08e1(0x12c):return 0x0;break;case _0x2f08e1(0x489):case _0x2f08e1(0x1aa):case _0x2f08e1(0xbe):case'?':case'ANGER':case _0x2f08e1(0xa7):return 0x1;break;case _0x2f08e1(0x32a):case _0x2f08e1(0x287):case _0x2f08e1(0x345):case _0x2f08e1(0x2b1):case _0x2f08e1(0x474):return 0x2;break;default:return VisuMZ['EventsMoveCore'][_0x2f08e1(0x4c4)][_0x2f08e1(0x1ae)](this);break;}},Game_CharacterBase['prototype'][_0x1e9303(0x312)]=function(){const _0x3aa0ae=_0x1e9303;this[_0x3aa0ae(0x2ed)]=!![];},Game_CharacterBase['prototype']['clearCarrying']=function(){const _0xe8dbfc=_0x1e9303;this[_0xe8dbfc(0x2ed)]=![];},Game_CharacterBase[_0x1e9303(0xad)]['forceDashing']=function(){this['_forceDashing']=!![];},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x423)]=function(){const _0x44c59c=_0x1e9303;this[_0x44c59c(0x242)]=![];},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x2d5)]=function(){const _0x258858=_0x1e9303;if(this[_0x258858(0x272)]())return![];if(this[_0x258858(0x251)])return![];if(this[_0x258858(0x1c1)]==='')return![];if(this[_0x258858(0x28d)]===Game_Vehicle)return![];if(this['isTransparent']())return![];return!![];},Game_CharacterBase['prototype'][_0x1e9303(0x218)]=function(){const _0xb04b54=_0x1e9303;if(this['isOnLadder']())return!![];if(this[_0xb04b54(0x28d)]===Game_Player&&this[_0xb04b54(0x123)]())return!![];return![];},Game_CharacterBase['prototype']['shadowFilename']=function(){const _0x582f10=_0x1e9303;return VisuMZ[_0x582f10(0x2bb)][_0x582f10(0x27e)][_0x582f10(0xfd)]['DefaultShadow'];},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x2f5)]=function(){const _0x2a57e1=_0x1e9303;return this[_0x2a57e1(0xe6)]();},Game_CharacterBase[_0x1e9303(0xad)]['shadowY']=function(){const _0xe444f=_0x1e9303,_0xcf469f=$gameMap[_0xe444f(0x32e)]();return Math[_0xe444f(0x137)](this[_0xe444f(0x477)]()*_0xcf469f+_0xcf469f);},Game_CharacterBase['DIAGONAL_PATHFINDING_EVENT_LIMIT']=0x64,Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x321)]=function(_0x243350,_0x3defc6){const _0x13f7dc=_0x1e9303;if(TouchInput[_0x13f7dc(0x4eb)]())return![];if(!$gameMap[_0x13f7dc(0xce)]())return![];if($gameMap[_0x13f7dc(0x33e)](_0x243350,_0x3defc6)[_0x13f7dc(0x411)]>0x0)return![];if(!$gameMap['isPassableByAnyDirection'](_0x243350,_0x3defc6))return![];const _0x2b9fee=$gameMap[_0x13f7dc(0x37c)][_0x13f7dc(0x411)];if(_0x2b9fee>=Game_CharacterBase[_0x13f7dc(0x37b)])return![];return!![];},Game_Character['prototype']['findDiagonalDirectionTo']=function(_0x2e78d8,_0x4c2b16){const _0x17bc01=_0x1e9303;let _0x414884=this[_0x17bc01(0x315)](_0x2e78d8,_0x4c2b16);if(!this[_0x17bc01(0x321)](_0x2e78d8,_0x4c2b16))return _0x414884;if(this['isCollidedWithEvents'](_0x2e78d8,_0x4c2b16))return _0x414884;const _0x363dcc=_0x414884;if(_0x414884===0x2){if(_0x2e78d8>this['x']&&this[_0x17bc01(0x108)](this['x'],this['y'],0x6))_0x414884=0x3;if(_0x2e78d8<this['x']&&this[_0x17bc01(0x108)](this['x'],this['y'],0x4))_0x414884=0x1;}else{if(_0x414884===0x4){if(_0x4c2b16>this['y']&&this[_0x17bc01(0x108)](this['x'],this['y'],0x4))_0x414884=0x1;if(_0x4c2b16<this['y']&&this['canPass'](this['x'],this['y'],0x6))_0x414884=0x7;}else{if(_0x414884===0x6){if(_0x4c2b16>this['y']&&this[_0x17bc01(0x108)](this['x'],this['y'],0x4))_0x414884=0x3;if(_0x4c2b16<this['y']&&this[_0x17bc01(0x108)](this['x'],this['y'],0x6))_0x414884=0x9;}else{if(_0x414884===0x8){if(_0x2e78d8>this['x']&&this[_0x17bc01(0x108)](this['x'],this['y'],0x6))_0x414884=0x9;if(_0x2e78d8<this['x']&&this[_0x17bc01(0x108)](this['x'],this['y'],0x4))_0x414884=0x7;}}}}const _0x4a2e5c=$gameMap[_0x17bc01(0x11a)](this['x'],_0x414884),_0x5526b3=$gameMap[_0x17bc01(0x338)](this['y'],_0x414884);if(this[_0x17bc01(0x131)](_0x4a2e5c,_0x5526b3))_0x414884=_0x363dcc;return _0x414884;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x351)]=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x108)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x108)]=function(_0x3d4f8f,_0x259439,_0x1b66e7){const _0xa3bca1=_0x1e9303;return this['_vehicleType']==='airship'?this[_0xa3bca1(0x17e)]()[_0xa3bca1(0x4b2)](_0x3d4f8f,_0x259439,_0x1b66e7):VisuMZ[_0xa3bca1(0x2bb)][_0xa3bca1(0x351)][_0xa3bca1(0x1ae)](this,_0x3d4f8f,_0x259439,_0x1b66e7);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x157)]=function(){const _0x10d1d1=_0x1e9303;this['_spriteOffsetX']=0x0,this[_0x10d1d1(0xc6)]=0x0;},VisuMZ[_0x1e9303(0x2bb)]['Game_CharacterBase_screenX']=Game_CharacterBase[_0x1e9303(0xad)]['screenX'],Game_CharacterBase['prototype'][_0x1e9303(0xe6)]=function(){const _0x5d373a=_0x1e9303;return VisuMZ['EventsMoveCore'][_0x5d373a(0x2a7)][_0x5d373a(0x1ae)](this)+(this[_0x5d373a(0x21b)]||0x0);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x130)]=Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0xe0)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0xe0)]=function(){const _0x5174fd=_0x1e9303;return VisuMZ[_0x5174fd(0x2bb)][_0x5174fd(0x130)]['call'](this)+(this[_0x5174fd(0xc6)]||0x0);},Game_CharacterBase[_0x1e9303(0x14c)]=VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x27e)]['Movement']['ShiftY']??-0x6,Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x1a0)]=function(){const _0x538c33=_0x1e9303;let _0x31dca9=this[_0x538c33(0x364)]()?0x0:-Game_CharacterBase[_0x538c33(0x14c)];return this[_0x538c33(0x152)]&&(_0x31dca9*=this[_0x538c33(0x152)]),Math[_0x538c33(0x460)](_0x31dca9);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x249)]=function(){const _0x24a231=_0x1e9303;this[_0x24a231(0x258)]='';},VisuMZ[_0x1e9303(0x2bb)]['Game_CharacterBase_updatePattern']=Game_CharacterBase['prototype'][_0x1e9303(0xf2)],Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0xf2)]=function(){const _0x2dd429=_0x1e9303;if(this[_0x2dd429(0x47e)])return;if(this[_0x2dd429(0x2e3)]())return;VisuMZ[_0x2dd429(0x2bb)]['Game_CharacterBase_updatePattern'][_0x2dd429(0x1ae)](this);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x2e3)]=function(){const _0x4b228a=_0x1e9303;if(!this[_0x4b228a(0xf4)]()&&this[_0x4b228a(0x24b)]>0x0)return![];switch(String(this[_0x4b228a(0x258)])['toUpperCase']()['trim']()){case'LEFT\x20TO\x20RIGHT':this[_0x4b228a(0x265)]+=0x1;if(this[_0x4b228a(0x265)]>0x2)this['setPattern'](0x0);break;case _0x4b228a(0xab):this[_0x4b228a(0x265)]-=0x1;if(this[_0x4b228a(0x265)]<0x0)this[_0x4b228a(0x466)](0x2);break;case _0x4b228a(0x19e):case _0x4b228a(0x46c):this['turnRight90']();break;case _0x4b228a(0x348):case _0x4b228a(0x2f8):case'SPIN\x20ANTICLOCKWISE':case _0x4b228a(0x2d1):this[_0x4b228a(0x1a5)]();break;default:return![];}return!![];},Game_CharacterBase['prototype']['getEventIconData']=function(){const _0xdcfa88=_0x1e9303;return $gameSystem[_0xdcfa88(0x16a)](this);},Game_CharacterBase[_0x1e9303(0xad)]['hasEventIcon']=function(){const _0x1291ee=_0x1e9303,_0x446620=this[_0x1291ee(0x16a)]();if(!_0x446620)return![];return _0x446620[_0x1291ee(0x447)]>0x0;},Game_CharacterBase['prototype'][_0x1e9303(0x439)]=function(){const _0x10d459=_0x1e9303,_0xa538f6=this[_0x10d459(0x42d)]();return $gameMap['roundXWithDirection'](this['x'],_0xa538f6);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0xda)]=function(){const _0x56bdb9=_0x1e9303,_0x2dece4=this[_0x56bdb9(0x42d)]();return $gameMap[_0x56bdb9(0x338)](this['y'],_0x2dece4);},Game_CharacterBase[_0x1e9303(0xad)]['backX']=function(){const _0x39587a=_0x1e9303,_0x12816c=this[_0x39587a(0x2cf)](this[_0x39587a(0x42d)]());return $gameMap[_0x39587a(0x11a)](this['x'],_0x12816c);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x134)]=function(){const _0x4aea93=_0x1e9303,_0x18d603=this['reverseDir'](this[_0x4aea93(0x42d)]());return $gameMap[_0x4aea93(0x338)](this['y'],_0x18d603);},Game_CharacterBase[_0x1e9303(0xad)]['ccwX']=function(){const _0x108d67=_0x1e9303,_0x45e0ac=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this['direction']()];return $gameMap[_0x108d67(0x11a)](this['x'],_0x45e0ac);},Game_CharacterBase['prototype'][_0x1e9303(0x29d)]=function(){const _0x4e1c6c=_0x1e9303,_0x5de441=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x4e1c6c(0x42d)]()];return $gameMap[_0x4e1c6c(0x338)](this['y'],_0x5de441);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x107)]=function(){const _0x88572f=_0x1e9303,_0x48e931=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x88572f(0x42d)]()];return $gameMap[_0x88572f(0x11a)](this['x'],_0x48e931);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x48f)]=function(){const _0x4bd34a=_0x1e9303,_0x1abcff=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x4bd34a(0x42d)]()];return $gameMap[_0x4bd34a(0x338)](this['y'],_0x1abcff);},VisuMZ['EventsMoveCore']['Game_Character_setMoveRoute']=Game_Character[_0x1e9303(0xad)]['setMoveRoute'],Game_Character['prototype'][_0x1e9303(0x382)]=function(_0x55051f){const _0x5f2966=_0x1e9303;route=JsonEx['makeDeepCopy'](_0x55051f),VisuMZ[_0x5f2966(0x2bb)][_0x5f2966(0x422)][_0x5f2966(0x1ae)](this,route);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x311)]=Game_Character[_0x1e9303(0xad)][_0x1e9303(0x171)],Game_Character[_0x1e9303(0xad)][_0x1e9303(0x171)]=function(_0x2948d3){const _0x19941e=_0x1e9303;route=JsonEx[_0x19941e(0x4e1)](_0x2948d3),VisuMZ[_0x19941e(0x2bb)]['Game_Character_forceMoveRoute'][_0x19941e(0x1ae)](this,route);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x1e4)]=Game_Character[_0x1e9303(0xad)][_0x1e9303(0x465)],Game_Character[_0x1e9303(0xad)]['processMoveCommand']=function(_0x358aa2){const _0x2c1da8=_0x1e9303,_0x180c32=Game_Character,_0x5a0cd6=_0x358aa2['parameters'];if(_0x358aa2[_0x2c1da8(0x4e7)]===_0x180c32['ROUTE_SCRIPT']){let _0x48e2ca=_0x358aa2[_0x2c1da8(0x41c)][0x0];_0x48e2ca=this['convertVariableValuesInScriptCall'](_0x48e2ca),_0x48e2ca=this['convertSelfVariableValuesInScriptCall'](_0x48e2ca),this[_0x2c1da8(0x44f)](_0x358aa2,_0x48e2ca);}else VisuMZ[_0x2c1da8(0x2bb)][_0x2c1da8(0x1e4)][_0x2c1da8(0x1ae)](this,_0x358aa2);},Game_Character['prototype'][_0x1e9303(0x23b)]=function(_0x50f4f5){const _0x1b0041=_0x1e9303,_0x3416bf=/\$gameVariables\.value\((\d+)\)/gi,_0x588421=/\\V\[(\d+)\]/gi;while(_0x50f4f5[_0x1b0041(0xe9)](_0x3416bf)){_0x50f4f5=_0x50f4f5[_0x1b0041(0x25c)](_0x3416bf,(_0x444e94,_0x2a4d8a)=>$gameVariables[_0x1b0041(0x43b)](parseInt(_0x2a4d8a)));}while(_0x50f4f5[_0x1b0041(0xe9)](_0x588421)){_0x50f4f5=_0x50f4f5[_0x1b0041(0x25c)](_0x588421,(_0xe2e1ae,_0xf57249)=>$gameVariables[_0x1b0041(0x43b)](parseInt(_0xf57249)));}return _0x50f4f5;},Game_Character['prototype'][_0x1e9303(0x4d5)]=function(_0x46ffb4){const _0x390bce=_0x1e9303,_0x477968=/\\SELFVAR\[(\d+)\]/gi;while(_0x46ffb4['match'](_0x477968)){_0x46ffb4=_0x46ffb4[_0x390bce(0x25c)](_0x477968,(_0x2a129b,_0x47e709)=>getSelfVariableValue(this[_0x390bce(0x219)],this[_0x390bce(0x27a)],parseInt(_0x47e709)));}return _0x46ffb4;},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x44f)]=function(_0xc8bebf,_0x3d6b9d){const _0x37cf66=_0x1e9303;if(_0x3d6b9d[_0x37cf66(0xe9)](/ANIMATION:[ ](\d+)/i))return this[_0x37cf66(0x47b)](Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/BALLOON:[ ](.*)/i))return this[_0x37cf66(0x495)](String(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/FADE IN:[ ](\d+)/i))return this[_0x37cf66(0x2ce)](Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/FADE OUT:[ ](\d+)/i))return this['processMoveRouteFadeOut'](Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i))return this[_0x37cf66(0x312)]();if(_0x3d6b9d['match'](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i))return this['clearCarrying']();if(_0x3d6b9d[_0x37cf66(0xe9)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this['forceDashing']();if(_0x3d6b9d[_0x37cf66(0xe9)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i))return this[_0x37cf66(0x423)]();if(_0x3d6b9d[_0x37cf66(0xe9)](/HUG:[ ]LEFT/i))return this[_0x37cf66(0x24a)](_0x37cf66(0x122));if(_0x3d6b9d['match'](/HUG:[ ]RIGHT/i))return this[_0x37cf66(0x24a)](_0x37cf66(0x343));if(_0x3d6b9d['match'](/INDEX:[ ](\d+)/i))return this[_0x37cf66(0x459)](Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/INDEX:[ ]([\+\-]\d+)/i)){const _0x3f6e15=this[_0x37cf66(0x14e)]+Number(RegExp['$1']);return this[_0x37cf66(0x459)](_0x3f6e15);}if(_0x3d6b9d[_0x37cf66(0xe9)](/JUMP FORWARD:[ ](\d+)/i))return this[_0x37cf66(0x430)](Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x37cf66(0x39e)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x3d6b9d[_0x37cf66(0xe9)](/JUMP TO EVENT:[ ](\d+)/i)){const _0x4fc5cd=$gameMap['event'](Number(RegExp['$1']));return this[_0x37cf66(0x12a)](_0x4fc5cd);}if(_0x3d6b9d[_0x37cf66(0xe9)](/JUMP TO PLAYER/i))return this[_0x37cf66(0x12a)]($gamePlayer);if(_0x3d6b9d[_0x37cf66(0xe9)](/JUMP TO HOME/i)&&this[_0x37cf66(0x1c6)]){const _0x11822a=this[_0x37cf66(0x11b)],_0x2cff9c=this['_randomHomeY'];return this[_0x37cf66(0x39e)](_0x11822a,_0x2cff9c);}if(_0x3d6b9d[_0x37cf66(0xe9)](/MOVE[ ](.*)[ ]UNTIL STOP/i)){const _0x2f0924=String(RegExp['$1']),_0x53b7b1=this[_0x37cf66(0x243)](_0x3d6b9d);return this[_0x37cf66(0x472)](_0x2f0924,_0x53b7b1);}if(_0x3d6b9d['match'](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x1f9d38=Number(RegExp['$1']),_0x5cfa31=Number(RegExp['$2']),_0x1ddaaa=this[_0x37cf66(0x243)](_0x3d6b9d);return this[_0x37cf66(0x4b0)](_0x1f9d38,_0x5cfa31,_0x1ddaaa);}if(_0x3d6b9d[_0x37cf66(0xe9)](/MOVE TO EVENT:[ ](\d+)/i)){const _0xb1c3d=$gameMap[_0x37cf66(0x4f1)](Number(RegExp['$1'])),_0x43b5cf=this[_0x37cf66(0x243)](_0x3d6b9d);return this['processMoveRouteMoveToCharacter'](_0xb1c3d,_0x43b5cf);}if(_0x3d6b9d[_0x37cf66(0xe9)](/MOVE TO PLAYER/i)){const _0x213b87=this[_0x37cf66(0x243)](_0x3d6b9d);return this[_0x37cf66(0x428)]($gamePlayer,_0x213b87);}if(_0x3d6b9d[_0x37cf66(0xe9)](/MOVE TO HOME/i)&&this['eventId']){const _0x262c0b=this[_0x37cf66(0x11b)],_0x3b7e5c=this[_0x37cf66(0x247)],_0x2eb763=this[_0x37cf66(0x243)](_0x3d6b9d);return this['processMoveRouteMoveTo'](_0x262c0b,_0x3b7e5c,_0x2eb763);}if(_0x3d6b9d[_0x37cf66(0xe9)](/MOVE LOWER LEFT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x1,Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/MOVE DOWN:[ ](\d+)/i))return this[_0x37cf66(0x4de)](0x2,Number(RegExp['$1']));if(_0x3d6b9d['match'](/MOVE LOWER RIGHT:[ ](\d+)/i))return this[_0x37cf66(0x4de)](0x3,Number(RegExp['$1']));if(_0x3d6b9d['match'](/MOVE LEFT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x4,Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/MOVE RIGHT:[ ](\d+)/i))return this[_0x37cf66(0x4de)](0x6,Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/MOVE UPPER LEFT:[ ](\d+)/i))return this[_0x37cf66(0x4de)](0x7,Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/MOVE UP:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x8,Number(RegExp['$1']));if(_0x3d6b9d['match'](/MOVE UPPER RIGHT:[ ](\d+)/i))return this[_0x37cf66(0x4de)](0x9,Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/OPACITY:[ ](\d+)([%％])/i)){const _0x554e15=Math[_0x37cf66(0x460)](Number(RegExp['$1'])/0x64*0xff);return this[_0x37cf66(0x1be)](_0x554e15[_0x37cf66(0x226)](0x0,0xff));}if(_0x3d6b9d[_0x37cf66(0xe9)](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0x218736=this[_0x37cf66(0xbf)]+Math[_0x37cf66(0x460)](Number(RegExp['$1'])/0x64*0xff);return this[_0x37cf66(0x1be)](_0x218736['clamp'](0x0,0xff));}if(_0x3d6b9d['match'](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x508f43=this[_0x37cf66(0xbf)]+Number(RegExp['$1']);return this[_0x37cf66(0x1be)](_0x508f43[_0x37cf66(0x226)](0x0,0xff));}if(_0x3d6b9d[_0x37cf66(0xe9)](/PATTERN LOCK:[ ](\d+)/i))return this['processMoveRoutePatternLock'](Number(RegExp['$1']));if(_0x3d6b9d[_0x37cf66(0xe9)](/PATTERN UNLOCK/i))return this[_0x37cf66(0x47e)]=![];if(_0x3d6b9d['match'](/POSE:[ ](.*)/i)){const _0x52efb2=String(RegExp['$1'])['toUpperCase']()[_0x37cf66(0x203)]();return this[_0x37cf66(0x48d)](_0x52efb2);}if(_0x3d6b9d[_0x37cf66(0xe9)](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x3853ee=Number(RegExp['$1']),_0x1dcf6e=Number(RegExp['$2']);return this[_0x37cf66(0x42a)](_0x3853ee,_0x1dcf6e);}if(_0x3d6b9d[_0x37cf66(0xe9)](/STEP TOWARD EVENT:[ ](\d+)/i)){const _0x1fa5b2=$gameMap[_0x37cf66(0x4f1)](Number(RegExp['$1']));return this[_0x37cf66(0x1fe)](_0x1fa5b2);}if(_0x3d6b9d[_0x37cf66(0xe9)](/STEP TOWARD PLAYER/i))return this[_0x37cf66(0x1fe)]($gamePlayer);if(_0x3d6b9d[_0x37cf66(0xe9)](/STEP TOWARD HOME/i)&&this[_0x37cf66(0x1c6)]){const _0x12ff57=this['_randomHomeX'],_0xe91cbe=this[_0x37cf66(0x247)];return this[_0x37cf66(0x42a)](_0x12ff57,_0xe91cbe);}if(_0x3d6b9d[_0x37cf66(0xe9)](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['moveAwayFromPoint'](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x3d6b9d[_0x37cf66(0xe9)](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x319bc5=$gameMap[_0x37cf66(0x4f1)](Number(RegExp['$1']));return this['moveAwayFromCharacter'](_0x319bc5);}if(_0x3d6b9d['match'](/STEP AWAY FROM PLAYER/i))return this[_0x37cf66(0x43d)]($gamePlayer);if(_0x3d6b9d[_0x37cf66(0xe9)](/STEP AWAY FROM HOME/i)&&this['eventId']){const _0x299456=this[_0x37cf66(0x11b)],_0x312dc0=this[_0x37cf66(0x247)];return this[_0x37cf66(0x1d7)](_0x299456,_0x312dc0);}if(_0x3d6b9d['match'](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x37cf66(0x4cc)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x3d6b9d['match'](/TURN TO EVENT:[ ](\d+)/i)){const _0x3ce411=$gameMap[_0x37cf66(0x4f1)](Number(RegExp['$1']));return this[_0x37cf66(0x419)](_0x3ce411);}if(_0x3d6b9d[_0x37cf66(0xe9)](/TURN TO PLAYER/i))return this['turnTowardCharacter']($gamePlayer);if(_0x3d6b9d[_0x37cf66(0xe9)](/TURN TO HOME/i)&&this[_0x37cf66(0x1c6)]){const _0x3cbce2=this[_0x37cf66(0x11b)],_0x3247af=this[_0x37cf66(0x247)];return this['turnTowardPoint'](_0x3cbce2,_0x3247af);}if(_0x3d6b9d['match'](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x37cf66(0x106)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x3d6b9d[_0x37cf66(0xe9)](/TURN AWAY FROM EVENT:[ ](\d+)/i)){const _0x4d267e=$gameMap[_0x37cf66(0x4f1)](Number(RegExp['$1']));return this[_0x37cf66(0x2a0)](_0x4d267e);}if(_0x3d6b9d[_0x37cf66(0xe9)](/TURN AWAY FROM PLAYER/i))return this[_0x37cf66(0x2a0)]($gamePlayer);if(_0x3d6b9d['match'](/TURN AWAY FROM HOME/i)&&this[_0x37cf66(0x1c6)]){const _0x5af07b=this[_0x37cf66(0x11b)],_0x21802e=this[_0x37cf66(0x247)];return this['turnAwayFromPoint'](_0x5af07b,_0x21802e);}if(_0x3d6b9d['match'](/TURN LOWER LEFT/i))return this[_0x37cf66(0x271)](0x1);if(_0x3d6b9d[_0x37cf66(0xe9)](/TURN LOWER RIGHT/i))return this[_0x37cf66(0x271)](0x3);if(_0x3d6b9d[_0x37cf66(0xe9)](/TURN UPPER LEFT/i))return this['setDirection'](0x7);if(_0x3d6b9d['match'](/TURN UPPER RIGHT/i))return this['setDirection'](0x9);if(_0x3d6b9d[_0x37cf66(0xe9)](/Self Switch[ ](.*):[ ](.*)/i))return this[_0x37cf66(0x147)](RegExp['$1'],RegExp['$2']);if(_0x3d6b9d[_0x37cf66(0xe9)](/Self Variable[ ](.*):[ ](.*)/i))return this[_0x37cf66(0x1a7)](RegExp['$1'],RegExp['$2']);if(_0x3d6b9d[_0x37cf66(0xe9)](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x37cf66(0x332)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x3d6b9d[_0x37cf66(0xe9)](/TELEPORT TO EVENT:[ ](\d+)/i)){const _0x2810c4=$gameMap[_0x37cf66(0x4f1)](Number(RegExp['$1']));return this['processMoveRouteTeleportToCharacter'](_0x2810c4);}if(_0x3d6b9d['match'](/TELEPORT TO PLAYER/i))return this[_0x37cf66(0x4bc)]($gamePlayer);if(_0x3d6b9d[_0x37cf66(0xe9)](/TELEPORT TO HOME/i)&&this[_0x37cf66(0x1c6)]){const _0x255544=this[_0x37cf66(0x11b)],_0x258916=this[_0x37cf66(0x247)];return this[_0x37cf66(0x332)](_0x255544,_0x258916);}try{VisuMZ[_0x37cf66(0x2bb)][_0x37cf66(0x1e4)][_0x37cf66(0x1ae)](this,_0xc8bebf);}catch(_0xffcce4){if($gameTemp['isPlaytest']())console[_0x37cf66(0x2da)](_0xffcce4);}},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x47b)]=function(_0x4f9af3){const _0x5de028=_0x1e9303;$gameTemp[_0x5de028(0x44e)]([this],_0x4f9af3);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x495)]=function(_0x6e8d2f){const _0xf3ca06=_0x1e9303;let _0x165bff=0x0;switch(_0x6e8d2f[_0xf3ca06(0x3dc)]()[_0xf3ca06(0x203)]()){case'!':case _0xf3ca06(0x2f3):_0x165bff=0x1;break;case'?':case _0xf3ca06(0xbe):_0x165bff=0x2;break;case _0xf3ca06(0x2b3):case'NOTE':case'MUSIC\x20NOTE':case _0xf3ca06(0x414):case _0xf3ca06(0x20b):_0x165bff=0x3;break;case'HEART':case _0xf3ca06(0x407):_0x165bff=0x4;break;case _0xf3ca06(0x179):_0x165bff=0x5;break;case _0xf3ca06(0x2b1):_0x165bff=0x6;break;case _0xf3ca06(0x12c):case _0xf3ca06(0x2b9):case'FRUSTRATION':_0x165bff=0x7;break;case _0xf3ca06(0xa7):case _0xf3ca06(0x35d):_0x165bff=0x8;break;case _0xf3ca06(0x245):case _0xf3ca06(0xf3):case _0xf3ca06(0x474):case'LIGHT-BULB':case _0xf3ca06(0x4a6):_0x165bff=0x9;break;case'Z':case'ZZ':case _0xf3ca06(0x4f2):case _0xf3ca06(0x34d):_0x165bff=0xa;break;case _0xf3ca06(0x497):_0x165bff=0xb;break;case _0xf3ca06(0x2a9):_0x165bff=0xc;break;case _0xf3ca06(0x349):_0x165bff=0xd;break;case _0xf3ca06(0x181):_0x165bff=0xe;break;case'USER-DEFINED\x205':_0x165bff=0xf;break;}$gameTemp[_0xf3ca06(0x322)](this,_0x165bff);},Game_Character['prototype'][_0x1e9303(0x2ce)]=function(_0xb1fc1b){const _0x4f97cf=_0x1e9303;_0xb1fc1b+=this['_opacity'],this['setOpacity'](_0xb1fc1b[_0x4f97cf(0x226)](0x0,0xff));if(this[_0x4f97cf(0xbf)]<0xff)this[_0x4f97cf(0x1ed)]--;},Game_Character[_0x1e9303(0xad)]['processMoveRouteFadeOut']=function(_0x3c9b02){const _0x294671=_0x1e9303;_0x3c9b02=this['_opacity']-_0x3c9b02,this[_0x294671(0x1be)](_0x3c9b02[_0x294671(0x226)](0x0,0xff));if(this['_opacity']>0x0)this[_0x294671(0x1ed)]--;},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x24a)]=function(_0x4ab7ba){const _0x1d71f6=_0x1e9303,_0x5ef2b9=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0x14721a=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x46a490=this[_0x1d71f6(0x42d)](),_0x20b385=(_0x4ab7ba===_0x1d71f6(0x122)?_0x5ef2b9:_0x14721a)[_0x46a490],_0x4904dd=(_0x4ab7ba===_0x1d71f6(0x122)?_0x14721a:_0x5ef2b9)[_0x46a490];if(this[_0x1d71f6(0x108)](this['x'],this['y'],_0x20b385))_0x4ab7ba==='left'?this[_0x1d71f6(0x1a5)]():this[_0x1d71f6(0x482)]();else!this[_0x1d71f6(0x108)](this['x'],this['y'],this[_0x1d71f6(0x42d)]())&&(this['canPass'](this['x'],this['y'],_0x4904dd)?_0x4ab7ba===_0x1d71f6(0x122)?this['turnRight90']():this[_0x1d71f6(0x1a5)]():this['turn180']());this[_0x1d71f6(0x108)](this['x'],this['y'],this[_0x1d71f6(0x42d)]())&&this[_0x1d71f6(0x1fd)]();},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x459)]=function(_0x41b200){const _0x428d72=_0x1e9303;if(ImageManager[_0x428d72(0x1fb)](this['_characterName']))return;_0x41b200=_0x41b200[_0x428d72(0x226)](0x0,0x7),this[_0x428d72(0x35c)](this[_0x428d72(0x1c1)],_0x41b200);},Game_Character['prototype'][_0x1e9303(0x430)]=function(_0x418290){const _0x35b5a5=_0x1e9303;switch(this[_0x35b5a5(0x42d)]()){case 0x1:this[_0x35b5a5(0x4b8)](-_0x418290,_0x418290);break;case 0x2:this['jump'](0x0,_0x418290);break;case 0x3:this[_0x35b5a5(0x4b8)](_0x418290,_0x418290);break;case 0x4:this[_0x35b5a5(0x4b8)](-_0x418290,0x0);break;case 0x6:this['jump'](_0x418290,0x0);break;case 0x7:this[_0x35b5a5(0x4b8)](-_0x418290,-_0x418290);break;case 0x8:this[_0x35b5a5(0x4b8)](0x0,-_0x418290);break;case 0x9:this[_0x35b5a5(0x4b8)](_0x418290,-_0x418290);break;}},Game_Character[_0x1e9303(0xad)]['processMoveRouteJumpTo']=function(_0x49d0de,_0x441580){const _0x8b902=_0x1e9303,_0x12665d=Math[_0x8b902(0x460)](_0x49d0de-this['x']),_0x11e9df=Math[_0x8b902(0x460)](_0x441580-this['y']);this[_0x8b902(0x4b8)](_0x12665d,_0x11e9df);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x12a)]=function(_0x1cafc4){if(_0x1cafc4)this['processMoveRouteJumpTo'](_0x1cafc4['x'],_0x1cafc4['y']);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x42a)]=function(_0x3c7a94,_0x3c9b80,_0x2a635a){const _0x17d6e9=_0x1e9303;let _0x40364e=0x0;if(_0x2a635a)$gameTemp[_0x17d6e9(0x23c)]=!![];$gameMap[_0x17d6e9(0xce)]()?_0x40364e=this['findDiagonalDirectionTo'](_0x3c7a94,_0x3c9b80):_0x40364e=this['findDirectionTo'](_0x3c7a94,_0x3c9b80);if(_0x2a635a)$gameTemp[_0x17d6e9(0x23c)]=![];this['executeMoveDir8'](_0x40364e),this['setMovementSuccess'](!![]);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x1fe)]=function(_0x59a467){const _0xaebd50=_0x1e9303;if(_0x59a467)this[_0xaebd50(0x42a)](_0x59a467['x'],_0x59a467['y']);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x403)]=function(_0x4c053d,_0x24a0b6){const _0x26392d=_0x1e9303,_0x55e473=this[_0x26392d(0x2d6)](_0x4c053d),_0x35f5d0=this[_0x26392d(0x4cf)](_0x24a0b6);},Game_Character[_0x1e9303(0xad)]['checkCollisionKeywords']=function(_0x20933b){const _0x27a768=_0x1e9303;if(_0x20933b[_0x27a768(0xe9)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else return _0x20933b[_0x27a768(0xe9)](/(?:AVOID|EVADE|DODGE)/i)?![]:![];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x182)]=Game_Event[_0x1e9303(0xad)][_0x1e9303(0x4b5)],Game_Event[_0x1e9303(0xad)][_0x1e9303(0x4b5)]=function(_0x755b25,_0x255813){const _0x39f48c=_0x1e9303;if($gameTemp['_moveAllowPlayerCollision'])return![];return VisuMZ[_0x39f48c(0x2bb)][_0x39f48c(0x182)][_0x39f48c(0x1ae)](this,_0x755b25,_0x255813);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x472)]=function(_0x427527,_0x127a35){const _0x1f3da6=_0x1e9303,_0x2c5791=['',_0x1f3da6(0x37a),_0x1f3da6(0x13f),_0x1f3da6(0x3d7),'LEFT','',_0x1f3da6(0x425),'UPPER\x20LEFT','UP',_0x1f3da6(0x1e7)],_0x5e9e18=_0x2c5791[_0x1f3da6(0x255)](_0x427527[_0x1f3da6(0x3dc)]()[_0x1f3da6(0x203)]());if(_0x5e9e18<=0x0)return;if(_0x127a35)$gameTemp['_moveAllowPlayerCollision']=!![];if(this[_0x1f3da6(0x108)](this['x'],this['y'],_0x5e9e18)){if(_0x127a35)$gameTemp[_0x1f3da6(0x23c)]=![];this[_0x1f3da6(0x1d1)](_0x5e9e18),this[_0x1f3da6(0x1ed)]-=0x1;}if(_0x127a35)$gameTemp[_0x1f3da6(0x23c)]=![];},Game_Character['prototype']['processMoveRouteMoveTo']=function(_0x37bc62,_0x2d2200,_0x325003){const _0x5b26e4=_0x1e9303;this[_0x5b26e4(0x42a)](_0x37bc62,_0x2d2200,_0x325003);if(this['x']!==_0x37bc62||this['y']!==_0x2d2200)this['_moveRouteIndex']--;},Game_Character[_0x1e9303(0xad)]['processMoveRouteMoveToCharacter']=function(_0x26cc35,_0xe6de2e){const _0x3c10bf=_0x1e9303;if(_0x26cc35&&!_0x26cc35[_0x3c10bf(0x24d)]){this[_0x3c10bf(0x4b0)](_0x26cc35['x'],_0x26cc35['y'],_0xe6de2e);if(_0x26cc35[_0x3c10bf(0x36b)]()&&this[_0x3c10bf(0x36b)]()){const _0x2df0fa=$gameMap[_0x3c10bf(0x2cd)](this['x'],this['y'],_0x26cc35['x'],_0x26cc35['y']);if(_0x2df0fa<=0x1)this[_0x3c10bf(0x1ed)]++;}}},Game_Character['prototype'][_0x1e9303(0x4de)]=function(_0x5c3009,_0x178624){const _0x2d529d=_0x1e9303;_0x178624=_0x178624||0x0;const _0x4767aa={'code':0x1,'indent':null,'parameters':[]};_0x4767aa[_0x2d529d(0x4e7)]=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x5c3009],this['_moveRoute']['list'][this[_0x2d529d(0x1ed)]][_0x2d529d(0x41c)][0x0]='';while(_0x178624--){this[_0x2d529d(0x114)]['list'][_0x2d529d(0x4a2)](this[_0x2d529d(0x1ed)]+0x1,0x0,_0x4767aa);}},Game_Character['prototype'][_0x1e9303(0x113)]=function(_0x3990c3){const _0x32a318=_0x1e9303;this['_patternLocked']=!![],this[_0x32a318(0x466)](_0x3990c3);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x147)]=function(_0x5910c9,_0x21bb86){const _0x57c7dc=_0x1e9303;if(this===$gamePlayer)return;const _0x8db198=[this['_mapId'],this[_0x57c7dc(0x27a)],'A'];_0x5910c9[_0x57c7dc(0xe9)](/\b[ABCD]\b/i)?_0x8db198[0x2]=String(_0x5910c9)[_0x57c7dc(0x233)](0x0)['toUpperCase']()[_0x57c7dc(0x203)]():_0x8db198[0x2]=_0x57c7dc(0x449)[_0x57c7dc(0x29a)](_0x5910c9);switch(_0x21bb86[_0x57c7dc(0x3dc)]()[_0x57c7dc(0x203)]()){case'ON':case _0x57c7dc(0x4d9):$gameSelfSwitches[_0x57c7dc(0x48e)](_0x8db198,!![]);break;case _0x57c7dc(0x48c):case _0x57c7dc(0x112):$gameSelfSwitches[_0x57c7dc(0x48e)](_0x8db198,![]);break;case'TOGGLE':$gameSelfSwitches[_0x57c7dc(0x48e)](_0x8db198,!$gameSelfSwitches[_0x57c7dc(0x43b)](_0x8db198));break;}},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x1a7)]=function(_0x534114,_0x571873){const _0x36dad9=_0x1e9303;if(this===$gamePlayer)return;const _0x21f2c1=[this[_0x36dad9(0x219)],this[_0x36dad9(0x27a)],_0x36dad9(0x202)[_0x36dad9(0x29a)](_0x534114)];$gameSelfSwitches['setValue'](_0x21f2c1,Number(_0x571873));},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x332)]=function(_0x2e4bd0,_0x970e41){const _0x517ec5=_0x1e9303;this[_0x517ec5(0x49c)](_0x2e4bd0,_0x970e41);},Game_Character['prototype']['processMoveRouteTeleportToCharacter']=function(_0x3d6b5a){const _0x2f3230=_0x1e9303;if(_0x3d6b5a)this[_0x2f3230(0x332)](_0x3d6b5a['x'],_0x3d6b5a['y']);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x482)]=function(){const _0x1ed4c5=_0x1e9303;switch(this[_0x1ed4c5(0x42d)]()){case 0x1:this['setDirection'](0x7);break;case 0x2:this[_0x1ed4c5(0x271)](0x4);break;case 0x3:this[_0x1ed4c5(0x271)](0x1);break;case 0x4:this[_0x1ed4c5(0x271)](0x8);break;case 0x6:this['setDirection'](0x2);break;case 0x7:this[_0x1ed4c5(0x271)](0x9);break;case 0x8:this[_0x1ed4c5(0x271)](0x6);break;case 0x9:this['setDirection'](0x3);break;}},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x1a5)]=function(){const _0x39d19c=_0x1e9303;switch(this[_0x39d19c(0x42d)]()){case 0x1:this[_0x39d19c(0x271)](0x3);break;case 0x2:this[_0x39d19c(0x271)](0x6);break;case 0x3:this[_0x39d19c(0x271)](0x9);break;case 0x4:this[_0x39d19c(0x271)](0x2);break;case 0x6:this[_0x39d19c(0x271)](0x8);break;case 0x7:this['setDirection'](0x1);break;case 0x8:this['setDirection'](0x4);break;case 0x9:this[_0x39d19c(0x271)](0x7);break;}},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x25a)]=function(_0x293b61,_0x4a5a39,_0x4d1786){const _0x1b3e45=_0x1e9303,_0x5e5245=this[_0x1b3e45(0x2d6)](_0x293b61),_0xe1711c=this[_0x1b3e45(0x4cf)](_0x4a5a39);if($gameMap[_0x1b3e45(0xce)]()){if(_0x4d1786||this[_0x1b3e45(0x121)]()){if(_0x5e5245>0x0&&_0xe1711c<0x0)return 0x1;if(_0x5e5245<0x0&&_0xe1711c<0x0)return 0x3;if(_0x5e5245>0x0&&_0xe1711c>0x0)return 0x7;if(_0x5e5245<0x0&&_0xe1711c>0x0)return 0x9;}}if(Math['abs'](_0x5e5245)>Math[_0x1b3e45(0x2eb)](_0xe1711c))return _0x5e5245>0x0?0x4:0x6;else{if(_0xe1711c!==0x0)return _0xe1711c>0x0?0x8:0x2;}return 0x0;},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x32c)]=function(_0x52b52e,_0x36a424,_0x1f24d6){const _0x294ed4=_0x1e9303,_0x10a2d2=this[_0x294ed4(0x2d6)](_0x52b52e),_0x3aa69f=this[_0x294ed4(0x4cf)](_0x36a424);if($gameMap['isSupportDiagonalMovement']()){if(_0x1f24d6||this['isSpriteVS8dir']()){if(_0x10a2d2>0x0&&_0x3aa69f<0x0)return 0x9;if(_0x10a2d2<0x0&&_0x3aa69f<0x0)return 0x7;if(_0x10a2d2>0x0&&_0x3aa69f>0x0)return 0x3;if(_0x10a2d2<0x0&&_0x3aa69f>0x0)return 0x1;}}if(Math[_0x294ed4(0x2eb)](_0x10a2d2)>Math['abs'](_0x3aa69f))return _0x10a2d2>0x0?0x6:0x4;else{if(_0x3aa69f!==0x0)return _0x3aa69f>0x0?0x2:0x8;}return 0x0;},Game_Character[_0x1e9303(0xad)]['moveTowardPoint']=function(_0x2f0149,_0x5e0881){const _0x4a184f=this['getDirectionToPoint'](_0x2f0149,_0x5e0881,!![]);if(_0x4a184f)this['executeMoveDir8'](_0x4a184f);},Game_Character[_0x1e9303(0xad)]['moveAwayFromPoint']=function(_0x2959a5,_0x5c5e1b){const _0x2efd76=_0x1e9303,_0x586e7d=this[_0x2efd76(0x32c)](_0x2959a5,_0x5c5e1b,!![]);if(_0x586e7d)this[_0x2efd76(0x1d1)](_0x586e7d);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x4ac)]=function(_0xa20de3,_0x4acc6b){const _0x2fd701=this['getDirectionToPoint'](_0xa20de3,_0x4acc6b,![]);if(_0x2fd701)this['setDirection'](_0x2fd701);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x106)]=function(_0x1a0078,_0x1ff24f){const _0x49e9a3=this['getDirectionFromPoint'](_0x1a0078,_0x1ff24f,![]);if(_0x49e9a3)this['setDirection'](_0x49e9a3);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x3b4)]=function(_0x255071){const _0x1ea757=_0x1e9303;if(_0x255071)this[_0x1ea757(0x4cc)](_0x255071['x'],_0x255071['y']);},Game_Character[_0x1e9303(0xad)]['moveAwayFromCharacter']=function(_0x55d29e){const _0x5550c0=_0x1e9303;if(_0x55d29e)this[_0x5550c0(0x1d7)](_0x55d29e['x'],_0x55d29e['y']);},Game_Character['prototype'][_0x1e9303(0x419)]=function(_0x1832c8){if(_0x1832c8)this['turnTowardPoint'](_0x1832c8['x'],_0x1832c8['y']);},Game_Character[_0x1e9303(0xad)][_0x1e9303(0x2a0)]=function(_0x5f4aae){const _0x1c4b47=_0x1e9303;if(_0x5f4aae)this[_0x1c4b47(0x106)](_0x5f4aae['x'],_0x5f4aae['y']);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x2d3)]=Game_Player[_0x1e9303(0xad)][_0x1e9303(0x22f)],Game_Player[_0x1e9303(0xad)][_0x1e9303(0x22f)]=function(){const _0x2942a7=_0x1e9303;if(!Game_CharacterBase[_0x2942a7(0x359)]&&this[_0x2942a7(0x3db)]())return![];if(this[_0x2942a7(0x242)])return!![];return VisuMZ[_0x2942a7(0x2bb)][_0x2942a7(0x2d3)][_0x2942a7(0x1ae)](this);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x11e)]=Game_Player[_0x1e9303(0xad)][_0x1e9303(0x35a)],Game_Player['prototype'][_0x1e9303(0x35a)]=function(){const _0x5f3a53=_0x1e9303;return $gameMap[_0x5f3a53(0xce)]()?this['getInputDir8']():VisuMZ['EventsMoveCore']['Game_Player_getInputDirection'][_0x5f3a53(0x1ae)](this);},Game_Player[_0x1e9303(0xad)]['getInputDir8']=function(){const _0x4f72e7=_0x1e9303;return Input[_0x4f72e7(0x299)];},Game_Player[_0x1e9303(0xad)]['moveByInput']=function(){const _0x516790=_0x1e9303;if($gameSystem[_0x516790(0x436)]())return 0x0;if(!this[_0x516790(0xb3)]()&&this[_0x516790(0x1a9)]()){let _0x2be54a=this[_0x516790(0x35a)]();if(_0x2be54a>0x0)$gameTemp[_0x516790(0x468)]();else{if($gameTemp[_0x516790(0x369)]()){const _0xe5f320=$gameTemp['destinationX'](),_0x5a1928=$gameTemp['destinationY']();this[_0x516790(0x321)](_0xe5f320,_0x5a1928)?_0x2be54a=this[_0x516790(0x263)](_0xe5f320,_0x5a1928):_0x2be54a=this[_0x516790(0x315)](_0xe5f320,_0x5a1928);}}_0x2be54a>0x0?(this[_0x516790(0x488)]=this[_0x516790(0x488)]||0x0,this[_0x516790(0x2e7)]()?this[_0x516790(0x271)](_0x2be54a):this[_0x516790(0x21c)](_0x2be54a),this[_0x516790(0x488)]++):this['_inputTime']=0x0;}},Game_Player[_0x1e9303(0xad)][_0x1e9303(0x2e7)]=function(){const _0x96b261=_0x1e9303,_0x38169b=VisuMZ[_0x96b261(0x2bb)][_0x96b261(0x27e)]['Movement'];if(!_0x38169b[_0x96b261(0x1d5)])return![];if($gameTemp[_0x96b261(0x369)]())return![];if(this[_0x96b261(0x22f)]()||this[_0x96b261(0xb3)]()||this[_0x96b261(0x3db)]())return![];return this['_inputTime']<_0x38169b[_0x96b261(0x1b3)];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x3ab)]=Game_Player['prototype'][_0x1e9303(0x21c)],Game_Player[_0x1e9303(0xad)][_0x1e9303(0x21c)]=function(_0xe5b17f){const _0x41c8f6=_0x1e9303;$gameMap[_0x41c8f6(0xce)]()?this[_0x41c8f6(0x1d1)](_0xe5b17f):VisuMZ[_0x41c8f6(0x2bb)][_0x41c8f6(0x3ab)][_0x41c8f6(0x1ae)](this,_0xe5b17f);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x19d)]=Game_Player['prototype'][_0x1e9303(0x40c)],Game_Player['prototype']['isMapPassable']=function(_0x3bfc0d,_0x27d512,_0x20797c){const _0x4c0680=_0x1e9303;if($gameMap[_0x4c0680(0x28f)](_0x3bfc0d,_0x27d512,_0x20797c,_0x4c0680(0xb8)))return this[_0x4c0680(0x123)]()&&this[_0x4c0680(0x17e)]()?this[_0x4c0680(0x17e)]()[_0x4c0680(0x40c)](_0x3bfc0d,_0x27d512,_0x20797c):!![];if($gameMap['isRegionForbidPass'](_0x3bfc0d,_0x27d512,_0x20797c,_0x4c0680(0xb8)))return![];return VisuMZ[_0x4c0680(0x2bb)][_0x4c0680(0x19d)][_0x4c0680(0x1ae)](this,_0x3bfc0d,_0x27d512,_0x20797c);},VisuMZ[_0x1e9303(0x2bb)]['Game_Player_checkEventTriggerHere']=Game_Player['prototype'][_0x1e9303(0x3c6)],Game_Player[_0x1e9303(0xad)][_0x1e9303(0x3c6)]=function(_0x31ce71){const _0x24687c=_0x1e9303;VisuMZ[_0x24687c(0x2bb)][_0x24687c(0x31a)][_0x24687c(0x1ae)](this,_0x31ce71);if(this[_0x24687c(0x1ac)]()){this['checkEventTriggerEventsMoveCore'](_0x31ce71);if(_0x31ce71['includes'](0x0)&&this[_0x24687c(0x462)]()===_0x24687c(0x463))this[_0x24687c(0x1c0)](this['x'],this['y']);else(_0x31ce71[_0x24687c(0x224)](0x1)||_0x31ce71[_0x24687c(0x224)](0x2))&&this['startMapCommonEventOnTouch']();}},VisuMZ['EventsMoveCore']['Game_Player_checkEventTriggerThere']=Game_Player[_0x1e9303(0xad)][_0x1e9303(0x46d)],Game_Player[_0x1e9303(0xad)]['checkEventTriggerThere']=function(_0x2efccc){const _0x5aa64b=_0x1e9303;VisuMZ[_0x5aa64b(0x2bb)][_0x5aa64b(0x396)][_0x5aa64b(0x1ae)](this,_0x2efccc);if(this[_0x5aa64b(0x1ac)]()&&_0x2efccc['includes'](0x0)&&this[_0x5aa64b(0x462)]()===_0x5aa64b(0x145)){const _0x37c575=this[_0x5aa64b(0x42d)](),_0x4b9e4a=$gameMap['roundXWithDirection'](this['x'],_0x37c575),_0x2d9433=$gameMap[_0x5aa64b(0x338)](this['y'],_0x37c575);this['startMapCommonEventOnOK'](_0x4b9e4a,_0x2d9433);}},Game_Player[_0x1e9303(0xad)][_0x1e9303(0x294)]=function(_0x33e13c){const _0x4d07f8=_0x1e9303;if($gameMap[_0x4d07f8(0x394)]())return;if($gameMap[_0x4d07f8(0xb7)]())return;const _0x1c86cc=$gameMap[_0x4d07f8(0x1a2)]();for(const _0x3cf255 of _0x1c86cc){if(!_0x3cf255)continue;if(!_0x3cf255['isTriggerIn'](_0x33e13c))continue;if(this[_0x4d07f8(0xf8)](_0x3cf255))return _0x3cf255[_0x4d07f8(0x43f)]();if(this['meetActivationProximityConditions'](_0x3cf255))return _0x3cf255[_0x4d07f8(0x43f)]();}},Game_Player['prototype'][_0x1e9303(0xf8)]=function(_0x2e8bd5){const _0x483dd3=_0x1e9303;if($gameMap[_0x483dd3(0x394)]())return![];if($gameMap[_0x483dd3(0xb7)]())return![];return _0x2e8bd5[_0x483dd3(0xcf)]()[_0x483dd3(0x224)](this[_0x483dd3(0x4ea)]());},Game_Player[_0x1e9303(0xad)][_0x1e9303(0x223)]=function(_0x456b7b){const _0x38066c=_0x1e9303;if($gameMap[_0x38066c(0x394)]())return![];if($gameMap[_0x38066c(0xb7)]())return![];if([_0x38066c(0x40e),_0x38066c(0x103)][_0x38066c(0x224)](_0x456b7b[_0x38066c(0x354)]()))return![];const _0x44b5bc=_0x456b7b[_0x38066c(0x354)](),_0x5ad432=_0x456b7b[_0x38066c(0x3aa)]();switch(_0x44b5bc){case _0x38066c(0x191):const _0x1962fd=$gameMap[_0x38066c(0x2cd)](this['x'],this['y'],_0x456b7b['x'],_0x456b7b['y']);return _0x456b7b[_0x38066c(0x3aa)]()>=_0x1962fd;break;case _0x38066c(0x3ee):return _0x5ad432>=Math['abs'](_0x456b7b[_0x38066c(0x2d6)](this['x']))&&_0x5ad432>=Math[_0x38066c(0x2eb)](_0x456b7b[_0x38066c(0x4cf)](this['y']));break;case _0x38066c(0x244):return _0x5ad432>=Math[_0x38066c(0x2eb)](_0x456b7b[_0x38066c(0x4cf)](this['y']));break;case _0x38066c(0x371):return _0x5ad432>=Math[_0x38066c(0x2eb)](_0x456b7b['deltaXFrom'](this['x']));break;case _0x38066c(0x413):return![];break;}},Game_Player[_0x1e9303(0xad)][_0x1e9303(0x1c0)]=function(_0x40cecf,_0x40e53f){const _0x444ecf=_0x1e9303;if($gameMap[_0x444ecf(0x394)]())return;if($gameMap[_0x444ecf(0xb7)]())return;let _0x3cbe86=VisuMZ[_0x444ecf(0x2bb)][_0x444ecf(0x27e)][_0x444ecf(0x36c)],_0x362f31=$gameMap['regionId'](_0x40cecf,_0x40e53f);const _0x13f2c2=_0x444ecf(0x323)[_0x444ecf(0x29a)](_0x362f31);_0x3cbe86[_0x13f2c2]&&$gameTemp[_0x444ecf(0x358)](_0x3cbe86[_0x13f2c2]);},Game_Player['prototype'][_0x1e9303(0x462)]=function(){const _0x2563a8=_0x1e9303;return VisuMZ[_0x2563a8(0x2bb)]['Settings'][_0x2563a8(0x421)];},Game_Player[_0x1e9303(0xad)][_0x1e9303(0x3f9)]=function(){const _0x649633=_0x1e9303;if($gameMap['isEventRunning']())return;if($gameMap[_0x649633(0xb7)]())return;let _0x447d42=VisuMZ[_0x649633(0x2bb)][_0x649633(0x27e)]['RegionTouch'];const _0x55ce97=_0x649633(0x323)[_0x649633(0x29a)](this[_0x649633(0x4ea)]());_0x447d42[_0x55ce97]&&$gameTemp[_0x649633(0x358)](_0x447d42[_0x55ce97]);},VisuMZ['EventsMoveCore'][_0x1e9303(0x42f)]=Game_Player[_0x1e9303(0xad)][_0x1e9303(0x4d4)],Game_Player[_0x1e9303(0xad)][_0x1e9303(0x4d4)]=function(){const _0x32df9d=_0x1e9303;VisuMZ['EventsMoveCore']['Game_Player_increaseSteps'][_0x32df9d(0x1ae)](this),VisuMZ['MoveAllSynchTargets'](0x0);},Game_Player[_0x1e9303(0xad)][_0x1e9303(0x250)]=function(){VisuMZ['FaceSynchAllSynchTargets'](0x0);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x3a1)]=Game_Follower['prototype'][_0x1e9303(0x30c)],Game_Follower[_0x1e9303(0xad)][_0x1e9303(0x30c)]=function(_0x4ebbcc){const _0x5c55ee=_0x1e9303;VisuMZ['EventsMoveCore'][_0x5c55ee(0x3a1)]['call'](this,_0x4ebbcc),this[_0x5c55ee(0x184)]=![];},Game_Follower[_0x1e9303(0xad)][_0x1e9303(0x22f)]=function(){const _0x28c824=_0x1e9303;if(this[_0x28c824(0x184)])return Game_Character[_0x28c824(0xad)][_0x28c824(0x22f)][_0x28c824(0x1ae)](this);return $gamePlayer[_0x28c824(0x22f)]();},Game_Follower[_0x1e9303(0xad)][_0x1e9303(0x3f0)]=function(){const _0x386c96=_0x1e9303;if(this[_0x386c96(0x184)])return Game_Character['prototype'][_0x386c96(0x3f0)][_0x386c96(0x1ae)](this);return $gamePlayer[_0x386c96(0x3f0)]()&&this[_0x386c96(0x319)];},Game_Follower[_0x1e9303(0xad)][_0x1e9303(0x406)]=function(){const _0x1ac459=_0x1e9303;return $gamePlayer[_0x1ac459(0x406)]();},Game_Follower['prototype']['updateStop']=function(){const _0x28d6a8=_0x1e9303;Game_Character['prototype'][_0x28d6a8(0xc4)][_0x28d6a8(0x1ae)](this),this[_0x28d6a8(0x24b)]>0x0&&(this[_0x28d6a8(0x319)]=![]);},Game_Follower['prototype'][_0x1e9303(0x31c)]=function(_0xa01884){this['_chaseOff']=_0xa01884;},VisuMZ[_0x1e9303(0x2bb)]['Game_Follower_chaseCharacter']=Game_Follower[_0x1e9303(0xad)][_0x1e9303(0x2cb)],Game_Follower['prototype'][_0x1e9303(0x2cb)]=function(_0x1e6ff5){const _0x28bbef=_0x1e9303;if(this['_chaseOff'])return;if($gameSystem[_0x28bbef(0x3c7)]())return;VisuMZ[_0x28bbef(0x2bb)][_0x28bbef(0x37d)][_0x28bbef(0x1ae)](this,_0x1e6ff5),this[_0x28bbef(0x319)]=!![];},VisuMZ[_0x1e9303(0x2bb)]['Game_Vehicle_isMapPassable']=Game_Vehicle['prototype']['isMapPassable'],Game_Vehicle[_0x1e9303(0xad)]['isMapPassable']=function(_0xed83d5,_0x3e43e4,_0x3ff5ca){const _0x51de82=_0x1e9303;if($gameMap[_0x51de82(0x28f)](_0xed83d5,_0x3e43e4,_0x3ff5ca,this[_0x51de82(0x301)]))return!![];if($gameMap[_0x51de82(0x42e)](_0xed83d5,_0x3e43e4,_0x3ff5ca,this[_0x51de82(0x301)]))return![];return VisuMZ[_0x51de82(0x2bb)][_0x51de82(0x476)][_0x51de82(0x1ae)](this,_0xed83d5,_0x3e43e4,_0x3ff5ca);},Game_Vehicle[_0x1e9303(0xad)][_0x1e9303(0x4b2)]=function(_0x483767,_0x70c70e,_0x200304){const _0x4ef412=_0x1e9303;if($gameMap[_0x4ef412(0x28f)](_0x483767,_0x70c70e,_0x200304,this[_0x4ef412(0x301)]))return!![];if($gameMap[_0x4ef412(0x42e)](_0x483767,_0x70c70e,_0x200304,this['_type']))return![];return VisuMZ[_0x4ef412(0x2bb)][_0x4ef412(0x351)][_0x4ef412(0x1ae)]($gamePlayer,_0x483767,_0x70c70e,_0x200304);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0xf0)]=Game_Vehicle[_0x1e9303(0xad)][_0x1e9303(0x23d)],Game_Vehicle[_0x1e9303(0xad)][_0x1e9303(0x23d)]=function(_0x5d8e4d,_0x16cba1,_0x483eef){const _0x321d0a=_0x1e9303;if($gameMap['isRegionDockable'](_0x5d8e4d,_0x16cba1,_0x483eef,this['_type']))return!![];const _0x239428=this[_0x321d0a(0x301)]['charAt'](0x0)[_0x321d0a(0x3dc)]()+this['_type']['slice'](0x1),_0x4e8f67=_0x321d0a(0x159)['format'](_0x239428);return VisuMZ[_0x321d0a(0x2bb)][_0x321d0a(0x27e)]['Region'][_0x4e8f67]?![]:VisuMZ['EventsMoveCore'][_0x321d0a(0xf0)]['call'](this,_0x5d8e4d,_0x16cba1,_0x483eef);},VisuMZ['EventsMoveCore'][_0x1e9303(0x3b1)]=Game_Vehicle['prototype'][_0x1e9303(0x4e4)],Game_Vehicle['prototype'][_0x1e9303(0x4e4)]=function(){const _0x102ec3=_0x1e9303;VisuMZ['EventsMoveCore'][_0x102ec3(0x3b1)][_0x102ec3(0x1ae)](this);const _0x218861=VisuMZ['EventsMoveCore']['Settings'][_0x102ec3(0xfd)];if(this['isBoat']()){if(_0x218861[_0x102ec3(0x273)])this[_0x102ec3(0x470)](_0x218861[_0x102ec3(0x273)]);}else{if(this['isShip']()){if(_0x218861[_0x102ec3(0x3b5)])this[_0x102ec3(0x470)](_0x218861[_0x102ec3(0x3b5)]);}else{if(this[_0x102ec3(0x169)]()){if(_0x218861[_0x102ec3(0x2e5)])this[_0x102ec3(0x470)](_0x218861[_0x102ec3(0x2e5)]);}}}},VisuMZ['EventsMoveCore'][_0x1e9303(0x4ba)]=Game_Event[_0x1e9303(0xad)][_0x1e9303(0x30c)],Game_Event[_0x1e9303(0xad)]['initialize']=function(_0x51c32c,_0x13a8ea){const _0x3273bb=_0x1e9303;VisuMZ[_0x3273bb(0x2bb)]['Game_Event_initialize'][_0x3273bb(0x1ae)](this,_0x51c32c,_0x13a8ea),this['setupCopyEvent'](),this[_0x3273bb(0x10a)](),this[_0x3273bb(0x327)]();},Game_Map[_0x1e9303(0xad)][_0x1e9303(0x410)]=function(_0x30e944,_0x4bcfd3){const _0x44f4dd=_0x1e9303;return _0x30e944===$gameMap[_0x44f4dd(0x4a1)]()?$dataMap[_0x44f4dd(0x1a2)][_0x4bcfd3]:VisuMZ[_0x44f4dd(0xcb)][_0x30e944][_0x44f4dd(0x1a2)][_0x4bcfd3];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x3f2)]=Game_Event['prototype']['event'],Game_Event[_0x1e9303(0xad)][_0x1e9303(0x4f1)]=function(){const _0x5a0dcd=_0x1e9303;if(this[_0x5a0dcd(0x496)]!==undefined){const _0x2bb6ab=this[_0x5a0dcd(0x496)][_0x5a0dcd(0x4a1)],_0x1deb23=this[_0x5a0dcd(0x496)]['eventId'];return $gameMap[_0x5a0dcd(0x410)](_0x2bb6ab,_0x1deb23);}if(this[_0x5a0dcd(0x127)]!==undefined){const _0x1f335d=this[_0x5a0dcd(0x127)][_0x5a0dcd(0x4a1)],_0x20b56d=this['_eventCopyData'][_0x5a0dcd(0x1c6)];return $gameMap[_0x5a0dcd(0x410)](_0x1f335d,_0x20b56d);}if(this[_0x5a0dcd(0x4d6)]!==undefined){const _0x3bc944=this['_eventSpawnData'][_0x5a0dcd(0x4a1)],_0x31d3fe=this[_0x5a0dcd(0x4d6)][_0x5a0dcd(0x1c6)];return $gameMap['referEvent'](_0x3bc944,_0x31d3fe);}if($gameTemp[_0x5a0dcd(0x30b)]!==undefined){const _0x37fe5c=$gameTemp[_0x5a0dcd(0x30b)][_0x5a0dcd(0x4a1)],_0x2fb0d7=$gameTemp[_0x5a0dcd(0x30b)][_0x5a0dcd(0x1c6)];return $gameMap[_0x5a0dcd(0x410)](_0x37fe5c,_0x2fb0d7);}return VisuMZ[_0x5a0dcd(0x2bb)][_0x5a0dcd(0x3f2)]['call'](this);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x15d)]=function(_0x28730d,_0x202089){const _0x381668=_0x1e9303;if(_0x28730d===0x0||_0x202089===0x0)return![];if(_0x28730d===$gameMap['mapId']())return!![];if(!VisuMZ[_0x381668(0xcb)][_0x28730d]&&_0x28730d!==$gameMap[_0x381668(0x4a1)]())return $gameTemp['isPlaytest']()&&console[_0x381668(0x2da)](_0x381668(0x2a3)['format'](_0x28730d)),![];return!![];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x437)]=Game_Event[_0x1e9303(0xad)][_0x1e9303(0x43f)],Game_Event['prototype'][_0x1e9303(0x43f)]=function(){const _0x2d2a40=_0x1e9303;VisuMZ['EventsMoveCore']['Game_Event_start']['call'](this),Imported['VisuMZ_1_MessageCore']&&Input[_0x2d2a40(0x4eb)](VisuMZ[_0x2d2a40(0x1cd)][_0x2d2a40(0x27e)]['General'][_0x2d2a40(0x4c1)])&&Input[_0x2d2a40(0x402)]();},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x39d)]=function(){const _0x1fcf9e=_0x1e9303,_0x1e5915=this[_0x1fcf9e(0x4f1)]()[_0x1fcf9e(0x2b5)];if(_0x1e5915==='')return;if(DataManager[_0x1fcf9e(0x383)]()||DataManager['isEventTest']())return;const _0x56a584=VisuMZ[_0x1fcf9e(0x2bb)][_0x1fcf9e(0x27e)]['Template'];let _0x52ea0e=null,_0x5cdf7e=0x0,_0x5ef029=0x0;if(_0x1e5915['match'](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)){_0x5cdf7e=Number(RegExp['$1']),_0x5ef029=Number(RegExp['$2']);if(_0x5cdf7e===0x0)_0x5cdf7e=$gameMap[_0x1fcf9e(0x4a1)]();}else{if(_0x1e5915[_0x1fcf9e(0xe9)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)){_0x5cdf7e=Number(RegExp['$1']),_0x5ef029=Number(RegExp['$2']);if(_0x5cdf7e===0x0)_0x5cdf7e=$gameMap[_0x1fcf9e(0x4a1)]();}else{if(_0x1e5915[_0x1fcf9e(0xe9)](/<COPY EVENT:[ ](.*?)>/i)){const _0x35ae19=String(RegExp['$1'])[_0x1fcf9e(0x3dc)]()[_0x1fcf9e(0x203)]();_0x52ea0e=VisuMZ[_0x1fcf9e(0x1a4)][_0x35ae19];if(!_0x52ea0e)return;_0x5cdf7e=_0x52ea0e[_0x1fcf9e(0x2fd)],_0x5ef029=_0x52ea0e[_0x1fcf9e(0x148)];}}}if(!this[_0x1fcf9e(0x15d)](_0x5cdf7e,_0x5ef029))return;_0x56a584['PreCopyJS'][_0x1fcf9e(0x1ae)](this,_0x5cdf7e,_0x5ef029,this);if(_0x52ea0e)_0x52ea0e[_0x1fcf9e(0x469)]['call'](this,_0x5cdf7e,_0x5ef029,this);this[_0x1fcf9e(0x127)]={'mapId':_0x5cdf7e,'eventId':_0x5ef029},this['_pageIndex']=-0x2,this[_0x1fcf9e(0x316)](),_0x56a584['PostCopyJS'][_0x1fcf9e(0x1ae)](this,_0x5cdf7e,_0x5ef029,this);if(_0x52ea0e)_0x52ea0e[_0x1fcf9e(0x46b)][_0x1fcf9e(0x1ae)](this,_0x5cdf7e,_0x5ef029,this);$gameMap[_0x1fcf9e(0x192)]();},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x10a)]=function(){const _0x2d707b=_0x1e9303,_0x154a17=$gameSystem[_0x2d707b(0x48a)](this);if(!_0x154a17)return;const _0x2d0f10=_0x154a17[_0x2d707b(0x2a8)][_0x2d707b(0x3dc)]()['trim']();_0x2d0f10!==_0x2d707b(0x154)?this[_0x2d707b(0x26a)](_0x2d0f10,!![]):this[_0x2d707b(0x484)](_0x154a17[_0x2d707b(0x4a1)],_0x154a17['eventId'],!![]);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x484)]=function(_0x6e814d,_0x36424a,_0x3ccf17){const _0x46f495=_0x1e9303;if(!this[_0x46f495(0x15d)](_0x6e814d,_0x36424a))return;const _0x351c43=VisuMZ[_0x46f495(0x2bb)][_0x46f495(0x27e)][_0x46f495(0x41b)];if(!_0x3ccf17)_0x351c43[_0x46f495(0x284)][_0x46f495(0x1ae)](this,_0x6e814d,_0x36424a,this);this[_0x46f495(0x496)]={'mapId':_0x6e814d,'eventId':_0x36424a},this[_0x46f495(0x39c)]=-0x2,this[_0x46f495(0x316)]();if(!_0x3ccf17)_0x351c43[_0x46f495(0x3dd)]['call'](this,_0x6e814d,_0x36424a,this);$gameMap[_0x46f495(0x192)]();},Game_Event['prototype']['morphIntoTemplate']=function(_0x18e9e2,_0x30e0ee){const _0x235734=_0x1e9303;_0x18e9e2=_0x18e9e2[_0x235734(0x3dc)]()[_0x235734(0x203)]();const _0x38e143=VisuMZ[_0x235734(0x1a4)][_0x18e9e2];if(!_0x38e143)return;const _0x4c85c8=_0x38e143[_0x235734(0x2fd)],_0x44d745=_0x38e143[_0x235734(0x148)];if(!this[_0x235734(0x15d)](_0x4c85c8,_0x44d745))return;if(!_0x30e0ee)_0x38e143[_0x235734(0x284)][_0x235734(0x1ae)](this,_0x4c85c8,_0x44d745,this);this[_0x235734(0x484)](_0x4c85c8,_0x44d745,_0x30e0ee);if(!_0x30e0ee)_0x38e143[_0x235734(0x3dd)]['call'](this,_0x4c85c8,_0x44d745,this);if($gameMap)$gameMap[_0x235734(0x192)]();},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x2d4)]=function(){const _0x105259=_0x1e9303;this[_0x105259(0x496)]=undefined,this[_0x105259(0x39c)]=-0x2,this[_0x105259(0x316)]();},Game_Event[_0x1e9303(0xad)][_0x1e9303(0xd8)]=function(_0x4259d3){const _0x4fd98e=_0x1e9303,_0x1274e2=VisuMZ[_0x4fd98e(0x2bb)][_0x4fd98e(0x27e)][_0x4fd98e(0x41b)],_0x316b9a=_0x4259d3['template'][_0x4fd98e(0x3dc)]()['trim'](),_0xee5b48=!['',_0x4fd98e(0x154)]['includes'](_0x316b9a);let _0x4fcd6e=0x0,_0x311fef=0x0;if(_0xee5b48){const _0x433925=VisuMZ[_0x4fd98e(0x1a4)][_0x316b9a];if(!_0x433925)return;_0x4fcd6e=_0x433925[_0x4fd98e(0x2fd)],_0x311fef=_0x433925['EventID'];}else _0x4fcd6e=_0x4259d3[_0x4fd98e(0x4a1)],_0x311fef=_0x4259d3['eventId'];if(!this[_0x4fd98e(0x15d)](_0x4fcd6e,_0x311fef))return;if(_0xee5b48){const _0x132c6e=VisuMZ['EventTemplates'][_0x316b9a];_0x132c6e[_0x4fd98e(0x228)][_0x4fd98e(0x1ae)](this,_0x4fcd6e,_0x311fef,this);}_0x1274e2[_0x4fd98e(0x228)][_0x4fd98e(0x1ae)](this,_0x4fcd6e,_0x311fef,this),this[_0x4fd98e(0x4d6)]=_0x4259d3,this[_0x4fd98e(0x39c)]=-0x2,this[_0x4fd98e(0x219)]=$gameMap[_0x4fd98e(0x4a1)](),this[_0x4fd98e(0x27a)]=_0x4259d3[_0x4fd98e(0xe2)],this[_0x4fd98e(0xf1)]=_0x4259d3[_0x4fd98e(0x3fb)],this[_0x4fd98e(0x49c)](_0x4259d3['x'],_0x4259d3['y']),this['setDirection'](_0x4259d3[_0x4fd98e(0x42d)]),this[_0x4fd98e(0x316)]();if(_0xee5b48){const _0x4a3fcf=VisuMZ['EventTemplates'][_0x316b9a];if(!_0x4a3fcf)return;_0x4a3fcf[_0x4fd98e(0x2bc)][_0x4fd98e(0x1ae)](this,_0x4fcd6e,_0x311fef,this);}_0x1274e2[_0x4fd98e(0x2bc)][_0x4fd98e(0x1ae)](this,_0x4fcd6e,_0x311fef,this);const _0x15f46e=SceneManager[_0x4fd98e(0x238)];if(_0x15f46e&&_0x15f46e[_0x4fd98e(0x187)])_0x15f46e[_0x4fd98e(0x187)]['createSpawnedEvent'](this);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x440)]=function(){const _0xa99344=_0x1e9303;return!!this[_0xa99344(0x4d6)];},Game_Event['prototype'][_0x1e9303(0x43f)]=function(){const _0x18e86e=_0x1e9303;if(!this[_0x18e86e(0x2ad)]())return;const _0x3df3ee=this[_0x18e86e(0x2ad)]()[_0x18e86e(0x29e)](_0x5d85ad=>_0x5d85ad[_0x18e86e(0x4e7)]!==0x6c&&_0x5d85ad[_0x18e86e(0x4e7)]!==0x198);_0x3df3ee[_0x18e86e(0x411)]>0x1&&(this[_0x18e86e(0x461)]=!![],this[_0x18e86e(0xfa)]([0x0,0x1,0x2])&&this[_0x18e86e(0x28a)]());},VisuMZ[_0x1e9303(0x2bb)]['Game_Event_clearPageSettings']=Game_Event[_0x1e9303(0xad)][_0x1e9303(0x2c3)],Game_Event[_0x1e9303(0xad)][_0x1e9303(0x2c3)]=function(){const _0x461b1c=_0x1e9303;VisuMZ[_0x461b1c(0x2bb)][_0x461b1c(0x40d)][_0x461b1c(0x1ae)](this),this[_0x461b1c(0x2bf)](),this[_0x461b1c(0x210)]();},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x446)]=Game_Event[_0x1e9303(0xad)][_0x1e9303(0x4dd)],Game_Event['prototype'][_0x1e9303(0x4dd)]=function(){const _0x4f8828=_0x1e9303;this[_0x4f8828(0x3a0)]=!![],VisuMZ[_0x4f8828(0x2bb)][_0x4f8828(0x446)][_0x4f8828(0x1ae)](this),this[_0x4f8828(0x1c3)](),this['autosaveEventLocation'](),this[_0x4f8828(0x3a0)]=![];},Game_Event[_0x1e9303(0xad)]['setupEventsMoveCoreEffects']=function(){const _0x31e786=_0x1e9303;if(!this[_0x31e786(0x4f1)]())return;this[_0x31e786(0x2bf)](),this[_0x31e786(0x381)](),this[_0x31e786(0x139)](),this['updateEventsMoveCoreTagChanges']();},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x381)]=function(){const _0x2cbfbb=_0x1e9303,_0x504681=this[_0x2cbfbb(0x4f1)]()[_0x2cbfbb(0x2b5)];if(_0x504681==='')return;this[_0x2cbfbb(0x267)](_0x504681);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x139)]=function(){const _0x3cf408=_0x1e9303;if(!this[_0x3cf408(0x4ec)]())return;const _0x161605=this[_0x3cf408(0x2ad)]();let _0x58c577='';for(const _0x23655e of _0x161605){if([0x6c,0x198][_0x3cf408(0x224)](_0x23655e['code'])){if(_0x58c577!=='')_0x58c577+='\x0a';_0x58c577+=_0x23655e[_0x3cf408(0x41c)][0x0];}}this[_0x3cf408(0x267)](_0x58c577);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x2bf)]=function(){const _0x3dddc8=_0x1e9303,_0x5cff86=VisuMZ['EventsMoveCore']['Settings'];this['_activationProximity']={'type':_0x3dddc8(0x40e),'distance':0x0,'regionList':[]},this['_alwaysUpdateMove']=![],this[_0x3dddc8(0x480)](),this['_clickTrigger']=![],this[_0x3dddc8(0x239)]=![],this[_0x3dddc8(0x1cc)]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},$gameSystem[_0x3dddc8(0x150)](this),this[_0x3dddc8(0x1d0)]=$gameSystem['getEventIconData'](this),this[_0x3dddc8(0x3a2)]={'originalText':'','text':'','visibleRange':_0x5cff86['Label'][_0x3dddc8(0x4c8)],'offsetX':_0x5cff86[_0x3dddc8(0x285)][_0x3dddc8(0x4f4)],'offsetY':_0x5cff86[_0x3dddc8(0x285)][_0x3dddc8(0x2b0)]},this[_0x3dddc8(0x16f)]=![],this[_0x3dddc8(0x1b1)]=[],this[_0x3dddc8(0x1c2)]={'target':-0x1,'type':_0x3dddc8(0x39b),'delay':0x1,'opacityDelta':0x0},this[_0x3dddc8(0x230)]=_0x5cff86['Movement'][_0x3dddc8(0x100)]??0x0,this[_0x3dddc8(0x25f)]=![],this['_scaleBaseX']=0x1,this[_0x3dddc8(0x4b6)]=0x1,this[_0x3dddc8(0x153)]={'visible':!![],'filename':_0x5cff86[_0x3dddc8(0xfd)][_0x3dddc8(0x26e)]},this['clearSpriteOffsets'](),this[_0x3dddc8(0x249)]();},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x267)]=function(_0x2175e1){const _0x388378=_0x1e9303;if(_0x2175e1['match'](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i))this[_0x388378(0xff)][_0x388378(0x2e8)]=JSON['parse']('['+RegExp['$1'][_0x388378(0xe9)](/\d+/g)+']'),this[_0x388378(0xff)][_0x388378(0x409)]='region';else _0x2175e1[_0x388378(0xe9)](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])['toLowerCase']()['trim'](),this[_0x388378(0xff)][_0x388378(0x409)]=type,this[_0x388378(0xff)][_0x388378(0x2cd)]=Number(RegExp['$2']));_0x2175e1[_0x388378(0xe9)](/<(?:ATTACH PICTURE|PICTURE) FILENAME:[ ](.*?)>/i)&&(this['_attachPicture'][_0x388378(0x4aa)]=String(RegExp['$1']));if(_0x2175e1[_0x388378(0xe9)](/<(?:ATTACH PICTURE|PICTURE) BLEND MODE:[ ](.*?)>/i)){const _0x5ecb92=String(RegExp['$1'])['toUpperCase']()[_0x388378(0x203)](),_0x239698=[_0x388378(0x498),_0x388378(0x302),'MULTIPLY',_0x388378(0x24c)];this['_attachPicture'][_0x388378(0x2e0)]=_0x239698[_0x388378(0x255)](_0x5ecb92)['clamp'](0x0,0x3);}_0x2175e1['match'](/<(?:ATTACH PICTURE|PICTURE) (?:SIZE|MAX SIZE|MAX):[ ](\d+)>/i)&&(this[_0x388378(0x222)][_0x388378(0x201)]=Number(RegExp['$1']));_0x2175e1[_0x388378(0xe9)](/<(?:ATTACH PICTURE|PICTURE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x388378(0x222)][_0x388378(0x45d)]=Number(RegExp['$1']));_0x2175e1[_0x388378(0xe9)](/<(?:ATTACH PICTURE|PICTURE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x388378(0x222)][_0x388378(0x433)]=Number(RegExp['$1']));_0x2175e1[_0x388378(0xe9)](/<(?:ATTACH PICTURE|PICTURE) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_attachPicture'][_0x388378(0x45d)]=Number(RegExp['$1']),this['_attachPicture'][_0x388378(0x433)]=Number(RegExp['$2']));_0x2175e1['match'](/<(?:ATTACH PICTURE|PICTURE) SCALE:[ ](\d+)([%％])>/i)&&(this['_attachPicture'][_0x388378(0x174)]=Number(RegExp['$1'])*0.01);_0x2175e1[_0x388378(0xe9)](/<ALWAYS UPDATE MOVEMENT>/i)&&(this[_0x388378(0x2ac)]=!![]);_0x2175e1[_0x388378(0xe9)](/<CLICK TRIGGER>/i)&&(this[_0x388378(0xf9)]=!![]);_0x2175e1[_0x388378(0xe9)](/<CUSTOM Z:[ ](.*?)>/i)&&(this[_0x388378(0x239)]=Number(RegExp['$1'])||0x0);const _0x1b6d3c=_0x2175e1[_0x388378(0xe9)](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x1b6d3c)for(const _0x2f09f2 of _0x1b6d3c){if(_0x2f09f2[_0x388378(0xe9)](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x51e9ed=String(RegExp['$1'])[_0x388378(0x4a5)]()[_0x388378(0x203)](),_0x16c35b=Number(RegExp['$2']);this[_0x388378(0x1cc)][_0x51e9ed]=_0x16c35b;}}_0x2175e1[_0x388378(0xe9)](/<ICON:[ ](\d+)>/i)&&(this['_eventIcon']['iconIndex']=Number(RegExp['$1']));_0x2175e1['match'](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x388378(0x1d0)][_0x388378(0x32b)]=Number(RegExp['$1']));_0x2175e1[_0x388378(0xe9)](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x388378(0x1d0)][_0x388378(0x2b7)]=Number(RegExp['$1']));_0x2175e1[_0x388378(0xe9)](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x388378(0x1d0)][_0x388378(0x32b)]=Number(RegExp['$1']),this[_0x388378(0x1d0)]['bufferY']=Number(RegExp['$2']));if(_0x2175e1[_0x388378(0xe9)](/<ICON BLEND MODE:[ ](.*?)>/i)){const _0x5d1b08=String(RegExp['$1'])[_0x388378(0x3dc)]()[_0x388378(0x203)](),_0x5af600=['NORMAL','ADDITIVE',_0x388378(0x4b7),_0x388378(0x24c)];this[_0x388378(0x1d0)][_0x388378(0x2e0)]=_0x5af600[_0x388378(0x255)](_0x5d1b08)[_0x388378(0x226)](0x0,0x3);}$gameSystem['setEventIconData'](this,this[_0x388378(0x1d0)][_0x388378(0x447)],this[_0x388378(0x1d0)][_0x388378(0x32b)],this['_eventIcon'][_0x388378(0x2b7)],this[_0x388378(0x1d0)][_0x388378(0x2e0)]);if(_0x2175e1['match'](/<LABEL:[ ](.*?)>/i)){let _0x247b39=String(RegExp['$1'])[_0x388378(0x203)]();this[_0x388378(0x3a2)][_0x388378(0x2f0)]=_0x247b39,this[_0x388378(0x3a2)]['originalText']=_0x247b39;}if(_0x2175e1[_0x388378(0xe9)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){let _0x3b43b0=String(RegExp['$1'])[_0x388378(0x203)]();this[_0x388378(0x3a2)][_0x388378(0x2f0)]=_0x3b43b0,this['_labelWindow'][_0x388378(0x260)]=_0x3b43b0;}_0x2175e1[_0x388378(0xe9)](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this['_labelWindow'][_0x388378(0x45d)]=Number(RegExp['$1']));_0x2175e1[_0x388378(0xe9)](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x388378(0x3a2)]['offsetY']=Number(RegExp['$1']));_0x2175e1[_0x388378(0xe9)](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x388378(0x3a2)][_0x388378(0x45d)]=Number(RegExp['$1']),this[_0x388378(0x3a2)]['offsetY']=Number(RegExp['$2']));this[_0x388378(0x4a0)]();_0x2175e1['match'](/<LABEL RANGE:[ ](\d+)>/i)&&(this[_0x388378(0x3a2)][_0x388378(0x2ea)]=Number(RegExp['$1']));_0x2175e1[_0x388378(0xe9)](/<MIRROR SPRITE>/i)&&(this[_0x388378(0x16f)]=!![]);if(_0x2175e1[_0x388378(0xe9)](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){const _0x39a834=JSON[_0x388378(0x325)]('['+RegExp['$1'][_0x388378(0xe9)](/\d+/g)+']');this['_moveOnlyRegions']=this[_0x388378(0x1b1)][_0x388378(0xec)](_0x39a834),this[_0x388378(0x1b1)]['remove'](0x0);}if(_0x2175e1[_0x388378(0xe9)](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0x5dad63=String(RegExp['$1']);if(_0x5dad63[_0x388378(0xe9)](/PLAYER/i))this[_0x388378(0x1c2)][_0x388378(0x10b)]=0x0;else _0x5dad63[_0x388378(0xe9)](/EVENT[ ](\d+)/i)&&(this[_0x388378(0x1c2)][_0x388378(0x10b)]=Number(RegExp['$1']));}_0x2175e1['match'](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this[_0x388378(0x1c2)][_0x388378(0x409)]=String(RegExp['$1'])[_0x388378(0x4a5)]()[_0x388378(0x203)]());_0x2175e1[_0x388378(0xe9)](/<MOVE SYNCH DELAY:[ ](\d+)>/i)&&(this[_0x388378(0x1c2)][_0x388378(0x3a4)]=Number(RegExp['$1']));_0x2175e1['match'](/<MOVE SYNCH DISTANCE OPACITY:[ ](.*?)>/i)&&(this['_moveSynch'][_0x388378(0x1e0)]=Number(RegExp['$1']));if(_0x2175e1[_0x388378(0xe9)](/<TRUE RANDOM MOVE>/i))this[_0x388378(0x230)]=0x0;else _0x2175e1[_0x388378(0xe9)](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)&&(this[_0x388378(0x230)]=Number(RegExp['$1'])||0x0);_0x2175e1['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x388378(0x25f)]=!![]);_0x2175e1[_0x388378(0xe9)](/<SCALE X:[ ](\d+)([%％])>/i)&&(this[_0x388378(0x4ef)]=Number(RegExp['$1'])*0.01);_0x2175e1[_0x388378(0xe9)](/<SCALE Y:[ ](\d+)([%％])>/i)&&(this[_0x388378(0x4b6)]=Number(RegExp['$1'])*0.01);if(_0x2175e1[_0x388378(0xe9)](/<SCALE:[ ](\d+)([%％])>/i)){const _0x21afe1=Number(RegExp['$1'])*0.01;this[_0x388378(0x4ef)]=_0x21afe1,this['_scaleBaseY']=_0x21afe1;}_0x2175e1[_0x388378(0xe9)](/<HIDE SHADOW>/i)&&(this[_0x388378(0x153)][_0x388378(0x15e)]=![]),_0x2175e1['match'](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0x388378(0x153)]['filename']=String(RegExp['$1'])),_0x2175e1[_0x388378(0xe9)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x388378(0x21b)]=Number(RegExp['$1'])),_0x2175e1['match'](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x388378(0xc6)]=Number(RegExp['$1'])),_0x2175e1['match'](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x388378(0x21b)]=Number(RegExp['$1']),this[_0x388378(0xc6)]=Number(RegExp['$2'])),_0x2175e1[_0x388378(0xe9)](/<STEP PATTERN:[ ](.*)>/i)&&(this[_0x388378(0x258)]=String(RegExp['$1'])[_0x388378(0x3dc)]()[_0x388378(0x203)]());},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x4a0)]=function(){const _0x4367fb=_0x1e9303;$gameTemp[_0x4367fb(0xb5)](this),this[_0x4367fb(0x3a2)][_0x4367fb(0x2f0)]=this['_labelWindow'][_0x4367fb(0x260)];for(;;){if(this['_labelWindow']['text'][_0x4367fb(0xe9)](/\\V\[(\d+)\]/gi))this[_0x4367fb(0x3a2)][_0x4367fb(0x2f0)]=this[_0x4367fb(0x3a2)][_0x4367fb(0x260)][_0x4367fb(0x25c)](/\\V\[(\d+)\]/gi,(_0x354a3a,_0x2fe843)=>$gameVariables['value'](parseInt(_0x2fe843)));else break;}$gameTemp[_0x4367fb(0x19f)]();},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x3bc)]=function(){const _0x53c4fa=_0x1e9303;this[_0x53c4fa(0x4b4)]();},Game_Event['prototype'][_0x1e9303(0x2a1)]=function(){const _0x360e7c=_0x1e9303;if(this[_0x360e7c(0x2ac)])return!![];return Game_Character[_0x360e7c(0xad)][_0x360e7c(0x2a1)][_0x360e7c(0x1ae)](this);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x38f)]=Game_Event[_0x1e9303(0xad)]['updateSelfMovement'],Game_Event['prototype'][_0x1e9303(0x4a8)]=function(){const _0x4727d1=_0x1e9303;if(this[_0x4727d1(0x4af)]())return;VisuMZ[_0x4727d1(0x2bb)][_0x4727d1(0x38f)][_0x4727d1(0x1ae)](this),this[_0x4727d1(0xb3)]()&&VisuMZ[_0x4727d1(0x229)](this[_0x4727d1(0x27a)]);},Game_Event[_0x1e9303(0xad)]['isPreventSelfMovement']=function(){const _0x6df51b=_0x1e9303,_0x26107f=VisuMZ[_0x6df51b(0x2bb)]['Settings'][_0x6df51b(0xfd)];if($gameMap[_0x6df51b(0x394)]()&&_0x26107f['StopAutoMoveEvents'])return!![];if($gameMessage[_0x6df51b(0x374)]()&&_0x26107f[_0x6df51b(0x170)])return!![];if(!$gameSystem[_0x6df51b(0x3be)]())return!![];if(this[_0x6df51b(0x14b)]()>=0x0)return!![];if(!SceneManager[_0x6df51b(0x238)]['_active'])return!![];return![];},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x4b4)]=function(){const _0xe87d76=_0x1e9303,_0x38fd73=SceneManager[_0xe87d76(0x238)]['_spriteset'];if(_0x38fd73){const _0x271981=_0x38fd73[_0xe87d76(0x281)](this);_0x271981&&_0x271981[_0xe87d76(0x214)]&&_0x271981[_0xe87d76(0x214)][_0xe87d76(0x1e2)]!==this[_0xe87d76(0x3ff)]()&&(_0x271981['_shadowSprite']['_filename']=this[_0xe87d76(0x3ff)](),_0x271981[_0xe87d76(0x214)][_0xe87d76(0x340)]=ImageManager[_0xe87d76(0x2c7)](_0x271981[_0xe87d76(0x214)][_0xe87d76(0x1e2)]));}},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x3ff)]=function(){const _0x43e459=_0x1e9303;return this['_shadowGraphic'][_0x43e459(0x4aa)];},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x2d5)]=function(){const _0x5742e7=_0x1e9303;if(!this[_0x5742e7(0x153)]['visible'])return![];return Game_CharacterBase[_0x5742e7(0xad)][_0x5742e7(0x2d5)][_0x5742e7(0x1ae)](this);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x17d)]=function(){const _0x1c9b07=_0x1e9303;return this[_0x1c9b07(0x3a2)][_0x1c9b07(0x2f0)];},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x194)]=function(){const _0x585a3b=_0x1e9303;return this[_0x585a3b(0x3a2)]['visibleRange'];},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x40c)]=function(_0x39cf3a,_0x46399f,_0x3979aa){const _0x352b3d=_0x1e9303;if(this['hasMoveOnlyRegions']())return this[_0x352b3d(0x25e)](_0x39cf3a,_0x46399f,_0x3979aa);if($gameMap[_0x352b3d(0x28f)](_0x39cf3a,_0x46399f,_0x3979aa,_0x352b3d(0x4f1)))return!![];if($gameMap[_0x352b3d(0x42e)](_0x39cf3a,_0x46399f,_0x3979aa,_0x352b3d(0x4f1)))return![];return Game_Character[_0x352b3d(0xad)][_0x352b3d(0x40c)]['call'](this,_0x39cf3a,_0x46399f,_0x3979aa);},Game_Event[_0x1e9303(0xad)]['hasMoveOnlyRegions']=function(){const _0x26ff3d=_0x1e9303;if(this[_0x26ff3d(0x1b1)]===undefined)this['initEventsMoveCoreEffects']();return this[_0x26ff3d(0x1b1)][_0x26ff3d(0x411)]>0x0;},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x25e)]=function(_0x19a8b5,_0x36cf51,_0x3f4b13){const _0x481879=_0x1e9303,_0x2df10e=$gameMap[_0x481879(0x11a)](_0x19a8b5,_0x3f4b13),_0x4ae979=$gameMap[_0x481879(0x338)](_0x36cf51,_0x3f4b13),_0x315b2c=$gameMap[_0x481879(0x4ea)](_0x2df10e,_0x4ae979);return this[_0x481879(0x1b1)][_0x481879(0x224)](_0x315b2c);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x185)]=Game_Event[_0x1e9303(0xad)]['findProperPageIndex'],Game_Event[_0x1e9303(0xad)]['findProperPageIndex']=function(){const _0x4eeb89=_0x1e9303;if(this[_0x4eeb89(0x4f1)]()&&!$gameTemp[_0x4eeb89(0xc7)]()){if(this[_0x4eeb89(0x4f1)]()['note'][_0x4eeb89(0xe9)](/<(?:PLAYTEST|PLAY TEST)>/i))return-0x1;}return this[_0x4eeb89(0x3d5)]=![],this['_CPCs']=![],this[_0x4eeb89(0x4f1)]()?VisuMZ[_0x4eeb89(0x2bb)][_0x4eeb89(0x185)][_0x4eeb89(0x1ae)](this):-0x1;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x234)]=Game_Event['prototype'][_0x1e9303(0x46a)],Game_Event[_0x1e9303(0xad)][_0x1e9303(0x46a)]=function(_0x477a50){const _0x14bbfa=_0x1e9303;this['checkAdvancedSwitchVariablePresent'](_0x477a50),$gameTemp['registerSelfTarget'](this);const _0x33a6c7=VisuMZ['EventsMoveCore'][_0x14bbfa(0x234)][_0x14bbfa(0x1ae)](this,_0x477a50);return $gameTemp[_0x14bbfa(0x19f)](),_0x33a6c7;},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x1a6)]=function(){const _0x132e78=_0x1e9303;return this[_0x132e78(0x3d5)];},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x3cf)]=function(_0x54a21a){const _0x58ec4d=_0x1e9303,_0x15850a=_0x54a21a['conditions'];if(_0x15850a['switch1Valid']&&DataManager[_0x58ec4d(0x487)](_0x15850a[_0x58ec4d(0x4c0)]))this['_advancedSwitchVariable']=!![];else{if(_0x15850a['switch2Valid']&&DataManager[_0x58ec4d(0x487)](_0x15850a[_0x58ec4d(0x26c)]))this[_0x58ec4d(0x3d5)]=!![];else _0x15850a[_0x58ec4d(0x457)]&&DataManager[_0x58ec4d(0xbd)](_0x15850a['variableId'])&&(this[_0x58ec4d(0x3d5)]=!![]);}},Game_Event['prototype']['hasClickTrigger']=function(){const _0x114712=_0x1e9303;if(this[_0x114712(0x24d)])return![];return this[_0x114712(0xf9)];},Game_Event['prototype'][_0x1e9303(0x455)]=function(){$gameTemp['clearDestination'](),this['start']();},Game_Event[_0x1e9303(0xad)]['pos']=function(_0x162ad2,_0x772ad2){const _0x59858c=_0x1e9303;return this[_0x59858c(0x1cc)]?this[_0x59858c(0x136)](_0x162ad2,_0x772ad2):Game_Character[_0x59858c(0xad)][_0x59858c(0x30d)][_0x59858c(0x1ae)](this,_0x162ad2,_0x772ad2);},Game_Event['prototype']['posEventsMoveCore']=function(_0x5b1322,_0x3b8d9f){const _0x6c8b3c=_0x1e9303;var _0xe1be94=this['x']-this[_0x6c8b3c(0x1cc)][_0x6c8b3c(0x122)],_0x39a40f=this['x']+this['_addedHitbox']['right'],_0x48f611=this['y']-this[_0x6c8b3c(0x1cc)]['up'],_0x39c30c=this['y']+this['_addedHitbox'][_0x6c8b3c(0x334)];return _0xe1be94<=_0x5b1322&&_0x5b1322<=_0x39a40f&&_0x48f611<=_0x3b8d9f&&_0x3b8d9f<=_0x39c30c;},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x108)]=function(_0x1e1747,_0x4e9329,_0x25d403){const _0xc3d3fd=_0x1e9303;for(let _0x72663e=-this[_0xc3d3fd(0x1cc)][_0xc3d3fd(0x122)];_0x72663e<=this[_0xc3d3fd(0x1cc)][_0xc3d3fd(0x343)];_0x72663e++){for(let _0x4b058d=-this['_addedHitbox']['up'];_0x4b058d<=this['_addedHitbox'][_0xc3d3fd(0x334)];_0x4b058d++){if(!Game_Character['prototype'][_0xc3d3fd(0x108)][_0xc3d3fd(0x1ae)](this,_0x1e1747+_0x72663e,_0x4e9329+_0x4b058d,_0x25d403))return![];}}return!![];},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x131)]=function(_0x5202d,_0x2d9c4){const _0xf19897=_0x1e9303;if(Imported[_0xf19897(0x45a)]&&this[_0xf19897(0x2c4)]())return this[_0xf19897(0x1e9)](_0x5202d,_0x2d9c4);else{const _0x411c0a=$gameMap[_0xf19897(0x33e)](_0x5202d,_0x2d9c4)[_0xf19897(0x29e)](_0x397f6d=>_0x397f6d!==this);return _0x411c0a['length']>0x0;}},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x1e9)]=function(_0x4711b7,_0x39fe85){const _0x55ec7f=_0x1e9303;if(!this[_0x55ec7f(0x36b)]())return![];else{const _0x51c4f0=$gameMap[_0x55ec7f(0x33e)](_0x4711b7,_0x39fe85)[_0x55ec7f(0x29e)](_0x246be3=>_0x246be3!==this&&_0x246be3[_0x55ec7f(0x36b)]());return _0x51c4f0[_0x55ec7f(0x411)]>0x0;}},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x354)]=function(){const _0x1206a5=_0x1e9303;return this[_0x1206a5(0xff)]['type']||'none';},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x3aa)]=function(){const _0x51b5ec=_0x1e9303;return this[_0x51b5ec(0xff)][_0x51b5ec(0x2cd)]||0x0;},Game_Event[_0x1e9303(0xad)][_0x1e9303(0xcf)]=function(){const _0x64c23f=_0x1e9303;return this[_0x64c23f(0xff)]['regionList']||[];},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x4d4)]=function(){const _0x2e7ba1=_0x1e9303;Game_Character[_0x2e7ba1(0xad)][_0x2e7ba1(0x4d4)][_0x2e7ba1(0x1ae)](this);if([_0x2e7ba1(0x40e),'region'][_0x2e7ba1(0x224)](this['activationProximityType']()))return;$gamePlayer[_0x2e7ba1(0x294)]([0x2]);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x454)]=Game_Event[_0x1e9303(0xad)][_0x1e9303(0x3bf)],Game_Event[_0x1e9303(0xad)][_0x1e9303(0x3bf)]=function(){const _0x855b58=_0x1e9303;if(this['_trigger']!==0x3)return;if(this[_0x855b58(0x3a0)])return;if(!this['checkRegionEventTrigger'](![]))return;if(!this[_0x855b58(0x35b)](![]))return;VisuMZ[_0x855b58(0x2bb)][_0x855b58(0x454)][_0x855b58(0x1ae)](this);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x213)]=Game_Event[_0x1e9303(0xad)][_0x1e9303(0x155)],Game_Event[_0x1e9303(0xad)]['updateParallel']=function(){const _0x1362ab=_0x1e9303;if(!this[_0x1362ab(0x1f0)])return;if(!this[_0x1362ab(0x3bd)](!![]))return;if(!this['checkActivationProximity'](!![]))return;VisuMZ['EventsMoveCore'][_0x1362ab(0x213)][_0x1362ab(0x1ae)](this);},Game_Event[_0x1e9303(0xad)]['checkRegionEventTrigger']=function(_0x43de1f){const _0x5a0c9e=_0x1e9303;if(!_0x43de1f&&$gameMap[_0x5a0c9e(0x394)]())return![];if(!_0x43de1f&&$gameMap[_0x5a0c9e(0xb7)]())return![];if(this[_0x5a0c9e(0xcf)]()<=0x0)return!![];return $gamePlayer[_0x5a0c9e(0xf8)](this);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x35b)]=function(_0x4c3ca2){const _0x259a99=_0x1e9303;if(!_0x4c3ca2&&$gameMap['isEventRunning']())return![];if(!_0x4c3ca2&&$gameMap['isAnyEventStarting']())return![];if(['none',_0x259a99(0x103)][_0x259a99(0x224)](this[_0x259a99(0x354)]()))return!![];return $gamePlayer[_0x259a99(0x223)](this);},VisuMZ[_0x1e9303(0x229)]=function(_0x30848b){const _0x2f5f78=_0x1e9303;for(const _0x2a4b86 of $gameMap[_0x2f5f78(0x1a2)]()){if(!_0x2a4b86)continue;_0x2a4b86['moveSynchTarget']()===_0x30848b&&_0x2a4b86[_0x2f5f78(0x46f)]();}},VisuMZ['GetMoveSynchTarget']=function(_0x59b88b){if(_0x59b88b===0x0)return $gamePlayer;return $gameMap['event'](_0x59b88b);},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x250)]=function(){},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x250)]=function(){const _0x245f98=_0x1e9303;VisuMZ['FaceSynchAllSynchTargets'](this[_0x245f98(0x27a)]);},VisuMZ['FaceSynchAllSynchTargets']=function(_0x2e91ec){const _0x1accdf=_0x1e9303;for(const _0x214236 of $gameMap[_0x1accdf(0x1a2)]()){if(!_0x214236)continue;_0x214236['moveSynchTarget']()===_0x2e91ec&&_0x214236[_0x1accdf(0xb6)]();}},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x14b)]=function(){const _0x4e46ed=_0x1e9303;return this['_moveSynch'][_0x4e46ed(0x10b)];},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x320)]=function(){const _0xd79281=_0x1e9303;return this[_0xd79281(0x1c2)]['type'];},Game_Event['prototype']['realMoveSpeed']=function(){const _0x5e14c8=_0x1e9303;if(this[_0x5e14c8(0x14b)]()>=0x0){const _0x44c936=VisuMZ[_0x5e14c8(0x2c9)](this[_0x5e14c8(0x14b)]());if(_0x44c936)return _0x44c936[_0x5e14c8(0x406)]();}return Game_Character[_0x5e14c8(0xad)][_0x5e14c8(0x406)]['call'](this);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x46f)]=function(){const _0x3e8d2d=_0x1e9303;this[_0x3e8d2d(0x1c2)]['timer']=this[_0x3e8d2d(0x1c2)][_0x3e8d2d(0x44c)]||0x0,this[_0x3e8d2d(0x1c2)]['timer']--;if(this[_0x3e8d2d(0x1c2)][_0x3e8d2d(0x44c)]>0x0)return;this[_0x3e8d2d(0x1c2)][_0x3e8d2d(0x44c)]=this[_0x3e8d2d(0x1c2)][_0x3e8d2d(0x3a4)],this[_0x3e8d2d(0x189)]();},Game_Event['prototype']['adjustMoveSynchOpacityDelta']=function(_0x5bf92a){const _0x259a82=_0x1e9303;if(this[_0x259a82(0x14b)]()>=0x0){const _0x30bcee=VisuMZ['GetMoveSynchTarget'](this[_0x259a82(0x14b)]());if(_0x30bcee){const _0x4dc9c7=$gameMap[_0x259a82(0x2cd)](this[_0x259a82(0x1b6)],this[_0x259a82(0x3c1)],_0x30bcee[_0x259a82(0x1b6)],_0x30bcee[_0x259a82(0x3c1)])-0x1,_0x36006e=Math['min']($gameMap[_0x259a82(0x314)](),$gameMap[_0x259a82(0x32e)]()),_0x2069f9=this[_0x259a82(0x1c2)][_0x259a82(0x1e0)]||0x0;_0x5bf92a-=Math[_0x259a82(0xac)](0x0,_0x4dc9c7)*_0x36006e*_0x2069f9;}}return _0x5bf92a;},Game_Event[_0x1e9303(0xad)]['processMoveSynch']=function(){const _0x357867=_0x1e9303;switch(this[_0x357867(0x320)]()){case _0x357867(0x39b):this[_0x357867(0x3ce)]();break;case'approach':this[_0x357867(0x296)]();break;case _0x357867(0x172):this['processMoveSynchAway']();break;case _0x357867(0x10f):this[_0x357867(0x3a5)]();break;case'mimic':case _0x357867(0x1df):this[_0x357867(0x490)]();break;case _0x357867(0x3df):case _0x357867(0x23a):this[_0x357867(0x21f)]();break;case'mirror\x20horizontal':case _0x357867(0x101):case _0x357867(0x2e1):case _0x357867(0xb0):this[_0x357867(0x31b)]();break;case'mirror\x20vertical':case _0x357867(0x330):case _0x357867(0xde):case _0x357867(0x2ca):this[_0x357867(0x42c)]();break;default:this['processMoveSynchRandom']();break;}this[_0x357867(0x18a)]();},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x3ce)]=function(){const _0x581c69=_0x1e9303,_0x1a8471=[0x2,0x4,0x6,0x8];$gameMap[_0x581c69(0xce)]()&&_0x1a8471[_0x581c69(0x443)](0x1,0x3,0x7,0x9);const _0x278ae2=[];for(const _0x3228ba of _0x1a8471){if(this['canPass'](this['x'],this['y'],_0x3228ba))_0x278ae2[_0x581c69(0x443)](_0x3228ba);}if(_0x278ae2[_0x581c69(0x411)]>0x0){const _0x1dff60=_0x278ae2[Math[_0x581c69(0x15c)](_0x278ae2[_0x581c69(0x411)])];this[_0x581c69(0x1d1)](_0x1dff60);}},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x296)]=function(){const _0x1b9830=_0x1e9303,_0x5a346f=VisuMZ[_0x1b9830(0x2c9)](this[_0x1b9830(0x14b)]());this[_0x1b9830(0x3b4)](_0x5a346f);},Game_Event['prototype'][_0x1e9303(0x3c0)]=function(){const _0x25e05a=_0x1e9303,_0x54034b=VisuMZ[_0x25e05a(0x2c9)](this['moveSynchTarget']());this[_0x25e05a(0x43d)](_0x54034b);},Game_Event['prototype']['processMoveSynchCustom']=function(){const _0x3106b0=_0x1e9303;this[_0x3106b0(0x4f6)]();},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x490)]=function(){const _0x1d652b=_0x1e9303,_0x3a5b9b=VisuMZ['GetMoveSynchTarget'](this['moveSynchTarget']());this[_0x1d652b(0x1d1)](_0x3a5b9b[_0x1d652b(0x475)]());},Game_Event['prototype']['processMoveSynchReverseMimic']=function(){const _0x46cff9=_0x1e9303,_0x585aa1=VisuMZ[_0x46cff9(0x2c9)](this['moveSynchTarget']());this[_0x46cff9(0x1d1)](this[_0x46cff9(0x2cf)](_0x585aa1[_0x46cff9(0x475)]()));},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x31b)]=function(){const _0x4374d8=_0x1e9303,_0xd00e69=VisuMZ[_0x4374d8(0x2c9)](this[_0x4374d8(0x14b)]()),_0x5c0b02=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0xd00e69['lastMovedDirection']()];this[_0x4374d8(0x1d1)](_0x5c0b02);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x42c)]=function(){const _0x443024=_0x1e9303,_0x4482ce=VisuMZ['GetMoveSynchTarget'](this[_0x443024(0x14b)]()),_0x1b555b=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x4482ce[_0x443024(0x475)]()];this['executeMoveDir8'](_0x1b555b);},Game_Event['prototype'][_0x1e9303(0xb6)]=function(){const _0x5e582d=_0x1e9303,_0x428146=VisuMZ[_0x5e582d(0x2c9)](this['moveSynchTarget']()),_0x59da63=_0x428146[_0x5e582d(0x42d)]();switch(this[_0x5e582d(0x320)]()){case _0x5e582d(0x38c):case _0x5e582d(0x1df):this[_0x5e582d(0x271)](_0x59da63);break;case _0x5e582d(0x3df):case _0x5e582d(0x23a):this[_0x5e582d(0x271)](this[_0x5e582d(0x2cf)](_0x59da63));break;case'mirror\x20horizontal':case'horizontal\x20mirror':case _0x5e582d(0x2e1):case _0x5e582d(0xb0):this[_0x5e582d(0x271)]([0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x59da63]);break;case _0x5e582d(0x4d1):case _0x5e582d(0x330):case'mirror\x20vert':case _0x5e582d(0x2ca):this[_0x5e582d(0x271)]([0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x59da63]);break;default:return;}this[_0x5e582d(0x18a)]();},Game_Event[_0x1e9303(0xad)]['restoreSavedEventPosition']=function(){const _0x852530=_0x1e9303,_0xb44312=$gameSystem[_0x852530(0x248)](this);if(!_0xb44312)return;this[_0x852530(0x346)](_0xb44312['x'],_0xb44312['y']),this[_0x852530(0x1f2)](),this['setDirection'](_0xb44312[_0x852530(0x42d)]),this[_0x852530(0x39c)]===_0xb44312[_0x852530(0x2dd)]&&(this[_0x852530(0x1ed)]=_0xb44312[_0x852530(0x4e2)]);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x1d4)]=Game_Event[_0x1e9303(0xad)][_0x1e9303(0x18a)],Game_Event[_0x1e9303(0xad)][_0x1e9303(0x18a)]=function(){const _0x47fbd7=_0x1e9303;VisuMZ[_0x47fbd7(0x2bb)][_0x47fbd7(0x1d4)]['call'](this),!Utils[_0x47fbd7(0x4e9)]()&&this['updateSaveEventLocation']();},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x17f)]=function(){const _0x305f8f=_0x1e9303;Game_Character[_0x305f8f(0xad)]['updateMove'][_0x305f8f(0x1ae)](this),this[_0x305f8f(0x210)]();},Game_Event[_0x1e9303(0xad)]['isSaveEventLocation']=function(){const _0x5e1e81=_0x1e9303;if($gameMap[_0x5e1e81(0x3ad)]())return!![];return this[_0x5e1e81(0x25f)];},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x210)]=function(){const _0x306ad4=_0x1e9303;if(!this['isSaveEventLocation']())return;this[_0x306ad4(0x15f)]();},Game_Event['prototype'][_0x1e9303(0x15f)]=function(){const _0x9d5c99=_0x1e9303;this[_0x9d5c99(0xae)]=!![];},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x375)]=function(){const _0x3853c8=_0x1e9303;this[_0x3853c8(0xae)]&&this['processSaveEventLocation']();},Game_Event['prototype'][_0x1e9303(0x236)]=function(){const _0x6ae664=_0x1e9303;this[_0x6ae664(0xae)]=![],$gameSystem['saveEventLocation'](this);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x16c)]=function(){const _0x1b5d20=_0x1e9303;$gameSystem[_0x1b5d20(0x453)](this);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x16a)]=function(){const _0x490560=_0x1e9303;return $gameSystem[_0x490560(0x16a)](this)?Game_Character[_0x490560(0xad)][_0x490560(0x16a)][_0x490560(0x1ae)](this):{'iconIndex':0x0,'bufferX':settings['Icon']['BufferX'],'bufferY':settings[_0x490560(0xd1)][_0x490560(0x160)],'blendMode':settings[_0x490560(0xd1)][_0x490560(0x49f)]};},Game_Event[_0x1e9303(0xad)]['hasCPCs']=function(){const _0x4b52c1=_0x1e9303;return this[_0x4b52c1(0x3af)];},VisuMZ['EventsMoveCore']['Game_Event_meetsConditionsCPC']=Game_Event[_0x1e9303(0xad)]['meetsConditions'],Game_Event[_0x1e9303(0xad)][_0x1e9303(0x46a)]=function(_0x429467){const _0x254137=_0x1e9303,_0x124b2a=VisuMZ[_0x254137(0x2bb)][_0x254137(0x200)]['call'](this,_0x429467);if(!_0x124b2a)return![];return this[_0x254137(0x4c7)](_0x429467);},Game_Event[_0x1e9303(0xad)][_0x1e9303(0x4c7)]=function(_0x3cdf24){const _0x888ee7=_0x1e9303;VisuMZ[_0x888ee7(0x2bb)][_0x888ee7(0x283)][_0x888ee7(0x37e)](_0x3cdf24),this[_0x888ee7(0x3af)]=_0x3cdf24['CPC'][_0x888ee7(0x411)]>0x0;_0x3cdf24[_0x888ee7(0x3d8)]===undefined&&VisuMZ[_0x888ee7(0x2bb)][_0x888ee7(0x283)]['loadCPC'](_0x3cdf24);if(_0x3cdf24[_0x888ee7(0x3d8)][_0x888ee7(0x411)]>0x0)return $gameMap[_0x888ee7(0x4f1)](this[_0x888ee7(0x27a)])&&VisuMZ['EventsMoveCore'][_0x888ee7(0x283)][_0x888ee7(0x45c)](_0x3cdf24[_0x888ee7(0x3d8)],this[_0x888ee7(0x27a)]);return!![];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x30f)]=Game_Troop[_0x1e9303(0xad)]['meetsConditions'],Game_Troop[_0x1e9303(0xad)][_0x1e9303(0x46a)]=function(_0x256fe6){const _0x431e2f=_0x1e9303;var _0x5378e4=VisuMZ[_0x431e2f(0x2bb)][_0x431e2f(0x30f)]['call'](this,_0x256fe6);return _0x5378e4&&this[_0x431e2f(0x3ac)](_0x256fe6);},Game_Troop[_0x1e9303(0xad)][_0x1e9303(0x3ac)]=function(_0x10167d){const _0x27d174=_0x1e9303;_0x10167d[_0x27d174(0x3d8)]===undefined&&VisuMZ[_0x27d174(0x2bb)][_0x27d174(0x283)][_0x27d174(0x37e)](_0x10167d);if(_0x10167d['CPC'][_0x27d174(0x411)]>0x0)return VisuMZ[_0x27d174(0x2bb)][_0x27d174(0x283)][_0x27d174(0x45c)](_0x10167d[_0x27d174(0x3d8)],0x0);return!![];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x434)]=Game_Event[_0x1e9303(0xad)][_0x1e9303(0x49c)],Game_Event[_0x1e9303(0xad)]['locate']=function(_0x24926d,_0x37406a){const _0x20b7be=_0x1e9303;VisuMZ['EventsMoveCore'][_0x20b7be(0x434)]['call'](this,_0x24926d,_0x37406a),this[_0x20b7be(0x11b)]=_0x24926d,this[_0x20b7be(0x247)]=_0x37406a,this[_0x20b7be(0x210)]();},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x2f1)]=Game_Event['prototype'][_0x1e9303(0x220)],Game_Event[_0x1e9303(0xad)]['moveTypeRandom']=function(){const _0xbdecf0=_0x1e9303,_0x1591bf=$gameMap[_0xbdecf0(0x2cd)](this['x'],this['y'],this['_randomHomeX'],this[_0xbdecf0(0x247)]),_0x295258=_0x1591bf*(this[_0xbdecf0(0x230)]||0x0);Math[_0xbdecf0(0x39b)]()>=_0x295258?VisuMZ[_0xbdecf0(0x2bb)][_0xbdecf0(0x2f1)][_0xbdecf0(0x1ae)](this):this[_0xbdecf0(0x17b)]();},Game_Event['prototype'][_0x1e9303(0x17b)]=function(){const _0x54fa94=_0x1e9303,_0xb03c5f=this[_0x54fa94(0x2d6)](this['_randomHomeX']),_0x4cc68b=this[_0x54fa94(0x4cf)](this['_randomHomeY']);if(Math[_0x54fa94(0x2eb)](_0xb03c5f)>Math[_0x54fa94(0x2eb)](_0x4cc68b))this[_0x54fa94(0x4d7)](_0xb03c5f>0x0?0x4:0x6),!this[_0x54fa94(0x4a4)]()&&_0x4cc68b!==0x0&&this[_0x54fa94(0x4d7)](_0x4cc68b>0x0?0x8:0x2);else _0x4cc68b!==0x0&&(this['moveStraight'](_0x4cc68b>0x0?0x8:0x2),!this[_0x54fa94(0x4a4)]()&&_0xb03c5f!==0x0&&this[_0x54fa94(0x4d7)](_0xb03c5f>0x0?0x4:0x6));},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x480)]=function(){const _0x3f8fe1=_0x1e9303;this[_0x3f8fe1(0x222)]={'filename':'','blendMode':0x0,'maxSize':0x0,'offsetX':0x0,'offsetY':0x0,'scale':0x1};},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x19b)]=function(){const _0x4a151c=_0x1e9303;if(this['_attachPicture']===undefined)this[_0x4a151c(0x480)]();return this[_0x4a151c(0x222)];},Game_CharacterBase['prototype']['attachPictureFilename']=function(){const _0x2d3a1b=_0x1e9303;return this[_0x2d3a1b(0x19b)]()['filename']??'';},Game_CharacterBase[_0x1e9303(0xad)]['attachPictureBlendMode']=function(){const _0x46794c=_0x1e9303;return this[_0x46794c(0x19b)]()[_0x46794c(0x2e0)]??0x0;},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x3d1)]=function(){const _0x788e43=_0x1e9303;return this['attachPictureSettings']()[_0x788e43(0x201)]??0x0;},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x40f)]=function(){const _0x59df36=_0x1e9303;return this[_0x59df36(0x19b)]()['offsetX']??0x0;},Game_CharacterBase[_0x1e9303(0xad)][_0x1e9303(0x4c3)]=function(){const _0x36e3f7=_0x1e9303;return this[_0x36e3f7(0x19b)]()['offsetY']??0x0;},Game_CharacterBase[_0x1e9303(0xad)]['attachPictureScale']=function(){const _0x1e1d5e=_0x1e9303;return this[_0x1e1d5e(0x19b)]()['scale']??0x1;},VisuMZ[_0x1e9303(0x2bb)]['Game_Interpreter_updateWaitMode']=Game_Interpreter[_0x1e9303(0xad)][_0x1e9303(0x1ea)],Game_Interpreter['prototype'][_0x1e9303(0x1ea)]=function(){const _0x90c9cf=_0x1e9303;if(this['_waitMode']==='CallEvent'){if(window[this[_0x90c9cf(0x3f7)]])this[_0x90c9cf(0x178)]='',this[_0x90c9cf(0x3bb)]();else return!![];}else return VisuMZ[_0x90c9cf(0x2bb)][_0x90c9cf(0x2aa)][_0x90c9cf(0x1ae)](this);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x2e2)]=Game_Interpreter[_0x1e9303(0xad)][_0x1e9303(0x344)],Game_Interpreter['prototype']['executeCommand']=function(){const _0x5de1d2=_0x1e9303,_0x34079f=$gameMap&&this[_0x5de1d2(0x27a)]?$gameMap[_0x5de1d2(0x4f1)](this['_eventId']):null;$gameTemp[_0x5de1d2(0xb5)](_0x34079f);const _0x30c03f=VisuMZ[_0x5de1d2(0x2bb)][_0x5de1d2(0x2e2)][_0x5de1d2(0x1ae)](this);return $gameTemp[_0x5de1d2(0x19f)](),_0x30c03f;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x225)]=Game_Interpreter[_0x1e9303(0xad)][_0x1e9303(0x16d)],Game_Interpreter[_0x1e9303(0xad)][_0x1e9303(0x16d)]=function(_0x59a1c5){const _0xd51dd3=_0x1e9303;return $gameTemp[_0xd51dd3(0x40a)](this),VisuMZ[_0xd51dd3(0x2bb)][_0xd51dd3(0x225)][_0xd51dd3(0x1ae)](this,_0x59a1c5);},Game_Interpreter[_0x1e9303(0xad)][_0x1e9303(0x14d)]=function(_0x55d4e3){const _0x2312a6=_0x1e9303;this[_0x2312a6(0x104)]=_0x55d4e3;const _0xeab7b0=_0x2312a6(0x49a)[_0x2312a6(0x29a)](_0x55d4e3['mapId'][_0x2312a6(0x1c5)](0x3));this[_0x2312a6(0x3f7)]='$callEventMap'+Graphics[_0x2312a6(0x22d)]+'_'+this[_0x2312a6(0x1c6)](),DataManager[_0x2312a6(0x3b6)](this[_0x2312a6(0x3f7)],_0xeab7b0),window[this[_0x2312a6(0x3f7)]]?this[_0x2312a6(0x3bb)]():this[_0x2312a6(0x20d)](_0x2312a6(0x165));},Game_Interpreter[_0x1e9303(0xad)][_0x1e9303(0x3bb)]=function(){const _0x36e4ad=_0x1e9303,_0x5a0b3f=this['_callEventData'],_0x40e3ff=window[this[_0x36e4ad(0x3f7)]],_0x5315e8=_0x40e3ff[_0x36e4ad(0x1a2)][_0x5a0b3f[_0x36e4ad(0x1c6)]];if(_0x5315e8&&_0x5315e8[_0x36e4ad(0x309)][_0x5a0b3f[_0x36e4ad(0x12b)]-0x1]){const _0x4364cb=_0x5315e8['pages'][_0x5a0b3f[_0x36e4ad(0x12b)]-0x1][_0x36e4ad(0x2ad)];this['setupChild'](_0x4364cb,this[_0x36e4ad(0x1c6)]());}window[this[_0x36e4ad(0x3f7)]]=undefined,this[_0x36e4ad(0x3f7)]=undefined,this[_0x36e4ad(0x104)]=undefined;};function Game_CPCInterpreter(){const _0x367516=_0x1e9303;this[_0x367516(0x30c)][_0x367516(0x10c)](this,arguments);};Game_CPCInterpreter[_0x1e9303(0xad)]=Object[_0x1e9303(0x1bf)](Game_Interpreter[_0x1e9303(0xad)]),Game_CPCInterpreter['prototype'][_0x1e9303(0x28d)]=Game_CPCInterpreter,Game_CPCInterpreter[_0x1e9303(0xad)]['clear']=function(){const _0x21460b=_0x1e9303;Game_Interpreter[_0x21460b(0xad)][_0x21460b(0x402)][_0x21460b(0x1ae)](this),this[_0x21460b(0x4ca)]=![];},Game_CPCInterpreter[_0x1e9303(0xad)][_0x1e9303(0x305)]=function(){const _0xe97a06=_0x1e9303;while(this[_0xe97a06(0x2fc)]()){this['executeCommand']();}},Game_CPCInterpreter[_0x1e9303(0xad)]['executeCommonEvent']=function(_0x3a1cf2){const _0x529de1=_0x1e9303;while(this[_0x529de1(0x2fc)]()){this[_0x529de1(0x156)](_0x3a1cf2);}},Game_CPCInterpreter[_0x1e9303(0xad)][_0x1e9303(0x156)]=function(_0x8ae25e){const _0x2a5348=_0x1e9303,_0x512c9c=_0x8ae25e;$gameTemp[_0x2a5348(0xb5)](_0x512c9c);const _0x4b41be=VisuMZ[_0x2a5348(0x2bb)][_0x2a5348(0x2e2)][_0x2a5348(0x1ae)](this);return $gameTemp[_0x2a5348(0x19f)](),_0x4b41be;},Game_CPCInterpreter['prototype'][_0x1e9303(0x2e6)]=function(_0x1694da){const _0x346542=_0x1e9303;return Game_Interpreter[_0x346542(0xad)][_0x346542(0x2e6)][_0x346542(0x1ae)](this,_0x1694da),this[_0x346542(0x10d)]['some'](_0x1e2e5d=>_0x1e2e5d[_0x346542(0xe9)](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this[_0x346542(0x4ca)]=!![]),!![];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x4b1)]=Scene_Map[_0x1e9303(0xad)][_0x1e9303(0xaa)],Scene_Map[_0x1e9303(0xad)][_0x1e9303(0xaa)]=function(){const _0x594f6b=_0x1e9303;VisuMZ['EventsMoveCore'][_0x594f6b(0x4b1)][_0x594f6b(0x1ae)](this),this[_0x594f6b(0x187)][_0x594f6b(0x47a)]();},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x1e3)]=Scene_Load['prototype'][_0x1e9303(0x31e)],Scene_Load[_0x1e9303(0xad)]['onLoadSuccess']=function(){const _0x418ec7=_0x1e9303;if($gameMap)$gameMap['clearEventCache']();VisuMZ[_0x418ec7(0x2bb)][_0x418ec7(0x1e3)][_0x418ec7(0x1ae)](this);},VisuMZ['EventsMoveCore']['Sprite_Character_initMembers']=Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0xdf)],Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0xdf)]=function(){const _0x53e3f8=_0x1e9303;VisuMZ[_0x53e3f8(0x2bb)][_0x53e3f8(0x253)][_0x53e3f8(0x1ae)](this),this[_0x53e3f8(0x47c)](),this[_0x53e3f8(0x36f)](),this[_0x53e3f8(0x3e2)]();},Sprite_Character['prototype'][_0x1e9303(0x47c)]=function(){const _0x23d564=_0x1e9303;this[_0x23d564(0x34a)]=0xff;},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x36f)]=function(){const _0x1d37d8=_0x1e9303;this[_0x1d37d8(0x15a)]=new Sprite(),this[_0x1d37d8(0x15a)][_0x1d37d8(0x275)]['x']=0.5,this[_0x1d37d8(0x15a)]['anchor']['y']=0x1,this[_0x1d37d8(0x2df)](this[_0x1d37d8(0x15a)]),this[_0x1d37d8(0x3a6)]();},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x3e2)]=function(){const _0x53ffce=_0x1e9303;this['_eventIconSprite']=new Sprite(),this['_eventIconSprite'][_0x53ffce(0x340)]=ImageManager['loadSystem'](_0x53ffce(0x298)),this[_0x53ffce(0x31f)]['bitmap'][_0x53ffce(0x4e3)]=![],this['_eventIconSprite'][_0x53ffce(0x128)](0x0,0x0,0x0,0x0),this[_0x53ffce(0x31f)][_0x53ffce(0x275)]['x']=0.5,this[_0x53ffce(0x31f)][_0x53ffce(0x275)]['y']=0x1,this['addChild'](this['_eventIconSprite']);},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x121)]=function(){const _0x523cf3=_0x1e9303;return this[_0x523cf3(0x1c1)]&&this[_0x523cf3(0x1c1)][_0x523cf3(0xe9)](/\[VS8\]/i);},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x286)]=function(){const _0x1bdb0e=_0x1e9303;return this[_0x1bdb0e(0x121)]()&&VisuMZ[_0x1bdb0e(0x2bb)][_0x1bdb0e(0x27e)][_0x1bdb0e(0x14a)][_0x1bdb0e(0x34f)];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x175)]=Sprite_Character['prototype'][_0x1e9303(0x18a)],Sprite_Character[_0x1e9303(0xad)]['update']=function(){const _0x5b13e8=_0x1e9303;VisuMZ['EventsMoveCore'][_0x5b13e8(0x175)]['call'](this),this[_0x5b13e8(0x4cd)]();},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x33f)]=function(){const _0x48af16=_0x1e9303;Sprite[_0x48af16(0xad)][_0x48af16(0x33f)]['call'](this),this[_0x48af16(0x48b)]()&&(this[_0x48af16(0x15e)]=![]);},Sprite_Character['prototype'][_0x1e9303(0x48b)]=function(){const _0x1afe07=_0x1e9303;if(this[_0x1afe07(0x3d9)]()>0x0)return![];if(this[_0x1afe07(0x293)]){if(this[_0x1afe07(0x293)][_0x1afe07(0x3e6)]()!=='')return![];}return this['isEmptyCharacter']()||this[_0x1afe07(0x293)]&&this[_0x1afe07(0x293)][_0x1afe07(0x350)]();},Sprite_Character['prototype'][_0x1e9303(0x4cd)]=function(){const _0x3aee37=_0x1e9303;this[_0x3aee37(0x1ad)](),this['updateTilt'](),this[_0x3aee37(0x36a)](),this[_0x3aee37(0x380)](),this[_0x3aee37(0x3ba)](),this['updateEventMirrorSprite'](),this['updateAttachPictureSprite']();},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x49b)]=Sprite_Character['prototype'][_0x1e9303(0xcc)],Sprite_Character['prototype']['setTileBitmap']=function(){const _0x43848a=_0x1e9303;VisuMZ[_0x43848a(0x2bb)][_0x43848a(0x49b)][_0x43848a(0x1ae)](this),this[_0x43848a(0x340)][_0x43848a(0x400)](this[_0x43848a(0x34b)]['bind'](this));},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x33d)]=Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x33b)],Sprite_Character['prototype'][_0x1e9303(0x33b)]=function(){const _0x43cd25=_0x1e9303;VisuMZ[_0x43cd25(0x2bb)][_0x43cd25(0x33d)][_0x43cd25(0x1ae)](this),this['bitmap'][_0x43cd25(0x400)](this['updateBitmapSmoothing'][_0x43cd25(0x388)](this));},Sprite_Character['prototype'][_0x1e9303(0x34b)]=function(){const _0x5183b2=_0x1e9303;if(!this['bitmap'])return;this['bitmap'][_0x5183b2(0x4e3)]=!!VisuMZ[_0x5183b2(0x2bb)][_0x5183b2(0x27e)][_0x5183b2(0xfd)][_0x5183b2(0x198)];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x416)]=Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x188)],Sprite_Character[_0x1e9303(0xad)]['characterPatternY']=function(){const _0xdf4100=_0x1e9303;return this[_0xdf4100(0x121)]()?this['characterPatternYVS8']():this['characterPatternYBasic']();},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x3fe)]=function(){const _0x17c241=_0x1e9303,_0xfacfd0=this[_0x17c241(0x293)]['direction']();let _0x2ec52f=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return this[_0x17c241(0x293)][_0x17c241(0x16f)]&&(_0x2ec52f=[0x2,0x4,0x2,0x2,0x6,0x2,0x4,0x8,0x8,0x6]),(_0x2ec52f[_0xfacfd0]-0x2)/0x2;},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x217)]=function(){const _0x5783c8=_0x1e9303;let _0x1dcc4e=this['_character'][_0x5783c8(0x42d)]();if(this[_0x5783c8(0x293)][_0x5783c8(0x16f)]){if(_0x1dcc4e===0x4)_0x1dcc4e=0x6;else _0x1dcc4e===0x6&&(_0x1dcc4e=0x4);}return(_0x1dcc4e-0x2)/0x2;},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x1ad)]=function(){const _0x3541c0=_0x1e9303;this[_0x3541c0(0x174)]['x']=this[_0x3541c0(0x293)][_0x3541c0(0x208)],this[_0x3541c0(0x174)]['y']=this[_0x3541c0(0x293)][_0x3541c0(0x152)];},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x4b9)]=function(){const _0x2ce4ca=_0x1e9303;if(!VisuMZ[_0x2ce4ca(0x2bb)][_0x2ce4ca(0x27e)][_0x2ce4ca(0xfd)][_0x2ce4ca(0xa8)])return;this['rotation']=0x0;if(this['isAllowCharacterTilt']()){const _0x18d1df=VisuMZ[_0x2ce4ca(0x2bb)]['Settings'][_0x2ce4ca(0xfd)],_0x3ca100=this['_character'][_0x2ce4ca(0x42d)]();let _0x2b16c4=0x0;if([0x1,0x4,0x7][_0x2ce4ca(0x224)](_0x3ca100))_0x2b16c4=_0x18d1df[_0x2ce4ca(0x4d3)];if([0x3,0x6,0x9][_0x2ce4ca(0x224)](_0x3ca100))_0x2b16c4=_0x18d1df['TiltRight'];[0x2,0x8][_0x2ce4ca(0x224)](_0x3ca100)&&(_0x2b16c4=[-_0x18d1df[_0x2ce4ca(0x227)],0x0,_0x18d1df[_0x2ce4ca(0x227)]][this[_0x2ce4ca(0x293)][_0x2ce4ca(0x4d8)]()]);if(this[_0x2ce4ca(0x20a)])_0x2b16c4*=-0x1;this[_0x2ce4ca(0x379)]=_0x2b16c4;}},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x384)]=function(){const _0x29dd49=_0x1e9303;if(this[_0x29dd49(0x19c)])return![];return this[_0x29dd49(0x293)][_0x29dd49(0x3f0)]()&&!this[_0x29dd49(0x293)][_0x29dd49(0x3db)]()&&!this['_character'][_0x29dd49(0xd3)]()&&this[_0x29dd49(0x3d9)]()===0x0;},Sprite_Character['prototype']['updateShadow']=function(){const _0x38d2e7=_0x1e9303;if(!this[_0x38d2e7(0x214)])return;this[_0x38d2e7(0x214)]['x']=this[_0x38d2e7(0x293)][_0x38d2e7(0x2f5)](),this[_0x38d2e7(0x214)]['y']=this[_0x38d2e7(0x293)][_0x38d2e7(0x481)](),this[_0x38d2e7(0x214)][_0x38d2e7(0x361)]=this[_0x38d2e7(0x361)],this[_0x38d2e7(0x214)]['visible']=this['_character'][_0x38d2e7(0x2d5)](),this[_0x38d2e7(0x214)][_0x38d2e7(0x4c2)]=this[_0x38d2e7(0x4c2)];if(this[_0x38d2e7(0x293)][_0x38d2e7(0x218)]())this['_shadowSprite'][_0x38d2e7(0x174)]['x']=Math[_0x38d2e7(0xac)](0x0,this[_0x38d2e7(0x214)][_0x38d2e7(0x174)]['x']-0.1),this[_0x38d2e7(0x214)]['scale']['y']=Math['max'](0x0,this['_shadowSprite'][_0x38d2e7(0x174)]['y']-0.1);else{if(this['_shadowSprite'][_0x38d2e7(0x174)]['x']!==this[_0x38d2e7(0x174)]['x']){if(this[_0x38d2e7(0x214)][_0x38d2e7(0x174)]['x']>this[_0x38d2e7(0x174)]['x'])this['_shadowSprite'][_0x38d2e7(0x174)]['x']=Math['min'](this[_0x38d2e7(0x214)][_0x38d2e7(0x174)]['x']+0.1,this[_0x38d2e7(0x174)]['x']);if(this[_0x38d2e7(0x214)][_0x38d2e7(0x174)]['x']<this['scale']['x'])this[_0x38d2e7(0x214)]['scale']['x']=Math[_0x38d2e7(0xac)](this[_0x38d2e7(0x214)][_0x38d2e7(0x174)]['x']-0.1,this[_0x38d2e7(0x174)]['x']);}if(this['_shadowSprite'][_0x38d2e7(0x174)]['y']!==this['scale']['y']){if(this[_0x38d2e7(0x214)][_0x38d2e7(0x174)]['y']>this[_0x38d2e7(0x174)]['y'])this[_0x38d2e7(0x214)][_0x38d2e7(0x174)]['y']=Math['min'](this['_shadowSprite'][_0x38d2e7(0x174)]['y']+0.1,this[_0x38d2e7(0x174)]['y']);if(this[_0x38d2e7(0x214)]['scale']['y']<this[_0x38d2e7(0x174)]['y'])this['_shadowSprite'][_0x38d2e7(0x174)]['y']=Math[_0x38d2e7(0xac)](this[_0x38d2e7(0x214)][_0x38d2e7(0x174)]['y']-0.1,this[_0x38d2e7(0x174)]['y']);}}},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x380)]=function(){const _0x40941d=_0x1e9303;if(!this['_eventIconSprite'])return;const _0x2257da=this[_0x40941d(0x31f)],_0x44955e=this['getEventIconIndex']();if(_0x44955e<=0x0)return _0x2257da['setFrame'](0x0,0x0,0x0,0x0);else{const _0x3c3143=ImageManager[_0x40941d(0x12d)],_0x1eef97=ImageManager[_0x40941d(0x43e)],_0xee2adb=_0x44955e%0x10*_0x3c3143,_0x1e0d95=Math[_0x40941d(0x137)](_0x44955e/0x10)*_0x1eef97;_0x2257da['setFrame'](_0xee2adb,_0x1e0d95,_0x3c3143,_0x1eef97),this[_0x40941d(0x15e)]=!![];}const _0x277b3d=this['_character']['getEventIconData']();this[_0x40941d(0x286)]()?this['autoEventIconBuffer'](_0x2257da):(_0x2257da['x']=_0x277b3d?_0x277b3d[_0x40941d(0x32b)]:0x0,_0x2257da['y']=_0x277b3d?-this[_0x40941d(0x279)]+_0x277b3d[_0x40941d(0x2b7)]:0x0),_0x2257da['blendMode']=_0x277b3d?_0x277b3d[_0x40941d(0x2e0)]:0x0,this[_0x40941d(0x1f9)](_0x2257da),this[_0x40941d(0x2df)](_0x2257da),_0x2257da['rotation']=-this[_0x40941d(0x379)];},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x3ba)]=function(){const _0xddb28b=_0x1e9303;if(!this['_character'])return;if(this[_0xddb28b(0x293)]['_customZ']===undefined)return;if(this[_0xddb28b(0x293)][_0xddb28b(0x239)]===![])return;this['z']=this[_0xddb28b(0x293)]['_customZ'],this['z']<0x0?this[_0xddb28b(0x214)]['z']=this['z']-0x1:this[_0xddb28b(0x214)]['z']=0x0;},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x3e8)]=function(){const _0xa533ec=_0x1e9303;if(!this['_character'])return;let _0x4d844d=!!this[_0xa533ec(0x293)][_0xa533ec(0x16f)];this[_0xa533ec(0x174)]['x']=Math[_0xa533ec(0x2eb)](this[_0xa533ec(0x174)]['x'])*(_0x4d844d?-0x1:0x1);},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x49e)]=function(_0x512b11){const _0x23d050=_0x1e9303;_0x512b11['x']=0x0,_0x512b11['y']=-this[_0x23d050(0x279)]+this[_0x23d050(0x279)]*0x2/0x5,this[_0x23d050(0x293)][_0x23d050(0x4d8)]()!==0x1&&(_0x512b11['y']+=0x1);},Sprite_Character['prototype']['getEventIconIndex']=function(){const _0x4af3c3=_0x1e9303;if(!this[_0x4af3c3(0x293)])return 0x0;if(this[_0x4af3c3(0x293)]['_erased'])return 0x0;const _0x4e8400=this['_character'][_0x4af3c3(0x16a)]();return _0x4e8400?_0x4e8400[_0x4af3c3(0x447)]||0x0:0x0;},Sprite_Character['prototype']['updateAttachPictureSprite']=function(){const _0x36c1da=_0x1e9303;if(!this[_0x36c1da(0x15a)])return;if(!this[_0x36c1da(0x293)])return;this[_0x36c1da(0x2ba)](),this[_0x36c1da(0x21d)]();},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x2ba)]=function(){const _0x169900=_0x1e9303;if(!this[_0x169900(0x19a)]())return;const _0x105e76=this['_character'][_0x169900(0x19b)]();this[_0x169900(0x3ef)]=_0x105e76['filename'],this[_0x169900(0x176)]=_0x105e76['maxSize'],this[_0x169900(0x1fa)]=_0x105e76['scale'];if(_0x105e76[_0x169900(0x4aa)]!==''){const _0x224be0=ImageManager['loadPicture'](_0x105e76[_0x169900(0x4aa)]);_0x224be0[_0x169900(0x400)](this[_0x169900(0x372)][_0x169900(0x388)](this,_0x224be0));}else this[_0x169900(0x15a)][_0x169900(0x340)]=new Bitmap(0x1,0x1);},Sprite_Character['prototype'][_0x1e9303(0x21d)]=function(){const _0x160551=_0x1e9303,_0x22ff16=this[_0x160551(0x15a)];_0x22ff16['x']=this[_0x160551(0x293)][_0x160551(0x40f)](),_0x22ff16['y']=this[_0x160551(0x293)][_0x160551(0x4c3)](),_0x22ff16[_0x160551(0x2e0)]=this['_character'][_0x160551(0x398)]();},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x19a)]=function(){const _0x9bcf8d=_0x1e9303,_0x30cd5b=this[_0x9bcf8d(0x293)]['attachPictureSettings']();if(_0x30cd5b){if(this[_0x9bcf8d(0x3ef)]!==_0x30cd5b[_0x9bcf8d(0x4aa)])return!![];if(this['_lastAttachPictureMaxSize']!==_0x30cd5b[_0x9bcf8d(0x201)])return!![];if(this[_0x9bcf8d(0x1fa)]!==_0x30cd5b['scale'])return!![];}return![];},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0x372)]=function(_0x360dfa){const _0x247c14=_0x1e9303,_0x349eed=this[_0x247c14(0x15a)];_0x349eed[_0x247c14(0x340)]=_0x360dfa;const _0x5b2541=this[_0x247c14(0x293)][_0x247c14(0x19b)](),_0x4fcc4c=_0x5b2541[_0x247c14(0x201)],_0x5cbe06=_0x5b2541[_0x247c14(0x174)];let _0x41ad67=0x1;if(_0x4fcc4c>0x0){let _0xee87bc=this['getAttachPictureBitmapWidth']()||0x1,_0x5e4f43=this[_0x247c14(0xd4)]()||0x1;const _0x1539d1=Math[_0x247c14(0xac)](0x1,_0xee87bc,_0x5e4f43);_0x41ad67=_0x4fcc4c/_0x1539d1;}_0x41ad67*=_0x5cbe06,_0x41ad67!==0x1&&(this[_0x247c14(0x15a)][_0x247c14(0x340)][_0x247c14(0x4e3)]=!![]),_0x349eed['scale']['x']=_0x41ad67,_0x349eed[_0x247c14(0x174)]['y']=_0x41ad67,this[_0x247c14(0x15e)]=!![],this[_0x247c14(0x21d)]();},Sprite_Character['prototype'][_0x1e9303(0x21e)]=function(){const _0x1c9473=_0x1e9303,_0x2b5a22=this[_0x1c9473(0x15a)];if(!_0x2b5a22)return 0x0;return _0x2b5a22[_0x1c9473(0x340)][_0x1c9473(0x32f)];},Sprite_Character[_0x1e9303(0xad)][_0x1e9303(0xd4)]=function(){const _0x1d6ff2=_0x1e9303,_0x1d2e07=this['_attachPictureSprite'];if(!_0x1d2e07)return 0x0;return _0x1d2e07[_0x1d6ff2(0x340)]['height'];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x339)]=Sprite_Balloon[_0x1e9303(0xad)][_0x1e9303(0x324)],Sprite_Balloon[_0x1e9303(0xad)][_0x1e9303(0x324)]=function(_0x4d2bda,_0x3e25d6){const _0x38cc7d=_0x1e9303;VisuMZ[_0x38cc7d(0x2bb)][_0x38cc7d(0x339)][_0x38cc7d(0x1ae)](this,_0x4d2bda,_0x3e25d6),VisuMZ[_0x38cc7d(0x2bb)][_0x38cc7d(0x27e)][_0x38cc7d(0x14a)][_0x38cc7d(0x3c9)]&&this['_target'][_0x38cc7d(0x293)][_0x38cc7d(0x363)](_0x3e25d6,this[_0x38cc7d(0x4a7)]);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x4b3)]=Sprite_Balloon[_0x1e9303(0xad)][_0x1e9303(0x41d)],Sprite_Balloon['prototype'][_0x1e9303(0x41d)]=function(){const _0x14928d=_0x1e9303;VisuMZ['EventsMoveCore']['Sprite_Balloon_updatePosition'][_0x14928d(0x1ae)](this),this[_0x14928d(0x4e6)]();},Sprite_Balloon[_0x1e9303(0xad)][_0x1e9303(0x4e6)]=function(){const _0x6d7e8d=_0x1e9303;this[_0x6d7e8d(0x483)]['_character']['isSpriteVS8dir']()&&(this['x']+=VisuMZ[_0x6d7e8d(0x2bb)][_0x6d7e8d(0x27e)][_0x6d7e8d(0x14a)][_0x6d7e8d(0x215)],this['y']+=VisuMZ[_0x6d7e8d(0x2bb)][_0x6d7e8d(0x27e)][_0x6d7e8d(0x14a)]['BalloonOffsetY']);},Sprite_Timer['prototype']['createBitmap']=function(){const _0xcf3958=_0x1e9303;this['bitmap']=new Bitmap(Math[_0xcf3958(0x460)](Graphics[_0xcf3958(0x3e7)]/0x2),0x30),this['bitmap'][_0xcf3958(0x3f4)]=this['fontFace'](),this[_0xcf3958(0x340)][_0xcf3958(0x3cc)]=this['fontSize'](),this[_0xcf3958(0x340)][_0xcf3958(0x393)]=ColorManager['outlineColor']();},Sprite_Timer[_0x1e9303(0xad)][_0x1e9303(0x391)]=function(){const _0x5448e7=_0x1e9303,_0x5798da=Math[_0x5448e7(0x137)](this[_0x5448e7(0x23e)]/0x3c/0x3c),_0x286de9=Math['floor'](this[_0x5448e7(0x23e)]/0x3c)%0x3c,_0x29bd46=this[_0x5448e7(0x23e)]%0x3c;let _0x14cec1=_0x286de9[_0x5448e7(0x1c5)](0x2)+':'+_0x29bd46['padZero'](0x2);if(_0x5798da>0x0)_0x14cec1='%1:%2'[_0x5448e7(0x29a)](_0x5798da,_0x14cec1);return _0x14cec1;};function Sprite_EventLabel(){const _0x552f09=_0x1e9303;this[_0x552f09(0x30c)](...arguments);}Sprite_EventLabel[_0x1e9303(0xad)]=Object[_0x1e9303(0x1bf)](Sprite[_0x1e9303(0xad)]),Sprite_EventLabel['prototype'][_0x1e9303(0x28d)]=Sprite_EventLabel,Sprite_EventLabel[_0x1e9303(0xad)]['initialize']=function(_0xaf20bd){const _0x14475a=_0x1e9303;this[_0x14475a(0x22b)]=_0xaf20bd,Sprite[_0x14475a(0xad)][_0x14475a(0x30c)][_0x14475a(0x1ae)](this),this[_0x14475a(0xdf)](),this[_0x14475a(0x2ec)]();},Sprite_EventLabel[_0x1e9303(0xad)][_0x1e9303(0xdf)]=function(){const _0x28a7b3=_0x1e9303;this[_0x28a7b3(0x275)]['x']=0.5,this[_0x28a7b3(0x275)]['y']=0x1;},Sprite_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x2ec)]=function(){const _0xc58599=_0x1e9303,_0x2362c5=new Rectangle(0x0,0x0,0x1,0x1);this[_0xc58599(0x1c4)]=new Window_Base(_0x2362c5),this[_0xc58599(0x1c4)][_0xc58599(0xf5)]=0x0,this[_0xc58599(0x361)]=this[_0xc58599(0x2c0)]()?0xff:0x0;},Sprite_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x18a)]=function(){const _0x481c28=_0x1e9303;Sprite[_0x481c28(0xad)][_0x481c28(0x18a)][_0x481c28(0x1ae)](this),this[_0x481c28(0x143)](),this[_0x481c28(0xb1)](),this[_0x481c28(0x41d)](),this['updateOpacity']();},Sprite_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x143)]=function(){const _0x55cb0a=_0x1e9303;this[_0x55cb0a(0x22b)][_0x55cb0a(0x17d)]()!==this[_0x55cb0a(0x2f6)]&&(this[_0x55cb0a(0x2f6)]=this[_0x55cb0a(0x22b)][_0x55cb0a(0x17d)](),this[_0x55cb0a(0x316)]());},Sprite_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x316)]=function(){const _0x226bb3=_0x1e9303;if(!this['_proxyWindow'])return;this[_0x226bb3(0x166)](),this[_0x226bb3(0x183)]();},Sprite_EventLabel['prototype'][_0x1e9303(0x166)]=function(){const _0x407128=_0x1e9303,_0x85a12f=this[_0x407128(0x1c4)][_0x407128(0x4be)](this['_text']),_0x408571=this[_0x407128(0x1c4)][_0x407128(0x1ec)](),_0xf35706=_0x85a12f[_0x407128(0x32f)]+_0x408571*0x2,_0x206248=_0x85a12f['height'];this[_0x407128(0x1c4)][_0x407128(0x335)](0x0,0x0,_0xf35706,_0x206248),this[_0x407128(0x1c4)][_0x407128(0x246)](),this[_0x407128(0x340)]=this[_0x407128(0x1c4)][_0x407128(0xef)];},Sprite_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x183)]=function(){const _0x427f4a=_0x1e9303,_0x1e4f7f=this[_0x427f4a(0x1c4)][_0x427f4a(0x1ec)]();this['_proxyWindow'][_0x427f4a(0x485)](this[_0x427f4a(0x2f6)],_0x1e4f7f,0x0);},Sprite_EventLabel[_0x1e9303(0xad)][_0x1e9303(0xb1)]=function(){const _0x34455a=_0x1e9303,_0x3499fc=VisuMZ['EventsMoveCore'][_0x34455a(0x27e)]['Label'][_0x34455a(0x13c)],_0x5aaf57=$gameSystem[_0x34455a(0x1b2)]()||0x1;this[_0x34455a(0x174)]['x']=this[_0x34455a(0x174)]['y']=_0x3499fc/_0x5aaf57;},Sprite_EventLabel['prototype'][_0x1e9303(0x41d)]=function(){const _0x4a246e=_0x1e9303;if(!SceneManager[_0x4a246e(0x238)])return;if(!SceneManager['_scene'][_0x4a246e(0x187)])return;const _0x4f7674=SceneManager[_0x4a246e(0x238)][_0x4a246e(0x187)][_0x4a246e(0x281)](this[_0x4a246e(0x22b)]);if(!_0x4f7674)return;this['x']=this[_0x4a246e(0x22b)][_0x4a246e(0xe6)](),this['x']+=this[_0x4a246e(0x22b)][_0x4a246e(0x3a2)][_0x4a246e(0x45d)],this['y']=this[_0x4a246e(0x22b)][_0x4a246e(0xe0)]()-_0x4f7674['height'],this['y']+=$gameSystem[_0x4a246e(0x3ea)]()*-0.5,this['y']+=this[_0x4a246e(0x22b)]['_labelWindow'][_0x4a246e(0x433)];},Sprite_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x180)]=function(){const _0x349365=_0x1e9303;if(this[_0x349365(0x2c0)]())this[_0x349365(0x361)]+=this[_0x349365(0x300)]();else SceneManager[_0x349365(0x238)][_0x349365(0x2b2)]>0x0?this[_0x349365(0x361)]=0x0:this[_0x349365(0x361)]-=this[_0x349365(0x300)]();},Sprite_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x2c0)]=function(){const _0x35df3d=_0x1e9303;if(!$gameSystem[_0x35df3d(0x2ee)]())return![];if(this[_0x35df3d(0x22b)]?.[_0x35df3d(0x24d)])return![];if(this['_event']&&this[_0x35df3d(0x22b)][_0x35df3d(0x39c)]<0x0)return![];if(SceneManager[_0x35df3d(0x238)][_0x35df3d(0x2b2)]>0x0)return![];const _0x12bffb=$gamePlayer['x'],_0x2973cd=$gamePlayer['y'],_0xb41143=this['_event']['x'],_0x28c701=this[_0x35df3d(0x22b)]['y'];if(this[_0x35df3d(0xd0)]===_0x12bffb&&this[_0x35df3d(0x216)]===_0x2973cd&&this[_0x35df3d(0x274)]===_0xb41143&&this[_0x35df3d(0x2b6)]===_0x28c701)return this[_0x35df3d(0x328)];this[_0x35df3d(0xd0)]=$gamePlayer['x'],this[_0x35df3d(0x216)]=$gamePlayer['y'],this['_visibleEventX']=this['_event']['x'],this[_0x35df3d(0x2b6)]=this[_0x35df3d(0x22b)]['y'];if($gameMap['absDistance'](_0x12bffb,_0x2973cd,_0xb41143,_0x28c701)>this[_0x35df3d(0x22b)][_0x35df3d(0x194)]())return this[_0x35df3d(0x328)]=![],![];return this[_0x35df3d(0x328)]=!![],!![];},Sprite_EventLabel['prototype'][_0x1e9303(0x300)]=function(){const _0x52724a=_0x1e9303;return VisuMZ[_0x52724a(0x2bb)][_0x52724a(0x27e)][_0x52724a(0x285)]['OpacitySpeed'];},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x4ad)]=Spriteset_Map['prototype']['createLowerLayer'],Spriteset_Map['prototype'][_0x1e9303(0x25b)]=function(){const _0x2a12e1=_0x1e9303;VisuMZ[_0x2a12e1(0x2bb)]['Spriteset_Map_createLowerLayer']['call'](this),this[_0x2a12e1(0x3a3)]();},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x1ee)]=Spriteset_Map[_0x1e9303(0xad)][_0x1e9303(0x1f4)],Spriteset_Map[_0x1e9303(0xad)]['createShadow']=function(){const _0x500ffe=_0x1e9303;VisuMZ[_0x500ffe(0x2bb)]['Spriteset_Map_createShadow'][_0x500ffe(0x1ae)](this),this['createShadows']();},Spriteset_Map['prototype'][_0x1e9303(0xbc)]=function(){const _0x9b7c8d=_0x1e9303;if(!VisuMZ['EventsMoveCore'][_0x9b7c8d(0x27e)][_0x9b7c8d(0xfd)]['ShowShadows'])return;for(const _0x2ffafb of this[_0x9b7c8d(0x116)]){this[_0x9b7c8d(0x4f3)](_0x2ffafb);}},Spriteset_Map[_0x1e9303(0xad)]['createCharacterShadow']=function(_0x532207){const _0x446565=_0x1e9303;_0x532207[_0x446565(0x214)]=new Sprite(),_0x532207[_0x446565(0x214)]['_filename']=_0x532207[_0x446565(0x293)][_0x446565(0x3ff)](),_0x532207[_0x446565(0x214)][_0x446565(0x340)]=ImageManager[_0x446565(0x2c7)](_0x532207[_0x446565(0x214)][_0x446565(0x1e2)]),_0x532207[_0x446565(0x214)][_0x446565(0x275)]['x']=0.5,_0x532207[_0x446565(0x214)][_0x446565(0x275)]['y']=0x1,_0x532207['_shadowSprite']['z']=0x0,this[_0x446565(0x3fd)][_0x446565(0x2df)](_0x532207['_shadowSprite']);},Spriteset_Map[_0x1e9303(0xad)][_0x1e9303(0x47a)]=function(){const _0x5f3733=_0x1e9303;if(!VisuMZ[_0x5f3733(0x2bb)][_0x5f3733(0x27e)][_0x5f3733(0xfd)][_0x5f3733(0x3b8)])return;for(const _0xb03984 of this[_0x5f3733(0x116)]){this['_tilemap'][_0x5f3733(0x1f9)](_0xb03984[_0x5f3733(0x214)]);}},Spriteset_Map['prototype'][_0x1e9303(0x3a3)]=function(){const _0x5b395e=_0x1e9303;this['_labelWindows']=[];for(const _0x2b90a0 of $gameMap[_0x5b395e(0x1a2)]()){this[_0x5b395e(0x308)](_0x2b90a0);}},Spriteset_Map['MOBILE_EVENT_LABELS']=VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x27e)]['Label']['MobileEnabled']??!![],Spriteset_Map[_0x1e9303(0xad)][_0x1e9303(0x308)]=function(_0x29939e){const _0x1d7ad1=_0x1e9303;if(!this[_0x1d7ad1(0x36e)](_0x29939e))return;if(Utils[_0x1d7ad1(0x4e9)]()){if(!Spriteset_Map['MOBILE_EVENT_LABELS'])return;}let _0x20370e;const _0x8c560e=VisuMZ[_0x1d7ad1(0x2bb)][_0x1d7ad1(0x27e)][_0x1d7ad1(0x285)][_0x1d7ad1(0x408)]??!![];_0x20370e=_0x8c560e?new Sprite_EventLabel(_0x29939e):new Window_EventLabel(_0x29939e),_0x20370e['z']=0x8,_0x20370e['spriteId']=Sprite['_counter']++,this['_tilemap'][_0x1d7ad1(0x2df)](_0x20370e),this['_labelWindows'][_0x1d7ad1(0x443)](_0x20370e);},Spriteset_Map[_0x1e9303(0xad)][_0x1e9303(0x36e)]=function(_0x3b1de7){const _0x43607a=_0x1e9303,_0x27b9c5=_0x3b1de7[_0x43607a(0x4f1)]();if(_0x27b9c5[_0x43607a(0x2b5)][_0x43607a(0xe9)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x27b9c5[_0x43607a(0x2b5)][_0x43607a(0xe9)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x3329c0 of _0x27b9c5['pages']){let _0x25d3af='';for(const _0x7632ec of _0x3329c0['list']){[0x6c,0x198][_0x43607a(0x224)](_0x7632ec[_0x43607a(0x4e7)])&&(_0x25d3af+=_0x7632ec[_0x43607a(0x41c)][0x0]);}if(_0x25d3af[_0x43607a(0xe9)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x25d3af[_0x43607a(0xe9)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];}return![];},Spriteset_Map[_0x1e9303(0xad)][_0x1e9303(0x133)]=function(_0x27b32a){const _0x2a2eb4=_0x1e9303;this[_0x2a2eb4(0x116)]=this[_0x2a2eb4(0x116)]||[];const _0x86100b=new Sprite_Character(_0x27b32a);this[_0x2a2eb4(0x116)][_0x2a2eb4(0x443)](_0x86100b),this[_0x2a2eb4(0x3fd)][_0x2a2eb4(0x2df)](_0x86100b),this['createCharacterShadow'](_0x86100b),this[_0x2a2eb4(0x308)](_0x27b32a),_0x86100b[_0x2a2eb4(0x18a)]();},Spriteset_Map[_0x1e9303(0xad)]['refreshEventLabels']=function(){const _0x498183=_0x1e9303;if(!this[_0x498183(0x138)])return;for(const _0x49caf1 of this['_labelWindows']){_0x49caf1&&(_0x49caf1['_visiblePlayerX']=undefined,_0x49caf1[_0x498183(0x316)]());}},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x2f9)]=Game_Message[_0x1e9303(0xad)][_0x1e9303(0x2d9)],Game_Message[_0x1e9303(0xad)][_0x1e9303(0x2d9)]=function(_0x25b407,_0x2ba08d){const _0x537d4c=_0x1e9303;this[_0x537d4c(0x256)]=$gameTemp['getSelfTarget'](),VisuMZ[_0x537d4c(0x2bb)]['Game_Message_setNumberInput']['call'](this,_0x25b407,_0x2ba08d);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x27b)]=Window_NumberInput[_0x1e9303(0xad)][_0x1e9303(0x43f)],Window_NumberInput[_0x1e9303(0xad)][_0x1e9303(0x43f)]=function(){const _0x5a0459=_0x1e9303;$gameTemp[_0x5a0459(0xb5)]($gameMessage['_selfTargetNumberInput']),VisuMZ[_0x5a0459(0x2bb)]['Window_NumberInput_start'][_0x5a0459(0x1ae)](this),$gameTemp[_0x5a0459(0x19f)]();},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x280)]=Window_NumberInput[_0x1e9303(0xad)]['processOk'],Window_NumberInput[_0x1e9303(0xad)]['processOk']=function(){const _0x1b4131=_0x1e9303;$gameTemp[_0x1b4131(0xb5)]($gameMessage[_0x1b4131(0x256)]),VisuMZ[_0x1b4131(0x2bb)][_0x1b4131(0x280)][_0x1b4131(0x1ae)](this),$gameTemp[_0x1b4131(0x19f)](),$gameMessage[_0x1b4131(0x256)]=undefined;},VisuMZ[_0x1e9303(0x2bb)]['Game_Message_setItemChoice']=Game_Message[_0x1e9303(0xad)]['setItemChoice'],Game_Message[_0x1e9303(0xad)][_0x1e9303(0x4f0)]=function(_0x26a332,_0x4dbb54){const _0x2306be=_0x1e9303;this[_0x2306be(0x1ef)]=$gameTemp['getSelfTarget'](),VisuMZ[_0x2306be(0x2bb)][_0x2306be(0x1dc)]['call'](this,_0x26a332,_0x4dbb54);},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x211)]=Window_EventItem[_0x1e9303(0xad)][_0x1e9303(0x415)],Window_EventItem['prototype'][_0x1e9303(0x415)]=function(){const _0x94d42a=_0x1e9303;$gameTemp[_0x94d42a(0xb5)]($gameMessage['_selfTargetItemChoice']),VisuMZ[_0x94d42a(0x2bb)][_0x94d42a(0x211)][_0x94d42a(0x1ae)](this),$gameTemp[_0x94d42a(0x19f)](),$gameMessage[_0x94d42a(0x1ef)]=undefined;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x3f1)]=Window_EventItem[_0x1e9303(0xad)][_0x1e9303(0x168)],Window_EventItem[_0x1e9303(0xad)][_0x1e9303(0x168)]=function(){const _0x3865d2=_0x1e9303;$gameTemp[_0x3865d2(0xb5)]($gameMessage['_selfTargetItemChoice']),VisuMZ['EventsMoveCore']['Window_EventItem_onCancel'][_0x3865d2(0x1ae)](this),$gameTemp['clearSelfTarget'](),$gameMessage['_selfTargetItemChoice']=undefined;},VisuMZ[_0x1e9303(0x2bb)][_0x1e9303(0x3c4)]=Window_Message['prototype'][_0x1e9303(0x30e)],Window_Message[_0x1e9303(0xad)]['startMessage']=function(){const _0x2cb6dc=_0x1e9303;$gameMessage[_0x2cb6dc(0x144)](),VisuMZ['EventsMoveCore'][_0x2cb6dc(0x3c4)][_0x2cb6dc(0x1ae)](this),$gameTemp[_0x2cb6dc(0x19f)]();},VisuMZ['EventsMoveCore'][_0x1e9303(0x399)]=Window_ScrollText[_0x1e9303(0xad)][_0x1e9303(0x30e)],Window_ScrollText[_0x1e9303(0xad)][_0x1e9303(0x30e)]=function(){const _0x365809=_0x1e9303;$gameMessage[_0x365809(0x144)](),VisuMZ[_0x365809(0x2bb)][_0x365809(0x399)][_0x365809(0x1ae)](this),$gameTemp[_0x365809(0x19f)]();};function Window_EventLabel(){this['initialize'](...arguments);}Window_EventLabel[_0x1e9303(0xad)]=Object[_0x1e9303(0x1bf)](Window_Base[_0x1e9303(0xad)]),Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x28d)]=Window_EventLabel,Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x30c)]=function(_0x42de25){const _0x5760fd=_0x1e9303;this[_0x5760fd(0x22b)]=_0x42de25;const _0x51f238=new Rectangle(0x0,0x0,Graphics[_0x5760fd(0x3e7)]/0x4,this['fittingHeight'](0x1));this[_0x5760fd(0xdf)](),Window_Base[_0x5760fd(0xad)][_0x5760fd(0x30c)][_0x5760fd(0x1ae)](this,_0x51f238),this[_0x5760fd(0x3e5)]=0x0,this[_0x5760fd(0x4e0)](0x2),this['_text']='';},Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0xdf)]=function(){const _0x4862be=_0x1e9303;this[_0x4862be(0x2c8)]=![],this[_0x4862be(0x336)]=$gameScreen['zoomScale'](),this['_eventScreenX']=this['_event'][_0x4862be(0xe6)](),this[_0x4862be(0xe4)]=this[_0x4862be(0x22b)][_0x4862be(0xe0)](),this[_0x4862be(0x3e4)]=this[_0x4862be(0x22b)][_0x4862be(0x3a2)][_0x4862be(0x45d)],this[_0x4862be(0xba)]=this[_0x4862be(0x22b)][_0x4862be(0x3a2)][_0x4862be(0x433)],this[_0x4862be(0x3a9)]=this['_event'][_0x4862be(0x39c)],this[_0x4862be(0x328)]=this[_0x4862be(0x2c0)](),this[_0x4862be(0x4c9)]=$gameSystem[_0x4862be(0x2ee)](),this[_0x4862be(0xd0)]=$gamePlayer['x'],this[_0x4862be(0x216)]=$gamePlayer['y'],this['_visibleEventX']=this[_0x4862be(0x22b)]['x'],this[_0x4862be(0x2b6)]=this[_0x4862be(0x22b)]['y'];},Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x18a)]=function(){const _0x22eb86=_0x1e9303;Window_Base[_0x22eb86(0xad)][_0x22eb86(0x18a)]['call'](this);if(!this[_0x22eb86(0x1dd)]())return;this['updateText'](),this[_0x22eb86(0xb1)](),this[_0x22eb86(0x41d)](),this[_0x22eb86(0x180)]();},Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x1dd)]=function(){const _0x582d48=_0x1e9303;if(!this[_0x582d48(0x22b)])return![];if(!this[_0x582d48(0x22b)][_0x582d48(0x3a2)])return![];if(this[_0x582d48(0x3a9)]!==this[_0x582d48(0x22b)][_0x582d48(0x39c)])return!![];if(this[_0x582d48(0x22b)][_0x582d48(0x24d)]&&!this[_0x582d48(0x2c8)])return!![];if(this['_event']['_labelWindow'][_0x582d48(0x2f0)]==='')return![];if(this['_screenZoomScale']!==$gameScreen[_0x582d48(0x438)]())return!![];if(this[_0x582d48(0x452)]!==this[_0x582d48(0x22b)][_0x582d48(0xe6)]())return!![];if(this[_0x582d48(0xe4)]!==this['_event'][_0x582d48(0xe0)]())return!![];if(this[_0x582d48(0x3e4)]!==this[_0x582d48(0x22b)][_0x582d48(0x3a2)][_0x582d48(0x45d)])return!![];if(this[_0x582d48(0xba)]!==this[_0x582d48(0x22b)][_0x582d48(0x3a2)][_0x582d48(0x433)])return!![];if(this[_0x582d48(0xd0)]!==$gamePlayer['x'])return!![];if(this[_0x582d48(0x216)]!==$gamePlayer['y'])return!![];if(this['_visibleEventX']!==this[_0x582d48(0x22b)]['x'])return!![];if(this[_0x582d48(0x2b6)]!==this['_event']['y'])return!![];if(this[_0x582d48(0x4c9)]!==$gameSystem['eventLabelsVisible']())return!![];if(this[_0x582d48(0x328)]&&this[_0x582d48(0x3e5)]<0xff)return!![];if(!this[_0x582d48(0x328)]&&this[_0x582d48(0x3e5)]>0x0)return!![];if(SceneManager[_0x582d48(0x238)][_0x582d48(0x2b2)]>0x0)return!![];return![];},Window_EventLabel[_0x1e9303(0xad)]['updateText']=function(){const _0x40d19a=_0x1e9303;this[_0x40d19a(0x22b)][_0x40d19a(0x17d)]()!==this[_0x40d19a(0x2f6)]&&(this[_0x40d19a(0x2f6)]=this[_0x40d19a(0x22b)][_0x40d19a(0x17d)](),this['refresh']());},Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0xb1)]=function(){const _0x19c06a=_0x1e9303;this[_0x19c06a(0x174)]['x']=0x1/$gameScreen[_0x19c06a(0x438)](),this[_0x19c06a(0x174)]['y']=0x1/$gameScreen[_0x19c06a(0x438)](),this['_screenZoomScale']=$gameScreen[_0x19c06a(0x438)]();},Window_EventLabel[_0x1e9303(0xad)]['updatePosition']=function(){const _0x289625=_0x1e9303;if(!SceneManager[_0x289625(0x238)])return;if(!SceneManager[_0x289625(0x238)][_0x289625(0x187)])return;const _0x46c3dc=SceneManager[_0x289625(0x238)][_0x289625(0x187)][_0x289625(0x281)](this[_0x289625(0x22b)]);if(!_0x46c3dc)return;this['x']=Math[_0x289625(0x460)](this['_event']['screenX']()-Math[_0x289625(0x137)](this['width']*this[_0x289625(0x174)]['x']/0x2)),this['x']+=this[_0x289625(0x22b)][_0x289625(0x3a2)]['offsetX'],this['y']=this['_event'][_0x289625(0xe0)]()-_0x46c3dc[_0x289625(0x279)],this['y']+=Math[_0x289625(0x460)]($gameSystem[_0x289625(0x3ea)]()*0.5),this['y']-=Math[_0x289625(0x460)](this[_0x289625(0x279)]*this[_0x289625(0x174)]['y']),this['y']+=this[_0x289625(0x22b)][_0x289625(0x3a2)][_0x289625(0x433)],this[_0x289625(0x2c8)]=this[_0x289625(0x22b)][_0x289625(0x24d)],this['_eventScreenX']=this[_0x289625(0x22b)][_0x289625(0xe6)](),this['_eventScreenY']=this['_event'][_0x289625(0xe0)](),this[_0x289625(0x3e4)]=this[_0x289625(0x22b)][_0x289625(0x3a2)][_0x289625(0x45d)],this[_0x289625(0xba)]=this[_0x289625(0x22b)]['_labelWindow']['offsetY'],this['_eventPageIndex']=this[_0x289625(0x22b)][_0x289625(0x39c)],this['_eventErased']&&(this['contentsOpacity']=0x0);},Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x180)]=function(){const _0x15d86b=_0x1e9303;if(this[_0x15d86b(0x2c0)]())this[_0x15d86b(0x3e5)]+=this[_0x15d86b(0x300)]();else SceneManager[_0x15d86b(0x238)][_0x15d86b(0x2b2)]>0x0?this[_0x15d86b(0x3e5)]=0x0:this['contentsOpacity']-=this[_0x15d86b(0x300)]();},Window_EventLabel[_0x1e9303(0xad)]['isLabelVisible']=function(){const _0x328b53=_0x1e9303;if(!$gameSystem['eventLabelsVisible']())return![];if(this[_0x328b53(0x22b)]?.[_0x328b53(0x24d)])return![];if(SceneManager['_scene']['_encounterEffectDuration']>0x0)return![];const _0x5c1c6f=$gamePlayer['x'],_0x314e07=$gamePlayer['y'],_0x552e83=this[_0x328b53(0x22b)]['x'],_0x28b24d=this['_event']['y'];if(this[_0x328b53(0xd0)]===_0x5c1c6f&&this[_0x328b53(0x216)]===_0x314e07&&this[_0x328b53(0x274)]===_0x552e83&&this[_0x328b53(0x2b6)]===_0x28b24d)return this[_0x328b53(0x328)];this['_visiblePlayerX']=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this[_0x328b53(0x274)]=this['_event']['x'],this[_0x328b53(0x2b6)]=this[_0x328b53(0x22b)]['y'];if($gameMap[_0x328b53(0x209)](_0x5c1c6f,_0x314e07,_0x552e83,_0x28b24d)>this['_event'][_0x328b53(0x194)]())return this[_0x328b53(0x328)]=![],![];return this[_0x328b53(0x328)]=!![],!![];},Window_EventLabel['prototype'][_0x1e9303(0x300)]=function(){const _0x5554db=_0x1e9303;return VisuMZ[_0x5554db(0x2bb)][_0x5554db(0x27e)][_0x5554db(0x285)]['OpacitySpeed'];},Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x166)]=function(){const _0x3d2b3a=_0x1e9303,_0x4e9561=this[_0x3d2b3a(0x4be)](this[_0x3d2b3a(0x2f6)]);this[_0x3d2b3a(0x32f)]=_0x4e9561['width']+($gameSystem[_0x3d2b3a(0x3ea)]()+this[_0x3d2b3a(0x1ec)]())*0x2,this[_0x3d2b3a(0x279)]=Math['max'](this[_0x3d2b3a(0x3a7)](),_0x4e9561[_0x3d2b3a(0x279)])+$gameSystem[_0x3d2b3a(0x3ea)]()*0x2,this[_0x3d2b3a(0x246)]();},Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x3a7)]=function(){const _0x2a3412=_0x1e9303;return VisuMZ['EventsMoveCore'][_0x2a3412(0x27e)][_0x2a3412(0x285)][_0x2a3412(0x313)];},Window_EventLabel[_0x1e9303(0xad)]['resetFontSettings']=function(){const _0x5383bd=_0x1e9303;Window_Base['prototype'][_0x5383bd(0x1a8)][_0x5383bd(0x1ae)](this),this['contents'][_0x5383bd(0x3cc)]=this[_0x5383bd(0x105)]();},Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x105)]=function(){const _0x5e97c7=_0x1e9303;return VisuMZ['EventsMoveCore'][_0x5e97c7(0x27e)][_0x5e97c7(0x285)][_0x5e97c7(0x13c)];},Window_EventLabel[_0x1e9303(0xad)]['refresh']=function(){const _0x542289=_0x1e9303;this[_0x542289(0x166)](),this[_0x542289(0xef)][_0x542289(0x402)]();const _0x4a07a2=this[_0x542289(0x2f6)]['split'](/[\r\n]+/);let _0x2ea0f4=0x0;for(const _0xcdf42f of _0x4a07a2){const _0x5711b2=this[_0x542289(0x4be)](_0xcdf42f),_0x21005b=Math[_0x542289(0x137)]((this[_0x542289(0x376)]-_0x5711b2[_0x542289(0x32f)])/0x2);this[_0x542289(0x485)](_0xcdf42f,_0x21005b,_0x2ea0f4),_0x2ea0f4+=_0x5711b2[_0x542289(0x279)];}},Window_EventLabel[_0x1e9303(0xad)][_0x1e9303(0x390)]=function(_0xa27427,_0x8fa26d){const _0xf2bb10=_0x1e9303;_0x8fa26d[_0xf2bb10(0x3ed)]&&this['drawIcon'](_0xa27427,_0x8fa26d['x']+0x2,_0x8fa26d['y']),_0x8fa26d['x']+=Math[_0xf2bb10(0xfc)](this['iconSize'](),ImageManager[_0xf2bb10(0x12d)])+0x4;},Window_EventLabel[_0x1e9303(0xad)]['drawIcon']=function(_0x44afda,_0x3a3a17,_0x179c74){const _0x4c1efd=_0x1e9303,_0x30572b=ImageManager['loadSystem'](_0x4c1efd(0x298)),_0x2cf790=ImageManager[_0x4c1efd(0x12d)],_0x2dfd1d=ImageManager[_0x4c1efd(0x43e)],_0x196b23=_0x44afda%0x10*_0x2cf790,_0x37ee10=Math[_0x4c1efd(0x137)](_0x44afda/0x10)*_0x2dfd1d,_0x3879f0=Math[_0x4c1efd(0xfc)](this['iconSize']()),_0x222367=Math['min'](this[_0x4c1efd(0x2fb)]());this[_0x4c1efd(0xef)]['blt'](_0x30572b,_0x196b23,_0x37ee10,_0x2cf790,_0x2dfd1d,_0x3a3a17,_0x179c74,_0x3879f0,_0x222367);},Window_EventLabel[_0x1e9303(0xad)]['iconSize']=function(){const _0x1b2c69=_0x1e9303;return VisuMZ[_0x1b2c69(0x2bb)][_0x1b2c69(0x27e)]['Label']['IconSize'];};