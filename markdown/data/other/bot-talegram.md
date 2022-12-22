---
title: "Bot"
popular: -1
name: "Talegram"
---

# Get started

[Document](https://core.telegram.org/bots/api)

1. Add Channel **@BotFather** [link](https://t.me/BotFather?fbclid=IwAR1vTgPNo3X_j__zWAScE3pbCssLSyxv8XczWXv7NVmTJF7fZ-uM6R-xabY)

   ```
   @BotFather
   ```

2. Send message to @BotFather

   - Create bot

     ```
     /newbot
     ```

   - Choose a username for your bot, It nust end in 'bot'

     ```
     demo_xxxx_bot
     ```

   - Get Token HTTP API

     ```
     Create bot
     ```

3. Create **new channel**
4. Add new bot to new channel **administrators**

# API

## GET method

**https://**api.telegram.org/bot**Token**/sendMessage?chat_id=**new_chanel**&text=**message**

- Token
- new_chanel
- message

```
https://api.telegram.org/bot[Token]/sendMessage?chat_id=[new_chanel]&text=[message]
```

---

Example

```
https://api.telegram.org/bot5900358829:AAFXsgnITfeOskKEQfdlKwykKm06uxbKBj4/sendMessage?chat_id=@demoBot&text=Hello
```

## POST method

- API

  - Token

  **https://**api.telegram.org/bot**Token**/sendMessage

  ```
  https://api.telegram.org/bot[Token]/sendMessage
  ```

- Body

  - new_chanel
  - message

    ```
    {
        "chat_id": "@xxxx",
        "text": "Hello",
    }
    ```

---

Example

```
https://api.telegram.org/bot5900358829:AAFXsgnITfeOskKEQfdlKwykKm06uxbKBj4/sendMessage
```

```
{
    "chat_id": "@testBotnuntipat",
    "text": "<strong>JIRA BOT Notify:&#10;&#13;</strong><pre>-----New Incident Created----- &#10;&#13;Datetime: 18 Dec 2022 05:19:11&#10;&#13;New Incident Number: demo-001&#10;&#13;Project Name: name&#10;&#13;Priority: Medium&#10;&#13;&#10;&#13;&#10;&#13;Issue URL: <a href=\"https://www.google.co.th/?hl=th\">google</a></pre>",
}
```

# Formatting options

- parse_mode

## GET

- HTML

  **https://**api.telegram.org/botToken/sendMessage?chat_id=new_chanel&text=message&**parse_mode=HTML**

- MarkdownV2

  **https://**api.telegram.org/botToken/sendMessage?chat_id=new_chanel&text=message&**parse_mode=MarkdownV2**

## POST

- HTML

  **https://**api.telegram.org/botToken/sendMessage

  body

  ```
  {
  "chat_id": "@testBotnuntipat",
  "text": "",
  "parse_mode": "HTML"
  }
  ```

- MarkdownV2

  **https://**api.telegram.org/botToken/sendMessage?chat_id=new_chanel&text=message&**parse_mode=MarkdownV2**

  body

  ```
  {
    "chat_id": "@testBotnuntipat",
    "text": "",
    "parse_mode": "MarkdownV2"
  }
  ```

## Message syntax

- MarkdownV2

  **message syntax**

        ```
        *bold \*text*
        _italic \*text_
        __underline__
        ~strikethrough~
        ||spoiler||
        *bold _italic bold ~italic bold strikethrough ||italic bold strikethrough spoiler||~ __underline italic bold___ bold*
        [inline URL](http://www.example.com/)
        [inline mention of a user](tg://user?id=123456789)
        `inline fixed-width code`
        ```
        pre-formatted fixed-width code block
        ```
        ```python
        pre-formatted fixed-width code block written in the Python programming language
        ```
        ```

- HTML

        <b>bold</b>, <strong>bold</strong>
        <i>italic</i>, <em>italic</em>
        <u>underline</u>, <ins>underline</ins>
        <s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
        <span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>
        <b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>
        <a href="http://www.example.com/">inline URL</a>
        <a href="tg://user?id=123456789">inline mention of a user</a>
        <code>inline fixed-width code</code>
        <pre>pre-formatted fixed-width code block</pre>
        <pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>

### new line **&#10;&#13** or **%0A**
