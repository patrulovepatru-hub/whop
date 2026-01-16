"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Heart, User, Plus } from "lucide-react";
import { formatDistanceToNow } from "@/lib/date-utils";

export default function CommunityClient({ posts, currentUser }: any) {
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Whop SaaS
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Comunidad</h1>
            <p className="text-muted-foreground">
              Comparte ideas y conecta con otros miembros
            </p>
          </div>
          <Button onClick={() => setShowNewPost(!showNewPost)} className="gap-2">
            <Plus className="w-4 h-4" />
            Nuevo Post
          </Button>
        </div>

        {showNewPost && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Crear Nuevo Post</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Título"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Escribe tu mensaje..."
                    className="w-full px-4 py-2 border rounded-md min-h-[120px]"
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Publicar</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowNewPost(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          {posts.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">No hay posts todavía</h3>
                <p className="text-muted-foreground mb-4">
                  Sé el primero en compartir algo con la comunidad
                </p>
                <Button onClick={() => setShowNewPost(true)}>
                  Crear el primer post
                </Button>
              </CardContent>
            </Card>
          ) : (
            posts.map((post: any) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{post.title}</CardTitle>
                      <CardDescription>
                        Por {post.author.name || post.author.email} •{" "}
                        {formatDistanceToNow(new Date(post.createdAt))}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4 whitespace-pre-wrap">{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-primary transition">
                      <Heart className="w-4 h-4" />
                      <span>{post._count.likes}</span>
                    </button>
                    <Link
                      href={`/community/posts/${post.id}`}
                      className="flex items-center gap-1 hover:text-primary transition"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{post._count.comments} comentarios</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
