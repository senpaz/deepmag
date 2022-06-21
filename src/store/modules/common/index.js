import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state() {
    return {
      infoList: [
        {
          name: 'Обработка заказов',
          link: '/about',
        },
        {
          name: 'Информация о доставке',
          link: '/about',
        },
        {
          name: 'Условия оплаты',
          link: '/about',
        },
        {
          name: 'Условия возврата',
          link: '/about',
        },
        {
          name: 'Условия покупки',
          link: '/about',
        },
        {
          name: 'Конфиденциальность и защита информации',
          link: '/about',
        },
        {
          name: 'Реквизиты',
          link: '/about',
        },
        {
          name: 'Информация по уходу',
          link: '/about',
        },
      ],
      supportList: [
        {
          name: 'Чем мы можем вам помочь?',
          link: '/about',
        },
        {
          name: 'Контакты',
          link: '/about',
        },
        {
          name: 'Таблица размеров',
          link: '/about',
        },
      ],
      serviceList: [
        {
          name: 'Личный кабинет',
          link: '/about',
        },
        {
          name: 'Корзина',
          link: '/cart',
        },
        {
          name: 'История заказов',
          link: '/about',
        },
        {
          name: 'Рассылка новостей',
          link: '/about',
        },
        {
          name: 'Поиск',
          link: '/about',
        },
        {
          name: 'Карта сайта',
          link: '/about',
        },
      ],
    }
  }
}