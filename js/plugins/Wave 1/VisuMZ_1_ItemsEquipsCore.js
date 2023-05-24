//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.45;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.45] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
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
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
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
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
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
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 * 
 * <Party Artifact>
 * <Troop Artifact>
 * 
 * <Stackable Party Artifact>
 * <Stackable Troop Artifact>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped at all. However, by simply being in the
 *   party's inventory, its parameter bonuses and traits will be applied
 *   globally throughout the whole party or troop (depending on the notetag).
 * - Add both notetags to affect both groups.
 * - The normal versions of the notetag is only applied once regardless of the
 *   number of copies are found in the party's inventory.
 * - The stackable versions of the notetag will have the bonuses and traits
 *   stacked multiple times relative to the number of copies found in the
 *   party's inventory.
 * - This item will NOT be added during the setup phase for Battle Tests.
 *   - If you want to add the item, do it manually.
 * 
 * ---
 * 
 * <Equip For Class Only: x>
 * <Equip For Classes Only: x, x, x>
 * <Equip For Class Only: name>
 * <Equip For Classes Only: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - This piece of equipment can only be worn by members with 'x' as the main
 *   class. If there are multiple classes listed, at least one of them need to
 *   be the actor's main class.
 * - Replace 'x' with a number representing the ID of the class required.
 * - For the 'name' variant, replace 'name' with the name of the required class
 *   the actor needs to have in order to equip this object.
 * 
 * ---
 * 
 * <Equip Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Equip Requirements>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Defines a requirement(s) for the actor to meet in order for the equip item
 *   to be equippable.
 * - Failure to meet these requirements will cause the equipment to unequip
 *   automatically.
 *   - Keep in mind that in some cases, this will not happen immediately.
 *     Things like switches will require the actor to meet its cache clear
 *     in order to trigger the automatic unequip.
 *   - Some ways to trigger a cache clear would be to change the actor's HP/MP,
 *     or adding and then removing a state for the actor (preferrably an unused
 *     state that has no real effect).
 * - Replace 'requirement' with one of the settings bellow:
 * - Add multiple 'requirement' lines for more requirements.
 * 
 *   Requirements:
 *
 *   param > x
 *   param >= x
 *   param === x
 *   param <= x
 *   param < x
 *   - Replace 'param' with 'level', 'maxhp', 'maxmp', 'atk', 'def', 'mat',
 *     'mdf', 'agi', or 'luk'.
 *   - This will make the piece of equipment require the actor's base parameter
 *     to be greater than (>), greater than or equal to (>=), equal to (===),
 *     less than or equal to (<=), or less than (<).
 *   - This is NOT the value for the total parameter, only the base parameter.
 *   - The base parameter is calculated by the user's class parameter value and
 *     any bonuses received through permanent stat increases.
 *
 *   learned skill: x
 *   learned skill: name
 *   - This will make the piece of equipment require the actor to have learned
 *     skill 'x'. 
 *   - If 'name' is used, priority will be given to the skill with the highest
 *     ID in the database.
 *   - The actor needs to have LEARNED the skill. This means that if you have
 *     added a skill to the actor's kit through a trait, it will not count.
 *
 *   switch: x
 *   - This will require switch X to be on.
 *   - If it isn't, the piece of equipment cannot be worn.
 *   - Insert multiple of these to add more switches that are are required to
 *     be on.
 * 
 *   ***NOTE 1***
 *   There is no "class: x" for these equip requirements. Instead, use the
 *   <Equip For Class Only: x> notetags.
 * 
 *   ***NOTE 2***
 *   For those wondering where "unique only" is, that does not exist in this
 *   plugin. Instead, use the <Equip Copy Limit: x> notetag listed above.
 * 
 *   Example A:
 * 
 *     <Equip Requirements>
 *     level >= 20
 *     </Equip Requirements>
 * 
 *     - Requires the user to be at least level 20 in order to equip.
 * 
 *   Example B:
 * 
 *     <Equip Requirements>
 *     atk >= 50
 *     def <= 50
 *     </Equip Requirements>
 *     - Requires the user have at least 50 base ATK to equip.
 *     - Requires the user to be under 50 base DEF to equip.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
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
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
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
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
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
 * Equipment Data
 * 
 *   Already Equipped:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Can't Equip:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   No Changes:
 *   - Marker used to show no changes have occurred.
 * 
 *   JS: Draw Equip Data:
 *   - Code used to draw the equipment data for the Shop Status Window.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
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
 * Version 1.45: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause equip slots to not be recognized properly if
 *    the equip slot name ends in a space.
 * 
 * Version 1.44: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by Anon:
 * *** <Equip For Class Only: x>
 * *** <Equip For Classes Only: x, x, x>
 * *** <Equip For Class Only: name>
 * *** <Equip For Classes Only: name, name, name>
 * **** The piece of equipment can only be worn by the listed classes.
 * *** <Equip Requirements> notetag added.
 * **** Define multiple requirements that the actor needs to meet in order for
 *      this equip item to be equippable.
 * **** See help file for more information on the types of requirements that
 *      can be added.
 * 
 * Version 1.43: March 16, 2023
 * * Bug Fixes!
 * ** Artifact armors should now update and refresh the party members' cache
 *    upon acquisition. Fix made by Olivia.
 * 
 * Version 1.42: February 16, 2023
 * * Bug Fixes!
 * ** Proxy items should no longer cause infinite loops if they're made to
 *    reference other proxy items in a circular fashion. Instead, they just
 *    give the exact first found proxy instead of cycling through others.
 *    Fix made by Arisu.
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by Anon:
 * *** Equip Scene > Equip Command > Help Description
 * *** Equip Scene > Optimize Command > Help Description
 * *** Equip Scene > Clear Command > Help Description
 * **** Help description used when these commands are selected.
 * 
 * Version 1.40: October 20, 2022
 * * Feature Update!
 * ** For the shop status window, when comparing equipment of a type where
 *    there are multiple equipment slots (such as accessories), the plugin will
 *    now check for an empty equipment slot first and then make calculations
 *    there. Otherwise, it will use the first available equipment slot of that
 *    type regardless of the equipped item. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.39: September 29, 2022:
 * * Feature Update!
 * ** Changed the default code for the equip scene's status window display to
 *    prevent the face graphic and basic actor stats from going above the
 *    window boundaries if there are too many parameters displayed in the
 *    status window at a time.
 * ** If you already have this plugin installed the changes will not be
 *    reflected unless you do the following:
 * **** BACKUP your game project.
 * **** REMOVE this plugin from the Plugin Manager list.
 * **** REINSTALL this plugin into the Plugin Manager list.
 * **** SAVE the game project.
 * 
 * Version 1.38: March 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New mechanics and notetags added by Olivia and sponsored by Anon:
 * *** <Party Artifact>
 * *** <Troop Artifact>
 * *** <Stackable Party Artifact>
 * *** <Stackable Troop Artifact>
 * **** Armors only! This armor cannot be equipped at all. However, by simply
 *      being in the party's inventory, its parameter bonuses and traits will
 *      be applied globally throughout the whole party or troop (depending on
 *      the notetag). Add both notetags to affect both groups.
 * **** The normal versions of the notetag is only applied once regardless of
 *      the number of copies are found in the party's inventory.
 * **** The stackable versions of the notetag will have the bonuses and traits
 *      stacked multiple times relative to the number of copies found in the
 *      party's inventory.
 * **** This item will NOT be added during the setup phase for Battle Tests.
 * ***** If you want to add the item, do it manually.
 * 
 * Version 1.37: December 23, 2021
 * * Compatibility Update
 * ** Created foundation for proxy items to be used in any applicable system
 *    and extension plugins. Update made by Arisu.
 * 
 * Version 1.36: December 2, 2021
 * * Feature Update!
 * ** For those using custom parameters from the Core Engine and do not have
 *    the parameters all-capitalized, the plugin will automatically do it for
 *    you to prevent errors. Update made by Olivia.
 * 
 * Version 1.35: November 18, 2021
 * * Compatibility Update!
 * ** If this plugin's updated scene is disabled, the Help Window locations for
 *    the Item, Equip, and Shop Scenes should now be at their designated
 *    locations as calculated by the VisuMZ Core Engine instead of the RMMZ
 *    default location. Update made by Irina.
 * 
 * Version 1.34: October 28, 2021
 * * Feature Update
 * ** Added fail safe checks for projects that are using old data for starting
 *    equipment that no longer exist, thus preventing the game from opening.
 *    Update made by Arisu.
 * 
 * Version 1.33: August 6, 2021
 * * Documentation Update!
 * ** Removed "Weapon" and "Armor" from "Used For" for <Status Info>. This was
 *    an unintended piece of documentation.
 * 
 * Version 1.32: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause armor duplication when changing to classes
 *    with unaligned equipment slot types. Fix made by Arisu.
 * 
 * Version 1.31: July 9, 2021
 * * Feature Update!
 * ** Added a failsafe for price manipulation JavaScript to never have prices
 *    drop below 0 if possible. Update made by Arisu.
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
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
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
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
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","CommandAddOptimize:eval":"true","CmdIconOptimize:num":"137","CommandAddClear:eval":"true","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes"}
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
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
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
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param equipCmdDesc:json
 * @text Help Description
 * @parent CmdIconEquip:num
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Pick and choose equipment to change."
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param optimizeCmdDesc:json
 * @text Help Description
 * @parent CommandAddOptimize:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Equip the strongest available equipment."
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param clearCmdDesc:json
 * @text Help Description
 * @parent CommandAddClear:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Remove all available equipment."
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
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
 * @param EquipData
 * @text Equipment Data
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipData
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipData
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 */
//=============================================================================

const _0x510241=_0x5bd0;function _0x1649(){const _0x3b748a=['itemLineRect','VisuMZ_0_CoreEngine','rSgwo','_paramPlus','_checkEquipRequirements','fillRect','LUK','convertInitEquipsToItems','hjBRl','agi','Scene_Equip_onActorChange','mvpKX','EFFECT_REMOVE_BUFF','params','ARRAYSTRUCT','gainTP','drawParamText','Text','JbJOq','SNrbK','cXHGS','OOLCD','_getEquipRequirements','ElementNone','onMenuImageLoad','bfepv','SpeedNeg2000','addCancelCommand','24JOidCO','_itemIDs','categoryItemTypes','allowShiftScrolling','flatMP','SCOPE','KFdEv','udonQ','zezhY','onSlotCancel','_itemWindow','ZDYWW','getItemEffectsTpRecoveryLabel','value','getItemEffectsHpRecoveryText','getItemConsumableLabel','isPlaytest','opacity','CwxSg','Uvfae','drawItemDarkRect','Window_ItemList_maxCols','Scene_Equip_helpWindowRect','buttonAssistKey2','+%1%','isUseItemsEquipsCoreUpdatedLayout','createCommandNameWindow','Settings','_resetFontColor','MPDSG','ghsdK','getItemOccasionText','_categoryWindow','defaultItemMax','AlreadyEquipMarker','Game_Actor_discardEquip','yohzn','hide','down','commandWindowRect','EFFECT_REMOVE_STATE','LFtcA','processCursorMoveModernControls','BVsqN','Scene_Item_helpWindowRect','WLRZV','Scene_Equip_commandEquip','getItemEffectsSelfTpGainLabel','shift','ItemQuantityFmt','normalColor','isHovered','tQPXq','Scene_Shop_sellWindowRect','show','createCategoryNameWindow','createBitmap','categoryNameWindowDrawBackground','sell','CmdStyle','checkItemConditionsSwitchNotetags','textSizeEx','etypeId','APgGt','FadeLimit','dOlhf','refreshCursor','ceil','Whitelist','TRmMd','elementId','prepareNewEquipSlotsOnLoad','qPUpM','ARMOR','uFRrn','nJwIG','itemTextAlign','onSellCancel','goldWindowRectItemsEquipsCore','RemoveEquipText','Game_BattlerBase_meetsItemConditions','CmdIconClear','drawItemName','buttonAssistKey3','mpRate','SwitchSell','getItemIdWithName','setNewItem','Game_Party_initialize','BuyPriceJS','atk','loadSystem','ZQWjw','SellPriceJS','ElementWeapon','reloadMapIfUpdated','helpWindowRectItemsEquipsCore','getColor','meetsItemConditionsNotetags','loseItem','updateChangedSlots','fontSizeRatio','REPEAT','CmdHideDisabled','OJkDR','woAHI','AsDtz','LabelRecoverTP','IncludeShopItem','LabelSpeed','toUpperCase','isOpen','Window_EquipItem_includes','DvAlJ','LabelRepeats','wbznD','_shopStatusMenuMode','helpAreaTop','QUANTITY','Scene_Shop_statusWindowRect','getItemEffectsAddedStatesBuffsText','onCategoryCancelItemsEquipsCore','getItemEffectsSelfTpGainText','KFTyo','Nonconsumable','drawItemNumber','isStackableArtifact','mainFontSize','15957024namiuA','EquipScene','ZSBHl','WnJNx','setItemWindow','_slotWindow','mainAreaBottom','adjustHiddenShownGoods','cDVqs','isDualWield','exit','goldWindowRect','drawUpdatedParamValueDiff','ActorChangeEquipSlots','Ebjiz','clearCmdDesc','vrlaZ','equip2','traitObjects','ScopeRandomAllies','Speed2000','Type','iconHeight','formula','LabelDamageHP','onTouchSelectModern','Game_BattlerBase_paramPlus_artifact','YLAtM','_forcedSlots','TWDlF','onBuyOk','equipSlotIndex','systemColor','AlwaysUsable','numberWindowRect','min','SNvTo','UTkSs','effects','buttonAssistItemListRequirement','mghqp','lfglR','SpeedNeg1999','Ivttp','gcrXY','KZdIJ','cOduQ','GlrSc','format','isShiftShortcutKeyForRemove','Window_ShopCommand_initialize','StatusWindow','getItemEffectsRemovedStatesBuffsText','getItemDamageAmountLabelBattleCore','onTouchSelect','sellWindowRect','LURlw','isKeyItem','qBLwS','isSoleArmorType','A%1','SetupProxyItemGroup','OHuEd','revertGlobalNamespaceVariables','commandNameWindowDrawBackground','makeCommandList','itemAt','jfcnf','resetFontSettings','WFeSv','slotWindowRectItemsEquipsCore','drawItemScope','isHoverEnabled','inBattle','isNewItem','buttonAssistText3','ScopeRandomEnemies','actor','currentSymbol','slotWindowRect','buttonAssistText1','HitType%1','getTextColor','value2','MP\x20DAMAGE','REMOVED\x20EFFECTS','eWlcr','mBpJN','drawItemHitType','getDamageStyle','mGpuV','statusWindowRectItemsEquipsCore','select','makeItemData','processShiftRemoveShortcut','drawItemCustomEntryLine','commandName','BattleUsable','CpnEQ','CommandAddClear','checkShiftRemoveShortcut','RegExp','setCategory','_classIDs','ExIyG','buyingPrice','nzXGg','XIWhA','UgAhB','MyEiQ','kQIYt','RDzGR','ARRAYNUM','Game_BattlerBase_param_artifact','gainItem','11sfKAGM','nzmgi','Scene_Item_createCategoryWindow','initNewItemsList','limitedPageUpDownSceneCheck','TpfyP','powerUpColor','isPressed','indexOf','Scene_Shop_activateSellWindow','Scene_Shop_createCategoryWindow','CmdIconBuy','pageup','ParseArmorNotetags','param','cursorRight','playEquip','drawItemDamageAmount','WQdGt','ADDED\x20EFFECTS','ieCIJ','mdydf','setItem','_handlers','Window_ShopBuy_price','FUNC','geUpdatedLayoutStatusWidth','allMembers','CmdIconCancel','_calculatingJSParameters','fbyrM','NOIrN','MMvmL','boxWidth','CONSUMABLE','paramBase','jjazg','isCommandEnabled','match','discardEquip','_scene','money','getClassIdWithName','selfTP','ItemQuantityFontSize','ILQyU','GZZhW','WWKjl','scope','_helpWindow','_goods','wtypeId','addInnerChild','Damage\x20Formula\x20Error\x20for\x20%1','addSellCommand','innerWidth','itemWindowRect','cjdxq','smoothScrollTo','EFFECT_ADD_STATE','EFFECT_GAIN_TP','getNextAvailableEtypeId','gYrhB','prepareItemCustomData','MaxIcons','YxWlt','isShowNew','xXWuG','gpFDW','values','price','cursorDown','isMainMenuCoreMenuImageOptionAvailable','IiwTH','TFWcl','ETfgz','onBuyCancelItemsEquipsCore','uiInputPosition','OfdoJ','cXMWH','_allowArtifactParamBase','hideNewLabelSprites','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','XlAxC','_tempActorA','FcpFn','drawItemEffectsHpDamage','ftdor','windowPadding','drawIcon','drawItemEffectsMpRecovery','_newLabelOpacityUpperLimit','changePaintOpacity','IconSet','gprwC','maxCols','addStateBuffChanges','EzFLo','setObject','paintOpacity','getItemQuantityText','Ltvtk','Translucent','Blacklist','Qvyqd','meetsEquipRequirement','OkBJi','activateSellWindow','ijXxC','move','setupItemDamageTempActors','OCCASION','xCHuI','visible','jezuD','ParseItemNotetags','Pick\x20and\x20choose\x20equipment\x20to\x20change.','refreshActorEquipSlotsIfUpdated','aPNpQ','postCreateSellWindowItemsEquipsCore','_item','nextActor','sellWindowRectItemsEquipsCore','getItemsEquipsCoreBackColor1','_buyWindowLastIndex','IiVVT','getItemDamageElementLabel','max','<%1:[\x20]([\x5c+\x5c-]\x5cd+)>','HIT\x20TYPE','name','_goodsCount','addItemCategories','WEAPON','proxyItem','addState','UZIYD','Game_Actor_tradeItemWithParty','isEquipped','JSON','resetShopSwitches','2436159dLRsbB','isPageChangeRequested','ExtDisplayedParams','cAOgZ','sellingPrice','Step1End','fontSize','paramPlus','Game_Enemy_traitObjects_artifact','refreshItemsEquipsCoreNoMenuImage','rjDCD','Game_Party_gainItem_artifact','TlUKZ','updatedLayoutStyle','drawParamName','100%','drawItemCustomEntries','categoryNameWindowCenter','QDmIM','isItem','getItemRepeatsLabel','equipCmdDesc','isLearnedSkill','vGtSW','drawRemoveItem','removeStateBuffChanges','buttonAssistRemove','knAxS','getItemsEquipsCoreBackColor2','HnDnJ','Scope%1','AQKXR','pxWFo','processCursorMove','yJfPs','parameters','Scene_Equip_onSlotOk','tpGain','allowCreateStatusWindow','toLowerCase','PPweP','eOJmx','numberWindowRectItemsEquipsCore','sMuHp','DCuaN','isOptimizeEquipOk','getEquipRequirements','activate','drawItemData','cursorPagedown','loadFaceImages','lfetc','drawItemEffectsTpRecovery','MP\x20RECOVERY','Scene_Shop_doBuy','changeEquipById','consumable','YJZHl','LayoutStyle','commandSell','_doubleTouch','anyEmptyEquipSlotsOfSameEtype','Window_ShopBuy_refresh','CFXiw','elements','cancel','cursorLeft','isBottomHelpMode','uiMenuStyle','CmdTextAlign','middle','battleMembers','_statusWindow','YyhbC','getItemDamageAmountLabelOriginal','equipTypes','_resetFontSize','ARRAYEVAL','mnrWK','qqKCp','textWidth','NeverUsable','getProxyItem','VisuMZ_1_BattleCore','_newLabelOpacity','status','drawNewLabelIcon','ListWindowCols','determineBaseSellingPrice','Enable','TP\x20DAMAGE','postCreateCategoryWindowItemsEquipsCore','xFTnD','damageColor','KeyItemProtect','isDrawItemNumber','FWpCF','sellPriceOfItem','cucOL','VisuMZ_1_MainMenuCore','doBuy','ZSmdl','drawItemEffectsTpDamage','HXQOu','juVam','Slots','pop','Scene_Equip_itemWindowRect','getItemEffectsAddedStatesBuffsLabel','getItemEffectsRemovedStatesBuffsLabel','createCommandWindow','isUseModernControls','getItemColor','_itemData','ShiftShortcutKey','Step3Start','characterName','iconText','JraGz','_newLabelSprites','EPTxt','buffIconIndex','VzXGv','EJzrp','kMYNF','MaxMP','Fuufk','addWindow','xssmg','_categoryNameWindow','_newItemsList','_commandWindow','xQJoO','canUse','_allowArtifactTraitObjects','mainCommandWidth','getItemEffectsMpDamageText','getItemEffectsTpDamageText','textColor','statusWindowRect','_actor','drawItem','ShowShopStatus','hideAdditionalSprites','EquipParams','Game_Party_gainItem','_scrollDuration','Scene_Item_createItemWindow','_money','drawCurrencyValue','drawText','commandEquip','Game_Party_numItems','OAEHV','getMenuImage','mainAreaTop','removeState','getInputButtonString','_numberWindow','0000','drawItemSpeed','PurchaseOnly','HAarh','drawItemOccasion','MeIwS','EFFECT_ADD_DEBUFF','\x5cI[%1]%2','3675680nxOeZp','ParseClassNotetags','%1-%2','?????','Window_ItemCategory_setItemWindow','MANUAL','EpBkb','deselect','W%1','DrawBackRect','drawItemEffectsHpRecovery','ZYfHN','drawItemCost','commandWindowRectItemsEquipsCore','OeWmq','Game_Actor_artifact','CkOcQ','MDF','getItemHitTypeText','DlinP','NoChangeMarker','ConvertParams','paramValueFontSize','commandNameWindowDrawText','Game_Actor_equips_artifacts','category','getItemSuccessRateText','bAfZF','process_VisuMZ_ItemsEquipsCore_RegExp','forceResetEquipSlots','CmdIconSell','vpZRG','drawItemStyleIconText','CmdIconOptimize','buttonAssistSmallIncrement','Window_EquipCommand_initialize','Game_Actor_changeEquip','replace','mainAreaHeight','SMjJY','mLJcm','drawing','remove','DGnbL','isRightInputMode','KeyItems','mWPom','lRQHw','isWeapon','119yEmeri','gaugeBackColor','_bypassNewLabel','canConsumeItem','BorderRegExp','concat','HIHCX','isHandled','drawItemEffects','xaOke','equips','switchProxyItem','Scene_Shop_onSellCancel','PFFHn','Scene_Shop_numberWindowRect','call','_skillIDs','currentClass','updateHelp','onSellOkItemsEquipsCore','MloNw','baseSellingPrice','MAT','description','dataId','paramJS','processCursorHomeEndTrigger','ShopMenuStatusStandard','onActorChange','Parse_Notetags_Category','parse','TP\x20RECOVERY','statusWidth','sgrmw','QDmtg','\x5cI[%1]','createSlotWindow','drawItemEquipType','USER\x20TP\x20GAIN','helpDescriptionText','iqnmT','Window_ItemList_item','popScene','Step1Start','HRJvd','4RhPcRf','drawEquipData','ScopeAlliesButUser','colSpacing','drawItemSuccessRate','updateCategoryNameWindow','maxItems','RUZSb','drawUpdatedParamName','isShiftRemoveShortcutEnabled','commandStyle','oqVro','getItemEffectsHpRecoveryLabel','helpWindowRect','isSellCommandEnabled','postCreateSlotWindowItemsEquipsCore','loadPicture','possession','Parse_Notetags_ParamValues','ConvertNumberToString','387khSNgf','isOptimizeCommandEnabled','setHelpWindowItem','pEFbz','FontFace','sellPriceRate','setText','GgTJB','optKeyItemsNumber','initEquips','ZSyKx','Scene_ItemBase_activateItemWindow','zHujX','_dummyWindow','prepare','ohvyf','paramId','itemEnableJS','kEqKK','playOkSound','allowCommandWindowCursorUp','placeNewLabel','_bypassProxy','Window_EquipItem_isEnabled','item','Scene_Shop_create','yLWGe','isEquipChangeOk','ioWBt','shouldCommandWindowExist','getItemEffectsMpRecoveryLabel','hideDisabledCommands','Actors','isClearEquipOk','note','rZbyj','buttonAssistSlotWindowShift','EFFECT_RECOVER_MP','DamageType%1','center','Parse_Notetags_ParamJS','newLabelEnabled','cursorUp','MJbVV','prepareNextScene','ivgBv','Width','innerHeight','HP\x20RECOVERY','auto','armor-%1','ShopScene','_equips','version','drawItemKeyData','meetsClassRequirements','foreground','smoothSelect','refresh','Window_ItemList_colSpacing','currencyUnit','drawUpdatedAfterParamValue','VJJQk','clearEquipments','getItemEffectsTpDamageLabel','buyWindowRect','gpvCo','aOJEJ','deactivate','getItemEffectsMpRecoveryText','YJSJz','scrollTo','MaxArmors','changeBuff','SbsnI','occasion','Scene_Shop_onBuyOk','_buttonAssistWindow','gZYzi','_shopStatusMenuAlly','drawItemRepeats','commandBuyItemsEquipsCore','buttonAssistLargeIncrement','EFFECT_RECOVER_HP','clear','Game_Item_setObject','removeDebuff','MaxItems','onTouchSelectModernControls','FsROc','paramPlusItemsEquipsCoreCustomJS','diSaf','setTopRow','isGoodShown','weaponTypes','Step2Start','isClicked','equipAdjustHpMp','XXmLD','UkFNA','Window_Selectable_setHelpWindowItem','buttonAssistText2','maxVisibleItems','isSoleWeaponType','buyWindowRectItemsEquipsCore','SQrlc','helpDesc','clamp','LabelConsume','YTTee','RQfxM','ParseWeaponNotetags','gaugeLineHeight','nnfqY','getWeaponIdWithName','SdGWk','luk','QiWut','Fkrxr','×%1','setStatusWindow','drawItemStyleIcon','Game_Actor_paramPlus','Consumable','prepareRefreshItemsEquipsCoreLayout','qofSo','xThAN','CoreEngine','alterSkillName','test','KvXZr','Game_Actor_forceChangeEquip','UpXcT','round','YLcKf','fnIiU','New','paramValueByName','Parse_Notetags_Prices','ATK','commandSellItemsEquipsCore','itemHasEquipLimit','equip','BMKYJ','IRIll','goERt','hitType','drQmg','addItemCategory','hitIndex','rateMP','LabelElement','isUseParamNamesWithIcons','helpAreaHeight','tlAlI','uYvAy','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Scene_Boot_onDatabaseLoaded','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','FontSize','ParamValueFontSize','contentsBack','translucentOpacity','isSkill','drawItemEffectsAddedStatesBuffs','nonOptimizeEtypes','_data','AllItems','Step2End','LabelRemove','clearNewLabelFromItem','Scene_Shop_onSellOk','XNtBF','categoryWindowRect','KqBWq','JBciu','ItemsEquipsCore','clearNewItem','playCursorSound','iWifK','optimize','isEquipCommandAdded','Scene_Equip_onSlotCancel','Window_Selectable_initialize','index','isClearCommandEnabled','type','WdRrh','getArmorIdWithName','quKVT','processHandling','jCTqw','Icon','EnableLayout','LyAkP','number','StatusWindowWidth','Game_BattlerBase_canEquip_artifact','DVKpn','onSlotOk','isEnabled','setHp','UOMZp','includes','buttonAssistOffset3','active','EFFECT_ADD_BUFF','createCategoryWindow','updateMoneyAmount','LabelRecoverHP','categories','getItemSpeedLabel','floor','PtiCJ','releaseUnequippableItems','getMatchingInitEquip','+%1','Window_Selectable_update','hpRate','addEquipCommand','text','equipSlots','phzWt','LabelDamageMP','EFFECT_REMOVE_DEBUFF','speed','isArmor','getItemHitTypeLabel','addChild','getInputMultiButtonStrings','JpGIX','value1','Scene_Shop_doSell','onCategoryCancel','mwWWi','calcWindowHeight','level','create','odcQU','YdXNt','maxmp','ScopeRandomAny','categoryStyleCheck','smallParamFontSize','setTempActor','\x5cb%1\x5cb','isClearCommandAdded','dZCsA','drawItemEffectsMpDamage','YGZDD','height','drawParamsItemsEquipsCore','_newLabelOpacityChange','SwitchBuy','categoryList','postCreateItemsEquipsCore','QRjNF','split','meetsItemConditions','qyVHH','powerDownColor','Equip\x20the\x20strongest\x20available\x20equipment.','AllArmors','getClassRequirements','getItemSuccessRateLabel','map','_cache','HiddenItemA','cursorPageup','update','RVzCI','addBuyCommand','armors','postCreateItemWindowModernControls','SellPriceRate','Jdgwb','kCtEQ','isCancelled','XtNFC','resetTextColor','buttonAssistKey1','drawCustomShopGraphicLoad','onSlotOkAutoSelect','Scene_Equip_createCommandWindow','drawNewLabelText','FmmXc','fill','getItemDamageAmountTextBattleCore','addCommand','drawItemActorMenuImage','_category','Window_ShopStatus_setItem','getItemDamageAmountTextOriginal','FieldUsable','left','isProxyItem','_sellWindow','nxODL','Scene_Shop_commandWindowRect','canEquip','removeBuff','cLtGX','GDpNr','mRNzd','1779995XuOhyz','FadeSpeed','JPrnf','LabelHitType','isSceneShop','RemoveEquipIcon','iVLdv','optimizeEquipments','Step3End','icon','mhp','ItemMenuStatusBgType','meetsItemConditionsJS','TWbFr','pagedown','ActorResetEquipSlots','commandBuy','LabelSuccessRate','DrawPortraitJS','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','setupBattleTestItems','loadCharacter','Scene_Item_categoryWindowRect','Scene_Shop_onCategoryCancel','EquipAdjustHpMp','buttonAssistCategory','isTriggered','flatHP','onBuyCancel','setHandler','qpLPV','background','weapon-%1','kmIJd','820260GZmgNL','createSellWindow','huveB','BackRectColor','modifiedBuyPriceItemsEquipsCore','aKWpB','WQzvF','isOpenAndActive','NBQZj','isTroopArtifact','DrawItemData','cNTOz','_getClassRequirements','_armorIDs','SUCCESS\x20RATE','updateCommandNameWindow','actorParams','Parse_Notetags_EnableJS','itemPadding','Scene_Shop_prepare','itypeId','onTouchOk','lineHeight','HP\x20DAMAGE','createItemWindow','createStatusWindow','bind','rateHP','_bypassReleaseUnequippableItemsItemsEquipsCore','DrawEquipData','CommandAddOptimize','troopArtifacts','versionId','RegularItems','getItemEffectsTpRecoveryText','drawActorParamDifference','damage','Game_Party_setupBattleTestItems_artifact','sGSpj','fontFace','getItemEffectsMpDamageLabel','_buyWindow','NGGDo','JrjcG','SPEED','BatchShop','itemWindowRectItemsEquipsCore','_customItemInfo','changeEquip','doSell','meetsEquipRequirements','getItemEffects','setMp','15322vkpwVT','makeDeepCopy','wHPeG','msbmO','ehjXG','AllWeapons','btuYq','paramchangeTextColor','Scene_Shop_commandBuy','changeTextColor','process_VisuMZ_ItemsEquipsCore_Notetags','CannotEquipMarker','def','RgOhs','ITEMS_EQUIPS_CORE','onDatabaseLoaded','_commandNameWindow','drawTextEx','log','registerCommand','commandStyleCheck','placeItemNewLabel','rDUqo','buy','Scene_Equip_create','prototype','WKWtO','yMXNC','atypeId','drawPossession','maxBattleMembers','drawCustomShopGraphic','Scene_Shop_goldWindowRect','bFvMv','removeBattleTestArtifacts','push','onCategoryOk','width','Scene_Load_reloadMapIfUpdated','xPQyg','addClearCommand','fMMra','Scene_Equip_statusWindowRect','maxItemAmount','Scene_Item_create','ZnYeF','Window_ShopBuy_item','%1%','Yvpmf','partyArtifacts','right','object','PiRuW','getItemDamageAmountText','AKmDc','PNDkr','forceChangeEquip','LabelDamageTP','constructor','getItemDamageElementText','CwsVM','getItemScopeText','getItemSpeedText','initialize','Remove\x20all\x20available\x20equipment.','oUTqX','Window_EquipStatus_refresh','armorTypes','drawItemDamageElement','AGI','Scene_Item_itemWindowRect','NotConsumable','YqNyZ','numItems','Parse_Notetags_EquipSlots','ARRAYFUNC','NonRemoveETypes','144490NADLzR','Window_Selectable_refresh','WTgPE','canShiftRemoveEquipment','isCursorMovable','addOptimizeCommand','members','callUpdateHelp','getSkillIdWithName','categoryStyle','WBbiL','STR','ZsCrF','iconIndex','mat','getItemConsumableText','_list','iconWidth','===','Parse_Notetags_Batch','isOptimizeCommandAdded','DEF','isPartyArtifact','Scene_Shop_buyingPrice','WayQy','_weaponIDs','Scene_Shop_helpWindowRect','return\x200','SwitchID','Param','_slotId','Scene_Shop_createSellWindow','keyItem','addLoadListener','hRXBr','getItemEffectsHpDamageLabel','Xjunv','bitmap','tradeItemWithParty','filter','isEquipCommandEnabled','ItemMenuStatusRect','pXvCz','ItemScene','length','YYJdW','Scene_Shop_commandSell','eVIdq','splice','commandNameWindowCenter','setShopStatusWindowMode','Window_ItemList_updateHelp','Occasion%1','getItemRepeatsText','vKElm','rZSmW','uiHelpPosition','isEquipItem','tDhsf','fvWnk','iTsFx','successRate','_tempActor','VkWUD','currentExt','isBattleTest','IrDEr','QoL','isRepeated','tahui','Window_ItemList_drawItem','ugOCg','hXhvS','JxJjp','uapCp','Game_BattlerBase_param','drawItemConsumable','previousActor','SetupProxyItemGroups','_tempActorB','ARRAYJSON','mmp','Scene_Shop_categoryWindowRect','NCEIF','NwdXW','drawItemEffectsSelfTpGain','contents','NvsIM','wEWgX','top','user','OffsetY','drawUpdatedBeforeParamValue','Window_ItemCategory_initialize','categoryWindowRectItemsEquipsCore','_purchaseOnly','trim','zeldM','#%1','getEmptyEquipSlotOfSameEtype','setValue','processCursorSpecialCheckModernControls','Categories','onTouchCancel','getItemEffectsHpDamageText','getItemDamageAmountLabel','MaxWeapons','isArtifact','processTouchModernControls','dXBAc','tFuMY','nonRemovableEtypes','blt','DrawIcons','item-%1'];_0x1649=function(){return _0x3b748a;};return _0x1649();}(function(_0x1f2d8d,_0x3a8ec4){const _0x1a5f1e=_0x5bd0,_0x32c4fc=_0x1f2d8d();while(!![]){try{const _0x5a8cdd=parseInt(_0x1a5f1e(0x2f4))/0x1*(-parseInt(_0x1a5f1e(0x4bc))/0x2)+parseInt(_0x1a5f1e(0x21c))/0x3*(-parseInt(_0x1a5f1e(0x321))/0x4)+parseInt(_0x1a5f1e(0x487))/0x5+-parseInt(_0x1a5f1e(0x598))/0x6*(-parseInt(_0x1a5f1e(0x465))/0x7)+parseInt(_0x1a5f1e(0x2c3))/0x8+-parseInt(_0x1a5f1e(0x335))/0x9*(parseInt(_0x1a5f1e(0x509))/0xa)+parseInt(_0x1a5f1e(0x68b))/0xb*(parseInt(_0x1a5f1e(0x618))/0xc);if(_0x5a8cdd===_0x3a8ec4)break;else _0x32c4fc['push'](_0x32c4fc['shift']());}catch(_0x199e19){_0x32c4fc['push'](_0x32c4fc['shift']());}}}(_0x1649,0x98ae9));function _0x5bd0(_0x5ee851,_0x925001){const _0x164929=_0x1649();return _0x5bd0=function(_0x5bd011,_0x90a01){_0x5bd011=_0x5bd011-0x1dd;let _0x5a0494=_0x164929[_0x5bd011];return _0x5a0494;},_0x5bd0(_0x5ee851,_0x925001);}var label='ItemsEquipsCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x510241(0x530)](function(_0x8b0a70){const _0x117035=_0x510241;return _0x8b0a70[_0x117035(0x271)]&&_0x8b0a70[_0x117035(0x30b)][_0x117035(0x400)]('['+label+']');})[0x0];VisuMZ[label][_0x510241(0x5b3)]=VisuMZ[label][_0x510241(0x5b3)]||{},VisuMZ['ConvertParams']=function(_0x49db49,_0x51e16e){const _0x3785aa=_0x510241;for(const _0x7d15a5 in _0x51e16e){if(_0x7d15a5['match'](/(.*):(.*)/i)){if('LFtcA'!==_0x3785aa(0x5c1))return _0x5d862d[_0x3785aa(0x3e5)][_0x3785aa(0x5b3)][_0x3785aa(0x64b)][_0x3785aa(0x468)];else{const _0x3978a0=String(RegExp['$1']),_0x1724ad=String(RegExp['$2'])[_0x3785aa(0x606)]()[_0x3785aa(0x569)]();let _0x28bdd0,_0x2d7c28,_0x3deac9;switch(_0x1724ad){case'NUM':_0x28bdd0=_0x51e16e[_0x7d15a5]!==''?Number(_0x51e16e[_0x7d15a5]):0x0;break;case _0x3785aa(0x688):_0x2d7c28=_0x51e16e[_0x7d15a5]!==''?JSON['parse'](_0x51e16e[_0x7d15a5]):[],_0x28bdd0=_0x2d7c28[_0x3785aa(0x43e)](_0x42a8fe=>Number(_0x42a8fe));break;case'EVAL':_0x28bdd0=_0x51e16e[_0x7d15a5]!==''?eval(_0x51e16e[_0x7d15a5]):null;break;case _0x3785aa(0x269):_0x2d7c28=_0x51e16e[_0x7d15a5]!==''?JSON[_0x3785aa(0x312)](_0x51e16e[_0x7d15a5]):[],_0x28bdd0=_0x2d7c28[_0x3785aa(0x43e)](_0x398b56=>eval(_0x398b56));break;case _0x3785aa(0x21a):_0x28bdd0=_0x51e16e[_0x7d15a5]!==''?JSON[_0x3785aa(0x312)](_0x51e16e[_0x7d15a5]):'';break;case _0x3785aa(0x559):_0x2d7c28=_0x51e16e[_0x7d15a5]!==''?JSON['parse'](_0x51e16e[_0x7d15a5]):[],_0x28bdd0=_0x2d7c28[_0x3785aa(0x43e)](_0xea8079=>JSON[_0x3785aa(0x312)](_0xea8079));break;case _0x3785aa(0x6a4):_0x28bdd0=_0x51e16e[_0x7d15a5]!==''?new Function(JSON['parse'](_0x51e16e[_0x7d15a5])):new Function(_0x3785aa(0x524));break;case _0x3785aa(0x507):_0x2d7c28=_0x51e16e[_0x7d15a5]!==''?JSON[_0x3785aa(0x312)](_0x51e16e[_0x7d15a5]):[],_0x28bdd0=_0x2d7c28[_0x3785aa(0x43e)](_0x282f17=>new Function(JSON[_0x3785aa(0x312)](_0x282f17)));break;case _0x3785aa(0x514):_0x28bdd0=_0x51e16e[_0x7d15a5]!==''?String(_0x51e16e[_0x7d15a5]):'';break;case'ARRAYSTR':_0x2d7c28=_0x51e16e[_0x7d15a5]!==''?JSON[_0x3785aa(0x312)](_0x51e16e[_0x7d15a5]):[],_0x28bdd0=_0x2d7c28[_0x3785aa(0x43e)](_0x4c4b42=>String(_0x4c4b42));break;case'STRUCT':_0x3deac9=_0x51e16e[_0x7d15a5]!==''?JSON['parse'](_0x51e16e[_0x7d15a5]):{},_0x49db49[_0x3978a0]={},VisuMZ[_0x3785aa(0x2d8)](_0x49db49[_0x3978a0],_0x3deac9);continue;case _0x3785aa(0x58a):_0x2d7c28=_0x51e16e[_0x7d15a5]!==''?JSON[_0x3785aa(0x312)](_0x51e16e[_0x7d15a5]):[],_0x28bdd0=_0x2d7c28['map'](_0x3227fa=>VisuMZ['ConvertParams']({},JSON[_0x3785aa(0x312)](_0x3227fa)));break;default:continue;}_0x49db49[_0x3978a0]=_0x28bdd0;}}}return _0x49db49;},(_0x256731=>{const _0x588225=_0x510241,_0x23d982=_0x256731[_0x588225(0x211)];for(const _0xd77bd of dependencies){if(!Imported[_0xd77bd]){alert(_0x588225(0x3d1)[_0x588225(0x648)](_0x23d982,_0xd77bd)),SceneManager['exit']();break;}}const _0x2d0ff1=_0x256731['description'];if(_0x2d0ff1[_0x588225(0x6b1)](/\[Version[ ](.*?)\]/i)){if(_0x588225(0x3b2)!==_0x588225(0x55d)){const _0x1b80a1=Number(RegExp['$1']);_0x1b80a1!==VisuMZ[label][_0x588225(0x36a)]&&(alert(_0x588225(0x3d3)['format'](_0x23d982,_0x1b80a1)),SceneManager[_0x588225(0x622)]());}else _0x4c70f9[_0x588225(0x2ed)](0x0),_0x2c5e16[_0x588225(0x2ed)](-0x1),this[_0x588225(0x634)]=_0x38bc06,this[_0x588225(0x36f)](),this[_0x588225(0x5fc)]();}if(_0x2d0ff1[_0x588225(0x6b1)](/\[Tier[ ](\d+)\]/i)){const _0x358956=Number(RegExp['$1']);_0x358956<tier?(alert(_0x588225(0x478)[_0x588225(0x648)](_0x23d982,_0x358956,tier)),SceneManager['exit']()):tier=Math[_0x588225(0x20e)](_0x358956,tier);}VisuMZ[_0x588225(0x2d8)](VisuMZ[label][_0x588225(0x5b3)],_0x256731[_0x588225(0x23f)]);})(pluginData),PluginManager[_0x510241(0x4cf)](pluginData[_0x510241(0x211)],_0x510241(0x625),_0x39a3ec=>{const _0x5a7a7d=_0x510241;VisuMZ[_0x5a7a7d(0x2d8)](_0x39a3ec,_0x39a3ec);const _0x259431=_0x39a3ec[_0x5a7a7d(0x355)]['map'](_0x438eab=>$gameActors[_0x5a7a7d(0x665)](_0x438eab)),_0x13bbe4=_0x39a3ec[_0x5a7a7d(0x285)][_0x5a7a7d(0x43e)](_0x240ad6=>$dataSystem[_0x5a7a7d(0x267)][_0x5a7a7d(0x693)](_0x240ad6[_0x5a7a7d(0x569)]()));for(const _0x45b10d of _0x259431){if(!_0x45b10d)continue;_0x45b10d['forceChangeEquipSlots'](_0x13bbe4);}}),PluginManager[_0x510241(0x4cf)](pluginData[_0x510241(0x211)],_0x510241(0x474),_0x57ff4d=>{const _0x1eea75=_0x510241;VisuMZ['ConvertParams'](_0x57ff4d,_0x57ff4d);const _0x37e939=_0x57ff4d[_0x1eea75(0x355)]['map'](_0x23d08e=>$gameActors[_0x1eea75(0x665)](_0x23d08e));for(const _0x572b28 of _0x37e939){if(!_0x572b28)continue;_0x572b28[_0x1eea75(0x2e0)]();}}),PluginManager['registerCommand'](pluginData['name'],_0x510241(0x4b4),_0x6ca273=>{const _0x3ef364=_0x510241;VisuMZ[_0x3ef364(0x2d8)](_0x6ca273,_0x6ca273);const _0x572824=[],_0x43d07d=_0x6ca273[_0x3ef364(0x1f6)]['map'](_0x5b3ed4=>_0x5b3ed4[_0x3ef364(0x606)]()[_0x3ef364(0x569)]()),_0x496f7a=_0x6ca273[_0x3ef364(0x5dc)][_0x3ef364(0x43e)](_0x557246=>_0x557246[_0x3ef364(0x606)]()[_0x3ef364(0x569)]()),_0x288e8c=_0x6ca273['Step1End']>=_0x6ca273[_0x3ef364(0x31f)]?_0x6ca273[_0x3ef364(0x31f)]:_0x6ca273[_0x3ef364(0x221)],_0x1e7d50=_0x6ca273[_0x3ef364(0x221)]>=_0x6ca273[_0x3ef364(0x31f)]?_0x6ca273['Step1End']:_0x6ca273[_0x3ef364(0x31f)],_0x4755d9=Array(_0x1e7d50-_0x288e8c+0x1)[_0x3ef364(0x453)]()[_0x3ef364(0x43e)]((_0x584901,_0xee10be)=>_0x288e8c+_0xee10be);for(const _0x2423b4 of _0x4755d9){if(_0x3ef364(0x217)!==_0x3ef364(0x53f)){const _0x3b7c49=$dataItems[_0x2423b4];if(!_0x3b7c49)continue;if(!VisuMZ['ItemsEquipsCore'][_0x3ef364(0x604)](_0x3b7c49,_0x43d07d,_0x496f7a))continue;_0x572824[_0x3ef364(0x4df)]([0x0,_0x2423b4,0x0,_0x3b7c49[_0x3ef364(0x6d1)]]);}else return 0x63;}const _0x11a80f=_0x6ca273['Step2End']>=_0x6ca273[_0x3ef364(0x394)]?_0x6ca273[_0x3ef364(0x394)]:_0x6ca273[_0x3ef364(0x3dd)],_0x184754=_0x6ca273[_0x3ef364(0x3dd)]>=_0x6ca273[_0x3ef364(0x394)]?_0x6ca273[_0x3ef364(0x3dd)]:_0x6ca273[_0x3ef364(0x394)],_0x11f54d=Array(_0x184754-_0x11a80f+0x1)['fill']()[_0x3ef364(0x43e)]((_0x3d7a2a,_0x11278)=>_0x11a80f+_0x11278);for(const _0x699fb0 of _0x11f54d){if('ZnYeF'!==_0x3ef364(0x4e9))return this[_0x3ef364(0x5b1)]()?this[_0x3ef364(0x673)]():_0x247399[_0x3ef364(0x3e5)][_0x3ef364(0x5b3)][_0x3ef364(0x534)][_0x3ef364(0x532)][_0x3ef364(0x303)](this);else{const _0x48a615=$dataWeapons[_0x699fb0];if(!_0x48a615)continue;if(!VisuMZ[_0x3ef364(0x3e5)]['IncludeShopItem'](_0x48a615,_0x43d07d,_0x496f7a))continue;_0x572824[_0x3ef364(0x4df)]([0x1,_0x699fb0,0x0,_0x48a615[_0x3ef364(0x6d1)]]);}}const _0x704c5e=_0x6ca273['Step3End']>=_0x6ca273['Step3Start']?_0x6ca273[_0x3ef364(0x28f)]:_0x6ca273[_0x3ef364(0x46d)],_0x43e29f=_0x6ca273[_0x3ef364(0x46d)]>=_0x6ca273[_0x3ef364(0x28f)]?_0x6ca273[_0x3ef364(0x46d)]:_0x6ca273[_0x3ef364(0x28f)],_0x75720b=Array(_0x43e29f-_0x704c5e+0x1)['fill']()['map']((_0x1ce9bf,_0x1222b9)=>_0x704c5e+_0x1222b9);for(const _0x5911d5 of _0x75720b){const _0x93c012=$dataArmors[_0x5911d5];if(!_0x93c012)continue;if(!VisuMZ[_0x3ef364(0x3e5)][_0x3ef364(0x604)](_0x93c012,_0x43d07d,_0x496f7a))continue;_0x572824[_0x3ef364(0x4df)]([0x2,_0x5911d5,0x0,_0x93c012[_0x3ef364(0x6d1)]]);}SceneManager[_0x3ef364(0x4df)](Scene_Shop),SceneManager[_0x3ef364(0x361)](_0x572824,_0x6ca273[_0x3ef364(0x2bd)]);}),VisuMZ[_0x510241(0x3e5)]['IncludeShopItem']=function(_0x23809f,_0xd51e6,_0x39270d){const _0x850ecf=_0x510241;if(_0x23809f['name'][_0x850ecf(0x569)]()==='')return![];if(_0x23809f[_0x850ecf(0x211)][_0x850ecf(0x6b1)](/-----/i))return![];const _0x135df7=_0x23809f[_0x850ecf(0x407)];if(_0xd51e6[_0x850ecf(0x535)]>0x0)for(const _0x481f68 of _0xd51e6){if(_0x850ecf(0x5b6)!==_0x850ecf(0x5b6)){const _0x46e515=this['_newLabelSprites'];if(_0x46e515[_0x33f41b])return _0x46e515[_0x32bd13];else{const _0x7b7184=new _0x5aa8d6();return _0x46e515[_0x32f776]=_0x7b7184,this[_0x850ecf(0x6bf)](_0x7b7184),_0x7b7184;}}else{if(!_0x481f68)continue;if(_0x135df7[_0x850ecf(0x400)](_0x481f68))return![];}}if(_0x39270d['length']>0x0){for(const _0x3f24cd of _0x39270d){if(_0x850ecf(0x50b)==='WTgPE'){if(!_0x3f24cd)continue;if(_0x135df7['includes'](_0x3f24cd))return!![];}else _0x50e01[_0x850ecf(0x34b)]=!![],_0x1404ce[_0x850ecf(0x3e5)]['Scene_Shop_onBuyOk'][_0x850ecf(0x303)](this),_0x3d458f[_0x850ecf(0x34b)]=![],this[_0x850ecf(0x207)]=this[_0x850ecf(0x4b0)][_0x850ecf(0x34d)]();}return![];}return!![];},VisuMZ[_0x510241(0x3e5)][_0x510241(0x3d2)]=Scene_Boot[_0x510241(0x4d5)][_0x510241(0x4cb)],Scene_Boot[_0x510241(0x4d5)][_0x510241(0x4cb)]=function(){const _0x308519=_0x510241;this[_0x308519(0x2df)](),VisuMZ['ItemsEquipsCore'][_0x308519(0x3d2)][_0x308519(0x303)](this),this[_0x308519(0x4c6)](),VisuMZ[_0x308519(0x3e5)][_0x308519(0x557)]();},Scene_Boot[_0x510241(0x4d5)][_0x510241(0x2df)]=function(){const _0x3c6e56=_0x510241;VisuMZ['ItemsEquipsCore'][_0x3c6e56(0x67d)]={},VisuMZ[_0x3c6e56(0x3e5)]['RegExp'][_0x3c6e56(0x2ac)]=[],VisuMZ['ItemsEquipsCore']['RegExp']['BorderRegExp']=[];const _0x3a5215=['MaxHP',_0x3c6e56(0x299),_0x3c6e56(0x3c0),_0x3c6e56(0x51e),_0x3c6e56(0x30a),_0x3c6e56(0x2d4),_0x3c6e56(0x501),_0x3c6e56(0x582)];for(const _0xc722ed of _0x3a5215){if(_0x3c6e56(0x2c0)!==_0x3c6e56(0x2c0)){if(_0x1b962b[_0x1f5a6e]===_0xa441aa){_0xeaabad=_0x1a56ff;if(!_0x48dadc[_0x1138e5])return _0x57779d;}}else{const _0x555cd3=_0x3c6e56(0x20f)['format'](_0xc722ed);VisuMZ[_0x3c6e56(0x3e5)]['RegExp'][_0x3c6e56(0x2ac)][_0x3c6e56(0x4df)](new RegExp(_0x555cd3,'i'));const _0x46c16a=_0x3c6e56(0x42a)[_0x3c6e56(0x648)](_0xc722ed);VisuMZ[_0x3c6e56(0x3e5)]['RegExp'][_0x3c6e56(0x2f8)][_0x3c6e56(0x4df)](new RegExp(_0x46c16a,'g'));}}},Scene_Boot[_0x510241(0x4d5)][_0x510241(0x4c6)]=function(){const _0x34cc11=_0x510241;if(VisuMZ['ParseAllNotetags'])return;this['process_VisuMZ_ItemsEquipsCore_EquipSlots']();const _0x3070af=[$dataItems,$dataWeapons,$dataArmors];for(const _0x1f8150 of _0x3070af){for(const _0x29ae80 of _0x1f8150){if(!_0x29ae80)continue;VisuMZ['ItemsEquipsCore'][_0x34cc11(0x311)](_0x29ae80,_0x1f8150),VisuMZ[_0x34cc11(0x3e5)][_0x34cc11(0x3bf)](_0x29ae80,_0x1f8150),VisuMZ[_0x34cc11(0x3e5)][_0x34cc11(0x333)](_0x29ae80,_0x1f8150),VisuMZ[_0x34cc11(0x3e5)][_0x34cc11(0x35d)](_0x29ae80,_0x1f8150),VisuMZ[_0x34cc11(0x3e5)][_0x34cc11(0x498)](_0x29ae80,_0x1f8150);}}},Scene_Boot[_0x510241(0x4d5)]['process_VisuMZ_ItemsEquipsCore_EquipSlots']=function(){const _0x153c12=_0x510241;for(const _0x1b3762 of $dataClasses){if(!_0x1b3762)continue;VisuMZ[_0x153c12(0x3e5)][_0x153c12(0x506)](_0x1b3762);}},VisuMZ[_0x510241(0x3e5)]['ParseClassNotetags']=VisuMZ[_0x510241(0x2c4)],VisuMZ['ParseClassNotetags']=function(_0x4bf272){const _0x74809f=_0x510241;VisuMZ['ItemsEquipsCore'][_0x74809f(0x2c4)][_0x74809f(0x303)](this,_0x4bf272),VisuMZ[_0x74809f(0x3e5)][_0x74809f(0x506)](_0x4bf272);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x202)]=VisuMZ['ParseItemNotetags'],VisuMZ[_0x510241(0x202)]=function(_0x1bfa60){const _0x265da9=_0x510241;VisuMZ[_0x265da9(0x3e5)][_0x265da9(0x202)]['call'](this,_0x1bfa60),VisuMZ[_0x265da9(0x3e5)][_0x265da9(0x51c)](_0x1bfa60,$dataItems);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x3a4)]=VisuMZ[_0x510241(0x3a4)],VisuMZ[_0x510241(0x3a4)]=function(_0x27910c){const _0x23500c=_0x510241;VisuMZ[_0x23500c(0x3e5)][_0x23500c(0x3a4)]['call'](this,_0x27910c),VisuMZ[_0x23500c(0x3e5)][_0x23500c(0x51c)](_0x27910c,$dataWeapons);},VisuMZ['ItemsEquipsCore'][_0x510241(0x698)]=VisuMZ[_0x510241(0x698)],VisuMZ[_0x510241(0x698)]=function(_0x11f5b5){const _0x2924ba=_0x510241;VisuMZ['ItemsEquipsCore']['ParseArmorNotetags'][_0x2924ba(0x303)](this,_0x11f5b5),VisuMZ[_0x2924ba(0x3e5)]['Parse_Notetags_Batch'](_0x11f5b5,$dataArmors);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x506)]=function(_0x1e2c81){const _0x4cc13d=_0x510241;_0x1e2c81[_0x4cc13d(0x412)]=[];const _0x41c6a5=$dataSystem[_0x4cc13d(0x267)][_0x4cc13d(0x43e)](_0x2adf2e=>_0x2adf2e?_0x2adf2e[_0x4cc13d(0x569)]():'');if(!BattleManager[_0x4cc13d(0x54a)]()&&_0x1e2c81[_0x4cc13d(0x357)]['match'](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){const _0x37c91b=String(RegExp['$1'])[_0x4cc13d(0x436)](/[\r\n]+/);for(const _0x1053b2 of _0x37c91b){if(_0x4cc13d(0x3b9)!==_0x4cc13d(0x3b9))_0x4be9c7[_0x4cc13d(0x3e5)][_0x4cc13d(0x53c)][_0x4cc13d(0x303)](this),this[_0x4cc13d(0x264)]&&this[_0x4cc13d(0x264)]['constructor']===_0x494878&&this[_0x4cc13d(0x264)][_0x4cc13d(0x6a1)](this[_0x4cc13d(0x34d)]());else{const _0x3d6b4e=_0x41c6a5[_0x4cc13d(0x693)](_0x1053b2[_0x4cc13d(0x569)]());if(_0x3d6b4e>0x0)_0x1e2c81['equipSlots'][_0x4cc13d(0x4df)](_0x3d6b4e);}}}else{if('zBoxG'!==_0x4cc13d(0x633))for(const _0x4ae744 of _0x41c6a5){if(_0x4cc13d(0x358)==='RTWJY')return _0x30508f['ItemsEquipsCore'][_0x4cc13d(0x5b3)][_0x4cc13d(0x64b)]['ElementNone'];else{const _0x469aba=_0x41c6a5[_0x4cc13d(0x693)](_0x4ae744[_0x4cc13d(0x569)]());if(_0x469aba>0x0)_0x1e2c81[_0x4cc13d(0x412)][_0x4cc13d(0x4df)](_0x469aba);}}else{const _0x4ec37f=this[_0x4cc13d(0x314)](),_0x3fe6eb=this[_0x4cc13d(0x2e9)]()-this[_0x4cc13d(0x29f)][_0x4cc13d(0x42f)],_0xea63cc=this['isRightInputMode']()?0x0:_0x562808[_0x4cc13d(0x6ac)]-_0x4ec37f,_0x4ece67=this[_0x4cc13d(0x29f)]['y']+this[_0x4cc13d(0x29f)]['height'];return new _0x4e80ff(_0xea63cc,_0x4ece67,_0x4ec37f,_0x3fe6eb);}}},VisuMZ[_0x510241(0x3e5)]['Parse_Notetags_Batch']=function(_0x158244,_0x527278){const _0x599f3f=_0x510241;VisuMZ[_0x599f3f(0x3e5)][_0x599f3f(0x311)](_0x158244,_0x527278),VisuMZ[_0x599f3f(0x3e5)][_0x599f3f(0x3bf)](_0x158244,_0x527278),VisuMZ['ItemsEquipsCore'][_0x599f3f(0x333)](_0x158244,_0x527278),VisuMZ['ItemsEquipsCore']['Parse_Notetags_ParamJS'](_0x158244,_0x527278),VisuMZ[_0x599f3f(0x3e5)][_0x599f3f(0x498)](_0x158244,_0x527278);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x311)]=function(_0x50c590,_0xd182e5){const _0x2d003b=_0x510241;_0x50c590[_0x2d003b(0x407)]=[];const _0x5c52aa=_0x50c590[_0x2d003b(0x357)],_0x4fa763=_0x5c52aa[_0x2d003b(0x6b1)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x4fa763)for(const _0x753422 of _0x4fa763){_0x753422[_0x2d003b(0x6b1)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x228b05=String(RegExp['$1'])[_0x2d003b(0x606)]()[_0x2d003b(0x569)]()['split'](',');for(const _0x46c3d2 of _0x228b05){_0x50c590[_0x2d003b(0x407)][_0x2d003b(0x4df)](_0x46c3d2[_0x2d003b(0x569)]());}}if(_0x5c52aa[_0x2d003b(0x6b1)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){if(_0x2d003b(0x544)!==_0x2d003b(0x5e2)){const _0x1c3896=RegExp['$1'][_0x2d003b(0x436)](/[\r\n]+/);for(const _0x295aa3 of _0x1c3896){_0x50c590['categories'][_0x2d003b(0x4df)](_0x295aa3[_0x2d003b(0x606)]()[_0x2d003b(0x569)]());}}else{_0x20c57f+=_0x2d003b(0x317)[_0x2d003b(0x648)](_0x205575),_0x5b6e22++;if(_0x8e7bf>=_0x63d430)return _0x2c2b8a;}}},VisuMZ[_0x510241(0x3e5)][_0x510241(0x3bf)]=function(_0x4acd2a,_0x1371d0){const _0x33d2c8=_0x510241;_0x4acd2a[_0x33d2c8(0x357)]['match'](/<PRICE:[ ](\d+)>/i)&&(_0x4acd2a[_0x33d2c8(0x6d1)]=Number(RegExp['$1']));},VisuMZ[_0x510241(0x3e5)][_0x510241(0x333)]=function(_0x182027,_0x14d734){const _0x11c598=_0x510241;if(_0x14d734===$dataItems)return;for(let _0x3f655f=0x0;_0x3f655f<0x8;_0x3f655f++){const _0xfa84d0=VisuMZ[_0x11c598(0x3e5)]['RegExp'][_0x11c598(0x2ac)][_0x3f655f];_0x182027[_0x11c598(0x357)][_0x11c598(0x6b1)](_0xfa84d0)&&(_0x182027['params'][_0x3f655f]=parseInt(RegExp['$1']));}},VisuMZ[_0x510241(0x3e5)][_0x510241(0x30d)]={},VisuMZ[_0x510241(0x3e5)][_0x510241(0x35d)]=function(_0x2a8c62,_0x2a72af){const _0x20024d=_0x510241;if(_0x2a72af===$dataItems)return;if(_0x2a8c62[_0x20024d(0x357)][_0x20024d(0x6b1)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x3e45a4=String(RegExp['$1']),_0x4fc904=(_0x2a72af===$dataWeapons?_0x20024d(0x2cb):_0x20024d(0x654))['format'](_0x2a8c62['id']),_0x4f0917='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'[_0x20024d(0x648)](_0x3e45a4);for(let _0x2e1ca8=0x0;_0x2e1ca8<0x8;_0x2e1ca8++){if(_0x3e45a4['match'](VisuMZ[_0x20024d(0x3e5)][_0x20024d(0x67d)]['BorderRegExp'][_0x2e1ca8])){if(_0x20024d(0x3a8)!==_0x20024d(0x626)){const _0x3de1c3='%1-%2'['format'](_0x4fc904,_0x2e1ca8);VisuMZ[_0x20024d(0x3e5)][_0x20024d(0x30d)][_0x3de1c3]=new Function(_0x20024d(0x34d),_0x20024d(0x345),_0x4f0917);}else this[_0x20024d(0x441)]();}}}},VisuMZ[_0x510241(0x3e5)][_0x510241(0x346)]={},VisuMZ[_0x510241(0x3e5)][_0x510241(0x498)]=function(_0x2ed37b,_0xbc143e){const _0x519804=_0x510241;if(_0xbc143e!==$dataItems)return;if(_0x2ed37b[_0x519804(0x357)][_0x519804(0x6b1)](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){if(_0x519804(0x247)!==_0x519804(0x377)){const _0x33f0af=String(RegExp['$1']),_0xbd226c=_0x519804(0x1e1)['format'](_0x33f0af);VisuMZ['ItemsEquipsCore'][_0x519804(0x346)][_0x2ed37b['id']]=new Function('item',_0xbd226c);}else{if(this['index']()!==0x0)return![];const _0x4c0d9f=_0x349211[_0x519804(0x3e5)]['Settings'][_0x519804(0x619)];if(!_0x4c0d9f[_0x519804(0x4a5)]&&!_0x4c0d9f[_0x519804(0x67b)])return![];return _0x2aec77[_0x519804(0x47f)]('up');}}},DataManager[_0x510241(0x651)]=function(_0x3da947){const _0x4dac64=_0x510241;return this['isItem'](_0x3da947)&&_0x3da947[_0x4dac64(0x49b)]===0x2;},DataManager[_0x510241(0x4e7)]=function(_0x4b3a88){const _0x510eba=_0x510241;if(!_0x4b3a88)return 0x63;else return _0x4b3a88[_0x510eba(0x357)]['match'](/<MAX:[ ](\d+)>/i)?parseInt(RegExp['$1']):this[_0x510eba(0x5b9)](_0x4b3a88);},DataManager[_0x510241(0x5b9)]=function(_0x459125){const _0x4de4ae=_0x510241;if(this[_0x4de4ae(0x22f)](_0x459125))return VisuMZ[_0x4de4ae(0x3e5)]['Settings'][_0x4de4ae(0x534)][_0x4de4ae(0x38c)];else{if(this['isWeapon'](_0x459125))return VisuMZ[_0x4de4ae(0x3e5)][_0x4de4ae(0x5b3)][_0x4de4ae(0x534)][_0x4de4ae(0x573)];else{if(this[_0x4de4ae(0x417)](_0x459125))return _0x4de4ae(0x21f)!=='Oglag'?VisuMZ[_0x4de4ae(0x3e5)][_0x4de4ae(0x5b3)][_0x4de4ae(0x534)][_0x4de4ae(0x37d)]:(_0x9cfb74[_0x4de4ae(0x539)](_0x5e7a27[_0x4de4ae(0x693)](_0x106257),0x1),_0xa4c14f);}}},DataManager[_0x510241(0x6b5)]=function(_0x5270d3){const _0x450555=_0x510241;_0x5270d3=_0x5270d3[_0x450555(0x606)]()['trim'](),this[_0x450555(0x67f)]=this['_classIDs']||{};if(this[_0x450555(0x67f)][_0x5270d3])return this['_classIDs'][_0x5270d3];for(const _0x2041f1 of $dataClasses){if(!_0x2041f1)continue;let _0x41bdd9=_0x2041f1[_0x450555(0x211)];_0x41bdd9=_0x41bdd9[_0x450555(0x2e8)](/\x1I\[(\d+)\]/gi,''),_0x41bdd9=_0x41bdd9[_0x450555(0x2e8)](/\\I\[(\d+)\]/gi,''),this['_classIDs'][_0x41bdd9[_0x450555(0x606)]()['trim']()]=_0x2041f1['id'];}return this[_0x450555(0x67f)][_0x5270d3]||0x0;},DataManager[_0x510241(0x511)]=function(_0x4bf42d){const _0x18036e=_0x510241;_0x4bf42d=_0x4bf42d[_0x18036e(0x606)]()[_0x18036e(0x569)](),this[_0x18036e(0x304)]=this[_0x18036e(0x304)]||{};if(this[_0x18036e(0x304)][_0x4bf42d])return this[_0x18036e(0x304)][_0x4bf42d];for(const _0x571a48 of $dataSkills){if(!_0x571a48)continue;this[_0x18036e(0x304)][_0x571a48[_0x18036e(0x211)][_0x18036e(0x606)]()[_0x18036e(0x569)]()]=_0x571a48['id'];}return this['_skillIDs'][_0x4bf42d]||0x0;},DataManager[_0x510241(0x5ee)]=function(_0x4bfe3a){const _0x15a13e=_0x510241;_0x4bfe3a=_0x4bfe3a[_0x15a13e(0x606)]()[_0x15a13e(0x569)](),this[_0x15a13e(0x599)]=this[_0x15a13e(0x599)]||{};if(this[_0x15a13e(0x599)][_0x4bfe3a])return this[_0x15a13e(0x599)][_0x4bfe3a];for(const _0x55d6a2 of $dataItems){if(!_0x55d6a2)continue;this[_0x15a13e(0x599)][_0x55d6a2['name']['toUpperCase']()['trim']()]=_0x55d6a2['id'];}return this[_0x15a13e(0x599)][_0x4bfe3a]||0x0;},DataManager['getWeaponIdWithName']=function(_0x2b2792){const _0xa5f11b=_0x510241;_0x2b2792=_0x2b2792['toUpperCase']()['trim'](),this[_0xa5f11b(0x522)]=this['_weaponIDs']||{};if(this[_0xa5f11b(0x522)][_0x2b2792])return this[_0xa5f11b(0x522)][_0x2b2792];for(const _0x2b9412 of $dataWeapons){if(!_0x2b9412)continue;this['_weaponIDs'][_0x2b9412[_0xa5f11b(0x211)]['toUpperCase']()[_0xa5f11b(0x569)]()]=_0x2b9412['id'];}return this[_0xa5f11b(0x522)][_0x2b2792]||0x0;},DataManager[_0x510241(0x3f1)]=function(_0x19da72){const _0x5c795c=_0x510241;_0x19da72=_0x19da72[_0x5c795c(0x606)]()[_0x5c795c(0x569)](),this['_armorIDs']=this[_0x5c795c(0x494)]||{};if(this[_0x5c795c(0x494)][_0x19da72])return this[_0x5c795c(0x494)][_0x19da72];for(const _0x2ee790 of $dataArmors){if('MJbVV'!==_0x5c795c(0x360))this[_0x5c795c(0x58c)](_0xc118f9+_0x1bd497,_0xee201c,_0x398cdf,_0x454646,![]);else{if(!_0x2ee790)continue;this[_0x5c795c(0x494)][_0x2ee790[_0x5c795c(0x211)][_0x5c795c(0x606)]()[_0x5c795c(0x569)]()]=_0x2ee790['id'];}}return this['_armorIDs'][_0x19da72]||0x0;},VisuMZ[_0x510241(0x3e5)]['SetupProxyItemGroups']=function(){const _0xdcd7cd=_0x510241;VisuMZ[_0xdcd7cd(0x3e5)][_0xdcd7cd(0x655)]($dataItems),VisuMZ[_0xdcd7cd(0x3e5)]['SetupProxyItemGroup']($dataWeapons),VisuMZ[_0xdcd7cd(0x3e5)][_0xdcd7cd(0x655)]($dataArmors);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x655)]=function(_0x3b859d){const _0x162b8c=_0x510241;for(const _0x369310 of _0x3b859d){if(_0x162b8c(0x66e)==='ErQmj'){const _0xdadf70=this[_0x162b8c(0x65a)](_0x3ca7f4);_0xdadf70?_0x20eb05['prototype'][_0x162b8c(0x2a9)][_0x162b8c(0x303)](this,_0x5cfc42):this[_0x162b8c(0x234)](_0x43a4bf);}else{if(!_0x369310)continue;if(!DataManager['isProxyItem'](_0x369310))continue;const _0x227573=DataManager[_0x162b8c(0x26e)](_0x369310),_0x3e7092=['name',_0x162b8c(0x516),_0x162b8c(0x30b)];for(const _0x2058fe of _0x3e7092){if(_0x162b8c(0x413)!==_0x162b8c(0x413)){if(this['isUseModernControls']())return;_0x197b66[_0x162b8c(0x4d5)][_0x162b8c(0x3f3)][_0x162b8c(0x303)](this);}else _0x369310[_0x2058fe]=_0x227573[_0x2058fe];}}}},DataManager[_0x510241(0x45c)]=function(_0x3b5c3e){const _0x17fc53=_0x510241;if(!_0x3b5c3e)return![];if(!_0x3b5c3e[_0x17fc53(0x357)])return![];return _0x3b5c3e&&_0x3b5c3e[_0x17fc53(0x357)][_0x17fc53(0x6b1)](/<PROXY:[ ](.*)>/i);},DataManager[_0x510241(0x26e)]=function(_0x5106aa){const _0x6c98b6=_0x510241;return this[_0x6c98b6(0x45c)](_0x5106aa)?this[_0x6c98b6(0x2ff)](_0x5106aa)||_0x5106aa:_0x5106aa;},DataManager[_0x510241(0x2ff)]=function(_0x51f23d){const _0x707516=_0x510241;_0x51f23d[_0x707516(0x357)][_0x707516(0x6b1)](/<PROXY:[ ](.*)>/i);const _0x44afb8=RegExp['$1']['trim'](),_0x453b5b=/^\d+$/[_0x707516(0x3b6)](_0x44afb8);if(this['isItem'](_0x51f23d)){const _0x97628b=_0x453b5b?Number(RegExp['$1']):DataManager['getItemIdWithName'](_0x44afb8);return $dataItems[_0x97628b]||_0x51f23d;}else{if(this['isWeapon'](_0x51f23d)){if(_0x707516(0x4c9)===_0x707516(0x4c9)){const _0xb20f04=_0x453b5b?Number(RegExp['$1']):DataManager[_0x707516(0x3a7)](_0x44afb8);return $dataWeapons[_0xb20f04]||_0x51f23d;}else return _0x2defd2['ItemsEquipsCore']['Scene_Shop_buyWindowRect']['call'](this);}else{if(this['isArmor'](_0x51f23d)){if(_0x707516(0x3fb)==='BSlBK')this[_0x707516(0x3ae)](_0x5e360d);else{const _0x2d8236=_0x453b5b?Number(RegExp['$1']):DataManager[_0x707516(0x3f1)](_0x44afb8);return $dataArmors[_0x2d8236]||_0x51f23d;}}}}return _0x51f23d;},VisuMZ['ItemsEquipsCore'][_0x510241(0x31d)]=Window_ItemList['prototype'][_0x510241(0x34d)],Window_ItemList[_0x510241(0x4d5)][_0x510241(0x34d)]=function(){const _0x179cb5=_0x510241;if($gameTemp[_0x179cb5(0x34b)])return VisuMZ['ItemsEquipsCore'][_0x179cb5(0x31d)][_0x179cb5(0x303)](this);return DataManager[_0x179cb5(0x26e)](VisuMZ[_0x179cb5(0x3e5)][_0x179cb5(0x31d)]['call'](this));},Window_ItemList[_0x510241(0x4d5)][_0x510241(0x215)]=function(){const _0x1231fa=_0x510241;return VisuMZ[_0x1231fa(0x3e5)][_0x1231fa(0x31d)][_0x1231fa(0x303)](this);},VisuMZ[_0x510241(0x3e5)]['Window_ShopBuy_item']=Window_ShopBuy[_0x510241(0x4d5)][_0x510241(0x34d)],Window_ShopBuy[_0x510241(0x4d5)][_0x510241(0x34d)]=function(){const _0x88036a=_0x510241;if($gameTemp[_0x88036a(0x34b)])return VisuMZ['ItemsEquipsCore'][_0x88036a(0x4ea)][_0x88036a(0x303)](this);return DataManager[_0x88036a(0x26e)](VisuMZ[_0x88036a(0x3e5)][_0x88036a(0x4ea)][_0x88036a(0x303)](this));},Window_ShopBuy[_0x510241(0x4d5)][_0x510241(0x215)]=function(){const _0x377a1c=_0x510241;return VisuMZ[_0x377a1c(0x3e5)][_0x377a1c(0x4ea)]['call'](this);},VisuMZ['ItemsEquipsCore'][_0x510241(0x458)]=Window_ShopStatus['prototype'][_0x510241(0x6a1)],Window_ShopStatus['prototype'][_0x510241(0x6a1)]=function(_0x479ba8){const _0x145c07=_0x510241;_0x479ba8=DataManager['getProxyItem'](_0x479ba8),VisuMZ[_0x145c07(0x3e5)]['Window_ShopStatus_setItem'][_0x145c07(0x303)](this,_0x479ba8);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x38a)]=Game_Item['prototype'][_0x510241(0x1f1)],Game_Item['prototype'][_0x510241(0x1f1)]=function(_0x1c6190){const _0x179dcd=_0x510241;if(DataManager['isProxyItem'](_0x1c6190))return;VisuMZ[_0x179dcd(0x3e5)][_0x179dcd(0x38a)][_0x179dcd(0x303)](this,_0x1c6190);},DataManager['isArtifact']=function(_0x2fdb54){const _0x4d1991=_0x510241;if(!this[_0x4d1991(0x417)](_0x2fdb54))return![];const _0x2df751=_0x2fdb54[_0x4d1991(0x357)];if(!_0x2df751)return![];if(_0x2df751[_0x4d1991(0x6b1)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x2df751[_0x4d1991(0x6b1)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x2df751[_0x4d1991(0x6b1)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x2df751[_0x4d1991(0x6b1)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager['isStackableArtifact']=function(_0x1032b0){const _0x5151e3=_0x510241;if(!this['isArtifact'](_0x1032b0))return![];const _0x5006f2=_0x1032b0[_0x5151e3(0x357)];if(!_0x5006f2)return![];if(_0x5006f2[_0x5151e3(0x6b1)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x5006f2[_0x5151e3(0x6b1)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x510241(0x51f)]=function(_0x3d51a7){const _0x1461a8=_0x510241;if(!this['isArtifact'](_0x3d51a7))return![];const _0x1e4d74=_0x3d51a7[_0x1461a8(0x357)];if(!_0x1e4d74)return![];if(_0x1e4d74[_0x1461a8(0x6b1)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x1e4d74[_0x1461a8(0x6b1)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x510241(0x490)]=function(_0x46086d){const _0x4d6da5=_0x510241;if(!this[_0x4d6da5(0x574)](_0x46086d))return![];const _0x346cc8=_0x46086d['note'];if(!_0x346cc8)return![];if(_0x346cc8[_0x4d6da5(0x6b1)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x346cc8[_0x4d6da5(0x6b1)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},VisuMZ[_0x510241(0x3e5)]['Game_BattlerBase_canEquip_artifact']=Game_BattlerBase[_0x510241(0x4d5)][_0x510241(0x460)],Game_BattlerBase[_0x510241(0x4d5)][_0x510241(0x460)]=function(_0x8b9918){const _0x27b846=_0x510241;if(DataManager[_0x27b846(0x574)](_0x8b9918))return![];if(!DataManager[_0x27b846(0x36c)](this,_0x8b9918))return![];if(!DataManager[_0x27b846(0x4b9)](this,_0x8b9918))return![];return VisuMZ[_0x27b846(0x3e5)][_0x27b846(0x3fa)][_0x27b846(0x303)](this,_0x8b9918);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x689)]=Game_BattlerBase['prototype'][_0x510241(0x699)],Game_BattlerBase['prototype'][_0x510241(0x699)]=function(_0x34f41a){const _0x335a80=_0x510241;this[_0x335a80(0x1df)]=!![];const _0x4ac85d=VisuMZ[_0x335a80(0x3e5)]['Game_BattlerBase_param_artifact'][_0x335a80(0x303)](this,_0x34f41a);return this[_0x335a80(0x1df)]=undefined,_0x4ac85d;},VisuMZ['ItemsEquipsCore'][_0x510241(0x2d2)]=Game_Actor[_0x510241(0x4d5)][_0x510241(0x62a)],Game_Actor['prototype']['traitObjects']=function(){const _0x1cffe9=_0x510241;this[_0x1cffe9(0x2a2)]=!![];const _0x34e8dd=VisuMZ[_0x1cffe9(0x3e5)][_0x1cffe9(0x2d2)][_0x1cffe9(0x303)](this);return this[_0x1cffe9(0x2a2)]=undefined,_0x34e8dd;},VisuMZ[_0x510241(0x3e5)][_0x510241(0x2db)]=Game_Actor[_0x510241(0x4d5)][_0x510241(0x2fe)],Game_Actor[_0x510241(0x4d5)][_0x510241(0x2fe)]=function(){const _0x3f5cfa=_0x510241,_0x586d6c=VisuMZ[_0x3f5cfa(0x3e5)]['Game_Actor_equips_artifacts'][_0x3f5cfa(0x303)](this);if(this[_0x3f5cfa(0x2a2)]||this['_allowArtifactParamBase']){if(_0x3f5cfa(0x23e)==='kNjgf')_0x5bf19b['ItemsEquipsCore'][_0x3f5cfa(0x311)](_0xdf2315,_0x45af65),_0x1d133b[_0x3f5cfa(0x3e5)]['Parse_Notetags_Prices'](_0x5b4464,_0x3eb81e),_0xcfdf8e[_0x3f5cfa(0x3e5)][_0x3f5cfa(0x333)](_0x3f3cb8,_0x52cc8b),_0x2ccd01[_0x3f5cfa(0x3e5)][_0x3f5cfa(0x35d)](_0x250b48,_0x33452c),_0x5aa853[_0x3f5cfa(0x3e5)][_0x3f5cfa(0x498)](_0x393741,_0x19ff16);else{const _0x138cfc=_0x586d6c[_0x3f5cfa(0x2f9)]($gameParty['partyArtifacts']());return _0x138cfc;}}else return _0x3f5cfa(0x641)!==_0x3f5cfa(0x205)?_0x586d6c:_0x1bae8c['_scene'][_0x3f5cfa(0x5b1)]()?0x1:0x2;},VisuMZ[_0x510241(0x3e5)][_0x510241(0x632)]=Game_BattlerBase[_0x510241(0x4d5)][_0x510241(0x223)],Game_BattlerBase['prototype'][_0x510241(0x223)]=function(_0x4b172e){const _0x49b5d9=_0x510241;let _0xeffbd8=VisuMZ['ItemsEquipsCore'][_0x49b5d9(0x632)][_0x49b5d9(0x303)](this,_0x4b172e);if(this[_0x49b5d9(0x4f6)]===Game_Enemy)for(const _0x3c5f7b of $gameParty[_0x49b5d9(0x4a6)]()){if(_0x3c5f7b)_0xeffbd8+=_0x3c5f7b[_0x49b5d9(0x589)][_0x4b172e];}return _0xeffbd8;},VisuMZ[_0x510241(0x3e5)][_0x510241(0x224)]=Game_Enemy[_0x510241(0x4d5)][_0x510241(0x62a)],Game_Enemy[_0x510241(0x4d5)][_0x510241(0x62a)]=function(){const _0x1ad373=_0x510241;let _0x50de83=VisuMZ[_0x1ad373(0x3e5)]['Game_Enemy_traitObjects_artifact'][_0x1ad373(0x303)](this);return _0x50de83['concat']($gameParty[_0x1ad373(0x4a6)]());},VisuMZ[_0x510241(0x3e5)][_0x510241(0x227)]=Game_Party['prototype'][_0x510241(0x68a)],Game_Party[_0x510241(0x4d5)][_0x510241(0x68a)]=function(_0x59ab89,_0xa15aeb,_0x3f7cea){const _0x105423=_0x510241;VisuMZ[_0x105423(0x3e5)][_0x105423(0x227)][_0x105423(0x303)](this,_0x59ab89,_0xa15aeb,_0x3f7cea);if(DataManager[_0x105423(0x574)](_0x59ab89)){let _0x378f93=$gameParty[_0x105423(0x6a6)]();if($gameParty[_0x105423(0x661)]())_0x378f93=_0x378f93[_0x105423(0x2f9)]($gameTroop[_0x105423(0x50f)]());for(const _0x3bad98 of _0x378f93){if(_0x105423(0x2d3)===_0x105423(0x515))return!![];else{if(!_0x3bad98)continue;_0x3bad98[_0x105423(0x43f)]={};}}}},Game_Party[_0x510241(0x4d5)][_0x510241(0x4ed)]=function(){const _0x154d33=_0x510241;let _0x49d11b=[];for(const _0x3f2aca of this[_0x154d33(0x445)]()){if('bLifY'===_0x154d33(0x4b1))_0x1b0826=this[_0x154d33(0x2a8)][_0x154d33(0x699)](_0x575d75),_0x44e76b=this[_0x154d33(0x547)][_0x154d33(0x699)](_0x170bfa),_0x4559d3=_0x16f96f%0x1!==0x0||_0x2f08cd%0x1!==0x0;else{if(!_0x3f2aca)continue;if(!DataManager['isArtifact'](_0x3f2aca))continue;if(!DataManager[_0x154d33(0x51f)](_0x3f2aca))continue;let _0x347660=0x1;if(DataManager[_0x154d33(0x616)](_0x3f2aca))_0x347660=this[_0x154d33(0x505)](_0x3f2aca);while(_0x347660--)_0x49d11b['push'](_0x3f2aca);}}return _0x49d11b;},Game_Party[_0x510241(0x4d5)][_0x510241(0x4a6)]=function(){const _0x31acbb=_0x510241;let _0x2bfd80=[];for(const _0x52b8be of this['armors']()){if('sjsSK'===_0x31acbb(0x2fa)){const _0x1d9144=_0x7373ad[_0x31acbb(0x3e5)][_0x31acbb(0x5b3)]['EquipScene'];return _0x1d9144[_0x31acbb(0x4a5)]||_0x1d9144[_0x31acbb(0x67b)];}else{if(!_0x52b8be)continue;if(!DataManager[_0x31acbb(0x574)](_0x52b8be))continue;if(!DataManager[_0x31acbb(0x490)](_0x52b8be))continue;let _0x41014d=0x1;if(DataManager['isStackableArtifact'](_0x52b8be))_0x41014d=this[_0x31acbb(0x505)](_0x52b8be);while(_0x41014d--)_0x2bfd80[_0x31acbb(0x4df)](_0x52b8be);}}return _0x2bfd80;},Game_Party[_0x510241(0x4d5)]['artifacts']=function(){const _0x25f8b7=_0x510241;return this[_0x25f8b7(0x4ed)]()[_0x25f8b7(0x2f9)](this[_0x25f8b7(0x4a6)]());},VisuMZ[_0x510241(0x3e5)][_0x510241(0x4ac)]=Game_Party[_0x510241(0x4d5)][_0x510241(0x479)],Game_Party['prototype'][_0x510241(0x479)]=function(){const _0x1f32d1=_0x510241;VisuMZ[_0x1f32d1(0x3e5)][_0x1f32d1(0x4ac)]['call'](this),this[_0x1f32d1(0x4de)]();},Game_Party['prototype'][_0x510241(0x4de)]=function(){const _0x5a9b04=_0x510241,_0x16182f=$gameParty[_0x5a9b04(0x445)]()[_0x5a9b04(0x530)](_0x2b4636=>DataManager[_0x5a9b04(0x574)](_0x2b4636));for(const _0xe92d9c of _0x16182f){if(_0x5a9b04(0x443)===_0x5a9b04(0x687))_0x46e468=_0x5a9b04(0x57b)['format'](_0x209d41['id']);else{const _0x4c6d56=this[_0x5a9b04(0x505)](_0xe92d9c);if(_0x4c6d56)this[_0x5a9b04(0x5fb)](_0xe92d9c,_0x4c6d56);}}},DataManager[_0x510241(0x36c)]=function(_0x13cec2,_0x54403b){const _0x2cda81=_0x510241;if(this[_0x2cda81(0x22f)](_0x54403b))return![];if(!_0x13cec2)return![];if($gameTemp[_0x2cda81(0x580)])return!![];if(BattleManager['isBattleTest']())return!![];const _0x2933a4=this[_0x2cda81(0x43c)](_0x54403b);if(_0x2933a4['length']<=0x0)return!![];return _0x2933a4[_0x2cda81(0x400)](_0x13cec2[_0x2cda81(0x305)]()['id']);},DataManager[_0x510241(0x43c)]=function(_0x56d332){const _0x4f1bee=_0x510241;if(!_0x56d332)return[];this[_0x4f1bee(0x493)]=this[_0x4f1bee(0x493)]||{};const _0x2ae209=_0x4f1bee(0x2c5)[_0x4f1bee(0x648)](this[_0x4f1bee(0x2f3)](_0x56d332)?'WEAPON':_0x4f1bee(0x5e1),_0x56d332['id']);if(this[_0x4f1bee(0x493)][_0x2ae209]!==undefined)return this[_0x4f1bee(0x493)][_0x2ae209];let _0x3ddfa1=[];const _0x309dfb=_0x56d332[_0x4f1bee(0x357)]||'';if(_0x309dfb['match'](/<EQUIP FOR CLASS(?:|ES) ONLY:[ ](.*)>/i)){const _0x365572=String(RegExp['$1'])['split'](',')[_0x4f1bee(0x43e)](_0xf3a08a=>_0xf3a08a['trim']());for(const _0x4df75e of _0x365572){const _0x38d722=/^\d+$/[_0x4f1bee(0x3b6)](_0x4df75e);_0x38d722?_0x4f1bee(0x1e4)==='maapo'?_0x2aea5a=this[_0x4f1bee(0x2a8)]['param'](_0x275b05):_0x3ddfa1[_0x4f1bee(0x4df)](Number(_0x4df75e)):_0x3ddfa1[_0x4f1bee(0x4df)](DataManager[_0x4f1bee(0x6b5)](_0x4df75e));}}return this[_0x4f1bee(0x493)][_0x2ae209]=_0x3ddfa1,this[_0x4f1bee(0x493)][_0x2ae209];},DataManager['meetsEquipRequirements']=function(_0xab6351,_0x483488){const _0x5d0b1f=_0x510241;if(this[_0x5d0b1f(0x22f)](_0x483488))return![];if(!_0xab6351)return![];if($gameTemp[_0x5d0b1f(0x580)])return!![];if(BattleManager['isBattleTest']())return!![];const _0x3c10fd=this[_0x5d0b1f(0x24a)](_0x483488);for(const _0x50b309 of _0x3c10fd){if(!this[_0x5d0b1f(0x1f8)](_0xab6351,_0x50b309))return![];}return!![];},DataManager[_0x510241(0x24a)]=function(_0x3b8569){const _0x19f283=_0x510241;if(!_0x3b8569)return[];this['_getEquipRequirements']=this[_0x19f283(0x592)]||{};const _0x2a061b=_0x19f283(0x2c5)[_0x19f283(0x648)](this[_0x19f283(0x2f3)](_0x3b8569)?_0x19f283(0x214):'ARMOR',_0x3b8569['id']);if(this['_getEquipRequirements'][_0x2a061b]!==undefined)return this['_getEquipRequirements'][_0x2a061b];let _0x484919=[];const _0x4d9bbf=_0x3b8569[_0x19f283(0x357)]||'';if(_0x4d9bbf[_0x19f283(0x6b1)](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)){if(_0x19f283(0x2b5)!==_0x19f283(0x2b5)){const _0x45abd8=_0x247eda[_0x19f283(0x3e5)][_0x19f283(0x5b3)]['New'],_0x11723e=_0x45abd8[_0x19f283(0x58d)];if(_0x11723e==='')return;const _0x89d077=_0x36dcb3[_0x19f283(0x51a)],_0x22906b=_0x3ccc4f[_0x19f283(0x62e)];this[_0x19f283(0x52e)][_0x19f283(0x4ae)]=_0x45abd8[_0x19f283(0x339)]||_0x558e82['mainFontFace'](),this[_0x19f283(0x52e)][_0x19f283(0x2a6)]=this[_0x19f283(0x66a)](),this[_0x19f283(0x52e)]['fontSize']=_0x45abd8[_0x19f283(0x3d4)],this[_0x19f283(0x52e)][_0x19f283(0x2b2)](_0x11723e,0x0,_0x22906b/0x2,_0x89d077,_0x22906b/0x2,'center');}else _0x484919=String(RegExp['$1'])[_0x19f283(0x436)](/[\r\n]+/);}return this[_0x19f283(0x592)][_0x2a061b]=_0x484919,this[_0x19f283(0x592)][_0x2a061b];},DataManager[_0x510241(0x1f8)]=function(_0x1975f8,_0x4b17c2){const _0x15c15c=_0x510241;if(_0x4b17c2[_0x15c15c(0x6b1)](/(?:LEVEL|LV|LVL)[ ](>|>=|===|<=|<)[ ](\d+)/i)){if(_0x15c15c(0x6ba)!==_0x15c15c(0x6ba))return 0x0;else{const _0x12efe4=String(RegExp['$1'])[_0x15c15c(0x569)](),_0x2e16cf=Number(RegExp['$2']);switch(_0x12efe4){case'>':return _0x1975f8[_0x15c15c(0x421)]>_0x2e16cf;case'>=':return _0x1975f8[_0x15c15c(0x421)]>=_0x2e16cf;case _0x15c15c(0x51b):return _0x1975f8['level']===_0x2e16cf;case'<=':return _0x1975f8[_0x15c15c(0x421)]<=_0x2e16cf;case'<':return _0x1975f8[_0x15c15c(0x421)]<_0x2e16cf;}return![];}}if(_0x4b17c2[_0x15c15c(0x6b1)](/(MAXHP|MAXMP|MHP|MMP)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x1a8c1a=String(RegExp['$1'])[_0x15c15c(0x243)]()[_0x15c15c(0x569)](),_0x261843=String(RegExp['$2'])[_0x15c15c(0x569)](),_0x5ac8b4=Number(RegExp['$3']);let _0x3ec271=0x0;if([_0x15c15c(0x425),_0x15c15c(0x55a)][_0x15c15c(0x400)](_0x1a8c1a))_0x3ec271=0x1;const _0x27a0c5=_0x1975f8[_0x15c15c(0x57f)][_0x3ec271]||0x0;switch(_0x261843){case'>':return _0x1975f8[_0x15c15c(0x6ae)](_0x3ec271)+_0x27a0c5>_0x5ac8b4;case'>=':return _0x1975f8[_0x15c15c(0x6ae)](_0x3ec271)+_0x27a0c5>=_0x5ac8b4;case _0x15c15c(0x51b):return _0x1975f8[_0x15c15c(0x6ae)](_0x3ec271)+_0x27a0c5===_0x5ac8b4;case'<=':return _0x1975f8[_0x15c15c(0x6ae)](_0x3ec271)+_0x27a0c5<=_0x5ac8b4;case'<':return _0x1975f8[_0x15c15c(0x6ae)](_0x3ec271)+_0x27a0c5<_0x5ac8b4;}return![];}if(_0x4b17c2['match'](/(ATK|DEF|MAT|MDF|AGI|LUK)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x2b7ffb=String(RegExp['$1'])[_0x15c15c(0x243)]()[_0x15c15c(0x569)](),_0x5c1c12=String(RegExp['$2'])['trim'](),_0x557a9e=Number(RegExp['$3']),_0x2d6b00=[_0x15c15c(0x5f2),_0x15c15c(0x4c8),_0x15c15c(0x517),'mdf',_0x15c15c(0x585),_0x15c15c(0x3a9)];let _0x252ff7=_0x2d6b00[_0x15c15c(0x693)](_0x2b7ffb)+0x2;if(_0x252ff7<0x2)return![];const _0x3eac6a=_0x1975f8[_0x15c15c(0x57f)][_0x252ff7]||0x0;switch(_0x5c1c12){case'>':return _0x1975f8[_0x15c15c(0x6ae)](_0x252ff7)+_0x3eac6a>_0x557a9e;case'>=':return _0x1975f8[_0x15c15c(0x6ae)](_0x252ff7)+_0x3eac6a>=_0x557a9e;case'===':return _0x1975f8[_0x15c15c(0x6ae)](_0x252ff7)+_0x3eac6a===_0x557a9e;case'<=':return _0x1975f8[_0x15c15c(0x6ae)](_0x252ff7)+_0x3eac6a<=_0x557a9e;case'<':return _0x1975f8[_0x15c15c(0x6ae)](_0x252ff7)+_0x3eac6a<_0x557a9e;}return![];}if(_0x4b17c2[_0x15c15c(0x6b1)](/LEARNED SKILL:[ ](\d+)/i)){const _0x44096e=Number(RegExp['$1']);return _0x1975f8[_0x15c15c(0x232)](_0x44096e);}else{if(_0x4b17c2[_0x15c15c(0x6b1)](/LEARNED SKILL:[ ](.*)/i)){const _0x591a73=String(RegExp['$1']),_0xd77a8b=this[_0x15c15c(0x511)](_0x591a73);return _0x1975f8[_0x15c15c(0x232)](_0xd77a8b);}}if(_0x4b17c2[_0x15c15c(0x6b1)](/SWITCH:[ ](\d+)/i)){if(_0x15c15c(0x424)!==_0x15c15c(0x424)){const _0x5d244c=_0x15c15c(0x69e);if(!this[_0x15c15c(0x28d)][_0x15c15c(0x1ef)]&&!this[_0x15c15c(0x4b6)][_0x5d244c])return![];const _0x53864c=this['getItemEffectsAddedStatesBuffsLabel']();this[_0x15c15c(0x36b)](_0x53864c,_0x3ee7cb,_0x2f988c,_0x4b3274,!![]);const _0x42c5b2=this['getItemEffectsAddedStatesBuffsText']();return this['drawItemKeyData'](_0x42c5b2,_0xec621f,_0x4b22da,_0x5d73d6,![],_0x15c15c(0x4ee)),this[_0x15c15c(0x5ac)](_0x2d2c34,_0xe8f9e1,_0x514e48),this[_0x15c15c(0x65c)](),!![];}else{const _0x276c22=Number(RegExp['$1']);return $gameSwitches[_0x15c15c(0x5a5)](_0x276c22);}}return!![];},TextManager[_0x510241(0x4ca)]={'helpDesc':{'equip':VisuMZ[_0x510241(0x3e5)][_0x510241(0x5b3)][_0x510241(0x619)][_0x510241(0x231)]??_0x510241(0x203),'optimize':VisuMZ['ItemsEquipsCore'][_0x510241(0x5b3)][_0x510241(0x619)]['optimizeCmdDesc']??_0x510241(0x43a),'clear':VisuMZ[_0x510241(0x3e5)]['Settings'][_0x510241(0x619)][_0x510241(0x627)]??_0x510241(0x4fc)}},ColorManager[_0x510241(0x28c)]=function(_0xbdfa50){const _0x53b50a=_0x510241;if(!_0xbdfa50)return this[_0x53b50a(0x5ca)]();else{if(_0xbdfa50['note']['match'](/<COLOR:[ ](\d+)>/i)){if(_0x53b50a(0x25b)!=='gZYqU')return this[_0x53b50a(0x2a6)](Number(RegExp['$1'])['clamp'](0x0,0x1f));else _0x1bc225['forceChangeEquip'](_0x2b496b,this['_item']);}else{if(_0xbdfa50['note'][_0x53b50a(0x6b1)](/<COLOR:[ ]#(.*)>/i)){if(_0x53b50a(0x449)!==_0x53b50a(0x3c6))return'#'+String(RegExp['$1']);else _0x29a04d[_0x53b50a(0x3e5)][_0x53b50a(0x4e8)][_0x53b50a(0x303)](this),this[_0x53b50a(0x28b)]()&&this[_0x53b50a(0x4e0)]();}else return this['normalColor']();}}},ColorManager[_0x510241(0x5f9)]=function(_0x191557){const _0x4a6ed8=_0x510241;return _0x191557=String(_0x191557),_0x191557[_0x4a6ed8(0x6b1)](/#(.*)/i)?_0x4a6ed8(0x56b)[_0x4a6ed8(0x648)](String(RegExp['$1'])):this['textColor'](Number(_0x191557));},SceneManager[_0x510241(0x469)]=function(){const _0x2f7591=_0x510241;return this[_0x2f7591(0x6b3)]&&this[_0x2f7591(0x6b3)][_0x2f7591(0x4f6)]===Scene_Shop;},Game_Temp[_0x510241(0x4d5)][_0x510241(0x35e)]=function(){const _0x27ebed=_0x510241;if(this[_0x27ebed(0x2f6)])return![];return VisuMZ[_0x27ebed(0x3e5)][_0x27ebed(0x5b3)][_0x27ebed(0x3bd)][_0x27ebed(0x275)];},VisuMZ[_0x510241(0x30f)]=VisuMZ[_0x510241(0x3e5)]['Settings']['StatusWindow']['MultiplierStandard'],VisuMZ[_0x510241(0x3e5)][_0x510241(0x554)]=Game_BattlerBase[_0x510241(0x4d5)][_0x510241(0x699)],Game_BattlerBase[_0x510241(0x4d5)]['param']=function(_0x963f24){const _0x478949=_0x510241;return this[_0x478949(0x60c)]?this[_0x478949(0x384)]?VisuMZ[_0x478949(0x30f)]:0x1:VisuMZ[_0x478949(0x3e5)][_0x478949(0x554)][_0x478949(0x303)](this,_0x963f24);},VisuMZ['ItemsEquipsCore']['Game_BattlerBase_meetsItemConditions']=Game_BattlerBase[_0x510241(0x4d5)][_0x510241(0x437)],Game_BattlerBase[_0x510241(0x4d5)][_0x510241(0x437)]=function(_0x12bb61){const _0xdad8d2=_0x510241;if(!_0x12bb61)return![];if(!VisuMZ[_0xdad8d2(0x3e5)][_0xdad8d2(0x5e8)][_0xdad8d2(0x303)](this,_0x12bb61))return![];if(!this[_0xdad8d2(0x5fa)](_0x12bb61))return![];if(!this[_0xdad8d2(0x471)](_0x12bb61))return![];return!![];},Game_BattlerBase[_0x510241(0x4d5)][_0x510241(0x5fa)]=function(_0x57f764){const _0x20e5d4=_0x510241;if(!this[_0x20e5d4(0x5d4)](_0x57f764))return![];return!![];},Game_BattlerBase[_0x510241(0x4d5)][_0x510241(0x5d4)]=function(_0x1a20e2){const _0x2dbc9a=_0x510241,_0x3ce040=_0x1a20e2['note'];if(_0x3ce040[_0x2dbc9a(0x6b1)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x25c34f=JSON[_0x2dbc9a(0x312)]('['+RegExp['$1'][_0x2dbc9a(0x6b1)](/\d+/g)+']');for(const _0xa080a4 of _0x25c34f){if(!$gameSwitches[_0x2dbc9a(0x5a5)](_0xa080a4))return![];}return!![];}if(_0x3ce040[_0x2dbc9a(0x6b1)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x2dbc9a(0x6ab)===_0x2dbc9a(0x2de)){const _0x5db790=_0x45bf82(_0x2880af['$1']);_0x5db790!==_0x13b0e5[_0x1f2f61][_0x2dbc9a(0x36a)]&&(_0x1c2a8c(_0x2dbc9a(0x3d3)[_0x2dbc9a(0x648)](_0x41b7b0,_0x5db790)),_0x365106['exit']());}else{const _0x3dacc2=JSON[_0x2dbc9a(0x312)]('['+RegExp['$1'][_0x2dbc9a(0x6b1)](/\d+/g)+']');for(const _0x53c2fd of _0x3dacc2){if(!$gameSwitches['value'](_0x53c2fd))return![];}return!![];}}if(_0x3ce040[_0x2dbc9a(0x6b1)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x30aad8=JSON[_0x2dbc9a(0x312)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x12a92b of _0x30aad8){if($gameSwitches[_0x2dbc9a(0x5a5)](_0x12a92b))return!![];}return![];}if(_0x3ce040[_0x2dbc9a(0x6b1)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x7ed610=JSON['parse']('['+RegExp['$1'][_0x2dbc9a(0x6b1)](/\d+/g)+']');for(const _0x20fba4 of _0x7ed610){if(!$gameSwitches['value'](_0x20fba4))return!![];}return![];}if(_0x3ce040[_0x2dbc9a(0x6b1)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x2dbc9a(0x635)!==_0x2dbc9a(0x635)){if(_0xa60750['isKeyItem'](_0x268d82))return _0x4388b4[_0x2dbc9a(0x33d)];return!![];}else{const _0x5ed627=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x3d86b0 of _0x5ed627){if(_0x2dbc9a(0x536)!=='vDwIW'){if(!$gameSwitches['value'](_0x3d86b0))return!![];}else return _0x1993de['isArmor'](_0x41c6b4)&&_0x1093c7[_0x2dbc9a(0x4d8)]===_0x3a76ea(_0x1c01e3['$1']);}return![];}}if(_0x3ce040[_0x2dbc9a(0x6b1)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1645e1=JSON[_0x2dbc9a(0x312)]('['+RegExp['$1'][_0x2dbc9a(0x6b1)](/\d+/g)+']');for(const _0x3feca5 of _0x1645e1){if('OJkDR'!==_0x2dbc9a(0x600))this[_0x2dbc9a(0x2b0)]=_0x4e4fe7['_scene'][_0x2dbc9a(0x6b4)]();else{if($gameSwitches[_0x2dbc9a(0x5a5)](_0x3feca5))return![];}}return!![];}return!![];},Game_BattlerBase['prototype'][_0x510241(0x471)]=function(_0x3cc4f0){const _0x4a9a94=_0x510241,_0xbd78b7=_0x3cc4f0[_0x4a9a94(0x357)],_0x1272af=VisuMZ['ItemsEquipsCore'][_0x4a9a94(0x346)];return _0x1272af[_0x3cc4f0['id']]?_0x1272af[_0x3cc4f0['id']]['call'](this,_0x3cc4f0):!![];},Game_Actor['prototype'][_0x510241(0x33e)]=function(_0x12ba80){const _0x28e4f7=_0x510241;_0x12ba80=this[_0x28e4f7(0x583)](_0x12ba80);const _0x280e58=this[_0x28e4f7(0x412)]();this[_0x28e4f7(0x369)]=[];for(let _0x5c6f1a=0x0;_0x5c6f1a<_0x280e58['length'];_0x5c6f1a++){this[_0x28e4f7(0x369)][_0x5c6f1a]=new Game_Item();}for(let _0x279a16=0x0;_0x279a16<_0x280e58[_0x28e4f7(0x535)];_0x279a16++){if(_0x28e4f7(0x3f4)!==_0x28e4f7(0x3f4))!this[_0x28e4f7(0x56e)]()&&_0x1c0671[_0x28e4f7(0x4d5)][_0x28e4f7(0x5c2)][_0x28e4f7(0x303)](this);else{const _0x217451=_0x280e58[_0x279a16],_0x5775b5=this[_0x28e4f7(0x40c)](_0x12ba80,_0x217451);if(this['canEquip'](_0x5775b5))this[_0x28e4f7(0x369)][_0x279a16][_0x28e4f7(0x1f1)](_0x5775b5);}}this[_0x28e4f7(0x40b)](!![]),this[_0x28e4f7(0x36f)]();},Game_Actor[_0x510241(0x4d5)][_0x510241(0x583)]=function(_0x1bd22f){const _0x2f7577=_0x510241,_0xfd466e=[];for(let _0x593f69=0x0;_0x593f69<_0x1bd22f[_0x2f7577(0x535)];_0x593f69++){const _0x3359f1=_0x1bd22f[_0x593f69];if(_0x3359f1<=0x0)continue;const _0x39969d=$dataSystem[_0x2f7577(0x267)][_0x593f69+0x1];if(_0x39969d===$dataSystem[_0x2f7577(0x267)][0x1]||_0x593f69===0x1&&this[_0x2f7577(0x621)]())_0xfd466e[_0x2f7577(0x4df)]($dataWeapons[_0x3359f1]);else{if(BattleManager['isBattleTest']()){if(_0x2f7577(0x3ab)!==_0x2f7577(0x378)){const _0x1e2555=$dataArmors[_0x3359f1];_0x1e2555&&_0x1e2555[_0x2f7577(0x5d6)]===_0x593f69+0x1&&_0xfd466e[_0x2f7577(0x4df)](_0x1e2555);}else{if(!_0x233c5c[_0x2f7577(0x5a5)](_0x1b5f57))return![];}}else{const _0x42fd91=$dataArmors[_0x3359f1];_0x42fd91&&_0x42fd91[_0x2f7577(0x5d6)]===_0x593f69+0x1&&_0xfd466e[_0x2f7577(0x4df)](_0x42fd91);}}}return _0xfd466e;},Game_Actor[_0x510241(0x4d5)][_0x510241(0x40c)]=function(_0x203a68,_0x3b6584){const _0x4fc92d=_0x510241;for(const _0x176def of _0x203a68){if(!_0x176def)continue;if(_0x176def[_0x4fc92d(0x5d6)]===_0x3b6584)return _0x203a68['splice'](_0x203a68[_0x4fc92d(0x693)](_0x176def),0x1),_0x176def;}return null;},Game_Actor[_0x510241(0x4d5)][_0x510241(0x412)]=function(){const _0x55340b=_0x510241,_0x11f0bc=JsonEx[_0x55340b(0x4bd)](this[_0x55340b(0x634)]||this[_0x55340b(0x305)]()[_0x55340b(0x412)]);if(_0x11f0bc[_0x55340b(0x535)]>=0x2&&this[_0x55340b(0x621)]())_0x11f0bc[0x1]=0x1;return _0x11f0bc;},Game_Actor[_0x510241(0x4d5)]['forceChangeEquipSlots']=function(_0x219424){const _0x30bde5=_0x510241;_0x219424[_0x30bde5(0x2ed)](0x0),_0x219424[_0x30bde5(0x2ed)](-0x1),this[_0x30bde5(0x634)]=_0x219424,this[_0x30bde5(0x36f)](),this[_0x30bde5(0x5fc)]();},Game_Actor[_0x510241(0x4d5)][_0x510241(0x2e0)]=function(){const _0x2bd56d=_0x510241;this[_0x2bd56d(0x634)]=undefined,this[_0x2bd56d(0x36f)](),this['updateChangedSlots']();},Game_Actor[_0x510241(0x4d5)][_0x510241(0x5fc)]=function(){const _0x4ece65=_0x510241;let _0x3204bc=this[_0x4ece65(0x412)]()[_0x4ece65(0x535)];while(this[_0x4ece65(0x369)][_0x4ece65(0x535)]>_0x3204bc){if(_0x4ece65(0x3bb)==='YLcKf'){const _0x503245=this[_0x4ece65(0x369)][this[_0x4ece65(0x369)][_0x4ece65(0x535)]-0x1];if(_0x503245&&_0x503245[_0x4ece65(0x4ef)]()){if(_0x4ece65(0x48c)!==_0x4ece65(0x5dd))$gameParty[_0x4ece65(0x68a)](_0x503245[_0x4ece65(0x4ef)](),0x1);else{_0x5f2231=_0x15f92e||this[_0x4ece65(0x49d)](),this[_0x4ece65(0x3d6)]['paintOpacity']=0xa0;const _0x248e51=_0x1d1625[_0x4ece65(0x20a)]();this[_0x4ece65(0x3d6)][_0x4ece65(0x581)](_0x2b169b+0x1,_0xb8e9ea+0x1,_0x4f5d83-0x2,_0x3ec232-0x2,_0x248e51),this[_0x4ece65(0x3d6)][_0x4ece65(0x1f2)]=0xff;}}this[_0x4ece65(0x369)][_0x4ece65(0x286)]();}else{if(_0x3c932a[_0x4ece65(0x6b1)](/(.*):[ ](.*)/i)){const _0x4f3e2d=_0xb3dd08(_0x4bd413['$1'])[_0x4ece65(0x606)]()['trim'](),_0x2b54ed=_0xb18d5(_0x1fb54d['$2'])[_0x4ece65(0x569)]();this[_0x4ece65(0x4b6)][_0x4f3e2d]=_0x2b54ed;}}}while(_0x3204bc>this[_0x4ece65(0x369)][_0x4ece65(0x535)]){if(_0x4ece65(0x284)!==_0x4ece65(0x284)){const _0x305e95=_0x3d6593(_0x2de27f['$1'])||0x1;if(_0x5be954>=_0x305e95)return!![];}else this[_0x4ece65(0x369)][_0x4ece65(0x4df)](new Game_Item());}},Game_Actor[_0x510241(0x4d5)][_0x510241(0x5df)]=function(){const _0x3cc5ef=_0x510241,_0x168d2a=this[_0x3cc5ef(0x412)]();for(let _0x3c19d9=0x0;_0x3c19d9<_0x168d2a[_0x3cc5ef(0x535)];_0x3c19d9++){if(!this['_equips'][_0x3c19d9])this['_equips'][_0x3c19d9]=new Game_Item();}this[_0x3cc5ef(0x40b)](![]),this[_0x3cc5ef(0x36f)]();},VisuMZ[_0x510241(0x3e5)][_0x510241(0x2e7)]=Game_Actor[_0x510241(0x4d5)][_0x510241(0x4b7)],Game_Actor['prototype']['changeEquip']=function(_0x2e05b9,_0x3b3bac){const _0x4b36f0=_0x510241;if(!this[_0x4b36f0(0x547)]){const _0x436f4b=JsonEx[_0x4b36f0(0x4bd)](this);_0x436f4b['_tempActor']=!![],VisuMZ['ItemsEquipsCore']['Game_Actor_changeEquip']['call'](this,_0x2e05b9,_0x3b3bac),this[_0x4b36f0(0x396)](_0x436f4b);}else{if(_0x4b36f0(0x3a6)===_0x4b36f0(0x680)){this[_0x4b36f0(0x258)]=![];if(this[_0x4b36f0(0x50d)]()){const _0x1f7522=this[_0x4b36f0(0x3ed)](),_0x15e1b5=this[_0x4b36f0(0x3ca)]();_0x15e1b5>=0x0&&_0x15e1b5!==this[_0x4b36f0(0x3ed)]()&&this[_0x4b36f0(0x674)](_0x15e1b5),_0x19e53f&&this[_0x4b36f0(0x3ed)]()!==_0x1f7522&&this[_0x4b36f0(0x3e7)]();}}else VisuMZ[_0x4b36f0(0x3e5)][_0x4b36f0(0x2e7)]['call'](this,_0x2e05b9,_0x3b3bac);}},VisuMZ[_0x510241(0x3e5)][_0x510241(0x3b8)]=Game_Actor[_0x510241(0x4d5)]['forceChangeEquip'],Game_Actor['prototype']['forceChangeEquip']=function(_0x2f1048,_0x51f3fa){const _0xad3334=_0x510241;if(!this['_tempActor']){if('YJZHl'===_0xad3334(0x255)){const _0x2f47a4=JsonEx[_0xad3334(0x4bd)](this);_0x2f47a4[_0xad3334(0x547)]=!![],VisuMZ[_0xad3334(0x3e5)][_0xad3334(0x3b8)]['call'](this,_0x2f1048,_0x51f3fa),this[_0xad3334(0x396)](_0x2f47a4);}else this[_0xad3334(0x6d2)](_0x1f8f4b[_0xad3334(0x47f)](_0xad3334(0x5be)));}else{if('Ltvtk'!==_0xad3334(0x1f4)){_0x5bb316+=_0xad3334(0x317)[_0xad3334(0x648)](_0x1006b0[_0xad3334(0x516)]),_0x3a22d3++;if(_0x4a94d7>=_0x9ebb72)return _0x5dd4a9;}else VisuMZ[_0xad3334(0x3e5)][_0xad3334(0x3b8)]['call'](this,_0x2f1048,_0x51f3fa);}},VisuMZ[_0x510241(0x3e5)][_0x510241(0x5bb)]=Game_Actor[_0x510241(0x4d5)]['discardEquip'],Game_Actor['prototype'][_0x510241(0x6b2)]=function(_0xf29de5){const _0x2e0764=_0x510241;if(!this[_0x2e0764(0x547)]){const _0x9d9644=JsonEx[_0x2e0764(0x4bd)](this);_0x9d9644[_0x2e0764(0x547)]=!![],VisuMZ['ItemsEquipsCore'][_0x2e0764(0x5bb)][_0x2e0764(0x303)](this,_0xf29de5),this[_0x2e0764(0x396)](_0x9d9644);}else _0x2e0764(0x3a3)!=='RQfxM'?this['onTouchSelectModernControls'](![]):VisuMZ['ItemsEquipsCore'][_0x2e0764(0x5bb)][_0x2e0764(0x303)](this,_0xf29de5);},Game_Actor['prototype'][_0x510241(0x40b)]=function(_0x2dec03){const _0x107b71=_0x510241;if(this[_0x107b71(0x4a3)])return;for(;;){const _0x1392c2=this['equipSlots'](),_0x3cb6e8=this[_0x107b71(0x2fe)](),_0xdf756a=_0x3cb6e8[_0x107b71(0x535)];let _0x170c2a=![];for(let _0x331499=0x0;_0x331499<_0xdf756a;_0x331499++){if(_0x107b71(0x683)!==_0x107b71(0x37f)){const _0x1392b9=_0x3cb6e8[_0x331499];if(_0x1392b9&&(!this[_0x107b71(0x460)](_0x1392b9)||_0x1392b9[_0x107b71(0x5d6)]!==_0x1392c2[_0x331499])){!_0x2dec03&&this[_0x107b71(0x52f)](null,_0x1392b9);if(!this[_0x107b71(0x547)]){const _0x1f8527=JsonEx[_0x107b71(0x4bd)](this);_0x1f8527[_0x107b71(0x547)]=!![],this[_0x107b71(0x369)][_0x331499][_0x107b71(0x1f1)](null),this['_bypassReleaseUnequippableItemsItemsEquipsCore']=!![],this[_0x107b71(0x396)](_0x1f8527),this[_0x107b71(0x4a3)]=undefined;}else this[_0x107b71(0x369)][_0x331499]['setObject'](null);_0x170c2a=!![];}}else return this[_0x107b71(0x673)]();}if(!_0x170c2a){if(_0x107b71(0x308)!==_0x107b71(0x308)){if(!_0x2206a2[_0x107b71(0x5a5)](_0x3c1583))return![];}else break;}}},Game_Actor[_0x510241(0x4d5)][_0x510241(0x396)]=function(_0x18fa1a){const _0x1663ec=_0x510241;if(this['_tempActor'])return;if(!VisuMZ['ItemsEquipsCore'][_0x1663ec(0x5b3)][_0x1663ec(0x619)][_0x1663ec(0x47d)])return;const _0x3710eb=Math[_0x1663ec(0x3ba)](_0x18fa1a[_0x1663ec(0x40f)]()*this[_0x1663ec(0x46f)]),_0x42e91e=Math[_0x1663ec(0x3ba)](_0x18fa1a[_0x1663ec(0x5ec)]()*this[_0x1663ec(0x55a)]);if(this['hp']>0x0)this[_0x1663ec(0x3fe)](_0x3710eb);if(this['mp']>0x0)this[_0x1663ec(0x4bb)](_0x42e91e);},Game_Actor['prototype'][_0x510241(0x374)]=function(){const _0x4e7b67=_0x510241,_0x58ff50=this[_0x4e7b67(0x412)]()[_0x4e7b67(0x535)];for(let _0x551ec6=0x0;_0x551ec6<_0x58ff50;_0x551ec6++){if(_0x4e7b67(0x4f3)!=='PNDkr')return this[_0x4e7b67(0x5b1)]()?this[_0x4e7b67(0x209)]():_0x7c3b96[_0x4e7b67(0x3e5)]['Scene_Shop_sellWindowRect'][_0x4e7b67(0x303)](this);else{if(this[_0x4e7b67(0x356)](_0x551ec6))this['changeEquip'](_0x551ec6,null);}}},Game_Actor[_0x510241(0x4d5)][_0x510241(0x356)]=function(_0x34bd61){const _0x47c875=_0x510241;if(this[_0x47c875(0x578)]()[_0x47c875(0x400)](this['equipSlots']()[_0x34bd61])){if(_0x47c875(0x3b3)!==_0x47c875(0x278))return![];else _0xb2f47[_0x47c875(0x3e5)][_0x47c875(0x68d)][_0x47c875(0x303)](this),this[_0x47c875(0x28b)]()&&this['postCreateCategoryWindowItemsEquipsCore']();}else return this[_0x47c875(0x350)](_0x34bd61);},Game_Actor[_0x510241(0x4d5)]['nonRemovableEtypes']=function(){const _0x27c3c4=_0x510241;return VisuMZ[_0x27c3c4(0x3e5)][_0x27c3c4(0x5b3)]['EquipScene'][_0x27c3c4(0x508)];},Game_Actor[_0x510241(0x4d5)][_0x510241(0x46c)]=function(){const _0x11cbc9=_0x510241,_0x19fbec=this['equipSlots']()['length'];for(let _0x41d52e=0x0;_0x41d52e<_0x19fbec;_0x41d52e++){if(this['isOptimizeEquipOk'](_0x41d52e))this[_0x11cbc9(0x4b7)](_0x41d52e,null);}for(let _0x59e8af=0x0;_0x59e8af<_0x19fbec;_0x59e8af++){if('CwxSg'===_0x11cbc9(0x5aa)){if(this[_0x11cbc9(0x249)](_0x59e8af))this[_0x11cbc9(0x4b7)](_0x59e8af,this['bestEquipItem'](_0x59e8af));}else return _0x5dfbcd['ItemsEquipsCore'][_0x11cbc9(0x5b3)][_0x11cbc9(0x619)][_0x11cbc9(0x4a5)];}},Game_Actor['prototype'][_0x510241(0x249)]=function(_0x588a5b){const _0x5c57bc=_0x510241;return this[_0x5c57bc(0x3da)]()[_0x5c57bc(0x400)](this[_0x5c57bc(0x412)]()[_0x588a5b])?![]:this['isEquipChangeOk'](_0x588a5b);},Game_Actor[_0x510241(0x4d5)][_0x510241(0x3da)]=function(){const _0x29e49f=_0x510241;return VisuMZ[_0x29e49f(0x3e5)][_0x29e49f(0x5b3)][_0x29e49f(0x619)]['NonOptimizeETypes'];},VisuMZ['ItemsEquipsCore'][_0x510241(0x218)]=Game_Actor['prototype'][_0x510241(0x52f)],Game_Actor[_0x510241(0x4d5)]['tradeItemWithParty']=function(_0x493179,_0x58145a){const _0x1d8387=_0x510241;if(this[_0x1d8387(0x547)])return![];$gameTemp[_0x1d8387(0x2f6)]=!![];const _0x3bc3b9=VisuMZ['ItemsEquipsCore'][_0x1d8387(0x218)][_0x1d8387(0x303)](this,_0x493179,_0x58145a);return $gameTemp['_bypassNewLabel']=![],_0x3bc3b9;},Game_Actor[_0x510241(0x4d5)][_0x510241(0x253)]=function(_0x58233b,_0x41fc7d){const _0x37daf6=_0x510241,_0x7c6ec6=this[_0x37daf6(0x6c8)](_0x58233b);if(_0x7c6ec6<0x0)return;const _0xb39b8=_0x58233b===0x1?$dataWeapons[_0x41fc7d]:$dataArmors[_0x41fc7d];this[_0x37daf6(0x4b7)](_0x7c6ec6,_0xb39b8);},Game_Actor['prototype'][_0x510241(0x6c8)]=function(_0x357fae){const _0x15c8f9=_0x510241;let _0x48a883=0x0;const _0x2a5dff=this[_0x15c8f9(0x412)](),_0x7bbb5=this[_0x15c8f9(0x2fe)]();for(let _0x10a54f=0x0;_0x10a54f<_0x2a5dff['length'];_0x10a54f++){if(_0x2a5dff[_0x10a54f]===_0x357fae){_0x48a883=_0x10a54f;if(!_0x7bbb5[_0x10a54f])return _0x48a883;}}return _0x48a883;},VisuMZ['ItemsEquipsCore'][_0x510241(0x3af)]=Game_Actor[_0x510241(0x4d5)][_0x510241(0x223)],Game_Actor[_0x510241(0x4d5)]['paramPlus']=function(_0xf1a7e3){const _0xe60499=_0x510241;let _0xf04aa3=VisuMZ[_0xe60499(0x3e5)][_0xe60499(0x3af)][_0xe60499(0x303)](this,_0xf1a7e3);for(const _0x3b1693 of this[_0xe60499(0x2fe)]()){if('fDUGu'!==_0xe60499(0x652)){if(_0x3b1693)_0xf04aa3+=this['paramPlusItemsEquipsCoreCustomJS'](_0x3b1693,_0xf1a7e3);}else this['drawEquipData']();}return _0xf04aa3;},Game_Actor[_0x510241(0x4d5)][_0x510241(0x38f)]=function(_0x20dfbf,_0x2b6daa){const _0x8bdc0f=_0x510241;if(this[_0x8bdc0f(0x6a8)])return 0x0;const _0x3c9788=(DataManager[_0x8bdc0f(0x2f3)](_0x20dfbf)?_0x8bdc0f(0x2cb):_0x8bdc0f(0x654))[_0x8bdc0f(0x648)](_0x20dfbf['id']),_0x250063=_0x8bdc0f(0x2c5)['format'](_0x3c9788,_0x2b6daa);if(VisuMZ['ItemsEquipsCore'][_0x8bdc0f(0x30d)][_0x250063]){if('cGmBk'!=='cGmBk'){this[_0x8bdc0f(0x678)](_0x44d863)[_0x8bdc0f(0x6b1)](/\\I\[(\d+)\]/i);const _0x565484=_0x5728c1(_0x7853['$1'])||0x0,_0x48e21f=this[_0x8bdc0f(0x57c)](_0x1462c1),_0x44d64b=_0x48e21f['x']+_0xf50ddc[_0x8bdc0f(0x409)]((_0x48e21f['width']-_0x4ee1d2['iconWidth'])/0x2),_0x4a3937=_0x48e21f['y']+(_0x48e21f[_0x8bdc0f(0x42f)]-_0x4940a6[_0x8bdc0f(0x62e)])/0x2;this['drawIcon'](_0x565484,_0x44d64b,_0x4a3937);}else{this[_0x8bdc0f(0x6a8)]=!![];const _0x5b9a93=VisuMZ['ItemsEquipsCore'][_0x8bdc0f(0x30d)][_0x250063][_0x8bdc0f(0x303)](this,_0x20dfbf,_0x2b6daa);return this[_0x8bdc0f(0x6a8)]=![],_0x5b9a93;}}else return _0x8bdc0f(0x561)==='eoSlH'?_0x4e2cec[_0x8bdc0f(0x3e5)][_0x8bdc0f(0x5b3)][_0x8bdc0f(0x619)]['CommandAddClear']:0x0;},Game_Actor[_0x510241(0x4d5)]['setShopStatusWindowMode']=function(_0x55cd45){const _0x4e9c16=_0x510241;this['_shopStatusMenuMode']=!![],this[_0x4e9c16(0x384)]=_0x55cd45;},VisuMZ['ItemsEquipsCore'][_0x510241(0x5f0)]=Game_Party['prototype'][_0x510241(0x4fb)],Game_Party[_0x510241(0x4d5)][_0x510241(0x4fb)]=function(){const _0x373b9d=_0x510241;VisuMZ[_0x373b9d(0x3e5)]['Game_Party_initialize']['call'](this),this['initNewItemsList']();},Game_Party[_0x510241(0x4d5)]['initNewItemsList']=function(){const _0x17db07=_0x510241;this[_0x17db07(0x29e)]=[];},Game_Party[_0x510241(0x4d5)][_0x510241(0x662)]=function(_0x5a86e4){const _0x5d3ac0=_0x510241;if(!$gameTemp[_0x5d3ac0(0x35e)]())return![];if(this[_0x5d3ac0(0x29e)]===undefined)this[_0x5d3ac0(0x68e)]();let _0x3a80df='';if(DataManager[_0x5d3ac0(0x22f)](_0x5a86e4))_0x3a80df=_0x5d3ac0(0x57b)[_0x5d3ac0(0x648)](_0x5a86e4['id']);else{if(DataManager[_0x5d3ac0(0x2f3)](_0x5a86e4))_0x3a80df='weapon-%1'['format'](_0x5a86e4['id']);else{if(DataManager[_0x5d3ac0(0x417)](_0x5a86e4))_0x3a80df=_0x5d3ac0(0x367)[_0x5d3ac0(0x648)](_0x5a86e4['id']);else return;}}return this['_newItemsList'][_0x5d3ac0(0x400)](_0x3a80df);},Game_Party['prototype'][_0x510241(0x5ef)]=function(_0x30fc19){const _0x3e14d7=_0x510241;if(!$gameTemp[_0x3e14d7(0x35e)]())return;if(this[_0x3e14d7(0x29e)]===undefined)this[_0x3e14d7(0x68e)]();let _0x5033c6='';if(DataManager['isItem'](_0x30fc19))_0x5033c6=_0x3e14d7(0x57b)['format'](_0x30fc19['id']);else{if(DataManager[_0x3e14d7(0x2f3)](_0x30fc19))_0x3e14d7(0x4fd)==='IdnnR'?(this[_0x3e14d7(0x29f)][_0x3e14d7(0x2ca)](),this[_0x3e14d7(0x29f)][_0x3e14d7(0x379)]()):_0x5033c6=_0x3e14d7(0x485)[_0x3e14d7(0x648)](_0x30fc19['id']);else{if(DataManager[_0x3e14d7(0x417)](_0x30fc19))_0x5033c6=_0x3e14d7(0x367)[_0x3e14d7(0x648)](_0x30fc19['id']);else return;}}if(!this[_0x3e14d7(0x29e)][_0x3e14d7(0x400)](_0x5033c6))this[_0x3e14d7(0x29e)][_0x3e14d7(0x4df)](_0x5033c6);},Game_Party['prototype'][_0x510241(0x3e6)]=function(_0x47e719){const _0x238b5d=_0x510241;if(!$gameTemp[_0x238b5d(0x35e)]())return;if(this[_0x238b5d(0x29e)]===undefined)this[_0x238b5d(0x68e)]();let _0x3d5225='';if(DataManager[_0x238b5d(0x22f)](_0x47e719))_0x3d5225=_0x238b5d(0x57b)[_0x238b5d(0x648)](_0x47e719['id']);else{if(DataManager[_0x238b5d(0x2f3)](_0x47e719)){if(_0x238b5d(0x684)===_0x238b5d(0x4d6))return _0x1c352d['uiInputPosition'];else _0x3d5225=_0x238b5d(0x485)[_0x238b5d(0x648)](_0x47e719['id']);}else{if(DataManager[_0x238b5d(0x417)](_0x47e719))_0x3d5225=_0x238b5d(0x367)['format'](_0x47e719['id']);else return;}}this[_0x238b5d(0x29e)]['includes'](_0x3d5225)&&(_0x238b5d(0x472)!==_0x238b5d(0x472)?_0xb2c016[_0x238b5d(0x3e5)][_0x238b5d(0x4fe)][_0x238b5d(0x303)](this):this[_0x238b5d(0x29e)][_0x238b5d(0x539)](this[_0x238b5d(0x29e)][_0x238b5d(0x693)](_0x3d5225),0x1));},VisuMZ[_0x510241(0x3e5)]['Game_Party_numItems']=Game_Party['prototype'][_0x510241(0x505)],Game_Party['prototype']['numItems']=function(_0x127332){const _0x3e8f7a=_0x510241;if(DataManager['isProxyItem'](_0x127332))_0x127332=DataManager[_0x3e8f7a(0x26e)](_0x127332);return VisuMZ[_0x3e8f7a(0x3e5)][_0x3e8f7a(0x2b4)][_0x3e8f7a(0x303)](this,_0x127332);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x2ad)]=Game_Party['prototype']['gainItem'],Game_Party[_0x510241(0x4d5)]['gainItem']=function(_0xec2919,_0x32a7ac,_0x2c2aa0){const _0x2d9123=_0x510241;if(DataManager[_0x2d9123(0x45c)](_0xec2919))_0xec2919=null;const _0xbc8b83=this[_0x2d9123(0x505)](_0xec2919);VisuMZ[_0x2d9123(0x3e5)][_0x2d9123(0x2ad)][_0x2d9123(0x303)](this,_0xec2919,_0x32a7ac,_0x2c2aa0);if(this['numItems'](_0xec2919)>_0xbc8b83)this[_0x2d9123(0x5ef)](_0xec2919);},Game_Party[_0x510241(0x4d5)][_0x510241(0x327)]=function(_0xc5bd7c){const _0x628bc1=_0x510241;if(DataManager['isProxyItem'](_0xc5bd7c))_0xc5bd7c=DataManager[_0x628bc1(0x26e)](_0xc5bd7c);return DataManager[_0x628bc1(0x4e7)](_0xc5bd7c);},VisuMZ[_0x510241(0x3e5)]['Scene_ItemBase_activateItemWindow']=Scene_ItemBase['prototype']['activateItemWindow'],Scene_ItemBase[_0x510241(0x4d5)]['activateItemWindow']=function(){const _0x4b53b3=_0x510241;VisuMZ[_0x4b53b3(0x3e5)][_0x4b53b3(0x340)]['call'](this),this[_0x4b53b3(0x5a2)][_0x4b53b3(0x510)]();},Scene_Item[_0x510241(0x4d5)][_0x510241(0x25f)]=function(){const _0x1cc116=_0x510241;if(ConfigManager[_0x1cc116(0x260)]&&ConfigManager[_0x1cc116(0x541)]!==undefined)return _0x1cc116(0x63d)!=='UTkSs'?this[_0x1cc116(0x5b1)]()?this[_0x1cc116(0x5f8)]():_0x544258[_0x1cc116(0x3e5)]['Scene_Item_helpWindowRect']['call'](this):ConfigManager[_0x1cc116(0x541)];else{if(this[_0x1cc116(0x5b1)]())return this[_0x1cc116(0x229)]()['match'](/LOWER/i);else Scene_ItemBase[_0x1cc116(0x4d5)]['isRightInputMode'][_0x1cc116(0x303)](this);}},Scene_Item[_0x510241(0x4d5)][_0x510241(0x2ef)]=function(){const _0x3ad551=_0x510241;if(ConfigManager[_0x3ad551(0x260)]&&ConfigManager[_0x3ad551(0x6d8)]!==undefined)return ConfigManager[_0x3ad551(0x6d8)];else{if(this[_0x3ad551(0x5b1)]())return'dNMGW'!==_0x3ad551(0x6cf)?this[_0x3ad551(0x229)]()[_0x3ad551(0x6b1)](/RIGHT/i):_0x61c5[_0x3ad551(0x4d5)][_0x3ad551(0x3fd)]['call'](this,_0xc8d2f9);else Scene_ItemBase[_0x3ad551(0x4d5)][_0x3ad551(0x2ef)][_0x3ad551(0x303)](this);}},Scene_Item[_0x510241(0x4d5)][_0x510241(0x229)]=function(){const _0x478e4a=_0x510241;return VisuMZ['ItemsEquipsCore']['Settings']['ItemScene'][_0x478e4a(0x256)];},Scene_Item[_0x510241(0x4d5)][_0x510241(0x28b)]=function(){const _0xc96ede=_0x510241;return this[_0xc96ede(0x5b8)]&&this[_0xc96ede(0x5b8)]['isUseModernControls']();},Scene_Item[_0x510241(0x4d5)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x3f507d=_0x510241;return VisuMZ[_0x3f507d(0x3e5)][_0x3f507d(0x5b3)][_0x3f507d(0x534)][_0x3f507d(0x3f6)];},VisuMZ[_0x510241(0x3e5)]['Scene_Item_create']=Scene_Item['prototype'][_0x510241(0x422)],Scene_Item[_0x510241(0x4d5)]['create']=function(){const _0x2dcf5b=_0x510241;VisuMZ[_0x2dcf5b(0x3e5)][_0x2dcf5b(0x4e8)][_0x2dcf5b(0x303)](this),this[_0x2dcf5b(0x28b)]()&&this[_0x2dcf5b(0x4e0)]();},VisuMZ[_0x510241(0x3e5)][_0x510241(0x5c4)]=Scene_Item[_0x510241(0x4d5)][_0x510241(0x32e)],Scene_Item['prototype'][_0x510241(0x32e)]=function(){const _0x19d7ad=_0x510241;if(this[_0x19d7ad(0x5b1)]())return _0x19d7ad(0x54b)===_0x19d7ad(0x54b)?this[_0x19d7ad(0x5f8)]():this[_0x19d7ad(0x5f8)]();else{if(_0x19d7ad(0x591)!=='OOLCD')_0x13ed18[_0x1aa203]=_0x1521a3[_0x1ff0dd];else return VisuMZ['ItemsEquipsCore'][_0x19d7ad(0x5c4)][_0x19d7ad(0x303)](this);}},Scene_Item['prototype'][_0x510241(0x5f8)]=function(){const _0x421b45=_0x510241,_0x3f7195=0x0,_0x54fab6=this[_0x421b45(0x60d)](),_0x4d4237=Graphics['boxWidth'],_0x596015=this[_0x421b45(0x3ce)]();return new Rectangle(_0x3f7195,_0x54fab6,_0x4d4237,_0x596015);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x68d)]=Scene_Item[_0x510241(0x4d5)][_0x510241(0x404)],Scene_Item[_0x510241(0x4d5)][_0x510241(0x404)]=function(){const _0x5c1296=_0x510241;VisuMZ[_0x5c1296(0x3e5)][_0x5c1296(0x68d)][_0x5c1296(0x303)](this);if(this['isUseModernControls']()){if(_0x5c1296(0x201)!==_0x5c1296(0x3e8))this[_0x5c1296(0x277)]();else return'iconText';}},Scene_Item['prototype'][_0x510241(0x277)]=function(){const _0x26c96f=_0x510241;delete this[_0x26c96f(0x5b8)][_0x26c96f(0x6a2)]['ok'],delete this[_0x26c96f(0x5b8)][_0x26c96f(0x6a2)][_0x26c96f(0x25d)];},VisuMZ[_0x510241(0x3e5)][_0x510241(0x47b)]=Scene_Item[_0x510241(0x4d5)]['categoryWindowRect'],Scene_Item[_0x510241(0x4d5)]['categoryWindowRect']=function(){const _0x9a5440=_0x510241;if(this[_0x9a5440(0x5b1)]())return this[_0x9a5440(0x567)]();else{if(_0x9a5440(0x650)!==_0x9a5440(0x650)){const _0x5ea0d9=this[_0x9a5440(0x43d)]();this[_0x9a5440(0x36b)](_0x5ea0d9,_0x37d947,_0x30a479,_0x454194,!![]);const _0x2bab23=this[_0x9a5440(0x2dd)]();return this[_0x9a5440(0x36b)](_0x2bab23,_0x54346b,_0x2d0fb3,_0x1effdf,![],_0x9a5440(0x4ee)),this['drawItemDarkRect'](_0xc697c4,_0x35295d,_0x9c975f),this[_0x9a5440(0x65c)](),!![];}else return VisuMZ[_0x9a5440(0x3e5)][_0x9a5440(0x47b)][_0x9a5440(0x303)](this);}},Scene_Item['prototype']['categoryWindowRectItemsEquipsCore']=function(){const _0x2cb888=_0x510241,_0xa3a045=0x0,_0x5178bb=this[_0x2cb888(0x2b7)](),_0x1c6b28=Graphics[_0x2cb888(0x6ac)],_0x22791b=this[_0x2cb888(0x420)](0x1,!![]);return new Rectangle(_0xa3a045,_0x5178bb,_0x1c6b28,_0x22791b);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x2af)]=Scene_Item['prototype'][_0x510241(0x49f)],Scene_Item[_0x510241(0x4d5)]['createItemWindow']=function(){const _0x5c47cf=_0x510241;VisuMZ['ItemsEquipsCore'][_0x5c47cf(0x2af)][_0x5c47cf(0x303)](this);if(this['isUseModernControls']()){if(_0x5c47cf(0x590)===_0x5c47cf(0x590))this[_0x5c47cf(0x446)]();else{const _0x3125e0=this[_0x5c47cf(0x418)]();this[_0x5c47cf(0x36b)](_0x3125e0,_0x10b5c4,_0x8d576f,_0xf681f5,!![]);const _0x2a5152=this[_0x5c47cf(0x2d5)]();return this[_0x5c47cf(0x36b)](_0x2a5152,_0x456f44,_0x392117,_0x5a90f8,![],'right'),this['drawItemDarkRect'](_0x628613,_0xfbad9c,_0x5316b5),this['resetFontSettings'](),!![];}}if(this['allowCreateStatusWindow']()){if(_0x5c47cf(0x40a)===_0x5c47cf(0x2be)){const _0x30e2ca=_0x530d72['parse']('['+_0x444fe1['$1'][_0x5c47cf(0x6b1)](/\d+/g)+']');for(const _0xedf7d of _0x30e2ca){if(!_0x1401da[_0x5c47cf(0x5a5)](_0xedf7d))return![];}return!![];}else this[_0x5c47cf(0x4a0)]();}},VisuMZ['ItemsEquipsCore'][_0x510241(0x502)]=Scene_Item[_0x510241(0x4d5)][_0x510241(0x6c3)],Scene_Item[_0x510241(0x4d5)][_0x510241(0x6c3)]=function(){const _0x11af5e=_0x510241;if(this[_0x11af5e(0x5b1)]())return this['itemWindowRectItemsEquipsCore']();else{const _0x463f33=VisuMZ[_0x11af5e(0x3e5)][_0x11af5e(0x502)][_0x11af5e(0x303)](this);if(this['allowCreateStatusWindow']()&&this['adjustItemWidthByStatus']()){if(_0x11af5e(0x316)!==_0x11af5e(0x316)){const _0x121798=this['_commandNameWindow'];_0x121798[_0x11af5e(0x55f)][_0x11af5e(0x389)]();const _0x5d056a=this['commandStyleCheck'](this[_0x11af5e(0x3ed)]());if(_0x5d056a===_0x11af5e(0x46e)){const _0x100d75=this[_0x11af5e(0x57c)](this[_0x11af5e(0x3ed)]());let _0x635c28=this[_0x11af5e(0x678)](this[_0x11af5e(0x3ed)]());_0x635c28=_0x635c28['replace'](/\\I\[(\d+)\]/gi,''),_0x121798[_0x11af5e(0x65c)](),this[_0x11af5e(0x658)](_0x635c28,_0x100d75),this[_0x11af5e(0x2da)](_0x635c28,_0x100d75),this[_0x11af5e(0x53a)](_0x635c28,_0x100d75);}}else _0x463f33[_0x11af5e(0x4e1)]-=this[_0x11af5e(0x314)]();}return _0x463f33;}},Scene_Item['prototype'][_0x510241(0x4b5)]=function(){const _0x282caf=_0x510241,_0x3dfd20=this[_0x282caf(0x2ef)]()?this[_0x282caf(0x314)]():0x0,_0x4eb0f0=this['_categoryWindow']['y']+this[_0x282caf(0x5b8)]['height'],_0x50fd88=Graphics[_0x282caf(0x6ac)]-this['statusWidth'](),_0x20f95a=this[_0x282caf(0x61e)]()-_0x4eb0f0;return new Rectangle(_0x3dfd20,_0x4eb0f0,_0x50fd88,_0x20f95a);},Scene_Item[_0x510241(0x4d5)][_0x510241(0x446)]=function(){const _0x354d2e=_0x510241;this[_0x354d2e(0x5a2)]['setHandler'](_0x354d2e(0x25d),this[_0x354d2e(0x31e)][_0x354d2e(0x4a1)](this));},Scene_Item['prototype'][_0x510241(0x242)]=function(){const _0x230790=_0x510241;return this[_0x230790(0x5b1)]()?!![]:VisuMZ[_0x230790(0x3e5)][_0x230790(0x5b3)]['ItemScene'][_0x230790(0x2aa)];},Scene_Item['prototype']['adjustItemWidthByStatus']=function(){const _0x3fe113=_0x510241;return VisuMZ[_0x3fe113(0x3e5)]['Settings'][_0x3fe113(0x534)]['ItemSceneAdjustItemList'];},Scene_Item['prototype'][_0x510241(0x4a0)]=function(){const _0x88537a=_0x510241,_0x5806da=this[_0x88537a(0x2a7)]();this['_statusWindow']=new Window_ShopStatus(_0x5806da),this[_0x88537a(0x29b)](this[_0x88537a(0x264)]),this[_0x88537a(0x5a2)][_0x88537a(0x3ad)](this[_0x88537a(0x264)]);const _0x3ff2ef=VisuMZ['ItemsEquipsCore'][_0x88537a(0x5b3)][_0x88537a(0x534)]['ItemMenuStatusBgType'];this[_0x88537a(0x264)]['setBackgroundType'](_0x3ff2ef||0x0);},Scene_Item[_0x510241(0x4d5)][_0x510241(0x2a7)]=function(){const _0x47e73c=_0x510241;if(this[_0x47e73c(0x5b1)]()){if(_0x47e73c(0x452)==='FmmXc')return this[_0x47e73c(0x673)]();else{this[_0x47e73c(0x65c)]();const _0x65d1cd=_0x4b8a79['ItemsEquipsCore'][_0x47e73c(0x5b3)][_0x47e73c(0x534)],_0x464547=_0x65d1cd['ItemQuantityFmt'],_0x413bac=_0x464547['format'](_0x157333[_0x47e73c(0x505)](_0xd58c90));this[_0x47e73c(0x55f)][_0x47e73c(0x222)]=_0x65d1cd[_0x47e73c(0x6b7)],this['drawText'](_0x413bac,_0x2e9027,_0x155f40,_0xe6cd7a,'right'),this['resetFontSettings']();}}else return VisuMZ['ItemsEquipsCore'][_0x47e73c(0x5b3)][_0x47e73c(0x534)][_0x47e73c(0x532)][_0x47e73c(0x303)](this);},Scene_Item[_0x510241(0x4d5)]['statusWindowRectItemsEquipsCore']=function(){const _0x36ecc5=_0x510241,_0x223d9c=this['statusWidth'](),_0x2fc4e2=this[_0x36ecc5(0x5a2)][_0x36ecc5(0x42f)],_0x2e2d8d=this[_0x36ecc5(0x2ef)]()?0x0:Graphics['boxWidth']-this[_0x36ecc5(0x314)](),_0x513c4e=this['_itemWindow']['y'];return new Rectangle(_0x2e2d8d,_0x513c4e,_0x223d9c,_0x2fc4e2);},Scene_Item[_0x510241(0x4d5)][_0x510241(0x314)]=function(){const _0x4362dd=_0x510241;return Scene_Shop[_0x4362dd(0x4d5)][_0x4362dd(0x314)]();},Scene_Item['prototype'][_0x510241(0x63f)]=function(){const _0x2635af=_0x510241;if(!this[_0x2635af(0x229)]())return![];if(!this[_0x2635af(0x28b)]())return![];if(!this[_0x2635af(0x5a2)])return![];if(!this[_0x2635af(0x5a2)][_0x2635af(0x402)])return![];return this['updatedLayoutStyle']()&&this['isUseModernControls']();},Scene_Item[_0x510241(0x4d5)][_0x510241(0x44d)]=function(){const _0x3785ff=_0x510241;if(this[_0x3785ff(0x63f)]())return this['_itemWindow'][_0x3785ff(0x1ee)]()===0x1?TextManager[_0x3785ff(0x41a)](_0x3785ff(0x45b),'right'):TextManager[_0x3785ff(0x41a)]('pageup','pagedown');return Scene_ItemBase[_0x3785ff(0x4d5)][_0x3785ff(0x44d)][_0x3785ff(0x303)](this);},Scene_Item[_0x510241(0x4d5)]['buttonAssistText1']=function(){const _0x355cb9=_0x510241;if(this[_0x355cb9(0x63f)]())return VisuMZ[_0x355cb9(0x3e5)][_0x355cb9(0x5b3)][_0x355cb9(0x534)][_0x355cb9(0x47e)];return Scene_ItemBase['prototype'][_0x355cb9(0x668)][_0x355cb9(0x303)](this);},Scene_Equip['prototype'][_0x510241(0x25f)]=function(){const _0x53d07f=_0x510241;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x53d07f(0x541)]!==undefined)return ConfigManager[_0x53d07f(0x541)];else{if(this[_0x53d07f(0x5b1)]())return this[_0x53d07f(0x229)]()['match'](/LOWER/i);else Scene_MenuBase[_0x53d07f(0x4d5)][_0x53d07f(0x2ef)][_0x53d07f(0x303)](this);}},Scene_Equip[_0x510241(0x4d5)][_0x510241(0x2ef)]=function(){const _0x3bb051=_0x510241;if(ConfigManager[_0x3bb051(0x260)]&&ConfigManager[_0x3bb051(0x6d8)]!==undefined)return ConfigManager['uiInputPosition'];else{if(this[_0x3bb051(0x5b1)]())return this[_0x3bb051(0x229)]()[_0x3bb051(0x6b1)](/RIGHT/i);else{if(_0x3bb051(0x448)===_0x3bb051(0x576)){const _0x47bb93=_0x4606df(_0x39d806['$1'])[_0x3bb051(0x569)](),_0x1fae1a=_0x5de56c(_0x597f56['$2']);switch(_0x47bb93){case'>':return _0x3a7d52[_0x3bb051(0x421)]>_0x1fae1a;case'>=':return _0x571f30[_0x3bb051(0x421)]>=_0x1fae1a;case _0x3bb051(0x51b):return _0x47702f['level']===_0x1fae1a;case'<=':return _0xea6b28[_0x3bb051(0x421)]<=_0x1fae1a;case'<':return _0x20c07c[_0x3bb051(0x421)]<_0x1fae1a;}return![];}else Scene_MenuBase[_0x3bb051(0x4d5)]['isRightInputMode']['call'](this);}}},Scene_Equip[_0x510241(0x4d5)]['updatedLayoutStyle']=function(){const _0x41d07d=_0x510241;return VisuMZ['ItemsEquipsCore'][_0x41d07d(0x5b3)]['EquipScene'][_0x41d07d(0x256)];},Scene_Equip['prototype'][_0x510241(0x28b)]=function(){const _0x997cca=_0x510241;return this[_0x997cca(0x29f)]&&this[_0x997cca(0x29f)][_0x997cca(0x28b)]();},Scene_Equip[_0x510241(0x4d5)][_0x510241(0x5b1)]=function(){const _0x3e8a2f=_0x510241;return VisuMZ[_0x3e8a2f(0x3e5)]['Settings'][_0x3e8a2f(0x619)][_0x3e8a2f(0x3f6)];},VisuMZ['ItemsEquipsCore']['Scene_Equip_create']=Scene_Equip[_0x510241(0x4d5)][_0x510241(0x422)],Scene_Equip[_0x510241(0x4d5)][_0x510241(0x422)]=function(){const _0x558d9f=_0x510241;VisuMZ['ItemsEquipsCore'][_0x558d9f(0x4d4)][_0x558d9f(0x303)](this),this[_0x558d9f(0x28b)]()&&(_0x558d9f(0x3a2)===_0x558d9f(0x463)?this[_0x558d9f(0x2b3)]():this[_0x558d9f(0x2b3)]());},VisuMZ['ItemsEquipsCore'][_0x510241(0x5ae)]=Scene_Equip[_0x510241(0x4d5)][_0x510241(0x32e)],Scene_Equip['prototype'][_0x510241(0x32e)]=function(){const _0x200d45=_0x510241;return this[_0x200d45(0x5b1)]()?this[_0x200d45(0x5f8)]():VisuMZ[_0x200d45(0x3e5)][_0x200d45(0x5ae)][_0x200d45(0x303)](this);},Scene_Equip[_0x510241(0x4d5)][_0x510241(0x5f8)]=function(){const _0x1627fb=_0x510241,_0x35b952=0x0,_0x1c89bb=this[_0x1627fb(0x60d)](),_0x4b5abe=Graphics[_0x1627fb(0x6ac)],_0x4d9ad8=this['helpAreaHeight']();return new Rectangle(_0x35b952,_0x1c89bb,_0x4b5abe,_0x4d9ad8);},VisuMZ['ItemsEquipsCore']['Scene_Equip_statusWindowRect']=Scene_Equip[_0x510241(0x4d5)][_0x510241(0x2a7)],Scene_Equip[_0x510241(0x4d5)][_0x510241(0x2a7)]=function(){const _0x21cdc7=_0x510241;return this[_0x21cdc7(0x5b1)]()?this[_0x21cdc7(0x673)]():VisuMZ['ItemsEquipsCore']['Scene_Equip_statusWindowRect']['call'](this);},Scene_Equip[_0x510241(0x4d5)][_0x510241(0x673)]=function(){const _0x433801=_0x510241,_0x326c1e=this[_0x433801(0x2ef)]()?0x0:Graphics[_0x433801(0x6ac)]-this['statusWidth'](),_0x31a648=this[_0x433801(0x2b7)](),_0x51cf37=this[_0x433801(0x314)](),_0x32b51f=this[_0x433801(0x2e9)]();return new Rectangle(_0x326c1e,_0x31a648,_0x51cf37,_0x32b51f);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x450)]=Scene_Equip['prototype'][_0x510241(0x28a)],Scene_Equip[_0x510241(0x4d5)][_0x510241(0x28a)]=function(){const _0x3c8e1b=_0x510241;VisuMZ[_0x3c8e1b(0x3e5)][_0x3c8e1b(0x450)][_0x3c8e1b(0x303)](this);if(this[_0x3c8e1b(0x6bc)])this['_commandWindow']['setHelpWindow'](this['_helpWindow']);},VisuMZ['ItemsEquipsCore']['Scene_Equip_commandWindowRect']=Scene_Equip[_0x510241(0x4d5)]['commandWindowRect'],Scene_Equip[_0x510241(0x4d5)]['commandWindowRect']=function(){const _0x1a4bb7=_0x510241;return this[_0x1a4bb7(0x5b1)]()?this[_0x1a4bb7(0x2d0)]():'mLaOv'!==_0x1a4bb7(0x5ab)?VisuMZ[_0x1a4bb7(0x3e5)]['Scene_Equip_commandWindowRect'][_0x1a4bb7(0x303)](this):_0x269ee5[_0x1a4bb7(0x3e5)][_0x1a4bb7(0x5b3)][_0x1a4bb7(0x64b)]['LabelSpeed'];},Scene_Equip[_0x510241(0x4d5)]['shouldCommandWindowExist']=function(){const _0x4ea068=_0x510241,_0x197c08=VisuMZ[_0x4ea068(0x3e5)][_0x4ea068(0x5b3)][_0x4ea068(0x619)];return _0x197c08[_0x4ea068(0x4a5)]||_0x197c08[_0x4ea068(0x67b)];},Scene_Equip[_0x510241(0x4d5)][_0x510241(0x2d0)]=function(){const _0x5a4334=_0x510241,_0x99d4fd=this[_0x5a4334(0x352)](),_0x4eafc8=this['isRightInputMode']()?this['statusWidth']():0x0,_0x5ee1c2=this[_0x5a4334(0x2b7)](),_0xb28920=Graphics[_0x5a4334(0x6ac)]-this['statusWidth'](),_0x2c379d=_0x99d4fd?this['calcWindowHeight'](0x1,!![]):0x0;return new Rectangle(_0x4eafc8,_0x5ee1c2,_0xb28920,_0x2c379d);},VisuMZ[_0x510241(0x3e5)]['Scene_Equip_createSlotWindow']=Scene_Equip[_0x510241(0x4d5)][_0x510241(0x318)],Scene_Equip[_0x510241(0x4d5)][_0x510241(0x318)]=function(){const _0x8946b8=_0x510241;VisuMZ[_0x8946b8(0x3e5)]['Scene_Equip_createSlotWindow'][_0x8946b8(0x303)](this),this['isUseModernControls']()&&this[_0x8946b8(0x330)]();},VisuMZ[_0x510241(0x3e5)]['Scene_Equip_slotWindowRect']=Scene_Equip['prototype'][_0x510241(0x667)],Scene_Equip[_0x510241(0x4d5)]['slotWindowRect']=function(){const _0x30eba5=_0x510241;if(this[_0x30eba5(0x5b1)]())return this[_0x30eba5(0x65e)]();else{if(_0x30eba5(0x5f4)==='YupKY'){_0x30dd85[_0x30eba5(0x4d5)][_0x30eba5(0x510)][_0x30eba5(0x303)](this);if(this[_0x30eba5(0x4cc)])this[_0x30eba5(0x496)]();}else return VisuMZ[_0x30eba5(0x3e5)]['Scene_Equip_slotWindowRect'][_0x30eba5(0x303)](this);}},Scene_Equip[_0x510241(0x4d5)]['slotWindowRectItemsEquipsCore']=function(){const _0x59bf4a=_0x510241,_0x91d9a6=this[_0x59bf4a(0x5bf)](),_0x205af5=this[_0x59bf4a(0x2ef)]()?this['statusWidth']():0x0,_0xecba18=_0x91d9a6['y']+_0x91d9a6['height'],_0x373681=Graphics[_0x59bf4a(0x6ac)]-this[_0x59bf4a(0x314)](),_0x345dd9=this['mainAreaHeight']()-_0x91d9a6[_0x59bf4a(0x42f)];return new Rectangle(_0x205af5,_0xecba18,_0x373681,_0x345dd9);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x287)]=Scene_Equip[_0x510241(0x4d5)]['itemWindowRect'],Scene_Equip[_0x510241(0x4d5)][_0x510241(0x6c3)]=function(){const _0x2f1102=_0x510241;if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x2f1102(0x56a)===_0x2f1102(0x26a))_0x368e7a[_0x2f1102(0x4d5)][_0x2f1102(0x2a9)][_0x2f1102(0x303)](this,_0x5babdb);else return this[_0x2f1102(0x667)]();}else return VisuMZ[_0x2f1102(0x3e5)]['Scene_Equip_itemWindowRect'][_0x2f1102(0x303)](this);},Scene_Equip['prototype'][_0x510241(0x314)]=function(){const _0x57100e=_0x510241;return this[_0x57100e(0x5b1)]()?this[_0x57100e(0x6a5)]():VisuMZ[_0x57100e(0x3e5)]['Settings'][_0x57100e(0x619)][_0x57100e(0x3f9)];},Scene_Equip['prototype']['geUpdatedLayoutStatusWidth']=function(){const _0x445681=_0x510241;return Math['floor'](Graphics[_0x445681(0x6ac)]/0x2);},Scene_Equip['prototype'][_0x510241(0x330)]=function(){const _0x58ec6a=_0x510241;this['_slotWindow'][_0x58ec6a(0x482)](_0x58ec6a(0x25d),this[_0x58ec6a(0x31e)][_0x58ec6a(0x4a1)](this)),this[_0x58ec6a(0x61d)][_0x58ec6a(0x482)](_0x58ec6a(0x473),this[_0x58ec6a(0x208)][_0x58ec6a(0x4a1)](this)),this[_0x58ec6a(0x61d)][_0x58ec6a(0x482)](_0x58ec6a(0x697),this[_0x58ec6a(0x556)][_0x58ec6a(0x4a1)](this));},VisuMZ['ItemsEquipsCore']['Scene_Equip_commandEquip']=Scene_Equip['prototype']['commandEquip'],Scene_Equip[_0x510241(0x4d5)][_0x510241(0x2b3)]=function(){const _0xe677f6=_0x510241;this[_0xe677f6(0x28b)]()&&(this['_commandWindow'][_0xe677f6(0x2ca)](),this['_commandWindow']['deactivate']()),VisuMZ[_0xe677f6(0x3e5)][_0xe677f6(0x5c6)][_0xe677f6(0x303)](this);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x240)]=Scene_Equip[_0x510241(0x4d5)][_0x510241(0x3fc)],Scene_Equip['prototype'][_0x510241(0x3fc)]=function(){const _0x24ac80=_0x510241;this[_0x24ac80(0x61d)][_0x24ac80(0x3ed)]()>=0x0?_0x24ac80(0x489)===_0x24ac80(0x6d6)?(_0x4705d9(_0x24ac80(0x3d3)['format'](_0x56192d,_0x1e1849)),_0x2c87cf['exit']()):(VisuMZ[_0x24ac80(0x3e5)]['Scene_Equip_onSlotOk'][_0x24ac80(0x303)](this),this['onSlotOkAutoSelect']()):(this[_0x24ac80(0x61d)][_0x24ac80(0x36e)](0x0),this[_0x24ac80(0x61d)][_0x24ac80(0x24b)]());},Scene_Equip[_0x510241(0x4d5)][_0x510241(0x44f)]=function(){const _0xe6059c=_0x510241;this[_0xe6059c(0x5a2)][_0xe6059c(0x36f)]();const _0x35847d=this[_0xe6059c(0x61d)]['item'](),_0x3757bb=this['_itemWindow'][_0xe6059c(0x3db)][_0xe6059c(0x693)](_0x35847d),_0x43fd61=Math['floor'](this['_itemWindow'][_0xe6059c(0x39b)]()/0x2)-0x1;this[_0xe6059c(0x5a2)][_0xe6059c(0x36e)](_0x3757bb>=0x0?_0x3757bb:0x0);if(this[_0xe6059c(0x5a2)][_0xe6059c(0x2ae)]>0x1){if('mGzVC'!=='FmQhZ')this[_0xe6059c(0x5a2)][_0xe6059c(0x2ae)]=0x1,this[_0xe6059c(0x5a2)]['updateSmoothScroll']();else{const _0xe560a1=_0x4f0e6c[_0xe6059c(0x4bd)](this);_0xe560a1[_0xe6059c(0x547)]=!![],_0x50dc4c[_0xe6059c(0x3e5)][_0xe6059c(0x2e7)][_0xe6059c(0x303)](this,_0x4e4855,_0x41507e),this[_0xe6059c(0x396)](_0xe560a1);}}this[_0xe6059c(0x5a2)][_0xe6059c(0x391)](this['_itemWindow'][_0xe6059c(0x3ed)]()-_0x43fd61);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x3eb)]=Scene_Equip['prototype'][_0x510241(0x5a1)],Scene_Equip['prototype'][_0x510241(0x5a1)]=function(){const _0x2cf301=_0x510241;VisuMZ[_0x2cf301(0x3e5)]['Scene_Equip_onSlotCancel']['call'](this),this[_0x2cf301(0x28b)]()&&(this[_0x2cf301(0x29f)][_0x2cf301(0x36e)](0x0),this[_0x2cf301(0x61d)]['deactivate']());},VisuMZ[_0x510241(0x3e5)]['Scene_Equip_onActorChange']=Scene_Equip[_0x510241(0x4d5)][_0x510241(0x310)],Scene_Equip[_0x510241(0x4d5)]['onActorChange']=function(){const _0x544f53=_0x510241;VisuMZ[_0x544f53(0x3e5)][_0x544f53(0x586)]['call'](this),this[_0x544f53(0x28b)]()&&(this[_0x544f53(0x29f)][_0x544f53(0x379)](),this[_0x544f53(0x29f)][_0x544f53(0x2ca)](),this[_0x544f53(0x61d)][_0x544f53(0x36e)](0x0),this['_slotWindow'][_0x544f53(0x24b)]());},Scene_Equip['prototype']['buttonAssistSlotWindowShift']=function(){const _0x427fbb=_0x510241;if(!this[_0x427fbb(0x61d)])return![];if(!this[_0x427fbb(0x61d)][_0x427fbb(0x402)])return![];return this[_0x427fbb(0x61d)][_0x427fbb(0x32a)]();},Scene_Equip[_0x510241(0x4d5)][_0x510241(0x5eb)]=function(){const _0x49f7f5=_0x510241;if(this[_0x49f7f5(0x359)]())return _0x49f7f5(0x54e)===_0x49f7f5(0x54e)?TextManager[_0x49f7f5(0x2b9)](_0x49f7f5(0x5c8)):_0x49f7f5(0x411);return Scene_MenuBase[_0x49f7f5(0x4d5)][_0x49f7f5(0x5eb)]['call'](this);},Scene_Equip[_0x510241(0x4d5)][_0x510241(0x663)]=function(){const _0x34231e=_0x510241;if(this[_0x34231e(0x359)]()){if(_0x34231e(0x3c5)==='WLwJp')_0x271767(_0x13cbbe);else return VisuMZ['ItemsEquipsCore'][_0x34231e(0x5b3)][_0x34231e(0x619)][_0x34231e(0x236)];}return Scene_MenuBase['prototype'][_0x34231e(0x663)][_0x34231e(0x303)](this);},Scene_Equip[_0x510241(0x4d5)][_0x510241(0x401)]=function(){const _0x443ed4=_0x510241;if(this['buttonAssistSlotWindowShift']()){if(_0x443ed4(0x66f)!==_0x443ed4(0x66f))this[_0x443ed4(0x41e)]();else return this[_0x443ed4(0x382)]['width']/0x5/-0x3;}return Scene_MenuBase[_0x443ed4(0x4d5)][_0x443ed4(0x401)]['call'](this);},Scene_Equip[_0x510241(0x4d5)]['popScene']=function(){const _0x51b0a9=_0x510241;SceneManager[_0x51b0a9(0x286)]();},VisuMZ[_0x510241(0x3e5)][_0x510241(0x4e2)]=Scene_Load[_0x510241(0x4d5)][_0x510241(0x5f7)],Scene_Load[_0x510241(0x4d5)]['reloadMapIfUpdated']=function(){const _0x155c2d=_0x510241;VisuMZ[_0x155c2d(0x3e5)][_0x155c2d(0x4e2)][_0x155c2d(0x303)](this),this[_0x155c2d(0x204)]();},Scene_Load[_0x510241(0x4d5)][_0x510241(0x204)]=function(){const _0x2dca90=_0x510241;if($gameSystem[_0x2dca90(0x4a7)]()!==$dataSystem[_0x2dca90(0x4a7)])for(const _0xaee77e of $gameActors[_0x2dca90(0x3db)]){if('ZSBHl'===_0x2dca90(0x61a)){if(_0xaee77e)_0xaee77e[_0x2dca90(0x5df)]();}else this[_0x2dca90(0x258)]=!![];}},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x25f)]=function(){const _0x2d9637=_0x510241;if(ConfigManager[_0x2d9637(0x260)]&&ConfigManager['uiHelpPosition']!==undefined)return ConfigManager[_0x2d9637(0x541)];else{if(this[_0x2d9637(0x5b1)]()){if(_0x2d9637(0x2f2)!==_0x2d9637(0x2f2))return;else return this[_0x2d9637(0x229)]()[_0x2d9637(0x6b1)](/LOWER/i);}else'EJzrp'===_0x2d9637(0x297)?Scene_MenuBase['prototype']['isRightInputMode']['call'](this):(_0x58b5ae['ItemsEquipsCore']['Scene_Equip_onActorChange'][_0x2d9637(0x303)](this),this[_0x2d9637(0x28b)]()&&(this[_0x2d9637(0x29f)][_0x2d9637(0x379)](),this[_0x2d9637(0x29f)]['deselect'](),this[_0x2d9637(0x61d)][_0x2d9637(0x36e)](0x0),this[_0x2d9637(0x61d)][_0x2d9637(0x24b)]()));}},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x2ef)]=function(){const _0x1e6fc0=_0x510241;if(ConfigManager[_0x1e6fc0(0x260)]&&ConfigManager[_0x1e6fc0(0x6d8)]!==undefined)return ConfigManager[_0x1e6fc0(0x6d8)];else{if(this[_0x1e6fc0(0x5b1)]())return this['updatedLayoutStyle']()[_0x1e6fc0(0x6b1)](/RIGHT/i);else Scene_MenuBase[_0x1e6fc0(0x4d5)][_0x1e6fc0(0x2ef)]['call'](this);}},Scene_Shop['prototype'][_0x510241(0x229)]=function(){const _0x32b077=_0x510241;return VisuMZ[_0x32b077(0x3e5)][_0x32b077(0x5b3)]['ShopScene'][_0x32b077(0x256)];},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x28b)]=function(){const _0x20bdc4=_0x510241;return this['_categoryWindow']&&this[_0x20bdc4(0x5b8)][_0x20bdc4(0x28b)]();},Scene_Shop['prototype'][_0x510241(0x5b1)]=function(){const _0xa52eb2=_0x510241;return VisuMZ[_0xa52eb2(0x3e5)][_0xa52eb2(0x5b3)]['ShopScene'][_0xa52eb2(0x3f6)];},VisuMZ[_0x510241(0x3e5)][_0x510241(0x49a)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x343)],Scene_Shop[_0x510241(0x4d5)]['prepare']=function(_0x285bf7,_0x2360ed){const _0x4588bd=_0x510241;_0x285bf7=JsonEx[_0x4588bd(0x4bd)](_0x285bf7),VisuMZ[_0x4588bd(0x3e5)][_0x4588bd(0x49a)][_0x4588bd(0x303)](this,_0x285bf7,_0x2360ed),this[_0x4588bd(0x61f)]();},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x61f)]=function(){const _0x1cf23b=_0x510241;this[_0x1cf23b(0x212)]=0x0;const _0x575353=[];for(const _0x4a44e5 of this[_0x1cf23b(0x6bd)]){this[_0x1cf23b(0x392)](_0x4a44e5)?this['_goodsCount']++:_0x575353['push'](_0x4a44e5);}for(const _0x34cec6 of _0x575353){this[_0x1cf23b(0x6bd)][_0x1cf23b(0x2ed)](_0x34cec6);}},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x392)]=function(_0x58a6be){const _0x595178=_0x510241;if(_0x58a6be[0x0]>0x2||_0x58a6be[0x0]<0x0)return![];const _0x1d61e9=[$dataItems,$dataWeapons,$dataArmors][_0x58a6be[0x0]][_0x58a6be[0x1]];if(!_0x1d61e9)return![];const _0x29e6da=_0x1d61e9['note']||'';if(_0x29e6da[_0x595178(0x6b1)](/<SHOW SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('BMKYJ'!==_0x595178(0x3c4)){const _0x2ad98c=_0x2007d1[_0x595178(0x312)]('['+_0x2da1df['$1'][_0x595178(0x6b1)](/\d+/g)+']');for(const _0x5745bb of _0x2ad98c){if(!_0x23a2b2[_0x595178(0x5a5)](_0x5745bb))return!![];}return![];}else{const _0x21221f=JSON[_0x595178(0x312)]('['+RegExp['$1'][_0x595178(0x6b1)](/\d+/g)+']');for(const _0x3e567d of _0x21221f){if(!$gameSwitches[_0x595178(0x5a5)](_0x3e567d))return![];}return!![];}}if(_0x29e6da['match'](/<SHOW SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x15384b=JSON[_0x595178(0x312)]('['+RegExp['$1'][_0x595178(0x6b1)](/\d+/g)+']');for(const _0x14445b of _0x15384b){if(!$gameSwitches['value'](_0x14445b))return![];}return!![];}if(_0x29e6da['match'](/<SHOW SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2515d2=JSON[_0x595178(0x312)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0xe81ce2 of _0x2515d2){if($gameSwitches['value'](_0xe81ce2))return!![];}return![];}if(_0x29e6da[_0x595178(0x6b1)](/<HIDE SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('uMLox'==='hlPod')this[_0x595178(0x69a)](_0x3d98be['isTriggered'](_0x595178(0x4ee)));else{const _0x2a4860=JSON['parse']('['+RegExp['$1'][_0x595178(0x6b1)](/\d+/g)+']');for(const _0x46295f of _0x2a4860){if(!$gameSwitches[_0x595178(0x5a5)](_0x46295f))return!![];}return![];}}if(_0x29e6da[_0x595178(0x6b1)](/<HIDE SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('aQDPA'!==_0x595178(0x6d5)){const _0x533038=JSON[_0x595178(0x312)]('['+RegExp['$1'][_0x595178(0x6b1)](/\d+/g)+']');for(const _0x4f8c87 of _0x533038){if(_0x595178(0x1f7)!==_0x595178(0x1f7))return _0xc34650[_0x595178(0x3e5)][_0x595178(0x5c4)]['call'](this);else{if(!$gameSwitches[_0x595178(0x5a5)](_0x4f8c87))return!![];}}return![];}else{const _0x450571=_0x523550['ItemsEquipsCore'][_0x595178(0x5b3)][_0x595178(0x64b)][_0x595178(0x603)];return _0x450571[_0x595178(0x648)](_0x4286db['tp']);}}if(_0x29e6da[_0x595178(0x6b1)](/<HIDE SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x573fcf=JSON[_0x595178(0x312)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x489c9f of _0x573fcf){if(_0x595178(0x1fb)!==_0x595178(0x1fb))this[_0x595178(0x410)](),this[_0x595178(0x50e)](),this[_0x595178(0x4e4)]();else{if($gameSwitches[_0x595178(0x5a5)](_0x489c9f))return![];}}return!![];}return!![];},VisuMZ[_0x510241(0x3e5)][_0x510241(0x34e)]=Scene_Shop['prototype'][_0x510241(0x422)],Scene_Shop['prototype']['create']=function(){const _0x287a3d=_0x510241;VisuMZ[_0x287a3d(0x3e5)][_0x287a3d(0x34e)][_0x287a3d(0x303)](this),this[_0x287a3d(0x5b1)]()&&this['postCreateItemsEquipsCore'](),this[_0x287a3d(0x21b)]();},Scene_Shop['prototype'][_0x510241(0x434)]=function(){const _0x3a32b7=_0x510241;this[_0x3a32b7(0x342)][_0x3a32b7(0x5bd)](),this[_0x3a32b7(0x4b0)]['show'](),this[_0x3a32b7(0x4b0)][_0x3a32b7(0x2ca)](),this['_statusWindow'][_0x3a32b7(0x5ce)]();},VisuMZ[_0x510241(0x3e5)]['Scene_Shop_helpWindowRect']=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x32e)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x32e)]=function(){const _0x267df7=_0x510241;return this[_0x267df7(0x5b1)]()?this[_0x267df7(0x5f8)]():VisuMZ[_0x267df7(0x3e5)][_0x267df7(0x523)][_0x267df7(0x303)](this);},Scene_Shop[_0x510241(0x4d5)]['helpWindowRectItemsEquipsCore']=function(){const _0x2def60=_0x510241,_0x22ef83=0x0,_0x187e09=this['helpAreaTop'](),_0x19581c=Graphics[_0x2def60(0x6ac)],_0x223826=this['helpAreaHeight']();return new Rectangle(_0x22ef83,_0x187e09,_0x19581c,_0x223826);},VisuMZ['ItemsEquipsCore'][_0x510241(0x4dc)]=Scene_Shop['prototype'][_0x510241(0x623)],Scene_Shop[_0x510241(0x4d5)]['goldWindowRect']=function(){const _0x20a3a9=_0x510241;return this[_0x20a3a9(0x5b1)]()?this['goldWindowRectItemsEquipsCore']():VisuMZ[_0x20a3a9(0x3e5)][_0x20a3a9(0x4dc)]['call'](this);},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x5e6)]=function(){const _0x2274d7=_0x510241,_0x511651=this[_0x2274d7(0x2a3)](),_0x3c7a6c=this['calcWindowHeight'](0x1,!![]),_0x17f9bb=this[_0x2274d7(0x2ef)]()?0x0:Graphics[_0x2274d7(0x6ac)]-_0x511651,_0x1eb000=this['mainAreaTop']();return new Rectangle(_0x17f9bb,_0x1eb000,_0x511651,_0x3c7a6c);},VisuMZ[_0x510241(0x3e5)]['Scene_Shop_commandWindowRect']=Scene_Shop['prototype'][_0x510241(0x5bf)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x5bf)]=function(){const _0x4340e3=_0x510241;return this[_0x4340e3(0x5b1)]()?this['commandWindowRectItemsEquipsCore']():_0x4340e3(0x1dd)!==_0x4340e3(0x587)?VisuMZ['ItemsEquipsCore'][_0x4340e3(0x45f)][_0x4340e3(0x303)](this):_0x5eb94d[_0x4340e3(0x3e5)][_0x4340e3(0x4e6)][_0x4340e3(0x303)](this);},Scene_Shop['prototype'][_0x510241(0x2d0)]=function(){const _0x381c05=_0x510241,_0x58d84d=this[_0x381c05(0x2ef)]()?this['mainCommandWidth']():0x0,_0x1e3941=this[_0x381c05(0x2b7)](),_0x3b75d7=Graphics[_0x381c05(0x6ac)]-this['mainCommandWidth'](),_0x309770=this[_0x381c05(0x420)](0x1,!![]);return new Rectangle(_0x58d84d,_0x1e3941,_0x3b75d7,_0x309770);},VisuMZ['ItemsEquipsCore'][_0x510241(0x302)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x63a)],Scene_Shop['prototype'][_0x510241(0x63a)]=function(){const _0x56cde8=_0x510241;return this[_0x56cde8(0x5b1)]()?this[_0x56cde8(0x246)]():VisuMZ[_0x56cde8(0x3e5)][_0x56cde8(0x302)][_0x56cde8(0x303)](this);},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x246)]=function(){const _0xf5770f=_0x510241,_0x256f34=this['_commandWindow']['y']+this['_commandWindow'][_0xf5770f(0x42f)],_0x494b6c=Graphics[_0xf5770f(0x6ac)]-this[_0xf5770f(0x314)](),_0x21c9eb=this[_0xf5770f(0x2ef)]()?Graphics['boxWidth']-_0x494b6c:0x0,_0x5939c6=this[_0xf5770f(0x2e9)]()-this['_commandWindow']['height'];return new Rectangle(_0x21c9eb,_0x256f34,_0x494b6c,_0x5939c6);},VisuMZ['ItemsEquipsCore'][_0x510241(0x60f)]=Scene_Shop['prototype']['statusWindowRect'],Scene_Shop[_0x510241(0x4d5)]['statusWindowRect']=function(){const _0x55f077=_0x510241;return this['isUseItemsEquipsCoreUpdatedLayout']()?this['statusWindowRectItemsEquipsCore']():VisuMZ[_0x55f077(0x3e5)]['Scene_Shop_statusWindowRect']['call'](this);},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x673)]=function(){const _0x1c4cc7=_0x510241,_0x4a720d=this[_0x1c4cc7(0x314)](),_0x3a548b=this[_0x1c4cc7(0x2e9)]()-this['_commandWindow'][_0x1c4cc7(0x42f)],_0xeb5d1=this['isRightInputMode']()?0x0:Graphics[_0x1c4cc7(0x6ac)]-_0x4a720d,_0x3dd506=this['_commandWindow']['y']+this[_0x1c4cc7(0x29f)][_0x1c4cc7(0x42f)];return new Rectangle(_0xeb5d1,_0x3dd506,_0x4a720d,_0x3a548b);},VisuMZ['ItemsEquipsCore']['Scene_Shop_buyWindowRect']=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x376)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x376)]=function(){const _0x38cc84=_0x510241;if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x38cc84(0x248)!==_0x38cc84(0x248))_0x3af3a9===this[_0x38cc84(0x3ed)]()&&(this['_doubleTouch']=!![]),this[_0x38cc84(0x24b)](),this['select'](_0x4b53a3);else return this[_0x38cc84(0x39d)]();}else{if(_0x38cc84(0x4b2)===_0x38cc84(0x4b2))return VisuMZ[_0x38cc84(0x3e5)]['Scene_Shop_buyWindowRect']['call'](this);else _0x4f27c5=this[_0x38cc84(0x364)]-_0x39bd49;}},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x39d)]=function(){const _0x46bbea=_0x510241,_0x4cac06=this[_0x46bbea(0x29f)]['y']+this['_commandWindow'][_0x46bbea(0x42f)],_0x2b8b33=Graphics['boxWidth']-this['statusWidth'](),_0x3f9e31=this[_0x46bbea(0x2e9)]()-this['_commandWindow'][_0x46bbea(0x42f)],_0x190f19=this[_0x46bbea(0x2ef)]()?Graphics[_0x46bbea(0x6ac)]-_0x2b8b33:0x0;return new Rectangle(_0x190f19,_0x4cac06,_0x2b8b33,_0x3f9e31);},VisuMZ[_0x510241(0x3e5)]['Scene_Shop_createCategoryWindow']=Scene_Shop[_0x510241(0x4d5)]['createCategoryWindow'],Scene_Shop['prototype']['createCategoryWindow']=function(){const _0x461597=_0x510241;VisuMZ[_0x461597(0x3e5)][_0x461597(0x695)]['call'](this),this[_0x461597(0x28b)]()&&this[_0x461597(0x277)]();},VisuMZ[_0x510241(0x3e5)][_0x510241(0x55b)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x3e2)],Scene_Shop['prototype'][_0x510241(0x3e2)]=function(){const _0x53a4a9=_0x510241;if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x53a4a9(0x4c2)!==_0x53a4a9(0x4c2)){const _0x54b9dc=this[_0x53a4a9(0x505)](_0x4eb2c0);if(_0x54b9dc)this[_0x53a4a9(0x5fb)](_0x352fd0,_0x54b9dc);}else return this[_0x53a4a9(0x567)]();}else return VisuMZ['ItemsEquipsCore'][_0x53a4a9(0x55b)][_0x53a4a9(0x303)](this);},Scene_Shop['prototype'][_0x510241(0x567)]=function(){const _0x498d7d=_0x510241,_0x39a18f=this[_0x498d7d(0x29f)]['y'],_0x4ff5b0=this[_0x498d7d(0x29f)][_0x498d7d(0x4e1)],_0x1a807b=this[_0x498d7d(0x420)](0x1,!![]),_0x2507d5=this[_0x498d7d(0x2ef)]()?Graphics[_0x498d7d(0x6ac)]-_0x4ff5b0:0x0;return new Rectangle(_0x2507d5,_0x39a18f,_0x4ff5b0,_0x1a807b);},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x277)]=function(){const _0x3442b6=_0x510241;delete this[_0x3442b6(0x5b8)][_0x3442b6(0x6a2)]['ok'],delete this[_0x3442b6(0x5b8)]['_handlers']['cancel'];},VisuMZ[_0x510241(0x3e5)][_0x510241(0x528)]=Scene_Shop['prototype'][_0x510241(0x488)],Scene_Shop[_0x510241(0x4d5)]['createSellWindow']=function(){const _0x14dfd7=_0x510241;VisuMZ[_0x14dfd7(0x3e5)][_0x14dfd7(0x528)][_0x14dfd7(0x303)](this),this[_0x14dfd7(0x5b1)]()&&(_0x14dfd7(0x2e2)!==_0x14dfd7(0x2e2)?_0xf0d5aa[_0x14dfd7(0x47a)](_0x45003e[_0x14dfd7(0x290)]()):this['postCreateSellWindowItemsEquipsCore']());},VisuMZ[_0x510241(0x3e5)][_0x510241(0x5cd)]=Scene_Shop[_0x510241(0x4d5)]['sellWindowRect'],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x64f)]=function(){const _0x84a22=_0x510241;return this[_0x84a22(0x5b1)]()?this['sellWindowRectItemsEquipsCore']():VisuMZ[_0x84a22(0x3e5)][_0x84a22(0x5cd)]['call'](this);},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x209)]=function(){const _0x267127=_0x510241,_0x554e21=this['_categoryWindow']['y']+this[_0x267127(0x5b8)]['height'],_0x44b010=Graphics['boxWidth']-this[_0x267127(0x314)](),_0x1f723b=this[_0x267127(0x2e9)]()-this[_0x267127(0x5b8)][_0x267127(0x42f)],_0x52d3a9=this[_0x267127(0x2ef)]()?Graphics['boxWidth']-_0x44b010:0x0;return new Rectangle(_0x52d3a9,_0x554e21,_0x44b010,_0x1f723b);},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x206)]=function(){const _0x5c0a47=_0x510241;this[_0x5c0a47(0x45d)][_0x5c0a47(0x3ad)](this['_statusWindow']);},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x314)]=function(){const _0x3bb86b=_0x510241;return VisuMZ[_0x3bb86b(0x3e5)][_0x3bb86b(0x5b3)]['StatusWindow'][_0x3bb86b(0x363)];},VisuMZ[_0x510241(0x3e5)][_0x510241(0x694)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x1fa)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x1fa)]=function(){const _0x208b65=_0x510241;VisuMZ[_0x208b65(0x3e5)][_0x208b65(0x694)][_0x208b65(0x303)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this['_statusWindow'][_0x208b65(0x5ce)](),this[_0x208b65(0x45d)][_0x208b65(0x306)]();},VisuMZ[_0x510241(0x3e5)][_0x510241(0x4c4)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x475)],Scene_Shop['prototype']['commandBuy']=function(){const _0x4e1a2b=_0x510241;VisuMZ[_0x4e1a2b(0x3e5)]['Scene_Shop_commandBuy']['call'](this),this[_0x4e1a2b(0x5b1)]()&&this[_0x4e1a2b(0x386)]();},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x386)]=function(){const _0x3e4663=_0x510241;this[_0x3e4663(0x20b)]=this[_0x3e4663(0x20b)]||0x0,this[_0x3e4663(0x4b0)][_0x3e4663(0x36e)](this['_buyWindowLastIndex']);},VisuMZ['ItemsEquipsCore'][_0x510241(0x537)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x257)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x257)]=function(){const _0x3647ed=_0x510241;VisuMZ[_0x3647ed(0x3e5)]['Scene_Shop_commandSell'][_0x3647ed(0x303)](this);this[_0x3647ed(0x5b1)]()&&this[_0x3647ed(0x3c1)]();if(this[_0x3647ed(0x28b)]()){if('JnAtG'==='JnAtG')this['_categoryWindow'][_0x3647ed(0x36e)](0x0),this[_0x3647ed(0x4e0)]();else return this[_0x3647ed(0x5ca)]();}},Scene_Shop[_0x510241(0x4d5)]['commandSellItemsEquipsCore']=function(){const _0x652f65=_0x510241;this[_0x652f65(0x4b0)][_0x652f65(0x5bd)](),this['_commandWindow'][_0x652f65(0x5bd)]();},VisuMZ[_0x510241(0x3e5)]['Scene_Shop_onBuyCancel']=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x481)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x481)]=function(){const _0xd9e21c=_0x510241;VisuMZ['ItemsEquipsCore']['Scene_Shop_onBuyCancel'][_0xd9e21c(0x303)](this),this[_0xd9e21c(0x5b1)]()&&(_0xd9e21c(0x42c)===_0xd9e21c(0x42c)?this[_0xd9e21c(0x6d7)]():_0x5644ef=_0xd9e21c(0x57b)[_0xd9e21c(0x648)](_0x258a6['id']));},Scene_Shop['prototype'][_0x510241(0x6d7)]=function(){const _0x2b2ef4=_0x510241;this[_0x2b2ef4(0x20b)]=this[_0x2b2ef4(0x4b0)][_0x2b2ef4(0x3ed)](),this[_0x2b2ef4(0x4b0)][_0x2b2ef4(0x5ce)](),this['_buyWindow'][_0x2b2ef4(0x2ca)](),this['_buyWindow'][_0x2b2ef4(0x6c5)](0x0,0x0),this[_0x2b2ef4(0x264)][_0x2b2ef4(0x5ce)](),this[_0x2b2ef4(0x342)][_0x2b2ef4(0x5bd)]();},VisuMZ['ItemsEquipsCore'][_0x510241(0x47c)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x41e)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x41e)]=function(){const _0x4eaab7=_0x510241;VisuMZ[_0x4eaab7(0x3e5)][_0x4eaab7(0x47c)][_0x4eaab7(0x303)](this),this[_0x4eaab7(0x5b1)]()&&this['onCategoryCancelItemsEquipsCore']();},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x611)]=function(){const _0x2eb240=_0x510241;this[_0x2eb240(0x4b0)][_0x2eb240(0x5ce)](),this[_0x2eb240(0x29f)][_0x2eb240(0x5ce)]();},VisuMZ[_0x510241(0x3e5)][_0x510241(0x381)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x636)],Scene_Shop[_0x510241(0x4d5)]['onBuyOk']=function(){const _0x54e49f=_0x510241;$gameTemp['_bypassProxy']=!![],VisuMZ[_0x54e49f(0x3e5)][_0x54e49f(0x381)]['call'](this),$gameTemp[_0x54e49f(0x34b)]=![],this[_0x54e49f(0x207)]=this['_buyWindow'][_0x54e49f(0x34d)]();},VisuMZ['ItemsEquipsCore'][_0x510241(0x520)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x681)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x681)]=function(){const _0x3b207b=_0x510241;$gameTemp['_bypassProxy']=!![],this['_item']=this[_0x3b207b(0x4b0)][_0x3b207b(0x34d)]();const _0x2f1143=VisuMZ[_0x3b207b(0x3e5)][_0x3b207b(0x520)]['call'](this);return $gameTemp[_0x3b207b(0x34b)]=![],this['_item']=this[_0x3b207b(0x4b0)][_0x3b207b(0x34d)](),_0x2f1143;},VisuMZ[_0x510241(0x3e5)][_0x510241(0x3e0)]=Scene_Shop[_0x510241(0x4d5)]['onSellOk'],Scene_Shop[_0x510241(0x4d5)]['onSellOk']=function(){const _0x237a47=_0x510241;VisuMZ[_0x237a47(0x3e5)][_0x237a47(0x3e0)][_0x237a47(0x303)](this),this[_0x237a47(0x5b1)]()&&(_0x237a47(0x2f1)==='TUnjk'?(_0x17359d[_0x237a47(0x4ce)](_0x237a47(0x6c0)[_0x237a47(0x648)](this[_0x237a47(0x207)][_0x237a47(0x211)])),_0x17affc[_0x237a47(0x4ce)](_0xa03d86)):this[_0x237a47(0x307)]());},Scene_Shop[_0x510241(0x4d5)]['onSellOkItemsEquipsCore']=function(){const _0x150064=_0x510241;this[_0x150064(0x5b8)][_0x150064(0x5ce)]();},VisuMZ[_0x510241(0x3e5)][_0x510241(0x300)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x5e5)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x5e5)]=function(){const _0x35d9f7=_0x510241;VisuMZ[_0x35d9f7(0x3e5)][_0x35d9f7(0x300)][_0x35d9f7(0x303)](this);this[_0x35d9f7(0x28b)]()&&('rjDCD'===_0x35d9f7(0x226)?this[_0x35d9f7(0x41e)]():_0x397211[_0x35d9f7(0x4d5)][_0x35d9f7(0x2ef)][_0x35d9f7(0x303)](this));if(this[_0x35d9f7(0x5b1)]()){if(_0x35d9f7(0x492)!==_0x35d9f7(0x338))this[_0x35d9f7(0x342)][_0x35d9f7(0x5bd)]();else return _0x35d9f7(0x4eb)[_0x35d9f7(0x648)](_0x3d096e(_0x8f431e['$1']));}},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x27d)]=function(_0x2b4c8a){const _0xd5a7c=_0x510241,_0x4f044b=this['_item'];this[_0xd5a7c(0x207)]=_0x2b4c8a;const _0x2967f8=this[_0xd5a7c(0x220)]();return this['_item']=_0x4f044b,_0x2967f8;},VisuMZ[_0x510241(0x3e5)]['Scene_Shop_sellingPrice']=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x220)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x220)]=function(){const _0x5e5c73=_0x510241;let _0x31b1ae=this[_0x5e5c73(0x274)]();const _0x55db7e=this[_0x5e5c73(0x207)];return _0x31b1ae=VisuMZ['ItemsEquipsCore']['Settings'][_0x5e5c73(0x368)][_0x5e5c73(0x5f5)][_0x5e5c73(0x303)](this,_0x55db7e,_0x31b1ae),_0x31b1ae;},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x274)]=function(){const _0x23b36d=_0x510241;let _0x20e472=this[_0x23b36d(0x207)][_0x23b36d(0x6d1)];if(!this['_item']){if(_0x23b36d(0x27c)!==_0x23b36d(0x27c)){if(!_0x3ae9f2)return![];if(!_0x383561[_0x23b36d(0x357)])return![];return _0xe0ca08&&_0x23ea77[_0x23b36d(0x357)][_0x23b36d(0x6b1)](/<PROXY:[ ](.*)>/i);}else return 0x0;}else{if(this['_item'][_0x23b36d(0x357)][_0x23b36d(0x6b1)](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){const _0x47c248=String(RegExp['$1']);let _0x463fd7=this[_0x23b36d(0x207)],_0x3b162e=_0x20e472*this['sellPriceRate']();try{eval(_0x47c248);}catch(_0x46b411){if('YRdEM'===_0x23b36d(0x4ad))this['drawParamText'](_0x522c1e,_0x21aa23,_0x5613c5,_0x1e2836,!![]),_0x589970['CoreEngine'][_0x23b36d(0x5b3)][_0x23b36d(0x526)][_0x23b36d(0x57a)]&&(_0x3db4fe+=_0x3bcb0b['iconWidth']+0x4);else{if($gameTemp[_0x23b36d(0x5a8)]())console['log'](_0x46b411);}}if(isNaN(_0x3b162e))_0x3b162e=0x0;return Math[_0x23b36d(0x409)](_0x3b162e);}else return this[_0x23b36d(0x207)]['note'][_0x23b36d(0x6b1)](/<SELL PRICE:[ ](\d+)>/i)?parseInt(RegExp['$1']):Math['floor'](this[_0x23b36d(0x309)]());}},Scene_Shop['prototype'][_0x510241(0x309)]=function(){return this['_item']['price']*this['sellPriceRate']();},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x33a)]=function(){const _0x8421ba=_0x510241;return VisuMZ[_0x8421ba(0x3e5)][_0x8421ba(0x5b3)][_0x8421ba(0x368)][_0x8421ba(0x447)];},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x63f)]=function(){const _0x30b821=_0x510241;if(!this[_0x30b821(0x229)]())return![];if(!this[_0x30b821(0x28b)]())return![];if(!this[_0x30b821(0x45d)])return![];if(!this[_0x30b821(0x45d)]['active'])return![];return this[_0x30b821(0x229)]()&&this['isUseModernControls']();},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x44d)]=function(){const _0x5689da=_0x510241;if(this[_0x5689da(0x63f)]()){if(this['_sellWindow']['maxCols']()===0x1)return TextManager[_0x5689da(0x41a)](_0x5689da(0x45b),_0x5689da(0x4ee));else{if(_0x5689da(0x4be)!=='yzQIa')return TextManager[_0x5689da(0x41a)]('pageup','pagedown');else _0x41926e['ItemsEquipsCore'][_0x5689da(0x300)][_0x5689da(0x303)](this),this[_0x5689da(0x28b)]()&&this[_0x5689da(0x41e)](),this[_0x5689da(0x5b1)]()&&this[_0x5689da(0x342)][_0x5689da(0x5bd)]();}}else{if(this['_numberWindow']&&this[_0x5689da(0x2ba)][_0x5689da(0x402)]){if(_0x5689da(0x645)!=='KZdIJ'){const _0x5634f5=_0xd76cf9(_0x420fde['$1']),_0x48d80e=_0x5689da(0x1e1)[_0x5689da(0x648)](_0x5634f5);_0x5807a1['ItemsEquipsCore']['itemEnableJS'][_0x388d7a['id']]=new _0x136029(_0x5689da(0x34d),_0x48d80e);}else return TextManager[_0x5689da(0x41a)](_0x5689da(0x45b),'right');}}return Scene_MenuBase[_0x5689da(0x4d5)][_0x5689da(0x44d)][_0x5689da(0x303)](this);},Scene_Shop[_0x510241(0x4d5)][_0x510241(0x5af)]=function(){const _0x1c8c56=_0x510241;if(this[_0x1c8c56(0x2ba)]&&this[_0x1c8c56(0x2ba)][_0x1c8c56(0x402)])return TextManager[_0x1c8c56(0x41a)]('up','down');return Scene_MenuBase[_0x1c8c56(0x4d5)][_0x1c8c56(0x5af)]['call'](this);},Scene_Shop[_0x510241(0x4d5)]['buttonAssistText1']=function(){const _0xfa15bd=_0x510241;if(this['buttonAssistItemListRequirement']())return VisuMZ[_0xfa15bd(0x3e5)][_0xfa15bd(0x5b3)][_0xfa15bd(0x534)]['buttonAssistCategory'];else{if(this['_numberWindow']&&this[_0xfa15bd(0x2ba)][_0xfa15bd(0x402)])return VisuMZ[_0xfa15bd(0x3e5)][_0xfa15bd(0x5b3)][_0xfa15bd(0x368)]['buttonAssistSmallIncrement'];}return Scene_MenuBase[_0xfa15bd(0x4d5)][_0xfa15bd(0x668)][_0xfa15bd(0x303)](this);},Scene_Shop[_0x510241(0x4d5)]['buttonAssistText2']=function(){const _0x4630c2=_0x510241;if(this[_0x4630c2(0x2ba)]&&this['_numberWindow'][_0x4630c2(0x402)]){if(_0x4630c2(0x69f)===_0x4630c2(0x69f))return VisuMZ[_0x4630c2(0x3e5)][_0x4630c2(0x5b3)]['ShopScene']['buttonAssistLargeIncrement'];else{if(_0xdc6730)_0x1ae3f0['prepareNewEquipSlotsOnLoad']();}}return Scene_MenuBase[_0x4630c2(0x4d5)][_0x4630c2(0x39a)]['call'](this);},Scene_Shop['prototype'][_0x510241(0x21b)]=function(){const _0x4dfb35=_0x510241;if(!SceneManager[_0x4dfb35(0x469)]())return;const _0xd0a1d7=VisuMZ[_0x4dfb35(0x3e5)]['Settings'][_0x4dfb35(0x368)];if(_0xd0a1d7[_0x4dfb35(0x432)]){if('rDUqo'===_0x4dfb35(0x4d2))$gameSwitches['setValue'](_0xd0a1d7[_0x4dfb35(0x432)],![]);else{const _0x37ce51=_0x2a7a24[_0x4dfb35(0x4bd)](this[_0x4dfb35(0x2a8)]);_0x37ce51[_0x4dfb35(0x547)]=!![],_0x37ce51[_0x4dfb35(0x4f4)](this[_0x4dfb35(0x527)],this['item']()),this[_0x4dfb35(0x264)][_0x4dfb35(0x429)](_0x37ce51);}}_0xd0a1d7[_0x4dfb35(0x5ed)]&&$gameSwitches[_0x4dfb35(0x56d)](_0xd0a1d7[_0x4dfb35(0x5ed)],![]);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x252)]=Scene_Shop['prototype'][_0x510241(0x280)],Scene_Shop['prototype'][_0x510241(0x280)]=function(_0xa58c55){const _0x277dbb=_0x510241;VisuMZ[_0x277dbb(0x3e5)]['Scene_Shop_doBuy'][_0x277dbb(0x303)](this,_0xa58c55);if(_0xa58c55<=0x0)return;const _0x593ddb=VisuMZ['ItemsEquipsCore'][_0x277dbb(0x5b3)][_0x277dbb(0x368)];if(_0x593ddb[_0x277dbb(0x432)]){if('UtRUv'!==_0x277dbb(0x59e))$gameSwitches[_0x277dbb(0x56d)](_0x593ddb['SwitchBuy'],!![]);else{if(!this[_0x277dbb(0x542)]()&&!_0x906df5['isItem'](this[_0x277dbb(0x207)]))return![];if(_0xb1679b[_0x277dbb(0x651)](this['_item'])&&!_0xca8a12['optKeyItemsNumber']){const _0x5ae6df=_0x46d089['keyItem'];this[_0x277dbb(0x36b)](_0x5ae6df,_0x5df393,_0x5954e5,_0x52283e,!![],_0x277dbb(0x35c));}else{const _0x3038f6=_0x4283af[_0x277dbb(0x332)];this[_0x277dbb(0x36b)](_0x3038f6,_0x5c1d28,_0x30b36c,_0x8937ed,!![]);const _0x14e052=this[_0x277dbb(0x1f3)]();this[_0x277dbb(0x36b)](_0x14e052,_0x35cae1,_0x41dea2,_0x543cb7,![],_0x277dbb(0x4ee));}return this[_0x277dbb(0x5ac)](_0x500db2,_0x28c634,_0x5df538),this[_0x277dbb(0x65c)](),!![];}}},VisuMZ['ItemsEquipsCore'][_0x510241(0x41d)]=Scene_Shop[_0x510241(0x4d5)][_0x510241(0x4b8)],Scene_Shop[_0x510241(0x4d5)][_0x510241(0x4b8)]=function(_0x6790c9){const _0x17b01a=_0x510241;VisuMZ[_0x17b01a(0x3e5)][_0x17b01a(0x41d)][_0x17b01a(0x303)](this,_0x6790c9);if(_0x6790c9<=0x0)return;const _0x44a889=VisuMZ['ItemsEquipsCore'][_0x17b01a(0x5b3)][_0x17b01a(0x368)];_0x44a889['SwitchBuy']&&$gameSwitches[_0x17b01a(0x56d)](_0x44a889[_0x17b01a(0x5ed)],!![]);};function Sprite_NewLabel(){const _0x286262=_0x510241;this[_0x286262(0x4fb)](...arguments);}Sprite_NewLabel[_0x510241(0x4d5)]=Object[_0x510241(0x422)](Sprite[_0x510241(0x4d5)]),Sprite_NewLabel[_0x510241(0x4d5)][_0x510241(0x4f6)]=Sprite_NewLabel,Sprite_NewLabel['prototype'][_0x510241(0x4fb)]=function(){const _0xbc4ec5=_0x510241;Sprite[_0xbc4ec5(0x4d5)][_0xbc4ec5(0x4fb)][_0xbc4ec5(0x303)](this),this[_0xbc4ec5(0x5d0)]();},Sprite_NewLabel['prototype'][_0x510241(0x5d0)]=function(){const _0x43fcd5=_0x510241,_0x5ddcb1=ImageManager[_0x43fcd5(0x51a)],_0x497ca6=ImageManager[_0x43fcd5(0x62e)];this['bitmap']=new Bitmap(_0x5ddcb1,_0x497ca6),this[_0x43fcd5(0x272)](),this[_0x43fcd5(0x451)]();},Sprite_NewLabel['prototype'][_0x510241(0x272)]=function(){const _0x56411c=_0x510241,_0x12c0c9=VisuMZ[_0x56411c(0x3e5)][_0x56411c(0x5b3)][_0x56411c(0x3bd)][_0x56411c(0x3f5)];if(_0x12c0c9<=0x0)return;const _0x7968ad=ImageManager['loadSystem']('IconSet'),_0x76c88b=ImageManager[_0x56411c(0x51a)],_0x59f347=ImageManager[_0x56411c(0x62e)],_0x1e44ac=_0x12c0c9%0x10*_0x76c88b,_0x36996c=Math['floor'](_0x12c0c9/0x10)*_0x59f347;this[_0x56411c(0x52e)][_0x56411c(0x579)](_0x7968ad,_0x1e44ac,_0x36996c,_0x76c88b,_0x59f347,0x0,0x0);},Sprite_NewLabel[_0x510241(0x4d5)]['drawNewLabelText']=function(){const _0x5b2629=_0x510241,_0x1e67c1=VisuMZ[_0x5b2629(0x3e5)][_0x5b2629(0x5b3)][_0x5b2629(0x3bd)],_0x1290d1=_0x1e67c1[_0x5b2629(0x58d)];if(_0x1290d1==='')return;const _0x70becd=ImageManager[_0x5b2629(0x51a)],_0x5bb24b=ImageManager[_0x5b2629(0x62e)];this[_0x5b2629(0x52e)][_0x5b2629(0x4ae)]=_0x1e67c1[_0x5b2629(0x339)]||$gameSystem['mainFontFace'](),this[_0x5b2629(0x52e)][_0x5b2629(0x2a6)]=this[_0x5b2629(0x66a)](),this[_0x5b2629(0x52e)]['fontSize']=_0x1e67c1[_0x5b2629(0x3d4)],this[_0x5b2629(0x52e)]['drawText'](_0x1290d1,0x0,_0x5bb24b/0x2,_0x70becd,_0x5bb24b/0x2,_0x5b2629(0x35c));},Sprite_NewLabel[_0x510241(0x4d5)]['getTextColor']=function(){const _0x32dc27=_0x510241,_0x5cc10e=VisuMZ[_0x32dc27(0x3e5)][_0x32dc27(0x5b3)][_0x32dc27(0x3bd)]['FontColor'];return _0x5cc10e[_0x32dc27(0x6b1)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x32dc27(0x2a6)](_0x5cc10e);},Window_Base['prototype'][_0x510241(0x5ea)]=function(_0xf0c732,_0x376ddb,_0x4141f0,_0x48fb44){const _0x48d9a0=_0x510241;if(_0xf0c732){if(_0x48d9a0(0x602)!==_0x48d9a0(0x602)){const _0x1bfd64=_0x41c3ac[_0x48d9a0(0x312)]('['+_0x3054d2['$1']['match'](/\d+/g)+']');for(const _0x46e154 of _0x1bfd64){if(!_0x161779[_0x48d9a0(0x5a5)](_0x46e154))return![];}}else{const _0x5a43fb=_0x4141f0+(this[_0x48d9a0(0x49d)]()-ImageManager['iconHeight'])/0x2,_0x7650cb=ImageManager[_0x48d9a0(0x51a)]+0x4,_0x5dc430=Math['max'](0x0,_0x48fb44-_0x7650cb);this[_0x48d9a0(0x4c5)](ColorManager['getItemColor'](_0xf0c732)),this[_0x48d9a0(0x1e8)](_0xf0c732[_0x48d9a0(0x516)],_0x376ddb,_0x5a43fb),this[_0x48d9a0(0x2b2)](_0xf0c732[_0x48d9a0(0x211)],_0x376ddb+_0x7650cb,_0x4141f0,_0x5dc430),this[_0x48d9a0(0x44c)]();}}},Window_Base[_0x510241(0x4d5)][_0x510241(0x615)]=function(_0xe36d85,_0x7f913c,_0x3db9f7,_0x2c8701){const _0x19848d=_0x510241;if(this[_0x19848d(0x27b)](_0xe36d85)){this[_0x19848d(0x65c)]();const _0x3c356b=VisuMZ[_0x19848d(0x3e5)][_0x19848d(0x5b3)][_0x19848d(0x534)],_0x49ce58=_0x3c356b['ItemQuantityFmt'],_0x5e91cb=_0x49ce58[_0x19848d(0x648)]($gameParty[_0x19848d(0x505)](_0xe36d85));this['contents'][_0x19848d(0x222)]=_0x3c356b[_0x19848d(0x6b7)],this[_0x19848d(0x2b2)](_0x5e91cb,_0x7f913c,_0x3db9f7,_0x2c8701,_0x19848d(0x4ee)),this[_0x19848d(0x65c)]();}},Window_Base[_0x510241(0x4d5)][_0x510241(0x27b)]=function(_0x4dfb28){const _0x1b5e8d=_0x510241;if(DataManager['isKeyItem'](_0x4dfb28))return $dataSystem[_0x1b5e8d(0x33d)];return!![];},Window_Base[_0x510241(0x4d5)]['drawItemDarkRect']=function(_0x4521aa,_0x9b6d39,_0x5b5a61,_0x318fd3,_0x4858cd){const _0x28f1f8=_0x510241;_0x4858cd=Math[_0x28f1f8(0x20e)](_0x4858cd||0x1,0x1);while(_0x4858cd--){_0x318fd3=_0x318fd3||this['lineHeight'](),this[_0x28f1f8(0x3d6)][_0x28f1f8(0x1f2)]=0xa0;const _0x41bae9=ColorManager[_0x28f1f8(0x2f5)]();this[_0x28f1f8(0x3d6)][_0x28f1f8(0x581)](_0x4521aa+0x1,_0x9b6d39+0x1,_0x5b5a61-0x2,_0x318fd3-0x2,_0x41bae9),this[_0x28f1f8(0x3d6)]['paintOpacity']=0xff;}},VisuMZ['ItemsEquipsCore'][_0x510241(0x3ec)]=Window_Selectable[_0x510241(0x4d5)][_0x510241(0x4fb)],Window_Selectable[_0x510241(0x4d5)][_0x510241(0x4fb)]=function(_0x5c6a35){const _0x1f581c=_0x510241;this['initNewLabelSprites'](),VisuMZ['ItemsEquipsCore']['Window_Selectable_initialize'][_0x1f581c(0x303)](this,_0x5c6a35);},Window_Selectable[_0x510241(0x4d5)]['initNewLabelSprites']=function(){const _0x549d33=_0x510241;this[_0x549d33(0x293)]={},this[_0x549d33(0x270)]=0xff,this[_0x549d33(0x431)]=VisuMZ[_0x549d33(0x3e5)][_0x549d33(0x5b3)][_0x549d33(0x3bd)][_0x549d33(0x466)],this[_0x549d33(0x1ea)]=VisuMZ['ItemsEquipsCore'][_0x549d33(0x5b3)][_0x549d33(0x3bd)][_0x549d33(0x5d8)];},Window_Selectable[_0x510241(0x4d5)]['isShowNew']=function(){return![];},VisuMZ['ItemsEquipsCore']['Window_Selectable_setHelpWindowItem']=Window_Selectable[_0x510241(0x4d5)][_0x510241(0x337)],Window_Selectable['prototype'][_0x510241(0x337)]=function(_0x47cd5d){const _0x3a5bea=_0x510241;VisuMZ[_0x3a5bea(0x3e5)][_0x3a5bea(0x399)]['call'](this,_0x47cd5d);if(this[_0x3a5bea(0x6cd)]())this[_0x3a5bea(0x3df)](_0x47cd5d);},Window_Selectable[_0x510241(0x4d5)]['clearNewLabelFromItem']=function(_0x2265a1){const _0x4d02c0=_0x510241;if(!_0x2265a1)return;$gameParty[_0x4d02c0(0x3e6)](_0x2265a1);let _0x21a91a='';if(DataManager[_0x4d02c0(0x22f)](_0x2265a1)){if('KQpzs'!==_0x4d02c0(0x61b))_0x21a91a=_0x4d02c0(0x57b)[_0x4d02c0(0x648)](_0x2265a1['id']);else{if(!_0x2c489b)return 0x63;else return _0x26a789[_0x4d02c0(0x357)]['match'](/<MAX:[ ](\d+)>/i)?_0x1a8d0f(_0x3af8bf['$1']):this[_0x4d02c0(0x5b9)](_0x515e3d);}}else{if(DataManager[_0x4d02c0(0x2f3)](_0x2265a1))_0x21a91a='weapon-%1'[_0x4d02c0(0x648)](_0x2265a1['id']);else{if(DataManager[_0x4d02c0(0x417)](_0x2265a1))_0x21a91a=_0x4d02c0(0x367)[_0x4d02c0(0x648)](_0x2265a1['id']);else return;}}const _0x40759d=this[_0x4d02c0(0x293)][_0x21a91a];if(_0x40759d)_0x40759d[_0x4d02c0(0x5bd)]();},VisuMZ[_0x510241(0x3e5)][_0x510241(0x50a)]=Window_Selectable[_0x510241(0x4d5)]['refresh'],Window_Selectable[_0x510241(0x4d5)]['refresh']=function(){const _0x328332=_0x510241;this[_0x328332(0x1e0)](),VisuMZ[_0x328332(0x3e5)][_0x328332(0x50a)][_0x328332(0x303)](this);},Window_Selectable[_0x510241(0x4d5)]['hideNewLabelSprites']=function(){const _0x358a32=_0x510241;for(const _0x3a1810 of Object[_0x358a32(0x6d0)](this['_newLabelSprites'])){_0x3a1810[_0x358a32(0x5bd)]();}},VisuMZ[_0x510241(0x3e5)]['Window_Selectable_update']=Window_Selectable[_0x510241(0x4d5)]['update'],Window_Selectable[_0x510241(0x4d5)]['update']=function(){const _0x2a151e=_0x510241;this['updateNewLabelOpacity'](),VisuMZ['ItemsEquipsCore'][_0x2a151e(0x40e)][_0x2a151e(0x303)](this);},Window_Selectable[_0x510241(0x4d5)]['updateNewLabelOpacity']=function(){const _0x3be168=_0x510241;if(!this[_0x3be168(0x6cd)]())return;const _0x79b7db=this[_0x3be168(0x1ea)];this[_0x3be168(0x270)]+=this[_0x3be168(0x431)];(this['_newLabelOpacity']>=_0x79b7db||this['_newLabelOpacity']<=0x0)&&(this['_newLabelOpacityChange']*=-0x1);this[_0x3be168(0x270)]=this[_0x3be168(0x270)][_0x3be168(0x3a0)](0x0,_0x79b7db);for(const _0x28086b of Object[_0x3be168(0x6d0)](this[_0x3be168(0x293)])){'AIuHh'===_0x3be168(0x3e3)?(_0x55bf68['ItemsEquipsCore']['Scene_Shop_create']['call'](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x3be168(0x434)](),this[_0x3be168(0x21b)]()):_0x28086b[_0x3be168(0x5a9)]=this[_0x3be168(0x270)];}},Window_Selectable['prototype']['createNewLabelSprite']=function(_0x43f51f){const _0xc942a1=_0x510241,_0x383ced=this[_0xc942a1(0x293)];if(_0x383ced[_0x43f51f])return _0x383ced[_0x43f51f];else{const _0xcfa156=new Sprite_NewLabel();return _0x383ced[_0x43f51f]=_0xcfa156,this[_0xc942a1(0x6bf)](_0xcfa156),_0xcfa156;}},Window_Selectable['prototype'][_0x510241(0x34a)]=function(_0x4cb337,_0x1eb4f2,_0x383403){const _0x353e7f=_0x510241;let _0x46e91d='';if(DataManager['isItem'](_0x4cb337))_0x46e91d=_0x353e7f(0x57b)[_0x353e7f(0x648)](_0x4cb337['id']);else{if(DataManager['isWeapon'](_0x4cb337))_0x353e7f(0x5b5)===_0x353e7f(0x545)?_0x4890db=_0x353e7f(0x367)[_0x353e7f(0x648)](_0x14b181['id']):_0x46e91d=_0x353e7f(0x485)[_0x353e7f(0x648)](_0x4cb337['id']);else{if(DataManager[_0x353e7f(0x417)](_0x4cb337))_0x46e91d=_0x353e7f(0x367)[_0x353e7f(0x648)](_0x4cb337['id']);else return;}}const _0x4b431b=this['createNewLabelSprite'](_0x46e91d);_0x4b431b[_0x353e7f(0x1fc)](_0x1eb4f2,_0x383403),_0x4b431b['show'](),_0x4b431b[_0x353e7f(0x5a9)]=this[_0x353e7f(0x270)];},Window_ItemCategory[_0x510241(0x433)]=VisuMZ['ItemsEquipsCore'][_0x510241(0x5b3)]['Categories']['List'],Window_ItemCategory[_0x510241(0x59a)]=[_0x510241(0x440),'HiddenItemB','Nonconsumable',_0x510241(0x3b0),_0x510241(0x639),_0x510241(0x679),'FieldUsable',_0x510241(0x26d)],VisuMZ[_0x510241(0x3e5)]['Window_ItemCategory_initialize']=Window_ItemCategory['prototype'][_0x510241(0x4fb)],Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x4fb)]=function(_0x32255a){const _0x3cd5cd=_0x510241;VisuMZ[_0x3cd5cd(0x3e5)][_0x3cd5cd(0x566)][_0x3cd5cd(0x303)](this,_0x32255a),this[_0x3cd5cd(0x5cf)](_0x32255a);},Window_ItemCategory[_0x510241(0x4d5)]['createCategoryNameWindow']=function(_0x3ee289){const _0x17d2fe=_0x510241,_0x1ca584=new Rectangle(0x0,0x0,_0x3ee289[_0x17d2fe(0x4e1)],_0x3ee289[_0x17d2fe(0x42f)]);this[_0x17d2fe(0x29d)]=new Window_Base(_0x1ca584),this[_0x17d2fe(0x29d)][_0x17d2fe(0x5a9)]=0x0,this[_0x17d2fe(0x419)](this[_0x17d2fe(0x29d)]),this[_0x17d2fe(0x326)]();},Window_ItemCategory[_0x510241(0x4d5)]['isUseModernControls']=function(){const _0x5e0e64=_0x510241;return Imported[_0x5e0e64(0x57d)]&&Window_HorzCommand[_0x5e0e64(0x4d5)][_0x5e0e64(0x28b)][_0x5e0e64(0x303)](this);},Window_ItemCategory['prototype']['processCursorHomeEndTrigger']=function(){},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x348)]=function(){const _0x16c51b=_0x510241;if(!this[_0x16c51b(0x28b)]())Window_HorzCommand[_0x16c51b(0x4d5)][_0x16c51b(0x348)][_0x16c51b(0x303)](this);},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x1ee)]=function(){const _0x9ce4e6=_0x510241;return this[_0x9ce4e6(0x519)]?this[_0x9ce4e6(0x327)]():0x4;},Window_ItemCategory[_0x510241(0x4d5)]['update']=function(){const _0x5e674e=_0x510241;Window_HorzCommand[_0x5e674e(0x4d5)][_0x5e674e(0x442)][_0x5e674e(0x303)](this),this[_0x5e674e(0x5a2)]&&this[_0x5e674e(0x5a2)][_0x5e674e(0x67e)](this[_0x5e674e(0x549)]());},Window_ItemCategory['prototype'][_0x510241(0x5c2)]=function(){const _0x20a334=_0x510241;if(this[_0x20a334(0x50d)]()){const _0x4b7d01=this[_0x20a334(0x3ed)]();if(this[_0x20a334(0x5a2)]&&this['_itemWindow'][_0x20a334(0x1ee)]()<=0x1)Input[_0x20a334(0x54d)](_0x20a334(0x4ee))&&this[_0x20a334(0x69a)](Input[_0x20a334(0x47f)]('right')),Input[_0x20a334(0x54d)](_0x20a334(0x45b))&&this[_0x20a334(0x25e)](Input[_0x20a334(0x47f)](_0x20a334(0x45b)));else this[_0x20a334(0x5a2)]&&this[_0x20a334(0x5a2)][_0x20a334(0x1ee)]()>0x1&&(Input['isRepeated']('pagedown')&&!Input[_0x20a334(0x692)](_0x20a334(0x5c8))&&this[_0x20a334(0x69a)](Input[_0x20a334(0x47f)](_0x20a334(0x473))),Input['isRepeated'](_0x20a334(0x697))&&!Input['isPressed'](_0x20a334(0x5c8))&&this['cursorLeft'](Input[_0x20a334(0x47f)](_0x20a334(0x697))));this['index']()!==_0x4b7d01&&this[_0x20a334(0x3e7)]();}},Window_ItemCategory['prototype']['processHandling']=function(){const _0x48bcb0=_0x510241;if(this[_0x48bcb0(0x28b)]())return;Window_HorzCommand[_0x48bcb0(0x4d5)]['processHandling'][_0x48bcb0(0x303)](this);},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x660)]=function(){const _0x161131=_0x510241;return this[_0x161131(0x28b)]()?![]:Window_HorzCommand[_0x161131(0x4d5)][_0x161131(0x660)][_0x161131(0x303)](this);},Window_ItemCategory['prototype'][_0x510241(0x575)]=function(){const _0x4a1828=_0x510241;if(this[_0x4a1828(0x48e)]()){if('Wvaxx'!=='Wvaxx'){if(!this[_0x4a1828(0x50d)]())return![];if(_0x34c2f8[_0x4a1828(0x6b3)][_0x4a1828(0x4f6)]!==_0x16a391)return![];return _0x342a10[_0x4a1828(0x47f)](_0x4a1828(0x5be))&&(this[_0x4a1828(0x3e7)](),_0x463990[_0x4a1828(0x6b3)]['commandEquip'](),_0x9161b6[_0x4a1828(0x6b3)][_0x4a1828(0x61d)][_0x4a1828(0x36e)](-0x1)),![];}else{if(TouchInput[_0x4a1828(0x47f)]()){if(_0x4a1828(0x3f7)===_0x4a1828(0x3f7))this[_0x4a1828(0x64e)](!![]);else{const _0xa4ce75=_0xcab3e1(_0x2337fe['$1']);try{_0x3dacde(_0xa4ce75);}catch(_0x2de9f5){if(_0x4102c9[_0x4a1828(0x5a8)]())_0x1bc236[_0x4a1828(0x4ce)](_0x2de9f5);}}}if(TouchInput[_0x4a1828(0x395)]()){if(_0x4a1828(0x341)===_0x4a1828(0x4f0))return this[_0x4a1828(0x45c)](_0xa8378f)?this['switchProxyItem'](_0x367208)||_0x4d81c4:_0x34ccf7;else this[_0x4a1828(0x49c)]();}else TouchInput['isCancelled']()&&(_0x4a1828(0x656)===_0x4a1828(0x656)?this[_0x4a1828(0x570)]():_0x34dbb1[_0x4a1828(0x4d5)][_0x4a1828(0x2ef)][_0x4a1828(0x303)](this));}}},Window_ItemCategory[_0x510241(0x4d5)]['onTouchSelect']=function(_0x5a7273){const _0x3c2bc4=_0x510241;if(this[_0x3c2bc4(0x28b)]()){if(_0x3c2bc4(0x4bf)==='msbmO')this['onTouchSelectModern'](!![]);else{if(this[_0x3c2bc4(0x359)]())return this[_0x3c2bc4(0x382)][_0x3c2bc4(0x4e1)]/0x5/-0x3;return _0x5a4c81[_0x3c2bc4(0x4d5)]['buttonAssistOffset3'][_0x3c2bc4(0x303)](this);}}else _0x3c2bc4(0x26b)!=='cvQvo'?Window_HorzCommand[_0x3c2bc4(0x4d5)][_0x3c2bc4(0x64e)][_0x3c2bc4(0x303)](this,_0x5a7273):this[_0x3c2bc4(0x30e)]();},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x631)]=function(_0x307df0){const _0x28ae68=_0x510241;this['_doubleTouch']=![];if(this['isCursorMovable']()){if('MWRYm'!==_0x28ae68(0x553)){const _0x33cc39=this[_0x28ae68(0x3ed)](),_0x1d3663=this[_0x28ae68(0x3ca)]();_0x1d3663>=0x0&&_0x1d3663!==this[_0x28ae68(0x3ed)]()&&(_0x28ae68(0x55c)===_0x28ae68(0x467)?(_0x303d94[_0x28ae68(0x3e5)][_0x28ae68(0x5b3)][_0x28ae68(0x619)][_0x28ae68(0x477)][_0x28ae68(0x303)](this),this['drawParamsItemsEquipsCore']()):this[_0x28ae68(0x674)](_0x1d3663)),_0x307df0&&this[_0x28ae68(0x3ed)]()!==_0x33cc39&&this[_0x28ae68(0x3e7)]();}else{const _0x4e5d70=_0x3ad3b2?_0x2b0619(_0x41c5eb['$1']):_0x5598b9[_0x28ae68(0x3a7)](_0x7a1509);return _0x7bc13a[_0x4e5d70]||_0x1ac4a8;}}},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x659)]=function(){const _0x3836e1=_0x510241;this['addItemCategories'](),this[_0x3836e1(0x674)](this[_0x3836e1(0x3ed)]());},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x213)]=function(){const _0x1d91f4=_0x510241;for(const _0x412fbc of Window_ItemCategory[_0x1d91f4(0x433)]){this[_0x1d91f4(0x3c9)](_0x412fbc);}},Window_ItemCategory['prototype'][_0x510241(0x3c9)]=function(_0x2f04f8){const _0x3471a3=_0x510241,_0x1b7df8=_0x2f04f8[_0x3471a3(0x62d)],_0xb233f3=_0x2f04f8[_0x3471a3(0x3f5)],_0x3be96c=_0x2f04f8[_0x3471a3(0x525)]||0x0;if(_0x3be96c>0x0&&!$gameSwitches['value'](_0x3be96c))return;let _0x1b4e46='',_0x6b6555=_0x3471a3(0x2dc),_0x27e828=_0x1b7df8;if(_0x1b7df8[_0x3471a3(0x6b1)](/Category:(.*)/i))_0x1b4e46=String(RegExp['$1'])['trim']();else{if(Window_ItemCategory['categoryItemTypes'][_0x3471a3(0x400)](_0x1b7df8))_0x3471a3(0x69d)!==_0x3471a3(0x69d)?_0xa66bb5=this[_0x3471a3(0x2a8)][_0x3471a3(0x3be)](_0x16abff,!![]):_0x1b4e46=VisuMZ[_0x3471a3(0x3e5)][_0x3471a3(0x5b3)][_0x3471a3(0x56f)][_0x1b7df8];else{if([_0x3471a3(0x3dc),_0x3471a3(0x4a8)][_0x3471a3(0x400)](_0x1b7df8))_0x1b4e46=TextManager['item'];else{if(_0x1b7df8===_0x3471a3(0x2f0))_0x1b4e46=TextManager[_0x3471a3(0x529)];else{if(_0x1b7df8==='AllWeapons')_0x1b4e46=TextManager['weapon'];else{if(_0x1b7df8===_0x3471a3(0x43b))_0x1b4e46=TextManager['armor'];else{if(_0x1b7df8[_0x3471a3(0x6b1)](/WTYPE:(\d+)/i))_0x3471a3(0x504)!==_0x3471a3(0x1f0)?_0x1b4e46=$dataSystem[_0x3471a3(0x393)][Number(RegExp['$1'])]||'':(_0x5c54dd[_0x3471a3(0x3e5)]['Scene_Equip_create'][_0x3471a3(0x303)](this),this[_0x3471a3(0x28b)]()&&this[_0x3471a3(0x2b3)]());else{if(_0x1b7df8[_0x3471a3(0x6b1)](/ATYPE:(\d+)/i))_0x3471a3(0x32c)===_0x3471a3(0x320)?(_0x49fe65['a']=_0x24e7f1,_0x36cc5d['b']=_0x114162):_0x1b4e46=$dataSystem[_0x3471a3(0x4ff)][Number(RegExp['$1'])]||'';else{if(_0x1b7df8[_0x3471a3(0x6b1)](/ETYPE:(\d+)/i)){if(_0x3471a3(0x5d9)!==_0x3471a3(0x5d9)){const _0x303cec=this[_0x3471a3(0x678)](_0x421dd7);if(_0x303cec[_0x3471a3(0x6b1)](/\\I\[(\d+)\]/i)){const _0x546f80=this[_0x3471a3(0x57c)](_0x403277),_0x3012a7=this[_0x3471a3(0x5d5)](_0x303cec)[_0x3471a3(0x4e1)];return _0x3012a7<=_0x546f80['width']?'iconText':_0x3471a3(0x46e);}}else _0x1b4e46=$dataSystem[_0x3471a3(0x267)][Number(RegExp['$1'])]||'';}}}}}}}}}_0xb233f3>0x0&&this[_0x3471a3(0x512)]()!==_0x3471a3(0x411)&&(_0x1b4e46=_0x3471a3(0x2c2)[_0x3471a3(0x648)](_0xb233f3,_0x1b4e46)),this['addCommand'](_0x1b4e46,_0x6b6555,!![],_0x27e828);},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x5e4)]=function(){const _0x105edc=_0x510241;return VisuMZ[_0x105edc(0x3e5)][_0x105edc(0x5b3)][_0x105edc(0x56f)]['TextAlign'];},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x2a9)]=function(_0x1a4e5c){const _0x31cfe4=_0x510241,_0x55666a=this[_0x31cfe4(0x427)](_0x1a4e5c);if(_0x55666a===_0x31cfe4(0x291)){if(_0x31cfe4(0x644)===_0x31cfe4(0x644))this[_0x31cfe4(0x2e3)](_0x1a4e5c);else return _0x36444e[_0x31cfe4(0x2b9)](_0x31cfe4(0x5c8));}else _0x55666a===_0x31cfe4(0x46e)?this[_0x31cfe4(0x3ae)](_0x1a4e5c):'jHtgd'!==_0x31cfe4(0x41b)?Window_HorzCommand['prototype']['drawItem'][_0x31cfe4(0x303)](this,_0x1a4e5c):this[_0x31cfe4(0x5a2)][_0x31cfe4(0x482)](_0x31cfe4(0x25d),this['popScene'][_0x31cfe4(0x4a1)](this));},Window_ItemCategory['prototype'][_0x510241(0x512)]=function(){const _0x1503e2=_0x510241;return VisuMZ['ItemsEquipsCore'][_0x1503e2(0x5b3)][_0x1503e2(0x56f)]['Style'];},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x427)]=function(_0x5c73e0){const _0x4b7ec5=_0x510241;if(_0x5c73e0<0x0)return _0x4b7ec5(0x411);const _0x29fbb0=this[_0x4b7ec5(0x512)]();if(_0x29fbb0!==_0x4b7ec5(0x366))return _0x29fbb0;else{const _0x3b45c5=this[_0x4b7ec5(0x678)](_0x5c73e0);if(_0x3b45c5[_0x4b7ec5(0x6b1)](/\\I\[(\d+)\]/i)){const _0x26867f=this[_0x4b7ec5(0x57c)](_0x5c73e0),_0x6077eb=this[_0x4b7ec5(0x5d5)](_0x3b45c5)[_0x4b7ec5(0x4e1)];return _0x6077eb<=_0x26867f['width']?_0x4b7ec5(0x291):'icon';}else return'text';}},Window_ItemCategory['prototype']['drawItemStyleIconText']=function(_0x267408){const _0x13ae3d=_0x510241,_0x54a819=this[_0x13ae3d(0x57c)](_0x267408),_0x186989=this[_0x13ae3d(0x678)](_0x267408),_0x12e026=this[_0x13ae3d(0x5d5)](_0x186989)[_0x13ae3d(0x4e1)];this[_0x13ae3d(0x1eb)](this['isCommandEnabled'](_0x267408));const _0x7cc714=this['itemTextAlign']();if(_0x7cc714===_0x13ae3d(0x4ee))this[_0x13ae3d(0x4cd)](_0x186989,_0x54a819['x']+_0x54a819[_0x13ae3d(0x4e1)]-_0x12e026,_0x54a819['y'],_0x12e026);else{if(_0x7cc714===_0x13ae3d(0x35c)){if(_0x13ae3d(0x521)===_0x13ae3d(0x521)){const _0x477057=_0x54a819['x']+Math[_0x13ae3d(0x409)]((_0x54a819[_0x13ae3d(0x4e1)]-_0x12e026)/0x2);this[_0x13ae3d(0x4cd)](_0x186989,_0x477057,_0x54a819['y'],_0x12e026);}else _0x472b8f[_0x13ae3d(0x4d5)][_0x13ae3d(0x2a9)][_0x13ae3d(0x303)](this,_0xc8f26);}else this['drawTextEx'](_0x186989,_0x54a819['x'],_0x54a819['y'],_0x12e026);}},Window_ItemCategory['prototype'][_0x510241(0x3ae)]=function(_0x208285){const _0x35d137=_0x510241,_0x40b3ab=this[_0x35d137(0x678)](_0x208285);if(_0x40b3ab[_0x35d137(0x6b1)](/\\I\[(\d+)\]/i)){const _0x1fbc2c=Number(RegExp['$1'])||0x0,_0x42b4a4=this['itemLineRect'](_0x208285),_0x3978aa=_0x42b4a4['x']+Math['floor']((_0x42b4a4[_0x35d137(0x4e1)]-ImageManager['iconWidth'])/0x2),_0x1803e0=_0x42b4a4['y']+(_0x42b4a4['height']-ImageManager['iconHeight'])/0x2;this[_0x35d137(0x1e8)](_0x1fbc2c,_0x3978aa,_0x1803e0);}},VisuMZ['ItemsEquipsCore'][_0x510241(0x2c7)]=Window_ItemCategory['prototype']['setItemWindow'],Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x61c)]=function(_0x4ef180){const _0x280ad1=_0x510241;VisuMZ[_0x280ad1(0x3e5)]['Window_ItemCategory_setItemWindow'][_0x280ad1(0x303)](this,_0x4ef180),_0x4ef180[_0x280ad1(0x5b8)]=this;},Window_ItemCategory['prototype'][_0x510241(0x510)]=function(){const _0x41244b=_0x510241;Window_HorzCommand[_0x41244b(0x4d5)][_0x41244b(0x510)]['call'](this);if(this['_categoryNameWindow'])this[_0x41244b(0x326)]();},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x326)]=function(){const _0x4bdcc2=_0x510241,_0x1ea1e2=this[_0x4bdcc2(0x29d)];_0x1ea1e2[_0x4bdcc2(0x55f)][_0x4bdcc2(0x389)]();const _0x2bafaf=this[_0x4bdcc2(0x427)](this['index']());if(_0x2bafaf===_0x4bdcc2(0x46e)){if(_0x4bdcc2(0x4e3)!==_0x4bdcc2(0x577)){const _0xa8f0d7=this[_0x4bdcc2(0x57c)](this[_0x4bdcc2(0x3ed)]());let _0x8854ee=this['commandName'](this['index']());_0x8854ee=_0x8854ee[_0x4bdcc2(0x2e8)](/\\I\[(\d+)\]/gi,''),_0x1ea1e2[_0x4bdcc2(0x65c)](),this[_0x4bdcc2(0x5d1)](_0x8854ee,_0xa8f0d7),this['categoryNameWindowDrawText'](_0x8854ee,_0xa8f0d7),this[_0x4bdcc2(0x22d)](_0x8854ee,_0xa8f0d7);}else return!![];}},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x5d1)]=function(_0x4911e0,_0x5a5efd){},Window_ItemCategory[_0x510241(0x4d5)]['categoryNameWindowDrawText']=function(_0x5dfe93,_0x50600a){const _0x38d9c2=_0x510241,_0x2d5378=this[_0x38d9c2(0x29d)];_0x2d5378['drawText'](_0x5dfe93,0x0,_0x50600a['y'],_0x2d5378[_0x38d9c2(0x6c2)],_0x38d9c2(0x35c));},Window_ItemCategory[_0x510241(0x4d5)][_0x510241(0x22d)]=function(_0x3a087d,_0x15d2f7){const _0x259dc8=_0x510241,_0x5d3444=this[_0x259dc8(0x29d)],_0x42bced=$gameSystem[_0x259dc8(0x1e7)](),_0x3e849e=_0x15d2f7['x']+Math[_0x259dc8(0x409)](_0x15d2f7[_0x259dc8(0x4e1)]/0x2)+_0x42bced;_0x5d3444['x']=_0x5d3444[_0x259dc8(0x4e1)]/-0x2+_0x3e849e,_0x5d3444['y']=Math[_0x259dc8(0x409)](_0x15d2f7[_0x259dc8(0x42f)]/0x2);},Window_ItemList[_0x510241(0x4d5)][_0x510241(0x5c2)]=function(){const _0x24c233=_0x510241;if(this[_0x24c233(0x50d)]()){const _0x23a3bc=this[_0x24c233(0x3ed)]();if(this[_0x24c233(0x1ee)]()<=0x1){if(!this['isHandled'](_0x24c233(0x473))&&Input[_0x24c233(0x47f)](_0x24c233(0x473))){if('BPEbJ'!=='hBZLa')this['cursorPagedown']();else{const _0x243b61=_0x24c233(0x365);if(this[_0x24c233(0x4b6)][_0x243b61])return this[_0x24c233(0x4b6)][_0x243b61];let _0x361d27='';if(this['_itemData'][_0x24c233(0x4a2)]>0x0)_0x361d27+=_0x24c233(0x5b0)['format'](_0x172cf8['floor'](this[_0x24c233(0x28d)][_0x24c233(0x4a2)]*0x64));if(this[_0x24c233(0x28d)]['rateHP']>0x0&&this[_0x24c233(0x28d)][_0x24c233(0x480)]>0x0)_0x361d27+='\x20';if(this[_0x24c233(0x28d)][_0x24c233(0x480)]>0x0)_0x361d27+='+%1'['format'](this['_itemData'][_0x24c233(0x480)]);return _0x361d27;}}if(!this[_0x24c233(0x2fb)](_0x24c233(0x697))&&Input['isTriggered'](_0x24c233(0x697))){if(_0x24c233(0x686)!=='fpfwQ')this[_0x24c233(0x441)]();else{this[_0x24c233(0x6a8)]=!![];const _0x1e8390=_0x1bfb34['ItemsEquipsCore'][_0x24c233(0x30d)][_0x4846e3][_0x24c233(0x303)](this,_0xf3ea81,_0x422c2c);return this[_0x24c233(0x6a8)]=![],_0x1e8390;}}}else{if(this[_0x24c233(0x1ee)]()>0x1){Input[_0x24c233(0x54d)]('right')&&this[_0x24c233(0x69a)](Input[_0x24c233(0x47f)](_0x24c233(0x4ee)));Input[_0x24c233(0x54d)](_0x24c233(0x45b))&&this[_0x24c233(0x25e)](Input[_0x24c233(0x47f)](_0x24c233(0x45b)));if(this[_0x24c233(0x68f)]()){if('GxHMV'===_0x24c233(0x23c))return _0x27bebb['ItemsEquipsCore'][_0x24c233(0x5b3)][_0x24c233(0x534)][_0x24c233(0x38c)];else Input[_0x24c233(0x47f)](_0x24c233(0x473))&&Input[_0x24c233(0x692)](_0x24c233(0x5c8))&&('JxJjp'!==_0x24c233(0x552)?this[_0x24c233(0x2b2)](_0x5739c5['param'](_0x4ec93a),_0x1fbf59+_0x2b31e1,_0x1efe01,_0xbc58b9):this[_0x24c233(0x24d)]()),Input[_0x24c233(0x47f)](_0x24c233(0x697))&&Input[_0x24c233(0x692)]('shift')&&this['cursorPageup']();}else{if(_0x24c233(0x33f)!==_0x24c233(0x67a)){if(Input['isTriggered']('pagedown')){if('ufGMP'!==_0x24c233(0x1ed))this[_0x24c233(0x24d)]();else{const _0x51312c=_0xd963e6[_0x24c233(0x6b3)],_0x5cf04d=[_0x28f273,_0x1fb04c];return _0x5cf04d[_0x24c233(0x400)](_0x51312c[_0x24c233(0x4f6)]);}}Input[_0x24c233(0x47f)](_0x24c233(0x697))&&('KvXZr'===_0x24c233(0x3b7)?this['cursorPageup']():(_0x5d726f[_0x24c233(0x3e5)][_0x24c233(0x202)][_0x24c233(0x303)](this,_0x91e577),_0x320607[_0x24c233(0x3e5)][_0x24c233(0x51c)](_0x4b7c73,_0x3eb4b3)));}else this[_0x24c233(0x20b)]=this[_0x24c233(0x20b)]||0x0,this[_0x24c233(0x4b0)][_0x24c233(0x36e)](this[_0x24c233(0x20b)]);}}}Input[_0x24c233(0x54d)](_0x24c233(0x5be))&&(Input['isPressed'](_0x24c233(0x5c8))&&this[_0x24c233(0x59b)]()?this[_0x24c233(0x24d)]():this[_0x24c233(0x6d2)](Input[_0x24c233(0x47f)](_0x24c233(0x5be))));if(Input[_0x24c233(0x54d)]('up')){if(Input[_0x24c233(0x692)]('shift')&&this[_0x24c233(0x59b)]())this[_0x24c233(0x441)]();else{if('XXmLD'===_0x24c233(0x397))this[_0x24c233(0x35f)](Input['isTriggered']('up'));else{const _0x477fbf=this[_0x24c233(0x57c)](_0x3f7240),_0xd2a773=this['commandName'](_0x25abbb),_0x5a67e0=this['textSizeEx'](_0xd2a773)['width'];this[_0x24c233(0x1eb)](this[_0x24c233(0x6b0)](_0x40499d));const _0xe91fc0=this[_0x24c233(0x5e4)]();if(_0xe91fc0===_0x24c233(0x4ee))this[_0x24c233(0x4cd)](_0xd2a773,_0x477fbf['x']+_0x477fbf[_0x24c233(0x4e1)]-_0x5a67e0,_0x477fbf['y'],_0x5a67e0);else{if(_0xe91fc0==='center'){const _0x4d0711=_0x477fbf['x']+_0x44b233['floor']((_0x477fbf[_0x24c233(0x4e1)]-_0x5a67e0)/0x2);this[_0x24c233(0x4cd)](_0xd2a773,_0x4d0711,_0x477fbf['y'],_0x5a67e0);}else this[_0x24c233(0x4cd)](_0xd2a773,_0x477fbf['x'],_0x477fbf['y'],_0x5a67e0);}}}}Imported['VisuMZ_0_CoreEngine']&&this['processCursorHomeEndTrigger'](),this[_0x24c233(0x3ed)]()!==_0x23a3bc&&this[_0x24c233(0x3e7)]();}},Window_ItemList['prototype'][_0x510241(0x68f)]=function(){const _0x15918b=_0x510241,_0x1e51f6=SceneManager['_scene'],_0x33af9b=[Scene_Item,Scene_Shop];return _0x33af9b['includes'](_0x1e51f6[_0x15918b(0x4f6)]);},Window_ItemList[_0x510241(0x4d5)][_0x510241(0x24b)]=function(){const _0x5b33dd=_0x510241;Window_Selectable['prototype'][_0x5b33dd(0x24b)]['call'](this),this[_0x5b33dd(0x5b8)]&&this['_categoryWindow'][_0x5b33dd(0x28b)]()&&this[_0x5b33dd(0x5b8)][_0x5b33dd(0x24b)]();},Window_ItemList['prototype'][_0x510241(0x379)]=function(){const _0x37389b=_0x510241;Window_Selectable[_0x37389b(0x4d5)][_0x37389b(0x379)][_0x37389b(0x303)](this),this[_0x37389b(0x5b8)]&&this['_categoryWindow'][_0x37389b(0x28b)]()&&this[_0x37389b(0x5b8)][_0x37389b(0x379)]();},Window_ItemList[_0x510241(0x4d5)]['setCategory']=function(_0x3cb12c){const _0x170b4d=_0x510241;if(this[_0x170b4d(0x457)]!==_0x3cb12c){if('AEZCy'!=='oRbLp')this['_category']=_0x3cb12c,this['refresh'](),this[_0x170b4d(0x5b8)]&&this['_categoryWindow'][_0x170b4d(0x28b)]()?this[_0x170b4d(0x36e)](0x0):this['scrollTo'](0x0,0x0);else for(const _0x7b454e of _0x9c9bb3[_0x170b4d(0x4a6)]()){if(_0x7b454e)_0x2b3066+=_0x7b454e[_0x170b4d(0x589)][_0x298d66];}}},VisuMZ[_0x510241(0x3e5)][_0x510241(0x5ad)]=Window_ItemList[_0x510241(0x4d5)][_0x510241(0x1ee)],Window_ItemList['prototype'][_0x510241(0x1ee)]=function(){const _0x3b31b7=_0x510241;if(SceneManager[_0x3b31b7(0x6b3)][_0x3b31b7(0x4f6)]===Scene_Battle)return VisuMZ[_0x3b31b7(0x3e5)][_0x3b31b7(0x5ad)][_0x3b31b7(0x303)](this);else return SceneManager[_0x3b31b7(0x6b3)][_0x3b31b7(0x4f6)]===Scene_Map?_0x3b31b7(0x4c0)!==_0x3b31b7(0x584)?VisuMZ[_0x3b31b7(0x3e5)]['Window_ItemList_maxCols']['call'](this):this['commandWindowRectItemsEquipsCore']():VisuMZ['ItemsEquipsCore'][_0x3b31b7(0x5b3)]['ItemScene'][_0x3b31b7(0x273)];},VisuMZ['ItemsEquipsCore'][_0x510241(0x370)]=Window_ItemList[_0x510241(0x4d5)][_0x510241(0x324)],Window_ItemList['prototype'][_0x510241(0x324)]=function(){const _0x5938d5=_0x510241;if(this[_0x5938d5(0x1ee)]()<=0x1){if(_0x5938d5(0x486)!==_0x5938d5(0x613))return Window_Selectable[_0x5938d5(0x4d5)]['colSpacing'][_0x5938d5(0x303)](this);else this[_0x5938d5(0x24d)]();}else return VisuMZ[_0x5938d5(0x3e5)][_0x5938d5(0x370)][_0x5938d5(0x303)](this);},Window_ItemList[_0x510241(0x4d5)][_0x510241(0x400)]=function(_0x2cd253){const _0x443dd6=_0x510241;switch(this[_0x443dd6(0x457)]){case'AllItems':return DataManager['isItem'](_0x2cd253);case _0x443dd6(0x4a8):return DataManager[_0x443dd6(0x22f)](_0x2cd253)&&_0x2cd253[_0x443dd6(0x49b)]===0x1;case _0x443dd6(0x2f0):return DataManager[_0x443dd6(0x22f)](_0x2cd253)&&_0x2cd253['itypeId']===0x2;case _0x443dd6(0x440):return DataManager[_0x443dd6(0x22f)](_0x2cd253)&&_0x2cd253[_0x443dd6(0x49b)]===0x3;case'HiddenItemB':return DataManager[_0x443dd6(0x22f)](_0x2cd253)&&_0x2cd253[_0x443dd6(0x49b)]===0x4;case _0x443dd6(0x3b0):return DataManager['isItem'](_0x2cd253)&&_0x2cd253[_0x443dd6(0x254)];case _0x443dd6(0x614):return DataManager[_0x443dd6(0x22f)](_0x2cd253)&&!_0x2cd253['consumable'];case'AlwaysUsable':return DataManager[_0x443dd6(0x22f)](_0x2cd253)&&[0x0][_0x443dd6(0x400)](_0x2cd253[_0x443dd6(0x380)]);case _0x443dd6(0x679):return DataManager['isItem'](_0x2cd253)&&[0x0,0x1][_0x443dd6(0x400)](_0x2cd253[_0x443dd6(0x380)]);case _0x443dd6(0x45a):return DataManager[_0x443dd6(0x22f)](_0x2cd253)&&[0x0,0x2][_0x443dd6(0x400)](_0x2cd253[_0x443dd6(0x380)]);case _0x443dd6(0x26d):return DataManager[_0x443dd6(0x22f)](_0x2cd253)&&[0x3][_0x443dd6(0x400)](_0x2cd253[_0x443dd6(0x380)]);case _0x443dd6(0x4c1):return DataManager[_0x443dd6(0x2f3)](_0x2cd253);case _0x443dd6(0x43b):return DataManager[_0x443dd6(0x417)](_0x2cd253);default:if(this[_0x443dd6(0x457)][_0x443dd6(0x6b1)](/WTYPE:(\d+)/i))return DataManager['isWeapon'](_0x2cd253)&&_0x2cd253[_0x443dd6(0x6be)]===Number(RegExp['$1']);else{if(this[_0x443dd6(0x457)][_0x443dd6(0x6b1)](/WTYPE:(.*)/i)){if(_0x443dd6(0x2eb)!==_0x443dd6(0x2eb)){const _0x54b21b=_0x5302c3[_0x443dd6(0x529)];this['drawItemKeyData'](_0x54b21b,_0x1305f6,_0xf22093,_0x427487,!![],_0x443dd6(0x35c));}else{const _0x17335e=$dataSystem[_0x443dd6(0x393)]['indexOf'](String(RegExp['$1'])[_0x443dd6(0x569)]());return DataManager['isWeapon'](_0x2cd253)&&_0x2cd253['wtypeId']===_0x17335e;}}else{if(this[_0x443dd6(0x457)]['match'](/ATYPE:(\d+)/i))return DataManager[_0x443dd6(0x417)](_0x2cd253)&&_0x2cd253['atypeId']===Number(RegExp['$1']);else{if(this[_0x443dd6(0x457)][_0x443dd6(0x6b1)](/ATYPE:(.*)/i)){const _0x2d78a3=$dataSystem[_0x443dd6(0x4ff)][_0x443dd6(0x693)](String(RegExp['$1'])[_0x443dd6(0x569)]());return DataManager[_0x443dd6(0x417)](_0x2cd253)&&_0x2cd253[_0x443dd6(0x4d8)]===_0x2d78a3;}else{if(this[_0x443dd6(0x457)]['match'](/ETYPE:(\d+)/i)){if(_0x443dd6(0x690)!==_0x443dd6(0x265))return!!_0x2cd253&&_0x2cd253[_0x443dd6(0x5d6)]===Number(RegExp['$1']);else _0x173b45[_0x443dd6(0x3e5)][_0x443dd6(0x240)][_0x443dd6(0x303)](this),this[_0x443dd6(0x44f)]();}else{if(this['_category'][_0x443dd6(0x6b1)](/ETYPE:(.*)/i)){const _0x3a4840=$dataSystem['equipTypes'][_0x443dd6(0x693)](String(RegExp['$1'])[_0x443dd6(0x569)]());return DataManager[_0x443dd6(0x417)](_0x2cd253)&&_0x2cd253['etypeId']===_0x3a4840;}else{if(this[_0x443dd6(0x457)][_0x443dd6(0x6b1)](/Category:(.*)/i))return!!_0x2cd253&&_0x2cd253[_0x443dd6(0x407)][_0x443dd6(0x400)](String(RegExp['$1'])[_0x443dd6(0x606)]()[_0x443dd6(0x569)]());}}}}}}}return![];},Window_ItemList[_0x510241(0x4d5)][_0x510241(0x6cd)]=function(){return!![];},VisuMZ[_0x510241(0x3e5)][_0x510241(0x54f)]=Window_ItemList[_0x510241(0x4d5)][_0x510241(0x2a9)],Window_ItemList[_0x510241(0x4d5)][_0x510241(0x2a9)]=function(_0x66a426){const _0xf3bafe=_0x510241;VisuMZ[_0xf3bafe(0x3e5)][_0xf3bafe(0x54f)][_0xf3bafe(0x303)](this,_0x66a426),this['placeItemNewLabel'](_0x66a426);},Window_ItemList[_0x510241(0x4d5)][_0x510241(0x615)]=function(_0x59d97c,_0xf37479,_0x1243ce,_0x449b80){const _0x545d92=_0x510241;Window_Selectable[_0x545d92(0x4d5)][_0x545d92(0x615)][_0x545d92(0x303)](this,_0x59d97c,_0xf37479,_0x1243ce,_0x449b80);},Window_ItemList['prototype'][_0x510241(0x4d1)]=function(_0x514deb){const _0x5c2a7b=_0x510241,_0x580621=this['itemAt'](_0x514deb);if(!_0x580621||!this[_0x5c2a7b(0x6cd)]())return;if(!$gameParty['isNewItem'](_0x580621))return;const _0x2baa11=this[_0x5c2a7b(0x57c)](_0x514deb),_0x3b7b93=_0x2baa11['x'],_0x57ded1=_0x2baa11['y']+(this[_0x5c2a7b(0x49d)]()-ImageManager['iconHeight'])/0x2,_0x3163e7=VisuMZ[_0x5c2a7b(0x3e5)][_0x5c2a7b(0x5b3)][_0x5c2a7b(0x3bd)]['OffsetX'],_0x5a6d8f=VisuMZ[_0x5c2a7b(0x3e5)][_0x5c2a7b(0x5b3)][_0x5c2a7b(0x3bd)][_0x5c2a7b(0x564)];this[_0x5c2a7b(0x34a)](_0x580621,_0x3b7b93+_0x3163e7,_0x57ded1+_0x5a6d8f);},Window_ItemList[_0x510241(0x4d5)]['setStatusWindow']=function(_0x3d54f2){const _0x7aa6c7=_0x510241;this['_statusWindow']=_0x3d54f2,this[_0x7aa6c7(0x510)]();},VisuMZ['ItemsEquipsCore'][_0x510241(0x53c)]=Window_ItemList[_0x510241(0x4d5)][_0x510241(0x306)],Window_ItemList[_0x510241(0x4d5)][_0x510241(0x306)]=function(){const _0x1f20fa=_0x510241;VisuMZ[_0x1f20fa(0x3e5)][_0x1f20fa(0x53c)]['call'](this);if(this['_statusWindow']&&this['_statusWindow'][_0x1f20fa(0x4f6)]===Window_ShopStatus){if(_0x1f20fa(0x2d1)!==_0x1f20fa(0x2d1)){const _0x285260=0x0,_0x107fb5=this[_0x1f20fa(0x60d)](),_0x1416df=_0x1d16e0[_0x1f20fa(0x6ac)],_0x23666f=this[_0x1f20fa(0x3ce)]();return new _0xa87b9(_0x285260,_0x107fb5,_0x1416df,_0x23666f);}else this[_0x1f20fa(0x264)][_0x1f20fa(0x6a1)](this[_0x1f20fa(0x34d)]());}},Window_BattleItem['prototype'][_0x510241(0x3fd)]=function(_0x3355db){const _0x380634=_0x510241;return BattleManager[_0x380634(0x665)]()?BattleManager['actor']()[_0x380634(0x2a1)](_0x3355db):Window_ItemList[_0x380634(0x4d5)]['isEnabled'][_0x380634(0x303)](this,_0x3355db);},Window_EventItem[_0x510241(0x4d5)][_0x510241(0x6cd)]=function(){return![];},Window_EquipStatus[_0x510241(0x4d5)][_0x510241(0x5b1)]=function(){const _0x34f019=_0x510241;return VisuMZ['ItemsEquipsCore'][_0x34f019(0x5b3)][_0x34f019(0x619)]['EnableLayout'];},VisuMZ[_0x510241(0x3e5)][_0x510241(0x4fe)]=Window_EquipStatus[_0x510241(0x4d5)]['refresh'],Window_EquipStatus[_0x510241(0x4d5)]['refresh']=function(){const _0x3df414=_0x510241;this[_0x3df414(0x2ab)](),this[_0x3df414(0x65c)]();if(this['_actor'])this[_0x3df414(0x2a8)][_0x3df414(0x36f)]();this[_0x3df414(0x5b1)]()?this[_0x3df414(0x3b1)]():VisuMZ[_0x3df414(0x3e5)][_0x3df414(0x4fe)]['call'](this);},Window_EquipStatus[_0x510241(0x4d5)][_0x510241(0x3b1)]=function(){const _0x34b447=_0x510241;this[_0x34b447(0x55f)][_0x34b447(0x389)]();if(!this[_0x34b447(0x2a8)])return;if(this[_0x34b447(0x6d3)]()){if(_0x34b447(0x20c)===_0x34b447(0x20c)){const _0x56c8bb=ImageManager[_0x34b447(0x331)](this[_0x34b447(0x2a8)][_0x34b447(0x2b6)]());_0x56c8bb[_0x34b447(0x52a)](this['onMenuImageLoad']['bind'](this));}else _0x15cf10[_0x34b447(0x3e5)][_0x34b447(0x698)][_0x34b447(0x303)](this,_0x1e4a7c),_0x1ba46b[_0x34b447(0x3e5)]['Parse_Notetags_Batch'](_0x57b4fc,_0x5e4732);}else{if('PPweP'===_0x34b447(0x244))this[_0x34b447(0x225)]();else return _0x5558c7=_0x43b3f7(_0x2c2278),_0x1d624f[_0x34b447(0x6b1)](/#(.*)/i)?_0x34b447(0x56b)[_0x34b447(0x648)](_0x13ff79(_0x21c4a3['$1'])):this[_0x34b447(0x2a6)](_0x1b9dcb(_0x14a495));}},Window_EquipStatus[_0x510241(0x4d5)][_0x510241(0x6d3)]=function(){const _0xbcea1c=_0x510241;return Imported[_0xbcea1c(0x27f)]&&this[_0xbcea1c(0x2a8)][_0xbcea1c(0x2b6)]()!==''&&VisuMZ[_0xbcea1c(0x3e5)][_0xbcea1c(0x5b3)][_0xbcea1c(0x619)]['MenuPortraits'];},Window_EquipStatus[_0x510241(0x4d5)][_0x510241(0x594)]=function(){const _0x2aae9d=_0x510241;VisuMZ[_0x2aae9d(0x3e5)][_0x2aae9d(0x5b3)][_0x2aae9d(0x619)]['DrawPortraitJS']['call'](this),this[_0x2aae9d(0x430)]();},Window_EquipStatus[_0x510241(0x4d5)][_0x510241(0x225)]=function(){const _0x4899a9=_0x510241;VisuMZ['ItemsEquipsCore'][_0x4899a9(0x5b3)]['EquipScene']['DrawFaceJS'][_0x4899a9(0x303)](this),this[_0x4899a9(0x430)]();},Window_EquipStatus['prototype'][_0x510241(0x430)]=function(){const _0x3ca2bd=_0x510241;this['resetFontSettings'](),VisuMZ['ItemsEquipsCore'][_0x3ca2bd(0x5b3)][_0x3ca2bd(0x619)]['DrawParamJS']['call'](this);},Window_EquipStatus['prototype'][_0x510241(0x456)]=function(_0x2ff448,_0x45ac20,_0x2bc2f8,_0x58dba7,_0x6baa1f){const _0x935843=_0x510241,_0x449b0=ImageManager['loadPicture'](_0x2ff448[_0x935843(0x2b6)]()),_0x4fc55e=this[_0x935843(0x6c2)]-_0x449b0['width'];_0x45ac20+=_0x4fc55e/0x2;if(_0x4fc55e<0x0)_0x58dba7-=_0x4fc55e;Window_StatusBase[_0x935843(0x4d5)][_0x935843(0x456)][_0x935843(0x303)](this,_0x2ff448,_0x45ac20,_0x2bc2f8,_0x58dba7,_0x6baa1f);},Window_EquipStatus[_0x510241(0x4d5)][_0x510241(0x497)]=function(){const _0x4aa6ef=_0x510241;if(Imported['VisuMZ_0_CoreEngine']){if(_0x4aa6ef(0x65d)!==_0x4aa6ef(0x283))return VisuMZ[_0x4aa6ef(0x3b4)]['Settings']['Param'][_0x4aa6ef(0x21e)];else{const _0x3319ef=this['statusWindowRect']();this[_0x4aa6ef(0x264)]=new _0xe99f19(_0x3319ef),this['addWindow'](this[_0x4aa6ef(0x264)]),this[_0x4aa6ef(0x5a2)][_0x4aa6ef(0x3ad)](this[_0x4aa6ef(0x264)]);const _0x28367d=_0x496da9[_0x4aa6ef(0x3e5)][_0x4aa6ef(0x5b3)][_0x4aa6ef(0x534)][_0x4aa6ef(0x470)];this[_0x4aa6ef(0x264)]['setBackgroundType'](_0x28367d||0x0);}}else{if(_0x4aa6ef(0x435)!==_0x4aa6ef(0x228))return[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];else this['drawTextEx'](_0x1caaf9,_0x3d8132['x']+_0x33d9b7[_0x4aa6ef(0x4e1)]-_0x173b5e,_0x4c9707['y'],_0x27a2a5);}},Window_EquipStatus['prototype'][_0x510241(0x2d9)]=function(){const _0x4adcf6=_0x510241;return VisuMZ['ItemsEquipsCore']['Settings']['EquipScene'][_0x4adcf6(0x3d5)];},Window_EquipStatus[_0x510241(0x4d5)][_0x510241(0x3cd)]=function(){const _0x504659=_0x510241;return Imported[_0x504659(0x57d)]&&VisuMZ[_0x504659(0x3b4)][_0x504659(0x5b3)]['Param']['DrawIcons'];},Window_EquipStatus['prototype'][_0x510241(0x329)]=function(_0x12beec,_0x599579,_0x433ca8,_0x19f7cf){const _0x3e8b83=_0x510241,_0x326c3d=this['itemPadding']();Imported[_0x3e8b83(0x57d)]?this[_0x3e8b83(0x58c)](_0x599579+_0x326c3d,_0x433ca8,_0x19f7cf,_0x12beec,![]):_0x3e8b83(0x6b9)==='ZhVaY'?(this[_0x3e8b83(0x676)](),this[_0x3e8b83(0x306)]()):this[_0x3e8b83(0x2b2)](TextManager[_0x3e8b83(0x699)](_0x12beec),_0x599579+_0x326c3d,_0x433ca8,_0x19f7cf);},Window_EquipStatus['prototype'][_0x510241(0x565)]=function(_0x116c4b,_0xbe0939,_0x530bc7,_0x39dc7b){const _0x19a415=_0x510241,_0x20bf55=this[_0x19a415(0x499)]();let _0x7295d3=0x0;if(Imported[_0x19a415(0x57d)]){if(_0x19a415(0x540)===_0x19a415(0x2a0))return this[_0x19a415(0x5b1)]()?this[_0x19a415(0x5f8)]():_0x1782ab[_0x19a415(0x3e5)]['Scene_Shop_helpWindowRect']['call'](this);else _0x7295d3=this[_0x19a415(0x2a8)][_0x19a415(0x3be)](_0x116c4b,!![]);}else{if('xXWuG'===_0x19a415(0x6ce))_0x7295d3=this[_0x19a415(0x2a8)][_0x19a415(0x699)](_0x116c4b);else{if(_0x327303===null&&this[_0x19a415(0x578)]()[_0x19a415(0x400)](this['etypeId']()))return![];else{_0x26bc25[_0x19a415(0x580)]=!![];let _0x414483=_0xfd18c3[_0x19a415(0x3e5)][_0x19a415(0x608)][_0x19a415(0x303)](this,_0x197314);return _0x5789a2[_0x19a415(0x580)]=_0x3e85ef,_0x414483;}}}const _0x164f1c=_0x7295d3;this[_0x19a415(0x2b2)](_0x7295d3,_0xbe0939,_0x530bc7,_0x39dc7b-_0x20bf55,_0x19a415(0x4ee));},Window_EquipStatus[_0x510241(0x4d5)][_0x510241(0x372)]=function(_0x5574e3,_0x526010,_0x26fde1,_0xbd7f4b){const _0x41b05a=_0x510241,_0x12abf9=this[_0x41b05a(0x499)]();let _0x48cf37=0x0,_0x1c6715=0x0,_0x3fed6f='';if(this[_0x41b05a(0x547)]){if(Imported[_0x41b05a(0x57d)]){if(_0x41b05a(0x3f0)!==_0x41b05a(0x63c))_0x48cf37=this['_actor'][_0x41b05a(0x3be)](_0x5574e3,![]),_0x1c6715=this[_0x41b05a(0x547)][_0x41b05a(0x3be)](_0x5574e3,![]),_0x3fed6f=this[_0x41b05a(0x547)][_0x41b05a(0x3be)](_0x5574e3,!![]);else return'#'+_0x51a7c1(_0x213d3f['$1']);}else{if(_0x41b05a(0x2d6)!=='PeCyi')_0x48cf37=this[_0x41b05a(0x2a8)][_0x41b05a(0x699)](_0x5574e3),_0x1c6715=this[_0x41b05a(0x547)][_0x41b05a(0x699)](_0x5574e3),_0x3fed6f=this['_tempActor'][_0x41b05a(0x699)](_0x5574e3);else return![];}const _0x33dc7a=_0x48cf37,_0x5044fa=_0x1c6715;diffValue=_0x5044fa-_0x33dc7a,this[_0x41b05a(0x4c5)](ColorManager[_0x41b05a(0x4c3)](diffValue)),this[_0x41b05a(0x2b2)](_0x3fed6f,_0x526010,_0x26fde1,_0xbd7f4b-_0x12abf9,_0x41b05a(0x4ee));}},Window_EquipStatus[_0x510241(0x4d5)][_0x510241(0x624)]=function(_0xe45c1c,_0x3b8340,_0x504513,_0x319270){const _0x179fbb=_0x510241,_0x547d24=this[_0x179fbb(0x499)]();let _0x47792c=0x0,_0x2dd1f7=0x0,_0x22c1c1=![];if(this[_0x179fbb(0x547)]){Imported[_0x179fbb(0x57d)]?(_0x47792c=this['_actor']['paramValueByName'](_0xe45c1c,![]),_0x2dd1f7=this[_0x179fbb(0x547)]['paramValueByName'](_0xe45c1c,![]),_0x22c1c1=String(this['_actor'][_0x179fbb(0x3be)](_0xe45c1c,!![]))[_0x179fbb(0x6b1)](/([%％])/i)):'XIAiR'!==_0x179fbb(0x3e1)?(_0x47792c=this[_0x179fbb(0x2a8)][_0x179fbb(0x699)](_0xe45c1c),_0x2dd1f7=this[_0x179fbb(0x547)]['param'](_0xe45c1c),_0x22c1c1=_0x47792c%0x1!==0x0||_0x2dd1f7%0x1!==0x0):(_0x485089+=_0x1ce6b8(_0x582423['$1']),_0x20c5fc+=_0x30be6c(_0x4f6f37['$2']));const _0x23db7f=_0x47792c,_0xd05d5f=_0x2dd1f7,_0xbca003=_0xd05d5f-_0x23db7f;let _0x157c96=_0xbca003;if(_0x22c1c1)_0x157c96=Math[_0x179fbb(0x3ba)](_0xbca003*0x64)+'%';_0xbca003!==0x0&&(this[_0x179fbb(0x4c5)](ColorManager['paramchangeTextColor'](_0xbca003)),_0x157c96=(_0xbca003>0x0?'(+%1)':'(%1)')[_0x179fbb(0x648)](_0x157c96),this['drawText'](_0x157c96,_0x3b8340+_0x547d24,_0x504513,_0x319270,_0x179fbb(0x45b)));}},Window_EquipStatus['prototype'][_0x510241(0x5ac)]=function(_0xcc37f0,_0x3b7697,_0x2bbcdf,_0x4ff8b3,_0x1062ad){const _0x1e560a=_0x510241;if(VisuMZ['ItemsEquipsCore'][_0x1e560a(0x5b3)][_0x1e560a(0x619)]['DrawBackRect']===![])return;_0x1062ad=Math[_0x1e560a(0x20e)](_0x1062ad||0x1,0x1);while(_0x1062ad--){_0x4ff8b3=_0x4ff8b3||this[_0x1e560a(0x49d)](),this[_0x1e560a(0x55f)][_0x1e560a(0x1f2)]=0xa0;const _0x57262d=ColorManager[_0x1e560a(0x238)]();this['contents'][_0x1e560a(0x581)](_0xcc37f0+0x1,_0x3b7697+0x1,_0x2bbcdf-0x2,_0x4ff8b3-0x2,_0x57262d),this[_0x1e560a(0x55f)]['paintOpacity']=0xff;}},ColorManager[_0x510241(0x238)]=function(){const _0x4ad078=_0x510241,_0x4feac4=VisuMZ[_0x4ad078(0x3e5)]['Settings'][_0x4ad078(0x619)];let _0x4ee5e4=_0x4feac4[_0x4ad078(0x48a)]!==undefined?_0x4feac4[_0x4ad078(0x48a)]:0x13;return ColorManager['getColor'](_0x4ee5e4);},VisuMZ[_0x510241(0x3e5)]['Window_EquipCommand_initialize']=Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x4fb)],Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x4fb)]=function(_0x28d6c2){const _0x14fcbb=_0x510241;VisuMZ['ItemsEquipsCore'][_0x14fcbb(0x2e6)][_0x14fcbb(0x303)](this,_0x28d6c2),this[_0x14fcbb(0x5b2)](_0x28d6c2);},Window_EquipCommand[_0x510241(0x4d5)]['createCommandNameWindow']=function(_0x301034){const _0x1047f8=_0x510241,_0x5e794e=new Rectangle(0x0,0x0,_0x301034[_0x1047f8(0x4e1)],_0x301034[_0x1047f8(0x42f)]);this[_0x1047f8(0x4cc)]=new Window_Base(_0x5e794e),this[_0x1047f8(0x4cc)][_0x1047f8(0x5a9)]=0x0,this[_0x1047f8(0x419)](this[_0x1047f8(0x4cc)]),this[_0x1047f8(0x496)]();},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x510)]=function(){const _0xc9ca49=_0x510241;Window_HorzCommand[_0xc9ca49(0x4d5)][_0xc9ca49(0x510)][_0xc9ca49(0x303)](this);if(this['_commandNameWindow'])this[_0xc9ca49(0x496)]();},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x496)]=function(){const _0x4b0ae3=_0x510241,_0x5b5c11=this[_0x4b0ae3(0x4cc)];_0x5b5c11[_0x4b0ae3(0x55f)][_0x4b0ae3(0x389)]();const _0x3ceaf8=this['commandStyleCheck'](this[_0x4b0ae3(0x3ed)]());if(_0x3ceaf8===_0x4b0ae3(0x46e)){const _0x2c6cb4=this[_0x4b0ae3(0x57c)](this['index']());let _0x4e232b=this['commandName'](this[_0x4b0ae3(0x3ed)]());_0x4e232b=_0x4e232b[_0x4b0ae3(0x2e8)](/\\I\[(\d+)\]/gi,''),_0x5b5c11[_0x4b0ae3(0x65c)](),this[_0x4b0ae3(0x658)](_0x4e232b,_0x2c6cb4),this[_0x4b0ae3(0x2da)](_0x4e232b,_0x2c6cb4),this[_0x4b0ae3(0x53a)](_0x4e232b,_0x2c6cb4);}},Window_EquipCommand[_0x510241(0x4d5)]['commandNameWindowDrawBackground']=function(_0x211c18,_0x34eab8){},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x2da)]=function(_0x38340e,_0x3ef1e7){const _0x4899ab=_0x510241,_0x28a008=this[_0x4899ab(0x4cc)];_0x28a008[_0x4899ab(0x2b2)](_0x38340e,0x0,_0x3ef1e7['y'],_0x28a008[_0x4899ab(0x6c2)],_0x4899ab(0x35c));},Window_EquipCommand[_0x510241(0x4d5)]['commandNameWindowCenter']=function(_0x2a5ce1,_0x490ee9){const _0x640764=_0x510241,_0x4c4816=this['_commandNameWindow'],_0x2697ce=$gameSystem[_0x640764(0x1e7)](),_0x2b285f=_0x490ee9['x']+Math['floor'](_0x490ee9[_0x640764(0x4e1)]/0x2)+_0x2697ce;_0x4c4816['x']=_0x4c4816[_0x640764(0x4e1)]/-0x2+_0x2b285f,_0x4c4816['y']=Math[_0x640764(0x409)](_0x490ee9[_0x640764(0x42f)]/0x2);},Window_EquipCommand['prototype'][_0x510241(0x28b)]=function(){const _0x1fdf12=_0x510241;return Imported[_0x1fdf12(0x57d)]&&Window_HorzCommand[_0x1fdf12(0x4d5)][_0x1fdf12(0x28b)][_0x1fdf12(0x303)](this);},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x348)]=function(){const _0x4d79a4=_0x510241;if(this[_0x4d79a4(0x666)]()===_0x4d79a4(0x3c3))Window_HorzCommand[_0x4d79a4(0x4d5)]['playOkSound']['call'](this);},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x5c2)]=function(){const _0xac3939=_0x510241;!this['processCursorSpecialCheckModernControls']()&&Window_HorzCommand[_0xac3939(0x4d5)][_0xac3939(0x5c2)][_0xac3939(0x303)](this);},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x56e)]=function(){const _0x35300c=_0x510241;if(!this[_0x35300c(0x50d)]())return![];if(SceneManager[_0x35300c(0x6b3)][_0x35300c(0x4f6)]!==Scene_Equip)return![];return Input[_0x35300c(0x47f)](_0x35300c(0x5be))&&(_0x35300c(0x328)!==_0x35300c(0x328)?_0x5796df=_0x2d3cb8['armorTypes'][_0x3f4213(_0x280cb5['$1'])]||'':(this[_0x35300c(0x3e7)](),SceneManager[_0x35300c(0x6b3)][_0x35300c(0x2b3)](),SceneManager['_scene']['_slotWindow'][_0x35300c(0x36e)](-0x1))),![];},Window_EquipCommand['prototype']['maxCols']=function(){const _0x148550=_0x510241;return this['_list']?this['_list'][_0x148550(0x535)]:0x3;},Window_EquipCommand[_0x510241(0x4d5)]['processTouchModernControls']=function(){const _0x547502=_0x510241;if(this[_0x547502(0x607)]()&&this[_0x547502(0x200)]&&SceneManager[_0x547502(0x6b3)][_0x547502(0x4f6)]===Scene_Equip){if(this[_0x547502(0x660)]()&&TouchInput[_0x547502(0x5cb)]())this[_0x547502(0x38d)](![]);else TouchInput[_0x547502(0x47f)]()&&this[_0x547502(0x38d)](!![]);TouchInput[_0x547502(0x395)]()&&(_0x547502(0x281)===_0x547502(0x281)?this[_0x547502(0x49c)]():(_0x334dda=_0x3e51de['max'](this[_0x547502(0x22a)](_0x13a56b,_0x4ea047+0x4,_0x4baf0f+0x4,_0x50ee4f),_0x5c2d7a),_0x15c561+=_0x5bb42f));}},Window_EquipCommand['prototype']['onTouchSelectModernControls']=function(_0x18d2dc){const _0x4322bd=_0x510241;this['_doubleTouch']=![];const _0x308f31=this[_0x4322bd(0x3ed)](),_0x17e165=this[_0x4322bd(0x3ca)](),_0x5e8ecb=SceneManager[_0x4322bd(0x6b3)][_0x4322bd(0x61d)];if(_0x5e8ecb[_0x4322bd(0x607)]()&&_0x5e8ecb[_0x4322bd(0x200)]){if('kMYNF'!==_0x4322bd(0x298)){let _0x21c880=0x0;const _0x1f3cc5=this[_0x4322bd(0x412)](),_0x52e022=this[_0x4322bd(0x2fe)]();for(let _0x27ce62=0x0;_0x27ce62<_0x1f3cc5['length'];_0x27ce62++){if(_0x1f3cc5[_0x27ce62]===_0x21b0b){_0x21c880=_0x27ce62;if(!_0x52e022[_0x27ce62])return _0x21c880;}}return _0x21c880;}else{if(_0x17e165>=0x0){if(_0x17e165===this[_0x4322bd(0x3ed)]()){if(_0x4322bd(0x31c)!=='sYvjH')this[_0x4322bd(0x258)]=!![];else{const _0x42731f=_0x35e8e0[_0x4322bd(0x312)]('['+_0x12b1c6['$1'][_0x4322bd(0x6b1)](/\d+/g)+']');for(const _0x440aa0 of _0x42731f){if(!_0x55cfa7[_0x4322bd(0x5a5)](_0x440aa0))return![];}}}this[_0x4322bd(0x24b)](),this[_0x4322bd(0x674)](_0x17e165);}else _0x5e8ecb[_0x4322bd(0x3ca)]()>=0x0&&(this[_0x4322bd(0x379)](),this[_0x4322bd(0x2ca)]());}}if(_0x18d2dc&&this[_0x4322bd(0x3ed)]()!==_0x308f31){if(_0x4322bd(0x3ff)!=='UOMZp'){const _0x3ed2d6='%1-%2'['format'](_0x1804c2,_0x1af1f3);_0x2548f4[_0x4322bd(0x3e5)][_0x4322bd(0x30d)][_0x3ed2d6]=new _0x324900(_0x4322bd(0x34d),_0x4322bd(0x345),_0x20eb73);}else this[_0x4322bd(0x3e7)]();}},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x659)]=function(){const _0xd4a866=_0x510241;this[_0xd4a866(0x410)](),this['addOptimizeCommand'](),this['addClearCommand']();},Window_EquipCommand['prototype'][_0x510241(0x36f)]=function(){const _0x33572f=_0x510241;Window_HorzCommand[_0x33572f(0x4d5)][_0x33572f(0x36f)][_0x33572f(0x303)](this),this[_0x33572f(0x5da)]();},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x410)]=function(){const _0x19834e=_0x510241;if(!this['isEquipCommandAdded']())return;const _0x41fb0=this['commandStyle'](),_0x212e84=VisuMZ[_0x19834e(0x3e5)][_0x19834e(0x5b3)][_0x19834e(0x619)]['CmdIconEquip'],_0xaa22a8=_0x41fb0===_0x19834e(0x411)?TextManager[_0x19834e(0x629)]:_0x19834e(0x2c2)[_0x19834e(0x648)](_0x212e84,TextManager[_0x19834e(0x629)]),_0x309f05=this[_0x19834e(0x531)]();this['addCommand'](_0xaa22a8,_0x19834e(0x3c3),_0x309f05);},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x3ea)]=function(){return!this['isUseModernControls']();},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x531)]=function(){return!![];},Window_EquipCommand[_0x510241(0x4d5)]['addOptimizeCommand']=function(){const _0x426a08=_0x510241;if(!this[_0x426a08(0x51d)]())return;const _0x41dadf=this[_0x426a08(0x32b)](),_0x29db28=VisuMZ[_0x426a08(0x3e5)][_0x426a08(0x5b3)][_0x426a08(0x619)][_0x426a08(0x2e4)],_0x1efe96=_0x41dadf===_0x426a08(0x411)?TextManager[_0x426a08(0x3e9)]:_0x426a08(0x2c2)['format'](_0x29db28,TextManager[_0x426a08(0x3e9)]),_0x46792e=this[_0x426a08(0x336)]();this['addCommand'](_0x1efe96,_0x426a08(0x3e9),_0x46792e);},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x51d)]=function(){const _0x8cfd26=_0x510241;return VisuMZ['ItemsEquipsCore']['Settings'][_0x8cfd26(0x619)]['CommandAddOptimize'];},Window_EquipCommand[_0x510241(0x4d5)]['isOptimizeCommandEnabled']=function(){return!![];},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x4e4)]=function(){const _0x17318a=_0x510241;if(!this[_0x17318a(0x42b)]())return;const _0x5e83fd=this[_0x17318a(0x32b)](),_0x306c99=VisuMZ[_0x17318a(0x3e5)][_0x17318a(0x5b3)][_0x17318a(0x619)][_0x17318a(0x5e9)],_0x570c14=_0x5e83fd===_0x17318a(0x411)?TextManager['clear']:_0x17318a(0x2c2)[_0x17318a(0x648)](_0x306c99,TextManager[_0x17318a(0x389)]),_0x589998=this[_0x17318a(0x3ee)]();this[_0x17318a(0x455)](_0x570c14,_0x17318a(0x389),_0x589998);},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x42b)]=function(){const _0x1aa380=_0x510241;return VisuMZ[_0x1aa380(0x3e5)][_0x1aa380(0x5b3)][_0x1aa380(0x619)][_0x1aa380(0x67b)];},Window_EquipCommand['prototype']['isClearCommandEnabled']=function(){return!![];},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x5e4)]=function(){const _0x4528ed=_0x510241;return VisuMZ[_0x4528ed(0x3e5)]['Settings'][_0x4528ed(0x619)][_0x4528ed(0x261)];},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x2a9)]=function(_0x39c9af){const _0x1a040d=_0x510241,_0x86e841=this[_0x1a040d(0x4d0)](_0x39c9af);if(_0x86e841===_0x1a040d(0x291)){if(_0x1a040d(0x672)===_0x1a040d(0x609))return _0x349b52['ItemsEquipsCore']['Window_ItemList_maxCols']['call'](this);else this[_0x1a040d(0x2e3)](_0x39c9af);}else{if(_0x86e841===_0x1a040d(0x46e)){if(_0x1a040d(0x438)==='skjcL'){const _0x38cb3f=_0x5ca220[_0x1742bf];if(_0x38cb3f&&_0x38cb3f[_0x1a040d(0x516)]>0x0){_0xf0e053+=_0x1a040d(0x317)[_0x1a040d(0x648)](_0x38cb3f['iconIndex']),_0x37d955++;if(_0x43c7a3>=_0x56b548)return _0x54b155;}}else this[_0x1a040d(0x3ae)](_0x39c9af);}else{if(_0x1a040d(0x483)!==_0x1a040d(0x1f9))Window_HorzCommand[_0x1a040d(0x4d5)][_0x1a040d(0x2a9)]['call'](this,_0x39c9af);else{const _0x262a4b=this['getItemDamageAmountLabel']();this[_0x1a040d(0x36b)](_0x262a4b,_0xbc4bf1,_0x32f315,_0xe26908,!![]),this['setupItemDamageTempActors']();const _0x45589d=this[_0x1a040d(0x4f1)](),_0x1ecc7e=_0x475b69[_0x1a040d(0x279)]([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0x1a040d(0x207)]['damage'][_0x1a040d(0x3ef)]]);return this[_0x1a040d(0x4c5)](_0x1ecc7e),this['drawItemKeyData'](_0x45589d,_0x40693c,_0x2402bf,_0x1a54ce,![],_0x1a040d(0x4ee)),this[_0x1a040d(0x5ac)](_0x32c6c,_0x484496,_0x5cdeca),this['resetFontSettings'](),!![];}}}},Window_EquipCommand['prototype'][_0x510241(0x32b)]=function(){const _0x5e5711=_0x510241;return VisuMZ[_0x5e5711(0x3e5)][_0x5e5711(0x5b3)][_0x5e5711(0x619)][_0x5e5711(0x5d3)];},Window_EquipCommand[_0x510241(0x4d5)]['commandStyleCheck']=function(_0x2d5d50){const _0x1cd5e0=_0x510241;if(_0x2d5d50<0x0)return _0x1cd5e0(0x411);const _0x5e7bdd=this[_0x1cd5e0(0x32b)]();if(_0x5e7bdd!=='auto')return _0x5e7bdd;else{if(this[_0x1cd5e0(0x327)]()>0x0){const _0x11554a=this[_0x1cd5e0(0x678)](_0x2d5d50);if(_0x11554a['match'](/\\I\[(\d+)\]/i)){const _0x15d5da=this[_0x1cd5e0(0x57c)](_0x2d5d50),_0x11107a=this[_0x1cd5e0(0x5d5)](_0x11554a)[_0x1cd5e0(0x4e1)];return _0x11107a<=_0x15d5da[_0x1cd5e0(0x4e1)]?_0x1cd5e0(0x291):_0x1cd5e0(0x46e);}}}return _0x1cd5e0(0x411);},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x2e3)]=function(_0x1d8066){const _0x495da5=_0x510241,_0x4e1af8=this[_0x495da5(0x57c)](_0x1d8066),_0x293ae6=this['commandName'](_0x1d8066),_0x235c14=this['textSizeEx'](_0x293ae6)[_0x495da5(0x4e1)];this[_0x495da5(0x1eb)](this[_0x495da5(0x6b0)](_0x1d8066));const _0x50ad3c=this['itemTextAlign']();if(_0x50ad3c==='right'){if('yMXNC'!==_0x495da5(0x4d7)){const _0x44fb06=this[_0x495da5(0x2ef)]()?this[_0x495da5(0x314)]():0x0,_0x4ac312=this['_categoryWindow']['y']+this[_0x495da5(0x5b8)][_0x495da5(0x42f)],_0x13985c=_0x38360c['boxWidth']-this[_0x495da5(0x314)](),_0x3c614b=this[_0x495da5(0x61e)]()-_0x4ac312;return new _0x3a4c30(_0x44fb06,_0x4ac312,_0x13985c,_0x3c614b);}else this['drawTextEx'](_0x293ae6,_0x4e1af8['x']+_0x4e1af8[_0x495da5(0x4e1)]-_0x235c14,_0x4e1af8['y'],_0x235c14);}else{if(_0x50ad3c===_0x495da5(0x35c)){if('lRUAQ'==='RqnKd')_0x69ae5c[_0x495da5(0x4d5)]['drawItemNumber'][_0x495da5(0x303)](this,_0x458d39,_0xf8107d,_0x108e67,_0x280e74);else{const _0x1f17ae=_0x4e1af8['x']+Math['floor']((_0x4e1af8[_0x495da5(0x4e1)]-_0x235c14)/0x2);this['drawTextEx'](_0x293ae6,_0x1f17ae,_0x4e1af8['y'],_0x235c14);}}else this['drawTextEx'](_0x293ae6,_0x4e1af8['x'],_0x4e1af8['y'],_0x235c14);}},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x3ae)]=function(_0x14a4e0){const _0x3c7ea0=_0x510241;this[_0x3c7ea0(0x678)](_0x14a4e0)[_0x3c7ea0(0x6b1)](/\\I\[(\d+)\]/i);const _0x426bbb=Number(RegExp['$1'])||0x0,_0x68c7a7=this[_0x3c7ea0(0x57c)](_0x14a4e0),_0x114e86=_0x68c7a7['x']+Math[_0x3c7ea0(0x409)]((_0x68c7a7[_0x3c7ea0(0x4e1)]-ImageManager[_0x3c7ea0(0x51a)])/0x2),_0x2ae3b0=_0x68c7a7['y']+(_0x68c7a7[_0x3c7ea0(0x42f)]-ImageManager['iconHeight'])/0x2;this[_0x3c7ea0(0x1e8)](_0x426bbb,_0x114e86,_0x2ae3b0);},Window_EquipCommand['prototype'][_0x510241(0x665)]=function(){const _0x2748ef=_0x510241,_0x5f5619=SceneManager[_0x2748ef(0x6b3)];if(_0x5f5619&&_0x5f5619[_0x2748ef(0x563)])return _0x5f5619[_0x2748ef(0x563)]();return null;},Window_EquipCommand[_0x510241(0x4d5)][_0x510241(0x306)]=function(){const _0x177d37=_0x510241;Window_Command[_0x177d37(0x4d5)][_0x177d37(0x306)][_0x177d37(0x303)](this),this[_0x177d37(0x6bc)][_0x177d37(0x33b)](this[_0x177d37(0x31b)]());},Window_EquipCommand['prototype'][_0x510241(0x31b)]=function(){const _0x319334=_0x510241,_0x5d5051=this['currentSymbol']();switch(_0x5d5051){case _0x319334(0x3c3):return TextManager['ITEMS_EQUIPS_CORE'][_0x319334(0x39f)][_0x319334(0x3c3)];case _0x319334(0x3e9):return TextManager[_0x319334(0x4ca)][_0x319334(0x39f)][_0x319334(0x3e9)];case'clear':return TextManager[_0x319334(0x4ca)][_0x319334(0x39f)][_0x319334(0x389)];default:return'';}},Window_EquipSlot['prototype'][_0x510241(0x28b)]=function(){const _0x1dee45=_0x510241;return Imported[_0x1dee45(0x57d)]&&Window_HorzCommand[_0x1dee45(0x4d5)][_0x1dee45(0x28b)][_0x1dee45(0x303)](this);},Window_EquipSlot[_0x510241(0x4d5)][_0x510241(0x24b)]=function(){const _0x4281f8=_0x510241;Window_StatusBase[_0x4281f8(0x4d5)][_0x4281f8(0x24b)][_0x4281f8(0x303)](this),this[_0x4281f8(0x510)]();},Window_EquipSlot[_0x510241(0x4d5)]['processCursorMove']=function(){const _0x115a18=_0x510241;Window_StatusBase[_0x115a18(0x4d5)][_0x115a18(0x23d)][_0x115a18(0x303)](this),this[_0x115a18(0x67c)]();},Window_EquipSlot[_0x510241(0x4d5)]['checkShiftRemoveShortcut']=function(){const _0x25eafc=_0x510241;if(!this['isShiftRemoveShortcutEnabled']())return;if(Input[_0x25eafc(0x47f)]('shift')&&this[_0x25eafc(0x34d)]()){if(_0x25eafc(0x6cc)!=='YxWlt'){const _0x1dd9a2=_0x2e4400[_0x25eafc(0x4bd)](this);_0x1dd9a2[_0x25eafc(0x547)]=!![],_0x3657c4[_0x25eafc(0x3e5)][_0x25eafc(0x3b8)][_0x25eafc(0x303)](this,_0x3a327f,_0xf8fc9e),this[_0x25eafc(0x396)](_0x1dd9a2);}else{const _0x7795fe=SceneManager[_0x25eafc(0x6b3)]['_actor'];if(_0x7795fe){if(_0x25eafc(0x2ea)!==_0x25eafc(0x68c))this[_0x25eafc(0x50c)](this[_0x25eafc(0x3ed)]())?(this[_0x25eafc(0x676)](),this[_0x25eafc(0x306)]()):_0x25eafc(0x3bc)===_0x25eafc(0x533)?_0x3ed237+=_0x4a0d18[_0x25eafc(0x51a)]+0x4:this['playBuzzerSound']();else{if(!this['meetsEquipRequirement'](_0x325edb,_0x776a7e))return![];}}}}},Window_EquipSlot[_0x510241(0x4d5)][_0x510241(0x50c)]=function(_0x1b5df0){const _0x1705a5=_0x510241,_0xaabe39=SceneManager[_0x1705a5(0x6b3)][_0x1705a5(0x2a8)];if(!_0xaabe39)return;if(!_0xaabe39[_0x1705a5(0x350)](this[_0x1705a5(0x3ed)]())){if(_0x1705a5(0x344)===_0x1705a5(0x22e))_0x1b4178=_0x1705a5(0x367)['format'](_0x35b2ba['id']);else return![];}const _0x3d50be=_0xaabe39[_0x1705a5(0x412)]()[this[_0x1705a5(0x3ed)]()];if(_0xaabe39['nonRemovableEtypes']()[_0x1705a5(0x400)](_0x3d50be))return![];return!![];;},Window_EquipSlot[_0x510241(0x4d5)]['processShiftRemoveShortcut']=function(){const _0x4a3acc=_0x510241;SoundManager[_0x4a3acc(0x69b)]();const _0x3dece8=SceneManager[_0x4a3acc(0x6b3)]['_actor'];_0x3dece8['changeEquip'](this[_0x4a3acc(0x3ed)](),null),this[_0x4a3acc(0x36f)](),this[_0x4a3acc(0x5a2)][_0x4a3acc(0x36f)](),this[_0x4a3acc(0x510)]();const _0x162669=SceneManager[_0x4a3acc(0x6b3)][_0x4a3acc(0x264)];if(_0x162669)_0x162669[_0x4a3acc(0x36f)]();},Window_EquipSlot[_0x510241(0x4d5)][_0x510241(0x32a)]=function(){const _0x3f87c6=_0x510241;if(!this[_0x3f87c6(0x402)])return![];if(!VisuMZ[_0x3f87c6(0x3e5)][_0x3f87c6(0x5b3)][_0x3f87c6(0x619)][_0x3f87c6(0x28e)])return![];return!![];},Window_EquipSlot[_0x510241(0x4d5)][_0x510241(0x5c2)]=function(){const _0x365f11=_0x510241;!this['processCursorSpecialCheckModernControls']()&&Window_StatusBase[_0x365f11(0x4d5)][_0x365f11(0x5c2)][_0x365f11(0x303)](this);},Window_EquipSlot['prototype'][_0x510241(0x56e)]=function(){const _0x3eef96=_0x510241;if(!this[_0x3eef96(0x50d)]())return![];if(SceneManager[_0x3eef96(0x6b3)][_0x3eef96(0x4f6)]!==Scene_Equip)return![];if(this[_0x3eef96(0x349)]())return this[_0x3eef96(0x3e7)](),Input[_0x3eef96(0x389)](),SceneManager[_0x3eef96(0x6b3)][_0x3eef96(0x5a1)](),![];else{if(Input['isRepeated'](_0x3eef96(0x5be))){const _0x3cb4af=this[_0x3eef96(0x3ed)]();return Input[_0x3eef96(0x692)](_0x3eef96(0x5c8))?this['cursorPagedown']():this[_0x3eef96(0x6d2)](Input['isTriggered'](_0x3eef96(0x5be))),this[_0x3eef96(0x3ed)]()!==_0x3cb4af&&(_0x3eef96(0x29a)==='RSRCG'?_0x50c2fa[_0x3eef96(0x56d)](_0x5b4ed0[_0x3eef96(0x432)],!![]):this[_0x3eef96(0x3e7)]()),!![];}else{if(this[_0x3eef96(0x649)]()&&Input[_0x3eef96(0x47f)](_0x3eef96(0x5c8))){if(_0x3eef96(0x6c4)==='FfKQi'){const _0x4cee8f=_0x12f97b[_0x3eef96(0x445)]()[_0x3eef96(0x530)](_0x552026=>_0x3cc6f4[_0x3eef96(0x574)](_0x552026));for(const _0x6d58de of _0x4cee8f){const _0x195318=this[_0x3eef96(0x505)](_0x6d58de);if(_0x195318)this[_0x3eef96(0x5fb)](_0x6d58de,_0x195318);}}else return!![];}}}return![];},Window_EquipSlot[_0x510241(0x4d5)][_0x510241(0x349)]=function(){const _0x1acd88=_0x510241;if(this[_0x1acd88(0x3ed)]()!==0x0)return![];const _0x11de7a=VisuMZ[_0x1acd88(0x3e5)]['Settings'][_0x1acd88(0x619)];if(!_0x11de7a['CommandAddOptimize']&&!_0x11de7a[_0x1acd88(0x67b)])return![];return Input[_0x1acd88(0x47f)]('up');},Window_EquipSlot['prototype']['isShiftShortcutKeyForRemove']=function(){const _0x5463de=_0x510241;return VisuMZ['ItemsEquipsCore']['Settings'][_0x5463de(0x619)][_0x5463de(0x28e)];},Window_EquipSlot['prototype'][_0x510241(0x575)]=function(){const _0x15e5f1=_0x510241;if(this[_0x15e5f1(0x607)]()&&this['visible']&&SceneManager[_0x15e5f1(0x6b3)]['constructor']===Scene_Equip){if(_0x15e5f1(0x551)!==_0x15e5f1(0x551)){if(this['itemHasEquipLimit'](_0x32b8b6))return![];if(this[_0x15e5f1(0x39c)](_0x3d08c0))return![];if(this[_0x15e5f1(0x653)](_0x3990cc))return![];if(!this[_0x15e5f1(0x2a8)][_0x15e5f1(0x460)](_0x171f80))return![];}else{if(this[_0x15e5f1(0x660)]()&&TouchInput[_0x15e5f1(0x5cb)]())this['onTouchSelectModernControls'](![]);else{if(TouchInput['isTriggered']()){if(_0x15e5f1(0x383)===_0x15e5f1(0x4f8)){const _0x1d2a5b=_0x39bb88['ItemsEquipsCore']['Settings'][_0x15e5f1(0x64b)];let _0x136cb6=_0x1d2a5b[_0x15e5f1(0x48a)]!==_0x144536?_0x1d2a5b[_0x15e5f1(0x48a)]:0x13;return _0x27ce7c[_0x15e5f1(0x5f9)](_0x136cb6);}else this[_0x15e5f1(0x38d)](!![]);}}if(TouchInput['isClicked']())this[_0x15e5f1(0x49c)]();else TouchInput[_0x15e5f1(0x44a)]()&&('zUuIv'===_0x15e5f1(0x5c5)?_0x402507['push'](_0x4c1113(_0x52a167)):this[_0x15e5f1(0x570)]());}}},Window_EquipSlot['prototype'][_0x510241(0x38d)]=function(_0x3e28c9){const _0x5f5bdc=_0x510241;this[_0x5f5bdc(0x258)]=![];const _0x2f4295=this[_0x5f5bdc(0x3ed)](),_0x4cb6d9=this['hitIndex'](),_0x5b09ff=SceneManager[_0x5f5bdc(0x6b3)][_0x5f5bdc(0x29f)];if(_0x5b09ff['isOpen']()&&_0x5b09ff[_0x5f5bdc(0x200)]){if(_0x4cb6d9>=0x0){if(_0x4cb6d9===this[_0x5f5bdc(0x3ed)]()){if('AKmDc'!==_0x5f5bdc(0x4f2)){_0x4c5890['playEquip']();const _0xc6b587=_0x3f2aa2[_0x5f5bdc(0x6b3)][_0x5f5bdc(0x2a8)];_0xc6b587[_0x5f5bdc(0x4b7)](this[_0x5f5bdc(0x3ed)](),null),this[_0x5f5bdc(0x36f)](),this[_0x5f5bdc(0x5a2)][_0x5f5bdc(0x36f)](),this[_0x5f5bdc(0x510)]();const _0x32c8d9=_0x53176c[_0x5f5bdc(0x6b3)][_0x5f5bdc(0x264)];if(_0x32c8d9)_0x32c8d9['refresh']();}else this['_doubleTouch']=!![];}this['activate'](),this[_0x5f5bdc(0x674)](_0x4cb6d9);}else _0x5b09ff[_0x5f5bdc(0x3ca)]()>=0x0&&(this[_0x5f5bdc(0x379)](),this[_0x5f5bdc(0x2ca)]());}_0x3e28c9&&this[_0x5f5bdc(0x3ed)]()!==_0x2f4295&&this[_0x5f5bdc(0x3e7)]();},Window_EquipSlot[_0x510241(0x4d5)][_0x510241(0x637)]=function(){const _0x5ac04=_0x510241;return this[_0x5ac04(0x3ed)]();},VisuMZ[_0x510241(0x3e5)]['Window_EquipItem_includes']=Window_EquipItem[_0x510241(0x4d5)][_0x510241(0x400)],Window_EquipItem[_0x510241(0x4d5)][_0x510241(0x400)]=function(_0x487337){const _0x12cb75=_0x510241;if(_0x487337===null&&this[_0x12cb75(0x578)]()['includes'](this[_0x12cb75(0x5d6)]()))return![];else{$gameTemp[_0x12cb75(0x580)]=!![];let _0x4580f2=VisuMZ[_0x12cb75(0x3e5)][_0x12cb75(0x608)]['call'](this,_0x487337);return $gameTemp[_0x12cb75(0x580)]=undefined,_0x4580f2;}},VisuMZ[_0x510241(0x3e5)][_0x510241(0x34c)]=Window_EquipItem[_0x510241(0x4d5)][_0x510241(0x3fd)],Window_EquipItem[_0x510241(0x4d5)][_0x510241(0x3fd)]=function(_0x354c00){const _0x3fb04d=_0x510241;if(_0x354c00&&this['_actor']){if(this[_0x3fb04d(0x3c2)](_0x354c00))return![];if(this['isSoleWeaponType'](_0x354c00))return![];if(this[_0x3fb04d(0x653)](_0x354c00))return![];if(!this[_0x3fb04d(0x2a8)][_0x3fb04d(0x460)](_0x354c00))return![];}if(!_0x354c00){if(_0x3fb04d(0x3cf)!==_0x3fb04d(0x6b8))return!this[_0x3fb04d(0x578)]()[_0x3fb04d(0x400)](this[_0x3fb04d(0x5d6)]());else{if(_0x28d5e8[_0x3fb04d(0x260)]&&_0x1ed144[_0x3fb04d(0x541)]!==_0x21ac20)return _0x226a6e['uiHelpPosition'];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x3fb04d(0x229)]()[_0x3fb04d(0x6b1)](/LOWER/i);else _0x5928b3[_0x3fb04d(0x4d5)][_0x3fb04d(0x2ef)]['call'](this);}}}return VisuMZ[_0x3fb04d(0x3e5)]['Window_EquipItem_isEnabled'][_0x3fb04d(0x303)](this,_0x354c00);},Window_EquipItem[_0x510241(0x4d5)]['itemHasEquipLimit']=function(_0x1561a1){const _0x5a4f20=_0x510241,_0x50b81f=_0x1561a1[_0x5a4f20(0x357)];if(_0x50b81f['match'](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){if(_0x5a4f20(0x27e)!==_0x5a4f20(0x37b)){const _0x72d37a=Number(RegExp['$1'])||0x1;let _0x4fe5e9=0x0;const _0x1b68b9=this['_actor'][_0x5a4f20(0x2fe)](),_0x5d97b6=SceneManager[_0x5a4f20(0x6b3)][_0x5a4f20(0x61d)][_0x5a4f20(0x637)]();_0x1b68b9[_0x5d97b6]=null;for(const _0x536843 of _0x1b68b9){if(_0x5a4f20(0x42e)!==_0x5a4f20(0x42e)){const _0x5596bf=_0x4982c1(_0x5d5a36['$1'])||0x1;if(_0x528652>=_0x5596bf)return!![];}else{if(!_0x536843)continue;if(DataManager[_0x5a4f20(0x2f3)](_0x1561a1)===DataManager['isWeapon'](_0x536843)){if(_0x1561a1['id']===_0x536843['id'])_0x4fe5e9+=0x1;}}}return _0x4fe5e9>=_0x72d37a;}else this[_0x5a4f20(0x24d)]();}else{if(_0x5a4f20(0x294)==='EPTxt')return![];else _0x395514=_0x5a4f20(0x57b)['format'](_0x51d13e['id']);}},Window_EquipItem['prototype'][_0x510241(0x39c)]=function(_0x207655){const _0xc5d2bd=_0x510241;if(!DataManager[_0xc5d2bd(0x2f3)](_0x207655))return![];const _0x157b74=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x1dfe6e=0x0;const _0x5d071f=this[_0xc5d2bd(0x2a8)][_0xc5d2bd(0x2fe)](),_0x2a542a=SceneManager[_0xc5d2bd(0x6b3)][_0xc5d2bd(0x61d)][_0xc5d2bd(0x637)]();_0x5d071f[_0x2a542a]=null;for(const _0x1239c8 of _0x5d071f){if(_0xc5d2bd(0x398)==='UkFNA'){if(!_0x1239c8)continue;if(!DataManager[_0xc5d2bd(0x2f3)](_0x1239c8))continue;if(_0x207655['wtypeId']===_0x1239c8['wtypeId']){if(_0xc5d2bd(0x3f2)!==_0xc5d2bd(0x3f2))return this[_0xc5d2bd(0x673)]();else{_0x1dfe6e+=0x1;if(_0x207655[_0xc5d2bd(0x357)][_0xc5d2bd(0x6b1)](_0x157b74)){if(_0xc5d2bd(0x462)===_0xc5d2bd(0x543)){const _0x502a18=this[_0xc5d2bd(0x4cc)],_0x19ac1d=_0x39991d[_0xc5d2bd(0x1e7)](),_0xe42c43=_0x12c021['x']+_0x52c1d3['floor'](_0x4a6616['width']/0x2)+_0x19ac1d;_0x502a18['x']=_0x502a18[_0xc5d2bd(0x4e1)]/-0x2+_0xe42c43,_0x502a18['y']=_0x32ad9c[_0xc5d2bd(0x409)](_0x5afb28[_0xc5d2bd(0x42f)]/0x2);}else{const _0x1a03da=Number(RegExp['$1'])||0x1;if(_0x1dfe6e>=_0x1a03da)return!![];}}if(_0x1239c8[_0xc5d2bd(0x357)][_0xc5d2bd(0x6b1)](_0x157b74)){const _0xa825d7=Number(RegExp['$1'])||0x1;if(_0x1dfe6e>=_0xa825d7)return!![];}}}}else _0x27bd69=this[_0xc5d2bd(0x6c2)]-_0x4bc167;}return![];},Window_EquipItem[_0x510241(0x4d5)]['isSoleArmorType']=function(_0x46beae){const _0x1c0573=_0x510241;if(!DataManager[_0x1c0573(0x417)](_0x46beae))return![];const _0x5c26cb=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x181371=0x0;const _0x48cbd1=this[_0x1c0573(0x2a8)][_0x1c0573(0x2fe)](),_0xf5aa69=SceneManager[_0x1c0573(0x6b3)]['_slotWindow']['equipSlotIndex']();_0x48cbd1[_0xf5aa69]=null;for(const _0x211a33 of _0x48cbd1){if('jltJX'!==_0x1c0573(0x24f)){if(!_0x211a33)continue;if(!DataManager[_0x1c0573(0x417)](_0x211a33))continue;if(_0x46beae[_0x1c0573(0x4d8)]===_0x211a33[_0x1c0573(0x4d8)]){_0x181371+=0x1;if(_0x46beae['note'][_0x1c0573(0x6b1)](_0x5c26cb)){const _0x54d5b7=Number(RegExp['$1'])||0x1;if(_0x181371>=_0x54d5b7)return!![];}if(_0x211a33[_0x1c0573(0x357)][_0x1c0573(0x6b1)](_0x5c26cb)){if(_0x1c0573(0x52b)===_0x1c0573(0x52b)){const _0x117a72=Number(RegExp['$1'])||0x1;if(_0x181371>=_0x117a72)return!![];}else{if(this[_0x1c0573(0x660)]()&&_0x3897a2[_0x1c0573(0x5cb)]())this[_0x1c0573(0x38d)](![]);else _0x34068a[_0x1c0573(0x47f)]()&&this[_0x1c0573(0x38d)](!![]);_0x2bdac1[_0x1c0573(0x395)]()&&this[_0x1c0573(0x49c)]();}}}}else{const _0xb4b75d=this[_0x1c0573(0x57c)](this['index']());let _0x32f80e=this[_0x1c0573(0x678)](this[_0x1c0573(0x3ed)]());_0x32f80e=_0x32f80e['replace'](/\\I\[(\d+)\]/gi,''),_0x25cd54[_0x1c0573(0x65c)](),this[_0x1c0573(0x658)](_0x32f80e,_0xb4b75d),this[_0x1c0573(0x2da)](_0x32f80e,_0xb4b75d),this['commandNameWindowCenter'](_0x32f80e,_0xb4b75d);}}return![];},Window_EquipItem['prototype'][_0x510241(0x578)]=function(){const _0x55afa0=_0x510241;return VisuMZ['ItemsEquipsCore'][_0x55afa0(0x5b3)][_0x55afa0(0x619)][_0x55afa0(0x508)];},Window_EquipItem['prototype'][_0x510241(0x2a9)]=function(_0x374165){const _0x5bb215=_0x510241,_0x8348fb=this['itemAt'](_0x374165);_0x8348fb?Window_ItemList['prototype'][_0x5bb215(0x2a9)][_0x5bb215(0x303)](this,_0x374165):this[_0x5bb215(0x234)](_0x374165);},Window_EquipItem[_0x510241(0x4d5)][_0x510241(0x234)]=function(_0x32b5ee){const _0x4fb473=_0x510241;this[_0x4fb473(0x1eb)](this[_0x4fb473(0x3fd)](null));const _0x265194=VisuMZ[_0x4fb473(0x3e5)]['Settings'][_0x4fb473(0x619)],_0x41e162=this[_0x4fb473(0x57c)](_0x32b5ee),_0x53d9ac=_0x41e162['y']+(this[_0x4fb473(0x49d)]()-ImageManager['iconHeight'])/0x2,_0x4a3726=ImageManager[_0x4fb473(0x51a)]+0x4,_0x2c9a01=Math[_0x4fb473(0x20e)](0x0,_0x41e162[_0x4fb473(0x4e1)]-_0x4a3726);this[_0x4fb473(0x44c)](),this['drawIcon'](_0x265194[_0x4fb473(0x46a)],_0x41e162['x'],_0x53d9ac),this[_0x4fb473(0x2b2)](_0x265194[_0x4fb473(0x5e7)],_0x41e162['x']+_0x4a3726,_0x41e162['y'],_0x2c9a01),this[_0x4fb473(0x1eb)](!![]);},Window_EquipItem[_0x510241(0x4d5)][_0x510241(0x306)]=function(){const _0x41b64e=_0x510241;Window_ItemList[_0x41b64e(0x4d5)][_0x41b64e(0x306)][_0x41b64e(0x303)](this);if(this[_0x41b64e(0x2a8)]&&this[_0x41b64e(0x264)]&&this[_0x41b64e(0x527)]>=0x0){const _0x13c05f=JsonEx[_0x41b64e(0x4bd)](this[_0x41b64e(0x2a8)]);_0x13c05f[_0x41b64e(0x547)]=!![],_0x13c05f['forceChangeEquip'](this[_0x41b64e(0x527)],this[_0x41b64e(0x34d)]()),this[_0x41b64e(0x264)][_0x41b64e(0x429)](_0x13c05f);}},VisuMZ[_0x510241(0x3e5)][_0x510241(0x64a)]=Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x4fb)],Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x4fb)]=function(_0x5c655b){const _0x1eceb1=_0x510241;VisuMZ[_0x1eceb1(0x3e5)][_0x1eceb1(0x64a)][_0x1eceb1(0x303)](this,_0x5c655b),this[_0x1eceb1(0x5b2)](_0x5c655b);},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x5b2)]=function(_0x3d54f8){const _0x3974a0=_0x510241,_0x56e7c8=new Rectangle(0x0,0x0,_0x3d54f8[_0x3974a0(0x4e1)],_0x3d54f8['height']);this[_0x3974a0(0x4cc)]=new Window_Base(_0x56e7c8),this[_0x3974a0(0x4cc)]['opacity']=0x0,this['addChild'](this[_0x3974a0(0x4cc)]),this[_0x3974a0(0x496)]();},Window_ShopCommand['prototype'][_0x510241(0x510)]=function(){const _0x36ae0c=_0x510241;Window_HorzCommand[_0x36ae0c(0x4d5)]['callUpdateHelp'][_0x36ae0c(0x303)](this);if(this[_0x36ae0c(0x4cc)])this[_0x36ae0c(0x496)]();},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x496)]=function(){const _0x2d4d57=_0x510241,_0x105d0c=this[_0x2d4d57(0x4cc)];_0x105d0c['contents'][_0x2d4d57(0x389)]();const _0xede373=this[_0x2d4d57(0x4d0)](this[_0x2d4d57(0x3ed)]());if(_0xede373===_0x2d4d57(0x46e)){if('zezhY'!==_0x2d4d57(0x5a0))return _0x45722c['VisuMZ_0_CoreEngine']&&_0x3f1763[_0x2d4d57(0x4d5)][_0x2d4d57(0x28b)][_0x2d4d57(0x303)](this);else{const _0x305bcc=this['itemLineRect'](this['index']());let _0x31b0fc=this[_0x2d4d57(0x678)](this[_0x2d4d57(0x3ed)]());_0x31b0fc=_0x31b0fc['replace'](/\\I\[(\d+)\]/gi,''),_0x105d0c[_0x2d4d57(0x65c)](),this['commandNameWindowDrawBackground'](_0x31b0fc,_0x305bcc),this['commandNameWindowDrawText'](_0x31b0fc,_0x305bcc),this[_0x2d4d57(0x53a)](_0x31b0fc,_0x305bcc);}}},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x658)]=function(_0x20d7a2,_0xc5bec6){},Window_ShopCommand['prototype']['commandNameWindowDrawText']=function(_0x48e19f,_0x3f2704){const _0x2fa6b2=_0x510241,_0x4d2ace=this[_0x2fa6b2(0x4cc)];_0x4d2ace[_0x2fa6b2(0x2b2)](_0x48e19f,0x0,_0x3f2704['y'],_0x4d2ace['innerWidth'],_0x2fa6b2(0x35c));},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x53a)]=function(_0x557685,_0x1ce856){const _0xbbfd2d=_0x510241,_0x2efaed=this[_0xbbfd2d(0x4cc)],_0x3dfd2c=$gameSystem['windowPadding'](),_0x1127c9=_0x1ce856['x']+Math['floor'](_0x1ce856['width']/0x2)+_0x3dfd2c;_0x2efaed['x']=_0x2efaed['width']/-0x2+_0x1127c9,_0x2efaed['y']=Math[_0xbbfd2d(0x409)](_0x1ce856[_0xbbfd2d(0x42f)]/0x2);},Window_ShopCommand['prototype'][_0x510241(0x1ee)]=function(){const _0x399f50=_0x510241;return this[_0x399f50(0x519)]?this[_0x399f50(0x519)]['length']:0x3;},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x354)]=function(){const _0x22b8a4=_0x510241;return VisuMZ[_0x22b8a4(0x3e5)][_0x22b8a4(0x5b3)][_0x22b8a4(0x368)][_0x22b8a4(0x5ff)];},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x659)]=function(){const _0x25df0a=_0x510241;this[_0x25df0a(0x444)](),this[_0x25df0a(0x6c1)](),this[_0x25df0a(0x597)]();},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x36f)]=function(){const _0x4f0f1=_0x510241;Window_HorzCommand['prototype'][_0x4f0f1(0x36f)][_0x4f0f1(0x303)](this),this[_0x4f0f1(0x5da)]();},Window_ShopCommand['prototype']['addBuyCommand']=function(){const _0x28b305=_0x510241,_0x1846d3=this[_0x28b305(0x32b)](),_0x1b9b5f=VisuMZ[_0x28b305(0x3e5)][_0x28b305(0x5b3)][_0x28b305(0x368)][_0x28b305(0x696)],_0x512812=_0x1846d3==='text'?TextManager[_0x28b305(0x4d3)]:_0x28b305(0x2c2)[_0x28b305(0x648)](_0x1b9b5f,TextManager[_0x28b305(0x4d3)]),_0x14e807=this['isBuyCommandEnabled']();if(this['hideDisabledCommands']()&&!_0x14e807)return;this[_0x28b305(0x455)](_0x512812,_0x28b305(0x4d3),_0x14e807);},Window_ShopCommand[_0x510241(0x4d5)]['isBuyCommandEnabled']=function(){const _0x5f516a=_0x510241;return SceneManager[_0x5f516a(0x6b3)]['constructor']===Scene_Shop?SceneManager[_0x5f516a(0x6b3)]['_goodsCount']>0x0:!![];},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x6c1)]=function(){const _0x58fd05=_0x510241,_0x4ac823=this[_0x58fd05(0x32b)](),_0x15a78c=VisuMZ[_0x58fd05(0x3e5)]['Settings']['ShopScene'][_0x58fd05(0x2e1)],_0x35c070=_0x4ac823===_0x58fd05(0x411)?TextManager[_0x58fd05(0x5d2)]:'\x5cI[%1]%2'['format'](_0x15a78c,TextManager[_0x58fd05(0x5d2)]),_0x52e9f6=this[_0x58fd05(0x32f)]();if(this[_0x58fd05(0x354)]()&&!_0x52e9f6)return;this[_0x58fd05(0x455)](_0x35c070,_0x58fd05(0x5d2),_0x52e9f6);},Window_ShopCommand['prototype']['isSellCommandEnabled']=function(){const _0x19eab9=_0x510241;return!this[_0x19eab9(0x568)];},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x597)]=function(){const _0x1f98e1=_0x510241,_0x51085e=this[_0x1f98e1(0x32b)](),_0x4ab110=VisuMZ[_0x1f98e1(0x3e5)]['Settings'][_0x1f98e1(0x368)][_0x1f98e1(0x6a7)],_0x323f36=VisuMZ[_0x1f98e1(0x3e5)][_0x1f98e1(0x5b3)][_0x1f98e1(0x368)]['CmdCancelRename'],_0x261110=_0x51085e===_0x1f98e1(0x411)?_0x323f36:'\x5cI[%1]%2'[_0x1f98e1(0x648)](_0x4ab110,_0x323f36);this[_0x1f98e1(0x455)](_0x261110,_0x1f98e1(0x25d));},Window_ShopCommand['prototype'][_0x510241(0x5e4)]=function(){const _0x469e44=_0x510241;return VisuMZ[_0x469e44(0x3e5)]['Settings'][_0x469e44(0x368)][_0x469e44(0x261)];},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x2a9)]=function(_0x12c299){const _0x2ba2ec=_0x510241,_0x4859e2=this[_0x2ba2ec(0x4d0)](_0x12c299);if(_0x4859e2===_0x2ba2ec(0x291))this[_0x2ba2ec(0x2e3)](_0x12c299);else{if(_0x4859e2==='icon'){if(_0x2ba2ec(0x6d4)!==_0x2ba2ec(0x640))this[_0x2ba2ec(0x3ae)](_0x12c299);else{this[_0x2ba2ec(0x55f)]['clear']();if(!this['_actor'])return;if(this[_0x2ba2ec(0x6d3)]()){const _0x624342=_0x17430d[_0x2ba2ec(0x331)](this['_actor']['getMenuImage']());_0x624342[_0x2ba2ec(0x52a)](this['onMenuImageLoad'][_0x2ba2ec(0x4a1)](this));}else this[_0x2ba2ec(0x225)]();}}else Window_HorzCommand[_0x2ba2ec(0x4d5)][_0x2ba2ec(0x2a9)][_0x2ba2ec(0x303)](this,_0x12c299);}},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x32b)]=function(){const _0x25e132=_0x510241;return VisuMZ[_0x25e132(0x3e5)][_0x25e132(0x5b3)][_0x25e132(0x368)][_0x25e132(0x5d3)];},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x4d0)]=function(_0x29cac6){const _0x5f26f6=_0x510241;if(_0x29cac6<0x0)return'text';const _0x424f28=this[_0x5f26f6(0x32b)]();if(_0x424f28!=='auto'){if(_0x5f26f6(0x5a3)!==_0x5f26f6(0x6a0))return _0x424f28;else{const _0x46ccf9=_0x537d20[_0x5f26f6(0x693)](_0x419060[_0x5f26f6(0x569)]());if(_0x46ccf9>0x0)_0x112d56[_0x5f26f6(0x412)][_0x5f26f6(0x4df)](_0x46ccf9);}}else{if(this['maxItems']()>0x0){if(_0x5f26f6(0x373)===_0x5f26f6(0x550))_0x37b0ff=_0xce3280[_0x5f26f6(0x3be)](_0x3e2ac1),_0x215bee=_0x5f216b-_0x1c4886[_0x5f26f6(0x3be)](_0x5c90bf),this[_0x5f26f6(0x4c5)](_0x495727[_0x5f26f6(0x4c3)](_0x2a4b49)),_0x3d8282=(_0x12266c>=0x0?'+':'')+_0x2f880f[_0x5f26f6(0x334)](_0x4649bd,0x0,_0x318dd4);else{const _0x10a833=this[_0x5f26f6(0x678)](_0x29cac6);if(_0x10a833[_0x5f26f6(0x6b1)](/\\I\[(\d+)\]/i)){const _0x4326f4=this[_0x5f26f6(0x57c)](_0x29cac6),_0x1d1d27=this[_0x5f26f6(0x5d5)](_0x10a833)['width'];return _0x1d1d27<=_0x4326f4[_0x5f26f6(0x4e1)]?_0x5f26f6(0x44b)!==_0x5f26f6(0x1e6)?'iconText':_0x448a01[_0x5f26f6(0x3e5)][_0x5f26f6(0x5b3)][_0x5f26f6(0x368)][_0x5f26f6(0x2e5)]:_0x5f26f6(0x46e);}}}}return _0x5f26f6(0x411);},Window_ShopCommand['prototype'][_0x510241(0x2e3)]=function(_0x551b94){const _0x4c5e78=_0x510241,_0x2cb9ec=this[_0x4c5e78(0x57c)](_0x551b94),_0x283506=this[_0x4c5e78(0x678)](_0x551b94),_0x2c9400=this[_0x4c5e78(0x5d5)](_0x283506)[_0x4c5e78(0x4e1)];this[_0x4c5e78(0x1eb)](this[_0x4c5e78(0x6b0)](_0x551b94));const _0x5ca08f=this[_0x4c5e78(0x5e4)]();if(_0x5ca08f===_0x4c5e78(0x4ee))this[_0x4c5e78(0x4cd)](_0x283506,_0x2cb9ec['x']+_0x2cb9ec[_0x4c5e78(0x4e1)]-_0x2c9400,_0x2cb9ec['y'],_0x2c9400);else{if(_0x5ca08f==='center'){const _0x58d08f=_0x2cb9ec['x']+Math[_0x4c5e78(0x409)]((_0x2cb9ec[_0x4c5e78(0x4e1)]-_0x2c9400)/0x2);this[_0x4c5e78(0x4cd)](_0x283506,_0x58d08f,_0x2cb9ec['y'],_0x2c9400);}else{if(_0x4c5e78(0x6af)!==_0x4c5e78(0x4e5))this['drawTextEx'](_0x283506,_0x2cb9ec['x'],_0x2cb9ec['y'],_0x2c9400);else{const _0xede4d2=_0x343125(_0x13aca4['$1'])[_0x4c5e78(0x606)]()[_0x4c5e78(0x569)](),_0x2d669a=_0x4588e0(_0x529b70['$2'])['trim']();this[_0x4c5e78(0x4b6)][_0xede4d2]=_0x2d669a;}}}},Window_ShopCommand[_0x510241(0x4d5)][_0x510241(0x3ae)]=function(_0x2fb286){const _0x45dfa9=_0x510241;this[_0x45dfa9(0x678)](_0x2fb286)['match'](/\\I\[(\d+)\]/i);const _0x27d27e=Number(RegExp['$1'])||0x0,_0x5d9344=this[_0x45dfa9(0x57c)](_0x2fb286),_0x255dbc=_0x5d9344['x']+Math[_0x45dfa9(0x409)]((_0x5d9344['width']-ImageManager[_0x45dfa9(0x51a)])/0x2),_0x260ae5=_0x5d9344['y']+(_0x5d9344['height']-ImageManager['iconHeight'])/0x2;this['drawIcon'](_0x27d27e,_0x255dbc,_0x260ae5);},VisuMZ[_0x510241(0x3e5)][_0x510241(0x25a)]=Window_ShopBuy[_0x510241(0x4d5)][_0x510241(0x36f)],Window_ShopBuy[_0x510241(0x4d5)][_0x510241(0x36f)]=function(){const _0x27576b=_0x510241;this['updateMoneyAmount'](),VisuMZ[_0x27576b(0x3e5)]['Window_ShopBuy_refresh'][_0x27576b(0x303)](this);},Window_ShopBuy[_0x510241(0x4d5)][_0x510241(0x405)]=function(){const _0x161e29=_0x510241;SceneManager[_0x161e29(0x6b3)][_0x161e29(0x4f6)]===Scene_Shop&&(_0x161e29(0x58e)!==_0x161e29(0x58e)?_0x1af6a=_0x399671['max'](_0x52c3ca,_0x29fe22):this[_0x161e29(0x2b0)]=SceneManager[_0x161e29(0x6b3)]['money']());},VisuMZ[_0x510241(0x3e5)][_0x510241(0x6a3)]=Window_ShopBuy['prototype'][_0x510241(0x6d1)],Window_ShopBuy[_0x510241(0x4d5)][_0x510241(0x6d1)]=function(_0x490a18){const _0x3ce05c=_0x510241;if(!_0x490a18)return 0x0;let _0x28b349=VisuMZ[_0x3ce05c(0x3e5)][_0x3ce05c(0x6a3)]['call'](this,_0x490a18);return Math[_0x3ce05c(0x20e)](0x0,this[_0x3ce05c(0x48b)](_0x490a18,_0x28b349));},Window_ShopBuy['prototype'][_0x510241(0x48b)]=function(_0x5927b4,_0x19fb22){const _0x30dffd=_0x510241,_0x418c2e=_0x5927b4['note'];if(_0x418c2e[_0x30dffd(0x6b1)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x539205=String(RegExp['$1']);try{eval(_0x539205);}catch(_0x814c5){if($gameTemp[_0x30dffd(0x5a8)]())console[_0x30dffd(0x4ce)](_0x814c5);}}_0x19fb22=VisuMZ[_0x30dffd(0x3e5)][_0x30dffd(0x5b3)][_0x30dffd(0x368)][_0x30dffd(0x5f1)][_0x30dffd(0x303)](this,_0x5927b4,_0x19fb22);if(isNaN(_0x19fb22))_0x19fb22=0x0;return Math[_0x30dffd(0x409)](_0x19fb22);},Window_ShopBuy[_0x510241(0x4d5)][_0x510241(0x2a9)]=function(_0x29d1a1){const _0x3d6813=_0x510241;this[_0x3d6813(0x65c)]();const _0x29c4e7=this[_0x3d6813(0x65a)](_0x29d1a1),_0x9f3aed=this['itemLineRect'](_0x29d1a1),_0x549558=_0x9f3aed[_0x3d6813(0x4e1)];this['changePaintOpacity'](this[_0x3d6813(0x3fd)](_0x29c4e7)),this['drawItemName'](_0x29c4e7,_0x9f3aed['x'],_0x9f3aed['y'],_0x549558),this[_0x3d6813(0x2cf)](_0x29c4e7,_0x9f3aed),this[_0x3d6813(0x1eb)](!![]);},Window_ShopBuy[_0x510241(0x4d5)][_0x510241(0x2cf)]=function(_0x5a7a02,_0x1b6e65){const _0x2081db=_0x510241,_0xbdda6=this[_0x2081db(0x6d1)](_0x5a7a02);this[_0x2081db(0x2b1)](_0xbdda6,TextManager[_0x2081db(0x371)],_0x1b6e65['x'],_0x1b6e65['y'],_0x1b6e65[_0x2081db(0x4e1)]);},Window_ShopSell[_0x510241(0x4d5)][_0x510241(0x1ee)]=function(){const _0x115f81=_0x510241;return SceneManager[_0x115f81(0x6b3)]['isUseItemsEquipsCoreUpdatedLayout']()?0x1:0x2;},VisuMZ[_0x510241(0x3e5)]['Window_ShopSell_isEnabled']=Window_ShopSell[_0x510241(0x4d5)][_0x510241(0x3fd)],Window_ShopSell[_0x510241(0x4d5)]['isEnabled']=function(_0x8bf598){const _0x4fa747=_0x510241;if(!_0x8bf598)return![];const _0x5e02f1=_0x8bf598[_0x4fa747(0x357)];if(_0x5e02f1[_0x4fa747(0x6b1)](/<CANNOT SELL>/i))return![];if(_0x5e02f1[_0x4fa747(0x6b1)](/<CAN SELL>/i))return!![];if(_0x5e02f1[_0x4fa747(0x6b1)](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x4fa747(0x643)===_0x4fa747(0x46b)){if(this[_0x4fa747(0x2ba)]&&this[_0x4fa747(0x2ba)][_0x4fa747(0x402)])return _0x1074f9['ItemsEquipsCore'][_0x4fa747(0x5b3)]['ShopScene'][_0x4fa747(0x387)];return _0x89dc34[_0x4fa747(0x4d5)][_0x4fa747(0x39a)]['call'](this);}else{const _0x1cf583=JSON[_0x4fa747(0x312)]('['+RegExp['$1'][_0x4fa747(0x6b1)](/\d+/g)+']');for(const _0x13288d of _0x1cf583){if(!$gameSwitches['value'](_0x13288d))return![];}}}if(_0x5e02f1[_0x4fa747(0x6b1)](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x4fa747(0x41f)!==_0x4fa747(0x45e)){const _0x513d43=JSON[_0x4fa747(0x312)]('['+RegExp['$1'][_0x4fa747(0x6b1)](/\d+/g)+']');for(const _0x22f8c7 of _0x513d43){if(_0x4fa747(0x3aa)===_0x4fa747(0x245))this[_0x4fa747(0x64e)](!![]);else{if(!$gameSwitches[_0x4fa747(0x5a5)](_0x22f8c7))return![];}}}else{const _0x3bdaf3=this[_0x4fa747(0x427)](_0x48dbcd);if(_0x3bdaf3==='iconText')this[_0x4fa747(0x2e3)](_0x696c31);else _0x3bdaf3===_0x4fa747(0x46e)?this[_0x4fa747(0x3ae)](_0x53ab36):_0x9234de['prototype'][_0x4fa747(0x2a9)][_0x4fa747(0x303)](this,_0x59efe3);}}if(_0x5e02f1[_0x4fa747(0x6b1)](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x4fa747(0x4ec)!=='IWtaJ'){const _0x424cb5=JSON['parse']('['+RegExp['$1'][_0x4fa747(0x6b1)](/\d+/g)+']');for(const _0x3722fa of _0x424cb5){if($gameSwitches[_0x4fa747(0x5a5)](_0x3722fa))return![];}}else return _0x1323f3['ItemsEquipsCore']['Settings']['StatusWindow']['LabelRemove'];}return VisuMZ[_0x4fa747(0x3e5)]['Window_ShopSell_isEnabled'][_0x4fa747(0x303)](this,_0x8bf598);},Window_ShopStatus['prototype'][_0x510241(0x21d)]=function(){return![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x24e)]=function(){const _0x326d66=_0x510241;Window_StatusBase[_0x326d66(0x4d5)][_0x326d66(0x24e)][_0x326d66(0x303)](this);for(const _0x5d74be of $gameParty[_0x326d66(0x50f)]()){ImageManager[_0x326d66(0x47a)](_0x5d74be[_0x326d66(0x290)]());}},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x3d7)]=function(){const _0x603675=_0x510241;return VisuMZ['ItemsEquipsCore'][_0x603675(0x5b3)][_0x603675(0x64b)][_0x603675(0x1f5)];},Window_ShopStatus[_0x510241(0x4d5)]['refresh']=function(){const _0x5b89b3=_0x510241;this[_0x5b89b3(0x55f)][_0x5b89b3(0x389)](),this[_0x5b89b3(0x3d6)][_0x5b89b3(0x389)](),this['_item']&&(_0x5b89b3(0x301)===_0x5b89b3(0x548)?(this['_category']=_0x5b0b4a,this[_0x5b89b3(0x36f)](),this['_categoryWindow']&&this['_categoryWindow'][_0x5b89b3(0x28b)]()?this[_0x5b89b3(0x36e)](0x0):this[_0x5b89b3(0x37c)](0x0,0x0)):(this[_0x5b89b3(0x65c)](),this[_0x5b89b3(0x1eb)](!![]),this[_0x5b89b3(0x6ca)](),this[_0x5b89b3(0x542)]()?this['drawEquipData']():this[_0x5b89b3(0x24c)](),this['drawCustomShopGraphic']()));},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x4d9)]=function(_0x4e9fd0,_0x13207e){const _0x1ef543=_0x510241;if(!this[_0x1ef543(0x542)]()&&!DataManager[_0x1ef543(0x22f)](this[_0x1ef543(0x207)]))return;const _0x560845=this['innerWidth']-this['itemPadding']()-_0x4e9fd0,_0x1c5157=this[_0x1ef543(0x26c)](_0x1ef543(0x2bb));this[_0x1ef543(0x4c5)](ColorManager[_0x1ef543(0x638)]()),this[_0x1ef543(0x2b2)](TextManager['possession'],_0x4e9fd0+this['itemPadding'](),_0x13207e,_0x560845-_0x1c5157),this[_0x1ef543(0x44c)](),this[_0x1ef543(0x615)](this[_0x1ef543(0x207)],_0x4e9fd0,_0x13207e,_0x560845);},Window_ShopStatus['prototype'][_0x510241(0x5ac)]=function(_0x43a256,_0x18ec79,_0x4e139a,_0x25c012,_0x599fda){const _0x91742=_0x510241;if(VisuMZ[_0x91742(0x3e5)][_0x91742(0x5b3)][_0x91742(0x64b)][_0x91742(0x2cc)]===![])return;_0x599fda=Math[_0x91742(0x20e)](_0x599fda||0x1,0x1);while(_0x599fda--){_0x25c012=_0x25c012||this[_0x91742(0x49d)](),this[_0x91742(0x3d6)][_0x91742(0x1f2)]=0xa0;const _0x29440d=ColorManager['getItemsEquipsCoreBackColor1']();this['contentsBack'][_0x91742(0x581)](_0x43a256+0x1,_0x18ec79+0x1,_0x4e139a-0x2,_0x25c012-0x2,_0x29440d),this[_0x91742(0x3d6)][_0x91742(0x1f2)]=0xff;}},ColorManager[_0x510241(0x20a)]=function(){const _0x20e79f=_0x510241,_0x2548f5=VisuMZ[_0x20e79f(0x3e5)][_0x20e79f(0x5b3)][_0x20e79f(0x64b)];let _0x4a68f1=_0x2548f5[_0x20e79f(0x48a)]!==undefined?_0x2548f5[_0x20e79f(0x48a)]:0x13;return ColorManager['getColor'](_0x4a68f1);},Window_ShopStatus['prototype'][_0x510241(0x322)]=function(){const _0x5962a6=_0x510241;if(VisuMZ[_0x5962a6(0x3e5)]['Settings'][_0x5962a6(0x64b)][_0x5962a6(0x4a4)]){VisuMZ[_0x5962a6(0x3e5)]['Settings'][_0x5962a6(0x64b)][_0x5962a6(0x4a4)][_0x5962a6(0x303)](this);return;}const _0x2a7f8b=this[_0x5962a6(0x49d)](),_0x523107=this[_0x5962a6(0x3a5)]()+0x8;let _0x2e6533=0x0,_0x43fc63=0x0,_0x12b1ed=this[_0x5962a6(0x6c2)],_0x1824a4=this[_0x5962a6(0x364)],_0x13a4d8=Math[_0x5962a6(0x409)](_0x12b1ed/0x2),_0x2e459c=_0x2e6533+_0x12b1ed-_0x13a4d8;this[_0x5962a6(0x5ea)](this[_0x5962a6(0x207)],_0x2e6533+this[_0x5962a6(0x499)](),_0x43fc63,_0x12b1ed-this[_0x5962a6(0x499)]()*0x2),this['drawItemDarkRect'](_0x2e6533,_0x43fc63,_0x12b1ed),_0x43fc63+=_0x2a7f8b;if(this[_0x5962a6(0x319)](_0x2e6533,_0x43fc63,_0x13a4d8))_0x43fc63+=0x0;if(this['drawItemQuantity'](_0x2e459c,_0x43fc63,_0x13a4d8))_0x43fc63+=_0x2a7f8b;const _0x4c4b4b=this[_0x5962a6(0x497)](),_0x790169=_0x43fc63;_0x43fc63=_0x1824a4-_0x4c4b4b[_0x5962a6(0x535)]*_0x523107-0x4;let _0x232d3e=_0x2e6533,_0x62553c=0x0,_0x2150f7=_0x43fc63;for(const _0x10c413 of _0x4c4b4b){_0x5962a6(0x1de)===_0x5962a6(0x1de)?(_0x62553c=Math['max'](this[_0x5962a6(0x22a)](_0x10c413,_0x2e6533+0x4,_0x43fc63+0x4,_0x12b1ed),_0x62553c),_0x43fc63+=_0x523107):this[_0x5962a6(0x29e)][_0x5962a6(0x539)](this[_0x5962a6(0x29e)][_0x5962a6(0x693)](_0x27eb31),0x1);}const _0x531baa=$gameParty[_0x5962a6(0x4da)](),_0x315bae=Math[_0x5962a6(0x409)]((_0x12b1ed-_0x62553c)/_0x531baa);_0x62553c=_0x12b1ed-_0x315bae*_0x531baa;for(const _0x3b747a of $gameParty[_0x5962a6(0x263)]()){const _0x5131cd=$gameParty[_0x5962a6(0x263)]()[_0x5962a6(0x693)](_0x3b747a),_0xaa4d47=_0x232d3e+_0x62553c+_0x5131cd*_0x315bae;this['changePaintOpacity'](_0x3b747a[_0x5962a6(0x460)](this['_item'])),this['drawActorCharacter'](_0x3b747a,_0xaa4d47+_0x315bae/0x2,_0x2150f7);let _0x23ca0d=_0x2150f7;for(const _0x231885 of _0x4c4b4b){const _0x2bd8c9=_0x23ca0d-(_0x2a7f8b-_0x523107)/0x2;this[_0x5962a6(0x4aa)](_0x3b747a,_0x231885,_0xaa4d47,_0x2bd8c9,_0x315bae),_0x23ca0d+=_0x523107;}}this[_0x5962a6(0x5ac)](_0x232d3e,_0x790169,_0x62553c,_0x2150f7-_0x790169);for(let _0x4a704a=0x0;_0x4a704a<_0x531baa;_0x4a704a++){const _0x1110e7=_0x232d3e+_0x62553c+_0x4a704a*_0x315bae;this[_0x5962a6(0x5ac)](_0x1110e7,_0x790169,_0x315bae,_0x2150f7-_0x790169);}for(const _0x25215e of _0x4c4b4b){this[_0x5962a6(0x5ac)](_0x232d3e,_0x2150f7,_0x62553c,_0x523107);for(let _0x1597ee=0x0;_0x1597ee<_0x531baa;_0x1597ee++){if(_0x5962a6(0x620)!==_0x5962a6(0x620))this[_0x5962a6(0x611)]();else{const _0x30a793=_0x232d3e+_0x62553c+_0x1597ee*_0x315bae;this[_0x5962a6(0x5ac)](_0x30a793,_0x2150f7,_0x315bae,_0x523107);}}_0x2150f7+=_0x523107;}},Window_ShopStatus[_0x510241(0x4d5)]['drawItemEquipType']=function(_0x25a976,_0x33a88c,_0x9f33a1){const _0x14e28f=_0x510241;if(!this['isEquipItem']())return![];const _0x5e467a=$dataSystem[_0x14e28f(0x267)][this[_0x14e28f(0x207)][_0x14e28f(0x5d6)]];return this['drawItemKeyData'](_0x5e467a,_0x25a976,_0x33a88c,_0x9f33a1,!![]),this['drawItemDarkRect'](_0x25a976,_0x33a88c,_0x9f33a1),this[_0x14e28f(0x65c)](),!![];},Window_ShopStatus['prototype'][_0x510241(0x1f3)]=function(){const _0x5925b7=_0x510241,_0x4eacad=VisuMZ['ItemsEquipsCore'][_0x5925b7(0x5b3)][_0x5925b7(0x534)][_0x5925b7(0x5c9)];return _0x4eacad['format']($gameParty[_0x5925b7(0x505)](this[_0x5925b7(0x207)]));},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x497)]=function(){const _0xe980d8=_0x510241;let _0x56f14b=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];if(Imported[_0xe980d8(0x57d)]){if(_0xe980d8(0x2ee)===_0xe980d8(0x2ee))_0x56f14b=VisuMZ['CoreEngine'][_0xe980d8(0x5b3)]['Param']['ExtDisplayedParams'];else return _0x26507b[_0xe980d8(0x6d8)];}return _0x56f14b=_0x56f14b[_0xe980d8(0x43e)](_0x3e1805=>typeof _0x3e1805===_0xe980d8(0x3f8)?_0x3e1805:_0x3e1805[_0xe980d8(0x606)]()[_0xe980d8(0x569)]()),_0x56f14b;},Window_ShopStatus['prototype'][_0x510241(0x428)]=function(){const _0x4812e3=_0x510241;return VisuMZ[_0x4812e3(0x3e5)][_0x4812e3(0x5b3)][_0x4812e3(0x64b)]['ParamChangeFontSize'];},Window_ShopStatus['prototype']['drawParamName']=function(_0x3417b1,_0x518f4d,_0x46ba6d,_0x21943f){const _0x3d7c49=_0x510241;this[_0x3d7c49(0x65c)](),this[_0x3d7c49(0x55f)][_0x3d7c49(0x222)]=this['smallParamFontSize']();let _0x4ba5d8=this[_0x3d7c49(0x26c)](TextManager['param'](_0x3417b1))+0x4+_0x518f4d;return Imported[_0x3d7c49(0x57d)]?(this[_0x3d7c49(0x58c)](_0x518f4d,_0x46ba6d,_0x21943f,_0x3417b1,!![]),VisuMZ[_0x3d7c49(0x3b4)][_0x3d7c49(0x5b3)][_0x3d7c49(0x526)][_0x3d7c49(0x57a)]&&(_0x4ba5d8+=ImageManager[_0x3d7c49(0x51a)]+0x4)):(this[_0x3d7c49(0x4c5)](ColorManager[_0x3d7c49(0x638)]()),this[_0x3d7c49(0x2b2)](TextManager[_0x3d7c49(0x699)](_0x3417b1),_0x518f4d,_0x46ba6d,_0x21943f)),this[_0x3d7c49(0x65c)](),_0x4ba5d8;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x4aa)]=function(_0x849945,_0x2bc699,_0x250e99,_0x4f9dc4,_0x21bd4d){const _0xa789f9=_0x510241;_0x250e99+=this[_0xa789f9(0x499)](),_0x21bd4d-=this[_0xa789f9(0x499)]()*0x2;const _0x303fc1=VisuMZ['ItemsEquipsCore']['Settings'][_0xa789f9(0x64b)];this[_0xa789f9(0x55f)][_0xa789f9(0x222)]=_0x303fc1['ParamChangeFontSize'],this[_0xa789f9(0x1eb)](_0x849945['canEquip'](this['_item']));if(_0x849945[_0xa789f9(0x219)](this[_0xa789f9(0x207)])&&!_0x849945[_0xa789f9(0x259)](this[_0xa789f9(0x207)])){const _0x23c62c=_0x303fc1[_0xa789f9(0x5ba)];this[_0xa789f9(0x2b2)](_0x23c62c,_0x250e99,_0x4f9dc4,_0x21bd4d,'center');}else{if(_0x849945[_0xa789f9(0x460)](this[_0xa789f9(0x207)])){const _0x38d287=JsonEx[_0xa789f9(0x4bd)](_0x849945);_0x38d287['_tempActor']=!![];const _0x2eb82e=_0x38d287[_0xa789f9(0x56c)](this['_item']);_0x2eb82e>=0x0&&_0x38d287[_0xa789f9(0x4f4)](_0x2eb82e,this['_item']);let _0xefd0bc=0x0,_0x46ce22=0x0,_0x4d72a4=0x0;if(Imported['VisuMZ_0_CoreEngine']){if('CCFTX'!=='nvMPy')_0xefd0bc=_0x38d287['paramValueByName'](_0x2bc699),_0x46ce22=_0xefd0bc-_0x849945['paramValueByName'](_0x2bc699),this[_0xa789f9(0x4c5)](ColorManager[_0xa789f9(0x4c3)](_0x46ce22)),_0x4d72a4=(_0x46ce22>=0x0?'+':'')+VisuMZ[_0xa789f9(0x334)](_0x46ce22,0x0,_0x2bc699);else return _0xb16719[_0xa789f9(0x3e5)][_0xa789f9(0x5b3)][_0xa789f9(0x64b)][_0xa789f9(0x3a1)];}else _0xefd0bc=_0x38d287[_0xa789f9(0x699)](_0x2bc699),_0x46ce22=_0xefd0bc-_0x849945[_0xa789f9(0x699)](_0x2bc699),this[_0xa789f9(0x4c5)](ColorManager[_0xa789f9(0x4c3)](_0x46ce22)),_0x4d72a4=(_0x46ce22>=0x0?'+':'')+_0x46ce22;_0x4d72a4==='+0'&&(_0x4d72a4=_0x303fc1[_0xa789f9(0x2d7)]),this['drawText'](_0x4d72a4,_0x250e99,_0x4f9dc4,_0x21bd4d,_0xa789f9(0x35c));}else{if('sgrmw'!==_0xa789f9(0x315))this[_0xa789f9(0x369)][_0xa789f9(0x4df)](new _0x3a5cad());else{const _0x4d97d2=_0x303fc1[_0xa789f9(0x4c7)];this[_0xa789f9(0x2b2)](_0x4d97d2,_0x250e99,_0x4f9dc4,_0x21bd4d,_0xa789f9(0x35c));}}}this[_0xa789f9(0x65c)](),this['changePaintOpacity'](!![]);},Game_Actor[_0x510241(0x4d5)][_0x510241(0x259)]=function(_0x4d4f6e){const _0x9d28ef=_0x510241;if(!_0x4d4f6e)return![];const _0xee6c05=_0x4d4f6e[_0x9d28ef(0x5d6)],_0x3f5960=this[_0x9d28ef(0x412)]();for(let _0x16ff36=0x0;_0x16ff36<_0x3f5960[_0x9d28ef(0x535)];_0x16ff36++){const _0x4b8d6e=_0x3f5960[_0x16ff36];if(_0x4b8d6e!==_0xee6c05)continue;if(!this[_0x9d28ef(0x2fe)]()[_0x16ff36])return!![];}return![];},Game_Actor[_0x510241(0x4d5)][_0x510241(0x56c)]=function(_0x1dd1f8){const _0x15824b=_0x510241;if(!_0x1dd1f8)return-0x1;const _0x3253d8=_0x1dd1f8[_0x15824b(0x5d6)],_0x1382d7=this['equipSlots']();let _0xf6dd2b=-0x1;for(let _0x431973=0x0;_0x431973<_0x1382d7[_0x15824b(0x535)];_0x431973++){const _0xa3f3e0=_0x1382d7[_0x431973];if(_0xa3f3e0!==_0x3253d8)continue;if(!this[_0x15824b(0x2fe)]()[_0x431973])return _0x431973;if(_0xf6dd2b<0x0)_0xf6dd2b=_0x431973;}return _0xf6dd2b;},Window_ShopStatus['prototype']['drawItemData']=function(){const _0x3bbf1b=_0x510241;VisuMZ[_0x3bbf1b(0x3e5)][_0x3bbf1b(0x5b3)]['StatusWindow'][_0x3bbf1b(0x491)][_0x3bbf1b(0x303)](this);},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x5ea)]=function(_0x197d50,_0x2a3e62,_0x2ac272,_0x4f5919){const _0x28e074=_0x510241,_0x27c672=DataManager[_0x28e074(0x3d8)](_0x197d50,_0x2a3e62,_0x2ac272,_0x4f5919)&&Imported['VisuMZ_1_SkillsStatesCore'],_0x3a5b3d=_0x197d50?_0x197d50[_0x28e074(0x211)]:'';if(_0x27c672)Window_SkillList[_0x28e074(0x4d5)][_0x28e074(0x3b5)][_0x28e074(0x303)](this,_0x197d50);Window_Base[_0x28e074(0x4d5)][_0x28e074(0x5ea)][_0x28e074(0x303)](this,_0x197d50,_0x2a3e62,_0x2ac272,_0x4f5919);if(_0x27c672)_0x197d50[_0x28e074(0x211)]=_0x3a5b3d;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x6ca)]=function(){const _0x4af65c=_0x510241;this[_0x4af65c(0x4b6)]={};if(!this[_0x4af65c(0x207)])return;const _0x466836=this['_item'][_0x4af65c(0x357)];if(_0x466836['match'](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){if(_0x4af65c(0x57e)===_0x4af65c(0x57e)){const _0x3df8ce=String(RegExp['$1'])[_0x4af65c(0x436)](/[\r\n]+/);for(const _0x432ad7 of _0x3df8ce){if(_0x432ad7[_0x4af65c(0x6b1)](/(.*):[ ](.*)/i)){const _0x3e2de8=String(RegExp['$1'])['toUpperCase']()['trim'](),_0x56a1f9=String(RegExp['$2'])[_0x4af65c(0x569)]();this[_0x4af65c(0x4b6)][_0x3e2de8]=_0x56a1f9;}}}else{if(this['_itemData'][_0x4af65c(0x37e)][_0x4f4bd6]!==0x0)this['_itemData'][_0x4af65c(0x1ef)]=!![];}}},Window_ShopStatus[_0x510241(0x4d5)]['itemDataFontSize']=function(){const _0x2731f4=_0x510241;return Math[_0x2731f4(0x20e)](0x1,$gameSystem[_0x2731f4(0x617)]()-0x4);},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x65c)]=function(){const _0xe39f38=_0x510241;Window_StatusBase[_0xe39f38(0x4d5)][_0xe39f38(0x65c)][_0xe39f38(0x303)](this),this[_0xe39f38(0x55f)][_0xe39f38(0x222)]=this[_0xe39f38(0x268)]||this[_0xe39f38(0x55f)][_0xe39f38(0x222)],this[_0xe39f38(0x55f)][_0xe39f38(0x2a6)]=this[_0xe39f38(0x5b4)]||this['contents'][_0xe39f38(0x2a6)];},Window_ShopStatus['prototype'][_0x510241(0x5fd)]=function(){const _0x2ee83c=_0x510241;return this['contents'][_0x2ee83c(0x222)]/$gameSystem['mainFontSize']();},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x1e8)]=function(_0x373b11,_0x33f7b0,_0x19428f){const _0x218ebb=_0x510241,_0x2abaa1=ImageManager[_0x218ebb(0x5f3)](_0x218ebb(0x1ec)),_0x409824=ImageManager[_0x218ebb(0x51a)],_0x5c90ef=ImageManager[_0x218ebb(0x62e)],_0x4c4244=_0x373b11%0x10*_0x409824,_0x228310=Math[_0x218ebb(0x409)](_0x373b11/0x10)*_0x5c90ef,_0x1c5622=Math[_0x218ebb(0x5db)](_0x409824*this['fontSizeRatio']()),_0x150940=Math[_0x218ebb(0x5db)](_0x5c90ef*this[_0x218ebb(0x5fd)]());this[_0x218ebb(0x55f)]['blt'](_0x2abaa1,_0x4c4244,_0x228310,_0x409824,_0x5c90ef,_0x33f7b0,_0x19428f,_0x1c5622,_0x150940);},Window_ShopStatus[_0x510241(0x4d5)]['processDrawIcon']=function(_0x2c8d3b,_0x47b01a){const _0xdf9954=_0x510241;_0x47b01a[_0xdf9954(0x2ec)]&&(_0xdf9954(0x1ff)!==_0xdf9954(0x2ce)?this['drawIcon'](_0x2c8d3b,_0x47b01a['x'],_0x47b01a['y']+0x2):_0xf1afd4(_0x162486));_0x47b01a['x']+=Math[_0xdf9954(0x5db)](ImageManager[_0xdf9954(0x51a)]*this[_0xdf9954(0x5fd)]());if(this[_0xdf9954(0x5fd)]()===0x1)_0x47b01a['x']+=0x4;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x36b)]=function(_0x146988,_0x2f80dc,_0x492643,_0x47ce77,_0x141a30,_0x352620){const _0x19e799=_0x510241;_0x146988=_0x146988||'',_0x352620=_0x352620||_0x19e799(0x45b),this[_0x19e799(0x268)]=this['itemDataFontSize'](),this['_resetFontColor']=_0x141a30?ColorManager[_0x19e799(0x638)]():this[_0x19e799(0x55f)][_0x19e799(0x2a6)],_0x2f80dc+=this[_0x19e799(0x499)](),_0x47ce77-=this[_0x19e799(0x499)]()*0x2;const _0x49e47e=this[_0x19e799(0x5d5)](_0x146988);if(_0x352620===_0x19e799(0x35c))_0x19e799(0x2fd)===_0x19e799(0x33c)?_0x411467[_0x19e799(0x4d5)][_0x19e799(0x2a9)][_0x19e799(0x303)](this,_0x40e74e):_0x2f80dc=_0x2f80dc+Math[_0x19e799(0x409)]((_0x47ce77-_0x49e47e[_0x19e799(0x4e1)])/0x2);else _0x352620===_0x19e799(0x4ee)&&(_0x2f80dc=_0x2f80dc+_0x47ce77-_0x49e47e[_0x19e799(0x4e1)]);_0x492643+=(this['lineHeight']()-_0x49e47e[_0x19e799(0x42f)])/0x2,this['drawTextEx'](_0x146988,_0x2f80dc,_0x492643,_0x47ce77),this['_resetFontSize']=undefined,this[_0x19e799(0x5b4)]=undefined,this['resetFontSettings']();},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x555)]=function(_0x127166,_0x25d02a,_0x5018ce){const _0x3ffaa7=_0x510241;if(!DataManager[_0x3ffaa7(0x22f)](this['_item']))return![];const _0x442643=this[_0x3ffaa7(0x5a7)]();this[_0x3ffaa7(0x36b)](_0x442643,_0x127166,_0x25d02a,_0x5018ce,!![]);const _0xe96b6f=this['getItemConsumableText']();return this['drawItemKeyData'](_0xe96b6f,_0x127166,_0x25d02a,_0x5018ce,![],_0x3ffaa7(0x4ee)),this[_0x3ffaa7(0x5ac)](_0x127166,_0x25d02a,_0x5018ce),this[_0x3ffaa7(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x5a7)]=function(){const _0x37af01=_0x510241;return VisuMZ['ItemsEquipsCore'][_0x37af01(0x5b3)][_0x37af01(0x64b)][_0x37af01(0x3a1)];},Window_ShopStatus['prototype'][_0x510241(0x518)]=function(){const _0x215ddd=_0x510241,_0x459152=_0x215ddd(0x6ad);if(this[_0x215ddd(0x4b6)][_0x459152])return this[_0x215ddd(0x4b6)][_0x459152];return this[_0x215ddd(0x2f7)]()?VisuMZ[_0x215ddd(0x3e5)][_0x215ddd(0x5b3)][_0x215ddd(0x64b)][_0x215ddd(0x3b0)]:VisuMZ['ItemsEquipsCore'][_0x215ddd(0x5b3)][_0x215ddd(0x64b)][_0x215ddd(0x503)];},Window_ShopStatus[_0x510241(0x4d5)]['canConsumeItem']=function(){const _0xf976c=_0x510241;if(VisuMZ[_0xf976c(0x3b4)]&&VisuMZ[_0xf976c(0x3b4)][_0xf976c(0x5b3)][_0xf976c(0x54c)][_0xf976c(0x27a)]&&DataManager[_0xf976c(0x651)](this[_0xf976c(0x207)])){if(_0xf976c(0x1e2)!==_0xf976c(0x560))return![];else this[_0xf976c(0x28b)]()?this[_0xf976c(0x631)](!![]):_0x3b485b['prototype'][_0xf976c(0x64e)][_0xf976c(0x303)](this,_0x220edd);}else{if(_0xf976c(0x5e0)!==_0xf976c(0x48d))return this[_0xf976c(0x207)]['consumable'];else{const _0x290d18=_0x4a63c3[_0xf976c(0x6b3)][_0xf976c(0x2a8)];if(!_0x290d18)return;if(!_0x290d18[_0xf976c(0x350)](this[_0xf976c(0x3ed)]()))return![];const _0x42d1bc=_0x290d18[_0xf976c(0x412)]()[this[_0xf976c(0x3ed)]()];if(_0x290d18[_0xf976c(0x578)]()[_0xf976c(0x400)](_0x42d1bc))return![];return!![];;}}},Window_ShopStatus['prototype']['drawItemQuantity']=function(_0x39a4e3,_0x1a367e,_0x4e3766){const _0x554c48=_0x510241;if(!this[_0x554c48(0x542)]()&&!DataManager[_0x554c48(0x22f)](this[_0x554c48(0x207)]))return![];if(DataManager[_0x554c48(0x651)](this[_0x554c48(0x207)])&&!$dataSystem[_0x554c48(0x33d)]){const _0x36f7d3=TextManager[_0x554c48(0x529)];this[_0x554c48(0x36b)](_0x36f7d3,_0x39a4e3,_0x1a367e,_0x4e3766,!![],_0x554c48(0x35c));}else{if(_0x554c48(0x628)==='vrlaZ'){const _0x568d46=TextManager[_0x554c48(0x332)];this[_0x554c48(0x36b)](_0x568d46,_0x39a4e3,_0x1a367e,_0x4e3766,!![]);const _0x2879b7=this[_0x554c48(0x1f3)]();this[_0x554c48(0x36b)](_0x2879b7,_0x39a4e3,_0x1a367e,_0x4e3766,![],_0x554c48(0x4ee));}else this[_0x554c48(0x379)](),this[_0x554c48(0x2ca)]();}return this[_0x554c48(0x5ac)](_0x39a4e3,_0x1a367e,_0x4e3766),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x510241(0x4d5)]['getItemQuantityText']=function(){const _0x32121f=_0x510241,_0x20fc32=_0x32121f(0x60e);if(this[_0x32121f(0x4b6)][_0x20fc32])return this[_0x32121f(0x4b6)][_0x20fc32];const _0x418650=VisuMZ[_0x32121f(0x3e5)]['Settings'][_0x32121f(0x534)][_0x32121f(0x5c9)];return _0x418650[_0x32121f(0x648)]($gameParty[_0x32121f(0x505)](this['_item']));},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x2bf)]=function(_0xc87084,_0x30b787,_0x5df6dc){const _0x5312cd=_0x510241,_0x53ca3c=this[_0x5312cd(0x5b7)]();return this['drawItemKeyData'](_0x53ca3c,_0xc87084,_0x30b787,_0x5df6dc,![],'center'),this[_0x5312cd(0x5ac)](_0xc87084,_0x30b787,_0x5df6dc),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x5b7)]=function(){const _0x2323f7=_0x510241,_0x577dc6=_0x2323f7(0x1fe);if(this['_customItemInfo'][_0x577dc6])return this['_customItemInfo'][_0x577dc6];const _0x142cef=VisuMZ[_0x2323f7(0x3e5)][_0x2323f7(0x5b3)][_0x2323f7(0x64b)],_0x26031d=_0x2323f7(0x53d)[_0x2323f7(0x648)](this['_item']['occasion']);return _0x142cef[_0x26031d];},Window_ShopStatus['prototype'][_0x510241(0x65f)]=function(_0xb05254,_0x222451,_0x430e61){const _0x4dfd79=_0x510241,_0x5df72d=this[_0x4dfd79(0x4f9)]();return this[_0x4dfd79(0x36b)](_0x5df72d,_0xb05254,_0x222451,_0x430e61,![],_0x4dfd79(0x35c)),this[_0x4dfd79(0x5ac)](_0xb05254,_0x222451,_0x430e61),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x4f9)]=function(){const _0x3605c4=_0x510241,_0x5b3bf8=_0x3605c4(0x59d);if(this['_customItemInfo'][_0x5b3bf8])return this[_0x3605c4(0x4b6)][_0x5b3bf8];const _0x38f51c=VisuMZ['ItemsEquipsCore'][_0x3605c4(0x5b3)][_0x3605c4(0x64b)];if(Imported['VisuMZ_1_BattleCore']){if('qjkZH'===_0x3605c4(0x3e4))return this[_0x3605c4(0x1ee)]()<=0x1?_0x51effc[_0x3605c4(0x4d5)]['colSpacing'][_0x3605c4(0x303)](this):_0x264f1f[_0x3605c4(0x3e5)][_0x3605c4(0x370)][_0x3605c4(0x303)](this);else{const _0x38eee9=this[_0x3605c4(0x207)]['note'];if(_0x38eee9[_0x3605c4(0x6b1)](/<TARGET:[ ](.*)>/i)){const _0x3b8f10=String(RegExp['$1']);if(_0x3b8f10['match'](/(\d+) RANDOM ANY/i))return _0x38f51c[_0x3605c4(0x426)][_0x3605c4(0x648)](Number(RegExp['$1']));else{if(_0x3b8f10[_0x3605c4(0x6b1)](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i))return _0x3605c4(0x233)===_0x3605c4(0x6aa)?this[_0x3605c4(0x5f8)]():_0x38f51c[_0x3605c4(0x664)][_0x3605c4(0x648)](Number(RegExp['$1']));else{if(_0x3b8f10[_0x3605c4(0x6b1)](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i))return _0x38f51c[_0x3605c4(0x62b)][_0x3605c4(0x648)](Number(RegExp['$1']));else{if(_0x3b8f10[_0x3605c4(0x6b1)](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i))return _0x38f51c[_0x3605c4(0x323)];}}}}}}const _0x2bfc09=_0x3605c4(0x23a)[_0x3605c4(0x648)](this['_item'][_0x3605c4(0x6bb)]);return _0x38f51c[_0x2bfc09];},Window_ShopStatus['prototype'][_0x510241(0x2bc)]=function(_0x55ef6f,_0x13f786,_0x57a31a){const _0x4052c0=_0x510241,_0x3887fd=this[_0x4052c0(0x408)]();this[_0x4052c0(0x36b)](_0x3887fd,_0x55ef6f,_0x13f786,_0x57a31a,!![]);const _0x1b73d1=this[_0x4052c0(0x4fa)]();return this[_0x4052c0(0x36b)](_0x1b73d1,_0x55ef6f,_0x13f786,_0x57a31a,![],_0x4052c0(0x4ee)),this['drawItemDarkRect'](_0x55ef6f,_0x13f786,_0x57a31a),this[_0x4052c0(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x408)]=function(){const _0x68e6ab=_0x510241;return VisuMZ[_0x68e6ab(0x3e5)]['Settings'][_0x68e6ab(0x64b)][_0x68e6ab(0x605)];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x4fa)]=function(){const _0x9623ad=_0x510241,_0x36e97a=_0x9623ad(0x4b3);if(this[_0x9623ad(0x4b6)][_0x36e97a])return this['_customItemInfo'][_0x36e97a];const _0x253b36=this[_0x9623ad(0x207)][_0x9623ad(0x416)];if(_0x253b36>=0x7d0)return VisuMZ[_0x9623ad(0x3e5)][_0x9623ad(0x5b3)][_0x9623ad(0x64b)][_0x9623ad(0x62c)];else{if(_0x253b36>=0x3e8)return VisuMZ[_0x9623ad(0x3e5)][_0x9623ad(0x5b3)]['StatusWindow']['Speed1000'];else{if(_0x253b36>0x0)return _0x9623ad(0x38e)===_0x9623ad(0x513)?[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7]:VisuMZ[_0x9623ad(0x3e5)][_0x9623ad(0x5b3)][_0x9623ad(0x64b)]['Speed1'];else{if(_0x253b36===0x0){if(_0x9623ad(0x48f)===_0x9623ad(0x48f))return VisuMZ[_0x9623ad(0x3e5)]['Settings'][_0x9623ad(0x64b)]['Speed0'];else{if(!_0x73939a[_0x9623ad(0x5a5)](_0x25458f))return!![];}}else{if(_0x253b36>-0x3e8)return'TuRrG'!=='TuRrG'?_0x3b4641[_0x59f349['id']][_0x9623ad(0x303)](this,_0x2437e3):VisuMZ[_0x9623ad(0x3e5)][_0x9623ad(0x5b3)]['StatusWindow']['SpeedNeg999'];else{if(_0x253b36>-0x7d0)return VisuMZ[_0x9623ad(0x3e5)][_0x9623ad(0x5b3)][_0x9623ad(0x64b)][_0x9623ad(0x642)];else return _0x253b36<=-0x7d0?VisuMZ[_0x9623ad(0x3e5)][_0x9623ad(0x5b3)][_0x9623ad(0x64b)][_0x9623ad(0x596)]:_0x9623ad(0x2c6);}}}}}},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x325)]=function(_0x3536d9,_0x39957f,_0x515f80){const _0x120ea4=_0x510241,_0x4a6f7d=this[_0x120ea4(0x43d)]();this[_0x120ea4(0x36b)](_0x4a6f7d,_0x3536d9,_0x39957f,_0x515f80,!![]);const _0x36d4b9=this[_0x120ea4(0x2dd)]();return this[_0x120ea4(0x36b)](_0x36d4b9,_0x3536d9,_0x39957f,_0x515f80,![],'right'),this['drawItemDarkRect'](_0x3536d9,_0x39957f,_0x515f80),this[_0x120ea4(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x43d)]=function(){const _0x20b8ea=_0x510241;return VisuMZ[_0x20b8ea(0x3e5)][_0x20b8ea(0x5b3)][_0x20b8ea(0x64b)][_0x20b8ea(0x476)];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x2dd)]=function(){const _0x5e6913=_0x510241,_0x2815d1=_0x5e6913(0x495);if(this[_0x5e6913(0x4b6)][_0x2815d1])return this[_0x5e6913(0x4b6)][_0x2815d1];if(Imported[_0x5e6913(0x26f)]){const _0xeaae86=this['_item'][_0x5e6913(0x357)];if(_0xeaae86['match'](/<ALWAYS HIT>/i))return _0x5e6913(0x22b);else{if(_0xeaae86[_0x5e6913(0x6b1)](/<ALWAYS HIT RATE: (\d+)([%％])>/i))return _0x5e6913(0x4eb)[_0x5e6913(0x648)](Number(RegExp['$1']));}}return _0x5e6913(0x4eb)[_0x5e6913(0x648)](this[_0x5e6913(0x207)][_0x5e6913(0x546)]);},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x385)]=function(_0x47f1ff,_0x10011c,_0x31eb89){const _0x40ac22=_0x510241,_0x4f588c=this[_0x40ac22(0x230)]();this[_0x40ac22(0x36b)](_0x4f588c,_0x47f1ff,_0x10011c,_0x31eb89,!![]);const _0x556bfa=this[_0x40ac22(0x53e)]();return this[_0x40ac22(0x36b)](_0x556bfa,_0x47f1ff,_0x10011c,_0x31eb89,![],'right'),this[_0x40ac22(0x5ac)](_0x47f1ff,_0x10011c,_0x31eb89),this[_0x40ac22(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x230)]=function(){const _0x3420e9=_0x510241;return VisuMZ[_0x3420e9(0x3e5)][_0x3420e9(0x5b3)][_0x3420e9(0x64b)][_0x3420e9(0x60a)];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x53e)]=function(){const _0x4cb0e8=_0x510241,_0x4402fa=_0x4cb0e8(0x5fe);if(this[_0x4cb0e8(0x4b6)][_0x4402fa])return this[_0x4cb0e8(0x4b6)][_0x4402fa];const _0x5c1f48=_0x4cb0e8(0x3ac);return _0x5c1f48['format'](this[_0x4cb0e8(0x207)]['repeats']);},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x670)]=function(_0xdd85a9,_0x4b5dab,_0x531be3){const _0x3dbc5f=_0x510241,_0x48293c=this['getItemHitTypeLabel']();this['drawItemKeyData'](_0x48293c,_0xdd85a9,_0x4b5dab,_0x531be3,!![]);const _0x3abafb=this[_0x3dbc5f(0x2d5)]();return this[_0x3dbc5f(0x36b)](_0x3abafb,_0xdd85a9,_0x4b5dab,_0x531be3,![],_0x3dbc5f(0x4ee)),this[_0x3dbc5f(0x5ac)](_0xdd85a9,_0x4b5dab,_0x531be3),this[_0x3dbc5f(0x65c)](),!![];},Window_ShopStatus['prototype'][_0x510241(0x418)]=function(){const _0x176914=_0x510241;return VisuMZ[_0x176914(0x3e5)]['Settings'][_0x176914(0x64b)][_0x176914(0x468)];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x2d5)]=function(){const _0xc0446e=_0x510241,_0xc2d43=_0xc0446e(0x210);if(this[_0xc0446e(0x4b6)][_0xc2d43])return this[_0xc0446e(0x4b6)][_0xc2d43];const _0x57553b=VisuMZ['ItemsEquipsCore'][_0xc0446e(0x5b3)][_0xc0446e(0x64b)],_0x4b87c3=_0xc0446e(0x669)[_0xc0446e(0x648)](this[_0xc0446e(0x207)][_0xc0446e(0x3c7)]);return _0x57553b[_0x4b87c3];},Window_ShopStatus[_0x510241(0x4d5)]['drawItemDamage']=function(_0x16f9e6,_0xf62dc3,_0x27511e){const _0x4cdb69=_0x510241;if(this[_0x4cdb69(0x207)][_0x4cdb69(0x4ab)]['type']<=0x0)return _0xf62dc3;if(this[_0x4cdb69(0x500)](_0x16f9e6,_0xf62dc3,_0x27511e))_0xf62dc3+=this[_0x4cdb69(0x49d)]();if(this[_0x4cdb69(0x69c)](_0x16f9e6,_0xf62dc3,_0x27511e))_0xf62dc3+=this[_0x4cdb69(0x49d)]();return this[_0x4cdb69(0x65c)](),_0xf62dc3;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x500)]=function(_0x384290,_0x324472,_0x587c4e){const _0x31d188=_0x510241,_0x368711=this[_0x31d188(0x20d)]();this['drawItemKeyData'](_0x368711,_0x384290,_0x324472,_0x587c4e,!![]);const _0x4aa7f6=this['getItemDamageElementText']();return this[_0x31d188(0x36b)](_0x4aa7f6,_0x384290,_0x324472,_0x587c4e,![],_0x31d188(0x4ee)),this[_0x31d188(0x5ac)](_0x384290,_0x324472,_0x587c4e),this[_0x31d188(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x20d)]=function(){const _0x518108=_0x510241;return VisuMZ[_0x518108(0x3e5)][_0x518108(0x5b3)]['StatusWindow'][_0x518108(0x3cc)];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x4f7)]=function(){const _0x220014=_0x510241,_0x2cef5c='ELEMENT';if(this[_0x220014(0x4b6)][_0x2cef5c])return this[_0x220014(0x4b6)][_0x2cef5c];if(this['_item']['damage'][_0x220014(0x5de)]<=-0x1){if(_0x220014(0x685)===_0x220014(0x237))_0x5d1fc0=_0x220014(0x57b)[_0x220014(0x648)](_0x5eed3d['id']);else return VisuMZ[_0x220014(0x3e5)][_0x220014(0x5b3)][_0x220014(0x64b)][_0x220014(0x5f6)];}else return this[_0x220014(0x207)][_0x220014(0x4ab)][_0x220014(0x5de)]===0x0?VisuMZ[_0x220014(0x3e5)]['Settings'][_0x220014(0x64b)][_0x220014(0x593)]:$dataSystem[_0x220014(0x25c)][this['_item'][_0x220014(0x4ab)]['elementId']];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x69c)]=function(_0x48c4b6,_0x485d13,_0x3e05e0){const _0xd04ea1=_0x510241,_0x46780a=this[_0xd04ea1(0x572)]();this[_0xd04ea1(0x36b)](_0x46780a,_0x48c4b6,_0x485d13,_0x3e05e0,!![]),this[_0xd04ea1(0x1fd)]();const _0x325ec0=this[_0xd04ea1(0x4f1)](),_0x5462fd=ColorManager[_0xd04ea1(0x279)]([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this['_item']['damage'][_0xd04ea1(0x3ef)]]);return this[_0xd04ea1(0x4c5)](_0x5462fd),this[_0xd04ea1(0x36b)](_0x325ec0,_0x48c4b6,_0x485d13,_0x3e05e0,![],_0xd04ea1(0x4ee)),this[_0xd04ea1(0x5ac)](_0x48c4b6,_0x485d13,_0x3e05e0),this[_0xd04ea1(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x572)]=function(){const _0x1834c1=_0x510241;return Imported[_0x1834c1(0x26f)]&&DataManager['getDamageStyle'](this[_0x1834c1(0x207)])!==_0x1834c1(0x2c8)?this[_0x1834c1(0x64d)]():this[_0x1834c1(0x266)]();},Window_ShopStatus[_0x510241(0x4d5)]['getItemDamageAmountLabelOriginal']=function(){const _0x7c097a=_0x510241,_0x5b0afa=VisuMZ[_0x7c097a(0x3e5)][_0x7c097a(0x5b3)][_0x7c097a(0x64b)],_0x45e88b=_0x7c097a(0x35b)[_0x7c097a(0x648)](this[_0x7c097a(0x207)]['damage'][_0x7c097a(0x3ef)]),_0x302c8d=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this[_0x7c097a(0x207)]['damage'][_0x7c097a(0x3ef)]];return _0x5b0afa[_0x45e88b]['format'](_0x302c8d);},Window_ShopStatus['prototype'][_0x510241(0x1fd)]=function(){const _0x1f5292=_0x510241,_0x383280=$gameActors[_0x1f5292(0x665)](0x1);this['_tempActorA']=JsonEx[_0x1f5292(0x4bd)](_0x383280),this[_0x1f5292(0x558)]=JsonEx[_0x1f5292(0x4bd)](_0x383280);},Window_ShopStatus[_0x510241(0x4d5)]['getItemDamageAmountText']=function(){const _0x33c8f9=_0x510241,_0x2ce8be='DAMAGE\x20MULTIPLIER';if(this[_0x33c8f9(0x4b6)][_0x2ce8be])return this[_0x33c8f9(0x4b6)][_0x2ce8be];return Imported[_0x33c8f9(0x26f)]&&DataManager[_0x33c8f9(0x671)](this[_0x33c8f9(0x207)])!==_0x33c8f9(0x2c8)?this[_0x33c8f9(0x454)]():this[_0x33c8f9(0x459)]();},Window_ShopStatus['prototype'][_0x510241(0x459)]=function(){const _0x319ebb=_0x510241;window['a']=this[_0x319ebb(0x1e3)],window['b']=this[_0x319ebb(0x558)],this[_0x319ebb(0x1e3)][_0x319ebb(0x53b)](!![]),this[_0x319ebb(0x558)][_0x319ebb(0x53b)]([0x3,0x4]['includes'](this[_0x319ebb(0x207)][_0x319ebb(0x4ab)][_0x319ebb(0x3ef)]));let _0x5be62a=this[_0x319ebb(0x207)][_0x319ebb(0x4ab)][_0x319ebb(0x62f)];try{if(_0x319ebb(0x646)!==_0x319ebb(0x646))_0x5a2eda=_0x21777c+_0x21878b-_0x19350c[_0x319ebb(0x4e1)];else{const _0x42c534=Math[_0x319ebb(0x20e)](eval(_0x5be62a),0x0)/window['a'][_0x319ebb(0x5f2)];this[_0x319ebb(0x657)]();if(isNaN(_0x42c534))return _0x319ebb(0x60b)===_0x319ebb(0x595)?_0x319ebb(0x56b)[_0x319ebb(0x648)](_0x27866b(_0xd37fd8['$1'])):'?????';else{if(_0x319ebb(0x538)!=='ZqiML')return _0x319ebb(0x4eb)['format'](Math[_0x319ebb(0x3ba)](_0x42c534*0x64));else{const _0x4a52a3=this[_0x319ebb(0x57c)](_0x55d8fc),_0x5cc6c8=this[_0x319ebb(0x5d5)](_0x146ded)[_0x319ebb(0x4e1)];return _0x5cc6c8<=_0x4a52a3['width']?_0x319ebb(0x291):'icon';}}}}catch(_0x26a1f1){return $gameTemp[_0x319ebb(0x5a8)]()&&(console['log'](_0x319ebb(0x6c0)['format'](this[_0x319ebb(0x207)][_0x319ebb(0x211)])),console['log'](_0x26a1f1)),this[_0x319ebb(0x657)](),_0x319ebb(0x2c6);}},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x657)]=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x2fc)]=function(_0x3fab93,_0x55121f,_0x2b452f){const _0x210179=_0x510241;if(!this[_0x210179(0x675)]())return _0x55121f;if(this[_0x210179(0x2cd)](_0x3fab93,_0x55121f,_0x2b452f))_0x55121f+=this[_0x210179(0x49d)]();if(this['drawItemEffectsMpRecovery'](_0x3fab93,_0x55121f,_0x2b452f))_0x55121f+=this['lineHeight']();if(this[_0x210179(0x250)](_0x3fab93,_0x55121f,_0x2b452f))_0x55121f+=this[_0x210179(0x49d)]();if(this[_0x210179(0x1e5)](_0x3fab93,_0x55121f,_0x2b452f))_0x55121f+=this[_0x210179(0x49d)]();if(this[_0x210179(0x42d)](_0x3fab93,_0x55121f,_0x2b452f))_0x55121f+=this[_0x210179(0x49d)]();if(this[_0x210179(0x282)](_0x3fab93,_0x55121f,_0x2b452f))_0x55121f+=this[_0x210179(0x49d)]();if(this[_0x210179(0x55e)](_0x3fab93,_0x55121f,_0x2b452f))_0x55121f+=this['lineHeight']();if(this[_0x210179(0x3d9)](_0x3fab93,_0x55121f,_0x2b452f))_0x55121f+=this[_0x210179(0x49d)]();if(this['drawItemEffectsRemovedStatesBuffs'](_0x3fab93,_0x55121f,_0x2b452f))_0x55121f+=this[_0x210179(0x49d)]();return this['resetFontSettings'](),_0x55121f;},Window_ShopStatus[_0x510241(0x4d5)]['getItemEffects']=function(){const _0x3f1eee=_0x510241;return this[_0x3f1eee(0x207)][_0x3f1eee(0x63e)];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x675)]=function(){const _0x2c0d33=_0x510241;let _0x52a221=![];this['_itemData']={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0x4ab5f2=this[_0x2c0d33(0x4ba)]();for(const _0x432b58 of _0x4ab5f2){switch(_0x432b58['code']){case Game_Action[_0x2c0d33(0x388)]:this[_0x2c0d33(0x28d)][_0x2c0d33(0x4a2)]+=_0x432b58[_0x2c0d33(0x41c)],this['_itemData'][_0x2c0d33(0x480)]+=_0x432b58[_0x2c0d33(0x66b)],_0x52a221=!![];break;case Game_Action[_0x2c0d33(0x35a)]:this[_0x2c0d33(0x28d)][_0x2c0d33(0x3cb)]+=_0x432b58[_0x2c0d33(0x41c)],this[_0x2c0d33(0x28d)][_0x2c0d33(0x59c)]+=_0x432b58['value2'],_0x52a221=!![];break;case Game_Action[_0x2c0d33(0x6c7)]:this['_itemData'][_0x2c0d33(0x58b)]+=_0x432b58[_0x2c0d33(0x41c)],_0x52a221=!![];break;case Game_Action[_0x2c0d33(0x6c6)]:this['_itemData'][_0x2c0d33(0x216)][_0x2c0d33(0x4df)](_0x432b58[_0x2c0d33(0x30c)]),_0x52a221=!![];break;case Game_Action[_0x2c0d33(0x5c0)]:this[_0x2c0d33(0x28d)][_0x2c0d33(0x2b8)]['push'](_0x432b58[_0x2c0d33(0x30c)]),this['_itemData'][_0x2c0d33(0x235)]=!![],_0x52a221=!![];break;case Game_Action[_0x2c0d33(0x403)]:this[_0x2c0d33(0x28d)][_0x2c0d33(0x37e)][_0x432b58['dataId']]+=0x1,_0x52a221=!![];break;case Game_Action[_0x2c0d33(0x2c1)]:this[_0x2c0d33(0x28d)][_0x2c0d33(0x37e)][_0x432b58[_0x2c0d33(0x30c)]]-=0x1,_0x52a221=!![];break;case Game_Action[_0x2c0d33(0x588)]:this[_0x2c0d33(0x28d)][_0x2c0d33(0x461)][_0x2c0d33(0x4df)](_0x432b58['dataId']),this[_0x2c0d33(0x28d)][_0x2c0d33(0x235)]=!![],_0x52a221=!![];break;case Game_Action[_0x2c0d33(0x415)]:this[_0x2c0d33(0x28d)]['removeDebuff'][_0x2c0d33(0x4df)](_0x432b58[_0x2c0d33(0x30c)]),this[_0x2c0d33(0x28d)][_0x2c0d33(0x235)]=!![],_0x52a221=!![];break;}}if(this[_0x2c0d33(0x28d)]['addState'][_0x2c0d33(0x535)]>0x0)this['_itemData']['addStateBuffChanges']=!![];for(let _0x4b3dc0=0x0;_0x4b3dc0<this[_0x2c0d33(0x28d)][_0x2c0d33(0x37e)][_0x2c0d33(0x535)];_0x4b3dc0++){if(_0x2c0d33(0x601)!=='woAHI')return this['_item'][_0x2c0d33(0x6d1)]*this[_0x2c0d33(0x33a)]();else{if(this[_0x2c0d33(0x28d)][_0x2c0d33(0x37e)][_0x4b3dc0]!==0x0)this[_0x2c0d33(0x28d)][_0x2c0d33(0x1ef)]=!![];}}if(this[_0x2c0d33(0x207)][_0x2c0d33(0x241)]!==0x0){if(_0x2c0d33(0x239)!==_0x2c0d33(0x239)){const _0x19593d=_0x2677ee(_0x5d2519['$1'])||0x1;if(_0x311c83>=_0x19593d)return!![];}else this[_0x2c0d33(0x28d)][_0x2c0d33(0x6b6)]=this[_0x2c0d33(0x207)]['tpGain'],_0x52a221=!![];}const _0x44f9ed=['HP\x20RECOVERY','MP\x20RECOVERY','TP\x20RECOVERY',_0x2c0d33(0x49e),_0x2c0d33(0x66c),'TP\x20DAMAGE',_0x2c0d33(0x31a),'ADDED\x20EFFECTS',_0x2c0d33(0x66d)];for(const _0x92685 of _0x44f9ed){if(this[_0x2c0d33(0x4b6)][_0x92685]){if(_0x2c0d33(0x2c9)!==_0x2c0d33(0x2c9)){const _0x56b1ee=this[_0x2c0d33(0x314)](),_0x579489=this[_0x2c0d33(0x5a2)][_0x2c0d33(0x42f)],_0x293e16=this[_0x2c0d33(0x2ef)]()?0x0:_0x13618d[_0x2c0d33(0x6ac)]-this[_0x2c0d33(0x314)](),_0x1f0215=this[_0x2c0d33(0x5a2)]['y'];return new _0x22b0fd(_0x293e16,_0x1f0215,_0x56b1ee,_0x579489);}else{_0x52a221=!![];break;}}}return _0x52a221;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x2cd)]=function(_0x52eef9,_0x26a373,_0x49b020){const _0xc7f6fd=_0x510241,_0x35a6e1=_0xc7f6fd(0x365);if(this[_0xc7f6fd(0x28d)][_0xc7f6fd(0x4a2)]<=0x0&&this['_itemData'][_0xc7f6fd(0x480)]<=0x0&&!this[_0xc7f6fd(0x4b6)][_0x35a6e1])return![];const _0x3d13a8=this[_0xc7f6fd(0x32d)]();this['drawItemKeyData'](_0x3d13a8,_0x52eef9,_0x26a373,_0x49b020,!![]);const _0x13c85e=this['getItemEffectsHpRecoveryText']();return this[_0xc7f6fd(0x4c5)](ColorManager[_0xc7f6fd(0x279)](0x1)),this[_0xc7f6fd(0x36b)](_0x13c85e,_0x52eef9,_0x26a373,_0x49b020,![],_0xc7f6fd(0x4ee)),this[_0xc7f6fd(0x5ac)](_0x52eef9,_0x26a373,_0x49b020),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x510241(0x4d5)]['getItemEffectsHpRecoveryLabel']=function(){const _0x25447e=_0x510241,_0x46d820=VisuMZ[_0x25447e(0x3e5)][_0x25447e(0x5b3)][_0x25447e(0x64b)][_0x25447e(0x406)];return _0x46d820[_0x25447e(0x648)](TextManager['hp']);},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x5a6)]=function(){const _0x346d28=_0x510241,_0x3c7038=_0x346d28(0x365);if(this['_customItemInfo'][_0x3c7038])return this[_0x346d28(0x4b6)][_0x3c7038];let _0x5291ae='';if(this[_0x346d28(0x28d)][_0x346d28(0x4a2)]>0x0)_0x5291ae+=_0x346d28(0x5b0)['format'](Math[_0x346d28(0x409)](this[_0x346d28(0x28d)][_0x346d28(0x4a2)]*0x64));if(this['_itemData'][_0x346d28(0x4a2)]>0x0&&this[_0x346d28(0x28d)]['flatHP']>0x0)_0x5291ae+='\x20';if(this['_itemData'][_0x346d28(0x480)]>0x0)_0x5291ae+=_0x346d28(0x40d)[_0x346d28(0x648)](this['_itemData'][_0x346d28(0x480)]);return _0x5291ae;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x1e9)]=function(_0x4ccef3,_0x1720a9,_0x3a8119){const _0x6ca74=_0x510241,_0x1e9aa4=_0x6ca74(0x251);if(this[_0x6ca74(0x28d)]['rateMP']<=0x0&&this[_0x6ca74(0x28d)][_0x6ca74(0x59c)]<=0x0&&!this[_0x6ca74(0x4b6)][_0x1e9aa4])return![];const _0xba2b64=this[_0x6ca74(0x353)]();this[_0x6ca74(0x36b)](_0xba2b64,_0x4ccef3,_0x1720a9,_0x3a8119,!![]);const _0x49c3ee=this[_0x6ca74(0x37a)]();return this['changeTextColor'](ColorManager[_0x6ca74(0x279)](0x3)),this['drawItemKeyData'](_0x49c3ee,_0x4ccef3,_0x1720a9,_0x3a8119,![],_0x6ca74(0x4ee)),this[_0x6ca74(0x5ac)](_0x4ccef3,_0x1720a9,_0x3a8119),this[_0x6ca74(0x65c)](),!![];},Window_ShopStatus['prototype'][_0x510241(0x353)]=function(){const _0x3978a7=_0x510241,_0x225b4c=VisuMZ[_0x3978a7(0x3e5)][_0x3978a7(0x5b3)][_0x3978a7(0x64b)]['LabelRecoverMP'];return _0x225b4c['format'](TextManager['mp']);},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x37a)]=function(){const _0x140800=_0x510241,_0x459978=_0x140800(0x251);if(this[_0x140800(0x4b6)][_0x459978])return this[_0x140800(0x4b6)][_0x459978];let _0x1a40c2='';if(this[_0x140800(0x28d)][_0x140800(0x3cb)]>0x0)_0x1a40c2+=_0x140800(0x5b0)['format'](Math[_0x140800(0x409)](this[_0x140800(0x28d)][_0x140800(0x3cb)]*0x64));if(this['_itemData'][_0x140800(0x3cb)]>0x0&&this[_0x140800(0x28d)][_0x140800(0x59c)]>0x0)_0x1a40c2+='\x20';if(this[_0x140800(0x28d)]['flatMP']>0x0)_0x1a40c2+='+%1'[_0x140800(0x648)](this['_itemData'][_0x140800(0x59c)]);return _0x1a40c2;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x250)]=function(_0x2e6c53,_0x316b7c,_0x18155a){const _0xeaaf19=_0x510241,_0x553e01=_0xeaaf19(0x313);if(this[_0xeaaf19(0x28d)][_0xeaaf19(0x58b)]<=0x0&&!this[_0xeaaf19(0x4b6)][_0x553e01])return![];const _0x2de755=this[_0xeaaf19(0x5a4)]();this[_0xeaaf19(0x36b)](_0x2de755,_0x2e6c53,_0x316b7c,_0x18155a,!![]);const _0x1f21c0=this[_0xeaaf19(0x4a9)]();return this[_0xeaaf19(0x4c5)](ColorManager['powerUpColor']()),this[_0xeaaf19(0x36b)](_0x1f21c0,_0x2e6c53,_0x316b7c,_0x18155a,![],_0xeaaf19(0x4ee)),this[_0xeaaf19(0x5ac)](_0x2e6c53,_0x316b7c,_0x18155a),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype']['getItemEffectsTpRecoveryLabel']=function(){const _0x55eaa6=_0x510241,_0x5d43dc=VisuMZ[_0x55eaa6(0x3e5)][_0x55eaa6(0x5b3)][_0x55eaa6(0x64b)][_0x55eaa6(0x603)];return _0x5d43dc['format'](TextManager['tp']);},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x4a9)]=function(){const _0x1d4e25=_0x510241,_0x4de11f=_0x1d4e25(0x313);if(this[_0x1d4e25(0x4b6)][_0x4de11f])return this[_0x1d4e25(0x4b6)][_0x4de11f];let _0x495b44='';return _0x495b44+=_0x1d4e25(0x40d)[_0x1d4e25(0x648)](this['_itemData'][_0x1d4e25(0x58b)]),_0x495b44;},Window_ShopStatus['prototype']['drawItemEffectsSelfTpGain']=function(_0x298499,_0x128b78,_0x367f07){const _0x5fbdff=_0x510241,_0x22bc53=_0x5fbdff(0x31a);if(this['_itemData']['selfTP']===0x0&&!this['_customItemInfo'][_0x22bc53])return![];const _0x1f6273=this[_0x5fbdff(0x5c7)]();this[_0x5fbdff(0x36b)](_0x1f6273,_0x298499,_0x128b78,_0x367f07,!![]);const _0xfcffda=this[_0x5fbdff(0x612)]();if(this[_0x5fbdff(0x28d)][_0x5fbdff(0x6b6)]>0x0)this['changeTextColor'](ColorManager[_0x5fbdff(0x691)]());else{if('Xjunv'!==_0x5fbdff(0x52d)){const _0x118e49=_0x2a2cc2(_0x47567e['$1'])['split'](/[\r\n]+/);for(const _0x17f0ad of _0x118e49){if(_0x17f0ad['match'](/(.*):[ ](.*)/i)){const _0x3c3b84=_0x106183(_0x104bc8['$1'])[_0x5fbdff(0x606)]()[_0x5fbdff(0x569)](),_0x427f0a=_0x48ce9d(_0x599679['$2'])['trim']();this[_0x5fbdff(0x4b6)][_0x3c3b84]=_0x427f0a;}}}else this['changeTextColor'](ColorManager[_0x5fbdff(0x439)]());}return this['drawItemKeyData'](_0xfcffda,_0x298499,_0x128b78,_0x367f07,![],_0x5fbdff(0x4ee)),this[_0x5fbdff(0x5ac)](_0x298499,_0x128b78,_0x367f07),this[_0x5fbdff(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)]['getItemEffectsSelfTpGainLabel']=function(){const _0x37e66d=_0x510241,_0x38cc0c=VisuMZ[_0x37e66d(0x3e5)][_0x37e66d(0x5b3)][_0x37e66d(0x64b)]['LabelSelfGainTP'];return _0x38cc0c['format'](TextManager['tp']);},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x612)]=function(){const _0x54a952=_0x510241,_0x3e58d4=_0x54a952(0x31a);if(this[_0x54a952(0x4b6)][_0x3e58d4])return this[_0x54a952(0x4b6)][_0x3e58d4];let _0x15fe82='';if(this[_0x54a952(0x28d)][_0x54a952(0x6b6)]>0x0){if(_0x54a952(0x4dd)!=='bFvMv')return!![];else _0x15fe82+='+%1'[_0x54a952(0x648)](this[_0x54a952(0x28d)][_0x54a952(0x6b6)]);}else _0x15fe82+='%1'[_0x54a952(0x648)](this[_0x54a952(0x28d)]['selfTP']);return _0x15fe82;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x1e5)]=function(_0xe43ca5,_0x1baf42,_0x41f814){const _0xd03e20=_0x510241,_0x2b6b9d='HP\x20DAMAGE';if(this['_itemData']['rateHP']>=0x0&&this[_0xd03e20(0x28d)][_0xd03e20(0x480)]>=0x0&&!this['_customItemInfo'][_0x2b6b9d])return![];const _0x55332a=this[_0xd03e20(0x52c)]();this[_0xd03e20(0x36b)](_0x55332a,_0xe43ca5,_0x1baf42,_0x41f814,!![]);const _0x3c0234=this['getItemEffectsHpDamageText']();return this[_0xd03e20(0x4c5)](ColorManager['damageColor'](0x0)),this[_0xd03e20(0x36b)](_0x3c0234,_0xe43ca5,_0x1baf42,_0x41f814,![],_0xd03e20(0x4ee)),this['drawItemDarkRect'](_0xe43ca5,_0x1baf42,_0x41f814),this[_0xd03e20(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x52c)]=function(){const _0x4069d8=_0x510241,_0x33ed60=VisuMZ[_0x4069d8(0x3e5)]['Settings'][_0x4069d8(0x64b)][_0x4069d8(0x630)];return _0x33ed60['format'](TextManager['hp']);},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x571)]=function(){const _0x2eee09=_0x510241,_0x5660de=_0x2eee09(0x49e);if(this['_customItemInfo'][_0x5660de])return this[_0x2eee09(0x4b6)][_0x5660de];let _0x536cec='';if(this[_0x2eee09(0x28d)][_0x2eee09(0x4a2)]<0x0)_0x536cec+='%1%'['format'](Math['floor'](this[_0x2eee09(0x28d)][_0x2eee09(0x4a2)]*0x64));if(this['_itemData'][_0x2eee09(0x4a2)]<0x0&&this[_0x2eee09(0x28d)][_0x2eee09(0x480)]<0x0)_0x536cec+='\x20';if(this[_0x2eee09(0x28d)][_0x2eee09(0x480)]<0x0)_0x536cec+='%1'[_0x2eee09(0x648)](this[_0x2eee09(0x28d)]['flatHP']);return _0x536cec;},Window_ShopStatus[_0x510241(0x4d5)]['drawItemEffectsMpDamage']=function(_0x5931f7,_0x147f6a,_0x5914b0){const _0x22fe4d=_0x510241,_0x26a16a=_0x22fe4d(0x66c);if(this[_0x22fe4d(0x28d)][_0x22fe4d(0x3cb)]>=0x0&&this['_itemData'][_0x22fe4d(0x59c)]>=0x0&&!this[_0x22fe4d(0x4b6)][_0x26a16a])return![];const _0x5613bc=this['getItemEffectsMpDamageLabel']();this['drawItemKeyData'](_0x5613bc,_0x5931f7,_0x147f6a,_0x5914b0,!![]);const _0x2976c1=this[_0x22fe4d(0x2a4)]();return this[_0x22fe4d(0x4c5)](ColorManager[_0x22fe4d(0x279)](0x2)),this[_0x22fe4d(0x36b)](_0x2976c1,_0x5931f7,_0x147f6a,_0x5914b0,![],_0x22fe4d(0x4ee)),this[_0x22fe4d(0x5ac)](_0x5931f7,_0x147f6a,_0x5914b0),this[_0x22fe4d(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x4af)]=function(){const _0x17fd17=_0x510241,_0x4f36e7=VisuMZ[_0x17fd17(0x3e5)]['Settings'][_0x17fd17(0x64b)][_0x17fd17(0x414)];return _0x4f36e7[_0x17fd17(0x648)](TextManager['mp']);},Window_ShopStatus[_0x510241(0x4d5)]['getItemEffectsMpDamageText']=function(){const _0x2db72a=_0x510241,_0x3b351a=_0x2db72a(0x66c);if(this[_0x2db72a(0x4b6)][_0x3b351a])return this['_customItemInfo'][_0x3b351a];let _0x7ff26a='';if(this[_0x2db72a(0x28d)][_0x2db72a(0x3cb)]<0x0)_0x7ff26a+=_0x2db72a(0x4eb)['format'](Math[_0x2db72a(0x409)](this['_itemData'][_0x2db72a(0x3cb)]*0x64));if(this[_0x2db72a(0x28d)]['rateMP']<0x0&&this['_itemData']['flatMP']<0x0)_0x7ff26a+='\x20';if(this[_0x2db72a(0x28d)][_0x2db72a(0x59c)]<0x0)_0x7ff26a+='%1'[_0x2db72a(0x648)](this['_itemData']['flatMP']);return _0x7ff26a;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x282)]=function(_0xaa8a5e,_0x423647,_0x27a0f5){const _0xe1c7f6=_0x510241,_0x4f2e71=_0xe1c7f6(0x276);if(this[_0xe1c7f6(0x28d)][_0xe1c7f6(0x58b)]>=0x0&&!this[_0xe1c7f6(0x4b6)][_0x4f2e71])return![];const _0x3d987b=this[_0xe1c7f6(0x375)]();this['drawItemKeyData'](_0x3d987b,_0xaa8a5e,_0x423647,_0x27a0f5,!![]);const _0x2266be=this[_0xe1c7f6(0x2a5)]();return this['changeTextColor'](ColorManager['powerDownColor']()),this[_0xe1c7f6(0x36b)](_0x2266be,_0xaa8a5e,_0x423647,_0x27a0f5,![],'right'),this[_0xe1c7f6(0x5ac)](_0xaa8a5e,_0x423647,_0x27a0f5),this[_0xe1c7f6(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x375)]=function(){const _0x342a8c=_0x510241,_0x3327b5=VisuMZ[_0x342a8c(0x3e5)][_0x342a8c(0x5b3)][_0x342a8c(0x64b)][_0x342a8c(0x4f5)];return _0x3327b5[_0x342a8c(0x648)](TextManager['tp']);},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x2a5)]=function(){const _0x1088ba=_0x510241,_0x504441=_0x1088ba(0x276);if(this[_0x1088ba(0x4b6)][_0x504441])return this['_customItemInfo'][_0x504441];let _0x3ea451='';return _0x3ea451+='%1'['format'](this[_0x1088ba(0x28d)][_0x1088ba(0x58b)]),_0x3ea451;},Window_ShopStatus['prototype']['drawItemEffectsAddedStatesBuffs']=function(_0x472456,_0xefa9b,_0x457fe6){const _0x4d7d34=_0x510241,_0x3ac07d=_0x4d7d34(0x69e);if(!this[_0x4d7d34(0x28d)][_0x4d7d34(0x1ef)]&&!this[_0x4d7d34(0x4b6)][_0x3ac07d])return![];const _0x322743=this[_0x4d7d34(0x288)]();this['drawItemKeyData'](_0x322743,_0x472456,_0xefa9b,_0x457fe6,!![]);const _0x3de10a=this[_0x4d7d34(0x610)]();return this[_0x4d7d34(0x36b)](_0x3de10a,_0x472456,_0xefa9b,_0x457fe6,![],_0x4d7d34(0x4ee)),this['drawItemDarkRect'](_0x472456,_0xefa9b,_0x457fe6),this[_0x4d7d34(0x65c)](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x288)]=function(){const _0x1e63ed=_0x510241;return VisuMZ[_0x1e63ed(0x3e5)][_0x1e63ed(0x5b3)][_0x1e63ed(0x64b)]['LabelApply'];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x610)]=function(){const _0xfed324=_0x510241,_0x301c15='ADDED\x20EFFECTS';if(this[_0xfed324(0x4b6)][_0x301c15])return this[_0xfed324(0x4b6)][_0x301c15];let _0x3a0cce='',_0x3a5ffd=0x0;const _0x32f1f5=0x8;for(const _0xad2a59 of this[_0xfed324(0x28d)][_0xfed324(0x216)]){if(_0xfed324(0x362)===_0xfed324(0x423))return _0xfed324(0x291);else{const _0x27a6f9=$dataStates[_0xad2a59];if(_0x27a6f9&&_0x27a6f9['iconIndex']>0x0){if('WvZWC'===_0xfed324(0x65b)){this['_customItemInfo']={};if(!this[_0xfed324(0x207)])return;const _0x513afd=this['_item'][_0xfed324(0x357)];if(_0x513afd['match'](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x594d46=_0x2cf023(_0x1eca79['$1'])[_0xfed324(0x436)](/[\r\n]+/);for(const _0x15ec5c of _0x594d46){if(_0x15ec5c[_0xfed324(0x6b1)](/(.*):[ ](.*)/i)){const _0x3fe678=_0x26cee5(_0x2ed123['$1'])['toUpperCase']()[_0xfed324(0x569)](),_0x3c2f7c=_0x19ccfa(_0xc88a8f['$2'])[_0xfed324(0x569)]();this[_0xfed324(0x4b6)][_0x3fe678]=_0x3c2f7c;}}}}else{_0x3a0cce+=_0xfed324(0x317)[_0xfed324(0x648)](_0x27a6f9[_0xfed324(0x516)]),_0x3a5ffd++;if(_0x3a5ffd>=_0x32f1f5)return _0x3a0cce;}}}}for(let _0x3f6356=0x0;_0x3f6356<this['_itemData']['changeBuff'][_0xfed324(0x535)];_0x3f6356++){const _0x52d4fe=this[_0xfed324(0x28d)][_0xfed324(0x37e)][_0x3f6356],_0x2b5fd4=Game_BattlerBase[_0xfed324(0x4d5)]['buffIconIndex'](_0x52d4fe,_0x3f6356);if(_0x2b5fd4>0x0){if(_0xfed324(0x6a9)===_0xfed324(0x6a9)){_0x3a0cce+=_0xfed324(0x317)[_0xfed324(0x648)](_0x2b5fd4),_0x3a5ffd++;if(_0x3a5ffd>=_0x32f1f5)return _0x3a0cce;}else{const _0x178329=_0xf72344(_0x4a850c['$1'])['toLowerCase']()['trim'](),_0x41c67f=_0xcc73fd(_0x509e2a['$2'])[_0xfed324(0x569)](),_0x484d83=_0x5a237a(_0x2a0bf2['$3']);let _0x5a66f6=0x0;if([_0xfed324(0x425),'mmp'][_0xfed324(0x400)](_0x178329))_0x5a66f6=0x1;const _0x427902=_0x5b61b5['_paramPlus'][_0x5a66f6]||0x0;switch(_0x41c67f){case'>':return _0x1e8cf7['paramBase'](_0x5a66f6)+_0x427902>_0x484d83;case'>=':return _0x4ed9c4['paramBase'](_0x5a66f6)+_0x427902>=_0x484d83;case _0xfed324(0x51b):return _0x38bb01['paramBase'](_0x5a66f6)+_0x427902===_0x484d83;case'<=':return _0x51914d[_0xfed324(0x6ae)](_0x5a66f6)+_0x427902<=_0x484d83;case'<':return _0x3fe542[_0xfed324(0x6ae)](_0x5a66f6)+_0x427902<_0x484d83;}return![];}}}return _0x3a0cce;},Window_ShopStatus[_0x510241(0x4d5)]['drawItemEffectsRemovedStatesBuffs']=function(_0x45cf98,_0x561ffc,_0x284322){const _0x392a80=_0x510241,_0x14df77=_0x392a80(0x66d);if(!this[_0x392a80(0x28d)][_0x392a80(0x235)]&&!this['_customItemInfo'][_0x14df77])return![];const _0x28f439=this['getItemEffectsRemovedStatesBuffsLabel']();this[_0x392a80(0x36b)](_0x28f439,_0x45cf98,_0x561ffc,_0x284322,!![]);const _0x344f5e=this[_0x392a80(0x64c)]();return this['drawItemKeyData'](_0x344f5e,_0x45cf98,_0x561ffc,_0x284322,![],'right'),this[_0x392a80(0x5ac)](_0x45cf98,_0x561ffc,_0x284322),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x289)]=function(){const _0x157eda=_0x510241;return VisuMZ[_0x157eda(0x3e5)][_0x157eda(0x5b3)][_0x157eda(0x64b)][_0x157eda(0x3de)];},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x64c)]=function(){const _0x35a7c1=_0x510241,_0x1a1798='REMOVED\x20EFFECTS';if(this[_0x35a7c1(0x4b6)][_0x1a1798])return this[_0x35a7c1(0x4b6)][_0x1a1798];let _0x5d7294='',_0x5a75e6=0x0;const _0x1536af=VisuMZ[_0x35a7c1(0x3e5)][_0x35a7c1(0x5b3)]['StatusWindow'][_0x35a7c1(0x6cb)];for(const _0x47816d of this[_0x35a7c1(0x28d)][_0x35a7c1(0x2b8)]){if(_0x35a7c1(0x3c8)===_0x35a7c1(0x29c)){const _0x21c6d4=this[_0x35a7c1(0x678)](_0x6782cb);if(_0x21c6d4[_0x35a7c1(0x6b1)](/\\I\[(\d+)\]/i)){const _0x229dd3=this[_0x35a7c1(0x57c)](_0x3fdb05),_0x53bae6=this[_0x35a7c1(0x5d5)](_0x21c6d4)[_0x35a7c1(0x4e1)];return _0x53bae6<=_0x229dd3[_0x35a7c1(0x4e1)]?'iconText':_0x35a7c1(0x46e);}}else{const _0x57b121=$dataStates[_0x47816d];if(_0x57b121&&_0x57b121['iconIndex']>0x0){_0x5d7294+=_0x35a7c1(0x317)['format'](_0x57b121['iconIndex']),_0x5a75e6++;if(_0x5a75e6>=_0x1536af)return _0x5d7294;}}}for(let _0x38195a=0x0;_0x38195a<this['_itemData']['removeBuff'][_0x35a7c1(0x535)];_0x38195a++){if(_0x35a7c1(0x39e)!==_0x35a7c1(0x682)){const _0x300358=Game_BattlerBase[_0x35a7c1(0x4d5)][_0x35a7c1(0x295)](0x1,_0x38195a);if(_0x300358>0x0){if(_0x35a7c1(0x390)===_0x35a7c1(0x390)){_0x5d7294+=_0x35a7c1(0x317)[_0x35a7c1(0x648)](_0x300358),_0x5a75e6++;if(_0x5a75e6>=_0x1536af)return _0x5d7294;}else _0x4b8cbb=_0x46d9ef(_0x7b8d83['$1']),_0x24cba4=_0x519fcb(_0x5d1041['$2']);}}else this[_0x35a7c1(0x45d)][_0x35a7c1(0x3ad)](this[_0x35a7c1(0x264)]);}for(let _0xa4f27b=0x0;_0xa4f27b<this['_itemData'][_0x35a7c1(0x38b)]['length'];_0xa4f27b++){const _0x146a12=Game_BattlerBase[_0x35a7c1(0x4d5)][_0x35a7c1(0x295)](-0x1,_0xa4f27b);if(_0x146a12>0x0){if(_0x35a7c1(0x464)!==_0x35a7c1(0x464)){const _0x10088f=this['itemLineRect'](_0x52e8aa),_0x5fe237=this[_0x35a7c1(0x5d5)](_0x59dfc6)['width'];return _0x5fe237<=_0x10088f['width']?_0x35a7c1(0x291):'icon';}else{_0x5d7294+='\x5cI[%1]'['format'](_0x146a12),_0x5a75e6++;if(_0x5a75e6>=_0x1536af)return _0x5d7294;}}}return _0x5d7294;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x22c)]=function(_0x231a39,_0x251b0c,_0x52dc13){const _0x2ad6aa=_0x510241;if(this['_item'][_0x2ad6aa(0x357)]['match'](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x597fdd=String(RegExp['$1'])[_0x2ad6aa(0x436)](/[\r\n]+/);for(const _0x525882 of _0x597fdd){if('UuPbh'!==_0x2ad6aa(0x58f)){if(_0x525882[_0x2ad6aa(0x6b1)](/(.*):[ ](.*)/i)){const _0x9394d0=String(RegExp['$1'])[_0x2ad6aa(0x569)](),_0x47ce66=String(RegExp['$2'])[_0x2ad6aa(0x569)]();this[_0x2ad6aa(0x677)](_0x9394d0,_0x47ce66,_0x231a39,_0x251b0c,_0x52dc13),_0x251b0c+=this[_0x2ad6aa(0x49d)]();}}else{if(!this['isEquipCommandAdded']())return;const _0x2045a6=this[_0x2ad6aa(0x32b)](),_0x35f63b=_0x2c9f4e['ItemsEquipsCore'][_0x2ad6aa(0x5b3)]['EquipScene']['CmdIconEquip'],_0x5a5ec6=_0x2045a6==='text'?_0x31a74d['equip2']:'\x5cI[%1]%2'[_0x2ad6aa(0x648)](_0x35f63b,_0x123552['equip2']),_0x225581=this['isEquipCommandEnabled']();this[_0x2ad6aa(0x455)](_0x5a5ec6,_0x2ad6aa(0x3c3),_0x225581);}}}return this[_0x2ad6aa(0x65c)](),_0x251b0c;},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x677)]=function(_0xaff663,_0x41d03a,_0x15fcb7,_0x1b0738,_0x52f148){const _0x52b540=_0x510241;this[_0x52b540(0x36b)](_0xaff663,_0x15fcb7,_0x1b0738,_0x52f148,!![]),this[_0x52b540(0x36b)](_0x41d03a,_0x15fcb7,_0x1b0738,_0x52f148,![],_0x52b540(0x4ee)),this[_0x52b540(0x5ac)](_0x15fcb7,_0x1b0738,_0x52f148),this[_0x52b540(0x65c)]();},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x4db)]=function(){const _0x7e61b=_0x510241;if(!this[_0x7e61b(0x207)])return;const _0x492c05=this[_0x7e61b(0x207)][_0x7e61b(0x357)],_0x1056a6=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x4787a7=_0x492c05[_0x7e61b(0x6b1)](_0x1056a6);if(_0x4787a7){if(_0x7e61b(0x351)===_0x7e61b(0x351))for(const _0x5afe87 of _0x4787a7){_0x5afe87['match'](_0x1056a6);const _0xe38bff=String(RegExp['$1'])['trim']()||'';if(_0xe38bff==='')continue;const _0x4206bb=ImageManager[_0x7e61b(0x331)](_0xe38bff);_0x4206bb[_0x7e61b(0x52a)](this[_0x7e61b(0x44e)][_0x7e61b(0x4a1)](this,_0x4206bb,this[_0x7e61b(0x207)]));}else _0x4fa1e2=_0x22e2d5['keyItem'];}},Window_ShopStatus[_0x510241(0x4d5)][_0x510241(0x44e)]=function(_0x2a13b9,_0x114f79){const _0x42308a=_0x510241;if(this['_item']!==_0x114f79)return;if(!_0x2a13b9)return;if(_0x2a13b9[_0x42308a(0x4e1)]<=0x0||_0x2a13b9[_0x42308a(0x42f)]<=0x0)return;const _0x138605=_0x114f79[_0x42308a(0x357)];let _0x27ca73=_0x42308a(0x484);_0x138605[_0x42308a(0x6b1)](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)&&(_0x42308a(0x59f)!==_0x42308a(0x296)?_0x27ca73=_0x42308a(0x36d):_0x28160f=_0x34d7ba(_0x1d7bf4['$1']));const _0x3eeaf3=_0x27ca73==='background'?this[_0x42308a(0x3d6)]:this[_0x42308a(0x55f)];let _0x28eefb=this[_0x42308a(0x6c2)],_0x30b342=this[_0x42308a(0x364)];if(_0x138605['match'](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)){if(_0x42308a(0x347)===_0x42308a(0x6c9))return _0x48964e[_0x42308a(0x3e5)][_0x42308a(0x5b3)]['StatusWindow'][_0x42308a(0x476)];else _0x28eefb=Number(RegExp['$1']);}if(_0x138605[_0x42308a(0x6b1)](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)){if(_0x42308a(0x34f)!==_0x42308a(0x34f))return;else _0x30b342=Number(RegExp['$1']);}_0x138605['match'](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)&&(_0x28eefb=Number(RegExp['$1']),_0x30b342=Number(RegExp['$2']));const _0x23b1bc=Math[_0x42308a(0x63b)](0x1,_0x28eefb/_0x2a13b9[_0x42308a(0x4e1)],_0x30b342/_0x2a13b9[_0x42308a(0x42f)]);let _0x624344=0x0,_0x5d8ba8=0x0,_0x291789=Math[_0x42308a(0x409)](_0x2a13b9[_0x42308a(0x4e1)]*_0x23b1bc),_0x3918a7=Math['floor'](_0x2a13b9['height']*_0x23b1bc),_0x20951f='center';_0x138605[_0x42308a(0x6b1)](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)&&(_0x20951f=String(RegExp['$1'])[_0x42308a(0x243)]()[_0x42308a(0x569)]());if(_0x20951f===_0x42308a(0x45b))_0x624344=0x0;else{if(_0x20951f===_0x42308a(0x35c)){if(_0x42308a(0x5cc)==='QvQhZ'){const _0x14d5f7=_0x14e14f+_0xad7d65+_0x4809e2*_0x47e8b6;this[_0x42308a(0x5ac)](_0x14d5f7,_0x510e51,_0x9f386e,_0x2b9854);}else _0x624344=Math[_0x42308a(0x3ba)]((this['innerWidth']-_0x291789)/0x2);}else _0x624344=this['innerWidth']-_0x291789;}let _0x3522e9=_0x42308a(0x262);_0x138605[_0x42308a(0x6b1)](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)&&(_0x3522e9=String(RegExp['$1'])['toLowerCase']()[_0x42308a(0x569)]());if(_0x3522e9===_0x42308a(0x562)){if(_0x42308a(0x5c3)!=='BVsqN'){const _0x33f935=_0x2abd93[_0x42308a(0x312)]('['+_0x4fee2f['$1'][_0x42308a(0x6b1)](/\d+/g)+']');for(const _0x5e6dce of _0x33f935){if(_0x4586c6[_0x42308a(0x5a5)](_0x5e6dce))return!![];}return![];}else _0x5d8ba8=0x0;}else _0x3522e9===_0x42308a(0x262)?_0x5d8ba8=Math[_0x42308a(0x3ba)]((this[_0x42308a(0x364)]-_0x3918a7)/0x2):_0x42308a(0x23b)===_0x42308a(0x5e3)?_0x282787[_0x42308a(0x692)](_0x42308a(0x5c8))&&this[_0x42308a(0x59b)]()?this[_0x42308a(0x441)]():this[_0x42308a(0x35f)](_0x17479d[_0x42308a(0x47f)]('up')):_0x5d8ba8=this[_0x42308a(0x364)]-_0x3918a7;if(_0x138605[_0x42308a(0x6b1)](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)){if(_0x42308a(0x5bc)===_0x42308a(0x5d7)){const _0xa7d8a4=_0x42308a(0x365);if(this[_0x42308a(0x28d)][_0x42308a(0x4a2)]<=0x0&&this[_0x42308a(0x28d)][_0x42308a(0x480)]<=0x0&&!this[_0x42308a(0x4b6)][_0xa7d8a4])return![];const _0x3e9427=this[_0x42308a(0x32d)]();this[_0x42308a(0x36b)](_0x3e9427,_0x3b65fa,_0x43bb31,_0x2fcbef,!![]);const _0x3b22ae=this[_0x42308a(0x5a6)]();return this['changeTextColor'](_0x51b496['damageColor'](0x1)),this['drawItemKeyData'](_0x3b22ae,_0x1912ef,_0x50ace0,_0x55bea5,![],_0x42308a(0x4ee)),this[_0x42308a(0x5ac)](_0x160726,_0x1c7735,_0x56244e),this[_0x42308a(0x65c)](),!![];}else _0x624344+=Number(RegExp['$1']);}if(_0x138605['match'](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)){if('JraGz'===_0x42308a(0x292))_0x5d8ba8+=Number(RegExp['$1']);else return _0x53351f[_0x42308a(0x3e5)][_0x42308a(0x4dc)][_0x42308a(0x303)](this);}if(_0x138605['match'](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)){if('uYvAy'===_0x42308a(0x3d0))_0x624344+=Number(RegExp['$1']),_0x5d8ba8+=Number(RegExp['$2']);else{const _0x1a353d=this[_0x42308a(0x4cc)],_0x5120c5=_0x524560[_0x42308a(0x1e7)](),_0x25cbfb=_0x76c726['x']+_0x5c9e5d['floor'](_0x53b97a[_0x42308a(0x4e1)]/0x2)+_0x5120c5;_0x1a353d['x']=_0x1a353d[_0x42308a(0x4e1)]/-0x2+_0x25cbfb,_0x1a353d['y']=_0x5c24b7[_0x42308a(0x409)](_0x97ec20[_0x42308a(0x42f)]/0x2);}}let _0x43cbf7=0xff;if(_0x138605[_0x42308a(0x6b1)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i)){if('GlrSc'===_0x42308a(0x647))_0x43cbf7=Number(RegExp['$1']);else{const _0x1e1f29=_0x591078[_0x42308a(0x312)]('['+_0x37f563['$1']['match'](/\d+/g)+']');for(const _0x5ad698 of _0x1e1f29){if(!_0x82b58e[_0x42308a(0x5a5)](_0x5ad698))return![];}return!![];}}else _0x138605['match'](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)&&(_0x43cbf7=Math[_0x42308a(0x3ba)](Number(RegExp['$1'])*0.01*0xff)['clamp'](0x0,0xff));_0x3eeaf3[_0x42308a(0x1f2)]=_0x43cbf7,_0x3eeaf3[_0x42308a(0x579)](_0x2a13b9,0x0,0x0,_0x2a13b9[_0x42308a(0x4e1)],_0x2a13b9[_0x42308a(0x42f)],_0x624344,_0x5d8ba8,_0x291789,_0x3918a7),_0x3eeaf3[_0x42308a(0x1f2)]=0xff;};