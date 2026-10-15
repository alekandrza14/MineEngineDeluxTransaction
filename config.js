/* Публичные настройки. Пароли, токены и секрет уведомлений сюда не добавлять. */
window.MYENGINE_CONFIG = Object.freeze({
  // Получатель переводов ЮMoney. Номер хранится строкой.
  receiver: "4100116510413222",
  // Контакт поддержки для проверки перевода и ручной активации.
  supportUrl: "mailto:alekandrza14@gmail.com",
  activationText: "Deluxe активируется вручную после проверки перевода. Отправьте ID игрока и номер операции из ЮMoney на alekandrza14@gmail.com.",
  // Форма оплаты на 10 ₽ включена при размещении сайта по HTTPS.
  paymentsEnabled: true,
  // Заполняется локальным мастером tools/setup-developer.html.
  // Хеш скрывает исходные цифры из файла, но не защищает от обхода JS-проверки.
  developerAccess: {
    enabled: false,
    playerId: "",
    salt: "",
    fingerprintSha256: ""
  }
});
