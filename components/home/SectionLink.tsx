import HomeSection from 'models/home/HomeSection'
import styles from './SectionLink.module.css'
import { DetailedHTMLProps, LiHTMLAttributes } from 'react'
import cn from 'classnames'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type SectionLinkProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
  section: HomeSection
  textColor?: string
  scrollOffset?: number
}
const SectionLink: React.FC<SectionLinkProps> = (props) => {
  const { section, textColor, children, className, scrollOffset, ...liProps } = props

  return (
    <li className={cn(styles['navigation-item'], className)} {...liProps}>
      <AnchorLink
        href={`#${section}`}
        offset={scrollOffset}
        className={cn(styles['navigation-link'])}
        style={textColor ? { color: textColor } : {}}
      >
        {children}
      </AnchorLink>
    </li>
  )
}

export default SectionLink
