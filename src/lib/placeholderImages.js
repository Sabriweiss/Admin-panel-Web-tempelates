/**
 * Real photography from Unsplash's free tier (images.unsplash.com, not the
 * paid plus.unsplash.com), sized via their URL params - no download needed.
 * Still stock photos of someone else's place though, not the actual
 * business's space. Swap before launch - see README for sourcing links.
 *
 * Keyed by the same 9 theme names as themes/index.js, so the images switch
 * along with the colors automatically - pick 'restaurant-vegetarian' as
 * ACTIVE_THEME and you get vegetarian-appropriate photos, not the default
 * terracotta-theme food shots.
 */
export const IMAGES = {
  restaurant: {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1666032119084-82351976a922?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1676471932681-45fa972d848a?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1703565426315-4209c2e88eea?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1643101570532-88c8ecc07c1f?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
  'restaurant-vegetarian': {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1615366105533-5b8f3255ea5d?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
  'restaurant-seafood': {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1564948427101-4255ca95c142?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1584300005420-38486f627b07?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1646658102675-e3647eb64d37?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1725393325387-07f0d4951528?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1613293984606-b797e2c48842?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
  cafe: {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1712942851408-6deb69dc4185?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1558966113-a817b7a17095?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1631869404868-2ae8de2e7264?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1697859654606-277cb53ffc6e?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1642315160505-b3dff3a3c8b9?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1645383343280-e99e4e28883c?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
  'cafe-matcha': {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1631308491952-040f80133535?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1704079698754-5e621edb610b?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1566373049939-704ea187ef98?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1565117661210-fd54898de423?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1708573106073-e27e43ec7fda?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
  'cafe-bakery': {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1587241321921-91a834d6d191?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
  bar: {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1657593091045-3927d4967afe?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1583106223774-3313c55721ed?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1772311698901-fe3fa07141be?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1713973724182-0fe31a59b445?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1776775358799-85c61b5fbb9a?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1653587193484-92463e78f7b4?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1712069963996-487725a8fd33?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
  'bar-wine': {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1591257904364-5137d7203d96?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1682071308321-19127e9bd8ba?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1580929753530-ef52238116c5?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1597290282695-edc43d0e7129?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1719996155228-bbac3f5a8843?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1575184560884-5f3ece6e636c?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1556710808-a2bc27a448f2?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
  'bar-tropical': {
    HERO_IMAGE: 'https://images.unsplash.com/photo-1721407435583-8d0ec0c18cc4?w=1600&h=900&fit=crop&auto=format&q=80',
    ABOUT_IMAGE: 'https://images.unsplash.com/photo-1542600176-9d2c4bb4bc1a?w=800&h=1000&fit=crop&auto=format&q=80',
    GALLERY_IMAGES: [
      { src: 'https://images.unsplash.com/photo-1618799805265-4f27cb61ede9?w=900&h=900&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1598994392980-53a7fb033bcc?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1625321643320-5321f48312b2?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1598994341109-6e9076eb99f8?w=600&h=600&fit=crop&auto=format&q=80' },
      { src: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&h=600&fit=crop&auto=format&q=80' },
    ],
  },
}
