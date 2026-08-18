import { Link } from 'react-router-dom'
import { CONTACT_FORM_HASH } from '../config/routes'
import { gentlemenMenu, ladiesMenu, type Service } from '../data/services'
import { useI18n } from '../hooks/useI18n'

function MenuItem({ item }: { item: Service }) {
  const { locale } = useI18n()

  return (
    <li className="menu-item">
      <p className="menu-item__name">{item.name[locale]}</p>
      <p className="menu-item__price">{item.price[locale]}</p>
    </li>
  )
}

function MenuCategory({ title, items }: { title: string; items: Service[] }) {
  return (
    <section className="menu-cat">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  )
}

export function ServicesPage() {
  const { t, path } = useI18n()

  return (
    <section className="menu-board">
      <div className="wrap menu-board__inner">
        <header className="menu-board__head">
          <h1 className="display">{t.services.title}</h1>
          <p>{t.services.lead}</p>
        </header>
        <MenuCategory title={t.services.ladies} items={ladiesMenu} />
        <MenuCategory title={t.services.gentlemen} items={gentlemenMenu} />
        <Link className="cta cta-board" to={`${path.contact}#${CONTACT_FORM_HASH}`}>
          {t.nav.book}
        </Link>
      </div>
    </section>
  )
}
