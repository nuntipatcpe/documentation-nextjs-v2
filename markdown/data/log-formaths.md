---
title: "LOG FILE FORMATS"
popular: 0
name: "LOG file formaths"
---

# LOG file formaths

**Documentation**

- [link](https://www.crowdstrike.com/cybersecurity-101/observability/log-file-formats/)
- [link](https://www.graylog.org/post/log-formats-a-complete-guide/)

## Commonly Used Log Formats

- JSON log format

  ```
  {
  "timestamp": "2022-07-29T02:03:45.293Z",
  "message": "User Jane.Doe has logged in",
  "log": {
      "level": "info",
      "file": "auth.c",
      "line": 66,
  },
  "user": {
      "name": "jane.doe",
      "id": 235
  },
  "event": {
      "success": true
  }
  }
  ```

- Windows Event logs

  -Windows Event logs contain data relating to events that occur on the Windows

  ```
  An account was successfully logged on.
  Subject:
      Security ID: SYSTEM
      Account Name: DESKTOP-LLHJ389$
      Account Domain: WORKGROUP
      Logon ID: 0x3E7
  Logon Information:
      Logon Type: 7
      Restricted Admin Mode: -
      Virtual Account: No
      Elevated Token: No
  Impersonation Level: Impersonation
  New Logon:
      Security ID: AzureAD\RandyFranklinSmith
      Account Name: rsmith@montereytechgroup.com
      Account Domain: AzureAD
      Logon ID: 0xFD5113F
      Linked Logon ID: 0xFD5112A
      Network Account Name: -
      Network Account Domain: -
      Logon GUID: {00000000-0000-0000-0000-000000000000}
  Process Information:
      Process ID: 0x30c
      Process Name: C:\Windows\System32\lsass.exe
  Network Information:
      Workstation Name: DESKTOP-LLHJ389
      Source Network Address: -
      Source Port: -
  Detailed Authentication Information:
      Logon Process: Negotiate
      Authentication Package: Negotiate
      Transited Services: -
      Package Name (NTLM only): -
      Key Length: 0
  ```

- **CEF** Common Event Format

  - text-based log format used by security-related devices and applications.
  - CEF logs use UTF-8 encoding and include a common prefix

  ```
  CEF:0|Trend Micro|Deep Security Manager|<DSM version>|600|User Signed In|3|src=10.52.116.160 suser=admin target=admin msg=User signed in from 2001:db8::5
  ```

- **CLF** NCSA Common Log Format

  - log formats used by web servers.
  - Remote host address
  - Remote log name
  - Username
  - Timestamp
  - Request and Protocol Version
  - HTTP Status Code
  - Bytes Sent

  ```
  127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326
  ```

  ```
  user-identifier is the Ident protocol (also known as Identification Protocol, or Ident) of the client.
  ```

  ```
  john is the userid (user identification) of the person that is requesting the document.
  ```

  ```
  [20/Jan/2020:21:32:14 -0700] – is the date, time, and time zone that logs when the request was attempted. By default, it is in the strftime format of %d/%b/%Y:%H:%M:%S %z.
  ```

  ```
  “GET /apache_pb.gif HTTP/1.0” is the client’s request line. GET refers to the method, apache_pb.gif is the resource that was requested, and HTTP/1.0 is the HTTP protocol.
  ```

  ```
  200 is the HTTP status code that was returned to the client after the request. 2xx is a successful response, 3xx is a redirection, 4xx is a client error, and 5xx is a server error.
  ```

  ```
  4782 is the size of the object – measured in bytes – that was returned to the client in question.
  ```

- **ELF** Extended Log Format

  - used by web applications. It is similar to CLF but contains more information and flexibility over which fields are used

  ```
  #Version: 1.0
  #Date: 12-Jan-1996 00:00:00
  #Fields: time cs-method cs-uri
  00:34:23 GET /foo/bar.html
  12:21:16 GET /foo/bar.html
  12:45:52 GET /foo/bar.html
  12:57:34 GET /foo/bar.html
  ```

- **W3C** W3C Extended Log File Format

  - Timestamp
  - Client IP
  - Server IP
  - URI-Stem
  - HTTP Status Code
  - Bytes Sent
  - Bytes Received
  - Time Taken
  - Version

    | Prefix      | means                           |
    | ----------- | ------------------------------- |
    | s-          | Server actions                  |
    | c-          | Client actions                  |
    | sc-         | server-to-client action actions |
    | cs-         | client-to-server action actions |
    | c-ip        | Client IP address               |
    | cs-username | User Name                       |
    | s-sitename  | Service Name                    |

  ```
  #Software: Internet Information Services 6.0
  #Version: 1.0
  #Date: 2001-05-02 17:42:15
  #Fields: time c-ip cs-method cs-uri-stem sc-status cs-version
  17:42:15 172.16.255.255 GET /default.htm 200 HTTP/1.0
  ```

  - [link](https://flylib.com/books/en/1.196.1.86/1/)

- **GELF** Graylog Extended Log Format

  - version string (UTF-8)
  - host string (UTF-8)
  - short_message string (UTF-8)
  - full_message string (UTF-8)
  - timestamp number
  - level number
  - facility string (UTF-8)
  - line number\*\* **optional, deprecated** **error decimal**
  - file string (UTF-8) an **optional, deprecated**
  - \_[additional field] string (UTF-8) or number

    ```
    {
        "version": "1.1",
        "host": "example.org",
        "short_message": "A short message that helps you identify what is going on",
        "full_message": "Backtrace here\n\nmore stuff",
        "timestamp": 1385053862.3072,
        "level": 1,
        "_user_id": 9001,
        "_some_info": "foo",
        "_some_env_var": "bar"
    }
    ```

  - (link)[https://docs.graylog.org/docs/gelf]

## MOST COMMON LOG FILES

- **IIS** Internet Information Server

  ```
  192.168.114.201, -, 03/20/01, 7:55:20, W3SVC2, SALES1, 172.21.13.45, 4502, 163, 3223, 200, 0, GET, /DeptLogo.gif, -,
  ```

  ```
  172.16.255.255, anonymous, 03/20/01, 23:58:11, MSFTPSVC, SALES1, 172.16.255.255, 60, 275, 0, 0, 0, PASS, /Intro.htm, -,
  ```

- **ODBC** Open Database Connectivity
