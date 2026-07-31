/**
 * Full menu lives here so the Menu page and any teaser on Home read from
 * the same data instead of hand-copied items. Keyed by the same 9 theme
 * names as themes/index.js.
 */
export const MENU = {

  'restaurant': [
    {
      category: 'Starters',
      items: [
        { name: 'Charred Octopus', description: 'Smoked paprika, lemon oil', price: '$18' },
        { name: 'Burrata', description: 'Heirloom tomato, basil', price: '$14' },
        { name: 'Soup of the Day', description: 'Ask your server', price: '$11' },
      ],
    },
    {
      category: 'Mains',
      items: [
        { name: 'Braised Short Rib', description: 'Root vegetables, jus', price: '$32' },
        { name: 'Wild Mushroom Risotto', description: 'Parmesan, truffle oil', price: '$24' },
        { name: 'Pan-Seared Halibut', description: 'Beurre blanc, seasonal greens', price: '$34' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Basque Cheesecake', description: 'Salted caramel', price: '$12' },
        { name: 'Dark Chocolate Torte', description: 'Espresso cream', price: '$13' },
      ],
    },
    {
      category: 'Drinks',
      items: [
        { name: 'House Red / White', description: "Ask for tonight's selection", price: '$14' },
        { name: 'Old Fashioned', description: 'Bourbon, bitters, orange', price: '$16' },
      ],
    },
  ],
  'restaurant-vegetarian': [
    {
      category: 'Starters',
      items: [
        { name: 'Charred Cauliflower', description: 'Harissa, tahini', price: '$14' },
        { name: 'Burrata', description: 'Heirloom tomato, basil', price: '$14' },
        { name: 'Soup of the Day', description: 'Ask your server', price: '$11' },
      ],
    },
    {
      category: 'Mains',
      items: [
        { name: 'Wild Mushroom Risotto', description: 'Parmesan, truffle oil', price: '$24' },
        { name: 'Roasted Beet Wellington', description: 'Puff pastry, herb jus', price: '$26' },
        { name: 'Grilled Halloumi Skewers', description: 'Charred vegetables, chimichurri', price: '$22' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Basque Cheesecake', description: 'Salted caramel', price: '$12' },
        { name: 'Dark Chocolate Torte', description: 'Espresso cream', price: '$13' },
      ],
    },
    {
      category: 'Drinks',
      items: [
        { name: 'House Red / White', description: "Ask for tonight's selection", price: '$14' },
        { name: 'Old Fashioned', description: 'Bourbon, bitters, orange', price: '$16' },
      ],
    },
  ],
  'restaurant-seafood': [
    {
      category: 'Starters',
      items: [
        { name: 'Charred Octopus', description: 'Smoked paprika, lemon oil', price: '$18' },
        { name: 'Oysters on the Half Shell', description: 'Mignonette', price: '$16' },
        { name: 'Soup of the Day', description: 'Clam chowder', price: '$12' },
      ],
    },
    {
      category: 'Mains',
      items: [
        { name: 'Pan-Seared Halibut', description: 'Beurre blanc, seasonal greens', price: '$34' },
        { name: 'Lobster Roll', description: 'Brown butter, chives', price: '$28' },
        { name: 'Seared Scallops', description: 'Pea purée, pancetta', price: '$32' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Basque Cheesecake', description: 'Salted caramel', price: '$12' },
        { name: 'Dark Chocolate Torte', description: 'Espresso cream', price: '$13' },
      ],
    },
    {
      category: 'Drinks',
      items: [
        { name: 'House Red / White', description: "Ask for tonight's selection", price: '$14' },
        { name: 'Old Fashioned', description: 'Bourbon, bitters, orange', price: '$16' },
      ],
    },
  ],

  'cafe': [
    {
      category: 'Coffee',
      items: [
        { name: 'House Espresso', description: 'Single origin, rotating', price: '$4' },
        { name: 'Oat Milk Latte', description: 'Housemade oat milk', price: '$5.50' },
        { name: 'Pour Over', description: "Ask what's brewing", price: '$5' },
        { name: 'Cold Brew', description: 'Steeped 18 hours', price: '$4.50' },
      ],
    },
    {
      category: 'Pastries',
      items: [
        { name: 'Almond Croissant', description: 'Baked fresh each morning', price: '$5' },
        { name: 'Sourdough Banana Bread', description: 'Walnuts, brown butter', price: '$4.50' },
        { name: 'Seasonal Scone', description: "Ask what's fresh today", price: '$4' },
      ],
    },
    {
      category: 'Light Bites',
      items: [
        { name: 'Avocado Toast', description: 'Sourdough, chili flake, lemon', price: '$9' },
        { name: 'Breakfast Sandwich', description: 'Egg, cheddar, arugula', price: '$8.50' },
      ],
    },
    {
      category: 'Tea',
      items: [
        { name: 'Matcha Latte', description: 'Ceremonial grade', price: '$5.50' },
        { name: 'Chai Latte', description: 'House-spiced concentrate', price: '$5' },
      ],
    },
  ],
  'cafe-matcha': [
    {
      category: 'Matcha',
      items: [
        { name: 'Ceremonial Matcha', description: 'Whisked to order', price: '$6' },
        { name: 'Matcha Latte', description: 'Housemade oat milk', price: '$5.50' },
        { name: 'Iced Matcha', description: 'Lightly sweetened', price: '$5.50' },
        { name: 'Matcha Affogato', description: 'Vanilla ice cream', price: '$7' },
      ],
    },
    {
      category: 'Tea',
      items: [
        { name: 'Hojicha Latte', description: 'Roasted green tea', price: '$5' },
        { name: 'Genmaicha', description: 'Toasted rice green tea', price: '$4.50' },
      ],
    },
    {
      category: 'Sweets',
      items: [
        { name: 'Matcha Financier', description: 'Brown butter almond cake', price: '$4.50' },
        { name: 'Matcha Soft Serve', description: 'Made in-house', price: '$6' },
      ],
    },
    {
      category: 'Light Bites',
      items: [
        { name: 'Red Bean Mochi', description: 'Chewy rice cake, sweet red bean', price: '$4' },
        { name: 'Rice Cracker Mix', description: 'Savory, lightly seasoned', price: '$3.50' },
      ],
    },
  ],
  'cafe-bakery': [
    {
      category: 'Pastries',
      items: [
        { name: 'Almond Croissant', description: 'Baked fresh each morning', price: '$5' },
        { name: 'Pain au Chocolat', description: 'Dark chocolate batons', price: '$5' },
        { name: 'Seasonal Fruit Tart', description: "Ask what's fresh today", price: '$6.50' },
        { name: 'Palmier', description: 'Caramelized puff pastry', price: '$4' },
      ],
    },
    {
      category: 'Cakes',
      items: [
        { name: 'Basque Cheesecake', description: 'Salted caramel', price: '$7' },
        { name: 'Opera Cake', description: 'Coffee, chocolate ganache', price: '$8' },
      ],
    },
    {
      category: 'Breads',
      items: [
        { name: 'Sourdough Loaf', description: 'Baked daily', price: '$9' },
        { name: 'Baguette', description: 'Classic, crisp crust', price: '$5' },
      ],
    },
    {
      category: 'Coffee',
      items: [
        { name: 'House Espresso', description: 'Single origin, rotating', price: '$4' },
        { name: 'Oat Milk Latte', description: 'Housemade oat milk', price: '$5.50' },
      ],
    },
  ],

  'bar': [
    {
      category: 'Signature Cocktails',
      items: [
        { name: 'Smoked Old Fashioned', description: 'Bourbon, bitters, applewood smoke', price: '$16' },
        { name: 'Amber Sour', description: 'Rye, amaro, egg white, lemon', price: '$15' },
        { name: 'Gilded Negroni', description: 'Gin, sweet vermouth, Campari, gold leaf', price: '$17' },
      ],
    },
    {
      category: 'Classics',
      items: [
        { name: 'Martini', description: 'Gin or vodka, dry or dirty', price: '$14' },
        { name: 'Manhattan', description: 'Rye, sweet vermouth, bitters', price: '$15' },
      ],
    },
    {
      category: 'Late Night Bites',
      items: [
        { name: 'Charcuterie Board', description: 'Cured meats, aged cheese, honey', price: '$22' },
        { name: 'Truffle Fries', description: 'Parmesan, herb aioli', price: '$12' },
      ],
    },
    {
      category: 'Spirits & Wine',
      items: [
        { name: 'Rotating Whiskey List', description: 'Ask your bartender', price: 'Varies' },
        { name: 'By-the-Glass Wine', description: 'Red, white, or orange', price: '$12' },
      ],
    },
  ],
  'bar-wine': [
    {
      category: 'By the Glass',
      items: [
        { name: 'Cabernet Sauvignon', description: 'Full-bodied, oak-aged', price: '$14' },
        { name: 'Pinot Noir', description: 'Light, red fruit forward', price: '$13' },
        { name: 'Sauvignon Blanc', description: 'Crisp, citrus notes', price: '$12' },
        { name: 'Rosé', description: 'Dry, Provence-style', price: '$11' },
      ],
    },
    {
      category: 'By the Bottle',
      items: [
        { name: 'Reserve Cabernet', description: 'Napa Valley', price: '$68' },
        { name: 'Old World Burgundy', description: 'French, limited allocation', price: '$82' },
      ],
    },
    {
      category: 'Small Plates',
      items: [
        { name: 'Cheese & Charcuterie Board', description: 'Chef\'s selection', price: '$24' },
        { name: 'Marinated Olives', description: 'Citrus, herbs', price: '$8' },
        { name: 'Baked Brie', description: 'Honey, walnuts, baguette', price: '$14' },
      ],
    },
    {
      category: 'Dessert Wine',
      items: [
        { name: 'Port', description: 'Ruby, aged 10 years', price: '$10' },
        { name: 'Late Harvest Riesling', description: 'Sweet, floral', price: '$11' },
      ],
    },
  ],
  'bar-tropical': [
    {
      category: 'Signature Tiki',
      items: [
        { name: 'Mai Tai', description: 'Rum, orgeat, lime', price: '$15' },
        { name: 'Painkiller', description: 'Rum, pineapple, coconut, orange', price: '$14' },
        { name: 'Zombie', description: 'Blended rums, falernum, bitters', price: '$16' },
        { name: 'Blue Hawaiian', description: 'Rum, blue curaçao, pineapple', price: '$13' },
      ],
    },
    {
      category: 'Classics',
      items: [
        { name: 'Piña Colada', description: 'Rum, coconut, pineapple', price: '$12' },
        { name: 'Daiquiri', description: 'Rum, lime, simple syrup', price: '$12' },
      ],
    },
    {
      category: 'Bites',
      items: [
        { name: 'Coconut Shrimp', description: 'Sweet chili dipping sauce', price: '$16' },
        { name: 'Plantain Chips', description: 'House-made, lightly salted', price: '$9' },
      ],
    },
    {
      category: 'Non-Alcoholic',
      items: [
        { name: 'Virgin Mai Tai', description: 'Orgeat, lime, no rum', price: '$8' },
        { name: 'Fresh Coconut Water', description: 'Served in the shell', price: '$6' },
      ],
    },
  ],
}

/**
 * Subset of the menu for a Home page teaser. itemsPerCategory optionally
 * caps items per category if you just want a taste, not the whole thing.
 */
export function menuTeaser(themeName, categoryCount = 2, itemsPerCategory) {
  const categories = MENU[themeName].slice(0, categoryCount)
  if (!itemsPerCategory) return categories
  return categories.map((c) => ({ ...c, items: c.items.slice(0, itemsPerCategory) }))
}

/**
 * Pick specific categories by name instead of just the first N.
 */
export function menuByCategories(themeName, categoryNames, itemsPerCategory) {
  const categories = categoryNames
    .map((name) => MENU[themeName].find((c) => c.category === name))
    .filter(Boolean)
  if (!itemsPerCategory) return categories
  return categories.map((c) => ({ ...c, items: c.items.slice(0, itemsPerCategory) }))
}
