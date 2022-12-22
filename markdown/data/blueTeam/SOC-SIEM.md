---
title: "SOC"
popular: 100
name: "SIEM"
---

# SIEM

- Security information and event management (SIEM), is a security solution that provides the real time logging of events in an environment. The actual purpose for event logging is to detect security threats.

- filter the data that they collect
- create alerts for any suspicious events.

# Log Collection

## Log Agents

- Install software to server
- Gather Log before going to SIEM.
- Parsing
- Log location
- log entity
- buffering
- encryption
- Syslog log transfers UDP is 1024 bytes

## Agentless

- Not install software
- Use the software available in the system.
  - SSH protocol
  - WMI (Windows Management Instrumentation)

# Log Aggregation and Parsing

- Aggregator EPS (event per second), **Effect** to Storage , How much storage do you use?
- Log Aggregator Process (parsing, filtering, and enrichment.)

# Log Storage

- Most important for SIEM storage -> **Effect** Speed
- mySQL (CRUD)
- Indexing [WORM (write once, read many)] **Serach to speed**

# Alerting

- Blacklist
- Whitelist
- Long Tail Log Analysis
