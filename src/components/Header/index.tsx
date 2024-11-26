import {
  HeaderContainer,
  HeaderElement,
  HeaderMenu,
  HeaderMenuItem,
  HeaderTitle
} from './styles'

import configIcon from '../../assets/config.png'
import infoIcon from '../../assets/info.png'
import helpIcon from '../../assets/help.png'
import restartIcon from '../../assets/restart.png'

const Header = () => (
  <HeaderElement>
    <div className="container">
      <HeaderContainer>
        <HeaderTitle>
          <h1>ACC</h1>
          <span>assistente de contagem celular</span>
        </HeaderTitle>
        <HeaderMenu>
          <HeaderMenuItem>
            <img src={configIcon} alt="Configurações" />
          </HeaderMenuItem>
          <HeaderMenuItem>
            <img src={infoIcon} alt="Sobre o app" />
          </HeaderMenuItem>
          <HeaderMenuItem>
            <img src={helpIcon} alt="Ajuda" />
          </HeaderMenuItem>
          <HeaderMenuItem color="secondary">
            <img src={restartIcon} alt="Reiniciar contagem" />
          </HeaderMenuItem>
        </HeaderMenu>
      </HeaderContainer>
    </div>
  </HeaderElement>
)

export default Header
