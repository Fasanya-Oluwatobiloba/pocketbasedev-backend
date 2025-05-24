FROM alpine:latest

WORKDIR /app

# Copy PocketBase binary and your data
COPY pocketbase /app/pocketbase
COPY pb_data /app/pb_data
COPY start.sh /app/start.sh

# Make sure start.sh and pocketbase are executable
RUN chmod +x /app/start.sh /app/pocketbase

EXPOSE 10000

CMD ["/app/start.sh"]
